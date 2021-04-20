---
weight: 10
title: User API
layout: redirect
---

### UserAPI [application/vnd.com.nsn.cumulocity.userApi+json]

<table>
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 10%;">
<col style="width: 40%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URL linking to this resource.</td>
</tr>
<tr>
<td align="left">userByName</td>
<td align="left">URI Template/User</td>
<td align="left">1</td>
<td align="left">Reference to a resource of type User. The template contains placeholders {realm} and {userName}.</td>
</tr>
<tr>
<td align="left">users</td>
<td align="left">URI Template/UserCollection</td>
<td align="left">1</td>
<td align="left">Collection of all users belonging to a given realm. The template contains a placeholder {realm}.</td>
</tr>
<tr>
<td align="left">currentUser</td>
<td align="left">URI Template/User</td>
<td align="left">1</td>
<td align="left">Reference to the resource of the logged in user.</td>
</tr>
<tr>
<td align="left">groupByName</td>
<td align="left">URI Template/Group</td>
<td align="left">1</td>
<td align="left">Reference to a resource of type Group. The template contains placeholders {realm} and {groupName}.</td>
</tr>
<tr>
<td align="left">groups</td>
<td align="left">URI Template/GroupCollection</td>
<td align="left">1</td>
<td align="left">Collection of all users belonging to a given realm. The template contains a placeholder {realm}.</td>
</tr>
<tr>
<td align="left">roles</td>
<td align="left">URI Template/RoleCollection</td>
<td align="left">1</td>
<td align="left">Collection of all roles.</td>
</tr>
</tbody>
</table>

### GET the user API resource

Response body: userApi

Example request: Retrieve information about user API resource

    GET /user
    Host: [hostname]
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Accept: application/vnd.com.nsn.cumulocity.userapi+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.userapi+json;ver=0.9
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
