---
weight: 90
title: What is the simplest profile to define?
layout: redirect
---

To get started with the OEE application, you must create a profile to start the calculation. To create a very basic profile, you can use the following settings:

* **Profile**: Enter a Profile name
* **Machine**: Enter a Machine location
* **Workpiece**: Select a quantity. For this example the value is 1 pcs per minute.
* **Resolution**: Enter an interval and a unit. For this example the interval is 10 minutes.
* **Computation**:  Select a calculation method. For this example it is PPQ.
* **Matching**: Select the desired calculation formula.
	For this example the values could be the following:
	* Actual Production Amount - Depending on your machine/simulator and the data it is sending, this could be something like counting events (for example "Piece_Produced")
![Example for Actual Production Amount](/images/oee/faq/faq-actual-production-amount.png)
	* Actual Production Time / Actual Quality Amount - To keep the profile simple, you can define the values to be 100% by comparing two fixed numbers, for example, "1 = 1".
![Example for Actual Quality Amount](/images/oee/faq/faq-actual-quality-amount.png)
* **Short stoppages**: We recommend to disable the tracking of short stoppages. For this example the tracking is disabled.
* **Goals**:  Define the goal value in percent.

For details see [Machine profiles](/oee/oee-administration/#machine-profiles).
