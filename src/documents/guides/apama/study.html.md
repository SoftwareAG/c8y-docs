
---
order: 70
title: Study: circular geofence alarms
layout: default
---

## Overview

This module will give an in-depth example how you can create more complex rules. It will use multiple of the features explained before in the other sections of this guide. If you are just starting with the Apama Event Processing Language please take a look at [<span class="inline-comment-marker" data-ref="039df6be-3966-4270-80ad-14af1e16088a">these examples</span>](http://cumulocity.com/guides/apama/examples)<span class="inline-comment-marker" data-ref="039df6be-3966-4270-80ad-14af1e16088a">.</span>

## Prerequisites

### Goal

We want our tracking devices that are continuously sending location events to automatically generate alarms if they move outside a geofence. This geofence will be a circle and should be configurable for each device separately. The alarm will be created at the moment the device moves outside the geofence. While it is moving outside, it should not create new alarms because the first one will remain active. As soon as the device moves back into the geofence, the alarm will be cleared.

### Cumulocity data model

Location event structure (the part we need):

    {
      "id": "...",
      "source": { "id": "...", },
      "text": "...",
      "time": "...",
      "type": "...",
      "c8y_Position": { "alt": ..., "lng": ..., "lat": ... }

    }

We store the geofence configuration in the device (the radius will be configured in meters):

    {
      "c8y_Geofence": { "lat": ..., "lng": ..., "radius": ... }

    }

Additionally, we want to enable/disable the geofence alarms for each device without removing the configuration entirely. We will do that by adding/removing "c8y_Geofence" to c8y_SupportedOperations in the device:

    {
      "c8y_SupportedOperations": [..., "c8y_Geofence", ...]

    }

### Calculation

The device is outside of the geofence if the distance between the current position and the center is bigger than the configured radius of the geofence. What we need is a function that can calculate the difference between <span class="inline-comment-marker" data-ref="e33a99eb-b07c-4c46-9e16-2e6ae6d54ffe">two</span> geo-coordinates:

	action distance(float lat1, float lon1, float lat2, float lon2) returns float {
			float R := 6371000.0;
			float toRad := float.PI / 180.0;
			float lat1Rad := lat1 * toRad;
			float lat2Rad := lat2 * toRad;
			float deltaLatRad := (lat2-lat1) * toRad;
			float deltaLonRad := (lat2-lat1) * toRad;
			float a := (deltaLatRad/2.0).sin().pow(2.0) * lat1Rad.cos() * lat2Rad.cos() * (deltaLonRad/2.0).sin().pow(2.0);
			float c := 2.0 * a.sqrt().atan2((1.0-a).sqrt());
			return R * c;
		}


The above action will return the distance in meters.

## Step 1: Filtering the input

The main input for this module will be events. To discard non-matching events as early as possible, we perform this as the first check in the listener:

	on all Event() as e {
				if e.params.hasKey("c8y_Position") {
					// we have an event
				}
			}
		
## Step 2: Collecting necessary data

In the next step, we need the configuration of the geofence for the calculation and grab it.

		 monitor.subscribe(FindManagedObjectResponse.CHANNEL);
	...
	                integer reqId := integer.getUnique();
	                	send FindManagedObject(reqId, e.source, new dictionary<string,string>) to
	                        FindManagedObject.CHANNEL;
	                on FindManagedObjectResponse(reqId = reqId) as resp
	                   and not FindManagedObjectResponseAck(reqId) {
	 
	                        ManagedObject dev := resp.managedObject;
	

## Step 3: Checking if the device supports c8y_Geofence

With the device available we will now check if there is a geofence configured for the device and if it is activated (contains "c8y&#95;Geofence" in supportedOperations). To check the c8y&#95;SupportedOperations array, we can use the indexOf() function. This function will loop through all elements and return the index of that entry, or a negative number if the value is not present. For the configuration, we will just check if the device contains the fragment "c8y&#95;Geofence". If present, this will be prefixed by "attrs." in the params of the device.

	Once we have an event and a device, we extract the data from the event's c8y&#95;Position and the device's c8y&#95;Geofence. These objects are mapped to dictionary&#60;any,any&#62; entries in the params. As the params hold values of type "any", we need to cast to a dictionary&#60;any,any&#62;:
	
	if(dev.params.hasKey("attrs.c8y_Geofence") and 
						   dev.supportedOperations.indexOf("c8y_Geofence") >= 0) {
							dictionary&#60;any,any&#62; evtPos := dictionary&#60;any,any&#62; > e.params["c8y_Position"];
							float eventLat := &#60;float> evtPos["lat"];
							float eventLng := &#60;float> evtPos["lng"];
	
							dictionary&#60;any,any&#62; devGeofence := &#60;dictionary&#60;any,any&#62 &#62 dev.params["attrs.c8y_Geofence"];
						float centerLat := &#60;float> devGeofence["lat"];
						float centerLng := &#60;float> devGeofence["lng"];
						float maxDistance := &#60;float> devGeofence["radius"];



## Step 4: Creating the trigger

As mentioned earlier, the device is outside of the fence if the distance between the current device position and the geofence center is bigger than the configured geofence radius. To trigger the alarm, we need 2 events so we can check if the device entered or left the geofence within these two events.

In the first step, we calculate the distance with the function mentioned earlier:

	float d := distance(centerLat, centerLng, eventLat, eventLng);
	
Now we re-route this as an event with:

	event LocationEventWithDistance {
			string assetId;
			float distance;
			Event e;
			float maxDistance;
		}
	
	...
	
							route LocationEventWithDistance(e.assetId, d, e, maxDistance);


We place the assetId in the event so we can easily match it in a listener.

We now set up a listener triggered by event LocationEventWithDistance, listening for the next LocationEventWithDistance - for the same assetId:

	on all LocationEventWithDistance() as firstPos {
				on LocationEventWithDistance(assetId = firstPos.assetId) as secondPos {
					// now have two events with distances
				}
			}

This pair of LocationEventWithDistance events now holds all data for checking if we should create the alarm or not. Note that we are filtering the secondPos event to be for the same assetId as the first - there will be an active listener for every device we have received an event from.

## Step 5: Creating the alarm

To create the alarm, we now need two events where the first one has a distance smaller than the radius and the second one has a distance bigger than the radius. This would mean that the device just left the geofence.

	if firstPos.distance <= firstPos.maxDistance and
	   secondPos.distance > secondPos.maxDistance {
	        send Alarm("", "c8y_GeofenceAlarm", firstPos.source, currentTime,
	                   "Device moved out of circular geofence",
	                   "ACTIVE", "MAJOR", 1, new dictionary<string,any>) to Event.CHANNEL;
	}

## Step 6: Clearing the alarm

To clear the alarm, we just need to switch the condition at the bottom and additionally grab the currently active alarm to get its ID. We do not need to care about whether there is an existing alarm at this point. If there is none the listener will trigger the "and not FindAlarmResponseAck", terminating the listener:

	monitor.subscribe(FindAlarmResponse.CHANNEL);
	...
					if firstPos.distance > firstPos.maxDistance and secondPos.distance <= secondPos.maxDistance {
						integer reqId:= integer.getUnique();
						send FindAlarm(reqId, {"source":firstPos.source,
						               "status":"ACTIVE","type":"c8y_GeofenceAlarm"}) to FindAlarm.CHANNEL;
						on FindAlarmResponse(reqId = reqId) as alarmResponse
						   and not FindAlarmResponseAck(reqId=reqId) {
							send Event(alarmResponse.id, "Alarm", firstPos.source, currentTime,
							           "Device moved back into circular geofence",
							           {"id":&#60;any> alarmResponse.id, "status":"CLEARED"}) to Event.CHANNEL;
						}
					}


## Putting everything together

We can now combine all the parts into one module. The order of the listeners does not matter.

	using com.apama.cumulocity.Device;
	using com.apama.cumulocity.Event;
	using com.apama.cumulocity.Alarm;
	using com.apama.cumulocity.FindAlarm;
	using com.apama.cumulocity.FindAlarmResponse;
	using com.apama.cumulocity.FindAlarmResponseAck;
	using com.apama.cumulocity.FindManagedObject;
	using com.apama.cumulocity.FindManagedObjectResponse;
	using com.apama.cumulocity.FindManagedObjectResponseAck;

	
	monitor MonitorDevicesForCircularGeofence {
	        event LocationEventWithDistance {
	                string source;
	                float distance;
	                Event e;
	                float maxDistance;
	        }
	
        action onload() {
                monitor.subscribe(FindManagedObjectResponse.CHANNEL);
                monitor.subscribe(FindAlarmResponse.CHANNEL);
                on all Event() as e {
                        if e.params.hasKey("c8y_Position") {
                                integer reqId := integer.getUnique();
                                send FindManagedObject(reqId, e.source, new dictionary&#60;string,string&#62;) to
                                        FindManagedObject.CHANNEL;
                                 on FindManagedObjectResponse(reqId = reqId) as resp
                   and not FindManagedObjectResponseAck(reqId) {
                    ManagedObject dev := resp.managedObject;
                                        if(dev.params.hasKey("attrs.c8y_Geofence") and 
                                           dev.supportedOperations.indexOf("c8y_Geofence") >= 0) {
                                                dictionary&#60;any,any&#62; evtPos := dictionary&#60;any,any&#62; > e.params["c8y_Position"];
                                                float eventLat := &#60;float> evtPos["lat"];
                                                float eventLng := &#60;float> evtPos["lng"];

                                                dictionary&#60;any,any&#62; devGeofence := &#60;dictionary&#60;any,any&#62; &#62; dev.params["attrs.c8y_Geofence"];
                                                float centerLat := &#60;float> devGeofence["lat"];
                                                float centerLng := &#60;float> devGeofence["lng"];
                                                float maxDistance := &#60;float> devGeofence["radius"];

                                                float d := distance(centerLat, centerLng, eventLat, eventLng);
                                                route LocationEventWithDistance(e.source, d, e, maxDistance);
                                        }
                                }
                        }
                }
                on all LocationEventWithDistance() as firstPos {
                        on LocationEventWithDistance(source = firstPos.source) as secondPos {
                                if firstPos.distance <= firstPos.maxDistance and
                                   secondPos.distance > secondPos.maxDistance {
                                        send Alarm("", "c8y_GeofenceAlarm", firstPos.source, currentTime,
                               "Device moved out of circular geofence",
                               "ACTIVE", "MAJOR", 1, new dictionary<string,any>) to Event.CHANNEL;
                }
                                if firstPos.distance > firstPos.maxDistance and secondPos.distance <= secondPos.maxDistance {
                                        integer reqId:= integer.getUnique();
                                        send FindAlarm(reqId, {"source":firstPos.source,
                                                       "status":"ACTIVE","type":"c8y_GeofenceAlarm"}) to FindAlarm.CHANNEL;
                                        on FindAlarmResponse(reqId = reqId) as alarmResponse
                                           and not FindAlarmResponseAck(reqId=reqId) {
                                                send Event(alarm.Response.id, "Alarm", firstPos.source, currentTime,
                                                           "Device moved back into circular geofence",
                                                           {"id":&#60;any> alarmResponse.id, "status":"CLEARED"}) to Event.CHANNEL;
                                        }
                                }
                        }
                }
        }

        action distance(float lat1, float lon1, float lat2, float lon2) returns float {
                float R := 6371000.0;
                float toRad := float.PI / 180.0;
                float lat1Rad := lat1 * toRad;
                float lat2Rad := lat2 * toRad;
                float deltaLatRad := (lat2-lat1) * toRad;
                float deltaLonRad := (lat2-lat1) * toRad;
                float a := (deltaLatRad/2.0).sin().pow(2.0) * lat1Rad.cos() * lat2Rad.cos() * (deltaLonRad/2.0).sin().pow(2.0);
                float c := 2.0 * a.sqrt().atan2((1.0-a).sqrt());
                return R * c;
        }
	}

