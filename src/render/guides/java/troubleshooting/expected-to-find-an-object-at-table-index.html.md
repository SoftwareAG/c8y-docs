---
order: 30
layout: redirect
title: '"Expected to find an object at table index" when running an agent or application'
---

This error occurs due to a bug in particular Eclipse versions. As a workaround, select "Run" from the main menu and "Run Configurations ...". On the left, select the launch configuration that you have been using, e.g., "OSGi Framework". On the right, click the "Arguments" tab. Append a " -clean" to the "Program Arguments" and click "Apply".