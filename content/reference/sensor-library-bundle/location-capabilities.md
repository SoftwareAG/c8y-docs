---
weight: 30
title: Location Capabilities
layout: redirect
---

### Position

*c8y\_Position* reports the geographical location of an asset in terms of latitude, longitude and altitude. Altitude is given in meters. To report the current location of an asset or a device, "c8y\_Position" is added to the managed object representing the asset or device. To trace the position of an asset or a device, "c8y\_Position" is sent as part of an event of type "c8y\_LocationUpdate".

    "c8y_Position": {
      "alt": 67,
      "lng": 6.15173,
      "lat": 51.211977,
      "trackingProtocol" : "TELIC",
      "reportReason" : "Time Event"
    }

Properties "trackingProtocol" and "reportReason" are used by tracker agent and describes tracking context of positioning report: why the report was sent and in which protocol.
