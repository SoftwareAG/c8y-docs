---
order: 45
layout: redirect
title: The agent or application won't start
---

Check if all required plug-ins are checked in your launch configuration. Go to "Run", "Run Configurations" and select the "OSGi Framework" launch configuration. Click on "Select All" and try running again.

Check if the required plug-ins are started. While the application or agent is running, type "ss" into the console and hit the return key. All listed plug-ins should be either in the "ACTIVE" or "RESOLVED" state.

Check if you are using the correct target platform. Go to the "Target Platform" page in the preferences and check if "Cumulocity runtime" is checked.
