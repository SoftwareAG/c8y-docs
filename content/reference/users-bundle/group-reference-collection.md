---
weight: 80
title: Group reference collection
layout: redirect
---

### GroupReferenceCollection [application/vnd.com.nsn.cumulocity.groupReferenceCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|groups|array|0..n|List of group references.|
|statistics|PagingStatistics|1|Information about the paging statistics.|
|prev|string|0..1|A URI linking to a possible previous page with additional group references.|
|next|string|0..1|A URI linking to a possible next page with additional group references.|

### Get all groups of a user

Response body: GroupReferenceCollection

Example request: Retrieve information about all groups of a user

    GET /user/<<tenant>>/users/<<userName>>/groups
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.groupreferencecollection+json;ver=0.9

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.groupreferencecollection+json;ver=0.9
    Content-Length: nnn

    {
        "self" : "[URL to this resource]",
        "references": [{        "group": {            "id": 21,            "name": "admins",            "roles": {                "references": [...],                "self": "[URL to this Group's Roles]"            },            "self": "[URL to this Group]",            "users": {                "self": "{URL to this Group's Users]"            }        },        "self": "[URL to this User's Group]"    },   ...   ],   "statistics" : {
         "totalPages" : 1,
         "pageSize" : 5,
         "currentPage : 1
       },
       "prev" : "[URL to previous page]",
       "next" : "[URL to next page]"
    }
