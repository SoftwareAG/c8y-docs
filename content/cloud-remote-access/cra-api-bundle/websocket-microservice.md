---
title: Websocket microservice
weight: 40
layout: bundle
---


As normal microservice requests are typically REST requests and do follow the request-response pattern, a new module has been added to provide microservices with long lasting websocket connections.

### Karaf module

Karaf contains a new module which can be found at

	:: Cumulocity Platform Services :: Microservice Management :: Websocket 

It should start with Karaf startup and should normally be in active state. This module is responsible to forward websocket requests to registered microservices. 

### Instances and scaling

The microservice is currently not capable to run on multiple nodes. All Karaf nodes should contain the same URL for the microservice and only one installation is required.
