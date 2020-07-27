---
weight: 40
title: Distinguishing between create and update notifications
layout: redirect
---
You can use the `NOTIFICATION_CREATED` and `NOTIFICATION_UPDATED` values of the `PARAM_NOTIFICATION` constant to distinguish whether a managed object, operation, alarm or event has been created or updated. 

For example, to determine that an event is a new event:

```java
string suffix := ""; 
if e.params[Event.PARAM_NOTIFICATION] = <any> Event.NOTIFICATION_CREATED
   { suffix := " is new"; }

log e.toString() + suffix;
```

See [Receiving update notifications](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_receiving_update_notifications.html) in the Apama documentation for more detailed information, including examples for the different types of objects.