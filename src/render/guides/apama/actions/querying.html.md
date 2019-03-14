---
order: 20
title: Querying Cumulocity data
layout: redirect
---

To interact with your historical data, you can use one of the following request-response event pairs to look up resources.

Example: To lookup for Alarms, you can send a FindAlarm request event with appropriate query parameters to FindAlarm.CHANNEL channel, in reponse you can expect 0 or more FindAlarmResponse events (depending on the number of resources that match the lookup request) and a FindAlarmResponseAck event on the FindAlarmResponse.CHANNEL channel. Similar functionality is also provided for lookup of ManagedObjects, Events, Measurements and Operations.

|To look up|Request-Response Events|Example|
|:---------|:-----------------|:---------|
|ManagedObject|FindManagedObject <br/>FindManagedObjectResponse <br/>FindManagedObjectResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3/apama10-3/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_managed_objects.html%23)|
|Alarm|FindAlarm <br/>FindAlarmResponse <br/>FindAlarmResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3/apama10-3/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_alarms.html%23)|
|Event|FindEvent <br/>FindEventResponse <br/>FindEventResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3/apama10-3/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_events.html%23)|
|Measurement|FindMeasurement <br/>FindMeasurementResponse <br/>FindMeasurementResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3/apama10-3/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_measurements.html%23)|
|Operation|FindOperation <br/>FindOperationResponse <br/>FindOperationResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3/apama10-3/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_operations.html%23)|