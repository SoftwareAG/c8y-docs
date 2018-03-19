---
order: 20
layout: redirect
title: Anotations
---

The simplest way to add required behavior to your application is to annotate a main class with @MicroserviceApplication. 

This is a collective annotation consisting of:

* @SpringBootApplication - comes from spring boot auto configure package
* @EnableContextSupport - is required to use @UserScope, or @TenantScope scopes for method invocations
* @EnableHealthIndicator - provides standard health endpoint used by the platform to monitor microservice availability  
* @EnableMicroserviceSecurity - provides standard security mechanism, verifying user and roles against the platform
* @EnableMicroserviceSubscription - is responsible for subscribing microservices to the platform, updating metadata and listen to tenant subscription change events
* @EnableMicroservicePlatformInternalApi - injects the platform API services into spring context for a microservice to use
