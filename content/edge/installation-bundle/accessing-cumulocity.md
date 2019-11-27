---
weight: 50
title: Accessing the Cumulocity platform
layout: redirect
---

### Configuring the access via domain name

The Cumulocity platform is accessible with the domain name provided as part of the post installation script. 

There are two ways to configure the accessibility with domain names:

* Add an entry of domain name and IP mapping in DNS servers. <br>
OR
* [Add the alias](#add-alias) in order to reach the virtual machine via the domain name provided during configuration. This needs to done on each client host on which Cumulocity IoT Edge is accessed.

>**Info**: The first option is always preferable so that Cumulocity IoT Edge is reachable in LAN.

#### <a name="add-alias"></a>Adding the alias

On Linux machines, add the following entry to */etc/hosts*:

```text
<IP address> <domain_name>
```

Use the IP address provided during [network configuration](/guides/edge/installation#configuration). For example, the default value for Hyper-V is 192.168.66.10.

On Windows machines,  add the same entry to *C:\Windows\System32\Drivers\etc\hosts*.

Ping the &#60;domain_name> to verify it. 

```shell
$ ping <domain_name>
```

If the ping is successful the DNS resolution is working properly.

Using &#60;domain_name>, Cumulocity IoT Edge can be connected from the host operating system (operating system which is hosting the Edge VM instance). If you want to connect Edge VM within your LAN, which is outside of the host operating system, you need to do following:

* Port forwarding must be enabled as mentioned in [Setting up the environment](/guides/edge/installation#setting-up-the-environment).
* The DNS entry needs to be added in your LAN’s DNS server/Name server. The DNS entry must have the domain name (provided in post_installation step) and the IP address of the host operating system. Note that this is not the Edge VM IP.

### Entering Cumulocity

Once the machine is in running state, open a web browser.

>**Important**: You must first login as **sysadmin** user (password = sysadmin-pass) and change the password for **sysadmin** user. The **sysadmin** user account is used for unlocking the tenant admin user. To change the password, see [User options and settings](/guides/users-guide/getting-started/#user-settings).

#### Entering Cumulocity via domain name

Enter the following:

```http
https://<domain_name>
```

The Cumulocity Login screen appears.

<img src="/guides/images/edge/edge-login-with-domain.png" name="Login screen"/>

In the Login screen, log in with the tenant admin credentials provided during post-installation.

#### Entering Cumulocity via IP

Enter the following:

```http
https://<IP_Address_Of_Edge>;
```

The Cumulocity login screen appears.

<img src="/guides/images/edge/edge-login-with-tenantid.png" name="Login screen"/>

In the Login screen, log in with the tenant admin credentials provided during post-installation.
<br>

>**Important**: If you have to log in as **edgeadmin** user, log in to the management tenant using the URL *https://&#60;Edge&#95;VM&#95;IP&#95;Address>/apps/administration/index.html#/configuration*.<br>
>- Tenant: management<br>
>- Username: edgeadmin<br>
>- Password: Will be the same as the Edge tenant admin password provided during the post-installation process

When you log into Cumulocity for the first time, you will be taken to the [Cockpit](/guides/users-guide/cockpit#overview) application where the **Home screen** initially opens up.

>**Info**: You cannot access the Cockpit and Device Management application as **edgeadmin** user.