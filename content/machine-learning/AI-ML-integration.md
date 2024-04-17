---
title: AI/ML integration
layout: bundle
section:
  - data_analytics
weight: 20
---

The image below illustrates a high-level architecture perspective, starting with providing the data via {{< product-c8y-iot >}} DataHub, training the model, making it available for various deployment scenarios (identified as A/B/C later on) to integrate in a workflow with {{< product-c8y-iot >}} Streaming Analytics.

The steps below guide you in realizing an end-to-end Machine Learning solution leveraging the {{< product-c8y-iot >}} platform and integrated Data Science & Machine Learning (DSML) components/tooling/platforms, which could be open source components such as TensorFlow and/or tooling from some of our leading AI/ML partners such as Microsoft Azure, AWS (Amazon Web Services), IBM or Boon Logic.


### Step 0 - Make the IoT data available for modeling

All AI/ML use cases start with (next to defining the objective of the use case) defining the data requirements and compiling a set of historical IoT data for training purposes. The IoT data, which is ingested from the connected devices, machines & equipment is retained in the Operational Store of {{< product-c8y-iot >}} for a limited amount of time. To support long-term (and cost-efficient) storage, as well as easy data extraction, offloading and/or querying for the purpose of developing Machine Learning models, the DataHub add-on product is suggested.

See the [DataHub documentation](/datahub/) for more information.


### Step 1 - Create and bring your own AI/ML model (BYOM)
