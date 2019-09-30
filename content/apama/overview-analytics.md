---
weight: 10
title: Overview
layout: bundle
aliases:
  - "/apama/introduction"
  - "/analytics/overview"
---
Using Apama streaming analytics, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. These user-defined operations can for example alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

The operation logic is based on Apama's Event Processing Language (EPL).

>**Important**: Support for streaming analytics using CEL (Esper) is  deprecated. All new Cumulocity subscriptions use the Apama CEP engine. While using the Esper CEP engine is still supported for older installations, this will no longer be provided for new subscriptions and will not be invested into in the future. 
>
>For documentation on the deprecated CEL functionality based on Esper, refer to the [CEL analytics guide](/guides/event-language/introduction).
>
>For details on migration, see [Migrating from CEL (Esper) to Apama](#migrate-from-esper).


Typical real-time analytics use cases include:

* Remote control: Turn a device off if its temperature rises over 40 degrees.
* Validation: Discard negative meter readings or meter readings that are lower than the previous.
* Derived data: Calculate the volume of sales transactions per vending machine per day.
* Aggregation: Sum up the sales of vending machines for a customer per day.
* Notifications: Send me an email if there's a power outage in one of my machines.
* Compression: Store location updates of all cars only once every five minutes (but still send real-time data for the car that I am looking at to the user interface).

In the following sections, we describe the basics for understanding how the Apama Event Processing Language (EPL) works and how you can create your own analytics or other server-side business logic and automation.

>**Info**: This documentation assumes basic familiarity with Apama application development. Refer to the [Apama documentation](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3-1/apama10-3-1/apama-webhelp/) for further details.

### CEP applications

The CEP installation is based on a per-tenant isolation scope, i.e. each subscribed tenant has an own instance of CEP container with dedicated resources (i.e. memory and CPU usage). The container is isolated from other tenants, hence high CPU load or memory issues on other containers do not have any impact on the own one.

You can either use predefined rules or define your own custom rules which requires the following applications:

|CEP rules|required applications
|:---|:---
|Pre-defined rules| "smartrule" (included in Cumulocity Standard Tenant) and "apama-ctrl"
|Custom rules|"apama-ctrl" and "apama-epl"

### <a name="migrate-from-esper"></a>Migrating from CEL (Esper) to Apama

To migrate from CEL (Esper) to Apama in Cumulocity, follow these guidelines:

1. Lock down the CEP custom rules on the existing tenant to prevent change.
2. Make available a new tenant on which Apama has been enabled.
3. Manually convert all CEP custom rules from the existing tenant into equivalent Apama EPL applications on the new tenant.
4. Manually recreate all Smart Rules from the existing tenant on the new tenant.
5. Manually recreate any scheduled exports from the existing tenant on the new tenant.
6. Remove the existing tenant after all CEP custom rules, Smart Rules and scheduled exports have been moved to or recreated on the new tenant.

You can also choose to work with Software AG Professional Services to help ensure the migration is as smooth as possible. Software AG Professional Services can help migrate CEL code into Apama EPL code and they can also provide training on using Apama in Cumulocity.

