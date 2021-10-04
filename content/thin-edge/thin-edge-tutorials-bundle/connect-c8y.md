---
weight: 10
title: Connect your device to Cumulocity IoT
layout: redirect
opensource: true
---

To enable thin-edge.io you first must connect your device to the cloud. This is a 10 minutes operation to be done only once. It establishes a permanent connection from your device to the cloud endpoint. This connection is secure (encrypted over TLS), and the two peers are identified by x509 certificates. Sending data to the cloud will then be as simple as sending data locally.

The focus here is on connecting to [{{< product-c8y-iot >}}](/concepts/introduction/).
See [Connect your device to Azure IoT](#connect-azure), if you want to connect Azure IoT instead.

Before you connect your device to {{< product-c8y-iot >}}, you need the URL of the endpoint to connect to (e.g. eu-latest.{{< domain-c8y >}}) and your credentials to connect to {{< product-c8y-iot >}}, which are your tenant identifier (e.g. `t00000007`), a user name and password. None of these credentials will be stored on the device. These are only required once, to register the device.

If not done yet, [install thin-edge.io](/thin-edge/thin-edge-howto/#install-thin-edge) on your device.

You can now use the [tedge command](/thin-edge/thin-edge-developer-tools/#tedge-command) to:
* [create a certificate for you device](#create-the-certificate),
* [make the device certificate trusted by {{< product-c8y-iot >}}](#make-the-device-trusted-by-cumulocity-iot),
* [connect the device](#connect-the-device).

### Configure the device

To connect the device to {{< product-c8y-iot >}}, you need to set the URL of your {{< product-c8y-iot >}} tenant and the root certificate as below.

Set the URL of your {{< product-c8y-iot >}} tenant.

```
$ sudo tedge config set c8y.url your-tenant.{{< domain-c8y >}}
```

Set the path to the root certificate if necessary. The default is */etc/ssl/certs*.

```
$ sudo tedge config set c8y.root.cert.path /etc/ssl/certs
```

This will set the root certificate path of {{< product-c8y-iot >}}.
In most of the Linux flavors, the certificate will be present in */etc/ssl/certs*.
If not found download it from [https://www.identrust.com/dst-root-ca-x3](https://www.identrust.com/dst-root-ca-x3).

### Create the certificate

The `tedge cert create` command creates a self-signed certificate which can be used for testing purpose.

A single argument is required: an identifier for the device.
This identifier will be used to uniquely identify your devices among others in your cloud tenant. This identifier will also be used as the Common Name (CN) of the certificate.
Indeed, this certificate aims to authenticate that this device is actually the device with that identity.

```
$ sudo tedge cert create --device-id my-device
```

You can then check the content of this certificate.

```
$ sudo tedge cert show
Device certificate: /etc/tedge/device-certs/tedge-certificate.pem
Subject: CN=my-device, O=Thin Edge, OU=Test Device
Issuer: CN=my-device, O=Thin Edge, OU=Test Device
Valid from: Tue, 09 Feb 2021 17:16:52 +0000
Valid up to: Tue, 11 May 2021 17:16:52 +0000
Thumbprint: CDBF4EC17AA02829CAC4E4C86ABB82B0FE423D3E
```

The issuer of this certificate is the device itself.
This is a self-signed certificate.
To use a certificate signed by your certificate authority,
see [Developer tools > Command Line Interface (CLI) > tedge cert command](/thin-edge/thin-edge-developer-tools/#tedge-cert-command).

### Make the device trusted by Cumulocity IoT

For a certificate to be trusted by {{< product-c8y-iot >}},
you need to add the certificate of the signing authority to the list of trusted certificates.
In the {{< product-c8y-iot >}} UI, navigate to **Management** > **Trusted certificates** in the Device Management application in order to see this list for your {{< product-c8y-iot >}} tenant.

Here, the device certificate is self-signed and has to be directly trusted by {{< product-c8y-iot >}}.
This can be done in two ways:

* Via the UI by uploading the certificate from your device (*/etc/tedge/device-certs/tedge-certificate.pem*) to your tenant at [Management > Trusted certificates](/users-guide/device-management/#managing-trusted-certificates).
* Or by using the `tedge cert upload c8y` command.

```
$ sudo tedge cert upload c8y --user <username>
```

### Connect the device

Now, you are ready to run `tedge connect c8y`.
This command configures the MQTT broker:
* to establish a permanent and secure connection to the cloud,
* to forward local messages to the cloud and vice versa.

Also, if you have installed tedge_mapper, this command starts and enables the tedge-mapper-c8y systemd service.
At last, it sends packets to {{< product-c8y-iot >}} to check the connection.
If your device is not yet registered, you will find the digital-twin created in your tenant after `tedge connect c8y`!

```
$ sudo tedge connect c8y
Checking if systemd is available.

Checking if configuration for requested bridge already exists.

Validating the bridge certificates.

Saving configuration for requested bridge.

Restarting mosquitto service.

Awaiting mosquitto to start. This may take up to 5 seconds.

Persisting mosquitto on reboot.

Successfully created bridge connection!

Checking if tedge-mapper is installed.

Starting tedge-mapper service.

Persisting tedge-mapper on reboot.

tedge-mapper service successfully started and enabled!

Sending packets to check connection. This may take up to 10 seconds.

Try 1 / 2: Sending a message to {{< product-c8y-iot >}}. ... No response. If the device is new, it's normal to get no response in the first try.
Try 2 / 2: Sending a message to {{< product-c8y-iot >}}. Received expected response message, connection check is successful.
```

### Sending your first telemetry data

To send data to {{< product-c8y-iot >}} use MQTT over topics prefixed with `c8y`.
Any messages sent to one of these topics are forwarded to {{< product-c8y-iot >}}.
The messages must have a format specific to each topic.
We use `tedge mqtt pub`, a raw {{< product-c8y-iot >}} SmartRest message to be understood as a temperature of 20 Celsius.

```
$ tedge mqtt pub c8y/s/us 211,20
```

To check that this message has been received by {{< product-c8y-iot >}},
navigate to **Devices** > **All devices** > <your device id> > **Measurements** in the Device Management application.
You should observe a "temperature measurement" graph with the new data point.


### Next Steps

You can now:
* learn how to [send various kinds of telemetry data](#send-thin-edge-data)
  using the cloud-agnostic [Thin Edge JSON data format](/thin-edge/thin-edge-architecture/#thin-edge-json),
* or have a detailed view of the [topics mapped to and from {{< product-c8y-iot >}}](/thin-edge/thin-edge-developer-tools/#cumulocity-iot-mqtt-topics)
  if you prefer to use directly {{< product-c8y-iot >}} specific formats and protocols.
