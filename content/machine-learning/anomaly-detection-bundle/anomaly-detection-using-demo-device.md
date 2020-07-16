---
title: Anomaly detection using a demo device
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/anomaly-detection/#anomaly-detection-using-demo-device
---

A fully functional demo can be prepared with the help of a demo device. For this, use the artifacts provided as part of the *AnomalyDetectionDemo.zip* file.

#### Register a demo device in Cumulocity IoT

Instead of registering a real phone for anomaly detection use case, a demo device can be registered. This device can be used as a replica of an actual mobile phone.

We have added a script *DemoDeviceCreator.sh* which registers a demo device in Cumulocity IoT. Run the script using the following command:

	sh DemoDeviceCreator.sh 

Use this script to add a device named "DemoDevice" to Cumulocity IoT.

	DemoDeviceCreator.sh
	c_url=$(awk -F "=" '/c_url/ {print $2}' ./CONFIG.INI)
	c_user=$(awk -F "=" '/c_user/ {print $2}' ./CONFIG.INI)
	c_pass=$(awk -F "=" '/c_pass/ {print $2}' ./CONFIG.INI)
	echo
	echo "#####################################"
	echo "#    Registering new demo device    #"
	echo "#####################################"
	curl --user $c_user:$c_pass -X POST $c_url"/inventory/managedObjects" -H "accept: application/json" -H "Content-Type: application/json" \
	--data '{"name": "DemoDevice", "c8y_IsDevice": {}, "myDemoDevice":{}, "c8y_SupportedMeasurements": ["c8y_SignalStrengthWifi","c8y_Acceleration", "c8y_Barometer", "c8y_Gyroscope", "c8y_Luxometer", "c8y_Compass"]}'
	echo
	echo
	echo "#########################################################"
	echo "#  Registered a demo device with the name 'DemoDevice'  #"
	echo "#########################################################"

Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.INI* file with the device ID of this demo device.

#### Upload the model and Apama monitor to Cumulocity IoT

1. Upload the attached model *iforest_demo.pmml* to Cumulocity IoT. To upload the model to Cumulocity IoT, follow the steps described in [Machine Learning application > Managing models](/machine-learning/web-app/#managing-models).
2. Download the attached *DetectAnomalies.mon* file, open it in a text editor and replace the `deviceId` variable with the ID of your registered device, same as c_device_source in the CONFIG.INI file mentioned above.
3. Save your changes and upload this monitor file to your tenant. See [Deploying Apama applications as single \*.mon files with Apama EPL Apps] (/apama/analytics-introduction/#single-mon-file) in the Streaming Analytics guide for details on uploading Apama monitor files.


#### Trigger an Anomaly Alert

A script *AnomalySimulatorForDemoDevice.sh* has been attached which simulates sending of alternate anomalous and non-anomalous readings to Cumulocity IoT from our demo device. This script can be used to depict the generation of anomalies.

All you need to do is run it as `sh AnomalySimulatorForDemoDevice.sh`.

	AnomalySimulatorForDemoDevice.sh
    c_url=$(awk -F "=" '/c_url/ {print $2}' ./CONFIG.INI)
    c_user=$(awk -F "=" '/c_user/ {print $2}' ./CONFIG.INI)
    c_pass=$(awk -F "=" '/c_pass/ {print $2}' ./CONFIG.INI)
    c_device_source=$(awk -F "=" '/c_device_source/ {print $2}' ./CONFIG.INI)
    end=$((SECONDS+30))
    COUNTER=0
    DIV=2
    while [ $SECONDS -lt $end ]; do
        CURRENT_TIME=$(date --iso-8601=seconds)
        result=`expr $COUNTER % $DIV`
    	if [ $result == 0 ]
    	then
    		echo
    		echo "##########################################"
    		echo "#  Simulating Non-Anamolous Measurement  #"
    		echo "##########################################"
    		echo
    		curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementcollection+json" -H "Content-Type: application/json" \
    		--data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8ydemoAndroid","c8y_Acceleration":{"accelerationY":{"unit":"G","value": -0.2631993591785431},"accelerationX":{"unit":"G","value":5.769125938415527},"accelerationZ":{"unit":"G","value":8.193016052246094}},"c8y_Gyroscope":{"gyroX":{"unit":"°/s","value":-0.03604104742407799},"gyroY":{"unit":"°/s","value": 0.055571284145116806},"gyroZ":{"unit":"°/s","value":-0.0010122909443452952}}}]}'
    		sleep 2
    	fi
    	if [ $result -eq 1 ]
    	then
    		echo
    		echo "##########################################"
    		echo "#    Simulating Anamolous Measurement    #"
    		echo "##########################################"
    		echo
    		curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementcollection+json" -H "Content-Type: application/json" \
    		--data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8ydemoAndroid","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-27.943368911743164},"accelerationX":{"unit":"G","value":-26.63686370849609},"accelerationZ":{"unit":"G","value":7.422532558441162}},"c8y_Gyroscope":{"gyroX":{"unit":"°/s","value":-13.211706161499025},"gyroY":{"unit":"°/s","value":7.483762264251709},"gyroZ":{"unit":"°/s","value":-11.959641456604006}}}]}'
    		sleep 2
    	fi
    	COUNTER=`expr $COUNTER + 1`
    done

This should now start sending alternate anomalous and non-anomalous measurements to Cumulocity IoT on behalf of your demo device for a total duration of 30 seconds.

You should notice anomaly detection alarms for every anomalous measurement that it sends. These alarms generated from your device will be visible under the **Alarms** page of the Device Management application.