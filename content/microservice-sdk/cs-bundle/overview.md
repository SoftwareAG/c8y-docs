---
weight: 10
title: Overview
layout: redirect
---

This section describes how to develop and deploy microservices on top of Cumulocity using the Microservice SDK for C#, and it contains:

*   [Prerequisites](#general-prerequisites) – Development and runtime requirements you need to develop and run C# microservices.
*   [Hello world tutorial](#hello-world) – Step-by-step instructions to develop and deploy your first C# microservice.
*   [Developing microservices](#developing-microservice) - Information about this SDK and detailed C# API reference.
*   [SSO and OAuth](#sso-oauth) – Information about authentication employing OAuth tokens.
*   [Troubleshooting](#troubleshooting) – Some identified common problems and their solutions.

To develop a microservice using the SDK for C#, the starting point is our [Hello world tutorial](#hello-world).

> **Info**: You can develop microservices for Cumulocity with any IDE and build tool that you prefer, but this guide focuses on Cake (C# Make) and Visual Studio.

If you face any issue or need technical support, please use the [Cumulocity community at Stack Overflow](http://stackoverflow.com/questions/tagged/cumulocity). You will find there many useful questions and answers.

### <a name="general-prerequisites"></a> Development prerequisites

To use the C# client libraries for development, you need to install .NET Core SDK for your development platform (i.e. Windows or Linux) at least Version 2 of the [.NET Core SDK](https://dotnet.microsoft.com/download). Note that .NET Core Runtime and .NET Core SDK are different things.

Use the following command to verify the version of your .NET Core SDK:

```shell
$ dotnet --info
```

The output must show a version later than "2.0.0" to implement the basic examples.

You also need a local Docker installation. Review the information at [Docker for Windows: What to know before you install](https://docs.docker.com/docker-for-windows/install/#what-to-know-before-you-install) and install [Docker For Windows](https://docs.docker.com/docker-for-windows/install/). For Linux systems, follow the general installation on the [Get Started with Docker](https://www.docker.com/get-started) webpage.

For .NET development, Microsoft provides a number of different images depending on what you are trying to achieve.

Depending on what you want to do, you need either the .NET Core SDK or the .NET Core Runtime.

*   .NET Core SDK - Includes tools and libraries to build .NET Core applications.
*   .NET Core Runtime - Required to run .NET Core applications.

#### Windows system requirements

*   Powershell (at least Version 6 or Core)
*   .NET Core SDK (at least Version 2.0)
*   Docker for Windows (at least Version  17.06)

#### Linux system requirements

*   .NET Core SDK (at least Version 2.0)
*   Docker (at least Version  17.06)
*   Mono (at least Version  5.4.0)

### Runtime prerequisites

The most important requirement is an installation of [Docker 17.06](https://docs.docker.com/release-notes/docker-ce/) or later.

The recommended image for production is `microsoft/dotnet:<version>-runtime` as it contains the .NET Core (runtime and libraries) and it is optimized for running .NET Core applications.

> **Important**: Cumulocity supports only Linux containers. Nevertheless, for development – should you wish to do so – it is possible to use Windows containers.

The SDK is based on the package `Cumulocity.SDK.Microservices` and it has a dependency on `Cumulocity.AspNetCore.Authentication.Basic` which is a package wrapper around the [Basic Authentication for Microsoft ASP.NET Core Security](https://github.com/bruno-garcia/Bazinga.AspNetCore.Authentication.Basic) which ensures adding basic authentication to Asp.Net Core.
