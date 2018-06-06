---
order: 30
title: Accessing the Cumulocity platform
layout: redirect
---

In order to reach the virtual machine via DNS name (edge.domain.com) alias should be added.

On Linux machines, add the following entry to `/etc/hosts`:

> 192.168.56.101 domain.com server.domain.com edge.domain.com

On Windows machines,  add the same entry to `C:\Windows\System32\Drivers\etc\hosts`.

Ping the "edge.domain.com" to verify it. If the ping is successful the DNS resolution is working properly.

Once the machine is in running state, open a web browser and enter the address:

> https://edge.domain.com

Use the following credentials:

**Username**: edge
**Password**: C8Y#2018

> **Info**: The service starts on VM start. It may take some time until the service is fully loaded.

The Cumulocity platform will open:

<img src="/guides/images/users-guide7cockpit/Cockpit_WelcomeScreen.png" name="Welcome screen" style="width:100%;"/>

In order to log into the management tenant which is used for management/configuration use the following credentials:

**Username**: management/admin
**Password**: C8Y#2018

> **Info**: The Smartrule feature works with the ‘edge’ tenant as configured on the Apama server (if used from the management tenant it won’t trigger alarms).

