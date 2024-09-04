---
date: 2024-09-03
title: Composite Write transmits data to the device in the specified order
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: DM-3622
version: 10.18.540.186
---
The Composite Write (cwrite) operation transmits resource-values data to the device in the exact order specified in the operation. For details, see [Handling LWM2M shell commands](/protocol-integration/lwm2m/#handling-shell-commands).
