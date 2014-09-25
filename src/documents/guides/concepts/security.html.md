---
order: 50
title: Security aspects
layout: default
---
## Overview

This section discusses security aspects of Cumulocity, structured into physical security, network security, application security and access control. Finally, it shows how Cumulocity helps in managing the security of your IoT solution.

More information can be found in the security-related sections of the remaining documentation, such as the [REST implementation](/guides/reference/rest-implementation) reference and the [Users API](/guides/reference/users). Permissions required for individual API calls are documented in the respective reference guide sections for the APIs.

Cumulocity complies with Nokia Networks' "Design for Security" policy and Deutsche Telekom's "Privacy and Security Assessment" (PSA, [detailed criteria in German](http://www.telekom.com/psa)).

## Physical security aspects

Physical security of IT systems prevents unauthorized physical access to servers, storage and network devices.

Cumulocity Standard Edition accounts are hosted at Amazon Web Services (AWS). AWS has been certified according to [ISO 27001, DSS and other standards](http://aws.amazon.com/compliance/). It features extensive physical security measures and is independently audited. Audit reports can be obtained directly at [AWS Compliance](http://aws.amazon.com/compliance/contact/).

In IoT solutions, physical security also includes unauthorized access to IoT devices, for example, to redirect or manipulate data from devices, read credentials from devices or change a device's configuration. We recommend you to review the physical security of the devices that you plan to use for your IoT solution and, e.g., make configuration ports unavailable to unauthorized people or include tamper sensors.

## Network security aspects

Network security prevents unauthorized access to data transmitted over the network and tampering with or modification of data. It also ensures that network services are available to you.

Cumulocity ensures that your data stays confidential and cannot be tampered with through an end-to-end implementation of [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure) from devices to applications. It uses up-to-date encryption technology that has been independently rated "A" by sslabs.com. Any communication with Cumulocity is subject to individual authentication and authorization. 

This communication architecture is illustrated below. Inside the sensor networks and from the sensor networks to agents, device- and gateway-specific protocols may be in use (such as ZigBee or Modbus). Hence, securing these is a device-specific matter. Agents run as client towards the Cumulocity using HTTPS to send and receive data. Similarly, IoT applications use HTTPS towards Cumulocity. If an IoT application exposes own interfaces towards web browsers, it is recommended that these also support HTTPS. This way, the whole path from agents to the end user is secured.

![Communication security](/guides/concepts-guide/commsecurity.png)

As mentioned above, Cumulocity does not require a device to expose any ports or services on the Internet. This is an important property: It not only simplifies connecting devices to Cumulocity, it also drastically simplifies securing devices. When deploying an IoT solution, please review other services that your device may expose on the Internet, such as web-based device managers or SMS-based configuration possibilities.

## Application security aspects

Application security addresses security in the software level.

Cumulocity follows standard practices for application-level hardening such as making sure that only properly upgraded operating systems and web servers are in use. A number of additional "best practices" are employed to make Cumulocity secure by design. For example,

* All functionality of Cumulocity is coherently implemented with the same set of publicly documented, sessionless REST APIs. This  means that none of the popular "session stealing" techniques will work with Cumulocity.
* Cumulocity does not use a SQL database for IoT data storage and is itself not based on a scripting language. This means that so-called "injection attacks" will not work with Cumulocity.
* As discussed above, devices are clients to Cumulocity and hence popular attacks to devices will not work.
* Devices are individually connected with Cumulocity's device registration feature. This means that if a device is stolen or tampered with, it can be individually disconnected from Cumulocity.

## Access control

Cumulocity uses a standard authentication and authorization model based on realms, users, user groups and authorities. A *realm* is a database of users and user groups that follow the same authentication and authorization policy. A *user* is a person or an external system entitled to access protected resources in Cumulocity. Access is controlled through permissions. For simplifying administration, users can be grouped into *user groups* sharing similar permissions. A user can be a member of several user groups, so that the user has the combined permissions of the groups.

Cumulocity creates a new realm for each tenant to store the users of that tenant. Realms provide own name space for user names, allowing users to keep the names that they are familiar with from their own enterprise IT or other IT systems. There is no conflict between user names: A user "smith" of one particular tenant is different from a user "smith" of another tenant. This user name is valid for all Cumulocity applications that a tenant subscribes to.

Each new realm is automatically populated with an initial administrator user who can create further users and user groups, and who can assign permissions to these users and user groups. This enables an enterprise to manage users and their permissions on their own using the administration application.

![User management screenshot](/guides/concepts-guide/usermanagement.png)

The ability to execute certain functionality in the system depends on two concepts: Permissions and ownership. Permissions define explicitly what functionality can be executed by a user. Cumulocity distinguishes read permissions and administration permissions. Read permissions enable users to read data. Administration permissions enable users to create, update and delete data. Read and administration permissions are separately available for the different types of data in Cumulocity. For example, there are read permissions for inventory data, measurements, operations and so forth.

Objects in the inventory also have an owner associated with them. Owners can always, regardless of their other permissions,

-   Read, Update and delete the inventory objects they own.
-   Create, read, update and delete data associated with the objects they own.

For example, if you are the owner of a smart meter in the inventory, you can store meter readings for that smart meter even if you do not have any other measurement permissions.

The inventory also features a "create" permission. A user having just the create permission can store new objects in the inventory, but can not read, modify or delete any other data. This is mainly relevant for devices. The "create" permission also includes the possibility to link your object to another object as child device or child asset.

## Limiting access to managed objects

Cumulocity allows you to set global permissions that are applicable to all managed objects, measurements, events and so forth. It also allows you to limit such permissions

* To only a specific managed object or a set of managed objects. 
* To a single user or a group of users.
* To individual fragments.

### Editing permissions

Permissions can be edited both by navigating to a particular managed object in the device management application as well as by navigating to a user or group in the administration application.

To add a new permission to a user, select the user in the administration application. In the "User Permissions" section, 

* Type the name or ID of the device that a permission should be granted for. Auto-completion is supported.
* Select the scope of permission, i.e., if the permission applies to the inventory ("MANAGED_OBJECT"), operations ("OPERATIONS") asf. Select "*" to make the permission apply to all features.
* Select the fragment types that the permission applies to. For example, if you select "OPERATIONS" as scope, "c8y_Restart" as type and "ADMIN" as permission, the user can only restart devices. Note that a user has to have permissions for all fragments in an object to be able to retrieve or edit an object. Use "*" to select all fragments or to set permissions on objects without fragments. Auto-completion based on the selected device is supported, but you can use any fragment in the text box (e.g., fragments of child objects).
* Select the permission ("READ", "ADMIN"). Use "*" to select both "READ" and "ADMIN".

![Adding new user permissions](/guides/acl/acl_admin1.jpg)

It is also possible to add a new permission to a device. In that case, you need to navigate to a device and select the user or group that the permission applies to. Use the toggle buttons to switch between users and groups.

![Adding new device permissions](/guides/acl/acl_dm2.png)

### Propagation of permissions

Permissions are propagated along two dimensions:

* Permissions for a group apply to all users in that group.
* Permissions for a managed object apply to all child devices and child assets.

### Examples

Permit a user to read the temperature measurement of device "10200":

	10200, MEASUREMENT, c8y_TemperatureMeasurement, READ

Permit a user to read any measurement of device "10200":

	10200, MEASUREMENT, *, READ

Permit a user to restart device "10200":

	10200, OPERATION, c8yRestart, ADMIN

### Troubleshooting permissions

To determine the permissions of a particular user on a particular device, navigate to the device in the device management application and click on the "Permissions" tab. Then enter the name of the user into the "User" field. This will print all permissions of the user for the device.

![Viewing user permissions](/guides/acl/acl_dm1.png)

## Security management aspects

Whenever a security-relevant event occurs, it needs to be logged for potential later auditing. Security-relevant events may happen both on application level as well as in the IoT network. A simple example of a security-relevant event on application level is a login to the application. An example of a security-relevant event on the network level is using a local software or local control on a device to manipulate the device.

To capture security-relevant events, Cumulocity offers an [auditing interface](/guides/reference/auditing). This interface enables applications and agents to write audit logs, which are persistently stored and cannot be externally modified after being written. Cumulocity itself also writes own audit records related to login and device control operations.

To receive security-related reports about Cumulocity itself, interested parties can subscribe to the [Cumulocity security bulletin](https://cumulocity.zendesk.com/hc/en-us/sections/200381178-Security-bulletin). To report security incidents, please mail to security@cumulocity.com.
