---
weight: 10
title: Configuration
layout: redirect
---

After a successful installation, you can configure the Edge appliance using the GUI and the REST APIs. If you are configuring using the GUI, you must log in to the **management** tenant as an administrator.

### Authentication

If you are using the REST APIs for configuring the Edge appliance, most endpoints require authentication except `/edge/tasks/latest-installation` and `/edge/configuration/domain`. Cumulocity IoT Edge supports basic authentication and the authentication is performed by the **management** tenant. For a successful authentication, you must prefix **management** to the user name. The authorization header is formed as `Basic <Base64(<tenantID>/<c8yuser>:<password>)>`. For instance, if your tenantID, username and password are **management**, **admin** and **password** respectively, you can generate the Base64 string with the following command:

	$ echo -n management/admin:password | base64

Your authorization header would look like:

	Authorization: Basic bWFuYWdlbWVudC9hZG1pbjpwYXNzd29yZA==