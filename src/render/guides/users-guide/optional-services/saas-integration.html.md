---
order: 90
layout: redirect
title: Zapier Integration
---

### Overview

The Zapier service in Cumulocity helps you to bring real-life data from your assets into ERP, CRM and other enterprise IT services. It also enables you to remote control your assets from these services. The Zapier service effectively connects more than 350 IT services with the Internet of Things. Use this service, for example, to

* send machine maintenance alerts into your CRM system,
* send sales information from vending machines into your ERP system,
* bring life data into spreadsheets for analysis,
* create forms to support manual maintenance of master data for your assets,
* improve customer service by automating standard interactions such as machine resets from your help desk tools.

This section describes how to implement these and many other use cases by combining Cumulocity with [Zapier](https://zapier.com). It will show all available triggers and actions the Cumulocity Zapier app offers and describe how you can connect them with other services.

All the examples in this section require a Zapier account, which you can obtain for free at https://zapier.com.


### Access Cumulocity App in Zapier

If you want to get access to the App and try it out please contact us at [support](https://support.cumulocity.com).

### How the service works

The Zapier service connects Cumulocity in two ways to enterprise IT services:

* You can send data from the sensor network and from Cumulocity to these IT services.
* You can send data from the IT services to Cumulocity and the sensor network.

### From the Internet of Things to enterprise IT services

To send data to enterprise IT services, you need to set up a CEP statement in Cumulocity (or use one of your existing Smart Rules) and a Zap in Zapier, as shown below.

![Triggers](/guides/images/users-guide/zapier/triggers.png)


#### New SmartRule Event

The New SmartRule Event trigger enables you to add additional actions when your Smart Rule is executed (e.g. a threshold rule creates a threshold alarm).
Make sure that you have created and activated a Smart Rule in Cumulocity before using this feature.

**Info**: Note that when using Zapier in Cumulocity the processing of global Smart Rules is limited to Smart Rules from the **Global Smart Rules** page in the navigator.

After choosing this trigger and selecting your Cumulocity account, you can specify your SmartRule.

![Cumulocity account](/guides/images/users-guide/zapier/setUpSmartRule.png)

|Input|Description|
|:--|:-------------|
|SmartRule type|The type of the Smart Rule you want to trigger on.|
|Statement|The statement in the Smart Rule you want to trigger on. Some Smart Rules support multiple trigger statements.|
|SmartRule|The Smart Rule from your Cumulocity account you want to trigger on. If none is displayed you don't have a Smart Rule of that type created.|

All inputs are provided as a dropdown list.

In the test step in Zapier, we will provide you with an example of how Zapier will receive the data.


#### New CEL event

The New CEL Event trigger provides a more generic way to forward any statement of any of your CEP modules to Zapier. Before using this feature you need to deploy your module in Cumulocity.

After choosing this trigger and selecting your Cumulocity account, you can specify your CEP module.

![Cumulocity account](/guides/images/users-guide/zapier/setUpCEL.png)

|Input|Description|
|:--|:-------------|
|Module name|The name of your CEP module in Cumulocity.|
|Statement name|The statement in the CEP module you want to trigger on.|
|Is Channel?|Whether you want to listen to a statement or a channel.|

In the test step in Zapier, we will provide you with an example of how Zapier will receive the data. However, the structure purely depends on how your statement in the CEP looks like. Therefore some of the fields in our example might not exist in your CEP statement.

For further information, refer to our [example](#examples) for this trigger.

### From enterprise IT services to the Internet of Things

The Zapier service provides a number of Zapier actions to send data to Cumulocity and to the device managed by Cumulocity. The currently supported actions are:

* New device
* Update inventory
* Create operation

![Actions](/guides/images/users-guide/zapier/actions.png)

#### New device

**New device** registers a new device so that you can connect it directly. Pass the same device ID (IMEI, serial number) as you would normally use in the **Device registration** dialog.

![Device Registration](/guides/images/users-guide/zapier/actionDeviceRegistration.png)

#### Update Inventory

**Update inventory** enables you to create and update assets in the Cumulocity inventory. The following parameters can be defined:

|Input|Description|
|:--|:-------------|
|ID|A technical identifier for the asset|
|Name|A readable name for the asset|
|Fragment|The fragment type that is created or updated|
|Data|The fragment's data as a list of keys and values|
|Is a device?|A flag that marks the asset as a device. The device will show up in **All devices**.|

Assets migrate into the inventory using the following process:

1 The ID is interpreted as asset ID and the Zapier service checks if there is an existing asset with the given asset ID.
2 The ID is interpreted as a Cumulocity global ID and the Zapier service checks for an asset with that global ID.
3 The name is used to find an asset with an exactly matching name.

If any of the three steps succeeds, the retrieved asset is updated. If there are no matches, a new asset is created.

![Inventory](/guides/images/users-guide/zapier/actionInventory.png)

#### Create operation

**Trigger device restarts** sends a restart operation to a device.

|Input|Description|
|:--|:-------------|
|ID|A technical identifier for a device|
|Name|A readable name for a device|
|Description|The description of the operation|
|Fragment|The fragment which is added to the operation|
|Data|The fragment's data as a list of keys and values|

The device is identified with the same three-step mechanism as described above under "Update inventory".

![Operation](/guides/images/users-guide/zapier/actionOperation.png)

### Configuring your Cumulocity account in Zapier

Each trigger and action requires to add valid Cumulocity credentials. If you create your first Zap with a Cumulocity connection, you need to connect a new account. You will be processed to the following dialog where you enter your Cumulocity credentials.

![Cumulocity account](/guides/images/users-guide/zapier/credentials.png)

### Examples

> For detailed information on setting up Zaps, refer to [https://zapier.com/help/](https://zapier.com/help/). Note that the Zapier plans have limitations on the volume of data that can be transferred. Sending data outside of your plan may deactivate your Zap temporarily.

#### Store CEP data in a Google spreadsheet

In the first example, we connect Cumulocity to Google Spreadsheet and transfer live measurements from your account into the spreadsheet. You can use the measurements for ad-hoc analysis, for example, to compare the performance of different devices. The example consists of four steps.

To run the example, you need a Google account besides your Zapier account. If you do not have a Google account yet, visit https://google.com and create an account. We also assume that you have the default simulated devices running in your account.

Open the Cumulocity Administration application, click **Event Processing** in the **Business rules** menu in the navigator and select **New Module**. Enter "zapier" as the name for the new module. In the **Examples** drop-down field, select "Send simulator temperature to Zapier". Click **Save**. Your screen should look like the screenshot below.

![Sample CEP statement](/guides/images/users-guide/zapier/samplestatement.png)

The above statement selects all new temperature measurements in your account and formats them for the Zapier service. The output of the statement is printed in realtime next to the statement. If you have the default simulator configuration running, it should start showing values. For more information on the statements, refer to [Real-time processing](/guides/concepts/realtime) in the Concepts Guide.

You must create a spreadsheet for holding the data coming from Cumulocity. Go to [https://docs.google.com](https://docs.google.com) and switch to **Google Sheets**. Open a new blank spreadsheet and provide a name for it. In the spreadsheet, create a header row and a row with sample data as illustrated in the screenshot below. The header row and the sample data will be used by Zapier to simplify the setup of your "Zap", your new system integration.

![Sample spreadsheet](/guides/images/users-guide/zapier/samplespreadsheet.png)

More information on using spreadsheets with Zapier can be found at [https://zapier.com/support/questions/2301/using-zapier-with-google-docs/](https://zapier.com/support/questions/2301/using-zapier-with-google-docs/).

To setup your Zap, follow these steps:

1. Choose "Cumulocity" as **Trigger app**.
2. Select **New CEL event**.
1. Connect your Cumulocity account in Zapier (or select it if you previously connected it).
1. Enter "zapier"  as **Module name** and "simulatortemperature" as **Statement**.
1. Choose "Google Sheets" as **Action app** on the right side.
1. Select **Create Spreadsheet Row**.
1. Connect your Google account in Zapier (or select it if you previously connected it).
1. Select your spreadsheet and worksheet from the dropdown fields.

After processing these steps, your screen should look like the following:

![Example 1](/guides/images/users-guide/zapier/example1.png)

Activate the Zap in Zapier and open the spreadsheet to watch data from the simulator flowing in.

![Result](/guides/images/users-guide/zapier/result.png)

#### Register a device from a spreadsheet

In this example, we assume that you maintain a spreadsheet to keep track of your devices, their IMEIs, their SIM cards and their deployment location -- a "poor man's asset management". Whenever new devices have entered this spreadsheet, it should be automatically entered into Cumulocity's device registration. You can then switch on the device and pair it with your account.
 
As a first step, prepare a spreadsheet similar to the one below in the screenshot. The column "IMEI" provides the identifier of the device in registration.

![Device spreadsheet](/guides/images/users-guide/zapier/devicessheet.png)

To setup your Zap, follow these steps:

1. Choose "Google Sheets" as **Trigger app**.
2. Select **New Spreadsheet Row**.
1. Connect your Google account in Zapier (or select it if you previously connected it).
1. Select your spreadsheet and worksheet from the dropdown fields.
1. Choose "Cumulocity" as **Action app** on the right side.
1. Select **New Device**.
1. Connect your Cumulocity account in Zapier (or select it if you previously connected it).
1. Select the IMEI column from the fields list to use it in the "Device ID" input.

After processing these steps, your screen should look like the following:

![Example 2](/guides/images/users-guide/zapier/example2.png)

Test the Zap and turn it on. Enter a new device into your spreadsheet.

![Enter device](/guides/images/users-guide/zapier/enterdevice.png)

After a while, the device ID appears in the **Device registration** dialog of Cumulocity.

![Device registered](/guides/images/users-guide/zapier/deviceregistration.png)

> **Info:** It may take up to 15 minutes until Zapier picks up the change in the spreadsheet.

Now you can play with this setup. For example, you could introduce a workflow column indicating the state of the device (ordered, in stock, rolling out, in production) and only register the device when it is being rolled out.

#### Use a form to enter customers into the inventory

In this example, we update the Cumulocity inventory using a Wufoo form.

To run the example, you need a [Wufoo account](http://www.wufoo.com/).

Open the Wufoo form builder and create a form for your inventory entry. For this example, we want to create customer contacts in the inventory. Save the form.

![Wufoo form](/guides/images/users-guide/zapier/wufooform.png)

To setup your Zap, follow these steps:

* Choose "Wufoo" as **Trigger app**.
* Select **New Entry**.
* Connect your Wufoo account in Zapier (or select it if you previously connected it).
* Select your form from the dropdown field.
* Choose "Cumulocity" as **Action app** on the right side.
* Select **Update Inventory**.
* Connect your Cumulocity account in Zapier (or select it if you previously connected it).
* Fill the data fields from the Wufoo form into the Update Inventory inputs (e.g. like in the screenshot below).

In this case, we are creating a new entry for each customer entered into Wufoo. The Wufoo entry ID can be used as asset ID in Cumulocity. As name, we use the first and last name of the contact. "Data" contains a list of key/value pairs that you can use for the remaining form data. These key/value pairs are stored in a Cumulocity fragment "c8y_Contact". You can set "Is a device?" to true to see the entered data in the Device Management application (even though your contact isn't exactly a device).

![Wufoo Zap](/guides/images/users-guide/zapier/wufoozap.png)

After processing these steps, your screen should look like the following:

![Example 3](/guides/images/users-guide/zapier/example3.png)

### Extensions

Zapier offers a built-in action to send pure REST requests called "Webhooks". You can to use this action to send any data to our documented APIs directly.

Still have ideas for features in the Cumulocity app? Mail us.
