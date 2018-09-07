---
order: 60
title: LoRa Actility
layout: redirect
---

Cumulocity can interface with LoRa devices through Actility's ThingPark Wireless. You can:

* Provision and deprovision LoRa devices easily using the Cumulocity Device Management. No interaction in the ThingPark user interface is required. 
* Decode upstream payload packets using a web-based user interface.
* Debug and postprocess raw device data through Cumulocity events.
* Send downstream data to the device using Cumulocity operations.
* Make use of existing Cumulocity features with LoRa devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

The following illustration gives an overview of the Cumulocity LoRa Actility integration.

![Cumulocity LoRa Actility integration](/guides/images/users-guide/actility/Cumulocity-LoRa-Actility-integration.png)

The following sections describe how to:

* [Configure your ThingPark account credentials](#configure-credentials) in Cumulocity
* [Create device types](#create-device-types) with Cumulocity's device database
* [Register devices](#register-device) and visualize Actility payload using Cumulocity
* [Deprovision a device](#deprovision-device) in ThingPark
* [Send operations](#configurable-port) to a device
* [ThingPark Api availability monitoring](#thingpark-monitoring) in Cumulocity

> Note that your subscription needs to include this feature. If you do not see the functionality described in this document, please contact support.

### <a name="configure-credentials"></a>Configuring ThingPark account credentials

Before using LoRa devices with Cumulocity, you need to configure your ThingPark account details in the Cumulocity Administration application. In order to create new credentials or replace existing ones, go to the Administration application and select "Connectivity" in "Settings" in the navigator. 

#### <a name="create-new-credentials"></a>Creating new account credentials

If you go to "Connectivity" for the first time, you will be asked to provide credentials and application EUI which is used for LoRa device provisioning. 

Enter the following information:

- **profile ID**: This depends on your ThingPark account and environment. If you are using, for example, the Dev1 ThingPark environment your profile ID will be "dev1-api". Multiple tenants can have the same profile id.
- **username**: your ThingPark user name
- **password**: your ThingPark password 
- **application EUI**: This is a global application ID in the IEEE EUI64 address space that uniquely identifies the application provider of the device. It is a 16 character (8 byte) long hexadecimal number. There can be only one application EUI for a tenant but multiple tenant can have the same application EUI.

Do not use the same ThingPark login (username and password) for other tenants. 
The profile ID, username and password are used to retrieve an access token to send further requests to the ThingPark platform. It is possible to renew the access token by replacing the account credentials.

![Setting device credentials](/guides/images/users-guide/actility/credentials-new-2.png)

Click "Save". If everything is okay, there will be a message "Credentials successfully saved".

#### <a name="replace-credentials"></a>Replacing account credentials

In order to replace your credentials, click the "Replace credentials" button.

Enter your profile ID, username, password and application EUI. For an explanation of the terms "profile ID" and "application EUI", refer to section [Creating new account credentials](#create-new-credentials) above.

<img src="/guides/images/users-guide/actility/providerCredentials2.png" alt="Account credentials" style="max-width: 100%">

Click "Save". Your old credentials will now be replaced with the new ones. 

### <a name="create-device-types"></a>Creating device types

To process data from LoRa devices, Cumulocity needs to understand the payload format of the devices.
Mapping a payload data to Cumulocity data can be done by creating a LoRa device type.
During the [device registration](#register-device), you can associate this device type and afterwards the received uplink callbacks for this device with a hexadecimal payload will be mapped to the ones you have configured in your device type.
If a device type has been changed after being associated to a device, the reflection of the change can take up to 10 minutes because of the refresh mechanism of the Actility Server Side Agent.

> Note that device protocol mapping only supports decoding for fixed byte positions based on the message type. 

In order to create device types, go to the Device Management application and select "Device database" in the "Device types" menu in the navigator. You can either import an existing device type or create a new one. 

#### <a name="import-device-type"></a>Importing a predefined device type
In the Device database window, click the "Import" button. 

Select the predefined device type, for example "LoRaWAN Demonstrator". Click "Import".

<img src="/guides/images/users-guide/actility/deviceDatabaseImport.png" alt="Import a predefined device type" style="max-width: 60%">

Alternatively you may also load the device type from a file and import it.

#### <a name="create-new-device-type"></a>Creating a new device type

In the device database window, click the "New" button. The following window will open:

<img src="/guides/images/users-guide/actility/deviceDatabase-createNew.png" alt="Create new device type" style="max-width: 100%">

Select "LoRa" as the device type and name your device type. 

In the next UI section you determine the message type. LoRa devices can send messages of different types with different encodings per type. Depending on the device, the type can be determined by looking either at the FPort parameter of a message (Source: FPort) or at the subset of the message payload itself (Source: Payload). 

Select the way the message type is encoded in the "Source" dropdown box:  

- **FPort**: if the message type can be determined by looking at the FPort parameter of a message  
- **Payload**: if the message type can be determined by looking at the subset of the message payload itself   

In the following example payload structure, the first byte indicates the message type source (as highlighted).

<img src="/guides/images/users-guide/actility/payload-example1.png" alt="Example payload: message type source" style="max-width: 100%">

In the user interface you can enter this type of message type source information as follows: Indicate in the "Start bit" field where the message type information starts in the payload and how long this information is in the "Number of bits" field, for example start bit = "0" and number of bits = "8".

<img src="/guides/images/users-guide/actility/messagetype-payload.png" alt="Message type payload" style="max-width: 100%">

Click the "Add" button to create the value configuration. 

<img src="/guides/images/users-guide/actility/deviceDatabase1a.png" alt="Device type: new" style="max-width: 100%">

A window similar to the following one will open. Configure the relevant values as shown in this example. 

<img src="/guides/images/users-guide/actility/deviceDatabase4.png" alt="Value configuration: new" style="max-width: 60%">

The value configuration maps the value in the payload of a message type to the Cumulocity data. 

Configure the "Message ID" according to your device message specification and map it to the Cumulocity data. The message ID is the numeric value identifying the message type. It will be matched with the message ID found in the source specified on the device type main page (i.e. Payload or FPort). The message ID needs to be entered in decimal numbers (not hex).

In this example payload structure the message ID is "1".

<img src="/guides/images/users-guide/actility/payload-example2.png" alt="Example payload: message type source" style="max-width: 100%">

<img src="/guides/images/users-guide/actility/deviceDatabase4a.png" alt="Value configuration: message type" style="max-width: 60%">

Fill in the general fields for your new value in order to categorize it in the "Values" list. The associated "Name" for this value will be displayed under the "Display category" given.

Under "Value selection" define from where the value should be extracted. In order to do so, indicate where the value information starts in the "Start bit" field and how long this information is in the "Number of bits" field.

In this example the "Channel 1 Type" information starts in byte 2 (i.e. start bit = "16") and is 1 byte long (i.e. number of bits = "8").

<img src="/guides/images/users-guide/actility/payload-example3.png" alt="Example payload: value selection" style="max-width: 100%">

<img src="/guides/images/users-guide/actility/deviceDatabase4b.png" alt="Value selection" style="max-width: 60%">

The hexadecimal value is converted to a decimal number and afterwards a "value normalisation" is applied.

Under "Value normalisation" define how the raw value should be transformed before being stored in the platform and enter the appropriate values for:

- **Multiplier**: This value is multiplied with the value extracted from the "Value selection". It can be decimal, negative and positive. By default it is set to 1. 
- **Offset**: This value defines the offset that is added or subtracted. It can be decimal, negative and positive. By default it is set to 0.
- **Unit** (optional): A unit can be defined which is saved together with the value (e.g. temperature unit "C" for degree Celsius).

For detailed information on how to decode the payload, refer to the documentation of the device.

> Note: "Little endian" support to decode the payload has been added.

Select the options, if required: "Signed" (if the value is a signed number) or "Packed decimal" (if the value is BCD encoded).

In the functionalities, define how this device type should behave:

- **Send measurement**: creates a measurement with the decoded value
- **Raise alarm**: creates an alarm if the value is not equal to zero
- **Send event**: creates an event with the decoded value
- **Update managed object**: updates a fragment in a managed object with the decoded value

You can also have a nested structure with several values within a measurement, event or managed object fragment. In case of a measurement all the properties of the same type will be merged to create a nested structure. In case of an event or a managed object all the properties with the same fragment are merged to create a nested structure. (Also refer to the [example](#nested-structure-example) of a nested structure for a "Position" device type below.)

After clicking "OK", the values are added to your device type. 

![Value configurations of created device type](/guides/images/users-guide/actility/deviceDatabase1.png)

After clicking "Save", your device type is created with the values you defined.

**Example with single property**

The following picture shows an example for a message which sends a measurement when this value (the battery level) changes. 

<img src="/guides/images/users-guide/actility/deviceDatabase2.png" alt="Value configuration in detail: measurement" style="max-width: 50%">


**<a name="nested-structure-example"></a>Example with nested structure**

The following picture shows an example of a nested structure for a device type reporting the current position of a GPS device. The device type is named "Position" and contains values for longitude and latitude. 

The "Message ID" should be the same for all the values. Enter the rest of the parameters according to the instructions above. Enter "c8y_Position" in the "Managed object fragment" field and create a new value for each: longitude and latitude. 

<img src="/guides/images/users-guide/actility/deviceDatabase5-lon.png" alt="Value creation: Longitude-nested" style="max-width: 60%">

<img src="/guides/images/users-guide/actility/deviceDatabase5-lat.png" alt="Value creation: Latitude-nested" style="max-width: 60%">

This will be the result: 

![Value configuration in detail: nested structure](/guides/images/users-guide/actility/deviceDatabase5.png)

### <a name="register-device"></a>Registering LoRa devices

In order to register a LoRa device, go to the Device Management application and click "Device Registration" in the Quick links. Click "Register device". The following window opens:

![Register devices](/guides/images/users-guide/actility/deviceRegistration1.png)

Click "LoRa". 

Cumulocity fully supports the LoRa device provisioning with Over-the-Air Activation (OTAA) which is the preferred and most secure way to connect with the LoRa network.
If Activation by Personalization (ABP) is required to be used, please see the [LoRa device registration with ABP](#device-registration-with-abp-activation) section.

In the next window fill in the required information: 

- **Device profile**: Select the appropriate device profile from the drop-down list. 
- **Device type**: Select the appropriate device type from the drop-down list. 
- **Device EUI**: This is the unique identifier for the device. It is a 16 character (8 byte) long hexadecimal number. You can find it on the device itself.
- **Application key**: This is an AES-128 application key specific for the device that
is assigned to the device by the application owner and is responsible to encrypt. The application key is a 32 character (16 byte) long hexadecimal number.
JOIN communication. You can find this key on the device itself.
- **Connectivity plan**: Select the appropriate connectivity plan from the drop-down list.

The following picture shows an example for device registration. 

![Register devices](/guides/images/users-guide/actility/deviceRegistration3.png)

After clicking "Next" the device registration request will be submitted and the device will be created.

You can verify that the device is really connected by checking that events are actually coming in. You can do so by clicking on a device and opening the "Events" tab. All events related to this device are listed here.  

For more information on viewing and managing your connected devices, also refer to 
[Device Management](/guides/users-guide/device-management).

#### <a name="device-registration-process"></a>LoRa device registration process

<img src="/guides/images/users-guide/actility/lora_device_registration_process.png" style="max-width: 60%">

#### <a name="device-registration-with-abp-activation"></a>LoRa device registration with Activation by Personalization (ABP)

Activating the device by personalization is not suggested and not fully supported in Cumulocity LoRa device registration.
However, if you would like to create a device with this activation type in Cumulocity and use the LoRa features such as sending operations to a device, deprovisioning a device and setting LoRa device type with custom device protocol configuration, you must first provision the device in the ThingPark platform. Moreover you have to create "AS Routing Profile" for Cumulocity using destination "http://actility-server.cumulocity.com" as a "Third Party AS (HTTP)" and assign it to your devices manually. Afterwards, you can register this device using LoRa device registration. In this case, the application key field in the LoRa device registration is invalid.

#### <a name="legacy-LoRa-devices"></a>Limitations for LoRa devices which were not created using LoRa device registration

The general device registration for LoRa devices is no longer supported.
The existing LoRa devices that were already created in Cumulocity with the general device registration process have limitations. For those devices, it is not possible to send operations to device, deprovision device and set LoRa device type with custom device protocol configuration.
It is recommended to delete and re-register these devices using LoRa device registration to fully use the LoRa feature.

### <a name="deprovision-device"></a>Deprovisioning LoRa devices

You can deprovision a LoRa device in the ThingPark platform. This means that the device will no longer be connected to the network. Its history data will still be available in Cumulocity, but the device will be deleted in ThingPark.  

To deprovision a device, go to the Device Management application and navigate to the device you want to deprovision. Click the cogwheel and select "Deprovision device".

<img src="/guides/images/users-guide/actility/deprovisionDevice.png" alt="Device deprovisioning" style="max-width: 100%">

After confirming the deprovisioning, the device will be deprovisioned in ThingPark.
 
### <a name="configurable-port"></a>Sending operations

If a LoRa device supports receiving hexadecimal commands, you can send them using shell operations. Notice that these commands are not serial monitor commands.
In order to send an operation, go to the Device Management application and navigate to the device you want to send an operation to. Click the "Shell" tab.

In the following screenshot you can find some examples of a specific device type's predefined commands and their format.
<img src="/guides/images/users-guide/actility/predefinedcommands.png" alt="Predefined commands" style="max-width: 100%"> 

Enter the shell command or view/edit the predefined command in the ">_Command" field. 

If you enter the command without defining a port, it will be sent to the default target port (i. e. 1) of the device. If you enter the command and define a port (format "command:port"), it will be sent to the specified target port instead of the default port. 

<img src="/guides/images/users-guide/actility/portConfiguration.png" alt="Port configuration" style="max-width: 100%">

Click "Execute". The operation will be sent to the device. The timing depends on Actility ThingPark.

### <a name="thingpark-monitoring"></a>ThingPark Api availability monitoring
The ThingPark Api is monitored and if the ThingPark Api is not reachable, an alarm is created to notify all the subscribed tenants that are using this feature. The alarm is cleared right after the ThingPark Api is reachable again. 

<img src="/guides/images/users-guide/actility/thingpark-api-monitor-alarm.png" alt="ThingPark Api monitoring alarm" style="max-width: 100%">