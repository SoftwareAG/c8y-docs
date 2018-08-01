---
order: 40
layout: redirect
title: Static templates
---
## Static inventory templates
### Device creation (100)

Will create a new device for the serial number in the inventory if not yet existing. An externalId for the device with type c8y_Serial and the device identifier of the MQTT clientId as value will be created.

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|device name|NO|MQTT Device &lt;serialNumber&gt;|
|2|device type|NO|c8y_MQTTDevice|
|3|errorHandlerAsync|YES||
|4|processingMode|NO||~~


|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `deviceName` | string | **Optional**. Name of the device. &lt;serialNumber&gt;|
| `deviceType` | string | **Optional**. Type of the device.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticInventoryTemplates
    		.DeviceCreation("myDevice",
                            "myType",
                            (e) => { return Task.FromResult(false); });

### Child device creation (101)

Will create a new child device for the current device. The newly created object will be added as child device. Additionally, an externalId for the child will be created with type "c8y_Serial" and the value a combination of the serial of the root device and the unique child ID.

~~||Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|unique child ID|YES||
|2|device name|NO|MQTT Device &lt;serialNumber&gt;|
|3|device type|NO|c8y_MQTTChildDevice|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||~~|

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `uniqueChildID` | string | **Required**. The unique child identifier.|
| `deviceName` | string | **Optional**. Name of the device. &lt;serialNumber&gt;|
| `deviceType` | string | **Optional**. Type of the device.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticInventoryTemplates
    		.ChildDeviceCreationAsync("D32Q", "Device Name", "c8y_MQTTDevice", (e) => { return Task.FromResult(false); });

### Get child devices (105)

Will trigger the sending of child devices of the device.

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    cl.ChildrenOfDeviceEvt += Cl_ChildrenOfDeviceEvt;

    await cl.StaticInventoryTemplates.GetChildDevices((e) => { return Task.FromResult(false); });
    ...
    private static void Cl_ChildrenOfDeviceEvt(object sender, ChildrenOfDeviceEventArgs e)
        {
            foreach (var device in e.ChildrenOfDevice)
            {
                Console.WriteLine(device);
            }
        }

### Configure hardware (110)

Will update the hardware properties of the device.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|serialNumber|NO|
|2|model|NO|
|3|revision|NO|
|4|errorHandlerAsync|YES|
|5|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `serialNumber` | string | **Optional**. The serial number.|
| `model` | string | **Optional**. The model.|
| `revision` | string | **Optional**. The revision.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticInventoryTemplates
    		.ConfigureHardware("S123456789",
                                "model",
                                "1.0",
                                (e) => { return Task.FromResult(false); });

### Configure mobile (111)

Will update the mobile properties of the device.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|imei|NO|
|2|iccid|NO|
|3|imsi|NO|
|4|mcc|NO|
|5|mnc|NO|
|6|lac|NO|
|7|cellId|NO|
|8|errorHandlerAsync|YES|
|9|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `imei` | string | **Optional**. The imei.|
| `iccid` | string | **Optional**. The iccid.|
| `imsi` | string | **Optional**. The imsi.|
| `mcc` | string | **Optional**. The MCC.|
| `mnc` | string | **Optional**. The MNC.|
| `lac` | string | **Optional**. The lac.|
| `cellId` | string | **Optional**. The revision.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticInventoryTemplates
    		.ConfigureMobile(
                            "356938035643809",
                            "8991101200003204510",
                            "410-07-4777770001",
                            "410",
                            "07",
                            "477",
                            "0001",
                            (e) => { return Task.FromResult(false); });

### Configure position (112)

