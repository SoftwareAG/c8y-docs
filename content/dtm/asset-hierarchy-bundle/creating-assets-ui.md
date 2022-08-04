---
weight: 10
title: Creating assets via the UI
layout: redirect
---

You have two options for creating assets in the DTM application. The following section describes how to create an asset via the UI. Alternatively, see [Creating assets via bulk import](/dtm/asset-hierarchy/#creating-assets-bulk-import) on how to import assets in bulk into DTM.


### Assets

In DTM assets are the digital representation of physical assets. An asset in DTM can contain numerous subassets and devices. You also have the opportunity to define properties or attributes of an assets through [custom properties](/dtm/asset-types/#property-library).

To work with assets in DTM navigate to the **Assets** page using the navigator on the left. When you first start using the DTM application, no assets are displayed in the **Assets** page by default, instead you see a message is displayed prompting to create the assets (SCREENSHOT NECESSARY).

If you already created assets, you find them listed on this page (see image below).

![assets-view](/images/dtm/assets/dtm-assets-view-assets.png)

**Example:**

In DTM, an asset for "HVAC" could contain the condenser and the cooling system as subassets. If there are devices associated with this "HVAC" asset or either of its subassets, you can  assign devices to the corresponding assets or subassets.


### Asset hierarchy

You can see the **asset hierarchy** in the **New asset** page.

The **asset hierarchy** provides a bird’s eye view of the entire hierarchy. It is compiled by the root asset type and all its subsequent child asset types. Each hierarchy level comprises of custom properties for the asset as well as its subassets and devices.

It is similar to a tree structure, with the root level asset on top and its subsequent child assets branching out below.

**Example:**

You create the root asset level "Building" is a root level with the child asset "Floor", which has the child asset "Room", then the hierarchy would be displayed as follows:

Building > Floor > Room


### Adding an asset

To create an asset via the UI, click the **Add Asset** button in the top right corner of the **Assets** page. This opens the **New asset** page, where you can create a new asset and asset hierarchy.

First you have to choose the desired asset type from the **Choose asset type** drop down menu on the top left. These asset types are root asset types. They are labeled "START NODE" in the hierarchy.

{{< c8y-admon-info>}}
Root asset type is an **Asset type** which is at the top of hierarchy and does not have any parent asset type above it.
{{< /c8y-admon-info>}}

Next, the **asset hierarchy** is displayed in the left tab, with the respective dialog window opening in the right tab. Fill out all the mandatory field labeled "required" to move to the next section.

You also have the option of adding a description or assigning devices to your root asset. If you want to add more than one root asset, click the **Add** button. If you want to proceed, click **Next**. The following tab shows the next hierarchy level of your **asset hierarchy**. Fill out the fields as necessary for your asset. Click **Next**.
Repeat this process for all **asset hierarchy** levels according to the assets requirements.

At the end you see the **Confirmation** window, which displays a final overview of your asset and asset hierarchy levels. Click **Create** to finish the process and create your asset. The new asset is now listed in the **Assets** page.

**Example:**

If you are creating an **Asset hierarchy** for the asset "Building", select the root asset level "Building" in the **Choose asset type** drop down menu. Starting with the root asset level, you see the dialog window "Building" on the right. Enter the name of the building in the field **Name**, for example, "Administration building". In the field **Description** you can enter a brief description of this asset, for example, "Office building for administration department". However, this field is optional and can be left empty. If you want to add numerous assets to this level, click **Add new** at the bottom. Repeat this process until all desired assets on this level have been filled out.

Click **Next** to see the next lower asset level, for example, "Floor". Fill out all required fields. Here, you also have the option to add numerous assets on this level. Click **Next**.

[CONTINUE HERE]



*	Custom properties : This section lists all the [custom properties](/dtm/asset-types/#property-library) which must be defined for the **Asset** being created.

When [creating the Asset type](/dtm/asset-types/#creating-a-new-asset-type), these custom properties were chosen. Now the values must be provided for all the custom properties for the **Asset** being created.

![assets-new](/images/dtm/assets/dtm-assets-create-text-type.png)

##### Custom property of Type Text or Number

If the **Type** of custom property is either **Text** or **Number**, then provide a valid text or numeric input as value.

**Example:**

If "Building" asset is being created, and “Building Dimension” and “Building color” are the 2 custom properties for this asset, then values must be provided for both.

"Building color" can be initialized to “white” and for "Building dimension", values can be 98 and 50 for building height and width respectively.

If default values were provided when creating the custom properties of **Type** text or number, then those default values get displayed here. You can either retain the same or modify and enter a new value.

In case no default value was mentioned during creation, then you must provide a value now.


##### Custom property of Type Date picker

If the **Type** of custom property is **Date picker**, then a calendar will be displayed, and a date must be provided as value for the custom property.

**Example:**

In case “Project start date” is a **Custom property** for the "Building" asset, then the start date of the project can be provided as its value when creating the "Building" asset.

![assets-date](/images/dtm/assets/dtm-assets-create-date-type.png)

##### Custom property of Type File upload

If the **Type** of **Custom property** is “File upload”, then during asset hierarchy creation a file browser is displayed, and you must choose a valid file to be uploaded.

When creating the **Custom property**, allowed file types are defined. When creating the asset hierarchy, the file chosen for upload must belong to the list of allowed file types. Any file type not mentioned in the list will not be allowed.

**Example:**

Blueprint for a building can be uploaded as one of the **Custom property** and later this can be used for future references.

{{< c8y-admon-info>}}
In case file is uploaded which is not present in allowed file types list, it results in validation error and asset will not be created.
{{< /c8y-admon-info>}}

##### Custom property of Type Enumeration

In case the **Custom property** is of **Type** “Enumeration”, then when creating the **Asset hierarchy**, the options provided during creation are displayed in a dropdown. Choose a value for the **Custom property** from this dropdown.

**Example:**

If “building color” is a **Custom property** and color of the building can be either “white” or “black” or “grey” alone, then **Type** can be chosen as **Enumeration** and these 3 colors can be provided as list of options during the creation of **Custom property**.

When **Asset hierarchy** is being created, a dropdown appears with these 3 options and you must choose a value for **Custom property** from this dropdown.

![assets-enum](/images/dtm/assets/dtm-assets-create-enum-type.png)


##### Custom property of Type Boolean

In case the **Custom property** is of the **Type** “Boolean”, then a check box will be present against the **Custom property**.

When creating the **Asset**, the presence or absence of the **Custom property** can be defined by enabling or disabling the check box respectively.


{{< c8y-admon-info>}}

When **Asset type** is defined, few of the custom properties are marked as **Required** using checkbox. When **Asset** is created, then these custom properties must be defined/ assigned a value during creation.
If all the mandatory custom fields are not initialized with values, then the **Next** or **Create** option does not get enabled.
The remaining custom properties can be defined during asset creation or can be assigned a value after the asset is created.

{{< /c8y-admon-info>}}


The **Custom property** section appears only, if for the **Asset type** the custom properties were chosen. In case, the **Asset type** does not have any custom properties, then during asset hierarchy creation, the **Custom property** section is not displayed.

* Assigned Devices: By default no devices are assigned. You can assign devices for the assets using below steps.


##### Assign devices

Click **Assign devices** option, “Assign devices” page loads with the list of devices.

![assign-devices](/images/dtm/assets/dtm-assets-assign-devices.png)

All the devices present in the tenant get displayed here. In case new device must be added, it must be added under **Device Management** of {{< product-c8y-iot >}}. Refer section: [Device Management](/users-guide/device-management/#connecting-devices)

Check box is provided against each device on left and you can select single or multiple devices to assign.


{{< c8y-admon-info>}}

Select only those devices which are part of the current asset being created. If a device belongs to a child asset, then select it when the child asset is being created.

{{< /c8y-admon-info>}}

Various columns are present that specify the device details for each device.

The columns can be configured using **Configure columns** option on top right.

Click on **Reload** to reload the page and display the latest list of devices present in the {{< product-c8y-iot >}} tenant.

Click **Sort** on the applicable columns to view the device data in either ascending or descending order.

In case you want to filter devices based on text, use **Filter** option in applicable columns. When filter is applied, same is notified on top.

To clear the filters, click **Clear all filters**.

{{< c8y-admon-info>}}
The **Sort** and **Filter** icons appear on hover over each column.
{{< /c8y-admon-info>}}

Devices once selected can also be deselected using the checkbox, or also by clicking on **Cancel** on the top bar, on which all selected devices get deselected.

Once you select a device/s, then the **Assign** button on bottom gets enabled.

Click **Assign** to assign the devices. Devices are assigned to **Asset** being created and you are navigated back to Asset hierarchy creation page.

You also have an option of not assigning any devices. Click on **Cancel**, you are navigated back to Asset hierarchy creation page.

Once you fill all the mandatory fields for the **Asset**, then the **Next** button gets enabled.

Click **Next**, asset hierarchy details for the next asset to be created loads. Fill in the asset details to proceed further.

As **Assets** are defined for each hierarchy level, same is indicated via green tick mark on the Asset hierarchy on left.

{{< c8y-admon-info>}}
In case there are validation errors on the page, it is indicated by red highlights. Correct the same to proceed further.
{{< /c8y-admon-info>}}

##### Adding multiple instances of Assets

At each hierarchy level, multiple assets can be created from a Single **Asset type**, based on the requirement.

**Example:**

In case you have 1 building and 2 floors within the building, then create the asset for “building” first, then using floor asset type, add first floor.

Next using the **Add** button on bottom, add the second floor asset.

![assets-multiple](/images/dtm/assets/dtm-assets-add-multiple-instance.png)

Click on **Delete** icon on top right, if you want to delete the added asset template,

{{< c8y-admon-info>}}
**Delete** icon appears on hover.
{{< /c8y-admon-info>}}

Click **Previous**, if you want to modify any of the details for asset in previous screen, during asset hierarchy creation.

Click **Cancel** if you want to cancel the creation of asset.

Progress of asset hierarchy creation can be tracked with the help of green tick marks.

If you want to modify any of the assets, then same can be done by navigating to the respective asset page using **Previous** and **Next** buttons.

Once all the assets are created for each hierarchy level, then a confirmation page loads. Hierarchy is displayed with all the assets created.

![assets-confirmation](/images/dtm/assets/dtm-assets-confirmation-page.png)

If all changes are in place, click on **Confirm** in the Confirmation page to create the entire Asset hierarchy with all the assets.

On successful **Asset hierarchy** creation, a success pop-up notification is displayed on top right.

Once the **Asset hierarchy** is created, it can be viewed by clicking on the root Asset and navigating further. Check [view assets](/dtm/asset-hierarchy/#view-asset) for viewing assets.


##### Sub Assets

On click of the root Asset in **Assets** page, **Subassets** page loads. **Subassets** page has details of root asset, subassets for the root asset, the child devices for the root asset and the custom properties for root Asset.

![subassets](/images/dtm/assets/dtm-assets-subassets-page.png)

**Subassets** page has below 3 options on top right corner:

###### Add child assets

*	**Add child asset** : On click of **Add child asset** option, **Asset hierarchy** page loads with parent being the root asset or asset where “add child asset” option is invoked from.

Parent asset is displayed with the label PARENT NODE on top of it.

The **Asset hierarchy** that loads will be a subset of the root **Asset hierarchy**.

![child-asset](/images/dtm/assets/dtm-assets-add-child-asset.png)

**Example:**

If "Building" is a root level asset, "Floor" is a child asset of building and "Room" is a child asset of floor. (Building --> Floor --> Room)

In this case, if you navigate to "Building" asset and click on **Add child asset**, then **Asset hierarchy** loads for "Floor" and "Room" assets creation. (“Floor -->Room”)

In case, you navigate to existing "Floor" asset and want to add a child asset, then child asset can be added only for "Room".

For more details on how to add **Assets** in **Asset hierarchy**, please refer to section [Add Assets via UI](/dtm/asset-hierarchy/#creating-assets-ui)

{{< c8y-admon-info>}}
In case you are at the end of the hierarchy which cannot have any child assets, then on click of **Add child asset** there will be no options to create child assets.
{{< /c8y-admon-info>}}


*	**Assign devices** : In case devices have to be added at any hierarchy level, then click on **Assign devices** option on top right.

Assign devices screen loads with the list of devices present in the {{< product-c8y-iot >}} tenant. You can choose a device/s from this list and assign to the particular asset.

For more details on Assign devices, refer section [**Assign devices**](/dtm/asset-hierarchy/#assign-devices)


*	**Import assets** : If you want to import the assets in bulk, either for the entire hierarchy or only for the child hierarchy, bulk import option can be used.

Refer to [bulk import](/dtm/asset-hierarchy/#creating-assets-bulk-import) section to import assets in bulk.
