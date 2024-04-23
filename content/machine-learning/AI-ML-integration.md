---
title: AI/ML integration
layout: bundle
section:
  - data_analytics
weight: 20
---

The image below illustrates a high-level architecture perspective, starting with providing the data via {{< product-c8y-iot >}} DataHub, training the model, making it available for various deployment scenarios (identified as A/B/C later on) to integrate in a workflow with {{< product-c8y-iot >}} Streaming Analytics.

![High level architecture](/images/machine-learning-guide/high-level-architecture.png)

The steps below guide you in realizing an end-to-end Machine Learning solution leveraging the {{< product-c8y-iot >}} platform and integrated Data Science & Machine Learning (DSML) components/tooling/platforms, which could be open source components such as TensorFlow and/or tooling from some of our leading AI/ML partners such as Microsoft Azure, AWS (Amazon Web Services), IBM or Boon Logic.


### Step 0 - Make the IoT data available for modeling {#step-0-make-the-iot-data-available-for-modeling}

All AI/ML use cases start with (next to defining the objective of the use case) defining the data requirements and compiling a set of historical IoT data for training purposes. The IoT data, which is ingested from the connected devices, machines & equipment is retained in the Operational Store of {{< product-c8y-iot >}} for a limited amount of time. To support long-term (and cost-efficient) storage, as well as easy data extraction, offloading and/or querying for the purpose of developing Machine Learning models, the DataHub add-on product is suggested.

See the [DataHub documentation](/datahub/) for more information.


### Step 1 - Create and bring your own AI/ML model (BYOM) {#step-1-create-and-bring-your-own-aiml-model}

There is a wide variety of open-source libraries (such as, Tensorflow®, PyTorch, Keras, Scikit-learn) and commercial 3rd party tooling (such as, Microsoft Azure Machine Learning Studio, Amazon SageMaker, IBM Watson, MATLAB, Google Cloud) available for developing ML models. Therefore, {{< product-c8y-iot >}} offers you the flexibility to have your data science team remain working in their own optimized technology stack but still leverage their results in the field.

Some examples of model creation in the mentioned tools that can inspire you:

