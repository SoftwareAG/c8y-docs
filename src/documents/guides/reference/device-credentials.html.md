---
order: 65
title: Device credentials
layout: default
---

The device credentials interface consists of the following parts:

* Device requests are used to register new devices with a tenant.
* Device credentials provide credentials to registered devices.
* Device credentials provide endpoint to bulk credentials provision.

For more information on the process of registering devices, see the Section "[Devices integration](/guides/rest/device-integration#step-0-request-device-credentials)".

## New device request collection

### NewDeviceRequestCollection [application/vnd.com.nsn.cumulocity.newDeviceRequestCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|newDeviceRequests|New device requests |0..n|List of new device requests, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of operations.|
|next|URI|0..1|Link to a potential next page of operations.|

### POST - Create a new device request

Request body: newDeviceRequest

Response body: newDeviceRequest (when Accept header is not returned, empty response body is returned)  

Required role: ROLE\_DEVICE\_CONTROL\_ADMIN

Example Request:

    POST: {{url}}/devicecontrol/newDeviceRequests
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Authorization: Basic ...
    {
      "id" : "1234",
    }

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Content-Length: ...
    {
      "id" : "1234",
      "self" : "<<URL of new request>>",
      "status" : "WAITING_FOR_CONNECTION",
    }

### GET - returns all new device requests

Request body: N/A

Response body: newDeviceRequestCollection

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    GET: {{url}}/devicecontrol/newDeviceRequests
    Accept: application/vnd.com.nsn.cumulocity.newDeviceRequestCollection+json;ver=...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Location: <<URL of new operation>>
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequestCollection+json;ver=...
    Content-Length: ...
    {
      "newDeviceRequests": [{
             "id" : "1234",
             "self" : "<<URL of new request>>",
             "status" : "WAITING_FOR_CONNECTION"
      }, {
             "id" : "12345",
             "self" : "<<URL of new request>>",
             "status" : "WAITING_FOR_CONNECTION" }]
    }

## New device request

### NewDeviceRequest [application/vnd.com.nsn.cumulocity.newDeviceRequest+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|String|1|Device identifier. Max: 1000 characters. E.g. IMEI|
|status|String|1|Status of registration, one of: WAITING\_FOR\_CONNECTION, PENDING\_ACCEPTANCE, ACCEPTED|
|self|URL|1|Link to this resource.|

### GET - returns a new device request

Request body: N/A

Response body: newDeviceRequest

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    GET: {{url}}/devicecontrol/newDeviceRequests/1234
    Authorization: Basic ...
	Accept: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Content-Length: ...
    {
      "id" : "1234",
      "self" : "<<URL of new request>>",
      "status" : "WAITING_FOR_CONNECTION",
    }

### DELETE - deletes a new device request

Request body: N/A

Response body: N/A

Required role: ROLE\_DEVICE\_CONTROL\_ADMIN

Example Request:

    DELETE: {{url}}/devicecontrol/newDeviceRequests/1234
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK

### PUT - updates a new device request

Request body: newDeviceRequest

