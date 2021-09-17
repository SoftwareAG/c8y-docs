---
weight: 80
title: Device monitoring troubleshooting
layout: redirect
---

To install and configure monitoring on your device,
see [Monitor your device with collectd](/thin-edge/thin-edge-tutorials/#device-monitoring).

### Is collectd running?

```
sudo systemctl status collectd
```

If not, launch collectd:

```
sudo systemctl start collectd
```

### Is collectd publishing MQTT messages?

```
tedge mqtt sub 'collectd/#'
```

If no metrics are collected, check the [MQTT configuration](/thin-edge/thin-edge-tutorials/#collectdconf).

### Is the Thin Edge collectd-mapper running?

```
sudo systemctl status collectd-mapper
```

If not, launch collectd:

```
sudo systemctl start collectd-mapper
```

### Are the collectd metrics published in Thin Edge JSON format?

```
tedge mqtt sub 'tedge/measurements'
```

### Are the collectd metrics published to Cumulocity IoT?

```
tedge mqtt sub 'c8y/#'
```

If not see [connect your device to {{< product-c8y-iot >}}](/thin-edge/thin-edge-tutorials/#connect-c8y).

### Are the collectd metrics published to Azure IoT?

```
tedge mqtt sub 'az/#'
```

If not see [connect your device to Azure IoT](/thin-edge/thin-edge-tutorials/#connect-azure).
