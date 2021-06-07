---
title: Demand forecasting using a demo device
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/demand-forecasting/#demand-forecasting-using-demo-device
---

A fully functional demand forecasting demo can be prepared with the help of a demo device. 
For this, use the artifacts provided as part of the *DemandForecastingDemo.zip* file.

#### Start with Cumulocity IoT Machine Learning Workbench

Open Machine Learning workbench webapp and create a new project and name it “Demand forecasting”. Go inside the project and upload the extracted files in the project. You will get 2 files in Data Section and 3 Notebooks in Code section

<img src="/images/zementis/DemandForecasting/createProject.PNG" alt="Download" style="display:inline-block; margin:0">

<img src="/images/zementis/DemandForecasting/uplaod resource.PNG" alt="Download" style="display:inline-block; margin:0">



#### Register a demo device in Cumulocity IoT

Instead of registering an actual device for the water demand forecasting use case, a demo device can be registered. This device can be used as a replica of an actual device connected to the reservoir tank. 

We have added a script *01 Register Device.ipynb* which registers a demo device in Cumulocity IoT. Open it by using Edit option in Cumulocity IoT Machine Learning Workbench UI. Execute each cell one by one and you will have a registered device in Cumulocity, upon successful execution, a device named *DemandForecastDemoDevice* is registered in Cumulocity IoT. Once registered, try to get the device ID by looking up your device on the All Devices page of your tenant’s Device Management application. The device ID is already updated by the code and is saved in the *CONFIG.json* file.

<img src="/images/zementis/DemandForecasting/notebook 1.PNG" alt="Download" style="display:inline-block; margin:0">


Upon successful execution, a device named *DemandForecastDemoDevice* is registered in Cumulocity IoT. Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.INI* file with the device ID of this demo device.

This device is capable of simulating readings of water flow to Cumulocity IoT in the form of a measurement named *c8y_Flow*. <br>A higher value of c8y_Flow signifies higher water consumption.

#### Simulate measurements for the demo device

Use *02 Simulate Data.ipynb* for simulating the measurements for the demo device.

Execute each cell one by one and upon successful execution *c8y_Flow* measurements are sent to Cumulocity IoT on behalf of the demo device. The measurements are simulated dynamically for the last  days period and for every two hours (i.e. 12 observations per day). We use this data to generate a time series model and forecast the next day’s c8y_Flow values. Keep in mind that forecast intervals will match the observation intervals. This can be confirmed by checking the data points in Cumulocity Cockpit.

<img src="/images/zementis/DemandForecasting/2ndNotebook.PNG" alt="Download" style="display:inline-block; margin:0">

#### Downlaod the data for model building exercise.

To download the data, we can use the *Import from Cumulocity IoT* feature of Cumulocity IoT Machine Learning Workbench tool.
Click on “Import from Cumulocity IoT” >> Select DemandForecastDemoDevice >>> Give a name “hourlyData” >>> Select time period  From: Today-10 days To: Today-1 days, Select sensor *c8y_flow*. >>> Click submit>> This will create a task in Cumulocity Machine Learning Workbench >> Once task changes to Success >> We can confirm the data in our Data section the name of the file is *hourlyData.csv*.
This file can be previewed to verify the downloaded data and can be used for model building exercise.


<img src="/images/zementis/DemandForecasting/c8ydatapull.PNG" alt="Download" style="display:inline-block; margin:0">

<img src="/images/zementis/DemandForecasting/hourlyData.PNG" alt="Download" style="display:inline-block; margin:0">


#### Generate forecasts based on the simulated data

Run the attached 03 Train Model and Predict.ipynb notebook which does the following:

*	Loads the data for building the Time Series model using the Nyoka microservice.
*	Forecast the next day’s (i.e. Today) water consumption values along with the timestamps using the generated Time Series model by invoking the Zementis microservice.

<img src="/images/zementis/DemandForecasting/traindata.PNG" alt="Download" style="display:inline-block; margin:0">
<img src="/images/zementis/DemandForecasting/predicted.PNG" alt="Download" style="display:inline-block; margin:0">

The notebook provides you with an insight of the peak/non-peak values for the next day. To make the use case simpler, we considered only 8 days worth of data but it can be extended to any number of days. Also, the forecasts can be made for any number of time steps in the future.

