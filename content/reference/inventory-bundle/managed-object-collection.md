---
weight: 20
title: Managed object collection
layout: redirect
---

> **Important:** Things to note when querying managed objects without the ROLE\_INVENTORY\_READ role:
>
> * The response contains managed objects which are in hierarchy, or a direct access to them was configured via [Administration > Managing permissions > Assigning inventory roles to users](/users-guide/administration#attach-inventory).
> * Checking hierarchy for each resource is a performance expensive operation. Hence, the maximum deep level was limited to 5. This means that a user which has a complex hierarchy with more than 5 nested groups/device assets, **may not receive all data** when querying managed objects without the ROLE\_INVENTORY\_READ role.

### ManagedObjectCollectionAPI [application/vnd.com.nsn.cumulocity.managedObjectCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|managedObjects|ManagedObject|0..n|List of managed objects, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of managed objects.|
|next|string|0..1|A URI linking to a potential next page of managed objects.|

### GET - Representation of a ManagedObjectCollection

**Response body:** ManagedObjectCollection

#### Example request - Get managed objects of a particular type

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
GET <<url>>/inventory/managedObjects
Accept: application/vnd.com.nsn.cumulocity.managedobjectcollection+json;ver=...
```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectcollection+json;ver=...

```http
HTTP/1.1
200 OK

{
"self" : "<<Collection URL>>",
"managedObjects" : [
{
  "self" : "<<Object 42 URL>>",
  "id" : "42",
  "type" :"bg_mps_D413",
  "name" : "Meter1",
  ...
},
{
  "self" : "<<Object 43 URL>>",
  "id": "43",
  "type" :"bg_mps_D413",
  "name": "Meter2",
  ...
}
],
"statistics" : {
"totalPages" : 42,
"pageSize" : 5,
"currentPage : 1
},  "next" : "...",  "prev" : "..."}
```

### GET - Representation of a ManagedObjectCollection by query

**Response body:** ManagedObjectCollection

#### Example request - Get managed objects found by query

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

```http
200 - OK

GET <<url>>/inventory/managedObjects?query=<<query language statement>>
Accept: application/vnd.com.nsn.cumulocity.managedobjectcollection+json;ver=...

```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectcollection+json;ver=..

```http
HTTP/1.1
200 OK
Content-Type: application/vnd.com.nsn.cumulocity.managedobjectcollection+json;ver=...
Content-Length: ...
{
  "self" : "<<Collection URL>>",
  "managedObjects" : [
    {
      "self" : "<<Object 42 URL>>",
      "id" : "42",
      "type" :"bg_mps_D413",
      "name" : "Meter1",
      ...
    },
    {
      "self" : "<<Object 43 URL>>",
      "id": "43",
      "type" :"bg_mps_D413",
      "name": "Meter2",
      ...
    }
  ],
  "statistics" : {
    "totalPages" : 42,
    "pageSize" : 5,
    "currentPage : 1
  },  "next" : "...",  "prev" : "..."}
```

### Query language

Query expressions are matched against all managed objects.
You can use the following `query` parameters:

* Only query the database: `...?query=name eq 'M01'`
* Keyword `$filter=`: `...?query=$filter=name eq  'M01'`
* Keyword `$orderby=`: `...?query=$orderby=id asc`
* Keywords `$filter=` and `$orderby=`: `...?query=$filter=name eq 'M01' $orderby=id`

Query expressions extend the URL.
The [OData syntax rules for URLs](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_URLSyntax) apply.
Regex features with custom filter queries are not supported.

The following sections explain how an application will handle a query in the parameter `query`.

##### Supported query operations:

* `eq` (equal): `City eq 'Redmond'`
* `gt` (greater than): `Price gt 20`
* `ge` (greater than or equal): `Price ge 10`
* `lt` (less than): `Price lt 20`
* `le` (less than or equal): `Price le 100`
* `and` (logical and): `Price le 200 and Price gt 3.5`
* `or` (logical or): `Price le 3.5 or Price gt 200`
* `not` (logical not): `not has(c8y_IsDevice)`

##### Supported query functions:

* `has`: `has(c8y_IsDevice)` - match objects with custom property `c8y_IsDevice`

	* 	Only supports custom fragments.   
	*   Standard properties are not supported, i.e. none of: `id`, `type`, `name`, `self`, `lastUpdated`, `owner`, `creationTime`, `supportedMeasurements`, `childAssets`, `childDevices`, `childAdditions`, `externalIds`   
* `bygroupid(12)` - match objects from group with ID `12`

##### Supported query values:

* String; examples: `name eq 'Dev002'`, `name eq 'Dev*'`, `name eq '*001'`, `name eq '*'`
    * The string must be surrounded by single quotes.
    * The string can contain the wildcard `*` and it matches 0 to N characters.
    * Matching is case-sensitive.
* Number values
* `datetime`; example: `creationTime.date gt '2015-10-24T09:00:53.351+01:00'` (this must be OData encoded)

##### Supported query properties:

* Simple: `name`
* Nested: `c8y_Availability.status`

##### Grouping query operators:

* `( )` Precedence grouping: `(p1 eq 1) and (p2 eq 5 or p2 eq 6)`

##### Supported sort operations:

* `desc`; example: `$orderby=name desc`
* `asc`; example: `$orderby=name, $orderby=name asc`

> **Important:** If you query `/inventory/managedObjects?type=c8y_Firmware&query=$filter=(name+eq+'Controller 1')`, the query parameter `type` is ignored. Instead, `/inventory/managedObjects?query=$filter=(type+eq+c8y_Firmware+and+name+eq+'Controller 1')` has to be queried.

#### Example data

```json
    {
        "_id": 1,
        "name": "Dev_001",
        "num": 1,
        "c8y_Availability": {
            "statusId": 1
        }
    },
    {
        "_id": 2,
        "name": "Dev_002",
        "num": 2,
        "c8y_Availability": {
            "statusId": 1
        }
    },
    {
        "_id": 3,
        "name": "Mo_003",
        "num": 3,
        "c8y_Availability": {
            "statusId": 2
        }
    },
    {
        "_id": 4,
        "name": "Mo_004",
        "num": 4,
        "c8y_Availability": {
            "statusId": 2
        }
    }
```

#### Query response

    ...query=num eq 1 - {"_id": 1, ...}
    ...query=name eq 'Dev_002' - {"_id": 2, ...}
    ...query=name eq '*00*' - return all 4 rows
    ...query=name eq '*Dev_001*' - {"_id": 1, ...}
    ...query=c8y_Availability.statusId eq 2 - {"_id": 3, ...}, {"_id": 4, ...}
    ...query=num gt 2 - {"_id": 3, ...}, {"_id": 4, ...}
    ...query=num le 2 - {"_id": 1, ...}, {"_id": 2, ...}
    ...query=num eq 1 or num eq 2 - {"_id": 1, ...}, {"_id": 2, ...}
    ...query=has(c8y_Availability) - return all 4 rows
