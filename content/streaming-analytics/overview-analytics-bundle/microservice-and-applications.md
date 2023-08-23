---
weight: 70
title: Microservice runtime and applications
layout: redirect
---
Analytic models, EPL apps and smart rules are executed in an Apama-ctrl microservice. This has a per-tenant isolation scope, that is, each subscribed tenant has its own instance of an Apama container with dedicated resources (that is, memory and CPU usage). The container is isolated from other tenants, hence high CPU load or memory issues on other containers are tracked and resourced independently.


| To do this                  | you need the following                                      |
| --------------------------- | ----------------------------------------------------------- |
| Build analytic models       | Apama-ctrl microservice and Streaming Analytics application |
| Develop EPL apps            | Apama-ctrl microservice and Streaming Analytics application |
| Use smart rules             | Apama-ctrl microservice and Smartrule microservice (included in {{< product-c8y-iot >}}'s {{< standard-tenant >}}) |

See also the following sections:
* [Default subscriptions](/enterprise-tenant/managing-tenants/#default-subscriptions)
* [Subscribed microservices](/standard-tenant/ecosystem/#subscribed-microservices)
* [Smart rules](/cockpit/smart-rules/)

If your tenant is subscribed to the Apama-ctrl-starter microservice, then the following applies:

- Limited number of at most 3 active analytic models. Custom blocks written with the Analytics Builder Block SDK cannot be used.
- The **EPL Apps** page is not available in the Streaming Analytics application.
- Unlimited number of smart rules.

If your tenant is subscribed to the Apama-ctrl-mt-4c-16g microservice, then the following applies:
- Multi-tenant support.
- EPL apps are only enabled on the {{< management-tenant >}} and {{< enterprise-tenant >}} that owns the microservice, but disabled on the subtenants.
- The **Analytics Builder** page is currently not available in the Streaming Analytics application.
- Unlimited number of smart rules.

If your tenant is subscribed to the Apama-ctrl-smartrules or Apama-ctrl-smartrulesmt microservice, the **Analytics Builder** and **EPL Apps** pages are not available in the Streaming Analytics application.

Contact [product support](/additional-resources/contacting-support/) to discuss adding more capabilities.
