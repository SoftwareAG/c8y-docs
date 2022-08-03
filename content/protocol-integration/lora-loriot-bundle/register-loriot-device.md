---
weight: 30
title: Registering Loriot LoRa devices
layout: redirect
---


While processing the Loriot LoRa device request, the Loriot agent automatically creates the device in the {{< product-c8y-iot >}} platform, if it does not yet exist. This means that the user does not need to register the Loriot LoRa device explicitly.

LORIOT Network Server forwards two types of messages to the Loriot agent: "rx" (uplink message) and "gw" (gateway information).

The Loriot LoRa agent only processes "gw" messages to avoid duplicate measurements or events in {{< product-c8y-iot >}}, because most of the information matches with "gw" message whereas "gw" message also carries
all gateway information.

{{< c8y-admon-info >}}
You must enable the "gw" message option on LORIOT Network Server while connecting to the Loriot LoRa agent, see [Configuring the Loriot agent endpoint credentials](#configure-loriot-credentials).
{{< /c8y-admon-info >}}

In the below Loriot LoRa device message `gws` represents a list of gateways involved in the network.

```
{
    "cmd"  : "gw",
    "EUI"  : "0102030405060708",
    "ts"   : 1470850675433,
    "ack"  : false,
    "fcnt" : 1,
    "port" : 1,
    "data" : "0102AABB",
    "freq" : 868500000,
    "dr"   : "SF12 BW125 4/5",
    "gws"  : [
        {
            "rssi"  : -130,
            "snr"   : 1.2,
            "ts"    : 43424140,
            "gweui" : "1122334455667788.0",
            "lat"   : 47.284687,
            "lon"   :  8.565746
        }
    ]
}

```

The Loriot Lora agent picks `gw` with the oldest timestamp for processing.
The Loriot LoRa agent maps the `rssi` value to the standard {{< product-c8y-iot >}}  SignalStrength object and updates the device managed object with the `lat` and `lon` values.   
