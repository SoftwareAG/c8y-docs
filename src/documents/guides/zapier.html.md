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

### Prerequisites

To run the example, you need a Google account besides your Zapier account. If you do not have a Google account already, visit https://google.com and click "Sign in", then "Create an account". 

### Step 1: Set up a CEL statement to produce data

Open the Cumulocity administration application, click on "Event Processing" and select "New Module". Give your new module the name "zapier". In the "Examples" drop-down menu, select "Send a measurement to Zapier". Edit the placeholders as follows:

* Replace "&lt;&lt;type&gt;&gt;" with "c8y_TemperatureMeasurement".
* Replace "&lt;&lt;value&gt;&gt;" with "c8y_TemperatureMeasurement.T.value".

Click the "Save" button. Your screen should look like the screenshot below.

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

![Actions](/guides/zapier/actions.png)

## More examples

### Create customers in the inventory (through CRM)

### Create customers in the inventory (through a form builder)

* Account for Wufoo
* Create a form
* Update inventory action

### Restart a device from your ticketing system

### Send sales to your accounting/invoicing

* Freshbooks/Coinbase/Dwolla
* OpenERP
* Google Spreadsheet

### Create tickets from alarms

### Expose events 

* RSS Feed
* Twitter/Facebook/HipChat

### Post location of machine to CRM?

http://www.geonames.org/export/reverse-geocoding.html

## Extensions

New ideas? Mail us.


