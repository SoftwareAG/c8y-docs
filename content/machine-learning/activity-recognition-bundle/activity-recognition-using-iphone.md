---
title: Activity recognition using a smartphone
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/activity-recognition/#activity-recognition-using-android
---

This section deals with the basic data science steps of creating an activity recognition model with self-collected data. First of all, you need to register your smartphone. Then follow the sections below for collecting data, training the model and using the model to recognize activities via the phone.

{{< c8y-admon-info >}}
The phone used for the entire workflow must be of the same type because the data and sensors may vary for different devices.
{{< /c8y-admon-info >}}

#### Register a smartphone in the platform

Follow the steps described in [{{< sensor-app >}}](/users-guide/sensor-app) and register a smartphone in {{< product-c8y-iot >}}.

{{< c8y-admon-info >}}
Set "1 sec" as **INTERVAL (secs)** for *Acceleration* and *Gyroscope* sensors in the {{< sensor-app >}}.
{{< /c8y-admon-info >}}

Once registered, you can get the device ID by looking up your device on the **All Devices** page of your tenant's Device management application.

#### Data collection

1. Follow the steps described in [Machine Learning Workbench > Upload a project](/machine-learning/web-app-mlw/#upload-a-project) and upload the *ActivityRecognitionDemoProject.zip* project to MLW. A new project is created with the name **ActivityRecognitionDemoProject_{UUID}**, where `UUID` is a system generated unique identifier. This project will have a total of 5 resources. You will get 2 files in the **Data** folder and 3 files in the **Code** folder.

2. Select the *CONFIG.json* in the **Data** folder and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0"> to edit the *CONFIG.json*.

3. Update the values of *c_url*, *c_user* and *c_pass* with your tenant credentials and click the save icon <img src="/images/zementis/mlw-save-icon.png" alt="Save" style="display:inline-block; margin:0"> at the right of the top menu bar.


Recording training data for activity recognition is done by starting the {{< sensor-app >}}, performing each of the activities over a few minutes, and noting the exact time.


The format of the JSON data might have changed in the meantime, or some sensors might not be available for some phone types, so check the exact format by viewing a current sample.

The following code block contains the data format of the JSON schema that was assumed for this demo.

*measurement.json*

```
{
	"_id" : ObjectId("5c928ba9b524aca326d727fe"),
	"self" : "https://zdev.cumulocity.com/measurement/measurements/7668082",
	"time" : "2019-03-18T14:46:15.000-07:00",
	"id" : "7668082",
	"source" : {
		"self" : "https://zdev.cumulocity.com/inventory/managedObjects/7668076",
		"id" : "7668076"
	},
	"type" : "c8y_Acceleration",
	"c8y_Acceleration" : {
		"accelerationY" : {
			"unit" : "G",
			"value" : -0.2860107421875
		},
		"accelerationX" : {
			"unit" : "G",
			"value" : -0.1037750244140625
		},
		"accelerationZ" : {
			"unit" : "G",
			"value" : -0.9522247314453125
		}
	},
	"activity" : "none"
}
```

#### To collect the walking data:


* Follow the steps described in [Machine Learning Workbench > Data pull > {{< product-c8y-iot >}}](/machine-learning/web-app-mlw/#cumulocity-iot) and pull the measurements of newly registered smartphone with "walkData.csv" as **File name**, data interval (i.e. interval during which the data was created), "None" as **Aggregation** and select "c8y_Acceleration" as **Data points**.

* This file can be previewed to verify the downloaded data and can be used for model building exercise.

#### To collect the sitting data:

* Follow the steps described in [Machine Learning Workbench > Data pull > {{< product-c8y-iot >}}](/machine-learning/web-app-mlw/#cumulocity-iot) and pull the measurements of the newly registered smartphone with "sittingData.csv" as **File name**, data interval (i.e. interval during which the data was created), "None" as **Aggregation** and select "c8y_Acceleration" as **Data points**.

* This file can be previewed to verify the downloaded data and can be used for model building exercise.

#### To collect the jumping data:

* Follow the steps described in [Machine Learning Workbench > Data pull > {{< product-c8y-iot >}}](/machine-learning/web-app-mlw/#cumulocity-iot) and pull the measurements of the newly registered smartphone with "jumpData.csv" as **File name**, data interval (i.e. interval during which the data was created), "None" as **Aggregation** and select "c8y_Acceleration" as **Data points**.

* Once data is downloaded, this file can be previewed to verify the downloaded data and can be used for model building exercise.

The following steps illustrate the next steps to merge all these file and create a concatenated data with labels which can be used for the machine learning model building exercise using the Jupyter Notebook.

Follow the steps described in [Machine Learning Workbench > Jupyter Notebook > Editing and executing a notebook](/machine-learning/web-app-mlw/#editing-and-executing-a-notebook) and execute the existing code snippets in each cell of the *MergeData.ipynb*. This will perform the following actions:

-	loads all the activity data,
-	aggregate them in second wise,
-	add labels for each activity and
-	save it in a single file *activityData.csv*.

<img src="/images/zementis/ActivityRecognition/activity_recognition_merge_data.PNG" alt="Download" style="display:inline-block; margin:0">


#### Train the PMML model

To train the model we will use the AutoML feature of {{< product-c8y-iot >}} Machine Learning Workbench.

1. Follow the steps described in [Machine Learning Workbench > Projects > Resources](/machine-learning/web-app-mlw/#automl).

2. Select the data resource **activityData.csv** in the **Data** folder, and click the add icon <img src="/images/zementis/mlw-new-automl-icon.png" alt="Add" style="display:inline-block; margin:0"> at the right of the top menu bar to proceed with training the AutoML model on that data.

3. Select **Classification** as problem type at the top left, select **Target Variable** at the right for "label", clear **USE FOR MODEL** for "time" and click **BUILD**.

<img src="/images/zementis/ActivityRecognition/activity_recognition_automl.PNG" alt="Download" style="display:inline-block; margin:0"><br>

4. In the **Training Parameter** section at the right, select the training parameters which include model evaluation criteria (**Scoring**), training iterations (**Generation**) and population size for each generation (**Population Size**) and click the submit icon <img src="/images/zementis/mlw-submit-icon.png" alt="Submit" style="display:inline-block; margin:0">.

<img src="/images/zementis/ActivityRecognition/activity_recognition_automl_training_params.PNG" alt="Download" style="display:inline-block; margin:0"><br>


This will create a new task in the **Tasks** section.

Click **Tasks** in the navigator and click the corresponding task name to display the status of the model training in the **Task History** section at the center.

Once the task is completed, all the trained models are listed along with the model evaluation score in descending order.

The hyper-parameters for each model can be viewed by clicking on the corresponding model name.

After the training is complete, the best model selected by the evaluation criteria will be saved in the **Model** folder of the respective **Project** in PMML format.

#### Deploy the model to the platform

Once the model is available in the **Model** folder, it can be deployed on Machine Learning Engine (MLE) for predictions.

Select the model from the **Model** folder and click the cloud icon <img src="/images/zementis/mlw-deploy-icon.png" alt="Deploy" style="display:inline-block; margin:0"> ("Deploy") at the right of the top menu bar to deploy the selected model on Machine Learning Engine (MLE).

Once the model is successfully deployed, the cloud icon will change to <img src="/images/zementis/mlw-deployed-icon.png" alt="Deployed" style="display:inline-block; margin:0"> "Deployed".


#### Create and upload Apama monitor file

For this active recognition scenario, we need to use Apama streaming analytics. With Apama streaming analytics, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. This user-defined logic can, e.g. alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

We create an EPL-based monitor file and upload it to {{< product-c8y-iot >}}. As mentioned earlier, the Apama EPL monitor file takes care of reading the measurements coming from the mobile device, sending it to the Zementis microservice and raising an alarm when any change in activity is reported by our machine learning model.

Instead of creating a new monitor file, you can use the attached *RecognizeActivitiesSmartPhone.mon* file after making minor adjustments. Open *RecognizeActivities.mon* in a text editor and replace the `deviceId` variable with the ID of your registered device, same as `c_device_source` in the *CONFIG.json* file mentioned above. Save your changes and upload this monitor file to your tenant. See [EPL Apps > Basic functionality > Deploying EPL apps as single \*.mon files with the Streaming Analytics application](/streaming-analytics/epl-apps/#single-mon-file) in the *Streaming Analytics guide* for details on uploading Apama monitor files.

```
using com.apama.correlator.Component;
using com.apama.cumulocity.Alarm;
using com.apama.cumulocity.CumulocityRequestInterface;
using com.apama.cumulocity.Measurement;
using com.apama.cumulocity.FindAlarm;
using com.apama.cumulocity.FindAlarmResponse;
using com.apama.cumulocity.FindAlarmResponseAck;
using com.apama.cumulocity.FindManagedObjectResponse;
using com.apama.cumulocity.FindManagedObjectResponseAck;
using com.apama.cumulocity.FindManagedObject;
using com.softwareag.connectivity.httpclient.HttpOptions;
using com.softwareag.connectivity.httpclient.HttpTransport;
using com.softwareag.connectivity.httpclient.Request;
using com.softwareag.connectivity.httpclient.Response;
using com.apama.json.JSONPlugin;

monitor RecognizeActivities {

    // Replace this value with your device id.
    string deviceId := "";

    // Model to be used for recognizing activities
    string modelName := "activityRecognitionModel";

    //counter to exclude first five readings
    integer counter := 0;

    // counter to include first five detections for the same activity
    integer similarActivityCount := 0;

	// threshold value for any activity to be predicted consecutively
	integer thresholdValueForDeterminingActivity := 5;

	//initializing activity tracker flags to 'idle state'
	string lastActivity := "idle state";
	string referenceActivity := "idle state";

	CumulocityRequestInterface cumulocity;

	constant string ALARM_TYPE := "ActivityRecognitionAlarm";

    action onload() {
    	cumulocity := CumulocityRequestInterface.connectToCumulocity();
        listenAndActOnMeasurements();
    }

    action listenAndActOnMeasurements() {
        monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
        monitor.subscribe(FindAlarmResponse.SUBSCRIBE_CHANNEL);

        on all Measurement(source = deviceId) as m {        

            if(m.measurements.hasKey("c8y_Acceleration")){
            	log "Received Measurement from C8Y.";
            	//Gather the data
                string record := convertMeasurementToRecord(m);
                log "Sending record to zementis - "+ record;
                Request zementisRequest := cumulocity.createRequest("GET", "/service/zementis/apply/"+modelName, any());
		        zementisRequest.setQueryParameter("record", record);
		        zementisRequest.execute(responseHandler);
		        log "EPL execution completed.";
            }
        }
    }

    action convertMeasurementToRecord(Measurement m) returns string
    {
        dictionary<string, any> json := {};
       	json["c8y_Acceleration_accelerationX"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationX").value;
    	json["c8y_Acceleration_accelerationY"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationY").value;
    	json["c8y_Acceleration_accelerationZ"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationZ").value;
        return JSONPlugin.toJSON(json);
    }

    action responseHandler(Response apiResponse) {  	
        integer statusCode := apiResponse.statusCode;
        log "Zementis responded with status -" + statusCode.toString();

        // Ignore first 5 records and then starting checking the outputs for 200 responses.
        // First 5 records need to be cached by Zementis Server. Hence send it out but ignore the incoming response.
        if(counter >= 5 and statusCode = 200) {
	        string currentActivity := apiResponse.payload.getSequence("outputs")[0].getEntry("predicted_activity").valueToString();
	        log "Last activity was : " + lastActivity + ", Current activity is : " + currentActivity + ", Reference activity is : "+ referenceActivity;

	        if (currentActivity =  referenceActivity) {
	        	similarActivityCount := similarActivityCount + 1;
	        	log "Similarity count is : "+ similarActivityCount.toString();
	        }
	        else {
	        	referenceActivity := currentActivity;
	        	similarActivityCount := 1;
	        	log "Similarity count is : "+ similarActivityCount.toString();
	        }

	        // Hold on till you get 5 occurences of the same activity and for 6th activity onwards keep ignoring if its the same activity.
			if (similarActivityCount = thresholdValueForDeterminingActivity and lastActivity != referenceActivity){
				string alarmMessage := "User switched activity from '" + lastActivity + "' to '" + referenceActivity + "'.";

				clearOldAlarmAndSendNewAlarm(alarmMessage);

				// Overwrite the last activity with the last activity so that it doesn't generate duplicate alarms for the same activity.
				lastActivity := referenceActivity;
			}
	    }
        counter := counter + 1;
    }

    action createNewAlarm(string alarmMessage) {
    	send Alarm("", ALARM_TYPE, deviceId, currentTime,
		           alarmMessage, "ACTIVE", "CRITICAL", 1, new dictionary<string,any>) to Alarm.SEND_CHANNEL;
		log "Alarm added as - "+alarmMessage;
    }

    action clearOldAlarmAndSendNewAlarm(string alarmMessage) {
	    	integer reqId:= integer.getUnique();
	        send FindAlarm(reqId, {"source": deviceId, "status": "ACTIVE", "type": ALARM_TYPE}) to FindAlarm.SEND_CHANNEL;
	        //only if old alarm is found, clear it
	        on FindAlarmResponse(reqId=reqId) as alarmResponse and not FindAlarmResponseAck(reqId=reqId) {
	            send Alarm(alarmResponse.id, ALARM_TYPE, deviceId, currentTime, alarmResponse.alarm.text,
	                        "CLEARED", alarmResponse.alarm.severity, 1, new dictionary<string, any>) to Alarm.SEND_CHANNEL;
	            log "Old Alarm cleared: " + alarmResponse.alarm.text;
	        }
	        reqId:= integer.getUnique();
	        // now create a new alarm
	        send FindAlarm(reqId, {"source": deviceId, "status": "ACTIVE", "type": ALARM_TYPE}) to FindAlarm.SEND_CHANNEL;
	        on FindAlarmResponseAck(reqId=reqId){
	        	//Now create new alarm
	            createNewAlarm(alarmMessage);
	        }
	}
}
```

#### Classify activities

Now that you have all the pieces together, you can try to recognize change in activity patterns with your phone. You could sit down, start jumping or running along with your mobile phone.

You should be able to see alarms being generated from your device which will be visible under the **Alarms** tab of your device in the Device management application.
