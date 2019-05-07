---
weight: 50
title: MQTT client - Hello world!
layout: redirect
---

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to follow these steps:

* Create a console project:<br>
```cs
dotnet new console
```
* Add a new entry <PropertyGroup> to a csproj file:
```xml
<RestoreSources>$(RestoreSources);../nugets;https://api.nuget.org/v3/index.json</RestoreSources>
```
* Add a package reference to a project file:
```cs
dotnet add package Cumulocity.MQTT -s "../nugets"
```

**Example**

```cs
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
```
Replace &lt;&lt;clientId&gt;&gt;, &lt;&lt;serverUrl&gt;&gt;, &lt;&lt;tenant&gt;&gt;, &lt;&lt;username&gt;&gt;, and &lt;&lt;password&gt;&gt; with your data.

Build and run the application:
 
```cs
dotnet build
dotnet run
```

Cumulocity MQTT protocol supports both unsecured TCP and also secured SSL connections (e.g. tcp://mqtt.cumulocity.com:1883 or ssl://mqtt.cumulocity.com:8883), so as the &lt;&lt;serverUrl&gt;&gt; select the one which fits for you.

What does the code in "main" do?

* Configure the MQTT connection.
* Connect with Cumulocity via a MQTT protocol.
* Create a new device with a My MQTT device name and a c8y_MQTTDevice type.
* Update the device hardware information by putting a S123456789 serial, a MQTT test model and a Rev0.1 revision.
* Subscribe to the static operation templates for the device, print all received operations to the console and in case of a c8y_Restart operation simulate device restart.

### Improving the agent

Now that you have done your first step, check out the section [Hello MQTT](/guides/device-sdk/mqtt#hello-mqtt) to learn more about Cumulocity MQTT and improve your application.
