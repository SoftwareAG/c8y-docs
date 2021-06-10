---
title: Activity recognition using an Android Smart-Phone
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/activity-recognition/#activity-recognition-using-android
---

This section deals with the basic data science steps of creating an activity recognition model with self-collected data. First of all, you need to register your Android Smart-Phone. Then follow the sections below for collecting data, training the model and using the model to recognize activities via the phone. Note, that the phone for the entire workflow has to be of the same type because the data and sensors for device types may differ.

#### Register an Android Smart-Phone in Cumulocity IoT

Registering an Android Smart-Phone in Cumulocity IoT involves installing the Cloud Sensor App on your phone and using it for completing the registration.

Follow the steps described in [User guide > Cumulocity IoT Sensor App](/users-guide/cumulocity-sensor-app) in the User guide.

After the download, do the following on your Android Smart-Phone: Open Settings > Click General > Click Device Management or Profiles & Device Management > Select Software AG > Trust "Software AG“.

Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.json* file with the device ID of your registered Android Smart-Phone.

#### Data collection with Cumulocity IoT

Collecting training data for activity recognition is done by starting the Cumulocity IoT Cloud Sensor App, performing each one of the activities over a few minutes, and noting the exact time. The important point to care is you need to set up the app to send data in seconds intervals.  As a next step, the instructions and scripts provided below can be used to collect training data per activity type. The resulting CSV files can be combined for the different activity classes so that the final training data includes instances for all activity types.

Note that the code and data structure follows the current version of Cumulocity IoT it might get changed in the future and data might need more complex pre-processing might for an offline data store. The format of the JSON data might have changed in the meantime, or some sensors might not be available for some phone types, so check the exact format by viewing a current sample.

The following code block contains the data format of the JSON schema that was assumed for this demo.

	measurement.json
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

Data collection can be done by using the *Import from Cumulocity IoT* feature of Cumulocity IoT Machine Learning Workbench tool.

<img src="/images/zementis/ActivityRecognition/dataimport.PNG" alt="Download" style="display:inline-block; margin:0">



#### To collect the walking data:

Click on “Import from Cumulocity IoT” >> Select Your Device >>> Give a name walkData >>> Select time period  From: 11:45 To: 11:50  Select sensor *c8y_Acceleration, c8y_Gyroscope*. >>> Aggregation None >>> Click submit>> This will create a task in Cumulocity Machine Learning Workbench >> Once task changes to Success >> We can confirm the data in our Data section the name of the file is *walkData.csv*.
This file can be previewed to verify the downloaded data and can be used for model building exercise.

<img src="/images/zementis/ActivityRecognition/walk.PNG" alt="Download" style="display:inline-block; margin:0">


#### To collect the sitting data:

Click on “Import from Cumulocity IoT” >> Select Your Device >>> Give a name sittingData >>> Select time period  From: 11:38 To: 11:44  Select sensor *c8y_Acceleration, c8y_Gyroscope*. >>> Aggregation None >>> Click submit>> This will create a task in Cumulocity Machine Learning Workbench >> Once task changes to Success >> We can confirm the data in our Data section the name of the file is *sittingData.csv*.
This file can be previewed to verify the downloaded data and can be used for model building exercise.

<img src="/images/zementis/ActivityRecognition/sitting.PNG" alt="Download" style="display:inline-block; margin:0">


#### To collect the jumping data:

Click on “Import from Cumulocity IoT” >> Select Your Device >>> Give a name jumpData >>> Select time period  From: 11:52 To: 11:58  Select sensor *c8y_Acceleration, c8y_Gyroscope*. >>> Aggregation None >>> Click submit>> This will create a task in Cumulocity Machine Learning Workbench >> Once task changes to Success >> We can confirm the data in our Data section the name of the file is *jumpData.csv*.
This file can be previewed to verify the downloaded data and can be used for model building exercise.

<img src="/images/zementis/ActivityRecognition/sitting.PNG" alt="Download" style="display:inline-block; margin:0"><br>

Once data is downloaded.

We need to merge all these file and create a concatenated data with labels which can be used for model building exercise. Run the attached *01 merge Data.ipynb* notebook which does the following:

*	Loads al the activity data, aggregate them in second wise, and add labels for each activity and save it in a single file.

<img src="/images/zementis/ActivityRecognition/notebook1.PNG" alt="Download" style="display:inline-block; margin:0">


#### Train the PMML model

To train the model we will use the AutoML feature of Cumulocity IoT Machine Learning Workbench.
Select the data file *activityData.csv* and click on train AutoML icon.

<img src="/images/zementis/ActivityRecognition/autoML.PNG" alt="Download" style="display:inline-block; margin:0"> <br><br>
This will open a Pre-processing form which needs to be filled as shown in the below image. The actions are:
* Select *Classification* 
* Select the "label" variable as target variable and uncheck the checkbox. 
* Unselect the time variable
* CLick on *Build*
 <br><br>
<img src="/images/zementis/ActivityRecognition/automl1.PNG" alt="Download" style="display:inline-block; margin:0"><br><br>
Fill the form to start the AutoML task. Give Name "activityrecognitionModel" >>> Select Scoring "accuracy" >>> Select Algorithm of your choice "RandomForestClassifier" >>> Generation *5* >>> Population Size *25*

<img src="/images/zementis/ActivityRecognition/automl3.PNG" alt="Download" style="display:inline-block; margin:0">

#### Upload the model to Cumulocity IoT

In order to upload the model to Cumulocity IoT, Navigate to Models section of Cumulocity IoT Machine Learning Workbench and select the model *activityRecognitionModel.pmml* and click on Deploy icon.

<img src="/images/zementis/ActivityRecognition/uplaodModel.PNG" alt="Download" style="display:inline-block; margin:0"> <br>

A pre-trained model *ActivitiesDTreeJump.pmml* is also attached for reference. This activity recognition model was trained with the data available in *data/training_demo_data_jump.csv* mentioned in the previous section.

#### Create and upload Apama monitor to Cumulocity IoT

For this active recognition scenario, we need to use Apama streaming analytics. With Apama streaming analytics, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. This user-defined logic can, e.g. alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

We create an EPL-based monitor file and upload it to Cumulocity IoT. As mentioned earlier, the Apama EPL monitor file takes care of reading the measurements coming from the mobile device, sending it to the Zementis microservice and raising an alarm when any change in activity is reported by our machine learning model.

Instead of creating a new monitor file, the attached *RecognizeActivities.mon* file can be used after making minor adjustments. Open *RecognizeActivities.mon* in a text editor and replace the `deviceId` variable with the ID of your registered device, same as `c_device_source` in the *CONFIG.INI* file mentioned above. Save your changes and upload this monitor file to your tenant. See [Deploying Apama applications as single \*.mon files with Apama EPL Apps] (/apama/analytics-introduction/#single-mon-file) in the Streaming Analytics guide for details on uploading Apama monitor files.

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

#### Classify activities

Now that you have all the pieces together, you can try to recognize change in activity patterns with your phone. You could sit down, start jumping or running along with your mobile phone.

You should be able to see alarms being generated from your device which will be visible under the **Alarms** tab of your device in the Device Management application.
