---
weight: 30
title: User
layout: redirect
---

### User [application/vnd.com.nsn.cumulocity.user+json]

A "User" resource type contains the following fields:

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
<td align="left">Uniquely identifies a user.</td>
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
<td align="left">userName</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User name, unique for a given domain. Max: 1000 characters. Whitespaces, slashes, +$: characters not allowed.</td>
<td align="left">POST: mandatory PUT: not allowed</td>
</tr>
<tr>
<td align="left">password</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User password. Min: 6, max: 32 characters. Only Latin1 chars allowed. If you do not specify a password when creating a new user with a POST request, it must contain the field sendPasswordResetEmail with a value of true.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">sendPasswordResetEmail</td>
<td align="left">boolean</td>
<td align="left">1</td>
<td align="left">When set to true, this field will cause Cumulocity IoT to send a password reset email to the email address specified. If there is no password specified, this must be specified and it must be set to true.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">firstName</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User first name.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">lastName</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User last name.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">phone</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User phone number. Format: “+[country code][number]", has to be a valid MSISDN</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">email</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User email address.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">enabled</td>
<td align="left">boolean</td>
<td align="left">1</td>
<td align="left">User activation status (true/false).</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">customProperties</td>
<td align="left">Object</td>
<td align="left">1</td>
<td align="left">Keeps a list of custom properties.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">groups</td>
<td align="left">array</td>
<td align="left">1</td>
<td align="left">List of group references.</td>
<td align="left">not allowed</td>
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

**Embedded user** contains all properties except password. Password property is never returned in GET user.

### User [application/vnd.com.nsn.cumulocity.currentUser+json]

A "currentUser" resource type contains the following fields:

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
<td align="left">Uniquely identifies a user.</td>
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
<td align="left">userName</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User name, unique for a given domain. Max: 1000 characters</td>
<td align="left">POST: mandatory PUT: not allowed</td>
</tr>
<tr>
<td align="left">password</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User password. Min: 6, max: 32 characters. Only Latin1 chars allowed.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">firstName</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User first name.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">lastName</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User last name.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">phone</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User phone number. Format: “+[country code][number]", has to be a valid MSISDN</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">email</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">User email address.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">enabled</td>
<td align="left">boolean</td>
<td align="left">1</td>
<td align="left">User activation status (true/false).</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">devicePermissions</td>
<td align="left">object</td>
<td align="left">1</td>
<td align="left">List of device permissions.</td>
<td align="left">optional</td>
</tr>
<tr>
<td align="left">effectiveRoles</td>
<td align="left">array</td>
<td align="left">0..n</td>
<td align="left">List of all roles assigned to a current user (explicitly or implicitly via associated groups).</td>
<td align="left">not allowed</td>
</tr>
</tbody>
</table>

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

>**Important:** If there is no fragment in an object, then for example to read the object, you have to use the wildcard "\*" for the "fragment_name" part of the device permission (see the structure above). For example: `"10200":["MEASUREMENT:*:READ"]`.

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
