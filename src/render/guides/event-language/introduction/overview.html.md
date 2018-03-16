---
order: 10
title: Overview
layout: redirect
---

Using the Cumulocity real-time event processing, you can add your own logic to your IoT solution. This includes data analytics logic but it is not limited to it. To define new analytics, you can use the Cumulocity Event Language. The language allows analyzing incoming data. It is using a powerful pattern and time window based query language. You can create, update and delete your data in real-time.


Typical real-time analytics use cases include:

* Remote control: Turn a device off if it's temperature rises over 40 degrees.
* Validation: Discard negative meter readings or meter readings that are lower than the previous.
* Derived data: Calculate the volume of sales transactions per vending machine per day.
* Aggregation: Sum up the sales of vending machines for a customer per day.
* Notifications: Send me an email if there's a power outage in one of my machines.
* Compression: Store location updates of all cars only once every five minutes (but still send real-time data for the car that I am looking at to the user interface).

In the following sections, we describe the basics for understanding how the Cumulocity Event Language works and how you can create your own analytics or other server-side business logic and automation.
