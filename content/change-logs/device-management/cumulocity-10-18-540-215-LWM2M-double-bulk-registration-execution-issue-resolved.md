---
date: 
title: Double Bulk Registration Execution Issue Resolved
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
ticket: DM-3994
version: 10.18.540.215
---
When uploading the LWM2M bulk registration file, there was a potential issue where the registration could be processed twice, causing the second attempt to fail and revert to PENDING, leading to repeated retries. This issue has now been resolved, ensuring that each operation is executed only once. In the event of a failure, the operation will no longer be retried.
