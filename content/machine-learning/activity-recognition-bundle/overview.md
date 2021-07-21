---
title: Overview
layout: redirect
weight: 10

aliases:
  - /predictive-analytics/activity-recognition/#overview
---

Sensor-based activity recognition can be used to model a wide range of human activities. Mobile devices, such as smart phones provide sufficient sensor data and calculation power to enable physical activity recognition to provide an estimation of the energy consumption during everyday life.

Sensor-based activity recognition researchers believe that by empowering ubiquitous computers and sensors to monitor the behavior of agents (under consent), these computers will be better suited to act on our behalf (see [Wikipedia](https://en.wikipedia.org/wiki/Activity_recognition)).

In this use case, we would like to showcase the recognition of the human activities - sitting, jumping and walking. For the purpose of showcasing the same, we followed these steps:

* Collect sensor data from a user performing activities (sitting, jumping and walking).
* Train an activity recognition model with the collected data and generate the model in PMML format using {{< product-c8y-iot >}} Machine Learning Workbench.
* Deploy the model into {{< product-c8y-iot >}} the Machine Learning application.
* Create and upload an EPL rule to {{< product-c8y-iot >}} Streaming Analytics which does the following:
	* Gathers specific measurements coming from the source device and conducts any necessary pre-processing steps.
	* Sends the data via REST request to the the Zementis microservice API for processing.
	* Creates an update alert once the user changes activities.
