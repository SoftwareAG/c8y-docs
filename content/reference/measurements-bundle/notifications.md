---
weight: 70
title: Notifications
layout: redirect
---

The measurement notification API permits to receive updates for all measurements for a specific device.
The basic protocol for receiving notifications is described in [Real-time notifications](/reference/real-time-notifications). The URL is

```http
/notification/realtime
```
The subscription channel needs to contain the managed object ID of the device or an asterisk (*) as placeholder to receive notifications for the measurements of all devices.

```http
/measurements/<<deviceId>>
```

In addition to the measurement object, the response will contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the ID of the deleted measurement.

**Required role:** ROLE\_MEASUREMENT\_READ

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/json

```http
HTTP/1.1
200 OK

[
  {
    "channel": "/measurement/12345",
    "successful": true,
    "error": "",
    "data": [{
      "realtimeAction": "CREATE",
      "data": {
        "id": "1",
        "self": "...",
        "source": {
          "12345"
        },
        "creationTime": "2011-09-06T12:03:27.927+02:00",
        "c8y_TemperatureMeasurement": {
          "T": {
            "value": 25,
            "unit": "C"
          }
        },
        "time":"2011-09-06T12:03:17.927+02:00",
        "type": "TemperatureMeasurement"
      }
    }],
    "clientId": "Un1q31d3nt1f13r"
  }
]
```
