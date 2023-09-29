# Application Database

The KtSaaS starter uses MySQL8 as the application database.

Within the application, migrations and code is written against [SqlDelight](https://cashapp.github.io/sqldelight/) generated Kotlin fixtures, though you can easily switch to a different ORM if you prefer.

Migrations are performed automatically on deploy by the [Flyway](https://flywaydb.org/) sidecar Docker container.

When necessary, manual commands can be run through the MySQL CLI for the database Docker container within the Portainer dashboard.
