---
layout: default
title: Zapier add-on
---

## Overview

The Zapier add-on to Cumulocity helps you to bring real-life data from your assets into ERP, CRM and other enterprise IT services. It also enables you to remote control your assets from these services. The Zapier add-on effectively connects more than 350 IT services with the Internet of Things. Use the add-on to, for example,

* Send machine maintenance alerts into your CRM system.
* Send sales information from vending machines into your ERP system.
* Bring life data into spreadsheets for analysis.
* Create forms to support manual maintenance of master data for your assets.
* Improve customer service by automating standard interactions such as machine resets from your help desk tools.

This section describes how to easily implement these and many other use cases by combining Cumulocity with [Zapier](https://zapier.com). It first starts with a simple "Hello, world!"-style example that you can execute using the pre-configured simulator setup in your tenant. Then, the section describes in more detail the functionality behind the Zapier add-on. Finally, it shows more examples of using the add-on followed by options of extending the add-on to adapt it better to your use cases.

All the examples in this section require a Zapier account, which you can obtain for free at https://zapier.com.

## Example

In the first example, we connect Cumulocity to Google Spreadsheet and transfer live measurements from your account into the spreadsheet. You can use the measurements for ad-hoc analysis, for example, to compare the performance of different devices. The example consists of four steps:

* Step 1: Set up a CEL statement to produce data.
* Step 2: Set up a spreadsheet to hold the data.
* Step 3: Set up a Zap to connect rule with spreadsheet.
* Step 4: Test the Zap.

### What you need

To run the example, you need a Google account besides your Zapier account. If you do not have a Google account already, visit https://google.com and click "Sign in", then "Create an account". We also assume that you have the default simulated devices running in your account.

### Step 1: Set up a CEL statement to produce data

Open the Cumulocity administration application, click on "Event Processing" and select "New Module". Give your new module the name "zapier". In the "Examples" drop-down menu, select "Send simulator temperature to Zapier". Click the "Save" button. Your screen should look like the screenshot below.

![Sample CEL statement](/guides/zapier/samplestatement.png)

The above statement selects all new temperature measurements in your account and formats them for the Zapier add-on. The output of the statement is printed live next to the statement. If you have the default simulator configuration running, it should start showing values. For more information on the statements, please visit the Section "[Real-time processing](/guides/concepts/realtime)".

### Step 2: Set up a spreadsheet to hold the data

You also need to create a spreadsheet that will later hold the data from Cumulocity. Visit https://docs.google.com and click "New" and select "Google Sheets". Click on the "Untitled Spreadsheet" text at the top of the screen and give your spreadsheet a name such as "Test spreadsheet". In the spreadsheet, create a header row and a row with sample data as illustrated in the screenshot below.  The header row and the sample data will be used by used by Zapier to simplify the setup of your "Zap", i.e., your new system integration. 

![Sample spreadsheet](/guides/zapier/samplespreadsheet.png)

More information on using spreadsheets with Zapier can be found at https://zapier.com/support/questions/2301/using-zapier-with-google-docs/.

### Step 3: Set up a Zap to connect CEL statement and spreadsheet

Now, you are ready to set up your Zap. Go to https://zapier.com and click the "Make a Zap!" link. 

* Choose "Cumulocity" as "Trigger app" on the left side.
* Click "Choose a Trigger" and select "New event".
* Choose "Google Docs" as "Action app" on the right side.
* Click "Choose an Action" and select "Create Spreadsheet Row".

Your screen should look like the screenshot below. 

![Step 1](/guides/zapier/step1.png)

Next, select the Cumulocity account to use and the Google Docs account to use. For Cumulocity, you need to enter your username, password and the subdomain that you use when connecting to Cumulocity (i.e., your tenant). For Google Docs, you may need to sign in to Google. Then, accept the permission request from Zapier. Make sure that both accounts are marked as working OK.

![Step 2-3](/guides/zapier/step23.png)

Next, enter the CEL statement that you created in Step 1 in the "Feed" field. If you have used "zapier" as name for the CEL module and "measurements" as name for the CEL statement, enter "zapier/metrics".

![Step 4](/guides/zapier/step4.png)

Finally, select the spreadshee that you created in Step 2 in the "Spreadsheet" drop-down menu and select "Sheet1" in the "Worksheet" drop-down menu. Match the output fields of the CEL statement with the columns of the spreadsheet, i.e., insert the "Date" field into the "date" column, insert the "Object" field into the "object" column and insert the "Value" field into the "value column". If you screen looks like the screenshot below, you are ready to test your Zap.

![Step 5](/guides/zapier/step5.png)

### Step 4: Test the Zap

Now, click on "Test Cumulocity trigger". 

![Test Zap](/guides/zapier/testzap.png)

If you do not receive an error, give the Zap a name and turn it on using the "Turn Zap on" button. 

![Run Zap](/guides/zapier/runzap.png)

Open the spreadsheet to watch data from the simulator flowing in.

![Result](/guides/zapier/result.png)

> For more information on setting up Zaps, please visit https://zapier.com/help/. Note that the Zapier plans have limitations on the volume of data that can be transferred. Sending data outside of your plan may deactivate your Zap temporarily.

## How does it work?

The Zapier add-on connects Cumulocity in two ways to enterprise IT services:

* You can send data from the sensor network and from Cumulocity to these IT services.
* You can send data from the IT services to Cumulocity and the sensor network.

### From the Internet of Things to enterprise IT services

To send data to enterprise IT services, you need to set up a CEL statement in Cumulocity and a Zap in Zapier, as depicted below. 

![Triggers](/guides/zapier/triggers.png)

The CEL statement contains the business logic for pre-processing the data that is actually sent. It selects the required data out of all data that is coming into your Cumulocity account. For example, it may select only temperature measurements exceeding a particular threshold to be sent. It may also join the measurement information with inventory data, or aggregate information.

The Zap then links the data produced by the CEL statement ("trigger") with the target IT system ("action"). The CEL statement has to produce the data in a certain format so that the Zapier add-on understands it. It needs to output the following properties:

* *id*: A technical identifier of the device or asset that sent the data. (A character string holding, e.g., a Cumulocity ID, IMEI or a vending machine ID).
* *name*: The human-readable name of the device or asset that sent the data.
* *time*:  A timestamp when the data was produced. (E.g., the time when a measurement was taken by a sensor.)
* *value*: A numerical value. (E.g., a sensor measurement.)
* *text*: Textual information. (E.g., an alarm or event text or any other additional information that you may want to include.)

All properties are optional.

### From enterprise IT services to the Internet of Things

The Zapier add-on provides a number of Zapier actions to send data to Cumulocity and to the device managed by Cumulocity. The currently supported actions are:

* Update inventory.
* New device.
* Trigger device restart.

![Actions](/guides/zapier/actions.png)

#### Update inventory

"Update inventory" enables you to create and update assets in the Cumulocity inventory. The following parameters can be defined:

* ID: A technical identifier for the asset.
* Name: A human-readable name for the asset.
* Type: The fragment type that is created or updated.
* Data: The fragment's data as a list of keys and values.
* Is a device? A flag that will mark the asset as a device, i.e., will make the asset show up when clicking on "All Devices".

Assets are located in the inventory using the following process: 

1 The ID is interpreted as asset ID and the Zapier add-on checks if there is an existing asset with the given asset ID.
2 The ID is interpreted as a Cumulocity global ID and the Zapier add-on checks for an asset with that global ID. 
3 The name is used to find an asset with an exactly matching name.

If any of the three steps succeeds, the retrieved asset is updated. If nothing could be found, a new asset is created.

#### New device

"New device" registers a new device so that you can connect it directly. Pass the same device ID (IMEI, serial number) as you would normally use in the "Device registration" user interface.

#### Trigger device restart

"Trigger device restarts" sends a restart operation to a device. The device is identified with the same three-step mechanism as illustrated above in the "Update inventory" action.

## More examples

### Register a device from a spreadsheet

In this example, we assume that you maintain a spreadsheet to keep track of your devices, their IMEIs, their SIM cards and their deployment location -- a "poor man's asset management". Whenever a new device is entered this spreadsheet, it should be automatically entered into Cumulocity's device registration. You can then switch on the device and pair it with your account.

As first step, prepare a spreadsheet similar to the one below in the screenshot. The column "IMEI" provides in this case the identifier of the device to be registered.

![Device spreadsheet](/guides/zapier/devicessheet.png)

Then create a new Zap, selecting Google docs as source and Cumulocity as destination. The trigger is "Update Spreadsheet Row", and the action is "New device".

![New device trigger](/guides/zapier/newdevicetrigger.png)

Select your spreadsheet and the workbook in this spreadsheet. Use as "Trigger Column" the column with the device identifier ("IMEI" in this case).

![Select ID column](/guides/zapier/selectidcolumn.png)

Use the same column as value for the "Device ID" field so that the ID is sent to Cumulocity.

![Set ID column](/guides/zapier/setidcolumn.png)

Test the Zap and turn it on. Enter a new device into your spreadsheet. 

![Enter device](/guides/zapier/enterdevice.png)

After a while, the device ID appears in the "Device registration" dialog of Cumulocity.

![Device registered](/guides/zapier/deviceregistration.png)

> Note that, depending on your Zapier plan, it may take up to fifteen minutes until Zapier picks up the change in the spreadsheet.

Now you can play with this setup. For example, you could introduce a workflow column indicating the state of the device (ordered, in stock, rolling out, in production) and only register the device when it is being rolled out.

### Use a form to enter customers into the inventory

In this example, we update the Cumulocity inventory using a Wufoo form.

#### What you need

To run the example, you need a [Wufoo account](http://www.wufoo.com/).

#### Create a form on Wufoo

Open the Wufoo form builder and create a form for your inventory entry. For the example, we want to create customer contacts in the inventory. Save the form.

![Wufoo form](/guides/zapier/wufooform.png)

#### Create a Zap to send form data to Cumulocity

Make a new Zap in Zapier.

* Select Wufoo as source and Cumulocity as destination.
* Use "New Entry" as trigger and "Update inventory" as action.
* Connect your Wufoo and Cumulocity accounts. 
* Select the form that you have created in the Wufoo form builder.
* Match the Wufoo form entries with Cumulocity inventory entries as shown below.

In this case, we are creating a new entry for each customer entered into Wufoo. Hence, the Wufoo entry ID can be used as asset ID in Cumulocity. As name, we use the first and last name of the contact. "Data" contains a list of key/value pairs that you can use for the remaining form data. These key/value pairs are stored in a Cumulocity fragment "c8y_Contact". You can set "Is a device?" to true to see the entered data in the device management application (even though your contact isn't exactly a device).

![Wufoo Zap](/guides/zapier/wufoozap.png)

#### Fill some forms

After testing and activating your Zap, go to the Wufoo entry manager and enter some data. 

TBD: How to test this really? Maybe we should use some data here that we have actually a display for.

### Create mash-up dashboards

In this example, we populate Ducksboard dashboards with device data.

#### What you need

To run the example, you need a [Ducksboard account](https://ducksboard.com).

#### Create a dashboard in Ducksboard

Create a dashboard in Ducksboard and add a few widgets to the dashboard. Click on the "+" icon at the top of the dashboard, then choose "Send data through our API". Choose a widget from the categories "Numbers" or "Text" and give the widget a name. Place it on your dashboard. 

#### Create rules in Cumulocity

Go to the Cumulocity administration application and open "Event Processing". Create a new module "ducksboard" and add a statement for each of the widgets that you have created in Ducksboard. The statement needs to produce the data that you want to show in the corresponding widget. For example, use the "Send simulator temperature to Zapier" example statement to send a number to a chart widget. As another example, send alarms to a timeline widget using the following statement:

	@Name("messages")
	select
		e.alarm.source.value as id,
		findManagedObjectById(e.alarm.source.value).getName() as name,
		e.alarm.text as text
	from AlarmCreated e;

#### Make Zaps to send data

Now, link the dashboard widgets and the statements using Zapier. Create a new Zap with "Cumulocity" as trigger and "Ducksboard" as action. On the Cumulocity side, enter the statement name. For example, use "ducksboard/messages" for the above alarm example. 

The choose the widget to send the data to. Click on the "Slot Label" drop-down menu to get a list of widgets matching the action that you have selected previously. For example, if you selected "Timeline Message" as action, you should see all timeline widgets of your dashboard in the drop-down list. 

Place the statement output (id, name, time, text, value) into the widget fields. For example, to show an alarm in a timeline widget, you could place the "name" property into the "title" field and the "text" property into the "content" field. 

![Configure ducksboard](/guides/zapier/ducksboard.png)

You can also put a link to the alarm tab in Cumulocity into the board by using the following link 

	https://&lt;URL&gt;.cumulocity.com/apps/devicemanagement/index.html#/device/&lt;ID&gt;/alarms

Now test and activate your Zap.

![Link timeline to Cumulocity](/guides/zapier/followlink.png)

### Send sales to your accounting

In this example, we send vending machine sales automatically to your accounting system.

#### What you need

* Freshbooks/OpenERP/Google Spreadsheet

#### Set up CEL rule

Select "Send sales to Zapier" in the CEP engine.

#### Create Zap

![Match invoice](/guides/zapier/matchinvoice.png)

### Restart a device from your ticketing system

### Create tickets from alarms

### Expose events 

* RSS Feed
* Twitter/Facebook/HipChat

### Post location of machine to CRM?

http://www.geonames.org/export/reverse-geocoding.html

## Extensions

New ideas? Mail us.


