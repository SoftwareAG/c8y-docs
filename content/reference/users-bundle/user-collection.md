---
weight: 20
title: User collection
layout: redirect
---

### UserCollection [application/vnd.com.nsn.cumulocity.userCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|users|array|0..n|List of users.|
|statistics|PagingStatistics|1|Information about the paging statistics.|
|prev|string|0..1|A URI linking to a possible previous page with additional users.|
|next|string|0..1|A URI linking to a possible next page with additional users.|

### GET a representation of a user collection

Response body: userCollection

Example request: Retrieve information about a user collection

    GET /user/<<tenant>>/users
    Host: [hostname]
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Accept: application/vnd.com.nsn.cumulocity.usercollection+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.usercollection+json;ver=0.9
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

Users in the response are sorted by username in ascending order.    

#### Search parameters for User Collection      

Users can be filtered by following parameters:

- username - prefix or full username
- groups - numeric group identifiers separated by commas; result will contain only users which belong to at least one of specified groups
- owner - exact username
- onlyDevices - boolean flag. If set to "true", result will contain only users created during bootstrap process (starting with "device\_").
 If flag is absent (or false) the result will not contain "device\_" users.

Additional flag "withSubusersCount" - if set to "true", then each of returned users will contain additional field "subusersCount" -
number of direct sub-users (users with corresponding "owner").

Example request: retrieve users, where username starts with "js", and every user belongs to one of the groups 2, 3 or 4, and the owner is "admin", and is not a device user.

    GET /user/<<tenant>>/users?username=js&groups=2,3,4&owner=admin&withSubusersCount=true
    Host: [hostname]
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Accept: application/vnd.com.nsn.cumulocity.usercollection+json;ver=0.9


### POST - create a new user within the collection

Request body: User

Response body: User 

Example request: Create a new user

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

When set to `true`, the field `sendPasswordResetEmail` will cause Cumulocity IoT to send a password reset email to the email address specified.

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
