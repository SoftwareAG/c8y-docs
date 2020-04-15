---
weight: 70
title: Option
layout: redirect
---

Options are category-key-value tuples, storing tenant configuration. Some categories of options allow creation of new one, other are limited to predefined set of keys.

Any option of any tenant can be defined as "non-editable" by "management" tenant.
Afterwards, any PUT or DELETE requests made on that option by the owner tenant, will result in 403 error (Unauthorized).

### Default Options

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 20%;">
</colgroup>
<thead>
<tr>
<th align="left">Category</th>
<th align="left">Key</th>
<th align="left">Default value</th>
<th align="left">Only predefined</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">access.control</td>
<td align="left">allow.origin</td>
<td align="left">*</td>
<td align="left">yes</td>
<td align="left">Comma separated list of domains allowed for execution of CORS. Wildcards are allowed (e.g. *.cumuclocity.com)</td>
</tr>
<tr>
<td align="left">alarm.type.mapping</td>
<td align="left">&lt;&lt;alarmType&gt;&gt;</td>
<td align="left"></td>
<td align="left">no</td>
<td align="left">Overrides severity and alarm text for the alarm with type “&lt;&lt;alarmType&gt;&gt;". Severity and text are specified as “&lt;&lt;alarmSeverity&gt;&gt;|&lt;&lt;alarmText&gt;&gt;". If either part of the text is empty, the value will not be overridden. If severity is “NONE”, the alarm will be suppressed.</td>
</tr>
</tbody>
</table>

### Option [application/vnd.com.nsn.cumulocity.option+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|0..1|Link to this resource.|
|category|String|1|Category of option|
|key|String|1|Key of option|
|value|String|1|Value of option|

**Info:** Adding "credentials." prefix to the key will make the value of the option to be encrypted. Additionally, when the option is being sent to the microservice, the "credentials." prefix is removed and the value is decrypted. For example:

	{
	    "category": "c8y-tutorial-7",
	    "key": "credentials.mykey",
	    "value": "myvalue"
	}

In the request now there will be an additional header:

		"Mykey": "myvalue"

### GET a representation of a Option.

Response body: Option

Required role: ROLE\_OPTION\_MANAGEMENT\_READ
 Example Request: Get single option.


    GET /tenant/options/<<category>>/<<key>>
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

### PUT - Update a Option.

Request body: Option

Response body: Option

Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN
 Example Request: Update access.control.allow.origin option.


    PUT /tenant/options/<<category>>/<<key>>
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

### PUT - Update multiple options in provided category

Request body: Option

Response body: Option

Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN
 Example Request: Update options in provided category.


    PUT /tenant/options/<<category>>
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
        "key4": "value4"
    }

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...

### GET Options from provided category.

Response body: Option

Required role: ROLE\_OPTION\_MANAGEMENT\_READ
 Example Request: Get options from given category.


    GET /tenant/options/<<category>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...
    Content-Length: ...
     {
       "key1": "value1"
       "key2": "value2",
       "key3": "value3",
       "key4": "value4",
     }

### PUT - Define option editability.

Request body: Option

Response body: Option

Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN, Required tenant: management
 Example Request: Update access.control.allow.origin option.


    PUT /tenant/options/<<category>>/<<key>>/editable
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "editable": "false"
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
