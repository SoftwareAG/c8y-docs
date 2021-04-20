---
title: Demand forecasting using a demo device
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/demand-forecasting/#demand-forecasting-using-demo-device
---

A fully functional demand forecasting demo can be prepared with the help of a demo device. 
For this, use the artifacts provided as part of the *DemandForecastingDemo.zip* file.

#### Register a demo device in Cumulocity IoT

Instead of registering an actual device for the water demand forecasting use case, a demo device can be registered. This device can be used as a replica of an actual device connected to the reservoir tank. 

We have added a script *DemoDeviceCreator.sh* which registers a demo device in Cumulocity IoT.

	DemoDeviceCreator.sh
	c_url=$(awk -F "=" '/c_url/ {print $2}' ./CONFIG.INI)
	c_user=$(awk -F "=" '/c_user/ {print $2}' ./CONFIG.INI)
	c_pass=$(awk -F "=" '/c_pass/ {print $2}' ./CONFIG.INI)
	echo
	echo "#####################################"
	echo "#    Registering new demo device    #"
	echo "#####################################"
	curl --user $c_user:$c_pass -X POST $c_url"/inventory/managedObjects" -H "accept: application/json" -H "Content-Type: application/json" \
	--data '{"name": "DemandForecastDemoDevice", "c8y_IsDevice": {}, "myDemoDevice":{}, "c8y_SupportedMeasurements": ["c8y_Flow"]}'
	echo
	echo
	echo "#####################################################################################################"
	echo "#  Registered a demo device with the name 'DemandForecastDemoDevice' and its measurement 'c8y_Flow' #"
	echo "#####################################################################################################"

Run the script using the following command:

	bash DemoDeviceCreator.sh 

Upon successful execution, a device named *DemandForecastDemoDevice* is registered in Cumulocity IoT. Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.INI* file with the device ID of this demo device.

This device is capable of simulating readings of water flow to Cumulocity IoT in the form of a measurement named *c8y_Flow*. <br>A higher value of c8y_Flow signifies higher water consumption.

#### Simulate measurements for the demo device

Use *simulate_data.sh* for simulating the measurements for the demo device.

    simulate_data.sh
    #!/bin/bash
    input="./input_data.csv"
    c_url=$(awk -F "=" '/c_url/ {print $2}' ./CONFIG.INI)
    c_user=$(awk -F "=" '/c_user/ {print $2}' ./CONFIG.INI)
    c_pass=$(awk -F "=" '/c_pass/ {print $2}' ./CONFIG.INI)
    c_device_source=$(awk -F "=" '/c_device_source/ {print $2}' ./CONFIG.INI)
 
    tail -n +2 "$input" | while IFS=',' read -r f1 f2
    do
        dt=$f1
        val=$f2
        date="${dt}+05:30"
        tm=${date:11}
        dtt=${date:0:10}
        strdt="${dtt}T${tm}"
        curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementcollection+json" -H "Content-Type: application/json" --data '{"measurements":[{"time": "'$strdt'","source": {"id": "'$c_device_source'"},"type": "c8y_Flow","c8y_Flow": {"F": {"unit": "psi","value": '$val'}}}]}'
    done

Using this simulator, *c8y_Flow* measurements are sent to Cumulocity IoT on behalf of the demo device. The measurements are simulated for the time period *2019-12-01* to *2019-12-08* and for every two hours (i.e. 12 observations per day). We use this data to generate a time series model and forecast the next day's *c8y_Flow* values. Keep in mind that forecast intervals will match the observation intervals. 

Run the simulator script using the following command:

	bash simulate_data.sh 

#### Generate forecasts based on the simulated data

Run the attached *Demand_Forecast_Demo.ipynb* notebook which does the following:

* Extract the c8y_Flow data from the demo device's measurements using Cumulocity REST APIs. The data considered is for a time period of 8 days (i.e. 2019-12-01 to 2019-12-08).
* Prepare the extracted measurement data and generate Time Series model using the Nyoka microservice.
* Forecast the next day's (i.e. 2019-12-09) water consumption values along with the timestamps using the generated Time Series model by invoking the Zementis microservice.

The notebook provides you with an insight of the peak/non-peak values for the next day. To make the use case simpler, we considered only 8 days worth of data but it can be extended to any number of days. Also, the forecasts can be made for any number of time steps in the future.