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
<tr>
<td align="left">details</td>
<td align="left">Error details</td>
<td align="left">1</td>
<td align="left">Error details. Only available in DEBUG mode.</td>
</tr>
</tbody>
</table>

Error details are provided in the following structure:

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
<td align="left">expectionClass</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Class name of an exception that caused this error.</td>
</tr>
<tr>
<td align="left">exceptionMessage</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Exception message content.</td>
</tr>
<tr>
<td align="left">expectionStackTrace</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Strack trace of the exception.</td>
</tr>
<tr>
<td align="left">-</td>
<td align="left">-</td>
<td align="left">-</td>
<td align="left">Further diagnostic information depending on error type.</td>
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
<td align="left">totalRecords</td>
<td align="left">int</td>
<td align="left">1</td>
<td align="left">The approximate total number of records.</td>
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
