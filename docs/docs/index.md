# Welcome to KtSaaS.

## Getting Started

KtSaaS Starter is a repo which you can use to quickly build a new SaaS business using high-level abstractions, pre-wired DevOps, all in Kotlin, so you can stay very productive.

Follow this guide to get started.

Don't have access to the starter repo? [Get started here](/).

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
