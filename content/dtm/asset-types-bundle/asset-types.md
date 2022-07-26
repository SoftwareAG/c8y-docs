---
weight: 20
title: Asset types
layout: redirect
---

**Asset type** is a blueprint or template to create **Assets** [Link to assets to be provided here]. **Asset type** defines how the asset will look like, when created. Using a single asset type, multiple instances of assets can be created. But every asset belongs to only one **Asset type**, it cannot have multiple asset types as the source template.

**Asset type** consists of one or more **Custom properties** [Provide hyperlink to Custom properties here]. Once the asset type is created, it can be used to create various different assets.

Navigate to Asset types page via path “Configuration > Digital twin library > Asset types”.

>**Info:** By default only the “Group” **Asset type** will be present.

Once you create the **Asset type**, view the details in Asset types page.

[Screenshot to be added.]

Below 4 column headers are displayed in Asset types page:
1.	Asset type: Name of the **Asset type**
2.	Key : Unique identifier for the **Asset type**
3.	Description: Brief description about the **Asset type**.
4.	Last update : Date and time of when the **Asset type** was last created or updated.

If you want to select the columns to be displayed, use **Configure columns**.

If you want to reload the screen, click on **Reload**.

##### **Creating a new Asset type**


If you want to add a new **Asset type**, click **Add asset type**. "New asset type” page loads.

Screenshot to be added.

**Asset type** has the following 6 attributes :

1.	Label: Mandatory field label refers to the name of the **Asset type**. **Asset type** is addressed using the label field.

2.	Key: Mandatory field key uniquely identifies the **Asset type**. Key can contain only letters and numbers. No special characters or space are allowed.

3.	Description: Optional field description briefly describes the **Asset type**.
    You can enter a brief description for the **Asset type** or choose to leave it blank.

4.	Icon: Icon is an optional field and will be displayed against the label for each **Asset type**, if chosen. By default no icon is selected.

     To choose an icon, click on **select icon** option on left, a pop-up window loads.

     You can either search, or filter by type or simply scroll down and select an icon from the predefined list of icons provided.

     Select an icon and click on **Save**.

Screenshot to be added.

  If you don’t want to select any icon, click **Cancel**. You will be navigated back to “New asset type” page.

5. Child Asset types: Setting child asset types restricts asset assignment to the defined types. Otherwise, by default no child assets are allowed.

   On click of **Add child asset type** button, a dropdown gets displayed on screen. You can select allowed child asset types from this dropdown.
   On click of the dropdown, all the asset types get listed. You have to select the allowed types one by one.

   Once child asset types are selected, it gets displayed in “Child asset types” section under “Allowed child asset types”. Against each row a **Required** check box will be present on right. By default this check box is disabled.  

   If you check the **Required** checkbox, then during asset creation, addition of that child asset is mandatory.

   For each added child asset type, a **Remove** icon displayed on extreme right.

   If you want to disassociate the child asset from asset type, click on the **Remove** icon.

   Allowed child asset types is an optional field. If no child asset types are mentioned, then the asset cannot have any child assets.
   If one or more child asset types are allowed, then when creating the asset, it can have child assets belonging to only the selected child asset types.

   **Example:**

   If “building” is an **Asset type** and allowed child asset type is chosen as "floor" asset type, then when creating the asset “SAG Building”, it can have only floor assets as its child assets.

6. Custom properties: This is an optional field for **Asset type**. By default no custom properties are selected.

   If you want to add custom property, click **Add custom property**.  

   On click, a dropdown is displayed and all existing custom properties are displayed.
   Choose the custom properties one by one.
   You also have the option to reorder the custom properties by dragging and dropping them.

   For each of the custom property chosen a **Required** check box is displayed on right. By default it is unchecked.
   If you enable the checkbox, then during asset creation the Custom property has to be defined.

   If you want to disassociate the custom property, click on the **Remove** icon against it.

   You can also search for the custom properties by typing the name in the dropdown.
   If search is successful, the custom properties are listed and you can select the desired custom property.

   In case of unsuccessful search, you also have an option of creating a new custom property by clicking on **New custom property**.

   On click of this option, a pop-up window opens with the same fields as present when creating a **Custom property**.

   Screenshot to be provided for custom property pop up window.

   Refer to creation of **Custom property** here : Hyperlink to be provided for Custom property creation.

   Once the custom property is created, you can add this custom property in asset type.

   Once all the mandatory fields are filled, **Save** button gets enabled. Click **Save** to create the asset type.

   On successful save, a pop-up notification is displayed and you are navigated back to Asset types [Link to asset types page here] page.

   If there are any validation issues for any of the fields, same will be highlighted with red highlight and validation error message will be displayed on screen. You can then rectify the inputs and then save the **Asset type**.

   Screenshot for validation error.

   If you want to cancel the operation, click on **Cancel**.

   No notification is displayed, and the **Asset type** is not created.



##### **Creation of Asset type for the Entire hierarchy**

To create **Asset type** for the entire hierarchy, first add all necessary **Custom property** [Link to add custom property to be given here].

Then create the asset types [Link to create a new asset type to be provided here] in a bottom-up approach, so that all the child asset types are created first and then the root asset type is created at the end.

Once the root asset type is created, **Asset** [hyperLink to asset] can then be created for this.

Using this approach the desired hierarchy with all the asset types, sub asset types and Custom properties are created.


##### **Modifying an existing asset type**

If you want to modify the **Asset type**, click on the **edit** icon against the **Asset type** in Asset types page.

"Edit asset type" page loads with asset type details. Modify the required fields and save the changes using **Save**.

On successful save a success pop-up notification is displayed.


##### **Delete an existing Asset type**

**Delete** option is used to delete existing asset types. There are 2 ways to delete an asset.

*	**Delete each asset type individually:**

  In Asset types page, hover over an **Asset type**, **Delete** icon is displayed on right.

  Click on this **Delete** icon, an additional confirmation pop up is displayed.

Click **Confirm** to delete the asset type.
Click **Cancel** to cancel the operation.


* **Delete the asset types in bulk:**

Against each **Asset type**, checkbox is present in Asset types page.

Select the checkboxes against the asset types to be deleted. On Single or multiple selection, **Delete option** gets displayed on the top bar.

Click **Delete** to delete the selected asset types and click **Confirm** on the confirmation pop up.

Click **Cancel** to cancel the operation.

Once the **Asset type** is deleted, a success pop up notification gets displayed on the right.


Additionally you can sort the columns using the **sort** option against the respective columns.

>**Info:** Sort option gets highlighted on hovering over the columns.

If you want to filter asset types based on text, then **filter** option can be used.

>**Info:** Filter option gets highlighted on hover against the columns.

Applied filters can be cleared using the **Clear filters** option on top.

Number of asset types gets displayed on bottom left of the page. Number of entries in a page can be changed using the **Items per page** dropdown. Pagination is provided on bottom right of page.

Once all the required **Asset types** are created, **Assets** [link to assets] can be created using these asset types.
