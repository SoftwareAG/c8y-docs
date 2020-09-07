---
weight: 35
title: Configuration management
layout: redirect
---

In this section, fragments related to configuration management are listed.

The following fragments can be observed:

- c8y_Configuration: Text configuration fragment that allows you to configure parameters and initial settings of your device. For further information, see [Device Management > Device details > Configuration](/users-guide/device-management#config) in the User guide.
- c8y_ConfigurationDump: Potentially large size configuration archive. For further information, see [Device Management > Managing device data > Managing configurations](/users-guide/device-management#configuration-repository) in the User guide.
- c8y_UploadConfigFile: Upload potentially large size configuration files. For further information, see “To apply a configuration snapshot to a device” in [Device Management > Managing device data > Managing configurations](/users-guide/device-management#configuration-repository) in the User guide.
- c8y_DownloadConfigFile:  Download potentially large size configuration files. For further information, see “To retrieve a configuration snapshot from a device” in [Device Management > Managing device data > Managing configurations](/users-guide/device-management#configuration-repository) in the User guide.

#### c8y\_Configuration

*c8y\_Configuration* permits a text-based configuration of the device. Most devices support a text-based system configuration file that can be presented and edited using this procedure. In the inventory, "c8y_Configuration" represents the currently active configuration on the device. As part of an operation, "c8y_Configuration" requests the device to switch the transmitted configuration to the currently active one. To enable configuration through the user interface, add "c8y_Configuration" to the list of supported operations as described above.

|Name|Type|Description|
|:---|:---|:----------|
|config|String|A text in a device-specific format, representing the configuration of the device.|

    "c8y_Configuration": {
      "config": "#Tue Jul 02 16:10:36 UTC 2013\nc8y.log.alarmLevel=ERROR\nc8y.modem.signalPolling=10000\nc8y.log.eventLevel=INFO"
    }

![Device configuration](/images/reference-guide/configuration.png)

#### c8y\_ConfigurationDump

*c8y_ConfigurationDump* is an operation that permits to  manage binary configuration files of the device. The configuration dump, or configuration snapshot, is a managed object that has the type "c8y_ConfigurationDump".

Here is an example of a managed object representing a configuration snapshot:

```
"id" : "650041722",
"name" : "Device Name",
"type" : "c8y_ConfigurationDump",
"description" : "Upload by 165711155000082 at 05/04/16 08:14:07",
"url" : "https://yourtenant.cumulocity.com/inventory/binaries/binaryId",
"configurationType": "app1"
```

An operation example of applying a configuration from a snapshot:

    "deviceId":"678101855",
    "id":"680189603",
    "c8y_DownloadConfigFile":{
      "c8y_ConfigurationDump":{
        "id":"651201036"
      },
      "url":"https://yourtenant.cumulocity.com/inventory/binaries/651201031"
    },
    "description":"Apply configuration snapshot"

#### c8y\_UploadConfigFile

*c8y_UploadConfigFile* is an operation that permits to upload configuration files as binaries. It is used when the device is uploading a configuration file. Binary API is used in order to attach the managed object to the binary file.

      "c8y_UploadConfigFile":{}

#### c8y\_DownloadConfigFile

*c8y_DownloadConfigFile* is an operation that permits to download configuration files as binaries. The binary file is attached to the managed object using binary API.

An operation example of downloading a configuration file:

      "c8y_DownloadConfigFile":{
        "url":"<download url>"
    }

> **Info:** The "c8y_DownloadConfigFile" operation delivers a "c8y_ConfigurationDump" object. This object must be configured on the Cumulocity IoT device in order to make the UI display the snapshot information.

#### c8y\_SendConfiguration

To enable reloading configuration through the user interface, add "c8y\_SendConfiguration" to the list of supported operations as described above.
