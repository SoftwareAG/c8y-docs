---
order: 10
title: Overview
layout: redirect
---

The Cumulocity REST APIs provide you with a generic IoT protocol that is simple to use from most environments. It can be ad-hoc adapted to any IoT use case and uses standard Internet communication and security mechanisms. While this is a great leap forward over tailored IoT protocols with proprietary technologies, it poses some challenges to very constrained environments such as low-end microcontrollers or low-bandwidth communication channels. 

For these enviroments, Cumulocity offers the so-called "SmartREST" protocol. SmartREST combines the benefits of standard technology and tailored protocols: 

* It continues to work on any network by using standard HTTP technology.
* It supports HTTP authentication and encryption.
* It still gracefully handles protocol versioning.
* Its network traffic usage is close to custom-optimized protocols by transferring pure payload data during normal operation.
* It is based on CSV (comma separated values) and hence is easy to handle from C-based environments.
* It supports server-generated timestamps for devices without clocks.

In the next section, we will discuss the concepts behind SmartREST and the basic protocol that is used. SmartREST is based on separating metadata from payload data by using so-called templates, which are then described. Finally, we show how to send and receive data using SmartREST. For a detailed description of the protocol, see the [SmartREST reference](/guides/reference/smartrest).