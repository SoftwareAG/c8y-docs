---
weight: 30
title: Device information
layout: redirect
---

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

![Hardware information](/images/reference-guide/hardware.png)

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

![Firmware information](/images/reference-guide/firmware.png)

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

![Software information](/images/reference-guide/software.png)

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

![Modem information](/images/reference-guide/mobile.png)

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
