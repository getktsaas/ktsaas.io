# Application Backend

KtSaaS uses [Misk](https://cashapp.github.io/misk/) as the application framework.


Misk is built and maintained by Cash App and is used to power hundreds of high scale microservices internally and at other companies including Square, Faire, and others.

Misk leverages industry standard libraries under the hood including:

- Network: Jetty, OkHttp
- Direct Injection: Guice
- I/O: Okio
- Database: Hikari, SqlDelight, Hibernate, jOOQ

Misk also includes AWS implementations for key abstractions like job queue, feature, and events.

Note: Within the KtSaaS starter, Misk usage is optimized around a self-hosted or basic VPS deploy environment, not AWS. 

Extending the KtSaaS starter to work with AWS is possible and straight forward given the existing Misk libraries to interface with a full AWS cloud environment.

See the [Misk docs](https://cashapp.github.io/misk/) and repo for more information and examples.

## Admin Dashboard

Misk ships with a powerful admin dashboard so you can easily monitor and control your application from any browser.

Find it at `/_admin/` wherever your application is hosted.

![See all the YAML and JVM config. Misk admin dashboard Config tab.](/docs/img/misk-admin-dashboard-config.png)
![Like a built-in Postman: the Misk admin dashboard Web Actions tab.](/docs/img/misk-admin-dashboard-web-actions.png)

