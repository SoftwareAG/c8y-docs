---
order: 15
title: Basics
layout: standalone
---

### Deploying EPL

You can use [Software AG Designer](http://www.apamacommunity.com/downloads/) to develop your applications. 

Create an Apama project in Software AG Designer and enable it for Cumulocity connectivity. For further information on that refer to [The Cumulocity IoT Transport Connectivity Plug-in](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3/apama10-3/apama-webhelp/#page/apama-webhelp%2Fco-ConApaAppToExtCom_the_cumulocity_connectivity_plug_in.html%23) in the Apama documentation.

You will need to provide your Cumulocity credentials in the project configuration. Configure the credentials in the `CumulocityIoT.properties` file under the Cumulocity client as follows:

```
CUMULOCITY_USERNAME=user@example.com
CUMULOCITY_TENANT=exampleTenant
CUMULOCITY_PASSWORD=examplePassword
CUMULOCITY_APPKEY=apamaAppKey

```

>**Info:** You need to [create an application](/guides/users-guide/administration#managing-applications) in Cumulocity to get a value for CUMULOCITY_APPKEY.

Develop and test your EPL in Software AG Designer.

#### Deploying Apama applications to Cumulocity

To be able to upload custom EPL rules as applications to Cumulocity you need to be subscribed to one of the Apama applications provided in Cumulocity, see also the list of available [applications](/guides/reference/applications#application-names) in the Reference guide. 

##### Deploying Apama applications as a single .mon file

When you are ready to deploy to Cumulocity, upload the .mon file containing your application through the **Own applications** page in the Administration application. For details, refer to [Administration > Managing applications](/guides/users-guide/administration#managing-applications). 

When the EPL is deployed to Cumulocity, each .mon file is assigned a unique package name. This prevents conflicts when multiple modules are uploaded. For this reason, you should not specify a 'package' statement in the .mon files. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single .mon file.

The only non-Cumulocity bundles that your EPL is able to use are the Time Format bundles and the HTTP Client - JSON with generic request/response event definitions.

##### Deploying Apama applications as microservices

You may also develop more complex projects which:

* are spread across multiple .mon files
* need to be isolated from other Apama applications
* use connectivity plug-ins or EPL plug-ins that are not enabled by default

These kinds of applications should be deployed as microservice to Cumulocity. 

>**Info**: This only applies if you are using Apama 10.3 or later.

Develop your Cumulocity application in Designer in the usual way (just as shown above). 

Next, you can use Apama's Docker support to turn the entire project into a microservice. In the **Project Explorer** view, right-click the project and select **Apama > Add Docker Support**, which will add a Dockerfile to the root of your project directory. When used for building, it will make use of the Apama images available in the Docker Store. You will need Docker Store credentials that give you access to the Apama images. Apama Docker images are exclusively Linux-based.

Add any custom steps to the Dockerfile that might be necessary e.g. building a custom plug-in, or copying your license file into the image.

Use the Cumulocity microservice utility for packaging and deploying the project, see [Microservice package and deploy](/guides/reference/microservice-package) in the Reference guide. When creating the directory structure for the 'microservice' tool to build from, copy your entire project directory inside that directory with the name "docker/" e.g.

	docker/monitors/
	docker/eventdefinitions/
	docker/Dockerfile
	docker/...
	cumulocity.json


You have to create the [microservice manifest](/guides/reference/microservice-manifest) manually, but there is no need for anything special in the microservice manifest; no roles or probes are required. However, if you want to configure a liveness or readiness probe, you can configure an 'httpGet' probe for the path '/ping' on port 15903 (Apama's default port). Enabling auto-scaling is not recommended, as Apama applications are usually stateful and do not automatically partition their input.

You can pack, deploy and subscribe from this directory, resulting in your Apama application being turned into a running microservice. The behaviour of the application when being run outside of Cumulocity (from Designer or your test environment) will be near-identical to its behaviour inside Cumulocity. As Apama will be using identical Cumulocity configuration in both environments, make sure that the credentials and application key that you are using in your local environment are long-lived.

When you are ready to deploy to Cumulocity, upload the application as a microservice through the **Own applications** page in the Administration application. For details, refer to [Administration > Managing applications](/guides/users-guide/administration#managing-applications). 

### Events and channels

In the Apama Event Processing Language, interactions with the rest of the Cumulocity ecosystem is done via events. A number of event definitions is provided for accessing Cumulocity data.

#### Predefined event types

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

#### Sending events to a channel

Sending an event is done by constructing the event, either with `new <type>` followed by assignments to the fields, or with a constructor specifying all of the fields. The `send` statement is then used to send the event to Cumulocity. The `send` statement requires a channel - this is typically the `CHANNEL` constant (CREATE_CHANNEL for Measurement) on the event type.

#### Listening to events

You can trigger your EPL by listening to events on channels. You can subscribe to channels with the monitor.subscribe(string name) method. This can be done in the startup of your monitor, or if you only need to receive events some of the time, called as needed, followed by monitor.unsubscribe(). Listen for events using the `on` statement, followed by the event type that you are listening to, open and close parentheses, and `as <identifier>` to name a variable that will hold the event. By default, a listener will fire once; to make it repeat for all events, use the `all` keyword before the event type.


### Filters

Adding filters can be done by specifying one or more fields between the parentheses for a listener. Only top-level fields can be filtered for. Use `if` statements for more complex filtering, or for filtering on sub-properties of events (for example, in dictionaries).

### Example

As an example, we create a statement. The statement listens to one event and creates a different event type whenever the specified filter applies. For instance‚ we want to create an alarm for each temperature measurement that is created.

**Info:** In order to create the statement, first you have to create an "EPL Monitor" in your Apama project.

1. Subscribe to Measurement.CHANNEL 
2. Listen to the measurement type - filtering on the type having the value "c8y_TemperatureMeasurement".
3.  Create the event using the constructor specifying all of the fields.
4.  Send the event to the correct channel - Alarm.CHANNEL.

The resulting monitor can look like this:

	using com.apama.cumulocity.Alarm;
	using com.apama.cumulocity.Measurement;
	
	monitor ForwardMeasurements {
		action onload() {
	    	monitor.subscribe(Measurement.CHANNEL);
			on all Measurement(type = "c8y_TemperatureMeasurement") as m {
				send Alarm("", "c8y_TemperatureAlarm", m.source, m.time,
				           "Temperature measurement was created", "ACTIVE", "CRITICAL", 1, new dictionary<string,any>) to Alarm.CHANNEL;
			}
		}
	}
