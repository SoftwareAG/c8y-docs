---
weight: 10
title: Machine Learning Workbench
layout: redirect
---

Machine Learning Workbench enables data scientists and machine learning engineers to build, train and evaluate high-quality machine learning models using an intuitive, easy to use, no-code Graphical User Interface and a programmer-friendly Jupyter Notebook based environment. Machine Learning Workbench provides seamless access to data residing in {{< product-c8y-iot >}} operational store or any cloud data lakes with visual tools to ingest and transform the data.

Machine Learning Workbench is composed of the following components:

| Name  | Application type | Description |
| ----- | -----            | -----       |
| [machine-learning-workbench](/machine-learning/web-app-mlw/) | WebApp | Graphical User Interface for Machine Learning Workbench |
| [mlw](/machine-learning/api-reference-mlw/) | Microservice | Microservice backend for Machine Learning Workbench |


### Roles and permissions

Starting with 10.13.0 release, Machine Learning Workbench mandates users to have certain permissions to be able to access the [Machine Learning Workbench](/machine-learning/web-app-mlw/) application as well as to be able to invoke the [REST APIs](/machine-learning/api-reference-mlw/). For ease of use and convenience, the Machine Learning Workbench provides the following pre-defined and pre-configured **global roles** which embed the necessary permissions already.

#### Machine Learning Admin

Users with the global role “Machine Learning Admin” have unlimited access to the Machine Learning Workbench and can carry out all the operations that it provides.
The table below shows the permissions for users with this role.

|Type|READ|CREATE|UPDATE|ADMIN|
|:---|:---|:---|:---|:---|
|Machine learning |yes|yes|yes|yes|


#### Machine Learning Manager

Users with the global role “Machine Learning Manager” have limited access to the Machine Learning Workbench and can carry out all its operations except delete operations.
The table below shows the permissions for users with this role.

|Type|READ|CREATE|UPDATE|ADMIN|
|:---|:---|:---|:---|:---|
|Machine learning |yes|yes|yes|no|


#### Machine Learning User

Users with the global role “Machine Learning User” have limited access to Machine Learning Workbench and can only view the projects, associated files, tasks, assets etc.
The table below shows the permissions for users with this role.

|Type|READ|CREATE|UPDATE|ADMIN|
|:---|:---|:---|:---|:---|
|Machine learning |yes|no|no|no|

These pre-defined and pre-configured Machine Learning specific roles show up under **Global roles** in the **Roles** page of the Administration application once the MLW microservice is subscribed to version 10.13.0 or higher.

To be able to leverage the Machine Learning Workbench, users can have one of the above mentioned global roles assigned. Alternately, users can also update their existing global roles to include the permissions related to Machine Learning Workbench or add new roles, which should then include the necessary permissions. See [Managing permissions](/users-guide/administration/#managing-permissions) for details on the management of global roles.

If users do not have the permissions mentioned above, they will get an *Access denied.* error while trying to access the Machine Learning Workbench application. Consumers of the REST APIs will see a `403 - Forbidden` too.
