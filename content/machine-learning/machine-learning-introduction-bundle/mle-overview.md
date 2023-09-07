---
weight: 15
title: Machine Learning Engine
layout: redirect
---

Machine Learning Engine enables machine learning/IT operators to manage and operationalize production-ready models for generating predictions on data gathered from connected devices. These capabilities can be leveraged either from a web browser via an easy to use graphical user interface or programmatically via REST API. Machine Learning Engine provides a high-performance inference platform with deployed models exposed as endpoints that can be leveraged from [Streaming Analytics](/streaming-analytics/epl-apps/#microservices) and other applications for real-time inference.

Machine Learning Engine is composed of the following components:

| Name  | Application type | Description |
| ----- | -----            | -----       |
| [machine-learning](/machine-learning/web-app/) | WebApp | Graphical User Interface for Machine Learning Engine |
| [zementis](/machine-learning/api-reference/) | Microservice | Microservice backend for PMML model management and serving |
| [onnx](/machine-learning/api-reference/) | Microservice | Microservice backend for ONNX model management and serving |
| [nyoka](/machine-learning/api-reference/) | Microservice | Microservice backend for Time Series and Clustering models |


### Roles and permissions

Starting with 10.11.0 release, Machine Learning Engine mandates users to have certain permissions to be able to access the [Machine Learning](/machine-learning/web-app/) application as well as to be able to invoke the [REST APIs](/machine-learning/api-reference/). For ease of use and convenience, Machine Learning Engine provides the following pre-defined and pre-configured **Global roles** which embed the necessary permissions already.

#### Machine Learning Admin

Users with the global role “Machine Learning Admin” have unlimited access to Machine Learning Engine and can carry out all the operations that it provides.
The table below shows the permissions for users with this role.

|Type|READ|ADMIN|
|:---|:---|:---|
|Machine learning |yes|yes|


#### Machine Learning User

Users with the global role “Machine Learning User” have limited access to Machine Learning Engine.
Users with this role can perform the following operations:
* View models, resources, model groups, pipelines
* View the properties of all the above mentioned artifacts
* Use these artifacts to carry out predictions on their data
* View the scheduled jobs, their execution history and inferences

This means that users who have the **Machine Learning User** global role assigned can use the artifacts uploaded/created by the admin user(s).
However, they cannot change the state of those artifacts.

|Type|READ|ADMIN|
|:---|:---|:---|
|Machine learning |yes|no|

These pre-defined and pre-configured Machine Learning specific roles show up under **Global roles** in the **Roles** page of the Administration application once the Zementis microservice is subscribed to version 10.11.0 or higher. If the roles already exist, they will not be created.

To be able to leverage Machine Learning Engine, users can have one of the above mentioned global roles assigned. Alternately, users can also update their existing global roles to include the permissions related to Machine Learning Engine or add new roles which should then include the necessary permissions. See [Managing permissions](/users-guide/administration/#managing-permissions) for details on the management of global roles.

If users do not have the permissions mentioned above, they will get an *Access is denied* error while trying to access the Machine Learning application. Consumers of the REST APIs will see a `403 - Forbidden` too.
