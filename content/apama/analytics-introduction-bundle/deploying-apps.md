---
weight: 20
title: Deploying applications
layout: redirect
---

### Deploying Apama applications to Cumulocity

To be able to upload single .mon files to Cumulocity, your tenant needs to be subscribed to both Apama applications provided in Cumulocity. See [applications](/guides/reference/applications#application-names) in the Reference guide for details.

#### Deploying Apama applications as a single .mon file with the “Apama-epl” application

The **Apama-epl** application provides an interface for uploading EPL apps (.mon files), as well as interactively editing new or pre-existing EPL apps.

When the EPL is deployed to Cumulocity, each .mon file is assigned a unique package name. This prevents conflicts when multiple modules are uploaded. For this reason, you should not specify a 'package' statement in the .mon files. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single .mon file.

The only non-Cumulocity bundles that your EPL is able to use are the Time Format bundles and the HTTP Client - JSON with generic request/response event definitions.

