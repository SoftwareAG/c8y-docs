---
weight: 70
title: Configure the local port
layout: redirect
opensource: true
---

Configuring a mosquitto port in Thin Edge is a three step process.

<a name="step-1"></a>
### Step 1: Disconnect the Thin Edge device

The Thin Edge device must be disconnected from the cloud using the `tedge` command:

```shell
tedge disconnect c8y/az
```  

### Step 2: Set and verify the new MQTT port

Set the MQTT port with a desired port using the `tedge` command:

```shell
tedge config set mqtt.port 1024
```

This will make sure that all of the MQTT clients use the newer port that has been set.

### Verify the port configured/set

Use the below command to check if the port has been set properly.

```shell
tedge config get mqtt.port
```

This prints out the port that has been set.

<a name="step-3"></a>
### Step 3: Connect the Thin Edge device to cloud

Use the `tedge` command below to connect to the desired cloud.
This will force all the services (mosquitto, tedge-mappers) to use the newly set port.

```shell
tedge connect c8y

##or

tedge connect az
```

{{< c8y-admon-info >}}
Steps 1 and 2 can be followed in any order.
{{< /c8y-admon-info >}}

### Update to use default port

To use the default port (1883), the MQTT port must be unset using the `tedge` command:

```shell
tedge config unset mqtt.port
```

Once the port is reverted to default, [step 1](/thin-edge/thin-edge-howto-guides/#step-1-disconnect-the-thin-edge-device)
and [step 3](/thin-edge/thin-edge-howto-guides/#step-3-connect-the-thin-edge-device-to-cloud) must be followed to use the default port.

### Error case

The example below shows that you cannot set the string value for the port number.

```shell
tedge config set mqtt.port '"1234"'

Error: failed to set the configuration key: mqtt.port with value: "1234".

Caused by:
    Conversion from String failed
```

### Updating the mqtt port in collectd & for collectd-mapper

Update the `collectd.conf` with the new port in `<Plugin mqtt>`.
Restart the collectd service:

```shell
sudo systemctl restart collectd.service
```

After changing the MQTT port and connecting to cloud using `tedge connect c8y/az` (steps 1-3), the collectd-mapper must be restarted to use the newly set port.

Restart the collectd-mapper service:

```shell
sudo systemctl restart collectd-mapper.service
```
