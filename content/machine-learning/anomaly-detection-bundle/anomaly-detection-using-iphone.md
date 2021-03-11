---
title: Anomaly detection using an iPhone
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/anomaly-detection/#anomaly-detection-using-iphone
---

This section deals with the basic data science steps of creating an anomaly detection model with self-collected data. First of all, you need to register your iPhone. Then follow the sections below for collecting data, training the model and using the model to detect anomalies via the phone. Note that the phone for the entire workflow has to be of the same type because the data and sensors for device types may differ.

#### Register an iPhone in Cumulocity IoT

Registering an iPhone in Cumulocity IoT involves installing the Cloud Sensor App on your iPhone and using it for completing the registration. Follow the steps described in [User guide > Cumulocity IoT Sensor App](/users-guide/cumulocity-sensor-app) in the User guide.

Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.INI* file with the device ID of your registered iPhone.

#### Data collection with Cumulocity IoT

Required: No. The training data is provided. See next section.

In contrast to supervised classification models, no labeled training data is required for anomaly detection models. The training happens with the regular data, and any unseen behavior will later be detected as anomalous. The data can be collected by carrying around the registered device over a few days without any anomalous behavior. All data can then be accessed via the Cumulocity IoT REST interface and be transformed into the training data format.

Note that for demo purposes the data is fetched via REST and directly transformed into the training data set. More complex pre-processing might require the use of an offline data store. The format of the JSON data might have changed in the meantime, or some sensors might not be available for some phone types, so check the exact format by viewing a current sample.

The following code block contains the data format of the JSON schema that was assumed for this demo.

	measurement.json
    {
            "self": "http://zdev.cumulocity.com/measurement/measurements/10404830",
            "time": "2019-09-09T14:24:50.000-07:00",
            "id": "10404830",
            "source": {
                "self": "http://zdev.cumulocity.com/inventory/managedObjects/9698019",
                "id": "9698019"
            },
            "type": "c8y_Acceleration",
            "c8y_Acceleration": {
                "accelerationY": {
                    "unit": "G",
                    "value": -0.0055389404296875
                },
                "accelerationX": {
                    "unit": "G",
                    "value": 0.019256591796875
                },
                "accelerationZ": {
                    "unit": "G",
                    "value": -0.9974822998046875
                }
            }
    },
    {
            "self": "http://zdev.cumulocity.com/measurement/measurements/10404729",
            "time": "2019-09-09T14:24:51.000-07:00",
            "id": "10404729",
            "source": {
                "self": "http://zdev.cumulocity.com/inventory/managedObjects/9698019",
                "id": "9698019"
            },
            "type": "c8y_Gyroscope",
            "c8y_Gyroscope": {
                "gyroX": {
                    "unit": "°/s",
                    "value": -0.023520772431470823
                },
                "gyroY": {
                    "unit": "°/s",
                    "value": -0.046856987799399154
                },
                "gyroZ": {
                    "unit": "°/s",
                    "value": -0.01188195951949753
                }
            }
    }


