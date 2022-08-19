---
weight: 20
title: Creating assets via bulk import
layout: redirect
---

To import the entire asset hierarchy with all assets at once, use the bulk import feature.
For each [asset type](/dtm/asset-types/#asset-types), a CSV template is provided.
Fill in the required details in this template and upload the file to create the assets in a bulk for the selected asset type.

### To create a role to use the bulk import feature

To use the Bulk import feature, you must provide permission for **Digital Twin** role, following these steps:

1. Navigate to the [Administration application](/users-guide/administration/#overview) via the application switcher in the top right corner.

2. Under **Quick links** click **Roles**.

3. In the **Global roles** tab, select the role which is already assigned for your username.

4. Set all available permissions for **Digital Twin** in the "Permissions" section by selecting the following checkboxes:

	* Under **Application access**, select "Digital Twin".

	* Under **Custom applications**, select "Digital Twin Manager".

5. Click **Save**.

![Permissions for bulk import](/images/dtm/bulk-import/dtm-bulk-import-assign-permissions.png)

Once the permissions are assigned, the bulk import feature can be used.

{{< c8y-admon-info>}}
If the permissions are not assigned, then the CSV template will not be downloaded correctly.
{{< /c8y-admon-info>}}

### To download a CSV template for bulk import

Follow the steps below:

1. Navigate to the **Assets** page and click **Import assets**.

2. The **Import assets** dialog has a dropdown **Choose asset type**.

	* If no asset types are created yet, only the asset type "Group" is listed in the dropdown.

	* If you have added the asset types, all the root asset types are listed in the dropdown.

3. Select the asset type for which you want to create the asset hierarchy.

	![bulk-import-asset](/images/dtm/bulk-import/dtm-bulk-import-import-assets-window.png)

4. On selection, two additional options appear:

	* **Drop file here** - upload the CSV template as a file, for importing assets in bulk.
	* **Download Template** - download the CSV template for the selected asset type.

	<br/>

5. Click **Download Template** to download the CSV template.

<a name="csv-template-parameters"></a>
### CSV template parameters

The CSV template has the following fields:

<table>
<col width="20">
<col width="50">
<col width="30">
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Mandatory / Optional</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><b>AssetType / DeviceType </b></td>
<td style="text-align:left">Enter the key of the asset type.</td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>AssetName</b></td>
<td style="text-align:left">Provide the name of the asset you want to create.</td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>Path</b></td>
<td style="text-align:left">Remains blank when you create a root asset. For a child asset, provide a path up to the root asset.<br><br>
<b>Example:</b><br>
For an asset called "Room1" in the hierarchy "Building > Floor > Room" the path value is "Building 1/Floor 1", where "Building 1" and "Floor 1" represent the respective asset types.</td>
<td style="text-align:left">Mandatory (for child assets)</td>
</tr>
<tr>
<td style="text-align:left"><b>Device ID / External ID</b></td>
<td style="text-align:left">If the asset being created has a device associated with it, then provide the Device ID of the device here</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Description</b></td>
<td style="text-align:left">briefly describes the asset being created.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Custom properties for the asset type</b></td>
<td style="text-align:left">6th column onwards (in the CSV template), all the custom properties for the root asset types and all its subsequent child asset types are listed.<br><br>
<b>Info:</b><br>
The [Type](/dtm/asset-types/#types-of-custom-property) of the custom property is also mentioned as a label, for better understanding.
</td>
<td style="text-align:left">Mandatory</td>
</tr>
</tbody>
</table>

![bulk-import-template](/images/dtm/bulk-import/dtm-bulk-import-template.png)

{{< c8y-admon-info>}}
Modify the excel settings to provide the date in a YYYY-MM-DD format. This prevents an auto-correct of the date on input.
{{< /c8y-admon-info>}}

To provide a file input as a custom property value, the file must first be uploaded to a Cumulocity IoT tenant using the {{< product-c8y-iot >}} API.

Refer to this section to upload a file in Cumulocity : [Provide link here]

The binary ID in the API response must be provided as input for the custom property field with type "file" in the CSV template.

If the type is "Boolean", the input field must be either "true" or "false".
If the type is "enumeration", then the input field must be in the list of values specified during creation of the custom property.
If the type is "text" or "number" and criteria were provided during custom property creation, then the input value in CSV template must fulfilf all the criteria.

Fill in details for all the assets which must be created as part of the asset hierarchy.

Start with the asset details for root asset type.
Then enter the asset details for child asset types under the root asset.
Next, enter the details for the next level in the hierarchy of child assets and repeat until the details for all the assets are entered in the CSV template.
Save the CSV template in your system.

### To upload a CSV template

To upload the CSV template follow the steps below:

1. Click **Import assets** in the **Assets** page.

2. Select the asset type in the **Import assets** dialog.

3. Upload the previously filled and saved CSV template in the **Drop file here** section.

4. If all the inputs are provided correctly, the bulk import is successful, resulting in a success notification. The asset hierarchy and its assets are created successfully.

5. View the newly created assets in the **Assets** page.

If the inputs are not provided in the correct format, the bulk import fails with validation errors, resulting in a **Failed asset imports** notification, showing the issue types, for example, an invalid template or an incorrect asset hierarchy.
No assets are created.

![bulk-import-failed-import](/images/dtm/bulk-import/dtm-bulk-import-failed-asset-imports.png)

If the bulk import fails, review the reported issues and try again.

### Partial import

If the asset hierarchy already exists, and you want to import more assets, it can be achieved by a partial import.

To import a single child asset or the child asset hierarchy:

1. Navigate to the child asset page and download the template using **Import assets**.

2. Fill in the details for the child asset hierarchy in the CSV template. See [Filling CSV template for bulk import](#csv-template-parameters) for details.

	{{< c8y-admon-info>}}
From any hierarchy level, the template will be downloaded only for its child hierarchy.
Assets must only be imported for the child hierarchy.
	{{< /c8y-admon-info>}}

3. Enter the details for the child assets in the CSV template.

4. Click **Import assets**.

5. Upload the CSV template in the **Drop file here** section in the **Import assets** dialog.

If all details are mentioned correctly in the CSV template, the child asset hierarchy is created successfully.

An unsuccessful partial import will result in a **Failed asset imports** notification, showing the validation issues.
Review the reported issuels and try again.
