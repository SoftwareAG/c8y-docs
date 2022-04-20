---
weight: 50
title: Utility functions
layout: redirect
---

### Access fragments

You can access fragments via the `params` dictionary of most events. The `AnyExtractor` object can be constructed to help you extract data from any objects containing multiple subfragments and access:

* action getInteger(string path) returns integer

* action getFloat(string path) returns float

* action getString(string path) returns string

* action getBoolean(string path) returns boolean

* action getSequence(string path) returns sequence&lt;any&gt;

* action getDictionary(string path) returns dictionary&lt;any, any&gt;

You can use a JSON path to navigate in the object structure. For example:

```java
string s := AnyExtractor(measurement.params["fragment"]).getString("sub.fragment.object");
```

>Example "fragment": "c8y_TemperatureMeasurement".<br>
>Example "sub.fragment.object": "c8y_TemperatureMeasurement.T.Unit".

### Casting "any" values

Alternatively, use a cast to convert an `any` to a particular type:

```java
string s := <string> measurement.params["strfragment"];
```

Note that a cast operation will throw if the object is of a different type.

### currentTime and the TimeFormatter

The read-only variable `currentTime` can be used to obtain the current server time. Apama deals with time using seconds since the Unix Epoch (1 Jan 1970 UTC). You can easily transform it to a human-readable form using the `TimeFormat` object.
The `TimeFormat` object can be used for formatting dates and times, and also for parsing them.

Example:

```java
using com.apama.correlator.timeformat.TimeFormat;

monitor Example {
    action onload {
        log TimeFormat.format(currentTime, "yyyy.MM.dd 'at' HH:mm:ss") at INFO;
    }
}
```

For more information on `TimeFormat` and its functions, see [Using the TimeFormat Event Library]({{< link-apama-webhelp >}}index.html#page/apama-webhelp%2Fre-DevApaAppInEpl_using_the_time_format_plug_in.html) in the Apama documentation and the API Reference for EPL (ApamaDoc).

### inMaintenanceMode

The `Util.inMaintenanceMode()` function is a fast way to check if the device is currently in maintenance mode. It takes a managed object as a parameter and returns a boolean which is true if the device is in maintenance mode.

Example:

```java
using com.apama.cumulocity.Measurement;
using com.apama.cumulocity.Event;
using com.apama.cumulocity.FindManagedObject;
using com.apama.cumulocity.FindManagedObjectResponse;
using com.apama.cumulocity.FindManagedObjectResponseAck;

using com.apama.cumulocity.Util;

monitor ExampleMonitor {
  action onload() {
    // Subscribe to Measurement.SUBSCRIBE_CHANNEL to receive all measurements
    monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
    monitor.subscribe(FindManagedObjectResponse.SUBSCRIBE_CHANNEL);
    on all Measurement() as m {
      integer reqId := integer.getUnique();
      send FindManagedObject(reqId, m.source, new dictionary<string,string>) to FindManagedObject.SEND_CHANNEL;
      on FindManagedObjectResponse(reqId = reqId, id = m.source) as d and not FindManagedObjectResponseAck(reqId = reqId) {
        if not Util.inMaintenanceMode(d.managedObject) {
          send Event("", "c8y_Event", m.source, currentTime, "Received measurement from active device", new dictionary<string,any>) to Event.SEND_CHANNEL;
        }
      }
    }
  }
}
```

### replacePlaceholders

To build strings, you can use concatenation as follows:

```java
string s:= "An event with the text " + evt.text + " has been created.";
```

If the texts get longer and have more values that are dynamically set from the data, you can use the `Util.replacePlaceholders()` function. 
In your text string, you mark the placeholders with the field name from the event and surround it by `#{}`. 
The second parameter to `replacePlaceholders` can be any event type.

`Utils::replacePlaceholders` looks up the field name specified in the event or in the parameters of the event to generate the text replacement. 
You can use field names of type `#{X.Y}` to access nested structures in the event.

```java
myMailText := Util.replacePlaceholders("The device #{source} created an event with the text #{text} at #{time}, alarm);
```

If the replacement string is of a form such as `#{source.name}` where `source.name` is the name of the underlying managed object/device 
or `#{source.c8y_hardware.notes}` where `c8y_hardware` is a fragment on the managed object, 
then special handling is required to achieve the replacement. 
After the initial replacement, you must update the placeholder field name and run `Util::replacePlaceholders` again with the source `managedObject`.


```java
myMailText := Util.replacePlaceholders("The device #{source} with the serial number #{source.c8y_Hardware.serialNumber} created an event with the text #{text} at #{time}. The device is located at #{source.c8y_Address.street} in #{source.c8y_Address.city}.", alarm);
myMailText := myMailText.replaceAll("#{source.", "#{"};
myMailText := Util.replacePlaceholders(myMailText, managedObject);
```
