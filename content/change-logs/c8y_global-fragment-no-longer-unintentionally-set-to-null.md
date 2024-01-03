---
date: 2023-12-06T11:23:22.520Z
title: c8y_Global fragment no longer unintentionally set to null
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area:
  - value: product_area-eC7h0SiQ2b
    label: Application enablement & solutions
component:
  - value: component-YdSEScrEC
    label: Cockpit
technical_component:
  - value: tc-pjJiURv9Y
    label: ui-c8y
jira: MTM-54213
version: 10.18.288.0
---
In case the <code>doNotAddGlobalFragmentByDefault</code> option has been set in the configuration of the <code>DatapointLibraryModule</code>, the <code>c8y_Global</code> fragment is no longer unintentionally set to <code>null</code> during the creation of a new data point library entry.
