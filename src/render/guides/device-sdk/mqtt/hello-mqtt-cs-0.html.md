---
order: 35
title: Hello MQTT C#
layout: redirect
---

In this tutorial, you will learn how to use the C# MQTT client with Cumulocity using pre-defined messages (called "static templates").

### Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You need to have a valid tenant, a user, and a password in order to access Cumulocity.
* Verify that you have [.NET Core SDK 2.0](https://www.microsoft.com/net/download/windows).

#### Source code

The source tree is located in a Git repository. 

The repository location link: 
~~~
https://bitbucket.org/m2m/cumulocity-sdk-cs/src/master/
~~~

### Developing the "Hello, MQTT world!" client

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to follow these steps:

* Create a console project:

    	dotnet new console

* Add a new entry <PropertyGroup> to a csproj file:

        <RestoreSources>$(RestoreSources);../nugets;https://api.nuget.org/v3/index.json</RestoreSources>
        
* Add a package reference to a project file:

		dotnet add package Cumulocity.MQTT -s "../nugets"


**Example**

        using Cumulocity.MQTT;
        using Cumulocity.MQTT.Model;
        using System;
        using System.Threading.Tasks;

        namespace MqttDemo
        {
            internal class Program
            {
                 static Client cl;
                 
                private static void Main(string[] args)
                {
                    Task.Run(() => RunClientAsync());
                    new System.Threading.AutoResetEvent(false).WaitOne();
                }

                private static async Task RunClientAsync()
                {
                    var cnf = new Configuration()
                    {
                        Server = "ws://<<serverUrl>>/mqtt",
                        UserName = @"<<tenant>>/<<username>>",
                        Password = @"<<password>>",
                        ClientId = "<<clientId>>",
                        Port = "80",
                        ConnectionType = "WS"
                    };

                    cl = new Client(cnf);
                    await cl.ConnectAsync();
                    cl.RestartEvt += Cl_RestartEvt;

                    await cl.StaticInventoryTemplates
                            .DeviceCreation("TestDevice", "c8y_MQTTDevice", (e) => { return    Task.FromResult(false); });

                    await cl.StaticInventoryTemplates
                            .ConfigureHardware("S123456789", "model", "1.0", (e) => { return Task.FromResult(false); });

                    Console.WriteLine(String.Format("Connected {0}", cl.IsConnected));
                }
                private static void Cl_RestartEvt(object sender, RestartEventArgs e)
                {
			Console.WriteLine("Restart the device");

	        cl.StaticOperationTemplates
		        .SetExecutingOperationsAsync("c8y_Restart", (er) => { return Task.FromResult(false); });
	        Thread.Sleep(1000);
	        cl.StaticOperationTemplates
		        .SetOperationToSuccessfulAsync("c8y_Restart", string.Empty, (er) => { return Task.FromResult(false); });
                }
            }
        }

Replace &lt;&lt;clientId&gt;&gt;, &lt;&lt;serverUrl&gt;&gt;, &lt;&lt;tenant&gt;&gt;, &lt;&lt;username&gt;&gt;, and &lt;&lt;password&gt;&gt; with your data.

* Build and run the application:

        dotnet build
        dotnet run

Cumulocity MQTT protocol supports both unsecured TCP and also secured SSL connections (e.g. tcp://mqtt.cumulocity.com:1883 or ssl://mqtt.cumulocity.com:8883), so as the &lt;&lt;serverUrl&gt;&gt; select the one which fits for you.

What does the code in "main" do?

* Configure the MQTT connection.
* Connect with Cumulocity via a MQTT protocol.
* Create a new device with a My MQTT device name and a c8y_MQTTDevice type.
* Update the device hardware information by putting a S123456789 serial, a MQTT test model and a Rev0.1revision.
* Subscribe to the static operation templates for the device, print all received operations to the console and in case of a c8y_Restart operation simulate device restart.

### Improving the agent

Now that you have done your first step, check out the section [Hello MQTT](/guides/mqtt/hello-mqtt) to learn more about Cumulocity MQTT and improve your application.


### Static templates

#### Static inventory templates
##### Device creation (100)

Will create a new device for the serial number in the inventory if not yet existing. An externalId for the device with type c8y_Serial and the device identifier of the MQTT clientId as value will be created.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|device name|NO|MQTT Device &lt;serialNumber&gt;|
|2|device type|NO|c8y_MQTTDevice|
|3|errorHandlerAsync|YES||
|4|processingMode|NO|| 


**Example**

    await cl.StaticInventoryTemplates
    		.DeviceCreation("myDevice",
                            "myType",
                            (e) => { return Task.FromResult(false); });

##### Child device creation (101)

Will create a new child device for the current device. The newly created object will be added as child device. Additionally, an externalId for the child will be created with type "c8y_Serial" and the value a combination of the serial of the root device and the unique child ID.

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|unique child ID|YES||
|2|device name|NO|MQTT Device &lt;serialNumber&gt;|
|3|device type|NO|c8y_MQTTChildDevice|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||

**Example**

    await cl.StaticInventoryTemplates
    		.ChildDeviceCreationAsync("D32Q", "Device Name", "c8y_MQTTDevice", (e) => { return Task.FromResult(false); });

##### Get child devices (105)

Will trigger the sending of child devices of the device.

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

##### Configure hardware (110)

Will update the hardware properties of the device.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|serialNumber|NO|
|2|model|NO|
|3|revision|NO|
|4|errorHandlerAsync|YES|
|5|processingMode|NO|

**Example**

    await cl.StaticInventoryTemplates
    		.ConfigureHardware("S123456789",
                                "model",
                                "1.0",
                                (e) => { return Task.FromResult(false); });

### Configure mobile (111)

Will update the mobile properties of the device.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|imei|NO|
|2|iccid|NO|
|3|imsi|NO|
|4|mcc|NO|
|5|mnc|NO|
|6|lac|NO|
|7|cellId|NO|
|8|errorHandlerAsync|YES|
|9|processingMode|NO|


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

##### Configure position (112)

Will update the position properties of the device.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|latitude|NO|
|2|longitude|NO
|3|altitude|NO|
|4|accuracy|NO|
|5|errorHandlerAsync|YES|
|6|processingMode|NO|

**Example**

    await cl.StaticInventoryTemplates
    		.ConfigurePosition(
                                "52.409538",
                                "16.931992",
                                "76",
                                "134",
                                (e) => { return Task.FromResult(false); });

##### Set configuration (113)

Will set the configuration of the device.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|configuration|NO|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|


**Example**

    await cl.StaticInventoryTemplates
    		.SetConfiguration(
                           "val1 = 1\nval2 = 2",
                           (e) => { return Task.FromResult(false); });

### Set supported operations (114)

Will set the supported operations of the device.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1...|List of supported operations|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|

**Example**

    IList<string> supportedOperations = new List<string>();
    supportedOperations.Add("c8y_Restart");
    supportedOperations.Add("c8y_Configuration");

    //Will set the supported operations of the device
    await cl.StaticInventoryTemplates
            .SetSupportedOperations(
                                	supportedOperations,
                                	(e) => { return Task.FromResult(false); });

##### Set firmware (115)

Will set the firmware installed on the device.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|name|NO|
|2|version|NO|
|3|url|NO|
|4|errorHandlerAsync|YES|
|5|processingMode|NO|

**Example**

    await cl.StaticInventoryTemplates.SetFirmware(
                                "Extreme",
                                "Ultra 1.0",
                                @"http://sth.url",
                                (e) => { return Task.FromResult(false); });

##### Set software list (116)

Will set the list of software installed on the device.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1...|List of software|NO|
|1.1|name|NO|
|1.2|version|NO|
|1.3|url|NO|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|

**Example**

    List<Software> list = new List<Software>();
    list.Add(new Software() { Name = "Software01", Url = "url1", Version = "1.0" });
    list.Add(new Software() { Name = "Software02", Url = "url2", Version = "2.1" });

    await cl.StaticInventoryTemplates.SetSoftwareList(list,
                                         (e) => { return Task.FromResult(false); });

##### Set required availability (117)

Will set the required interval for availability monitoring. It will only set the value if it does not exist. Values entered e.g. through UI are not overwritten.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|Required interval|NO|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|
|4|errorHandlerAsync|YES|
|5|processingMode|NO|

**Example**

    await cl.StaticInventoryTemplates.SetRequiredAvailability(60,
                                        (e) => { return Task.FromResult(false); });

#### Static measurement templates

##### Create custom measurement (200)

Will create a measurement with given fragment and series.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|fragment|YES||
|2|series|YES||
|3|value|YES||
|4|unit|NO||
|5|time|NO|Current server time|
|6|errorHandlerAsync|YES||
|7|processingMode|NO||

**Example**

    await cl.StaticMeasurementTemplates
    		.CreateCustomMeasurementAsync("c8y_Temperature",
            							  "T",
                                          "25",
                                          string.Empty,
                                          string.Empty,
                                          (e) => { return Task.FromResult(false); });

##### Create signal strength measurement (210)

Will create a measurement of type c8y_SignalStrength.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|rssi value|YES, if 2 not  set||
|2|ber value|YES, if 1 not set||
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||

**Example**

    await cl.StaticMeasurementTemplates
    		.CreateSignalStrengthMeasurementAsync("-90",
                                                  "23",
                                                  "2017-09-13T14:00:14.000+02:00",
                                                  (e) => { return Task.FromResult(false); });

##### Create temperature measurement (211)

Will create a measurement of type c8y_TemperatureMeasurement.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|temperature value|YES||
|2|time|NO|Current server time|
|3|errorHandlerAsync|YES||
|4|processingMode|NO||


**Example**

    await cl.StaticMeasurementTemplates
    		.CreateTemperatureMeasurementAsync("25",
            								   "2018-02-15T05:01:14.000+02:00",
                                               (e) => { return Task.FromResult(false); });

##### Create battery measurement (212)

Will create a measurement of type c8y_Battery.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|battery value|YES||
|2|time|NO|Current server time|
|3|errorHandlerAsync|YES||
|4|processingMode|NO||

**Example**

    await cl.StaticMeasurementTemplates
    		.CreateBatteryMeasurementAsync("95",
            							   "2017-09-13T15:01:14.000+02:00",
                                           (e) => { return Task.FromResult(false); });

#### Static alarm templates

##### Create CRITICAL alarm (301)

Will create a CRITICAL alarm.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|
|3|errorHandlerAsync|YES||
|4|processingMode|NO||

**Example**

    await cl.taticAlarmTemplates
            .CreateCriticalAlarmAsync("c8y_TemperatureAlarm",
                                      "Alarm of type c8y_TemperatureAlarm raised",
                                      string.Empty,
                                   	  (e) => { return Task.FromResult(false); });

##### Create MAJOR alarm (302)

Will create a MAJOR alarm.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||

**Example**

    await cl.StaticAlarmTemplates
    		.CreateMajorAlarmAsync("c8y_BatteryAlarm",
            					   "Major Alarm of type c8y_BatteryAlarm raised",
                                   string.Empty,
                                   (e) => { return Task.FromResult(false); });


##### Create MINOR alarm (303)

Will create a MINOR alarm.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||

**Example**

    await cl.StaticAlarmTemplates.CreateMinorAlarmAsync("c8y_WaterAlarm", 
    														"Alarm of type c8y_WaterAlarm raised",
                                                            string.Empty, 
                                                            (e) => { return Task.FromResult(false); });

##### Create WARNING alarm (304)

Will create a WARNING alarm.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|NO|Alarm of type &lt;alarmType&gt; raised|
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||

**Example**

    await cl.StaticAlarmTemplates.CreateWarningAlarmAsync("c8y_AirPressureAlarm",
                                                              "Warning of type c8y_AirPressureAlarm raised",
                                                              string.Empty,
                                                              (e) => { return Task.FromResult(false); });

##### Update severity of existing alarm (305)

Will change the severity of an existing alarm.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|type|YES|
|2|severity|YES|
|3|errorHandlerAsync|YES|
|4|processingMode|NO|

**Example**

    await cl.StaticAlarmTemplates.UpdateSeverityOfExistingAlarmAsync("c8y_AirPressureAlarm",
                                                                         "CRITICAL",
                                                                         (e) => { return Task.FromResult(false); });

##### Clear existing alarm (306)

Will clear an existing alarm.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|type|YES|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|

**Example**

    await cl.StaticAlarmTemplates
    		.ClearExistingAlarmAsync("c8y_TemperatureAlarm",
    		(e) => { return Task.FromResult(false); });

#### Static event templates

##### Create basic event (400)

Will create an event of given type and text.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|type|YES||
|2|text|YES||
|3|time|NO|Current server time|
|4|errorHandlerAsync|YES||
|5|processingMode|NO||

**Example**

    await cl.StaticEventTemplates
            .CreateBasicEventAsync("c8y_MyEvent",
                                   "Something was triggered",
                                   string.Empty,
                                   (e) => { return Task.FromResult(false); })

##### Create location update event (401)

Will create a typical location update event containing c8y_Position.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|latitude|NO||
|2|longitude|NO||
|3|altitude|NO||
|4|accuracy|NO||
|5|time|NO|Current server time|
|6|errorHandlerAsync|YES||
|7|processingMode|NO||

**Example**

            await cl.StaticEventTemplates
                    .CreateLocationUpdateEventAsync(
                                                 "52.209538",
                                                 "16.831992",
                                                 "76",
                                                 "134",
                                                 string.Empty,
                                                 (e) => { return Task.FromResult(false); });


##### Create location update event with device update (402)

Will create a typical location update event containing c8y_Position. Additionally the device will be updated with the same c8y_Position fragment.

Parameters:

|Position|Parameter|Mandatory|Default|
|:-------|:-------|:-------|:-------|
|1|latitude|NO||
|2|longitude|NO||
|3|altitude|NO||
|4|accuracy|NO||
|5|time|NO|Current server time|
|6|errorHandlerAsync|YES||
|7|processingMode|NO||

**Example**

            await cl.StaticEventTemplates
                    .CreateLocationUpdateEventWithDeviceUpdateAsync(
                                                                 "52.209539",
                                                                 "16.831993",
                                                                 "76",
                                                                 "134",
                                                                 string.Empty,
                                                                 (e) => { return Task.FromResult(false); });


#### Static operation templates

##### Get PENDING operations (500)

Will trigger the sending of all PENDING operations for the agent.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|errorHandlerAsync|YES|
|2|processingMode|NO|

**Example**

     await cl.StaticOperationTemplates
     		 .GetPendingOperationsAsync((e) => { return Task.FromResult(false); });

##### Set operation to EXECUTING (501)

Will set the oldest PENDING operation with given fragment to EXECUTING.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2|errorHandlerAsync|YES|
|3|processingMode|NO|

**Example**

    await  cl.StaticOperationTemplates
             .SetExecutingOperationsAsync("c8y_Restart",
                                          (e) => { return Task.FromResult(false); });

##### Set operation to FAILED (502)

Will set the oldest EXECUTING operation with given fragment to FAILED.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2|failureReason|NO|
|3|errorHandlerAsync|YES|
|4|processingMode|NO|

**Example**

    await cl.StaticOperationTemplates
            .SetOperationToFailedAsync("c8y_Restart",
                                       "Could not restart",
                                       (e) => { return Task.FromResult(false); });

##### Set operation to SUCCESSFUL (503)

Will set the oldest EXECUTING operation with given fragment to SUCCESSFUL. It enables the device to send additional parameters that trigger additional steps based on the type of operation send as fragment.

Parameters:

|Position|Parameter|Mandatory|
|:-------|:-------|:-------|
|1|fragment|YES|
|2...|parameters|NO|
|3|errorHandlerAsync|YES|
|4|processingMode|NO|

**Example**

    await  cl.StaticOperationTemplates
             .SetOperationToSuccessfulAsync("c8y_Restart",
                                            string.Empty,
                                            (e) => { return Task.FromResult(false); });

#### Inventory templates

##### Get children of device (106)

Lists all children of the device


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

#### Operation templates

All operation responses have the same base structure, leading with the message ID followed by the ID of either the root device or a child which should handle the operation.

##### Restart (510)

Tells the device to restart.

**Example**

    cl.RestartEvt += (s, e) => {
                    Console.WriteLine(s);
                };

##### Command (511)

Tells the device to run the command send in the operation.

**Example**

    cl.CommandEvt += (s, e) => {
        Console.WriteLine(s);
    };

##### Configuration (513)

Tells the device to set the configuration send in the operation.

**Example**

    cl.ConfigurationEvt += (s, e) => {
        Console.WriteLine(e.Configuration);
    };

##### Firmware (515)

Tells the device to install the firmware from the url.

**Example**

    cl.FirmwareEvt += (s, e) => {
                       Console.WriteLine("DeviceSerial:"+s);
                       Console.WriteLine(e.FirmwareName);
                       Console.WriteLine(e.FirmwareVersion);
                       Console.WriteLine( e.Url);
    };

##### Software list (516)

Tells the device to install the software send in the operation.

**Example**

    cl.SoftwareListEvt += (s, e) => {
        foreach (var soft in e.SoftwareList)
        {
            Console.WriteLine(soft.Name);
            Console.WriteLine(soft.Version);
            Console.WriteLine(soft.Url);
        }
    };

##### Measurement request operation (517)

Tells the device to send the measurements specified by the request name.

**Example**

    cl.MeasurementRequestOperationEvt += (s, e) => {
        Console.WriteLine(e.RequestName);
    };

##### Relay (518)

Tells the device to either open or close the relay.

**Example**

            cl.RelayEvt += (s, e) => {

                Console.WriteLine(e.RelayState);

            };

##### RelayArray (519)

Tells the device to either open or close the relays in the array.

**Example**

    cl.RelayArrayEvt += (s, e) => {
        foreach (var rs in e.RelayStates)
        {
            Console.WriteLine(rs);
        }
    };

##### Upload configuration file (520)

Tells the device to upload its current configuration.

**Example**

    cl.UploadConfigurationFileEvt += (s, e) => { };

##### Download configuration file (521)

Tells the device to download a configuration file from the url.

**Example**

    cl.DownloadConfigurationFileEvt += (s, e) => {
        Console.WriteLine(e.Url);
    };

##### Logfile request (522)

Tells the device to upload a log file for the given parameters.

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

**Example**

    cl.CommunicationModeEvt += (s, e) => {
        Console.WriteLine(e.Mode);
    };


#### SmartREST

##### Check Template Collection Exists

Will verify if a template collection exists.

    cl.IsExistTemplateCollectionEvt += (s, e) =>
    {
        var item = e.IsExist;
    };

     await cl.CustomSmartRest.CheckTemplateCollectionExists("test", (e) => { return Task.FromResult(false); });

##### Create Template Data

Will create the template data asynchronous.

Parameters:


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|collectionName|String|YES|Name of the collection|
|requests|List&lt;Request&gt;|YES|	Depending on the type suitable Cumulocity API to be used<br>INVENTORY<br>MEASUREMENT<br>ALARM<br>EVENT<br>OPERATION|
|responses|List&lt;Response&gt;|NO|The responses. Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|processingMode|List&lt;String&gt;|NO|The processing mode|

##### Types of requests templates

* InventoryGetRequest
* InventoryRequest
* MeasurementRequest
* OperationRequest
* AlarmRequest
* AlarmUpdateRequest
* EventRequest

###### InventoryGetRequest


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|externalIdType|String|YES|Sets a fixed externalIdType if the template calls by externalId|
|byId|String|YES|Whether the GET should be executed by Cumulocity ID (=true) or externalId (=false)|


###### InventoryRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|externalIdType|String|NO|Sets a fixed externalIdType if the template calls by externalId|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|Method|HttpMethods|YES|<br> GET<br> PUT<br> POST|

###### MeasurementRequest


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the measurement to create|
|time|String|YES|A time stamp in the ISO 8601 format|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|method|HttpMethods|YES|<br> GET<br> PUT<br> POST|


###### OperationRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|NO|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the operation to create|
|operationFragment|OperationFragment|YES| e.g c8y_MyOperation|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|


###### AlarmRequest

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

###### AlarmUpdateRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES| The type of the alarm to find the alarm to update|
|alarmFragment|AlarmFragment|YES|It contains key and status.|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|

### SmartRest

#### Check Template Collection Exists

Will verify if a template collection exists.

    cl.IsExistTemplateCollectionEvt += (s, e) =>
    {
        var item = e.IsExist;
    };

     await cl.CustomSmartRest.CheckTemplateCollectionExists("test", (e) => { return Task.FromResult(false); });

#### Create Template Data

Will create the template data asynchronous.

Parameters:


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|collectionName|String|YES|Name of the collection|
|requests|List&lt;Request&gt;|YES|	Depending on the type suitable Cumulocity API to be used<br>INVENTORY<br>MEASUREMENT<br>ALARM<br>EVENT<br>OPERATION|
|responses|List&lt;Response&gt;|NO|The responses. Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|processingMode|List&lt;String&gt;|NO|The processing mode|

#### Types of requests templates

* InventoryGetRequest
* InventoryRequest
* MeasurementRequest
* OperationRequest
* AlarmRequest
* AlarmUpdateRequest
* EventRequest

##### InventoryGetRequest


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|externalIdType|String|YES|Sets a fixed externalIdType if the template calls by externalId|
|byId|String|YES|Whether the GET should be executed by Cumulocity ID (=true) or externalId (=false)|


##### InventoryRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|externalIdType|String|NO|Sets a fixed externalIdType if the template calls by externalId|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|Method|HttpMethods|YES|<br> GET<br> PUT<br> POST|

##### MeasurementRequest


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the measurement to create|
|time|String|YES|A time stamp in the ISO 8601 format|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|method|HttpMethods|YES|<br> GET<br> PUT<br> POST|


##### OperationRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|NO|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the operation to create|
|operationFragment|OperationFragment|YES| e.g c8y_MyOperation|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|


##### AlarmRequest

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

##### AlarmUpdateRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES| The type of the alarm to find the alarm to update|
|alarmFragment|AlarmFragment|YES|It contains key and status.|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|


#### Response templates

The SmartREST 2.0 response templates use the same structure as in SmartREST 1.0.

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID to reference the template within the collection|
|base|String|NO|A JsonPath prefix that all patterns will use|
|condition|String|NO|A JsonPath that needs to exist in the object to use the  pattern|
|pattern|List&lt;String&gt;|YES|A list of JsonPath that will be extracted from the object and returned to the device|

Response will be used for every operation and for any request template that defines the response field with true.

In each case the server will try every registered response template so there might be multiple response lines for a single operation or request.

SmartREST 2.0 will always return a response template if the condition is true (or no condition was defined). Patterns that did not resolve will be returned as empty string.
You should make use of the condition field to control when response templates should be returned.

**Example**

```
     new Response("8889",
     String.Empty,
     "c8y_IsDevice",
     new List<string> { "type",
                        "c8y_MQTTDevice",
                        "c8y_Mobile.cellId" });
```

#### GET templates

The GET templates for the inventory do not need any mandatory or custom values. Instead they use two different fields.

With SmartREST 2.0 you have the option to either get an object from inventory by its ID or by an externalId directly. Therefore instead of the fields mandatoryValues and customValues the following two fields are used.

|Field|Data type|Possible values|Mandatory|Description|
|:-------|:-------|:-------|:-------|:-------|
|byId|boolean|true<br>false|YES|Whether the GET should be executed by Cumulocity ID (=true) or externalId (=false)|
|externalIdType|String||NO|Sets a fixed externalIdType if the template calls by externalId|

**Example**

    await cl.CustomSmartRest.CreateTemplateDataAsync("GetTemplate",
                new List<Request> {
                             new InventoryGetRequest("9999",null, String.Empty, true),
                             new InventoryGetRequest("9998",null, "c8y_Serial", false)
                                                     },
                                                     new List<Response> {
                                                         new Response("8889",
                                                         String.Empty,
                                                         "c8y_IsDevice",
                                                         new List<string> { "type",
                                                                            "c8y_MQTTDevice",   																									"c8y_Mobile.cellId" }),

                                                         new Response("8888",
                                                         String.Empty,
                                                         "c8y_IsDevice",
                                                         new List<string> { "type",
                                                                            "c8y_MQTTDevice", 																										"c8y_Mobile.cellId" })
                                                     });

#### POST templates

The POST templates require a different set of mandatory values based on the API:

|API|mandatory values|
|:-------|:-------|
|MEASUREMENT|type, time|
|EVENT|type, text, time|
|ALARM|type, text, status, severity, time|
|INVENTORY|externalIdType|

##### Creating a measurement template

Will create a template to create a measurement.

            await cl.CustomSmartRest.CreateTemplateDataAsync("PostTemplateMeasurement",
                                    new List<Request> {
                                    new MeasurementRequest("7777",
                                    null,
                                    "c8y_CustomMeasurement",
                                    String.Empty,
                                    new List<CustomValue>{
                                        new CustomValue {Path = "c8y_MyMeasurement.M.value",
                                            Type = Enums.CustomValueType.NUMBER,
                                            Value = String.Empty
                                        }
                                    },HttpMethods.POST)
                                    },
                                    new List<Response> {
                                        new Response("8889",
                                        String.Empty,
                                        "c8y_IsDevice",
                                        new List<string> { "type",
                                        				   "c8y_MQTTDevice",
                                                           "c8y_Mobile.cellId" }),
                                        new Response("8888",
                                        String.Empty,
                                        "c8y_IsDevice",
                                        new List<string> { "type",
                                        				   "c8y_MQTTDevice",
                                                           "c8y_Mobile.cellId" })
                                    });

##### Creating an alarm template

Will create a template to create an alarm.

            await cl.CustomSmartRest.CreateTemplateDataAsync("PostTemplateAlarm",
                                        new List<Request> {
                                        new AlarmRequest("6666",
                                        null,
                                        "c8y_CustomAlarm",
                                        "CustomAlarm",
                                        "ACTIVE",
                                        "MAJOR",
                                        String.Empty,
                                        new List<CustomValue>{
                                            new CustomValue {
                                                Path = "c8y_CustomAlarm.M.value",
                                                Type = CustomValueType.NUMBER,
                                                Value = String.Empty
                                            }
                                        },HttpMethods.POST)
                                        },
                                        new List<Response> {
                                            new Response("8889",
                                            String.Empty,
                                            "c8y_IsDevice",
                                            new List<string> {
                                                "type",
                                                "c8y_MQTTDevice",
                                                "c8y_Mobile.cellId" }),
                                            new Response("8888",
                                            String.Empty,
                                            "c8y_IsDevice",
                                            new List<string> {
                                                "type",
                                                "c8y_MQTTDevice",
                                                "c8y_Mobile.cellId" })
                                        });

##### Creating an event template

Will create a template to create an event.

       await cl.CustomSmartRest.CreateTemplateDataAsync("PostTemplateEvent",

                            new List<Request> {
                                        new EventRequest("5555",
                                        null,
                                        "c8y_CustomEvent",
                                        "CustomEvent",
                                        String.Empty,
                                        new List<CustomValue>{
                                            new CustomValue {Path = "c8y_CustomEvent.M.value",
                                                Type = CustomValueType.NUMBER,
                                                Value = String.Empty
                                            }
                                        })

                            },

                            new List<Response> {
                                            new Response("8889",
                                            String.Empty,
                                            "c8y_IsDevice",
                                            new List<string> {
                                                "type",
                                                "c8y_MQTTDevice",
                                                "c8y_Mobile.cellId" })
                            });

##### Creating an inventory template

Will create a template to create an inventory.

       await cl.CustomSmartRest.CreateTemplateDataAsync("PostTemplateInventory",
                                            new List<Request> {
                                            new InventoryRequest("4444",
                                            null,
                                            "c8y_MySerial",
                                            new List<CustomValue>{
                                                new CustomValue {Path = "c8y_CustomInventory.M.value",
                                                    Type = CustomValueType.NUMBER,
                                                    Value = String.Empty
                                                }
                                            },HttpMethods.POST)
                                            },

                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                                   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId" })
                                            });

##### Update an inventory template

Will update an inventory template.

       await cl.CustomSmartRest.CreateTemplateDataAsync("UpdateTemplateInventory",

                                            new List<Request> {
                                            new InventoryRequest("3333",
                                            null,
                                            "c8y_MySerial",
                                            new List<CustomValue>{
                                                new CustomValue {Path = "c8y_CustomInventory.M.value",
                                                    Type = CustomValueType.NUMBER,
                                                    Value = String.Empty
                                                }
                                            },HttpMethods.PUT)
                                            },
                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                                   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId"
                                                                  })
                                            });

