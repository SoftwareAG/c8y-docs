---
weight: 30
title: LWM2M device protocols
layout: redirect
---

To process data from LWM2M devices, {{< product-c8y-iot >}} uses device protocols.
Device protocols are accessible through the **Devices Types** menu in the Device Management application. For details on the general usage, see [Device Management > Managing device types](/users-guide/device-management/#managing-device-types) in the *User guide*.

<a name="creating_device_protocols"></a>
### Creating LWM2M device protocols

Once you have registered a device with the proper CSV file, you can manage LWM2M device protocols. Each piece of information available by the LWM2M client is a resource. The resources are further logically organized into objects. The LWM2M client can have any number of resources, each of which belongs to an object. In the device protocols you can observe your resources. Furthermore, you can choose whether to create measurements, events or alarms out of those resources.

To add a new LWM2M device protocol follow these steps:

1. In the Device Management application, move to the **Device protocol** page.
2. Click **Add device protocol** in the top menu bar.
3. In the upcoming dialog select **LWM2M** as device protocol type. <br><br>

![Add new protocol](/images/device-protocols/lwm2m/lwm2m-newprotocol.png)

4. Next, upload an appropriate DDF or XML file. DDF or XML files describe the data provided by your device. They are typically provided by the manufacturer or by standards bodies such as IPSO. There are also 3 "special" device protocols (DDF files) for standard OMA objects: 6 (location tracking), 5 (firmware update) and 3 (device information). If these files are not uploaded, then neither location tracking nor firmware updates will work. By default, the LWM2M agent adds mappings to these objects and knows how to "handle" their information without any additional configuration. The XML schema used by LWM2M can be found at [http://www.openmobilealliance.org/tech/profiles/LWM2M.xsd](http://www.openmobilealliance.org/tech/profiles/LWM2M.xsd). <br>
If the DDF files for the default mappings are uploaded in the {{< management-tenant >}}, all subscribed user tenants will inherit this behavior. <br><br>

![Upload DDF file](/images/device-protocols/lwm2m/lwm2m-uploadDDF.png)

5. In the next dialog, you can see the name and description of the protocol. Click **Complete** to create the new device protocol. <br><br>

![Upload DDF file](/images/device-protocols/lwm2m/lwm2m-uploadprotocol.png)

The device protocol will open in a new page.

![Example protocol](/images/device-protocols/lwm2m/lwm2m-protocol-example.png)

In the device protocol page, you will see the description at the top left and the ID, the creation date and date of the last update at the top right.

Below, a list of resources configured for the device will be listed (which is empty when creating a new protocol), showing the ID, name and potentially configured functionalities for each resource.

{{< c8y-admon-info >}}
LWM2M protocol resources cannot be edited.
{{< /c8y-admon-info >}}

Example: In the following screenshot you can see an example device protocol. This object should be used with a temperature sensor to report a temperature measurement. It also provides resources for minimum/maximum measured values and the minimum/maximum range that can be measured by the temperature sensor. An example measurement unit is "degrees Celsius".

![Example protocol2](/images/device-protocols/lwm2m/lwm2m-temperature-example.png)

<a name="resources"></a>
### Adding additional functionalities to a resource

The functionalities that you may enable are the following:

![Resource functionalities](/images/device-protocols/lwm2m/lwm2m-functionalities.png)

#### Send measurement

Turn on **Send measurement** to specify a measurement.

- Enter the type of the measurement. For example, "c8y_AccelerationMeasurement".
- Series are any fragments in measurements that contain a "value" property. For example, in the series field you can enter: "c8y_AccelerationMeasurement.acceleration".
- The "Unit" field specifies the unit of the given measurement. For example, "m/s" for velocity.

#### Create alarm

Turn on **Create alarm** if you want to create an alarm out of the resource. Specify the following parameters (all mandatory):

- Severity - one of CRITICAL, MAJOR, MINOR, WARNING.
- Type.
- Status - one of ACTIVE, ACKNOWLEDGED, CLEARED.
- Text.

#### Send Event

Turn on **Send event** to send an event each time you receive a resource value. Specify the following parameters:

- Enter the type of the event. For example, "com_cumulocity_model_DoorSensorEvent".
- Enter the text which will be sent. For example, "Door sensor was triggered".

#### Custom Actions

Turn on **Custom Actions** to map LWM2M data into {{< product-c8y-iot >}} using custom data processing actions. For specialized integration use cases, it is required to perform customized data processing on LWM2M data. One example are LWM2M resources of the OPAQUE data type that contain proprietary, binary data, CBOR, XML or alike.

![Custom actions](/images/device-protocols/lwm2m/lwm2m-customactions.png)

{{< product-c8y-iot >}} LWM2M allows the set of custom actions to be extended using decoder microservices. A decoder microservice is an ordinary {{< product-c8y-iot >}} microservice that implements a simple decoder interface. The LWM2M agent calls this microservice for decoding data in a customer-specific way. We are providing an according example how to write such a decoder microservice in our public [GitHub repository](https://github.com/SoftwareAG/cumulocity-examples).

##### Predefined custom actions

There are several predefined custom actions which can be selected to apply actions to the relevant resources.
![Predefined custom actions](/images/device-protocols/lwm2m/lwm2m-predefined-custom-actions.png)

Actions that are relevant for Device (/3):
- device:updateManufacturer
  - Adds manufacturer information to the name of the device in the following format &ldquo;LWM2M &lt;manufacturer&gt; &lt;registration endpoint&gt;&rdquo;
- device:updateModelNumber
  - Stores to the device managed object with the `c8y_Hardware` fragment &ldquo;model&rdquo; property.
- device:updateSerialNumber
  - Stores to the device managed object with the `c8y_Hardware` fragment &ldquo;serialNumber&rdquo; property.
- device:updateFirmwareVersion
  - Stores to the device managed object with the `c8y_Hardware` fragment &ldquo;revision&rdquo; property.

Actions that are relevant for connectivity monitoring (/4):
- connectivity:updateCellId
  - Stores to the device managed object with the `c8y_Mobile` fragment &ldquo;cellId&rdquo; property.
- connectiviy:updateSmnc
  - Stores to the device managed object with the `c8y_Mobile` fragment &ldquo;mnc&rdquo; property.
- connectivity:updateSmcc
  - Stores to the device managed object with the `c8y_Mobile` fragment &ldquo;mcc&rdquo; property.
- connectivity:updateRssi
  - Stores the value as device measurement with the `c8y_SignalStrength` type and fragment and &ldquo;rssi&rdquo; property.
  - In the same measurement, stores resource path information in &ldquo;resourcePath&rdquo; fragment and also in &ldquo;objectResourcePath_&lt;resource path&gt;&rdquo; fragment name.
  - In the same measurement, stores device name information in &ldquo;device!Name&rdquo; fragment.
  - In the same measurement, stores device mobile information in &ldquo;device!c8y_Mobile&rdquo; fragment.

Below is an example where the &ldquo;connectivity:updateRssi&rdquo; custom action is selected for the Connectivity monitoring (/4) radio signal strength in order to create the signal measurement for the device.
![Custom actions for connectivity signal strength](/images/device-protocols/lwm2m/lwm2m-custom-action-connectivity-signal.png)

#### Auto observe

If **Auto-Observe** is turned on for a resource, the LWM2M server observes a specific resource for changes.

{{< c8y-admon-info >}}
At least one functionality must be set to enable "Auto observe".
{{< /c8y-admon-info >}}

![Resource](/images/device-protocols/lwm2m/lwm2m-autoobserve.png)


### Alarms on device protocol mapping failures

There are 2 types of alarms raised related to device protocol mapping failures.

![Alarms on mapping failures](/images/device-protocols/lwm2m/lwm2m-mapping-failure-alarms.png)

- Alarm for no mapping known: This alarm is raised when value is read or observed but no mapping for this resource is found.
This can be resolved by importing device protocol for this resource.

- Alarm due to non-numeric/non-boolean value received for measurement mapping: This alarm is raised when the resource has a measurement mapping set up but measurement cannot be created because received value is a non-numeric/non-boolean value.
