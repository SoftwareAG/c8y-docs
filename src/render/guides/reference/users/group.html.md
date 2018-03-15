---
order: 70
title: Group
layout: redirect
---

### Group [application/vnd.com.nsn.cumulocity.group+json]

|Name|Type|Occurs|Description|Allowed in PUT/POST request|
|:---|:---|:-----|:----------|:--------------------------|
|id|String|1|Uniquely identifies a group|not allowed|
|self|URI|1|Link to this resource|not allowed|
|name|String|1|Descriptive name of the group|mandatory|
|roles|RoleReferenceCollection|1|List of role references|not allowed|
|devicePermissions|Object|1|List of device permissions|optional|

### Show group details

Response body: Group

Example request: Retrieve information about a group

    GET /user/management/groups/<<groupId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.group+json;ver=0.9

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.group+json;ver=0.9
    Content-Length: nnn

    {
      "id" : "1",
      "self" : "[URL to this resource]",
      "name" : "administrators",
      "devicePermissions": {},
      "roles" : {
        "self" : "[URL to the RoleReferenceCollection resource]",
        "references" : [
        {
          "self" :  "[URL to the RoleReference resource]",
          "role" : {
              "self" :  "[URL to the Role resource]",
              "id" : "1",
              "name" : "ROLE_USER_MANAGEMENT_ADMIN"
          }
        },
        {
          "self" :  "[URL to the RoleReference resource]",
          "role" : {
                "self" :  "[URL to the Role resource]",
                "id" : "1",
                "name" : "ROLE_INVENTORY_MANAGEMENT_ADMIN"
              }
            },
        ...
         ]
    }

### GET a representation of a group by its name

Response body: Group

Example request: Retrieve information about a group

    GET /user/<<tenant>>/groupByName/<<groupName>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.group+json;ver=0.9

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.group+json;ver=0.9
    Content-Location: [main URL of this resource]
    Content-Length: nnn

    {
      "id" : "1",
      "self" : "[URL to this resource]",
      "name" : "administrators",
      ...
    }

### Remove a group

Request body: n/a

Response body: n/a

Example request: Delete a group

    DELETE /user/<<tenant>>/groups/<<groupId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT
    
When a group is removed, a corresponding audit record is created with type 'User' and activity 'User updated' with the information that the user has been removed from the group.

>**Info:** ADMINS and DEVICES groups can not be deleted.

### Update a group

Request body: Group

Response body: Group

Example request: Change the group name

    PUT /user/<<tenant>>/groups/<<groupId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.group+json;ver=0.9
     Content-Type: application/vnd.com.nsn.cumulocity.group+json;ver=0.9
     Content-Length: nnn

    {
       "name" : "PlatformAdministrators"
    }

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.group+json;ver=0.9
    Content-Length: nnn

    {
      "id" : "1",
      "self" : "[URL to this resource]",
      "name" : "PlatformAdministrators",
      ...
    }
    
When a group is updated with changed roles or permissions, a corresponding audit record is created with type 'Group' and activity 'Group updated'.
