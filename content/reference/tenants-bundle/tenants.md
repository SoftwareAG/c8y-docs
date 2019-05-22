---
weight: 10
title: Tenants
layout: redirect
---

The tenant interface consists of the following parts:

Resource  |  Description
------|-------------
Collection resource  |  Retrieves tenants <br>Accessible by url <kbd>/tenant/tenants</kbd>
Resource  |  Represents an individual tenant that can be viewed <br>Accessible by url <kbd>/tenant/tenants/&lt;tenantId></kbd>
Application reference collection resource  |  Retrieves applications <br>Accessible by url <kbd>/tenant/tenants/&lt;tenantId>/applications</kbd>
Application reference resource  |  Represents an individual application reference that can be viewed <br>Accessible by url <kbd>/tenant/tenants/&lt;tenantId>/applications/&lt;applicationId></kbd>
Option collection resource  |  Enables creating new options and viewing existing ones <br>Accessible by url <kbd>/tenant/options</kbd>
Option resource  |  Represents an individual option that can be viewed and modified <br>Accessible by url <kbd>/tenant/options/&lt;optionCategory>/&lt;optionKey></kbd>
Usage statistics resources  |  Returns information on the request load and database usage of tenants
Current tenant resource  |  Represents user data for the current logged service user

> **Important**: For all PUT/POST requests, the "Accept" header shall be provided, otherwise an empty response body will be returned.

### <a name="tenant-id-and-domain"></a> Tenant ID and tenant domain

The tenant ID is a unique identifier across all tenants, e.g. t07007007, and it cannot be changed after tenant creation. It is recommended to use auto-generated tenant IDs.

The location where a tenant can be accessed is called tenant domain, e.g. _mytenant.cumulocity.com_. It needs to be unique across all tenants and it can be changed after tenant creation.

In general, the tenant domain should be used if it is known. With a unique tenant domain, the authentication can be done using the username and password.

Using the tenant ID as part of the domain makes no difference compared to using the base domain name as you always need to provide the tenant ID as part of the authentication: tenantID/username:password. For example, if you use _t07007007.cumulocity.com_, you will not be able to login with just username and password; ergo your tenant ID must be provided: t07007007/username:password. When you use e.g. _mytenant.cumulocity.com_, you can login using just with username and password.
