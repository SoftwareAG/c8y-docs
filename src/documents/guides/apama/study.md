
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

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="8901fd9b-ea08-470b-8b4a-d04d41502ff9" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>	action distance(float lat1, float lon1, float lat2, float lon2) returns float {
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

</pre>

</td>

</tr>

</tbody>

</table>

The above action will return the distance in meters.

## Step 1: Filtering the input

The main input for this module will be events. To discard non-matching events as early as possible, we perform this as the first check in the listener:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="6e15f027-ac68-412f-902a-f269205d1690" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>		on all Event() as e {
			if e.params.hasKey("c8y_Position") {
				// we have an event
			}
		}</pre>

</td>

</tr>

</tbody>

</table>

## Step 2: Collecting necessary data

In the next step, we need the configuration of the geofence for the calculation and grab it.

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="e323e344-b791-4398-a616-2baa4296ea93" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>		monitor.subscribe(FindManagedObjectResponse.CHANNEL);
...
				integer reqId := integer.getUnique();
				send FindManagedObject(reqId, e.assetId, new dictionary&#60;string,string&#62;) to
					FindManagedObject.CHANNEL;
				on Device(assetId = e.assetId) as dev 
				   and not FindManagedObjectResponse(reqId) {

</pre>

</td>

</tr>

</tbody>

</table>

## Step 3: Checking if the device supports c8y_Geofence

With the device available we will now check if there is a geofence configured for the device and if it is activated (contains "c8y&#95;Geofence" in supportedOperations). To check the c8y&#95;SupportedOperations array, we can use the indexOf() function. This function will loop through all elements and return the index of that entry, or a negative number if the value is not present. For the configuration, we will just check if the device contains the fragment "c8y&#95;Geofence". If present, this will be prefixed by "attrs." in the params of the device.

Once we have an event and a device, we extract the data from the event's c8y&#95;Position and the device's c8y&#95;Geofence. These objects are mapped to dictionary&#60;any,any&#62; entries in the params. As the params hold values of type "any", we need to cast to a dictionary&#60;any,any&#62;:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="de7412f5-8a27-484a-926e-164148a0d8d3" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>					if(dev.params.hasKey("attrs.c8y_Geofence") and 
					   dev.supportedOperations.indexOf("c8y_Geofence") >= 0) {
						dictionary&#60;any,any&#62; evtPos := dictionary&#60;any,any&#62; > e.params["c8y_Position"];
						float eventLat := &#60;float> evtPos["lat"];
						float eventLng := &#60;float> evtPos["lng"];

						dictionary&#60;any,any&#62; devGeofence := &#60;dictionary&#60;any,any&#62 &#62 dev.params["attrs.c8y_Geofence"];
						float centerLat := &#60;float> devGeofence["lat"];
						float centerLng := &#60;float> devGeofence["lng"];
						float maxDistance := &#60;float> devGeofence["radius"];

</pre>

</td>

</tr>

</tbody>

</table>

## Step 4: Creating the trigger

As mentioned earlier, the device is outside of the fence if the distance between the current device position and the geofence center is bigger than the configured geofence radius. To trigger the alarm, we need 2 events so we can check if the device entered or left the geofence within these two events.

In the first step, we calculate the distance with the function mentioned earlier:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="35776d76-8903-4218-b546-966c673a5378" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>						float d := distance(centerLat, centerLng, eventLat, eventLng);</pre>

</td>

</tr>

</tbody>

</table>

Now we re-route this as an event with:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="36cf9a65-5772-4abd-b8eb-f10cbc0a39a5" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>	event LocationEventWithDistance {
		string assetId;
		float distance;
		Event e;
		float maxDistance;
	}

...

						route LocationEventWithDistance(e.assetId, d, e, maxDistance);

</pre>

</td>

</tr>

</tbody>

</table>

We place the assetId in the event so we can easily match it in a listener.

We now set up a listener triggered by event LocationEventWithDistance, listening for the next LocationEventWithDistance - for the same assetId:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="af2bfecb-d6e4-4891-b5c1-3ca1b080c161" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>		on all LocationEventWithDistance() as firstPos {
			on LocationEventWithDistance(assetId = firstPos.assetId) as secondPos {
				// now have two events with distances
			}
		}</pre>

</td>

</tr>

</tbody>

</table>

This pair of LocationEventWithDistance events now holds all data for checking if we should create the alarm or not. Note that we are filtering the secondPos event to be for the same assetId as the first - there will be an active listener for every device we have received an event from.

## Step 5: Creating the alarm

To create the alarm, we now need two events where the first one has a distance smaller than the radius and the second one has a distance bigger than the radius. This would mean that the device just left the geofence.

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="25d7a0a6-d061-42c3-b342-89b8b616ae2c" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>				if firstPos.distance <= firstPos.maxDistance and
				   secondPos.distance > secondPos.maxDistance {
					send Event("Alarm", firstPos.assetId, currentTime,
					           "Device moved out of circular geofence",
					           {"status":&#60;any>"ACTIVE", "severity":"MAJOR", "type":"c8y_GeofenceAlarm"}) to Event.CHANNEL;
				}

</pre>

</td>

</tr>

</tbody>

</table>

## Step 6: Clearing the alarm

To clear the alarm, we just need to switch the condition at the bottom and additionally grab the currently active alarm to get its ID. We do not need to care about whether there is an existing alarm at this point. If there is none the listener will trigger the "and not FindAlarmResponseAck", terminating the listener:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="39fe0301-f5d6-4a5b-a085-dab60f91f749" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>		monitor.subscribe(FindAlarmResponse.CHANNEL);
...
				if firstPos.distance > firstPos.maxDistance and secondPos.distance <= secondPos.maxDistance {
					integer reqId:= integer.getUnique();
					send FindAlarm(reqId, {"source":firstPos.assetId,
					               "status":"ACTIVE","type":"c8y_GeofenceAlarm"}) to FindAlarm.CHANNEL;
					on FindAlarmResponse(reqId = reqId) as alarmResponse
					   and not FindAlarmResponseAck(reqId=reqId) {
						send Event("Alarm", firstPos.assetId, currentTime,
						           "Device moved back into circular geofence",
						           {"id":&#60;any> alarmResponse.id, "status":"CLEARED"}) to Event.CHANNEL;
					}
				}

</pre>

</td>

</tr>

</tbody>

</table>

## Putting everything together

We can now combine all the parts into one module. The order of the listeners does not matter.

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="b116a302-90b9-483e-b33b-40750953409c" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>using com.apama.cumulocity.Device;
using com.apama.cumulocity.Event;
using com.apama.cumulocity.FindAlarm;
using com.apama.cumulocity.FindAlarmResponse;
using com.apama.cumulocity.FindAlarmResponseAck;
using com.apama.cumulocity.FindManagedObject;
using com.apama.cumulocity.FindManagedObjectResponse;

monitor MonitorDevicesForCircularGeofence {
        event LocationEventWithDistance {
                string assetId;
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
                                send FindManagedObject(reqId, e.assetId, new dictionary&#60;string,string&#62;) to
                                        FindManagedObject.CHANNEL;
                                on Device(assetId = e.assetId) as dev 
                                   and not FindManagedObjectResponse(reqId) {
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
                                                route LocationEventWithDistance(e.assetId, d, e, maxDistance);
                                        }
                                }
                        }
                }
                on all LocationEventWithDistance() as firstPos {
                        on LocationEventWithDistance(assetId = firstPos.assetId) as secondPos {
                                if firstPos.distance <= firstPos.maxDistance and
                                   secondPos.distance > secondPos.maxDistance {
                                        send Event("Alarm", firstPos.assetId, currentTime,
                                                   "Device moved out of circular geofence",
                                                   {"status":&#60;any>"ACTIVE", "severity":"MAJOR", "type":"c8y_GeofenceAlarm"}) to Event.CHANNEL;
                                }

                                if firstPos.distance > firstPos.maxDistance and secondPos.distance <= secondPos.maxDistance {
                                        integer reqId:= integer.getUnique();
                                        send FindAlarm(reqId, {"source":firstPos.assetId,
                                                       "status":"ACTIVE","type":"c8y_GeofenceAlarm"}) to FindAlarm.CHANNEL;
                                        on FindAlarmResponse(reqId = reqId) as alarmResponse
                                           and not FindAlarmResponseAck(reqId=reqId) {
                                                send Event("Alarm", firstPos.assetId, currentTime,
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

</pre>

</td>

</tr>

</tbody>

</table>