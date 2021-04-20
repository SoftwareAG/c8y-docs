---
title: Anomaly detection using an Android phone
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/anomaly-detection/#anomaly-detection-using-android-phone
---

This section deals with the basic data science steps of creating an anomaly detection model with self-collected data. First of all, you need to register your Android phone. Then follow the sections below for collecting data, training the model and using the model to detect anomalies via the phone. Note that the phone for the entire workflow has to be of the same type because the data and sensors for device types may differ.

#### Register an Android phone in Cumulocity IoT

Registering an Android phone in Cumulocity IoT involves installing the Cloud Sensor App on your Android phone and using it for completing the registration. Follow the steps described in [User guide > Cumulocity IoT Sensor App](/users-guide/cumulocity-sensor-app) in the User guide.

Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.INI* file with the device ID of your registered Android phone.

#### Data collection with Cumulocity IoT

Required: No. The training data is provided. See next section.

In contrast to supervised classification models, no labeled training data is required for anomaly detection models. The training happens with the regular data, and any unseen behavior will later be detected as anomalous. The data can be collected by carrying around the registered device over a few days without any anomalous behavior. All data can then be accessed via the Cumulocity IoT REST interface and be transformed into the training data format.

Note that for demo purposes the data is fetched via REST and directly transformed into the training data set. More complex pre-processing might require the use of an offline data store. The format of the JSON data might have changed in the meantime, or some sensors might not be available for some phone types, so check the exact format by viewing a current sample.

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
	    }
	}


