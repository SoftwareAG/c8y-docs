---
weight: 40
title: Registering LoRa devices
layout: redirect
---


To register a LoRa device, User don't have to register the Loriot LoRa device explicitly from Cumulocity because the Loriot agent 
automatically creates the device in Cumulocity if not exists while processing the Loriot LoRa device request.

LORIOT Network Server Provider forwards two types of messages `rx` and `gw` to the Loriot agent.
Loriot LoRa agent process only `gw` messages to avoid duplicate measurements or events with in Cumulocity because most of the information matches with `gw` message whereas `gw` message also carries
all gateways information. 
It is mandatory to enable the `gw` message option on LORIOT Network Server Provider while connecting to  Loriot LoRa agent because it will process only 'gw' messages.

Sample Loriot LoRa device message. In the below message `gws` represents list of gateways involved in the network. 

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

Loriot Lora agent picks `gw` with the oldest timestamp for processing.
Loriot LoRa agent maps the `rssi` value to the standard Cumulocity SignalStrength Object and updates the device managed object with `lat` and `lon` values.   
