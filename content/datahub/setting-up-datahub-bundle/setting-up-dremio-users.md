---
weight: 40
title: Setting up Dremio users
layout: redirect
---

In the [initial configuration](/datahub/setting-up-datahub/#setting-up-initial-configuration) of {{< product-c8y-iot >}} DataHub, the Dremio API user is configured. This user is required for the proxy REST API, which allows you to interact with Dremio using {{< product-c8y-iot >}} DataHub. This user can also be used to directly interact with Dremio in a follow-up application, using JDBC, ODBC, or REST API.

Some use-cases might require more than one Dremio user for the interaction with Dremio. For that purpose, additional Dremio users can be added.

{{< c8y-admon-info >}}
You need administration permissions to configure Dremio users. See the section on [Defining {{< product-c8y-iot >}} DataHub permissions and roles](/datahub/setting-up-datahub#defining-permissions) for details.
{{< /c8y-admon-info >}}

### Overview of Dremio users
In the navigator, select **Dremio users** under **Settings** to get an overview of all Dremio users created by an administrator of your {{< product-c8y-iot >}} DataHub instance. Other Dremio users are not shown.

The list of Dremio users with their corresponding properties is displayed. The context menu of each user provides actions to edit or delete a user.

If the initial configuration has not been completed so far, no users are shown. If the initial configuration has been completed, the list includes the Dremio API user configured in the initial configuration.

### Properties of a Dremio user
A Dremio user comprises the following properties:

#### User name
The user name is a mandatory setting. It must be a unique value, i.e., no other Dremio user has the same user name. It consists of the tenant id plus forward slash and a string with a minimum length of three, starting with a character, and consisting of numbers, characters, dash, or underline.

#### First name, last name and email
The first name, last name, and email of a Dremio user are optional settings each.

#### Permissions for data lake and space
During the initial configuration of {{< product-c8y-iot >}} DataHub, a so-called source in Dremio is created, which connects Dremio with the data lake. Additionally a so-called space is created in Dremio, in which Dremio artifacts like views can be organized.

The Dremio user can be assigned additional permissions for the data lake source and the space. If the user has the permission for the data lake source assigned, the user is allowed to manage grants on that source for other users as well. The same applies to the space permission. Data lake permission and space permission are independent of each other; the setting of permission does not affect the setting of the other.

Having the corresponding permission assigned, the user can grant other Dremio users, which do not necessarily relate to {{< product-c8y-iot >}} DataHub, different permissions on the data lake source or the space, e.g., for reading data from the data lake or creating a table in the data lake.

For example, IoT data has been offloaded to the data lake using {{< product-c8y-iot >}} DataHub. A data scientist from a different business unit now wants to run data mining algorithms over the data lake contents. A Dremio account needs to be created for the data scientist. Then a Dremio user created by {{< product-c8y-iot >}} DataHub, having the data lake permission, grants read access on the data lake source to the Dremio account of the data scientist. 

{{< c8y-admon-info >}}
Dremio refers to the permissions as [privileges](https://docs.dremio.com/software/security/rbac/privileges/). Privileges include for example Select, Alter, Create, or Drop table. Given a Dremio user with the corresponding permissions, permissions to other users can be granted using the Dremio UI. In the UI browse to the data lake or space and select **Edit details** in the action menu. In the edit form the list of privileges for all users is shown, with the option to updating privileges and users. Alternatively you can use the [Dremio SQL API](https://docs.dremio.com/software/sql-reference/sql-commands/rbac/) to modify privileges.
{{< /c8y-admon-info >}}

For each user, including the Dremio API user, the permissions on data lake and space are initially disabled.

#### Password
The password must have at least 8 characters with at least one letter and one number. 

### Adding a Dremio user
To add a Dremio user, select **Dremio users** under **Settings** and click **Add user** at the right of the top menu bar. In the new user form provide the corresponding Dremio user properties.

Click **Save** to save the settings and create the new user. Click **Cancel** to cancel the creation of the user.

### Editing a Dremio user
In the **Dremio user** section under **Settings** the list of users is displayed. For each user there is a context menu on the right side. Select **Edit** from that menu to edit a user. Except for the user name, all settings can be changed. The password can also optionally be changed by clicking **Change password**. Click **Save** to apply the new settings.

### Deleting a Dremio user
In the context menu of the Dremio user list, select **Delete** and click **Confirm** in the subsequent confirmation dialog to delete a Dremio user. The Dremio API user defined in the initial configuration cannot be deleted that way. This user can only be deleted if the settings under **Initial configuration** are deleted. In the latter case all Dremio users associated with this {{< product-c8y-iot >}} DataHub instance are deleted.