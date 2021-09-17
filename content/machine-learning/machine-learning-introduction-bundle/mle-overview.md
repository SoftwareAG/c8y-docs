---
weight: 15
title: Machine Learning Engine
layout: redirect
---

Machine Learning Engine enables machine learning/IT operators to manage and operationalize production-ready models for generating predictions on data gathered from connected devices. These capabilities can be leveraged either from a web browser via an easy to use graphical user interface or programmatically via REST API. Machine Learning Engine provides a high-performance inference platform with deployed models exposed as endpoints that can be leveraged from [Streaming Analytics](/apama/microservices/) and other applications for real-time inference.

Machine Learning Engine is composed of the following components:

| Name  | Application type | Description |
| ----- | -----            | -----       |
| [machine-learning](/machine-learning/web-app/) | WebApp | Graphical User Interface for Machine Learning Engine |
| [zementis](/machine-learning/api-reference/) | Microservice | Microservice backend for PMML model management and serving |
| [onnx](/machine-learning/api-reference/) | Microservice | Microservice backend for ONNX model management and serving |
| [nyoka](/machine-learning/api-reference/) | Microservice | Microservice backend for Time Series and Clustering models |


### Roles and permissions

Starting with 10.11.0.x release, Machine Learning Engine mandates users to have certain permissions to be able to access the [Machine Learning](/machine-learning/web-app/) application as well as to be able to invoke the [Zementis Microservice APIs](/machine-learning/api-reference/). For ease of use and convenience, there a set of **Global roles** pre-defined and pre-configured by the Machine Learning Engine which embeds the necessary permissions already. To be able able to leverage the Machine Learning Engine, users can opt to be part of one of these pre-defined global roles. Alternately, users coan also update their existing global roles to include the permissions related to Machine Learning Engine or add new roles which should then include the necesary permissions. See [Managing permissions](/users-guide/administration/#managing-permissions) to know more about role management.

#### Machine Learning Admin
Content to be added

#### Machine Learning User
Content to be added