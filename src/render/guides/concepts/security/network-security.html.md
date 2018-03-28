---
order: 30
title: Network security aspects
layout: redirect
---

Network security prevents unauthorized access to data transmitted over the network and tampering with or unauthorized modification of data. It also ensures that network services are available.

Cumulocity ensures that your data stays confidential and cannot be tampered with through an end-to-end implementation of [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure) from devices to applications. It uses up-to-date encryption technology that has been independently rated "A" by [SSLlabs](https://www.ssllabs.com/). Any communication with Cumulocity is subject to individual authentication and authorization. 

This communication architecture is illustrated below. Inside the sensor networks and from the sensor networks to agents, device- and gateway-specific protocols may be in use (such as ZigBee or Modbus). Securing these is a device-specific matter. Agents communicate with the Cumulocity platform using HTTPS to send and receive data. Similarly, IoT applications use HTTPS for communication. If an IoT application exposes own interfaces towards web browsers, it is recommended that these use HTTPS. This way, the whole path from agents to the end user is secured.

<center><img src="/guides/images/concepts-guide/commsecurity.png" alt="Communication security" style="max-width: 100%"></center>

As mentioned above, Cumulocity does not require any device that might expose ports or services on the Internet. This is an important feature: it not only simplifies the connection of devices to Cumulocity, but also simplifies the safety backup of these devices drastically. When deploying an IoT solution, check other services that might make a device available on the Internet or expose it, such as Web-based device managers or SMS-based configuration options.

