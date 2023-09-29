# Authentication

KtSaaS uses industry standard authentication techonlogies to secure your application.

To ensure security, KtSaaS uses the open source auth sidecar [Authelia](https://www.authelia.com). OSS and built by dedicated security experts, Authelia can be audited and trusted for your SaaS authentication needs.

Authelia has a dedicated Docker container for the Authelia application and one for the MySQL database which tracks sessions and login information.

The current KtSaaS boilerplate uses a YAML file for defining usernames and passwords. Future updates will support automating this manual process. 

Authelia also supports integrating with your own LDAP service which is a better fit for established, high scale applications.

