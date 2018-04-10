---
order: 40
title: Utility functions
layout: redirect
---


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