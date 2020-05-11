---
weight: 20
title: Trusted certificate
layout: redirect
---

### TrustedCertificates

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|notAfter|DateTime|1|Date after which a certificate is no longer valid.|
|serialNumber|positive number|1|Certificate unique serial number.|
|subject|String|1|DName of the client to which the certificate belongs.|
|algorithmName|String|1|Algorithms used to sign certificate.|
|version|String|1|Version of the encoded certificate.|
|notBefore|DateTime|1|Date before which a certificate is no valid.|
|issuer|String|1|Entity who has signed and issued the certificate.|
|fingerprint|String|1|Unique identifier of the certificate.|
|name|String|1|Unique certificate name.|
|autoRegistrationEnabled|boolean|1|Flag for auto registration process.|
|certInPemFormat|String|1|Certificate representation in PEM format.|
|status|String|1|Certificate status.|
|self|URI|1|Link to this resource.|

### GET certificate from tenant's trusted certificates.    

Response body: application/json

Required role: ROLE\_TENANT\_ADMIN

Example Request: Get certificate from tenant's trusted certificates by fingerprint.

    GET /tenant/tenants/<<tenantId>>/trusted-certificates/<<certificate fingerprint>>
    Host: ...
    Authorization: Basic ...
    Accept: application/json

Example Response :
    
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

### DELETE certificate from tenant's trusted certificates.

Response body: application/json
  
Required role: ROLE\_TENANT\_ADMIN

Example Request: Delete certificate by fingerprint.

     
    DELETE /tenant/tenants/<<tenantId>>/trusted-certificates/<<certificate fingerprint>>
    Host: ...
    Authorization: Basic ...

Example Response :

    HTTP/1.1  204 NO CONTENT


### PUT - Update an existing certificate.

Request body: certificate

Response body: application/json

Required role: ROLE\_TENANT\_ADMIN

Example Request :

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

Example Response :

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

Note: status field can only contain ENABLED or DISABLED value.