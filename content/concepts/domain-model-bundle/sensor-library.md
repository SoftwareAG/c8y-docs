---
weight: 60
title: The sensor library
layout: redirect
---

Cumulocity IoT includes a [sensor library](https://cumulocity.com/api/#section/Sensor-library) to model specific sensing and controlling skills across device products. A single device can have many sensor and control characteristics. The sensor library enables applications to answer questions such as:

-   What devices are installed that measure energy?
-   What are the energy readings?
-   Does a particular energy meter also include a switch for the power supply that I can switch off?

It covers basic sensors and controls, and is supported by the Cumulocity IoT client libraries. It also enables writing powerful generic IoT software plugins.

Technically, the sensor library defines standard fragments for inventory, measurements, events and device control, following the naming convention (see [Inventory](#inventory)). The example below shows two fragments used for an electricity meter:

<pre><code class="json">{
	"id" : "1",
	"type" : "com_kamstrup_382",
	"c8y_SinglePhaseElectricityMeasurement": {},
	"c8y_Relay" : { "state": "OPEN" }
}</code></pre>

To a Java developer, checking the state of a switch in a device "mo" looks like this:

<pre><code class="java">ManagedObject mo = ...;
Relay relay = mo.get(Relay.class);
RelayState state = relay.getRelayState();</code></pre>

To a JavaScript developer, the same check would look like this:

<pre><code class="js">var state = mo.c8y_Relay.relayState</code></pre>

More details can be found in [Sensor library](https://cumulocity.com/api/#section/Sensor-library) in the Cumulocity IoT OpenAPI Specification.

The {{< company-c8y >}} team welcomes contributions to the sensor library. If you integrate any devices, controls, sensors or other objects and find that your model fragments have a more general usability beyond your own case or your device, we encourage you to contribute them for inclusion into Cumulocity IoT by contacting our [product support](/about-doc/contacting-support).
