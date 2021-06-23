---
weight: 30
title: Cumulocity IoT microservices
layout: redirect
---

Microservices are server-side applications. Microservices can be used to develop for example the following functionality on top of {{< product-name-1 >}}:

* Integrations
* Batch analytics
* Decoder
* Backend applications

Microservices are deployed as Docker images to {{< product-name-1 >}}, and follow specific conventions. They typically provide one REST API, which is available under /service/&lt;microservice-name&gt;. They typically access {{< product-name-1 >}} using the documented REST API.

When developing a {{< product-name-1 >}} microservice, a developer is not restricted to any programming language. However, a microservice must serve as a HTTP server working on port 80 and must be encapsulated in a Docker image.

The hosting of the microservice is provided by {{< product-name-1 >}}. This way developers can focus on business logic and leave scaling, security, high availability and monitoring to {{< product-name-1 >}}. Microservices can be built on top of the API exposed by the {{< product-name-1 >}}. This way, {{< product-name-1 >}} microservices are a comfortable means to provide new functionality and extend existing ones.

![microservice_infrastructure](/images/concepts-guide/microservice_infrastructure.png)

For detailed information on developing and deploying microservices on top of {{< product-name-1 >}} refer to the [Microservice SDK guide](/microservice-sdk) which provides information on the general concept of microservices in {{< product-name-1 >}} as well as specific guidance and examples for various programming languages.

>**Info:** For Microservice developers {{< company-name-1 >}} provides Microservice SDK in [Java programming language](/microservice-sdk/java) and [C# programming language](/microservice-sdk/cs) for .Net Core. Refer to the relevant sections in the [Microservice SDK guide](/microservice-sdk).
