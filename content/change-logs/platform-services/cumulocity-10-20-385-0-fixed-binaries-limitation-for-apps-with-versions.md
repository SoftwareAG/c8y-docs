---
date: 2024-05-17
title: Only 6 binaries were kept in the binary API storage for applications with versions
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-0UgqXH1Ys
    label: Administration
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-58877
version: 10.20.385.0
---
Since introduction of the applications with versions feature (microfrontends Blueprints and Plugins) number of stored historical archives was limited to 6 files, although number of allowed versions for application was by default 20. Oldest files were automatically deleted when 7th version of application was uploaded with binary attachment. This has been fixed and now limit for binaries is equal to application versions limit (20 by default).   
