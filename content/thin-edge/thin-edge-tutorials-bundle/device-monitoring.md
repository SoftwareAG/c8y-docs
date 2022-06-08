---
weight: 40
title: Monitor your device with collectd
layout: redirect
opensource: true
---

With thin-edge.io device monitoring, you can collect metrics from your device
and forward these device metrics to IoT platforms in the cloud.

Using these metrics, you can monitor the health of devices
and can proactively initiate actions in case the device seems to malfunction.
Additionally, the metrics can be used to help the customer troubleshoot when problems with the device are reported.

Thin-edge.io uses the open source component collectd to collect the metrics from the device, see [https://collectd.org/](https://collectd.org/) for more information.
Thin-edge.io translates the collected metrics from their native format to the [Thin Edge JSON](/thin-edge/thin-edge-architecture/#thin-edge-json) format
and then into the [cloud-vendor specific format](/thin-edge/thin-edge-architecture/#mapper).

Enabling monitoring on your device is a 3-steps process:
1. [Install collectd](#install-collectd),
2. [Configure collectd](#configure-collectd),
3. [Enable thin-edge.io monitoring](#enable-thin-edge-monitoring).

### Install mosquitto client library
Since thin-edge.io uses the MQTT plugin of collectd, you must install the mosquitto client library,
either libmosquitto1

``` shell
sudo apt-get install libmosquitto1
```

or mosquitto-clients

``` shell
sudo apt-get install mosquitto-clients
```

### Install collectd

Device monitoring is not enabled by default when you install thin edge.
You must install and configure collectd at [https://collectd.org/](https://collectd.org/) first.

To install collectd, follow the collectd installation process that is specific to your device as shown at [https://collectd.org/download.shtml](https://collectd.org/download.shtml). On a Debian or Ubuntu Linux:

``` shell
sudo apt-get install collectd-core
```

### Configure collectd

#### Basic collectd configuration

Thin-edge.io provides a basic collectd configuration at [https://github.com/thin-edge/thin-edge.io/blob/main/configuration/contrib/collectd/collectd.conf](https://github.com/thin-edge/thin-edge.io/blob/main/configuration/contrib/collectd/collectd.conf)
that can be used to collect CPU, memory and disk metrics.

Copy that file to the main collectd configuration file and restart the daemon. We recommend you
to keep a copy of the original configuration.

``` shell
sudo cp /etc/collectd/collectd.conf /etc/collectd/collectd.conf.backup
sudo cp /etc/tedge/contrib/collectd/collectd.conf /etc/collectd/collectd.conf
sudo systemctl restart collectd
```

#### Collectd.conf

Unless you opted for the [minimal test configuration provided with thin-edge](#basic-collectd-configuration)
you must update the collectd.conf configuration file at [https://collectd.org/documentation/manpages/collectd.conf.5.shtml](https://collectd.org/documentation/manpages/collectd.conf.5.shtml).
The collectd.conf configuration file is usually located at */etc/collectd/collectd.conf*.

{{< c8y-admon-important >}}
You can enable or disable the collectd plugins of your choice. This is subject to some notable exceptions, which are listed below.
{{< /c8y-admon-important >}}

1. **MQTT must be enabled**.
   * Thin-edge.io expects the collectd metrics to be published on the local MQTT bus.
     Hence, you must enable the MQTT write plugin of collectd at [https://collectd.org/documentation/manpages/collectd.conf.5.shtml#plugin_mqtt](https://collectd.org/documentation/manpages/collectd.conf.5.shtml#plugin_mqtt).
   * The MQTT plugin is available on most distributions of collectd, but this is not the case on MacOS using homebrew.
     If you are missing the MQTT plugin, recompile collectd to include the MQTT plugin.
     See [https://github.com/collectd/collectd](https://github.com/collectd/collectd) for details.
   * Here is a config snippet to configure the MQTT write plugin:
     ```
        LoadPlugin mqtt

        <Plugin mqtt>
            <Publish "tedge">
                Host "localhost"
                Port 1883
                ClientId "tedge-collectd"
            </Publish>
        </Plugin>
     ```
2. **RRDTool and CSV should be disabled.**
   * The risk with these plugins is to run out of disk space on a small device.
   * With thin-edge.io the metrics collected by collectd are forwarded to the cloud,
     hence it makes sense to disable local storage, see [https://github.com/collectd/collectd/issues/2668](https://github.com/collectd/collectd/issues/2668) for more information.
   * For that, simply comment out the following two plugins:
    ```
       #LoadPlugin rrdtool
       #LoadPlugin csv
    ```
3. **Cherry-pick the collected metrics.**
   * Collectd can collect a lot of detailed metrics,
      and it is not always recommended to forward all of this data to the cloud.
   * Here is a config snippet that uses the `match_regex` plugin to select the metrics of interest,
     filtering out every metric emitted by the memory plugin other than the used metric:
    ```
        PreCacheChain "PreCache"

        LoadPlugin match_regex

        <Chain "PreCache">
            <Rule "memory_free_only">
                <Match "regex">
                    Plugin "memory"
                </Match>
                <Match "regex">
                    TypeInstance "used"
                    Invert true
                </Match>
                Target "stop"
            </Rule>
        </Chain>
    ```

### Enable Thin Edge monitoring

To enable monitoring on your device, you must launch the `tedge-mapper-collectd` daemon process.

``` shell
sudo systemctl enable tedge-mapper-collectd
sudo systemctl start tedge-mapper-collectd
```

This process subscribes to the `collectd/#` topics to read the monitoring metrics published by collectd
and emits the translated measurements in Thin Edge JSON format to the `tedge/measurements` topic.
You can inspect the collected and translated metrics, by subscribing to these topics:

The metrics collected by collectd are emitted to subtopics named after the collectd plugin and the metric name:

```
$ tedge mqtt sub 'collectd/#'

[collectd/raspberrypi/cpu/percent-active] 1623076679.154:0.50125313283208
[collectd/raspberrypi/memory/percent-used] 1623076679.159:1.10760866126707
[collectd/raspberrypi/cpu/percent-active] 1623076680.154:0
[collectd/raspberrypi/df-root/percent_bytes-used] 1623076680.158:71.3109359741211
[collectd/raspberrypi/memory/percent-used] 1623076680.159:1.10760866126707

```

The `tedge-mapper-collectd translates these collectd measurements into the [Thin Edge JSON](/thin-edge/thin-edge-architecture/#thin-edge-json) format,
[grouping the measurements](/thin-edge/thin-edge-developer-tools/#collectd-topics) emitted by each plugin:

```
tedge mqtt sub 'tedge/measurements'

[tedge/measurements] {"time":"2021-06-07T15:38:59.154895598+01:00","cpu":{"percent-active":0.50251256281407},"memory":{"percent-used":1.11893578135189}}
[tedge/measurements] {"time":"2021-06-07T15:39:00.154967388+01:00","cpu":{"percent-active":0},"df-root":{"percent_bytes-used":71.3110656738281},"memory":{"percent-used":1.12107875001658}}
```

From there, if the device is actually connected to a cloud platform like {{< product-c8y-iot >}},
these monitoring metrics will be forwarded to the cloud.

```
tedge mqtt sub 'c8y/#'
[c8y/measurement/measurements/create] {"type": "ThinEdgeMeasurement","time":"2021-06-07T15:40:30.155037451+01:00","cpu":{"percent-active": {"value": 0.753768844221106}},"memory":{"percent-used": {"value": 1.16587699972141}},"df-root":{"percent_bytes-used": {"value": 71.3117904663086}}}
[c8y/measurement/measurements/create] {"type": "ThinEdgeMeasurement","time":"2021-06-07T15:40:31.154898577+01:00","cpu":{"percent-active": {"value": 0.5}},"memory":{"percent-used": {"value": 1.16608109197519}}}
```

If your device is not connected yet see:
* [Connect my device to {{< product-c8y-iot >}}](#connect-c8y)
* [Connect my device to Azure IoT](#connect-azure)

### Trouble shooting

See [Trouble shoot device monitoring](/thin-edge/thin-edge-howto/#device-monitoring-troubleshooting).
