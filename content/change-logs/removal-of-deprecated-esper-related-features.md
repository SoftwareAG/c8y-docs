---
date: 2023-12-01T15:44:47.449Z
title: Removal of deprecated Esper-related features
product_area:
  - value: product_area-T1-_TpDyv
    label: Platform services
component:
  - value: component-0UgqXH1Ys
    label: Administration
change_type:
  - value: change-inv-3bw8e
    label: Announcement
technical_component:
  - value: tc-QHwMfWtBk7
    label: Core
---
Esper-CEP-related features have been removed from the UI such as:

* the **Event processing** page from the Administration application
* the inspect feature from the smart rules menu (rule debug was originally available for Esper only) Removed Esper CEP related services and modules from the AngularJS Web SDK:
* `eventProcessingSvc` (*@c8y/ng1-modules/administration-eventProcessing/cumulocity.json*)
* `c8yCepModule`, `c8yCepModuleExamples` (*@c8y/ng1-modules/notifications/cumulocity.json*) \[MTM-49963]