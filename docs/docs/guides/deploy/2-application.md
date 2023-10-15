# Application

Instructions below will assume setting up a production environment but the steps are the same if you are setting up staging or another environment.

### .env

Configuration is done via environment specific .env files which the deploy script combines together into a final .env file used in the Docker Stack commands.

```
cd starter/infra
cp secrets.env.template production.secrets.env
vim production.secrets.env
```

Now, fill in any configurable fields in `production.secrets.env`. This includes changing from the default `secure-password12345` to the randomly generated ones you set in your Secrets and YAML files in the next step. They must match for your application to work.

Note, the passwords set in the .env file will need to match those in other places including secrets and configuration YAML files.

### Secrets

Authelia, the Misk backend service, and their respective databases take configuration and secrets from the filesystem.

Start by copying to a new `secrets` directory from the `templates` directory. Then generate random passwords to set for secrets, and confirm that database and other configuration matches your expectations.

```
$ openssl rand -base64 32 > ./starter/infra/${DEPLOY_ENV}/authelia/secrets/SECRET_FILE
```

If you want to initially test that deploys work as expected, you can skip ahead and the default password of `secure-password12345` will be used for all database authentication and other cases. The only exception is that Authelia will require a working SMTP password and authentication to boot to ensure it can send password reset emails.

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

### Authelia Config

After initial deploy, you will need to refresh the Authelia config which is stored in the respective Docker volume.

```
$ ./starter/infra/scripts/refresh_authelia_config.sh
```

Any changes to files in the `starter/infra/<deploy-env>/authelia/config` will require the above script to be re-run.
