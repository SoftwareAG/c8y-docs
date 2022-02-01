---
title: Troubleshooting
weight: 50
---

### Local logs

You may check the agent log file stored locally in your router when you face any issues.</br> The log file is located in `/opt/ntcagent/ntcagent.log` by default.<br> Also, you may increase the **Log level** in the web [user interface](#configure) of the router. The log level is configured from 1 (min - error) to 8 (max - debug).

### Known limitations and bugs

* The time on the router and on the server may not be fully in sync, hence you may see updates (for example, alarms, events) that occur in the future. This is also the reason why it may take a while until the **Location** and the **Measurement** tab appear for new devices.
* Only WAN profile 1 is supported. To set APNs, the **auto APN** mode on the device needs to be disabled.
* Under some circumstances, a command sent to the device may be lost while switching between SMS and IP mode.
