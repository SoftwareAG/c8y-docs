---
weight: 10
title: What´s new
layout: redirect
---

### Device Management

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

### New Cumulocity IoT Sensor App

A new version of the Cumulocity IoT Sensor App, a free smartphone application,  has been released for iOS and Android smartphones. It is the successor of the previous Cloud Sensor App.

The new Cumulocity IoT Sensor App works together with the new Smartphone wizard which can be accessed through a new quick link in the welcome widget of the Cockpit application.

![Smartphone wizard](/images/users-guide/csa/csa-connect-smartphone-wizard-step3.png)

For details, see [Cumulocity IoT Sensor App](/users-guide/cumulocity-sensor-app/) in the *User guide*.


### Improved UI performance

Various changes have been implemented to improve the UI performance significantly. These include:

* [MTM-32456] Administration: On the <b>Inventory roles</b> tab in the user details, the groups tree is now loaded progressively. Only the root groups are loaded. The user can click each group to expand the subgroups, or click <b>Expand all groups</b> to expand every subgroup in sequence.
* [MTM-32437] Cockpit & Device Management: The "withChildren:false" parameter has been added to several calls to inventory.
* [MTM-32441] Cockpit & Device Management: In the subassets view of group details, the objects are now fetched from inventory using the childAssets endpoint instead of advanced querying (in-group).
* [MTM-32870] Cockpit & Device Management: Improved the performance of the navigator groups items by changing how the inventory API is called to fetch managed objects.
* [MTM-32452] Cockpit & Device Management: In the view for root level groups the number of children for a group is no longer displayed by default but only shown on mouseover.
* [MTM-32450] Cockpit & Device Management: On the root groups views, the query to inventory uses the flags onlyRoots=true and withChildren=false.
* [MTM-32462] Device Management: In the group assignment widget under device details, the list of available groups is now only retrieved when the user expands the dropdown.
* [MTM-32458] Device Management: The default page size for the device list is now 40.
* [MTM-29924] UI: Performance has been improved by making breadcrumbs on devices and groups configurable. Per default, breadcrumbs on devices and groups are now turned off. They can be turned on by setting the <code>breadcrumbs</code> application option, see http://resources.cumulocity.com/documentation/websdk/ngx-components/classes/ApplicationOptions.html#breadcrumbs. All other breadcrumbs are still displayed.

### OPC UA device gateway

The functionality of the OPC UA device gateway has been enhanced including the following aspects:

* [MTM-30895] Processing mode support has been added for the OPC UA device protocol event, alarm and measurement value mappings. It is possible to define one processing mode for the device protocol and also override the processing mode for any event, alarm, measurement value mapping. If the processing mode is not defined then all the mappings will be saved in regular persistent mode. At the moment, the feature is only available via Rest API by using device protocol endpoints. Supported processing modes are PERSISTENT, TRANSIENT, QUIESCENT, CEP for measurement and event and only PERSISTENT for alarm mappings. If the given processing mode is not supported for the mapping then a warning log is given in the opcua-device-gateway logs when the device type is being applied and the default mode (PERSISTENT) is selected for those mappings.
* [MTM-32635] The OPC UA device protocol plugin implicitly sets the measurement mappings' fragment name with the user-given measurement type which makes opcua-device-gateway to use this value as the measurement fragment name instead of auto-generating the name based on the node ID. The <b>Measurement</b> tab of the device displays the fragment name as the title for the measurement.
* [MTM-29823] To facilitate the processing of OPC UA values transmitted as events, a new fragment containing the value has been added to the event: c8y&#95;ua&#95;DataValue.
* [MTM-32596] Alarms produced by failed HTTP post actions can now be aggregated and sent to the Cumulocity IoT platform in a configurable fixed delay.
* [MTM-31146] It is now possible to map a UA alarm severity into a Cumulocity IoT alarm severity.
* [MTM-32635] For OPC UA mappings, the alarm and event type can now have placeholders for selected attributes by using their index.
* [MTM-33266] The default configuration file packaged in the JAR is now fully commented.
* [MTM-35656] UA alarm severity mappings can be configured in the OPC UA server managed object.

For details, see [OPC UA](/protocol-integration/opcua) in the *Protocol integration guide*.
