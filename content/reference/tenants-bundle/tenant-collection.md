---
weight: 20
title: Tenant collection
layout: redirect
---

### TenantCollection [application/vnd.com.nsn.cumulocity.tenantCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|tenants|array|0..n|List of tenants, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of tenants.|
|next|string|0..1|A URI linking to a potential next page of tenants.|

### GET a representation of a Tenant Collection.

Response body: TenantCollection

Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get tenants as sample\_tenant.


    GET /tenant/tenants
    Host: ...
    Authorization: Basic ...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenantcollection+json;ver=...
    Content-Length: ...
    {
        "statistics": {
            "currentPage": 1,
            "pageSize": 5,
            "totalPages": 1
        },
        "self": "<<Collection URL>>",
        "tenants": [
            {
                "adminName": "admin",
				"allowCreateTenants": false,
				"storageLimitPerDevice": 10485760,
                "applications": {
                    "references": [],
                    "self":"<<ApplicationCollection of This Tenant  URL>>",
                },
                "company": "sample_company",
                "domain": "sample_domain.com",
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
            },
            {
                "applications": {
                    "references": [],
                    "self": "<<ApplicationCollection of This Tenant URL>>",
                },
                "company": "sample_company",
                "domain": "sample_domain.com",
                "id": "next_sample_tenant",
                "ownedApplications": {
                    "references": [
                        {
                            "application": {
                                "availability": "MARKET",
                                "id": "6",
                                "key": "<<hashed value>>",
                                "name": "market_application",
                                "owner": {
                                    "self":"<<Application Owner Tenant URL>>",
                                    "tenant": {
                                        "id": "next_sample_tenant"
                                    }
                                },
                                "self":"<<Application 6 URL>>",
                                "type": "EXTERNAL"
                            },
                            "self":"<<This Tenant Application 6 URL>>",
                        }
                    ],
                    "self":"<<ApplicationCollection of This Tenant URL>>",
                },
                "self":"<<This Tenant URL>>",
            },
            ...
        ]
    }

### POST - Create a new Tenant

Request body: Tenant

Response body: Tenant

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN or ROLE\_TENANT\_MANAGEMENT\_CREATE

Example request:

	POST /tenant/tenants
	Host: ...
	Authorization: Basic ...
	Content-Length: ...
	Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver...

	{
		"id" : "sample_tenant",
		"company" : "sample_company",
		"domain" : "sample_domain.com",
		"contactName" : "Mr. Doe",
		"contactPhone" : "0123-4567829",
		"adminEmail" : "john.doe@sample_domain.com",
		"adminName" : "firstAdmin",
		"adminPass" : "myPassword",
		"customProperties" : {"referenceId":"1234567890"},
		"sendPasswordResetEmail": true
	}

Example Response:


	HTTP/1.1 201 Created
	Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
	Content-Length: ...
	Location: <<URL of new tenant>>

	{
		"id" : "sample_tenant",
		"allowCreateTenants": false,
		"self" : "<<URL of new tenant>>",
		"company" : "sample_company",
		"domain" : "tenant_nsn.com",
		"contactName" : "Mr. Doe",
		"contactPhone" : "0123-4567829",
		"status" : "ACTIVE",
		"adminName" : "firstAdmin",
		"parent": "parentTenant",
		"customProperties" : {"referenceId":"1234567890"}
	}

The following table lists the fields of a tenant creation requests, along with their length constraints. The fragments ```domain``` and  ```company``` always have to be provided.

|Field|Description|Max. Length|Required|
|:----|:---|:---|:---|
|company|Company name|256|Yes
|domain|Domain name to be used for the tenant|256|Yes
|id|The tenant ID. Will be auto-generated if not present.|32|No
|adminName|Username of the tenant administrator|50|No
|adminPass|Password of the tenant administrator|32|No
|adminEmail|Email address of the administrator|254|No
|contactName|A contact name, for example an administrator, of the tenant|No
|contact_phone|20|An international contact phone number|No
|customProperties||A set of custom properties of the agent|No

The naming convention for tenant ID is:

- only lowercase letters, digits, hyphen and underscore is allowed
- MUST start with a letter
- hyphen and underscore are only allowed in the middle
- MUST have a minimum length of two characters
