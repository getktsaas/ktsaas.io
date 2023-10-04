# Reverse Proxy

KtSaaS uses a microservice architecture with separate Docker Swarm containers running for your application, authentication, database, and other components.

The reverse proxy handles routing between all of these components.

The reverse proxy is also responsible for all traffic ingress, enforcing requests to authenticated endpoints hit the auth sidecar first, and locking down access to the database for example.

KtSaaS uses [Traefik](https://doc.traefik.io/traefik/) as reverse proxy. See their [docs](https://doc.traefik.io/traefik/) to understand all the knobs and customization that is possible.

For first boot, see the [deploy docs](../deploy/1-deploy.md).

Below will cover some expected configuration for the included Traefik setup.

## Routes

Routes are mostly configured using labels on the Docker Stack YAML file. 

Some routes are configured manually in `docker/proxy/config/routes.yaml`, including configuration of dashboard access.

For more on how to configure routers and services, see Traefik [docs](https://doc.traefik.io/traefik/routing/overview/).

## Dashboard Access

Dashboard access is granted using Traefik's built in `Basic Auth`. 

Users and Passwords are set in the `docker/proxy/config/routes.yaml` file.

Passwords are stored as hashes created using the `htpasswd` CLI. See Traefik [docs](https://doc.traefik.io/traefik/middlewares/http/basicauth/#basicauth) for more.

```
$ htpasswd -nb demo demo-password

demo:$apr1$ULl6JJVG$H.eimzfHia8eem0zpG0../
```

![Traefik Dashboard](/docs/img/traefik-dashboard.png)

