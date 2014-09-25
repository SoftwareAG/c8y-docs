---
order: 31
layout: default
title: Developing Java ME SmartREST clients
---

## Overview

This section gives an overview of how to connect to Cumulocity with the JavaME SmartREST client. This guide focuses on the functionality of the client library only. To get an overview of how to setup JavaME itself and the creation of MIDlets please have a look at our [Hello, Me!](/guides/java/hello-world-me) guide.

The JavaME SmartREST client library is designed to use our low bandwidth SmartREST interface. If you want to use JavaME with our usual JSON API please have a look at our other [JavaME library](/guides/java/hello-world-me#write-the-agent-code).

## Prerequisites

To start developing your agent, you need to

* [Download](https://bitbucket.org/m2m/cumulocity-clients-java/get/tip.zip) our client libraries
* Copy the folder "java-me-smartrest-client/src/main/java/com" into the "src" folder of your project.
* Right-click your project and select "Refresh".

Beside this technical requirements you should check our [SmartREST guide](/guides/rest/smartrest) and the [SmartREST reference](/guides/reference/smartrest) to understand the interface.

## Connecting to Cumulocity

Connections to Cumulocity can be created through implementations of the SmartConnection interface. Our library will already come with the SmartHttpConnection that you can use for sending requests.

	SmartConnection connection = new SmartHttpConnection("http://mypartof.cumulocity.com","myTenant","myUser","myPassword","myXid");

### Device bootstrap

If you don't have credentials for your device you can generate new device credentials. Please have a look at the [Device Intergration](/guides/rest/device-integration#step-0-request-device-credentials) section for how to aquire the neccessary credentials for this process and any further information.

	SmartConnection connection = new SmartHttpConnection("http://mypartof.cumulocity.com","deviceBootstrapTenant","deviceBootstrapUser","deviceBootstrapPassword","myXid");
	String authenticationHeader = connection.bootstrap("myUniqueDeviceId");

Please note that you can use this method to get the credentials only once for the device. The current connection will automatically use the new credentials but you have to store them for using them after a reboot of the device. You can create the connection also with the authentication header.

	SmartConnection connection = new SmartHttpConnection("http://mypartof.cumulocity.com","myAuthenticationHeader","myXid");


### Template registration

After creating a connection with valid credentials your first step should registering the SmarREST templates to Cumulocity. The library will automatically check within the following function if the templates are already registered and only if not send them to the platform.

	String myTemplateString = "...";
	connection.templateRegistration(myTemplateString);

Once the templates are registered your connection is ready to be used to send requests.

## Sending requests and resolving responses
 
### Creating a request

In SmartREST every request is a single comma seperated line that always starts with the message identifier that relates to the template. Both examples will create the same request.

	SmartRequest request1 = new SmartRequestImpl("100,myValue1,myValue2");
	SmartRequest request2 = new SmartRequestImpl(100,"myValue1,myValue2");

### Sending a request

You can use your connection to send the request to Cumulocity.

	SmartResponse response1 = connection.executeRequest(request1);

Every line in the response will be put in a SmartRow that will be hold inside an array of the SmartResponse. Be aware that also if you only send one request, SmartREST can return multiple rows inside the response.

### Sending a request asynchronously

If you don't want to wait for the response you can also send the request asynchronously and resolve the response with the SmartResponseEvaluator interface once it is received.

	SmartResponseEvaluator myEvaluator = new MySmartResponseEvaluatorImpl();
	connection.executeRequestAsync(request2,myEvaluator);

## SmartREST real-time notifications

The library has also a built-in client to make use of the SmartREST real-time notifications. The concept of this functionality is explained in the [SmartREST reference](/guides/reference/smartrest#smartrest-real-time-notifications). To get an overview of the available endpoints and channels offering real-time notifications please have a look the section for [Real-time notifications](/guides/reference/real-time-notifications).

### Example: Listen to operations

Using library to listen to SmartREST real-time notifications will always be done in a separate thread. Therefor the responses have to be evaluated by a SmartResponseEvaluator. The URL for receiving device operations is "/devicecontrol/notifications" and the channel contains the id of the agent that wants to receive its operations.

	
	SmartCometClient client = new SmartCometClient(connection, myEvaluator);
	client.startListenTo("/devicecontrol/notifications", new String[]{"/12345"});

You can listen to multiple channels of an endpoint using the same long-polling connection. The "startListenTo" function will execute all steps explained in the [SmartREST reference](/guides/reference/smartrest#smartrest-real-time-notifications) with the long-polling as its last step. To stop the long-polling you can call:

	client.stopListenTo();

