---
order: 80
title: Users
layout: default
---
The user interface consists of the following parts:

-   The *user API* resource returns URIs and URI templates to collections of users, groups, and roles, so that all users, groups, roles and user or group with particular name can be queried.
-   The *user collection* resource retrieves sets of users and enables creating new users.
-   The *user* resource represents individual users that can be queried and deleted.
-   The *user reference collection* resource retrieves sets of references to users. These could be, for example, users of a particular user group. It also enables adding new users to a collection.
-   The *user reference* resource represents one individual reference to a user, which can be retrieved or deleted.
-   The *current user* resource represents the user that is logged in and can be queried and modified.
-   The *group collection* resource retrieves sets of groups and enables creating new groups.
-   The *group* resource represents individual groups that can be queried and deleted.
-   The *group reference collection* resource retrieves sets of references to groups. It could be, for example, groups of a particular user.
-   The *group reference* resource represents one individual reference to a group, which can be retrieved or deleted.
-   The *role collection* resource retrieves sets of roles.
-   The *role* resource represents individual roles that can be queried and assigned or unassigned to users or groups.
-   The *role reference collection* resource retrieves sets of references to roles. These could be, for example, roles of a particular user or group.
-   The *role reference* resource represents one individual reference to a role, which can be retrieved.

> "Realm" as used in this API usually corresponds to a tenant.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

## User API

### UserAPI [application/vnd.com.nsn.cumulocity.userApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this Resource|
|userByName|URI Template/User|1|A reference to a resource of type User. The template contains a placeholders {realm} and {userName}.|
|users|URI Template/UserCollection|1|A collection of all users belonging to a given realm. The template contains a placeholder {realm}.|
|currentUser|URI Template/User|1|A reference to the resource of the logged in User.|
|groupByName|URI Template/Group|1|A reference to a resource of type Group. The template contains a placeholders {realm} and {groupName}.|
|groups|URI Template/GroupCollection|1|A collection of all users belonging to a given realm. The template contains a placeholder {realm}.|
|roles|URI Template/RoleCollection|1|A collection of all roles.|

### GET the User API Resource

Response body: userApi
 Example request: Retrieve information about User API Resource

    GET /user
    Host: [hostname]
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Accept: application/vnd.com.nsn.cumulocity.userApi+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.userApi+json;ver=0.9
    Content-Length: nnn
    {
         "self" : "<<UserAPI URL>>",
         "userByName" : "<<URL to the UserByName resource with realm and user name parameter>>",
         "users" : "<<URL to the UserCollection resource with realm parameter>>",
         "currentUser" : "<<URL to the CurrentUser resource>>",
         "groupByName" : "<<URL to the GroupByName resource with realm and group name parameter>>",
         "groups" : "<<URL to the GroupCollection resource with realm parameter>>",
         "roles" : "<<URL to the RoleCollection resource>>"
    }

## User collection

### UserCollection [application/vnd.com.nsn.cumulocity.userCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|users|User|0..n|List of users|
|statistics|PagingStatistics|1|Information about the paging statistics|
|prev|URI|0..1|Link to a possible previous page with additional users|
|next|URI|0..1|Link to a possible next page with additional users|

### GET a Representation of a User Collection

Response body: userCollection
 
Example request: Retrieve information about a User Collection

    GET /user/<<tenant>>/users
    Host: [hostname]
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Accept: application/vnd.com.nsn.cumulocity.userCollection+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.userCollection+json;ver=0.9
    Content-Length: nnn
    {
       "self":"[URL to this resource]",
       "users":[
            {
              "id" : "jsmith",
              "self" : "[URL to the resource]",
              "userName" : "jsmith",
              "firstName" : "John",
              "lastName" : "Smith",
              "phone" : "+1234567890",
              "email" : "jsmith@abc.com",
              "enabled" : true,
              "groups" : {[collection of groups the user belongs to]},
              "roles" : {[collection of roles the user has]},
              "devicePermissions": {}
            }, ... {
              "id" : "mblack",
              "self" : "[URL to the resource]",
              "userName" : "mblack",
              "firstName" : "Michael",
              "lastName" : "Black",
              "phone" : "+10988765432",
              "email" : "mblack@abc.com",
              "enabled" : true,
              "groups" : {[collection of groups the user belongs to]},
              "roles" : {[collection of roles the user has]},
              "devicePermissions": {}
            }
       ],
       "statistics" : {
           "totalPages" : 22,
           "pageSize" : 5,
           "currentPage : 1
       },
       "prev" : "[URL to previous page]",
       "next" : "[URL to next page]"
    }

