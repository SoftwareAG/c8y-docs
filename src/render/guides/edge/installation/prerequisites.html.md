---
order: 20
title: Requirements
layout: redirect
---

### Installation requirements

To install Cumulocity IoT Edge, the following is required:

|Item|Details|
|:---|:---|
|**Hypervisor**|- Virtualbox version 5.2.8, to be downloaded from [https://www.virtualbox.org](https://www.virtualbox.org/wiki/Download_Old_Builds_5_2)<br> - VMWare ESXi 6.5 or later
|**Edge VM image**|To be downloaded from the [SAG Empower portal](https://empower.softwareag.com), based on the target hypervisor, i.e. ova for VirtualBox / ovf for ESXi|
|**Cumulocity license file**|To request the license file for Cumulocity, please contact the logistics team for your region:<br> - North and South America: LogisSrvus@softwareagusa.com <br>- All Other Regions: LogisticsServiceCenterGER@softwareag.com <br>In the email, you must include <br> - your company name, under which the license has been bought <br> - the domain name (DNS), under which Cumulocity IoT Edge will be reachable|
|**SSL key and SSL certificate**|Use your internal or an external CA (Certification Authority) to create these.|
|**Apama license**|The Apama license key is provided as part of your purchase. To request the license keys for your Apama purchase, please contact the logistics team for your region:<br> - North and South America: LogisSrvus@softwareagusa.com <br> - All Other Regions: LogisticsServiceCenterGER@softwareag.com|
|**DNS entry**|The DNS (Domain Name System) is used to resolve human readable host names like www.cumulocity.com to machine readable IP addresses like 192.198.1.10. <br> If you want to connect to Edge VM within your LAN, the DNS entry has to be added for the domain_url (URL under which Edge can be reached) with the IP address of the host.|


### Network connectivity

The following network ports must be reachable from the local network:

* HTTPS
* MQTT over TLS
* SSH, only for configuring the appliance

If Edge should communicate with the cloud, the following ports of www.cumulocity.com (or another instance) need to be available:

* HTTPS
* MQTT over TLS

There is no internet connection required during installation. Internet connection during runtime is optional, and only used if this is configured in the Data Broker. 

#### Incoming traffic

The following ports need to be enabled by default in order to accept traffic from users and devices on the internet (also refer to "Setting up port forwarding" in [Setting up the environment](/guides/edge/installation#setting-up-the-environment)):

|Source IP|Source Port|Destination IP|Destination Port|Service
|:---|:---|:---|:---|:---
|any|any|Edge VM IP|TCP/80|HTTP
|any|any|Edge VM IP|TTCP/443|HTTPS
|any|any|Edge VM IP|TCP/1883|MQTT
|any|any|Edge VM IP|TCP/8883|MQTT/TLS

Depending on additional integrations more ports must be opened. 

Moreover, there is the management port 8111. It is strongly recommended to hide this port behind the firewall and allow the traffic only from selected IPs or/and via VPN. 

In addition, the firewall must support long lasting sessions. The TCP session timeout should be set to 14.400 seconds.

#### Outgoing Traffic

The core nodes and the CEP node must be able to connect to the internet. Ports required to outside are:

|Service|Port|
|:---|:---|
|HTTP|80|
|HTTPS|443|

Depending on the installed integrations (email, SMS, etc.) different ports might have to be opened in order to make these services available to the Cumulocity platform. The descriptions of these ports are delivered with the corresponding integrations.

Depending on the DNS and NTP setup it might be the case that DNS (UDP/53) and NTP (UDP/123) connections to the internet must be possible from all hosts.


### Hardware requirements

The virtual machine has the following hardware requirements:

* 100 GB of free disk space
* Intel x86 CPU
* Recommended: 8 GB RAM, minimum: 4 GB RAM
* Recommended: 4 logical CPU cores, minimum: 2 logical CPU cores
* One NIC

>**Info**: This does not cover host OS hardware requirements.

