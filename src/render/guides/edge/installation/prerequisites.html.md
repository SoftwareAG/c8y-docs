---
order: 20
title: Requirements
layout: redirect
---

### Installation requirements

To install Cumulocity Edge, the following items need to be available:

* Virtualbox <br>
Version: 5.2.8<br>
To be be downloaded from [https://www.virtualbox.org/wiki/Download_Old_Builds_5_2](https://www.virtualbox.org/wiki/Download_Old_Builds_5_2)
	
* Edge OVA image <br>
To be downloaded from SAG Empower portal

* Cumulocity licence file <br>
Please send an email to support@cumulocity.com to request the license file.
In the email, you must include the following details:
	* Your company name, under which the license has been bought.
	* The domain name (DNS), under which Cumulocity Edge will be reachable.

* SSL key and SSL certificate <br>
Use your internal or an external CA to create these

* Apama licence <br>
Optional

* DNS entry <br>
Optional

### Network connectivity

The following network ports must be reachable from the local network:

* HTTPS
* MQTT over TLS
* SSH, only for configuring the appliance

If Edge should communicate with the cloud, the following ports of www.cumulocity.com (or another instance) need to be available:

* HTTPS
* MQTT over TLS

There is no internet connection required during installation. Internet connection during runtime is optional, and only used if this is configured in the Data Broker. 

### Hardware requirements

The virtual machine has the following hardware requirements:

* 100 GB of free disk space
* Intel x86 CPU
* Recommended: 8 GB RAM, minimum: 4 GB RAM
* Recommended: 4 logical CPU cores, minimum: 2 logical CPU cores
* One NIC

>**Info**: This does not cover host OS hardware requirements.