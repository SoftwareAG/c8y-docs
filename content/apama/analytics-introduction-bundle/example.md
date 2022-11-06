---
weight: 40
title: Example
layout: redirect
---

This example listens for new measurements using the `com.apama.cumulocity.MeasurementFragment` API. It filters incoming measurements to find speed values above a given maximum speed and raises an alarm if the limit is breached. 

1. Subscribe to the `MeasurementFragment.SUBSCRIBE_CHANNEL` channel.
2. Listen to the measurement fragment and filter on `type`, which is  `c8y_SpeedMeasurement`. Ensure that `valueFragment` has the value  `c8y_speed` and that `valuesSeries` filters on `speedX` only. Also  filter on `value` when it is greater than `SPEED_LIMIT`.
3. Create the event using the constructor specifying all of the fields.
4. Send the event to the correct channel - `Alarm.SEND_CHANNEL`.

The resulting \*.mon file can look like this:

```java
using com.apama.cumulocity.Alarm;
using com.apama.cumulocity.MeasurementFragment;
 
monitor TriggerAlarmForSpeedBreach {
    constant float SPEED_LIMIT := 30.0;
    action onload() {
        monitor.subscribe(MeasurementFragment.SUBSCRIBE_CHANNEL);
        // Everytime a measurement fragment with the specific details of the match criteria is triggered then we should raise an alarm
        on all MeasurementFragment(type="c8y_SpeedMeasurement", valueFragment = "c8y_speed", valueSeries = "speedX", value > SPEED_LIMIT) as mf {
            send Alarm("", "c8y_SpeedAlarm", mf.source, currentTime,
                        "Speed limit breached", "ACTIVE", "CRITICAL", 1,
                        new dictionary<string,any>) to Alarm.SEND_CHANNEL;
        }
    }
}
```