Will update the position properties of the device.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|latitude|NO|
|2|longitude|NO
|3|altitude|NO|
|4|accuracy|NO|
|5|errorHandlerAsync|YES|
|6|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `latitude` | string | **Optional**. The imei.|
| `longitude` | string | **Optional**. The iccid.|
| `altitude` | string | **Optional**. The imsi.|
| `mcc` | string | **Optional**. The MCC.|
| `mnc` | string | **Optional**. The MNC.|
| `lac` | string | **Optional**. The lac.|
| `cellId` | string | **Optional**. The revision.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticInventoryTemplates
    		.ConfigurePosition(
                                "52.409538",
                                "16.931992",
                                "76",
                                "134",
                                (e) => { return Task.FromResult(false); });

### Set configuration (113)

Will set the configuration of the device.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|configuration|NO|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `configuration` | string | **Optional**. The imei.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|


**Example**

    await cl.StaticInventoryTemplates
    		.SetConfiguration(
                           "val1 = 1\nval2 = 2",
                           (e) => { return Task.FromResult(false); });

### Set supported operations (114)

Will set the supported operations of the device.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1...|List of supported operations|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|~~


|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `supportedOperations` | IList&lt;string&gt; | **Required**. List of supported operations.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    IList<string> supportedOperations = new List<string>();
    supportedOperations.Add("c8y_Restart");
    supportedOperations.Add("c8y_Configuration");

    //Will set the supported operations of the device
    await cl.StaticInventoryTemplates
            .SetSupportedOperations(
                                	supportedOperations,
                                	(e) => { return Task.FromResult(false); });

### Set firmware (115)

Will set the firmware installed on the device.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|name|NO|
|2|version|NO|
|3|url|NO|
|4|errorHandlerAsync|YES|
|5|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `name` | string | **Optional**. The name.|
| `version` | string | **Optional**. The version.|
| `url` | string | **Optional**. The URL.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticInventoryTemplates.SetFirmware(
                                "Extreme",
                                "Ultra 1.0",
                                @"http://sth.url",
                                (e) => { return Task.FromResult(false); });

### Set software list (116)

Will set the list of software installed on the device.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1...|List of software|NO|
|1.1|name|NO|
|1.2|version|NO|
|1.3|url|NO|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|~~


|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `installedSoftware` | IList&lt;Software&gt; | **Optional**. List of supported operations.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

Software members:

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `Name` | string | **Required**. The name.|
| `Url` | string | **Required**. The url.|
| `Version` | string | **Required**. The version.|

**Example**

    List<Software> list = new List<Software>();
    list.Add(new Software() { Name = "Software01", Url = "url1", Version = "1.0" });
    list.Add(new Software() { Name = "Software02", Url = "url2", Version = "2.1" });

    await cl.StaticInventoryTemplates.SetSoftwareList(list,
                                         (e) => { return Task.FromResult(false); });

### Set required availability (117)

Will set the required interval for availability monitoring. It will only set the value if it does not exist. Values entered e.g. through UI are not overwritten.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|Required interval|NO|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `requiredInterval` | int| **Optional**. Required interval.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticInventoryTemplates.SetRequiredAvailability(60,
                                        (e) => { return Task.FromResult(false); });

## Static measurement templates

### Create custom measurement (200)

Will create a measurement with given fragment and series.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|fragment|YES||
|2|series|YES||
|3|value|YES||
|4|unit|NO||
|5|time|NO|Current server time|
|6|errorHandlerAsync|YES||
|7|processingMode|NO||~~


|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `fragment` | string | **Required**. The fragment.|
| `series` | string | **Required**. The series.|
| `value` | string | **Required**. The value.|
| `unit` | string | **Optional**. The unit.|
| `time` | string | **Optional**. The time.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticMeasurementTemplates
    		.CreateCustomMeasurementAsync("c8y_Temperature",
            							  "T",
                                          "25",
                                          string.Empty,
                                          string.Empty,
                                          (e) => { return Task.FromResult(false); });

### Create signal strength measurement (210)

