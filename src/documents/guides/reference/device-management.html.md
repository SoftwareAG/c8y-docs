---
order: 100
title: Device management library
layout: default
---

## Overview

The device management library defines the data structures that are used in Cumulocity for device management activities such as software management and configuration management.

The data structures are expressed as fragments that can be used inside managed objects, operations and other resources. More information on the fragment concept can be found in the Section "[Cumulocity's domain model](/guides/concepts/domain-model)". The same section also contains information on the process of running operations on devices and updating the inventory according to the result of the operation. For the usage of fragments in client libraries, see the developer's guides for the respective client library.

## Metadata

#### c8y\_IsDevice

A device marked in the inventory with a *c8y\_IsDevice* fragment supports device management. Only devices with this fragment appear in the device management user interface.

    "c8y_IsDevice": {}

![Device in Device Management](/guides/reference-guide/devicemanagement.png)

#### c8y\_SupportedOperations

*c8y\_SupportedOperations* lists the operations that are available for a particular device, so that applications can trigger the operations. For example, if the supported operations list contains "c8y\_Restart" (see below), a restart button will be available under the cogwheel in the device management user interface.


    "c8y_SupportedOperations": [ "c8y_Restart" ]

![Device supports restart](/guides/reference-guide/restartsupported.png)

## Device information

#### c8y\_Hardware

*c8y\_Hardware* contains basic hardware information for a device, such as make and serial number. Often, the hardware serial number is printed on the board of the device or on an asset tag on the device to uniquely identify the device within all devices of the same make.

|Name|Type|Description|
|:---|:---|:----------|
|model|String|A text identifier of the device's hardware model.|
|revision|String|A text identifier of the hardware revision.|
|serialNumber|String|The hardware serial number of the device.|

    "c8y_Hardware": {
      "model": "BCM2708",
      "revision": "000e",
      "serialNumber": "00000000e2f5ad4d"
    }

![Hardware information](/guides/reference-guide/hardware.png)

#### c8y\_Firmware

*c8y\_Firmware* contains information on a device's firmware. In the inventory, "c8y\_Firmware" represents the currently installed firmware on the device. As part of an operation, "c8y\_Firmware" requests the device to install the indicated firmware. To enable firmware installation through the user interface, add "c8y\_Firmware" to the list of supported operations as described above.

|Name|Type|Description|
|:---|:---|:----------|
|name|String|Name of the firmware.|
|version|String|A version identifier of the hardware.|
|url|URI|A location to download the firmware from.|

    "c8y_Firmware": {
      "name": "raspberrypi-bootloader",
      "version": "1.20140107-1",
      "url": "31aab9856861b1a587e2094690c2f6e272712cb1"
    }

![Firmware information](/guides/reference-guide/firmware.png)

In the example above, the device is requested to install firmware version "1.20140107-1". The device has a pre-configured software repository location, hence it only needs the relative URL "31aab9856861b1a587e2094690c2f6e272712cb1" to download the requested firmware image.

#### c8y\_SoftwareList

*c8y\_SoftwareList* is a List of software entries that define the name, version and url for the software.

|Name|Type|Description|
|:---|:---|:----------|
|name|String|Name of the software.|
|version|String|A version identifier of the software.|
|url|URI|A location to download the software from.|


In the inventory, "c8y\_SoftwareList" represents the currently installed software components on the device.

As part of an operation, "c8y\_SoftwareList" requests the device to ensure that the indicated software components and versions are installed. This means that software not contained in "c8y\_SoftwareList" should be removed, software not installed on the device should be installed and software installed in a different version on the device should be upgraded respectively downgraded.

To enable software installation through the user interface, add "c8y\_SoftwareList" to the list of supported operations as described above.

    "c8y_SoftwareList": [
      {
        "name": "Software A",
        "version": "1.0.1",
        "url": "www.some-external-url.com"
      },
      {
        "name": "Software B",
        "version": "2.1.0",
        "url": "mytenant.cumulocity.com/inventory/binaries/12345"
      }
    ]

![Software information](/guides/reference-guide/software.png)

#### c8y\_Configuration

*c8y\_Configuration* permits a text-based configuration of the device. Most devices support a textual system configuration file that can be presented and edited using this mechanism. In the inventory, "c8y\_Configuration" represents the currently active configuration on the device. As part of an operation, "c8y\_Configuration" requests the device to make the transmitted configuration the currently active one. To enable configuration through the user interface, add "c8y\_Configuration" to the list of supported operations as described above.

