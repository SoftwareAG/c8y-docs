---
weight: 20
title: Tenant collection
layout: redirect
---

### TenantCollection [application/vnd.com.nsn.cumulocity.tenantCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|tenants|Tenant|0..n|List of tenants, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of tenants.|
|next|URI|0..1|Link to a potential next page of tenants.|

### GET a representation of a Tenant Collection.

Response body: TenantCollection
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get tenants as sample\_tenant.

     
    GET /tenant/tenants
    Host: ...
    Authorization: Basic ...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenantCollection+json;ver=...
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
		"adminEmail" : "john.doe@sample_domain.com",
		"customProperties" : {"referenceId":"1234567890"}
	}

In the following table you can see the restrictions for each field:

|Field|Type|
|:----|:---|
|id|VARCHAR(32)|
|company_name|VARCHAR(256)|
|domain_name|VARCHAR(256)|
|contact_name|VARCHAR(30)|
|contact_phone|VARCHAR(20)|
|administrator|VARCHAR(50)|

Naming convention for tenant id is:
- only lowercase letters, digits, hyphen and underscore is allowed
- MUST start with a letter
- hyphen and underscore are only allowed in the middle
- MUST have a minimum length of two characters

> Note: creating a tenant with adminName, adminPass and adminEmail, creates an admin user with these settings.
For the tenant id SQL keywords (e.g., select, cross, where) are not allowed. 
