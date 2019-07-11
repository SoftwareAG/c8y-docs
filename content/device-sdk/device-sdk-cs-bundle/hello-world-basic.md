---
weight: 20
layout: redirect
title: Rest client - Hello, world!
---

This section gives a very basic example of using C# with Cumulocity through .NET Core Software Development Kit (SDK) which is a set of libraries and tools that allow developers to create .NET Core applications and libraries. It can also be run straight from Visual Studio, provided you have a Visual Studio and .NET Core SDK installed.

### Prerequisites

Verify that you have .NET Core SDK installed:

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

.NET Core SDK can be downloaded from [https://dotnet.microsoft.com](https://dotnet.microsoft.com/download).


### Developing the "Hello, World!" agent

To develop a very simple "Hello, world!" agent for Cumulocity, you need to do the following:

* Create a new project.
* Add a dependency to the Cumulocity C# client library.
* Create a C# application.
* Build and run the C# application.

#### Creating a .NET Core project

To create a plain C# project, run

```shell
$ dotnet new console -lang C# -o HelloAgent
```

This will create a folder *HelloAgent* in the current directory with a skeleton structure for your project.

#### Adding the C# client library

To add a dependency to the Cumulocity C# client library, run

```shell
dotnet add package Cumulocity.SDK.Client
```

Afterwards, the `HelloAgent.csproj` will be presented in this way:

```cs
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp2.2</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Cumulocity.SDK.Client" Version="1.0.0" />
  </ItemGroup>

</Project>
```

Add the `version` parameter to use the right version of the client library. The version can be determined by checking the [Announcements section](https://cumulocity.zendesk.com/hc/en-us/sections/200381323-Announcements) of the Cumulocity Help Center.

```bash
dotnet add package Cumulocity.SDK.Client --version 1.0.0
```

#### Creating a C# application

Edit the `Program.cs` file with the following content:

```cs
using Cumulocity.SDK.Client;
using Cumulocity.SDK.Client.HelperTest;
using Cumulocity.SDK.Client.Rest;
using Cumulocity.SDK.Client.Rest.API.Inventory;
using Cumulocity.SDK.Client.Rest.Model;
using Cumulocity.SDK.Client.Rest.Model.Authentication;
using Cumulocity.SDK.Client.Rest.Model.C8Y;
using Cumulocity.SDK.Client.Rest.Representation.Inventory;
using Microsoft.Extensions.Configuration;
using System;

namespace HelloAgent
{
	internal class Program
	{
		private static void Main(string[] args)
		{
			Console.WriteLine("REST API client!");

			IPlatform platform = new PlatformImpl("<<yourURL>>",
				 new CumulocityCredentials("<<yourUser>>", "<<yourPassword>>"));
			IInventoryApi inventory = platform.InventoryApi;

			var mo = new ManagedObjectRepresentation();
			mo.Name = "Hello, world!";
			mo.Set(new IsDevice());
			var mo = inventory.Create(mo);
			Console.WriteLine($"Url: {mo.Self}");
			Console.ReadKey();
		}
	}
}
```


Replace &lt;&lt;yourUrl&gt;&gt;, &lt;&lt;yourUser&gt;&gt; and &lt;&lt;yourPassword&gt;&gt; with your URL (e.g. *https://myurl.cumulocity.com*), username and password.

What does the code in "main" do?

-   Line 1 connects the agent to the platform.
-   Line 2 retrieves a handle to the Cumulocity inventory.
-   Line 3 creates a new managed object.
-   Line 4 sets the display name of the new managed object.
-   Line 5 says that this managed object should be a device (should show up in Device Management).
-   Line 6 creates the managed object in the inventory. This will return the managed object back with a fresh, generated ID. (See "Object identity" section in [Cumulocity's domain model](/guides/concepts/domain-model)).
-   Line 7 prints the URL to the new managed object that has just been stored in the inventory.

#### Building and running the agent

To build and run your agent, process the following commands:

```shell
$ cd HelloAgent
$ dotnet build
Microsoft (R) Build Engine version 15.9.20+g88f5fadfbe for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.
Build succeeded.
0 Warning(s)
0 Error(s)
$ dotnet run
REST API client!
Url: http://demos.cumulocity.com/inventory/managedObjects/110160902
```

The last line shows that a new device has been successfully created with a particular URL. Open the Cumulocity application and go to the device list. You should see a new "Hello, world!" device.

![Hello world device](/guides/images/java/hello.png)

**Got an error message?** Check the [troubleshooting section](/guides/microservice-sdk/cs/#troubleshooting) in the Microservice SDK guide.

### Improving the agent

Now that you have done your first step, check out the section [Developing C# clients](/guides/device-sdk/device-sdk-cs/#developing-cs-clients).