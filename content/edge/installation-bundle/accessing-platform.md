---
weight: 25
title: Accessing the Edge appliance
layout: redirect
aliases:
  - /edge/installation/#accessing-cumulocity

---

### Configuring the access through domain name

The {{< product-c8y-iot >}} Edge appliance is accessible using the domain name configured as part of the installation.

There are two ways to configure the accessibility with the domain names:

* Add an entry of the domain name and IP mapping in the DNS servers. <br>
OR
* [Add the alias](#add-alias) to access the Edge appliance through the domain name provided during installation. This needs to be performed on each client host on which the Edge appliance is accessed.

>**Info:** The first option is always preferable so that the Edge appliance is accessible over LAN.

<a name="add-alias"></a>
#### Adding the alias

On Linux machines, add the following entry to */etc/hosts*:

```text
<IP address> <domain_name>
```

Use the IP address provided during the network configuration. For example, the default value for Hyper-V is 192.168.66.10.

On Windows machines, add the same entry to *C:\Windows\System32\drivers\etc\hosts*.

Ping the &#60;domain_name> to verify it.

```shell
[admin@iot-edge-server ~]$ ping <domain_name>
```

If the ping is successful, the DNS resolution is working properly.

Using &#60;domain_name>, the Edge appliance can be connected from the host operating system (operating system which is hosting the Edge appliance). If you want to connect the Edge appliance within your LAN, which is outside of the host operating system, you need to do following:

* On VMware platforms, port forwarding must be enabled as mentioned in [Port forwarding on a VMware platform](/edge/setting-up-edge/#vmware-port-forwarding).
* The DNS entry must be added in your LAN's DNS server/Name server. The DNS entry must have the domain name and the IP address of the host operating system. Note that this is not the Edge appliance IP.

### Accessing the Edge appliance through domain name

Enter the URL in the browser:

```http
https://<domain_name>
```

The Edge appliance login screen appears. Log in with your credentials created during the installation.

<img src="/images/edge/edge-login-with-domain.png" name="Login screen"/>
