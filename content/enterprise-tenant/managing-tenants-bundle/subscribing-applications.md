---
weight: 20
title: Subscribing applications
layout: redirect
---


In the **Applications** tab you can view all subscribed applications, subscribe tenants to applications or remove the applications from the tenant. By default, tenants will be subscribed to the standard {{< product-c8y-iot >}} applications.

<img src="/images/users-guide/enterprise-tenant/et-subtenant-applications.png" alt="Subscribe tenant" style="max-width: 100%">

### To subscribe an application {#to-subscribe-an-application}

Hover over the application under **Available applications** at the right and click **Subscribe** on the desired application.

### To unsubscribe an application {#to-unsubscribe-an-application}

Hover over the application under **Subscribed applications** at the left and click **Unsubscribe**.

### To monitor microservices {#to-monitor-microservices}

For all applications hosted as microservices by {{< product-c8y-iot >}} the status of the microservice is indicated next to its name by symbols and may be in one of the following states:

* <img src="/images/icons/ok.png" alt="Up" style="max-width: 100%; display: inline-block;"> Microservice is up and running
* <img src="/images/icons/warning.png" alt="Unhealthy" style="max-width: 100%; display: inline-block;">&nbsp; Microservice is unhealthy
* <img src="/images/icons/danger.png" alt="Down" style="max-width: 100%; display: inline-block;"> Microservice is down

You may view details on their status by expanding the respective entry.

<img src="/images/users-guide/enterprise-tenant/et-application-details.png" alt="Application details">

The following information is provided:

* Active - the number of active microservice instances
* Unhealthy - the number of inactive microservice instances
* Desired - the number of desired microservice instances
* Name - microservice instance name
* Restarts - the number of microservice instance restarts.

{{< c8y-admon-info >}}
Information on the microservice instance name and the number of restarts is displayed in case of at least one restart.
{{< /c8y-admon-info >}}

Further details are provided on the **Status** tab of the respective application, see [Managing applications](/standard-tenant/ecosystem/#managing-applications).
