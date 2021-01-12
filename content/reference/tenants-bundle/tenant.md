---
weight: 30
title: Tenant
layout: redirect
---

### Tenant [application/vnd.com.nsn.cumulocity.tenant+json]

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 30%;">
<col style="width: 20%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
<th align="left">Visibility</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">A URI linking to this resource.</td>
<td align="left">Public</td>
</tr>
<tr>
<td align="left">id</td>
<td align="left">string: max length="32”</td>
<td align="left">1</td>
<td align="left">Unique identifier of the tenant.</td>
<td align="left">Public</td>
</tr>
<tr>
<td align="left">status</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Status of the tenant. Possible values: ACTIVE, SUSPENDED</td>
<td align="left">Private</td>
</tr>
<tr>
<td align="left">adminName</td>
<td align="left">string: max length = “50”</td>
<td align="left">1</td>
<td align="left">Administrator user name. Whitespaces, slashes, +$: characters not allowed.</td>
<td align="left">Private</td>
</tr>
<tr>
<td align="left">adminEmail</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Administrator Email.</td>
<td align="left">Private</td>
</tr>
<tr>
<td align="left">allowCreateTenants</td>
<td align="left">boolean</td>
<td align="left">1</td>
<td align="left">Can this tenant create its own tenants.</td>
<td align="left">Private</td>
</tr>
<tr>
<td align="left">storageLimitPerDevice</td>
<td align="left">int</td>
<td align="left">1</td>
<td align="left">Storage quota per device the user has.</td>
<td align="left">Private</td>
</tr>
<tr>
<td align="left">adminPassword</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Administrator Password.</td>
<td align="left">Private</td>
</tr>
<tr>
<td align="left">sendPasswordResetEmail</td>
<td align="left">boolean</td>
<td align="left">1</td>
<td align="left">Enable password reset.</td>
<td align="left">Private</td>
</tr>
<tr>
<td align="left">domain</td>
<td align="left">string: max length = “256”</td>
<td align="left">1</td>
<td align="left">URL of tenants domain.</td>
<td align="left">Public</td>
</tr>
<tr>
<td align="left">company</td>
<td align="left">string: max length = “256”</td>
<td align="left">1</td>
<td align="left">Tenants company name.</td>
<td align="left">Public</td>
</tr>
<tr>
<td align="left">contactName</td>
<td align="left">string: max length = “30”</td>
<td align="left">1</td>
<td align="left">Contact person name.</td>
<td align="left">Public</td>
</tr>
<tr>
<td align="left">contactPhone</td>
<td align="left">string: max length= “20”</td>
<td align="left">1</td>
<td align="left">Contact person phone number.</td>
<td align="left">Public</td>
</tr>
<tr>
<td align="left">applications</td>
<td align="left">ApplicationReferenceCollection</td>
<td align="left">1</td>
<td align="left">Collection of tenant subscribed, applications.</td>
<td align="left">Private</td>
</tr>
<tr>
<td align="left">ownedApplications</td>
<td align="left">ApplicationReferenceCollection</td>
<td align="left">1</td>
<td align="left">Collection of tenant owned, applications.</td>
<td align="left">Public - only applications with availability MARKET</td>
</tr>
<tr>
<td align="left">customProperties</td>
<td align="left">Object</td>
<td align="left">1</td>
<td align="left">Keeps a list of custom properties.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">parent</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Name of parent tenant, the creator of this tenant.</td>
<td align="left">Public</td>
</tr>
</tbody>
</table>

### <a name="current-tenant"></a>Current tenant

Content-Type: application/vnd.com.nsn.cumulocity.currenttenant+json

|Field Name|Type|Occurs|Description|
|:---------|:---|:-----|:----------|
|name|string|1|Tenant.|
|domainName|string|1|Domain name.|
|allowCreateTenants|boolean|1|Flag indicating if a tenant can create subtenants.|

#### GET the current tenant details

Request for the currently logged service user's tenant.

Required role: ROLE&#95;USER&#95;MANAGEMENT&#95;OWN&#95;READ, or ROLE&#95;SYSTEM

ResponseBody: CurrentTenant

```http
GET /tenant/currentTenant
Host: [hostname]
Authorization: Basic xxxxxxxxxxxxxxxxxxx
Content-Type: application/vnd.com.nsn.cumulocity.currenttenant+json;;ver=...
```

Example response:

```json
{
    "allowCreateTenants": true,
    "customProperties": {},
    "domainName": "...",
    "name": "..."  
}
```

Note that in this case the response property `"name"` is the actual tenant ID.

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


### DELETE a representation of a Tenant.

>**Important**: Deleting a subtenant cannot be reverted. For security reasons, it is therefore only available in the management tenant. You cannot delete tenants from any tenant but the management tenant.
>
>Administrators in Enterprise Tenants are only allowed to suspend active subtenants, but not to delete them.
>
>The deletion of tenants is an asynchronous operation. After the request has been executed, the tenant will be marked as DELETE and will be SUSPENDED. The deletion will be executed in the background.

Request body: N/A

Response body: N/A

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN

Example request:

	DELETE /tenant/tenants/<<tenantId>>
	Host: [hostname]
	Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

	HTTP/1.1  204 NO CONTENT
