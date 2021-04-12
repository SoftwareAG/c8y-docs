---
weight: 10
title: Prerequisites
layout: redirect
---

Before setting up DataHub, the following prerequisites need to be checked:

The DataHub microservice and web application must be available as applications on your tenant. The web application provides the user interface to configure DataHub and to manage offloading pipelines, while the microservice provides the actual backend implementation for this functionality. The web application is named **DataHub**, whereas the microservice is named **Datahub**. Both applications are deployed either as:

* Subscribed application: the applications were subscribed to the tenant by the management or super tenant
* Own application: the applications were added to the tenant

If you have an enterprise tenant, you can also subscribe your subtenants to both applications so that the subtenants can use DataHub as well.

See section [Managing applications](/users-guide/administration#managing-applications) for details on managing Cumulocity IoT applications in general, including instructions for:

* Adding applications to a tenant
* Subscribing applications to a tenant and its subtenants
* Checking the status and log files of a microservice

For the offloading, you need the connection settings and credentials for a cloud data lake service. During offloading, the data will be written into a data lake folder named after the tenant name.

>**Info**: Instructions on how to configure the data lake so that it is accessible via Dremio are available in [Setting up Dremio account and data lake](/datahub/setting-up-datahub#setting-up-dremio-datalake). More details can be found in the [Dremio data source documentation](https://docs.dremio.com/data-sources/). Note that you must not create the target table in Dremio connecting to the data lake; this is done by DataHub.