---
order: 50
title: Generic media types
layout: redirect
---

### Error [application/vnd.com.nsn.cumulocity.error+json]

The error type provides further information on the reason of a failed request.

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|error|String|1|Error type formatted as "&lt;&lt;resource type&gt;&gt;/&lt;&lt;error name&gt;&gt;". For example, an object not found in the inventory is reported as "inventory/notFound".|
|message|String|1|Short text description of the error|
|info|URL|1|URL to an error description on the Internet.|
|details|Error details|1|Error details. Only available in DEBUG mode.|

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

