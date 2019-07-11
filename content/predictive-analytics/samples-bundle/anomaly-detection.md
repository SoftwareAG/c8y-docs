---
title: Anomaly detection
layout: redirect
weight: 20
---

### Overview

Anomaly detection (also outlier detection) is the identification of items, events or observations which do not conform to an expected pattern or other items in a data set. 

Capturing anomalous events through the sensor data of a mobile device on an IoT platform can for instance serve the purpose of detecting accidents of elderly people living without a caretaker. Regular behavior sensor data of a person can be collected over a period of time. This data can then be used to train an anomaly detection model. As soon as an irregularity in behavior data is observed, e.g. the person falls down, an anomaly can be detected. For the purpose of demoing this scenario, we followed these steps:

* Collect sensor data from a user performing regular everyday tasks.
* Train an anomaly detection model with the collected data and transform the model to PMML.
* Deploy the model to Cumulocity IoT using the Predictive Analytics app.
* Create and upload an EPL rule to Cumulocity (C8Y) IoT which does the following:
	* Gathers specific measurements coming from the source device and conducts any necessary pre-processing steps.
	* Sends the data via REST request to the Zementis microservice API for processing.
	* Creates an anomaly detection alarm if the model predicts the input data to be anomalous.


### Prerequisites

[Download the AnomalyDetectionDemo.zip](https://iwiki.eur.ad.sag/display/RNDZEM/Anomaly+Detection+Demo+Instructions?preview=/576597876/585434376/AnomalyDetectionDemo.zip) file which contains demo scripts, training data set, PMML Model and EPL rule.

Running the demo scripts requires 

* prior experience with Python, JSON, REST and understanding of data science processes.
* familiarity with Cumulocity and its in-built apps.
* subscription of the Zementis microservice on the tenant.
* subscription of the Apama microservice on the tenant.

### Getting Started

We have added a *CONFIG.INI* file to the zip. This file is meant for capturing the tenant details and credentials which will be used by the demo scripts.

First of all, update the *CONFIG.INI* with the appropriate values and save it. Replace `c_url` with your tenant URL, `c_user` with your tenant username and `c_pass` with your tenant password. Leave the `c_device_source` as is for now.

	CONFIG.INI
	[cumulocity]
	c_url=https://yourtenant.cumulocity.com
	c_user=user@company.com
	c_pass=password
	c_device_source=deviceID


For this particular demo, a phone or a phone-like device needs to be used, so that the measurement data for that particular device can be captured and be used for detecting anomalies.

Therefore, the documentation has been split up into two parts:

* [Anomaly detection using an Android phone](#android-phone)
* [Anomaly detection using a simulated demo device](#demo-device)

### <a name="android-phone"></a>Anomaly detection using an Android phone

This section deals with the basic data science steps of creating an anomaly detection model with self-collected data. First of all, you need to register your Android phone. Then follow the sections below for collecting data, training the model and using the model to detect anomalies via the phone. Note, that the phone for the entire workflow has to be of the same type because the data and sensors for device types may differ.

#### Register an Android phone in Cumulocity

Registering an Android phone in Cumulocity involves installing the Cloud Sensor App on your Android phone and using it for completing the registration. Follow the steps described in [Optional services > Cloud Sensor App](/guides/users-guide/optional-services#android-cloud-sensor-app) in the User guide.

Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.INI* file with the device ID of your registered Android phone.

#### Data Collection with Cumulocity

Required: No. The training data is provided. See next section.

In contrast to supervised classification models, no labeled training data is required for anomaly detection models. The training happens with the regular data, and any unseen behavior will later be detected as anomalous. The data can be collected by carrying around the registered device over a few days without any anomalous behavior. All data can then be accessed via the Cumulocity REST interface and be transformed into the training data format. 

Note that for demo purposes, the data is fetched via REST and directly transformed into the training data set. More complex pre-processing might require the use of an offline data store. The format of the JSON data might have changed in the meantime, or some sensors might not be available for some phone types, so check the exact format by viewing a current sample.

The following code block contains the data format of the JSON schema that was assumed for this demo.

	measurement.json
	{
	    "_id" : ObjectId("5ba140c6b524ac788e565905"),
	    "time" : "2018-09-14T15:38:57.313-07:00",
	    "id" : "2519084",
	    "self" : "https://zdev.cumulocity.com/measurement/measurements/2519084",
	    "source" : {
	        "id" : "2046206",
	        "self" : "https://zdev.cumulocity.com/inventory/managedObjects/2046206"
	    },
	    "type" : "c8ydemoAndroid",
	    "c8y_SignalStrengthWifi" : {
	        "rssi" : {
	            "unit" : "dBm",
	            "value" : -46
	        }
	    },
	    "c8y_Acceleration" : {
	        "accelerationY" : {
	            "unit" : "G",
	            "value" : 9.34783935546875
	        },
	        "accelerationX" : {
	            "unit" : "G",
	            "value" : 7.126129150390625
	        },
	        "accelerationZ" : {
	            "unit" : "G",
	            "value" : 7.345794677734375
	        }
	    },
	    "c8y_Barometer" : {
	        "Air pressure" : {
	            "unit" : "mBar",
	            "value" : 10.009281005859375
	        }
	    },
	    "c8y_Gyroscope" : {
	        "gyroX" : {
	            "unit" : "°/s",
	            "value" : 5.28802490234375
	        },
	        "gyroY" : {
	            "unit" : "°/s",
	            "value" : -9.42755126953125
	        },
	        "gyroZ" : {
	            "unit" : "°/s",
	            "value" : -4.908660888671875
	        }
	    },
	    "c8y_Luxometer" : {
	        "lux" : {
	            "unit" : "lux",
	            "value" : 240.79098510742188
	        }
	    },
	    "c8y_Compass" : {
	        "compassX" : {
	            "unit" : "uT",
	            "value" : -72.021484375
	        },
	        "compassY" : {
	            "unit" : "uT",
	            "value" : -24.5941162109375
	        },
	        "compassZ" : {
	            "unit" : "uT",
	            "value" : -15.24505615234375
	        }
	    }
	}


Data collection can be done by using the below shown and attached script *createTrainingData.py*. This Python script connects to the Cumulocity REST measurements endpoint, pulls the data and writes it to a CSV file.

	createTrainingData.py
	import requests, json
	import configparser
	import csv
	import os
	 
	def add2Data(d):
	# consult returned JSON for exact format
	    c8y_SignalStrengthWifi = d['c8y_SignalStrengthWifi']
	    rssi = c8y_SignalStrengthWifi['rssi']
	    acc = d['c8y_Acceleration']
	    accelerationY = acc['accelerationY']
	    accelerationX = acc['accelerationX']
	    accelerationZ = acc['accelerationZ']
	    c8y_Barometer = d['c8y_Barometer']
	    air_pressure = c8y_Barometer['Air pressure']
	    c8y_Gyroscope = d['c8y_Gyroscope']
	    gyroX = c8y_Gyroscope['gyroX']
	    gyroY = c8y_Gyroscope['gyroY']
	    gyroZ = c8y_Gyroscope['gyroZ']
	    c8y_Luxometer = d['c8y_Luxometer']
	    lux = c8y_Luxometer['lux']
	    c8y_Compass = d['c8y_Compass']
	    compassX = c8y_Compass['compassX']
	    compassY = c8y_Compass['compassY']
	    compassZ = c8y_Compass['compassZ']
	    return [rssi['value'], accelerationY['value'], accelerationX['value'], accelerationZ['value'], air_pressure['value'], gyroX['value'], gyroY['value'], gyroZ['value'], lux['value'], compassX['value'], compassY['value'], compassZ['value']]
	     
	 
	# collect config from CONFIG-INI -> change user and pass
	config = configparser.ConfigParser()
	config.read('CONFIG.INI')
	 
	c_measurements_endpoint="/measurement/measurements/"
	c_params={"source":config.get("cumulocity", "c_device_source"),"pageSize":"2000"}
	 
	 
	# get first page of json data measurements from cumulocity
	c_auth=config.get("cumulocity", "c_user"),config.get("cumulocity", "c_pass")
	r=requests.get(config.get("cumulocity","c_url")+c_measurements_endpoint,params=c_params, auth=c_auth)
	print("Start collecting data from: "+r.url)
	print("Status code: "+str(r.status_code))
	 
	# training data file
	DIR_DATA="data/"
	TRAIN_DATA_FILE=DIR_DATA+"dataset_training.csv"
	 
	 # collect data
	json_doc=r.json()
	data=[]
	 
	if not os.path.exists(DIR_DATA):
	    os.makedirs(DIR_DATA)
	     
	with open(TRAIN_DATA_FILE, mode='w') as training_file:
	    writer = csv.writer(training_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
	    writer.writerow(["rssi","accelerationY","accelerationX","accelerationZ","air_pressure","gyroX","gyroY","gyroZ","lux","compassX","compassY","compassZ"])
	 
	 
	    # write measurements of first page
	    for measurement in json_doc['measurements']:   
	        writer.writerow(add2Data(measurement))        
	 
	    for i in range(5):
	        r=requests.get(json_doc['next'], auth=c_auth)
	        next_doc=r.json()
	        measure_arr=next_doc['measurements']
	     
	        if not measure_arr:
	            print("Last page reached.")
	            break
	     
	        print("Collecting data at: " +measure_arr[0]['time'])
	 
	        for measurement in measure_arr:   
	            writer.writerow(add2Data(measurement))
	             
	        json_doc=next_doc
	 
	print("Training data written to " + TRAIN_DATA_FILE)
	

The training data set we collected is packaged as *training_data.zip* under the data sub-folder of the attached *AnomalyDetectionDemo.zip*.

####Train the PMML model

For this demo, the anomaly detection machine learning algorithm "Isolation Forest" is applied. Isolation Forest is an approach that detects anomalies by isolating instances, without relying on any distance or density measure.

The logic arguments goes: isolating anomaly observations is easier as only a few conditions are needed to separate those cases from the normal observations. On the other hand, isolating normal observations require more conditions. Therefore, an anomaly score can be calculated as the number of conditions required to separate a given observation. - [Anomaly Detection Using Isolation Forests](https://blog.easysol.net/using-isolation-forests-anamoly-detection/)

The attached Python script *createModel.py* creates an Isolation Forest Model in PMML format using the previously created training data. If no training data was created with the *createTraningData.py* script, sample training data can be found under the data sub-folder of the attached ZIP file. It is then used for training the Isolation Forest model with the help of the scikit-learn framework ([https://scikit-learn.org](https://scikit-learn.org)). To obtain a robust and meaningful model, further cleaning of the training data and validating the best model parameters is required. This is not in the scope of this demo and presumes knowledge of data science best practices. After the model is created in scikit-learn format, it is converted into PMML format with the Nyoka library. Make sure to install Nyoka as detailed here: [https://github.com/nyoka-pmml/nyoka](https://github.com/nyoka-pmml/nyoka).

You could try out the data you collected yourself as described in the data collection section. Alternatively, you can unzip the attached *data/training_data.zip* file which contains the sample training data and use it for training your model. Please note that the model trained with the attached data set might not work very well when you try to classify your own data. The reason is that the expected behavior of the training data and the data captured with your device would differ too much and any occurrence will be classified as anomalous.

	createModel.py
	from sklearn.ensemble import IsolationForest
	from sklearn.pipeline import Pipeline
	import numpy as np
	import os
	import zipfile
	import csv
	from nyoka import skl_to_pmml
	import warnings
	warnings.filterwarnings('ignore')
	 
	# training data file
	DIR_DATA="data/"
	TRAIN_DATA_FILE=DIR_DATA+"dataset_training.csv"
	 
	DIR_MODEL="model/"
	PMML_FILE_NAME = DIR_MODEL+"iforest_model.pmml"
	 
	if not os.path.exists(DIR_MODEL):
	    os.makedirs(DIR_MODEL)
	 
	# load the data into an array
	with open(TRAIN_DATA_FILE, newline='') as csvfile:
	    data = list(csv.reader(csvfile))
	 
	# instantiate the isolation forest object
	iforest = IsolationForest(n_estimators=40, max_samples=3000, contamination=0, random_state=np.random.RandomState(42))
	 
	# only use part of the data for quicker results
	iforest.fit(data[2:5000])
	 
	# prepare pipeline for PMML conversion
	model_type="iforest"
	print("Start converting the model into PMML...")
	pipeline = Pipeline([
	    (model_type, iforest)
	])
	 
	pipeline.fit(data[2:5000])
	 
	features = ["rssi","accelerationY","accelerationX","accelerationZ","air_pressure","gyroX","gyroY","gyroZ","lux","compassX","compassY","compassZ"]
	skl_to_pmml(pipeline, features, "",PMML_FILE_NAME)
	 
	print("Model with name "+PMML_FILE_NAME+" converted into PMML")

#### Upload the model to Cumulocity

In order to upload the model to Cumulocity, follow the steps described in [Predictive Analytics application > Managing models](/guides/predictive-analytics/web-app/#managing-models).

A pre-trained model *iforest_demo.pmml* is also attached for reference. This anomaly detection model was trained with the data available in *training_data.csv* mentioned in the section above.

#### Create and upload Apama monitor to Cumulocity

For this anomaly detection scenario, we need to use Apama streaming analytics. With Apama streaming analytics, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. This user-defined logic can, e.g. alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

We create an EPL-based monitor file and upload it to Cumulocity. As mentioned earlier, the Apama EPL monitor file takes care of reading the measurements coming from the mobile device, sending it to the Zementis microservice and raising an alarm when an anomaly is reported by our machine learning model.

Instead of creating a new monitor file, the attached *DetectAnomalies.mon* file can be used after making minor adjustments. Open *DetectAnomalies.mon* in a text editor and replace the variables tenant and credentials with the appropriate values. For setting the credentials, follow this example:

Assume your tenant name is "tenant", your username is "me" and your password is "secret". 

1. Go to *http://ostermiller.org/calc/encode.html*, type "tenant/me:secret" into the text area, then click **Encode** in the row "Base 64". The resulting text is "dGVuYW50L21lOnNlY3JldA==". 
1. Use "Basic dGVuYW50L21lOnNlY3JldA==" as value for credentials. 
1. Additionally set the deviceId variable with the ID your registered device, same as `c_device_source` in the *CONFIG.INI* file mentioned above.
1. Save your changes and upload this file to your tenant via the **Own Applications** page of the Administration application in Cumulocity. 

See [Administration > Managing applications > Own applications](/guides/users-guide/administration#uploading-cep-rules) in the User guide for details on uploading Apama monitor files.

	DetectAnomalies.mon
	using com.apama.cumulocity.Alarm;
	using com.apama.cumulocity.Measurement;
	using com.apama.cumulocity.FindManagedObjectResponse;
	using com.apama.cumulocity.FindManagedObjectResponseAck;
	using com.apama.cumulocity.FindManagedObject;
	using com.softwareag.connectivity.httpclient.HttpTransport;
	using com.softwareag.connectivity.httpclient.Request;
	using com.softwareag.connectivity.httpclient.Response;
	using com.apama.json.JSONPlugin;
	 
	monitor DetectAnomalies {
	     
	    // Please replace with your own tenant and basic auth credentials for that tenant
	    string tenant := "tenantName.cumulocity.com";
	    string credentials := "myBasicAuthCredentials";
	     
	    // Replace this value with your device id
	    string deviceId := "";
	     
	    // Model to be used for detecting anomalies
	    string modelName := "iforest";
	     
	    action onload() {
	        listenAndActOnMeasurements();
	    }
	     
	    action listenAndActOnMeasurements() {
	        monitor.subscribe(Measurement.CHANNEL);
	         
	        on all Measurement(source = deviceId) as m {
	            if(m.measurements.hasKey("c8y_SignalStrengthWifi") and m.measurements.hasKey("c8y_Acceleration") and m.measurements.hasKey("c8y_Barometer") and m.measurements.hasKey("c8y_Gyroscope") and m.measurements.hasKey("c8y_Luxometer") and m.measurements.hasKey("c8y_Compass")){       
	                log "Received Measurement from C8Y - "+ m.measurements.toString();
	                 
	                //Gather the data
	                string record := JSONPlugin.toJSON(gatherData(m));
	                 
	                log "Sending record to zementis - " + record;
	                sendRequestToZementisMicroservice(record);
	                 
	                log "EPL execution completed.";
	            }
	        }
	    }
	     
	    action gatherData(Measurement m) returns any {
	        any json:= new dictionary<string,float>;
	        json.setField("rssi", m.measurements.getOrDefault("c8y_SignalStrengthWifi").getOrDefault("rssi").value);
	        json.setField("accelerationX", m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationX").value);
	        json.setField("accelerationY", m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationY").value);
	        json.setField("accelerationZ", m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationZ").value);
	        json.setField("air_pressure", m.measurements.getOrDefault("c8y_Barometer").getOrDefault("Air pressure").value);
	        json.setField("gyroX", m.measurements.getOrDefault("c8y_Gyroscope").getOrDefault("gyroX").value);
	        json.setField("gyroY", m.measurements.getOrDefault("c8y_Gyroscope").getOrDefault("gyroY").value);
	        json.setField("gyroZ", m.measurements.getOrDefault("c8y_Gyroscope").getOrDefault("gyroZ").value);
	        json.setField("lux", m.measurements.getOrDefault("c8y_Luxometer").getOrDefault("lux").value);
	        json.setField("compassX", m.measurements.getOrDefault("c8y_Compass").getOrDefault("compassX").value);
	        json.setField("compassY", m.measurements.getOrDefault("c8y_Compass").getOrDefault("compassY").value);
	        json.setField("compassZ", m.measurements.getOrDefault("c8y_Compass").getOrDefault("compassZ").value);
	        return json;
	    }
	  
	    action sendRequestToZementisMicroservice(string record) {
	        string encodedRecord := record.replaceAll("\"","%22").replaceAll("{","%7B").replaceAll("}","%7D");
	         
	        // Create a client
	        HttpTransport httpClient := HttpTransport.getOrCreate(tenant,80);
	         
	        // Create the request
	        Request httpRequest := httpClient.createGETRequest("/service/zementis/apply/"+modelName+"?record=" + encodedRecord);
	        httpRequest.setHeader("Authorization",credentials);
	                 
	        //Send the request
	        httpRequest.execute(responseHandler);
	    }
	 
	     
	    action responseHandler(Response apiResponse) {
	        integer statusCode := apiResponse.statusCode;
	        log "Zementis responded with status -" + statusCode.toString();
	        if (statusCode = 200 and apiResponse.payload.getSequence("outputs")[0].getEntry("outlier").valueToString() = "true"){
	            send Alarm("", "AnomalyDetectionAlarm", deviceId, currentTime,
	                       "Anomaly detected", "ACTIVE", "CRITICAL", 1, new dictionary<string,any>) to Alarm.CHANNEL;
	            log "Alarm raised";
	        }
	    }
	}

#### Trigger an anomaly alert

Now that you have all the pieces together, you can try to generate an anomaly. To generate an anomaly you could drop your mobile phone or throw it in the air and then catch it.

You should be able to see alarms being generated from your device which will be visible under the **Alarms** page of the Device Management application.

### <a name="demo-device"></a>Anomaly detection using a demo device

A fully functional demo can be prepared with the help of a demo device. For this, use the artefacts provided as part of the *AnomalyDetectionDemo.zip* file.

#### Register a demo device in Cumulocity

Instead of registering a real phone for anomaly detection use case, a demo device can be registered. This device can be used as a replica of an actual mobile phone.

We have added a script *DemoDeviceCreator.sh* which registers a demo device in Cumulocity. Run the script using the command `sh DemoDeviceCreator.sh`. 

Use this script to add a device named "DemoDevice" to Cumulocity.

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

#### Upload the model and Apama monitor to Cumulocity

1. Upload the attached model *iforest_demo.pmml* to Cumulocity. To upload the model to Cumulocity, follow the steps described in [Predictive Analytics application > Managing models](/guides/predictive-analytics/web-app/#managing-models).

2. Download the *attachedDetectAnomalies.mon* file, open it in a text editor and replace the variables tenant and credentials with the appropriate values. For setting the credentials, use the following example:

	Assume your tenant name is "tenant", your username is "me" and your password is "secret". 

	* Go to *http://ostermiller.org/calc/encode.html*, type "tenant/me:secret" into the text area, then click **Encode** in the row "Base 64". The resulting text is "dGVuYW50L21lOnNlY3JldA==". 
	* Use "Basic dGVuYW50L21lOnNlY3JldA==" as value for credentials. 
	* Additionally set the deviceId variable with the ID your registered device, same as `c_device_source` in the *CONFIG.INI* file mentioned above.

3. Save your changes and upload this file to your tenant via the **Own Applications** page of the Administration application in Cumulocity. 

	See [Administration > Managing applications > Own applications](/guides/users-guide/administration#uploading-cep-rules) in the User guide for details on uploading Apama monitor files.


#### Trigger an Anomaly Alert

A script *AnomalySimulatorForDemoDevice.sh* has been attached which simulates sending of alternate anomalous and non-anomalous readings to Cumulocity from our demo device. This script can be used to depict the generation of anomalies.

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
	    result=`expr $COUNTER % $DIV`
	    if [ $result == 0 ]
	    then
	        echo
	        echo "##########################################"
	        echo "#  Simulating Non-Anamolous Measurement  #"
	        echo "##########################################"
	        echo
	        curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementCollection+json" -H "Content-Type: application/json" \
	        --data '{"measurements":[{"time":"2019-03-29T17:26:14.000+02:00","source":{"id":"'$c_device_source'"},"type":"c8ydemoAndroid","c8y_SignalStrengthWifi":{"rssi":{"unit":"dBm","value":-46}},"c8y_Acceleration":{"accelerationY":{"unit":"G","value": 9.347839355},"accelerationX":{"unit":"G","value":7.12612915},"accelerationZ":{"unit":"G","value":7.345794678}},"c8y_Barometer":{"Air pressure":{"unit":"mBar","value":10.00928101}},"c8y_Gyroscope":{"gyroX":{"unit":"°/s","value":-1.415344238},"gyroY":{"unit":"°/s","value": 5.859771729},"gyroZ":{"unit":"°/s","value":0.934921265}},"c8y_Luxometer":{"lux":{"unit":"lux","value":240.7909851}},"c8y_Compass":{"compassX":{"unit":"uT","value":-72.02148438},"compassY":{"unit":"uT","value":-24.59411621},"compassZ":{"unit":"uT","value":-15.24505615}}}]}'
	        sleep 2
	    fi
	    if [ $result -eq 1 ]
	    then
	        echo
	        echo "##########################################"
	        echo "#    Simulating Anamolous Measurement    #"
	        echo "##########################################"
	        echo
	        curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementCollection+json" -H "Content-Type: application/json" \
	        --data '{"measurements":[{"time":"2019-03-29T17:26:14.000+02:00","source":{"id":"'$c_device_source'"},"type":"c8ydemoAndroid","c8y_SignalStrengthWifi":{"rssi":{"unit":"dBm","value":-46}},"c8y_Acceleration":{"accelerationY":{"unit":"G","value":9.347839355},"accelerationX":{"unit":"G","value":7.12612915},"accelerationZ":{"unit":"G","value":7.345794678}},"c8y_Barometer":{"Air pressure":{"unit": "mBar","value":10.00928101}},"c8y_Gyroscope":{"gyroX":{"unit":"°/s","value":5.288024902},"gyroY":{"unit":"°/s","value":-9.42755127},"gyroZ":{"unit":"°/s","value":-4.908660889}},"c8y_Luxometer":{"lux":{"unit":"lux","value":240.7909851}},"c8y_Compass":{"compassX":{"unit":"uT","value":-72.02148438},"compassY":{"unit":"uT","value":-24.59411621},"compassZ":{"unit":"uT","value":-15.24505615}}}]}'
	        sleep 2
	    fi
	    COUNTER=`expr $COUNTER + 1`
	done

This should now start sending alternate anomalous and non-anomalous measurements to Cumulocity on behalf of your demo device for a total duration of 30 seconds.

You should notice anomaly detection alarms for every anomalous measurement that it sends.