---
weight: 40
title: User reference collection
layout: redirect
---

### UserReferenceCollection [application/vnd.com.nsn.cumulocity.userReferenceCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|references|array|0..n|List of user references.|
|statistics|object|1|Information about the paging statistics.|
|prev|string|0..1|A URI linking to a possible previous page with additional user references.|
|next|string|0..1|A URI linking to a possible next page with additional user references.|

### Add user to a group

Request body: UserReference

Response body: UserReference

Example request: Create a new UserReference

    POST /user/<<tenant>>/groups/<<groupId>>/users
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Content-Length: nnn
     Content-Type: application/vnd.com.nsn.cumulocity.userreference+json;ver=0.9

    {
      "user" : {
        "self" : "[URL to the User resource]"
      }
    }

Example response:

    HTTP/1.1 201 Created
     Content-Type: application/vnd.com.nsn.cumulocity.userreference+json;ver=0.9
     Content-Length: nnn
     Location: [location]

    {
        "self": "[URL to this resource]",
        "user": {
            "email": "jsmith@abc.com",
            "enabled": true,
            "firstName": "John",
            "groups": {
                "references": [...],
                "self": "[URL to the User's Groups]"
            },
            "id": "jsmith",
            "lastName": "Smith",
            "phone": "+1234567890",
            "roles": {
                "references": [...],
                "self": "[URL to the User's Roles]"
            },
            "self": "[URL to the User resource]",
            "userName": "jsmith"
        }}

When a user is added to a group, a corresponding audit record is created with type 'User' and activity 'User updated'.

### Remove user from a group

Request body: n/a

Response body: n/a

Example request: Delete a UserReference

     DELETE /user/<<tenant>>/groups/<<groupId>>/users/<<yourUserName>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT

When a user is removed from a group, a corresponding audit record is created with type 'User' and activity 'User updated'.

### Get all users of a group

Response body: UserReferenceCollection

Example request: Retrieve information about all users of a group

    GET /user/management/groups/<<groupId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.userreferencecollection+json;ver=0.9

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.userreferencecollection+json;ver=0.9
    Content-Length: nnn

    {
      "self" : "[URL to this resource]",
      "references" : [
        {
          "self" : "[URL to this UserReference resource]",
          "user" : {
            "self" : "[URL to this User resource]",
            "id" : "1",
            "userName" : "jsmith",
            ...
          }
        }
      ],
      "statistics" : {
        "totalPages" : 3,
        "pageSize" : 5,
        "currentPage : 1
      },
      "prev" : "[URL to previous page]",
      "next" : "[URL to next page]"
    }
