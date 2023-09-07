---
title: Anomaly detection using a demo device
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/anomaly-detection/#anomaly-detection-using-demo-device
---

A fully functional demo can be prepared with the help of a demo device. For this, use the artifacts provided as part of the *AnomalyDetectionDemo.zip* file.

#### Register a demo device in the platform

A demo device can be registered instead of registering a real phone and used as a replica of an actual mobile phone.

1. Follow the steps described in [Machine Learning Workbench > Upload a project](/machine-learning/web-app-mlw/#upload-a-project) and upload the *AnomalyDetectionDemoProject.zip* project to MLW. A new project is created with the name **AnomalyDetectionDemoProject_{UUID}**, where `UUID` is a system generated unique identifier. This project has a total of 6 resources. The project contains a script with name *DemoDeviceCreator.py* in the **Code** folder, that registers a demo device in {{< product-c8y-iot >}} and also a *CONFIG.json* file in the **Data** folder of Machine Learning Workbench (MLW).

2. Select *CONFIG.json* in the **Data** folder and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0"> to edit the *CONFIG.json*.

3. Update the values of *c_url*, *c_user* and *c_pass* with your tenant credentials and click the save icon <img src="/images/zementis/mlw-save-icon.png" alt="Save" style="display:inline-block; margin:0"> at the right of the top menu bar.

4. Select *DemoDeviceCreator.py* in the **Code** folder and click the execute icon <img src="/images/zementis/mlw-execute-icon.png" alt="Execute" style="display:inline-block; margin:0"> at the right of the top menu bar and fill the form with "DemoDeviceCreator" as **Task Name**, "ONE TIME" as **Recurrence** and click the submit icon <img src="/images/zementis/mlw-submit-icon.png" alt="Submit" style="display:inline-block; margin:0">.


Click **Tasks** in the navigator and click the "DemoDeviceCreator" task name, to display the status of the Python execution in the **Task History** section at the center.

Script to add a device named "DemoDevice" to {{< product-c8y-iot >}}.

*DemoDeviceCreator.py*

```
# Register a demo device with {{< product-c8y-iot >}}
import requests
import json
from requests.auth import HTTPBasicAuth
import datetime

data = json.load(open('../Data/CONFIG.json',))

payload={'name': 'DemoDevice',
'c8y_IsDevice': [],
'c8y_SupportedMeasurements': ['RoboSensors'],
'c8y_SupportedOperations': ['c8y_Restart',
'c8y_Configuration',
'c8y_Software',
'c8y_Firmware',
'c8y_Command']}

url = data['c_url']+"/inventory/managedObjects"
headers = {
	'Content-Type': "application/json",
	'Accept': "application/json",
	'cache-control': "no-cache",
	'Postman-Token': "2dc79351-5a48-4b8b-b4f2-30b880732d01"
	}

response = requests.request("POST", url, data=json.dumps(payload), headers=headers,auth=HTTPBasicAuth(data['c_user'], data['c_pass']))

print("The device id is:" , json.loads(response.text)['id'])
```

Once registered, you can get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.json* file with the device ID of this demo device.

#### Upload the model and Apama monitor file

1. Upload the attached model *iforest_model.pmml* to {{< product-c8y-iot >}}. To upload the model to {{< product-c8y-iot >}}, follow the steps described in [Machine Learning application > Managing models](/machine-learning/web-app/#managing-models).
2. Download the attached *DetectAnomalies.mon* file, open it in a text editor and replace the value of `c_device_source` with the ID of your registered device.
3. Save your changes and upload this monitor file to your tenant. See [Deploying EPL apps as single \*.mon files with the Streaming Analytics application](/streaming-analytics/epl-apps/#single-mon-file) in the *Streaming Analytics guide* for details on uploading Apama monitor files.


#### Trigger an anomaly alert

A script *AnomalySimulatorForDemoDevice.py* has been attached which simulates sending of alternate anomalous and non-anomalous readings to {{< product-c8y-iot >}} from our demo device. This script can be used to depict the generation of anomalies.

All you need to do is to run the script as explained before.

*AnomalySimulatorForDemoDevice.py*

```
# Simulate anamolous and non-anamolous data
import requests
import json
from requests.auth import HTTPBasicAuth
import datetime
import random
data = json.load(open('../Data/CONFIG.json',))

url = data['c_url']+"/measurement/measurements"

# Simulated anamolous data
tt=datetime.datetime.now()

headers = {
'Content-Type': "application/json",
'Accept': "application/vnd.com.nsn.cumulocity.measurement+json",
'cache-control': "no-cache",
'Postman-Token': "2d5fa27d-c8c8-428c-b2f9-0efe9490b716"
}

payload1={'type': 'anamoly',
	'time': str(tt.date())+'T'+str(tt.hour)+':'+str(tt.minute)+':'+str(tt.second)+'+05:30',
	'source': {'id': data['c_device_source']},
	"c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.2631993591785431},
						"accelerationX":{"unit":"G","value":5.769125938415527},
					"accelerationZ":{"unit":"G","value":8.193016052246094}},
	"c8y_Gyroscope":{"gyroX":{"unit":"°/s","value":-0.03604104742407799},
					"gyroY":{"unit":"°/s","value": 0.055571284145116806},
					"gyroZ":{"unit":"°/s","value":-0.0010122909443452952}}
}

response = requests.request("POST", url, data=json.dumps(payload1),
						headers=headers,auth=HTTPBasicAuth(data['c_user'], data['c_pass']))

# Simulated non-anamolous data
tt=datetime.datetime.now()
payload2={'type': 'non-anamoly',
	'time': str(tt.date())+'T'+str(tt.hour)+':'+str(tt.minute)+':'+str(tt.second)+'+05:30',
	'source': {'id': data['c_device_source']},
	"c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.0971527099609375},
						"accelerationX":{"unit":"G","value":0.6249847412109375},
					"accelerationZ":{"unit":"G","value":-0.2371368408203125}},
	"c8y_Gyroscope":{"gyroX":{"unit":"°/s","value":-1.2540942430496216},
					"gyroY":{"unit":"°/s","value": -1.861748218536377},
					"gyroZ":{"unit":"°/s","value":-0.029031118378043175}}
}

response = requests.request("POST", url, data=json.dumps(payload2),
						headers=headers,auth=HTTPBasicAuth(data['c_user'], data['c_pass']))
```

This should send alternate anomalous and non-anomalous measurements to {{< product-c8y-iot >}} on behalf of your demo device.

You should notice anomaly detection alarms for every anomalous measurement that it sends. These alarms generated from your device will be visible under the **Alarms** page of the Device Management application.
