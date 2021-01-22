---
weight: 10
title: Machine Learning Workbench
layout: redirect
---

Machine Learning Workbench enables data scientists and machine learning engineers to build, train and evalute high quality machine learning models using intuitive, easy to use, no-code graphical user interface and a programmer-friendly Jupyter Notebook based environment. Machine Learning Workbench provides seamless access to data residing in Cumulocity operational store or any cloud data lakes with visual tools to ingest and transform the data.

Machine Learning Workbench is composed of following components:

| Name  | Application Type | Description |
| ----- | -----            | -----       |
| [machine-learning-workbench](/machine-learning/web-app-mlw/) | WebApp | Graphical User Interface for Machine Learning Workbench |
| [mlw](/machine-learning/api-reference-mlw/) | Microservice | Microservice backend for Machine Learning Workbench |
| [mlw-cdh](/machine-learning/api-reference-mlw/) | Microservice | Microservice backend with DataHub role for Machine Learning Workbench |

>**Info:** Subscription of exactly one microservice (mlw or mlw-cdh) is required to work with Machine Learning Workbench. To fetch data from [Cumulocity IoT DataHub](/datahub/datahub-overview/), subscription of mlw-cdh and DataHub is required.
