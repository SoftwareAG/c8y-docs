---
title: Cockpit
layout: change_log
section:
  - change_log
weight: 10
---


### October 2023

#### -Change-  New filter option

The asset selection in the datapoint selector is now filterable. [MTM-54463]

#### -Feature- Disable/enable realtime for widgets on dashboard level

If a widget supports realtime, it can now be linked to the dashboard real-time context to disable/enable realtime on dashboard level. The following widgets support the real-time dashboard context: Data point graph, Data point table, Event list, Map. [53779]

#### -Feature- Map shown for assets created in the Digital twin manager

If a complex location property is set in the Digital twin manager application, the map is now visible in the asset view and users can select a location on the map. [MTM-54045]

#### -Change- Changed form validation for assets defined via the Digital twin manager

If an asset custom property in the Digital twin mager application is declared as required and complex, all of its sub-properties are required too. [MTM-50101]
