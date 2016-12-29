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

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

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

Response body: newDeviceRequest

Required role: ROLE\_DEVICE\_CONTROL\_ADMIN

Example Request:

    POST /devicecontrol/newDeviceRequests
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

Response body: newDeviceRequestCollection

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    GET /devicecontrol/newDeviceRequests
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

Response body: newDeviceRequest

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    GET /devicecontrol/newDeviceRequests/<<requestId>>
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

    DELETE /devicecontrol/newDeviceRequests/<<requestId>>
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK

### PUT - updates a new device request

Request body: newDeviceRequest

Response body: newDeviceRequest

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    PUT /devicecontrol/newDeviceRequests/<<requestId>>
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

Device credentials can be enquired by devices that do not have credentials for accessing a tenant yet. Since the device does not have credentials yet, a set of fixed credentials is used for this API. The credentials can be obtained by contacting [support](https://support.cumulocity.com). Do not use your tenant credentials with this API.

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

    POST /devicecontrol/deviceCredentials
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

Device credentials and device representation can be provided from CSV file. CSV file must have 2 sections.

First section is the first line of csv file. This line contains column names (headers):

|Name|Occurs|Description|
|:---|:---|:----------|
|ID|1|The external id of a device|
|CREDENTIALS|1|Password for the device's user|
|TENANT|0..1|The name of tenant for which registration is executed (allowed only by management tenant)|
|TYPE|0..1|The type of device representation|
|NAME|0..1|The name of device representation|
|ICCID|0..1|The iccid of device (sim card number). If 'iccid' appers in file, import adds a fragment 'c8y_Mobile.iccid'. 'Iccid' value is not mandatory for each row, please see below example of http request|
|IDTYPE|0..1|The type of external Id. If 'idtype' doesn't appear in file, the default value is used. The default value is 'c8y_Serial'. 'Idtype' value is not mandatory for each row, please see below example of http request|
|PATH|0..1|The path in the groups hierarchy where device is added. Path contains name of each group separated by '/', i.e: Main group/Subgroup/.../Last subgroup. If group doesn't exists, import creates the group|
|SHELL|0..1|If this column contains value 1, import adds for device 'Shell' feature (specifically: c8y_SupportedOperations fragment). 'Shell' value is not mandatory for each row, please see below example of http request|

Section two is the rest of csv file. Section two contains devices information. Order and quantity of values must be the same like order and quantity of headers.

Separator is automatically obtained from CSV file. Valid separator values are: '\t - tabulation mark', '; - semicolon' and ', - comma'.

CSV file can appear in many forms (regarding to optional tenant column and occurrence of device information):
* when user is logged as management tenant, then columns: 'id', 'credentials' and 'tenant' are mandatory, and credentials for device will be created for tenant mentioned in 'tenant' column,
* when user is logged in as 'not management' tenant i.e. sample_tenant, then columns: 'id' and 'credentials' are mandatory (if file contains 'tenant' column, it is ignored and credentials for device will be created for tenant that is logged in),
* when user wants to add information about device, columns 'type' nad 'name' must appear in csv file,
* when user wants to add information about sim card number, columns 'type', 'name' and 'iccid' must appear in csv file,
* when user wants to change the type of external id, columns 'type', 'name' and 'idtype' must appear in csv file,
* when user wants to add device to group, columns 'type', 'name' and 'path' must appear in csv file,
* when user wants to add shell feature, columns 'type', 'name' and 'shell' must appear in csv file and column 'shell' must contain value 1.

It is possible to define custom external id mappings and custom device properties that are added to newly created devices during registration:
 
* To add custom external id mapping, place external id type as a last header with 'external-' prefix, e.g. to add external id mapping of type 'c8y_Imei', put in the last column header: 'external-c8y_Imei'. The value of this external id type should be set in corresponding column of the data rows.
* To add custom property to registered device, place custom property name as a header, e.g. 'myCustomProperty' and the value would be in rows below.

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

    POST /devicecontrol/bulkNewDeviceRequests
    Content-Type: multipart/form-data; boundary=myBoundary
    Accept: application/json
    Authorization: Basic ...

    --myBoundary
    Content-Disposition: form-data; name="file"
    Content-Type: plain/text

    ID;CREDENTIALS;TYPE;NAME;ICCID;IDTYPE;PATH;SHELL
    id_101;abcd1234;type_of_device;Device 101;111111111;;csv device/subgroup0;1
    id_102;abcd1234;type_of_device;Device 102;222222222;;csv device/subgroup0;0
    id_111;abcd1234;type_of_device;Device 111;333333333;c8y_Imei;csv device1/subgroup1;0
    id_112;abcd1234;type_of_device;Device 112;444444444;;csv device1/subgroup1;1
    id_121;abcd1234;type_of_device;Device 121;555555555;;csv device1/subgroup2;1
    id_122;abcd1234;type_of_device;Device 122;;;csv device1/subgroup2;
    id_131;abcd1234;type_of_device;Device 131;;;csv device1/subgroup3;
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
