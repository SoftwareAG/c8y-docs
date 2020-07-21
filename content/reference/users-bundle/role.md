---
weight: 110
title: Role
layout: redirect
---

### Role [application/vnd.com.nsn.cumulocity.role+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|string|1|Uniquely identifies a role.|
|name|string|1|Descriptive name of the role, following role naming pattern.|

### Get all available roles

Response body: RoleCollection

Example request: Retrieve information about a role collection

     GET /user/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1 200 OK
     Content-Type: application/vnd.com.nsn.cumulocity.rolecollection+json;ver=0.9
     Content-Length: nnn

    {
       "self":"[URL to this resource]",
       "roles": [
         {
           "self" :  "[URL to the Role resource]",
           "id" : "ROLE_INVENTORY_ADMIN",
           "name" : "ROLE_INVENTORY_ADMIN"
         },
         {
           "self" :  "[URL to the Role resource]",
           "id" : "ROLE_USER_MANAGEMENT_ADMIN",
           "name" : "ROLE_USER_MANAGEMENT_ADMIN"
         },    ...
       ],
       "statistics" : {
           "totalPages" : 5,
           "pageSize" : 5,
           "currentPage : 1
       },
      "prev" : "[URL to previous page]",
      "next" : "[URL to next page]"
    }

### Assign Role to user

Request body: RoleReference

Response body: RoleReference

Example request: Create a new RoleReference

    POST /user/<<tenant>>/users/<<userName>>/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Content-Length: nnn
     Content-Type: application/vnd.com.nsn.cumulocity.rolereference+json;ver=0.9

    {
      "role" : {
        "self" : "[URL to the Role resource]"
      }
    }

Example response:

    HTTP/1.1 201 Created
     Content-Type: application/vnd.com.nsn.cumulocity.rolereference+json;ver=0.9
     Content-Length: nnn
     Location: [URL to this resource]

    {
      "self" : "[URL to this resource]",
      "role" : {
        "self" :  "[URL to the Role resource]",
        "id" : "ROLE_USER_MANAGEMENT_ADMIN",
        "name" : "ROLE_USER_MANAGEMENT_ADMIN"
      }
    }

When a role is assigned to a user, a corresponding audit record is created with type 'User' and activity 'User updated'.

### Assign role to group

Request body: RoleReference

Response body: RoleReference

Example request: Create a new RoleReference

    POST /user/<<tenant>>/groups/<<groupId>>/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Content-Length: nnn
     Content-Type: application/vnd.com.nsn.cumulocity.rolereference+json;ver=0.9

    {
      "role" : {
        "self" : "[URL to the Role resource]"
      }
    }

Example response:

    HTTP/1.1 201 Created
     Content-Type: application/vnd.com.nsn.cumulocity.rolereference+json;ver=0.9
     Content-Length: nnn
     Location: [URL to this resource]

    {
      "self" : "[URL to this resource]",
      "role" : {
        "self" :  "[URL to the Role resource]",
        "id" : "ROLE_USER_MANAGEMENT_ADMIN",
        "name" : "ROLE_USER_MANAGEMENT_ADMIN"
      }
    }

When a role is assigned to a group, a corresponding audit record is created with type 'Group' and activity 'Group updated'.

### Unassign role from user

Request body: n/a

Response body: n/a

Example request: Delete a RoleReference

    DELETE /user/<<tenant>>/users/<<userName>>/roles/<<roleName>> (Example:ROLE_TENANT_MANAGEMENT_ADMIN)}}
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT

### Unassign role from group

Request body: n/a

Response body: n/a

Example request: Delete a RoleReference

    DELETE /user/<<tenant>>/groups/<<groupId>>/roles/<<roleName>> (Example:ROLE_TENANT_MANAGEMENT_ADMIN)}}
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT

When a role is unassigned from a group, a corresponding audit record is created with type 'Group' and activity 'Group updated'.
