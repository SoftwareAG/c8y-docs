---
title: Streaming Analytics
layout: bundle
section:
  - change_log
weight: 10
---


### October 2023

#### Change - Basic diagnostics information

The EPL memory profiler snapshots, which were previously only included in the enhanced diagnostics information, are now also included in the basic diagnostics information. This is helpful in case a high memory usage alarm is raised when the Apama-ctrl microservice consumes 90% of the maximum memory permitted for the microservice container and you only have basic diagnostics information available. See also [Downloading diagnostics and logs](https://cumulocity.com/docs/streaming-analytics/troubleshooting/#diagnostics-download) in the user documentation.

#### Feature - New EPL sample

A new EPL sample named "Receive update notifications"
can now be accessed from the EPL editor of the Streaming Analytics application.
It shows how to write an EPL app that can distinguish between notifications for creating and updating managed objects, measurements, alarms, events, and operations.
See also [Developing apps with the Streaming Analytics application](https://cumulocity.com/docs/streaming-analytics/epl-apps/#dev-apps-with-sa)
in the user documentation.

For more detailed information, see [Receiving update notifications](https://documentation.softwareag.com/pam/10.15.3/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_receiving_update_notifications.html) in the Apama documentation for the Cumulocity IoT transport connectivity plug-in.

#### Improvement - Analytics Builder

The [Constant Value](https://cumulocity.com/docs/streaming-analytics/block-reference/#constant-value) block now supports `float` and `boolean` value types
and can produce output of these types. This enables the block's output to be consumed by other blocks that take input of type `float` or `boolean` like the blocks in
the **Logic** and **Aggregate** categories. The **Type** parameter is also now optional. If a type is not selected, the type of the output value is inferred from the **Value** parameter.

An icon is now provided for removing a template parameter from the **Template Parameter** dialog box.
The actions menu (the three vertical dots at the end of a row) has therefore been removed. See also [Managing template parameters](https://cumulocity.com/docs/streaming-analytics/analytics-builder/#managing-template-parameters) in the user documentation.
