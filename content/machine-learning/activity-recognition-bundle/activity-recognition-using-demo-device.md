---
title: Activity recognition using a demo device
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/activity-recognition/#activity-recognition-using-demo-device
---

A fully functional demo can be prepared with the help of a demo device. For this, use the artifacts provided as part of the *ActivityRecognitionDemo.zip* file.

#### Register a demo device in Cumulocity IoT

Instead of registering a real phone for active recognition use case, a demo device can be registered. This device can be used as a replica of an actual mobile phone.

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

1. Upload the attached model *ActivitiesDTreeJump.pmml* to Cumulocity IoT. To upload the model to Cumulocity IoT, follow the steps described in [Machine Learning application > Managing models](/machine-learning/web-app/#managing-models).

2. Download the *RecognizeActivities.mon* file, open it in a text editor and replace the `deviceId` variable with the ID of your registered device, same as `c_device_source` in the *CONFIG.INI* file mentioned above.

3. Save your changes and upload this monitor file to your tenant. See [Deploying Apama applications as single \*.mon files with Apama EPL Apps] (/apama/analytics-introduction/#single-mon-file) in the Streaming Analytics guide for details on uploading Apama monitor files.

#### Classify activities

A script *ActivitySimulatorForDemoDevice.sh* has been attached which simulates sending of readings corresponding to different activities to Cumulocity IoT from our demo device. This script can be used to depict the recognition of various activities.

All you need to do is run it as `sh ActivitySimulatorForDemoDevice.sh`.

	ActivitySimulatorForDemoDevice.sh
    c_url=$(awk -F "=" '/c_url/ {print $2}' ./CONFIG.INI)
    c_user=$(awk -F "=" '/c_user/ {print $2}' ./CONFIG.INI)
    c_pass=$(awk -F "=" '/c_pass/ {print $2}' ./CONFIG.INI)
    c_device_source=$(awk -F "=" '/c_device_source/ {print $2}' ./CONFIG.INI)
    echo
    echo "##################################################"
    echo "# Preparing simulations for Activity Recognition #"
    echo "##################################################"
    echo
    CURRENT_TIME=$(date --iso-8601=seconds)
    curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementcollection+json" -H "Content-Type: application/json" \
    --data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.889587402},"accelerationX":{"unit":"G","value":0.066757202},"accelerationZ":{"unit":"G","value":-0.427780151}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.889602661},"accelerationX":{"unit":"G","value":0.068435669},"accelerationZ":{"unit":"G","value":-0.428604126}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.896789551},"accelerationX":{"unit":"G","value":0.06918335},"accelerationZ":{"unit":"G","value":-0.415237427}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.888275146},"accelerationX":{"unit":"G","value":0.076705933},"accelerationZ":{"unit":"G","value":-0.435089111}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.90007019},"accelerationX":{"unit":"G","value":0.076675415},"accelerationZ":{"unit":"G","value":-0.426757813}}}]}'
    echo
    echo "##########################################"
    echo "#     Simulating user to be SITTING      #"
    echo "##########################################"
    echo 
    CURRENT_TIME=$(date --iso-8601=seconds)
    curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementcollection+json" -H "Content-Type: application/json" \
    --data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.925170898},"accelerationX":{"unit":"G","value":-0.047470093},"accelerationZ":{"unit":"G","value":-0.378372192}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.747741699},"accelerationX":{"unit":"G","value":-0.02456665},"accelerationZ":{"unit":"G","value":-0.595901489}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.886535645},"accelerationX":{"unit":"G","value":0.087524414},"accelerationZ":{"unit":"G","value":-0.456680298}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.786361694},"accelerationX":{"unit":"G","value":0.002182007},"accelerationZ":{"unit":"G","value":-0.664413452}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.78742981},"accelerationX":{"unit":"G","value":-0.112869263},"accelerationZ":{"unit":"G","value":-0.649856567}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.925170898},"accelerationX":{"unit":"G","value":-0.047470093},"accelerationZ":{"unit":"G","value":-0.378372192}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.747741699},"accelerationX":{"unit":"G","value":-0.02456665},"accelerationZ":{"unit":"G","value":-0.595901489}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.886535645},"accelerationX":{"unit":"G","value":0.087524414},"accelerationZ":{"unit":"G","value":-0.456680298}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.786361694},"accelerationX":{"unit":"G","value":0.002182007},"accelerationZ":{"unit":"G","value":-0.664413452}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.78742981},"accelerationX":{"unit":"G","value":-0.112869263},"accelerationZ":{"unit":"G","value":-0.649856567}}}]}'
    echo
    echo "##########################################"
    echo "#     Simulating user to be JUMPING      #"
    echo "##########################################"
    echo 
    CURRENT_TIME=$(date --iso-8601=seconds)
    curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementcollection+json" -H "Content-Type: application/json" \
    --data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-2.854751587},"accelerationX":{"unit":"G","value":0.168869019},"accelerationZ":{"unit":"G","value":-2.098526001}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.172515869},"accelerationX":{"unit":"G","value":-0.126083374},"accelerationZ":{"unit":"G","value":-0.414993286}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-1.876571655},"accelerationX":{"unit":"G","value":0.395050049},"accelerationZ":{"unit":"G","value":-1.201461792}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.185501099},"accelerationX":{"unit":"G","value":0.027557373},"accelerationZ":{"unit":"G","value":-0.057159424}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.189147949},"accelerationX":{"unit":"G","value":-0.138885498},"accelerationZ":{"unit":"G","value":-0.07699585}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-2.854751587},"accelerationX":{"unit":"G","value":0.168869019},"accelerationZ":{"unit":"G","value":-2.098526001}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.172515869},"accelerationX":{"unit":"G","value":-0.126083374},"accelerationZ":{"unit":"G","value":-0.414993286}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-1.876571655},"accelerationX":{"unit":"G","value":0.395050049},"accelerationZ":{"unit":"G","value":-1.201461792}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.185501099},"accelerationX":{"unit":"G","value":0.027557373},"accelerationZ":{"unit":"G","value":-0.057159424}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.189147949},"accelerationX":{"unit":"G","value":-0.138885498},"accelerationZ":{"unit":"G","value":-0.07699585}}}]}'
    echo
    echo "##########################################"
    echo "#     Simulating user to be RUNNING      #"
    echo "##########################################"
    echo 
    CURRENT_TIME=$(date --iso-8601=seconds)
    curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementcollection+json" -H "Content-Type: application/json" \
    --data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.775375366},"accelerationX":{"unit":"G","value":0.612564087},"accelerationZ":{"unit":"G","value":-1.166870117}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.624053955},"accelerationX":{"unit":"G","value":0.374237061},"accelerationZ":{"unit":"G","value":-1.081665039}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.426635742},"accelerationX":{"unit":"G","value":0.213226318},"accelerationZ":{"unit":"G","value":-0.556045532}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.121704102},"accelerationX":{"unit":"G","value":-0.24861145},"accelerationZ":{"unit":"G","value":-0.651138306}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.877685547},"accelerationX":{"unit":"G","value":-0.338851929},"accelerationZ":{"unit":"G","value":-0.83241272}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.775375366},"accelerationX":{"unit":"G","value":0.612564087},"accelerationZ":{"unit":"G","value":-1.166870117}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.624053955},"accelerationX":{"unit":"G","value":0.374237061},"accelerationZ":{"unit":"G","value":-1.081665039}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.426635742},"accelerationX":{"unit":"G","value":0.213226318},"accelerationZ":{"unit":"G","value":-0.556045532}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.121704102},"accelerationX":{"unit":"G","value":-0.24861145},"accelerationZ":{"unit":"G","value":-0.651138306}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.426635742},"accelerationX":{"unit":"G","value":0.213226318},"accelerationZ":{"unit":"G","value":-0.556045532}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.121704102},"accelerationX":{"unit":"G","value":-0.24861145},"accelerationZ":{"unit":"G","value":-0.651138306}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.426635742},"accelerationX":{"unit":"G","value":0.213226318},"accelerationZ":{"unit":"G","value":-0.556045532}}}]}'
    echo
    echo "##########################################"
    echo "#     Simulating user to be JUMPING      #"
    echo "##########################################"
    echo 
    CURRENT_TIME=$(date --iso-8601=seconds)
    curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementcollection+json" -H "Content-Type: application/json" \
    --data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-2.854751587},"accelerationX":{"unit":"G","value":0.168869019},"accelerationZ":{"unit":"G","value":-2.098526001}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.172515869},"accelerationX":{"unit":"G","value":-0.126083374},"accelerationZ":{"unit":"G","value":-0.414993286}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-1.876571655},"accelerationX":{"unit":"G","value":0.395050049},"accelerationZ":{"unit":"G","value":-1.201461792}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.185501099},"accelerationX":{"unit":"G","value":0.027557373},"accelerationZ":{"unit":"G","value":-0.057159424}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.189147949},"accelerationX":{"unit":"G","value":-0.138885498},"accelerationZ":{"unit":"G","value":-0.07699585}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-2.854751587},"accelerationX":{"unit":"G","value":0.168869019},"accelerationZ":{"unit":"G","value":-2.098526001}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.172515869},"accelerationX":{"unit":"G","value":-0.126083374},"accelerationZ":{"unit":"G","value":-0.414993286}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-1.876571655},"accelerationX":{"unit":"G","value":0.395050049},"accelerationZ":{"unit":"G","value":-1.201461792}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.185501099},"accelerationX":{"unit":"G","value":0.027557373},"accelerationZ":{"unit":"G","value":-0.057159424}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.189147949},"accelerationX":{"unit":"G","value":-0.138885498},"accelerationZ":{"unit":"G","value":-0.07699585}}}]}'
    echo
    echo "##########################################"
    echo "#     Simulating user to be SITTING      #"
    echo "##########################################"
    echo 
    CURRENT_TIME=$(date --iso-8601=seconds)
    curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementcollection+json" -H "Content-Type: application/json" \
    --data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.925170898},"accelerationX":{"unit":"G","value":-0.047470093},"accelerationZ":{"unit":"G","value":-0.378372192}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.747741699},"accelerationX":{"unit":"G","value":-0.02456665},"accelerationZ":{"unit":"G","value":-0.595901489}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.886535645},"accelerationX":{"unit":"G","value":0.087524414},"accelerationZ":{"unit":"G","value":-0.456680298}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.786361694},"accelerationX":{"unit":"G","value":0.002182007},"accelerationZ":{"unit":"G","value":-0.664413452}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.78742981},"accelerationX":{"unit":"G","value":-0.112869263},"accelerationZ":{"unit":"G","value":-0.649856567}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.925170898},"accelerationX":{"unit":"G","value":-0.047470093},"accelerationZ":{"unit":"G","value":-0.378372192}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.747741699},"accelerationX":{"unit":"G","value":-0.02456665},"accelerationZ":{"unit":"G","value":-0.595901489}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.886535645},"accelerationX":{"unit":"G","value":0.087524414},"accelerationZ":{"unit":"G","value":-0.456680298}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.786361694},"accelerationX":{"unit":"G","value":0.002182007},"accelerationZ":{"unit":"G","value":-0.664413452}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.78742981},"accelerationX":{"unit":"G","value":-0.112869263},"accelerationZ":{"unit":"G","value":-0.649856567}}}]}'
    echo
    echo "##########################################"
    echo "#      Stopping all simulations now      #"
    echo "##########################################"

This should now start sending measurements to Cumulocity IoT on behalf of your demo device. It would try to simulate transition of activities in the order  sit → jump → run → jump → sit.

You should notice your device generating activity recognition alarms for every transition of activity. These alarms generated from your device will be visible under the **Alarms** tab of your device in the Device Management application. Click **Show Cleared Alarms** in the top bar to see the history of all the alarms.