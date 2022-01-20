---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} has the ability to integrate LPWAN devices via LPWAN agents.
For a list of all supported LPWAN agents see the [Protocol integration guide](../overview/).

The following sections explain how to implement a custom codec microservice for implementing an LPWAN device specific codec for decoding and encoding the device payload.

* [Codec Workflow](#codec-workflow) describes the endpoints exposed by the lpwan-custom-codec
* [Steps to implement LPWAN codec microservice](#steps-to-implement-custom-codec-microservice) describes how to implement the custom microservice
* [Sample codec microservice implementation](#sample-codec-microservice-implementation) describes the key parts of the sample microservice present in the example
* [Developing microservice without lpwan-custom-codec](#developing-microservice-without-lpwan-custom-codec) describes the prerequisite task needed to be performed for the feature to work seamlessly
* [Deploying the example codec microservice](#deploying-the-example-codec-microservice) describes how to deploy the sample microservice and the creation of device types
