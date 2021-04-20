---
weight: 10
title: Inventory API
layout: redirect
---

### InventoryAPI [application/vnd.com.nsn.cumulocity.inventoryApi+json]

<table>
<col style="width:30%">
<col style="width:25%">
<col style="width:10%">
<col style="width:35%">
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
<td align="left">managedObjects</td>
<td align="left">ManagedObjectCollection</td>
<td align="left">1</td>
<td align="left">Collection of all managed objects.</td>
</tr>

<tr>
<td align="left">managedObjectsForType</td>
<td align="left">ManagedObjectCollection URI-Template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all managed objects of a particular type (placeholder {type}).</td>
</tr>

<tr>
<td align="left">managedObjectsForFragmentType</td>
<td align="left">ManagedObjectCollection URI-Template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all managed objects with a particular fragment type or capability (placeholder {fragmentType}).</td>
</tr>

<tr>
<td align="left">managedObjectsForListOfIds</td>
<td align="left">ManagedObjectCollection URI-Template</td>
<td align="left">1</td>
<td align="left">Read-only collection of managed objects fetched for a given list of IDs (placeholder {ids}),for example “?ids=41,43,68”.</td>
</tr>

<tr>
<td align="left">managedObjectsForText</td>
<td align="left">ManagedObjectCollection URI-Template</td>
<td align="left">1</td>
<td align="left">Read-only collection of managed objects containing a text value starting with the given text (placeholder {text}). Text value is any alphanumeric string starting with a latin letter (A-Z or a-z).</td>
</tr>
</tbody>
</table>

### GET - Representation of the Inventory API resource

**Response body:** application/vnd.com.nsn.cumulocity.inventoryApi+json

**Required role:** ROLE\_INVENTORY\_READ

#### Example request - Get the Inventory API resource

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
200 - OK

GET <<url>>/inventory
```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.inventoryapi+json;ver=...

```http
HTTP/1.1
200 - OK

{
    "managedObjectsForFragmentType" : "<<ManagedObjectCollection URL>>?fragmentType={fragmentType}",
    "managedObjectsForType" : "<<ManagedObjectCollection URL>>?type={type}",
    "self" : "<<InventoryAPI URL>>",
    "managedObjects" : {
      	"self" : "<<ManagedObjectCollection URL>>",
        "references": []
    },
    "managedObjectsForListOfIds" : "<<ManagedObjectCollection URL>>?ids={ids}"
}
```
