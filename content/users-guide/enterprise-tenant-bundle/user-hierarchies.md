---
weight: 20
title: Managing user hierarchies
layout: redirect
aliases:
  - /users-guide/enterprise-edition/#user-hierarchies
---

With user hierarchies you can reflect independent organizational entities in {{< product-c8y-iot >}} that still share the same database. These entities can have limited permissions to subsets of the shared data and can manage their own sub-users.

{{< c8y-admon-info >}}
To be able to use this feature, your tenant must be subscribed to the application "feature-user-hierachy".
{{< /c8y-admon-info >}}

### Viewing user hierarchies

In the **Users** page, user hierarchies are indicated by an arrow left from the user icon. Clicking on the arrow unfolds the user hierarchy. You can also fold and unfold the entire user hierarchy using the **Expand all** and **Collapse all** links at the right of the top menu bar.

A small number next to the user name shows how many direct sub-users a user has. Sub-users are users that can be managed by their respective parent user and that have at most the permissions of that parent user. In the example below, the user "Demo user" has one direct sub-user.

![User hierarchies](/images/users-guide/enterprise-tenant/et-user-hierarchy.png)

<a name="sub-users"></a>
### To create a sub-user

User hierarchies are created by assigning an "owner" to a user. The owner can manage the user. The user can have at most the same permissions as the owner.

1. Select the user in the **Users** page.
2. In the **Owner** field, select the user you want to assign as owner from the dropdown list.
3. Click **Done** to confirm.

![Select owner](/images/users-guide/enterprise-tenant/et-user-hierarchy-assign-owner.png)

{{< c8y-admon-info >}}
When creating a new user, the owner is automatically set to the user who is logged in if the logged-in user has only "User management" CREATE permission. The owner can be changed later, but only by a user with "User management" ADMIN permission.

If you want an owner to manage only their sub-users, make sure that the owner does not have a global role with "User management" permission for all users.
{{< /c8y-admon-info >}}

**Example**

A user A has the role "business". User A becomes the owner of a new user B. User  B can then only get a business role assigned (and not for example an admin role) as the user cannot have higher permissions than the owner.

![Owner Sample](/images/users-guide/enterprise-tenant/et-user-hierarchy-roles.png)

<a name="delegate"></a>
### Delegating user hierarchies to other users

In {{< product-c8y-iot >}}, users can delegate their user hierarchies and permissions to another user (both users must be within the same hierarchy). The delegated user then has the same user management permissions as the user who activated the delegation. To do user management the delegated user must have the permission USER_MANAGEMENT_CREATE or use one of the predefined roles: "Shared User Management", "User Management".

You may of course also delegate on a temporary basis, for example if you are temporarily unavailable.

#### To delegate permissions to a user

Either open the user and click the delegate icon in the **Delegated by** field, or click the menu icon at the right of the user entry in the user list and from the context menu, select **Delegate**.

![User delegation](/images/users-guide/enterprise-tenant/et-user-hierarchy-delegate.png)

#### To undelegate permissions

Remove the delegation in the **Delegate by** field, or click the menu icon at the right of the user entry in the user list and from the context menu, select **Undelegate**.

If the delegated user also needs to manage specific devices, the admin user must assign this device permissions (inventory roles) directly to the intended user. This can be done by using **Copy inventory roles from another user**. For details refer to [Administration > Managing permissions > Assigning inventory roles to users](/users-guide/administration#attach-inventory).

{{< c8y-admon-info >}}
Delegation works only inside user management and does not have any implication to other places.
{{< /c8y-admon-info >}}

### Troubleshooting sub-users

In the example below the user cannot change the access to the Administration application, because the owner of the user has no "User management" permission. As a result, the owner user can not assign built-in applications (and the owned user cannot use them).

![Warning message](/images/users-guide/enterprise-tenant/et-warning.png)
