---
weight: 20
title: Machine park overview
layout: redirect
---

The **Overview** page is the landing page of the OEE application. Here you can find aggregated information on the OEE values of your machine park.

**add image**

Depending on the defined target value, the OEE box for an entity is either displayed in green (above threshold) or in red (below threshold). The particular value and the threshold are also shown in the OEE box.

Every 10 minutes a new value is calculated. The precise timestamp is shown in the latest update information.

### Overview

In the upper section, the OEE overview for the entire machine park is shown, i.e. the average OEE value of all sites, lines and machines listed on the **Machine Park Dashboard**.

### Areas, sites and lines

Below, the OEE for the areas, sites and lines is displayed.

Clicking the arrows expands (or collapses) an entity and shows (or hides) the entities attached to it.

**add image**

The OEE value for an entity is calculated as the average or the product (see below) of the associated entities that follow in the hierarchy. The hierarchy is as follows: Site < Area < Line < Machine.

For sites, areas and lines you can select one of the following options for the OEE calculation:

* the average of the attached entities
* the product (percentages) of the attached entities

This can either be configured when creating an area, site or line profile or set later under **Administration** > **Organization**, see [Administration](/oee/administration/).


In the search field at the top left you can search for specific sites, areas, lines and machines by searching for their profile name.

By clicking the checkbox 'Show only items with todos' only sites, areas, lines and machines with open to-do's will be displayed.

An orange alarm icon at the right of an entry indicates an alarm within this entity, together with the number of alarms  shown in red.

Alarm status?



### (4) Legend

Orange bordered triangle - Indicates an alarm within this entity.*


Orange Triangle - Displays the number of alarms on the machine or line.*


Orange Dot - Profile within the entity is not fully configured or ab external profile within this entity has not received a measurement yet.


Grey Square - Indicates that the profile is deactivated and no new measurements are being received.

*The colour of the alarms depends on the priority of the alarms. In general, the colour of the alarm with the highest priority is always displayed.

![Sites](/images/oee/dashboards/dashboard-legend.png)
