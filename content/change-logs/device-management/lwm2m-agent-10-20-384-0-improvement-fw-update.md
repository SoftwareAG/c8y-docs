---
date:
title: You can now configure LWM2M devices to halt the firmware update process if an unexpected state is detected.
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
product_area: Device Management & Connectivity
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-ggH2M4hf3
    label: lwm2m-agent
ticket: DM-3888
version: 10.20.384.0
---

In previous LWM2M agent versions, if a device reported an unexpected status or result during a firmware update, 
the process would simply wait for a valid state. Now, you can configure LWM2M devices to terminate the firmware update 
process if an unexpected situation is detected.  