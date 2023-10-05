# Deploy

This guide will help you get your service deployed in a production environment on an Ubuntu VM. It assumes [necessary dependencies](/docs/guides/architecture/vm-dependencies) have been installed, permissions configured, and your project repo has been cloned to disk at `/home/<username>/<project>`.

All commands below assume starting from the root of your project git repo.

Generally, it will be easier to deploy initially in this order given architectural dependencies. For example, the frontend network for the App Docker Stack must be created already before the proxy is started.


## App

Instructions below will assume setting up a production environment but the steps are the same if you are setting up staging or another environment.

### .env

Configuration is done via environment specific .env files which the deploy script combines together into a final .env file used in the Docker Stack commands.

```
cd starter/infra
cp secrets.env.template production.secrets.env
vim production.secrets.env
```

Now, fill in any configurable fields in `production.secrets.env`. This includes changing from the default `secure-password` to the randomly generated ones you set in your Secrets and YAML files in the next step. They must match for your application to work.

Note, the passwords set in the .env file will need to match those in other places including secrets and configuration YAML files.

### Secrets

Authelia, the Misk backend service, and their respective databases take configuration and secrets from the filesystem.

Start by copying to a new `secrets` directory from the `templates` directory. Then generate random passwords to set for secrets, and confirm that database and other configuration matches your expectations.

```
$ openssl rand -base64 32 > ./starter/infra/${DEPLOY_ENV}/authelia/secrets/SECRET_FILE
```

If you want to initially test that deploys work as expected, you can skip ahead and the default password of `secure-password` will be used for all database authentication and other cases. The only exception is that Authelia will require a working SMTP password and authentication to boot to ensure it can send password reset emails.

### Authelia

```
cd starter/infra/production/authelia
cp -r templates secrets
```

`authelia/config/configuration.yml` includes configuration of the Authelia authentication service. Please review it to ensure it has the correct domain, settings, and passwords for your app.

`authelia/config/users_database.yml` is a file based authentication backend. Passwords are stored as hashes as well as metadata such as the user's authentication groups. Use the following command to hash initial passwords for new users, they can reset their password to set a new one and Authelia will update the file.

```
docker run authelia/authelia:latest authelia hash-password -- 'password'
```

Any changes to add new groups will require mirrored updates to your service code `AccessModule.kt` and other places.

### Service

```
cd starter/infra/production/starter
cp -r templates secrets
```

Note that the `starter/secrets/db/starter-001_config.yaml` must be updated to have the service database username and password.

### Start Up

The app Docker Stack YAML is found in `starter/infra/docker-stack.yaml`.

Use the deploy script as follows from the repo root directory:

```
$ ./ci/deploy -n starter -d . -c <full-git-commit-hash>
```

The deploy script will automatically check in updated files like `production.env` which provide for easy debugging in your git commit history of when a deploy was done and to which version.

The long git commit hash is used to version Docker images built by the `./ci/ci` script during builds. If you haven't already run a build, you can do both as follows.

```
$ ./ci/ci -n starter -t

...

See https://docs.gradle.org/7.6.1/userguide/command_line_interface.html#sec:command_line_warnings

BUILD SUCCESSFUL in 28s

...

Docker Build starter:6377e7ed2d66ae4125ad078852ae54c9fc37d53f
[+] Building 47.3s (5/14)                                        docker:default
 => [internal] load build definition from Dockerfile                       7.4s

...

$ ./ci/deploy -n starter -d .

...

Creating secret infra_secret-authelia-session
Creating secret infra_secret-authelia-storage-encryption-key
Creating secret infra_secret-authelia-storage-password
Creating secret infra_secret-service-db-config
Creating secret infra_secret-service-minio-access-key-id
Creating secret infra_secret-service-minio-secret-access-key
Creating secret infra_secret-authelia-SMTP-password
Creating secret infra_secret-authelia-jwt
Creating config infra_config-mysql-service
Creating config infra_config-mysql-authelia
Creating service production-starter_flyway-service
Creating service production-starter_mysql-authelia
Creating service production-starter_mysql-service
Creating service production-starter_service-api
Creating service production-starter_service-authelia
Creating service production-starter_service-jobs
Done!

```

Note: this deploy starts the application, jobs cluster, database, database migrator, Authelia, and Authelia database. On first boot, it will take time for databases to be initialized, migrated, before the service hosts will come online.

By default, the deploy script will pull latest from master which may result in a new HEAD git commit sha. In this case, you'll want to provide the SHA shown in the `./ci/ci` logs as in the previous code example.

The deploy script also works from within Buildkite for one-click deploys from your browser. Configure that using the steps in the Buildkite section.

## Proxy

Copy config and .env templates, update and fill in variables accordingly.

```
cd docker/proxy
cp -r config-template config
cp .env.template .env
```

When you run `./start.sh` the first time, it will fail since the shared application network doesn't exist. 

The network name should be according to this pattern `<environment>-<service name>_network-<frontend or backend>`, ie. `production-starter_network-frontend`. Create the missing network with the following command.

```
docker network create <network name from error> --driver overlay --attachable
```

Re-run `./start.sh` and you'll see the following output.

```
Creating network proxy_network
Creating service proxy_proxy
```

## Portainer

Copy config and .env templates, update and fill in variables accordingly.

```
cd docker/portainer
cp .env.template .env
```

For a default Docker installation, the `DOCKER_VOLUMES_DIR` should be set to `/var/lib/docker/volumes`.

Start Portainer by running `./start.sh`. If successful, you should see the following output.

```
Creating network portainer_agent_network
Creating service portainer_portainer
Creating service portainer_agent
```

Within 30 minutes of first boot of Portainer, you need to go to the web UI and setup the initial admin user.




## Buildkite

TODO