|Name|Type|Description|
|:---|:---|:----------|
|config|String|A text in a device-specific format, representing the configuration of the device.|

    "c8y_Configuration": {
      "config": "#Tue Jul 02 16:10:36 UTC 2013\nc8y.log.alarmLevel=ERROR\nc8y.modem.signalPolling=10000\nc8y.log.eventLevel=INFO"
    }

![Device configuration](/guides/reference-guide/configuration.png)

#### c8y\_SendConfiguration

To enable reloading configuration through the user interface, add "c8y\_SendConfiguration" to the list of supported operations as described above.

#### c8y\_Mobile

*c8y\_Mobile* holds basic connectivity-related information, such as the equipment identifier of the modem (IMEI) in the device. This identifier is globally unique and often used to identify a mobile device.

|Name|Type|Description|
|:---|:---|:----------|
|imei|String|The equipment identifier (IMEI) of the modem in the device.|
|cellId|String|The identifier of the cell in the mobile network that the device is currently connected with.|
|iccid|String|The identifier of the SIM card that is currently in the device (often printed on the card).|

    "c8y_Mobile": {
      "imei": "358901048995390",
      "cellId": "15DFAC",
      "iccid": "89430301901300001342"
    }

Other possible values are:
c8y_Mobile.imsi
c8y_Mobile.currentOperator
c8y_Mobile.currentBand
c8y_Mobile.connType
c8y_Mobile.rssi
c8y_Mobile.ecn0
c8y_Mobile.rcsp
c8y_Mobile.mnc
c8y_Mobile.lac
c8y_Mobile.msisdn

![Modem information](/guides/reference-guide/mobile.png)

#### c8y\_CellInfo

*c8y\_CellInfo* provides detailed information about the closest mobile cell towers. When the functionality is activated, the location of the device is determined based on this fragment, in order to track the device whereabouts when GPS tracking is not available.

|Name|Type|Description|
|:---|:---|:----------|
|radioType|String|The radio type of this cell tower. (Optional)|
|cellTowers|Array|Detailed information about the neighbouring cell towers.|
|cellTowers.radioType|String|The radio type of this cell tower. Can also be put directly in root JSON element if all cellTowers have same radioType. (Optional)|
|cellTowers.mobileCountryCode|Number|The Mobile Country Code (MCC).|
|cellTowers.mobileNetworkCode|Number|The Mobile Noetwork Code (MNC) for GSM, WCDMA and LTE. The SystemID (sid) for CDMA.|
|cellTowers.locationAreaCode|Number|The Location Area Code (LAC) for GSM, WCDMA and LTE. The Network ID for CDMA.|
|cellTowers.cellId|Number|The Cell ID (CID) for GSM, WCDMA and LTE. The Basestation ID for CDMA.|
|cellTowers.timingAdvance|Number|The timing advance value for this cell tower when available. (Optional)|
|cellTowers.signalStrength|Number|The signal strength for this cell tower in dBm. (Optional)|
|cellTowers.primaryScramblingCode|Number|The primary scrambling code for WCDMA and physical CellId for LTE. (Optional)|
|cellTowers.serving|Number|Specify with 0/1 if the cell is serving or not. If not specified, the first cell is assumed to be serving. (Optional)|

    "c8y_CellInfo": {
      "radioType": "gsm",
      "cellTowers": [{
        "mobileCountryCode": 240,
        "mobileNetworkCode": 1,
        "locationAreaCode": 3012,
        "cellId": 11950
      }]
    }

## Device reports

#### c8y\_Battery

*c8y\_Battery* shows the current battery fill level. It is used as part of a measurement.

    "c8y_Battery": {
      "level": { "value": 23, "unit": "%" }
    }

#### c8y\_SignalStrength

*c8y\_SignalStrength* provides information on the GSM reception of the modem. It is used as part of a measurement and contains two readings: *rssi* and *ber*. "rssi" is the received signal strength in dBm, ranging from -113 dBm (worst) to -51 dBm (best). "ber" is the bit error rate in %.

    "c8y_SignalStrength": {
      "rssi": { "value": -53, "unit": "dBm" },
      "ber": { "value": 0.14, "unit": "%" }
    }

![Signal strength report](/guides/reference-guide/signalstrength.png)

## Device availability

#### c8y\_RequiredAvailability

