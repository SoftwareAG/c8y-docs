---
order: 30
title: User
layout: redirect
---

### User [application/vnd.com.nsn.cumulocity.user+json]

A "User" resource type contains the following fields:

|Name|Type|Occurs|Description|Allowed in PUT/POST request|
|:---|:---|:-----|:----------|:--------------------------|
|id|String|1|Uniquely identifies a user|not allowed|
|self|URI|1|Link to this resource|not allowed|
|userName|String|1|User name, unique for a given domain. Max: 1000 characters. Whitespaces, slashes, +$: characters not allowed|POST: mandatory PUT: not allowed|
|password|String|1|User password. Min: 6, max: 32 characters. Only Latin1 chars allowed|POST: mandatory PUT: optional|
|firstName|String|1|User first name|optional|
|lastName|String|1|User last name|optional|
|phone|String|1|User phone number. Format: "+[country code][number]", has to be a valid MSISDN|optional|
|email|String|1|User email address|optional|
|enabled|boolean|1|User activation status (true/false)|optional|
|customProperties|Object|1|Keeps a list of custom properties|optional|
|groups|GroupReferenceCollection|1|List of group references|not allowed|
|roles|RoleReferenceCollection|1|List of role references|not allowed|
|devicePermissions|Object|1|List of device permissions|optional|

**Embedded user** contains all properties except password. Password property is never returned in GET user.

### User [application/vnd.com.nsn.cumulocity.currentUser+json]

A "currentUser" resource type contains the following fields:

|Name|Type|Occurs|Description|Allowed in PUT/POST request|
|:---|:---|:-----|:----------|:--------------------------|
|id|String|1|Uniquely identifies a user|not allowed|
|self|URI|1|Link to this resource|not allowed|
|userName|String|1|User name, unique for a given domain. Max: 1000 characters|POST: mandatory PUT: not allowed|
|password|String|1|User password. Min: 6, max: 32 characters. Only Latin1 chars allowed|POST: mandatory PUT: optional|
|firstName|String|1|User first name|optional|
|lastName|String|1|User last name|optional|
|phone|String|1|User phone number. Format: "+[country code][number]", has to be a valid MSISDN|optional|
|email|String|1|User email address|optional|
|enabled|boolean|1|User activation status (true/false)|optional|
|devicePermissions|Object|1|List of device permissions|optional|
|effectiveRoles|Role|0..n|List of all roles assigned to a current user (explicitly or implicitly via associated groups)|not allowed|

**userName** can have a maximum of 1000 characters.

**Embedded user** contains all properties except password. Password property is never returned in GET user.

### Device permission structure

[API:fragment_name:permission] where:

* API is one of the following values: "OPERATION", "ALARM", "AUDIT", "EVENT", "MANAGED_OBJECT", "MEASUREMENT" or "*"
* fragment name is any fragment name, e.g. "c8y_Restart" or "*"
* permission is "ADMIN", "READ" or "*"

#### Required permission per HTTP-method

+ POST - "ADMIN" or "*"
+ PUT - "ADMIN" or "*"
+ DELETE - "ADMIN" or "*"
+ GET - "READ" or "*"

"*" is a wildcard. It enables you to access every API and CRUD object regardless of fragments that are inside it.

#### Querying collections

Only objects which the user is allowed to see are returned to the user. It is possible to query next page using next link from page statistics. It is important to note that in this case the "currentPage" field represents the offset instead of the actual page number.  

>**Important: ** If an object does not have any fragment in it, then to for example read that object, you have to put a wildcard to the fragment name part of device permission, i.e. "10200":["MEASUREMENT:*:READ"].

### Audit log

Any change in user's roles, device permissions and groups creates corresponding audit records with type 'User' and activity 'User updated' with information which properties have been changed.


### GET a representation of a user

Response body: User

Example request: Retrieve information about a user

    GET /user/<<tenant>>/users/<<userId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.user+json;ver=0.9

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
    Content-Length: nnn
    {
      "id" : "jsmith",
      "self" : "[URL to this resource]",
      "userName" : "jsmith",
      "firstName" : "John",
      "lastName" : "Smith",
      "phone" : "+1234567890",
      "email" : "jsmith@abc.com",
      "enabled" : true,
      "groups" : {[collection of groups the user belongs to]},
      "roles" : {[collection of roles the user has]},
      "devicePermissions": {}
    }

The user password is never returned in a GET response. Authentication mechanism is provided by another interface.

### GET a representation of a user by his/her name

Response body: User

Example request: Retrieve information about a user

    GET /user/<<tenant>>/userByName/<<userName>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.user+json;ver=0.9

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
    Content-Location: [location]
    Content-Length: nnn
    {
      "id" : "jsmith",
      "self" : "[URL to this resource]",
      "userName" : "jsmith",
      "firstName" : "John",
      "lastName" : "Smith",
      "phone" : "+1234567890",
      "email" : "jsmith@abc.com",
      "enabled" : true,
      "groups" : {[collection of groups the user belongs to]},
      "roles" : {[collection of roles the user has]},
      "devicePermissions": {}
    }

### PUT a change to user resource

Request body: User

Response body: User 

Example request: Change the first name of a user

    PUT /user/<<tenant>>/users/<<userId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
     Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
     Content-Length: nnn
    {
       "firstName" : "Robert"
    }

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
    Content-Length: nnn
    {
      "id" : "jsmith",
      "self" : "[URL to this resource]",
      "userName" : "jsmith",
      "firstName" : "Robert",
      "lastName" : "Smith",
      "phone" : "+1234567890",
      {emailcloak=off}"email" : "jsmith@abc.com",
      "enabled" : true,
      "groups" : {[collection of groups the user belongs to]},
      "roles" : {[collection of roles the user has]},
      "devicePermissions": {}
    }

When the user is updated with changed permissions or groups, a corresponding audit record is created with type 'User' and activity 'User updated'.

### DELETE a representation of a user

Request body: n/a

Response body: n/a

Example request: Delete a user

    DELETE /user/<<tenant>>/users/<<userName>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT

### GET the current user resource

Response body: user

or

Response body: currentUser

Example request: Retrieve information about the logged-in user

    GET /user/currentUser
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.user+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
     Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
     Content-Length: nnn

    {
        "email": "jsmith@abc.com",
        "enabled": true,
        "firstName": "John",
        "devicePermissions": {},
        "groups": {
            "references": [...],
            "self": "[URL to User's Groups]"
        },
        "id": "jsmith",
        "lastName": "Smith",
        "phone": "+1234567890",
        "roles": {
            "references": [...],
            "self": "[URL to the User's Roles]"
        },
        "self": "[URL to the User resource]",
        "userName": "jsmith"}

### PUT a change to the current user resource

Request body: user

Response body: user

Example request: Change the first name of the logged-in user

    PUT /user/currentUser
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
     Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
     Content-Length: nnn

    {
       "firstName" : "Robert"
    }

Example response:

    HTTP/1.1 200 OK
     Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
     Content-Length: nnn

     {
        "email": "jsmith@abc.com",
        "enabled": true,
        "firstName": "Robert",
        "groups": {
            "references": [...],
            "self": "[URL to User's Groups]"
        },
        "id": "jsmith",
        "lastName": "Smith",
        "phone": "+1234567890",
        "roles": {
            "references": [...],
            "self": "[URL to the User's Roles]"
        },
        "self": "[URL to the User resource]",
        "userName": "jsmith",
        "devicePermissions": {}
     }
