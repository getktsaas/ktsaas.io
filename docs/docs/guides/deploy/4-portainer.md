# Portainer

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

If you forget, you'll need to manually delete the Docker containers and re-deploy.
