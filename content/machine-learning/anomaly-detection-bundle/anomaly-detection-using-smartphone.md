---
title: Anomaly detection using a smartphone
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/anomaly-detection/#anomaly-detection-using-smartphone
---

This section deals with the basic data science steps of creating an anomaly detection model with self-collected data. First of all, you need to register your smartphone. Then follow the sections below for collecting data, training the model, and using the model to detect anomalies via the phone. Note that the phone for the entire workflow has to be of the same type because the data and sensors for device types may differ.

#### Register your smartphone in Cumulocity IoT

Registering a smartphone in Cumulocity IoT involves installing the Cloud Sensor App on your phone and using it for completing the registration. Follow the steps described in [User guide > Cumulocity IoT Sensor App](/users-guide/cumulocity-sensor-app) in the User guide.

Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, note down the device ID of your registered phone.

In contrast to supervised classification models, no labeled training data is required for anomaly detection models. The training happens with the regular data, and any unseen behavior will later be detected as anomalous. The data can be collected by carrying around the registered device over a few days without any anomalous behavior. All data can then be accessed via the Cumulocity IoT Machine Learning Workbench which automatically transforms the JSON data into the training data format.

#### Upload Training Data with Cumulocity IoT Machine Learning Workbench (MLW)

The data recorded on your smartphone can be downloaded using MLW. To download the data, follow the below steps:

1. log in to MLW using the username and password

2. Click **Projects** in the navigator. This will list all the available projects. 

3. Click **+Add Project** at the right of the top menu bar, enter a project named *Anomaly Detection* and description as *Anomaly detection using smartphone*, and click **Add Project**. This will create a new project with the given name. Click on the project name to navigate inside the project.

4. To upload the provided *dataset_training.csv* file, click the cloud upload icon <img src="/images/zementis/mlw-upload-icon.png" alt="Upload" style="display:inline-block; margin:0"> and either click on the upload pane and select the file for uploading or use the drag and drop files capability.


#### Train the PMML model

For this demo, the anomaly detection machine learning algorithm "Isolation Forest" is applied. Isolation Forest is an approach that detects anomalies by isolating instances, without relying on any distance or density measure.

The logic argument goes: isolating anomaly observations is easier as only a few conditions are needed to separate those cases from the normal observations. On the other hand, isolating normal observations require more conditions. Therefore, an anomaly score can be calculated as the number of conditions required to separate a given observation. - [Anomaly Detection Using Isolation Forests](https://blog.easysol.net/using-isolation-forests-anamoly-detection/)

The integrated Jupyter Notebook feature within the Cumulocity IoT Machine Learning Workbench helps in writing the code that creates an Isolation Forest Model in PMML format using the previously uploaded training data. The script uses the scikit-learn framework ([https://scikit-learn.org](https://scikit-learn.org)) to train the Isolation Forest model. To obtain a robust and meaningful model, further cleaning of the training data and validating the best model parameters is required. This is not in the scope of this demo and presumes knowledge of data science best practices. After the model is created, one could convert the scikit-learn object into PMML format using the Nyoka library [https://github.com/nyoka-pmml/nyoka](https://github.com/nyoka-pmml/nyoka).

The following steps illustrate how to train an Isolation Forests machine learning model using the Jupyter Notebook.

1. To upload the provided *createModel.ipynb* file, click the cloud upload icon <img src="/images/zementis/mlw-upload-icon.png" alt="Upload" style="display:inline-block; margin:0"> and either click on the upload pane and select the file for uploading or use the drag and drop files capability.

2. To edit a notebook, select the *createModel.ipynb* notebook file in the **Code** folder and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0"> at the top right.

3. This will open the notebook in an editor. Run each cell of the notebook to train an Isolation Forests PMML model.

4. The PMML model named *isolationForests.pmml* will show up in the **Model** folder of the MLW when one clicks on the refresh button <img src="/images/zementis/mlw-refresh-icon.png" alt="Edit" style="display:inline-block; margin:0">


#### Model deployment and predictions using Cumulocity IoT

Once the model is available in the **Model** folder, it can be deployed on Machine Learning Engine (MLE) for predictions. 

Select the *isolationForests.pmml* model from the **Model** folder and click the cloud icon <img src="/images/zementis/mlw-deploy-icon.png" alt="Deploy" style="display:inline-block; margin:0"> ("Deploy") at the right of the top menu bar to deploy the model on Machine Learning Engine (MLE).

Once the model is successfully deployed, the cloud icon will change to <img src="/images/zementis/mlw-deployed-icon.png" alt="Deployed" style="display:inline-block; margin:0"> "Deployed".

For predictions, first upload the test dataset *test_data.csv* to MLW. To upload test dataset, click the cloud upload icon <img src="/images/zementis/mlw-upload-icon.png" alt="Upload" style="display:inline-block; margin:0"> and either click on the upload pane and select the file for uploading or use the drag and drop files capability.

To predict data using a deployed model, select *test_data.csv* from the **Data** folder and click the predict icon <img src="/images/zementis/mlw-predict-icon.png" alt="Predict" style="display:inline-block; margin:0">.

Select the **PMML** option under the predict icon <img src="/images/zementis/mlw-predict-icon.png" alt="Predict" style="display:inline-block; margin:0">.

![Select Format MLE](/images/zementis/AnomalyDetection/anomaly-app-automl-predict.png)

This will list all the PMML models deployed on the Machine Learning Engine (MLE). Select *isolationForest* PMML model for prediction and click the submit icon <img src="/images/zementis/mlw-submit-icon.png" alt="Submit" style="display:inline-block; margin:0">.

![Select Model for Prediction](/images/zementis/AnomalyDetection/anomaly-app-automl-predict-model-select.png)

The prediction results will be stored in the **Data** folder. The predicted output data is stored in the CSV format with the file name suffixed with *predicted*. 

Select the output data from the **Data** folder and click the download icon <img src="/images/zementis/mlw-download-icon.png" alt="Download" style="display:inline-block; margin:0"> at the right of the top menu bar to download the output data to the local machine. 

Select the output data from the **Data** folder and click the preview icon <img src="/images/zementis/mlw-preview-icon.png" alt="Preview" style="display:inline-block; margin:0"> to preview the output data.


#### Create and upload Apama monitor to Cumulocity IoT

For this anomaly detection scenario, we need to use Apama streaming analytics. With Apama streaming analytics, you can add your logic to your IoT solution for the immediate processing of incoming data from devices or other data sources. This user-defined logic can, e.g. alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

We create an EPL-based monitor file and upload it to Cumulocity IoT. As mentioned earlier, the Apama EPL monitor file takes care of reading the measurements coming from the mobile device, sending it to the Zementis microservice, and raising an alarm when an anomaly is reported by our machine learning model.

Instead of creating a new monitor file, the attached *DetectAnomalies.mon* file can be used after making minor adjustments. Open *DetectAnomalies_iPhone.mon* in a text editor and replace the `deviceId` variable with the ID of your registered device. Save your changes and upload this monitor file to your tenant. See [Deploying Apama applications as single \*.mon files with Apama EPL Apps](/apama/analytics-introduction/#single-mon-file) in the Streaming Analytics guide for details on uploading Apama monitor files.

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
            listenAndActOnMeasurements("yourDeviceId", "isolationForest");
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
