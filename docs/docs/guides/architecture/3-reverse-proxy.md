# Reverse Proxy

KtSaaS uses a microservice architecture with separate Docker Swarm containers running for your application, authentication, database, and other components.

The reverse proxy handles routing between all of these components.

The reverse proxy is also responsible for all traffic ingress, enforcing requests to authenticated endpoints hit the auth sidecar first, and locking down access to the database for example.

KtSaaS uses [Traefik](https://doc.traefik.io/traefik/) as reverse proxy. See their [docs](https://doc.traefik.io/traefik/) to understand all the knobs and customization that is possible.

<!-- Below will cover configuring and starting the included basic Traefik setup. -->

