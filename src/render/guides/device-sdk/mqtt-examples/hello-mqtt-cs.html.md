---
order: 80
title: Hello MQTT C#
layout: redirect
---

In this tutorial, you will learn how to use the C# MQTT client with Cumulocity using pre-defined messages (called "static templates").

### Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, a user and a password in order to access Cumulocity.
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

### Developing the "Hello, MQTT world!" client

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to

* create a console project,
* add a dependency to the MQTT C# client library (in this example we will use [Cumulocity SDK MQTT](https://bitbucket.org/m2m/cumulocity-sdk-cs/src)),
* build and run the C# application.

#### Creating a console project

To create a plain C# project with .NET Core SDK, execute the following command:

```shell
$ dotnet new console -n hello-mqtt-cs
```

This will create a new console application _hello-mqtt-cs_ in the current directory with a skeleton structure for your project.

#### Adding the MQTT C# client library

Edit the _hello-mqtt-cs.csproj_ in the _hello-mqtt-cs_ folder. Add a dependency manually to the Cumulocity SDK MQTT.

```xml
<ItemGroup>
    <PackageReference Include="Cumulocity.SDK.MQTT" Version="0.1.0" />
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
using Cumulocity.SDK.MQTT.Model.MqttMessage;
using MqttClient = Cumulocity.SDK.MQTT.MqttClient;

namespace MQTTClientExample
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Hello World!");
			Task.Run(RunClientAsync);
			new System.Threading.AutoResetEvent(false).WaitOne();
		}

		private static async Task RunClientAsync()
		{
			const string serverUrl = "mqtt.cumulocity.com";
			const string clientId = "my_mqtt_cs_client";
            const string device_name = "My CS MQTT device";
			const string user = "<<tenant>>/<<username>>";
			const string password = "<<password>>";

			//connections details
			var cDetails = new ConnectionDetailsBuilder()
				.WithClientId(clientId)
				.WithHost(serverUrl)
				.WithCredentials(user, password)
				.WithCleanSession(true)
				.WithProtocol(TransportType.Tcp)
				.Build();

			MqttClient client = new MqttClient(cDetails);
			client.MessageReceived += Client_MessageReceived;
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

			// generate a random temperature (10º-20º) measurement and send it every 1 s
			Random rnd = new Random();
			for (int i = 0; i < 5; i++)
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

Replace `serverUrl`, `clientId` and `device_name` as needed. Do not forget to specify the user credentials setting values for `tenant`, `username` and `password`.

Cumulocity MQTT protocol supports both unsecured TCP and secured SSL connections (i.e. `tcp://mqtt.cumulocity.com:1883` or `ssl://mqtt.cumulocity.com:8883`), so you can pick the one which fits for you and use it in `serverUrl`.

What does the code in `main` do?

-   Configure the MQTT connection.
-   Connect with Cumulocity via a MQTT protocol.
-   Create a new device with a name (`device_name`) and a type (`c8y_MQTTDevice`).
-   Update the device hardware information by putting a `"S123456789"` serial, a `"MQTT test model"` model and a `"Rev0.1"` revision.
-   Subscribe to the static operation templates for the device and print all received operations to the console. In case of a c8y_Restart operation, simulate a device restart.
-   Create a new thread which sends temperature measurement every second.

Note that the subscription is established after the device creation, otherwise if there is no device for a given ``clientId``, the server will not accept it.

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

After starting the application, you should see a new registered device in the Device Management application, listed in **All devices**. In the **Measurements** tab, you will see the temperature measurements being sent by your client.

Additionally, if there will be a new operation created for this device (e.g. c8y_Restart), information about it will be printed to the console.

### Improving the agent

Now that you have done your first step, check out the section [Hello MQTT](/guides/device-sdk/mqtt-examples#hello-mqtt) to learn more about Cumulocity MQTT and improve your application.
