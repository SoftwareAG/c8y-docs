---
order: 50
layout: redirect
title: Sending requests and resolving responses
---
 
 In the following section you can see how to create and send requests.
 
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
