---
weight: 20
title: Asset types
layout: redirect
helpcontent:
- label: asset-types
  title: Asset Types
  content: "An asset type is a blueprint or template to create one or multiple assets. It defines how an asset will look like after it is created. An asset type consist of one or more custom properties or child asset types.
 

Click **Add asset type** in the top menu bar to add a new asset type. To edit an existing asset type, click the edit icon on the right of the desired asset type.. 
 

Custom properties are the parameters that define an asset type. To add a new custom property, open the **Property library** tab and click **Add custom property**. "
---

The asset type is a blueprint or template to create one or multiple [assets](/dtm/asset-hierarchy/#assets). It defines how the asset will look like after it is created. An asset type consist of one or more [custom properties](/dtm/asset-types/#property-library) or child asset types.

To reach the **Asset types** page, navigate to **Configuration > Digital Twin Library > Asset types**.

By default only the asset type **Group** is available.

When you create an asset type, you see the details for this asset type in the **Asset types** overview.

![Asset Type overview](/images/dtm/asset-type/dtm-asset-type-view.png)

In the overview you see the following four categories:

*	**Asset type**: Name of the asset type
*	**Key**: Unique identifier for the asset type
*	**Description**: Brief description of the asset type
*	**Last update**: Date and time of when the asset type was last created or updated

Click **Configure columns** to configure the displayed columns.

Click **Reload** to reload the screen.


<a name="create-asset-type"></a>
### To create an asset type

Click Add asset type on the top right to add a new asset type. This opens the **New Asset type** page.
Here, provide the following six parameters:

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
<td style="text-align:left"><b>Label</b></td>
<td style="text-align:left">Refers to the name of the asset type.<br>
This name is used for the asset type throughout the application.</td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>Key</b></td>
<td style="text-align:left">Used to uniquely identify and store the asset type in the DTM application.<br>
{{< c8y-admon-info>}} You cannot edit the key field, once the asset type is created. {{< /c8y-admon-info>}}</td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>Description</b></td>
<td style="text-align:left">Provides a brief description of the asset type.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Icon</b></td>
<td style="text-align:left">Displayed next to the label for each asset type.<br>
By default, no icon is selected. </td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Child asset types</b></td>
<td style="text-align:left">Restricts the asset assignment to the defined types.<br>
By default, no child assets are allowed if this field is not set.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Custom properties</b></td>
<td style="text-align:left">Parameters that define an asset type.<br>
By default, no custom properties are selected.</td>
<td style="text-align:left">Optional</td>
</tr>
</tbody>
</table>

Once all required asset types are created, you can start creating [assets](/dtm/asset-hierarchy/#assets) using these asset types.

The total number of asset types is displayed on the bottom left of the page. Use the **Items per page** dropdown option to change the number of entries per page.


<a name=""></a>
#### To select an icon

1. Click the select icon on the left.
2. In the following dialog window search or filter icons by type or select an icon from the predefined list.
3. Select the desired icon.
4. Click **Save**.


<a name=""></a>
#### To add a child asset type

1. Click **Add child asset type** to add a new child asset type.
2. In the dropdown select one or multiple allowed child asset types.
3. The selected child asset types are then displayed under **Allowed child asset types** with the checkbox **Required** on the right.
   If the asset type requires this child asset type, select the checkbox. By default, it is clear.
4. Click the remove icon next to the checkbox to remove the child asset from the selected asset type.

{{< c8y-admon-info>}}
If you do not select and check a child asset type, then the asset cannot have any child assets.
{{< /c8y-admon-info>}}

If one or more child asset types are checked as required, an asset created with this asset type can have only child assets belonging to the selected child asset types.

**Example:**

If the asset type is "Building" and you select "Floor" as an allowed child asset type, then the newly created asset "SAG Building" can only have "Floor" assets as child assets.


<a name=""></a>
#### To add a custom property to an asset type

1. Click **Add custom property** to add a new custom property to the asset type.
2. In the resulting dialog box, select one or multiple custom properties from the dropdown field.
   To search for specific custom properties type the respective name in the dropdown field.
3. The selected custom properties are then displayed on the **Custom properties** segment with the checkbox **Required** on the right.
   If the asset type requires this custom property, select the checkbox. By default, it remains clear.
4. Reorder the custom properties via drag and drop.
5. To remove the custom property from the asset type, click the remove icon next to the checkbox.
6. Click **Save** to save your settings.

{{< c8y-admon-info>}}
If there are any validation issues with a field, it is highlighted in red with a validation error message asking you to fill in the required information. Enter the necessary information and click **Save**.
{{< /c8y-admon-info>}}

If there is no custom property meeting your requirements, click **New custom property**. For more details on how to create a new custom property see [Property Library > To create a custom property](/dtm/asset-types/#create-custom-property).

<a name=""></a>
### Root asset type

To create a root asset type follow a bottom-up approach by defining all subassets and custom properties in the provided templates first.

This root asset type can then be used to create an asset hierarchy, which then defines all the assets, subassets, custom properties and devices in the DTM application.

As a result you can use the asset hierarchy in other {{< product-c8y-iot >}} applications, such as the {{< product-c8y-iot >}} OEE or the {{< product-c8y-iot >}} Machine Portal.


<a name=""></a>
### To create an asset type for the entire hierarchy

1. Create all required [custom properties](/dtm/asset-types/#property-library).
2. Then [create the asset types](#create-asset-type) in a bottom-up approach, that is, all the child asset types are created first, followed by the root asset type at the end.
3. [Create assets](/dtm/asset-hierarchy/#create-asset) for the new asset hierarchy.

This approach, allows you to create the desired hierarchy including all asset types, subasset types and custom properties in one process.


<a name=""></a>
### To modify an asset type

1. Click the edit icon on the right side of each asset type.
2. Make your changes in the editor.
3. Click **Save**.
4. If this asset type is used by any asset, select **Confirm** in the resulting confirmation dialog to continue saving your changes.


<a name=""></a>
### To delete an asset type

There are two ways to delete an asset type:


<a name=""></a>
#### Delete each asset type individually

On the **Asset types** page, hover over the desired asset type and click the delete icon on the right.


<a name=""></a>
#### Delete the asset types in bulk

On the **Asset types** page, select the checkboxes next to the desired asset types. Click **Delete** to delete the selected asset types.


<a name=""></a>
### To sort asset types

To sort columns, hover over the respective column header and click the sort icon for an ascending or descending order.


<a name=""></a>
### To filter asset types

1. Use the filter option to filter asset types based on text in the respective asset group.
2. Hover over a column title for the filter icon to appear on the right.
3. Click the icon to filter the assets in this column.
4. To clear all applied filters click **Clear filters** at the top.
