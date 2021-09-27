---
weight: 40
title: Bulk device credentials
layout: redirect
---

The device credentials and the basic device representation can be provided from a CSV file which must be UTF-8 or ANSI encoded. The CSV file must have 2 sections.

The first section is the first line of the CSV file. This line contains the column names (headers):

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">ID</td>
<td align="left">1</td>
<td align="left">External ID of the device.</td>
</tr>
<tr>
<td align="left">CREDENTIALS</td>
<td align="left">0..1</td>
<td align="left">Password for the device’s user. If the device uses certificates, this is not required.</td>
</tr>
<tr>
<td align="left">AUTH_TYPE</td>
<td align="left">0..1</td>
<td align="left">Required authentication type for the device's user. If the device uses credentials, this can be skipped or filled with BASIC. Devices that use certificates must set CERTIFICATES. </td>
</tr>
<tr
<td align="left">TENANT</td>
<td align="left">0..1</td>
<td align="left">The name of the tenant for which registration is executed (allowed only by the management tenant).</td>
</tr>
<tr>
<td align="left">TYPE</td>
<td align="left">0..1</td>
<td align="left">The type of the device representation.</td>
</tr>
<tr>
<td align="left">NAME</td>
<td align="left">0..1</td>
<td align="left">The name of the device representation.</td>
</tr>
<tr>
<td align="left">ICCID</td>
<td align="left">0..1</td>
<td align="left">The ICCID of the device (SIM card number). If "iccid" appears in the file, the import adds a fragment "c8y_Mobile.iccid". The "iccid" value is not mandatory for each row. See the example of an HTTP request below.</td>
</tr>
<tr>
<td align="left">IDTYPE</td>
<td align="left">0..1</td>
<td align="left">The type of external ID. If "idtype" doesn’t appear in the file, the default value is used. The default value is "c8y_Serial". The "idtype" value is not mandatory for each row. See the example of an HTTP request below.</td>
</tr>
<tr>
<td align="left">PATH</td>
<td align="left">0..1</td>
<td align="left">The path in the groups hierarchy where the device is added. The path contains the name of each group separated by '/', e.g. "main group/subgroup/…/last subgroup". If the group doesn’t exist, the import creates the group.</td>
</tr>
<tr>
<td align="left">SHELL</td>
<td align="left">0..1</td>
<td align="left">If this column contains the value "1", the import adds the Shell feature for the device (specifically: "c8y_SupportedOperations" fragment). The "shell" value is not mandatory for each row. See the example of an HTTP request below.</td>
</tr>
</tbody>
</table>

Section two is the remaining part of the CSV file and it contains the device information. The order and quantity of values must be the same as the order and quantity of headers.

The separator is automatically obtained from the CSV file. Valid separator values are tabulation mark "\t", semicolon ";" and comma ",".

