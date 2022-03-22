---
title: Managing resources
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/web-app/#managing-resources
---

In the **Resources** page you manage the resources, that is, the custom functions and look-up tables for PMML models or the python pre-processing/post-processing scripts for creating ONNX pipelines.

Resource management functionality includes:

* Uploading resources
* Downloading resources
* Deleting resources

Click **Resources** in the navigator, to open the **Resources** page.

![Resources](/images/zementis/zementis-resources.png)


### Uploading resources

To upload a new resource, first click on the tab (PMML or ONNX) depending on whether the resource is for a PMML model or an ONNX pipeline, then click **Add resource**, navigate to the desired resource file and then click **Open**.

Once your resource is successfully uploaded, you will see a corresponding confirmation message. The new resource will be added to the resources list.


### Downloading resources

To download the source file of a resource, click the download icon in its card.

Typically the source will either be a JAR file or an Excel sheet for PMML resource and python file for ONNX resource.

### Deleting resources

To delete a resource, click the delete icon on its card and confirm the deletion.  

Once a resource is deleted, it will be removed permanently from your resources list.
