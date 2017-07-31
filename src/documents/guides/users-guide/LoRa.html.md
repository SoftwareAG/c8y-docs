---
order: 90
title: LoRa Actility
layout: default
---

## <a name="overview"></a>Overview
LoRa Actility allows you to collect and visualize payload data from managed LoRa devices. New LoRa devices can be easily provisioned using the Cumulocity Device Management. No further interaction in the ThingPark user interface is required. The LoRa functionalities are only available for tenants who have subscribed to the Actility-device-provider-agent application. This section describes how to:

* [Configure your ThingPark account credentials](#configure-credentials) in Cumulocity
* [Create device types](#create-device-types) with Cumulocity's device database
* [Register devices](#register-device) and visualize Actility payload using Cumulocity

## <a name="configure-credentials"></a>Configuring ThingPark account credentials

In order to create new credentials or replace existing ones, go to the Administration application and select "Connectivity" in "Settings" in the Navigator. 

### <a name="create-new-credentials"></a>Creating new account credentials

If you go to "Connectivity" for the first time, you will be asked to provide credentials. 
Enter the following information:

- **profile ID**: This depends on your ThingPark account and environment. If you are using, for example, the Dev1 ThingPark environment your profile ID will be "dev1-api".
- **username**: your ThingPark user name
- **password**: your password 
- **application EUI**: This is a global application ID in the IEEE EUI64 address space that uniquely identifies the application provider of the device.

![Register devices](/guides/users-guide/actility/credentials-new-2.png)

Click "Save". If everything is okay, there will be a message "Credentials successfully saved".

### <a name="replace-credentials"></a>Replacing account credentials

In order to replace your credentials, click the "Replace credentials" button.

Enter your profile ID, username, password and application EUI. For an explanation of the terms "profile ID" and "application EUI", refer to section [Creating new account credentials](#create-new-credentials) above.

Click "Save".

<img src="/guides/users-guide/actility/providerCredentials2.png" alt="Account credentials" style="max-width: 100%">

Your old credentials will now be replaced with the new ones. 

## <a name="create-device-types"></a>Creating device types with the device database
In order to create device types with the device database, go to the Device Management application and select "Device database" in "Device types" in the Navigator. You can either import an existing device type or create a new one. 

### <a name="import-device-type"></a>Importing a predefined device type
In the Device database window, click the "Import" button. 

Select the predefined device type, for example "LoRaWAN Demonstrator". Click "Import".

![Import a predefined device type](/guides/users-guide/actility/deviceDatabaseImport.png)

Alternatively you may also load the device type from a file and import it. 

### <a name="create-new-device-type"></a>Creating a new device type

In the device database window, click the "New" button. 

Select "LoRa" as the device type and name your device type. 

Select the way the message type is encoded in the "Source" dropdown box:  

- **FPort**: if the message type can be determined by looking at the FPort parameter of a message  
- **Payload**: if the message type can be determined by looking at the subset of the message payload itself   

If you select "Payload", indicate in the "Start bit" field where the message type information starts in the payload and how long this information is in the "Number of bits" field. For detailed information on how to decode the payload, refer to the documentation of your device. 

Click the "Add" button. 

![Value configuration: new](/guides/users-guide/actility/deviceDatabase4.png)

Configure the "Message ID" according to your device message specification and map it to the Cumulocity data. It will be matched with the message ID found in the source specified on the device type main page (i.e. Payload or FPort). The message ID needs to be entered in decimal numbers (not hex).

Enter the relevant general values for your device for the visualisation in the "Values" list: the "Name" of the value and possibly its "Display category".

Under "Value selection" define from where the value should be extracted. In order to do so, indicate where the value information starts in the "Start bit" field and how long this information is in the "Number of bits" field.

Under "Value normalisation" define how the raw value should be transformed before being stored in the platform and enter the appropriate values in the "Multiplier", "Offset" and "Unit" fields.

Select the options, if required: "Signed" (if the value is a signed number) or "Packed decimal" (if the value is BCD encoded).

In the functionalities, define how this device type should behave:

- **Send measurement**: creates a measurement whenever the value is changed
- **Raise alarm**: creates an alarm if the value is not equal to zero
- **Send event**: creates an event whenever the value is changed
- **Update managed object**: updates a fragment in a managed object whenever the value is changed

After clicking "OK", the values are added to your device type. 

![Value configurations of created device type](/guides/users-guide/actility/deviceDatabase1.png)

You can also have a nested structure with several values within a device type (also refer to the example of a nested structure for a "Position" device type below).

After clicking "Save", your device type is created with the values you defined.

**Examples**

The following picture shows an example for a device type which sends a measurement when the value is changed. In this case also values such as the measurement type and series need to be defined. 

![Value configuration in detail: measurement](/guides/users-guide/actility/deviceDatabase2.png)

The following picture shows an example for a device type which updates a fragment in a managed object when the value is changed. In this case also values such as the managed object fragment and the property nested inside the fragment need to be defined. 

![Value configuration in detail: MO](/guides/users-guide/actility/deviceDatabase3.png)

You can also have a nested structure for the value within a device type. The following picture shows an example of such a nested structure for a device type reporting the current position of a device. The device type is named "Position" and contains values for longitude, latitude and altitude. 

The "Message ID" should be the same for all the values. Enter the rest of the parameters according to the instructions above. Enter "c8y_Position" in the "Managed object fragment" field and create a new value for each: longitude, latitude and altitude.

![Value configuration in detail: nested structure](/guides/users-guide/actility/deviceDatabase5.png)

## <a name="register-device"></a>Registering Actility devices

In order to register an Actility device, go to the Device Management application and click "Device Registration" in the Quick links. Click "Register device". The following window opens:

![Register devices](/guides/users-guide/actility/deviceRegistration1.png)

Click "Actility". 

In the next window fill in the required information: 

- **Device profile**: Select the appropriate device profile from the drop-down list. 
- **Device type**: Select the appropriate device type from the drop-down list. 
- **Device EUI**: This is the unique identifier for the device. You can find it on the device itself.
- **Application key**: This is an AES-128 application key specific for the device that
is assigned to the device by the application owner and is responsible to encrypt
JOIN communication. You can find this key on the device itself.
- **Connectivity plan**: Select the appropriate connectivity plan from the drop-down list.

The following picture shows an example for device registration. 

![Register devices](/guides/users-guide/actility/deviceRegistration3.png)

After clicking "Next" the device registration request will be submitted and the device will be created.

For more information on viewing and managing your connected devices, also refer to 
[Device management](/guides/users-guide/device-management).

