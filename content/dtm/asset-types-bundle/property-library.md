---
weight: 10
title: Property library
layout: redirect
---

**Property library** section allows you to create custom properties. Custom properties are the attributes that define an asset type. One or more custom properties are used to define an asset type.
Also, the same custom property can belong to 2 different asset types.

When you navigate to Property library page via the path **“Configuration> Digital twin library > Property library”** for the first time, there will be no custom property present in the system. Click **Add custom property** to add the custom properties.

If you use a tenant with custom properties already defined in the Property library, you can find the list of defined custom properties on the left, as well as the selected custom properties listed on the right.

On click of **Add custom property** a screen is displayed on right side. Once you fill in all the mandatory fields with valid inputs, then you have an option to save the custom property.
Screenshot to be added for Add custom property screen

Custom properties have the following attributes:
*	Label: Name of the custom property and is a mandatory field. Custom property is addressed using the Label field.
*	Key: Mandatory field Key, is used to uniquely identify and store the custom property internally.
*	Description: Optional field description is used to provide a brief description about the custom property being created.
*	Complex property toggle: This toggle option when enabled creates a Complex custom property. By default its disabled and creates a simple custom property.
*	Type: Type dropdown defines the type of the custom property. Type can belong to any of these categories – Text, Number, File upload, Date picker, Enumeration or Boolean.
*	Default value: Optional text box default value, defines the default value for the attribute when filled. If empty, then you have an option to fill, and if filled then you can modify default value during creation of Asset.

>**Info:** Default value text box gets displayed only if the ‘Type’ chosen is either **Text** or **Number**.

As described above, you can select one of the six options listed under **Type** to further define the type of your custom property.

##### **Text**

  If you select "Text", four additional fields appear. The information in these fields is optional. Select "Text" when the custom property value is a string, for example, the building name.

  Screenshot to be added by choosing Text in dropdown

  *	**Min Length**:

  If you check this box, you need to enter the minimum length of the text that must be provided for this custom property during the asset creation. Any text below the minimum length will not be accepted.

  You also have an option of not checking this box. Doing so implies there will be no minimum length criteria set for this custom property during the asset creation.

  * **Max Length**:

  If you check this box, you need to enter the maximum length of the text that must be provided for this custom property during the asset creation. Any text above the maximum length will not be accepted.

  If the entered text exceeds the maximum length, you get notified of the incidence. The asset will not be created.

  * **RegExp**:

  If you check this box, you need to enter a valid regular expression. You also need to provide the custom property value when creating the asset, which adhers to the regular expression defined.

  **Example:**

   If, for example, the custom property is "Employee ID", then all employee IDs have to start with the prefix “SAGEMPID”. As a result, the regular expression can be provided as ^SAGEMPID[a-zA-Z0-9]*$.

  *	**Default value**:

  This field is optional and provides the flexibility of assigning a default value to the custom property. If this field is left empty, you can enter any value for this custom property during the asset creation.

  {{< c8y-admon-info>}}
The entered **Default value** has to adhere to all validations provided beforehand. If you have set the **Min length**, **Max length** and/or **RegExP**, the default value must fulfill all set validations.
{{< /c8y-admon-info>}}


  **Example:**

   If the custom property is "Employee ID" with a **Min length** of 5, a **Max length** of 20 and the **RegExP** defined as "^SAG[a=zA-Z0-9]*$", the default value must fulfill all of these three criteria. If it does not, this results in a validation error. The respective field will be highlighted to modify its content to fit the criteria.

   If you enter the information correctly according to the set criteria, the default value information for this custom property is valid. Click **Save** to finish.

  [Screenshot to be added for this positive flow.]


##### **Number**


  If you select the **Number** as the custom property type you have to provide a numeric value when creating the asset, for example, the height of a building.

  The type **Number** contains the following fields for additional information:

  * **Minimum**:

   This value is optional. If you select this box, you must enter a number in the field on the right. When you create the asset, the custom property value cannot be lower or less than the Minimum provided.

   {{< c8y-admon-info>}}

   If you have entered a (Default value)[add link] beforehand, the **Default value** needs to be greater than or equal to the **Minimum** entered here.

   By default, this box is not checked.

   {{< /c8y-admon-info>}}


  * **Maximum**:

   This value is optional. If you select this box, you must enter a number in the field on the right. When you create the asset, the custom property value cannot exceed the **Maximum** provided.

   {{< c8y-admon-info>}}

   If you have entered a (Default value)[add link] beforehand, the **Default value** needs to be lesser than or equal to the **Maximum** entered here.

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

  If you select this option in the **Type** dropdown list, then during asset creation you must choose a date and custom property will be initialized to that value.

  **Example:**

   An example for a custom property with this type is "start date". During the asset creation you can initialize the custom property with the relevant start date.


