---
weight: 10
title: What´s New
layout: redirect
---

### Administration

**Microservice logging**

Usability in the **Logs** tab of subscribed applications has been enhanced.

* It is now possible to directly navigate to the end and the beginning of the logs list. [MTM-27530] 
* The **Date To** field has been removed in order to reduce confusion. Instead, starting from the “dateFrom” date, 2000 logs will be sent. [MTM-29296]
* The date specifying the time range can now be selected from a calendar and the theme can be selected through a toggle. [MTM-26441]
* Moreover, an **Auto-refresh** button has been added. If enabled, the displayed logs automatically get updated every 10 seconds. [MTM-27531]

![Microservice logging](/guides/images/Administration/admin-applications-logs.png)

For details, see [Administration > Managing applications](/guides/users-guide/administration/managing-applications) in the User guide. 


**Single sign-on**

The single sign-on functionality has been further enhanced: 

* If single sign-on is the only defined login option, the users will not see the Cumulocity IoT login page, but will be redirected to the login window of the external auth provider. Basic authentication cannot be deleted via the Administration UI. It can only be done via the login options API. [MTM-23157]
* A new single logout mechanism is now provided. If configured, the user is redirected to the defined authorization server logout URL after logging out from Cumulocity. For details see [Administration > Changing settings > Single sign-on](/guides/users-guide/administration/#single-sign-on). [MTM-23522] 
* On creating a new user, a warning message is now displayed stating that a user, which is created locally, will not be able to use the single sign-on functionality. Limitations of local users in the context of single sign-on have been added to the documentation. For details see [Administration > Managing users](/guides/users-guide/administration/#managing-users). [MTM-29103]

**TOTP**

A new two-factor authentication strategy has been added. You can now also use **TOTP (Google authenticator)** as authentication method. 

For details, see [Administration > Two-factor authentication](/guides/users-guide/administration/#tfa) in the User guide.


**Tenant ID**

Tenant ID information is now included in the dropdown user menu. [MTM-28565]
<br><br>![User menu](/guides/images/Administration/administration-user-menu.png)


### OPCUA

OPC UA 2.0 is now available. The feature stores data into the Cumulocity database via REST. Additionally, c8y commands are executed to perform various operations on the OPC UA servers. The gateway has to be registered as Cumulocity device in a specific tenant and the opcua-device-gateway must run in the users’ environment. In order to use OPC UA, subscription to the “opcua-mgmt-service” microservice is required. 

The following functionalities are now available:

* Support for multiple OPC UA servers
<br>![Multiple OPC UA servers](/guides/images/release-notes/opcua1.png)

* Support for browsing and searching of the address space
<br>![OPC UA browsing](/guides/images/release-notes/opcua2.png)
* Addressing OPC UA nodes via URN
* Largely extended support for mapping the OPC UA and Cumulocity information models

For details, see [Optional services > OPC UA 2.0](/guides/users-guide/optional-services/opc-ua) in the User guide. 

### SNMP

Support for integration of SNMP-enabled devices has been added to the Cumulocity IoT platform through two new components: 

* The mib-parser microservice converts a Managed Information Base (MIB) file to a JSON representation which is then used to create a device protocol.
* The SNMP agent is a stand-alone Java program that communicates with SNMP-enabled device(s) and the Cumulocity IoT platform. It receives SNMP data from the devices, converts the data to Cumulocity-based objects based on the device protocol mapping, persists the data locally, and forwards the data to Cumulocity. 

![SNMP device protocol details](/guides/images/release-notes/snmp-device-protocol-detail.png)

For details see [Optional services > SNMP](/guides/users-guide/optional-services/#snmp) in the User guide.