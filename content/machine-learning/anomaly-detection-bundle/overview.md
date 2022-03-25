---
title: Overview
layout: redirect
weight: 10

aliases:
  - /predictive-analytics/anomaly-detection/#overview
---

Anomaly detection (also outlier detection) is the identification of items, events or observations which do not conform to an expected pattern or other items in a data set.

Capturing anomalous events through the sensor data of a mobile device on an IoT platform can for instance serve the purpose of detecting accidents of elderly people living without a caretaker. Regular behavior sensor data of a person can be collected over a period of time. This data can then be used to train an anomaly detection model. As soon as an irregularity in behavior data is observed (for example, the person falls down) an anomaly can be detected. For the purpose of showcasing this use case, we followed these steps:

* Collect sensor data from a user performing regular everyday tasks.
* With the collected data, train an anomaly detection model using the Jupyter Notebook and convert the model to PMML.
* Deploy the model to {{< product-c8y-iot >}} using the Machine Learning Workbench application.
* Create and upload an EPL rule to {{< product-c8y-iot >}} which does the following:
	* Gathers specific measurements coming from the source device and conducts any necessary pre-processing steps.
	* Sends the data via REST request to the Zementis microservice API for processing.
	* Creates an anomaly detection alarm if the model predicts the input data to be anomalous.
