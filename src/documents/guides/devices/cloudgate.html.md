---
layout: devices
title: "CloudGate"
---

![CloudGate](/guides/devices/cloudgate/cloudgate-logo.png)

## Overview

[CloudGate](http://www.option.com/product/cloudgate/) is [Option](http://www.option.com/)’s M2M Gateway. It provides competitively priced LAN to WWAN routing and GPS functionality in a single basic unit certified by all major US cellular operators (CDMA/EvDO and WCDMA/HSPA+). CloudGate is simple to configure locally or remotely from your PC, tablet or smartphone.

![CloudGate](/guides/devices/cloudgate/cloudgate-front.jpg)

## Installation

After setting up the CloudGate device, make sure to have the latest firmware installed. To install firmware on your CloudGate device, you can either register your CloudGate to the Option provisioning server or you can upload it manually. In both cases you have to [create an account](https://cloudgateuniverse.com/) first.

For upgrading your CloudGate remotely
- Log in at [CloudGate Universe](https://cloudgateuniverse.com/).
- Go to the "Devices" tab.
- Before activating a new device, you need to create a new group first. Click on "New group" and fill out the form.
- After creating a group, click on "Activate new device" and fill out the form.
- Navigate to your device and click on the button "Change version" in the "Firmware" section.
- Select the version you intend to install on your CloudGate device and click on "Apply changes".

![CloudGate](/guides/devices/cloudgate/change_firmware.png)

For upgrading your CloudGate manually
- Log in at [CloudGate Universe](https://cloudgateuniverse.com/).
- Go to the "Library" tab.
- Click on "View firmware" in the "Firmware" section.
- Go to the appropriate firmware depending on your device type and click "View details".
- Click on the download icon next to the version you intend to install.
- Access your CloudGate device via web browser.
- Log into the CloudGate web interface. The default username and password are both admin.

![CloudGate web interface](/guides/devices/cloudgate/device_provisioning.png)

- Go to the "Provisioning" tab and in the left menu select "Upload device provisioning file".
- Click on "Browse..." and navigate to the zip archive.
- Click upload and wait for the file to be sent.

After the device restarted, you can confirm the firmware version by checking the web interface of the CloudGate device.

![CloudGate Universe](/guides/devices/cloudgate/firmware_version.png)

To connect your CloudGate device with Cumulocity, the "LuvitRED" plugin needs to be installed as well. Follow the instructions above. In this case the plugin can be found in the "Application" section and not in the "Firmware" section.

If you upgrade your CloudGate device remotely, it will automatically check for updates. To be precise if the version which is installed on your CloudGate device differs from the version specified in your [CloudGate Universe](https://cloudgateuniverse.com/) account, the device will automatically download and install the version specified in your account. This is useful if you have to perform a factory reset on your device which would reset the firmware on the device. Therefore you should always make sure that the newest version is selected in your account.

## LuvitRED

LuvitRED is a derivation of [NodeRED](http://nodered.org/) which is an application based on NodeJS. NodeRED provides a GUI which allows the creation of workflows and a toolbox of reusable code that enables users to write application without any programming. For more information, refer to the [official documentation](http://nodered.org/docs/).

To view the LuvitRED editor, go to the "Plugin" tab in the CloudGate web interface and select "LuvitRED". Click on "Advanced Editor" and the editor will appear.

![LuvitRED user interface](/guides/devices/cloudgate/luvitred.png)

On the left side of the user interface you can see a list of nodes which are ready to use. Type "c8y" into the search bar to view all the nodes which are related to Cumulocity.

> Note that nodes in LuvitRED which require the user to write code (e.g. the "function" node) use Lua as a programming language while nodes in NodeRED use JavaScript.

### "c8y measurement" node

The following node allows you to send a measurement to the Cumulocity server. As input it expects the payload to be a numeric value or in case of a measurement with multiple series a field containing properties with a numeric value each.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.
- Type: The type of the measurement.
- Measurement:
  - Type: The type of the fragment.
  - Name: The name of the series.
  - Value: The numeric value of the measurement or series.
  - Unit: The unit of the series.

The following parameters are optional:
- Enable queueing: Enables queueing messages when there is no connection.
  - Q config: Select a queue configuration. Defines how many message can be stored in memory.

If you want to add multiple series to a measurement, you have to add a new measurement with the same type to the list.

![c8y measurement](/guides/devices/cloudgate/c8ymeasurement.png)

For more information on measurements, refer to "[Cumulocity's domain model](/guides/concepts/domain-model/)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### "c8y alarm" node

The following node allows you to send an alarm to the Cumulocity server. As input it expects the payload to be a string representing the textual description of the alarm.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.
- Type: The type of the alarm.
- Status: The status of the alarm.
- Severity: The severity of the alarm.

The following parameters are optional:
- Enable queueing: Enables queueing messages when there is no connection.
  - Q config: Select a queue configuration. Defines how many message can be stored in memory.
- Default text: The text which will be used if there is no payload.

![c8y alarm](/guides/devices/cloudgate/c8yalarm.png)

For more information on alarms, refer to "[Working with alarms](/guides/users-guide/device-management/#alarm-monitoring)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### "c8y event" node

The following node allows you to send an event to the Cumulocity server. As input it expects the payload to be a string representing the textual description of the event.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.
- Type: The type of the event.

The following parameters are optional:
- Enable queueing: Enables queueing messages when there is no connection.
  - Q config: Select a queue configuration. Defines how many message can be stored in memory.
- Default text: The text which will be used if there is no payload.

![c8y event](/guides/devices/cloudgate/c8yevent.png)

For more information on events, refer to "[Cumulocity's domain model](/guides/concepts/domain-model/)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### "c8y command" node

The following node allows you to receive a command sent by the Cumulocity server. As output it will initialize the payload with the command text. If the command fails, the payload will be empty or the message object will have a "failed" field.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.

For more information on events, refer to "[Shell](/guides/users-guide/device-management/#shell)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### "c8y config" node

The following node allows you to receive a command sent by the Cumulocity server. As output it will initialize the payload with the configuration text. If the command fails, the payload will contain a non string value or the message object will have a "failed" field.

To be able to run the node, the following parameters need to be defined:

- Platform: Select a [platform](#platform) for this node.

For more information on events, refer to "[Configuration](/guides/users-guide/device-management/#configuration)".

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### "c8y response" node

The following node allows you to send the result of a command to the Cumulocity server. As input the node expects a message routed from the "c8y command" or "c8y config" nodes.

For more information on the node, refer to the description which can be seen on the "Info" tab on the right side when selecting the node.

### <a name="platform"></a>"c8y platform" node

This node is not visible in the list of nodes on the left side as it is used as a configuration which can be shared by multiple nodes. The configuration node defines the type of connection and the credentials which will be used to communicate with Cumulocity.

![c8y platform](/guides/devices/cloudgate/c8yplatform.png)

To be able to use the configuration, the type of provision has to be specified ("Manually" or "Automatically").

In case of "Manually", the user has to enter a tenant, username and password. After starting the workflow, the nodes which use this configuration should be able to connect to Cumulocity, provided that the credentials are correct.

In case of "Automatically", the user can enter a servername and authentication string. If not, the node will use default values. Before or after starting the workflow, the user has to register the device with its serial number in the desired tenant. For more information on registering devices, refer to "[Connecting devices manually](/guides/users-guide/device-management/#device-registration)". After accepting the device in the tenant, the nodes which use this configuration should be able to connect to Cumulocity, provided that the credentials are correct.
