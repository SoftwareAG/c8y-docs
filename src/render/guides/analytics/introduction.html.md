---
order: 10
title: Overview
layout: standalone
---

Within Cumulocity IoT you can use the Apama streaming analytics engine to define business operations for immediate processing of incoming data from devices or other data sources. These user-defined operations can for example alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices. 

The operation logic is implemented in Apama's Event Processing Language (EPL). 

Apama's Event Processing Language covers _statements_, which are organized into actions and monitors. These can be deployed one file at a time, where a file may contain multiple monitors and event definitions. Monitor files can be edited with Software AG Designer - an Eclipse-based development environment, and can be deployed as Cumulocity applications, see [Administration > Own applications](/guides/users-guide/administration/#managing-applications) in the User guide.


>**Info**: Using the Esper CEP engine is still supported but it is recommended to use the Apama CEP engine as this will be invested into in the future. 

For further information on using the Esper CEP engine refer to

 [Using Cumulocity Event Language](/guides/concepts/realtime#using-cel) below and to the [CEL Analytics guide](/guides/event-language/introduction).


!
### CEP variants in Cumulocity


Below find an overview on the currently available CEP variants in Cumulocity:

|Isolation Scope|Description|CEP Rules|Esper CEP engine|Apama CEP engine|
|:---|:---|:---|:---|:---|
|Multi-tenant (shared)| Provides access to a shared instance of CEP container, i.e. all subscribed tenants share the resources of the same CEP instance.|pre-defined rules|required applications= "cep" and "smartrule", both included in Cumulocity Standard Edition |n/a 
|||+ custom rules|n/a|n/a|
|Per-tenant| Each subscribed tenant has an own instance of CEP container with dedicated resources (i.e. memory and CPU usage). The container is isolated from other tenants, hence high CPU load or memory issues on other containers do not have any impact on the own one.|pre-defined rules|required application= "cep-small" (optional) and "smartrule" (included)|required application= "apama-small" (optional) and "smartrule" (included)|
|||+ custom rules|required application= "feature-cep-custom-rules" (optional); if enabled tenant gains access  to "Event processing" section in the Administration application |required application= none; included in "apama-small"


### What are the benefits of using real-time processing?

Cumulocity's real-time processing feature has the following benefits:

-   React instantly to events from remote sensors.
-   Develop highly interactive IoT applications.
-   Run IoT use cases directly inside Cumulocity without software development and leave the hosting and management to Cumulocity.
-   Validate, normalize and derive data according to your own business rules across different device makes.
-   Trigger automated remote control actions based on events.
-   Use powerful, stream-oriented business logic, like time windows and joins.
-   Reduce the cost of online tracking devices by preselecting data necessary for long-term storage.
