---
order: 80
title: SmartREST templates
layout: redirect
---

### Introduction

SmartREST templates are a collection of request and response templates used to convert CSV data and Cumulocity Rest API calls. For example, you can use SmartREST templates to easily add devices to the platform instead of manually writing the requests each time.

To ease the device integration, Cumulocity supports static templates that can be used without the need for creating your own templates. These templates focus only on the most commonly used messages for device management. For further information on static templates, refer to the [MQTT Developer´s Guide](/guides/mqtt/static-templates/).

Open the SmartREST template list from the "Device Types" menu in the navigator. 

![template view](/guides/images/users-guide/templateview.png)

For each template, the following information is provided:

* Template name, e.g. Camel
* Template ID, e.g. 99
* Number of send messages
* Number of responses

There are two ways to add a SmartRest template:

- Import an already existing template.
- Create a new template.

### How to import an existing SmartREST template

1. Click **Import** at the right of the top menu bar.
2. In the upcoming window, choose a file to upload by browsing for it.
3. Enter a template name and a unique template ID (both mandatory fields). 
4. Click **Import** to import the template.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_TemplateImport.png" alt="Import template" style="max-width: 50%">

### How to create a new SmartREST template

1. Click **New** at the right of the top menu bar.
2. In the upcoming window, enter a template name and a unique template ID (both mandatory fields). 
4. Click **Continue** to proceed adding messages or responses.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_TemplateCreate.png" alt="Create template" style="max-width: 50%">

### How to add a message

The message template contains all necessary information to convert the SmartRest request into a corresponding Rest API call which is then sent to the platform.

To add a new message, navigate to the "Messages" tab in your desired SmartREST template and click **Add message**. Complete the following fields:

|Field|Description|
|:---|:---|
|Message ID|Unique integer that will be used as a message identifier. It must be unique among all message and response templates.
|Name|Name for the message. Mandatory.
|Target REST API|REST API for the target. Dropdown list. May be one of Measurement, Inventory, Alarm, Event, Operation.
|Method|Request method. May be one of POST, PUT, GET, depending on the selected Target REST API.
|Include Responses|Click this checkbox if you want to process the results of the request with response templates.
|REST API built-in fields|These fields are optional and vary depending on the target REST API selected. In case no value is provided, a device will be able to set it when sending an actual message.
|REST API custom fields|Additional fields can be added by clicking **Add field**. Enter the API key and select the desired data type.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_TemplateMessage.png" alt="Message" style="max-width: 100%">

In the Preview you can see the preview of your request message.

Click **Save** to save your settings.

To delete a message, open it and click **Remove** at the bottom.

### How to add a response

A response template contains the necessary information to extract data values from a platform REST API call response, which is then sent back to the client in a CSV data format.

To add a new response, navigate to the "Response" tab in your desired SmartREST template and click **Add response**. Complete the following fields:

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_TemplateResponse.png" alt="Response" style="max-width: 100%">

|Field|Description|
|:---|:---|
|Response ID|Unique integer that will be used as a response identifier. 
|Name|Name for the response. Mandatory.
|Base Pattern|Base pattern for the response.
|Condition|Condition value of the response.
|Pattern|At least one pattern is required. Click **Add pattern** and enter a pattern value.

Click **Save** to save your settings.

To delete a response, open it and click **Remove** at the bottom.

### How to edit or delete a SmartREST template

To edit a SmartREST template, either click the desired template or click the menu icon and in the context menu click **Edit**.

To delete a SmartREST template, click **Remove** in its context menu.

### How to export a SmartREST template

To export a SmartREST template, click the menu icon and in the menu click  **Export**. The template will automatically be downloaded.

To export a SmartREST template as CSV file follow these steps:

1. Open the template of your choice and select the "CSV Preview" tab. 
2. In the "CSV Preview" tab which provides additional information on messages and responses, click **Export CSV**. 
1. In the upcoming window, specify the preferred options for the field separator, decimal separator and character set.
1. Click **Download** to download the template as CSV file.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_TemplateExportCSV.png" alt="Export CSV" style="max-width: 50%">