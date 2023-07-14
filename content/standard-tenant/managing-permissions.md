---
weight: 20
title: Managing permissions
layout: bundle
section:
  - platform_administration
helpcontent:
- label: managing-permissions
  title: Managing permissions
  content: "Permissions define what a user is allowed to do in Cumulocity IoT applications. To manage permissions more easily, they are grouped into so-called 'roles'. Every user can be associated with a number of roles, adding up permissions of the user.


  In the **Global roles** tab you can find the roles which grant permissions on a general level. There are several global roles pre-defined (which may serve as a template), but you can define your own according to your needs.


  In the **Inventory roles** tab you can manage user permissions for particular groups of devices and/or its children. For example, an inventory role can contain the permission to restart a particular device."
---

Permissions define what a user is allowed to do in {{< product-c8y-iot >}} applications. To manage permissions more easily, they are grouped into so-called "roles". Every user can be associated with a number of roles, adding up permissions of the user.

The following types of roles can be associated with users:

- Global roles - contain permissions that apply to all data within a tenant.
- Inventory roles - contain permissions that apply to groups of devices.

Moreover, application access can be granted to enable a user to use an application.
