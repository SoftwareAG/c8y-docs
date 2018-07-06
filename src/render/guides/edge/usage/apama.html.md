---
order: 30
title: Realtime analytics using Apama
layout: redirect
---

### Introduction

You can add your own real-time analytics to Cumulocity Edge using the Apama Event Processing Language. 

Apama is a complete CEP platform. It contains a complex event processing engine and a comprehensive set of tools to develop, integrate, and deploy event-driven applications.

With Apama you can

* monitor rapidly moving channels of events from multiple sources
* detect and analyze events and event patterns of interest
* respond to them in real time 

For further information refer to the [Apama guide](/guides/apama) or see the topic Developing Apama Applications in EPL in the [Apama documentation](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/) for full details. 


### Uploading a custom Apama CEP rule

1. First create a custom Apama mon file, as shown in our example for measurements.
<img src="/guides/images/edge/edge-apama-mon-file.png" name="mon file" style="width:100%;"/> 

2. In the Administration application, open the “Own Applications” page from the navigator. Click “**Add application** and in the upcoming window click **Upload custom Apama rule**. <br>
<img src="/guides/images/edge/edge-apama-upload-file.png" name="Upload file" style="width:50%;"/> 
>**Info**: To be able to do so, ensure that the “Apama-small” microservice is subscribed to your tenant.

3. Upload the Apama monitor file (.mon) previously created. After successful upload your rule will be deployed as a custom Apama application.

4. In the “Own Applications” page, you can now open your custom Apama application with type “Apama CEP rule”. <br>
<img src="/guides/images/edge/edge-apama-own-application.png" name="Apama application" style="width:50%;"/> 

### Monitoring alarms and events

In the Cockpit application, select the device sending measurements in the "Groups" menu in the navigator and switch to its “Alarms” tab (since the custom rule written was such that it creates alarms).

<img src="/guides/images/edge/edge-apama-alarms.png" name="Alarms" style="width:50%;"/> 

In the Device Management application, click “All devices” in the navigator. Select the device from the device list and switch to the “Events” tab, to see the events sent by Apama as per the custom CEP rule. 

<img src="/guides/images/edge/edge-apama-events.png" name="Events" style="width:100%;"/> 

### Validating deployment

To validate the Apama deployment of custom rules, source the “apama_env” file in the bin directory of the Apama installation (/opt/softwareag/Apama/bin/apama_env).

<img src="/guides/images/edge/edge-apama-validate1.png" name="Validate" style="width:100%;"/> 

Execute the “engine_inspect –m” command to verify that the apama monitor is injected and running successfully in the apama correlator (look at the last monitor).

<img src="/guides/images/edge/edge-apama-validate2.png" name="Validate" style="width:50%;"/>  

Execute the “engine_receive –c <channel>” command to specify the channel on which to listen for events from the correlator.

<img src="/guides/images/edge/edge-apama-validate3.png" name="Validate" style="width:100%;"/> 

