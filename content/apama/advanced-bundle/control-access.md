---
weight: 70
title: Controlling access to the Streaming Analytics application
layout: redirect
---

By default, the Streaming Analytics application gives you access to the Analytics Builder and EPL Apps pages.
Administrators may wish to control which of these are shown on different tenants or for different users,
or modify the wording of the cards on the home screen (see also [Customizing the home screen of the Streaming Analytics application](/apama/advanced/#customize-home-screen)).

Which pages are available also depends on the variant of the Apama-ctrl microservice that is running.

- If the microservice is not running, an error message is shown indicating that the microservice cannot be accessed,
and only a card with information about smart rules is shown.
- If the Apama Starter microservice is running, the EPL Apps card is not shown (and cannot be enabled)
as the EPL apps functionality is not available in Apama Starter.
- If the Apama Smart Rules-only microservice is running, neither the EPL Apps card nor the Analytics Builder card is shown (and cannot be enabled).
In this case, only the card with information about the smart rules is shown.
- For other variants of the Apama-ctrl microservice, both the Analytics Builder and EPL Apps cards are shown by default.

For an entire tenant, if a "feature application" named `feature-disable-analyticsbuilder` and/or `feature-disable-eplapps` is
available within the tenant, then the relevant part is disabled. This can be done either within a tenant or by an Enterprise or Management tenant
(see also [Enterprise tenant > Managing tenants](/users-guide/enterprise-edition/#managing-tenants) in the *User guide*)
and then subscribing to subtenants (the subtenant administrators are then not able to unsubscribe this application if the parent tenant wishes
to restrict access to the functionality). To create such a "feature application" within a tenant, send a POST request to `/application/applications`
(as an administrator with the permission to create applications). For example, to disable Analytics Builder:

```
{
   "name":"feature-disable-analyticsbuilder",
   "contextPath": "feature-disable-analyticsbuilder",
   "type":"HOSTED",
   "resourcesUrl":"/",
   "manifest": {
       "noAppSwitcher": true
   },
   "key":"feature-disable-analyticsbuilder-key"
}
```

Or to disable EPL Apps:

```
{
   "name":"feature-disable-eplapps",
   "contextPath": "feature-disable-eplapps",
   "type":"HOSTED",
   "resourcesUrl":"/",
   "manifest": {
       "noAppSwitcher": true
   },
   "key":"feature-disable-eplapps-key"
}
```

You can also send the POST request using a curl command, for example, to disable Analytics Builder:

```
curl --user username -X POST -H 'Content-Type: application/json' -d '{"name":"feature-disable-analyticsbuilder", "contextPath": "feature-disable-analyticsbuilder", "type":"HOSTED", "resourcesUrl":"/","manifest": {"noAppSwitcher": true},"key":"feature-disable-analyticsbuilder-key"}' -k https://{{hostname}}/application/applications/
```

Or to disable EPL Apps:
```
curl --user username -X POST -H 'Content-Type: application/json' -d '{"name":"feature-disable-eplapps", "contextPath": "feature-disable-eplapps", "type":"HOSTED", "resourcesUrl":"/", "manifest": {"noAppSwitcher": true},"key":"feature-disable-eplapps-key"}' -k https://{{hostname}}/application/applications/
```

By default, all users can see the same set of pages (according to the limitations above).
You can also restrict the visibility of the pages to only users who have the permission ROLE_ANALYTICSBUILDER_READ or ROLE_EPLAPPS_READ,
which can be assigned directly to users or via groups (see also [Administration > Managing permissions](/users-guide/administration/#managing-permissions) in the *User guide*).
To enable this, set the category of the tenant option to `streaminganalytics` and the `applicationAccess` key to the value "role"
(also see the [Tenant API](https://cumulocity.com/api/#tag/Tenant-API) in the Cumulocity IoT OpenAPI Specification) or use a curl command as given in the example below:

```
curl --user username -X POST -H 'Content-Type: application/json' -d '{"category": "streaminganalytics", "key": "applicationAccess", "value": "role"}' -k https://mytenant/tenant/options
```

where you have to replace the username with the name of a user who has ADMIN permission for "Option management".

Note that this only affects the visibility of the cards and pages in the Streaming Analytics application.
The [supported REST services](/apama/analytics-introduction/#supported-rest-services) only require READ and ADMIN permissions for "CEP management".
