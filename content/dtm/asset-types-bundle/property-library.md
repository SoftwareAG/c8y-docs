---
weight: 10
title: Property library
layout: redirect
---

Custom properties are the parameters that define an [asset type](/dtm/asset-types/#asset-types). One or more custom properties are used to define an asset types. Custom properties are created in the **Property library**.

<a name="create-custom-property"></a>
### To create a custom property

When you navigate to the **Property library** page following **Configuration > Digital twin library > Property library** for the first time, there will be no custom properties present in the system. To add your first custom property, click **Add custom property** at the top right.

If you use a tenant which already has custom properties defined, you find the list of defined custom properties on the left. The selected custom properties are listed on the right.

To create a custom property, click **Add custom property** on the bottom left. Enter the required data in the dialog box (see description below) and click **Save**.

![Create a new custom property](/images/dtm/custom-property/dtm-property-library-create-property.png)

Custom properties have the following parameters:

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
<td style="text-align:left">Refers to the name of the custom property. The custom property is further addressed using the information provided here.</td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>Key</b></td>
<td style="text-align:left">Used to uniquely identify and store the custom property in the DTM application.<br>
{{< c8y-admon-info>}} You cannot edit the key field once the property is created. {{< /c8y-admon-info>}} </td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>Description</b></td>
<td style="text-align:left">Provides a brief description of the custom property.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Complex property toggle</b></td>
<td style="text-align:left">Used to create a complex custom property, that contains one or multiple key-value pairs. By default, the toggle is switched off.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Type</b></td>
<td style="text-align:left">Defines the type of the custom property. It can be any of the following categories – <a href="#custom-text" class="no-ajaxy">Text</a>, <a href="#custom-number" class="no-ajaxy">Number</a>, <a href="#custom-file-upload" class="no-ajaxy">File upload</a>, <a href="#custom-date-picker" class="no-ajaxy">Date picker</a>, <a href="#custom-enumeration" class="no-ajaxy">Enumeration</a>, or <a href="#custom-boolean" class="no-ajaxy">Boolean</a>.</td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>Default value</b></td>
<td style="text-align:left">Defines the default value for the parameter. You can modify the content when creating an asset using this custom property.</td>
<td style="text-align:left">Optional</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info>}}
The **Default value** field is only shown if the selected **Type** is either "Text" or "Number".
{{< /c8y-admon-info>}}

