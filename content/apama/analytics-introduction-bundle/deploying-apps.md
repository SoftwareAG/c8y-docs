---
weight: 20
title: Deploying applications
layout: redirect
---

### Deploying Apama applications to Cumulocity

To be able to upload single .mon files to Cumulocity, your tenant needs to be subscribed to both Apama applications provided in Cumulocity. See [applications](/guides/reference/applications#application-names) in the Reference guide for details.

#### Deploying Apama applications as a single .mon file with the “Apama-epl” application

The “Apama-epl” application provides an interface for uploading and deploying EPL apps (.mon files), as well as interactively editing new or pre-existing EPL apps. Any user on the tenant wishing to use this application will need to be a **CEP Manager**. See [managing permissions](/guides/users-guide/administration/#managing-permissions).

When the EPL is deployed to Cumulocity, each .mon file is assigned a unique package name. This prevents conflicts when multiple modules are uploaded. For this reason, you should not specify a 'package' statement in the .mon files. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single .mon file.

The only non-Cumulocity bundles that your EPL is able to use are the Time Format bundles and the HTTP Client - JSON with generic request/response event definitions.

When any EPL app signals a runtime error, this will be raised as an alarm. Runtime errors include uncaught exceptions, as well as any explicit logging of warnings and errors that your EPL app chooses to do. Health issues that relate to the Apama runtime in general will also be raised as alarms.

For more detailed diagnostics of the Apama runtime and any active EPL apps, you can look at the logs for the “apama-ctrl” microservice. See [log files](/guides/users-guide/administration#managing-applications) for more details. However, some familiarity with Apama is necessary to get the most out of an Apama log file.


>**Side note** Be aware that the EPL editor makes use of a standard web component. It provides many generic developer functions, some of which are not relevant to EPL, including but not limited to Quick Fix and Show Hover.

