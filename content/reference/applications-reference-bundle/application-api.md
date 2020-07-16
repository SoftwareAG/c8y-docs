---
weight: 10
title: Application API
layout: redirect
---

### ApplicationAPI [application/vnd.com.nsn.cumulocity.applicationApi+json]

<div class="table-responsive"><table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URL linking to this resource.</td>
</tr>
<tr>
<td align="left">applicationById</td>
<td align="left">Application/URI-Template</td>
<td align="left">1</td>
<td align="left">A reference to a resource of type Application (placeholder {id}).</td>
</tr>
<tr>
<td align="left">applications</td>
<td align="left">ApplicationCollection</td>
<td align="left">1</td>
<td align="left">Collection of all applications.</td>
</tr>
<tr>
<td align="left">applicationsByName</td>
<td align="left">ApplicationCollection URI-Template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all applications with a particular name (placeholder {name}).</td>
</tr>
<tr>
<td align="left">applicationsByTenant</td>
<td align="left">ApplicationCollection URI-Template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all&nbsp;applications subscribed by a particular tenant (placeholder {tenant}).</td>
</tr>
<tr>
<td align="left">applicationsByOwner</td>
<td align="left">ApplicationCollection URI-Template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all&nbsp;applications owned by a particular tenant (placeholder {tenant}).</td>
</tr>
</tbody>
</table></div>


### GET the Application API resource

Response body: ApplicationApi

Required role: ROLE\_Application\_READ

Example request:

```http
GET /application
Host: ...
Authorization: Basic ...
```

Example response:

```http
HTTP/1.1 200 OK
Content-Type: application/vnd.com.nsn.cumulocity.applicationapi+json;ver=...
Content-Length: ...
{
    "self" : "<<ApplicationAPI URL>>",
    "applicationsByID" : "<<ApplicationCollection URL>>/{id}",
    "applications" : "<<ApplicationCollection URL>>",
    "applicationsByName" : "<<ApplicationAPI URL>>/applicationByName/{name}",
    "applicationsByOwner" : "<<ApplicationAPI URL>>/applicationsByOwner/{tenantID}",
    "applicationsByTenant" : "<<ApplicationAPI URL>>/applicationsByTenant/{tenantID}"
}
```

Refer to [Tenants > Current tenant](/reference/tenants#current-tenant) in the Reference guide for details on how to get the tenant ID.
