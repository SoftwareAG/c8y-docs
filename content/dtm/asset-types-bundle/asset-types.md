---
weight: 20
title: Asset types
layout: redirect
---

**Asset type** is a blueprint or template to create [Assets](/dtm/asset-hierarchy/#assets). **Asset type** defines how the asset will look like, when created. Using a single asset type, multiple instances of assets can be created. But every asset belongs to only one **Asset type**, it cannot have multiple asset types as the source template.

**Asset type** consists of one or more [Custom properties](/dtm/asset-types/#property-library). Once the asset type is created, it can be used to create various different assets.

To reach the **Asset type** page, nagivate to **Configuration > Digital Twin Library > Asset types**.

{{< c8y-admon-info >}}
By default only the **Asset type** **Group** is present.
{{< /c8y-admon-info >}}

Once you create the **Asset type**, you can see the details to that **Asset type** in the **Asset types** overview (see image below).

![Asset Type overview](/images/dtm/asset-type/dtm-asset-type-view.png)

In the overview you see the following four categories:
*	**Asset type**: Name of the **Asset type**
*	**Key**: Unique identifier for the **Asset type**
*	**Description**: Brief description of the **Asset type**
*	**Last update**: Date and time of when the **Asset type** was last created or updated

Click **Configure columns** to configure the displayed columns.

If you want to reload the screen, click on **Reload**.


##### Creating a new Asset type


If you want to add a new **Asset type**, click **Add asset type**.


 ![assettype-create-new](/images/dtm/asset-type/dtm-asset-type-create-new.png)

To create a new **Asset type** you have to fill out the following six attributes:```

*	**Label**: This information is mandatory. It refers to the name of the **Asset type**. The **Asset type** is further addressed using the information provided here.

*	**Key**: This information is mandatory. It uniquely identifies the **Asset type**. Note that **Key** can only contain letters and numbers, no special characters or space are allowed.

*	**Description**: This information is optional. It offers a brief description of the **Asset type**.

*	**Icon**: This information is optional. It is displayed against the label for each **Asset type**. By default no icon is selected. To select an icon, click **Select icon** on the left. This opens a dialog window where you can either search or filter icons by type or select an icon from the predefined list. Click **Save**. If you do not want to select an icon at this point, click **Cancel**. The dialog window closes automatically.





![Select an icon for the Asset Type](/images/dtm/asset-type/dtm-asset-type-select-icon.png)


* **Child asset types**: This information is optional. It restricts the asset assignment to the defined types. If not set, then no child assets are allowed by default.  To add child asset types, click **Add child asset type**. You see a drop-down field where you can select the allowed **child asset type**. Repeat this process to select multiple **child asset types**. The selected **child asset types** are then displayed under **Allowed child asset types** with the checkbox **Required** on the right. Check the box if the **Asset type** must require this **child asset type**. By default this check box remains unchecked.

If you want to disassociate the child asset from the selected **Asset type**, click the **Remove** icon next to the check box.









{{< c8y-admon-info>}}
If you do not select and check an **child asset types**, then the asset cannot have any child assets.

If one or more **child asset types** are checked as required, an asset created with this **Asset type** can have only child assets belonging to the selected **child asset types**.
{{< /c8y-admon-info>}}

   If one or more child asset types are allowed, then when creating the asset, it can have child assets belonging to only the selected child asset types.

   **Example:**

   If “building” is an **Asset type** and you select "floor" as an allowed child asset type, then the newly created asset “SAG Building” can only have "floor" assets as its child assets.

* **Custom properties**: This information is optional. By default no custom properties are selected.

If you want to add custom property, click **Add custom property**. You see a drop-down field where you can select the existing **custom properties**. Select the desired **custom property**. Repeat this process to select multiple **custom properties**.
You can reorder the **custom properties** via drag and drop.

The selected **custom properties** are then displayed under **Custom properties** with the checkbox **Required** on the right. Check the box if the **Asset type** must require this **custom property**. By default this check box remains unchecked.

If you want to disassociate the **custom property** from **Asset type**, click the **Remove** icon next to the check box.

Once you have filled all mandatory fields you can click **Save**.

   If the process was successful you see a pop-up notification iand are navigated back to the [Asset types](/dtm/asset-types/#asset-types) page.

   If there are any validation issues for any of the fields, they will be highlighted in red and you will see a validation error message. You can then rectify the inputs and then click **Save**.

    ![Validation message for asset type](/images/dtm/asset-type/dtm-asset-type-validation-error.png)

   If you want to cancel the operation, click **Cancel**. There will be no notification. Any inputs will be discarded.




   On click, a dropdown is displayed and all existing custom properties are displayed.
   Choose the custom properties one by one.
   You also have the option to reorder the custom properties by dragging and dropping them.

   For each of the custom property chosen a **Required** check box is displayed on right. By default it is unchecked.
   If you enable the checkbox, then during asset creation the Custom property has to be defined.

   If you want to disassociate the custom property, click on the **Remove** icon against it.

   To search for specific **custom properties** type the respective name in the drop-down field.
   If search is successful, the custom properties are listed and you can select the desired custom property.

   If you cannot find a specific **custom property**, click **New custom property**. In the following dialog window, you can fill out the necessary information. For more details see [how to create a custom property](Add Hyperlink here).

   On click of this option, a pop-up window opens with the same fields as present when creating a **Custom property**.


   ![Add new custom property via asset types](/images/dtm/asset-type/dtm-asset-type-create-new-custom-property.png)

   Refer to section [Create new custom property](/dtm/asset-types/#create-new-custom-property) to create new **Custom property**.

   Once the custom property is created, you can add this custom property in asset type being created.

   Once all the mandatory fields are filled, **Save** button gets enabled. Click **Save** to create the asset type.

   On successful save, a pop-up notification is displayed and you are navigated back to [Asset types](/dtm/asset-types/#asset-types) page.

   If there are any validation issues for any of the fields, same will be highlighted with red highlight and validation error message will be displayed on screen. You can then rectify the inputs and then save the **Asset type**.

    ![assettype-validation](/images/dtm/asset-type/dtm-asset-type-validation-error.png)

   If you want to cancel the operation, click on **Cancel**.

   No notification is displayed, and the **Asset type** is not created.



##### Creating an Asset type for the entire hierarchy

To create an **Asset type** for the entire hierarchy, you need to first add all necessary [Custom properties](/dtm/asset-types/#property-library).

Then [create the asset types](/dtm/asset-types/#creating-a-new-asset-type) in a bottom-up approach, so that all the child asset types are created first, followed by the root asset type at the end.

Once the root asset type is created, you can start [creating assets](/dtm/asset-hierarchy/#creating-assets-ui) for the entire asset hierarchy.

By using this approach, you can create the desired hierarchy including all asset types, sub asset types and **custom properties**.


##### Modifying an existing asset type

If you want to modify an **Asset type**, click the **edit** icon on the right side of each **Asset type**.

Modify the required fields in the dialog window and click **Save**.

On successful save, you will see a success pop-up notification.```


##### Delete an existing Asset type

Use **Delete** to delete an existing asset type. There are two ways to delete an asset.

*	**Delete each asset type individually**

  On the **Asset types** page, hover over an **Asset type** to see the **Delete** icon displayed on right.

  Click **Delete** and you will see an additional confirmation pop up.

  Click **Confirm** to delete the asset type. If you want to cancel the operation, click **Cancel**.



* **Delete the asset types in bulk**

On the **Asset types** page, you can see a checkbox next to each **Asset type**.

Select the checkboxes to delete the asset types. You have the option of deleting one or multiple asset types by using the **Delete option** on the top.

Click **Delete** to delete the selected asset types and click **Confirm** on the confirmation pop up.

Click **Cancel** to cancel the operation.

Once the **Asset type** is deleted, a success pop up notification gets displayed on the right.


You also have the option of sorting the columns using the **Sort** option for the respective columns.

{{< c8y-admon-info>}}
Hover over a column to see the **Sort** option.
{{< /c8y-admon-info>}}

If you want to filter asset types based on text, us the **Filter** option.

{{< c8y-admon-info>}}
Hover over a column to see the **Filter** option.

To clear any applied filters use the **Clear filters** option on the top.

You can see the total number of asset types on the bottom left of the page. To change the number of entries per page use the **Items per page** drop down option.

Once all the required **Asset types** are created, you can start creating [**Assets**](/dtm/asset-hierarchy/#assets) using these asset types.
