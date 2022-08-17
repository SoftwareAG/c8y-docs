---
weight: 20
title: Asset types
layout: redirect
---

The asset type is a blueprint or template to create [assets](/dtm/asset-hierarchy/#assets). An asset type defines how the asset will look like when created. Multiple assets can be created through one single asset type. An asset type consists of one or more [custom properties](/dtm/asset-types/#property-library).

{{< c8y-admon-info >}}
While every asset belongs to only one asset type, it cannot have multiple asset types as the source template.
{{< /c8y-admon-info >}}

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


### To create a new asset type

Click **Add asset type** on the top right to add a new asset type. This opens the **Building Asset Type** page.


 ![Building Asset Type page](/images/dtm/asset-type/dtm-asset-type-create-new.png)

Provide the following six parameters:

<table>
<col width="20">
<col width="60">
<col width="20">
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
<td style="text-align:left">Refers to the name of the asset type. This name is used for the asset throughout the application.</td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>Key</b></td>
<td style="text-align:left">Used to uniquely identify and store the asset type in the DTM.</td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>Description</b></td>
<td style="text-align:left">Provides a brief description of the asset type.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Icon</b></td>
<td style="text-align:left">Displayed next to the label for each asset type. By default, no icon is selected. </td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Child asset types</b></td>
<td style="text-align:left">Restricts the asset assignment to the defined types. By default, no child assets are allowed if this field is not set.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Custom properties</b></td>
<td style="text-align:left">Parameters that define an asset type. By default, no custom properties are selected.</td>
<td style="text-align:left">Optional</td>
</tr>
</tbody>
</table>

Once all required asset types are created, you can start creating [assets](/dtm/asset-hierarchy/#assets) using these asset types.

The total number of asset types is displayed on the bottom left of the page. Use the **Items per page** dropdown option to change the number of entries per page.

#### To select an icon

To select an icon, click the select icon on the left. In the following dialog window you can either search or filter icons by type or select an icon from the predefined list. Select the desired icon and click **Save**.

#### To add a child asset type
Click **Add child asset type** to add a new child asset type. In the dropdown select one or multiple allowed child asset types. The selected child asset types are then displayed under **Allowed child asset types** with the checkbox **Required** on the right. If the asset type requires this child asset type, select the checkbox. By default, it is clear. Click the remove icon next to the checkbox to remove the child asset from the selected asset type.

{{< c8y-admon-info>}}
If you do not select and check a child asset type, then the asset cannot have any child assets.
{{< /c8y-admon-info>}}

If one or more child asset types are checked as required, an asset created with this asset type can have only child assets belonging to the selected child asset types.

**Example:**

If the asset type is "Building" and you select "Floor" as an allowed child asset type, then the newly created asset "SAG Building" can only have "Floor" assets as child assets.

#### To add a custom property to an asset type

Click **Add custom property** to add a new custom property to the asset type. In the resulting dialog box, select one or multiple custom properties from the dropdown field. To search for specific custom properties type the respective name in the dropdown field. The selected custom properties are then displayed on the **Custom properties** segment with the checkbox **Required** on the right. If the asset type requires this custom property, select the checkbox. By default, it remains clear.
You can reorder the custom properties via drag and drop.

To remove the custom property from the asset type, click the remove icon next to the checkbox.

Click **Save** to save your settings.

{{< c8y-admon-info>}}
If there are any validation issues with a field, it is highlighted in red with a validation error message asking you to fill in the required information. Enter the necessary information and click **Save**.
{{< /c8y-admon-info>}}

If there is no custom property meeting your requirements, click **New custom property**. For more details on how to create a new custom property see [Property Library > To create a new custom property](/dtm/asset-types/#create-new-custom-property).


### Root asset type

To create a root asset type follow a bottom-up approach by defining all subassets and custom properties in the provided templates first. This root asset type can then be used to create an asset hierarchy, which then defines all the assets, subassets, custom properties and devices in the DTM. As a result you can use the asset hierarchy in other {{< product-c8y-iot >}} applications, such as the {{< product-c8y-iot >}} OEE or the {{< product-c8y-iot >}} Machine Portal.

### To create an asset type for the entire hierarchy

To create an asset type for the entire hierarchy, first create all required [custom properties](/dtm/asset-types/#property-library). Then [create the asset types](/dtm/asset-types/#creating-a-new-asset-type) in a bottom-up approach, that is, all the child asset types are created first, followed by the root asset type at the end.

Afterwards, you can start [creating assets](/dtm/asset-hierarchy/#creating-assets-ui) for the new asset hierarchy.

This approach, allows you to create the desired hierarchy including all asset types, subasset types and custom properties in one process.


### To modify an asset type

To modify an asset type, click the edit icon on the right side of each asset type.

In the editor, make your changes and click **Save**.


### To delete an asset type

Click **Delete** to delete an existing asset type. There are two ways to delete an asset.

#### Delete each asset type individually

On the **Asset types** page, hover over the desired asset type and click the delete icon on the right.

#### Delete the asset types in bulk

On the **Asset types** page, select the checkboxes next to the desired asset types. Click **Delete** to delete the selected asset types.


### To sort asset types

To sort columns, hover over the respective column header and click the sort icon for an ascending or descending order.

### To filter asset types

Use the filter option to filter asset types based on text in the respective asset group. Hover over a column title for the filter icon to appear on the right. Click the icon to filter the assets in this column.

To clear all applied filters click **Clear filters** at the top.
