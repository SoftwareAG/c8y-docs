---
order: 60
layout: redirect
title: SmartREST real-time notifications
---

The library has also a built-in client to make use of the SmartREST real-time notifications. The concept of this functionality is explained in the [SmartREST reference](/guides/reference/smartrest#smartrest-real-time-notifications). To get an overview of the available endpoints and channels offering real-time notifications please have a look the section for [Real-time notifications](/guides/reference/real-time-notifications).

### Example: Listen to operations

Using library to listen to SmartREST real-time notifications will always be done in a separate thread. Therefor the responses have to be evaluated by a SmartResponseEvaluator. The URL for receiving device operations is "/devicecontrol/notifications" and the channel contains the id of the agent that wants to receive its operations.

	
	SmartCometClient client = new SmartCometClient(connection, myEvaluator);
	client.startListenTo("/devicecontrol/notifications", new String[]{"/12345"});

You can listen to multiple channels of an endpoint using the same long-polling connection. The "startListenTo" function will execute all steps explained in the [SmartREST reference](/guides/reference/smartrest#smartrest-real-time-notifications) with the long-polling as its last step. To stop the long-polling you can call:

	client.stopListenTo();