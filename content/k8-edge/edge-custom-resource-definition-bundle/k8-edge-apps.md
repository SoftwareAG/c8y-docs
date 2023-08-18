---
weight: 50
title: Applications
layout: redirect
---

Applications spec allows specifying the applications to skip deploying. For example, Apama Streaming Analytics application. If not specified, the Operator deploys all default applications, which include the Administration, Cockpit, Device Management and Apama Streaming Analytics applications.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
name | Yes | String |  | Name of the Cumulocity application. Allowed value is streaming-analytics
disable | No | boolean | false | Specify 'true' to not deploy or undeploy the application. <p>**Note:** You can configure to not deploy or undeploy (if already deployed) the streaming-analytics application only, as the rest of the applications are essential for the functioning of the Cumulocity IoT Platform.