---
order: 20
title: How does SmartREST work?
layout: redirect
---

The image below illustrates how SmartREST works. Devices and other clients connect to a dedicated SmartREST endpoint on Cumulocity and send their data in rows of comma-separated values. These rows are expanded by Cumulocity's SmartREST proxy into standard Cumulocity REST API requests. Similar, responses from Cumulocity are compressed by the proxy from their original JSON format into comma-separated values before sending them back to the device.

![SmartREST architecture](/guides/images/rest/smartrest.png)

How can Cumulocity interpret comma-separated values into meaningful REST requests? For that purpose, devices register templates with Cumulocity. The templates contain the expanded REST requests together with placeholders into which the Cumulocity SmartREST proxy consecutively inserts the comma-separate values. For responses, the templates describe which values to pick from the structured REST response to construct comma-separated values.

Templates are associated with software or firmware versions of a device. Usually, a particular implementation of a device or application can only issue a particular set of well-defined types of requests. All devices with the same implementation share the same set of request types. Hence, the templates can be defined at implementation time. To make the templates available to Cumulocity, the first device with a particular implementation will send its templates and makes them available for usage by all similar devices.

This process is illustrated below. Assume a device with an implementation version "Device_1.0" starts communicating through SmartREST. After retrieving its credentials, the device will ask the SmartREST proxy if its template is already known. If the template is not found on the server, the device will send its template in a single static text request to Cumulocity. Once this procedure has been carried out, all simmiar devices using that template can start communicating using SmartREST without re-sending the template to the server.

![SmartREST templates](/guides/images/rest/templates.png)

The example also roughly illustrates the translation process. In "Template 1", "%%" is a placeholder to be filled by the SmartREST proxy. "time" is filled with a server-side timestamp (see below). The remaining placeholders are filled with request data. The line "1,200,20.5" in the example request is interpreted as follows:

* The first column references the template to be used, in this case Template 1.
* "200" refers to the first free placeholder in the template, in this case the ID in the "source" element. (The ID of the device that sends the measurement.)
* "20.5" refers to the second free placeholder in the template, here the value of the temperature measurement.