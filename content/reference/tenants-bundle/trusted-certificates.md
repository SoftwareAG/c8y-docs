---
weight: 100
title: Trusted certificates
layout: redirect
---

### TrustedCertificates

|Name|Type|Description|Mandatory for PUT/POST|
|:---|:---|:----------|:---------------------|
|notAfter|datetime|Date after which a certificate is no longer valid.|No|
|serialNumber|Positive number |Certificate unique serial number.|No|
|subject|string|Name of the client to which the certificate belongs.|No|
|algorithmName|string|Algorithms used to sign the certificate.|No|
|version|string|Version of the encoded certificate.|No|
|notBefore|datetime|Date before which a certificate is not valid.|No|
|issuer|string|Entity who has signed and issued the certificate.|No|
|fingerprint|string|Unique identifier of the certificate.|No
|name|string|Unique certificate name.|No
|autoRegistrationEnabled|boolean|Flag for auto registration process.|No
|certInPemFormat|string|Certificate representation in PEM format.|POST: Yes <br>PUT: No
|status|string|Certificate status.|POST: Yes <br>PUT: No
|self|string|A URI linking to this resource.|No 

### GET a certificate from tenant's trusted certificates    

Response body: application/json

Required role: ROLE\_TENANT\_ADMIN

Example request: Get a certificate from the tenant's trusted certificates by fingerprint

    GET /tenant/tenants/<<tenantId>>/trusted-certificates/<<certificate fingerprint>>
    Host: ...
    Authorization: Basic ...
    Accept: application/json

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    {
        "notAfter": "2040-02-13T13:13:00.000Z",
        "serialNumber": "<<serial Number>>",
        "subject": "CN=IotDevFactory, O=Iot Device Factory, ST=PL, C=EU",
        "algorithmName": "SHA256withRSA",
        "version": 3,
        "notBefore": "2020-02-18T13:13:00.000Z",
        "issuer": "<<certificate issuer>>",
        "fingerprint": "<<fingerprint>>",
        "name": "sample",
        "autoRegistrationEnabled": true,
        "self": "<<Collection URL>>",
        "certInPemFormat": "<<certificate in pem format>>",
        "status": "ENABLED"
    }

### DELETE a certificate from the tenant's trusted certificates

Response body: application/json

Required role: ROLE\_TENANT\_ADMIN

Example request: Delete a certificate by fingerprint


    DELETE /tenant/tenants/<<tenantId>>/trusted-certificates/<<certificate fingerprint>>
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1  204 NO CONTENT


### PUT - Update an existing certificate

Request body: certificate

Response body: application/json

Required role: ROLE\_TENANT\_ADMIN

Example request:

    PUT /tenant/tenants/<<tenantId>>/trusted-certificates/<<certificate fingerprint>>
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Accept: application/json
    Content-Type: application/json

    {
       "name" : "newName",
       "status" : "DISABLED",
       "autoRegistrationEnabled" : true
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    {
        "notAfter": "2040-02-13T13:13:00.000Z",
        "serialNumber": "<<serial Number>>",
        "subject": "CN=IotDevFactory, O=Iot Device Factory, ST=PL, C=EU",
        "algorithmName": "SHA256withRSA",
        "version": 3,
        "notBefore": "2020-02-18T13:13:00.000Z",
        "issuer": "<<certificate issuer>>",
        "fingerprint": "<<fingerprint>>",
        "name": "newName",
        "autoRegistrationEnabled": true,
        "self": "<<Collection URL>>",
        "certInPemFormat": "<<certificate in pem format>>",
        "status": "DISABLED"
    }

>**Info:** The possible `status` values are ENABLED or DISABLED.
