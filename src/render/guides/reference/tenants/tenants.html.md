---
order: 10
title: Tenants
layout: redirect
---

The tenant interface consists of the following parts:

-   The Tenant collection resource - retrieves tenants, accessible by url */tenant/tenants*
-   The Tenant resource - represents an individual tenant that can be viewed, accessible by url */tenant/tenants/{tenantId}*
-   The Tenant application reference collection resource - retrieves applications, accessible by url */tenant/tenants/{tenantId}/applications*
-   The Tenant application reference resource - represents an individual application reference that can be viewed, accessible by url */tenant/tenants/{tenantId}/applications/{applicationId}*
-   The Tenant option collection resource - enables creating new option and viewing existing options, accessible by url */tenant/options*
-   The Tenant option resource - represents an individual option that can be viewed and modified, accessible by url */tenant/options/{optionCategory}/{optionKey}*
-   The Tenant usage statistics resources - return information on the request load and database usage of tenants
-   *current tenant* resource - represents user data for currently logged service user
 
> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.