Data collection can be done by using the below shown and attached script *createTrainingDataForiPhone.py*. This Python script connects to the Cumulocity IoT REST measurements endpoint, pulls the data and writes it to a CSV file.

	createTrainingDataForiPhone.py
    import requests, json
    import configparser
    import csv
    import os

    def add2Data(acc_data, gyro_data, writer):
        acc_X = acc_data['accelerationX']['value']
        acc_Y = acc_data['accelerationY']['value']
        acc_Z = acc_data['accelerationZ']['value']
        gyro_X = gyro_data['gyroX']['value']
        gyro_Y = gyro_data['gyroY']['value']
        gyro_Z = gyro_data['gyroZ']['value']
        writer.writerow([acc_X,acc_Y,acc_Z,gyro_X,gyro_Y,gyro_Z])

    config = configparser.ConfigParser()
    config.read('CONFIG.INI')

    DATE_FROM="2019-09-06T23:00:00.000+05:30"
    DATE_TO="2019-09-07T08:00:00.000+05:30"

    c_measurements_endpoint="/measurement/measurements/"
    c_params={"source":config.get("cumulocity", "c_device_source"),"pageSize":"2000",
             "dateFrom":DATE_FROM, "dateTo":DATE_TO,
             "fragmentType":"c8y_Acceleration"}

    c_auth=config.get("cumulocity", "c_user"),config.get("cumulocity", "c_pass")
    r=requests.get(config.get("cumulocity","c_url")+c_measurements_endpoint,params=c_params, auth=c_auth)
    print("Start collecting data from: "+r.url)
    print("Status code: "+str(r.status_code))

    DIR_DATA="data/"
    TRAIN_DATA_FILE=DIR_DATA+"dataset_training_iphone.csv"

    json_doc_acc=r.json()

    if not os.path.exists(DIR_DATA):
        os.makedirs(DIR_DATA)

    with open(TRAIN_DATA_FILE, mode='w', newline='') as training_file:
        writer = csv.writer(training_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        writer.writerow(["accelerationX","accelerationY","accelerationZ","gyroX","gyroY","gyroZ"])
        first_arr=json_doc_acc['measurements']

        c_params.update({'fragmentType':'c8y_Gyroscope'})
        r=requests.get(config.get("cumulocity","c_url")+c_measurements_endpoint,params=c_params, auth=c_auth)
        json_doc_gyro = r.json()

        print("Page 1.\tCollecting data at: " +first_arr[0]['time'])

        for data in first_arr:
            gyro = list(filter(lambda rec: rec['time']==data['time'], json_doc_gyro['measurements']))
            # For some timestamps, acceleration measurements are there but not gyroscope; skipping records with those timestamps
            if len(gyro)>0:
                add2Data(data['c8y_Acceleration'], gyro[0]['c8y_Gyroscope'], writer)

        for i in range(5):
            r=requests.get(json_doc_acc['next'], auth=c_auth)
            next_doc_acc=r.json()
            measure_arr=next_doc_acc['measurements']
            if not measure_arr:
                print("Last page reached.")
                break

            r=requests.get(json_doc_gyro['next'], auth=c_auth)
            next_doc_gyro=r.json()
            if not next_doc_gyro['measurements']:
                print("Last page reached.")
                break

            print("Page "+ str(i+2)+".\tCollecting data at: "+ measure_arr[0]['time'])

            for data in measure_arr:
                gyro = list(filter(lambda rec: rec['time']==data['time'], next_doc_gyro['measurements']))
                # For some timestamps, acceleration measurements are there but not gyroscope; skipping records with those timestamps
                if len(gyro)>0:
                    add2Data(data['c8y_Acceleration'], gyro[0]['c8y_Gyroscope'], writer)
            json_doc_acc = next_doc_acc
            json_doc_gyro = next_doc_gyro

    print("Training data written to " + TRAIN_DATA_FILE)

The training data set we collected is packaged as *dataset_training_iphone.zip* under the data subfolder of the attached *AnomalyDetectionDemo.zip*.

#### Train the PMML model

For this demo, the anomaly detection machine learning algorithm "Isolation Forest" is applied. Isolation Forest is an approach that detects anomalies by isolating instances, without relying on any distance or density measure.

The logic arguments goes: isolating anomaly observations is easier as only a few conditions are needed to separate those cases from the normal observations. On the other hand, isolating normal observations require more conditions. Therefore, an anomaly score can be calculated as the number of conditions required to separate a given observation. - [Anomaly Detection Using Isolation Forests](https://blog.easysol.net/using-isolation-forests-anamoly-detection/)

The attached Python script *createModelForiPhoneData.py* creates an Isolation Forest Model in PMML format using the previously created training data. If no training data was created with the *createModelForiPhoneData.py* script, sample training data can be found under the data subfolder of the attached ZIP file. It is then used for training the Isolation Forest model with the help of the scikit-learn framework ([https://scikit-learn.org](https://scikit-learn.org)). To obtain a robust and meaningful model, further cleaning of the training data and validating the best model parameters is required. This is not in the scope of this demo and presumes knowledge of data science best practices. After the model is created in scikit-learn format, it is converted into PMML format with the Nyoka library. Make sure to install Nyoka as detailed here: [https://github.com/nyoka-pmml/nyoka](https://github.com/nyoka-pmml/nyoka).

You could try out the data you collected yourself as described in the data collection section. Alternatively, you can unzip the attached *data/dataset_training_iphone.zip* file which contains the sample training data and use it for training your model. Note that the model trained with the attached data set might not work very well when you try to classify your own data. The reason is that the expected behavior of the training data and the data captured with your device would differ too much and any occurrence will be classified as anomalous.

	createModelForiPhoneData.py
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
    TRAIN_DATA_FILE=DIR_DATA+"dataset_training_iphone.csv"

    DIR_MODEL="model/"
    PMML_FILE_NAME = DIR_MODEL+"iforest_model_iphone.pmml"

    if not os.path.exists(DIR_MODEL):
        os.makedirs(DIR_MODEL)

    # load the data into an array
    with open(TRAIN_DATA_FILE, newline='') as csvfile:
        data = list(csv.reader(csvfile))

    # instantiate the isolation forest object
    iforest = IsolationForest(n_estimators=40, max_samples=3000, contamination=0, random_state=np.random.RandomState(42))
    # only use part of the data for quicker results
    iforest.fit(data[1:])

    # prepare pipeline for PMML conversion
    model_type="iforest"
    print("Start converting the model into PMML...")
    pipeline = Pipeline([
        (model_type, iforest)
    ])

    pipeline.fit(data[1:])
    features = ["accelerationY","accelerationX","accelerationZ","gyroX","gyroY","gyroZ"]
    skl_to_pmml(pipeline, features, "",PMML_FILE_NAME)

    print("Model with name "+PMML_FILE_NAME+" converted into PMML")

#### Upload the model to Cumulocity IoT

In order to upload the model to Cumulocity IoT, follow the steps described in [Machine Learning application > Managing models](/machine-learning/web-app/#managing-models).

A pre-trained model *iforest_demo_iphone.pmml* is also attached for reference. This anomaly detection model was trained with the data available in *dataset_training_iphone.zip* mentioned in the section above.

#### Create and upload Apama monitor to Cumulocity IoT

For this anomaly detection scenario, we need to use Apama streaming analytics. With Apama streaming analytics, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. This user-defined logic can, e.g. alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

We create an EPL-based monitor file and upload it to Cumulocity IoT. As mentioned earlier, the Apama EPL monitor file takes care of reading the measurements coming from the mobile device, sending it to the Zementis microservice and raising an alarm when an anomaly is reported by our machine learning model.

Instead of creating a new monitor file, the attached *DetectAnomalies_iPhone.mon* file can be used after making minor adjustments. Open *DetectAnomalies_iPhone.mon* in a text editor and replace the `deviceId` variable with the ID of your registered device, same as c_device_source in the CONFIG.INI file mentioned above. Save your changes and upload this monitor file to your tenant. See [Deploying Apama applications as single \*.mon files with Apama EPL Apps] (/apama/analytics-introduction/#single-mon-file) in the Streaming Analytics guide for details on uploading Apama monitor files.

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

    monitor DetectAnomalies_iPhone {

        CumulocityRequestInterface cumulocity;

        action onload() {
            cumulocity := CumulocityRequestInterface.connectToCumulocity();
            // Replace yourDeviceId with the value of your device id
            listenAndActOnMeasurements("yourDeviceId", "IsolationForests");
        }

        action listenAndActOnMeasurements(string deviceId, string modelName) {
            monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);   
            on all Measurement(source = deviceId) as m {

                if( m.measurements.hasKey("c8y_Acceleration")){
    			log "Received Measurement c8y_Acceleration from C8Y" + m.toString();

                dictionary <string, any> lastMeasurement := {};
            		lastMeasurement["accelerationX"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationX").value;
            		lastMeasurement["accelerationY"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationY").value;
            		lastMeasurement["accelerationZ"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationZ").value;

                    listener l := on all Measurement(source = deviceId) as n {
                    	if n.measurements.hasKey("c8y_Gyroscope"){
                    		lastMeasurement["gyroX"] := n.measurements.getOrDefault("c8y_Gyroscope").getOrDefault("gyroX").value;
                    		lastMeasurement["gyroY"] := n.measurements.getOrDefault("c8y_Gyroscope").getOrDefault("gyroY").value;
                    		lastMeasurement["gyroZ"] := n.measurements.getOrDefault("c8y_Gyroscope").getOrDefault("gyroZ").value;
                         string record := JSONPlugin.toJSON(lastMeasurement);

        	               log "Sending record to zementis - " + record;
        	               Request zementisRequest := cumulocity.createRequest("GET", "/service/zementis/apply/" + modelName, any());
        	               zementisRequest.setQueryParameter("record", record);
        	               zementisRequest.execute(ZementisHandler(deviceId).requestHandler);
        	               log "EPL execution completed.";
        	               l.quit();
                    	}
                    }
                }
            }
        }

       event ZementisHandler
       {
           string deviceId;
           action requestHandler(Response zementisResponse)
           {
               integer statusCode := zementisResponse.statusCode;
               boolean outlier := <boolean> zementisResponse.payload.getSequence("outputs")[0].getEntry("outlier");
               log "Zementis responded with status:" + statusCode.toString() + " result:" +  (outlier).toString();
               if (statusCode = 200 and outlier = true) {
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
