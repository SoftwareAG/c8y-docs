---
weight: 10
title: Streaming analytics with Apama EPL
layout: bundle
section: 
  - data_analytics
---
Using the Streaming Analytics application, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. These user-defined operations can, for example, alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.

The operation logic is based on Apama's Event Processing Language (Apama EPL).

Typical real-time analytics use cases include:

* Remote control: Turn a device off if its temperature rises over 40 degrees.
* Validation: Discard negative meter readings or meter readings that are lower than the previous.
* Derived data: Calculate the volume of sales transactions per vending machine per day.
* Aggregation: Sum up the sales of vending machines for a customer per day.
* Notifications: Send me an email if there is a power outage in one of my machines.
* Compression: Store location updates of all cars only once every five minutes (but still send real-time data for the car that I am looking at to the user interface).

The following sections describe how you can create your own analytics or other server-side business logic and automation. You can do this using analytic models, EPL apps, and smart rules.

{{< c8y-admon-info >}}
This documentation assumes basic familiarity with Apama application development. Refer to the [Apama documentation]({{< link-apama-webhelp >}}) for further details.
{{< /c8y-admon-info >}}
