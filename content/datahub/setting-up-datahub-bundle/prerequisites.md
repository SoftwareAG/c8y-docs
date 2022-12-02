---
weight: 10
title: Prerequisites
layout: redirect
---

Before setting up {{< product-c8y-iot >}} DataHub, the following prerequisites must be checked:

The {{< product-c8y-iot >}} DataHub microservice and web app must be available as web apps on your tenant. The web app provides the user interface to configure {{< product-c8y-iot >}} DataHub and to manage offloading pipelines, while the microservice provides the corresponding backend functionality. The web app is named **DataHub**, whereas the microservice is named **Datahub**. Both web apps are deployed either as:

* Subscribed web app: the web apps were subscribed to the tenant by the management or super tenant
* Custom web app: the web apps were added to the tenant

If you have an {{< enterprise-tenant >}}, you can also subscribe your subtenants to both web apps so that the subtenants can use {{< product-c8y-iot >}} DataHub as well.

See the section [Administration > Managing web apps](/users-guide/administration/#managing-applications) in the *User guide* for details on managing {{< product-c8y-iot >}} web apps in general, including instructions for adding web apps to a tenant.

See the section [Administration > Managing and monitoring microservices](/users-guide/administration#managing-microservices) in the *User guide* for details on {{< product-c8y-iot >}} microservices, including instructions for:

* Adding microservices to a tenant
* Checking the status, permissions, and log files of a microservice

See the section [Enterprise tenant > Managing tenants](/users-guide/enterprise-tenant/#managing-tenants) in the *User guide* for details on subscribing web apps or microservices to a tenant or subtenant.

For the offloading of {{< product-c8y-iot >}} data, you need the connection settings and credentials for a cloud data lake service. During offloading, the data will be written into a data lake folder named after the tenant name.

{{< c8y-admon-info >}}
Instructions on how to configure the data lake so that it is accessible via Dremio are available in [Setting up Dremio account and data lake](/datahub/setting-up-datahub#setting-up-dremio-datalake). More details can be found in the [Dremio data source documentation](https://docs.dremio.com/data-sources/). Note that you must not create the target table, which connects to the data lake, in Dremio; this is done by {{< product-c8y-iot >}} DataHub.
{{< /c8y-admon-info >}}
