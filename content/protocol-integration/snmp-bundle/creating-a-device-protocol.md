---
weight: 40
title: Creating a device protocol
layout: redirect
---


SNMP device protocols can either be created manually or by importing a MIB file shared by the device manufacturer. This device protocol will later be used when adding the SNMP device to the platform.

### To create a device protocol from the UI {#to-create-a-device-protocol-from-the-ui}

1. Create a ZIP file which contains the top-level MIB file along with dependent MIB files and an index file named mib-index which contains the name of the top level MIB file.<br>
![Subscribed applications](/images/device-protocols/snmp/snmp-mib-zipfile-structure.png)
2. In the Device management application, click **Device protocols** in the **Device types** menu in the navigator.
3. In the top menu bar of the **Device protocols** page, click **Import**.
4. Select the MIB ZIP file from the dropdown list or upload the file from your file system.
5. In the **Name** field, enter a name for the device protocol.
6. Click **Import**.

On successful import, the newly added device protocol will be listed in the device protocols list.

![Device protocol - SNMP](/images/device-protocols/snmp/snmp-device-protocol.png)

### To create a device protocol via REST API {#to-create-a-device-protocol-via-rest-api}

**Step-1:** Upload the MIB file and note down the JSON response:

	POST /service/mibparser/mib/uploadzip
	Authorization: Basic ...
	Content-Type: multipart/form-data; boundary=----WebKitFormBoundary8WCDTr2uRkbroQ11

	------WebKitFormBoundary8WCDTr2uRkbroQ11
	Content-Disposition: form-data; name="file"; filename="APPN-TRAP-MIB_02.zip"
	Content-Type: application/zip
	------WebKitFormBoundary8WCDTr2uRkbroQ11--

**Step-2:** Use the JSON response and create a device protocol managed object:

	POST /inventory/managedObjects
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json;
	{
		"name": "snmp-device-protocol",
		"fieldbusType": "snmp",
		"type": "c8y_ModbusDeviceType",
		"fieldbusVersion": 4,
		"c8y_IsDeviceType": {},
		"c8y_Global": {},
		"c8y_Registers": [
		    <<This is the response of the above POST call>>
		]
	}

### To create a device protocol manually {#to-create-a-device-protocol-manually}

Device protocols can also be created manually. To do so, you must know the OIDs supported by the device. This method is suitable for small number of OIDs supported by the device or for testing purposes.

1. In the Device management application, click **Device protocols** in the **Device types** menu in the navigator.
2. In the top menu bar of the **Device protocols** page, click **Add device protocol**.
3. Select SNMP as device protocol.
4. Enter the name and a description for the device protocol.
5. Click **Create**. On successful creation, the new device protocol will be added to the device protocols list.
6. Open the newly created device protocol.
7. Click **Add component**.
8. Provide OID details and device protocol mapping for the OID.
9. Click **Save** to save your settings.

![Device protocol - SNMP](/images/device-protocols/snmp/snmp-device-protocol-manual.png)
