---
weight: 40
title: Microservice runtime and applications
layout: redirect
---
Analytic models, EPL apps and smart rules are executed in an Apama-ctrl microservice. This has a per-tenant isolation scope, that is, each subscribed tenant has its own instance of an Apama container with dedicated resources (that is, memory and CPU usage). The container is isolated from other tenants, hence high CPU load or memory issues on other containers are tracked and resourced independently.


| To do this                  | you need the following                                      |
| --------------------------- | ----------------------------------------------------------- |
| Build analytic models       | Apama-ctrl microservice and Streaming Analytics application |
| Develop EPL apps            | Apama-ctrl microservice and Streaming Analytics application |
| Use smart rules             | Apama-ctrl microservice and Smartrule microservice (included in {{< product-c8y-iot >}}'s {{< standard-tenant >}}) |

See also the following sections in the *User guide*:
* [Administration > Managing applications > Subscribed applications](/users-guide/administration/#subscribed-applications)
* [Administration > Managing and monitoring microservices > Subscribed microservices](/users-guide/administration/#subscribed-microservices)
* [Cockpit > Smart rules](/users-guide/cockpit/#smart-rules)

If your tenant is subscribed to the Apama Starter microservice (also called Apama-ctrl-starter), then the following applies:

- Limited number of at most 3 active analytic models. Custom blocks written with the Analytics Builder Block SDK cannot be used. 
- The EPL Apps page is not available in the Streaming Analytics application.
- Unlimited number of smart rules.

If your tenant is subscribed to the Apama Smart Rules-only microservice (also called Apama-ctrl-smartrules), the Analytics Builder and EPL Apps pages are not available in the Streaming Analytics application.

Contact [product support](/welcome/contacting-support) to discuss adding more capabilities.