---
order: 30
title: Actions
layout: default
---

## Overview

With the Apama Event Processing Language, it is possible to utilize functions, called "actions". Every monitor will have at least one action - the `onload` action. This section covers the already built-in actions ready to use. <span class="inline-comment-marker" data-ref="67613062-9ea1-4d95-86f8-845b74940386">See also the Apama [EPL reference](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/#page/apama-webhelp%252Fco-ApaEplRef_types.html%2523) for actions on built-in types.

## Querying Cumulocity data

To interact with your historical data, you can use one of the following request-response event pairs to look up alarms.

<table class="confluenceTable"><colgroup><col style="width: 497.0px;"><col style="width: 146.0px;"><col style="width: 435.0px;"><col style="width: 29.0px;"><col style="width: 29.0px;"></colgroup>

<thead>

<tr>

<th style="text-align: left;" class="confluenceTh">To look up...</th>

<th style="text-align: left;" class="confluenceTh">Send event of type</th>

<th style="text-align: left;" class="confluenceTh">To channel</th>

<th colspan="1" class="confluenceTh">With parameters</th>

<th colspan="1" class="confluenceTh">Listen for events</th>

</tr>

</thead>

<tbody>

<tr>

<td class="confluenceTd"><span class="inline-comment-marker" data-ref="ec78c032-c1b9-4fc5-b9bf-443fb0780597">Alarm</span></td>

<td class="confluenceTd">FindAlarm</td>

<td class="confluenceTd">FindAlarm.CHANNEL</td>

<td colspan="1" class="confluenceTd">params dictionary can contain "source", "status" and "type" filters</td>

<td colspan="1" class="confluenceTd"><span style="color: rgb(0,0,0);">FindAlarmResponse and then <span style="color: rgb(0,0,0);">FindAlarmResponseAck</span></span></td>

</tr>

<tr>

<td class="confluenceTd">ManagedObject</td>

<td class="confluenceTd">FindManagedObject</td>

<td class="confluenceTd"><span>FindManagedObject.CHANNEL</span></td>

<td colspan="1" class="confluenceTd">

<span class="inline-comment-marker" data-ref="7aa4ba24-a2a4-4e8f-8c52-6ab6dae4c693">Either set the deviceId set to the identifier of the source, or the params dictionary can contain one or more of the following:</span>

*   fragmentType
*   type
*   owner
*   text
*   childAssetId
*   childDeviceId
*   childAdditionId

</td>

<td colspan="1" class="confluenceTd">FindManagedObjectResponse and then FindManagedObjectResponseAck</td>

</tr>

</tbody>

</table>

## Invoking HTTP services

To interact with HTTP services using REST and JSON, create an HttpTransport instance using one of the factory methods:

*   HttpTransport.getOrCreate(string host, integer port) returns HttpTransport
*   HttpTransport.getOrCreateWithConfiguration(string host, integer port, dictionary&#60;string,string> configurations) returns HttpTransport (the keys in the configurations dictionary are the constants on HttpTransport with CONFIG_ prefix)

On the HttpTransport object, call one of the create*Request methods, passing a path and payload as needed, to produce a Request object.

On the Request object, you may set cookies, headers or query parameters as needed, and can then invoke the request with the execute(action&#60;Response> callback) . Supply the name of an action in your monitor for the callback, and it will be invoked with the Response when the request has completed (or timed out).

In the callback, the Response object is supplied with statusCode and payload. Fields on the payload are accessible via the AnyExtractor object it is supplied in - see access fragments below.

Refer to the ApamaDoc for further details.

## Utility functions

### Access fragments

Fragments are accessible through the params dictionary of most events. You can construct an AnyExtractor object to help you extract data from any objects containing multiple sub-fragments and access:

*   <span style="color: rgb(0,0,0);">action getInteger(string path) returns integer</span>

*   <span>action getFloat(string path) returns float</span>

*   <span style="color: rgb(0,0,0);">action getString(string path) returns string</span>

*   <span style="color: rgb(0,0,0);">action getBoolean(string path) returns boolean</span>

*   <span style="color: rgb(0,0,0);">action getSequence(string path) returns sequence&#60;any></span>

*   <span style="color: rgb(0,0,0);">action getDictionary(string path) returns dictionary&#60;any,any></span>

You can use a JSON path to navigate in the object structure. Example:

	string s:= AnyExtractor(measurement.params["fragment"]).getString("sub.fragment.object");

### Casting "any" values

Alternatively, use a cast to convert an `any` to a particular type:

	string s:= &#60;string> measurement.extraParams["strfragment"]);

Note that a cast operation will throw if the object is of a different type.

### currentTime and the TimeFormatter

The read-only variable currentTime can be used to obtain the current server time. Apama deals with time using seconds since the Unix Epoc (1 Jan 1970 UTC). You can easily transform it to a human-readable form using the TimeFormat object.

Example:

	send Event("", "c8y_HighTemperatureAlarm", evt.source, currentTime, "Alarm started at "+TimeFormat.format(currentTime, "yyyy.MM.dd G 'at' HH:mm:ss"), new dictionary<string,any>) to Event.CHANNEL;

### inMaintenanceMode

the <span style="color: rgb(0,0,0);">Util.</span>inMaintenaceMode() function is a fast way to check if the device is currently in maintenance mode. It takes a ManagedObject object as a parameter and returns a boolean which is true if the device is in a maintenance mode.

Example:

	monitor.subscribe(FindManagedObjectResponse.CHANNEL);
	on all Measurement() as m {
		integer reqId := integer.getUnique();
		send FindManagedObject(reqId, m.source, new dictionary&#60;string,string>) to FindManagedObject.CHANNEL;
		on FindManagedObjectResponse(reqId = reqId, id = m.source) as d and not FindManagedObjectResponseAck(reqId = reqId) {
			if not Util.inMaintenanceMode(d.managedObject) {
				send Event("", "c8y_Alarm", m.source, currentTime, "Received measurement from active device", new dictionary&#60;string,any>) to Event.CHANNEL;
			}
		}
	}


### replacePlaceholders

To build strings, you can use concatenation:

    string s:= "An event with the text " + evt.text + " has been created.";

If the texts get longer and have more values that are dynamically set from the data, you can use the replacePlaceholders() function. Another advantage of this function is that you can not only use the current object but also access all information of the device that created the alarm, measurement, event.

In your text string, you mark the placeholders with the field name from the event and surround it by #{}. The second parameter to replacePlaceholders can be any event type.

<span style="color: rgb(133,153,0);">string</span> myMailText := Util.replacePlaceholders(<span class="hljs-string" style="color: rgb(42,161,152);">"The device #{source} with the serial number #{c8y&#95;Hardware.serialNumber} created an event with the text #{text} at #{time}. The device is located at #{c8y&#95;Address.street} in #{c8y_Address.city}.", evt)</span>;