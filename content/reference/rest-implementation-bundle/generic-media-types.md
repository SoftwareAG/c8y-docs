---
weight: 50
title: Generic media types
layout: redirect
---

### Error [application/vnd.com.nsn.cumulocity.error+json]

The error type provides further information on the reason of a failed request.

<table>
<colgroup>
<col style="width: 10%;">
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
<td align="left">String</td>
<td align="left">1</td>
<td align="left">Error type formatted as “&lt;&lt;resource type&gt;&gt;/&lt;&lt;error name&gt;&gt;". For example, an object not found in the inventory is reported as “inventory/notFound”.</td>
</tr>
<tr>
<td align="left">message</td>
<td align="left">String</td>
<td align="left">1</td>
<td align="left">Short text description of the error</td>
</tr>
<tr>
<td align="left">info</td>
<td align="left">URL</td>
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

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|expectionClass|String|1|Class name of an exception that caused this error.|
|exceptionMessage|String|1|Exception message content.|
|expectionStackTrace|String|1|Strack trace of the exception.|
|-|-|-|Further diagnostic information depending on error type.|

### PagingStatistics [application/vnd.com.nsn.cumulocity.pagingStatistics+json]

Paging statistics for collection resources are provided in the following format:

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|totalRecords|Integer|1|The approximate total number of records.|
|pageSize|Integer|1|Maximum number of records contained in this query.|
|currentPage|Integer|1|The current returned page within the full result set, starting at "1".|