> **Info:** Bulk registration creates an elementary representation of the device. Then, the device needs to update it to a full representation with its own status. The device is ready to use only after it is updated to the full representation. For more information on credentials upload refer to [Device Management > Connecting devices > To bulk-register devices](/users-guide/device-management/#creds-upload) in the User guide. For more information on device integration refer to [Device integration using REST > Device integration](/device-sdk/rest/#device-integration) in the Device SDK guide.

The CSV file can have in many forms, depending on the optional tenant column and device information:

* When the user is logged in as management tenant, then the columns: "id", "credentials" and "tenant" are mandatory, and the credentials for the device will be created for the tenant mentioned in  the "tenant" column.
* When the user is logged in as a non-management tenant i.e. sample_tenant, then the columns "id" and "credentials" are mandatory (if the file contains a "tenant" column, it is ignored and the credentials for the device will be created for the tenant that is logged in).
* When the user wants to add information about the device, the columns "type" and "name" must appear in the CSV file.
* When the user wants to add information about the sim card number, the columns "type", "name" and "iccid" must appear in the CSV file.
* When the user wants to change the type of the external ID, the columns "'type", "name" and "idtype" must appear in the CSV file.
* When the user wants to add the device to a group, then the columns "type", "name" and "path" must appear in the CSV file.
* When the user wants to add the shell feature, the columns "type", "name" and "shell" must appear in the CSV file and the "shell" column must contain the value "1".
* When the "auth_type" column is provided with BASIC, the "credentials" column must appear in the CSV file.
* When the "auth_type" column is provided with CERTIFICATES, the "credentials" column can not appear in the CSV file or must be empty.

It is possible to define custom [external ID](/reference/identity/) mappings and some custom device properties which are added to newly created devices during registration:

* To add a custom external ID mapping, enter the external ID type as the header of the last column with the prefix 'external-', e.g. to add an external ID mapping of type 'c8y_Imei', enter 'external-c8y_Imei' in the last column header. The value of this external ID type should be set in the corresponding column of the data rows.
* To add a custom property to a registered device, enter the custom property name as a header, e.g. 'myCustomProperty', and the value would be in the rows below.

The custom device properties mapping has the following limitations:

* Braces '{}' used in data rows will be interpreted as strings of "{}". The system will interpret the value as an object when some custom property is added, e.g. put "com&#95;cumulocity&#95;model&#95;Agent.active" into the headers row and "true" into the data row to create an object '"com&#95;cumulocity&#95;model&#95;Agent": {"active": "true"}"'.
* It is not possible to add array values via bulk registration.


### BulkNewDeviceRequest [application/vnd.com.nsn.cumulocity.bulkNewDeviceRequest+json]

<table>
<colgroup>
<col style="width: 35%;">
<col style="width: 10%;">
<col style="width: 5%;">
<col style="width: 50%;">
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
<td align="left">numberOfAll</td>
<td align="left">int</td>
<td align="left">1</td>
<td align="left">Number of lines processed from the CSV file, without the first line (column headers).</td>
</tr>
<tr>
<td align="left">numberOfCreated</td>
<td align="left">int</td>
<td align="left">1</td>
<td align="left">Number of created device credentials.</td>
</tr>
<tr>
<td align="left">numberOfFailed</td>
<td align="left">int</td>
<td align="left">1</td>
<td align="left">Number of failed creations of device credentials.</td>
</tr>
<tr>
<td align="left">numberOfSuccessful</td>
<td align="left">int</td>
<td align="left">1</td>
<td align="left">Number of successful creations of device credentials, contains create and update operations.</td>
</tr>
<tr>
<td align="left">credentialUpdatedList</td>
<td align="left">array</td>
<td align="left">0..n</td>
<td align="left">Array with updated device credentials.</td>
</tr>
<tr>
<td align="left">credentialUpdatedList.bulkNewDeviceStatus</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Device credentials creation status. Possible values: CREATED, FAILED, CREDENTIAL_UPDATED</td>
</tr>
<tr>
<td align="left">credentialUpdatedList.deviceId</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">ID of the device.</td>
</tr>
<tr>
<td align="left">failedCreationList</td>
<td align="left">array</td>
<td align="left">0..n</td>
<td align="left">Array with updated device credentials.</td>
</tr>
<tr>
<td align="left">failedCreationList.bulkNewDeviceStatus</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Device credentials creation status. Possible values: CREATED, FAILED, CREDENTIAL_UPDATED</td>
</tr>
<tr>
<td align="left">failedCreationList.deviceId</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">ID of the device, appears if the application can obtain it from the file.</td>
</tr>
<tr>
<td align="left">failedCreationList.failureReason</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Reason of error.</td>
</tr>
<tr>
<td align="left">failedCreationList.line</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Line with error.</td>
</tr>
</tbody>
</table>

### POST - creates a bulk device credentials request

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
    Content-Type: application/vnd.com.nsn.cumulocity.bulknewdevicerequest+json;ver=...
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
