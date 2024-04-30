---
date: ""
title: private smart rule no longer require contextData from c8y_Context property (#6031) [GRAFT][release/cd] (#6197)
product_area: Application enablement & solutions
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: component-YdSEScrEC
    label: Cockpit
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-55916
version: 1019.22.0
---
In the past, private smart rules had property contextData in c8y_Context, even if the rule did not use it. This unnecessary requirement has now been removed. Private smart rules can be created without specifying a contextData, to avoid storing redundant MO data in the database. This change only affects the creation of new private smart rules. Existing smart rules are not impacted.