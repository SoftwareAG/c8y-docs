---
weight: 90
title: What is the simplest profile to define?
layout: redirect
---

To get started with the OEE application, you have to create a profile to start the calculation. To create a very basic profile, you can use the following settings:

* Profile => Profile Name: any
* Machine => Machine location: any
* Workpiece => 1 pcs per minute
* Resolution => 10 minutes
* Computation => PPQ
* Matching
	* Actual Production Amount => Depending on your machine/simulator and the data it is sending, this could be something like counting events (e.g. "Piece_Produced")
	* Actual Production Time / Actual Quality Amount => To keep the profile simple, you can define the values to be 100% by comparing two fixed numbers, e.g. "1 = 1":
![Example](/images/oee/faq/faq-actual-quality-amount.png)
* Short stoppages => Should not be tracked
* Goals => any
