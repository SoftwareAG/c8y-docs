---
weight: 10
title: Overview
layout: redirect
---

This section describes how to develop and deploy microservices on top of {{< product-c8y-iot >}} using the Microservice SDK for C#, and it contains:

*   [Prerequisites](#general-prerequisites) – Development and runtime requirements you must develop and run C# microservices.
*   [Hello world tutorial](#hello-world) – Step-by-step instructions to develop and deploy your first C# microservice.
*   [Developing microservices](#developing-microservices) - Information about this SDK and detailed C# API reference.
<!-- *   [Authentication](#sso-oauth) – Information about authentication employing OAuth tokens. -->
*   [Troubleshooting](#troubleshooting) – Some identified common problems and their solutions.

To develop a microservice using the SDK for C#, the starting point is our [Hello world tutorial](#hello-world).

{{< c8y-admon-info >}}
You can develop microservices for {{< product-c8y-iot >}} with any IDE and build tool that you prefer, but this guide focuses on Cake (C# Make) and Visual Studio.
{{< /c8y-admon-info >}}

If you face any issue or need technical support, please use the [{{< product-c8y-iot >}} community at Stack Overflow](http://stackoverflow.com/questions/tagged/cumulocity). You will find there many useful questions and answers.

#### Upgrading the SDK

The latest supported SDK is based on .NET Core 3.1 and **Visual Studio 2019** is required for supporting it.
To migrate your current version (for example 9.20.0 or 1004.12.0) to a new one of the SDK, update all dependencies to the latest version, for example, 1006.6.0, and update the project to .Net SDK 3.1. The developer who is upgrading an existing project to the latest version of SDK (1006.6.0) must follow the offical [Microsoft guidelines](https://docs.microsoft.com/en-us/aspnet/core/migration/22-to-30?view=aspnetcore-3.1&tabs=visual-studio) about the code changes to be done for upgrading.



For new projects, you shall use a new bundle of [building scripts](https://github.com/SoftwareAG/cumulocity-clients-cs/tree/develop/Examples/BuildingScripts/v3.1), and it is recommended to use [Cumulocity.SDK.Microservices v1006.6.0](https://www.nuget.org/packages/Cumulocity.SDK.Microservices/1006.6.0) based on .Net Core 3.1.

<a name="general-prerequisites"></a>
### Development prerequisites

To use the C# client libraries for development, you must install .NET Core SDK for your development platform such as Windows or Linux (version 3.1 of the [.NET Core SDK](https://www.microsoft.com/net/download/windows)). Note that .NET Core Runtime and .NET Core SDK are different things.

Use the following command to verify the version of your .NET Core SDK:

```shell
$ dotnet --info
```

The output must show a version number later than "3.1.0" to implement the basic examples.

You also need a local Docker installation. Review the information at [Docker for Windows: What to know before you install](https://docs.docker.com/docker-for-windows/install/#what-to-know-before-you-install) and install [Docker For Windows](https://docs.docker.com/docker-for-windows/install/). For Linux systems, follow the general installation on the [Get Started with Docker](https://www.docker.com/get-started) webpage.

For .NET development, Microsoft provides a number of different images depending on what you are trying to achieve.

Depending on what you want to do, you need either the .NET Core SDK or the .NET Core Runtime.

*   .NET Core SDK - Includes tools and libraries to build .NET Core applications.
*   .NET Core Runtime - Required to run .NET Core applications.

#### Windows system requirements

*   Powershell (at least Version 6 or Core)
*   .NET Core SDK (at least Version 3.1)
*   Docker for Windows (at least Version 17.06)

#### Linux system requirements

*   .NET Core SDK (at least Version 3.1)
*   Docker (at least Version 17.06)
*   Mono (at least Version 6.8.0)

### Runtime prerequisites

The most important requirement is an installation of [Docker 17.06](https://docs.docker.com/release-notes/docker-ce/) or later.

The recommended image for production is `mcr.microsoft.com/dotnet/core/aspnet:<version> AS runtime` as it contains the .NET Core (runtime and libraries) and it is optimized for running .NET Core applications.

{{< c8y-admon-important >}}
{{< product-c8y-iot >}} supports only Linux containers. Nevertheless, for development – should you wish to do so – it is possible to use Windows containers.
{{< /c8y-admon-important >}}

The SDK is based on the package `Cumulocity.SDK.Microservices` and it has a dependency on:

* Cumulocity.AspNetCore.Authentication.Basic - a package wrapper around the [Basic Authentication for Microsoft ASP.NET Core Security](https://github.com/bruno-garcia/Bazinga.AspNetCore.Authentication.Basic) which ensures adding basic authentication to Asp.Net Core.