##### **Enumeration**

  If you want to choose a value from a dropdown during asset creation, then select **Type** as **Enumeration** when creating the custom property.

  When you select **Enumeration** as the custom property **Type**, a second field appears below. Here, enter all desired information separated by a comma.

  When the asset is being created, then these values appear as menu options in the dropdown. Select one of the options and custom property is initialized with that option.

  **Example:**

   If "building color" is a custom property and the color has to be either "black", "white" or "grey", then these values are provided as comma separated options when creating the custom property.

  [Screenshot to be added for custom property screen.]


##### **Boolean**

  If value of the Custom property is either "true" or "false", then choose **Type** as **Boolean**.

  **Example:**

  If "Whiteboard" is a custom property and in a building there are rooms with Whiteboard and other rooms not having the Whiteboard, then in such cases the custom property is created with type as **Boolean**.

  Initialize it to "true" if whiteboard is present in room, and initialize it to "false" in case the whiteboard is absent.


##### **File Upload**

  If you want to upload a file when creating the asset, then choose **File Upload** as the **Type**.

  On selecting **File Upload** additional text box is displayed to mention the allowed file types. This is an optional field and if filled, only the mentioned file types are allowed to be uploaded.

 **Example:**

  In case you want to upload the blueprint for a building, then create a custom property named “Building blueprint”. When creating the asset, the blueprint can be uploaded as a file for this custom property. Once the asset is created, you will have an option to view this file for future reference.  


  Custom properties are of 2 types.

* **Simple Custom property**:

If an attribute consists of a single key value pair, then it is a Simple custom property.

 **Example:**

 If “Building Color” is defined as a custom property under Property library section, then “building_color” is the key used. “White” is the default value for this custom property.

[Screenshot to be provided]

* **Complex Custom property**:

 If a Custom property consists of multiple key value pairs, then such properties are Complex custom properties. In this case, there will be a root object followed by one or more key value pairs.

 **Example:**

 If Building dimension is defined as a complex custom property, then building area, building height and building width are the multiple key value pairs defining the attribute building dimension.

[Screenshot to be provided]

Fill all the mandatory fields and click on **Save** button to create a custom property. Either a Simple or a Complex custom property is created, based on inputs provided. In case of Complex custom property, each key value pair must be defined, and "type" should be provided for each key value pair.

On successful creation, a success notification is displayed on top right of screen.

In case the mandatory fields are not filled, then the **Save** button is not enabled.

If the mandatory fields are filled, but there are validation issues, then the same will be highlighted with red highlight on the corresponding element and validation error text will be displayed on screen. You can then change the input fields accordingly and save with new valid inputs.

[Screenshot to be added for validation issue. screenshot required]

If you want to cancel the creation of a new custom property, click **Cancel** at the bottom. In this case, you do not receive a notification and the **Add new property** screen closes.

Once the custom properties are created, then all the custom properties get listed on the screen towards the left. In case of simple custom properties, the **type** gets displayed along with the labels. In case of complex properties, **Object** is displayed against the labels.

You can select any custom property from this list. Clicking it displays all the details on the right of the screen. You can now view or edit any content of the custom property. Click **Save** to save your changes. In case of successfully editing a custom property, you see a notification indicating that the changes have been saved successfully.

You can also delete any custom property from the list. Select the respective custom property and click **Delete** on the bottom right. The custom property is now deleted. You also see a notification message stating that the custom property has been deleted.


{{< c8y-admon-info>}}

 If the custom property you want to delete, is used as part of an existing asset, then a pop up notification is displayed for the same and custom property is not deleted.

{{< /c8y-admon-info>}}


 You can also search for specific custom properties using the **Search** field. To start searching enter the label in the search field and click **Search**.

 If the search is successful, all custom properties matching the search values are displayed on the screen.

 If the search entry does not match with any custom properties, you get a notification.

 Once you have defined all necessary custom properties for your project, you need to define the required asset types.
