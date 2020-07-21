---
weight: 50
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
|self|string|1|A URI linking to this resource|
|users|array|0..n|List of subscribed users, see below|
|statistics|PagingStatistics|1|Information about paging statistics|
|prev|string|0..1|A URI linking to a potential previous page of applications|
|next|string|0..1|A URI linking to a potential next page of applications|

### ApplicationUser
|Field Name|Type|Occurs|Description|
|:---------|:---|:-----|:----------|
|tenant|string|1|Subscription tenant.|
|name|string|1|Username.|
|password|string|1|Password.|


### GET current application subscriptions

Response body: ApplicationSubscriptionCollection

Required authentication with bootstrap user

Example request:

    GET /application/currentApplication/subscriptions
    Host: ...
    Authorization: Basic ....
    Accept: application/vnd.com.nsn.cumulocity.applicationusercollection+json; ver=...


Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationusercollection+json; ver=...
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
