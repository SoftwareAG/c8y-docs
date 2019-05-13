---
weight: 10
title: Overview
layout: redirect
---

This section describes how to develop and deploy microservices on top of Cumulocity using the Microservice SDK for C#. This section contains:

* [General prerequisites](#general-prerequisites) – Requirements you need to develop and run C# microservices.

* [Hello World](/guides/microservice-sdk/cs#hello-world-basic) – Implement and run you first C# microservice.

* [Developing C# microservices](/guides/microservice-sdk/cs#developing-microservice) - Detailed information about this SDK.

The most simple starting point is the [C# Hello World example](/guides/microservice-sdk/cs#hello-world-basic).

>**Info**: You can develop Cumulocity with any IDE and any build tool that you prefer, but the examples focus on Cake (C# Make) and Visual Studio.


### <a name="general-prerequisites"></a> Development prerequisites

To use the C# client libraries for development, you need to install .NET Core SDK for your development platform such as Windows, Linux or Mac (at least Version 2 of the [.NET Core SDK](https://www.microsoft.com/net/download/windows)). Note that .NET Core Runtime and .NET Core SDK are different things.

Use the following command to verify the version of your .NET Core SDK:

```shell
$ dotnet --info
```

The output must show a version number later than "2.0.0" to perform the basic examples.

For the Docker installation, review the information at [Docker for Windows: What to know before you install](https://docs.docker.com/docker-for-windows/install/#what-to-know-before-you-install) and install [Docker For Windows](https://docs.docker.com/docker-for-windows/install/).

For .NET development, Microsoft provides a number of different images depending on what you are trying to achieve.

Whether you need the .NET Core SDK or the .NET Core runtime depends on what you want to do:

* .NET Core SDK - includes tools and libraries to **build** .NET Core applications.
* .NET Core Runtime - is required to **run** .NET Core applications.

#### Windows system requirements

* Powershell (at least Version 6 or Core)
* .NET Core SDK (at least Version 2.0)
* Docker for Windows (at least Version  17.06)

#### Linux system requirements

* .NET Core SDK (at least Version 2.0)
* Docker (at least Version  17.06)
* Mono (at least Version  5.4.0)

### Runtime prerequisites

The most important requirement is an installation of [Docker 17.06](https://docs.docker.com/release-notes/docker-ce/) or later of the Docker client.

Recommended as production image is microsoft/dotnet:<version>-runtime: This image contains the .NET Core (runtime and libraries) and is optimized for running .NET Core apps.

Assumed, only Linux containers are supported. However, for the development itself it is possible to use Windows containers.

The SDK is based on the package Cumulocity.SDK.Microservices has dependency on:

* Cumulocity.AspNetCore.Authentication.Basic - a package wrapper around [Bazinga.AspNetCore.Authentication.Basic](https://github.com/bruno-garcia/Bazinga.AspNetCore.Authentication.Basic) Ensures adding basic authentication to Asp.Net Core in the right way because ASP.NET Core 2.0 introduced breaking changes to Authentication and Identity. From this version of the web framework Microsoft doesn't ship a Basic Authentication package with ASP.NET Core Security.
