---
order: 10
layout: default
title: Introduction to C#
---

## Overview

With microservices, you can extend the Cumulocity IoT platform with customer-specific functionality. For example, you can develop integrations to 3rd-party software or provide server-side business logic. Technically, microservices are docker containers, hosted by Cumulocity. For a general introduction to microservices, see [Developing applications](/guides/concepts/applications) in the Concepts guide. 

Using Microservice SDK for C#, you can develop microservices in C#. This Developer´s guide explains

* [General prerequisites](#general-prerequisites): What do you need to develop and run C# microservices?

* [Hello World: Run you first C# microservice](/guides/cs/hello-world-basic)

* [Developing C# microservices](/guides/cs/developing-microservice)

To get started, check the "Hello World" examples for the various C# variants.

* The most simple starting point is the [C# example](/guides/cs/hello-world-basic).

>**Info**: You can develop Cumulocity with any IDE and any build tool that you prefer, but the examples focus on  Cake (C# Make) and Visual Studio. 


## <a name="general-prerequisites"></a>General prerequisites


### Development prerequisites

To use the C# client libraries for development, you need to install .NET Core SDK for the platform used for development such as Windows, Linux or Mac (at least Version 2 of the [.NET Core SDK](https://www.microsoft.com/net/download/windows)). Note that .NET Core Runtime and .NET Core SDK are different things. 

To verify the version of your .NET Core SDK, type

	$ dotnet --info

The output must show a version number later than "2.0.0" to perform the basic examples.

For Docker installation, review the information at [Docker for Windows: What to know before you install](https://docs.docker.com/docker-for-windows/install/#what-to-know-before-you-install) and install [Docker For Windows](https://docs.docker.com/docker-for-windows/install/).

For .NET development, Microsoft provides a number of different images depending on what you're trying to achieve.

Whether you need the .NET Core SDK or the .NET Core runtime depends on what you want to do:

* .NET Core SDK - includes tools and libraries to **build** .NET Core applications.

* .NET Core Runtime - is required to **run** .NET Core applications.

### **Runtime prerequisites**

The most important requirement is an installation of [Docker 17.06](https://docs.docker.com/release-notes/docker-ce/) or later of the Docker client.

Recommended as production image is microsoft/dotnet:<version>-runtime: This image contains the .NET Core (runtime and libraries) and is optimized for running .NET Core apps.

Assumed, only Linux containers are supported. However, for the development itself it is possible to use Windows containers.

SDK relies on:

* [Bazinga.AspNetCore.Authentication.Basic](https://github.com/bruno-garcia/Bazinga.AspNetCore.Authentication.Basic)
