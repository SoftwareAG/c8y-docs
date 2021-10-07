---
weight: 40
title: Notifications
layout: redirect
---

The real-time notifications allow for receiving almost immediately outputs from statements. They are available on URL *"/cep/notifications"*, the usage is described in a separate [document](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Real-time-notification-API).

Required role: ROLE\_NOTIFICATION\_READ

### The subscription channel name format

The subscription channel contains the name of the module in which the real-time statement is defined and the name of the real-time statement itself. It has the following structure:

    /<<moduleName>>/<<statementName>>

For example, to subscribe on notifications from a statement "overHeatAlarms" in the module "alarms", the subscription channel should be the following string:

    /alarms/overHeatAlarms
