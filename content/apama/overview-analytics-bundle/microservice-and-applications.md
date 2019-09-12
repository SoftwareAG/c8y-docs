---
weight: 40
title: Microservice runtime and applications
layout: redirect
---
Custom Apama applications (individual \*.mon files), Apama Analytics Builder models and Smart Rules are executed in an Apama-ctrl microservice. This has a per-tenant isolation scope, that is, each subscribed tenant has an own instance of an Apama container with dedicated resources (that is, memory and CPU usage). The container is isolated from other tenants, hence high CPU load or memory issues on other containers are tracked and resourced independently.

You can use predefined rules (see [Smart Rules](/guides/users-guide/cockpit/#smart-rules)), define your own custom rules with Apama EPL Apps, or use Apama Analytics Builder to build analytic models. This requires the following microservices and/or applications:

| To do this                  | you need the following                                       |
| --------------------------- | ------------------------------------------------------------ |
| Use predefined rules        | Apama-ctrl microservice and Smartrule microservice (included in Cumulocity IoT's Standard Tenant). |
| Define custom rules         | Apama-ctrl microservice and Apama EPL Apps web application.  |
| Use Apama Analytics Builder | Apama-ctrl microservice and Apama Analytics Builder web application. |

