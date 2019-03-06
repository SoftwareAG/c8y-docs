---
order: 10
title: Rest Client - Overview 
layout: redirect
---

Cumulocity comes with elaborate support for developing clients in C#. You can use C#, for example, to

* Interface Cumulocity with open, C#-enabled devices through a device-side agent. Today, many Embedded Linux devices such as the Raspberry Pi support C#.
* Interface Cumulocity with closed devices speaking an existing, Internet-enabled protocol through a server-side agent.

To get started, check the "Hello World" examples for the various C# variants.

* The most simple starting point is the [C# example](/guides/device-sdk/cs#hello-world-basic).

Note that you can develop Cumulocity with any IDE and any build tool that you prefer, but the examples focus on .NET Core SDK and Visual Studio.

After reviewing the "Hello world" examples, continue with the section [Developing C# clients](/guides/device-sdk/cs#developing-cs-clients) or download the complete examples described in the section [C# reference agents](/guides/device-sdk/cs#agents). There's one full example of a device-side agent demonstrating nearly all Cumulocity features, and one full example of a server-side agent.

Finally, here are some references for getting started with the basic technologies underlying the SDK:

-   The client libraries use the Cumulocity REST interfaces as underlying communication protocol as described in the section on [REST](/guides/device-sdk/rest).
-   All examples and libraries are open source -- check https://bitbucket.org/m2m.

Documentation for the <a href="http://resources.cumulocity.com/documentation/cssdk/current/" target="_blank">C# client API</a> can be found on our resources site.


### General prerequisites

To use the C# client libraries, you need to have the latest versions 2.2 of the [.NET Core](https://dotnet.microsoft.com/download/dotnet-core/2.2) for your operating system.
To verify the version of your .NET Core Software Development Kit, type
```bash
	$ dotnet --version
```
The output needs to show a version number later than "2.2.100" for the basic examples.

