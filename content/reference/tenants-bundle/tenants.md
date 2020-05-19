---
weight: 10
title: Tenants
layout: redirect
---

The tenant interface consists of the following parts:

Resource  |  Description
------|-------------
Tenant collection |  Retrieves tenants <br>Accessible by URL <kbd>/tenant/tenants</kbd>
Tenant  |  Represents an individual tenant that can be viewed <br>Accessible by URL <kbd>/tenant/tenants/&lt;tenantId></kbd>
Application reference collection  |  Retrieves applications <br>Accessible by URL <kbd>/tenant/tenants/&lt;tenantId>/applications</kbd>
Application reference  |  Represents an individual application reference that can be viewed <br>Accessible by URL <kbd>/tenant/tenants/&lt;tenantId>/applications/&lt;applicationId></kbd>
Option collection  |  Enables creating new options and viewing existing ones <br>Accessible by URL <kbd>/tenant/options</kbd>
Option  |  Represents an individual option that can be viewed and modified <br>Accessible by URL <kbd>/tenant/options/&lt;optionCategory>/&lt;optionKey></kbd>
Usage statistics  |  Returns information on the request load and database usage of tenants
Current tenant  |  Represents user data for the current logged service user
Trusted certificates  |  Represents certificates which the tenant trusts <br>Accessible by URL <kbd>/tenant/tenants/&lt;tenantId>/trusted-certificates</kbd>

> **Important**: For all PUT/POST requests, the "Accept" header shall be provided, otherwise an empty response body will be returned.

### <a name="tenant-id-and-domain"></a> Tenant ID and tenant domain

The **tenant ID** is a unique identifier across all tenants in Cumulocity IoT, e.g. t07007007. It cannot be changed after tenant creation.

It is recommended to use auto-generated tenant IDs, which follow the format `t<number>`, for all tenant types.

The location where a tenant can be accessed is called **tenant domain**, e.g. _mytenant.cumulocity.com_. It needs to be unique across all tenants and it can be changed after tenant creation.

The tenant domain may contain lowercase letters, digits or hyphens. It must start with a letter; hyphens are only allowed in the middle; minimum is 2 characters. Note that the usage of underscore characters is deprecated but still possible for backward compatibility reasons.

In general, the tenant domain should be used for communication if it is known.

>**Important**: For support user access, the tenant ID must be used and not the tenant domain. 

See [Tenant > Current tenant](/reference/tenants#current-tenant) for information on how to retrieve the tenant ID and domain of the current tenant via the API.

In the UI, the tenant ID is displayed in the user dropdown menu, see [Getting started > User options and settings](/users-guide/getting-started/#user-settings) in the User guide.

