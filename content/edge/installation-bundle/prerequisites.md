---
weight: 10
title: Requirements
layout: redirect
---

### Installation requirements

|Item|Details|
|:---|:---|
|**Hypervisor**|- VMWare ESXi 6.5 and 6.7 <br> - VMware Workstation Player 16.x <br>- Hyper-V on Microsoft Windows 10 Enterprise, version 1809. The supported VM configuration version is 9.0.
|**Edge appliance image**|To be downloaded from the [Software AG Empower portal](https://empower.softwareag.com), based on the target hypervisor. <br> For VMware (ESXi and Workstation Player), download all the 4 files of VMware (ovf, mf and two disks vmdk files). <br> For Hyper-V, download the ZIP file.|
|**Cumulocity IoT Edge license file**|To request the license file for Cumulocity IoT Edge, please contact the logistics team for your region:<br> - North and South America: LogisSrvus@softwareagusa.com <br>- All Other Regions: LogisticsServiceCenterGER@softwareag.com <br>In the email, you must include <br> - your company name, under which the license has been bought <br> - the domain name (for example, myedge.domain.com), where Cumulocity IoT Edge will be reachable<br>For more information, see [Domain name validation for Edge license key generation](#domain-name-validation-for-edge-license-key-generation).|
|**SSL key and SSL certificate**|Use your internal or an external CA (Certification Authority) to generate these files. These files must not be password-protected. <br>**Info:** Ensure that the .crt and .key files are in PEM format and the .key file is not encrypted.|
|**DNS entry**|The DNS (Domain Name System) is used to resolve human readable host names like www.cumulocity.com to machine readable IP addresses like 192.198.1.10. <br> If you want to connect to Edge appliance within your LAN, the DNS entry has to be added for the domain name (URL under which Cumulocity IoT Edge can be reached) with the IP address of the host.|
|**Edge cloud remote access**|To connect and manage one (or multiple) Edge appliances to your Cumulocity IoT cloud tenant, you need an active Cumulocity IoT Standard tenant with the Data Broker and Cloud Remote Access extensions.<br>**Info:** The Edge cloud remote access is an optional feature in Cumulocity IoT Edge.|

### Domain name validation for Edge license key generation

To procure the Cumulocity IoT Edge license file, you must provide the right domain name to the Software AG's logistics team for Edge license key generation.

When you provide the domain name, consider the following points:

* The domain name does not need to be a Fully Qualified Domain Name (FQDN).<br>
For example, to access the Edge platform with the domain name **myown.iot.com**, request the Edge license for **myown.iot.com** or **iot.com** (without the subdomain **myown**).

	>**Important:** When you are running the Edge post installation process, you must use the FQDN. For example, **myown.iot.com**.

* If you exclude the subdomain from the domain name in the Edge license, you must possess a wildcard SSL certificate which can be used with multiple subdomains (**myown** or others) of the domain (**iot.com**).<br>
For example, if you provide **iot.com** as the domain name, you must possess an SSL certificate for ***.iot.com**.

* If you have an Internationalized Domain Name (IDN), then you must provide the translated ASCII equivalent domain name.<br>
For example, if your domain name is **myown.iöt.com** (for example, containing **ö**), then you must use **myown.xn--it-fka.com**.<br>Also, provide the same translated ASCII equivalent domain name as the tenant domain name during the Edge post installation process.<br>

	>**Info:** An Internationalized Domain Name (IDN) is an internet domain name that contains at least one label, in whole or in part, in a language-specific script or alphabet, such as Arabic, Chinese, Cyrillic, Devanagari, Hebrew or the Latin alphabet-based characters with diacritics or ligatures, such as French. The internationalization of domain names is a technical solution to translate names written in language-native scripts into an ASCII text representation that is compatible with the Domain Name System. See [Wikipedia](https://en.wikipedia.org/wiki/Internationalized_domain_name).

* Ensure that you adhere to the following domain name validation rules:
	* The domain name may contain lowercase letters, digits or hyphens. It must start with a letter; hyphens are only allowed in the middle; minimum is 2 characters. The domain name can be a combination of lowercase or alphanumeric characters separated by dot ( . ) or hyphen ( - ) Note that the usage of underscore characters is deprecated, but still possible for backward compatibility reasons.
		* Cannot contain any letters of languages like Chinese, Latin or Arabic.
		* Cannot contain any special characters like (+ , ! @ # $ % ^ & * ( ) ; \ \ / | < > \ " \ ' ) other than dot ( . ) or hyphen ( - ).
	* The length of the domain name including the dot must not exceed 255 characters.
	* Each segment of the domain name separated by a dot must be between 1 to 63 characters long.
		* The Top-Level Domain (TLD) which refers to the last segment of the domain name must be between two to six characters long.
		* The domain name cannot begin or end with a hyphen.

### Network connectivity

The following network ports must be reachable from the local network:

* HTTPS
* MQTT over TLS
* SSH, only for configuring the appliance

If Cumulocity IoT Edge should communicate with the cloud, the following ports of www.cumulocity.com (or another instance) need to be available:

* HTTPS
* MQTT over TLS

There is no internet connection required during installation. Internet connection during runtime is optional, and only used if this is configured in the Data Broker. 

#### Incoming traffic

The following ports need to be enabled by default in order to accept traffic from users and devices on the internet (also refer to "Setting up port forwarding" in [Setting up the environment](/edge/installation#setting-up-the-environment)):

|Source IP|Source Port|Destination IP|Destination Port|Service
|:---|:---|:---|:---|:---
|any|any|Edge appliance IP|TTCP/443|HTTPS
|any|any|Edge appliance IP|TCP/1883|MQTT
|any|any|Edge appliance IP|TCP/8883|MQTT/TLS

Depending on additional integrations more ports must be opened. 

#### Outgoing Traffic

The core node must be able to connect to the internet. Ports required to outside are:

|Service|Port|
|:---|:---|
|HTTPS|443|

Depending on the installed integrations (email, SMS, etc.) different ports might have to be opened in order to make these services available to the Cumulocity IoT platform. The descriptions of these ports are delivered with the corresponding integrations.

Depending on the DNS and NTP setup it might be the case that DNS (UDP/53) and NTP (UDP/123) connections to the internet must be possible from all hosts.


### Hardware requirements

The virtual machine has the following minimum hardware requirements:

|Hardware|Configuration|
|:---|:---|
|Disk space|115 GB
|CPU|Intel x86
|Number of CPU cores|2 - without microservice <br>4 - with microservice<br>4 - to update Docker CIDR
|RAM|6 GB - without microservice <br>8 GB - with microservice<br>8 GB - to update Docker CIDR
|Network Interface Controller (NIC)|1

These are the minimum system requirements to enable the microservice hosting feature. If the microservice requires additional system resources, you must configure the system requirements accordingly in addition to minimum system requirements. For example, if the microservice requires 2 CPU cores and 4 GB of RAM, then the VM must have 6 CPU cores (4 cores for VM + 2 cores for microservice) and 12 GB of RAM (8 GB for VM + 4 GB for microservice).

>**Info:** This does not cover host operating system hardware requirements. The host operating system resource requirements must be sized independently and should be over and above the resource allocated to the virtual machines.

