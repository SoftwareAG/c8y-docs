---
weight: 50
title: Generic media types
layout: redirect
---

### Error [application/vnd.com.nsn.cumulocity.error+json]

The error type provides further information on the reason of a failed request.

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 10%;">
<col style="width: 70%;">
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
<td align="left">error</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Error type formatted as “&lt;&lt;resource type&gt;&gt;/&lt;&lt;error name&gt;&gt;". For example, an object not found in the inventory is reported as “inventory/notFound”.</td>
</tr>
<tr>
<td align="left">message</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Short text description of the error</td>
</tr>
<tr>
<td align="left">info</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">URL to an error description on the Internet.</td>
</tr>
</tbody>
</table>

### PagingStatistics [application/vnd.com.nsn.cumulocity.pagingStatistics+json]

Paging statistics for collection resources are provided in the following format:

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 10%;">
<col style="width: 70%;">
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
<td align="left">totalPages</td>
<td align="left">int</td>
<td align="left">1</td>
<td align="left">The total number of paginated results (pages).</td>
</tr>
<tr>
<td align="left">pageSize</td>
<td align="left">int</td>
<td align="left">1</td>
<td align="left">Maximum number of records contained in this query.</td>
</tr>
<tr>
<td align="left">currentPage</td>
<td align="left">int</td>
<td align="left">1</td>
<td align="left">The current returned page within the full result set, starting at “1”.</td>
</tr>
</tbody>
</table>

> **Info:** The `totalPages` property is not returned by default in the response. To include it, add the query parameter `withTotalPages=true`.

A common case is to retrieve the total number of certain records in the tenant. To achieve this, you can set the properties `pageSize=1` and `withTotalPages=true`, then the `totalPages` property will contain the total number of records.

**Example:** Find out how many events are in the tenant.

```http
GET  /event/events/?pageSize=1&totalPages=true
Host: <TENANT_DOMAIN>
Authorization: Basic <AUTHORIZATION>
```

The `statistics` object in the response will contain the total number of events.

```json
"statistics": {
    "totalPages": 519,
    "currentPage": 1,
    "pageSize": 1
}
```
