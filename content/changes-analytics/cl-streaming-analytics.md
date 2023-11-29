---
title: Streaming Analytics
layout: change_log
section:
  - change_log
weight: 10
---


### December 2023

#### -Change- Apama correlator version

This version of Cumulocity IoT Streaming Analytics includes the Apama version 10.15.4 correlator.
EPL apps developers should also refer to [What's New In Apama 10.15.4](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/pam-webhelp/#page/pam-webhelp%2Fco-WhaNewInApa_10154_top.html) in the Apama documentation.

#### -Change- Location of diagnostics links

Previously, two links for downloading diagnostics information were available at the bottom of the Streaming Analytics application.
These links have been moved. They are now available when you click the **User** button in the Streaming Analytics application to display the right drawer.
The right drawer now displays these links in a new **Download diagnostics** section. See also [Downloading diagnostics and logs](https://cumulocity.com/docs/streaming-analytics/troubleshooting/#diagnostics-download) in the user documentation.

In addition, the right drawer now also provides a **Documentation** section with links to the Streaming Analytics documentation.

#### -Change- Basic diagnostics information

The EPL memory profiler snapshots, which were previously only included in the enhanced diagnostics information, are now also included in the basic diagnostics information. This is helpful in case a high memory usage alarm is raised when the Apama-ctrl microservice consumes 90% of the maximum memory permitted for the microservice container and you only have basic diagnostics information available. See also [Downloading diagnostics and logs](https://cumulocity.com/docs/streaming-analytics/troubleshooting/#diagnostics-download) in the user documentation.

#### -Feature- New EPL sample

A new EPL sample named "Receive update notifications"
can now be accessed from the EPL editor of the Streaming Analytics application.
It shows how to write an EPL app that can distinguish between notifications for creating and updating managed objects, measurements, alarms, events, and operations.
See also [Developing apps with the Streaming Analytics application](https://cumulocity.com/docs/streaming-analytics/epl-apps/#dev-apps-with-sa)
in the user documentation.

For more detailed information, see [Receiving update notifications](https://documentation.softwareag.com/pam/10.15.3/en/webhelp/pam-webhelp/index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_receiving_update_notifications.html) in the Apama documentation for the Cumulocity IoT transport connectivity plug-in.

#### -Feature- Receive input from all input sources by default

The Analytics Builder input blocks can now be configured to receive inputs from all input sources. You can simplify global tasks by creating a single Analytics Builder model that works with inputs from all input sources, for example, send an email for every critical alarm of type `C8Y_TemperatureAlarm` that is generated, regardless of the device that generated the alarm. A new **All Inputs** option is available for this purpose.
When you add a new block to your model or when you edit the parameters of a new template instance, the **All Inputs** option is now set by default. See also [Editing the parameters of a block](https://cumulocity.com/docs/streaming-analytics/analytics-builder/#editing-the-parameters-of-a-block) in the user documentation.

You can also use the new **All Inputs** option in the replace dialog box when replacing input sources. Keep in mind that the replace dialog box is used for both input blocks and output blocks. So when you replace a device with the new **All Inputs** option, all matching output devices are automatically changed to trigger devices.
See also [Replacing sources or destinations](https://cumulocity.com/docs/streaming-analytics/analytics-builder/#replacing-sources-or-destinations) in the user documentation.

A new Analytics Builder sample named "Aggregate measurements per input source" is now available, which creates new measurements that average the measurement values for each input source that has a specified fragment and series. This is a simple sample that creates a model without template parameters, so you can activate the model directly in the model manager. See also [The Samples tab](https://cumulocity.com/docs/streaming-analytics/analytics-builder/#the-samples-tab) in the user documentation.

#### -Feature- Additional value types for the Constant Value block

The [Constant Value](https://cumulocity.com/docs/streaming-analytics/block-reference/#constant-value) block in Analytics Builder now supports `float` and `boolean` value types
and can produce output of these types. This enables the block's output to be consumed by other blocks that take input of type `float` or `boolean` like the blocks in
the **Logic** and **Aggregate** categories. The **Type** parameter is also now optional. If a type is not selected, the type of the output value is inferred from the **Value** parameter.

#### -Change- Removing template parameters

In Analytics Builder, an icon is now provided for removing a template parameter from the **Template Parameter** dialog box.
The actions menu (the three vertical dots at the end of a row) has therefore been removed. See also [Managing template parameters](https://cumulocity.com/docs/streaming-analytics/analytics-builder/#managing-template-parameters) in the user documentation.

#### -Feature- Selection lists for template parameters

You can now create a selection list for an Analytics Builder template parameter. This allows the model author to provide a predefined list of values for the user to choose from, ensuring that the user only enters the values you allow.
You can define selection lists for types such as string, float, source or destination, or geofence and you can also select a specific value to be the default value. The values that you define for a selection list are then available for selection when you create instances of the model.
See also [Adding a selection list for a template parameter](https://cumulocity.com/docs/streaming-analytics/analytics-builder/#adding-a-selection-list-for-a-template-parameter) in the user documentation.

#### -Change- Missing subassets in a device group or asset hierarchy

Previously, when reactivating an Analytics Builder model, an error was thrown if a subasset of a device group or asset hierarchy from which the model receives events no longer existed in the inventory, for example, because a device was deleted.
As of this version, missing subassets in a device group or asset hierarchy are ignored and an error is no longer thrown.
However, if the deletion of a subasset results in an empty device group or asset hierarchy, an error is still thrown.

#### -Fix- Filtering models

In Analytics Builder, when filtering the models in the model manager by **Mode** and **Status**, the filter is now also applied to template models.
Prior to this fix, the filter was only applied to models without template parameters.

#### -Feature- Cumulocity IoT transport in Apama 10.15.4

The `Alarm` and `Operation` events have new constants which define the valid values for their respective status and severity members. This allows more robust coding and eliminates runtime errors caused by typographical errors with literal strings.

#### -Feature- EPL enhancements in Apama 10.15.4

##### String concatenation operator + supports non-string operands

If only one operand expression is of type `string`, then string conversion is now performed on the other operand to produce a string at runtime.
For more details, see [Additive operators](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/pam-webhelp/#page/pam-webhelp%2Fre-ApaEplRef_additive_operators.html) in the Apama documentation.

##### New built-in convenience methods on string, sequence and dictionary

The EPL language has been enhanced with some convenience methods for common operations such as checking if a string or sequence contains a specified substring or item, and determining if a string, sequence or dictionary is empty.

There is a method to get a sequence value with a fallback default if there is no value at the specified index:

```
mySequence.getOr(100, "default value");
```

There is also a powerful regular expression group search for strings that finds the first match and returns the text captured by each "(...)" group of the regular expression:

```
// Prints ["Bob", "Eve"]
 print "Today Bob met Eve".groupSearch("([a-zA-Z]) met ([a-zA-Z])").toString();
```

The following table lists all new methods:

| New method | Description |
| ----------- | ----------- |
| `string.contains()`, `sequence.contains()` | Determines whether the string or sequence contains the specified substring or item. This is a convenient alternative to checking the `find()` or `indexOf()` integer value. |
| `string.groupSearch()` | Finds the first regular expression match in this string, and returns a list of the matched "(...)" groups. |
| `string.startsWith()`, `string.endsWith()` | Determines whether the string has the specified prefix or suffix. |
| `string.rfind()` | Locates a string within this string, starting from the right (that is, from the end) of the string. |
| `string.substringFrom()` | Extracts part of this string, starting at a specified character and ending at the end of the string. |
| `string.quote()` | Adds quotation marks and escaping according to the standard EPL event representation. This method may be useful for logging strings that may contain spaces and newline characters. This is the reverse of the existing `string.parse()` method. |
| `string.isEmpty()` | Determines whether the string has a length of zero characters. |
| `dictionary.isEmpty()`, `sequence.isEmpty()` | Determines whether the size is 0. |
| `any.isEmpty()`, `optional.isEmpty()`, `listener.isEmpty()`, `Channel.isEmpty()`, `chunk.isEmpty()` | Aliases for the existing `empty()` methods on these types. It is recommended to use the new `isEmpty()` methods, but the use of `empty()` is not deprecated. |
| `sequence.getOr()` | Gets the value at the specified index, or a specified fallback value if the index is not valid. |

For more information, see the [API Reference for EPL (ApamaDoc)](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/related/ApamaDoc/index.html).

##### Support for negative indexes for sequence[...] access

Instead of throwing an out of bounds exception, it is now possible to refer to items near the end of a sequence by specifying a negative index. For example, `seq[-1]` gives the last item in the sequence and `seq[-2]` gives the item before that. Negative sequence indexes can also be used in the `sequence.remove()` and `sequence.insert()` methods.

Note that negative values cannot be specified when accessing a sequence item using the `any.getEntry()` method.

##### Mixed-type sequence and dictionary literals are now treated as <any> by default

It is no longer necessary to add an `<any>` cast around the first item in a sequence or dictionary literal that contains a mixture of different types. For example, the following sequence literal which produces a `sequence<any>`:

```
[<any> 12345, "a string"]
```

can now be written more simply as
```
[12345, "a string"]
```

This simplifies the functional example given in [EPL enhancements in 10.15.3](https://documentation.softwareag.com/pam/10.15.3/en/webhelp/pam-webhelp/#page/pam-webhelp%2Fco-ApaRelNot_10153_epl_enhancements.html) in the Apama documentation: the `<any>` is no longer needed in the `setFields` call.

##### Discarding of unused return values

In EPL, it is now possible to discard the return value of a function or expression and not assign it to a variable. This is useful if you only want the side effects of the function and do not need the return value. Be careful not to discard a return value that indicates important conditions that your program may need to use.

Previously, you had to write:

```
any _ := Functional(newAlarms).map(Fn.getEntry("alarm")).map(allAlarms.append);
```

But now you can write:

```
Functional(newAlarms).map(Fn.getEntry("alarm")).map(allAlarms.append);
```

See also [Using an expression as a statement](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/pam-webhelp/#page/pam-webhelp%2Fre-ApaEplRef_using_an_expression_as_a_statement.html) in the Apama documentation.

##### Functional operators

The `com.apama.functional.Fn` and `com.apama.functional.Functional` events now have a new method `mapKeys` which can return a dictionary container with modified keys. For more details, see [Functional operators](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/pam-webhelp/#page/pam-webhelp%2Fco-DevApaAppInEpl_functional_operators.html) in the Apama documentation and the [API Reference for EPL (ApamaDoc)](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/related/ApamaDoc/index.html).

##### Functional listeners

The functional `onTimeout` action now returns the wait listener it creates so that it can be quit if needed. For more details, see [Functional listeners](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/pam-webhelp/#page/pam-webhelp%2Fco-DevApaAppInEpl_functional_listeners.html) in the Apama documentation.

##### Handling uncaught exceptions

EPL monitors are no longer terminated by default when an uncaught exception is thrown in some cases.

Programming errors and unexpected data in incoming events can cause an uncaught exception in EPL. This causes the monitor instance to be terminated, rendering the application unusable. To provide a better experience, exceptions thrown from listeners and stream listeners which are not caught no longer terminate the monitor instance. Instead, they just stop the handling of the current event.

Developers are still encouraged to correctly catch and handle the exceptions in their EPL. If an exception is thrown and not caught, it is still possible for the events to be lost and not correctly handled.

This is a change in behavior. Some users may be relying on this previous behavior, in combination with an `ondie()` action. EPL with an `ondie()` action retains the previous behavior of always terminating the monitor and calling `ondie()`. If you need to retain the previous behavior, you can add an empty `ondie()` action to your monitor.

{{< c8y-admon-info >}}
If you have an action that is called from within a stream query (for example, as part of a `where` or `group by` clause, or a window definition) which throws an exception, this still terminates the monitor instance.
{{< /c8y-admon-info >}}

##### Updated events in com.apama.cumulocity

To avoid confusion as to whether events were being sent towards Cumulocity IoT or being received back as updates from Cumulocity IoT, the Cumulocity event definitions API was changed in a previous release (10.5.2.0) so that the existing `CHANNEL` constant was deprecated and replaced by either `SEND_CHANNEL` or `SUBSCRIBE_CHANNEL` constants as appropriate. Some events were omitted from these changes and this has now been rectified. Therefore, the `CHANNEL` constant is deprecated on the following events:

* `SubscribeMeasurements`
* `UnsubscribeMeasurements`
* `FindManagedObjectResponseAck`
* `FindMeasurementResponseAck`
* `GenericResponseComplete`
* `Subscribe`
* `Unsubscribe`

In addition, a new `SUBSCRIBE_CHANNEL` or `SEND_CHANNEL` has been added to the following events instead:

* `SubscribeMeasurements`
* `UnsubscribeMeasurements`
* `Subscribe`
* `Unsubscribe`

The constants on the following events are instead replaced with `SUBSCRIBE_CHANNEL` constants on their corresponding `Response` types:

* `FindManagedObjectResponseAck`
* `FindMeasurementResponseAck`
* `GenericResponseComplete`

The [API Reference for EPL (ApamaDoc)](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/related/ApamaDoc/index.html) has been amended to make it clear that acknowledgement events are always received on the same channel as the corresponding response events, and to avoid confusion the `CHANNEL` constant has been deprecated on those acknowledgement events where it had been defined.