* [Prediction of Remaining Userful Life with Tensorflow](https://medium.com/@polanitzer/prediction-of-remaining-useful-life-of-an-engine-based-on-sensors-building-a-random-forest-in-ffad82c8a1c6)
* [Anomaly Detection with AWS SageMaker](https://catalog.us-east-1.prod.workshops.aws/workshops/c5661636-bfc3-4771-be38-a4072661bfda/en-US/anomaly-detection-forecasting/sagemaker/sagemaker-anomalies)
* [Image classification with Azure ML Studio](https://learn.microsoft.com/en-us/azure/machine-learning/tutorial-train-deploy-image-classification-model-vscode?view=azureml-api-2)
* [Remaining Userful Life Estimation with MATLAB](https://www.mathworks.com/help/predmaint/ug/remaining-useful-life-estimation-using-convolutional-neural-network.html)

If you do not have access to tooling/expertise in-house for the BYOM and/or are looking for a very specific AI/ML use-case such as predictive maintenance, there are more out-of-the-box solutions that we can recommend. For example, we have partnered with BoonLogic who provide machine-learning-based anomaly detection capabilities with their Amber product. This product can be embedded as a custom microservice within {{< product-c8y-iot >}} (that is, scenario B) and can be integrated using Streaming Analytics. To facilitate the integration even further, a plugin has been created consisting of an integration microservice to manage the communication between {{< product-c8y-iot >}} and BoonLogic Amber plus a set of front-end widgets to perform the configuration and visualize the output of the anomaly detection. More information can be found on https://github.com/SoftwareAG/Cumulocity-Amber-Boon-Logic/.

{{< c8y-admon-info >}}
The next step is about deploying the created model for inferencing or model scoring. When deploying outside of the training environment, it is important to consider the portability of your model to a different platform. To overcome potential issues, a community of partners has created the Open Neural Network Exchange (ONNX) standard for representing machine learning models, allowing models from many frameworks (including the ones mentioned earlier) to be exported or converted into the standard ONNX format. Once your model is in the ONNX format, they are able to run on a variety of platforms and devices.    
{{< /c8y-admon-info >}}

### Step 2 - Deploy your AI/ML model {#step-2-deploy-your-aiml-model}

In general, there are three possible scenarios for deploying your AI/ML model, depending on the requirements of your use-case:

* External hosting
* Embedded hosting using a custom inference microservice
* Embedded hosting using a generic inference environment

#### Scenario A: External hosting {#scenario-a-external-hosting}

In this scenario, you leverage the AI/ML execution environment of a third party, which is typically closely related to the third party used to create and train the AI/ML model in [Step 1](#step-1-create-and-bring-your-own-aiml-model). The execution environment of the third party exposes an endpoint, which can be used for sending input readings and returning the model scoring output. Using externally hosted AI/ML models offers advantages such as scalability, reduced infrastructure management, and access to cutting-edge AI/ML capabilities. Allowing you to focus on your core functionality and leverage state-of-the-art Machine Learning without the burden of maintaining infrastructure.

From an architectural perspective, scenario A looks like this:

![Scenario A architecture](/images/machine-learning-guide/scenario-a-architecture.png)

{{< c8y-admon-info >}}
The following article in the {{< sag-dev-community >}} illustrates this scenario in more detail: [Leveraging Hyperscaler Clouds for Machine Learning Inferencing on {{< product-c8y-iot >}} Data]({{< link-sag-tech-forum >}}/t/leveraging-hyperscaler-clouds-for-machine-learning-inferencing-on-cumulocity-iot-data/292498).
{{< /c8y-admon-info >}}


#### Scenario B: Embedded hosting using a custom microservice {#scenario-b-embedded-hosting-using-custom-microservice}

In this scenario, you create and deploy a custom {{< product-c8y-iot >}} microservice which includes:

*	An "extract" of the AI/ML model created and trained in [Step 1](#step-1-create-and-bring-your-own-aiml-model).
*	The relevant libraries for inferencing.
*	A POST request endpoint for sending input readings and returning the model scoring output. This approach provides greater control over model customization, data privacy by ensuring sensitive data remains within the platform’s environment, and offers lower latency as data processing occurs within the platform’s environment. Thus, reducing the need for external data transfers and potential network-related delays.

From an architectural perspective, scenario B looks like this:

![Scenario B architecture](/images/machine-learning-guide/scenario-b-architecture.png)

{{< c8y-admon-info >}}
The following article in the {{< sag-dev-community >}} illustrates this scenario in more detail: [Performing Machine Learning Inference on {{< product-c8y-iot >}} Data using Open-Source Frameworks]({{< link-sag-tech-forum >}}/t/performing-machine-learning-inference-on-cumulocity-iot-data-using-open-source-frameworks/277988).
{{< /c8y-admon-info >}}


#### Scenario C: Embedded hosting using a generic microservice {#scenario-b-embedded-hosting-using-generic-microservice}

In this scenario, you create and deploy a {{< product-c8y-iot >}} microservice which has been purposely built to work generically with specific types of model "extracts" that are hosted alongside the microservice, such as, within the {{< product-c8y-iot >}} file repository. Like [scenario B](#scenario-b-embedded-hosting-using-custom-microservice), this microservice includes a POST request endpoint for sending input readings, this time complemented with the reference to the model of choice, and returning the model scoring output.

From an architectural perspective, scenario C looks like this:

![Scenario C architecture](/images/machine-learning-guide/scenario-c-architecture.png)

{{< c8y-admon-info >}}
A {{< sag-dev-community >}} article to illustrate this scenario is currently under construction.
{{< /c8y-admon-info >}}


### Step 3 - Set up a model inferencing workflow {#step-3-setup-a-model-inferencing-workflow}

Once the AI/ML model is deployed, you need to set up a workflow to:

* Process the incoming data.
* Pass it to the deployed AI/ML model.
* Receive the model output.
* Process the model output to make decisions/create events, alarms, and so on.

To orchestrate the model execution, this workflow can be set up by leveraging the Streaming Analytics tooling, either Analytics Builder or EPL apps. More information on the specific tooling can be found in [Streaming Analytics](/streaming-analytics/introduction-analytics/).

{{< c8y-admon-info >}}
In the {{< sag-dev-community >}} article for [scenario B](#scenario-b-embedded-hosting-using-custom-microservice), a detailed description on how to create this can be found: [How to create an ML Inference workflow using Streaming Analytics]({{< link-sag-tech-forum >}}/t/performing-machine-learning-inference-on-cumulocity-iot-data-using-open-source-frameworks/277988#how-to-create-an-ml-inference-workflow-using-streaming-analytics-13).
{{< /c8y-admon-info >}}
