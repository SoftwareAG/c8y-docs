---
date: ""
title: Allow self-imported plugins to be added even if user already has plugins
product_area: Application enablement & solutions
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: component-YbYJ3gLU_
    label: Web SDK
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-59272
version: 1020.0.0
---
In case a user upgrades one of the default web applications (for example Cockpit) after it has been cloned, it would only include the plugins that the application had offered during the initial clone/installation of the application.
In case additional `self-imported` plugins were introduced in the upgraded version, these would not have been present when using the application.

This was especially causing issues when features of applications which were previously present as standard angular modules have been migrated to `self-imported` module federation plugins, as afterwards the feature would have been missing until a user manually installed the plugin to the application.

This change prevents this from happening, by utilizing an exclude list for these `self-imported` plugins in addition to the already existing include list, that is used for the usual plugins.