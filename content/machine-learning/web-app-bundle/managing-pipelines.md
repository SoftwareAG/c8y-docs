---
title: Managing pipelines
layout: redirect
weight: 45

aliases:
  - /predictive-analytics/web-app/#managing-pipelines
---

The **Pipelines** page allows you to manage your ONNX pipelines. 

A pipeline is a comprehensive orchestration of an end to end workflow that embeds within itself any pre-processing or post-processing steps that needs to be performed in addition to invoking a machine learning model. While creating a pipeline, the inclusion of a pre-processing or post-processing step is completely optional. Whereas, it is mandatory that the pipeline has the target machine learning model in it. In order to perform pre-processing or post-processing, you need to first upload your pre-processing/post-processing resources via the **Resources** page. These pre-processing/post-processing resources are typically python scripts which adhere to a particular criteria.

Any pipeline's end to end workflow can be depicted as: Input Data > pre-processing > ONNX Model > post-processing > Output Data.

When a pre-processing step is part of a pipeline, the input data is first processed by the pre-processing script. The preprocessed data is then passed on to the model and finally the outputs from the model are processed by the post-processing script.

>**Info**: 
<br>1. The pre-processing/post-processing scripts should contain a python function named **process** which takes in just one argument. The processing logic should be contained in this function. Any inputs to these scripts can be accessed using the argument of the **process** function.
<br>2. The **process** function of any pre-processing script should return a *Dictionary* with the keys same as the inputs of the model and its corresponding values containing the preprocessed data. 
<br>3. The outputs of the ONNX model would always be the input to any post-processing script.
<br>4. The **process** function of any post-processing script may or may not return anything depending on the use case.

Pipeline management functionality includes:

* Adding pipelines
* Deleting pipelines
* Viewing pipeline properties

Click **Pipelines** in the navigator, to open the **Pipelines** page. 

![Pipelines](/images/zementis/zementis-pipelines.PNG)


### Adding pipelines

To add a new pipeline, perform the following steps:

1. Click **ADD PIPELINE** in the **Pipelines** page. 
2. In the **ADD PIPELINE** wizard, enter the name of the pipeline you want to create followed by choosing your ONNX model.<br>
![Add pipeline](/images/zementis/zementis-add-pipeline.png)
3. Select the pre-processing and post-processing resources if you have any or leave them empty.<br>
Click **Apply** to add the new pipeline.

Once your pipeline is created successfully, you will see a corresponding confirmation message. The new pipeline will be added to the list of pipelines.

### Deleting pipelines

To delete a pipeline, click the delete icon on its card and confirm the deletion.  

Once a pipeline is deleted, it will be removed permanently from your list of pipelines. 

### Viewing pipeline properties

To view the properties of a pipeline, click the info icon <img src="/images/zementis/zementis-info-icon.png" alt="Info" style="display:inline-block; margin:0"> on its card. 

![Pipeline properties](/images/zementis/zementis-pipeline-details.png)
Properties include the name of the pipeline with the name of the ONNX model and pre-processing/post-processing resources which are part of this pipeline.