Will create a measurement of type c8y_SignalStrength.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|rssi value|YES, if 2 not  set||
|2|ber value|YES, if 1 not set||
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `rssiValue` | string | **Required if 2 not set**. The rssi value.|
| `berValue` | string | **Required if 1 not set**. The ber value.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticMeasurementTemplates
    		.CreateSignalStrengthMeasurementAsync("-90",
                                                  "23",
                                                  "2017-09-13T14:00:14.000+02:00",
                                                  (e) => { return Task.FromResult(false); });

### Create temperature measurement (211)

Will create a measurement of type c8y_TemperatureMeasurement.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|temperature value|YES||
|2|time|NO|Current server time|
|3|errorHandlerAsync|YES||
|4|processingMode|NO||~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `temperatureValue` | string | **Required.** The temperature value.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticMeasurementTemplates
    		.CreateTemperatureMeasurementAsync("25",
            								   "2018-02-15T05:01:14.000+02:00",
                                               (e) => { return Task.FromResult(false); });

### Create battery measurement (212)

Will create a measurement of type c8y_Battery.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|battery value|YES||
|2|time|NO|Current server time|
|3|errorHandlerAsync|YES||
|4|processingMode|NO||~~


|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `temperatureValue` | string | **Required.** The battery value.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticMeasurementTemplates
    		.CreateBatteryMeasurementAsync("95",
            							   "2017-09-13T15:01:14.000+02:00",
                                           (e) => { return Task.FromResult(false); });

## Static alarm templates

### Create CRITICAL alarm (301)

Will create a CRITICAL alarm.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|
|3|errorHandlerAsync|YES||
|4|processingMode|NO||~~


|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `type` | string | **Required.** The type.|
| `text` | string | **Optional.** The text. Alarm of type &lt;alarmType&gt; raised.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.staticAlarmTemplates
            .CreateCriticalAlarmAsync("c8y_TemperatureAlarm",
                                      "Alarm of type c8y_TemperatureAlarm raised",
                                      string.Empty,
                                   	  (e) => { return Task.FromResult(false); });

### Create MAJOR alarm (302)

Will create a MAJOR alarm.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `type` | string | **Required.** The type.|
| `text` | string | **Optional.** The text. Alarm of type &lt;alarmType&gt; raised.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticAlarmTemplates
    		.CreateMajorAlarmAsync("c8y_BatteryAlarm",
            					   "Major Alarm of type c8y_BatteryAlarm raised",
                                   string.Empty,
                                   (e) => { return Task.FromResult(false); });


### Create MINOR alarm (303)

Will create a MINOR alarm.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `type` | string | **Required.** The type.|
| `text` | string | **Optional.** The text. Alarm of type &lt;alarmType&gt; raised.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticAlarmTemplates.CreateMinorAlarmAsync("c8y_WaterAlarm",
    														"Alarm of type c8y_WaterAlarm raised",
                                                            string.Empty,
                                                            (e) => { return Task.FromResult(false); });

### Create WARNING alarm (304)

Will create a WARNING alarm.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `type` | string | **Required.** The type.|
| `text` | string | **Optional.** The text. Alarm of type &lt;alarmType&gt; raised.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticAlarmTemplates.CreateWarningAlarmAsync("c8y_AirPressureAlarm",
                                                              "Warning of type c8y_AirPressureAlarm raised",
                                                              string.Empty,
                                                              (e) => { return Task.FromResult(false); });

### Update severity of existing alarm (305)

Will change the severity of an existing alarm.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|type|YES|
|2|severity|YES|
|3|errorHandlerAsync|YES|
|4|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `type` | string | **Required.** The type.|
| `severity` | string | **Required.** The severity.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticAlarmTemplates.UpdateSeverityOfExistingAlarmAsync("c8y_AirPressureAlarm",
                                                                         "CRITICAL",
                                                                         (e) => { return Task.FromResult(false); });

### Clear existing alarm (306)

Will clear an existing alarm.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|type|YES|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `type` | string | **Required.** The type.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticAlarmTemplates
    		.ClearExistingAlarmAsync("c8y_TemperatureAlarm",
    		(e) => { return Task.FromResult(false); });

