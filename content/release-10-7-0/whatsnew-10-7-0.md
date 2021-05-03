---
weight: 11
title: What´s new
layout: bundle
---

Release 10.7.0 includes the following new features or major feature enhancements.

>**Info:** To learn what´s new in Cumulocity IoT or in a particular area of the platform we also offer various eLearning delta trainings on the [Software AG learning portal](https://knowledge.softwareag.com/iot_delta) which present the new and enhanced functionality available in a specific product release.

### Device management & connectivity

Various features of the Device Management application have been significantly extended.

#### Enhanced device configuration management

The configuration management functionality has been enhanced:

* You can now specify a configuration type.

* The configuration repository provides a list view, which shows the configuration type and also allows you to filter for configurations.

	![Configuration Repository](/images/release-notes/devmgmt-management-configrepo.png)

* If a device has the "c8y_SupportedConfigurations" fragment with a list of supported configuration types, it can now have multiple configurations.

For details, see [Device Management > Managing device data > Managing configurations](https://cumulocity.com/guides/10.7.0/users-guide/device-management#configuration-repository) in the *User guide*.


#### Enhanced firmware and software update functionality

The firmware and software update functionality has been enhanced:

* You can now manage versions for software items, and versions and patches for firmware items.

	![Firmware repository](/images/release-notes/devmgmt-firmware-list.png)

* You can install multiple software items on a device, and update or remove them separately from the **Software** tab of a device. Moreover, the **Software** tab shows the operation status for the last operation.

	![Software management](/images/release-notes/devmgmt-software-tab.png)

For details, see [Device Management > Managing device data](https://cumulocity.com/guides/10.7.0/users-guide/device-management#managing-device-data) in the *User guide*.

#### Enhanced bulk operations functionality

The bulk operations functionality has been significantly enhanced.

Details on bulk operations and their status can now be viewed in the **Bulk operations** tab on the **Device control** page. Moreover you can filter bulk operations for the operation type.

![Bulk operations](/images/release-notes/devmgmt-devicecontrol-bulk-operations-list.png)

A new wizard has been implemented to add bulk operations of the following types: Configuration update, Firmware update, Software update, Apply device profiles.

![Bulk operations](/images/release-notes/devmgmt-devicecontrol-bulk-operation-type.png)

For details, see [Device Management > Monitoring and controlling devices > Working with operations](https://cumulocity.com/guides/10.7.0/users-guide/device-management/#operation-monitoring) in the *User guide*.


#### NEW FEATURE - Device profiles

Device profiles represent a combination of a firmware version, one or multiple software packages and one or multiple configuration files which can be deployed on a device.

Based on device profiles, you can assign a specific target configuration to single devices or to multiple devices by using bulk operations.

![Device profile](/images/release-notes/devmgmt-device-profile-details.png)

For details, see [Device Management > Managing device data > Managing device profiles](https://cumulocity.com/guides/10.7.0/users-guide/device-management#device-profiles) in the *User guide*.


#### NEW FEATURE - Trusted certificates

Cumulocity IoT allows devices to connect via MQTT protocol using a X.509 certificate for authentication. To do so, a certificate must be trusted by Cumulocity IoT.

For details on how to manage trusted certificates in the UI refer to [Device Management > Managing device data > Managing trusted certificates](https://cumulocity.com/guides/10.7.0/users-guide/device-management#trusted-certificates) in the *User guide*.

![Trusted certificates](/images/release-notes/devmgmt-trusted-certificates-list.png)

For information on connecting devices using certificates refer to [Device integration using MQTT > Device certificates](https://cumulocity.com/guides/10.7.0/device-sdk/mqtt/#device-certificates) in the *Device SDK guide*.

#### New Cumulocity IoT Sensor App version

A new version of the Cumulocity IoT Sensor App, a free smartphone application,  has been released for iOS and Android smartphones. It is the successor of the previous Cloud Sensor App.

The new Cumulocity IoT Sensor App works together with the new Smartphone wizard which can be accessed through a new quick link in the welcome widget of the Cockpit application.

![Smartphone wizard](/images/release-notes/csa-connect-smartphone-wizard-step3.png)

For details, see [Cumulocity IoT Sensor App](https://cumulocity.com/guides/10.7.0/users-guide/cumulocity-sensor-app/) in the *User guide*.

#### Enhanced OPC UA device gateway functionality

The functionality of the OPC UA device gateway has been enhanced including the following aspects:

* Processing mode support has been added for the OPC UA device protocol event, alarm and measurement value mappings.
* The OPC UA device protocol plugin implicitly sets the measurement mappings' fragment name with the user-given measurement type.
* To facilitate the processing of OPC UA values transmitted as events, a new fragment containing the value has been added to the event: c8y&#95;ua&#95;DataValue.
* Alarms produced by failed HTTP post actions can now be aggregated and sent to the Cumulocity IoT platform in a configurable fixed delay.
* It is now possible to map a UA alarm severity into a Cumulocity IoT alarm severity.
* For OPC UA mappings, the alarm and event type can now have placeholders for selected attributes by using their index.
* The default configuration file packaged in the JAR is now fully commented.
* UA alarm severity mappings can now be configured in the OPC UA server managed object.

For details, see the <a href="/release-10-7-0/devices-10-7-0" class="no-ajaxy">more detailed release notes for Device management & connectivity</a> or [OPC UA](/protocol-integration/opcua) in the *Protocol integration guide*.
