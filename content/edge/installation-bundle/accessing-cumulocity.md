---
weight: 50
title: Accessing the Cumulocity IoT platform
layout: redirect
---

### Configuring the access via domain name

The Cumulocity IoT platform is accessible with the domain name provided as part of the post installation script.

There are two ways to configure the accessibility with domain names:

* Add an entry of domain name and IP mapping in DNS servers. <br>
OR
* [Add the alias](#add-alias) in order to reach the virtual machine through the domain name provided during configuration. This needs to be performed on each client host on which Cumulocity IoT Edge is accessed.

>**Info:** The first option is always preferable so that Cumulocity IoT Edge is reachable in LAN.

<a name="add-alias"></a>
#### Adding the alias

On Linux machines, add the following entry to */etc/hosts*:

```text
<IP address> <domain_name>
```

Use the IP address provided during [network configuration](/edge/installation#configuration). For example, the default value for Hyper-V is 192.168.66.10.

On Windows machines,  add the same entry to *C:\Windows\System32\drivers\etc\hosts*.

Ping the &#60;domain_name> to verify it.

```shell
[admin@server ~]$ ping <domain_name>
```

If the ping is successful the DNS resolution is working properly.

Using &#60;domain_name>, Cumulocity IoT Edge can be connected from the host operating system (operating system which is hosting the Edge VM instance). If you want to connect Edge VM within your LAN, which is outside of the host operating system, you need to do following:

* Port forwarding must be enabled as mentioned in [Setting up the environment](/edge/installation#setting-up-the-environment).
* The DNS entry needs to be added in your LAN’s DNS server/Name server. The DNS entry must have the domain name (provided in post_installation step) and the IP address of the host operating system. Note that this is not the Edge VM IP.

### Entering Cumulocity IoT

#### Entering Cumulocity IoT via domain name

Enter the following:

```http
https://<domain_name>
```

The Cumulocity IoT Login screen appears.

<img src="/images/edge/edge-login-with-domain.png" name="Login screen"/>

Next steps: Before you proceed further, you must first log in as **sysadmin** user and change the password. See [Changing the sysadmin password](/edge/installation/#changing_the_sysadmin_password).

#### Entering Cumulocity IoT via IP

Enter the following:

```http
https://<IP_Address_Of_Edge>;
```
Next steps: Before you proceed further, you must first log in as **sysadmin** user and change the password. The **sysadmin** user account is used for unlocking the tenant admin user. See [Changing the sysadmin password](/edge/installation/#changing_the_sysadmin_password).
