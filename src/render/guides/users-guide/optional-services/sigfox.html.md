---
order: 70
title: Sigfox
layout: redirect
---

Cumulocity can interface with Sigfox devices through the Sigfox Cloud. You can:

- Provision Sigfox devices easily using the Cumulocity Device Management.
- Decode upstream payload packets using a web-based user interface.
- Debug and postprocess raw device data through Cumulocity events.
- Send downstream data to the device using Cumulocity operations.
- Make use of existing Cumulocity features with Sigfox devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

The following illustration grants you a quick overview of the Cumulocity Sigfox integration:

![Cumulocity Sigfox integration](/guides/images/users-guide/sigfox/cumulocity-sigfox-integration.png)

The following sections describe how to:

- [Manage the connectivity settings](#connectivity) in Cumulocity.
- [Create device types](#create-device-types-sigfox) with Cumulocity's device database.
- [Register devices](#register-device-sigfox) and visualize the Sigfox payload using Cumulocity.
- [Update devices](#old-registration) registered with the general device registration.
- [Send operations](#operations) to devices.
- If there are any issues, check out the [Troubleshooting](#sigfox-troubleshooting) section for solutions.

**Info:** To be able to use the Sigfox agent, your tenant needs to be subscribed to the following applications: sigfox-agent, feature-fieldbus4. In case of any issues, please contact support.

### <a name="connectivity"></a>Managing the connectivity settings

Before you register a device, you need to configure Sigfox Cloud credentials in the “Connectivity” page in the Administration application. You have to set up these Sigfox Cloud credentials in Sigfox. 

Before you create API access to Cumulocity, you need to have an “Associated user” which is added to the Cumulocity group in Sigfox Cloud and has the following profiles:

- Customer [R]
- Device Manager [W]

**Info:** Without the following profiles, the required Sigfox API access can not be set up.

#### Step 1

If you already have an associated user make sure it has the profiles mentioned below and proceed to step 2.

The group name is not constrained. "Cumulocity" is used as a sample group name throughout the remaining steps.

First enter into your Sigfox Cloud account and create a new user. Add the user to the group and select the “Customer [R]” and “Device Manager [W]” profiles.

![New user](/guides/images/users-guide/sigfox/newuser.png)

#### Step 2

After creating an “Associated User” with the proper group and profiles navigate to the “Groups” page. In the “API Access” tab create a new entry and add the following profiles:

- Customer [R]
- Device Manager [W]

![API access page](/guides/images/users-guide/sigfox/api-access.png)

#### Step 3 

After the API access entry has been created, you can connect your Sigfox Cloud account to Cumulocity via the “Connectivity” page in the Administration application. Navigate to the “Connectivity” page and then go to the “Sigfox provider settings” tab. 

The following information has to be provided:

- **Login:** The login token is located in the API access entry in the Sigfox Cloud.
- **Password:** The password token is located in the API access entry in the Sigfox Cloud next to “Password”.
- **Parent Group ID:** This ID is written in your URL when you are logged into your Sigfox account and you have selected the “Cumulocity” group. For example, “https://backend.sigfox.com/group/**9823ruj29j9d2j9828hd8**/info”.

> **Info:**The group name in the screenshot below is only an example. It is not necessary to be Cumulocity.

![API access page](/guides/images/users-guide/sigfox/parentgroupid.png)

![API access page](/guides/images/users-guide/sigfox/sigfox-connectivity.png)

Click **Save credentials** to save your settings. If everything is correct, a message "Credentials successfully saved" will be displayed.

If you wish to overwrite your previous credentials, simply click **Replace credentials** and add your new credentials.

### <a name="create-device-types-sigfox"></a>Creating device protocols

To process data from Sigfox devices, Cumulocity needs to understand the payload format of the devices.
Mapping payload data to Cumulocity data can be done by creating a Sigfox device protocol.

During the [device registration](#register-device), you can associate this device type and afterwards the received uplink callbacks for this device with a hexadecimal payload will be mapped to the ones you have configured in your device type.
If a device type has been changed after being associated to a device, the reflection of the change can take up to 10 minutes because of the refresh mechanism of the Sigfox microservice.

**Info:** Device protocol mapping only supports decoding for fixed byte positions based on the message type. 

In order to create device protocols, go to the Device Management application and select "Device database" in the "Device types" menu in the navigator. You can either import an existing device type or create a new one. 

#### <a name="import-device-type"></a>Importing a device type

In the Device protocols page, click **Import**. 

Upload the device protocol from a file and click **Import** again.

#### <a name="create-new-device-type"></a>Creating a new device type

In the device protocols page, click **New device protocol**. The following window will open:

![New Sigfox protocol](/guides/images/users-guide/sigfox/sigfox-newprotocol.png)

Select "Sigfox" as the device type and provide a name for your device type. 

In the following window you determine the message type. Sigfox devices can send messages of different types with different encodings per type. Depending on the device, the type can be determined by looking either at the FPort parameter of a message (Source: FPort) or at the subset of the message payload itself (Source: Payload). 

Select the way the message type is encoded in the "Source" list:  

- **Payload**: if the message type can be determined by looking at the subset of the message payload itself   

In the following sample payload structure, the first byte indicates the message type source (as highlighted).

<img src="/guides/images/users-guide/actility/payload-example1.png" alt="Example payload: message type source" style="max-width: 100%">

In the user interface you can enter this type of message type source information as follows: In the "Start bit" field, indicate where the message type information starts in the payload and in the"Number of bits" field indicate how long this information is, for example start bit = "0" and number of bits = "8".

![Sigfox protocol](/guides/images/users-guide/sigfox/sigfox-bits.png)

Click **Add value** to create the value configuration. 
	
![Sigfox protocol add value](/guides/images/users-guide/sigfox/sigfox-addvalue.png)

A window similar to the following one will open. Configure the relevant values as shown in this example. 

![LoRa protocol add new value](/guides/images/users-guide/actility/devmgmt-devicetypes-protocols-loranewvalue.png)

![LoRa protocol add new value](/guides/images/users-guide/actility/devmgmt-devicetypes-protocols-loranewvalue2.png)

The value configuration maps the value in the payload of a message type to the Cumulocity data. 

Configure the "Message ID" according to your device message specification and map it to the Cumulocity data. The message ID is the numeric value identifying the message type. It will be matched with the message ID found in the source specified on the device type main page (i.e. Payload or FPort). The message ID needs to be entered in decimal numbers (not hex).

In this sample payload structure the message ID is "1".

<img src="/guides/images/users-guide/actility/payload-example2.png" alt="Example payload: message type source" style="max-width: 100%">

![LoRa bits](/guides/images/users-guide/actility/devmgmt-devicetypes-protocols-loraid.png)

Fill in the general fields for your new value in order to categorize it in the "Values" list. The associated "Name" for this value will be displayed under the "Display category" given.

Under "Value selection" define from where the value should be extracted. In the “"Start bit" field, indicate where the value information starts and in the "Number of bits" field, indicate the length of the information.

In this example the "Channel 1 Type" information starts in byte 2 (i.e. start bit = "16") and is 1 byte long (i.e. number of bits = "8").

<img src="/guides/images/users-guide/actility/payload-example3.png" alt="Example payload: value selection" style="max-width: 100%">

![LoRa bits](/guides/images/users-guide/actility/devmgmt-devicetypes-protocols-lorabits.png)

The hexadecimal value is converted to a decimal number and afterwards a "value normalization" is applied.

Under "Value normalization" define how the raw value should be transformed before being stored in the platform and enter the appropriate values for:

- **Multiplier**: This value is multiplied with the value extracted from the "Value selection". It can be decimal, negative or positive. By default it is set to 1. 
- **Offset**: This value defines the offset that is added or subtracted. It can be decimal, negative or positive. By default it is set to 0.
- **Unit** (optional): A unit can be defined which is saved together with the value (e.g. temperature unit "C" for degree Celsius).

For detailed information on how to decode the payload, refer to the documentation of the device. 

Select the options, if required: "Signed" (if the value is a signed number) or "Packed decimal" (if the value is BCD encoded).

In the functionalities, define how this device type should behave:

- **Send measurement**: creates a measurement with the decoded value
- **Raise alarm**: creates an alarm if the value is not equal to zero
- **Send event**: creates an event with the decoded value
- **Update managed object**: updates a fragment in a managed object with the decoded value

You can also have a nested structure with several values within a measurement, event or managed object fragment. In case of a measurement all the properties of the same type will be merged to create a nested structure. In case of an event or a managed object all the properties with the same fragment are merged to create a nested structure. (Also refer to the [example](#nested-structure-example) of a nested structure for a "Position" device type below.)

After clicking "OK", the values are added to your device type. 

![Value configurations of created device type](/guides/images/users-guide/sigfox/sigfox-protocol.png)

After clicking "Save", your device type is created with the values you defined.

**Example with single property**

The following image shows an example for a message which sends a measurement when this value (the battery level) changes. 

![Battery level changes example](/guides/images/users-guide/actility/devmgmt-devicetypes-protocols-battery.png)

![Battery level changes example](/guides/images/users-guide/actility/devmgmt-devicetypes-protocols-battery2.png)


**<a name="nested-structure-example"></a>Example with nested structure**

The following image shows an example of a nested structure for a device type, reporting the current position of a GPS device. The device type is named "Position" and contains values for longitude and latitude. 

The "Message ID" should be the same for all the values. Enter the rest of the parameters according to the instructions above. Enter "c8y_Position" in the "Managed object fragment" field and create a new value for each: longitude and latitude.

![Value creation: Longitude-nested](/guides/images/users-guide/actility/lora-protocols-lng.png)

![Value creation: Latitude-nested](/guides/images/users-guide/actility/lora-protocols-lat.png)

This will be the result: 

![Value configuration in detail: nested structure](/guides/images/users-guide/actility/devmgmt-devicetypes-protocols-gpsexample.png)

### <a name="register-device-sigfox"></a>Registering Sigfox devices

In order to register a Sigfox device, go to the “Registration” page in the “Device Management” application and click “Register Devices”. Afterwards, click on **Custom device registration**.

![Register devices](/guides/images/users-guide/sigfox/sigfox-registration.png)

In the upcoming window, click **Sigfox**. 

**Info:** If Sigfox is not one of the available options, your tenant is not subscribed to the relevant applications, see info at the top.

In the next window, fill in the required information:

- **ID:** Unique device ID. The value must be a hexadecimal number.
- **PAC:** Porting authorization code for your device. The value must be a hexadecimal number.
- **Contract:** Choose your desired contract.
- **Device Type:** Select your desired device type from the drop-down list.
- **Product Certificate Key:** This key can be located in “https://partners.sigfox.com/”. Navigate to your device and copy the certificate key.

**Info:** The term "Device type" is used both by Sigfox and Cumulocity, but with different meaning. In Sigfox, a device type specifies how to route data from devices. In Cumulocity, a device type describes the data that is sent by devices of a particular type.

![Register devices1](/guides/images/users-guide/sigfox/sigfox-registration1.png)

After clicking **Next** the device registration request will be submitted and the device will be created.

You can verify that the device is really connected by checking that events are actually coming in. You can do so by clicking on a device and opening its "Events" tab. All events related to this device are listed here.

For more information on viewing and managing your connected devices, also refer to [Device Management](http://cumulocity.com/guides/users-guide/device-management).

### <a name="old-registration"></a>Updating devices registered with the general device registration

If devices have been registered via the general device registration the following URLs have to be manually changed in the Sigfox cloud:

- "https://sigfox-agent.cumulocity.com/sigfoxDataCallback" to " https://<tenantId>.cumulocity.com/service/sigfox-agent/sigfoxDataCallback"
- "https://sigfox-agent.cumulocity.com/sigfoxServiceAcknowledgeCallback" to "https://<tenantId>.cumulocity.com/service/sigfox-agent/sigfoxServiceAcknowledgeCallback"
- "https://sigfox-agent.cumulocity.com/sigfoxServiceStatusCallback" to "https://<tenantId>.cumulocity.com/service/sigfox-agent/sigfoxServiceStatusCallback
- "https://sigfox-agent.cumulocity.com/sigfoxErrorCallback" to "https://<tenantId>.cumulocity.com/service/sigfox-agent/sigfoxErrorCallback"

**Info**: General device registration for Sigfox devices is no longer supported.

### <a name="operations"></a>Sending operations

If the device supports sending hexadecimal commands, you can send commands from “Shell”. Go to the Device Management application and navigate to the device you want to send an operation to. Switch to the "Shell" tab.

**Info:** Operations do not go to “Executing” state immediately. They go to “Executing” state when the device is expecting the downlink message. Afterwards, the pending operation which is created first goes to executing state.

### <a name="sigfox-troubleshooting"></a> Troubleshooting

##### No contracts available

![No contracts available error](/guides/images/users-guide/sigfox/sigfox-troubleshooting-nocontracts.png)

In order to resolve the following error, please contact support.sigfox.com to create a contract for your Sigfox account.

##### Sigfox callbacks in backend.sigfox.com are not created correctly

![Callback information](/guides/images/users-guide/sigfox/sigfox-troubleshooting-callbacks.png)

The information for the callback setup is retrieved by a microservice.

To verify whether your setup is correct, execute the following REST API request:

	```http
	GET {{url}}/tenant/currentTenant 
	```

**Info:** The request above is simply an example API request that could be used. For more info on REST API requests, please see the [Reference guide](https://www.cumulocity.com/guides/reference/tenants).ss

##### Issues with alarm provisioning

![!Failed operation](/guides/images/users-guide/sigfox/sigfox-troubleshooting-failedoperation.png)

If the "transfer operation failed" alarm is triggered it means that the device is already provisioned in the Sigfox platform and it failed to change the device type in their platform. In order to fix this issue, you have to manually change the device type in the Sigfox platform to the intended one.

##### Provisioned status is set to false

![!False provision](/guides/images/users-guide/sigfox/sigfox-troubleshooting-falseprovision.png)

In the case of this alarm, one can see that the **Provisioned** status is set to "false" which means that no data coming from the Sigfox platfom. In the alarm message there is more information regarding the error. In this case the PAC code given during registration was invalid. 

> **Info: **If the provisioning step is finished, but it has failed, information is returned in the form of an alarm with the reason of the failure provided in this alarm.

The **provisioned** status is set to true when the device provisioning job is finished and success information is received from the Sigfox platform. Additionally, it is set to true when uplink messages are retrieved from the device.

> **Info: ** Note that the status is updated asynchronously which means that sometimes you might have to wait a bit until it is set to true.