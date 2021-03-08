---
weight: 10
title: What´s new
---

### Administration

**Microservice logging**

Usability in the **Logs** tab of subscribed applications has been enhanced.

* It is now possible to directly navigate to the end and the beginning of the logs list. [MTM-27530]
* The **Date To** field has been removed in order to reduce confusion. Instead, starting from the “dateFrom” date, 2000 logs will be sent. [MTM-29296]
* The date specifying the time range can now be selected from a calendar and the theme can be selected through a toggle. [MTM-26441]
* Moreover, an **Auto-refresh** button has been added. If enabled, the displayed logs automatically get updated every 10 seconds. [MTM-27531]

![Microservice logging](/images/release-notes/admin-applications-logs.png)

For details, see [Administration > Managing applications](https://cumulocity.com/guides/10.5.7/users-guide/administration/managing-applications) in the *User guide*.


**Single sign-on**

The single sign-on functionality has been further enhanced:

* If single sign-on is the only defined login option, the users will not see the Cumulocity IoT login page, but will be redirected to the login window of the external auth provider. Basic authentication cannot be deleted via the Administration UI. It can only be done via the login options API. [MTM-23157]
* A new single logout mechanism is now provided. If configured, the user is redirected to the defined authorization server logout URL after logging out from Cumulocity IoT. For details see [Administration > Changing settings > Single sign-on](https://cumulocity.com/guides/10.5.7/users-guide/administration/#single-sign-on) in the *User guide*. [MTM-23522]
* On creating a new user, a warning message is now displayed stating that a user, which is created locally, will not be able to use the single sign-on functionality. Limitations of local users in the context of single sign-on have been added to the documentation. For details see [Administration > Managing users](https://cumulocity.com/guides/10.5.7/users-guide/administration/#managing-users) in the *User guide*. [MTM-29103]
**TOTP**

A new two-factor authentication strategy has been added. You can now also use **TOTP (Google authenticator)** as authentication method.

For details, see [Administration > Two-factor authentication](https://cumulocity.com/guides/10.5.7/users-guide/administration/#tfa) in the *User guide*.



**Tenant ID**

Tenant ID information is now included in the dropdown user menu. [MTM-28565]
<br><br>![User menu](/images/release-notes/user-account-menu.png)


### OPCUA

OPC UA 2.0 is now available. The feature stores data into the Cumulocity IoT database via REST. Additionally, c8y commands are executed to perform various operations on the OPC UA servers. The gateway has to be registered as Cumulocity IoT device in a specific tenant and the opcua-device-gateway must run in the users’ environment. In order to use OPC UA, subscription to the “opcua-mgmt-service” microservice is required.

The following functionalities are now available:

* Support for multiple OPC UA servers
<br>![Multiple OPC UA servers](/images/release-notes/opcua2.png)

* Support for browsing and searching of the address space
<br>![OPC UA browsing](/images/release-notes/opcua1.png)
* Addressing OPC UA nodes via URN
* Largely extended support for mapping the OPC UA and Cumulocity IoT information models

For details, see [Optional services > OPC UA 2.0](https://cumulocity.com/guides/10.5.7/users-guide/optional-services/#opc-ua) in the *User guide*.

### SNMP

Support for integration of SNMP-enabled devices has been added to the Cumulocity IoT platform through two new components:

* The mib-parser microservice converts a Managed Information Base (MIB) file to a JSON representation which is then used to create a device protocol.
* The SNMP agent is a stand-alone Java program that communicates with SNMP-enabled device(s) and the Cumulocity IoT platform. It receives SNMP data from the devices, converts the data to Cumulocity IoT-based objects based on the device protocol mapping, persists the data locally, and forwards the data to Cumulocity IoT.

![SNMP device protocol details](/images/release-notes/snmp-device-protocol-detail.png)

For details, see [Optional services > SNMP](https://cumulocity.com/guides/10.5.7/users-guide/optional-services/#snmp) in the *User guide*.
