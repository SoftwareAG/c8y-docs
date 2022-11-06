---
weight: 65
title: Hello MQTT C#
layout: redirect
---

In this tutorial, you will learn how to use the C# MQTT client with {{< product-c8y-iot >}} using pre-defined messages (called "static templates").

### Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, a user and a password in order to access {{< product-c8y-iot >}}.
* Verify that you have .NET Core SDK 2.2 installed.

```shell
$ dotnet --info
.NET Core SDK (reflecting any global.json):
 Version:   2.2.100
 Commit:    b9f2fa0ca8

Runtime Environment:
 OS Name:     Windows
 OS Version:  10.0.17134
 OS Platform: Windows
 RID:         win10-x64
 Base Path:   C:\Program Files\dotnet\sdk\2.2.100\

Host (useful for support):
  Version: 2.2.0
  Commit:  1249f08fed
```

The .NET Core SDK can be downloaded from the [.NET Downloads](https://dotnet.microsoft.com/download) webpage.

### Developing the "Hello MQTT world" client

To develop a very simple "Hello world" MQTT client for {{< product-c8y-iot >}}, you must

* create a console project,
* add a dependency to the MQTT C# client library (in this example we will use [{{< product-c8y-iot >}} SDK MQTT](https://github.com/SoftwareAG/cumulocity-sdk-cs)),
* build and run the C# application.

#### Creating a console project

To create a plain C# project with .NET Core SDK, execute the following command:

```shell
$ dotnet new console -n hello_mqtt
```

This will create a new console application _hello-mqtt-cs_ in the current directory with a skeleton structure for your project.

#### Adding the MQTT C# client library

Edit the _hello-mqtt-cs.csproj_ in the _hello-mqtt-cs_ folder and add a dependency manually to the {{< product-c8y-iot >}} SDK MQTT.

```xml
<ItemGroup>
    <PackageReference Include="Cumulocity.SDK.MQTT" Version="0.1.3" />
</ItemGroup>
```

Or use the `dotnet` command as follows:

```shell
$ dotnet add package Cumulocity.SDK.MQTT
```

#### Creating a C# application

Edit the _Programs.cs_ file in the folder _hello-mqtt-cs_ with the following content:

```cs
using System;
using System.Threading;
using System.Threading.Tasks;
using Cumulocity.SDK.MQTT.Model;
using Cumulocity.SDK.MQTT.Model.ConnectionOptions;
using Cumulocity.SDK.MQTT.Model.MqttMessage;
using MqttClient = Cumulocity.SDK.MQTT.MqttClient;

namespace hello_mqtt
{
	class Program
	{
		static void Main (string[] args)
		{
            Console.WriteLine("The application has started. Press Ctrl-C to stop it.");

            var cSource = new CancellationTokenSource();
            var myTask = Task.Factory.StartNew(() => RunJsonViaMqttClientAsync(cSource.Token), cSource.Token);
            Console.CancelKeyPress += (sender, eventArgs) => cSource.Cancel();
            myTask.Wait(cSource.Token);

            Console.WriteLine("Now shutting down");
		}

        private static async Task RunJsonViaMqttClientAsync (CancellationToken cToken)
		{
			const string serverUrl = "mqtt.cumulocity.com";
			const string clientId = "my_mqtt_cs_client";
            const string device_name = "My CS MQTT device";
			const string user = "<<tenant_ID>>/<<username>>";
			const string password = "<<password>>";

			// connections details
			var cDetails = new ConnectionDetailsBuilder()
				.WithClientId(clientId)
				.WithHost(serverUrl)
				.WithCredentials(user, password)
				.WithCleanSession(true)
				.WithProtocol(TransportType.Tcp)
				.Build();

			MqttClient client = new MqttClient(cDetails);
			client.MessageReceived += Client_MessageReceived;
            client.Connected += Client_Connected;
            client.ConnectionFailed += Client_ConnectionFailed;
            await client.EstablishConnectionAsync();

			string topic = "s/us";
			string payload = $"100,{device_name}, c8y_MQTTDevice";
			var message = new MqttMessageRequestBuilder()
				.WithTopicName(topic)
				.WithQoS(QoS.EXACTLY_ONCE)
				.WithMessageContent(payload)
				.Build();

			await client.PublishAsync(message);

			// set device's hardware information
			var deviceMessage = new MqttMessageRequestBuilder()
				.WithTopicName("s/us")
				.WithQoS(QoS.EXACTLY_ONCE)
				.WithMessageContent("110, S123456789, MQTT test model, Rev0.1")
				.Build();

			await client.PublishAsync(deviceMessage);

			// add restart operation
			await client.SubscribeAsync(new MqttMessageRequest() { TopicName = "s/ds" });
			await client.SubscribeAsync(new MqttMessageRequest() { TopicName = "s/e" });
			await client.PublishAsync(new MqttMessageRequestBuilder()
				.WithTopicName("s/us")
				.WithQoS(QoS.EXACTLY_ONCE)
				.WithMessageContent("114,c8y_Restart")
				.Build());

			// generate a random temperature (10º-20º) measurement and send it every second
			Random rnd = new Random();
            while (!cToken.IsCancellationRequested)
            {
                int temp = rnd.Next(10, 20);
				Console.WriteLine("Sending temperature measurement (" + temp + "º) ...");
				await client.PublishAsync(new MqttMessageRequestBuilder()
					.WithTopicName("s/us")
					.WithQoS(QoS.EXACTLY_ONCE)
					.WithMessageContent("211," + temp)
					.Build());
                Thread.Sleep(1000);
            }
		}

        private static void Client_ConnectionFailed(object sender, ProcessFailedEventArgs e)
        {
            Console.WriteLine("Connection failed");
        }

        private static void Client_Connected(object sender, ClientConnectedEventArgs e)
        {
            Console.WriteLine("Client connected.");
        }

        private static void Client_MessageReceived(object sender, IMqttMessageResponse e)
		{
			var content = e.MessageContent;
		}
	}
}
```

If you use the WS protocol, you must provide the appropriate settings:

```cs
var cDetails = new ConnectionDetailsBuilder()
                    .WithClientId(clientId)
                    .WithHost("cumulocity.com/mqtt")
                    .WithCredentials("<<tenant>>/<<username>>", <<password>>)
                    .WithCleanSession(true)
                    .WithWs()
                    .Build();
```

Replace `serverUrl`, `clientId` and `device_name` as needed. Do not forget to specify the user credentials setting values for `tenant_ID`, `username` and `password`.

{{< product-c8y-iot >}} MQTT supports both unsecured TCP and secured SSL connections (that is, `tcp://mqtt.{{< domain-c8y >}}:1883` or `ssl://mqtt.{{< domain-c8y >}}:8883`), so you can pick the one which fits your needs and use it in `serverUrl`.

What does the code in `Main` do?

-   Configure the MQTT connection.
-   Connect with {{< product-c8y-iot >}} via MQTT protocol.
-   Create a new device with a name (`device_name`) and a type (`c8y_MQTTDevice`).
-   Update the device hardware information by putting a `"S123456789"` serial, a `"MQTT test model"` model and a `"Rev0.1"` revision.
-   Subscribe to the static operation templates for the device and print all received operations to the console. In case of a `c8y_Restart` operation, simulate a device restart.
-   Create a new thread which sends temperature measurements every second.

Note that the subscription is established after the device creation, otherwise if there is no device for a given ``clientId``, the server will not accept it.

#### Create new event with JSON via MQTT

The purpose of this example is to show the creation of an event. Before running the example, you must provide the credentials for the device. For more details review the [Request device credentials](/device-sdk/rest#step-0-request-device-credentials) step.

{{< c8y-admon-important >}}
Do not use new line characters  \r\n and escaping characters specific for Windows OS.
{{< /c8y-admon-important >}}

```cs
const string serverUrl = "mqtt.cumulocity.com";
const string clientId = "my_mqtt_cs_client";
const string device_name = "My new MQTT device";
const string user = "<<tenant>>/<<device_username>>";
const string password = "<<password>>";

// TCP connection details
var cDetails = new ConnectionDetailsBuilder()
    .WithClientId(clientId)
    .WithHost(serverUrl)
    .WithCredentials(user, password)
    .WithCleanSession(true)
    .WithProtocol(TransportType.Tcp)
    .Build();

// JSON message details
string topicJson = "event/events/create";
string msgJson = "{  \"type\": \"TestEvent\", \"text\": \"sensor was triggered\", \"time\": \"2019-04-18T13:03:27.845Z\" }";

var messageJson = new MqttMessageRequestBuilder()
    .WithTopicName(topicJson)
    .WithQoS(QoS.EXACTLY_ONCE)
    .WithMessageContent(msgJson)
    .Build();

// MQTT client creation
MqttClient client = new MqttClient(cDetails);
client.MessageReceived += Client_MessageReceived;
await client.EstablishConnectionAsync();

await client.SubscribeAsync(new MqttMessageRequest() { TopicName = "error" });

await client.PublishAsync(messageJson);
```

For specific procedural details review [JSON via MQTT](/reference/smartrest-two/#json-via-mqtt).

#### Building and running the application

Use the following commands to build the application:

```shell
$ cd hello-mqtt-cs
$ dotnet build
```

and this command to run it:

```shell
$ dotnet run
```

After starting the application, you should see a new registered device in the Device Management application listed in **All devices**. In the **Measurements** tab, you will see the temperature measurements being sent by your client.

Additionally, if there will be a new operation created for this device (for example `c8y_Restart`), the information about it will be printed to the console.

### Improving the agent

Now that you have done your first step, check out the section [Hello MQTT](#hello-mqtt) to learn more about {{< product-c8y-iot >}} MQTT and improve your application.
