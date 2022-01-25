---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} has the ability to integrate LPWAN devices via LPWAN agents.
For a list of all supported LPWAN agents see the [Protocol integration guide](../overview/).

The section explains how Cumulocity supports LPWAN Custom Codec microservice for decoding and encoding the device payload.

* [Codec API definitions](#codec-api-definition) describes the supported API endpoints `/decode` and `/encode`.
* [Steps to implement LPWAN codec microservice using lpwan-custom-codec library](#steps-to-implement-custom-codec-microservice) describes how to implement the custom microservice using lpwan-custom-codec library.
* [Example codec microservice implementation](#sample-codec-microservice-implementation) describes the key parts of the sample microservice presented in the example
* [Deploying the example codec microservice](#deploying-the-example-codec-microservice) describes how to deploy the sample microservice.
