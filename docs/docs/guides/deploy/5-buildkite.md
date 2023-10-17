# Buildkite

Buildkite is a more flexible and cheaper hybrid CI/CD solution than Github Actions. It's cheaper since you end up hosting the build agent on your own infrastructure, instead of renting time on Microsoft's expensive VMs. It's more flexible likely from Buildkite being solely focused on CI/CD vs Github Actions being just another one of the many products that Github builds for developers and organizations.

Start by creating a new Buildkite account.

Use the below steps to configure your self-hosted Buildkite agents.

Then, start them with the following command. Note that the `start.sh` script takes an argument which is the prefix of the Docker config file to handle separate agent swarms by Buildkite queue (see further description of queues below).

```
$ cd docker/buildkite
$ ./start.sh deploy

ubuntu@docker-003:~/ktsaas-starter/docker/buildkite$ ./start.sh deploy
deploy
[+] Building 49.4s (2/3)                                         docker:default
 => [internal] load .dockerignore                                         29.3s
 => => transferring context: 2B                                            0.0s
 => [internal] load build definition from Dockerfile                      23.0s
 => => transferring dockerfile: 301B                                       0.0s
 => [internal] load metadata for docker.io/buildkite/agent:edge-ubuntu-2  18.7s
```

Note: the start/stop script includes commented out WIP functionality for handling testing databases with isolated networks which will be included in an upcoming release.

## Buildkite Agent Directory  

The Buildkite agent runs all CI tasks within a specific directory that you can configure. In the below example, `/var/lib/buildkite-agent` is used.

Configure it in the `docker/buildkite/.all.env` file.

```
BUILDKITE_AGENT_DIR=/var/lib/buildkite-agent
```

## Buildkite Agent Config

Create a Buildkite Agent config file with the name `buildkite-agent.cfg` in your agent directory (ie. `/var/lib/buildkite-agent`).

Copy the file from `docker/buildkite/buildkite-agent.cfg.template` or from the Buildkite docs.

### Agent Token

Edit the `buildkite-agent.cfg` to set your Buildkite agent token from your Buildkite account.

```
# The token from your Buildkite "Agents" page
token="<buildkite token>"
```

### Agent Name

Edit the `buildkite-agent.cfg` to set a prefix for the VM host. This is especially useful if you have Buildkite agents running on many VMs and want a way to identify from the Buildkite dashboard where a given agent is running. If you are only running Buildkite agents on a single host, you can remove the prefix entirely.

```
# The name of the agent
name="<agent vm prefix>_%hostname_%spawn"
```

### Agent Queue Tag

Edit the `buildkite-agent.cfg` to choose which queue the agent is handling jobs for. If commented out or left empty, the agent will serve the `"default"` queue. For cases like deploys where they must be run on your primary VM, you'll want to ensure that your Buildkite pipeline configuration and agent both have a the same corresponding specific queue like `"deploy"`.

```
# Tags for the agent (default is "queue=default")
tags="queue=deploy"
```

## Git SSH Keys

If your repo is private, then the Buildkite agents need a valid set of SSH keys with configured git access.

Copy your SSH keys into the Buildkite agent directory `/var/lib/buildkite-agent/ssh-keys/`.

## Hermit Directory

Hermit is used to setup build dependencies for the starter repo including Java and Gradle.

Using the same directory across all agents speeds up builds by using a common shared dependency cache.

Configure it in the `docker/buildkite/.all.env` file.

```
HERMIT_STATE_DIR=/var/lib/hermit
```

## Deploy Directory

To let a Buildkite agent handle deploys, it needs to have access to your primary code directory on the VM so it can have access to all the secrets, configuration, and DB migrations which you manually configured in setting up the application deploy.

Configure it in the `docker/buildkite/.all.env` file.

```
APPLICATION_DEPLOY_DIR=/home/ubuntu/ktsaas-starter
```

## Buildkite Analytics

Analytics is an optional feature you can use which requires a separate token from your Buildkite dashboard. The Analytics feature tracks your test suite performance over time to highlight long running or flakey tests.

Configure it in the `docker/buildkite/.all.env` file.

```
BUILDKITE_ANALYTICS_TOKEN=<analytics-token-from-buildkite>
```

## Testing Database

At this time, the testing database configuration is still WIP and is commented out for the default Buildkite configuration and in the `.env.template`. It will be fixed in a future update to the KtSaaS boilerplate.

```
MYSQL_ROOT_PASSWORD=
MYSQL_USER=
MYSQL_PASSWORD=
```

# Scaling CI/CD

Once your team scales, usually your CI/CD will need to scale.

Engineers can put up with waiting for PR CI builds. They will not tolerate waiting 40 minutes for time on your lone CI agent.

With Github Actions, this simply means scaling your budget.

With Buildkite, scaling CI/CD means more agents running in parallel.

The included Docker Swarm configuration makes this easy. Tune the scale and Docker Swarm will make it so.

## Dedicated CI/CD VM

It is highly recommended that beyond 1 Buildkite agent, you setup a dedicated VM for CI/CD.

In our experience, on a shared VM with all your application architecture plus 10 Buildkite agents running, there is significant risk that bursts of CI/CD compute can take down your whole VM. In testing and production, this has taken down entire applications.

The solution to this is to setup a separate VM for all non-deploy CI/CD tasks. 

- Deploys? Deploy queue. Application VM. 1 Agent.
- PR test suite? Default queue. CI/CD VM. 10 Agents.

This setup means that new PRs will almost always have agents available to run the sharded test suite.

The deploy queue has to remain on the Application VM so that it can interact with your primary Docker Swarm.

The default queue for all other CI/CD tasks does not (& for security reasons should not) have access to your primary application VM and Docker Swarm.

