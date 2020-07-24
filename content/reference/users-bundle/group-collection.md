---
weight: 60
title: Group collection
layout: redirect
---

### GroupCollection [application/vnd.com.nsn.cumulocity.groupCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|groups|Group|0..n|List of groups|
|statistics|PagingStatistics|1|Information about the paging statistics.|
|prev|string|0..1|A URI linking to a possible previous page with additional groups.|
|next|string|0..1|A URI linking to a possible next page with additional groups.|

### Audit log

Any change in group's roles and device permissions creates corresponding audit records with type 'Group' and activity 'Group updated' with information which properties have been changed.

### List all groups

Response body: GroupCollection

Example request: Retrieve information about a group collection

    GET /user/management/groups/
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.groupcollection+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.groupcollection+json;ver=0.9
    Content-Length: nnn

    {
       "self":"[URL to this resource]",
       "groups": [
            {
              "id" : "1",
              "self" : "[URL to this resource]",
              "name" : "administrators",
              "roles" : [...],
              "users" : ["self" : "[URL to collection of Users in this Group]"],
              "devicePermissions": {}
            },
            {
              "id" : "2",
              "self" : "[URL to this resource]",
              "name" : "readers",
	      "roles" : [...],
              "users" : ["self" : "[URL to collection of Users in this Group]"],
              "devicePermissions": {}
            }
       ],
       "statistics" : {
           "totalPages" : 2,
           "pageSize" : 5,
           "currentPage : 1
       },
      "prev" : "[URL to previous page]",
      "next" : "[URL to next page]"
    }

### Create a group

Request body: Group

Response body: Group

Example request: Create a new group

    POST /user/management/groups
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Content-Length: nnn
     Content-Type: application/vnd.com.nsn.cumulocity.group+json;ver=0.9

    {
      "name" : "monitoring"
    }

Example response:

    HTTP/1.1 201 Created
     Content-Type: application/vnd.com.nsn.cumulocity.group+json;ver=0.9
     Content-Length: nnn
     Location: [URL to the resource]

    {
      "id" : "3",
      "self" : "[URL to this resource]",
      "name" : "monitoring"
      "users" : {
        "self" : "[URL to the UserReferenceCollection resource]",
        "references" : []
      },
      "roles" : {
        "self" : "[URL to the RoleReferenceCollection resource]",
        "references" : []
      },
      "devicePermissions": {}
    }
