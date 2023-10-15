# Deploy

This guide will help you get your service deployed in a production environment on an Ubuntu VM. It assumes [necessary dependencies](/docs/guides/architecture/vm-dependencies) have been installed, permissions configured, and your project repo has been cloned to disk at `/home/<username>/<project>`.

All commands in Deploy section of documentation assume starting from the root of your project git repo, unless otherwise stated.

Generally, it will be easier to deploy initially in this order given architectural dependencies. For example, the frontend network for the App Docker Stack must be created already before the proxy is started.

