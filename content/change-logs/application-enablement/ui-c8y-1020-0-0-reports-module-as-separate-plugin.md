---
date: 2024-04-26
title: Extract the Reports view into a separate plugin
product_area: Application enablement & solutions
change_type:
  - value: change-inv-3bw8e
    label: Announcement
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-58448
version: 1020.0.0
---
In the upcoming version we will extract the Reports module from the Cockpit application and add it as a separate plugin.
This is just first step towards removing Reports completely and replace is with Dashboard manager.
It might be breaking change as Reports module won't be part of `@c8y/ngx-components/context-dashboard` anymore, but will be part of `@c8y/ngx-components/report-dashboard`.

This change won't affect visual and UX of Cockpit application nor add any new functionalities.
As side effect, performance improvement might be noticed as Reports from now on will be loaded lazily (only when user navigates to Reports).


