---
weight: 10
title: Creating assets via the UI
layout: redirect
---

You have two options for creating assets in the DTM application.
The following section describes how to create an asset via the UI.
Alternatively, see [Creating assets via bulk import](/dtm/asset-hierarchy/#creating-assets-bulk-import) on how to import assets in bulk into the DTM application.


<a name="assets"></a>
### Assets

In the DTM application assets are the digital representation of physical assets.
An asset in the DTM application can contain numerous subassets and devices.
You also have the opportunity to define properties or parameters of an asset through [custom properties](/dtm/asset-types/#property-library).

To work with assets in the DTM application, navigate to the **Assets** page using the navigator on the left.
When you first start using the DTM application, no assets are displayed in the **Assets** page by default, instead you see a message is displayed prompting to create the assets.

![no-assets-view](/images/dtm/assets/dtm-assets-no-assets.png)

If you already created assets, you find them listed on this page (see image below).

![assets-view](/images/dtm/assets/dtm-assets-view-assets.png)


<a name=""></a>
### Asset hierarchy

The asset hierarchy is displayed on the right in the **New asset** page. An asset hierarchy consists of the root asset type and all its subsequent child asset types.
Each hierarchy level comprises of numerous custom properties for the asset as well as its subassets and devices.

**Example:**

If you create the root asset level "Building" with the child asset "Floor", which has the child asset "Room", then the hierarchy would be displayed as follows:

Building > Floor > Room


<a name="create-asset"></a>
### To create an asset

To add an asset via the UI:

1. Click the **Add Asset** button in the top right corner of the **Assets** page.

2. In the **New asset** page, select the desired asset type from the **Choose asset type** dropdown menu on the top left.

    {{< c8y-admon-info>}}
The asset types here are root asset types.
They are labeled "START NODE" in the hierarchy.
Root asset types are asset types which are at the top of hierarchy and don't have any parent asset type above it.
    {{< /c8y-admon-info>}}

3. The asset hierarchy is shown in the left tab and the respective dialog window is shown in the right tab. Fill out the fields labeled "required".

4. Optionally, add a description or [assign devices](#assign-devices-to-asset) to your root asset.

5. To add more than one root asset, click the **Add** button.

6. Under **custom properties**, fill in the required information. Here you find all [custom properties](/dtm/asset-types/#property-library) assigned to the asset type that you create.

    {{< c8y-admon-info>}}
 The custom properties are defined when [creating the asset type](/dtm/asset-types/#create-asset-type).
 When creating an asset you must provide the values for all custom properties.
    {{< /c8y-admon-info>}}

7. Click **Next** to reach the next hierarchy level of your **asset hierarchy** and fill out the fields as necessary for your asset. Repeat for all asset hierarchy levels in the assets requirements.

8. The **Confirmation** dialog displays an overview of your asset and asset hierarchy levels. Click **Create** and create your asset. The asset is now listed in the **Assets** page.

As you define each hierarchy level of your new asset, you see a green check mark on each asset hierarchy level in the overview on the left.

{{< c8y-admon-info>}}
If there are validation errors on the page, they are indicated by red highlights.
Correct the required information to continue.
{{< /c8y-admon-info>}}

![Adding a new asset](/images/dtm/assets/dtm-assets-create-text-type.png)

**Example:**

If you are creating an asset hierarchy for the asset "Building", select the root asset level "Building" in the **Choose asset type** dropdown menu. Starting with the root asset level, you see the dialog window "Building" on the right.
Enter the name of the building in the field **Name**, for example, "Administration building".
In the field **Description** you can enter a brief description of this asset, for example, "Office building for administration department".
However, this field is optional and can be left empty.
To add numerous assets to this level, click **Add new** at the bottom.
Repeat until all desired assets on this level have been filled out.

Click **Next** to see the next asset level, for example, "Floor".
Fill out all required fields.
You have the option to add numerous assets on this level.
Click **Next**.

![assets-date](/images/dtm/assets/dtm-assets-create-date-type.png)


<a name="assign-devices-to-asset"></a>
### To assign devices to an asset

When you create a new asset you have the option of assigning one or more devices to this asset.

1. Click **Assign devices** in the **New asset** page.
2. The resulting dialog window lists all devices registered for the tenant. Select one or multiple devices and click **Assign**.
3. The dialog closes and you can continue creating the asset.

![Assigning devices to an asset](/images/dtm/assets/dtm-assets-assign-devices.png)

To add a new device, add it through the **Device Management** application.
Refer to [Device Management > Connecting devices > Device registration](/users-guide/device-management/#connecting-devices) in the *User guide*.

{{< c8y-admon-info>}}
Only select devices which are part of the current asset.
If a device belongs to a child asset, then select it when you create the child asset.
{{< /c8y-admon-info>}}


<a name=""></a>
#### To filter and select devices

Various columns specify the device details for each device.
To configure the columns:

1. Click **Configure columns** at the top right.

2. Click **Reload** to reload the page and display the latest list of devices present in the {{< product-c8y-iot >}} tenant.

3. Click **Sort** on the applicable columns to view the device data in either ascending or descending order.

4. To filter devices based on text, use the **Filter** option in the applicable columns. If you apply a filter, you see a notification at the top.

5. To clear the filters, click **Clear all filters**.

    {{< c8y-admon-info>}}
The sort icon and the filter icons appear on hover over each column.
    {{< /c8y-admon-info>}}

6. You can select devices through the checkbox. To cancel your selection, click **Cancel** on the top bar, which removes all selected devices.

7. Click the **Assign** button at the bottom. The window closes and you can continue creating the asset.


<a name=""></a>
### To add multiple instances in an asset

At each hierarchy level, you can create multiple assets from a single asset type.

**Example:**

For one building with two floors, you first create the asset hierarchy level for "Building". Then use the asset type "Floor" to add the floors.

1. Click **Add** at the bottom to add the asset to the floor asset type.

    ![Adding multiple assets](/images/dtm/assets/dtm-assets-add-multiple-instance.png)

2. To delete an added asset template, click the delete icon at the top right.

    {{< c8y-admon-info>}}
The delete icon appears on hover.
    {{< /c8y-admon-info>}}

3. Modify the assets by navigating the asset pages using the **Previous** and **Next** buttons. You can track your progress via the green check marks in the asset hierarchy on the left.

4. When done, the **Confirmation** page shows the asset hierarchy. Click **Confirm** to create the asset hierarchy.

![Confirmation page asset creation](/images/dtm/assets/dtm-assets-confirmation-page.png)

On successful asset hierarchy creation, you see a pop-up notification in the top right corner.
You can view the newly created asset hierarchy by clicking the root asset and following the navigation.
Also see [viewing assets](/dtm/asset-hierarchy/#viewing-assets).


<a name=""></a>
### Subassets

Click the root asset in the **Assets** page to load the **Subassets** page.
It shows the details of the root asset, all subassets, child devices and custom properties.

![Subassets](/images/dtm/assets/dtm-assets-subassets-page.png)

In the top right corner in the **Subassets** page, you can [add child assets](#add-child-assets), [assign devices](#assign-devices-to-asset) and [import assets in bulk](/dtm/asset-hierarchy/#creating-assets-bulk-import).


<a name="add-child-assets"></a>
#### To add child assets

1. Click **Add child asset** in the **Subassets** page to load the **Asset hierarchy** for a root asset or asset.

2. The root asset is displayed with the label "parent node". The asset hierarchy is a subset of the root asset hierarchy.

    ![Child asset](/images/dtm/assets/dtm-assets-add-child-asset.png)

**Example:**

If "Building" is a root level asset, then "Floor" is a child asset of "Building" and "Room" is a child asset of "Floor".
If you navigate to the "Building" asset and click **Add child asset**, then the asset hierarchy loads for "Floor" and "Room".

If you navigate to the existing "Floor" asset and want to add a child asset, then you can only add child assets for "Room".

For details how to add assets in the asset hierarchy, see [To add assets](#create-asset).

{{< c8y-admon-info>}}
If you are at the end of the hierarchy, clicking **Add child asset** will show no option to create child assets.
{{< /c8y-admon-info>}}