##### Update an alarm template

Will update an alarm template.

    await cl.CustomSmartRest.CreateTemplateDataAsync("UpdateTemplateAlarm",
                                            new List<Request> {
                                                new AlarmUpdateRequest("2222",
                                                null,
                                                "c8y_CustomAlarm",
                                                new AlarmFragment("status",null),
                                                new List<CustomValue>{
                                                })
                                            },
                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                				   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId" })
                                            });

##### Update a clearing alarm template

Will update a clearing alarm template.

    	await cl.CustomSmartRest.CreateTemplateDataAsync("UpdateTemplateClearingAlarm",
                                            new List<Request> {
                                            new AlarmUpdateRequest("0000",
                                            null,
                                            "c8y_CustomAlarm",
                                            new AlarmFragment("status",AlarmStatus.CLEARED),
                                            new List<CustomValue>{
                                                new CustomValue {
                                                    Path = "c8y_CustomFragment",
                                                    Type = CustomValueType.STRING,
                                                    Value = String.Empty
                                                },
                                            })
                                            },
                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                                   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId" })
                                            });

##### Update an operation template

Will update an operation template.

       await cl.CustomSmartRest.CreateTemplateDataAsync("UpdateTemplateOperation",
                                            new List<Request> {
                                            new OperationRequest("1111",
                                            null,
                                            "com_cumulocity_model_WebCamDevice",
                                            new OperationFragment(
                                                "status",
                                                 OperationStatus.SUCCESSFUL),
                                                new List<CustomValue>{
                                                new CustomValue {
                                                    Path = "c8y_Fragment.val",
                                                    Type = CustomValueType.NUMBER,
                                                    Value = String.Empty
                                                } })

                                            },
                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                                   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId" })
                                            });

##### Alarm template

Will create an alarm using the template.

    await cl.CustomSmartRest
    		.SendRequestDataAsync("PostTemplateAlarm",
            					  "6666",
                                  new List<string> { "2018-02-15T16:03:14.000+02:00",
                                                     "100",
                                                     "ACTIVE",
                                                     "MAJOR" });

##### Measurement template

 Will create a measurement using the template.

    await cl.CustomSmartRest
            .SendRequestDataAsync("PostTemplateMeasurement",
                                  "7777",
                                  new List<string> { "",
                                                     "25" });

##### Event template

Will create an event using the template.

    await cl.CustomSmartRest
    		.SendRequestDataAsync("PostTemplateEvent",
                                  "5555",
                                  new List<string> { "",
                                                     "100" });