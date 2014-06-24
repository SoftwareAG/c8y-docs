---
order: 180
title: Tenants
layout: default
---

The API below is not published in "/platform" and don't have API object.

# Tenants

The Tenant interface is available consists of parts:

-   The tenant collection resource retrieves tenants, accesible by url */tenant/tenants*
-   The tenant resource represents individual tenant that can be view, accesible by url */tenant/tenants/{tenantId}*
-   The tenant application reference collection resource retrieves applications, accesible by url */tenant/tenants/{tenantId}/applications*
-   The tenant application reference resource represents individual application reference that can be view, accesible by url */tenant/tenants/{tenantId}/applications/{applicationId}*
-   The tenant option collection resource enables creating new option and viewing existing options, accesible by url */tenant/options*
-   The tenant option resource represents individual option that can be view and modified, accesible by url */tenant/options/{optionCategory}/{optionKey}*

# Tenant collection

## TenantCollection [application/vnd.com.nsn.cumulocity.tenantCollection+json]

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URI
1
Link to this resource.</td>
<td align="left">tenants
Tenant
0..n
List of Tenant, see below.</td>
<td align="left">statistics
PagingStatistics
1
Information about paging statistics.</td>
<td align="left">prev
URI
0..1
Link to a potential previous page of tenants.</td>
</tr>
</tbody>
</table>

## GET a representation of a Tenant Collection.

Response body: TenantCollection
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get tenants as sample\_tenant.

     
    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...

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

# Tenant

## Tenant [application/vnd.com.nsn.cumulocity.tenant+json]

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description
Visibility</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URI
0..1
Link to this resource.
Public</td>
<td align="left">id
String
1
Tenant id
Public</td>
<td align="left">status
String
1
Status of tenant, possible values [ACTIVE, SUSPENDED].
Private</td>
<td align="left">adminName
String
1
Administrator user name
Private</td>
<td align="left">domain
String
1
URL of tenants domain.
Public</td>
</tr>
</tbody>
</table>

## GET a representation of a Tenant.

Response body: Option
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get single tenant.

     
    GET ...
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
        "status": "ACTIVE"
    }

# Application reference collection

## ApplicationReferenceCollection [application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json].

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URI
1
Link to this resource.</td>
<td align="left">references
ApplicationReference
0..n
List of Options, see below.</td>
<td align="left">statistics
PagingStatistics
1
Information about paging statistics.</td>
<td align="left">prev
URI
0..1
Link to a potential previous page of options.</td>
</tr>
</tbody>
</table>

## GET a representation of a ApplicationReferenceCollection.

Response body: ApplicationReferenceCollection
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get Application reference collection.

     
    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Collection URL>>",
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
      "statistics" : {
        "totalPages" : 1,
        "pageSize" : 5,
        "currentPage" : 1
      },
      "next" : "...",
      "prev" : "..."
    }

# Application reference

## ApplicationReference [application/vnd.com.nsn.cumulocity.applicationReference+json].

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URI
1
Link to this resource.</td>
<td align="left">reference
Application
0..n
The Application being referenced</td>
</tr>
</tbody>
</table>

## GET a representation of a ApplicationReference.

Response body: ApplicationReference
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get options.

     
    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.applicationReference+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReference+json;ver=...
    Content-Length: ...
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
    }

# Option collection

## OptionCollection [application/vnd.com.nsn.cumulocity.optionCollection+json].

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URI
1
Link to this resource.</td>
<td align="left">options
Option
0..n
List of Options, see below.</td>
<td align="left">statistics
PagingStatistics
1
Information about paging statistics.</td>
<td align="left">prev
URI
0..1
Link to a potential previous page of options.</td>
</tr>
</tbody>
</table>

## GET a representation of a OptionCollection.

Response body: OptionCollection
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example Request: Get options.

     
    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Collection URL>>",
      "options": [
            {
                "category": "access.control",
                "key": "allow.origin",
                "self": "<<Option access.control.allow.origin URL>>",
                "value": "*"
            },
            ...
      ],
      "statistics" : {
        "totalPages" : 1,
        "pageSize" : 5,
        "currentPage" : 1
      },
      "next" : "...",
      "prev" : "..."
    }

## POST a representation of a Option.

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN

Example Request: Post option.

     
    POST ...
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "category" : "alarm.type.mapping",
        "key": "temp_too_high",
        "value": "CRITICAL|temperature too high"
    }

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Content-Length: ...
    {
        "self" : "<<Option alarm.type.mapping.temp_too_high URL>>"
        "category" : "alarm.type.mapping",
        "key": "temp_too_high",
        "value": "CRITICAL|temperature too high"
    }

# Option

Options are category-key-value tuples, storing tenant configuration. Some categories of options allow creation of new one, other are limited to predefined set of keys.

## Available Options

Category

Key

Default value

Only predefined

Description

access.control

allow.origin

\*

yes

Comma separated list of domains allowed for execution of CORS. Wildcards are allowed (e.g. \*.cumuclocity.com)

alarm.type.mapping

\<\<alarm type\>\>

no

\<\<alarm severity\>\>|\<\<alarm text\>\> - severity and text overwriting original alarm severity and text for given alarm type; if severity or text is empty - value will not be overwritten. If severity is "NONE" - alarm will be suppressed.

## Option [application/vnd.com.nsn.cumulocity.option+json]

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URI
0..1
Link to this resource.</td>
<td align="left">category
String
1
Category of option</td>
<td align="left">key
String
1
Key of option</td>
<td align="left">value
String
1
Value of option</td>
</tr>
</tbody>
</table>

## GET a representation of a Option.

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ
 Example Request: Get single option.

     
    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...
    Content-Length: ...
    {
        "category": "access.control",
        "key": "allow.origin",
        "self": "<<Option access.control.allow.origin URL>>",
        "value": "*"
    }

## PUT - Update a Option.

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN
 Example Request: Update access.control.allow.origin option.

     
    PUT ...
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "value": "http://developer.cumulocity.com"
    }

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Content-Length: ...
    {
        "category": "access.control",
        "key": "allow.origin",
        "self": "<<Option access.control.allow.origin URL>>",
        "value": "http://developer.cumulocity.com"
    }