## Static event templates

### Create basic event (400)

Will create an event of given type and text.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|YES||
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `type` | string | **Required.** The type.|
| `text` | string | **Required.** The text.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticEventTemplates
            .CreateBasicEventAsync("c8y_MyEvent",
                                   "Something was triggered",
                                   string.Empty,
                                   (e) => { return Task.FromResult(false); })

### Create location update event (401)

Will create a typical location update event containing c8y_Position.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|latitude|NO||
|2|longitude|NO||
|3|altitude|NO||
|4|accuracy|NO||
|5|time|NO|Current server time|
|6|errorHandlerAsync|YES||
|7|processingMode|NO||~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `latitude` | string | **Optional.** The latitude.|
| `longitude` | string | **Optional.** The longitude.|
| `altitude` | string | **Optional.** The altitude.|
| `accuracy` | string | **Optional.** The accuracy.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

            await cl.StaticEventTemplates
                    .CreateLocationUpdateEventAsync(
                                                 "52.209538",
                                                 "16.831992",
                                                 "76",
                                                 "134",
                                                 string.Empty,
                                                 (e) => { return Task.FromResult(false); });


### Create location update event with device update (402)

Will create a typical location update event containing c8y_Position. Additionally the device will be updated with the same c8y_Position fragment.

Parameters:

~~|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|latitude|NO||
|2|longitude|NO||
|3|altitude|NO||
|4|accuracy|NO||
|5|time|NO|Current server time|
|6|errorHandlerAsync|YES||
|7|processingMode|NO||~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `latitude` | string | **Optional.** The latitude.|
| `longitude` | string | **Optional.** The longitude.|
| `altitude` | string | **Optional.** The altitude.|
| `accuracy` | string | **Optional.** The accuracy.|
| `time` | string | **Optional**. The time. **Default:** Current server time|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

            await cl.StaticEventTemplates
                    .CreateLocationUpdateEventWithDeviceUpdateAsync(
                                                                 "52.209539",
                                                                 "16.831993",
                                                                 "76",
                                                                 "134",
                                                                 string.Empty,
                                                                 (e) => { return Task.FromResult(false); });


## Static operation templates

### Get PENDING operations (500)

Will trigger the sending of all PENDING operations for the agent.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|errorHandlerAsync|YES|
|2|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

     await cl.StaticOperationTemplates
     		 .GetPendingOperationsAsync((e) => { return Task.FromResult(false); });

### Set operation to EXECUTING (501)

Will set the oldest PENDING operation with given fragment to EXECUTING.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `fragment` | string | **Required**. The fragment.|
| `errorHandlerAsync` | string | **Required**. Error Handler|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await  cl.StaticOperationTemplates
             .SetExecutingOperationsAsync("c8y_Restart",
                                          (e) => { return Task.FromResult(false); });

### Set operation to FAILED (502)

Will set the oldest EXECUTING operation with given fragment to FAILED.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2|failureReason|NO|
|3|errorHandlerAsync|YES|
|4|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `fragment` | string | **Required**. The fragment.|
| `failureReason` | string | **Optional**. The failure reason.|
| `errorHandlerAsync` | string | **Required**. The error handler asynchronous.|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await cl.StaticOperationTemplates
            .SetOperationToFailedAsync("c8y_Restart",
                                       "Could not restart",
                                       (e) => { return Task.FromResult(false); });

### Set operation to SUCCESSFUL (503)

Will set the oldest EXECUTING operation with given fragment to SUCCESSFUL. It enables the device to send additional parameters that trigger additional steps based on the type of operation send as fragment.

Parameters:

~~|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2...|parameters|NO|
|3|errorHandlerAsync|YES|
|4|processingMode|NO|~~

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `fragment` | string | **Required**. The fragment.|
| `parameters` | string | **Optional**. The parameters.|
| `errorHandlerAsync` | string | **Required**. The error handler asynchronous.|
| `processingMode` | string | **Optional**. Processing Mode|

