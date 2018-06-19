---
order: 50
title: Current application
layout: redirect
---

### GET current application 

Response body: Application

Required authentication with bootstrap user

Example request:
    
    GET /application/currentApplication
    Host: ...
    Authorization: Basic .....
    Accept: application/vnd.com.nsn.cumulocity.application+json;ver=...
    

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.application+json;ver=...
    Content-Length: ...
    {
      "availability": "PRIVATE",
      "id": "105",
      "key": "...",
      "name": "vehicleControlApplication",
      "owner": {
          "self": "...",
          "tenant": {
              "id": "taxiDrive"
          }
      },
      "self": "...",
      "type": "MICROSERVICE",
      "externalUrl":"http://external.host.com/application"
    }

### PUT - update current application 

Response body: Application

Required authentication with bootstrap user

Example request:
    
    PUT /application/currentApplication
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.application+json;ver=...
    {
          "availability": "PRIVATE",
          "id": "105",
          "key": "...",
          "name": "vehicleControlApplication",
          "owner": {
              "self": "...",
              "tenant": {
                  "id": "taxiDrive"
              }
          },
          "self": "...",
          "type": "MICROSERVICE",
          "externalUrl":"http://external.host.com/application"
        }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.application+json;ver=...
    Content-Length: ...
    {
      "availability": "PRIVATE",
      "id": "105",
      "key": "...",
      "name": "...",
      "owner": {
          "self": "...",
          "tenant": {
              "id": "..."
          }
      },
      "self": "...",
      "type": "MICROSERVICE"
    }

### ApplicationSubscriptionCollection

ApplicationSubscriptionCollection[application/vnd.com.nsn.cumulocity.applicationUserCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource|
|users|ApplicationUser|0..n|List of subscribed users, see below|
|statistics|PagingStatistics|1|Information about paging statistics|
|prev|URI|0..1|Link to a potential previous page of applications|
|next|URI|0..1|Link to a potential next page of applications|

### ApplicationUser
|Field Name|Type|Occurs|Description|
|:---------|:---|:-----|:----------|
|tenant|String|1|Subscription tenant
|name|String|1|Username
|password|String|1|Password


### GET current application subscriptions

Response body: ApplicationSubscriptionCollection

Required authentication with bootstrap user

Example request:
    
    GET /application/currentApplication/subscriptions
    Host: ...
    Authorization: Basic ....
    Accept: application/vnd.com.nsn.cumulocity.applicationUserCollection+json; ver=...


Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationUserCollection+json; ver=...
    Content-Length: ...
    {
        "users": [
            {
                "name": "service_hello-world",
                "password": "...",
                "tenant": "..."
            }
        ]
    }
