# Buildkite

Buildkite is a more flexible and cheaper hybrid CI/CD solution than Github Actions. It's cheaper since you end up hosting the build agent on your own infrastructure, instead of renting time on Microsoft's expensive VMs. It's more flexible likely from Buildkite being solely focused on CI/CD vs Github Actions being just another one of the many products that Github builds for developers and organizations.

Start by creating a new Buildkite account.

You'll then need to get your Buildkite agent token, and analytics token (optionally) to include in the `.env` file for the deploy before.

TODO...


# Scale CI/CD

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

