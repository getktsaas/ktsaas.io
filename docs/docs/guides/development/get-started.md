# Get Started

Welcome to one of the highest velocity boilerplate starter communities on earth.

The community on Github will combined with ktSaaS maintainers help you ramp up quickly on your new project using the ktSaaS boilerplate.

## Boilerplate Access

Access to the [boilerplate repo](https://github.com/getktsaas/ktsaas-starter) will be granted via Github via your purchase email. If you have any issues accepting the invite, contact [buy@ktsaas.io](mailto:buy@ktsaas.io).

## Clone the Repo

Use the `Use this template` button in Github to start a new repo from the `ktsaas-starter` [repo](https://github.com/getktsaas/ktsaas-starter).

Alternatively, clone the `ktsaas-starter` [repo](https://github.com/getktsaas/ktsaas-starter) and copy the contents to a new repo within your organization.

```
git clone git@github.com:getktsaas/ktsaas-starter.git
```

## Activate Hermit

[Hermit](https://cashapp.github.io/hermit/) is used to setup local dependencies including Gradle and Java.

Activate it manually or setup the [Hermit Shell Hooks](https://cashapp.github.io/hermit/docs/usage/shell/) or Hermit IntelliJ Plugin for automatic setup.

```shell
. ./bin/activate-hermit
```

## Building

Run a clean build of the starter repo. It should take 4-6 minutes on first clone.

```
gradle clean shadowJar
```

## Run the Application

Now that the repo has built successfully, you can run the application and test it locally.

### Local Test Database

The starter relies on an existing MySQL8 database running accessible on port 3306 (in development).

Start one using Docker.

```
docker run -d --rm --name "$(basename "$(pwd)")-mysql-8" -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql:8 --sql-mode=""
```

### From the command line

```
gradle clean runShadow
```

### From IntelliJ

In the Gradle tab, navigate to `tasks/application` and find the `runShadow` task.

Double click to run it or right click to run in debug mode.

### Confirm starter is running

The service in development runs on port 6080.

Open your browser and try out the Misk admin dashboard at localhost:6080/v2/_admin/.

Or use curl from your Terminal.

```
curl --data '{"message": "hello"}' -H 'Content-Type: application/json' http://localhost:6080/ping
```
