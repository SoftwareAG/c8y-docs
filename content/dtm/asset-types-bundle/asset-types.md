---
weight: 20
title: Asset types
layout: redirect
---

The asset type is a blueprint or template to create [assets](/dtm/asset-hierarchy/#assets). An asset type defines how the asset will look like, when created. Using a single asset type, multiple instances of assets can be created. But every asset belongs to only one asset type, it cannot have multiple asset types as the source template.

The asset type consists of one or more [custom properties](/dtm/asset-types/#property-library). Once the asset type is created, it can be used to create various different assets.

To reach the **Asset type** page, nagivate to **Configuration > Digital Twin Library > Asset types**.

{{< c8y-admon-info >}}
By default only the asset type **Group** is available.
{{< /c8y-admon-info >}}

Once you create an asset type, you can see the details for this asset type in the **Asset types** overview.

![Asset Type overview](/images/dtm/asset-type/dtm-asset-type-view.png)

In the overview you see the following four categories:
*	**Asset type**: Name of the asset type
*	**Key**: Unique identifier for the asset type
*	**Description**: Brief description of the asset type
*	**Last update**: Date and time of when the asset type was last created or updated

Click **Configure columns** to configure the displayed columns.

To reload the screen, click **Reload**.


### To create a new asset type


To add a new asset type, click **Add asset type** on the top right. This opens the **Building Asset Type** page (see image below).


 ![Building Asset Type page](/images/dtm/asset-type/dtm-asset-type-create-new.png)

To create a new asset type you have to fill out the following six attributes:

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
<td style="text-align:left">refers to the name of the asset type. The asset type is further addressed using the information provided here.</td>
<td style="text-align:left"><b>This information is mandatory.</b></td>
</tr>
<tr>
<td style="text-align:left"><b>Key</b></td>
<td style="text-align:left">Used to uniquely identify and store the asset type in the DTM.</td>
<td style="text-align:left"><b>This information is mandatory.</b></td>
</tr>
<tr>
<td style="text-align:left"><b>Description</b></td>
<td style="text-align:left">Provides a brief description of the asset type.</td>
<td style="text-align:left"><b>This information is optional.</b></td>
</tr>
<tr>
<td style="text-align:left"><b>Icon</b></td>
<td style="text-align:left">It is displayed against the label for each asset type. By default no icon is selected. To select an icon, click **Select icon** on the left. This opens a dialog window where you can either search or filter icons by type or select an icon from the predefined list. Click **Save**.</td>
<td style="text-align:left"><b>This information is optional.</b></td>
</tr>
<tr>
<td style="text-align:left"><b>Child asset types</b></td>
<td style="text-align:left">Restricts the asset assignment to the defined types. If not set, then no child assets are allowed by default.  To add child asset types, click **Add child asset type**. You see a drop-down field where you can select the allowed **child asset type**. Repeat this process to select multiple **child asset types**. The selected **child asset types** are then displayed under **Allowed child asset types** with the checkbox **Required** on the right. Check the box if the asset type must require this **child asset type**. By default this check box remains unchecked. To disassociate the child asset from the selected asset type, click the **Remove** icon next to the check box.</td>
<td style="text-align:left"><b>This information is optional.</b></td>
</tr>
<tr>
<td style="text-align:left"><b>Custom properties</b></td>
<td style="text-align:left">By default no custom properties are selected.</td>
<td style="text-align:left"><b>This information is optional.</b></td>
</tr>
</tbody>
</table>




{{< c8y-admon-info>}}
If you do not select and check an **child asset types**, then the asset cannot have any child assets.

If one or more **child asset types** are checked as required, an asset created with this asset type can have only child assets belonging to the selected child asset types.
{{< /c8y-admon-info>}}

   If one or more child asset types are allowed, then when creating the asset, it can have child assets belonging to only the selected child asset types.

   **Example:**

   If “building” is an asset type and you select "floor" as an allowed child asset type, then the newly created asset “SAG Building” can only have "floor" assets as its child assets.

<!--- ### To add a custom property

To add custom property, click **Add custom property**. You see a drop-down field where you can select the existing custom properties. Select the desired custom property. Repeat this process to select multiple custom properties.
You can reorder the custom properties via drag and drop.

The selected custom properties are then displayed under **Custom properties** with the checkbox **Required** on the right. Check the box if the asset type must require this custom property. By default this check box remains unchecked.

To disassociate the custom property from asset type, click the **Remove** icon next to the check box.

Once you have filled all mandatory fields you can click **Save**.

   If the process was successful you see a pop-up notification and are navigated back to the [asset types](/dtm/asset-types/#asset-types) page.

   If there are any validation issues for any of the fields, they will be highlighted in red and you will see a validation error message. You can then rectify the inputs and then click **Save**.

    ![Validation message for asset type](/images/dtm/asset-type/dtm-asset-type-validation-error.png)

   There will be no notification. Any inputs will be discarded.

   On click, a dropdown is displayed and all existing custom properties are displayed.
   Choose the custom properties one by one.
   You also have the option to reorder the custom properties by dragging and dropping them.

   For each of the custom property chosen a **Required** check box is displayed on right. By default it is unchecked.
   If you enable the checkbox, then during asset creation the custom property has to be defined.

   To remove the custom property, click the **Remove** icon next to it.

   To search for specific custom properties type the respective name in the drop-down field.

   If you cannot find a specific **custom property**, click **New custom property**. In the following dialog window, you can fill out the necessary information. For more details see [Create new custom property](/dtm/asset-types/#create-new-custom-property).

   ![Add new custom property via asset types](/images/dtm/asset-type/dtm-asset-type-create-new-custom-property.png)

   Once the custom property is created, you can add this custom property in asset type being created.

    ![assettype-validation](/images/dtm/asset-type/dtm-asset-type-validation-error.png)---> 

### To create an asset type for the entire hierarchy

To create an asset type for the entire hierarchy, you need to first add all necessary [custom properties](/dtm/asset-types/#property-library).

Then [create the asset types](/dtm/asset-types/#creating-a-new-asset-type) in a bottom-up approach, so that all the child asset types are created first, followed by the root asset type at the end.

Once the root asset type is created, you can start [creating assets](/dtm/asset-hierarchy/#creating-assets-ui) for the entire asset hierarchy.

By using this approach, you can create the desired hierarchy including all asset types, sub asset types and **custom properties**.


### Modifying an existing asset type

To modify an asset type, click the **Edit** icon on the right side of each asset type.

Modify the required fields in the dialog window and click **Save**.

On successful save, you will see a success pop-up notification.```


### To delete an existing asset type

Click **Delete** to delete an existing asset type. There are two ways to delete an asset.

*	**Delete each asset type individually**

  On the **Asset types** page, hover over an asset type to see the **Delete** icon displayed on right.

  Click **Delete** and you will see an additional confirmation pop up.

  Click **Confirm** to delete the asset type.



* **Delete the asset types in bulk**

On the **Asset types** page, you can see a checkbox next to each asset type.

Select the checkboxes to delete one or more asset types.

Click **Delete** to delete the selected asset types and click **Confirm** on the confirmation pop up.

Click **Cancel** to cancel the operation.

Once the asset type is deleted, a success pop up notification gets displayed on the right.


You also have the option of sorting the columns using the **Sort** option for the respective columns.

{{< c8y-admon-info>}}
Hover over a column to see the **Sort** option.
{{< /c8y-admon-info>}}

To filter asset types based on text, us the **Filter** option.

{{< c8y-admon-info>}}
Hover over a column to see the **Filter** option.

To clear any applied filters use the **Clear filters** option on the top.

You can see the total number of asset types on the bottom left of the page. To change the number of entries per page use the **Items per page** drop down option.

Once all the required asset types are created, you can start creating [assets](/dtm/asset-hierarchy/#assets) using these asset types.

### Root asset type

To create a root asset type follow a bottom-up approach by defining all subassets and custom properties in the provided template first. This root asset type can then be used to create an asset hierarchy, which then (?) defines all the assets, subassets, custom properties and devices in the DTM. As a result you can use the asset hierarchy in other {{< product-c8y-iot >}} applications, such as the {{< product-c8y-iot >}} OEE or the {{< product-c8y-iot >}} Machine Portal.

DTM also provides a Localization feature, where you can customize and display the translation for certain content. See [ADD HYPERLINK TO TRANSLATIONS HERE]().
