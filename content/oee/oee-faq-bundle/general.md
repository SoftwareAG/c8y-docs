---
weight: 20
title: General
layout: redirect
---

### Breadcrump navigation is displayed incorrectly

If an entity is assigned twice to another entity it can happen that the breadcrump navigation is only displayed correctly for one of the assigned entities.

e.g.: Two lines with the same name "Production Line" (the profile name " - Line Profile" will not be taken into account) are assigned to the same site. One line is subordinate to an area.

* Site: "Darmstadt Hall 2"
  * Line: "Production Line"
    * Machine: "Drilling 1"

<br>

* Area: "Innovative Production"
  * Line: "Production Line - Line Profile"
      * Machine: "Drilling 2"
      * Machine: "Drilling 3"

In this case, it could happen the breadcrump navigation for Machine: "Drilling 3" looks like this "Dashboard > Darmstadt Hall 2 > Production Line > Machine Dashboard" instead of "Dashboard > Darmstadt Hall 2 > Innovative Production > Production Line > Machine Dashboard".

### Where do I find values older than 60 days?

To save OEE data longer than 60 please change your platform settings. You can find the documentation how to change the retention rules [here](/users-guide/administration/#data-retention).

### Can I use my ADAMOS HUB credentials to Log-In?

The login automatically works with Singe-Sign-On.

![Login](/images/oee/faq/faq-login.png)

There are two ways to log in to the OEE-App:

* The shown mask is to log in to the OEE-App directly via the Cumulocity tenant user.
* Please click on "Log in with myADAMOS" to get two the other login mask, to login with your ADAMOS HUB user.

We recommend using the ADAMOS HUB Login to effortlessly switch between different apps.
Basically the chosen way of logging in has no effect on the usage of the OEE-APP.

### Which roles are distinguished by the application?

#### Default User

**Access to:**

* Machine Park Overview
* Machine Dashboard
* Set Alarms
* Glossary
* Andon Board

#### Admin User

Only *Admis Users* are allowed to change and create machine profiles, etc.

**Access to:**

* Admin View
* Machine Park Overview
* Machine Dashboard
* Set Alarms
* Glossary
* Andon Board

#### Andon User (Soon)

Access only to the *Andon Board*.

### Why the app seems to be broken? (Hint for password)

Please don't use "/" in your password since this leads to an error, that will be fixed with Cumulocity version 10.6.12.0.
