---
weight: 10
title: Overview
layout: redirect
---

LPWAN Agents provide a way to plugin custom codecs, capable of encoding and decoding the device payloads to and from the LPWAN devices. 
A custom codec is a typical Cumulocity microservice conforming to a predefined contract.



* [Abstract](#abstract) Why Cumulocity IoT platform supports LPWAN Codecs.
* [Codec API definitions](#codec-api-definition) Steps to implement LPWAN codec microservice without using lpwan-custom-codec library.
* [Steps to implement LPWAN codec microservice using lpwan-custom-codec library](#steps-to-implement-custom-codec-microservice) describes how to implement the custom microservice using lpwan-custom-codec library.
* [Example codec microservice implementation](#sample-codec-microservice-implementation) describing the key parts of the sample microservice presented in the example
* [Deploying the example codec microservice](#deploying-the-example-codec-microservice) describing how to deploy the sample microservice.