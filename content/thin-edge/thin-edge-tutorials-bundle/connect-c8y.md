---
weight: 10
title: Connect your device to Cumulocity IoT
layout: redirect
---

The very first step to enable `thin-edge.io` is to connect your device to the cloud.
* This is a 10 minutes operation to be done only once.
* It establishes a permanent connection from your device to the cloud end-point.
* This connection is secure (encrypted over TLS), and the two peers are identified by x509 certificates.
* Sending data to the cloud will then be as simple as sending data locally.

The focus is here on connecting to [{{< product-c8y-iot >}}](/concepts/introduction/).
See this [tutorial](/thin-edge/thin-edge-tutorials/#connect-azure), if you want to connect Azure IoT instead.

Before you try to connect your device to {{< product-c8y-iot >}}, you need:
* The url of the endpoint to connect (e.g. `eu-latest.{{< domain-c8y >}}.com`).
* Your credentials to connect {{< company-c8y >}}:
    * Your tenant identifier (e.g. `t00000007`), a user name and password.
    * None of these credentials will be stored on the device.
    * These are only required once, to register the device.

If not done yet, [install `thin-edge.io` on your device](/thin-edge/thin-edge-howto-guides/#installation).

You can now use the [`tedge` command](/thin-edge/thin-edge-references/#tedge) to:
* [create a certificate for you device](/thin-edge/thin-edge-tutorials/#create-the-certificate),
* [make the device certificate trusted by {{< company-c8y >}}](/thin-edge/thin-edge-tutorials/#make-the-device-trusted-by-{{< domain-c8y >}}),
* [connect the device](/thin-edge/thin-edge-tutorials/#connect-the-device), and
* [send your first telemetry data](/thin-edge/thin-edge-tutorials/#sending-your-first-telemetry-data).

### Configure the device

To connect the device to the {{< product-c8y-iot >}}, one needs to set the URL of your {{< product-c8y-iot >}} tenant and the root certificate as below.

Set the URL of your {{< product-c8y-iot >}} tenant.

```
$ sudo tedge config set c8y.url your-tenant.{{< domain-c8y >}}.com
```

Set the path to the root certificate if necessary. The default is `/etc/ssl/certs`.

```
$ sudo tedge config set c8y.root.cert.path /etc/ssl/certs
```

This will set the root certificate path of the {{< product-c8y-iot >}}.
In most of the Linux flavors, the certificate will be present in /etc/ssl/certs.
If not found download it from [here](https://www.identrust.com/dst-root-ca-x3).

### Create the certificate

The `tedge cert create` command creates a self-signed certificate which can be used for testing purpose.

A single argument is required: an identifier for the device.
This identifier will be used to uniquely identify your devices among others in your cloud tenant.
This identifier will be also used as the Common Name (CN) of the certificate.
Indeed, this certificate aims to authenticate that this device is actually the device with that identity.

```
$ sudo tedge cert create --device-id my-device
```

You can then check the content of that certificate.

```
$ sudo tedge cert show
Device certificate: /etc/tedge/device-certs/tedge-certificate.pem
Subject: CN=my-device, O=Thin Edge, OU=Test Device
Issuer: CN=my-device, O=Thin Edge, OU=Test Device
Valid from: Tue, 09 Feb 2021 17:16:52 +0000
Valid up to: Tue, 11 May 2021 17:16:52 +0000
Thumbprint: CDBF4EC17AA02829CAC4E4C86ABB82B0FE423D3E
```

You may notice that the issuer of this certificate is the device itself.
This is a self-signed certificate.
To use a certificate signed by your Certificate Authority,
see the reference guide of [`tedge cert`](/thin-edge/thin-edge-references/#tedge-cert).

### Make the device trusted by {{< company-c8y >}}

For a certificate to be trusted by {{< company-c8y >}},
one needs to add the certificate of the signing authority to the list of trusted certificates.
In the {{< company-c8y >}} GUI, navigate to "Device Management/Management/Trusted certificates"
in order to see this list for your {{< company-c8y >}} tenant.

Here, the device certificate is self-signed and has to be directly trusted by Certificate.
This can be done:
* either with the GUI: upload the certificate from your device (`/etc/tedge/device-certs/tedge-certificate.pem`)
  to your tenant "Device Management/Management/Trusted certificates".
* or using the `tedge cert upload c8y` command.

```
$ sudo tedge cert upload c8y --user <username>
```

### Connect the device

Now, you are ready to run `tedge connect c8y`.
This command configures the MQTT broker:
* to establish a permanent and secure connection to the cloud,
* to forward local messages to the cloud and vice versa.

Also, if you have installed `tedge_mapper`, this command starts and enables the tedge-mapper-c8y systemd service.
At last, it sends packets to {{< company-c8y >}} to check the connection.
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

Try 1 / 2: Sending a message to {{< company-c8y >}}. ... No response. If the device is new, it's normal to get no response in the first try.
Try 2 / 2: Sending a message to {{< company-c8y >}}. Received expected response message, connection check is successful.
```

### Sending your first telemetry data

Sending data to {{< company-c8y >}} is done using MQTT over topics prefixed with `c8y`.
Any messages sent to one of these topics will be forwarded to {{< company-c8y >}}.
The messages are expected to have a format specific to each topic.
Here, we use `tedge mqtt pub` a raw {{< company-c8y >}} SmartRest message to be understood as a temperature of 20 Celsius.

```
$ tedge mqtt pub c8y/s/us 211,20
```

To check that this message has been received by {{< company-c8y >}},
navigate to "Device Management/Devices/All devices/<your device id>/Measurements".
You should observe a "temperature measurement" graph with the new data point.


### Next Steps

You can now:
* learn how to [send various kind of telemetry data](/thin-edge/thin-edge-tutorials/#send-thin-edge-data)
  using the cloud-agnostic [Thin-Edge-Json data format](/thin-edge/thin-edge-architecture/#thin-edge-json),
* or have a detailed view of the [topics mapped to and from {{< company-c8y >}}](/thin-edge/thin-edge-references/#{{< domain-c8y >}}-mqtt-topics)
  if you prefer to use directly {{< company-c8y >}} specific formats and protocols.
