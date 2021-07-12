---
weight: 10
title: What is real-time processing in our platform?
layout: redirect
---

On top of {{< product-name-1 >}} you can use the Apama streaming analytics engine to define business operations for immediate processing of incoming data from devices or other data sources. These user-defined operations can for example alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices. The operation logic is implemented in Apama's Event Processing Language (EPL).

Apama’s Event Processing Language covers statements, which are organized into actions and monitors. Monitor files can be edited directly from within {{< product-name-1 >}} using the Streaming Analytics application. Alternatively, you can install Apama on your local machine and develop your applications with {{< sag-designer >}} - an Eclipse-based development environment. You can deploy your monitor files as Apama applications to {{< product-name-1 >}}, see [Basic functionality](/apama/analytics-introduction/) in the Streaming Analytics guide for more information.

For further information on using Apama's Event Processing Language in {{< product-name-1 >}} refer to [Using Apama Event Processing Language](/concepts/realtime#using-epl) below and to the [Streaming Analytics guide](/apama/overview-analytics/).

>**Important:** Support for streaming analytics using CEL (Esper) has ended. All new {{< product-name-1 >}} subscriptions use the Apama CEP engine. {{< company-name-2 >}} terminated support for using CEL (Esper) in {{< product-name-1 >}} on 31 Dec 2020 following its deprecation in 2018.
>
>For documentation on using the unsupported CEL functionality based on Esper, refer to the [CEL analytics guide](/event-language/introduction).
>
>For details on migration, see [Migrating from CEL (Esper) to Apama](/apama/overview-analytics/#migrate-from-esper) in the Streaming Analytics guide.


### What are the benefits of using real-time processing?

{{< product-name-1 >}}'s real-time processing feature has the following benefits:

- React instantly to events from remote sensors.
- Develop highly interactive IoT applications.
- Run IoT use cases directly inside {{< product-name-1 >}} without software development and leave the hosting and management to {{< product-name-1 >}}.
- Validate, normalize and derive data according to your own business rules across different device makes.
- Trigger automated remote control actions based on events.
- Use powerful, stream-oriented business logic, like time windows and joins.
- Reduce the cost of online tracking devices by preselecting data necessary for long-term storage.
