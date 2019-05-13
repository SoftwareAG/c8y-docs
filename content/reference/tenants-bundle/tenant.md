---
weight: 30
title: Tenant
layout: redirect
---

### Tenant [application/vnd.com.nsn.cumulocity.tenant+json]

|Name|Type|Occurs|Description|Visibility|
|:---|:---|:-----|:----------|:---------|
|self|URI|0..1|Link to this resource.|Public|
|id|String: max length="32"|1|Unique identifier of the tenant |Public|
|status|String|1|Status of the tenant, possible values [ACTIVE, SUSPENDED].|Private|
|adminName|String: max length = "50"|1|Administrator user name. Whitespaces, slashes, +$: characters not allowed|Private|
|adminEmail|String|1|Administrator Email|Private|
|allowCreateTenants|boolean|1|Can this tenant create its own tenants.|Private|
|storageLimitPerDevice|number|1|Storage quota per device the user has.|Private|
|adminPassword|String|1|Administrator Password|Private|
|sendPasswordResetEmail|boolean|1|Enable password reset|Private|
|domain|String: max length = "256"|1|URL of tenants domain.|Public|
|company|String: max length = "256"|1|Tenants company name.|Public|
|contactName|String: max length = "30"|1|Contact person name.|Public|
|contactPhone|String: max length= "20"|1|Contact person phone number.|Public|
|applications|ApplicationReferenceCollection|1|Collection of tenant subscribed, applications.|Private|
|ownedApplications|ApplicationReferenceCollection|1|Collection of tenant owned, applications.|Public - only applications with availability MARKET|,
|customProperties|Object|1|Keeps a list of custom properties|optional|
|parent|String|1|Name of parent tenant, the creator of this tenant.|Public|

### GET a representation of a Tenant.

Response body: Tenant

Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get single tenant.


    GET /tenant/tenants/<<tenantId>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.tenant+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    Content-Length: ...
    {
        "adminName": "admin",
        "applications": {
            "references": [],
            "self":"<<ApplicationCollection of This Tenant  URL>>",
        },
        "company": "sample_company",
        "domain": "sample_domain.com",
		"allowCreateTenants": false,
		"storageLimitPerDevice": 10485760,
        "id": "sample_tenant",
        "ownedApplications": {
            "references": [
                {
                    "application": {
                        "availability": "PRIVATE",
                        "id": "5",
                        "key": "<<hashed value>>",
                        "name": "sample_private_application",
                        "owner": {
                            "self":"<<Application Owner Tenant URL>>",
                            "tenant": {
                                "id": "sample_tenant"
                            }
                        },
                        "self":"<<Application 5 URL>>",
                        "type": "EXTERNAL"
                    },
                    "self":"<<This Tenant Application 5 URL>>",
                },
               ...
            ],
            "self":"<<ApplicationCollection of This Tenant URL>>",
        },
        "self":"<<This Tenant URL>>",
	"parent": "parentTenant",
        "status": "ACTIVE"
    }

### PUT - Update an existing tenant.

Request body: Tenant

Response body: Tenant

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN or ROLE\_TENANT\_MANAGEMENT\_UPDATE

Example Request :

    PUT /tenant/tenants/<<tenantId>>
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Accept: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...

    {
       "adminName" : "newAdmin"
    }

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    Content-Length: ...
    {
    	 "id": "sample_tenant",
    	 "self":"<<ApplicationCollection of This Tenant URL>>",
        "company": "sample_company",
        "domain": "sample_domain.com",
        "status": "ACTIVE",
        "self":"<<This Tenant URL>>",
		"allowCreateTenants": false,
		"storageLimitPerDevice": 10485760,
		"parent": "parentTenant",
        "ownedApplications": {
            "references": [
                {
                    "application": {
                        "availability": "PRIVATE",
                        "id": "5",
                        "key": "<<hashed value>>",
                        "name": "sample_private_application",
                        "owner": {
                            "self":"<<Application Owner Tenant URL>>",
                            "tenant": {
                                "id": "sample_tenant"
                            }
                        },
                        "self":"<<Application 5 URL>>",
                        "type": "EXTERNAL"
                    },
                    "self":"<<This Tenant Application 5 URL>>",
                },
               ...
            ],
        },
      "adminName" : "newAdmin"
    }

Note that updating adminPass and adminEmail updates these settings in the admin user of the tenant. Updating adminName has no effect.


### DELETE  a representation of a Tenant.

Response body: N/A

Response body: N/A

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN

Example request:

	DELETE /tenant/tenants/<<tenantId>>
	Host: [hostname]
	Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

	HTTP/1.1  204 NO CONTENT
