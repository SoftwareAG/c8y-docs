---
weight: 10
title: Streaming analytics and Cumulocity IoT
layout: redirect
---

Devices and sensors can be connected to {{< product-c8y-iot >}}. See [Interfacing devices](/concepts/interfacing-devices/) in the *Concepts guide* and [Device integration using MQTT](/device-integration/mqtt/) in the *Device Integration* guide.

Sensors result in `Measurement` or `Event` objects in {{< product-c8y-iot >}}, and devices can receive `Operation` objects created within the {{< product-c8y-iot >}} platform. All of these objects \(`Measurement`, `Event`, `Operation`\) will be associated with a single device in the {{< product-c8y-iot >}} platform. A device may have multiple types of measurement associated with it, and the types of measurements each device supports may be the same as other devices or different to other devices. Once devices are connected to {{< product-c8y-iot >}}, information about these devices is stored in the {{< product-c8y-iot >}} inventory. These are visible in the Device management application, which can also be used to view `Measurement`, `Event` or `Operation` objects associated with that device. See [Device management](/users-guide/device-management/) in the *User guide* for more information.

The {{< product-c8y-iot >}} platform includes an Apama correlator component, which is managed by the {{< product-c8y-iot >}} platform \(this is not manually started or stopped\) and is preconfigured to communicate to {{< product-c8y-iot >}}. This correlator hosts the Analytics Builder runtime, and also executes any custom Apama rules added using EPL apps.

Analytics Builder allows you to create models that interact with the devices and sensor measurements. Models can receive `Measurement` and `Event` objects from devices, which provide the inputs to calculations or pattern detection performed within a model. Models can create new `Measurement` objects which can represent derived values from sensors \(for example, an average temperature\) or the measurements can be used as an input to other analytic models \(see [Connections between models](/streaming-analytics/analytics-builder/#connections-between-models)\). Models can create new `Operation` objects which are sent to devices to control the devices \(for example, to sound an alarm bell, display a message on a screen, or switch a device off\). The models are also stored in the {{< product-c8y-iot >}} inventory, but can be imported or exported via the model manager.

Business logic can also be written in Apama’s Event Processing Language \(Apama EPL\) which gives more power and flexibility in a text-based programming language. This is an alternative if more complex logic is required or the logic does not fit into the pattern of an analytic model. EPL apps can be written directly in the Streaming Analytics application. See [EPL Apps](/streaming-analytics/epl-apps/) for more information, including examples. Alternatively, it is also possible to build custom blocks if none of the blocks delivered with Analytics Builder implement the logic required; see [Creating your own blocks](/streaming-analytics/analytics-builder/#creating-your-own-blocks).

The Streaming Analytics application can be used with both {{< product-c8y-iot >}} Core \(cloud\) and {{< product-c8y-iot >}} Edge \(local installation\).

You can customize several aspects of Analytics Builder by setting various tenant options. See [Configuration](/streaming-analytics/analytics-builder/#configuration) for detailed information.