Devices can be monitored for availability by adding a "c8y\_RequiredAvailability" fragment to the device:

    "c8y_RequiredAvailability": { "responseInterval": <<time in minutes>> }

Devices that have not sent any message in the response interval are considered unavailable. Such devices are marked as unavailable (see below) and an unavailability alarm is raised. Devices with a response interval of zero minutes are considered to be under maintenance. No alarm is raised while a device is under maintenance. Devices that do not contain "c8y\_RequiredAvailability" are not monitored.

#### c8y\_Availability

The availability information computed by Cumulocity is stored in fragments: "c8y\_Availability" and "c8y\_Connection" of the device.

    "c8y_Availability": { "lastMessage": "2013-05-21...", "status": "AVAILABLE" },
    "c8y_Connection": {"status":"CONNECTED"}

|Name|Type|Description|
|:---|:---|:----------|
|lastMessage|Date|The time when the device sent the last message to Cumulocity.|
|status|String|The current status, one of AVAILABLE, MAINTENANCE, UNAVAILABLE.|

The following messages update the last message timestamp of a device:

-   Create an event, measurement or alarm (for given device as source)
-   Update the device itself (with given id) sending empty PUT request or request with id only, ie. {} or {"id":...}

A monitored device has one of following statuses:

|Name|Description|
|:---|:----------|
|CONNECTED|A device push connection is established.|
|AVAILABLE|The device is not connected through device push, but a message was sent within the required response interval.|
|MAINTENANCE|"responseInterval" is set to 0; the device is under maintenance.|
|UNAVAILABLE|"responseInterval" is larger than 0 and the device is neither AVAILABLE nor CONNECTED.|

#### c8y\_UnavailabilityAlarm

The alarm sent when a device becomes unavailable is of type "c8y\_UnavailabilityAlarm":

    {
        ...
        "type" : "c8y_UnavailabilityAlarm",
        "text" : "No communication with device since <<last activity time>>",
        "status" : "active",
        "severity" : "major",
        "source" : <<device id>>
        ...
    }

Updates to the availability status may occur with a delay.

![Availability](/guides/reference-guide/availability.png)

To flag a device as available without updating any data, a "ping" can be sent. The "ping" can be carried out by simply sending an empty update message to the device (i.e., a PUT request to the managed object with empty content).

#### c8y\_ActiveAlarmsStatus

The number of currently active and acknowledged alarms is stored in a fragment "c8y\_ActiveAlarmsStatus".

    "c8y_ActiveAlarmsStatus": {
        "minor": 1,
        "major": 3
    }

![Alarm status](/guides/reference-guide/alarmstatus.png)

## Miscellaneous

#### c8y\_Restart

To restart a device, an operation with a "c8y\_Restart" fragment is sent. To enable a "restart" button in the user interface, add "c8y\_Restart" to the list of supported operations as described above.

    "c8y_Restart": {}

![Restart button](/guides/reference-guide/restartsupported.png)

#### <a name="communication_mode"></a>c8y\_CommunicationMode

In order to send commands as text messages to devices, the devices must be put into SMS mode. To indicate that it supports SMS mode, a device needs to add the fragment "c8y_CommunicationMode" with a mode property of "SMS".


	"c8y_CommunicationMode": {
		"mode": "SMS"
	}

For more information, please refer to [Device control via SMS](/guides/reference/device-control#control_via_sms).

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

Please contact [support](https://support.cumulocity.com) if you would like to publish sample commands for your device type.

#### c8y\_LogfileRequest

You can request a device to send a log file and view the log file in Cumulocity's log viewer. If a device supports log viewing, it needs to add "c8y\_LogfileRequest" to its supported operations. In addition, it needs to specify which logs are available on the device:

	c8y_SupportedLogs: ["syslog", "dmesg"]

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
* "maximumLines" gives an upper limit of the number of lines that should be sent to Cumulocity after filtering.

When the device receives such a request, it filters the log file according to the criteria and sends the result as a file to the [Binary API](/guides/reference/binaries). It then puts a link to this file into the log file request:

	"c8y_LogfileRequest": {
		"logFile": "syslog",
		"dateFrom": "2016-01-27T13:45:24+0100",
		"dateTo": "2016-01-28T13:45:24+0100",
		"searchText": "sms",
		"maximumLines": 1000,
		"file": "http://...cumulocity.com/inventory/binaries/30761423"
	}
