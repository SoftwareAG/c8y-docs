---
order: 30
title: Cumulocity applications
layout: redirect
---


Per default, Cumulocity comes with three major standard applications and several smaller built-in applications. Additionally, various applications are provided which you optionally may subscribe to, i.e. integrated agents for several device types.


|Application name|Description|Application type
|:---:|:---|:---|
|Cockpit|The [Cockpit](/guides/users-guide/cockpit) application provides you with options to manage and monitor Internet of Things (IoT) assets and data from a business perspective.|Standard application
|Device-management|The [Device Management](/guides/users-guide/device-management) application provides functionalities for managing and monitoring devices and enables you to control and troubleshoot devices remotely.|Standard application
|Administration|The [Administration](/guides/users-guide/administration) application enables account administrators to manage their users, roles, tenants, applications and business rules and lets them configure a number of settings for their account. |Standard application
|||
|[Cep](/guides/event-language)|Allows to simulate all aspects of IoT devices.|Built-in application
|Device-simulator|The [device simulator](/guides/users-guide/device-management#simulator) allows to simulate all aspects of IoT devices.|Built-in application
|Smartrule| Lets you use the Smart Rule engine and create [smart rules]((/guides/users-guide/cockpit#smart-rules)) to perform actions based on realtime data. |Built-in application
|Map-cluster| Allows to view devices in Cumulocity in a [map](/guides/users-guide/users-guide/device-management/#map).|Built-in application
|Tracking|Allows to [track]((/guides/users-guide/users-guide/device-management/#tracking)) movements of devices in Cumulocity.|Built-in application
|||
|actility-device-provider-agent|With the [LoRa actility agent]((/guides/users-guide/optional-services#lora)) you can interface with LoRa devices through Actility's ThingPark Wireless.|Optional service
|apama-small|Allows to define business operations for immediate processing of incoming data by using [Apama's Event Processing Language (EPL)](/guides/apama).|Optional service
|cep-small||Optional service
|feature-cep-custom-rules||Optional service
|Cloud-remote-access|The [Cloud Remote Access](/guides/users-guide/optional-services/cloud-remote-access) application implements Virtual Network Computing (VNC) to remotely access operating panels and other devices via a web browser.|Optional service
|Feature-fieldbus|[Cloud Fieldbus](/guides/users-guide/optional-services/cloud-fieldbus) allows to collect data from fieldbus devices and remotely manage them in Cumulocity.|Optional service
|Feature-microservice-hosting|Allows you to host your own microservices on top of Cumulocity.|Optional service
|Impact|With the [Nokia IMPACT agent]((/guides/users-guide/optional-services#lora)) you can interface with heterogeneous devices through the Nokia IMPACT Data Collector.|Optional service
|Lwm2m-agent|With the [LWM2M agent]((/guides/users-guide/optional-services#lora)) you can interface with LWM2M devices.|Optional service
|Vendme|Plugin which enables you to use the [Vendme](http://www.vendme.net/) service. |Optional service
|||
|c8y-branding|The [Branding](/guides/users-guide/enterprise-edition/branding) feature lets you fully customize the look of your tenants to your own preferences. |Optional service for the Enterprise Edition
|Feature-broker|[Data Broker](/guides/users-guide/enterprise-edition/data-broker) lets you share data selectively with other tenants. |Optional service for the Enterprise Edition
|Feature-user-hierarchy|With [user hierarchies](/guides/users-guide/enterprise-edition/user-hierarchies) you can reflect independent organizational entities in Cumulocity that share the same database.|Optional service for the Enterprise Edition
|Tenant-sla-monitoring| |Optional service for the Enterprise Edition


Moreover, you can add own applications to be used in your Cumulocity account. For details, refer to [Administration > Managing applications](/guides/users-guide/administration/managing-applications).

The content of the Cumulocity platform therefore is entirely dynamic and is generated based on various criteria:

* The applications that your organization has subscribed to.
* The applications that your organization has configured or developed itself for Cumulocity.
* The functionality that your user is permitted to see.
* The configuration of the user interface, such as groups and reports.