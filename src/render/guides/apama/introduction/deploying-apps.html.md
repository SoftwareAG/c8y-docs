---
order: 20
title: Deploying applications
layout: redirect
---

### Deploying Apama applications to Cumulocity

To be able to upload custom EPL rules as applications to Cumulocity you need to be subscribed to one of the Apama applications provided in Cumulocity, see also the list of available [applications](/guides/reference/applications#application-names) in the Reference guide.

#### Deploying Apama applications as a single .mon file

When you are ready to deploy to Cumulocity, upload the .mon file containing your application through the **Own applications** page in the Administration application. For details, refer to [Administration > Managing applications](/guides/users-guide/administration#managing-applications).

When the EPL is deployed to Cumulocity, each .mon file is assigned a unique package name. This prevents conflicts when multiple modules are uploaded. For this reason, you should not specify a 'package' statement in the .mon files. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single .mon file.

The only non-Cumulocity bundles that your EPL is able to use are the Time Format bundles and the HTTP Client - JSON with generic request/response event definitions.

