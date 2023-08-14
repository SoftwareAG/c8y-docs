---
weight: 60
title: Sensor library
layout: redirect
---

{{< product-c8y-iot >}} includes a sensor library to model specific sensing and controlling skills across device products. A single device can have many sensor and control characteristics. The sensor library enables applications to answer questions such as:

-   What devices are installed that measure energy?
-   What are the energy readings?
-   Does a particular energy meter also include a switch for the power supply that I can switch off?

It covers basic sensors and controls, and it is supported by the {{< product-c8y-iot >}} client libraries. It also enables writing powerful generic IoT software plugins.

Technically, the sensor library defines standard fragments for inventory, measurements, events and device control, following the naming convention (see [Inventory](#inventory)). The example below shows two fragments used for an electricity meter:

```json
{
    "id" : "121",
    "type" : "com_kamstrup_382",
    "c8y_SinglePhaseElectricityMeasurement": {},
    "c8y_Relay": {
        "state": "OPEN"
    }
}
```

The {{< company-c8y >}} team welcomes contributions to the sensor library. If you integrate any devices, controls, sensors or other objects and find that your model fragments have a more general usability beyond your own case or your device, we encourage you to contribute them for inclusion into {{< product-c8y-iot >}} by contacting our [product support](/welcome/contacting-support/).
