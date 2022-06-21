---
weight: 10
title: Property library
layout: redirect
---

**Property library** section allows users to create Custom properties. Custom properties are the attributes that define an asset type. One or more custom properties are used to define an asset type.
Also, the same custom property can be part of 2 different asset types.

When user navigates to Property library page via the path “Configuration> Digital twin library > Property library” for the first time, there will be no custom property present in the system. User can add custom properties using **Add custom property** at the bottom of the screen.
Screenshot to be added when no custom properties are present.

When user logs in to a tenant where the custom properties are already present, then the list of existing custom properties are displayed on the left part of screen. On the right side of screen, user is prompted to add or select a custom property.
Screenshot to be added

On click of **Add custom property** a screen is displayed on right side. Once the user fills in all the mandatory fields with valid inputs, then user has an option to save the custom property.
Screenshot to be added for Add custom property screen

Custom properties have the following attributes:
*	Label: Name of the Custom property and is a mandatory field. Custom property is addressed using the Label field.
*	Key: Mandatory field Key, is used to uniquely identify and store the custom property internally.
*	Description: Optional field description is used to provide a brief description about the custom property being created.
*	Complex property toggle: This toggle option when enabled creates a Complex custom property. By default its disabled and creates a simple custom property.
*	Type: Type dropdown defines the type of the custom property/ attribute. Type can belong to any of these categories – Text, Number, File upload, Date picker, Enumeration or Boolean.
*	Default value: Optional text box default value, defines the default value for the attribute when filled. If empty, user has an option to fill, and if filled then user can modify default value during creation of Asset.

>**Info:** Default value text box gets displayed only if the ‘Type’ chosen is either **Text** or **Number**.

As mentioned above, user can choose any of the 6 below mentioned options for **Type** dropdown:
1. **Text**: In type dropdown when **Text** is selected, then 4 more optional fields appear in **Add new property** page layout. **Text** is chosen when the custom property value will be a string.

  >**Example**: Building Name.

  Screenshot to be added by choosing Text in dropdown
  *	**Min Length**: When the checkbox against this field is checked, user has to enter the minimum length of the text to be provided for this Custom property during Asset creation. Any text below the minimum length will not be accepted.

    User also has an option of not checking the check box, which implies there will be no minimum length criteria for the custom property value during asset creation.

  * **Max Length**: If the check box against this field is checked, then user has to provide the maximum length of text that can be provided as custom property value when creating an asset.

    Incase the text provided by user exceeds the maximum length, then user is notified regarding the same and asset will not be created.

  * **RegExp**: This field when checked expects a valid regular expression as input. Based on the regular expression field defined here, the Custom property value has to be provided when creating the asset.

  >**Example**: Incase “Employee ID” is the custom property and all the employee IDs have to start with prefix “SAGEMPID” then the regular expression can be provided as ^SAGEMPID[a=zA-Z0-9]*$

  *	**Default value**: This optional text box provides the flexibility of assigning a default value to the custom property, if provided during creation of custom property. Incase the default value is left blank, then user can fill in a value for this custom property during asset creation.

  >**Note:** Default value filled by the user has to confine to all the validations provided by the user. If user has mentioned inputs for Min length, max length and/ or regular expression fields, then the default value should fulfil all the validations.

  >**Example**: If Employee ID is the custom property being created, and Min length field is 5, Max length field is 20 and RegExp field is defined as ^SAG[a=zA-Z0-9]*$, then the default value should fulfil all the 3 criteria. Failure to do so will result in the validation error and the respective field will be highlighted.

   [Screenshot to be added for validation error.]

  Incase the user provides a value like “SAGEMPID19087” which fulfils all the 3 conditions, then it’s a valid input for the custom property and it is saved with this default value.

  [Screenshot to be added for this positive flow.]


2. **Number**: If in **Type** dropdown, **Number** is chosen as type, then during asset creation user has to provide a numeric value for this custom property.

  >**Example**: Building height is a custom property whose value will be numeric.

  When Number is chosen as type, below 3 optional fields appear on screen:
  * **Minimum**: If the check box against this field is checked, then user has to provide a number in the textbox. When creating an asset, this Custom property value should not be lesser than the Minimum value provided during creation of Custom property.

   Also, in case user provides a default value during creation of custom property, the default value should be greater than or equal to the minimum value provided.

   By default, this checkbox is not checked, and user can choose not to enter the minimum value for the custom property.

  * **Maximum**: If the check box against this field is enabled by user, then a number has to be provided and the custom property value cannot exceed this number.

   In case default value is provided when creating the custom property, then it has to be lesser than or equal to the maximum value entered by user.

   By default, the check box is not checked, and it is an optional field.

   * **Default value**: Is an optional field and if filled, then during asset creation the custom property will be initialized with this value. User has an option to modify the default value and enter a new value during asset creation.

   If the minimum and/ or maximum fields are entered, then the default value provided will be validated against one or both the conditions.

   >**Example**: If Building height is a custom property being created, and Minimum field is set to 80 and Maximum is set to 150, then the default value should be between 80 to 150 (Inclusive).

   >**i.e,** Minimum >= default value <= Maximum.

  [Screenshot to be added when type is number and all fields filled.]


