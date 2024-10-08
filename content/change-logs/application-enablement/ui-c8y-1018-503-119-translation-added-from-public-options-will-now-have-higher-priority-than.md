---
date: ""
title: Public option translations now have higher priority than plugin po files
product_area: Application enablement & solutions
change_type:
  - value: change-VSkj2iV9m
    label: Fix
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-60268
version: 1018.503.119
---
Previously, translations from plugin po files took precedence over translations added via public options, which could lead to inconsistencies. With this change, translations added via public options will now have a higher priority than translations from plugin po files. This ensures that custom translations specified in the public options are correctly applied and displayed in the user interface, providing a more consistent and predictable translation behavior for users.