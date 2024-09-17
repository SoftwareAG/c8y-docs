---
weight: 50
title: Microservice runtime and applications
layout: redirect
---
Analytic models, EPL apps and smart rules are executed in an Apama-ctrl microservice. All microservices come with pre-configured resource limits (example: CPU and Memory). Resource usage of analytics models, EPL apps and smart rules varies on various factors like application complexity, number of devices etc. It's advisable for the customer to profile their application to prevent out of memory issues.


| To do this                  | you need the following                                      |
| --------------------------- | ----------------------------------------------------------- |
| Build analytic models       | Apama-ctrl microservice variant (example: apama-ctrl-starter) and Streaming Analytics application |
| Develop EPL apps            | Apama-ctrl microservice variant (example: apama-ctrl-250mc-1g) and Streaming Analytics application |
| Use smart rules             | Any Apama-ctrl microservice variant and Smartrule microservice (included in {{< product-c8y-iot >}}'s {{< standard-tenant >}}) |

See also the following sections:
* [Subscribed applications](/standard-tenant/ecosystem/#subscribed-applications)
* [Subscribed microservices](/standard-tenant/ecosystem/#subscribed-microservices)
* [Smart rules](/cockpit/smart-rules/)

If your tenant is subscribed to the Apama-ctrl-starter microservice, then the following applies:
- Limited number of at most 3 active analytic models. Custom blocks written with the Analytics Builder Block SDK cannot be used.
- The **EPL Apps** page is not available in the Streaming Analytics application.
- Supports Smart rules.

If your tenant is subscribed to the Apama-ctrl-250mc-1g  microservice (or one of its larger variants), then the following applies:
- Supports Smart rules, **Analytics Builder** and **EPL Apps**

If your tenant is subscribed to the Apama-ctrl-mt-4c-16g microservice, then the following applies:
- Multi-tenant support.
- EPL apps are only enabled on the tenant that owns the microservice, but disabled on the subtenants.
- The **Analytics Builder** page is currently not available in the Streaming Analytics application.
- Supports Smart rules.

If your tenant is subscribed to the Apama-ctrl-smartrules or Apama-ctrl-smartrulesmt microservice
- Supports Smart rules.
- The **Analytics Builder** and **EPL Apps** pages are not available in the Streaming Analytics application.

Contact [product support](/additional-resources/contacting-support/) to discuss adding more capabilities.
