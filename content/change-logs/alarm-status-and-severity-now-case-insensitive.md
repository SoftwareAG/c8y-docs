---
date: 2023-11-29T16:01:45.459Z
title: Alarm status and severity now case-insensitive
change_log: false
product_area:
  - value: product_area-T1-_TpDyv
    label: Platform services
component:
  - value: component-JlFdtOPva
    label: Rest API
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
technical_component:
  - value: tc-QHwMfWtBk7
    label: cumulocity
jira: MTM-52515
---
The alarm status and severity are now case-insensitive. When searching by alarm status `active` the API also returns alarms with status `ACTIVE`. The same applies for the alarm severity, that is, searching for `critical` alarms also returns `CRITICAL` alarms. Alarms with status `active` and `acknowledged` are now subject of alarm deduplication.
