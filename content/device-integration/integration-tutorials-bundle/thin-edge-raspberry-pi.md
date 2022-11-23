---
weight: 20
title: thin-edge.io on a Raspberry Pi
layout: bundle
---

This tutorial provides an overview of the installation and configuration of thin-edge.io.
A Raspberry Pi serves as the example device.
The tutorial explains how to reach the goal of sending data to {{< product-c8y-iot >}} and performing some additional device management tasks in a series of steps.


### Introduction

thin-edge.io is an open-source project to provide a cloud-agnostic edge framework.
It is much more generic than the device management agent, so it can connect to multiple IoT cloud platforms, and it allows flexible logic being executed on the device.
It is optimized for a very small footprint and high performance.

The Raspberry Pi is a relatively simple and cheap yet powerful device.
This makes it ideal for testing and trying out as well as some production use cases.


### Prerequisites

To follow this guide, you need the following:

* A [{{< product-c8y-iot >}}](https://www.softwareag.cloud/site/product/cumulocity-iot.html) trial tenant.
* A Raspberry Pi (3 or 4) with Raspian installed. For other boards and OS'es, refer to [thin-edge.io platform support](https://github.com/thin-edge/thin-edge.io/blob/main/docs/src/supported-platforms.md) on *GitHub*.
* An updated device. To update it, run:
  ```
  $ sudo apt-get update && sudo apt-get upgrade
  ```

### Steps

The tutorial is divided into small steps.
The first three steps are needed to install and connect to {{< product-c8y-iot >}}.
The last three are optional but needed to get a good overview of the capabilities of thin-edge.io.

[Step 1 Install thin-edge.io](#step-1-install-thin-edgeio)

[Step 2 Configure and Connect to the platform](#step-2-configure-and-connect-to-the-platform)

[Step 3 Sending Device Data](#step-3-sending-device-data)

[Step 4 Monitor the device](#step-4-monitor-the-device)

[Step 5 Add software management](#step-5-add-software-management)

[Step 6 Manage configuration files](#step-6-manage-configuration-files)

[Step 7 Manage Log Files](#step-7-manage-log-files)


#### Step 1 Install thin-edge.io

There are two ways of installing thin-edge.io:

* Use a script
* Manually

The easiest way is to use the installation script with this command:

```
curl -fsSL https://raw.githubusercontent.com/thin-edge/thin-edge.io/main/get-thin-edge_io.sh | sudo sh -s
```

This script will install the latest version of thin-edge.io with the following components:

* Mosquitto
* Command line interface (CLI) tool
* Tedge mapper

It is possible to do the installation of thin-edge.io manually or install another version or upgrade the current version. For more information, refer to [User Documentation > Installation > thin-edge.io manual installation](https://thin-edge.github.io/thin-edge.io/html/howto-guides/002_installation.html#thin-edgeio-manual-installation) in the *thin-edge.io docs*.

After a successful installation, it is possible to use thin-edge.io via the CLI and to use the tedge commands.

##### Tedge CLI

In the previous step, the CLI tool was installed, which is a very powerful tool.
Use it like this:

```
tedge [OPTIONS] [SUBCOMMAND]
```

Adding the parameter `-h` shows the help for the latest subcommand.

When running this command something like the following will be displayed:

```shell
$ sudo tedge -h

tedge 0.8.1
tedge is the cli tool for thin-edge.io

USAGE:
    tedge [OPTIONS] [SUBCOMMAND]

OPTIONS:
        --config-dir <CONFIG_DIR>    [default: /etc/tedge]
    -h, --help                       Print help information
        --init                       Initialize the tedge
    -V, --version                    Print version information

SUBCOMMANDS:
    cert          Create and manage device certificate
    config        Configure Thin Edge
    connect       Connect to connector provider
    disconnect    Remove bridge connection for a provider
    help          Print this message or the help of the given subcommand(s)
    mqtt          Publish a message on a topic and subscribe a topic
```

For an overview of the commands for the CLI tool, refer to the [Command Line Reference](https://thin-edge.github.io/thin-edge.io/html/references/references.html) in the *thin-edge.io docs*.

You will also use the CLI to configure the thin-edge.io installation on the device in the next steps.

#### Step 2 Configure and connect to the platform

To connect the device to the {{< product-c8y-iot >}} platform it needs to be configured.
The following configuration parameter is mandatory:

```
C8Y URL
```

The URL is needed to allow the upload of the certificate to the specific tenant and the registration of the device. It can be configured via:

```
sudo tedge config set c8y.url {{YOUR_C8Y_URL}}
```

##### Certificate

thin-edge.io connects via MQTT protocol using an X.509 certificate for authentication.
To do so, a certificate must be trusted by {{< product-c8y-iot >}}.
A certificate is trusted when it is added to the trusted certificates and is in an activated state.

First, create the device certificate locally:

```
sudo tedge cert create --device-id {{YOUR_UNIQUE_DEVICE_ID}}
```

{{< c8y-admon-info >}}
You can skip this step if the device certificate is already uploaded to {{< product-c8y-iot >}} directly via the UI.
{{< /c8y-admon-info >}}

The device ID is a unique identifier, for example, the MAC address that identifies the physical device.

The certificate is uploaded to the {{< product-c8y-iot >}} tenant via:

```
sudo tedge cert upload c8y --user {{YOUR_USERNAME}}
```

If the password prompt appears, enter your password.

{{< c8y-admon-info >}}
In a production environment, we do not recommended you to use the above self-signed certificate, which is for demo purposes.
If you want to use this tutorial as a basis for production, refer to [Device integration using MQTT > Device certificates](/device-integration/mqtt/#device-certificates).
{{< /c8y-admon-info >}}

##### Connect

Connect the device to {{< product-c8y-iot >}} via:

```
sudo tedge connect c8y
```

When the connection is established, the device will be created in {{< product-c8y-iot >}}.
If you go to Device Management > Devices > All devices, the device is visible in the list.

#### Step 3 Sending Device Data

Once your device is configured and connected to {{< product-c8y-iot >}}, you can start sending measurements, events or alarms.
With the standard configuration you can not connect externally to the mosquito broker and the messages must be sent directly from the device.

The tedge CLI allows you to send payloads via MQTT:

```
tedge mqtt pub {{TOPIC}} {{PAYLOAD}}
```

thin-edge.io comes with a tedge-mapper daemon.
This process collects the data from the `tedge/#` topic and translates them to the tedge payloads on the `c8y/#` topic which are mapped directly to {{< product-c8y-iot >}}.
The mapper translates simple JSON to the desired target payload for {{< product-c8y-iot >}}.

##### Sending measurements

Measurements within {{< product-c8y-iot >}} represent regularly acquired readings and statistics from sensors.

A single-valued measurement like a temperature measurement can be represented in Thin Edge JSON as follows:

```
{ "temperature": 25 }
```

The key-value pair represens the measurement type and the numeric value of the measurement.
The endpoint that is supervised by the tedge-mapper for measurements is:

```
tedge/measurements
```

The temperature measurement can be sent as follows:

```
tedge mqtt pub tedge/measurements '{ "temperature": 25 }'
```

##### Sending events

Events are used to pass real-time information, which is not just plain sensor values, through {{< product-c8y-iot >}}.

An event can be represented in Thin Edge JSON as follows:

```
{
    "text": "A door was closed",
    "time": "2022-06-10T05:30:45+00:00"
}
```

The endpoint that is supervised by the tedge-mapper for events is:

```
tedge/events/{{event-type}}
```

The door closed event can be sent as follows:

```
tedge mqtt pub tedge/events/door '{"text": "A door was closed","time": "2022-06-10T05:30:45+00:00"}'
```

An event entry will be visible in Device management -> Your device -> Events.

#### Step 4 Monitor the device

With thin-edge.io device monitoring, you can collect metrics from the device and forward these device metrics to {{< product-c8y-iot >}}.

thin-edge.io uses the open source component `collectd` to collect the metrics from the device.
thin-edge.io translates the `collectd` metrics from their native format to the thin-edge.io JSON format and then into the cloud-vendor-specific format.

Enabling monitoring on your device is a three step process:

* Install collectd
* Configure collectd
* Enable thin-edge.io monitoring

##### Install collectd

Because thin-edge.io uses the MQTT plugin of `collectd`, the Mosquitto client library (either libmosquitto1 or mosquitto-clients) must be installed.

```
sudo apt-get install libmosquitto1
```

To install `collectd`:

```
sudo apt-get install collectd-core
```

##### Configure collectd

thin-edge.io provides a basic `collectd` configuration that collects CPU, memory and disk metrics.

Copy the file to the main `collectd` configuration file and restart the daemon:

```
sudo cp /etc/tedge/contrib/collectd/collectd.conf /etc/collectd/collectd.conf
sudo systemctl restart collectd
```

The data arrives on the `collectd/#` topic. You can check via:

```
tedge mqtt sub collectd/#
```

The output will be similar to this:

```shell
$ tedge mqtt sub collectd/#
INFO: Connected
[collectd/raspberrypi/df-root/percent_bytes-used] 1667205183.407:11.7998857498169
[collectd/raspberrypi/memory/percent-used] 1667205183.408:4.87045198079293
[collectd/raspberrypi/cpu/percent-active] 1667205184.398:1.52284263959391

```

##### Enable Collectd

To enable monitoring on your device, launch the `tedge-mapper-collectd daemon` process.
This process collects the data from the `collectd/#` topic and translates them to the tedge payloads on the `c8y/#` topic.

```
sudo systemctl start tedge-mapper-collectd
sudo systemctl enable tedge-mapper-collectd
```

You can inspect the collected and translated metrics by subscribing to this topic:

```
tedge mqtt sub 'c8y/#'

```

The output will be similar to this:

```shell
$ tedge mqtt sub c8y/#
INFO: Connected
[c8y/measurement/measurements/create] {"type":"ThinEdgeMeasurement","time":"2022-10-31T08:35:44.398000001Z","cpu":{"percent-active":{"value":1.26262626262626}},"memory":{"percent-used":{"value":4.87024847292786}}}
[c8y/measurement/measurements/create] {"type":"ThinEdgeMeasurement","time":"2022-10-31T08:35:45.398000001Z","memory":{"percent-used":{"value":4.87024847292786}},"cpu":{"percent-active":{"value":1.01522842639594}}}
[c8y/measurement/measurements/create] {"type":"ThinEdgeMeasurement","time":"2022-10-31T08:35:46.398000001Z","memory":{"percent-used":{"value":4.87024847292786}},"cpu":{"percent-active":{"value":0.759493670886076}}}
[c8y/measurement/measurements/create] {"type":"ThinEdgeMeasurement","time":"2022-10-31T08:35:47.398000001Z","memory":{"percent-used":{"value":4.87024847292786}},"cpu":{"percent-active":{"value":2.01005025125628}}}
[c8y/measurement/measurements/create] {"type":"ThinEdgeMeasurement","time":"2022-10-31T08:35:48.398000001Z","memory":{"percent-used":{"value":4.87004496506279}},"cpu":{"percent-active":{"value":0.254452926208651}}}

```

The monitoring data will appear in {{< product-c8y-iot >}} on the device in the measurement section.

##### Edit collectd

To change the monitored data, change the *collectd.conf* file.
This can be done via {{< product-c8y-iot >}}.
See [step 6](#step-6-manage-configuration-files) below.

#### Step 5 Add software management

Software management allows for installation and management of any type of software from {{< product-c8y-iot >}}.
Since the type is generic, any type of software can be managed.
In thin-edge.io this can be extended with plugins.
A particular plugin is necessary for every software type.

There are the following plugins:

* Docker
* APT
* Docker-compose
* Snap

To use those plugins, copy them to:

`/etc/tedge/sm-plugins`

The APT plugin is installed automatically.
You can find the other plugins in the repository.
Make sure to disconnect and reconnect the device after adding plugins via:

```
sudo tedge disconnect c8y
sudo tedge connect C8Y
```

##### Adding new software to the software repository in the platform

1. In {{< product-c8y-iot >}}, navigate to **Management** > **Software repository**  and click **Add software** at the top right.

2. In the resulting dialog, enter a name for the software and confirm by clicking **Add new** and select or enter a software, select a software type and enter a description and a version.

3. thin-edge.io contains a default plugin supporting `debian` packages from both `apt` repositories as well as remote locations.
  If you prefer to use packages from an `apt` repository, select the `Provide a file path` option and give an empty space (' ').
  If you would like to use other sources (for example, a file uploaded to your cloud or an external source), provide the full URL to the file.
  If you would like to upload your binaries, select the **Upload a binary** option and upload the file to the {{< product-c8y-iot >}} software repository.

4. Click **Add Software**.

##### Installing software on a device

1. Go to {{< product-c8y-iot >}}
2. Click `All devices` in the Devices menu, select the desired device from the device list and open its Software tab.

  The Software tab shows a list of all available software installed on the device. If a given software has a type, it will be displayed next to its name. It is possible to search for a particular software by its name or filter the list by software type.
3. Click on `Install software`, on the bottom of the page
4. Find/select the software which was added to the repository in the previous step.
5. Select the right version and click on `install`
6. Then click on `apply changes`, the software will be installed.

When a different version of the already installed software needs to be installed, choose in step 4 the installed software from the list and in step 5 the right version.

Find more information about [how to manage the software](https://cumulocity.com/guides/users-guide/device-management/#managing-software-on-a-device) on a device.

How to [develop your own plugins](https://thin-edge.github.io/thin-edge.io/html/tutorials/write-my-software-management-plugin.html) is described here.

#### Step 6 Manage configuration files

With thin-edge.io it is possible to manage config files on a device by using the {{< product-c8y-iot >}} configuration management feature as a part of Device Management.

This functionality is directly installed with the initial script. However, it is needed to configure the `/etc/tedge/c8y/c8y-configuration-plugin.toml` and add the entries for the configuration files which need to be managed. Just copy the following content to that file:
```
files = [
    { path = '/etc/tedge/tedge.toml' },
    { path = '/etc/tedge/mosquitto-conf/c8y-bridge.conf', type = 'c8y-bridge.conf' },
    { path = '/etc/tedge/mosquitto-conf/tedge-mosquitto.conf', type = 'tedge-mosquitto.conf' },
    { path = '/etc/mosquitto/mosquitto.conf', type = 'mosquitto.conf' }
]
```
where:
* path is the full path to the configuration file.
* type is a unique alias for each file entry which will be used to represent that file in Cumulocity UI.

Then start the configuration plugin process and enable it on boot by ` systemctl ` .
```
sudo systemctl start c8y-configuration-plugin.service
sudo systemctl enable c8y-configuration-plugin.service
```


Then navigate to  {{< product-c8y-iot >}} Device Management and the desired device. Open its Configuration tab. You can find c8y-configuration-plugin and more are listed as supported configuration types, as declared in the plugin configuration file. Here you can save the configuration files into the repository or download them.


##### Change configuration files via the platform

If there is a need to change one or more configuration files, there is more than one option to follow:

* Create a whole new configuration file
* Change an existing configuration file

In this tutorial the last option is explained, there are some steps to be taken:

![Configuration Management](./images/ConfigurationManagement.png)


1. Save the configuration file to the repository (`Device management -> configuration`. In the list of configuration files  pick  a file to change and click on `Save to repository`).

2. Go to `Management -> configuration snapshots repository`.
3. Download the configuration file which needs to be changed (the one you saved to the repository in step 1).
4. Edit this file as needed.
5. Click on `Add configuration snapshot` (top right).
6. Fill the fields, make sure the device type is `thin-edge.io`, select the right Configuration type and add the (just edited) configuration file and click on  `Add configuration`.
7. Go back to the device and then to the configuration. In the Available supported configuration you will see the configuration file which was just created. When you click on it, you will see the content.

8. Then click on  ``` send configuration to device ``` the configuration file is uploaded to the device.
9. If you then click on ``` get snapshot from device ``` (select the right configuration file in device supported configurations), you will see the change of the configuration file.

8. Then click on  `send configuration to device` the configuration file is uploaded to the device.
9. If you then click on `get snapshot from device` (select the right configuration file in device-supported configurations), you will see the change of the configuration file.



![Change Configuration](./images/ChangeConfiguration.png)

##### Change collectd configuration file via the platform

To change the collectd metrics of the device, which are displayed in {{< product-c8y-iot >}}, the next steps are needed. These are similar to the steps in the previous paragraphs.


1. Add this line ```{ path = '/etc/collectd/collectd.conf', type = 'collectd.conf' }, ``` to the `/etc/tedge/c8y/c8y-configuration-plugin.toml` file.

2. Save the configuration file to the repository
3. Go to `Management -> configuration` snapshots repository
4. Download the configuration file which needs to be changed
5. Edit this file as needed
6. Click on ``` Add configuration snapshot ``` (top right)
7. Fill in the fields, make sure the device type is ``` thin-edge.io ``` and select the right Configuration type and add the (just edited) configuration file.) and click on  ```Add configuration ```
8. Go back to the device and then to the configuration. In the Available supported configuration you will see the configuration file which was just created. When you click on it, you will see the content
9. Then click on  ``` send configuration toe device ``` the configuration file is uploaded to the device.
10. If you then click on get snapshot from device (select the right configuration file in device supported configurations), you will see the change of the configuration file.


#### Step 7 Manage Log Files

With thin-edge.io it is possible to request log files from a device by using the {{< product-c8y-iot >}} log request feature as a part of Device Management.

This functionality is also directly installed with the initial script, but some configuration is needed for the `/etc/tedge/c8y/c8y-log-plugin.toml` and add the entries for the log files that can be requested. Just copy the following content to that file:
```
files = [
  { type = "software-management", path = "/var/log/tedge/agent/software-*" },
  { type = "mosquitto", path = "/var/log/mosquitto/mosquitto.log" },
  { type = "daemon", path = "/var/log/daemon.log" },
  { type = "user", path = "/var/log/user.log" },
  { type = "apt-history", path = "/var/log/apt/history.log" },
  { type = "apt-term", path = "/var/log/apt/term.log" },
  { type = "auth", path = "/var/log/auth.log" },
  { type = "dpkg", path = "/var/log/dpkg.log" },
  { type = "kern", path = "/var/log/kern.log" }
]
```
The daemon is started/enabled via:
```
sudo systemctl start c8y-log-plugin

sudo systemctl enable c8y-log-plugin
```
To see the content of the log files in {{< product-c8y-iot >}}, take the following steps:

1. Go to device management and select the right device.

2. Select `Logs`. In this screen, you can request Log files
3. Click on `Request log file`(the top right).
4. In the next screen you can select a date range and a type of log.
5. Then click on `Request log file`.
6. Refresh the page.
7. Click on the requested log file, you should see something similar to this:

![Request Log file](./images/RequestLogfile.png)

If `c8y-log-plugin.toml` is added to the `c8y-configuration-plugin.toml` it is possible to do the administration from there.
However, keep in mind that the daemon has to be restarted every time the `/etc/tedge/c8y/c8y-log-plugin.toml` is touched via the command line.

##### Final remarks and summary

With this getting started tutorial you gained some insights on how to install and configure thin-edge.io on a Raspberry Pi.

If you didn't try the optional steps in this tutorial, it might be a nice idea to work on these as you then get a better insight into the device management capabilities of thin-edge.io. Other things you can work on are capabilities like working with child devices, building your own plugin etc. Tutorials for that can be found [here](https://thin-edge.github.io/thin-edge.io/html/).
