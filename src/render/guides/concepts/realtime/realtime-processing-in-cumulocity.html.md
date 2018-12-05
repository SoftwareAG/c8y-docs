---
order: 10
title: What is real-time processing in Cumulocity IoT?
layout: redirect
---

On top of Cumulocity IoT you can use the Apama streaming analytics engine to define business operations for immediate processing of incoming data from devices or other data sources. These user-defined operations can for example alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices. The operation logic is implemented in Apama's Event Processing Language (EPL). 

Apama's Event Processing Language covers _statements_, which are organized into actions and monitors. These can be deployed one file at a time, where a file may contain multiple monitors and event definitions. Monitor files can be edited with Software AG Designer - an Eclipse-based development environment, and can be deployed as Cumulocity applications, see [Administration > Own applications](/guides/users-guide/administration/#managing-applications) in the User guide.

For further information on using Apama's Event Processing Language in Cumulocity IoT refer to [Using Apama Event Processing Language](/guides/concepts/realtime#using-epl) below and to the [Analytics guide](/guides/apama/introduction).

For more information about the interfaces for real-time processing also see [Real-time Statements](/guides/reference/real-time-statements) in the Reference guide.

>**Important**: All new Cumulocity installations use the Apama CEP engine. Using Esper is still supported for older installations but will no longer be provided for new installations and not be invested into in the future. For information on using the deprecated Esper CEP engine refer to the [CEL Analytics guide](/guides/event-language/introduction).

### What are the benefits of using real-time processing?

Cumulocity's real-time processing feature has the following benefits:

-   React instantly to events from remote sensors.
-   Develop highly interactive IoT applications.
-   Run IoT use cases directly inside Cumulocity without software development and leave the hosting and management to Cumulocity.
-   Validate, normalize and derive data according to your own business rules across different device makes.
-   Trigger automated remote control actions based on events.
-   Use powerful, stream-oriented business logic, like time windows and joins.
-   Reduce the cost of online tracking devices by preselecting data necessary for long-term storage.
