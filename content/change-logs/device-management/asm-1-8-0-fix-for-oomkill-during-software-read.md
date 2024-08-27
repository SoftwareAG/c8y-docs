---
date: 2024-04-26
title: Optimized Memory Usage while reading softwares of a device
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
The Advanced Software Management microservice used to crash due to an Out of Memory error while reading the softwares of a device. This fix optimises the process 
of reading the softwares of a device without causing the microservice to crash and improves stability when we have devices with a large number of softwares. 