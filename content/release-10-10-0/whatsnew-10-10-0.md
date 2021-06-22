---
weight: 10
title: What´s new
layout: bundle
---


Release 10.10.0 includes the following new features or major feature enhancements.


### New microservice-based data broker

A new microservice-based implementation of the data broker has been added. The new data broker is functionally equivalent to the existing data broker, but powered by the new Cumulocity IoT Messaging Service that enables reliable, scalable and high-performance flow of IoT data within the platform. The original data broker will continue to operate alongside the microservice-based data broker for the time being. Users can choose which data broker to use on a per-tenant basis.

At this time the microservice-based data broker is only available in the eu-latest.cumulocity.com public cloud environment. It can also be made available by request in private cloud environments. Contact [product support](/releasenotes/about/contacting-support/) to inquire about using the new data broker in your Cumulocity IoT environment.

For details, see [Enterprise tenant > Microservice-based data broker](https://cumulocity.com/guides/users-guide/enterprise-edition/#mas-based-data-broker) in the *User guide*.

### Cockpit & Device Management - Improved subasset view for groups

The groups view, and in particular its subasset view, has been redesigned to support sorting and filtering options.

In the Cockpit application, the <b>Subassets</b> tab now shows group information, group notes, and all subassets of the group in a list. The subassets can be sorted or filtered.

![Subasset tab](/images/release-notes/cockpit-subasset.png)

The <b>Subassets</b> tab is displayed directly after the dashboards. Smart rules are now configured in a separate tab.

In the Device Management application, the new <b>Subassets</b> tab is now displayed initially when clicking a group in the navigator.

For details, see [Cockpit > Managing assets](https://cumulocity.com/guides/users-guide/cockpit/#managing-assets) and [Device management > Grouping devices](https://cumulocity.com/guides/users-guide/device-management/#grouping-devices) in the *User guide*.

### UI - Improved search functionality

The search functionality, which can be accessed via the **Search** button in the top bar, has been improved. In addition to searching for exact matches, it is now also possible to search with "starts with", "contains", and "ends with" options.

![Search](/images/release-notes/getting-started-ui-search.png)

For details, see [Getting started > UI functionalities and features](https://cumulocity.com/guides/users-guide/getting-started/#gui-features) in the *User guide*.


### New Telefonica KITE platform connectivity

to be added


### Audit logs enhancements

The audit logs functionality has been extended. Audit logs now also include:

<li>Information on user logins through the UI for both OAuth Internal and single sign-on logins
<li>Password changes to local platform users, including the user whose password has changed and the user who initiated the password change



See also the [Audits](https://www.cumulocity.com/api/#tag/Audits) section in the *Cumulocity IoT OpenAPI Specification*.
