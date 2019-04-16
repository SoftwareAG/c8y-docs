---
order: 40
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

```plaintext
<IP address> <domain_name>
```

Use the IP address provided during [network configuration](/guides/edge/installation#configuration). The default value for the Virtual Box is 192.168.56.120.

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

#### Entering Cumulocity via domain name

Enter the following:

```http
https://<domain_name>
```

The Cumulocity Login screen opens up.

<img src="/guides/images/users-guide/overview-login.png" name="Login screen"/>

In the Login screen, log in with the following credentials:

* Username: &#60;tenant admin username> (as provided during post-installation)
* Password: &#60;tenant admin password> (as provided during post-installation)

#### Entering Cumulocity via IP

Enter the following:

```http
https://<IP_Address_Of_Edge>;
```

The Cumulocity login screen opens up.

<img src="/guides/images/edge/edge-login-with-tenantid.png" name="Login screen"/>

In the Login screen, log in with the following credentials:

* Username: edge/&#60;tenant admin username> (as provided during post-installation)
* Password: &#60;tenant admin password> (as provided during post-installation)

<br>
>**Info**: Cumulocity IoT Edge needs several minutes to start. Then all services should be up and running and you can login to the application.

After successfully logging in, the Cumulocity platform will open:

<img src="/guides/images/users-guide/Cockpit/cockpit-home-screen.png" name="Home screen"/>

When you log into Cumulocity for the first time, you will be taken to the [Cockpit](/guides/users-guide/cockpit#overview) application where the **Home screen** initially opens up.