**Example**

    await  cl.StaticOperationTemplates
             .SetOperationToSuccessfulAsync("c8y_Restart",
                                            string.Empty,
                                            (e) => { return Task.FromResult(false); });

## Inventory templates

### Get children of device (106)

Lists all children of the device

ChildrenOfDeviceEventArgs is the  class containing event data

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `ChildrenOfDevice` | IList &lt;string&gt; | List all children of the device.|




    cl.ChildrenOfDeviceEvt += Cl_ChildrenOfDeviceEvt;

    await cl.StaticInventoryTemplates.GetChildDevices((e) => { return Task.FromResult(false); });
    ...
    private static void Cl_ChildrenOfDeviceEvt(object sender, ChildrenOfDeviceEventArgs e)
        {
            foreach (var device in e.ChildrenOfDevice)
            {
                Console.WriteLine(device);
            }
        }

## Operation templates

All operation responses have the same base structure, leading with the message ID followed by the ID of either the root device or a child which should handle the operation.

### Restart (510)

Tells the device to restart.

**Example**

    cl.RestartEvt += (s, e) => {
                    Console.WriteLine(s);
                };

### Command (511)

Tells the device to run the command send in the operation.


CommandEventArgs is the  class containing event data

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `CommandText` | string | The command name.|

**Example**

    cl.CommandEvt += (s, e) => {
        Console.WriteLine(s);
    };

### Configuration (513)

Tells the device to set the configuration send in the operation.

ConfigurationEventArgs is the  class containing event data

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `Configuration` | string | the configuration send in the operation.|


**Example**

    cl.ConfigurationEvt += (s, e) => {
        Console.WriteLine(e.Configuration);
    };

### Firmware (515)

Tells the device to install the firmware from the url.

FirmwareEventArgs is the  class containing event data.

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `FirmwareName` | string | The software name|
| `FirmwareVersion` | string | The firmware version.|
| `Url` | string | The url.|

**Example**

    cl.FirmwareEvt += (s, e) => {
                       Console.WriteLine("DeviceSerial:"+s);
                       Console.WriteLine(e.FirmwareName);
                       Console.WriteLine(e.FirmwareVersion);
                       Console.WriteLine( e.Url);
    };

### Software list (516)

Tells the device to install the software send in the operation.

SoftwareListEventArgs is the  class containing event data.

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `SoftwareList` | IList&lt;Software&gt; | The list of software to install.|

**Example**

    cl.SoftwareListEvt += (s, e) => {
        foreach (var soft in e.SoftwareList)
        {
            Console.WriteLine(soft.Name);
            Console.WriteLine(soft.Version);
            Console.WriteLine(soft.Url);
        }
    };

### Measurement request operation (517)

Tells the device to send the measurements specified by the request name.

MeasurementRequestOperationEventArgs is the  class containing event data.

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `RequestName` | string | The measurement to send.|

**Example**

    cl.MeasurementRequestOperationEvt += (s, e) => {
        Console.WriteLine(e.RequestName);
    };

### Relay (518)

Tells the device to either open or close the relay.

RelayEventArgs is the  class containing event data.

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `RelayState` | string | The relay state.|

**Example**

            cl.RelayEvt += (s, e) => {

                Console.WriteLine(e.RelayState);

            };

### RelayArray (519)

Tells the device to either open or close the relays in the array.

RelayArrayEventArgs is the  class containing event data.

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `RelayState` | IList&lt;string&gt; | The list of the relay state.|

**Example**

    cl.RelayArrayEvt += (s, e) => {
        foreach (var rs in e.RelayStates)
        {
            Console.WriteLine(rs);
        }
    };

### Upload configuration file (520)

Tells the device to upload its current configuration.

