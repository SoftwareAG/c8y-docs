---
weight: 20
title: Connect your device to Azure IoT
layout: redirect
---

To enable thin-edge.io you first must connect your device to the cloud. This is a 10 minutes operation to be done only once. It establishes a permanent connection from your device to the cloud end-point. This connection is secure (encrypted over TLS), and the two peers are identified by x509 certificates. Sending data to the cloud is then as simple as sending data locally.

The focus is here on connecting the device to Azure IoT.
See [Connect your device to {{< product-c8y-iot >}}](#connect-c8y), if you want to connect {{< product-c8y-iot >}} instead.

Before you can connect your device to Azure IoT, you need to create an Azure IoT Hub in Azure portal as described at [https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal), as well as to [install thin-edge.io on your device](/thin-edge/thin-edge-howto/#install-thin-edge).

You can now use the [tedge command](/thin-edge/thin-edge-developer-tools/#tedge-command) to:
* [create a certificate for your device](#create-the-certificate),
* [register the device on Azure IoT Hub](#register-the-device-on-azure-iot-hub),
* [configure the device](#configure-the-device),
* [connect the device](#connect-the-device), and
* [send your first telemetry data](#sending-your-first-telemetry-data).

### Create the certificate

The `tedge cert create` command creates a self-signed certificate which can be used for testing purpose.

A single argument is required: an identifier for the device.
This identifier will be used to uniquely identify your devices among others in your cloud tenant.
This identifier will be also used as the Common Name (CN) of the certificate.
This certificate aims to validate that this device is the device with that identity.

```
$ sudo tedge cert create --device-id my-device
```

### Show certificate details

You can then check the content of that certificate.

```
$ sudo tedge cert show
Device certificate: /etc/tedge/device-certs/tedge-certificate.pem
Subject: CN=my-device, O=Thin Edge, OU=Test Device
Issuer: CN=my-device, O=Thin Edge, OU=Test Device
Valid from: Tue, 09 Mar 2021 14:10:30 +0000
Valid up to: Thu, 10 Mar 2022 14:10:30 +0000
Thumbprint: 860218AD0A996004449521E2713C28F67B5EA580
```

The issuer of this certificate is the device itself as this is a self-signed certificate.
The thumbprint is the Sha1sum of the certificate. This is required for registering the
device using the self-signed certificate on Azure IoT Hub.
To use a certificate signed by your certificate authority,
see [Developer tools > Command Line Interface (CLI) > tedge cert command](/thin-edge/thin-edge-developer-tools/#tedge-cert-command).

### Register the device on Azure IoT Hub

In order for Azure to trust a device, you need to add the self-signed certificate thumbprint to the Azure IoT Hub Portal.
In the Azure IoT Hub Portal, navigate to **Explores** > **IoT Devices** and click  **+ New**. This opens the window **Create a device**.

Here provide the configuration parameters that are required to create the device as described below:

   * **Device ID** - Should be the same as the subject of the certificate.
   * **Authentication type** - Select "X.509 Self-Signed".
      * Provide the primary thumbprint that has been displayed in [tedge cert show](/thin-edge/thin-edge-developer-tools/#show).
      * Use the same thumbprint for the secondary thumbprint, since Azure IoT hub uses a single certificate.
   * Enable **Connect this device to an IoT Hub**.
   * Save the configuration.

After saving the configuration successfully, a new device has been created on the IoT Hub.
You can see the new device on the IoT Hub portal by navigating to **Explores** > **IoT Devices**.

You can find more information about registering a device on the Azure IoT Hub website: [https://docs.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device?view=iotedge-2018-06](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-authenticate-downstream-device?view=iotedge-2018-06)

### Configure the device

To connect the device to the Azure IoT Hub, you need to set the URL/hostname of the IoT Hub and the root certificate of the IoT Hub as shown in the example below.

Set the URL/hostname of your Azure IoT Hub.   

```
sudo tedge config set az.url your-iot-hub-name.azure-devices.net
```

You can find the URL/hostname in the Azure web portal by clicking on the overview section of your IoT Hub.

Set the path to the root certificate if necessary. The default is */etc/ssl/certs*.

```
sudo tedge config set az.root.cert.path /etc/ssl/certs/Baltimore_CyberTrust_Root.pem
```

This will set the root certificate path of the Azure IoT Hub.
In most Linux flavors, the certificate will be present in */etc/ssl/certs*. If you cannot find it, download it from [https://www.digicert.com/kb/digicert-root-certificates.htm](https://www.digicert.com/kb/digicert-root-certificates.htm).

### Connect the device

Now, you are ready to get your device connected to Azure IoT Hub with `tedge connect az`.
This command configures the MQTT broker:
* to establish a permanent and secure connection to the Azure cloud,
* to forward local messages to the cloud and vice versa.

Also, if you have installed tedge_mapper, this command starts and enables the tedge-mapper-az systemd service. At last, it sends packets to Azure IoT Hub to check the connection.

```
$ sudo tedge connect az

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

Received expected response message, connection check is successful.
```

### Sending your first telemetry data

To send data to Azure use MQTT over topics prefixed with `az`.
Any messages sent on the topic are forwarded to Azure.
The example below uses `tedge mqtt pub az/messages/events/`, a message to be understood as a temperature of 20 degree.

```
$ tedge mqtt pub az/messages/events/ '{"temperature": 20}'
```
To view the messages that were sent from the device to the cloud, refer to [https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-send-telemetry-cli#create-and-monitor-a-device](https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-send-telemetry-cli#create-and-monitor-a-device).

More information about sending telemetry to Azure can be found at [https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-send-telemetry-dotnet](https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-send-telemetry-dotnet).

### Next Steps

You can now:
* learn how to [send various kind of telemetry data](#send-thin-edge-data)
  using the cloud-agnostic [Thin Edge JSON data format](/thin-edge/thin-edge-architecture/#thin-edge-json),
* or have a detailed view of the [topics mapped to and from Azure](/thin-edge/thin-edge-developer-tools/#azure-mqtt-topics)
  if you prefer to use directly Azure specific formats and protocols.
