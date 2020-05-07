---
weight: 75
title: Sigfox
layout: redirect
---

Cumulocity IoT can interface with Sigfox devices through the Sigfox Cloud. You can:

- Provision Sigfox devices easily using Cumulocity IoT Device Management.
- Decode upstream payload packets using a web-based user interface.
- Debug and post-process raw device data through Cumulocity IoT events.
- Send downstream data to the device using Cumulocity IoT operations.
- Make use of existing Cumulocity IoT features with Sigfox devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

The following illustration grants you a quick overview of the Cumulocity IoT Sigfox integration:

![Cumulocity IoT Sigfox integration](/images/users-guide/sigfox/sigfox-cumulocity-integration.png)

The following sections describe how to:

- [Manage the connectivity settings](#connectivity-sigfox) in Cumulocity IoT.
- [Create device protocols](#create-device-protocols-sigfox) with Cumulocity IoT's device database.
- [Register devices](#register-device-sigfox) and visualize the Sigfox payload using Cumulocity IoT.
- [Update devices](#old-registration) registered with the general device registration.
- [Send operations](#operations-sigfox) to devices.

Moreover, check out the [Troubleshooting](#sigfox-troubleshooting) section in case of any issues.

> **Info:** To be able to use the Sigfox agent, your tenant needs to be subscribed to the application sigfox-agent. In case of any issues, please contact support.

### <a name="connectivity-sigfox"></a>Managing the connectivity settings

Before you register a device, you need to configure Sigfox Cloud credentials in the **Connectivity** page in the Administration application. You have to set up these Sigfox Cloud credentials in Sigfox.

Before you create API access to Cumulocity IoT, you need to have an “Associated user” which is added to the Cumulocity IoT group in Sigfox Cloud and has the following profiles:

- Customer [R]
- Device Manager [W]

> **Important:** Without the profiles described below, the required Sigfox API access can not be set up.

#### Step 1

If you already have an associated user make sure it has the profiles mentioned below and proceed to step 2.

The group name is not constrained. "Cumulocity" is used as a sample group name throughout the remaining steps.

First, enter into your Sigfox Cloud account and create a new user. Add the user to the group and select the “Customer [R]” and “Device Manager [W]” profiles.

![New user](/images/users-guide/sigfox/sigfox-newuser.png)

#### Step 2

After creating an “Associated user” with the proper group and profiles navigate to the **Groups** page. In the **API access** tab, create a new entry and add the following profiles:

- Customer [R]
- Device Manager [W]

![API access page](/images/users-guide/sigfox/sigfox-api-access.png)

#### Step 3

After the API access entry has been created, you can connect your Sigfox Cloud account to Cumulocity IoT via the **Connectivity** page in the Administration application. Navigate to the **Connectivity** page and switch to the **Sigfox provider settings** tab.

The following information has to be provided:

- **Login:** The login token is located in the API access entry in the Sigfox Cloud.
- **Password:** The password token is located in the API access entry in the Sigfox Cloud next to **Password**.
- **Parent Group ID:** This ID is written in your URL when you are logged into your Sigfox account and you have selected the “Cumulocity” group. For example, “https://backend.sigfox.com/group/**9823ruj29j9d2j9828hd8**/info”.

> **Info:** The group name in the screenshot below is only an example. It does  not necessarily have to be "Cumulocity".

![API access page](/images/users-guide/sigfox/sigfox-parentgroupid.png)

![API access page](/images/users-guide/sigfox/sigfox-connectivity.png)

Click **Save credentials** to save your settings. If everything is correct, a message "Credentials successfully saved" will be displayed.

If you wish to overwrite your previous credentials, click **Replace credentials** and add your new credentials.

### <a name="create-device-protocols-sigfox"></a>Creating device protocols

To process data from Sigfox devices, Cumulocity IoT needs to understand the payload format of the devices. Mapping payload data to Cumulocity IoT data can be done by creating a Sigfox device protocol.

During the [device registration](#register-device-sigfox), you can associate this device protocol. The received uplink callbacks for this device with a hexadecimal payload will then be mapped to the ones you have configured in your device protocol.

If a device protocol has been changed after being associated to a device, the reflection of the change can take up to 10 minutes because of the refresh mechanism of the Sigfox microservice.

> **Info:** Device protocol mapping only supports decoding for fixed byte positions based on the message type.

To create device protocols, select **Device protocols** in the **Device types** menu in the navigator of the Device Management application. You can either import an existing device protocol or create a new one.

#### <a name="import-device-type"></a>Importing a device protocol

In the **Device protocols** page, click **Import**.

Select the desired predefined device type or upload it from a file. When ready, click **Import** again.

#### <a name="create-new-device-type"></a>Creating a new device protocol

In the **Device protocols** page, click **New device protocol** and select **Sigfox** from the options list.

![New Sigfox protocol](/images/users-guide/sigfox/sigfox-newprotocol.png)

Provide a name for the device protocol an and optional description, and click **Create**.

Under **Message types**, specify the message types. Sigfox devices can send messages of different types with different encodings per type. Depending on the device, the type can be determined by looking either at the FPort parameter of a message (Source: FPort) or at the subset of the message payload itself (Source: Payload).

In the **Source** field, select the way the message type is encoded:  

- **Payload**: if the message type can be determined by looking at the subset of the message payload itself   

In the following sample payload structure, the first byte indicates the message type source (as highlighted).

<img src="/images/users-guide/actility/payload-example1.png" alt="Example payload: message type source" style="max-width: 100%">

In the user interface, you can enter this type of message type source information as follows: In the **Start bit** field, indicate where the message type information starts in the payload.  In the **Number of bits** field, indicate how long this information is. For example, start bit = "0" and number of bits = "8".

![Sigfox protocol](/images/users-guide/sigfox/sigfox-bits.png)

##### Configuring values

Click **Add value** to create the value configuration.

![Sigfox protocol add value](/images/users-guide/sigfox/sigfox-addvalue.png)

In the following window, configure the relevant values as shown in this example.

![LoRa protocol add new value](/images/users-guide/actility/devmgmt-devicetypes-protocols-loranewvalue.png)

![LoRa protocol add new value](/images/users-guide/actility/devmgmt-devicetypes-protocols-loranewvalue2.png)

The value configuration maps the value in the payload of a message type to the Cumulocity IoT data.

Under **Message type**, configure the **Message ID** according to your device message specification. The message ID is the numeric value identifying the message type. It will be matched with the message ID found in the source specified on the device protocol main page (i.e. Payload or FPort). The message ID needs to be entered in decimal numbers (not hex).

In this sample payload structure the message ID is "1".

<img src="/images/users-guide/actility/payload-example2.png" alt="Example payload: message type source" style="max-width: 100%">

![LoRa bits](/images/users-guide/actility/devmgmt-devicetypes-protocols-loraid.png)

Under **General**, specify a name for the value and the category under which it will be displayed in the values list.  

Under **Value selection**, specify from where the value should be extracted. In the **Start bit** field, indicate where the value information starts and in the **Number of bits** field, indicate the length of the information.

In this example, the "Channel 1 Type" information starts in byte 2 (i.e. start bit = "16") and is 1 byte long (i.e. number of bits = "8").

<img src="/images/users-guide/actility/payload-example3.png" alt="Example payload: value selection" style="max-width: 100%">

![LoRa bits](/images/users-guide/actility/devmgmt-devicetypes-protocols-lorabits.png)

The hexadecimal value is converted to a decimal number and afterwards a "value normalization" is applied.

Under **Value normalization**, specify how the raw value should be transformed before being stored in the platform and enter the appropriate values for:

- **Multiplier**: This value is multiplied with the value extracted from the **Value selection**. It can be decimal, negative or positive. By default it is set to 1.
- **Offset**: This value defines the offset that is added or subtracted. It can be decimal, negative or positive. By default it is set to 0.
- **Unit** (optional): A unit can be defined which is saved together with the value (e.g. temperature unit "C" for degree Celsius).

For detailed information on how to decode the payload, refer to the documentation of the device.

Under Options, select on of the following options, if required:

* **Signed** - if the value is a signed number
* **Packed decimal** - if the value is BCD encoded

Under **Functionalities**, specify how this device protocol should behave:

- **Send measurement**: creates a measurement with the decoded value
- **Raise alarm**: creates an alarm if the value is not equal to zero
- **Send event**: creates an event with the decoded value
- **Update managed object**: updates a fragment in a managed object with the decoded value

You can also have a nested structure with several values within a measurement, event or managed object fragment. In case of a measurement, all the properties of the same type will be merged to create a nested structure. In case of an event or a managed object all the properties with the same fragment are merged to create a nested structure. (Also refer to the [example](#nested-structure-example) of a nested structure for a "Position" device protocol below.)

Click **OK** to add the values to your device protocol.

![Value configurations of created device protocol](/images/users-guide/sigfox/sigfox-protocol.png)

Click **Save** to create the device protocol.

**Example with single property**

The following images show an example for a message which sends a measurement when the battery level value changes.

![Battery level changes example](/images/users-guide/actility/devmgmt-devicetypes-protocols-battery.png)

![Battery level changes example](/images/users-guide/actility/devmgmt-devicetypes-protocols-battery2.png)


**<a name="nested-structure-example"></a>Example with nested structure**

The following images show an example of a nested structure for a device protocol, reporting the current position of a GPS device. The device protocol is named "Position" and contains values for longitude and latitude.

The message ID should be the same for all the values. Enter the rest of the parameters according to the instructions above. Enter "c8y_Position" in the **Managed object fragment** field and create a new value for each: longitude and latitude.

![Value creation: Longitude-nested](/images/users-guide/actility/lora-protocols-lng.png)

![Value creation: Latitude-nested](/images/users-guide/actility/lora-protocols-lat.png)

This will be the result:

![Value configuration in detail: nested structure](/images/users-guide/actility/devmgmt-devicetypes-protocols-gpsexample.png)

### <a name="register-device-sigfox"></a>Registering Sigfox devices

To register a Sigfox device, navigate to the **Registration** page in the **Devices** menu in the Device Management application and click **Register devices**. In the upcoming window, select **Custom device registration** and then **Sigfox**.

![Register devices](/images/users-guide/sigfox/sigfox-registration.png)

> **Info:** If Sigfox is not one of the available options, your tenant is not subscribed to the relevant applications, see information at the top.

In the next window, fill in the required information:

- **ID:** Unique device ID. The value must be a hexadecimal number.
- **PAC:** Porting authorization code for your device. The value must be a hexadecimal number.
- **Contract:** Choose your desired contract.
- **Device protocol:** Select your desired device protocol from the drop-down list.
- **Product certificate key:** This key can be located in *https://partners.sigfox.com/*. Navigate to your device and copy the certificate key. If the checkbox is not selected and no product certificate key is specified, the device will be considered a prototype.

> **Info:** The term "Device type" is used both by Sigfox and Cumulocity IoT, but with different meaning. In Sigfox, a device type specifies how to route data from devices. In Cumulocity IoT, a device type describes the data that is sent by devices of a particular type.

![Register devices1](/images/users-guide/sigfox/sigfox-registration1.png)

After clicking **Next** the device registration request will be submitted and the device will be created.

You can verify that the device is really connected by checking that events are actually coming in. You can do so by clicking on a device and opening its **Events** tab. All events related to this device are listed here.

For more information on viewing and managing your connected devices, also refer to [Device Management](/users-guide/device-management/).

### <a name="old-registration"></a>Updating devices registered with the general device registration

If devices have previously been registered via the general device registration the following URLs have to be manually changed in the Sigfox Cloud:

- *https://sigfox-agent.cumulocity.com/sigfoxDataCallback* to *https://&#60;tenantId&#62;.cumulocity.com/service/sigfox-agent/sigfoxDataCallback*
- *https://sigfox-agent.cumulocity.com/sigfoxServiceAcknowledgeCallback* to *https://&#60;tenantId&#62;.cumulocity.com/service/sigfox-agent/sigfoxServiceAcknowledgeCallback*
- *https://sigfox-agent.cumulocity.com/sigfoxServiceStatusCallback* to *https://&#60;tenantId&#62;.cumulocity.com/service/sigfox-agent/sigfoxServiceStatusCallback*
- *https://sigfox-agent.cumulocity.com/sigfoxErrorCallback* to *https://&#60;tenantId&#62;.cumulocity.com/service/sigfox-agent/sigfoxErrorCallback*

> **Info**: General device registration for Sigfox devices is no longer supported.

### <a name="operations-sigfox"></a>Sending operations

If the device supports sending hexadecimal commands, you can send commands from the “Shell”. In the Device Management application, navigate to the device you want to send an operation to in the **All devices** page. Switch to the **Shell** tab.

> **Info:** Operations do not go to executing state immediately. They go to executing state when the device is expecting the downlink message. Afterwards, the pending operation which is created first goes to executing state.

### <a name="sigfox-troubleshooting"></a> Troubleshooting

#### No contracts available

![No contracts available error](/images/users-guide/sigfox/sigfox-troubleshooting-nocontracts.png)

In order to resolve this error, please contact support.sigfox.com to create a contract for your Sigfox account.

#### Sigfox callbacks in backend.sigfox.com are not created correctly

![Callback information](/images/users-guide/sigfox/sigfox-troubleshooting-callbacks.png)

The information for the callback setup is retrieved by a microservice.

To verify whether your setup is correct, execute the following REST API request:

	```http
	GET {{url}}/tenant/currentTenant
	```

> **Info:** The request above is simply an example API request that could be used. For more info on REST API requests, refer to the [Tenants](https://www.cumulocity.com/reference/tenants) in the Reference guide.

#### Issues with alarm provisioning

![!Failed operation](/images/users-guide/sigfox/sigfox-troubleshooting-failedoperation.png)

If the "transfer operation failed" alarm is triggered, the device is already provisioned in the Sigfox platform and changing the device type in the Sigfox platform failed. In order to fix this issue, you have to manually change the device type in the Sigfox platform to the intended one.

#### Provisioned status is set to false

![!False provision](/images/users-guide/sigfox/sigfox-troubleshooting-falseprovision.png)

In case of this alarm, you can see that the **Provisioned** status is set to "false" which means that no data is coming from the Sigfox platform. In the alarm message there is more information regarding the error. In this case the PAC code given during registration was invalid.

> **Info:** If the provisioning process has been completed, but has failed, information is returned as an alarm with the reason of the failure provided.

The **Provisioned** status is set to true when the device provisioning process is completed and success information is received from the Sigfox platform. Additionally, it is set to true when uplink messages are retrieved from the device.

> **Info:** The status is updated asynchronously which means that sometimes you might have to wait a bit until it is set to true.

#### Callback creation failed

![Callback creation failed](/images/users-guide/sigfox/sigfox-troubleshooting-callback.png)

This alarm is created when one or more callback creation requests have failed in the Sigfox platform. You can view the alarm either in the **Alarms** page or in the **Home** page.

In order to fix this issue, navigate to the Sigfox platform web interface and check the device type with the id mentioned in the alarm.

![Device Type Id in the alarm](/images/users-guide/sigfox/sigfox-troubleshooting-callback-typeid.png)

In this case navigate to the following address: *https://backend.sigfox.com/devicetype/5cd3d97ee833d9746698b27d/callbacks*

If the mentioned callbacks cannot be located in the Sigfox platform, you must create them manually. All of the required information needed for the creation of the callbacks is already given in the alarm description. In the case of the above alarm, the following callback is listed first:

 - [[callback=[type=DATA_BIDIR, url=<<tenant_url>>/service/sigfox-agent/sigfoxDataCallback, httpMethod=POST, bodyTemplate={"device":"{device}","time":"{time}","snr":"{snr}","station":"{station}","data":"{data}","rssi":"{rssi}","seqNumber":"{seqNumber}","ack":"{ack}"}, contentType=application/json, headers={Authorization=Basic ...}]]

In order to manually create the callback, the following properties must be filled:

 - type
 - url
 - httpMethod
 - bodyTemplate
 - contentType
 - headers

> **Info:** The Authorization header displayed in the alarm does not show the user credentials.

Non-mentioned properties from the alarm are:

 - sendSni
 - sendDuplicate

These properties will be set to false.