Once you have defined all necessary custom properties for your project, you must define the [asset types](/dtm/asset-types/#asset-types).


<a name="custom-property-types"></a>
### Custom property types

To further define the custom property you can select one of the six following options listed under **Type**:


<a name="custom-text"></a>
#### Text

Select **Text** if the custom property value is a string, for example, a building name. Enter a valid text.

 If you select **Text**, the following fields appear:

*	**Min Length**:

Enter the minimum length of the text that must be provided for this custom property during the asset creation. Any text below the minimum length is not accepted.

If not selected, no minimum length criteria is set for this custom property during the asset creation.

* **Max Length**:

Enter the maximum length of the text that must be provided for this custom property during the asset creation. Any text above the maximum length is not accepted.

If the entered text exceeds the maximum length, you get notified of the incidence and the asset creation is cancelled.

* **RegExp**:

Enter a valid regular expression. During the asset creation, you must provide the custom property value, which adhers to the regular expression.

**Example:**

If the custom property is "Employee ID" with the regular expression "^SAGEMPID[a-zA-Z0-9]*$", all employee IDs have to start with the prefix “SAGEMPID”.


<a name="default-value"></a>
#### Default value

Assigns a default value to the custom property. If this field is left empty in the custom property, you must enter a value during the asset creation.

{{< c8y-admon-info>}}
The default value has to adhere to all validations provided beforehand. If you have set the **Min length**, **Max length** and/or **RegExp**, the default value must fulfill all set validations.
{{< /c8y-admon-info>}}

**Example:**

If the custom property is "Employee ID" with a **Min length** of 5, a **Max length** of 20 and the **RegExp** defined as "^SAG[a-zA-Z0-9]*$", the default value must fulfill all of these three criteria. If it does not, this results in a validation error. The respective field will be highlighted to modify its content to fit the criteria.


<a name="custom-number"></a>
#### Number

For this type you must provide a numeric value for the asset creation, for example, the height of a building.

The type **Number** contains the following fields for additional information:

* **Minimum**:

If selected, enter a number in the field on the right. When you create the asset, the custom property value cannot be lower or less than the minimum provided.

{{< c8y-admon-info>}}

If you entered a [default value](/dtm/asset-types/#default-value) beforehand, it needs to be greater than or equal to the minimum provided. By default, this box is not selected.

{{< /c8y-admon-info>}}


* **Maximum**:

If selected, enter a number in the field on the right. When you create the asset, the custom property value cannot exceed the **Maximum** provided.

{{< c8y-admon-info>}}

If you entered a [default value](/dtm/asset-types/#default-value) beforehand, it needs to be lesser than or equal to the **Maximum** entered here. By default, this box is not checked.

{{< /c8y-admon-info>}}


* **Default value**:
Assigns a default value to the custom property. If this field is left empty in the custom property, you must enter a value during the asset creation.

{{< c8y-admon-info>}}

If the **Minimum** and/or **Maximum** is checked, the given **Default value** is validated against one or both of these values.

{{< /c8y-admon-info>}}

**Example:**

If the custom property is "Building height" with a **Minimum** of 80 and a **Maximum** of 150, the **Default value** must be between 80 to 150.


<a name="custom-date-picker"></a>
#### Date Picker

If selected, you must select a date from the calendar displayed in the dialog window during the asset creation.

**Example:**

If "Project start date" is a custom property for the "Building" asset, then you must select the start date of the project when creating the asset.


<a name="custom-enumeration"></a>
#### Enumeration

Select **Enumeration** to list several values that apply to this custom property.

If selected, a second field appears below. Here, enter all desired information separated by a comma.

During asset creating, these values appear as menu options in the dropdown menu. Select one of the options to initialize the custom property with that option.

**Example:**

If you create a custom property for "building color" and the color must be either black, white or grey, you have to provide these options separated by a comma when creating the custom property.

![Custom property enumeration](/images/dtm/custom-property/dtm-property-library-type-enum.png)

<a name="custom-boolean"></a>
#### Boolean

If selected, the presence of the custom property can either be true or false during the asset creation.

An asset with this custom property shows a checkbox. Selecting this checkbox sets the custom property to true.

**Example:**

If you create a custom property called "Whiteboard" for a building which has rooms with a whiteboard and rooms without a whiteboard, then the custom property must be created with the type "Boolean". When you create an asset for a room with a whiteboard, it is then initialized to "true". If there is no whiteboard in the room, the asset is initialized to "false".

<a name="custom-file-upload"></a>
#### File upload

This option allows you to upload a file to define the custom property.

If selected, enter the allowed file types separated by a comma in the **Allowed file types** field. Provide the maximum file size for uploads in the **Max file size in MB** field. When you create an asset with this custom property, you can only upload files that adhere to the allowed file types with their file size not exceeding the set limit.

{{< c8y-admon-info>}}

If there is a file size limit set for the tenat, you see the limit in the label.

For example: If the max file size set on tenant is 1 GB,the label looks like Max file size in MB ( Size limit on tenant: 1024 MB).<br>
During the bulk import, the file size validation is skipped as the file is already uploaded to the tenant.


{{< /c8y-admon-info>}}

**Example:**

To upload the blueprint for a building, you must name the custom property "Building blueprint" and specify the file type of the blueprint file. Then upload the respective file. Once the asset is created, you can view this file for future reference.


<a name=""></a>
### To edit a custom property

1. Select the desired custom property in the **Property Library** to see all the details on the right of the screen.
2. Edit any content of the custom property.
3. Click **Save** to save your changes.
4. If this property is used by any asset type, in the resulting confirmation dialog, select **Confirm** to continue to save your changes.


<a name=""></a>
### To search and filter custom properties

1. Navigate to the **Property Library** page.
2. Enter the desired name in the search field on the top left.
3. Click the search icon.

All custom properties matching the search values are displayed on the screen on the left. If the search entry does not match with any custom properties, you see a notification.


<a name=""></a>
### To delete a custom property

Select the respective custom property in the **Property Library** and click **Delete** on the bottom right.

In the resulting confirmation dialog, click **Confirm** to continue.

{{< c8y-admon-info>}}

If the custom property you want to delete is part of an existing asset, you see an error notification and the custom property is not deleted.

{{< /c8y-admon-info>}}


<a name=""></a>
### Types of custom properties

There are two types of custom properties, both fulfill different requirements:

<a name=""></a>
#### Simple custom property

A simple custom property consists of a single key value pair. This option is set by default when creating new custom properties.

In the **Property Library** simple custom properties are listed with the label "Type".

 **Example:**

 If the custom property is called "Building color", you must use the key "building_color" with the Default value being "white" (see image below).

 ![Simple custom property](/images/dtm/custom-property/dtm-property-library-simple-custom-property.png)

<a name=""></a>
#### Complex custom property

A complex custom property consists of multiple key value pairs, meaning it contains a root object followed by one or more key value pairs. You can select the complex custom property option by switching on the toggle. If you switch on the toggle, you must define each key value pair as well as providing a Type for each pair.

In the **Property Library** complex custom properties are listed with the label "Object".

 **Example:**

If the custom property is called "Building dimension" with the key "Building_dimension", then building area, height and width are the multiple key value pairs defining the parameter "Building dimension". Switch on the **Complex property** toggle (see image below). Enter the required information for all key value pairs and click **Save**.

![Complex custom property](/images/dtm/custom-property/dtm-property-library-complex-property.png)
