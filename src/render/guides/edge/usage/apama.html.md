---
order: 40
title: Realtime analytics using Apama
layout: redirect
---

### Introduction

You can add your own real-time analytics to Cumulocity IoT Edge using the Apama Event Processing Language. 

Apama is a complete CEP platform. It contains a complex event processing engine and a comprehensive set of tools to develop, integrate, and deploy event-driven applications.

With Apama you can

* monitor rapidly moving channels of events from multiple sources
* detect and analyze events and event patterns of interest
* respond to them in real time 

For further information refer to the [Apama guide](/guides/apama) or see the topic Developing Apama Applications in EPL in the [Apama documentation](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/) for full details. 


### Uploading a custom Apama CEP rule

In Cumulocity, users can configure their own custom rules bases on their business needs. These custom rule files can be uploaded to the platform which in turn is injected as a monitor in Apama. 

The following example shows how to upload a custom mon file to Cumulocity. 

1. First create a custom mon file, as shown in our example for measurements. This sample custom rule creates an alarm for every measurement of type “c8y_SpeedMeasurement” where the “speed” value goes beyond 600.


		using com.apama.cumulocity.Measurement;
		using com.apama.cumulocity.Event;
		using com.apama.cumulocity.Alarm;
		
		monitor SampleMonitor {
		
	    action onload {		
			monitor.subscribe(Measurement.CHANNEL);
	        on all Measurement() as measurement {
			
	            Event newEvent := new Event;
				newEvent.source := measurement.source;
	            newEvent.type := "Event in Edge 9.0.x";
	            newEvent.time := currentTime;
	            newEvent.text := "test custom smart rule using apama CEP - in Edge 9.0.x";
	            newEvent.params["First_String"] := "Execute the plan discussed";
				newEvent.params["Second_String"] := "Some kmat Random key-value param";
	            send newEvent to "CumulocityIoT";
				
				if measurement.measurements.getOrDefault("c8y_SpeedMeasurement").getOrDefault("speed").value > 600.0 {
					send Alarm("", "My_Alarm_MAJOR_Version_1", measurement.source, currentTime, 
								" Test in Edge 9.0.x MAJOR Alarm", "ACTIVE", "MAJOR", 
								1, new dictionary<string, any>) to Alarm.CHANNEL;
				} else {
					send Alarm("", "My_KMAT_Alarm_Minor_Version_1", measurement.source, currentTime, 
								"Test in Edge 9.0.x Alarm MINOR", "ACTIVE", "MINOR", 
								1, new dictionary<string, any>) to Alarm.CHANNEL;
				}
	
	        }
	    }
			
		}
	

2. In the Administration application, open the **Own Applications** page from the navigator. Click **Add application** and in the upcoming window click **Upload custom Apama rule**. <br>
<img src="/guides/images/users-guide/Administration/admin-application-apama.png" name="Upload file"/> 

3. Upload the Apama monitor file (.mon) previously created. After successful upload your rule will be deployed as a custom Apama application.

4. In the **Own Applications** page, you can now open your custom Apama application with type “Apama CEP rule”. <br>
<img src="/guides/images/edge/edge-apama-example.png" name="Apama application"/> 

### Monitoring alarms and events

In the Cockpit application, select the device sending measurements in the **Groups** menu in the navigator and switch to its **Alarms** tab (since the custom rule written was such that it creates alarms).

<img src="/guides/images/edge/edge-apama-alarms.png" name="Alarms" style="width:50%;"/> 

In the Device Management application, click **All devices** in the navigator. Select the device from the device list and switch to the **Events** tab, to see the events sent by Apama as per the custom CEP rule. 

<img src="/guides/images/edge/edge-apama-events.png" name="Events" style="width:100%;"/> 

### Apama Analytics Builder

Cumulocity IoT Edge includes Apama Analytics Builder.
Analytics Builder provides self-service analytics to the domain experts, allowing web-based drag & drop of streaming analytics applications. 

You can access Apama Analytics Builder from the Cumulocity IoT app switcher:

![App switcher](/guides/images/edge/app-switcher-analytics-builder.png)

See [Apama Analytics Builder for Cumulocity IoT](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3-1/pas10-3-1/apama-pas-webhelp/index.html) for the complete documentation.
