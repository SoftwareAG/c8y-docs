---
title: Remaining Useful Life Estimates using a demo device
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/remaining-useful-life/#remaining-useful-life-using-demo-device
---

A fully functional remaining useful life estimate demo can be prepared with the help of a demo device.
For this, use the artifacts provided as part of the project *RemainingUsefulLifeDemoProject.zip* file.

#### Start with Machine Learning Workbench

Follow the steps described in [Machine Learning Workbench > Upload a project](/machine-learning/web-app-mlw/#upload-a-project) and upload the *RemainingUsefulLifeDemoProject.zip* project to MLW. This creates a new project named **RemainingUsefulLifeDemoProject_uuid**, which has a total of 5 resources. You will get 2 files in the **Data** folder and 3 notebooks in the **Code** folder.

#### Register a demo device in the platform

Instead of registering an actual device for the remaining useful life estimate use case, a demo device can be registered. This device can be used as a replica of an actual device. To do so, follow the steps below:
We have added a script *RegisterDevice.ipynb* which registers a demo device in {{< product-c8y-iot >}}.

1. Open it and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0">.
2. Execute each cell one by one and you will have a registered device in {{< product-c8y-iot >}}. Upon successful execution, a device named "RemainingUsefulLifeDemo" is registered in {{< product-c8y-iot >}}.
3. Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. The device ID is already updated by the code and is saved in the *CONFIG.json* file.

<img src="/images/zementis/RemainingUsefulLife/remaining-useful-life_register_device.PNG" alt="Download" style="display:inline-block; margin:0"> <br>

Upon successful execution, a device named "RemainingUsefulLifeDemoDevice" is registered in {{< product-c8y-iot >}}. Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. The *CONFIG.json* file is already updated by the code with the device ID.


#### Simulate measurements for the demo device

Use *SimulateData.ipynb* for simulating the measurements for the demo device.

1. Open it and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0">.
2. Execute each cell one by one and you have a registered device in {{< product-c8y-iot >}}. Upon successful execution, `c8y_Flow measurements` are sent to {{< product-c8y-iot >}} on behalf of the demo device. The measurements are simulated dynamically for the last 8 days period and for every two hours (that is, 12 observations per day).

We use this data to generate a model and estimate the RUL values. Keep in mind that forecast intervals will match the observation intervals. This can be confirmed by checking the data points in the {{< product-c8y-iot >}} Cockpit application.

#### Generate forecasts based on the simulated data

Run all the cells in *TrainModelandPredict.ipynb* notebook which does the following:

1. Loads the data for building the model using the Nyoka microservice.
2. Estimates the remaining useful life of the demo device by invoking the Zementis microservice.

