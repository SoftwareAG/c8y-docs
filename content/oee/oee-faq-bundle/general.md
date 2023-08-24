---
weight: 20
title: General
layout: redirect
---

### Breadcrumb navigation is displayed incorrectly {#breadcrumb-navigation-is-displayed-incorrectly}

If an entity is assigned twice to another entity the breadcrumb navigation can be only displayed correctly for one of the assigned entities.

**Example:**

 Two lines with the same name "Production Line" (the profile name "Line Profile" will not be taken into account) are assigned to the same site. One line is subordinate to an area.

* Site: "Darmstadt Hall 2"
  * Line: "Production Line"
    * Machine: "Drilling 1"

<br>

* Area: "Innovative Production"
  * Line: "Production Line - Line Profile"
      * Machine: "Drilling 2"
      * Machine: "Drilling 3"

In this case, it may happen that the breadcrumb navigation for "Machine: Drilling 3" looks like this:

 "Dashboard > Darmstadt Hall 2 > Production Line > Machine Dashboard"

 instead of

 "Dashboard > Darmstadt Hall 2 > Innovative Production > Production Line > Machine Dashboard".

### Where do I find values older than 60 days? {#where-do-i-find-values-older-than-60-days}

The standard retention for data on {{< product-c8y-iot >}} is 60 days. To save OEE data longer than 60 days, you can change the data retention in your platform settings. For more information on how to change the retention rules, see [Retention rules](/standard-tenant/managing-data/#retention-rules).

### Which roles are distinguished by the application? {#which-roles-are-distinguished-by-the-application}

#### Default user {#default-user}

The default user has access to:

* Machine Park Overview
* Machine Dashboard
* Andon Board

The default user needs a role assigned with the Oeeconfigurator Read permission enabled.

#### Admin user {#admin-user}

Only admin users are allowed to change and create machine and line profiles. Admin users have access to:

* Organization, Profiles, Calculation categories under Administration
* Machine Park Overview
* Machine Dashboard
* Andon Board

The admin user needs a role assigned with the Oeeconfigurator Admin permission enabled.
