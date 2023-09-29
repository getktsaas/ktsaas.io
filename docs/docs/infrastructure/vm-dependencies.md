# Provisioning a new VM

You've setup a fresh Ubuntu VM. What's left to do before your new KtSaaS app can go live?

Follow the following steps to provision necessary dependencies.

## Dependencies


### Update existing packages

```
apt update && apt upgrade
```

### Docker

Use the latest [install instructions](https://docs.docker.com/engine/install/ubuntu/) for Ubuntu from Docker's website.

### git & gh

Git and the Github CLI make it easy to pull your latest application code down and deploy. Skip this if you are using a different setup for source control.