### POST - CREATE a new User within the Collection

Request body: User

Response body: User 
 Example request: Create a new User

    POST /user/<<tenant>>/users
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Content-Length: nnn
     Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
    {
      "userName" : "jsmith",
      "password" : "password",
      "firstName" : "John",
      "lastName" : "Smith",
      "phone" : "+1234567890",
      "customProperties" : {"language":"en"},
      "email" : "jsmith@abc.com",
      "enabled" : true,
	  "sendPasswordResetEmail": true
    }

Example response:

    HTTP/1.1 201 Created
     Content-Type: application/vnd.com.nsn.cumulocity.user+json;ver=0.9
     Content-Length: nnn
     Location: [location]
    {
      "id" : "jsmith",
      "self" : "[URL to this resource]",
      "userName" : "jsmith",
      "firstName" : "John",
      "lastName" : "Smith",
      "phone" : "+1234567890",
      "email" : "jsmith@abc.com",
      "customProperties" : {"language":"en"},
      "enabled" : true,
      "groups" : {[collection of groups the user belongs to]},
      "roles" : {[collection of roles the user has]},
      "devicePermissions": {}
    }

## User

### User [application/vnd.com.nsn.cumulocity.user+json]

A "User" resource type contains the following fields:

|Name|Type|Occurs|Description|Allowed in PUT/POST request|
|:---|:---|:-----|:----------|:--------------------------|
|id|String|1|Uniquely identifies a user|not allowed|
|self|URI|1|Link to this Resource|not allowed|
|userName|String|1|User name, unique for a given domain. Max: 1000 characters. Whitespaces, slashes, +$: characters not allowed|POST:mandatory PUT:not allowed|
|password|String|1|User password. Min: 6, max: 32 characters. Only Latin1 chars allowed.|POST:mandatory PUT:optional|
|firstName|String|1|User first name.|optional|
|lastName|String|1|User last name.|optional|
|phone|String|1|User phone number. Format: "+[country code][number]", has to be a valid MSISDN|optional|
|email|String|1|User email address.|optional|
|enabled|boolean|1|User activation status (true/false)|optional|
|customProperties|Object|1|Keeps a list of custom properties|optional|
|groups|GroupReferenceCollection|1|List of group references|not allowed|
|roles|RoleReferenceCollection|1|List of role references|not allowed|
|devicePermissions|Object|1|List of device permissions|optional|

**Embedded user** contains all properties except password. Password property is never returned in GET user

### User [application/vnd.com.nsn.cumulocity.currentUser+json]

A "currentUser" resource type contains the following fields:

|Name|Type|Occurs|Description|Allowed in PUT/POST request|
|:---|:---|:-----|:----------|:--------------------------|
|id|String|1|Uniquely identifies a user|not allowed|
|self|URI|1|Link to this Resource|not allowed|
|userName|String|1|User name, unique for a given domain. Max: 1000 characters|POST:mandatory PUT:not allowed|
|password|String|1|User password. Min: 6, max: 32 characters. Only Latin1 chars allowed.|POST:mandatory PUT:optional|
|firstName|String|1|User first name.|optional|
|lastName|String|1|User last name.|optional|
|phone|String|1|User phone number. Format: "+[country code][number]", has to be a valid MSISDN|optional|
|email|String|1|User email address.|optional|
|enabled|boolean|1|User activation status (true/false)|optional|
|devicePermissions|Object|1|List of device permissions|optional|
|effectiveRoles|Role|0..n|List of all roles a current user has assigned (explicitly or implicitly via associated groups).|not allowed|

**userName** can have a maximum of 1000 characters
**Embedded user **contains all properties except password. Password property is never returned in GET user

### Device permission structure:

[API:fragment_name:permission] where:

1. API is one of the following values: "OPERATION", "ALARM", "AUDIT", "EVENT", "MANAGED_OBJECT", "MEASUREMENT" or "*"
2. fragment name is any fragment name, e.g. "c8y_Restart" or "*"
3. permission is "ADMIN", "READ" or "*"

#### Required permission per HTTP-method:

+ POST - "ADMIN" or "*"
+ PUT - "ADMIN" or "*"
+ DELETE - "ADMIN" or "*"
+ GET - "READ" or "*"

"*" is a wildcard. It enables you to access every API and CRUD objects regardless of fragments that are inside it.

#### Querying collections:

Only objects that user is allowed to see are returned to the user. It is possible to query next page using next link from page statistics. It is important to note that in this case "currentPage" field represents the offset instead of actual page number.  

#### Important:

