---
order: 40
title: Realtime analytics using Apama
layout: redirect
---

### Introduction

You can add your own real-time analytics to Cumulocity IoT Edge using the Apama Event Processing Language (EPL).

Apama is a streaming analytics platform. It contains a complex event processing engine and a comprehensive set of tools to develop, integrate, and deploy event-driven applications.

With Apama you can

* monitor rapidly moving channels of events from multiple sources
* detect and analyze events and event patterns of interest
* respond to them in real time

For further information refer to the [Analytics guide](/guides/apama) or see the topic Developing Apama Applications in EPL in the [Apama documentation](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3/apama10-3/apama-webhelp/) for full details.

### Uploading a custom Apama CEP rule

In Cumulocity, users can build their own custom rules based on their business needs. These custom rules can be uploaded to Cumulocity and are then injected as an EPL application in Apama.

The following example shows how to upload a custom monitor file (which has the extension .mon) to Cumulocity.

1. First create a custom monitor file, as shown in our example for measurements. This sample custom rule creates an alarm for every measurement of type “c8y_SpeedMeasurement” where the “speed” value exceeds 600.

		using com.apama.cumulocity.Measurement;
		using com.apama.cumulocity.Alarm;

		monitor SampleMonitor {
			action onload {
				monitor.subscribe(Measurement.CHANNEL);
				on all Measurement() as m {
					if m.measurements.getOrDefault("c8y_SpeedMeasurement").getOrDefault("speed").value > 600.0 {
						Alarm alarm    := new Alarm;
						alarm.type     := "My_Alarm";
						alarm.source   := m.source;
						alarm.time     := currentTime;
						alarm.text     := "This is a Test Alarm";
						alarm.status   := "ACTIVE";
						alarm.severity := "MAJOR";
						send alarm to Alarm.CHANNEL;
					}
				}
			}
		}

2. In the Administration application, open the **Own Applications** page from the navigator. Click **Add application** and in the upcoming window click **Upload custom Apama rule**. <br>
<img src="/guides/images/edge/admin-application-apama.png" name="Upload file"/> 

3. Upload the Apama monitor file (.mon) previously created. After successful upload your rule will be deployed as a custom Apama application.

4. In the **Own Applications** page, you can now open your custom Apama application with type “Apama CEP rule”. <br>
<img src="/guides/images/edge/edge-apama-example.png" name="Apama application"/> 

### Monitoring alarms and events

In the Cockpit application, select the device sending measurements in the **Groups** menu in the navigator and switch to its **Alarms** tab (since the custom rule written was such that it creates alarms).

<img src="/guides/images/edge/edge-apama-alarms.png" name="Alarms" style="width:50%;"/> 

In the Device Management application, click **All devices** in the navigator. Select the device from the device list and switch to the **Events** tab, to see the events sent by Apama as per the custom CEP rule. 

<img src="/guides/images/edge/edge-apama-events.png" name="Events" style="width:100%;"/> 
