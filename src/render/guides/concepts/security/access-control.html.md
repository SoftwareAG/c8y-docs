---
order: 50
title: Access control
layout: redirect
---

Cumulocity uses a standard authentication and authorization process based on realms, users, user groups, and authorities. A *realm* is a database of users and user groups, who follow the same authentication and authorization policy. A *user* is a person or an external system entitled to access protected resources inside Cumulocity. 

Access is controlled through permissions. Permissions define what a user is allowed to do in Cumulocity applications. To manage permissions more easily, they are grouped in so-called "roles". Every user can be associated with a number of roles, adding up permissions of the user. 

The following types of roles can be associated with users:

Global roles: Contain permissions that apply to all data within a tenant.
Inventory roles: Contain permissions that apply to groups of devices.

For details on permissions, see [Managing permissions](/guides/users-guide/administration#managing-permissions) in the Administration section of the User guide.

Cumulocity creates a new realm for each tenant to store the users of that tenant. Realms provide an own namespace for usernames, allowing users to keep the names that they are familiar with from their own enterprise IT or other IT systems. There is no conflict between user names: A user "smith" of one particular tenant is different from a user "smith" of another tenant. This username is valid for all Cumulocity applications that a tenant subscribes to.

Each new realm is automatically populated with an initial administrator user who can create further users and user groups (i.e. global roles), and who can assign permissions to these users and global roles. This enables an enterprise to manage users and their permissions on their own using the Administration application.

![User management](/guides/images/concepts-guide/user-management.png)

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

### Managing roles and assigning permissions

Global roles and inventory roles are created and managed in the **Permission** page of the Administration application.

![Permission page](/guides/images/users-guide/Administration/admin-global-roles.png)

A detailed description on available default roles and on creating global and inventory roles can be found in [Managing permissions](/guides/users-guide/administration#managing-permissions) in the Administration section of the User guide.

To assign roles to users, click **User** in the **Account** menu and select a user from the user list. In the **Global roles** tab, global roles can be assigned to the selected user. In the **Inventory roles** tab, you can assign roles for the user for particular device groups. 

![Inventory roles](/guides/images/users-guide//Administration/admin-inventory-role-apply.png)

For details on assigning global and inventory roles see [Managing permissions](/guides/users-guide/administration#managing-permissions) in the Administration section of the User guide.


### Globally accessible objects

It is possible to make any object accessible by any user without specific rights. To grant those rights just add a new fragment called "c8y_Global" to the object.

### Extending permissions

Permissions are extended along two dimensions:

* Permissions for a group apply to all users in that group.
* Permissions for a managed object apply to all child devices and child assets.

### Examples

Permit a user to read the temperature measurement of device "10200":

```java
10200, MEASUREMENT, c8y_TemperatureMeasurement, READ 
```

Permit a user to read any measurement of device "10200":

```java
10200, MEASUREMENT, *, READ
```

Permit a user to restart device "10200":

```java
10200, OPERATION, c8yRestart, ADMIN
```
