# VM Dependencies

KtSaaS is built to run well on an Ubuntu VM (either self-hosted or on an affordable VPS).

Assuming you've setup a fresh Ubuntu VM, what's left to do before your new KtSaaS app can go live?

Follow the following steps to provision necessary dependencies.

Then clone your project repo, and follow the rest of the steps in the deploy guide.

## Dependencies


### Update existing packages

```
apt update && apt upgrade
```

### Docker

Use the latest [install instructions](https://docs.docker.com/engine/install/ubuntu/) for Ubuntu from Docker's website.

### git & gh

Git and the [Github CLI](https://github.com/cli/cli/blob/trunk/docs/install_linux.md) make it easy to pull your latest application code down and deploy. Skip this if you are using a different setup for source control.

```
apt install git
```
Follow the latest install instructions from the [Github CLI docs](https://github.com/cli/cli/blob/trunk/docs/install_linux.md).

