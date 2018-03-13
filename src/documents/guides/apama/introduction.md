---
order: 10
title: Introduction
layout: default
---


## Overview

Using the <span style="color: rgb(3,19,21);">Cumulocity real-time event processing</span>, you can add your own logic to your IoT solution. This includes data analytics logic but it is not limited to it. To define new analytics, you will use the Apama Event Processing Language - see the [Apama documentation](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/) and the topic [Developing Apama Applications in EPL](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/#page/apama-webhelp%252Fco-DevApaAppInEpl_how_this_book_is_organized.html%2523) for full details. The language allows analyzing incoming data. You can create, update and delete your data in real-time.

Typical real-time analytics use cases include:

*   Remote control: Turn a device off if its temperature rises over 40 degrees.
*   Validation: Discard negative meter readings or meter readings that are lower than the previous.
*   Derived data: Calculate the volume of sales transactions per vending machine per day.
*   Aggregation: Sum up the sales of vending machines for a customer per day.
*   Notifications: Send me an email if there's a power outage in one of my machines.
*   Compression: Store location updates of all cars only once every five minutes (but still send real-time data for the car that I am looking at to the user interface).

In the following sections, we describe the basics for understanding how the Apama Event Processing Language (EPL) works and how you can create your own analytics or other server-side business logic and automation.

## Deploying EPL

You can use [Software AG Designer](http://www.apamacommunity.com/downloads/) to develop your applications. Create an Apama project in Software AG Designer and add the following adapters:

*   Apama Connectivity for Cumulocity IoT
*   HTTP Client - JSON with generic request/response event definitions

You will need to configure the Cumulocity properties with your Cumulocity credentials. Also add the bundles:

Time Format
Cumulocity Utilities
Automatic onApplicationInitialized

Develop and test your EPL in Software AG Designer.

When you are ready to deploy to Cumulocity, upload the .mon file containing your application through the "Own applications" page in the Administration application. For details, refer to [Administration > Managing applications](/guides/users-guide/administration#applications). 

When EPL is deployed to Cumulocity, each .mon file is assigned a unique package name. This prevents conflicts when multiple modules are uploaded. For this reason, you should not specify a 'package' statement in the .mon files. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single .mon file.

## Events and channels

In the Apama Event Processing Language, interactions with the rest of the Cumulocity ecosystem is done via events. A number of event definitions is provided for accessing Cumulocity data.

### Predefined event types

There are some predefined event types to interact with several Cumulocity APIs. Events are sent to Apama applications automatically when a new measurement, alarm or event is created. For interacting with the Cumulocity backend, you can create an event and send it to the relevant channel. Cumulocity will automatically execute either the database query or create the API calls necessary for sending mails, SMS, or similar. To create a new alarm in the database, you can create a new "Event" event.

<table class="wrapped confluenceTable"><colgroup><col><col><col><col></colgroup>

<thead>

<tr>

<th style="text-align: left;" class="confluenceTh">API</th>

<th style="text-align: left;" class="confluenceTh">Input events</th>

<th style="text-align: left;" class="confluenceTh">Output events</th>

<th style="text-align: left;" class="confluenceTh">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="confluenceTd">Inventory</td>

<td class="confluenceTd">ManagedObject  
<span style="color: rgb(0,0,0);">FindManagedObjectResponse</span></td>

<td class="confluenceTd">FindManagedObject  

</td>

<td class="confluenceTd">This group of events represents lookup of <span class="inline-comment-marker" data-ref="727e6160-a5ce-49e5-8a1f-02eb4fbd95f7">ManagedObject objects.</span></td>

</tr>

<tr>

<td class="confluenceTd">Events</td>

<td class="confluenceTd">Event</td>

<td class="confluenceTd">Event</td>

<td class="confluenceTd">This group of events represents creation or modification of a single event.</td>

</tr>

<tr>

<td class="confluenceTd">Measurements</td>

<td class="confluenceTd">Measurement</td>

<td class="confluenceTd">Measurement</td>

<td class="confluenceTd">This group of events represents creation of a single measurement.</td>

</tr>

<tr>

<td class="confluenceTd">Device control</td>

<td class="confluenceTd">  
</td>

<td class="confluenceTd"><span>Operation</span></td>

<td class="confluenceTd">This group of events represents creation or modification of a single operation.</td>

</tr>

<tr>

<td class="confluenceTd">Alarms</td>

<td class="confluenceTd"><span>Event</span>  
<span style="color: rgb(0,0,0);">FindAlarmResponse</span></td>

<td class="confluenceTd"><span style="color: rgb(0,0,0);">FindAlarm</span></td>

<td class="confluenceTd">This group of events represents creation or lookup of a single alarm.</td>

</tr>

<tr>

<td class="confluenceTd">Emails</td>

<td class="confluenceTd">_(not used)_</td>

<td class="confluenceTd">SendEmail  

</td>

<td class="confluenceTd">This group of events represents sending of an email.</td>

</tr>

<tr>

<td class="confluenceTd">SMS</td>

<td class="confluenceTd">_(not used)_</td>

<td class="confluenceTd">SendSMS</td>

<td class="confluenceTd">This group of events represents sending of an SMS.</td>

</tr>

<tr>

<td class="confluenceTd">Text-to-speech</td>

<td class="confluenceTd">_(not used)_</td>

<td class="confluenceTd">SendSpeech</td>

<td class="confluenceTd">This group of events represents initializing of a phone call.</td>

</tr>

<tr>

<td colspan="1" class="confluenceTd">HTTP REST using JSON</td>

<td colspan="1" class="confluenceTd">Response</td>

<td colspan="1" class="confluenceTd">HttpTransport, Request</td>

<td colspan="1" class="confluenceTd">Allows EPL to invoke a REST request on a remote site using JSON.</td>

</tr>

</tbody>

</table>

Look at the data model to see how the events for each stream are structured.

### Sending events to a channel

Sending an event is done by constructing the event, either with `new <type>` followed by assignments to the fields, or with a constructor specifying all of the fields. The `send` statement is then used to send the event to Cumulocity. The `send` statement requires a channel - this is typically the `CHANNEL` constant (CREATE_CHANNEL for Measurement) on the event type.

### Listening to events

You can trigger your EPL by listening to events on channels. You can subscribe to channels with the monitor.subscribe(string name) method. This can be done in the startup of your monitor, or if you only need to receive events some of the time, called as needed, followed by monitor.unsubscribe(). Listen for events using the `on` statement, followed by the event type that you are listening to, open and close parentheses, and `as <identifier>` to name a variable that will hold the event. By default, a listener will fire once; to make it repeat for all events, use the `all` keyword before the event type.

## Filters

Adding filters can be done by specifying one or more fields between the parentheses for a listener. Only top-level fields can be filtered for. Use `if` statements for more complex filtering, or for filtering on sub-properties of events (for example, in dictionaries).

## Example

As an example, we create a statement. It should listen to one event and create a different event type whenever the specified filter applies. As example we want to create an alarm for each temperature measurement that is created.

1.  Listen to the measurement type - filtering on the measurementType having the value "c8y_TemperatureMeasurement".
2.  Create the event using the constructor specifying all of the fields.
3.  Send the event to the correct channel - Event.CHANNEL.

The resulting monitor can look like this:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="43ebc4a8-75c5-4dc4-bd3d-15457e3ecb85" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>monitor ForwardMeasurements {
	action onload() {
		on all Measurement(type = "c8y_TemperatureMeasurement") as m {
			send Alarm("", "c8y_TemperatureAlarm", m.source, m.time,
				"Temperature measurement was created", "ACTIVE", "CRITICAL", 1, new dictionary&#60;string,any>) to Event.CHANNEL;
		}
	}
}</pre>

</td>

</tr>

</tbody>

</table>