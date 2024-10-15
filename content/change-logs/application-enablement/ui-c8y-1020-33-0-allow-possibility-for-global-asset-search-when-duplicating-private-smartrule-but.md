---
date: ""
title: Allow global asset search when duplicating private smart rule and update context for new rule
product_area: Application enablement & solutions
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: component-YdSEScrEC
    label: Cockpit
build_artifact:
  - value: tc-pjJiURv9Y
    label: ui-c8y
ticket: MTM-54749
version: 1020.33.0
---
When creating a duplicate of the local smart rule, it is now possible to select asset from outside of hierarchy. Duplicate of the rule is now created within the context of the selected asset.

Example:
Duplicate a rule form one group to another and enable it for all child assets would require following steps:
1. Select local smart rule to create duplicate from.
2. When updating configuration click search for target asset and find target group.
3. Ensure that checkbox 'Activate also for X assets' selected if you want to enable the rule for children of selected asset.
4. Save new rule
5. Check alert message displayed which should contain a link to target group. Navigate to new location using it to discover newly created rule.
