---
weight: 120
title: Role reference collection
layout: redirect
---

### RoleReferenceCollection [application/vnd.com.nsn.cumulocity.roleReferenceCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|references|array|0..n|List of role references.|
|statistics|PagingStatistics|1|Information about the paging statistics.|
|prev|string|0..1|A URI linking to a possible previous page with additional role references.|
|next|string|0..1|A URI linking to a possible next page with additional role references.|

### Get all roles of a user

Response body: RoleReferenceCollection

Example request: Retrieve information about a role reference collection

    GET /user/<<tenant>>/users/<<userName>>/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.rolereferencecollection+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
     Content-Type: application/vnd.com.nsn.cumulocity.rolereferencecollection+json;ver=0.9
     Content-Length: nnn
    {
       "self":"[URL to this resource]",
       "references": [
         {
           "self" :  "[URL to the Role Reference resource]",
           "role" : {
              "self" :  "[URL to the Role resource]",
              "id" : "ROLE_INVENTORY_ADMIN",
              "name" : "ROLE_INVENTORY_ADMIN"
           }
         },
         {
           "self" :  "[URL to the Role Reference resource]",
           "role" : {
              "self" :  "[URL to the Role resource]",
              "id" : "ROLE_USER_MANAGEMENT_ADMIN",
              "name" : "ROLE_USER_MANAGEMENT_ADMIN"
           }
         }
       ],
       "statistics" : {
           "totalPages" : 1,
           "pageSize" : 5,
           "currentPage : 1
       },
      "prev" : "[URL to previous page]",
      "next" : "[URL to next page]"
    }

### Get all roles of a group

Response body: RoleReferenceCollection

Example request: Retrieve information about a role reference cCollection

    GET /user/<<tenant>>/groups/<<groupId>>/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.rolereferencecollection+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
     Content-Type: application/vnd.com.nsn.cumulocity.rolereferencecollection+json;ver=0.9
     Content-Length: nnn

    {
       "self":"[URL to this resource]",
       "references": [
         {
           "self" :  "[URL to the Role Reference resource]",
           "role" : {
              "self" :  "[URL to the Role resource]",
              "id" : "ROLE_INVENTORY_ADMIN",
              "name" : "ROLE_INVENTORY_ADMIN"
           }
         },
         {
           "self" :  "[URL to the Role Reference resource]",
           "role" : {
              "self" :  "[URL to the Role resource]",
              "id" : "ROLE_USER_MANAGEMENT_ADMIN",
              "name" : "ROLE_USER_MANAGEMENT_ADMIN"
           }
         }
       ],
       "statistics" : {
           "totalPages" : 1,
           "pageSize" : 5,
           "currentPage : 1
       },
      "prev" : "[URL to previous page]",
      "next" : "[URL to next page]"
    }
