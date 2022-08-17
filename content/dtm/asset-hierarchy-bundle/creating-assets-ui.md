---
weight: 10
title: Creating assets via the UI
layout: redirect
---

You have two options for creating assets in the DTM application. The following section describes how to create an asset via the UI. Alternatively, see [Creating assets via bulk import](/dtm/asset-hierarchy/#creating-assets-bulk-import) on how to import assets in bulk into DTM.


### Assets

In DTM assets are the digital representation of physical assets. An asset in DTM can contain numerous subassets and devices. You also have the opportunity to define properties or parameters of an assets through [custom properties](/dtm/asset-types/#property-library).

To work with assets in DTM navigate to the **Assets** page using the navigator on the left. When you first start using the DTM application, no assets are shown in the **Assets** page by default, instead you see a message is displayed prompting to create the assets (SCREENSHOT NECESSARY).

If you already created assets, you find them listed on this page (see image below).

![assets-view](/images/dtm/assets/dtm-assets-view-assets.png)

**Example:**

In DTM, an asset for "HVAC" could contain the condenser and the cooling system as subassets. If there are devices associated with this "HVAC" asset or either of its subassets, you can assign devices to the corresponding assets or subassets.


#### Asset hierarchy

You can see the **asset hierarchy** in the **New asset** page.

The **asset hierarchy** provides a bird’s eye view of the entire hierarchy. It is compiled by the root asset type and all its subsequent child asset types. Each hierarchy level comprises of custom properties for the asset as well as its subassets and devices.

It is similar to a tree structure, with the root level asset on top and its subsequent child assets branching out below.

**Example:**

You create the root asset level "Building" is a root level with the child asset "Floor", which has the child asset "Room", then the hierarchy would be shown as follows:

Building > Floor > Room


### Adding an asset

To create an asset via the UI, click the **Add Asset** button in the top right corner of the **Assets** page. This opens the **New asset** page, where you can create a new asset and asset hierarchy.

First you have to choose the desired asset type from the **Choose asset type** dropdown menu on the top left. These asset types are root asset types. They are labeled "START NODE" in the hierarchy.

{{< c8y-admon-info>}}
Root asset type is an asset type which is at the top of hierarchy and does not have any parent asset type above it.
{{< /c8y-admon-info>}}

Next, the asset hierarchy is shown in the left tab, with the respective dialog window opening in the right tab. Fill out all the mandatory field labeled "required" to move to the next section.

You also have the option of adding a description or assigning devices to your root asset. To add more than one root asset, click the **Add** button.
The other building block to your asset are the **custom properties**. Here you find all [custom properties](/dtm/asset-types/#property-library) assigned to the asset type that you create. Fill in the required information.

{{< c8y-admon-info>}}
 The custom properties are defined when [creating the asset type](/dtm/asset-types/#creating-a-new-asset-type). When creating an asset you must provide the values for all custom properties.
{{< /c8y-admon-info>}}

Click **Assing device** to assign any registered devices to this asset. See [Assigning devices to an asset](HYPERLINK) for more information.

Click **Next** to reach the following hierarchy level of your **asset hierarchy**. Fill out the fields as necessary for your asset and click **Next**.
Repeat this process for all **asset hierarchy** levels according to the assets requirements.

At the end you see the **Confirmation** window, which displays a final overview of your asset and asset hierarchy levels. Click **Create** to finish the process and create your asset. The new asset is now listed in the **Assets** page.

As you define each hierarchy level of your new asset, you see a green check mark on each asset hierarchy level in the overview on the left.

{{< c8y-admon-info>}}
If there are validation errors on the page, they are indicated by red highlights. Correct the required information to continue with the process.
{< /c8y-admon-info>}}

![Adding a new asset](/images/dtm/assets/dtm-assets-create-text-type.png)


**Example:**

If you are creating an asset hierarchy for the asset "Building", select the root asset level "Building" in the **Choose asset type** dropdown menu. Starting with the root asset level, you see the dialog window "Building" on the right. Enter the name of the building in the field **Name**, for example, "Administration building". In the field **Description** you can enter a brief description of this asset, for example, "Office building for administration department". However, this field is optional and can be left empty. To add numerous assets to this level, click **Add new** at the bottom. Repeat this process until all desired assets on this level have been filled out.

Click **Next** to see the next lower asset level, for example, "Floor". Fill out all required fields. Here, you also have the option to add numerous assets on this level. Click **Next**.



<!--- #### Custom property of Type, Text or Number

If the **Type** of custom property is either **Text** or **Number**, then provide a valid text or numeric input as value.

**Example:**

If "Building" asset is being created, and “Building Dimension” and “Building color” are the 2 custom properties for this asset, then values must be provided for both.

"Building color" can be initialized to “white” and for "Building dimension", values can be 98 and 50 for building height and width respectively.

If default values were provided when creating the custom properties of **Type** text or number, then those default values get displayed here. You can either retain the same or modify and enter a new value.

In case no default value was mentioned during creation, then you must provide a value now.


### Custom property of Type Date picker

If the **Type** of custom property is **Date picker**, then a calendar will be displayed, and a date must be provided as value for the custom property.

**Example:**

In case “Project start date” is a custom property for the "Building" asset, then the start date of the project can be provided as its value when creating the "Building" asset.

![assets-date](/images/dtm/assets/dtm-assets-create-date-type.png)

### Custom property of Type File upload

If the **Type** of custom property is “File upload”, then during asset hierarchy creation a file browser is displayed, and you must choose a valid file to be uploaded.

When creating the custom property**, allowed file types are defined. When creating the asset hierarchy, the file selected for upload must belong to the list of allowed file types. Any file type not mentioned in the list will not be allowed.

**Example:**

Blueprint for a building can be uploaded as one of the custom property and later this can be used for future references.

{{< c8y-admon-info>}}
In case file is uploaded which is not present in allowed file types list, it results in validation error and asset will not be created.
{{< /c8y-admon-info>}}

### Custom property of Type Enumeration

In case the custom property is of **Type** “Enumeration”, then when creating the asset hierarchy, the options provided during creation are displayed in a dropdown. Choose a value for the custom property from this dropdown.

**Example:**

If “building color” is a custom property and color of the building can be either “white” or “black” or “grey” alone, then **Type** can be selected as **Enumeration** and these 3 colors can be provided as list of options during the creation of custom property.

When asset hierarchy is being created, a dropdown appears with these three options and you must choose a value for custom property from this dropdown.

![assets-enum](/images/dtm/assets/dtm-assets-create-enum-type.png)


### Custom property of Type Boolean

In case the custom property is of the **Type** “Boolean”, then a checkbox will be present against the custom property.

When creating the asset, the presence or absence of the custom property can be defined by enabling or disabling the checkbox respectively.


{{< c8y-admon-info>}}

When asset type is defined, few of the custom properties are marked as **Required** using checkbox. When asset is created, then these custom properties must be defined/ assigned a value during creation.
If all the mandatory custom fields are not initialized with values, then the **Next** or **Create** option does not get enabled.
The remaining custom properties can be defined during asset creation or can be assigned a value after the asset is created.

{{< /c8y-admon-info>}}


The custom property section appears only, if for the asset type the custom properties were selected. In case, the asset type does not have any custom properties, then during asset hierarchy creation, the custom property section is not displayed.

* Assigned Devices: By default no devices are assigned. You can assign devices for the assets using below steps.--->


### To assign devices to an asset

When you create a new asset you have the option of assigning one or more devices to this asset.

Click **Assign devices** in the **New asset** page. This opens a new dialog window, which lists all devices registered for this tenant. Select one or multiple devices and click **Assign** (see image below). The window closes and you can proceed with creating the asset.

![Assigning devices to an asset](/images/dtm/assets/dtm-assets-assign-devices.png)

To add a new device, you must add it through the **Device Management** application. For more details refer to the [Device Management](/users-guide/device-management/#connecting-devices) section in the *User guide*.

{{< c8y-admon-info>}}

Select only devices which are part of the current asset. If a device belongs to a child asset, then select it when you create the child asset.

{{< /c8y-admon-info>}}

#### To filter and select devices

Various columns are present that specify the device details for each device.

You can configure the columns using the **Configure columns** option on top right.

Click **Reload** to reload the page and display the latest list of devices present in the {{< product-c8y-iot >}} tenant.

Click **Sort** on the applicable columns to view the device data in either ascending or descending order.

To filter devices based on text, use the **Filter** option in the applicable columns. If you apply a filter, you see a notification at the top.

To clear the filters, click **Clear all filters**.

{{< c8y-admon-info>}}
The sort icon and the filter icons appear on hover over each column.
{{< /c8y-admon-info>}}

You can select devices through the checkbox. To cancel your selection, click **Cancel** on the top bar, which removes all selected devices.

Once you select one or more devices, click the **Assign** button at the bottom. The window closes and you can proceed with creating the asset.

{{< c8y-admon-info>}}
Assigning devices to an asset is optional.
{{< /c8y-admon-info>}}

### To add multiple instances in an asset

At each hierarchy level, you can create multiple assets from a single asset type, based on the requirement.

**Example:**

For one building with two floors, you first create the asset hierarchy level for "Building". Then use the asset type "Floor" to add the floors.

Click **Add** on the bottom to add the asset for the second floor.

![Adding multiple assets](/images/dtm/assets/dtm-assets-add-multiple-instance.png)

To delete an added asset template, click the delete icon on the top right.

{{< c8y-admon-info>}}
The delete icon appears on hover.
{{< /c8y-admon-info>}}

To modify any of the details for an asset on the previous screen during asset hierarchy creation, click **Previous**.

You can track your progress with the green check marks on the asset hierarchy levels on the left.

To modify any of the assets, navigate to the respective asset page using the **Previous** and **Next** buttons.

Once you created all assets for each hierarchy level, you see the **Confirmation** page. This page shows the entire hierarchy with all the created assets.

![Confirmation page asset creation](/images/dtm/assets/dtm-assets-confirmation-page.png)

If all changes are sufficient, click **Confirm** to create the entire asset hierarchy with all the assets.

On successful asset hierarchy creation, you see a pop-up notification in the top right corner.

Once the asset hierarchy is created, you can see it by clicking the root asset and following the navigation. See [viewing assets](/dtm/asset-hierarchy/#view-asset) for more information.


### Subassets

Click the root asset in the **Assets** page to load the **Subassets** page . It shows the details of the root asset, all subassets, child devices and custom properties.

![Subassets](/images/dtm/assets/dtm-assets-subassets-page.png)

In the **Subassets** page you see the following three options in the top right corner:

### To add child assets

Click **Add child asset** to load the **Asset hierarchy** page with the root asset or asset where “add child asset” option is invoked from at the top.

The root asset is displayed with the label "parent node".

The asset hierarchy that loads will be a subset of the root asset hierarchy.

![Child asset](/images/dtm/assets/dtm-assets-add-child-asset.png)

**Example:**

If "Building" is a root level asset, then "Floor" is a child asset of "building" and "Room" is a child asset of floor".

In this case, if you navigate to the "Building" asset and click **Add child asset**, then the asset hierarchy loads for "Floor" and "Room".

If you navigate to the existing "Floor" asset and want to add a child asset, then you can only add child assets for "Room".

For more details on how to add assets in asset hierarchy, see [Add assets via UI](/dtm/asset-hierarchy/#creating-assets-ui).

{{< c8y-admon-info>}}
In case you are at the end of the hierarchy which cannot have any child assets, then on click of **Add child asset** there will be no options to create child assets.
{{< /c8y-admon-info>}}


### To assign devices

If you must add devices to any hierarchy level, then click **Assign devices** on the top right.

In the following dialog window you see a list of all devices present in your tenant. You can choose one or multiple devices from this list and assign them to the particular asset.

For more details on how to assign devices, see [**Assign devices**](/dtm/asset-hierarchy/#assign-devices).


### To import assets

To import the assets in bulk, either for the entire hierarchy or only for the child hierarchy, use the bulk import option.

See [Bulk import](/dtm/asset-hierarchy/#creating-assets-bulk-import) for more details on how to import assets in bulk.
