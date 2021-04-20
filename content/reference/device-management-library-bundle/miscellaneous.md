---
weight: 60
title: Miscellaneous
layout: redirect
---

#### c8y\_Restart

To restart a device, an operation with a "c8y\_Restart" fragment is sent. To enable a "restart" button in the user interface, add "c8y\_Restart" to the list of supported operations as described above.

    "c8y_Restart": {}

![Restart button](/images/reference-guide/restartsupported.png)

#### <a name="communication_mode"></a>c8y\_CommunicationMode

In order to send commands as text messages to devices, the devices must be put into SMS mode. To indicate that it supports SMS mode, a device needs to add the fragment "c8y_CommunicationMode" with a mode property of "SMS".


	"c8y_CommunicationMode": {
		"mode": "SMS"
	}

For more information, please refer to [Device control via SMS](/reference/device-control/#device-control-via-sms).

#### c8y\_Command

To carry out interactive sessions with a device, use the "c8y\_Command" fragment. If this fragment is in the list of supported operations for a device, a tab "Shell" will be shown. Using the "Shell" tab, the user can send commands in an arbitrary, device-specific syntax to the device. The command is sent to the device in a property "text":

	"c8y_Command": {
		"text": "get uboot.sn"
	}

To communicate the results of a particular command, the device adds a property "result":

	"c8y_Command": {
		"text": "get uboot.sn",
		"result": "165711141901401"
	}

Please contact [product support](/about-doc/contacting-support) if you would like to publish sample commands for your device type.

#### c8y\_DeviceTypes

To publish sample commands for a subset of devices sharing the same device type, the c8y_DeviceTypes fragment must be added:

	"c8y_DeviceTypes": ["deviceSubsetType"]

If the fragment is present, the list of sample commands for a device type will be extended with the sample commands for the c8y_DeviceTypes. New sample commands created from the user interface will be created in the context of the c8y_DeviceTypes.

#### c8y\_LogfileRequest

You can request a device to send a log file and view the log file in Cumulocity IoT's log viewer. If a device supports log viewing, it needs to add "c8y\_LogfileRequest" to its supported operations. In addition, it needs to specify which logs are available on the device:

	"c8y_SupportedLogs": ["syslog", "dmesg"]

A log file request has the following structure:

	"c8y_LogfileRequest": {
		"logFile": "syslog",
		"dateFrom": "2016-01-27T13:45:24+0100",
		"dateTo": "2016-01-28T13:45:24+0100",
		"searchText": "sms",
		"maximumLines": 1000
	}

The parameters in the request define filtering criteria to be applied to the log before sending it:

* "logFile" indicates the log file to select.
* "dateFrom" and "dateTo" specify the time range of log entries in the log file to be sent.
* "searchText" provides a text that needs to be present in the log entry.
* "maximumLines" gives an upper limit of the number of lines that should be sent to Cumulocity IoT after filtering.

When the device receives such a request, it filters the log file according to the criteria and sends the result as a file to the [Binary API](/reference/binaries). It then puts a link to this file into the log file request:

	"c8y_LogfileRequest": {
		"logFile": "syslog",
		"dateFrom": "2016-01-27T13:45:24+0100",
		"dateTo": "2016-01-28T13:45:24+0100",
		"searchText": "sms",
		"maximumLines": 1000,
		"file": "http://...cumulocity.com/inventory/binaries/30761423"
	}
