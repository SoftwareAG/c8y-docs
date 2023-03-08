---
weight: 20
title: Querying Cumulocity IoT data
layout: redirect
---

To interact with your historical data, you can use one of the following request-response event pairs to look up resources.

Example: To look up alarms, you can send a `com.apama.cumulocity.FindAlarm` request event with appropriate query parameters to the `FindAlarm.SEND_CHANNEL` channel. 
In response, you can expect 0 or more `com.apama.cumulocity.FindAlarmResponse` events (depending on the number of resources that match the lookup request) 
and a `com.apama.cumulocity.FindAlarmResponseAck` event on the `FindAlarmResponse.SUBSCRIBE_CHANNEL` channel. 
Similar functionality is also provided for looking up managed objects, events, measurements and operations.

The events listed in the following table are part of the `com.apama.cumulocity` package.

|To look up|Request-Response Events|Example|
|:---------|:-----------------|:---------|
|ManagedObject|FindManagedObject <br/>FindManagedObjectResponse <br/>FindManagedObjectResponseAck|[Example]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_managed_objects.html)|
|Alarm|FindAlarm <br/>FindAlarmResponse <br/>FindAlarmResponseAck|[Example]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_alarms.html)|
|Event|FindEvent <br/>FindEventResponse <br/>FindEventResponseAck|[Example]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_events.html)|
|Measurement|FindMeasurement <br/>FindMeasurementResponse <br/>FindMeasurementResponseAck|[Example]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_measurements.html)|
|Operation|FindOperation <br/>FindOperationResponse <br/>FindOperationResponseAck|[Example]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_querying_for_operations.html)|
|CurrentUser|CurrentUser <br/>GetCurrentUser <br/>GetCurrentUserResponse|[Example]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_getting_user_details.html)|
|TenantOption|TenantOption <br/>FindTenantOptions  <br/>FindTenantOptionsResponse|[Documentation]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_finding_tenant_options.html)|
