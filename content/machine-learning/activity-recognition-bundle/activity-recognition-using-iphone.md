---
title: Activity recognition using an iPhone
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/activity-recognition/#activity-recognition-using-iphone
---

This section deals with the basic data science steps of creating an activity recognition model with self-collected data. First of all, you need to register your iPhone. Then follow the sections below for collecting data, training the model and using the model to recognize activities via the phone. Note, that the phone for the entire workflow has to be of the same type because the data and sensors for device types may differ.

#### Register an iPhone in Cumulocity IoT

Registering an iPhone in Cumulocity IoT involves installing the Cloud Sensor App on your phone and using it for completing the registration.

Follow the steps described in [User guide > Cumulocity IoT Sensor App](/users-guide/cumulocity-sensor-app) in the User guide.

After the download, do the following on your iPhone: Open Settings > Click General > Click Device Management or Profiles & Device Management > Select Software AG > Trust "Software AG“.

Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.INI* file with the device ID of your registered iPhone.

#### Data collection with Cumulocity IoT

Collecting training data for activity recognition is done by starting the Cumulocity IoT Cloud Sensor App, performing each one of the activities over a few minutes and noting the exact time period. As a next step, the instructions and scripts provided below can be used to collect training data per activity type. The resulting CSV files can be combined for the different activity classes, so that the final training data includes instances for all activity types.

Note that for demo purposes, the data is fetched via REST and directly transformed into the training data set. More complex pre-processing might require the use of an offline data store. The format of the JSON data might have changed in the meantime, or some sensors might not be available for some phone types, so check the exact format by viewing a current sample.

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

Data collection can be done by using the below shown and attached script *createData.py*. This Python script connects to the Cumulocity IoT REST measurements endpoint, pulls the data, and writes it to a CSV file.

