---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} has the ability to integrate LPWAN devices via LPWAN agents, for a list of all supported LPWAN agents see the [Protocol integration guide](https://cumulocity.com/guides/protocol-integration/overview/).

The following sections explain how to implement a custom codec microservice for implementing LPWAN device specific codec for decoding and encoding the device payload.

* [Codec Workflow](#codec-workflow) describing the endpoints exposed by the lpwan-custom-codec
* [Steps to implement LPWAN codec microservice](#steps-to-implement-custom-codec-microservice) describing how to implement the custom microservice
* [Sample codec microservice implementation](#sample-codec-microservice-implementation) describing the key parts of the sample microservice present in the example
* [Developing microservice without lpwan-custom-codec](#developing-microservice-without-lpwan-custom-codec) describing the pre-requisite task needed to be performed for the feature to work seamlessly
* [Deploying the example codec microservice](#deploying-the-example-codec-microservice) describing how to deploy the sample microservice and the creation of device types

