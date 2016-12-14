---
layout: default
title: SaaS Integration
---

## Overview

The Zapier add-on to Cumulocity helps you to bring real-life data from your assets into ERP, CRM and other enterprise IT services. It also enables you to remote control your assets from these services. The Zapier add-on effectively connects more than 350 IT services with the Internet of Things. Use the add-on to, for example,

* Send machine maintenance alerts into your CRM system.
* Send sales information from vending machines into your ERP system.
* Bring life data into spreadsheets for analysis.
* Create forms to support manual maintenance of master data for your assets.
* Improve customer service by automating standard interactions such as machine resets from your help desk tools.

This section describes how to implement these and many other use cases by combining Cumulocity with [Zapier](https://zapier.com). It will show all available triggers and actions the Cumulocity Zapier app will offer and describe how you can connect them with other services.

All the examples in this section require a Zapier account, which you can obtain for free at https://zapier.com.

## Access Cumulocity App in Zapier

If you want to get access to the app and try it out please contact us at [support](https://support.cumulocity.com).

## How does it work?

The Zapier add-on connects Cumulocity in two ways to enterprise IT services:

* You can send data from the sensor network and from Cumulocity to these IT services.
* You can send data from the IT services to Cumulocity and the sensor network.

### From the Internet of Things to enterprise IT services

To send data to enterprise IT services, you need to set up a CEL statement in Cumulocity (or use one of your existing SmartRules) and a Zap in Zapier, as depicted below.

![Triggers](/guides/zapier/triggers.png)


#### New SmartRule Event

The New SmartRule Event trigger enables you to add additional actions when your SmartRule is executed (e.g. a threshold rule creates a threshold alarm).
Please ensure that you have created and activated a SmartRule in Cumulocity before using this feature.
After choosing this trigger and selecting your Cumulocity account, you can specify your SmartRule:

![Cumulocity account](/guides/zapier/setUpSmartRule.png)

|Input|Description|
|:--|:-------------|
|SmartRule type|The type of the SmartRule you want to trigger on.|
|Statement|The statement in the SmartRule you want to trigger on. Some SmartRules support multiple trigger statements.|
|SmartRule|The SmartRule from your Cumulocity account you want to trigger on. If none is displayed you don't have a SmartRule of that type created.|

All inputs are provided as a drop down list.

In the test step in Zapier, we will provide you with an example of how Zapier will receive the data.



#### New CEL Event

The New CEL Event trigger provides a more generic way to forward any statement of any of your CEL modules to Zapier. Before using this feature you need to deploy your module in Cumulocity.
After choosing this trigger and selecting your Cumulocity account, you can specify your CEL module:

![Cumulocity account](/guides/zapier/setUpCEL.png)

|Input|Description|
|:--|:-------------|
|Module name|The of your CEL module in Cumulocity.|
|Statement name|The statement in the CEL module you want to trigger on.|
|Is Channel?|Whether you want to listen to a statement or a channel.|

In the test step in Zapier, we will provide you with an example of how Zapier will receive the data but the structure depends purely on how your statement in the CEL looks like. Therefore it might be that some of the fields in our example don't exist in your CEL statement.

Please have a look at our [example](/guides/zapier#examples) for this trigger if you want to know more .

### From enterprise IT services to the Internet of Things

The Zapier add-on provides a number of Zapier actions to send data to Cumulocity and to the device managed by Cumulocity. The currently supported actions are:

* New Device.
* Update Inventory.
* Create Operation

![Actions](/guides/zapier/actions.png)

#### New Device

"New device" registers a new device so that you can connect it directly. Pass the same device ID (IMEI, serial number) as you would normally use in the "Device registration" user interface.

![Device Registration](/guides/zapier/actionDeviceRegistration.png)

#### Update Inventory

"Update inventory" enables you to create and update assets in the Cumulocity inventory. The following parameters can be defined:

|Input|Description|
|:--|:-------------|
|ID|A technical identifier for the asset.|
|Name|A readable name for the asset.|
|Fragment|The fragment type that is created or updated.|
|Data|The fragment's data as a list of keys and values.|
|Is a device?|A flag that will mark the asset as a device. The asset shows up when "All Devices" is clicked.|

Assets migrate into the inventory using the following process:

1 The ID is interpreted as asset ID and the Zapier add-on checks if there is an existing asset with the given asset ID.
2 The ID is interpreted as a Cumulocity global ID and the Zapier add-on checks for an asset with that global ID.
3 The name is used to find an asset with an exactly matching name.

If any of the three steps succeeds, the retrieved asset is updated. If nothing could be found, a new asset is created.

![Inventory](/guides/zapier/actionInventory.png)

#### Create Operation

"Trigger device restarts" sends a restart operation to a device.

|Input|Description|
|:--|:-------------|
|ID|A technical identifier for a device.|
|Name|A readable name for a device.|
|Description|The description of the operation.|
|Fragment|The fragment which is added to the operation.|
|Data|The fragment's data as a list of keys and values.|

The device is identified with the same three-step mechanism as illustrated above in the "Update inventory" action.

![Operation](/guides/zapier/actionOperation.png)

### Configuring your Cumulocity account in Zapier

Each trigger and action will require you to add valid Cumulocity credentials. If you are creating your first Zap with Cumulocity connection you need to connect a new account and will get to the following dialog where you enter your Cumulocity credentials.

![Cumulocity account](/guides/zapier/credentials.png)

## Examples

> For detailed information on setting up Zaps, please visit https://zapier.com/help/. Note that the Zapier plans have limitations on the volume of data that can be transferred. Sending data outside of your plan may deactivate your Zap temporarily.

### Store CEL data in a Google Spreadsheet

In the first example, we connect Cumulocity to Google Spreadsheet and transfer live measurements from your account into the spreadsheet. You can use the measurements for ad-hoc analysis, for example, to compare the performance of different devices. The example consists of four steps.

To run the example, you need a Google account besides your Zapier account. If you do not have a Google account already, visit https://google.com and click "Sign in", then "Create an account". We also assume that you have the default simulated devices running in your account.

Open the Cumulocity administration application, click on "Event Processing" and select "New Module". Give your new module the name "zapier". In the "Examples" drop-down menu, select "Send simulator temperature to Zapier". Click the "Save" button. Your screen should look like the screenshot below.

![Sample CEL statement](/guides/zapier/samplestatement.png)

The above statement selects all new temperature measurements in your account and formats them for the Zapier add-on. The output of the statement is printed live next to the statement. If you have the default simulator configuration running, it should start showing values. For more information on the statements, please visit the Section "[Real-time processing](/guides/concepts/realtime)".

You must create a spreadsheet for holding the data coming from Cumulocity. Visit https://docs.google.com and click "New" and select "Google Sheets". Click on the "Untitled Spreadsheet" text at the top of the screen and give your spreadsheet a name such as "Test spreadsheet". In the spreadsheet, create a header row and a row with sample data as illustrated in the screenshot below.  The header row and the sample data will be used by used by Zapier to simplify the setup of your "Zap",your new system integration.

![Sample spreadsheet](/guides/zapier/samplespreadsheet.png)

More information on using spreadsheets with Zapier can be found at https://zapier.com/support/questions/2301/using-zapier-with-google-docs/.

Now, you are ready to set up your Zap:

* Choose "Cumulocity" as "Trigger app".
* Select "New CEL event".
* Connect your Cumulocity Account in Zapier (or select it if you previously connected it).
* Enter "zapier"  in the "Module name" input and "simulatortemperature" in the "Statement" input
* Choose "Google Sheets" as "Action app" on the right side.
* Select "Create Spreadsheet Row".
* Connect your Google Account in Zapier (or select it if you previously connected it).
* Select your spreadsheet and worksheet from the pull down menus

Your screen should look like the screenshot below after going through all steps:

![Example 1](/guides/zapier/example1.png)

Activate the Zap in Zapier and open the spreadsheet to watch data from the simulator flowing in.

![Result](/guides/zapier/result.png)

### Register a device from a spreadsheet

In this example, we assume that you maintain a spreadsheet to keep track of your devices, their IMEIs, their SIM cards and their deployment location -- a "poor man's asset management". Whenever new devices have entered this spreadsheet, it should be automatically entered into Cumulocity's device registration. You can then switch on the device and pair it with your account.
 
As a first step, prepare a spreadsheet similar to the one below in the screenshot. The column "IMEI" provides the identifier of the device in registration.

![Device spreadsheet](/guides/zapier/devicessheet.png)

Now, you are ready to set up your Zap:

* Choose "Google Sheets" as "Trigger app".
* Select "New Spreadsheet Row".
* Connect your Google Account in Zapier (or select it if you previously connected it).
* Select your spreadsheet and worksheet from the pull down menus
* Choose "Cumulocity" as "Action app" on the right side.
* Select "New Device".
* Connect your Cumulocity Account in Zapier (or select it if you previously connected it).
* Select the IMEI column from the fields list to use in the "Device ID" input

Your screen should look like the screenshot below after going through all steps:

![Example 2](/guides/zapier/example2.png)

Test the Zap and turn it on. Enter a new device into your spreadsheet.

![Enter device](/guides/zapier/enterdevice.png)

After a while, the device ID appears in the "Device registration" dialog of Cumulocity.

![Device registered](/guides/zapier/deviceregistration.png)

> It may take up to fifteen minutes until Zapier picks up the change in the spreadsheet.

Now you can play with this setup. For example, you could introduce a workflow column indicating the state of the device (ordered, in stock, rolling out, in production) and only register the device when it is being rolled out.

### Use a form to enter customers into the inventory

In this example, we update the Cumulocity inventory using a Wufoo form.

To run the example, you need a [Wufoo account](http://www.wufoo.com/).

Open the Wufoo form builder and create a form for your inventory entry. For the example, we want to create customer contacts in the inventory. Save the form.

![Wufoo form](/guides/zapier/wufooform.png)

Now, you are ready to set up your Zap:

* Choose "Wufoo" as "Trigger app".
* Select "New Entry".
* Connect your Wufoo Account in Zapier (or select it if you previously connected it).
* Select your form from the pull down menus
* Choose "Cumulocity" as "Action app" on the right side.
* Select "Update Inventory".
* Connect your Cumulocity Account in Zapier (or select it if you previously connected it).
* Fill the data fields from the Wufoo form into the Update Inventory inputs (e.g. like in the screenshot below)

In this case, we are creating a new entry for each customer entered into Wufoo. The Wufoo entry ID can be used as asset ID in Cumulocity. As a name, we use the first and last name of the contact. "Data" contains a list of key/value pairs that you can use for the remaining form data. These key/value pairs are stored in a Cumulocity fragment "c8y_Contact". You can set "Is a device?" to true to see the entered data in the device management application (even though your contact isn't exactly a device).

![Wufoo Zap](/guides/zapier/wufoozap.png)

Your screen should look like the screenshot below after going through all steps:

![Example 3](/guides/zapier/example3.png)

## Extensions

Zapier offers a built-in action to send pure REST requests called "Webhooks". You are able to use this action to send any data to our documented APIs directly.

Still, have ideas for features in the Cumulocity app? Mail us.
