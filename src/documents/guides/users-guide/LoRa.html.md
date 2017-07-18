---
order: 90
title: LoRa Actility
layout: default
---

## <a name="overview"></a>Overview
LoRa Actility allows you to collect and visualize payload data from managed LoRa devices. New LoRa devices can be easily provisioned using the Cumulocity Device Management. No further interaction in the ThingPark user interface is required. This section describes how to:

* [Configure your ThingPark account credentials](#configure-credentials) in Cumulocity
* [Create device types](#create-device-types) with Cumulocity's device database
* [Register devices](#register-device) and visualize Actility payload using Cumulocity

## <a name="configure-credentials"></a>Configuring ThingPark account credentials

In order to create new credentials or replace existing ones, go to the Administration application and select "Connectivity" in "Settings" in the Navigator. 

### <a name="create-new-credentials"></a>Creating new account credentials

If you go to "Connectivity" for the first time, you will be asked to provide credentials. 
Enter your profile ID, username, password and application EUI. 

![Register devices](/guides/users-guide/actility/credentials-new-2.png)

Click "Save". If everything is okay, there will be a message "Credentials successfully saved".

???*** Explain profile ID, e.g. "dev1-api", and application EUI? Are these clear to the user?  ***???

### <a name="replace-credentials"></a>Replacing account credentials

In order to replace your credentials, click the "Replace credentials" button.

Enter your profile ID, username, password and application EUI. Click "Save".

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
In the Device database window, click the "New" button. 

Select "LoRa" as the device type and name your device. Click the "Add" button and add the relevant values for your device:

- name of the value and possibly its display category
- message ID and message source (the latter is always "Payload")
- information to decode the payload (such as starting bit, number of bits, multiplier, divisor, decimal places)

Select the options, if required ("signed" or "packed decimal").

In the functionalities, define how this device type should behave, for example send a measurement or raise an alarm. 

The following picture shows an example for a device type which sends a measurement. In this case also values such as the measurement type and series need to be defined. 

![Value configuration in detail](/guides/users-guide/actility/deviceDatabase2.png)

After clicking "OK", your device type is created with the values you defined.

![Value configurations of created device type](/guides/users-guide/actility/deviceDatabase1.png)


## <a name="register-device"></a>Registering Actility devices

In order to register an Actility device, go to the Device Management application and click "Device Registration" in the Quick links. Click "Register device". The following window opens:

![Register devices](/guides/users-guide/actility/deviceRegistration1.png)

Click "Actility". 

In the next window fill in the required information: 

- Device profile: Select "LoRaWAN Demonstrator".
- Device type: Select the appropriate device type. 
- Device EUI and application key: You can find this information on the device itself.
- Connectivity plan: Select a connectivity plan, if required.

The following picture shows an example for device registration. 
![Register devices](/guides/users-guide/actility/deviceRegistration3.png)

After clicking "Next" the device registration request will be submitted.

For more information on viewing and managing your connected LoRa devices, see 
[Device management](/guides/users-guide/device-management).

