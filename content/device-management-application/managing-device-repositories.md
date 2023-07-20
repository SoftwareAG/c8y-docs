---
weight: 60
title: Managing device repositories
layout: bundle
section:
  - device_management
helpcontent:
- label: firmware-repo
  title: Firmware repository
  content: "In the firmware repository, you can collect reference firmware for devices. At the top left, you can filter the firmware items by name, description, or device type.


	See the *User guide* for details on managing firmware, firmware versions and patches, and on how to install or update them on devices."
- label: software-repo
  title: Software repository
  content: "In the software repository, you can collect reference software for devices. Multiple software packages can be installed on a device. At the top left, you can filter the repository entries by name, description, or device type.


	See the *User guide* for details on managing software and software versions and on how to install or update them on devices."
- label: configuration-repository
  title: Configuration repository
  content: "In the configuration repository, you can store and manage configuration data retrieved from your devices as 'configuration snaphots'. The configuration data contains the parameters and the initial settings of a device. Such configuration snapshots help you, for example, to apply the same configuration to multiple devices.


  See the *User guide* for details on how to retrieve configuration data, and how to store and manage it in the configuration repository as snapshot."
- label: credentials
  title: Device credentials
  content: "Manage the device credentials that have been generated for your connected devices. Edit, disable, or delete device credentials as required or modify its permissions in the **Global roles** field, see the *User guide* for details."
- label: device-profiles
  title: Device profiles
  content: "Device profiles represent a set of a firmware version, one or multiple software packages, and one or multiple configuration files which can be deployed on a device. Based on device profiles, you can easily deploy a specific target configuration on devices by using bulk operations.


  See the *User guide* for details on managing device profiles and on applying device profiles to devices."
- label: trusted-certificates
  title: Trusted certificates
  content: "Cumulocity IoT allows devices to connect via MQTT protocol using a X.509 certificate for authentication. To do so, a certificate must be 'trusted' by Cumulocity IoT, that is, added to the trusted certificates."
---

The Device Management application provides features that support you in efficiently managing your devices.
They are accessible through the **Management** menu in the navigator:

![Management menu](/images/users-guide/DeviceManagement/devmgmt-management-menu.png)
