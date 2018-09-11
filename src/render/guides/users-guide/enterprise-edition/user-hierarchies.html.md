---
order: 20
title: Managing user hierarchies
layout: redirect
---


<a name="hierarchy"></a>
With user hierarchies you can reflect independent organizational entities in Cumulocity that still share the same database. These entities can have limited permissions to subsets of the shared data and can manage their own sub-users.

> **Info**: To be able to use this feature, your tenant must be subscribed to the application "FEATURE.USER.HIERARCHY".

### Viewing user hierarchies

In the **User** page, user hierarchies are indicated by an arrow left from the user icon. Clicking on the arrow unfolds the user hierarchy. You can also fold and unfold the entire user hierarchy using the **Expand all** and **Collapse all** links on the top right.

A small number next to the user name shows how many direct sub-users a user has. Sub-users are users that can be managed by their respective parent user and that have at most the permissions of that parent user. In the example below, the user "TestUser" has two direct sub-users. 

![User hierarchies](/guides/images/users-guide/userhierarchies.png)

### <a name="sub-users"></a> Creating sub-users

User hierarchies are created by assigning an "owner" to a user. The "owner" can manage the user. The user can have at most the same permissions as the owner.

To assign an owner to a user, select the user in the **Users** page. In the **Owner** field, select a user from the dropdown list and click **Done** to confirm.

![Select owner](/guides/images/users-guide/chooseowner.png) 

>**Info:** When creating a new user, the owner is automatically set to the user who is logged in. The owner can be changed later. Only users with USER ADMIN permission can assign an owner to a user. 

> If you want an owner to manage only their sub-users, make sure that the owner does not have a global role with user management permissions for all users.

As an example, the sample below shows a user with a business role. The user becomes the owner of a new user. Therefore the new user can only get a business role assigned as the user cannot have higher permissions than the owner.

![Owner Sample](/guides/images/users-guide/ownersample.png)

### <a name="delegate"></a>Delegating user hierarchies to other users

In Cumulocity, users can delegate their user hierarchies and permissions to another user. The delegated user then has the same user management permissions as the user who activated the delegation. 

You may of course also delegate on a temporary basis, for example if you are temporarily unavailable.

To delegate your permissions to a user, either open the user and click the delegate icon in the **Delegated by** field, or click the menu icon at the right of the user entry in the user list and from the context menu, select **Delegate**.

![User delegation](/guides/images/users-guide/delegation.png)

To undelegate, remove the delegation in the **Delegate by** field, or click **Undelegate** in the context menu.

If the delegated user also needs to manage specific devices, the admin user must assign this device permissions (inventory roles) directly to the intended user. This can be done by using **Copy inventory roles from another user**. For details refer to [Administration > Managing users and permissions > Assigning inventory roles to users](/guides/images/users-guide/user-and-permission-management#attach-inventory).

> **Info:** Delegation works only inside user management and does not have any implication to other places. 

### Troubleshooting sub-users

In the example below the user cannot change the access to the Administration application, because the owner of the user has no USER MANAGEMENT permissions. As a result, the owner user can not assign built-in applications (and the owned user cannot use them). 

![Warning message](/guides/images/users-guide/warning1.png)