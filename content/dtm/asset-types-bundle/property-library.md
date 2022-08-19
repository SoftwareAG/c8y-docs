---
weight: 10
title: Property library
layout: redirect
---

Custom properties are the parameters that define an [asset type](/dtm/asset-types/#asset-types). One or more custom properties are used to define an asset types. Custom properties are created in the **Property library**.

<a name="create-new-custom-property"></a>
### To create a new custom property

When you navigate to the **Property library** page following **Configuration > Digital twin library > Property library** for the first time, there will be no custom properties present in the system. To add your first custom property, click **Add custom property** at the top right.

If you use a tenant which already has custom properties defined, you find the list of defined custom properties on the left. The selected custom properties are listed on the right.

To create a custom property, click **Add custom property** on the bottom left. Enter the required data in the dialog box (see description below) and click **Save**.

![Property-add](/images/dtm/custom-property/dtm-property-library-create-property.png)

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
<td style="text-align:left">Used to uniquely identify and store the custom property in the DTM application.</td>
<td style="text-align:left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left"><b>Description</b></td>
<td style="text-align:left">Provides a brief description of the custom property.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Complex property toggle</b></td>
<td style="text-align:left">Used to create a complex custom property, that contains one or multiple key-value pairs. By default, the toggle is disabled.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left"><b>Type</b></td>
<td style="text-align:left">Defines the type of the custom property. It can be any of the following categories – Text, Number, File upload, Date picker, Enumeration or Boolean.</td>
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


### Custom property types

To further define the custom property you can select one of the six following options listed under **Type**.

<!---<table>
<col width="20">
<col width="50">
<col width="30">
<thead>
<tr>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Mandatory / Optional</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><b>Text</b></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><b></b></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><b></b></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><b></b></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><b></b></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><b></b></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>--->

#### Text

Select **Text** if the custom property value is a string, for example, a building name. When you select **Text**, the following fields appear:

<!---![Property-text](/images/dtm/custom-property/dtm-property-library-type-text.png)--->


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

#### Default value

Assigns a default value to the custom property. If this field is left empty, you can enter any value for this custom property during the asset creation. This field is optional.

<<<<<<< HEAD
{{< c8y-admon-info>}}
The entered **Default value** has to adhere to all validations provided beforehand. If you have set the **Min length**, **Max length** and/or **RegExP**, the default value must fulfill all set validations.
=======
  {{< c8y-admon-info>}}
The entered **Default value** has to adhere to all validations provided beforehand. If you have set the **Min length**, **Max length** and/or **RegExp**, the default value must fulfill all set validations.
>>>>>>> 4387f49580182663c107c332c6dcf63766012630
{{< /c8y-admon-info>}}


**Example:**

<<<<<<< HEAD
 If the custom property is "Employee ID" with a **Min length** of 5, a **Max length** of 20 and the **RegExP** defined as "^SAG[a-zA-Z0-9]*$", the default value must fulfill all of these three criteria. If it does not, this results in a validation error. The respective field will be highlighted to modify its content to fit the criteria.
=======
   If the custom property is "Employee ID" with a **Min length** of 5, a **Max length** of 20 and the **RegExp** defined as "^SAG[a-zA-Z0-9]*$", the default value must fulfill all of these three criteria. If it does not, this results in a validation error. The respective field will be highlighted to modify its content to fit the criteria.
>>>>>>> 4387f49580182663c107c332c6dcf63766012630

If you enter the information correctly according to the set criteria, the default value information for this custom property is valid.

Click **Save** to finish.


#### Number


If you select the **Number** as the custom property type you have to provide a numeric value when creating the asset, for example, the height of a building.

The type **Number** contains the following fields for additional information:

* **Minimum**:

This value is optional. If you select this box, you must enter a number in the field on the right. When you create the asset, the custom property value cannot be lower or less than the Minimum provided.

{{< c8y-admon-info>}}

If you have entered a [Default value](/dtm/asset-types/#default-value) beforehand, the **Default value** needs to be greater than or equal to the **Minimum** entered here.

By default, this box is not checked.

{{< /c8y-admon-info>}}


* **Maximum**:

This value is optional. If you select this box, you must enter a number in the field on the right. When you create the asset, the custom property value cannot exceed the **Maximum** provided.

{{< c8y-admon-info>}}

If you have entered a [Default value](/dtm/asset-types/#default-value) beforehand, the **Default value** needs to be lesser than or equal to the **Maximum** entered here.

By default, this box is not checked.

{{< /c8y-admon-info>}}


* **Default value**:

This field is optional. When creating the asset, the custom property is initialized using this value. During the asset creation you have the option to change the **Default value** or enter a new value altogether.

{{< c8y-admon-info>}}

If the **Minimum** and/or **Maximum** is checked, the given **Default value** is validated against one or both of these values.

{{< /c8y-admon-info>}}

**Example:**

If the custom property is the building's height with the **Minimum** field set to 80 and the **Maximum** set to 150, the **Default value** must be between 80 to 150.


#### Date Picker

If you select this option in the **Type** dropdown list, you must choose a date and custom property during asset creation to be initialized to that value.

**Example:**

An example for a custom property with this type is "start date". During the asset creation you can initialize the custom property with the relevant start date.


#### Enumeration

To choose a value from the dropdown menu during the asset creation, then select **Type** as **Enumeration** when creating the custom property.

When you select **Enumeration** as the custom property **Type**, a second field appears below. Here, enter all desired information separated by a comma.

During asset creating, these values appear as menu options in the dropdown menu. Select one of the options to initialize the custom property with that option.

**Example:**

If you create a custom property for "building color" and the color must be either black, white or grey, you have to provide these options separated by a comma when creating the custom property.

![Custom property enumeration](/images/dtm/custom-property/dtm-property-library-type-enum.png)


#### Boolean

If you select Boolean for your custom property type, the presence of the custom property can either be true or false.

**Example:**

<<<<<<< HEAD
If you define a custom property called "Whiteboard" for a building where there are rooms with a whiteboard and some without, then the custom property needs to be created as Boolean. So when the asset is created, if the room has a whiteboard, it is then initialized to "true". If there is no whiteboard in the room, the asset is initialized to "false".

Initialize it to "true" if a whiteboard is present in the room, and initialize it to "false" if there is no whiteboard.
=======
  If you define a custom property called "Whiteboard" for a building where there are rooms with a whiteboard and some without, then the custom property needs to be created as Boolean.

  Initialize it to "true" if a whiteboard is present in the room, and initialize it to "false" if there is no whiteboard when creating the asset.
>>>>>>> 4387f49580182663c107c332c6dcf63766012630


##### File upload

Select this option if you need to upload a file to define the custom property.

If you select **File upload**, you see an additional text box showing the allowed file types. Enter the allowed file types separated by a comma in the **Allowed file types** field. During the asset creation, you can only upload files of the allowed file types.

**Example:**

To upload the blueprint for a building, you must name the custom property "Building blueprint" and specify the file type of the blueprint file. When you create the asset, you can upload the respective file. Once the asset is created, you can view this file for future reference.


### Types of Custom properties

Custom properties are of 2 types.

* **Simple custom property**:

A simple custom property consists of a single key value pair. This option is set by default when creating new custom properties

![Property-simple](/images/dtm/custom-property/dtm-property-library-simple-custom-property.png)

 **Example:**

 If the custom property is named "Building color", you must use the key "building_color" with the Default value being "white".


* **Complex custom property**:

A complex custom property consists of multiple key value pairs, meaning it contains a root object followed by one or more key value pairs. You can select the complex custom property option by turning on the toggle. If you turn on the toggle, you must define each key value pair as well as providing a Type for each pair.

In case of Complex custom property, each key value pair must be defined, and type should be provided for each key value pair

 **Example:**

If "Building dimension" is defined as a complex custom property, then building area, building height and building width are the multiple key value pairs defining the parameter "Building dimension".

![Property-complex](/images/dtm/custom-property/dtm-property-library-complex-property.png)


Fill all the mandatory fields and click **Save** to create a custom property. Based on the input, you create either a **Simple custom property** or a **Complex custom property**. In case of a **Complex custom property** each key value pair must be defined, also provide the **Type** for each key value pair.

When the process is completed successfully, you see a green pop-up notification at the top right corner of the screen.

If any mandatory fields are left open, the Save button is deactivated.

{{< c8y-admon-info>}}
In case of validation issues, the respective fields are also highlighted red and an error notification will pop up. To solve this issue, enter the necessary information in the respective field and click Save.
{{< /c8y-admon-info>}}

![Property-validation](/images/dtm/custom-property/dtm-property-library-validation-issues.png)

Once the custom properties are created, they are listed on the left. For simple custom properties you see the **Type** as the labels. For complex custom properties you see the **Object** against the labels.

You can select any custom property from this list. Click the desired custom property to see all the details on the right of the screen. You can now view or edit any content of the custom property. Click **Save** to save your changes.

You can also delete any custom property from the list. Select the respective custom property and click **Delete** on the bottom right. The custom property is now deleted.


{{< c8y-admon-info>}}

If the custom property you want to delete, is used as part of an existing asset, then a pop up notification is displayed for the same and custom property is not deleted.

{{< /c8y-admon-info>}}


You can also search for specific custom properties using the **Search** option. To start searching, enter the label in the search field and click **Search**.

If the search is successful, all custom properties matching the search values are displayed on the screen.

If the search entry does not match with any custom properties, you get a notification.

Once you have defined all necessary custom properties for your project, you need to define the required [asset types](/dtm/asset-types/#asset-types).


 <!---![Add new custom property via asset types](/images/dtm/asset-type/dtm-asset-type-create-new-custom-property.png)

Once the custom property is created, you can add this custom property in asset type being created.

![assettype-validation](/images/dtm/asset-type/dtm-asset-type-validation-error.png)--->
