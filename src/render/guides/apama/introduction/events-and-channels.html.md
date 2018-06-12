---
order: 30
title: Events and channels
layout: redirect
---

In the Apama Event Processing Language, interactions with the rest of the Cumulocity ecosystem is done via events. A number of event definitions is provided for accessing Cumulocity data.

### Predefined event types

There are some predefined event types to interact with several Cumulocity APIs. Events are sent to Apama applications automatically when a new measurement, alarm or event is created. For interacting with the Cumulocity backend, you can create an event and send it to the relevant channel. Cumulocity will automatically execute either the database query or create the API calls necessary for sending mails, SMS, or similar.

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

Look at the [data model](http://www.apamacommunity.com/documents/10.2.0.1/apama_10.2.0.1_webhelp/ApamaDoc/com/apama/cumulocity/package-summary.html) to see how the events for each stream are structured.

### Sending events to a channel

Sending an event is done by constructing the event, either with `new <type>` followed by assignments to the fields, or with a constructor specifying all of the fields. The `send` statement is then used to send the event to Cumulocity. The `send` statement requires a channel - this is typically the `CHANNEL` constant (CREATE_CHANNEL for Measurement) on the event type.

### Listening to events

You can trigger your EPL by listening to events on channels. You can subscribe to channels with the monitor.subscribe(string name) method. This can be done in the startup of your monitor, or if you only need to receive events some of the time, called as needed, followed by monitor.unsubscribe(). Listen for events using the `on` statement, followed by the event type that you are listening to, open and close parentheses, and `as <identifier>` to name a variable that will hold the event. By default, a listener will fire once; to make it repeat for all events, use the `all` keyword before the event type.

