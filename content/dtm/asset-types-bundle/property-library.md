---
weight: 10
title: Property library
layout: redirect
---

**Property library** section allows you to create custom properties. Custom properties are the attributes that define an [asset type](/dtm/asset-types/#asset-types). One or more custom properties are used to define an asset type.
Also, the same custom property can belong to 2 different asset types.

#### Custom property attributes
When you navigate to the **Property library** page via **“Configuration> Digital twin library > Property library”** for the first time, there will be no custom property present in the system. Click **Add custom property** at the top right to add your first custom property.

If you use a tenant which already has defined custom properties already defined **Property library**, you can find the list of defined custom properties on the left. The selected custom properties are listed on the right.

##### **Create new Custom property**

In order to add a custom property, click **Add custom property** on the bottom left. Enter the required data in the dialog box on the right and click **Save**. You can now select this custom property..

![Property-add](/images/dtm/custom-property/dtm-property-library-create-property.png)


Custom properties have the following attributes:
*	**Label**: This information is mandatory. It refers to the name of the custom property.  The custom property is further addressed using the information provided here..
*	**Key**: This information is mandatory. It is used to uniquely identify and store the custom property in the DTM.
*	**Description**: This information is optional. It provides a brief description of the custom property.
*	**Complex property toggle**:  This information is optional. Use this toggle to create a complex custom property, that contains one or multiple key-value pairs. The toggle is disabled by default.
*	**Type**: This field defines the type of the custom property. It can be any of the following categories – Text, Number, File upload, Date picker, Enumeration or Boolean.
*	**Default value**: This information is optional. It defines the default value for the attribute. You can modify the content when creating an asset using this custom property.


>**Info:** Default value text box gets displayed only if the ‘Type’ chosen is either **Text** or **Number**.

#### Types of Custom property

As described above, you can select one of the six options listed under **Type** to further define the type of your custom property.

##### **Text**

  If you select **Text**, four additional fields appear. The information in these fields is optional. Select **Text** when the custom property value is a string, for example, the building name.

![Property-text](/images/dtm/custom-property/dtm-property-library-type-text.png)


  *	**Min Length**:

  If selected, you need to enter the minimum length of the text that must be provided for this custom property during the asset creation. Any text below the minimum length will not be accepted.

If not selected, there will be no minimum length criteria set for this custom property during the asset creation.

  * **Max Length**:

  If selected, you need to enter the maximum length of the text that must be provided for this custom property during the asset creation.

  If the entered text exceeds the maximum length, you get notified of the incidence. The asset will not be created.

  * **RegExp**:

  If selected, you need to enter a valid regular expression. You also need to provide the custom property value when creating the asset, which adhers to the regular expression defined.

  **Example:**

   If, for example, the custom property is "Employee ID", then all employee IDs have to start with the prefix “SAGEMPID”. As a result, the regular expression can be provided as ^SAGEMPID[a-zA-Z0-9]*$.

##### Default value

  *	**Default value**:

  This field is optional and provides the flexibility of assigning a default value to the custom property. If this field is left empty, you can enter any value for this custom property during the asset creation.

  {{< c8y-admon-info>}}
The entered **Default value** has to adhere to all validations provided beforehand. If you have set the **Min length**, **Max length** and/or **RegExP**, the default value must fulfill all set validations.
{{< /c8y-admon-info>}}


  **Example:**

   If the custom property is "Employee ID" with a **Min length** of 5, a **Max length** of 20 and the **RegExP** defined as "^SAG[a-zA-Z0-9]*$", the default value must fulfill all of these three criteria. If it does not, this results in a validation error. The respective field will be highlighted to modify its content to fit the criteria.

   If you enter the information correctly according to the set criteria, the default value information for this custom property is valid.

   Click **Save** to finish.


##### **Number**


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


##### **Date Picker**

  If you select this option in the **Type** drop-down list, you must choose a date and custom property during asset creation to be initialized to that value.

  **Example:**

   An example for a custom property with this type is "start date". During the asset creation you can initialize the custom property with the relevant start date.


##### **Enumeration**

  If you want to choose a value from the drop-down menu during the asset creation, then select **Type** as **Enumeration** when creating the custom property.

  When you select **Enumeration** as the custom property **Type**, a second field appears below. Here, enter all desired information separated by a comma.

   During asset creating, these values appear as menu options in the drop-down menu. Select one of the options to initialize the custom property with that option.

  **Example:**

   If you create a custom property for "building color" and the color must be either black, white or grey, you have to provide these options separated by a colon when creating the custom property.

   ![Property-enum](/images/dtm/custom-property/dtm-property-library-type-enum.png)



##### **Boolean**

  If you select Boolean for your custom property type, the presence of the custom property can either be true or false.

  **Example:**

  If you define a custom property called "Whiteboard" for a building where there are rooms with a whiteboard and some without, then the custom property needs to be created as Boolean. So when the asset is created, if the room has a whiteboard, it is then initialized to "true". If there is no whiteboard in the room, the asset is initialized to "false".

  Initialize it to "true" if a whiteboard is present in the room, and initialize it to "false" if there is no whiteboard.


##### **File upload**

  Select this option if you need to upload a file to define the custom property.

  If you select **File upload**, you see an additional text box showing the allowed file types. Enter the allowed file types separated by a comma in the **Allowed file types** field. During the asset creation, you can only upload files of the allowed file types.

 **Example:**

  If you want to upload the blueprint for a building,you must name the custom property "Building blueprint" and specify the file type of the blueprint file. When you create the asset, you can upload the respective file. Once the asset is created, you can view this file for future reference.


##### **Types of Custom properties**

Custom properties are of 2 types.

* **Simple Custom property**:

If an attribute consists of a single key value pair, then it is a Simple custom property.

![Property-simple](/images/dtm/custom-property/dtm-property-library-simple-custom-property.png)

 **Example:**

 If the custom property is named "Building color", you must use the key "building_color" with the Default value being "white".


* **Complex Custom property**:

 A complex custom property consists of multiple key value pairs, meaning it contains a root object followed by one or more key value pairs. You can select the complex custom property option by turning on the toggle. If you turn on the toggle, you must define each key value pair as well as providing a Type for each pair.

In case of Complex custom property, each key value pair must be defined, and type should be provided for each key value pair

 **Example:**

 If "Building dimension" is defined as a complex custom property, then building area, building height and building width are the multiple key value pairs defining the attribute building dimension.

 ![Property-complex](/images/dtm/custom-property/dtm-property-library-complex-property.png)


Fill all the mandatory fields and click **Save** to create a custom property. Based in the input, you create a either a **Simple custom property** or a **Complex custom property**. In case of a **Complex custom property** each key value pair must be defined, also provide the **Type** for each key value pair.

When the process is completed successfully, you see a green pop-up notification at the top right corner of the screen.

If any mandatory fields are left open, the Save button is deactivated.

{{< c8y-admon-info>}}
In case of validation issues, the respective fields are also highlighted red and an error notification will pop up. To solve this issue, enter the necessary information in the respective field and click Save.
{{< /c8y-admon-info>}}

![Property-validation](/images/dtm/custom-property/dtm-property-library-validation-issues.png)


If you want to cancel the creation of a new custom property, click **Cancel** at the bottom. In this case, you do not receive a notification and the **Add new property** screen closes.

Once the custom properties are created, they are listed on the left. For simple custom properties you see the **Type** as well as the labels. For complex custom properties you see the **Object** against the labels.

You can select any custom property from this list. Click the desired custom property to see all the details on the right of the screen. You can now view or edit any content of the custom property. Click **Save** to save your changes.

You can also delete any custom property from the list. Select the respective custom property and click **Delete** on the bottom right. The custom property is now deleted.


{{< c8y-admon-info>}}

 If the custom property you want to delete, is used as part of an existing asset, then a pop up notification is displayed for the same and custom property is not deleted.

{{< /c8y-admon-info>}}


 You can also search for specific custom properties using the **Search** option. To start searching, enter the label in the search field and click **Search**.

 If the search is successful, all custom properties matching the search values are displayed on the screen.

 If the search entry does not match with any custom properties, you get a notification.

 Once you have defined all necessary custom properties for your project, you need to define the required [asset types](/dtm/asset-types/#asset-types).
