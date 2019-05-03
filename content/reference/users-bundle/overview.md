---
weight: 5
title: Overview
layout: redirect
---
The user interface consists of the following parts:

-   *user API* resource - returns URIs and URI templates to collections of users, groups, and roles, so that all users, groups, roles and user or group with particular name can be queried.
-   *user collection* resource - retrieves sets of users and enables creating new users.
-   *user* resource - represents individual users that can be queried and deleted.
-   *user reference collection* resource - retrieves sets of references to users. These could be, for example, users with a particular global role. It also enables adding new users to a collection.
-   *user reference* resource - represents one individual reference to a user, which can be retrieved or deleted.
-   *current user* resource - represents the user that is logged in and can be queried and modified.
-   *group collection* resource -retrieves sets of groups and enables creating new groups.
-   *group* resource - represents individual groups that can be queried and deleted.
-   *group reference collection* resource - retrieves sets of references to groups. Could be, for example, groups of a particular user.
-   *group reference* resource - represents one individual reference to a group, which can be retrieved or deleted.
-   *role collection* resource - retrieves sets of roles.
-   *role* resource - represents individual roles that can be queried and assigned or unassigned to users or groups.
-   *role reference collection* resource - retrieves sets of references to roles. Could be, for example, roles of a particular user or group.
-   *role reference* resource - represents one individual reference to a role, which can be retrieved.

> **Info:** "Realm" as used in this API usually corresponds to a tenant.

> For all PUT/POST requests an accept header should be provided, otherwise an empty response body will be returned.
