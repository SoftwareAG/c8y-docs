---
date: ""
title: Fixed missing newline characters in the result section in the shell tab on the device details page.
product_area: Device management & connectivity
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component--KIsStyzM
    label: Device Management app
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: DM-3505
version: 1019.20.4
---
In the Cumulocity IoT device details shell tab, commands executed through the shell operation previously displayed result template with missing new line characters, making it difficult to read. This issue has now been resolved. The shell operation now correctly includes newline characters in the command output as expected. This improvement makes the results of shell commands much easier to read and interpret for users working with the shell operation.