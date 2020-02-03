---
weight: 30
title: Cumulocity microservices
layout: redirect
---

### Overview

Microservices are server-side applications. Microservices can be used to develop for example the following functionality on top of Cumulocity:

* Integrations
* Batch analytics
* Decoder
* Backend applications

Microservices are deployed as Docker images to Cumulocity, and follow specific conventions. They typically provide one REST API, which is available under /service/&lt;microservice-name&gt;. They typically access Cumulocity using the documented REST API.

When developing a Cumulocity microservice, a developer is not restricted to any programming language. However, a microservice must serve as a HTTP server working on port 80 and must be encapsulated in a Docker image.

The hosting of the Microservice is provided by Cumulocity. This way developers can focus on business logic and leave scaling, security, high availability and monitoring to Cumulocity. Microservices can be built on the top of the API exposed by the Cumulocity platform. This way, Cumulocity microservices are a comfortable means to provide new functionality and extend existing one.

![microservice_infrastructure](/images/concepts-guide/microservice_infrastructure.png)

For detailed information on developing and deploying microservices on top of Cumulocity refer to the [Microservice SDK guide](/microservice-sdk) which provides information on the general concept of microservices in Cumulocity as well as specific guidance and examples for various programming languages.

>**Info:** For Microservice developers Cumulocity provides Microservice SDK in [Java programming language](/microservice-sdk/java) and [C# programming language](/microservice-sdk/cs) for .Net Core. Refer to the relevant sections in the [Microservice SDK guide](/microservice-sdk).