3. **Date Picker**: In case user chooses this option in the **Type** dropdown, then during asset creation for this custom property a date picker/ calendar will be displayed. User must choose a date and custom property will be initialized to that value.

  >**Example**: If **Start date** is the custom property, then it can be of type **Date Picker** and when asset is being created, user can initialize this custom property with the relevant start date.

  [Screenshot to be added for date picker option in custom property screen and during asset creation.]


4.	**Enumeration**: If the custom property value has to be chosen from a set of predefined options, then the **Type** can be chosen as **Enumeration** when creating the custom property.

  On choosing this as **Type**, “Values (comma separated)” text box appears on screen. User has to enter all the options separated by comma in this text box.

  When the asset is being created, then these values appear as menu options in the dropdown. User must select one of the options and custom property is initialized with that option.

  >**Example**: If **building color** is a custom property and the color has to be either "black", "white" or "grey", then these values are provided as options to user when creating the custom property.

  [Screenshot to be added for custom property screen and during asset creation.]


5. **Boolean**: **Type** is chosen as **Boolean** when presence of the Custom property can be either "true" or "false".

  >**Example**: If **Whiteboard** is a custom property and in a building there are rooms with Whiteboard and other rooms not having the Whiteboard, then in such cases the custom property is created with type as **Boolean**.

 When the asset is being created, if the room is having a **Whiteboard**, then it will be initialized to "true" and it will be initialized to "false" in case the Whiteboard is absent.

  [Screenshot to be added for custom property and asset creation part.]


 6. **File Upload**: This option will be chosen in **Type** dropdown, when a file has to be uploaded for the custom property being defined.

 When the **Type** is chosen as **File Upload**, then user has to mention the allowed file types separated by comma in the “Allowed file types” text box. When creating the asset, files belonging to only these categories will be allowed to be uploaded for the custom property.

 >**Example**: In case user wants to upload the blueprint for a building, then a custom property named “Building blueprint” can be created. When the asset is being created, then the blueprint can be uploaded as a file for this custom property. Once the asset is created, user will have an option to view this file for future reference.  

  [Screenshot to be added for custom property and asset creation part.]

  Custom properties are of 2 types.

* **Simple Custom property**:

If an attribute consists of a single key value pair, then it is a Simple custom property.

 >**Example**: If “Building Color” is defined as a custom property under Property library section, then “building_color” is the key used. “White” is the default value for this custom property.

[Screenshot to be provided]

* **Complex Custom property**:

If a Custom property consists of multiple key value pairs, then such properties are Complex custom properties. In this case, there will be a root object followed by one or more key value pairs.

 >**Example**: If Building dimension is defined as a complex custom property, then building area, building height and building width are the multiple key value pairs defining the attribute building dimension.

[Screenshot to be provided]

Once user has entered all the mandatory fields with valid inputs, then custom property will be created on click of **Save** button. Either a Simple or a Complex custom property can be created, based on inputs provided by user. In case of Complex custom property, each key value pair must be defined, and type should be provided for each key value pair.

On successful creation, user will be notified with a green pop-up notification on top right of screen.

In case the mandatory fields are not filled, then the Save button is not enabled.
If the mandatory fields are filled, but there are validation issues, then the same will be highlighted with red highlight on the corresponding element and validation error text will be displayed on screen. User can then change the inputs fields accordingly and save with new valid inputs.

[Screenshot to be added for validation issue.]

In case user wants to cancel the creation of custom property, then the same is done by clicking on **Cancel** option on the bottom. No pop-up notification is displayed in such cases and **Add new property** screen gets removed from the RHS pane.

Once the custom properties are created, then all the custom properties get listed on the screen towards the left. In case of simple custom properties, the **type** gets displayed along with the labels. In case of complex properties, it displays **Object** against the labels.

User has an option to select any of the custom properties. On click, the details get displayed on the right. User can either view or edit any of the fields and save the new values using the **Save** option. On successful edit, user is notified with a success pop-up notification indicating the changes are saved successfully.

[Screenshot to be added for Modify scenario.]

User also has an option to delete the created custom property. Click on any custom property and details get displayed on right. Click the **Delete** option on bottom. Custom property gets deleted, and user is notified about the same with a success pop-up notification.

 >**Note**: In case the custom property is being used as part of an existing asset, then the property gets deleted from Asset type and existing Assets.

Additionally in Property library page, there is a **Search** option provided. In case user wants to search for a particular custom property, then the label can be entered in the search bar and user can click on the search icon.

Successful search will display the custom properties filtered based on the search text.
In case there are no custom properties matching the search text, then same is notified to the user with a message on screen.

Once user defines all the custom properties, then next step is to start defining the Asset types.
