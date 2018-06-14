---
order: 50
title: Accessing the Cumulocity platform
layout: redirect
---

In order to reach the virtual machine via the domain URL provided during configuration, the alias must be added.

On Linux machines, add the following entry to `/etc/hosts`:

	192.168.56.101 or <domain url>

On Windows machines,  add the same entry to `C:\Windows\System32\Drivers\etc\hosts`.

Ping the `<domain_url>` to verify it. 

	$ ping <domain_url>

If the ping is successful the DNS resolution is working properly.

Once the machine is in running state, open a web browser and enter the address:

	https://<domain url>

Use the following credentials:

	Username: <tenant admin username> (as provided during post-installation)
	Password: <tenant admin password> (as provided during post-installation)

>**Info**: Cumulocity Edge needs several minutes to start. Then all services should be up and running and you can login to the application.

After successfully logging in, the Cumulocity platform will open:

<img src="/guides/images/users-guide/cockpit/Cockpit_WelcomeScreen.png" name="Welcome screen" style="width:100%;"/>

When you log into Cumulocity for the first time, you will be taken to the Cockpit application where the **Welcome** page initially opens up.

For details on the Welcome page, refer to Getting Started > [Accessing and login into the Cumulocity platform](guides/users-guide/overview#accessing-cumulocity-platform) in the User guide.



