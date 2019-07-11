---
title: Active recognition
layout: redirect
weight: 10
---

### Overview

Sensor-based activity recognition can be used to model a wide range of human activities. Mobile devices, such as smart phones provide sufficient sensor data and calculation power to enable physical activity recognition to provide an estimation of the energy consumption during everyday life.

Sensor-based activity recognition researchers believe that by empowering ubiquitous computers and sensors to monitor the behavior of agents (under consent), these computers will be better suited to act on our behalf (see [Wikipedia](https://en.wikipedia.org/wiki/Activity_recognition)).

In this demo, we would like to showcase the recognition of the human activities sitting, jumping and running. For the purpose of demoing this scenario, we followed these steps:

* Collect sensor data from a user performing activities (sitting, jumping and running).
* Train an activity recognition model with the collected data and transform the model to PMML.
* Deploy the model to Cumulocity IoT using the Predictive Analytics app.
* Create and upload an EPL rule to Cumulocity (C8Y) IoT which does the following:
	* Gathers specific measurements coming from the source device and conducts any necessary pre-processing steps.
	* Sends the data via REST request to the the Zementis microservice API for processing.
	* Creates an update once the user changes activities.


### Prerequisites

[Download the ActivityRecognitionDemo.zip](https://iwiki.eur.ad.sag/display/RNDZEM/Activity+Recognition+Demo+Instructions?preview=/576606897/585434307/ActivityRecognitionDemo.zip) file which contains demo scripts, training data set, PMML Model and EPL rule.

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


For this particular demo, a phone or a phone-like device needs to be used, so that the measurement data for that particular device can be captured and be used for recognizing activities.

Therefore, the documentation has been split up into two parts:

* [Activity recognition using an iPhone](#iPhone)
* [Activity recognition using a simulated demo device](#demo-device)

### <a name="iPhone"></a>Activity recognition using an iPhone

This section deals with the basic data science steps of creating an activity recognition model with self-collected data. First of all, you need to register your iPhone. Then follow the sections below for collecting data, training the model and using the model to recognize activities via the phone. Note, that the phone for the entire workflow has to be of the same type because the data and sensors for device types may differ.

#### Register an iPhone in Cumulocity

Registering an iPhone on Cumulocity involves installing the Cloud Sensor App on your phone and using it for completing the registration. 

Follow the steps described in [Optional services > Cloud Sensor App](/guides/users-guide/optional-services#android-cloud-sensor-app) in the User guide.

After the download, do the following on your iPhone: Open Settings > Click General > Click Device Management or Profiles & Device Management > Select Software AG > Trust "Software AG“.

Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application. Now, update the `c_device_source` of the *CONFIG.INI* file with the device ID of your registered iPhone.

#### Data collection with Cumulocity

Collecting training data for activity recognition is done by starting the Cumulocity Cloud Sensor App, performing each one of the activities over a few minutes and noting the exact time period. As a next step, the instructions and scripts provided below can be used to collect training data per activity type. The resulting CSV files can be combined for the different activity classes, so that the final training data includes instances for all activity types.

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

Data collection can be done by using the below shown and attached script *createData.py*. This Python script connects to the Cumulocity REST measurements endpoint, pulls the data, transforms the values by calculating the standard deviation of the previous 5 sample values and writes it to a CSV file. 

For each activity type, the name of the activity and the timestamps need to be updated in the constants ACTIVITY, DATE_FROM and DATE_TO. Note that the format of the data might look slightly different. After the data sets for all activities are created, they can be combined for model training.

	createData.py
	import configparser
	import csv, os
	import requests
	import queue
	import numpy as np
	 
	 
	def add2Data(d, q_accX, q_accY, q_accZ, writer, activity, lag_count, lag):
	 
	    acc = d['c8y_Acceleration']   
	    accelerationX = acc['accelerationX']
	    accX_Val=accelerationX['value']
	    accelerationY = acc['accelerationY']
	    accY_Val=accelerationY['value']
	    accelerationZ = acc['accelerationZ']
	    accZ_Val=accelerationZ['value']
	                 
	    accX_stdev = np.std(list(q_accX.queue))
	    accY_stdev = np.std(list(q_accY.queue))
	    accZ_stdev = np.std(list(q_accZ.queue))
	         
	    # push to the queue after calculation so that only previous values are used
	    q_accX.put(accX_Val)
	    q_accY.put(accY_Val)
	    q_accZ.put(accZ_Val)
	 
	     
	    # cutting off the first instances of the training data as the std dev is not accurate for those
	    if lag_count>=LAG:               
	        writer.writerow([accX_Val,accY_Val, accZ_Val, accX_stdev, accY_stdev, accZ_stdev, activity])
	 
	    # get rid of first elem
	    q_accX.get()
	    q_accY.get()
	    q_accZ.get()
	 
	# collect config from CONFIG-INI -> change user and pass
	config = configparser.ConfigParser()
	config.read('CONFIG.INI')
	 
	# use the dates in which a particular acitvity was perfomed
	DATE_FROM="2019-05-16T13:15:36.000-07:00"
	DATE_TO="2019-05-16T13:15:59.000-07:00"
	 
	# specify the recorded activity
	ACTIVITY="jump"
	 
	# looking back to the last 5 data readings to calculate standard deviation
	LAG=5
	 
	c_measurements_endpoint="/measurement/measurements/"
	 
	# maximum page size is 2000; only taking acceleration measurements
	c_params={"source":config.get("cumulocity", "c_device_source"),"pageSize":"2000", "dateFrom":DATE_FROM, "dateTo":DATE_TO, "fragmentType":"c8y_Acceleration"}
	 
	 
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
	    writer.writerow(["accelerationX","accelerationY","accelerationZ","accX_stdDev","accY_stdDev","accZ_stdDev", "activity"])
	 
	    q_accX=queue.Queue()
	    q_accY=queue.Queue()
	    q_accZ=queue.Queue()
	     
	    for i in range(LAG):
	        q_accX.put(0.0)
	        q_accY.put(0.0)
	        q_accZ.put(0.0)
	         
	    lag_count=0
	     
	    first_arr=json_doc['measurements']   
	     
	    print("Page 1.\tCollecting data at: " +first_arr[0]['time'])
	     
	    for d in first_arr:   
	         
	        add2Data(d, q_accX, q_accY, q_accZ, writer, ACTIVITY, lag_count, LAG)
	        lag_count+=1        
	 
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
	            add2Data(d, q_accX, q_accY, q_accZ, writer, ACTIVITY, lag_count, LAG)
	             
	        json_doc=next_doc
	 
	print("Data written to " + DATA_FILE)

The training data set we collected is attached as *data/training_demo_data_jump.csv* in the attached *ActivityRecognitionDemo.zip*. The data created in the above script will need to be transformed into that same format once data for all activity types is obtained.


#### Train the PMML model

The attached Python script *createModel.py* creates a Decision Tree Model in PMML format using the previously created training data. The reason we chose this model type was that it can be easily interpreted and it performed well in our evaluations. 

New fields are created by calculating the standard deviation of a sample of 5 previous records. If no training data was created with the *createData.py* script, sample training data for the activities sit, run and jump can be found under **data/training_demo_data_jump.csv** of the attached ZIP file. It is then used for training the model with the help of the scikit-learn framework ([https://scikit-learn.org](https://scikit-learn.org)). To obtain a robust and meaningful model, further cleaning of the training data and validating the best model parameters is required. This is not in the scope of this demo and presumes knowledge of data science. After the model is created in scikit-learn, it is converted into PMML format with the Nyoka library ([https://github.com/nyoka-pmml/nyoka](https://github.com/nyoka-pmml/nyoka)). 

The script also contains a 10-fold cross validation and the evaluation against some test data. This data was obtained by having an additional person perform the three activities. The resulting numbers can give an outlook of how good the model can perform when showcasing the demo. The files that we used for testing are contained in the ZIP folder under *data/test_demo_data_jump.csv*. When you use your own test data, follow the same format. The script will also create a graph-based representation of the decision tree as *graph_decision_tree.pdf*.

	createModel.py
	from sklearn.pipeline import Pipeline
	from sklearn.model_selection import cross_val_score
	import numpy as np
	import pandas as pd
	import os
	from nyoka import skl_to_pmml
	 
	import warnings
	warnings.filterwarnings('ignore')
	 
	DIR="data/"
	FILE_NAME="demo_data_jump"
	CSV=".csv"
	TRAINING_FILE_NAME=DIR+"training_"+FILE_NAME+CSV
	TEST_FILE_NAME=DIR+"test_"+FILE_NAME+CSV
	PMML_FILE_NAME="pmml/generated_"+FILE_NAME+".pmml"
	 
	features=['accX_stdDev', 'accY_stdDev', 'accZ_stdDev']
	category='activity'
	   
	df_train = pd.read_csv(TRAINING_FILE_NAME, header = 0)
	original_headers = list(df_train.columns.values)
	print(original_headers)
	X=df_train[features]
	y=df_train[category]
	 
	df_test = pd.read_csv(TEST_FILE_NAME, header = 0)
	X_test=df_test[features]
	y_test=df_test[category]
	 
	 
	# instantiate the decision model object, here we are using a decision tree,
	from sklearn import tree
	model_type="d_tree"
	model=tree.DecisionTreeClassifier(class_weight=None, criterion='entropy', max_depth=3,
	            max_features=None, max_leaf_nodes=None,
	            min_impurity_decrease=0.0, min_impurity_split=None,
	            min_samples_leaf=9, min_samples_split=2,
	            min_weight_fraction_leaf=0.0, presort=True, random_state=None,
	            splitter='best')
	             
	# train the model
	model.fit(X,y)
	print("Model trained: ", model)
	 
	# the following code can be used to show all classifications for the test data
	# output_classes=model.predict(X_test)
	# print("Computed results: ",output_classes)
	 
	# compute the cross validation score
	scores = cross_val_score(model, X, y, cv=10)
	print("Accuracy with 10-fold cross validation:\t %0.2f (+/- %0.2f)%%" % (scores.mean(), scores.std() * 2))
	 
	# test the model against data that was generated from another user
	result=model.score(X_test, y_test)
	print("Accuracy against test data:\t\t {:.4%}".format(result))
	 
	# convert model into PMML
	print("Start converting the model into PMML...")
	pipeline = Pipeline([
	    (model_type, model)
	])
	pipeline.fit(X,y)
	skl_to_pmml(pipeline, features, "activity", PMML_FILE_NAME)
	print("Model with name "+PMML_FILE_NAME+" converted into PMML")
	 
	#create graph for visualization of the model; this will only work for decision trees
	import graphviz
	dot_data = tree.export_graphviz(model, out_file=None, feature_names=features,
	                     class_names=model.classes_,
	                     filled=True, rounded=True, 
	                     special_characters=True) 
	graph = graphviz.Source(dot_data)
	graph.render("graph_"+model_type)
	print("Graph with decision tree is created as graph_" + model_type + ".pdf.")
	
#### Add transformations to the model

The model can perform all pre-processing steps required for calculating the standard deviation itself with the help of model transformations. In order to enable this in the model you created in the previous step, add the `LocalTransformations` element after the `Output` element of the TreeModel in the PMML generated from the above step. Also, replace the created `DataDictionary` and `MiningSchema` with the ones below. The below extract is taken from the attached *pmml/ActivitiesDTreeJump.pmml* file.

	extract from pmml/ActivitiesDTreeJump.pmml
	<?xml version="1.0" encoding="UTF-8"?>
	<PMML xmlns="http://www.dmg.org/PMML-4_3" version="4.3Ext">
	    <Header copyright="Copyright (c) 2018 Software AG" description="Default description">
	        <Timestamp>2019-03-26 12:01:45.955350</Timestamp>
	    </Header>
	...
	    <DataDictionary numberOfFields="4">
	        <DataField name="accelerationX" optype="continuous" dataType="double" />
	        <DataField name="accelerationY" optype="continuous" dataType="double" />
	        <DataField name="accelerationZ" optype="continuous" dataType="double" />
	        <DataField name="activity" optype="categorical" dataType="string">
	            <Value value="run"/>
	            <Value value="sit"/>
	            <Value value="jump"/>
	        </DataField>
	    </DataDictionary>
	    <TreeModel modelName="DecisionTreeModel" functionName="classification" missingValuePenalty="1.0">
	        <MiningSchema>
	       <MiningField name="accelerationX" usageType="active" optype="continuous" />
	        <MiningField name="accelerationY" usageType="active" optype="continuous" />
	        <MiningField name="accelerationZ" usageType="active" optype="continuous" />
	        <MiningField name="activity" usageType="target" optype="categorical"/>
	        </MiningSchema>
	        <Output>
	            <OutputField name="probability_run" optype="continuous" dataType="double" feature="probability" value="run"/>
	            <OutputField name="probability_sit" optype="continuous" dataType="double" feature="probability" value="sit"/>
	            <OutputField name="probability_jump" optype="continuous" dataType="double" feature="probability" value="jump"/>
	            <OutputField name="predicted_activity" optype="categorical" dataType="string" feature="predictedValue"/>
	        </Output>
	       <LocalTransformations>
	            <DerivedField name="accX_stdDev" optype="continuous" dataType="double">
	                <Apply function="sqrt">
	                    <Apply function="/">
	                        <Apply function="+">
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationX" n="1" />
	                                    <Lag field="accelerationX" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationX" n="2" />
	                                    <Lag field="accelerationX" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationX" n="3" />
	                                    <Lag field="accelerationX" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationX" n="4" />
	                                    <Lag field="accelerationX" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationX" n="5" />
	                                    <Lag field="accelerationX" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                        </Apply>
	                        <Constant dataType="double">5.0</Constant>
	                    </Apply>
	                </Apply>
	            </DerivedField>
	            <DerivedField name="accY_stdDev" optype="continuous" dataType="double">
	                <Apply function="sqrt">
	                    <Apply function="/">
	                        <Apply function="+">
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationY" n="1" />
	                                    <Lag field="accelerationY" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationY" n="2" />
	                                    <Lag field="accelerationY" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationY" n="3" />
	                                    <Lag field="accelerationY" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationY" n="4" />
	                                    <Lag field="accelerationY" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationY" n="5" />
	                                    <Lag field="accelerationY" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                        </Apply>
	                        <Constant dataType="double">5.0</Constant>
	                    </Apply>
	                </Apply>
	            </DerivedField>
	            <DerivedField name="accZ_stdDev" optype="continuous" dataType="double">
	                <Apply function="sqrt">
	                    <Apply function="/">
	                        <Apply function="+">
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationZ" n="1" />
	                                    <Lag field="accelerationZ" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationZ" n="2" />
	                                    <Lag field="accelerationZ" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationZ" n="3" />
	                                    <Lag field="accelerationZ" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationZ" n="4" />
	                                    <Lag field="accelerationZ" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                            <Apply function="pow">
	                                <Apply function="-">
	                                    <Lag field="accelerationZ" n="5" />
	                                    <Lag field="accelerationZ" n="5" aggregate="avg" />
	                                </Apply>
	                                <Constant dataType="integer">2</Constant>
	                            </Apply>
	                        </Apply>
	                        <Constant dataType="double">5.0</Constant>
	                    </Apply>
	                </Apply>
	            </DerivedField>
	        </LocalTransformations>
	        <Node id="0" recordCount="1828.0">
	...

#### Upload the model to Cumulocity

In order to upload the model to Cumulocity, follow the steps described in [Predictive Analytics application > Managing models](/guides/predictive-analytics/web-app/#managing-models).

A pre-trained model *ActivitiesDTreeJump.pmml* is also attached for reference. This activity recognition model was trained with the data available in *data/training_demo_data_jump.csv* mentioned in the previous section.

#### Create and upload Apama monitor to Cumulocity

For this anomaly detection scenario, we need to use Apama streaming analytics. With Apama streaming analytics, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. This user-defined logic can, e.g. alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

We create an EPL-based monitor file and upload it to Cumulocity. As mentioned earlier, the Apama EPL monitor file takes care of reading the measurements coming from the mobile device, sending it to the Zementis microservice and raising an alarm when an anomaly is reported by our machine learning model.

Instead of creating a new monitor file, the attached *RecognizeActivities.mon* file can be used after making minor adjustments. Open *RecognizeActivities.mon* in a text editor and replace the variables tenant and credentials with the appropriate values. For setting the credentials, follow this example:

Assume your tenant name is "tenant", your username is "me" and your password is "secret". 

1. Go to *http://ostermiller.org/calc/encode.html*, type "tenant/me:secret" into the text area, then click **Encode** in the row "Base 64". The resulting text is "dGVuYW50L21lOnNlY3JldA==". 
1. Use "Basic dGVuYW50L21lOnNlY3JldA==" as value for credentials. 
1. Additionally set the deviceId variable with the ID your registered device, same as `c_device_source` in the *CONFIG.INI* file mentioned above.
1. Save your changes and upload this file to your tenant via the **Own Applications** page of the Administration application in Cumulocity. 

See [Administration > Managing applications > Own applications](/guides/users-guide/administration#uploading-cep-rules) in the User guide for details on uploading Apama monitor files.

	RecognizeActivities.mon
	using com.apama.cumulocity.Alarm;
	using com.apama.cumulocity.Measurement;
	using com.apama.cumulocity.FindAlarm;
	using com.apama.cumulocity.FindAlarmResponse;
	using com.apama.cumulocity.FindAlarmResponseAck;
	using com.apama.cumulocity.FindManagedObjectResponse;
	using com.apama.cumulocity.FindManagedObjectResponseAck;
	using com.apama.cumulocity.FindManagedObject;
	using com.softwareag.connectivity.httpclient.HttpTransport;
	using com.softwareag.connectivity.httpclient.Request;
	using com.softwareag.connectivity.httpclient.Response;
	using com.apama.json.JSONPlugin;
	  
	monitor RecognizeActivities {
	      
	    // Please replace with your own tenant and basic auth credentials for that tenant
	    string tenant := "tenantName.cumulocity.com";
	    string credentials := "myBasicAuthCredentials";
	      
	    // Replace this value with your device id.
	    string deviceId := "";
	          
	    // Model to be used for recognizing activities
	    string modelName := "ActivitiesDTreeJump";
	      
	    //counter to exclude first five readings
	    integer counter := 0;
	     
	    // counter to include first five detections for the same activity
	    integer similarActivityCount := 0;
	     
	    // threshold value for any activity to be predicted consecutively
	    integer thresholdValueForDeterminingActivity := 5;
	     
	    //initializing activity tracker flags to 'idle state'
	    string lastActivity := "idle state";
	    string referenceActivity := "idle state";
	     
	     
	    constant string ALARM_TYPE := "ActivityRecognitionAlarm";
	     
	    action onload() {
	           listenAndActOnMeasurements();
	    }
	   
	    action listenAndActOnMeasurements() {
	        monitor.subscribe(Measurement.CHANNEL);
	        monitor.subscribe(FindAlarmResponse.CHANNEL);
	         
	        on all Measurement(source = deviceId) as m {       
	                          
	            if(m.measurements.hasKey("c8y_Acceleration")){
	                log "Received Measurement from C8Y - "+ m.measurements.toString();
	                //Gather the data
	                string record := JSONPlugin.toJSON(gatherData(m));
	                log "Sending record to zementis.";
	                sendRequestToZementisMicroservice(record);
	            }
	 
	            log "EPL execution completed.";
	        }
	    }
	      
	    action gatherData(Measurement m) returns any {
	        any json:= new dictionary<string,float>;
	        json.setField("accelerationX", m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationX").value);
	        json.setField("accelerationY", m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationY").value);
	        json.setField("accelerationZ", m.measurements.getOrDefault("c8y_Acceleration").getOrDefault("accelerationZ").value);
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
	                   alarmMessage, "ACTIVE", "CRITICAL", 1, new dictionary<string,any>) to Alarm.CHANNEL;
	        log "Alarm added as - "+alarmMessage;
	    }
	     
	    action clearOldAlarmAndSendNewAlarm(string alarmMessage) {
	            integer reqId:= integer.getUnique();
	            send FindAlarm(reqId, {"source": deviceId, "status": "ACTIVE", "type": ALARM_TYPE}) to FindAlarm.CHANNEL;
	            //only if old alarm is found, clear it
	            on FindAlarmResponse(reqId=reqId) as alarmResponse and not FindAlarmResponseAck(reqId=reqId) {
	                send Alarm(alarmResponse.id, ALARM_TYPE, deviceId, currentTime, alarmResponse.alarm.text,
	                            "CLEARED", alarmResponse.alarm.severity, 1, new dictionary<string, any>) to Alarm.CHANNEL;
	                log "Old Alarm cleared: " + alarmResponse.alarm.text;
	            }
	            reqId:= integer.getUnique();
	            // now create a new alarm
	            send FindAlarm(reqId, {"source": deviceId, "status": "ACTIVE", "type": ALARM_TYPE}) to FindAlarm.CHANNEL;
	            on FindAlarmResponseAck(reqId=reqId){
	                //Now create new alarm
	                createNewAlarm(alarmMessage);
	            }
	    }
	}


#### Classify activities

Now that you have all the pieces together, you can try to recognize change in activity patterns with your phone. You could sit down, start jumping or running along with your mobile phone.

You should be able to see alarms being generated from your device which will be visible under the dashboard of your device in the Device Management application.

### <a name="demo-device"></a>Activity recognition using a demo device

A fully functional demo can be prepared with the help of a demo device. For this, use the artefacts provided as part of the *ActivityRecognitionDemo.zip* file.

#### Register a demo device in Cumulocity

Instead of registering a real phone for anomaly detection use case, a demo device can be registered. This device can be used as a replica of an actual mobile phone.

We have added a script *DemoDeviceCreator.sh* which registers a demo device in Cumulocity. Run the script using the following command:

	sh DemoDeviceCreator.sh

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

1. Upload the attached model *ActivitiesDTreeJump.pmml* to Cumulocity. To upload the model to Cumulocity, follow the steps described in [Predictive Analytics application > Managing models](/guides/predictive-analytics/web-app/#managing-models).

2. Download the *RecognizeActivities.mon* file, open it in a text editor and replace the variables tenant and credentials with the appropriate values. For setting the credentials, use the following example:

	Assume your tenant name is "tenant", your username is "me" and your password is "secret". 

	* Go to *http://ostermiller.org/calc/encode.html*, type "tenant/me:secret" into the text area, then click **Encode** in the row "Base 64". The resulting text is "dGVuYW50L21lOnNlY3JldA==". 
	* Use "Basic dGVuYW50L21lOnNlY3JldA==" as value for credentials. 
	* Additionally set the deviceId variable with the ID your registered device, same as `c_device_source` in the *CONFIG.INI* file mentioned above.


3. Save your changes and upload this file to your tenant via the **Own Applications** page of the Administration application in Cumulocity. See [Administration > Managing applications > Own applications](/guides/users-guide/administration#uploading-cep-rules) in the User guide for details on uploading Apama monitor files.


#### Classify activities

A script *ActivitySimulatorForDemoDevice.sh* has been attached which simulates sending of readings corresponding to different activities to Cumulocity from our demo device. This script can be used to depict the recognition of various activities.

All you need to do is run it as `sh ActivitySimulatorForDemoDevice.sh`.

	ActivitySimulatorForDemoDevice.sh
	c_url=$(awk -F "=" '/c_url/ {print $2}' ./CONFIG.INI)
	c_user=$(awk -F "=" '/c_user/ {print $2}' ./CONFIG.INI)
	c_pass=$(awk -F "=" '/c_pass/ {print $2}' ./CONFIG.INI)
	c_device_source=$(awk -F "=" '/c_device_source/ {print $2}' ./CONFIG.INI)
	CURRENT_TIME=$(date --iso-8601=seconds)
	echo
	echo "##################################################"
	echo "# Preparing simulations for Activity Recognition #"
	echo "##################################################"
	echo
	curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementCollection+json" -H "Content-Type: application/json" \
	--data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.889587402},"accelerationX":{"unit":"G","value":0.066757202},"accelerationZ":{"unit":"G","value":-0.427780151}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.889602661},"accelerationX":{"unit":"G","value":0.068435669},"accelerationZ":{"unit":"G","value":-0.428604126}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.896789551},"accelerationX":{"unit":"G","value":0.06918335},"accelerationZ":{"unit":"G","value":-0.415237427}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.888275146},"accelerationX":{"unit":"G","value":0.076705933},"accelerationZ":{"unit":"G","value":-0.435089111}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.90007019},"accelerationX":{"unit":"G","value":0.076675415},"accelerationZ":{"unit":"G","value":-0.426757813}}}]}'
	echo
	echo "##########################################"
	echo "#     Simulating user to be SITTING      #"
	echo "##########################################"
	echo
	curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementCollection+json" -H "Content-Type: application/json" \
	--data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.925170898},"accelerationX":{"unit":"G","value":-0.047470093},"accelerationZ":{"unit":"G","value":-0.378372192}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.747741699},"accelerationX":{"unit":"G","value":-0.02456665},"accelerationZ":{"unit":"G","value":-0.595901489}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.886535645},"accelerationX":{"unit":"G","value":0.087524414},"accelerationZ":{"unit":"G","value":-0.456680298}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.786361694},"accelerationX":{"unit":"G","value":0.002182007},"accelerationZ":{"unit":"G","value":-0.664413452}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.78742981},"accelerationX":{"unit":"G","value":-0.112869263},"accelerationZ":{"unit":"G","value":-0.649856567}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.925170898},"accelerationX":{"unit":"G","value":-0.047470093},"accelerationZ":{"unit":"G","value":-0.378372192}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.747741699},"accelerationX":{"unit":"G","value":-0.02456665},"accelerationZ":{"unit":"G","value":-0.595901489}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.886535645},"accelerationX":{"unit":"G","value":0.087524414},"accelerationZ":{"unit":"G","value":-0.456680298}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.786361694},"accelerationX":{"unit":"G","value":0.002182007},"accelerationZ":{"unit":"G","value":-0.664413452}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.78742981},"accelerationX":{"unit":"G","value":-0.112869263},"accelerationZ":{"unit":"G","value":-0.649856567}}}]}'
	echo
	echo "##########################################"
	echo "#     Simulating user to be JUMPING      #"
	echo "##########################################"
	echo
	curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementCollection+json" -H "Content-Type: application/json" \
	--data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-2.854751587},"accelerationX":{"unit":"G","value":0.168869019},"accelerationZ":{"unit":"G","value":-2.098526001}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.172515869},"accelerationX":{"unit":"G","value":-0.126083374},"accelerationZ":{"unit":"G","value":-0.414993286}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-1.876571655},"accelerationX":{"unit":"G","value":0.395050049},"accelerationZ":{"unit":"G","value":-1.201461792}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.185501099},"accelerationX":{"unit":"G","value":0.027557373},"accelerationZ":{"unit":"G","value":-0.057159424}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.189147949},"accelerationX":{"unit":"G","value":-0.138885498},"accelerationZ":{"unit":"G","value":-0.07699585}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-2.854751587},"accelerationX":{"unit":"G","value":0.168869019},"accelerationZ":{"unit":"G","value":-2.098526001}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.172515869},"accelerationX":{"unit":"G","value":-0.126083374},"accelerationZ":{"unit":"G","value":-0.414993286}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-1.876571655},"accelerationX":{"unit":"G","value":0.395050049},"accelerationZ":{"unit":"G","value":-1.201461792}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.185501099},"accelerationX":{"unit":"G","value":0.027557373},"accelerationZ":{"unit":"G","value":-0.057159424}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.189147949},"accelerationX":{"unit":"G","value":-0.138885498},"accelerationZ":{"unit":"G","value":-0.07699585}}}]}'
	echo
	echo "##########################################"
	echo "#     Simulating user to be RUNNING      #"
	echo "##########################################"
	echo
	curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementCollection+json" -H "Content-Type: application/json" \
	--data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.775375366},"accelerationX":{"unit":"G","value":0.612564087},"accelerationZ":{"unit":"G","value":-1.166870117}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.624053955},"accelerationX":{"unit":"G","value":0.374237061},"accelerationZ":{"unit":"G","value":-1.081665039}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.426635742},"accelerationX":{"unit":"G","value":0.213226318},"accelerationZ":{"unit":"G","value":-0.556045532}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.121704102},"accelerationX":{"unit":"G","value":-0.24861145},"accelerationZ":{"unit":"G","value":-0.651138306}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.877685547},"accelerationX":{"unit":"G","value":-0.338851929},"accelerationZ":{"unit":"G","value":-0.83241272}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.775375366},"accelerationX":{"unit":"G","value":0.612564087},"accelerationZ":{"unit":"G","value":-1.166870117}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.624053955},"accelerationX":{"unit":"G","value":0.374237061},"accelerationZ":{"unit":"G","value":-1.081665039}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.426635742},"accelerationX":{"unit":"G","value":0.213226318},"accelerationZ":{"unit":"G","value":-0.556045532}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.121704102},"accelerationX":{"unit":"G","value":-0.24861145},"accelerationZ":{"unit":"G","value":-0.651138306}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.426635742},"accelerationX":{"unit":"G","value":0.213226318},"accelerationZ":{"unit":"G","value":-0.556045532}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.121704102},"accelerationX":{"unit":"G","value":-0.24861145},"accelerationZ":{"unit":"G","value":-0.651138306}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.426635742},"accelerationX":{"unit":"G","value":0.213226318},"accelerationZ":{"unit":"G","value":-0.556045532}}}]}'
	echo
	echo "##########################################"
	echo "#     Simulating user to be JUMPING      #"
	echo "##########################################"
	echo
	curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementCollection+json" -H "Content-Type: application/json" \
	--data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-2.854751587},"accelerationX":{"unit":"G","value":0.168869019},"accelerationZ":{"unit":"G","value":-2.098526001}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.172515869},"accelerationX":{"unit":"G","value":-0.126083374},"accelerationZ":{"unit":"G","value":-0.414993286}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-1.876571655},"accelerationX":{"unit":"G","value":0.395050049},"accelerationZ":{"unit":"G","value":-1.201461792}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.185501099},"accelerationX":{"unit":"G","value":0.027557373},"accelerationZ":{"unit":"G","value":-0.057159424}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.189147949},"accelerationX":{"unit":"G","value":-0.138885498},"accelerationZ":{"unit":"G","value":-0.07699585}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-2.854751587},"accelerationX":{"unit":"G","value":0.168869019},"accelerationZ":{"unit":"G","value":-2.098526001}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.172515869},"accelerationX":{"unit":"G","value":-0.126083374},"accelerationZ":{"unit":"G","value":-0.414993286}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-1.876571655},"accelerationX":{"unit":"G","value":0.395050049},"accelerationZ":{"unit":"G","value":-1.201461792}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":0.185501099},"accelerationX":{"unit":"G","value":0.027557373},"accelerationZ":{"unit":"G","value":-0.057159424}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.189147949},"accelerationX":{"unit":"G","value":-0.138885498},"accelerationZ":{"unit":"G","value":-0.07699585}}}]}'
	echo
	echo "##########################################"
	echo "#     Simulating user to be SITTING      #"
	echo "##########################################"
	echo
	curl --user $c_user:$c_pass -X POST $c_url"/measurement/measurements" -H "accept: application/vnd.com.nsn.cumulocity.measurementCollection+json" -H "Content-Type: application/json" \
	--data '{"measurements":[{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.925170898},"accelerationX":{"unit":"G","value":-0.047470093},"accelerationZ":{"unit":"G","value":-0.378372192}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.747741699},"accelerationX":{"unit":"G","value":-0.02456665},"accelerationZ":{"unit":"G","value":-0.595901489}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.886535645},"accelerationX":{"unit":"G","value":0.087524414},"accelerationZ":{"unit":"G","value":-0.456680298}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.786361694},"accelerationX":{"unit":"G","value":0.002182007},"accelerationZ":{"unit":"G","value":-0.664413452}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.78742981},"accelerationX":{"unit":"G","value":-0.112869263},"accelerationZ":{"unit":"G","value":-0.649856567}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.925170898},"accelerationX":{"unit":"G","value":-0.047470093},"accelerationZ":{"unit":"G","value":-0.378372192}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.747741699},"accelerationX":{"unit":"G","value":-0.02456665},"accelerationZ":{"unit":"G","value":-0.595901489}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.886535645},"accelerationX":{"unit":"G","value":0.087524414},"accelerationZ":{"unit":"G","value":-0.456680298}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.786361694},"accelerationX":{"unit":"G","value":0.002182007},"accelerationZ":{"unit":"G","value":-0.664413452}}},{"time":"'$CURRENT_TIME'","source":{"id":"'$c_device_source'"},"type":"c8y_Acceleration","c8y_Acceleration":{"accelerationY":{"unit":"G","value":-0.78742981},"accelerationX":{"unit":"G","value":-0.112869263},"accelerationZ":{"unit":"G","value":-0.649856567}}}]}'
	echo
	echo "##########################################"
	echo "#      Stopping all simulations now      #"
	echo "##########################################"

This should now start sending measurements to Cumulocity on behalf of your demo device. It would try to simulate transition of activities in the order  sit → jump → run → jump → sit.

You should notice your device generating activity recognition alarms for every transition of activity. Click **Show Cleared Alarms** in the top bar to see the history of all the alarms.



