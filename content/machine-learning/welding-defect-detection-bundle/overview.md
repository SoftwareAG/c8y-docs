---
title: Overview
layout: redirect
weight: 10

aliases:
  - /predictive-analytics/welding-defect-detection/#overview
---

Tungsten Inert Gas (TIG) welding is an arc welding process in which a tungsten electrode is used to produce the weld. The electrode is not consumed, and the electrode and weld pool are protected from contamination by an inert gas. A few defects that can occur during this process are lack of fusion, misalignment, and burn through. The TIG welding process is complex and expensive which makes early defect detection desirable. 

One way to catch these defects is with non-destructive testing, in which a weld is inspected visually. In this demo, we use images of TIG welds to build a deep learning model to classify images as containing defects or being defect-free. By leveraging deep learning techniques, we can thus automate inspection of weld quality.

In this use case, we take the following steps:

* Download the project archive and upload it to {{< product-c8y-iot >}} Machine Learning Workbench.
* Use MLW's integrated Jupyter Notebook to train a model using transfer learning and convert it to ONNX.
* Use the ONNX model along with the included pre-processing and post-processing scripts to build an inference pipeline, and deploy it on {{< product-c8y-iot >}} Machine Learning Engine.
* Make inferences using the model in production.