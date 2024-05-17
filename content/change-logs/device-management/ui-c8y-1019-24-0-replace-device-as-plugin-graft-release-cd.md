---
date: ""
title: Replace device functionality available as plugin
product_area: Device management & connectivity
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: component--KIsStyzM
    label: Device Management app
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: DM-3546
version: 1019.24.0
---
The Replace device feature is now delivered as a self-hosted plugin by the Device management application. This allows that the feature is easily removable from the application if not needed and that it is plugged to other applications with All devices list or Subassets grid.

Additionally, WebSDK hooks hookDataGridActionControls and hookService have been introduced.