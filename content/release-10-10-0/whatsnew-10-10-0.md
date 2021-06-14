---
weight: 10
title: What´s new
layout: bundle
---


Release 10.10.0 includes the following new features or major feature enhancements.

### New microservice-based data Broker

A new microservice-based implementation of the data broker has been added. The new data broker is functionally equivalent to the existing data broker, but powered by the new Cumulocity IoT Messaging Service that enables reliable, scalable and high-performance flow of IoT data within the platform. The original data broker will continue to operate alongside the microservice-based data broker for the time being. Users can choose which data broker to use on a per-tenant basis.

At this time the microservice-based data broker is only available in the eu-latest.cumulocity.com public cloud environment. It can also be made available by request in private cloud environments. Contact [product support](/releasenotes/about/contacting-support/) to inquire about using the new data broker in your Cumulocity IoT environment.

### Telefonica Kite platform connectivity

The Cumulocity IoT connectivity functionality has been integrated with the Telefonica Kite platform. This allows monitoring and management of Telefonica SIMs used to connect devices. The new Kite provider can be selected and configured in an improved SIM provider settings UI.

![SIM provider settings](/images/release-notes/sim-provider-settings.png)

### Audit logs enhancements

The audit logs functionality has been extended. Audit logs now also include:

<li>Information on user logins through the UI for both OAuth Internal and single sign-on logins
<li>Password changes to local platform users, including the user whose password has changed and the user who initiated the password change

See also the [Audits](https://www.cumulocity.com/api/#tag/Audits) section in the <i>Cumulocity IoT OpenAPI Specification</i>.