**Example**

    cl.UploadConfigurationFileEvt += (s, e) => { };

### Download configuration file (521)

Tells the device to download a configuration file from the url.

DownloadConfigurationFileEventArgs is the class containing event data.

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `Url` | string | The url to download a configuration file. |

**Example**

    cl.DownloadConfigurationFileEvt += (s, e) => {
        Console.WriteLine(e.Url);
    };

### Logfile request (522)

Tells the device to upload a log file for the given parameters.

LogfileRequestEventArgs is the  class containing event data.

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `LogFileName` | string | The file name.|
| `StartDate` |string | From date.|
| `EndDate` | string | To date.|
| `SearchText` | string | The search text.|
| `MaximumLines` | string | The maximum lines.|

**Example**

    cl.LogfileRequestEvt += (s, e) => {
        Console.WriteLine(e.LogFileName);
        Console.WriteLine(e.SearchText);
        Console.WriteLine(e.StartDate);
        Console.WriteLine(e.EndDate);
        Console.WriteLine(e.MaximumLines);
    };

#### Communication mode (523)

Tells the device to change the communication mode.

CommunicationModeEventArgs is the  class containing event data.

|Field|Data type|Description|
| :-------------: | :-------------: | :------ |
| `Mode` | string | The communication mode.|

**Example**

    cl.CommunicationModeEvt += (s, e) => {
        Console.WriteLine(e.Mode);
    };


## SmartREST

### Check Template Collection Exists

Will verify if a template collection exists.

CommunicationModeEventArgs is the  class containing event data.

| Name | Type | Description |
| :-------------: | :-------------: | :------ |
| `TemplateCollectionName` | string | The communication mode.|
| `IsExist` | bool | The communication exists.|
| `IdCollection` | string | The ID collection.|

    cl.IsExistTemplateCollectionEvt += (s, e) =>
    {
        var item = e.IsExist;
    };

     await cl.CustomSmartRest.CheckTemplateCollectionExists("test", (e) => { return Task.FromResult(false); });

### Create Template Data

Will create the template data asynchronous.

Parameters:


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|collectionName|String|YES|Name of the collection|
|requests|List&lt;Request&gt;|YES|	Depending on the type suitable Cumulocity API to be used<br>INVENTORY<br>MEASUREMENT<br>ALARM<br>EVENT<br>OPERATION|
|responses|List&lt;Response&gt;|NO|The responses. Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|processingMode|List&lt;String&gt;|NO|The processing mode|

### Types of requests templates

* InventoryGetRequest
* InventoryRequest
* MeasurementRequest
* OperationRequest
* AlarmRequest
* AlarmUpdateRequest
* EventRequest

#### InventoryGetRequest


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|externalIdType|String|YES|Sets a fixed externalIdType if the template calls by externalId|
|byId|String|YES|Whether the GET should be executed by Cumulocity ID (=true) or externalId (=false)|


#### InventoryRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|externalIdType|String|NO|Sets a fixed externalIdType if the template calls by externalId|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|Method|HttpMethods|YES|<br> GET<br> PUT<br> POST|

#### MeasurementRequest


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the measurement to create|
|time|String|YES|A time stamp in the ISO 8601 format|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|method|HttpMethods|YES|<br> GET<br> PUT<br> POST|


#### OperationRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|NO|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the operation to create|
|operationFragment|OperationFragment|YES| e.g c8y_MyOperation|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|


#### AlarmRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the alarm to create|
|text|String|YES||
|status|String|YES|	A status of an alarm. Used to update the status field of alarms|
|severity|String|YES|	A severity of an alarm. Used to update the severity field of alarms e.g. Major|
|time|String|YES|A time stamp in the ISO 8601 format|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|Method|HttpMethods|YES|<br> GET<br> PUT<br> POST|

#### AlarmUpdateRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES| The type of the alarm to find the alarm to update|
|alarmFragment|AlarmFragment|YES|It contains key and status.|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|