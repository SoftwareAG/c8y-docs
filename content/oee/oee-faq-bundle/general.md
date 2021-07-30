---
weight: 20
title: General
layout: redirect
---

### Breadcrumb navigation is displayed incorrectly

If an entity is assigned twice to another entity the breadcrumb navigation can be only displayed correctly for one of the assigned entities.

**Example:**

 Two lines with the same name "Production Line" (the profile name " - Line Profile" will not be taken into account) are assigned to the same site. One line is subordinate to an area.

* Site: "Darmstadt Hall 2"
  * Line: "Production Line"
    * Machine: "Drilling 1"

<br>

* Area: "Innovative Production"
  * Line: "Production Line - Line Profile"
      * Machine: "Drilling 2"
      * Machine: "Drilling 3"

In this case, it could happen the breadcrumb navigation for Machine: "Drilling 3" looks like this "Dashboard > Darmstadt Hall 2 > Production Line > Machine Dashboard" instead of "Dashboard > Darmstadt Hall 2 > Innovative Production > Production Line > Machine Dashboard".

### Values older than 60 days?

To save OEE data longer than 60 please change your platform settings. For more information on how to change the retention rules see [Administration > Data retention](/users-guide/administration/#data-retention) in the User guide.

### Different roles in the application / Roles distinguished in application

#### Default User

The Default user has access to:

* Machine Park Overview
* Machine Dashboard
* Set Alarms
* Glossary
* Andon Board

#### Admin User

Only Admim Users are allowed to change and create machine profiles, etc.. It has access to:

* Admin View
* Machine Park Overview
* Machine Dashboard
* Set Alarms
* Glossary
* Andon Board

#### Andon User (Coming Soon)

Access only to the Andon Board.
