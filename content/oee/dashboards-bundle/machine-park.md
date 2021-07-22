---
weight: 20
title: Machine park
layout: redirect
---

This is your landing page. Here you can find aggregated information about your machine park, see picture below. In the following you will receive an explanation of every segment displayed on the *'Machine Park Overview'*.

*(The color indicates if a group, line or machine is above or below a defined target value.)*

*(Every 10 minutes a new value is calculated for the elapsed 10 minutes.)*

### Overview

![Dashboard](/images/oee/dashboards/dashboard-overview.png)

### (1) Machine Park OEE

The '*Machine Park OEE*' displays the average OEE value of all Sites, Lines and Machines listed on the *Machine Park Dashboard*. Depending on the defined target value for the OEE of a Site, Line or Machine the OEE is either displayed in green (above threshold) or in red (below threshold).

### (2) Search and Filter

In the search bar you can search for specific sites, areas, lines and machines by searching for their profile name. By clicking the checkbox 'Show only items with todos' only sites, areas, lines and machines with open to-do's will be displayed. The button '*Expand all*' expands all lines, areas and sites and the button '*Collapse all*' folds them up again.

### (3) Areas, Sites and Lines</h3>

Clicking on the text of an area, site or line will expand the view so that you can see the entities attached to it, as shown in the picture.


The OEE value for an entity is calculated as the average or the product of the associated entities that are next in hierarchy. Hierarchy is as follows: Site < Area < Line < Machine.

For sites, areas and lines you can chose between the following options for their OEE calculation:

* as the average of the attached entities
* as the product (percentages) of the attached entities

This can be adjusted by a toggle bar either whilst creating the area, site or line profile and can be adjusted later in the '*Organization*' tab of the admin view. More information in the section '*Organization*' in the admin view paragraph of this documentation.

![Sites](/images/oee/dashboards/dashboard-machine-site.png)

### (4) Legend

Orange bordered triangle - Indicates an alarm within this entity.*


Orange Triangle - Displays the number of alarms on the machine or line.*


Orange Dot - Profile within the entity is not fully configured or ab external profile within this entity has not received a measurement yet.


Grey Square - Indicates that the profile is deactivated and no new measurements are being received.

*The colour of the alarms depends on the priority of the alarms. In general, the colour of the alarm with the highest priority is always displayed.

![Sites](/images/oee/dashboards/dashboard-legend.png)
