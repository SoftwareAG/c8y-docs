---
weight: 10
title: What´s new
layout: redirect
---


### Device Management

#### Device certificates

[MTM-27299] Cumulocity IoT allows devices to connect via MQTT protocol using a X.509 client certificate for authentication. Each tenant individually defines whom it trusts by uploading the base CA certificate.

Cumulocity IoT supports two ways to register devices which will be able to connect using certificates, auto registration or bulk registration.

A device which is connected by certificates can receive a token which can later be used to authenticate HTTP requests. 

For details, how to manage trusted certificates through the UI, see [Device Management > Managing device data > Managing trusted certificates](/users-guide/device-management#trusted-certificates) in the User guide.

![Device credentials](/images/users-guide/device-management/devmgmt-device-credentials.png)

For information on connecting devices using certificates refer to [Device integration using MQTT > Device certificates](device-sdk/mqtt#device-certificates) in the Device SDK guide. 


### Cockpit	

[MTM-30226] The welcome widget has been modified. The new welcome widget comes in two versions, which show different messages and quick links, based on the tenant type of the user (regular or trial tenant).

![Welcome widget](/images/release-notes/welcome-widget.png)

For details, see [Cockpit > Overview](/users-guide/cockpit#overview) in the User guide.


### New smartphone app and wizard

[MTM-30234] A new wizard is available to connect a smartphone to the platform. In the welcome widget of the Cockpit application a new quick-link card **Connect smartphone** is shown. 


### Device integration: Cumulocity IoT NetComm Agent

A new Cumulocity IoT NetComm agent is available which 

### Sigfox

The following improvements have been implemented in the Sigfox agent since 10.6.0.

For details, see [Optional services > Sigfox](/users-guide/optional-services#sigfox) in the User guide.  

* [MTM-30217] Sigfox device registration form: Hex string validation has been added to the ID and PAC input fields.
* [MTM-30220] On device registration, only active contracts with free slots will now be shown.
* [MTM-29827] If a device type is generated and its name exceeds 100 characters it will be truncated to fit the 100 characters name length limit on the Sigfox platform.	

### UI

[MTM-31746] Russian is now available as a standard language.	




