---
title: Anomaly detection using a smartphone
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/anomaly-detection/#anomaly-detection-using-smartphone
---

This section deals with the basic data science steps of creating an anomaly detection model with self-collected data. First of all, you need to register your smartphone. Then follow the sections below for collecting data, training the model, and using the model to detect anomalies via the phone. Note that 

> **Note:** The phone used for the entire workflow has to be of the same type because the data and sensors may vary for different devices.

#### Register your smartphone in Cumulocity IoT

Follow the steps described in [User guide > Cumulocity IoT Sensor App](/users-guide/cumulocity-sensor-app) and register a smartphone in Cumulocity IoT. 

> **Note:** Set "1 sec" as **INTERVAL (secs)** for *Acceleration* and *Gyroscope* sensors in the Cloud Sensor App.

Once registered, note down the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application.

In contrast to supervised classification models, labeled training data is not required for anomaly detection models. The model is trained with the regular data, and any unseen behavior will later be detected as anomalous. The data can be collected by carrying around the registered device over a few days without any anomalous behavior. All data can then be accessed via the Cumulocity IoT Machine Learning Workbench that automatically transforms the JSON data into the training data format.

#### Data collection with Cumulocity IoT Machine Learning Workbench (MLW)

1. Follow the steps described in [ Machine Learning Workbench > Projects > Creating a new project](/machine-learning/web-app-mlw/#creating-a-new-project) and create a new project with "Anomaly Detection" as **Project name** and "Anomaly detection using smartphone" as **Project description**.

2. Either you can download the recorded measurements of your smartphone or use the data provided within the ZIP file for model-building purposes.

    * Follow the steps described in [ Machine Learning Workbench > Data pull > Cumulocity IoT](/machine-learning/web-app-mlw/#cumulocity-iot) and pull the measurements of newly registered smartphone with "anomalyTrainingData" as **File name**, data interval (i.e. interval during which the data was created), "None" as **Aggregation** and select "c8y_Acceleration" and "c8y_Gyroscope" as **Data points**.

    * Alternatively, follow the steps described in [ Machine Learning Workbench > Projects > Uploading resources](/machine-learning/web-app-mlw/#uploading-resources) and upload *anomalyTrainingData.csv* to Machine Learning Workbench (MLW).


#### Train the PMML model

For this use case, the "Isolation Forest" an anomaly detection machine learning algorithm is applied. Isolation Forest is an approach that detects anomalies by isolating instances, without relying on any distance or density measure.

The logic argument goes: isolating anomaly observations is easier as only a few conditions are needed to separate those cases from the normal observations. On the other hand, isolating normal observations require more conditions. Therefore, an anomaly score can be calculated as the number of conditions required to separate a given observation. - [Anomaly Detection Using Isolation Forests](https://blog.easysol.net/using-isolation-forests-anamoly-detection/)

The integrated Jupyter Notebook feature within the Cumulocity IoT Machine Learning Workbench helps in writing the code that creates an Isolation Forest Model in PMML format using the previously uploaded training data. The script uses the scikit-learn framework ([https://scikit-learn.org](https://scikit-learn.org)) to train the Isolation Forest model. 

> **Info:** To obtain a robust and meaningful model, further cleaning of the training data and validating the best model parameters is required. This is not in the scope of this demo and presumes knowledge of data science best practices. 

After the model is created, the scikit-learn object can be converted to PMML format using the Nyoka library [https://github.com/nyoka-pmml/nyoka](https://github.com/nyoka-pmml/nyoka).

The following steps illustrate the training of an Isolation Forest machine learning model using the Jupyter Notebook.

1. Follow the steps described in [ Machine Learning Workbench > Projects > Uploading resources](/machine-learning/web-app-mlw/#uploading-resources) and upload *createModel.ipynb* to Machine Learning Workbench (MLW).

2. Follow the steps described in [ Machine Learning Workbench > Jupyter Notebook > Editing and executing a notebook](/machine-learning/web-app-mlw/#editing-and-executing-a-notebook) and execute the existing code snippets in each cell of the *createModel.ipynb* to train an Isolation Forest PMML model.


![Train Model using Jupyter Notebook](/images/zementis/AnomalyDetection/anomaly-jnb.png)

3. Click the refresh icon <img src="/images/zementis/mlw-refresh-icon.png" alt="Refresh" style="display:inline-block; margin:0"> at the top of Tabs to list the newly created *isolationForests.pmml* in the **Model** folder.


#### Model deployment and predictions using Cumulocity IoT

Once the model is available in the **Model** folder, it can be deployed to Machine Learning Engine (MLE) for predictions. 

1. Follow the steps described in [ Machine Learning Workbench > Projects > Uploading resources](/machine-learning/web-app-mlw/#uploading-resources) and upload *test_data.csv* to Machine Learning Workbench (MLW).

2. Follow the steps described in [ Machine Learning Workbench > Automated ML > Model deployment and predictions](/machine-learning/web-app-mlw/#model-deployment-and-predictions) and deploy *isolationForests.pmml* model to Machine Learning Engine (MLE) and predict *test_data.csv* data using *isolationForest* PMML model.

#### Create and upload Apama monitor to Cumulocity IoT

For this anomaly detection scenario, we need to use Apama streaming analytics. With Apama streaming analytics, you can add your logic to your IoT solution for the immediate processing of incoming data from devices or other data sources. This user-defined logic can, e.g. alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

We create an EPL-based monitor file and upload it to Cumulocity IoT. As mentioned earlier, the Apama EPL monitor file takes care of reading the measurements coming from the mobile device, sending it to the Zementis microservice, and raising an alarm when an anomaly is reported by our machine learning model.

Instead of creating a new monitor file, the attached *DetectAnomalies.mon* file can be used after making minor adjustments. Open *DetectAnomalies.mon* in a text editor and replace the `deviceId` variable with the ID of your registered device. Save your changes and upload this monitor file to your tenant. See [Deploying Apama applications as single \*.mon files with Apama EPL Apps](/apama/analytics-introduction/#single-mon-file) in the Streaming Analytics guide for details on uploading Apama monitor files.

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
            listenAndActOnMeasurements("yourDeviceId", "IsolationForest");
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
