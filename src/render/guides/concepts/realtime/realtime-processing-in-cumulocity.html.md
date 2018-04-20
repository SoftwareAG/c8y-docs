---
order: 10
title: What is real-time processing in Cumulocity?
layout: redirect
---

Cumulocity has a real-time engine receiving all data coming from devices or other data sources for immediate processing by user-defined business operations. These user-defined operations can alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), trigger operations on devices or send email. This operation logic is implemented in *Cumulocity Event Language*, a high-level domain-specific language designed for IoT real-time data.

Cumulocity Event Language covers *statements* which are grouped into units of deployment, called *modules*. Modules can be deployed as part of a Cumulocity application. They can be edited with the Cumulocity administration application, see [Administration > Event processing](/guides/users-guide/administration/business-rules#event-processing) in the User's Guide. 

For further information on using Cumulocity Event Language refer to [Using Cumulocity Event Language](/guides/concepts/realtime#using-cel) below and to the [CEL Analytics Guide](/guides/event-language/introduction).

In addition to using the Cumulocity Event Language, Cumulocity provides the option to use the Apama real-time processing engine to define business operations for immediate processing of incoming data. The operation logic is implemented in Apama's Event Processing Language (EPL). 

Apama's Event Processing Language covers _statements_, which are organized into actions and monitors. These can be deployed one file at a time, where a file may contain multiple monitors and event definitions. Monitor files can be edited with Software AG Designer - an Eclipse-based development environment, and can be deployed as Cumulocity applications, see [Administration > Own applications](/guides/users-guide/administration/managing-applications) in the User's Guide. 

For further information on using Apama's Event Processing Language refer to [Using Apama Event Processing Language](/guides/concepts/realtime#using-epl) below and to the [Apama Analytics Guide](/guides/apama/introduction).

![CEP architecture](/guides/images/concepts-guide/realtime.png)

The image above also illustrates another feature of Cumulocity: The possibility to send data exclusively for real-time processing. Data marked as "temporary" is not stored into Cumulocity's database but just handled by the real-time engine. This saves on storage and processing cost for example when tracking devices in real-time without requiring data to be stored.

For more information about the interfaces for real-time processing also see [Real-time Statements](/guides/reference/real-time-statements) in the Reference Guide.

### CEP variants in Cumulocity


Below find an overview on the currently available CEP variants in Cumulocity:

|Isolation Scope|Description|CEP Rules|Esper CEP engine|Apama CEP engine|
|:---|:---|:---|:---|:---|
|Multi-tenant (shared)| Provides access to a shared instance of CEP container, i.e. all subscribed tenants share the resources of the same CEP instance.|smart rules|required applications= "cep" and "smartrule", both included in Cumulocity Standard Edition |n/a 
|||+ custom rules|n/a|n/a|
|Per-tenant| Each subscribed tenant has at least one own instance of CEP container. The container is isolated from other tenants, hence high CPU load or memory issues on other containers do not have any impact on the own one.|smart rules|required application= "cep-small" (optional) and "smartrule" (included)|required application= "apama-small" (optional) and "smartrule" (included)|
|||+ custom rules|required application= "feature-cep-custom-rules" (optional)|required application= none; included in "apama-small"



### What are the benefits of using real-time processing?

Cumulocity's real-time processing feature has the following benefits:

-   React instantly to events from remote sensors.
-   Develop highly interactive IoT applications.
-   Run IoT use cases directly inside Cumulocity without software development and leave the hosting and management to Cumulocity.
-   Validate, normalize and derive data according to your own business rules across different device makes.
-   Trigger automated remote control actions based on events.
-   Use powerful, stream-oriented business logic, like time windows and joins.
-   Reduce the cost of online tracking devices by preselecting data necessary for long-term storage.
