---
weight: 30
title: Location capabilities
layout: redirect
---

### c8y\_Position

`c8y_Position` reports the geographical location of an asset in terms of latitude, longitude and altitude. Altitude is given in meters. To report the current location of an asset or a device, `c8y_Position` is added to the managed object representing the asset or device. To trace the position of an asset or a device, `c8y_Position` is sent as part of an event of type `c8y_LocationUpdate`.

```json
"c8y_Position": {
  "alt": 67,
  "lng": 6.15173,
  "lat": 51.211977,
  "trackingProtocol" : "TELIC",
  "reportReason" : "Time Event"
}
```

The properties `trackingProtocol` and `reportReason` are used by a tracker agent and describe the tracking context of a positioning report: why the report was sent and in which protocol.

{{< c8y-admon-info >}}
Sending the `c8y_LocationUpdate` event does not update the location fragment on the managed object as opposed to [SmartREST template 402](/device-sdk/mqtt/#402) which does both.
{{< /c8y-admon-info >}}
