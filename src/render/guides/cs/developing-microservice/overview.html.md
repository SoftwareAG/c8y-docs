---
order: 10
title: Overview
layout: redirect
---

The SDK is based on ASP.NET Core, a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications. ASP.NET Core apps use a Startup class, which is named Startup by convention. The Startup class

* must include a Configure method to create the app's request processing pipeline.
* can optionally include a ConfigureServices method to configure the app's services.

This document describes microservice SDK features, services, configuration files, logging and Cake (C# Make).

There are two possible deployment types on the platform:

* Hosted deployment - the default for microservices. For typical use cases the hosted deployment is the suggested one.
* External/legacy deployment - requires custom installation of the platform and agent.

For development and testing purposes one can deploy a microservice on a local docker. The process is described in this document.