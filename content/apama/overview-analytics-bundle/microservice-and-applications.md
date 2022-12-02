---
weight: 40
title: Microservice runtime and web apps
layout: redirect
---
Analytic models, EPL apps and smart rules are executed in an Apama-ctrl microservice. This has a per-tenant isolation scope, that is, each subscribed tenant has its own instance of an Apama container with dedicated resources (that is, memory and CPU usage). The container is isolated from other tenants, hence high CPU load or memory issues on other containers are tracked and resourced independently.


| To do this                  | you need the following                                      |
| --------------------------- | ----------------------------------------------------------- |
| Build analytic models       | Apama-ctrl microservice and Streaming Analytics web app |
| Develop EPL apps            | Apama-ctrl microservice and Streaming Analytics web app |
| Use smart rules             | Apama-ctrl microservice and Smartrule microservice (included in {{< product-c8y-iot >}}'s {{< standard-tenant >}}) |

See also the following sections in the *User guide*:
* [Administration > Managing web apps > Subscribed web apps](/users-guide/administration/#subscribed-applications)
* [Administration > Managing and monitoring microservices > Subscribed microservices](/users-guide/administration/#subscribed-microservices)
* [Cockpit > Smart rules](/users-guide/cockpit/#smart-rules)

If your tenant is subscribed to the Apama-ctrl-starter microservice, then the following applies:

- Limited number of at most 3 active analytic models. Custom blocks written with the Analytics Builder Block SDK cannot be used. 
- The **EPL Apps** page is not available in the Streaming Analytics web app.
- Unlimited number of smart rules.

If your tenant is subscribed to the Apama-ctrl-smartrules or Apama-ctrl-smartrulesmt microservice, the **Analytics Builder** and **EPL Apps** pages are not available in the Streaming Analytics web app.

Contact [product support](/welcome/contacting-support) to discuss adding more capabilities.