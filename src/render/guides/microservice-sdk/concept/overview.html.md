---
order: 10
title: Overview
layout: redirect
---

With microservices, you can extend the Cumulocity IoT platform with customer-specific functionality. For example, you can develop integrations to 3rd-party software or provide server-side business logic.

Technically, microservices are Docker containers hosted by Cumulocity and they follow specific conventions. They typically access Cumulocity using a REST API available under <kbd>/service/&lt;microservice-name&gt;</kbd>.

Developers are not restricted to any programming language when developing a Cumulocity microservice. However, a microservice must serve as an HTTP server working on port 80 and must be encapsulated in a Docker image. Refer to the relevant chapters in this guide for further information on using specific programming languages for the development of microservices.
