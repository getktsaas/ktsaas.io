# Get Started

Welcome to one of the highest velocity boilerplate starter communities on earth.

The community on Github will combined with ktSaaS maintainers help you ramp up quickly on your new project using the ktSaaS boilerplate.

## Boilerplate Access

Access to the [boilerplate repo](https://github.com/getktsaas/ktsaas-starter) will be granted via Github via your purchase email. If you have any issues accepting the invite, contact [buy@ktsaas.io](mailto:buy@ktsaas.io).

## Clone the Repo

```
git clone git@github.com:getktsaas/ktsaas-starter.git
```

## Activate Hermit

Before building the project, you need to activate the [Hermit](https://cashapp.github.io/hermit/)
environment, unless you are using
the [Hermit Shell Hooks](https://cashapp.github.io/hermit/docs/usage/shell/) or Hermit IntelliJ Plugin.

```shell
. ./bin/activate-hermit
```

## Building
Build starter:

```
$ ./gradlew clean shadowJar
```

## Run the Service

### From the command line

```
$ ./gradlew clean runShadow
```

### From IntelliJ
In the gradle tab, navigate to 'tasks/application' and find the 'runShadow' task

Double click to run it or right click to run in debug mode


### Confirm starter works with curl

```
$ curl --data '{"message": "hello"}' -H 'Content-Type: application/json' http://localhost:8080/ping
```
