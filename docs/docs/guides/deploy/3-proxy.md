# Proxy

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
