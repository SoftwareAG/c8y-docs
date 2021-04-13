---
weight: 30
title: Device credentials
layout: redirect
---

Device credentials can be enquired by devices that do not have credentials for accessing a tenant yet. Since the device does not have credentials yet, a set of fixed credentials is used for this API. The credentials can be obtained by contacting [product support](/about-doc/contacting-support). Do not use your tenant credentials with this API.

### DeviceCredentials [application/vnd.com.nsn.cumulocity.deviceCredentials+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|string|1|Device identifier, e.g. IMEI|
|tenantId|string|1|Tenant id for authentication|
|username|string|1|New username|
|password|string|1|New password|
|self|string|1|A URL linking to this resource.|

### POST - creates a device credentials request

Request body: deviceCredentialsn

Response body: deviceCredentials

Required role: ROLE\_DEVICE\_BOOTSTRAP

Example Request:

    POST /devicecontrol/deviceCredentials
    Content-Type: application/vnd.com.nsn.cumulocity.devicecredentials+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.devicecredentials+json;ver=...
    Authorization: Basic ...
    {
      "id" : "12345",
    }

Example response:

    HTTP/1.1 201 CREATED
    Content-Type: application/vnd.com.nsn.cumulocity.devicecredentials+json;ver=...
    Content-Length: ...
    {
      "id" : "12345",
      "tenantId" : "test",
      "username" : "device_1234",
      "password" : "3rasfst4swfa",
      "self" : "<<URL to this device credentials>>"
    }
