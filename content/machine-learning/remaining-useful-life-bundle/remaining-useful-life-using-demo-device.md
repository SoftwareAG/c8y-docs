---
title: Remaining Useful Life Estimates using a demo device
layout: redirect
weight: 50

aliases:
  - /predictive-analytics/remaining-useful-life/#remaining-useful-life-using-demo-device
---

A fully functional Remaining Useful Life Estimate demo can be prepared with the help of a demo device.
For this, use the artifacts provided as part of the project *RemainingUsefulLifeDemoProject.zip* file.

#### Start with Machine Learning Workbench

Follow the steps described in [Machine Learning Workbench > Upload a project](/machine-learning/web-app-mlw/#upload-a-project) and upload the *RemainingUsefulLifeDemoProject.zip* project to MLW. This creates a new project named **RemainingUsefulLifeDemoProject_uuid**, with a number of resources. You will get .txt and .csv files in the **Data** folder and notebooks in the **Code** folder.

#### Train the PMML model

For this use case, we are building a Random Forest machine learning model to predict a remaining useful life (RUL) value for jet engines. 

The integrated Jupyter Notebook feature within {{< product-c8y-iot >}} Machine Learning Workbench helps in writing the code that creates the Random Forest model in PMML format using the training data *train_FD001.csv* contained in the **Data** folder. The script uses the scikit-learn framework ([https://scikit-learn.org](https://scikit-learn.org)) to train a Random Forest model.

Once your created the model, convert the scikit-learn object to PMML format using the Nyoka library [https://github.com/nyoka-pmml/nyoka](https://github.com/nyoka-pmml/nyoka).

The following steps illustrate the training of a machine learning model using the Jupyter Notebook:

1. Open the *TrainRULModel.ipynb* file in the **Code** folder of the project.

2. Follow the steps described in [Machine Learning Workbench > Jupyter Notebook > Editing and executing a notebook](/machine-learning/web-app-mlw/#editing-and-executing-a-notebook) and execute the existing code snippets in each cell of the *TrainRULModel.ipynb* to train an Random Forest PMML model. Make sure to uncomment the first two lines in the first cell to install *seaborn* and *matplotlib*, in case they are not already installed. See image of the notebook below.

3. After all steps are completed, click the refresh icon <img src="/images/zementis/mlw-refresh-icon.png" alt="Refresh" style="display:inline-block; margin:0"> at the top of **Tabs** to list the newly created *RUL_rf.pmml* with model name *RULRFRegressor* in the **Model** folder.


![Train Model using Jupyter Notebook](/images/zementis/RemainingUsefulLife/rul-jnb.png)

#### Model deployment and predictions

Once the model is available in the **Model** folder, it can be deployed to Machine Learning Engine for predictions.

Follow the steps described in [Machine Learning Workbench > Automated ML > Model deployment and predictions](/machine-learning/web-app-mlw/#model-deployment-and-predictions) and deploy the *RUL_rf.pmml* model to Machine Learning Engine. Predict *test_FD001.csv* data available in the **Data** folder, using the *RULRFRegressor* PMML model.


#### Register a demo device on the platform

Instead of registering an actual device for the remaining useful life estimate use case, a demo device can be registered. This device can be used as a replica of an actual device. To do so, follow the steps below:
We have added a script *RegisterDevice.ipynb* which registers a demo device in {{< product-c8y-iot >}}.

1. Open it and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0">.
2. Execute each cell one by one and you will have a registered device in {{< product-c8y-iot >}}. Upon successful execution, a device named "RemainingUsefulLifeDemo" is registered in {{< product-c8y-iot >}}.
3. Once registered, try to get the device ID by looking up your device on the **All Devices** page of your tenant's Device Management application (see image below). The device ID is already updated by the code and is saved in the *CONFIG.json* file.

<img src="/images/zementis/RemainingUsefulLife/remaining-useful-life_get_device_id.PNG" alt="Download" style="display:inline-block; margin:0"> <br>

#### Register a second demo device to receive the predictions

Use the script *RegisterDeviceForPrediction.ipynb* to register the second demo device named "RULPredictionDevice". This device is used to receive the predictions. Follow the steps as described for the first demo device.

#### Simulate measurements for the demo device

Use *SimulateData.ipynb* for simulating the measurements for the demo device.

1. Open it and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0">.
2. Execute each cell one by one. Upon successful execution, `predicted_RUL values` are sent to {{< product-c8y-iot >}} on behalf of the demo device every 60 seconds. 

#### Schedule scoring the simulated data

Use the Python script *SchedulePrediction.py* to score the simulated data and send the predictions to the second demo device "RULPredictionDevice". In order to execute the script on a schedule, follow the steps described in [Machine Learning Workbench > Task Scheduler](/machine-learning/web-app-mlw/#scheduler). As part of this demo we configured the schedule as shown in the below screenshot.

<img src="/images/zementis/RemainingUsefulLife/rul-schedule-task.png" alt="Download" style="display:inline-block; margin:0"> <br>

#### Create Widgets

For this demo we created a number of widgets to show the {{< product-c8y-iot >}} display capabilities:
* A KPI Widget displaying the last measurement value of a device.
* A data points list, which is a table display of a collection of data points.
* A data points graph displaying a collection of data points.


See screenshot below and follow the description in [Cockpit](/users-guide/cockpit) in the *User guide*.

<img src="/images/zementis/RemainingUsefulLife/rul-widgets.png" alt="Download" style="display:inline-block; margin:0"> <br>