If an object does not have any fragment in it, then to e.g. read that object you have to put a wildcard to fragment name part of device permission, i.e.
"10200":["MEASUREMENT:*:READ"]

### Audit log
Any change in user's roles, device permissions and groups creates suitable audit record with type 'User' and activity 'User updated' with information which properties have been changed.


### GET a representation of a User

Response body: User
 Example request: Retrieve information about a User

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

User password is never returned in GET response. Authentication mechanism is provided by another interface.

### GET a representation of a User by his/her name

Response body: User
 Example request: Retrieve information about a User

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

### PUT a change to User resource

Request body: User

Response body: User 

Example request: Change the first name of a User

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

When user is updated with changed permissions or groups, suitable audit record is created with type 'User' and activity 'User updated'.

### DELETE a representation of a user

Request body: N/A.

Response body: N/A.
 Example request: Delete a user

    DELETE /user/<<tenant>>/users/<<userName>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT

### GET the Current User Resource

Response body: user

or

Response body: currentUser

Example request: Retrieve information about the logged in user

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

### PUT a change to the Current User Resource

Request body: user

Response body: user
 Example request: Change the first name of the logged in user

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

## User reference collection

### UserReferenceCollection [application/vnd.com.nsn.cumulocity.userReferenceCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|references|UserReference|0..n|List of user references|
|statistics|PagingStatistics|1|Information about the paging statistics|
|prev|URI|0..1|Link to a possible previous page with additional user references|
|next|URI|0..1|Link to a possible next page with additional user references|

### Add User to a group

Request body: UserReference

Response body: UserReference
 Example request: Create a new UserReference

    POST /user/<<tenant>>/groups/<<groupId>>/users
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Content-Length: nnn
     Content-Type: application/vnd.com.nsn.cumulocity.userReference+json;ver=0.9

    {
      "user" : {
        "self" : "[URL to the User resource]"
      }
    }

Example response:

    HTTP/1.1 201 Created
     Content-Type: application/vnd.com.nsn.cumulocity.userReference+json;ver=0.9
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
        
When user is added to group, suitable audit record is created with type 'User' and activity 'User updated'.

### Remove User from a group

Request body: N/A.

Response body: N/A. Example request: DELETE a UserReference
 			 
     DELETE /user/<<tenant>>/groups/<<groupId>>/users/<<yourUserName>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT

When user is removed from group, suitable audit record is created with type 'User' and activity 'User updated'.

### Get all users of a group

Response body: UserReferenceCollection
 Example request: Retrieve information about all users of a Group

    GET /user/management/groups/<<groupId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.userReferenceCollection+json;ver=0.9

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.userReferenceCollection+json;ver=0.9
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

## User reference

### UserReference [application/vnd.com.nsn.cumulocity.userReference+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|user|User|1|A user resource being referenced|

## Group collection

### GroupCollection [application/vnd.com.nsn.cumulocity.groupCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|groups|Group|0..n|List of Groups|
|statistics|PagingStatistics|1|Information about the paging statistics|
|prev|URI|0..1|Link to a possible previous page with additional groups|
|next|URI|0..1|Link to a possible next page with additional groups|

### Audit log
Any change in group's roles and device permissions creates suitable audit record with type 'Group' and activity 'Group updated' with information which properties have been changed.

### List all groups

Response body: GroupCollection

Example request: Retrieve information about a Group Collection

    GET /user/management/groups/
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.groupCollection+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.groupCollection+json;ver=0.9
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
 Example request: Create a new Group

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

## Group

### Group [application/vnd.com.nsn.cumulocity.group+json]

|Name|Type|Occurs|Description|Allowed in PUT/POST request|
|:---|:---|:-----|:----------|:--------------------------|
|id|String|1|Uniquely identifies a Group|not allowed|
|self|URI|1|Link to this Resource|not allowed|
|name|String|1|Descriptive Name of the Group|mandatory|
|roles|RoleReferenceCollection|1|List of role references|not allowed|
|devicePermissions|Object|1|List of device permissions|optional|

### Show group details

Response body: Group
 Example request: Retrieve information about a Group

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

### GET a representation of a Group by its name

Response body: Group
 Example request: Retrieve information about a Group

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

Request body: N/A.

Response body: N/A.
 Example request: DELETE a group

    DELETE /user/<<tenant>>/groups/<<groupId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT
    
When group is removed, suitable audit records are created with type 'User' and activity 'User updated' with information that user has been removed from group.

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
    
When group is updated with changed roles or permissions, suitable audit record is created with type 'Group' and activity 'Group updated'.

## Group reference collection

