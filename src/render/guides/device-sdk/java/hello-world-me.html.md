---
order: 30
title: Hello, ME!
layout: redirect
---

### Overview

The Cumulocity client library for JavaME is very lightweight and has no dependencies on other software. Its interface is very close to that of the JavaSE client library with the exception of serialization of requests and deserialization of responses into Java objects. Most of the descriptions in the JavaSE section apply to the JavaME client library as well.

The example in this section is run on the emulator contained in the Oracle JavaME SDK. For running the code on a real device, see the section on [Cinterion Java modules](/guides/devices/cinterion). JavaME is also supported on the Raspberry Pi. We use Eclipse for the example, but a similar approach should also work in other development environments.

### Prerequisites

To run the example, you need to

* [Download](http://www.oracle.com/technetwork/java/embedded/javame/javame-sdk/downloads/index.html) the Oracle JavaME SDK. We tested the example with Version 3.4 of the SDK.
* Install the SDK along with the associated Eclipse plugins according to Oracle's [Developer's Guide](http://docs.oracle.com/javame/dev-tools/jme-sdk-3.4/ecl/html/toc.htm).


### Developing the "Hello, world!" agent

To develop the "Hello, world!" agent with the Oracle JavaME SDK and Eclipse, you need to

* Create an IMP-NG MIDlet project in Eclipse. IMP-NG is the JavaME profile used on embedded devices.
* Include the Cumulocity JavaME SmartREST client libraries into your project.
* Write the agent code.
* Run the agent.

#### Creating a MIDlet project

As first step, you need to create and configure a project that can run on a JavaME device or emulator. Such a project is called "MIDlet project" in Eclipse.

1. Click **New** > **Project** and select a "MIDlet Project" to be created.
1. Give it a name, for example, "hello".
1. Click **Add** next to the "Configurations" list.
1. Select "Oracle Java Platform Micro Edition SDK 3.4" (or similar) as SDK and "IMPNGDevice1" as device. Click **OK**.
1. Make sure that "IMPNGDevice1" is marked as "active".
1. Click **Next**.
1. Select "Connected Limited Device Configuration (1.1)" as "Microedition Configuration" and "Information Module Profile (NG)" as "Microedition Profile".
1. Click **Finish**.
1. The application descriptor opens in the "Overview" tab. Switch to the "Application Descriptor" tab. Replace "IMP-NG-2.0" with "IMP-NG" as shown below. Click **Save**. You might get some error displays that you can ignore -- these are known issues with the Eclipse plugin implementation.


	MicroEdition-Profile: IMP-NG


To start developing your agent, you need to:

* [Download](https://bitbucket.org/m2m/cumulocity-clients-java/get/tip.zip) our client libraries.
* Copy the folder "java-me-smartrest-client/src/main/java/com" into the "src" folder of your project.
* Right-click your project and select "Refresh".

Beside this technical requirements you should check our [SmartREST documentation](/guides/rest/smartrest) and the [SmartREST reference](/guides/reference/smartrest) to understand the protocol.

#### Writing the agent code

Finally, you need to create a MIDlet to contain your agent code. A MIDlet is roughly the JavaME equivalent of a "main" class in JavaSE.

1. Right-click your project and select **New** > **Java ME MIDlet**.
1. Specify a package name and a class name for your MIDlet and click **Finish**.
1. Paste the code below into the generated "startApp" method. Replace &lt;&lt;yourUrl&gt;&gt;, &lt;&lt;yourUser&gt;&gt; and &lt;&lt;yourPassword&gt;&gt; with your URL (e.g. "https://myurl.cumulocity.com"), username and password. &lt;&lt;tenantId&gt;&gt; is the first part of your URL (e.g. "myurl" in this case). &lt;&lt;yourXId&gt;&gt; is the XId used in the SmartREST protocol. The code below creates a connection, registeres your template and finally creates a device by using the template.


		String mySmartRestTemplate = "10,100,POST,/inventory/managedObjects/,application/vnd.com.nsn.cumulocity.managedObject+json,application/vnd.com.nsn.cumulocity.managedObject+json,&&,,\"{\"\"name\"\":\"\"&&\"\",\"\"c8y_IsDevice\"\":{}}\"";
		SmartConnection connection = new SmartHttpConnection("<<yourUrl>>","<<tenantId>>","<<yourUser>>","<<yourPassword>>","<<yourXId>>");
		connection.templateRegistration(templateString);
		
		connection.executeRequest(new SmartRequestImpl("100,myDeviceName"));

#### Running the agent

Now you can run your agent by right-clicking the project and selecting **Run as** > **Emulated Java ME MIDlet**. This will launch the emulator, deploy your code to the emulator and run it.


### Connecting to Cumulocity

Connections to Cumulocity can be created through implementations of the SmartConnection interface. Our library will already come with the SmartHttpConnection that you can use for sending requests.

	SmartConnection connection = new SmartHttpConnection("http://mypartof.cumulocity.com","myTenant","myUser","myPassword","myXid");

#### Device bootstrap

If you don't have credentials for your device you can generate new device credentials. Refer to [Device Integration](/guides/rest/device-integration#step-0-request-device-credentials) on how to acquire the necessary credentials for this process and any further information.

	SmartConnection connection = new SmartHttpConnection("http://mypartof.cumulocity.com","deviceBootstrapTenant","deviceBootstrapUser","deviceBootstrapPassword","myXid");
	String authenticationHeader = connection.bootstrap("myUniqueDeviceId");

Note that you can use this method to get the credentials only once for the device. The current connection will automatically use the new credentials but you have to store them for using them after a reboot of the device. You can create the connection also with the authentication header.

	SmartConnection connection = new SmartHttpConnection("http://mypartof.cumulocity.com","myXid","myAuthenticationHeader");


#### Template registration

After creating a connection with valid credentials you should first register the SmartREST templates to Cumulocity. The library will automatically check within the following function if the templates are already registered and only if they are not send them to the platform.

	String myTemplateString = "...";
	connection.templateRegistration(myTemplateString);

Once the templates are registered your connection is ready to be used to send requests.


### Sending requests and resolving responses
 
In the following section you can see how to create and send requests.
 
#### Creating a request

In SmartREST every request is a single comma-separated line that always starts with the message identifier that relates to the template. Both examples will create the same request.

	SmartRequest request1 = new SmartRequestImpl("100,myValue1,myValue2");
	SmartRequest request2 = new SmartRequestImpl(100,"myValue1,myValue2");

#### Sending a request

You can use your connection to send the request to Cumulocity.

	SmartResponse response1 = connection.executeRequest(request1);

Every line in the response is put in a SmartRow that is held inside an array of the SmartResponse. Be aware that even if you only send one request, SmartREST can return multiple rows inside the response.

#### Sending a request asynchronously

If you don't want to wait for the response you can also send the request asynchronously and resolve the response with the SmartResponseEvaluator interface once it is received.

	SmartResponseEvaluator myEvaluator = new MySmartResponseEvaluatorImpl();
	connection.executeRequestAsync(request2,myEvaluator);


### SmartREST real-time notifications

The library also has a built-in client to make use of the SmartREST real-time notifications. 

The concept of this functionality is explained in the [SmartREST reference](/guides/reference/smartrest#smartrest-real-time-notifications). To get an overview of the available endpoints and channels offering real-time notifications refer to [Real-time notifications](/guides/reference/real-time-notifications).

#### Example: Listen to operations

Using library to listen to SmartREST real-time notifications will always be done in a separate thread. Therefor the responses have to be evaluated by a SmartResponseEvaluator. The URL for receiving device operations is "/devicecontrol/notifications" and the channel contains the id of the agent that wants to receive its operations.
	
	SmartCometClient client = new SmartCometClient(connection, myEvaluator);
	client.startListenTo("/devicecontrol/notifications", new String[]{"/12345"});

You can listen to multiple channels of an endpoint using the same long-polling connection. The "startListenTo" function will execute all steps explained in the [SmartREST reference](/guides/reference/smartrest#smartrest-real-time-notifications) with the long-polling as its last step. To stop the long-polling you can call:

	client.stopListenTo();
