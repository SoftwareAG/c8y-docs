---
weight: 110
title: Trusted certificates collection
layout: redirect
---

### TrustedCertificates

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|certificates|TrustedCertificate|0..n|List of tenant's trusted certificates, see [TrustedCertificates](/reference/tenants/#trusted-certificates).|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of tenants.|
|next|URI|0..1|Link to a potential next page of tenants.|

### GET a representation of a trusted certificates collection

Response body: application/json

Required role: ROLE\_TENANT\_ADMIN

Example request: Get a trusted certificates collection for a tenant

    GET /tenant/tenants/<<tenantId>>/trusted-certificates
    Host: ...
    Authorization: Basic ...
    Accept: application/json

Example response:

    {
    "next" : "...",
    "prev" : "...",
    "self" : "<<Collection URL>>",
    "certificates": [
        {
            "notAfter": "2030-04-22T15:08:33.000Z",
            "serialNumber": "<<serial Number>>",
            "subject": "CN=IotDevFactory, O=Iot Device Factory, ST=PL, C=EU",
            "algorithmName": "SHA256withRSA",
            "version": 3,
            "notBefore": "2020-04-24T15:08:33.000Z",
            "issuer": "<<certificate issuer>>",
            "fingerprint": "<<fingerprint>>",
            "name": "sample",
            "autoRegistrationEnabled": true,
            "self": "<<Collection URL>>",
            "certInPemFormat": "<<certificate in pem format>>",
            "status": "ENABLED"
        },
        ...
    ],
    "statistics": {
        "currentPage": 1,
        "pageSize": 5
    }

### POST a certificate to a tenant's trusted certificates

Example request: Add a certificate to the tenant's trusted certificates

Required role: ROLE\_TENANT\_ADMIN

    POST /tenant/tenants/<<tenantId>>/trusted-certificates
    Host: ...
    Authorization: Basic ...
    Content-Type: application/json
    {
    	"status" :  "ENABLED",
    	"name" : "sampleName",
    	"autoRegistrationEnabled" : "true",
    	"certInPemFormat" : "<<certificate in pem format>>"
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    {
        "notAfter": "2040-02-13T13:13:00.000Z",
        "serialNumber": "<<serial Number>>",
        "subject": "<<certificate subject>>",
        "algorithmName": "SHA256withRSA",
        "version": 3,
        "notBefore": "2020-02-18T13:13:00.000Z",
        "issuer": "<<certificate issuer>>",
        "fingerprint": "<<fingerprint>>",
        "name": "sampleName",
        "autoRegistrationEnabled": true,
        "self" : "<<Collection URL>>",
        "certInPemFormat" : "<<certificate in pem format>>"
        "status": "ENABLED"
    }

>**Info:** The possible `status` values are ENABLED or DISABLED.
