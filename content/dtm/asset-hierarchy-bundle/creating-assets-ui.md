---
weight: 10
title: Creating assets via the UI
layout: redirect
---


Navigate to **Assets** page using the left nav. By default, no assets are present and a message is displayed prompting to create the assets.

If there are assets already created, then it is listed on this page.

![assets-view](/images/dtm/assets/dtm-assets-view-assets.png)


##### **Add Asset**

To create assets via UI, click on **Add Asset**

"New asset page" is displayed to create a new asset hierarchy.

Click on **Choose asset type** dropdown on left. All the root asset types get displayed in this list.

>**Info:** Root asset type is an **Asset type** which is at the top of hierarchy and does not have any Parent Asset type above it.

Select the root asset type, for which the asset must be created, in this dropdown.

On choosing the root asset type, **Asset hierarchy** gets displayed on left in the form of a hierarchy. The mandatory fields are mentioned with a “required” label against it. Root asset is indicated with a label START NODE.

The **Asset hierarchy** gives a bird’s eye view of the entire hierarchy.

Fill in Asset related details on the right. The following sections are present, fill all the mandatory fields, in order to move to the next section.

*	Name : Mandatory field **Name** indicates the name of the **Asset**.

**Example:**

If you are creating an **Asset hierarchy** for a "Building" Asset, then give the name of the building here.

*	Description : Optional field **Description** can be provided which gives a brief description about the **Asset** being created.

*	Custom properties : This section lists all the custom properties [link to Property library] which must be defined for the **Asset** being created.

When creating the **Asset type** [link to Asset type], these custom properties were chosen. Now the values must be provided for all the custom properties for the **Asset** being created.

![assets-new](/images/dtm/assets/dtm-assets-create-text-type.png)

##### **Custom property of Type Text or Number:**

If the **Type** of custom property is either **Text** or **Number**, then provide a valid text or numeric input as value.

**Example:**

If "Building" asset is being created, and “Building Dimension” and “Building color” are the 2 custom properties for this asset, then values must be provided for both.

"Building color" can be initialized to “white” and for "Building dimension", values can be 98 and 50 for building height and width respectively.

If default values were provided when creating the custom properties of **Type** text or number, then those default values get displayed here. You can either retain the same or modify and enter a new value.

In case no default value was mentioned during creation, then you must provide a value now.


##### **Custom property of Type Date picker:**

If the **Type** of custom property is **Date picker**, then a calendar will be displayed, and a date must be provided as value for the custom property.

**Example:**

In case “Project start date” is a **Custom property** for the "Building" asset, then the start date of the project can be provided as its value when creating the "Building" asset.

![assets-date](/images/dtm/assets/dtm-assets-create-date-type.png)

##### **Custom property of Type File upload:**

If the **Type** of **Custom property** is “File upload”, then during asset hierarchy creation a file browser is displayed, and you must choose a valid file to be uploaded.

When creating the **Custom property**, allowed file types are defined. When creating the asset hierarchy, the file chosen for upload must belong to the list of allowed file types. Any file type not mentioned in the list will not be allowed.

**Example:**

Blueprint for a building can be uploaded as one of the **Custom property** and later this can be used for future references.

>**Info:** In case file is uploaded which is not present in allowed file types list, it results in validation error and asset will not be created.

##### **Custom property of Type Enumeration:**

In case the **Custom property** is of **Type** “Enumeration”, then when creating the **Asset hierarchy**, the options provided during creation are displayed in a dropdown. Choose a value for the **Custom property** from this dropdown.

**Example:**

If “building color” is a **Custom property** and color of the building can be either “white” or “black” or “grey” alone, then **Type** can be chosen as **Enumeration** and these 3 colors can be provided as list of options during the creation of **Custom property**.

When **Asset hierarchy** is being created, a dropdown appears with these 3 options and you must choose a value for **Custom property** from this dropdown.

![assets-enum](/images/dtm/assets/dtm-assets-create-enum-type.png)

##### **Custom property of Type Boolean:**

In case the **Custom property** is of the **Type** “Boolean”, then a check box will be present against the **Custom property**.

When creating the **Asset**, the presence or absence of the **Custom property** can be defined by enabling or disabling the check box respectively.


>**Info:** When **Asset type** is defined, few of the custom properties are marked as **Required** using checkbox. When **Asset** is created, then these custom properties must be defined/ assigned a value during creation.
If all the mandatory custom fields are not initialized with values, then the **Next** or **Create** option does not get enabled.
The remaining custom properties can be defined during asset creation or can be assigned a value after the asset is created.

The **Custom property** section appears only, if for the **Asset type** the custom properties were chosen. In case, the **Asset type** does not have any custom properties, then during asset hierarchy creation, the **Custom property** section is not displayed.

* Assigned Devices: By default no devices are assigned. You can assign devices for the assets using below steps.


##### **Assign devices:**

Click **Assign devices** option, “Assign devices” page loads with the list of devices.

![assign-devices](/images/dtm/assets/dtm-assets-assign-devices.png)

