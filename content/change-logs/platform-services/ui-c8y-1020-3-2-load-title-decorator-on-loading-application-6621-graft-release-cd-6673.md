---
date: ""
title: Fix loading of title decorator when loading application
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-59716
version: 1020.3.2
---
In certain scenarios, the title decorator was not properly loaded when an application was loaded, leading to missing or incorrect application titles being displayed to users. This issue has been resolved by ensuring the title decorator is consistently loaded whenever an application is loaded. Users will now see the correct application title displayed at all times.