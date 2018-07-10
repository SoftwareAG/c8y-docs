---
order: 65
title: LightweightM2M
layout: redirect
---

Lightweight M2M (LwM2M) is a traffic and resource-optimized protocol to remotely manage IoT devices. The protocol is standardized by the Open Mobile Alliance. For more information, see [here](http://openmobilealliance.org/iot/lightweight-m2m-lwm2m).

You can connect any device supporting LwM2M to Cumulocity without programming. Instead, you configure how LwM2M devices are mapped to Cumulocity using device protocols. 

![Device protocols](/guides/images/users-guide/LWM2M/deviceprotocols.png)


### <a name="register"></a>Registering LwM2M devices

To connect LwM2M devices, you need to upload a CSV file with registration data. This data is required to enable LwM2M communication. The CSV holds all information for factory bootstrap and client-initiated bootstrap. In the factory bootstrap mode, the LwM2M client has been configured with the necessary bootstrap information prior to the deployment of the device. The client initiated bootstrap mode requires a LwM2M bootstrap-server account pre-loaded in the LwM2M client. Below, you can see two CSV examples:

![CSV example 1](/guides/images/users-guide/LWM2M/csv1.png)

In the first CSV example you can see the following fields:

|Field|Description|
|:----|:----------|
|ID|Unique ID of the device. For example, the ID could be an IMEI, serial number, etc.|
|IDTYPE|The type of the device.|
|CREDENTIALS|The content of this field is not used by LwM2M.|
|NAME|The name of the device. In this case the name of the device is the same as the device ID.|
|TYPE|This field needs to have the value "c8y_lwm2m”.|
|SHELL|To enable “Shell”, the value of this field must be “1”. If you want to disable “Shell” the value must be “0”. For more info about the shell commands, see [here](#shellcommands).|
|com_cumulocity_model_Agent|This field needs to have the value "1".|
|endpoint id|Indicates the LwM2M client’s “Endpoint ID” in order to allow the LwM2M bootstrap to provision the bootstrap information for the LwM2M client.|
|lwm2m server url|The URL the server is using for bootstrap. The LwM2M bootstrap server is used to provision the LwM2M client with the information required to contact the LwM2M servers.|
|securityMode|In this example the value of the security mode is “NO_SEC” which means that there is no security. It is highly recommended to always protect the LwM2M protocol. However, there are scenarios in which the LwM2M protocol is deployed in environments where the lower layer security mechanisms are provided. Currently Cumulocity supports only “NO_SEC” and “PSK”. With “PSK”, the client and server have a common secret symmetric cryptography. In the next example you will see how the CSV file should look when the security mode value is “PSK”.|

![CSV example 2.1](/guides/images/users-guide/LWM2M/example_2_1.png)
![CSV example 2.2](/guides/images/users-guide/LWM2M/example_2_2.png)

In this CSV example, the security mode value is “PSK”, hence additional fields are required. The table below reflects the full set of possible fields.

|Field|Type|Description|Mandatory|
|:----|:---|:----------|:--------|
|lwm2m psk_key|String|For Security Mode PSK: The key used by the device for LWM2M in PSK mode. Will be delivered to the device during bootstrap|Mandatory for PSK. Should not be set for NO_SEC|
|lwm2m psk_id|String|For Security Mode PSK: The id used by the device for LWM2M in PSK mode. Will be delivered to the device during bootstrap. Mostly the same as the endpoint name|Mandatory for PSK. Should not be set for NO_SEC|
|endpoint id|String|The name of the LWM2M endpoint|Yes|
|bootstrap psk_id|String|For Security Mode PSK: The id used by the device for bootstrapping in PSK mode.|Yes for PSK|
|bootstrap psk_key|String|For Security Mode PSK: The key used by the device for bootstrapping in PSK mode.|Yes for PSK|
|lwm2m server uri|String|The URL of the LWM2M server to be sent to the devices during bootstrap.|Yes, for LWM2M bootstrap|
|securityMode|String, “NO_SEC” or “PSK|The LWM2M securityMode to use. Possible values are PSK and NO_SEC.|Yes|
|serverPublicKey|String|The public key of the server.|optional|
|generateBootstrapServerConfig|Boolean|Toggles if Cumulocity generates a server Config for the LWM2M Bootstrap server and writes that back during bootstrap. Default is false.|Optional|
|securityInstanceOffset|Integer|The first instance to use during Bootstrap to which entries are written. "0" is default. If set e.g. to "3", the first instance will be three.|Optional|
|bootstrapShortServerId|Integer|The short server ID to use for the bootstrap server. Default is "0".|Optional|
|lwm2mShortServerId|Integer|The short server ID to use for LWM2M server. Default is "1".|Optional|
|registrationLifetime|Integer|The registrationLifetime that is sent to the device during bootstrap. Overrides global agent configuration.|Optional|
|defaultMinimumPeriod|Integer|The defaultMinimumPeriod to configure during Bootstrap. See LWM2M Spec for explanation.|Optional|
|defaultMaximumPeriod|Integer|The default max perioid  to configure during Bootstrap. See LWM2M Spec for explanation.|Optional|
bindingMode|String|The LWM2M binding Mode to report to the device. Supported are “UQ” (default, queuing) and “U” (Unqueued). Please note that Cumulocity will always queue operations.|Optional|
notificationIfDisabled (true/false)|Boolean|See LWM2M spec. Default: Not configured.|Optional, defaults to Leshan default behavior|
|disableTimeout (true/false)|Boolean|See LWM2M spec. Default: Not configured.|Optional, defaults to Leshan default behavior|
|external-c8y_BootstrapPskId|String|The ID being used to find a device during bootstrap.|Optional|


> **Info**: Firmware updates are also supported. For more information, see [here](https://www.cumulocity.com/guides/users-guide/device-management/#software-repo).

### <a name="device_protocols"></a>LwM2M device protocols

To process data from LwM2M devices, Cumulocity uses device protocols.
Device protocols are accessible through the “Devices Types” menu in the Device Management application. For details on the general usage, see Device protocols (add link).

### <a name="creating_device_protocols"></a>Creating LwM2M device protocols

Once you have registered a device with the proper CSV file, you can manage LwM2M device protocols. Each piece of information available by the LwM2M client is a resource. The resources are further logically organized into objects. The LwM2M client can have any number of resources, each of which belongs to an object. In the device protocols you can observe your resources. Furthermore, you can choose whether to create measurements, events or alarms out of those resources. 

To add a new LWM2M device protocol follow these steps: 

1. In the Device Management application, move to the “Device protocol” page.
2. Click **Add device protocol** in the top menu bar.
3. In the upcoming dialog select **LWM2M** as device protocol type.

<img src="/guides/users-guide/LWM2M/protocol_type.png" alt="Protocol type" style="max-width: 50%">

4. Next, upload an appropriate DDF or XML file. DDF or XML files describe the data provided by your device. They are typically provided by the manufacturer or by standards bodies such as IPSO. There are also 3 "special" device protocols (DDF files) for standard OMA objects: 6 (location tracking), 5 (firmware update) and 3 (device information). If these files are not uploaded, then neither location tracking nor firmware updates will work. By default, the LWM2M agent adds mappings to these objects and knows how to "handle" their information without any additional configuration. The XML schema used by LWM2M can be found here.

> **Info**: If the DDF files for the default mappings are uploaded in the management tenant, all subscribed user tenants will inherit this behavior.

![Upload DDF](/guides/images/users-guide/LWM2M/uploadDDF.png)

5. In the next dialog, you can see the “Name” and “Description” of the protocol. Click **Continue** to create the new device protocol.

![Name descr protocol](/guides/images/users-guide/LWM2M/name_descr_protocol.png)

The device protocol will open in a new page.

![Example protocol](/guides/images/users-guide/LWM2M/example_protocol1.png)

In the device protocol page you will see the description at the top left and the ID, the creation date and date of the last update at the top right.

Below, a list of resources configured for the device will be listed (which is empty when creating a new protocol), showing the ID, name and potentially configured functionalities for each resource.

> **Info**: LWM2M protocol resources cannot be edited. 

Example: In the following screenshot you can see an example device protocol. This object should be used with a temperature sensor to report a temperature measurement. It also provides resources for minimum/maximum measured values and the minimum/maximum range that can be measured by the temperature sensor. An example measurement unit is “degrees Celsius”.

![Example protocol2](/guides/images/users-guide/LWM2M/example_protocol2.png)

#### <a name="resources"></a>Adding additional functionalities to a resource

The functionalities that you may enable are the following: 

![Resource functionalities](/guides/images/users-guide/LWM2M/functionalities.png)

**Send measurement**

Turn on **Send measurement** to specify a measurement.

- Enter the type of the measurement. For example, “c8y_AccelerationMeasurement”.
- Series are any fragments in measurements that contain “value” property. For example, in the series field you can enter: “c8y_AccelerationMeasurement.acceleration”
- The “Unit” field specifies the unit of the given measurement. For example, “m/s” for velocity.

**Create alarm**

Turn on **Create alarm** if you want to create an alarm out of the resource. Specify the following parameters (all mandatory):
- Severity - one of CRITICAL, MAJOR, MINOR, WARNING
- Type
- Status - one of ACTIVE, ACKNOWLEDGED, CLEARED
- Text

**Send Event**

Turn on **Send event** to send an event each time you receive a resource value. Specify the following parameters:

- Enter the type of the event. For example, "com_cumulocity_model_DoorSensorEvent".
- Enter the text which will be sent. For example, "Door sensor was triggered".

**Custom Actions **

Adding a custom action to a mapping invokes custom specific mapping actions, for example custom decoders for opaque data. The dialog allows you to select a custom action from a dropdown box.

![Custom actions](/guides/images/users-guide/LWM2M/customactions.png)

**Auto observe**

If **Auto-Observe** is turned on for a resource, the LwM2M server observes a specific resource for changes.

> **Info**: At least one functionality must be set to enable "Auto observe".

![Resource](/guides/images/users-guide/LWM2M/resources.png)

### <a name="shell_commands"></a> Handling LwM2M shell commands 

In the “Shell” tab of a device, LwM2M shell commands can be performed. Each command has a different functionality. Find all available placeholders (e.g. “objectID”, “instanceID”) and commands with their respective descriptions below:

|Placeholder|Description|
|:----------|:----------|
|objectID|The ID of the object.|
|instanceID|The ID of the instance. Some objects can have multiple instances. For example, “3300” is a temperature sensor object. Each device can have up to 10 sensors. In this case the instance ID would be 3300/1...10 depending on the sensor that you would like to focus.|
|resourceID|The ID of the desired resource. The resources describe the characteristics of each object. All instances of a given object have the same resources, but the value of the resources may be different.|
|Firmware version|The current version of the firmware.|
|Firmware url|The URL from which the new version of the firmware will be downloaded.|

In the next table you will see all available commands and a brief description of their functionality.

|Command|Description|
|:------|:----------|
|read /<objectID>/<instanceID>/<resourceID>|Reads a resource path.|
|observe /<objectID>/<instanceID>/<resourceID>|Enables the observe functionality.|
|execute /<objectID>/<instanceID>/<resourceID>|Executes a resource on the device.|
|cancelobservation /<objectID>/<instanceID>/<resourceID>|Cancels the observation functionality from the desired resource.|
|delete /<objectID>/<instanceID>[/<resourceID>]|Deletes a given object/instance/resource.|
|discover /<objectID>/<instanceID>/<resourceID>|Shows all resources of the given object.|
|create /<objectID> [JSON]|Creates a new object. The JSON argument is optional.|
|writeattr /<objectID>/<instanceID>/<resourceID> {pmin=<sec>}{&pmax=<sec>}{&greater=<num>}{&less=<num>}{&step=<num>}{&cancel}|Writes additional attributes to the object. Typically used for conditional observes.|
|fwupdate /<Firmware name>/<firmware version>/<firmware_ur>/l|Updates the firmware of the agent.|

### <a name="validation_rules"></a> Adding validation rules to resources

Validation rules are used to verify that the data a user enters in a resource meets the constraints you specify before the user can save the resource. 

Validation rules can only be added to resources which have “write” permissions. Resources which can have validation rules also have the following icon: 

![Validation rule icon](/guides/images/users-guide/LWM2M/validation_rule_icon.png)

When hovering over the icon, you can see whether there are defined validation rules.

Add a new validation rule by clicking on the desired resource and then on the **Add validation rule** button.

![Add validation rule](/guides/images/users-guide/LWM2M/add_validation_rule.png)

Validation rules can have the following types:

- **Date:** Simply enter a date and choose your desired rule.
- **Number:** Only values of “Integer” or “Float” type are allowed depending on the resource.
- **ObjectLink:** Reference to another object using this format “/Object/Instance/Resource”.
- **Regex:** Add a string which describes the validation pattern. For example, “.*dd” would mean that the string should end with “dd”.
- **String:** Enter string value which can be either “True” or “False.

After selecting a type, the following rules can be chosen:

- Greater than
- Lowers than
- Equals
- Equals not
- Greater or equals than
- Lower or equals than

**Info:** Not all rules are available to each type.

To remove a rule, simply click on the following icon:

![Remove lwm2m rule](/guides/images/users-guide/LWM2M/lwm2m-rule-remove.png)

When ready, click **Save.**

#### Complex rulesets

In order to enable more complex conditions,  multiple validation rules can be defined for a resource: 

- Multiple rules can be defined in a validation rule group. A user input is only valid if each of the rules in the validation rule group is satisfied (logical And)
- It is possible to declare multiple validation rule groups. If multiple validation rule groups are declares, user input is valid if any of the validation rule groups is satisfied (logical OR)

The screenshot above gives an example for the use of validation rule groups: User input is valid if the given string does not match “test” (equals not). It is also valid if it ends with “asd” and it matches the contents of the LWM2M resource /3/0/15. 
Complex Rulesets are based on Boolean Disjunctive Normal Form, which allows arbitrary complex rules to be defined.




	