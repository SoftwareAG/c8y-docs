---
weight: 70
title: Group
layout: redirect
---

### Group [application/vnd.com.nsn.cumulocity.group+json]

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 30%;">
<col style="width: 20%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
<th align="left">Allowed in PUT/POST request</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">id</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Uniquely identifies a group.</td>
<td align="left">not allowed</td>
</tr>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URI linking to this resource.</td>
<td align="left">not allowed</td>
</tr>
<tr>
<td align="left">name</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Descriptive name of the group.</td>
<td align="left">mandatory</td>
</tr>
<tr>
<td align="left">roles</td>
<td align="left">array</td>
<td align="left">1</td>
<td align="left">List of role references.</td>
<td align="left">not allowed</td>
</tr>
<tr>
<td align="left">devicePermissions</td>
<td align="left">object</td>
<td align="left">1</td>
<td align="left">List of device permissions.</td>
<td align="left">optional</td>
</tr>
</tbody>
</table>

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