Data collection can be done by using the below shown and attached script *createTrainingData.py*. This Python script connects to the Cumulocity IoT REST measurements endpoint, pulls the data and writes it to a CSV file.

	createTrainingData.py
    import requests, json
    import configparser
    import csv
    import os

    def add2Data(d):
    # consult returned JSON for exact format
    	acc = d['c8y_Acceleration']
    	accelerationY = acc['accelerationY']
    	accelerationX = acc['accelerationX']
    	accelerationZ = acc['accelerationZ']
    	c8y_Gyroscope = d['c8y_Gyroscope']
    	gyroX = c8y_Gyroscope['gyroX']
    	gyroY = c8y_Gyroscope['gyroY']
    	gyroZ = c8y_Gyroscope['gyroZ']
    	return [accelerationY['value'], accelerationX['value'], accelerationZ['value'], gyroX['value'], gyroY['value'], gyroZ['value']]


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
    TRAIN_DATA_FILE=DIR_DATA+"training_data.csv"

     # collect data
    json_doc=r.json()
    data=[]

    if not os.path.exists(DIR_DATA):
        os.makedirs(DIR_DATA)

    with open(TRAIN_DATA_FILE, mode='w', newline='') as training_file:
    	writer = csv.writer(training_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    	writer.writerow(["accelerationY","accelerationX","accelerationZ","gyroX","gyroY","gyroZ"])


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


The training data set we collected is packaged as *training_data.zip* under the data subfolder of the attached *AnomalyDetectionDemo.zip*.

#### Train the PMML model

For this demo, the anomaly detection machine learning algorithm "Isolation Forest" is applied. Isolation Forest is an approach that detects anomalies by isolating instances, without relying on any distance or density measure.

The logic arguments goes: isolating anomaly observations is easier as only a few conditions are needed to separate those cases from the normal observations. On the other hand, isolating normal observations require more conditions. Therefore, an anomaly score can be calculated as the number of conditions required to separate a given observation. - [Anomaly Detection Using Isolation Forests](https://blog.easysol.net/using-isolation-forests-anamoly-detection/)

The attached Python script *createModel.py* creates an Isolation Forest Model in PMML format using the previously created training data. If no training data was created with the *createTraningData.py* script, sample training data can be found under the data subfolder of the attached ZIP file. It is then used for training the Isolation Forest model with the help of the scikit-learn framework ([https://scikit-learn.org](https://scikit-learn.org)). To obtain a robust and meaningful model, further cleaning of the training data and validating the best model parameters is required. This is not in the scope of this demo and presumes knowledge of data science best practices. After the model is created in scikit-learn format, it is converted into PMML format with the Nyoka library. Make sure to install Nyoka as detailed here: [https://github.com/nyoka-pmml/nyoka](https://github.com/nyoka-pmml/nyoka).

You could try out the data you collected yourself as described in the data collection section. Alternatively, you can unzip the attached *data/training_data.zip* file which contains the sample training data and use it for training your model. Note that the model trained with the attached data set might not work very well when you try to classify your own data. The reason is that the expected behavior of the training data and the data captured with your device would differ too much and any occurrence will be classified as anomalous.

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
    TRAIN_DATA_FILE=DIR_DATA+"training_data.csv"

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

    features = ["accelerationY","accelerationX","accelerationZ","gyroX","gyroY","gyroZ"]
    skl_to_pmml(pipeline, features, "",PMML_FILE_NAME)

    print("Model with name "+PMML_FILE_NAME+" converted into PMML")

#### Upload the model to Cumulocity IoT

In order to upload the model to Cumulocity IoT, follow the steps described in [Machine Learning application > Managing models](/machine-learning/web-app/#managing-models).

A pre-trained model *iforest_demo.pmml* is also attached for reference. This anomaly detection model was trained with the data available in *training_data.zip* mentioned in the section above.

#### Create and upload Apama monitor to Cumulocity IoT

For this anomaly detection scenario, we need to use Apama streaming analytics. With Apama streaming analytics, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. This user-defined logic can, e.g. alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

We create an EPL-based monitor file and upload it to Cumulocity IoT. As mentioned earlier, the Apama EPL monitor file takes care of reading the measurements coming from the mobile device, sending it to the Zementis microservice and raising an alarm when an anomaly is reported by our machine learning model.

Instead of creating a new monitor file, the attached *DetectAnomalies.mon* file can be used after making minor adjustments. Open *DetectAnomalies.mon* in a text editor and replace the `deviceId` variable with the ID of your registered device, same as c_device_source in the CONFIG.INI file mentioned above. Save your changes and upload this monitor file to your tenant. See [Deploying Apama applications as single \*.mon files with Apama EPL Apps] (/apama/analytics-introduction/#single-mon-file) in the Streaming Analytics guide for details on uploading Apama monitor files.

    using com.apama.correlator.Component;
    using com.apama.cumulocity.Alarm;
	using com.apama.cumulocity.CumulocityRequestInterface;
    using com.apama.cumulocity.Measurement;
    using com.apama.cumulocity.FindManagedObjectResponse;
    using com.apama.cumulocity.FindManagedObjectResponseAck;
    using com.apama.cumulocity.FindManagedObject;
    using com.softwareag.connectivity.httpclient.HttpOptions;
    using com.softwareag.connectivity.httpclient.HttpTransport;
    using com.softwareag.connectivity.httpclient.Request;
    using com.softwareag.connectivity.httpclient.Response;
    using com.apama.json.JSONPlugin;

    monitor DetectAnomalies {

    	CumulocityRequestInterface cumulocity;

        action onload() {
        	cumulocity := CumulocityRequestInterface.connectToCumulocity();

        	// Replace yourDeviceId with the value of your device id
    		listenAndActOnMeasurements("yourDeviceId", "IsolationForests");
        }

        action listenAndActOnMeasurements(string deviceId, string modelName) {
        	monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);

        	on all Measurement(source = deviceId) as m {
    			if(m.measurements.hasKey("c8y_Acceleration") and m.measurements.hasKey("c8y_Gyroscope")){		
    				log "Received Measurement from C8Y";
    				string record := convertMeasurementToRecord(m);
    				log "Sending record to zementis - " + record;
    		        Request zementisRequest := cumulocity.createRequest("GET", "/service/zementis/apply/"+modelName, any());
    		        zementisRequest.setQueryParameter("record", record);
    		        zementisRequest.execute(ZementisHandler(deviceId).requestHandler);
    		        log "EPL execution completed.";
            	}
    		}
        }

        action convertMeasurementToRecord(Measurement m) returns string
        {
            dictionary<string, any> json := {};
           	json["accelerationX"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationX").value;
        	json["accelerationY"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationY").value;
        	json["accelerationZ"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationZ").value;
        	json["gyroX"] := m.measurements.getOrDefault("c8y_Gyroscope").getOrDefault("gyroX").value;
        	json["gyroY"] := m.measurements.getOrDefault("c8y_Gyroscope").getOrDefault("gyroY").value;
        	json["gyroZ"] := m.measurements.getOrDefault("c8y_Gyroscope").getOrDefault("gyroZ").value;
            return JSONPlugin.toJSON(json);
        }

        event ZementisHandler
        {
            string deviceId;
            action requestHandler(Response zementisResponse)
            {
                integer statusCode := zementisResponse.statusCode;
                log "Zementis responded with status -" + statusCode.toString();
                if (statusCode = 200 and <boolean> zementisResponse.payload.getSequence("outputs")[0].getEntry("outlier") = true) {
                    send Alarm("", "AnomalyDetectionAlarm", deviceId, currentTime,
                        "Anomaly detected", "ACTIVE", "CRITICAL", 1, new dictionary<string, any>) to Alarm.SEND_CHANNEL;
                    log "Alarm raised";
                }
            }
        }
    }

#### Trigger an anomaly alert

Now that you have all the pieces together, you can try to generate an anomaly. To generate an anomaly you could drop your mobile phone or throw it in the air and then catch it.

You should be able to see alarms being generated from your device which will be visible under the **Alarms** page of the Device Management application.
