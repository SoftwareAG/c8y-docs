---
weight: 20
title: Managed object collection
layout: redirect
---

### ManagedObjectCollectionAPI [application/vnd.com.nsn.cumulocity.managedObjectCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|managedObjects|ManagedObject|0..n|List of managed objects, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of managed objects.|
|next|URI|0..1|Link to a potential next page of managed objects.|

### GET - Representation of a ManagedObjectCollection

**Response body:** ManagedObjectCollection  

**Required role:** ROLE\_INVENTORY\_READ

#### Example request - Get managed objects of a particular type

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
GET <<url>>/inventory/managedObjects
Accept: application/vnd.com.nsn.cumulocity.managedObjectCollection+json;ver=...
```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedObjectCollection+json;ver=...

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

**Required role:** ROLE\_INVENTORY\_READ

#### Example request - Get managed objects found by query

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

```http
200 - OK

GET <<url>>/inventory/managedObjects?query=<<query language statement>>
Accept: application/vnd.com.nsn.cumulocity.managedObjectCollection+json;ver=...

```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedObjectCollection+json;ver=..

```http
HTTP/1.1
200 OK
Content-Type: application/vnd.com.nsn.cumulocity.managedObjectCollection+json;ver=...
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

Query language is applied to all managed objects. Users can query using the `query` parameter as follows:

* only query to database: ...?query=name eq 'M01'
* keyword $filter=: ...?query=$filter=name eq  'M01'
* keyword $orderby=: ...?query=$orderby=id asc
* keywords $filter= and $orderby=: ...?query=$filter=name eq 'M01' $orderby=id,

Since all of this is happening as part of a URL, all necessary escaping has to be done with URL encoding. Regex features with custom filter queries are not supported.

The following parts explain how an application will handle a query in the parameter `query`.

##### Supported query operations:

* eq(equal): City eq 'Redmond'
* gt(greater than): Price gt 20
* ge(greater than or equal): Price ge 10
* lt(less than): Price lt 20
* le(less than or equal): Price le 100
* and(logical and): Price le 200 and Price gt 3.5
* or(logical or): Price le 3.5 or Price gt 200

##### Supported query functions:

* has: has(c8y&#95;IsDevice) - match objects with custom property c8y_IsDevice

	* 	Supports only custom fragments.   
	*   Standard properties are not supported, i.e. id, type, name, self, lastUpdated, owner, creationTime, supportedMeasurements, childAssets, childDevices, childAdditions, externalIds   
* bygroupid(12) - match objects from group with ID equals 12

##### Supported query values:

* string; examples: name eq 'Dev002', name eq 'Dev*', name eq '*001', name eq '*'
    * string must be surrounded by single quotes
    * string can contain wildcard '*' and this wildcard matches from 0 to N characters
    * matching is case-sensitive
* number
* date; example: creationTime.date gt '2015-10-24T09:00:53.351+01:00' (+ must be url encoded)

##### Supported query properties:

* simple: name
* nested: c8y_Availability.status
* array: c8y_Availability.statuses = [1, 2, 3]

##### Grouping query operators:

* ( ) Precedence grouping: (p1 eq 1) and (p2 eq 5 or p2 eq 6)

##### Supported sort operations:

* desc; example: $orderby=name desc
* asc; example: $orderby=name, $orderby=name asc

> **Important**: If you query `/inventory/managedObjects?type=c8y_Firmware&query=$filter=(name+eq+'Controller 1')` the `type` queryParam is ignored.<br>Instead `url/inventory/managedObjects?query=$filter=(type+eq+c8y_Firmware+and+c8y_Filter.type+eq+'Controller 1')` has to be queried.

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
