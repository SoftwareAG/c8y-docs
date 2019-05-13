---
weight: 10
title: User API
layout: redirect
---

### UserAPI [application/vnd.com.nsn.cumulocity.userApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource|
|userByName|URI Template/User|1|Reference to a resource of type User. The template contains placeholders {realm} and {userName}.|
|users|URI Template/UserCollection|1|Collection of all users belonging to a given realm. The template contains a placeholder {realm}.|
|currentUser|URI Template/User|1|Reference to the resource of the logged in user.|
|groupByName|URI Template/Group|1|Reference to a resource of type Group. The template contains placeholders {realm} and {groupName}.|
|groups|URI Template/GroupCollection|1|Collection of all users belonging to a given realm. The template contains a placeholder {realm}.|
|roles|URI Template/RoleCollection|1|Collection of all roles.|

### GET the user API resource

Response body: userApi

Example request: Retrieve information about user API resource

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
