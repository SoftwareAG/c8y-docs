---
title: Demand forecasting using a demo device
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/demand-forecasting/#demand-forecasting-using-demo-device
---

A fully functional demand forecasting demo can be prepared with the help of a demo device.
For this, use the artifacts provided as part of the project *DemandForecastingDemoProject.zip* file.

#### Start with Machine Learning Workbench

Follow the steps described in [Machine Learning Workbench > Upload a project](/machine-learning/web-app-mlw/#upload-a-project) and upload the *DemandForecastingDemoProject.zip* project to MLW. This creates a new project named **DemandForecastingDemoProject_uuid**, which has a total of 5 resources. You will get 2 files in the **Data** folder and 3 notebooks in the **Code** folder.

#### Register a demo device in the platform

Instead of registering an actual device for the water demand forecasting use case, a demo device can be registered. This device can be used as a replica of an actual device connected to the reservoir tank. To do so, follow the steps below:
We have added a script *RegisterDevice.ipynb* which registers a demo device in {{< product-c8y-iot >}}.

1. Open it and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0">.
2. Execute each cell one by one and you will have a registered device in {{< product-c8y-iot >}}. Upon successful execution, a device named "DemandForecastDemoDevice" is registered in {{< product-c8y-iot >}}.
3. Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device management application. The device ID is already updated by the code and is saved in the *CONFIG.json* file.

<img src="/images/zementis/DemandForecasting/demand_forecasting_register_device.PNG" alt="Download" style="display:inline-block; margin:0"> <br>

Upon successful execution, a device named "DemandForecastDemoDevice" is registered in {{< product-c8y-iot >}}. Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device management application. The *CONFIG.json* file is already updated by the code with the device ID.

This device is capable of simulating readings of water flow to {{< product-c8y-iot >}} in the form of a measurement named *c8y_Flow*. <br>A higher value of c8y_Flow signifies higher water consumption.

#### Simulate measurements for the demo device

Use *SimulateData.ipynb* for simulating the measurements for the demo device.

1. Open it and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0">.
2. Execute each cell one by one and you have a registered device in {{< product-c8y-iot >}}. Upon successful execution, `c8y_Flow measurements` are sent to {{< product-c8y-iot >}} on behalf of the demo device. The measurements are simulated dynamically for the last 8 days period and for every two hours (that is, 12 observations per day).

We use this data to generate a time series model and forecast the next day's c8y_Flow values. Keep in mind that forecast intervals will match the observation intervals. This can be confirmed by checking the data points in the {{< product-c8y-iot >}} Cockpit application.

<img src="/images/zementis/DemandForecasting/demand_forecasting_simulate_data.PNG" alt="Download" style="display:inline-block; margin:0">

#### Download the data for model building exercise

* Follow the steps described in [Machine Learning Workbench > Data pull > {{< product-c8y-iot >}}](/machine-learning/web-app-mlw/#cumulocity-iot) and pull the measurements of the newly registered smartphone with "hourlyData.csv" as **File name**, data interval (i.e. interval during which the data was created), "HOURLY" as **Aggregation** and select "c8y_flow" as **Data points**.

* This file can be previewed to verify the downloaded data and can be used for model building exercise.

<img src="/images/zementis/DemandForecasting/hourlyData.PNG" alt="Download" style="display:inline-block; margin:0">


#### Generate forecasts based on the simulated data

Run all the cells in *TrainModelandPredict.ipynb* notebook which does the following:

1. Loads the data for building the Time Series model using the Nyoka microservice.
2. Forecasts the next day's (i.e. today) water consumption values along with the timestamps using the generated Time Series model by invoking the Zementis microservice.

<img src="/images/zementis/DemandForecasting/traindata.PNG" alt="Download" style="display:inline-block; margin:0">

<img src="/images/zementis/DemandForecasting/predicted.PNG" alt="Download" style="display:inline-block; margin:0">
<br><br>

The notebook provides you with an insight of the peak/non-peak values for the next day. To make the use case simpler, we considered only 8 days worth of data but it can be extended to any number of days. Also, the forecasts can be made for any number of time steps in the future.
