---
weight: 40
title: Bulk device credentials
layout: redirect
---

Device credentials and basic device representation can be provided from CSV file. CSV file must have 2 sections.

First section is the first line of CSV file. This line contains column names (headers):

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
<td align="left">The external id of a device</td>
</tr>
<tr>
<td align="left">CREDENTIALS</td>
<td align="left">1</td>
<td align="left">Password for the device’s user</td>
</tr>
<tr>
<td align="left">TENANT</td>
<td align="left">0..1</td>
<td align="left">The name of tenant for which registration is executed (allowed only by management tenant)</td>
</tr>
<tr>
<td align="left">TYPE</td>
<td align="left">0..1</td>
<td align="left">The type of device representation</td>
</tr>
<tr>
<td align="left">NAME</td>
<td align="left">0..1</td>
<td align="left">The name of device representation</td>
</tr>
<tr>
<td align="left">ICCID</td>
<td align="left">0..1</td>
<td align="left">The iccid of device (sim card number). If ‘iccid’ appears in file, import adds a fragment ‘c8y_Mobile.iccid’. ‘Iccid’ value is not mandatory for each row, please see below example of http request</td>
</tr>
<tr>
<td align="left">IDTYPE</td>
<td align="left">0..1</td>
<td align="left">The type of external Id. If ‘idtype’ doesn’t appear in file, the default value is used. The default value is ‘c8y_Serial’. ‘Idtype’ value is not mandatory for each row, please see below example of http request</td>
</tr>
<tr>
<td align="left">PATH</td>
<td align="left">0..1</td>
<td align="left">The path in the groups hierarchy where device is added. Path contains name of each group separated by ‘/', i.e: Main group/Subgroup/…/Last subgroup. If group doesn’t exists, import creates the group</td>
</tr>
<tr>
<td align="left">SHELL</td>
<td align="left">0..1</td>
<td align="left">If this column contains value 1, import adds for device ‘Shell’ feature (specifically: c8y_SupportedOperations fragment). ‘Shell’ value is not mandatory for each row, please see below example of http request</td>
</tr>
</tbody>
</table>

Section two is the rest of CSV file. Section two contains devices information. Order and quantity of values must be the same as order and quantity of headers.

Separator is automatically obtained from CSV file. Valid separator values are: '\t - tabulation mark', '; - semicolon' and ', - comma'.

> **Info:** Bulk registration creates an elementary representation of the device. Then, the device needs to update it to a full representation with its own status. Device is ready to use only after it's updated to the full representation. Use following links to read more about [Credentials upload](/users-guide/device-management/#creds-upload) and [Device integration](/device-sdk/rest/#device-integration).

CSV file can appear in many forms (regarding to optional tenant column and occurrence of device information):

* When user is logged as management tenant, then columns: 'id', 'credentials' and 'tenant' are mandatory, and credentials for device will be created for tenant mentioned in 'tenant' column.
* When user is logged in as 'not management' tenant i.e. sample_tenant, then columns: 'id' and 'credentials' are mandatory (if file contains 'tenant' column, it is ignored and credentials for device will be created for tenant that is logged in).
* When user wants to add information about device, columns 'type' nad 'name' must appear in CSV file.
* When user wants to add information about sim card number, columns 'type', 'name' and 'iccid' must appear in CSV file.
* When user wants to change the type of external id, columns 'type', 'name' and 'idtype' must appear in CSV file.
* When user wants to add device to group, columns 'type', 'name' and 'path' must appear in CSV file.
* When user wants to add shell feature, columns 'type', 'name' and 'shell' must appear in CSV file and column 'shell' must contain value 1.

It is possible to define custom [External ID](/reference/identity/) mappings and some custom device properties that are added to newly created devices during registration:

* To add custom external ID mapping, place external ID type as a last header with 'external-' prefix, e.g. to add external ID mapping of type 'c8y_Imei', put in the last column header: 'external-c8y_Imei'. The value of this external ID type should be set in corresponding column of the data rows.
* To add custom property to registered device, place custom property name as a header, e.g. 'myCustomProperty' and the value would be in rows below.

The custom device properties mapping has following limitations:

* Braces '{}' used in data rows will be interpreted as strings of "{}". The system will interpret the value as an object when some custom property is added, e.g. put 'com_cumulocity_model_Agent.active' into headers row and 'true' into data row to create an object '"com_cumulocity_model_Agent": {"active": "true"}"'.
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
