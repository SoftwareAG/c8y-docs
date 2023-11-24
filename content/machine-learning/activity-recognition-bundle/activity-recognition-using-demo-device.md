---
title: Activity recognition using a demo device
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/activity-recognition/#activity-recognition-using-demo-device
---

A fully functional activity recognition demo can be prepared with the help of a demo device.
For this, use the artifacts provided as part of the *ActivityRecognitionDemo.zip* file.

#### Start with Machine Learning Workbench

1. Follow the steps described in [Machine Learning Workbench > Upload a project](/machine-learning/web-app-mlw/#upload-a-project) and upload the *ActivityRecognitionDemoProject.zip* project to MLW. A new project is created with the name **ActivityRecognitionDemoProject_UUID**, where `UUID` is a system generated unique identifier. This project has a total of 5 resources. You will get 2 files in the **Data** folder and 3 files in the **Code** folder.

#### Register a demo device in the platform

Instead of registering an actual device for the activity recognition use case, a demo device can be registered. This device can be used as a replica of an actual to do human activity. Follow the below steps. We have added a script *RegisterDevice.ipynb* which registers a demo device in {{< product-c8y-iot >}}.

1. Open it and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0">.
2. Execute each cell one by one and you will have a registered device in {{< product-c8y-iot >}} . Upon successful execution, a device named "DemoDevice" is registered in {{< product-c8y-iot >}} .
3. Once registered, you can get the device ID by looking up your device on the **All Devices** page of your tenant's Device management application. The device ID is already updated by the code and is saved in the *CONFIG.json* file.

<img src="/images/zementis/ActivityRecognition/activity_recognition_register_device.PNG" alt="Download" style="display:inline-block; margin:0"> <br>


Upon successful execution, a device named *DemoDevice* is registered in {{< product-c8y-iot >}}. Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device management application. The *CONFIG.json* file is already updated by the code with the device ID.

This device is capable of simulating readings of water flow to {{< product-c8y-iot >}} in the form of a measurement named `c8y_SignalStrengthWifi`, `c8y_Acceleration`, `c8y_Barometer`, `c8y_Gyroscope`, `c8y_Luxometer`, `c8y_Compass`.


#### Upload the model and Apama monitor file

1. Upload the attached model *ActivitiesDTreeJump.pmml* to {{< product-c8y-iot >}}. To upload the model to {{< product-c8y-iot >}}, follow the steps described in [Machine Learning application > Managing models](/machine-learning/web-app/#managing-models).

2. Download the *RecognizeActivitiesDemoDevice.mon* file. Open it in a text editor and replace the `deviceId` variable with the ID of your registered device, same as `c_device_source` in the *CONFIG.json* file mentioned above.

3. Save your changes and upload this monitor file to your tenant. See [EPL Apps > Basic functionality > Deploying EPL apps as single \*.mon files with the Streaming Analytics application](/streaming-analytics/epl-apps/#single-mon-file) in the *Streaming Analytics guide* for details on uploading Apama monitor files.

#### Classify activities by simulating measurements for the demo device

Use *SimulateDataforRealtimescoring.ipynb* for simulating the measurements for the demo device.

1. Open it and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0">.
2. Execute each cell one by one and you will have a registered device in {{< product-c8y-iot >}}. Upon successful execution, `c8y_Acceleration` measurements are sent to {{< product-c8y-iot >}} on behalf of the demo device. The measurements are simulated dynamically for the current date in gaps of 1 second.

<img src="/images/zementis/ActivityRecognition/activity_recognition_simulate_data.PNG" alt="Download" style="display:inline-block; margin:0"><br>


This should now start sending measurements to {{< product-c8y-iot >}} on behalf of your demo device. It would try to simulate transition of activities in the order  sit → jump → run → jump → sit.

You should notice your device generating activity recognition alarms for every transition of activity. These alarms generated from your device will be visible under the **Alarms** tab of your device in the Device management application. Click **Show Cleared Alarms** in the top bar to see the history of all the alarms.
