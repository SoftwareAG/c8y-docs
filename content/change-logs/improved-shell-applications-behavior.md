---
date: 2023-12-06T13:35:23.509Z
title: Improved shell applications behavior
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
product_area:
  - value: product_area-eC7h0SiQ2b
    label: Application enablement & solutions
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
technical_component:
  - value: tc-pjJiURv9Y
    label: ui-c8y
jira: MTM-53695
version: 10.18.290.0
---
Shell applications now wait with their initial navigation until all plugins have been loaded. This allows, for example, to directly navigate via a link to a route which is provided by a plugin.