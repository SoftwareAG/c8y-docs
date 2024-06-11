---
date:
title: LWM2M agent can now cancel observations using the "GET with observe option" method
product_area: Device management & connectivity
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: component-1KLUzmqfe
    label: LWM2M
build_artifact:
  - value: tc-ggH2M4hf3
    label: lwm2m-agent
ticket: DM-2936
version: 10.20.350.0
---
In the previous versions of LWM2M agent it was possible to cancel observations, but only by using the "reset" method. This version introduces possibility to use "GET with observe" cancellation method.  