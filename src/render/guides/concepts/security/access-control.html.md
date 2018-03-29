---
order: 50
title: Access control
layout: redirect
---

Cumulocity uses a standard authentication and authorization process based on realms, users, user groups, and authorities. A *realm* is a database of users and user groups, who follow the same authentication and authorization policy. A *user* is a person or an external system entitled to access protected resources inside Cumulocity. Access is controlled through permissions. For simplifying administration, users can be grouped into *user groups* sharing similar permissions. A user can be a member of several user groups so that the user has the combined permissions of the groups.

Cumulocity creates a new realm for each tenant to store the users of that tenant. Realms provide an own namespace for usernames, allowing users to keep the names that they are familiar with from their own enterprise IT or other IT systems. There is no conflict between user names: A user "smith" of one particular tenant is different from a user "smith" of another tenant. This username is valid for all Cumulocity applications that a tenant subscribes to.

Each new realm is automatically populated with an initial administrator user who can create further users and user groups, and who can assign permissions to these users and user groups. This enables an enterprise to manage users and their permissions on their own using the administration application.

![User management screenshot](/guides/images/concepts-guide/usermanagement.png)

The ability to execute certain functionality on the system depends on two concepts: Permissions and ownership. Permissions define explicitly what functionality can be executed by a user. Cumulocity distinguishes read permissions and administration permissions. Read permissions enable users to read data. Administration permissions enable users to create, update and delete data. Read and administration permissions are separately available for the different types of data in Cumulocity. For example, there are read permissions for inventory data, measurements, operations and so forth.

Objects in the inventory also have an owner associated with them. Owners can always, regardless of their other permissions,

-   Read, Update and delete the inventory objects they own.
-   Create, read, update and delete data associated with the objects they own.

For example, if you are the owner of a smart meter in the inventory, you can store meter readings for that smart meter even if you do not have any other measurement permissions.

The inventory also features a "create" permission. A user having just the create permission can store new objects in the inventory, but can not read, modify or delete any other data. This is mainly relevant for devices. The "create" permission also includes the possibility to link your object to another object as child device or child asset.

### Limiting access to managed objects

Cumulocity allows you to set global permissions that are applicable to all managed objects, measurements, events and so forth. It also allows a limitation of permits.

* To specific managed objects or a set of managed objects. 
* To a single user or a group of users.
* To individual fragments.

### Editing permissions

Permissions can be edited both by navigating to a particular managed object in the device management application as well as by navigating to a user or group in the administration application.

To add a new permission to a user, select the user in the administration application. In the "User Permission" section, 

* Type the name or ID of the device that a permission should be granted for. Auto-completion is supported.
* Select the scope of permission, if the permission applies to the inventory ("MANAGED_OBJECT"), operations ("OPERATIONS") and select "*" to make the permission apply to all features.
* Select the fragment types that the permission applies to. For example, if you select "OPERATIONS" as scope, "c8y_Restart" as type and "ADMIN" as permission, the user can only restart devices. Note that a user has to have permissions for all fragments in an object to be able to retrieve or edit an object. Use "*" to select all fragments or to set permissions on objects without fragments. Auto-completion based on the selected device is supported, but you can use any fragment in the text box (like fragments of child objects).
* Select the permission ("READ", "ADMIN"). Use "*" to select both "READ" and "ADMIN".

![Adding new user permissions](/guides/images/acl/acl_admin1.jpg)

It is also possible to add a new permission to a device. In that case, you need to navigate to a device and select the user or group that the permission applies to. Use the toggle buttons to switch between users and groups.

![Adding new device permissions](/guides/images/acl/acl_dm2.png)

### Globally accessible objects

It is possible to make any object accessible by any user without specific rights. To grant those rights just add a new fragment called "c8y_Global" to the object.

### Extending permissions

Permissions are extended along two dimensions:

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

![Viewing user permissions](/guides/images/acl/acl_dm1.png)

