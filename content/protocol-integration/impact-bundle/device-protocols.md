---
weight: 40
title: IMPACT device protocols
layout: redirect
---


To process data from IMPACT devices, {{< product-c8y-iot >}} uses device protocols. Through device protocols you can observe your resources and perform other actions like creating alarms.

Device protocols are accessible through the **Devices types** menu in the Device Management application. For details on the general usage see [Device protocols](/users-guide/device-management#managing-device-types).

![Impact protocols](/images/device-protocols/impact/impact-protocols.png)

### How to add an IMPACT device protocol

To add a new IMPACT device protocol follow these steps:

1. In the Device Management application, navigate to the **Device protocol** page, accessible from the **Device types** menu in the navigator.
2. Click **Add device protocol** in the top menu bar.
3. In the upcoming window select **IMPACT** as device protocol type.<br><br>
![New Impact protocol](/images/device-protocols/impact/impact-newprotocol.png)
4. In the next dialog, enter a unique ID, a name and an optional description for the device protocol.<br><br>
![New Impact protocol2](/images/device-protocols/impact/impact-newprotocol-idname.png)
5. Click **Create** to create the new device protocol.

The device protocol will open in a new page.

![Impact temperature](/images/device-protocols/impact/impact-temperature.png)

In the **Device protocol** page you will see the description at the top left and the ID, the creation date and date of the last update at the top right.

Below a list of resources configured for the device will be listed (which is empty when creating a new protocol), showing the ID, name and potentially configured functionalities for each resource.

Example: Resource list for the device protocol "Temperature Measurement":

![Impact resources](/images/device-protocols/impact/impact-resources.png)

### How to add a resource to a device

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
<td align="left">The instance type for the parameter. May be one of "Single" or "Multiple". The default value is "Single".</td>
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

![Impact functionalities](/images/device-protocols/impact/impact-functionalities.png)

#### Send measurements

Turn on **Send measurements** to specify a measurement.

* In the **Type** field, enter the type of the measurement, for example "c8y_AccelerationMeasurement".
* Series are any fragments in measurements that contain a "value" property. In the **Series** field you can enter for example "c8y_AccelerationMeasurement.acceleration".
* The **Unit** field specifies the unit of the given measurement, for example "m/s" for velocity.


#### Create alarm

Turn on **Create alarm** if you want to create an alarm out of the resource. Specify the following parameters (all mandatory):

* In the **Severity** field, select a severity for the alarm. May be one of CRITICAL, MAJOR, MINOR, WARNING.
* The **Type** field is a text field which is used for duplicating alarms and for configuring the priority of alarms in the Administration application.
* In the **Status** field, select an alarm status. may be one of ACTIVE, ACKNOWLEDGED, CLEARED.
* In the **Text** field, provide a textual description for the alarm.

#### Send event

Turn on **Send event** to send an event each time a certain condition has been triggered. Specify the following parameters:

* In the **Type** field, enter the type of the event, for example "com&#95;cumulocity&#95;model_DoorSensorEvent".
* In the **Text** field, enter the text which will be sent, for example "Door sensor was triggered".

#### Custom Actions

Turn on **Custom Actions** to map device data into {{< product-c8y-iot >}} using custom data processing actions. For specialized integration use cases, it is required to perform customized data processing on device data. Examples are resources of non-standard data type that contain proprietary, binary data, CBOR, XML or alike.

The set of custom actions is provided by decoder microservices available in the particular tenant. A decoder microservice is an ordinary {{< product-c8y-iot >}} microservice that implements a simple decoder interface. The IMPACT microservice calls these microservices for decoding data in a customer-specific way. We provide examples how to write such a decoder microservices in our public [Bitbucket repository](https://bitbucket.org/m2m/cumulocity-examples/src/develop/).

#### Auto observe

Enabling **Auto observe** for a resource means, that each time the device with this particular resource appears, {{< product-c8y-iot >}} will automatically receive all values. It is not necessary, to subscribe to it manually.

>**Info:** At least one functionality must be set to enable **Auto observe**.

Finally, click **Save** to create the resource. The resource will be added to the resource list.

In the resources list you can see if functionalities have been turned on for a resource. Active functionalities are indicated by the related icons. In the example below, **Send measurements** and **Auto observe** are turned on.

![Impact sensor value](/images/device-protocols/impact/impact-sensor-value.png)
