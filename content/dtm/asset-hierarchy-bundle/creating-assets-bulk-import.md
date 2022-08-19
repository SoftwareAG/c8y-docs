---
weight: 20
title: Creating assets via bulk import
layout: redirect
---


To import the entire asset hierarchy with all assets at once, use the bulk import feature. For each [asset type](/dtm/asset-types/#asset-types), a CSV template is provided.

Fill in the required details in this template and upload this file, to create the assets in bulk for the selected asset type.

### To create a role to use the bulk import feature

To use the Bulk import feature, you must give permissions for **Digital Twin** role, following these steps:

Navigate to [Administration](/users-guide/administration/#overview) via the application switcher in the top right corner.

Under **Quick links** click **Roles**.

In the **Global roles** tab, select the role which is already assigned for your username.

Set all available permissions for **Digital Twin** under "Permissions" section by selecting the following checkboxes:

1. Under **Application access**, select the "Digital Twin".

2. Under **Custom applications**, select the "Digital Twin Manager".

3. Click **Save**.

![Permissions for bulk import](/images/dtm/bulk-import/dtm-bulk-import-assign-permissions.png)


Once the permissions are assigned, bulk import feature can be used.

{{< c8y-admon-info>}}
If the permissions are not assigned, then the CSV template will not get downloaded correctly.
{{< /c8y-admon-info>}}

### To download a CSV template for bulk import

To import a complete asset hierarchy at once, you first must download the CSV template for each asset type in the hierarchy.

To download the CSV template, follow the steps below:


1. Navigate to **Assets** page. Click **Import assets**.

2. IMPORT ASSETS window loads with a “Choose asset type” dropdown.

3. If no asset types are created yet, then only “Group” asset type is listed in the dropdown.

4. If you have added the asset types, all the root asset types will be listed in the dropdown.

5. Select the asset type for which the asset hierarchy must be created.

![bulk-import-asset](/images/dtm/bulk-import/dtm-bulk-import-import-assets-window.png)

6. On selection, below 2 additional options appear.
	 * **Drop file here** section: An option to upload the CSV template as file, for importing assets in bulk.
   * **Download Template** option: To download the CSV template for the selected asset type.

7. Click on **Download Template** option to download the CSV template.

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


To provide a file input as custom property value, then first the file must be uploaded in Cumulocity tenant using {{< product-c8y-iot >}} API.

Refer to this section to upload a file in Cumulocity : [Provide link here]

The Binary ID in the API response must be provided as input for the “File” type custom property field in the CSV template.

If the **Type** is **Boolean**, then input field must be either “true” or “false”.

If the **Type** of custom property is **Enumeration**, then the input field must belong to the list of values mentioned during creation of custom property.

If the **Type** is **Text** or **Number** and criteria was provided during custom property creation, then the input value in CSV template must fulfil all the criteria.

Fill in details for all the assets which must be created as part of the asset hierarchy.

Start with the asset details for root asset type. Then enter the asset details for child asset types under the root asset.
Next, enter the details for second level hierarchy of child assets and continue this until details for all the assets are entered in the CSV template.

Once you fill in all details, save the CSV template in your system.

### To upload a CSV template

To upload the CSV template follow the below steps:

1. Click **Import assets** in **Assets** page.

2. Choose the asset type in IMPORT ASSETS window.

3. Upload the previously filled and saved CSV template in the **Drop file here** section.

4. If all the inputs are provided correctly, bulk import is successful and same is notified with a pop-up notification. The asset hierarchy with all the assets are created successfully.

5. View the newly created assets in **Assets** page.

If the inputs are not provided in the correct format, bulk import fails with validation errors and same is shown in a FAILED ASSET IMPORTS window. No assets are created.

![bulk-import-failed-import](/images/dtm/bulk-import/dtm-bulk-import-failed-asset-imports.png)


Rectify the issues and try the import again.

If there is an issue with the template being uploaded (example: invalid template or incorrect asset hierarchy), then the same is notified with a pop-up notification and assets will not be created.


### Partial import

In case the asset hierarchy is already existing, and you want to import some more asset/s, then same can be achieved by Partial import.

To import a single child asset or the child asset hierarchy, first navigate to the child asset page and download the template using **Import assets** option.

Next, fill in details for the child asset hierarchy in the CSV template.

Refer to this section for details on filling the CSV template: [Filling CSV template for bulk import](#csv-template-parameters)

{{< c8y-admon-info>}}
From any hierarchy level, template will be downloaded only for its succeeding child hierarchy. And assets must be imported only for that child hierarchy.
{{< /c8y-admon-info>}}

Once you enter all the details correctly for child asset in the CSV template, upload the template using below steps:

1. Click **Import assets**.

2. Upload the CSV template in the **Drop file here** section in the **Import assets** dialog window.

{{< c8y-admon-info>}}
If all details are mentioned correctly in CSV template, the child asset hierarchy is created successfully. If partial import is not successful, same is notified with a pop-up notification. In case there are validation issues, it is shown in **Failed asset imports** window. Rectify the errors and try again with valid inputs.
{{< /c8y-admon-info>}}