For each activity type, the name of the activity and the timestamps need to be updated in the constants ACTIVITY, DATE_FROM and DATE_TO. Note that the format of the data might look slightly different. After the data sets for all activities are created, they can be combined for model training.

	createData.py
	import configparser
	import csv, os
	import requests
	import queue
	import numpy as np


	def add2Data(d, writer, activity):

		acc = d['c8y_Acceleration']
		accelerationX = acc['accelerationX']
		accX_Val=accelerationX['value']
		accelerationY = acc['accelerationY']
		accY_Val=accelerationY['value']
		accelerationZ = acc['accelerationZ']
		accZ_Val=accelerationZ['value']


		# cutting off the first instances of the training data as the std dev is not accurate for those			
		writer.writerow([accX_Val, accY_Val, accZ_Val, activity])


	# collect config from CONFIG-INI -> change user and pass
	config = configparser.ConfigParser()
	config.read('CONFIG.INI')

	# use the dates in which a particular acitvity was perfomed
	DATE_FROM="2019-05-16T13:15:36.000-07:00"
	DATE_TO="2019-05-16T13:15:59.000-07:00"

	# specify the recorded activity
	ACTIVITY="jump"

	c_measurements_endpoint="/measurement/measurements/"

	# maximum page size is 2000; only taking acceleration measurements
	c_params={"source":config.get("cumulocity", "c_device_source"),"pageSize":"2000", "dateFrom":DATE_FROM, "dateTo":DATE_TO, "valueFragmentType":"c8y_Acceleration"}


	# get first page of json data measurements from cumulocity
	c_auth=config.get("cumulocity", "c_user"),config.get("cumulocity", "c_pass")
	r=requests.get(config.get("cumulocity","c_url")+c_measurements_endpoint,params=c_params, auth=c_auth)
	print("Start collecting data from: "+r.url)
	print("Status code: "+str(r.status_code))

	# training data file
	DIR_DATA="data/"
	DATA_FILE=DIR_DATA+"generated_dataset_"+ACTIVITY+".csv"

	 # collect data
	json_doc=r.json()
	data=[]

	if not os.path.exists(DIR_DATA):
	    os.makedirs(DIR_DATA)

	with open(DATA_FILE, mode='w') as training_file:
		writer = csv.writer(training_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
		writer.writerow(["accelerationX","accelerationY","accelerationZ", "activity"])

		first_arr=json_doc['measurements']

		print("Page 1.\tCollecting data at: " +first_arr[0]['time'])

		for d in first_arr:
			add2Data(d, writer, ACTIVITY)


		# change the range depending on amount of training data required
		for i in range(5):
			r=requests.get(json_doc['next'], auth=c_auth)
			next_doc=r.json()
			measure_arr=next_doc['measurements']

			if not measure_arr:
				print("Last page reached.")
				break

			print("Page "+ str(i+2)+".\tCollecting data at: "+ measure_arr[0]['time'])

			for d in measure_arr:
				add2Data(d, writer, ACTIVITY)

			json_doc=next_doc

	print("Data written to " + DATA_FILE)


The training data set we collected is attached as *data/training_demo_data_jump.csv* in the attached *ActivityRecognitionDemo.zip*. The data created in the above script will need to be transformed into that same format once data for all activity types is obtained.


#### Train the PMML model

The attached Python script *createModel.py* creates a Decision Tree Model in PMML format using the previously created training data. The reason we chose this model type was that it can be easily interpreted and it performed well in our evaluations.

New fields are created by calculating the standard deviation of a sample of 5 previous records. If no training data was created with the *createData.py* script, sample training data for the activities sit, run and jump can be found under **data/training_demo_data_jump.csv** of the attached ZIP file. It is then used for training the model with the help of the scikit-learn framework ([https://scikit-learn.org](https://scikit-learn.org)). To obtain a robust and meaningful model, further cleaning of the training data and validating the best model parameters is required. This is not in the scope of this demo and presumes knowledge of data science. After the model is created in scikit-learn, it is converted into PMML format with the Nyoka library ([https://github.com/nyoka-pmml/nyoka](https://github.com/nyoka-pmml/nyoka)).

The script also contains a 10-fold cross validation and the evaluation against some test data. This data was obtained by having an additional person perform the three activities. The resulting numbers can give an outlook of how good the model can perform when showcasing the demo. The files that we used for testing are contained in the ZIP folder under *data/test_demo_data_jump.csv*. When you use your own test data, follow the same format. The script will also create a graph-based representation of the decision tree as *graph_decision_tree.pdf*.

	createModel.py
	from sklearn import tree
	from sklearn.model_selection import cross_val_score, train_test_split
	from sklearn.pipeline import Pipeline
	from nyoka import skl_to_pmml
	from nyoka.preprocessing import Lag
	import graphviz
	import numpy as np
	import os
	import pandas as pd
	import warnings

	warnings.filterwarnings('ignore')

	DIR="data/"
	FILE_NAME="demo_data_jump"
	CSV=".csv"
	TRAINING_FILE_NAME=DIR+"training_"+FILE_NAME+CSV
	TEST_FILE_NAME=DIR+"test_"+FILE_NAME+CSV
	PMML_FILE_NAME="pmml/generated_"+FILE_NAME+".pmml"

	features=['accelerationX', 'accelerationY', 'accelerationZ']
	category='activity'

	df_train = pd.read_csv(TRAINING_FILE_NAME, header = 0)

	X=df_train[features]
	y=df_train[category]

	df_test = pd.read_csv(TEST_FILE_NAME, header = 0)
	X_test=df_test[features]
	y_test=df_test[category]

	lag = Lag(aggregation="stddev", value=5)

	# instantiate the decision model object, here we are using a decision tree,
	model_type="d_tree"
	model=tree.DecisionTreeClassifier(class_weight=None, criterion='entropy', max_depth=3,
	            max_features=None, max_leaf_nodes=None,
	            min_impurity_decrease=0.0, min_impurity_split=None,
	            min_samples_leaf=9, min_samples_split=2,
	            min_weight_fraction_leaf=0.0, presort=True, random_state=None,
	            splitter='best')

	# train the model
	transformed_X = lag.fit_transform(X)
	model.fit(transformed_X,y)
	print("Model trained: ", model)

	# the following code can be used to show all classifications for the test data
	# output_classes=model.predict(X_test)
	# print("Computed results: ",output_classes)

	# compute the cross validation score
	scores = cross_val_score(model, transformed_X, y, cv=10)
	print("Accuracy with 10-fold cross validation:\t %0.2f (+/- %0.2f)%%" % (scores.mean(), scores.std() * 2))

	# test the model against data that was generated from another user
	transformed_X_test = lag.fit_transform(X_test)
	result=model.score(transformed_X_test, y_test)
	print("Accuracy against test data:\t\t {:.4%}".format(result))

	# convert model into PMML
	print("Start converting the model into PMML...")

	lag_obj = Lag(aggregation="stddev", value=5)

	pipeline = Pipeline([
		('lag', lag_obj),
	    (model_type, model)
	])
	pipeline.fit(X,y)
	skl_to_pmml(pipeline, features, "activity", PMML_FILE_NAME)
	print("Model with name "+PMML_FILE_NAME+" converted into PMML")

	#create graph for visualization of the model; this will only work for decision trees
	dot_data = tree.export_graphviz(model, out_file=None, feature_names=features,
	                     class_names=model.classes_,
	                     filled=True, rounded=True,
	                     special_characters=True)
	graph = graphviz.Source(dot_data)
	graph.render("graph_"+model_type)
	print("Graph with decision tree is created as graph_" + model_type + ".pdf.")

#### Upload the model to Cumulocity IoT

In order to upload the model to Cumulocity IoT, follow the steps described in [Machine Learning application > Managing models](/machine-learning/web-app/#managing-models).

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
	    string modelName := "DecisionTreeClassifier";

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
	       	json["accelerationX"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationX").value;
	    	json["accelerationY"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationY").value;
	    	json["accelerationZ"] := m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationZ").value;
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