### GroupReferenceCollection [application/vnd.com.nsn.cumulocity.groupReferenceCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|groups|GroupReference|0..n|List of group references|
|statistics|PagingStatistics|1|Information about the paging statistics|
|prev|URI|0..1|Link to a possible previous page with additional group references|
|next|URI|0..1|Link to a possible next page with additional group references|

### Get all groups of a user

Response body: GroupReferenceCollection
 Example request: Retrieve information about all groups of a User

    GET /user/<<tenant>>/users/<<userName>>/groups
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.groupReferenceCollection+json;ver=0.9

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.groupReferenceCollection+json;ver=0.9
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

## Group reference

### GroupReference [application/vnd.com.nsn.cumulocity.groupReference+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|group|Group|1|A group resource being referenced|

## Role collection

### RoleCollection [application/vnd.com.nsn.cumulocity.roleCollection+json]

|Field Name|Type|Occurs|Description|
|:---------|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|roles|Role|0..n|List of Roles|
|statistics|PagingStatistics|1|Information about the paging statistics|
|prev|URI|0..1|Link to a possible previous page with additional roles|
|next|URI|0..1|Link to a possible next page with additional roles|

## Role

### Role [application/vnd.com.nsn.cumulocity.role+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|String|1|Uniquely identifies a Role|
|name|String|1|Descriptive name of the role, following role naming pattern.|

### Get all available roles

Response body: RoleCollection
 Example request: Retrieve information about a Role Collection

     GET /user/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1 200 OK
     Content-Type: application/vnd.com.nsn.cumulocity.roleCollection+json;ver=0.9
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

### Assign Role to User

Request body: RoleReference

Response body: RoleReference
 Example request: Create a new RoleReference

    POST /user/<<tenant>>/users/<<userName>>/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Content-Length: nnn
     Content-Type: application/vnd.com.nsn.cumulocity.roleReference+json;ver=0.9

    {
      "role" : {
        "self" : "[URL to the Role resource]"
      }
    }

Example response:

    HTTP/1.1 201 Created
     Content-Type: application/vnd.com.nsn.cumulocity.roleReference+json;ver=0.9
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
    
When role is assigned to user, suitable audit record is created with type 'User' and activity 'User updated'.

### Assign Role to Group

Request body: RoleReference

Response body: RoleReference
 Example request: Create a new RoleReference

    POST /user/<<tenant>>/groups/<<groupId>>/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Content-Length: nnn
     Content-Type: application/vnd.com.nsn.cumulocity.roleReference+json;ver=0.9

    {
      "role" : {
        "self" : "[URL to the Role resource]"
      }
    }

Example response:

    HTTP/1.1 201 Created
     Content-Type: application/vnd.com.nsn.cumulocity.roleReference+json;ver=0.9
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

When role is assigned to group, suitable audit record is created with type 'Group' and activity 'Group updated'.

### Unassign Role from User

Request body: N/A.

Response body: N/A.
 Example request: DELETE a RoleReference

    DELETE /user/<<tenant>>/users/<<userName>>/roles/<<roleName>> (Example:ROLE_TENANT_MANAGEMENT_ADMIN)}}
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT

### Unassign Role from Group

Request body: N/A.

Response body: N/A.
 Example request: DELETE a RoleReference

    DELETE /user/<<tenant>>/groups/<<groupId>>/roles/<<roleName>> (Example:ROLE_TENANT_MANAGEMENT_ADMIN)}}
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example response:

    HTTP/1.1  204 NO CONTENT

When role is unassigned from group, suitable audit record is created with type 'Group' and activity 'Group updated'.

## Role reference collection

### RoleReferenceCollection [application/vnd.com.nsn.cumulocity.roleReferenceCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|references|RoleReference|0..n|List of role references|
|statistics|PagingStatistics|1|Information about the paging statistics|
|prev|URI|0..1|Link to a possible previous page with additional role references|
|next|URI|0..1|Link to a possible next page with additional role references|

### Get all roles of a user

Response body: RoleReferenceCollection
 Example request: Retrieve information about a Role Reference Collection

    GET /user/<<tenant>>/users/<<userName>>/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.roleReferenceCollection+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
     Content-Type: application/vnd.com.nsn.cumulocity.roleReferenceCollection+json;ver=0.9
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
 Example request: Retrieve information about a Role Reference Collection

    GET /user/<<tenant>>/groups/<<groupId>>/roles
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.roleReferenceCollection+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
     Content-Type: application/vnd.com.nsn.cumulocity.roleReferenceCollection+json;ver=0.9
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

## Role reference

### RoleReference [application/vnd.com.nsn.cumulocity.roleReference+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|role|Role|1|A role resource being referenced|
