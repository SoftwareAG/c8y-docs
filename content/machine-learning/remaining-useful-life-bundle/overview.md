---
title: Overview
layout: redirect
weight: 10

aliases:
  - /predictive-analytics/remaining-useful-life/#overview
---

The key to highly profitable equipment is to proactively detect required maintenance early and to properly estimate the remaining useful life of the machine parts. There are two common scenarios: Either, equipment gets replaced far too early before the end of life is reached. Or failure is detected too late, so that unplanned and costly downtimes occur. Therefore, it is vital to estimate the remaining useful life of equipment accurately. The term "remaining useful life" (RUL) is defined as “the length from the current time to the end of the useful life” [1]. RUL helps estimate the inspection or maintenance period and minimize excessive inventory by reducing unplanned failure.

The most common RUL estimator models are similarity, survival, and degradation models. Similarity models are used to estimate RUL when complete histories from similar machines are available. However, if only data from the time of failure is available,  survival models are used. If failure data is not available but one has knowledge of a safety threshold, one can use degradation models.

For this demo we are using a popular data set from NASA, called CMAPSS. CMAPSS stands for Commercial Modular Aero-Propulsion System Simulation and it is a tool for the simulation of realistic large commercial turbofan engine data. Each turbofan data has measurements from 21 sensors and starts with data from normal operation to the point of failure. The parameters for each flight are the flight conditions, health indicators, measurement temperatures and pressure measurements.


[1] X.-S. Si, W. Wang, C.-H. Hu and D.-H. Zhou, "Remaining useful life estimation—A review on the statistical data driven approaches", Eur. J. Oper. Res., vol. 213, no. 1, pp. 1-14, Aug. 2011.



To start the demo, complete the following steps:

* Train a machine learning model via a Jupyter Notebook in MLW.
* Create a demo device in {{< product-c8y-iot >}} that mimics an actual engine.
* Simulate measurements for the demo device.
* Generate remaining useful life estimates based on the simulated data.
* Display the predictions in a number of {{< product-c8y-iot >}} widgets.