Response body: newDeviceRequest

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    PUT: {{url}}/devicecontrol/newDeviceRequests/1234
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Authorization: Basic ...
    {
      "status" : "ACCEPTED",
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Content-Length: ...
    {
      "id" : "1234",
      "self" : "<<URL of new request>>",
      "status" : "ACCEPTED",
    }

## Device credentials

Device credentials can be enquired by devices that do not have credentials for accessing a tenant yet. Since the device does not have credentials yet, a set of fixed credentials is used for this API. The credentials can be obtained by mailing to support@cumulocity.com. Do not use your tenant credentials with this API.

### DeviceCredentials [application/vnd.com.nsn.cumulocity.deviceCredentials+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|String|1|Device identifier, e.g. IMEI|
|tenantId|String|1|Tenant id for authentication|
|username|String|1|New username|
|password|String|1|New password|
|self|URL|1|Link to this resource.|

### POST - creates a device credentials request

Request body: deviceCredentialsn

Response body: deviceCredentials

Required role: ROLE\_DEVICE\_BOOTSTRAP

Example Request:

    POST: {{url}}/devicecontrol/deviceCredentials
    Content-Type: application/vnd.com.nsn.cumulocity.deviceCredentials+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.deviceCredentials+json;ver=...
    Authorization: Basic ...
    {
      "id" : "12345",
    }

Example response:

    HTTP/1.1 201 CREATED
    Content-Type: application/vnd.com.nsn.cumulocity.deviceCredentials+json;ver=...
    Content-Length: ...
    {
      "id" : "12345",
      "tenantId" : "test",
      "username" : "device_1234",
      "password" : "3rasfst4swfa",
      "self" : "<<URL to this device credentials>>"
    }

## <a name="creds-upload"></a>Bulk device credentials

Device credentials can be provided from CSV file. CSV file must contains 2 section. First section is the first line of csv file. This line must contains columns 'id', 'credentials' and optional 'tenant', rest of columns will be ommited. Section two is the rest of csv file. Section two contains devices credentials information, order and quantity of data must be the same like order and quantity of columns.

Separator is automatically obtained from CSV file. Valid separator values are: '\t - tabulation mark', '; - semicolon' and ', - comma'.

CSV file appears in two forms (regarding to optional tenant column):
* when user is logged as management tenant, that columns: 'id', 'credentials' and 'tenant' are mandatory, and credentials for device will be created for tenant mentioned in 'tenant' column,
* when user is logged on 'not management' tenant i.e. sample_tenant, that columns: 'id' and 'credentials' are mandatory and rest of columns will be omitted, even if fille contains 'tenant' column and credentials for device will be created for tenant from logged user.

### BulkNewDeviceRequest [application/vnd.com.nsn.cumulocity.bulkNewDeviceRequest+json]

|Name|Type|Occurs|Description|
|:---|:---|:---|:----------|
|numberOfAll|Number|1|Number of lines processed from CSV file, without first line (column headers)|
|numberOfCreated|Number|1|Number of created device credentials|
|numberOfFailed|Number|1|Number of failed creation of device credentials|
|numberOfSuccessful|Number|1|Number of successful creation of device credentials, contains create and update operations|
|credentialUpdatedList|List|0..n|Array with updated device credentials|
|credentialUpdatedList.bulkNewDeviceStatus|String|1|Device credentials creation status, possible values: CREATED, FAILED, CREDENTIAL_UPDATED|
|credentialUpdatedList.deviceId|String|1|Id of device|
|failedCreationList|List|0..n|Array with updated device credentials|
|failedCreationList.bulkNewDeviceStatus|String|1|Device credentials creation status, possible values: CREATED, FAILED, CREDENTIAL_UPDATED|
|failedCreationList.deviceId|String|0..1|Id of device, appears if application can obtain it from file|
|failedCreationList.failureReason|String|1|Reason of error|
|failedCreationList.line|String|1|Line with error|

### POST - creates a bullk device credentials request

Request body: multipart/form-data

Response body: bulkNewDeviceRequest

Required role: ROLE\_DEVICE\_CONTROL\_ADMIN

Example Request:

    POST: {{url}}/devicecontrol/bulkNewDeviceRequests
    Content-Type: multipart/form-data; boundary=myBoundary
    Accept: application/json
    Authorization: Basic ...

    --myBoundary
    Content-Disposition: form-data; name="file"
    Content-Type: plain/text

    ID;CREDENTIALS;TENANT
    id01;abcd1234;sample_tenant
    id02;abcd1234;sample_tenant
    id03;abcd1234;sample_tenant
    id04;abcd1234;sample_tenant
    id05;abcd1234;sample_tenant
    --myBoundary

Example response:

    HTTP/1.1 201 CREATED
    Content-Type: application/vnd.com.nsn.cumulocity.bulkNewDeviceRequest+json;ver=...
    Content-Length: ...
    {
        "credentialUpdatedList" : [
            {
                "bulkNewDeviceStatus" : "CREDENTIAL_UPDATED",
                "deviceId" : "id04"
            }
        ],
        "failedCreationList" : [
            {
                "bulkNewDeviceStatus" : "FAILED",
                "deviceId" : "id04",
                "failureReason" : "failure",
                "line" : "DeviceInfo{id='id5', credentials='credentials3', tenant='tenant3'}"
            }
        ],
        "numberOfAll" : 5,
        "numberOfCreated" : 3,
        "numberOfFailed" : 1,
        "numberOfSuccessful" : 4
    }
