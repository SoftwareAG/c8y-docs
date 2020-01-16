---
weight: 35
title: IMPACT
layout: redirect
---


This document describes 

* in which way Nokia [IMPACT integrates with the Cumulocity platform](#integration),
* how [IMPACT devices are registered](#device-lifecycle) at Cumulocity through the IMPACT agent,
* how to work with [IMPACT device protocols](#device-protocol).

### <a name="integration"></a>IMPACT Integration
Cumulocity offers an integration with the Nokia IMPACT Data Collector which is designed to collect data from heterogeneous devices. Integrating Cumulocity with IMPACT, enables you to make use of existing Cumulocity features like connectivity monitoring, data visualization or real-time analytics with IMPACT devices.

>**Info**: Currently only the integration of LWM2M devices has been tested.

The IMPACT agent in Cumulocity registers itself at the Nokia IMPACT platform. Similarly, it subscribes to events such as devices coming online or reporting data at IMPACT. 

The following illustration provides an overview on the Cumulocity IMPACT integration.

<img src="/images/users-guide/DeviceManagement/ImpactIntegration.png" alt="IMPACT integration" style="max-width: 100%">

>**Info**: Your subscription needs to include the IMPACT feature. If you do not see the functionality described in this document, please contact the Cumulocity support.

>To be able to communicate with a device through IMPACT the device must be registered in IMPACT. How to register a device in IMPACT is not in the scope of this document.

### <a name="device-lifecycle"></a>Device lifecycle integration

IMPACT devices do not need to be registered again in Cumulocity. Cumulocity’s device lifecycle integration automatically handles the following events:

<table>
<col style="width: 20%;">
<col style="width: 40%;">
<col style="width: 40%;">
<thead>
<tr>
<th align="left">Event type</th>
<th align="left">Description</th>
<th align="left">Actions triggered in IMPACT agent</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">Registration</td>
<td align="left">A new device has been registered at IMPACT.</td>
<td align="left">Create device in Cumulocity.<br>Obtain list of resources provided by device (either from request or by querying device).<br>Subscribe to all resources that are mapped as “Auto-Observe” in the corresponding object mapping.</td>
</tr>

<tr>
<td align="left">Deregistration</td>
<td align="left">A device has been deleted in IMPACT.</td>
<td align="left">At IMPACT, unsubscribe from all resources for this device.</td>
</tr>

<tr>
<td align="left">Expiration</td>
<td align="left">A device registration in IMPACT has expired.</td>
<td align="left">Mark device in Cumulocity as disabled.</td>
</tr>
</tbody>
</table>



### <a name="device-protocol"></a>IMPACT device protocols

To process data from IMPACT devices, Cumulocity uses device protocols. Through device protocols you can observe your resources and perform other actions like creating alarms.

Device protocols are accessible through the **Devices types** menu in the Device Management application. For details on the general usage see [Device protocols](/guides/users-guide/device-management#managing-device-types).

![Impact protocols](/images/users-guide/impact/devmgmt-impact-protocols.png)

#### How to add an IMPACT device protocol

To add a new IMPACT device protocol follow these steps:

1. In the Device Management application, navigate to the **Device protocol** page, accessible from the **Device types** menu in the navigator.
2. Click **Add device protocol** in the top menu bar. 
3. In the upcoming window select **IMPACT** as device protocol type.<br><br>
![New Impact protocol](/images/users-guide/sigfox/sigfox-newprotocol.png)
4. In the next dialog, enter a unique ID, a name and an optional description for the device protocol.<br><br>
![New Impact protocol2](/images/users-guide/impact/impact-newprotocol-idname.png)
5. Click **Create** to create the new device protocol.

The device protocol will open in a new page.

![Impact temperature](/images/users-guide/impact/impact-temperature.png)

In the **Device protocol** page you will see the description at the top left and the ID, the creation date and date of the last update at the top right.

Below a list of resources configured for the device will be listed (which is empty when creating a new protocol), showing the ID, name and potentially configured functionalities for each resource.

Example: Resource list for the device protocol "Temperature Measurement":

![Impact resources](/images/users-guide/impact/impact-resources.png)

#### How to add a resource to a device

Click **Add resource** at the bottom of the resource list to add a new resource to your device.

For each resource you may specify the following parameters:

<table>
<col style="width: 20%;">
<col style="width: 65%;">
<col style="width: 15%;">
<thead>
<tr>
<th align="left">Field</th>
<th align="left">Description</th>
<th align="left">Required</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">ID</td>
<td align="left">The ID of the resource. Must be unique within one protocol object.</td>
<td align="left">Mandatory</td>
</tr>

<tr>
<td align="left">Name</td>
<td align="left">Name for the resource.</td>
<td align="left">Mandatory</td>
</tr>

<tr>
<td align="left">Type</td>
<td align="left">The parameter type. May be one of BOOLEAN, STRING, INTEGER or FLOAT.</td>
<td align="left">Mandatory</td>
</tr>

<tr>
<td align="left">Unit</td>
<td align="left">The parameter unit, e.g. Celsius, meter.</td>
<td align="left">Optional</td>
</tr>

<tr>
<td align="left">Instance Type</td>
<td align="left">The instance type for the parameter. May be one of “Single” or “Multiple”. The default value is “Single”.</td>
<td align="left">Optional</td>
</tr>

<tr>
<td align="left">Description</td>
<td align="left">A more detailed description of the resource.</td>
<td align="left">Optional</td>
</tr>
</tbody>
</table>

Optionally, you may turn on several functionalities for the resource:

![Impact functionalities](/images/users-guide/impact/impact-functionalities.png)

**Send measurements** 

Turn on **Send measurements** to specify a measurement. 

* In the **Type** field, enter the type of the measurement, for example “c8y_AccelerationMeasurement”.
* Series are any fragments in measurements that contain a “value” property. In the **Series** field you can enter for example “c8y_AccelerationMeasurement.acceleration”.
* The **Unit** field specifies the unit of the given measurement, for example “m/s” for velocity.
 

**Create alarm**

Turn on **Create alarm** if you want to create an alarm out of the resource. Specify the following parameters (all mandatory):

* In the **Severity** field, select a severity for the alarm. May be one of CRITICAL, MAJOR, MINOR, WARNING.
* The **Type** field is a text field which is used for duplicating alarms and for configuring the priority of alarms in the Administration application.
* In the **Status** field, select an alarm status. may be one of ACTIVE, ACKNOWLEDGED, CLEARED.
* In the **Text** field, provide a textual description for the alarm.

**Send event**

Turn on **Send event** to send an event each time a certain condition has been triggered. Specify the following parameters:

* In the **Type** field, enter the type of the event, for example "com&#95;cumulocity&#95;model_DoorSensorEvent".
* In the **Text** field, enter the text which will be sent, for example "Door sensor was triggered".


**Auto observe**

Enabling **Auto observe** for a resource means, that each time the device with this particular resource appears, Cumulocity will automatically receive all values. It is not necessary, to subscribe to it manually.

>**Info**: At least one functionality must be set to enable **Auto observe**. 

Finally, click **Save** to create the resource. The resource will be added to the resource list.

In the resources list you can see if functionalities have been turned on for a resource. Active functionalities are indicated by the related icons. In the example below, **Send measurements** and **Auto observe** are turned on.

![Impact sensor value](/images/users-guide/impact/impact-sensor-value.png)