All the devices present in the tenant get displayed here. In case new device must be added, it must be added under **Device Management** of {{< product-c8y-iot >}}. Refer section: Hyperlink to be added.

Check box is provided against each device on left and you can select single or multiple devices to assign.

>**Info:** Select only those devices which are part of the current asset being created. If a device belongs to a child asset, then select it when the child asset is being created.

Various columns are present that specify the device details for each device.

The columns can be configured using **Configure columns** option on top right.

Click on **Reload** to reload the page and display the latest list of devices present in the {{< product-c8y-iot >}} tenant.

Click **Sort** on the applicable columns to view the device data in either ascending or descending order.

In case you want to filter devices based on text, use **Filter** option in applicable columns. When filter is applied, same is notified on top.

To clear the filters, click **Clear all filters**.

>**Info:** The **Sort** and **Filter** icons appear on hover over each column.

Devices once selected can also be deselected using the checkbox, or also by clicking on **Cancel** on the top bar, on which all selected devices get deselected.

Once you select a device/s, then the **Assign** button on bottom gets enabled.

Click **Assign** to assign the devices. Devices are assigned to **Asset** being created and you are navigated back to Asset hierarchy creation page.

You also have an option of not assigning any devices. Click on **Cancel**, you are navigated back to Asset hierarchy creation page.

Once you fill all the mandatory fields for the **Asset**, then the **Next** button gets enabled.

Click **Next**, asset hierarchy details for the next asset to be created loads. Fill in the asset details to proceed further.

As **Assets** are defined for each hierarchy level, same is indicated via green tick mark on the Asset hierarchy on left.


>**Info:** In case there are validation errors on the page, it is indicated by red highlights. Correct the same to proceed further.

##### **Adding multiple instances of Assets:**

At each hierarchy level, multiple assets can be created from a Single **Asset type**, based on the requirement.

**Example:**

In case you have 1 building and 2 floors within the building, then create the asset for “building” first, then using floor asset type, add first floor.

Next using the **Add** button on bottom, add the second floor asset.

![assets-multiple](/images/dtm/assets/dtm-assets-add-multiple-instance.png)

Click on **Delete** icon on top right, if you want to delete the added asset template,

>**Info:** **Delete** icon appears on hover.

Click **Previous**, if you want to modify any of the details for asset in previous screen, during asset hierarchy creation.

Click **Cancel** if you want to cancel the creation of asset.

Progress of asset hierarchy creation can be tracked with the help of green tick marks.

If you want to modify any of the assets, then same can be done by navigating to the respective asset page using **Previous** and **Next** buttons.

Once all the assets are created for each hierarchy level, then a confirmation page loads. Hierarchy is displayed with all the assets created.

![assets-confirmation](/images/dtm/assets/dtm-assets-confirmation-page.png)

If all changes are in place, click on **Confirm** in the Confirmation page to create the entire Asset hierarchy with all the assets.

On successful **Asset hierarchy** creation, a success pop-up notification is displayed on top right.

Once the **Asset hierarchy** is created, it can be viewed by clicking on the root Asset and navigating further. Check “view asset hyperlink” for reference.


##### **Sub Assets:**

On click of the root Asset in **Assets** page, **Subassets** page loads. **Subassets** page has details of root asset, subassets for the root asset, the child devices for the root asset and the custom properties for root Asset.

![subassets](/images/dtm/assets/dtm-assets-subassets-page.png)

**Subassets** page has below 3 options on top right corner:

*	**Add child asset** : On click of **Add child asset** option, **Asset hierarchy** page loads with parent being the root asset or asset where “add child asset” option is invoked from.

Parent asset is displayed with the label PARENT NODE on top of it.

The **Asset hierarchy** that loads will be a subset of the root **Asset hierarchy**.

![child-asset](/images/dtm/assets/dtm-assets-add-child-asset.png)

**Example:**

If "Building" is a root level asset, "Floor" is a child asset of building and "Room" is a child asset of floor. (Building --> Floor --> Room)

In this case, if you navigate to "Building" asset and click on **Add child asset**, then **Asset hierarchy** loads for "Floor" and "Room" assets creation. (“Floor -->Room”)

In case, you navigate to existing "Floor" asset and want to add a child asset, then child asset can be added only for "Room".

For more details on how to add **Assets** in **Asset hierarchy**, please refer to section --> Hyperlink to be provided for Creation of Assets via UI

>**Info:** In case you are at the end of the hierarchy which cannot have any child assets, then on click of **Add child asset** there will be no options to create child assets.

*	**Assign devices** : In case devices have to be added at any hierarchy level, then click on **Assign devices** option on top right.

Assign devices screen loads with the list of devices present in the {{< product-c8y-iot >}} tenant. You can choose a device/s from this list and assign to the particular asset.

For more details on **Assign devices** refer --> Hyperlink to be added for Add asset > Assign devices.


*	**Import assets** : If you want to import the assets in bulk, either for the entire hierarchy or only for the child hierarchy, bulk import option can be used.

Refer to this section to know about bulk import : Hyperlink to bulk import.
