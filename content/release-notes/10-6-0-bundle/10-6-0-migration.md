---
weight: 12
title: Migration notes
layout: redirect
---

### Apama

**(Only relevant for on-premise installations)**

If you have an on-premise installation of Cumulocity IoT (instead of using the cloud) and you upgrade Cumulocity IoT to 10.6.0, you must also upgrade the Apama-ctrl microservice from earlier versions to 10.6.0. This is mandatory due to a change in the communication protocol between Cumulocity IoT and Apama. Earlier versions of the Apama-ctrl microservice will not function correctly if running in Cumulocity IoT 10.6.0.

For details, refer to the section *Installing Streaming Analytics (Apama)* in the *Multi-node installation guide* for the Cumulocity IoT platform 10.6.0, available through the [Software AG Empower Portal](https://documentation.softwareag.com/).


### JWT token authentication

The JWT token authentication using the “token.publicKey” tenant option is deprecated but will continue to be supported until further notice. We recommend you to use the O-Auth authentication grant instead.
