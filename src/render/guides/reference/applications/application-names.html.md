---
order: 6
title: Application names
layout: redirect
---

For each tenant, Cumulocity manages the subscribed applications. Cumulocity provides a number of applications of various types. 

These are listed in the following table. The columns show the following information:

* **Application**: Application name as visible in the Administration application.
* **Functionality**: Brief description.
* **String**: Identification of the application in the API. In case you want to subscribe a tenant to the application using an API (as described on this page), use this string in the argument (as name)
* **Application type**: Technical type of the application. "Feature" refers to built-in applications subscriptions, i.e. these applications are not represented by an explicit artefact (microservice or web application).
* **Availablity**: Only applications indicated as "Standard Edition" are available in all installations. Applications of type "microservice" or "web application" indicated as "Optional service" require that the related artefact is installed for the respective Cumulocity instance. The same applies to applications listed as "Enterprise Edition".


|Application|Functionality|String|Application type|Availability
|:---:|:---|:---|:---|:---
|[LoRa Actility](/guides/users-guide/optional-services#lora)|Interface with LoRa devices through Actility's ThingPark Wireless.|actility-device-provider-agent|Microservice|Optional service
|[Administration](/guides/users-guide/administration)|Lets account administrators manage users, roles, tenants and applications.|administration|Web application| Standard Edition
|[Apama](/guides/apama)|Define business operations for immediate processing of incoming data by using Apama's Event Processing Language (EPL). This is a per-tenant deployment.|apama-small|Microservice|Optional service
|[Branding](/guides/users-guide/enterprise-edition/branding)|Customize the look of your tenants to your own preferences.|c8y-branding|Microservice|Enterprise Edition
|[Cep](/guides/event-language)|Define business operations based on realtime data by using the Esper CEP engine. This CEP variant uses a shared instance for multiple tenants. See "Cep-small" for a per-tenant approach. |cep|Microservice| Standard Edition
|[CEP custom rules](/guides/event-language)|Upload your own CEP rules created with Esper in a per-tenant deployment. You need to be subscribed to the application "Cep-small" to be able to use this feature.|feature-cep-custom-rules|Feature|Optional service
|[Cep-small](/guides/event-language)|CEP variant. Lets you work with CEP rules based on Esper in a per-tenant deployment (as opposed to "Cep" which uses a shared instance). You need to be subscribed to "CEP custom rules" to upload your own Esper CEP rules. |cep-small|Microservice|Optional service
|[Cockpit](/guides/users-guide/cockpit)|Manage and monitor IoT assets and data from a business perspective.|cockpit|Web application| Standard Edition
|[Cloud Remote Access](/guides/users-guide/optional-services/cloud-remote-access)|Implements Virtual Network Computing (VNC) to remotely access operating panels and other devices via a web browser.|cloud-remote-access|Mircoservice|Optional service
|[Data Broker](/guides/users-guide/enterprise-edition/data-broker)|Lets you share data selectively with other tenants. |feature-broker|Feature|Enterprise Edition
|[Device Management](/guides/users-guide/device-management)| Manage and monitor devices, and control and troubleshoot devices remotely.|devicemanagement|Web application| Standard Edition
|[Device simulator](/guides/users-guide/device-management#simulator)|Simulate all aspects of IoT devices.|device-simulator|Microservice| Standard Edition
|[Cloud Fieldbus](/guides/users-guide/optional-services/cloud-fieldbus)|Collect data from fieldbus devices and remotely manage them in Cumulocity.|feature-fieldbus4|Feature|Optional service
|[LWM2M agent](/guides/users-guide/optional-services#lwm2m)|Interface with LWM2M devices.|lwm2m-agent|Microservice|Optional service
|Microservice hosting|Host your own microservices on top of Cumulocity.|feature-microservice-hosting|Feature|Optional service
|[Nokia IMPACT agent](/guides/users-guide/optional-services#nokia-impact)|With the [Nokia IMPACT agent](/guides/users-guide/optional-services#nokia-impact) you can interface with heterogeneous devices through the Nokia IMPACT Data Collector.|impact|Microservice|Optional service
|Smart Rules| Use the Smart Rule engine and create [smart rules](/guides/users-guide/cockpit#smart-rules) to perform actions based on realtime data. Requires one of the following applications: Cep, Apama|smartrule|Microservice| Standard Edition
|[SSL management](/guides/users-guide/enterprise-edition/customization)|Activate your own custom domain name by using a SSL certificate.|ssl-management|Microservice|Enterprise Edition
|[Tenant SLA Monitoring](/guides/users-guide/optional-services/tenant-sla-monitoring)|Lets service providers monitor the availability and response time of tenants and sub-tenants.|tenant-sla-monitoring|Microservice|Optional service
|[User hierarchies](/guides/users-guide/enterprise-edition/user-hierarchies)|Reflect independent organizational entities in Cumulocity that share the same database.|feature-user-hierarchy|Feature|Enterprise Edition