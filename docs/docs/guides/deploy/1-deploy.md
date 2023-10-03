# Deploy

Your application works locally, you're now ready to launch.

This guide will help you get your service deployed in a production environment on an Ubuntu VM. It assumes [necessary dependencies](/docs/guides/architecture/vm-dependencies) have been installed, permissions configured, and your project repo has been cloned to disk at `/home/<username>/<project>`.

All commands below assume starting from the root of your project git repo.

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

