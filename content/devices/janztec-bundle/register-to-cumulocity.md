---
title: Register to Cumulocity
layout: redirect
weight: 30
---
First, find out the serial number of your device:

```shell
$ grep Serial /proc/cpuinfo
Serial          : 000000001955c218
```

Go to Cumulocity's device registration page, type in the above serial number and click "Register Device". In a few seconds, a green "Accept" button appears, click the button to accept the device.

![Bootstrap](/guides/images/devices/janztec/bootstrap.png)

### Cumulocity IoT Platform

Remotely monitoring the memory usage and system load of your device.

![measurement](/guides/images/devices/janztec/measurement.png)

Troubleshooting your device via Cumulocity's logview feature.
![logview](/guides/images/devices/janztec/logview.png)