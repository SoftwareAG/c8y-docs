---
weight: 30
title: Cumulocity IoT microservices
layout: redirect
---

Microservices are server-side applications. Microservices can be used to develop for example the following functionality on top of Cumulocity IoT:

* Integrations
* Batch analytics
* Decoder
* Backend applications

Microservices are deployed as Docker images to Cumulocity IoT, and follow specific conventions. They typically provide one REST API, which is available under /service/&lt;microservice-name&gt;. They typically access Cumulocity IoT using the documented REST API.

When developing a Cumulocity IoT microservice, a developer is not restricted to any programming language. However, a microservice must serve as a HTTP server working on port 80 and must be encapsulated in a Docker image.

The hosting of the microservice is provided by Cumulocity IoT. This way developers can focus on business logic and leave scaling, security, high availability and monitoring to Cumulocity IoT. Microservices can be built on top of the API exposed by the Cumulocity IoT platform. This way, Cumulocity IoT microservices are a comfortable means to provide new functionality and extend existing ones.

![microservice_infrastructure](/images/concepts-guide/microservice_infrastructure.png)

For detailed information on developing and deploying microservices on top of Cumulocity IoT refer to the [Microservice SDK guide](/microservice-sdk) which provides information on the general concept of microservices in Cumulocity IoT as well as specific guidance and examples for various programming languages.

>**Info:** For Microservice developers {{< company-c8y >}} provides Microservice SDK in [Java programming language](/microservice-sdk/java) and [C# programming language](/microservice-sdk/cs) for .Net Core. Refer to the relevant sections in the [Microservice SDK guide](/microservice-sdk).
