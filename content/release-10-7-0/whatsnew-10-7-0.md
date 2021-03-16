---
weight: 11
title: What´s new
layout: bundle
---

The following major feature enhancements have been introduced in the Cumulocity IoT platform with the 10.7.0 release.

### Device management & connectivity

Various features of the Device Management application have been significantly extended.

#### [MTM-30315] ENHANCED device configuration management

The configuration management functionality has been enhanced:

* You can now specify a configuration type.

* The configuration repository provides a list view, which shows the configuration type and also allows you to filter for configurations.

	![Configuration Repository](/images/users-guide/DeviceManagement/devmgmt-management-configrepo.png)

* If a device has the "c8y_SupportedConfigurations" fragment with a list of supported configuration types, it can now have multiple configurations.

For details, see [Device Management > Managing device data > Managing configurations](/users-guide/device-management#configuration-repository) in the User guide.


#### [MTM-30314] ENHANCED firmware and software update functionality

The firmware and software update functionality has been enhanced:

* You can now manage versions for software items, and versions and patches for firmware items.

	![Firmware repository](/images/users-guide/DeviceManagement/devmgmt-firmware-list.png)

* You can install multiple software items on a device, and update or remove them separately from the **Software** tab of a device. Moreover, the **Software** tab shows the operation status for the last operation.

	![Software management](/images/users-guide/DeviceManagement/devmgmt-software-tab.png)

For details, see [Device Management > Managing device data > Managing device data](/users-guide/device-management#managing-device-data) in the User guide.

#### [MTM-30318] ENHANCED bulk operations functionality

The bulk operations functionality has been significantly enhanced.

Details on bulk operations and their status can now be viewed in the **Bulk operations** tab on the **Device control** page. Moreover you can filter bulk operations for the operation type.

![Bulk operations](/images/users-guide/DeviceManagement/devmgmt-devicecontrol-bulk-operations-list.png)

A new wizard has been implemented to add bulk operations of the following types: Configuration update, Firmware update, Software update, Apply device profiles.

![Bulk operations](/images/users-guide/DeviceManagement/devmgmt-devicecontrol-bulk-operation-type.png)

For details, see [Device Management > Monitoring and controlling devices > Working with operations](/users-guide/device-management/#operation-monitoring) in the User guide.


#### [MTM-30319] NEW FEATURE - Device profiles

Device profiles represent a combination of a firmware version, one or multiple software packages and one or multiple configuration files which can be deployed on a device.

Based on device profiles, you can assign a specific target configuration to single devices or to multiple devices by using bulk operations.

![Device profile](/images/users-guide/DeviceManagement/devmgmt-device-profile-details.png)

For details, see [Device Management > Managing device data > Managing device profiles](/users-guide/device-management#device-profiles) in the User guide.


#### [MTM-27299] NEW FEATURE - Trusted certificates

Cumulocity IoT allows devices to connect via MQTT protocol using a X.509 certificate for authentication. To do so, a certificate must be trusted by Cumulocity IoT.

For details on how to manage trusted certificates in the UI refer to [Device Management > Managing device data > Managing trusted certificates](/users-guide/device-management#trusted-certificates) in the User guide.

![Trusted certificates](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-list.png)

For information on connecting devices using certificates refer to [Device integration using MQTT > Device certificates](/device-sdk/mqtt/#device-certificates) in the Device SDK guide.

#### New Cumulocity IoT Sensor App

A new version of the Cumulocity IoT Sensor App, a free smartphone application,  has been released for iOS and Android smartphones. It is the successor of the previous Cloud Sensor App.

The new Cumulocity IoT Sensor App works together with the new Smartphone wizard which can be accessed through a new quick link in the welcome widget of the Cockpit application.

![Smartphone wizard](/images/users-guide/csa/csa-connect-smartphone-wizard-step3.png)

For details, see [Cumulocity IoT Sensor App](/users-guide/cumulocity-sensor-app/) in the *User guide*.


