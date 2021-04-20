---
weight: 40
title: Device reports
layout: redirect
---

#### c8y\_Battery

*c8y\_Battery* shows the current battery fill level. It is used as part of a measurement.

    "c8y_Battery": {
      "level": { "value": 23, "unit": "%" }
    }

#### c8y\_SignalStrength

*c8y\_SignalStrength* provides information on the GSM reception of the modem. It is used as part of a measurement and contains two readings: *rssi* and *ber*. "rssi" is the received signal strength in dBm, ranging from -113 dBm (worst) to -51 dBm (best). "ber" is the bit error rate in %.

    "c8y_SignalStrength": {
      "rssi": { "value": -53, "unit": "dBm" },
      "ber": { "value": 0.14, "unit": "%" }
    }

![Signal strength report](/images/reference-guide/signalstrength.png)
