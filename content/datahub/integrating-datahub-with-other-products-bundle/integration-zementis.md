---
weight: 20
title: Integrating Cumulocity IoT DataHub with Machine Learning Workbench
layout: redirect
---

Machine Learning Workbench (MLW) is designed to facilitate the work of data scientists and machine learning practitioners by streamlining model training and evaluation activities. MLW provides a no-code UI as well as a Jupyter Notebook-based setup for the various machine learning tasks.

Machine learning heavily relies on suitable datasets for training and evaluating models. For the specific case of IoT data, MLW offers tooling to ingest and process data from devices connected to the {{< product-c8y-iot >}} platform. In particular, MLW can process the data which {{< product-c8y-iot >}} DataHub has offloaded into a data lake. For that purpose, MLW provides a connector for {{< product-c8y-iot >}} DataHub, which fetches the data from the data lake using a SQL query. The imported data is then stored in CSV format in MLW. Once the data is in place, you can start training or evaluating corresponding machine learning models.

For detailed instructions on how to leverage data offloaded by {{< product-c8y-iot >}} DataHub in MLW see [Data pull](/machine-learning/web-app-mlw/#third-party-data-pull) of the MLW documentation.
