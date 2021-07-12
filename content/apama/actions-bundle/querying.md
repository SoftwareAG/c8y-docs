---
weight: 20
title: Querying var-product-c8y-iot data
layout: redirect
---

To interact with your historical data, you can use one of the following request-response event pairs to look up resources.

Example: To look up alarms, you can send a FindAlarm request event with appropriate query parameters to the FindAlarm.SEND_CHANNEL channel. In response, you can expect 0 or more FindAlarmResponse events (depending on the number of resources that match the lookup request) and a FindAlarmResponseAck event on the FindAlarmResponse.SUBSCRIBE_CHANNEL channel. Similar functionality is also provided for looking up managed objects, events, measurements and operations.

|To look up|Request-Response Events|Example|
|:---------|:-----------------|:---------|
|ManagedObject|FindManagedObject <br/>FindManagedObjectResponse <br/>FindManagedObjectResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_managed_objects.html)|
|Alarm|FindAlarm <br/>FindAlarmResponse <br/>FindAlarmResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_alarms.html)|
|Event|FindEvent <br/>FindEventResponse <br/>FindEventResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_events.html)|
|Measurement|FindMeasurement <br/>FindMeasurementResponse <br/>FindMeasurementResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_measurements.html)|
|Operation|FindOperation <br/>FindOperationResponse <br/>FindOperationResponseAck|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_operations.html)|
|CurrentUser|CurrentUser <br/>GetCurrentUser <br/>GetCurrentUserResponse|[Example](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_getting_user_details.html)|
|TenantOption|TenantOption <br/>FindTenantOptions  <br/>FindTenantOptionsResponse|[Documentation](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_finding_tenant_options.html)|
