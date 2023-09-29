# Application Frontend

KtSaaS supports any frontend stack. Feel free to bring your own or leverage the default lightweight Kotlin-native stack.

## kotlinx HTML & Hotwire & Tailwind CSS

The admin dashboard and example UI for the starter uses a lightweight stack:

- kotlinx.html DSL: [Docs](https://github.com/Kotlin/kotlinx.html), [IntelliJ plugin](https://plugins.jetbrains.com/plugin/12205-html-to-kotlinx-html)
- Hotwire: [Docs](https://hotwired.dev/)
- Tailwind CSS: [Docs](https://tailwindcss.com/), [UI Component Library](https://tailwindui.com/)

Their docs are thorough and have generally been sufficient to quickly build up wireframes, then make them interactive, and ship them quickly to customers.

The [Misk](https://github.com/cashapp/misk) repo also has some included UI examples in their sample projects.

## Bring Your Own Framework

The KtSaaS starter in many ways is a standard Java backend. Any web framework can easily be supported.

Use the following steps to get started with any standard Javascript web framework (React, Vue...etc).

1. Create your Javascript NPM project in a directory in your repo
2. Add the build directory to your JVM classpath by adding the following to `starter/service/build.gradle.kts`

  ```kotlin
  src.main.resources {
    add(...)

    TODO
  }
  ```
  
3. Install a `StaticResourceAction`` to route resource requests to your JS artificats in the classpath.
4. Install a `WebProxyAction`` to route requests to your local development server, you should only install this in the `development` deployment environment.

