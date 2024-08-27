---
date: 2024-04-26
title: Reading software items of a device no longer results in running out of memory
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component--KIsStyzM
    label: Device Management app
build_artifact:
  - value: tc-TlhlHnKTa
    label: advanced-software-mgmt
ticket: DM-3837
version: 1.9.0
---
The Advanced Software Management microservice used to run out of memory while reading the software items of a device. This issue has been fixed.
The process has been optimized towards reading the software items of a device without issues and improving the stability in case of devices with a large number of software items. 