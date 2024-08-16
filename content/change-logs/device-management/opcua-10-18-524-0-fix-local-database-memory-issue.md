---
date:
title: Fixed local database memory issue for OPC UA gateway
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-Tf05_KQ-B
    label: OPC UA
build_artifact:
  - value: tc-MLn0oFRX-
    label: opcua
ticket: DM-3800
version: 10.18.524.0
---
The OPC UA gateway creates a local database `cumulocity-opcua-gateway.db` to store essential data, including a list of executed operation IDs.
As this list expands, the database file consumes more disk space. This issue has been resolved with the latest update, which now includes a cleanup process during the gateway startup to reduce the size of the database file.