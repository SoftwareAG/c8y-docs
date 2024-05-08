---
date: ""
title: The update of the TFA strategy takes place through the TFA endpoint.
product_area: Platform services
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-0UgqXH1Ys
    label: Administration
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-52862
version: 1019.23.1
---
When changing the TFA strategy, the application must update the strategy for all users. This effect is not implemented if the strategy update occurs through changing tenant options. Changing the endpoint ensures that after changing the strategy on the configuration page, the strategy for all users will be updated.
