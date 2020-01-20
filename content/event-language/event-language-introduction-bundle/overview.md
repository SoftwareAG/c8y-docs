---
weight: 15
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

### CEP application variants

In Cumulocity, there are two deployment scenarios for using CEP rules:

* MULTI_TENANT: This scope provides access to a shared instance of CEP container. All subscribed tenants share the resources of the same CEP instance. It is available if you are subscribed to the "Cep" application, a built-in application which comes with Cumulocity.

* PER_TENANT: Each subscribed tenant has at least one own instance of CEP container. The container is isolated from other tenants, hence high CPU load or memory issues on other containers do not have any impact on the own one. This feature is available with the application "Cep-small" which is an optional service. Also, you need to be subscribed to the application" Feature-cep-custom-rules" to be able to upload your own CEP rules.

For details on application subscription refer to Administration > Managing tenants > [Subscribing to applications](/users-guide/enterprise-edition#subscribe) in the User guide.

