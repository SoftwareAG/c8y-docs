---
order: 50
title: Managing business rules
layout: redirect
---

<a name="event-processing"></a>
### Event processing

Using event processing, you can specify realtime business logic that is automatically run by Cumulocity as soon as new data arrives or existing data is modified. The logic is deployed in so-called "modules". Modules consist of a set of statements that you write in [Cumulocity Event Language](/guides/concepts/realtime). 

>**Info**: A user-friendly way to specify realtime business logic is provided in the Cockpit application through the so-called "[Smart Rules](/guides/users-guide/cockpit#smart-rules)". Smart Rules are "under the hood" also implemented as Cumulocity Event Language statements, and you can see them in the "Event Processing" page. However, you cannot edit Smart Rules from here.

Click "Event processing" in the "Business rules" menu to view the current modules or to create new ones.

<img src="/guides/images/users-guide/Administration/Admin_EventProcessing.png" alt="Event processing" style="max-width: 100%">

For each module in the list, the status (deployed = indicated by a green checkmark / not deployed = indicated by an exclamation mark), the name and the date when is was last updated is provided.

To edit a module, simply click the module or click **Edit** in the context menu, accessible through the menu icon.

To remove a module, click **Remove** in the context menu.

Instead of deleting the module you can also disable it temporarily by setting its status to "Not deployed".

**Creating new modules**

To create a new module, click **New module** in the top menu bar.

<img src="/guides/images/users-guide/Administration/Admin_EventProcessingNewModule.png" alt="New module" style="max-width: 100%">

1. Enter a name for the module at the very top. You can only use alphanumeric characters without blanks.
2. By default, the status is set to "Deployed" which means that the statements you enter will be run immediately. Set the slider to "Not deployed" if you want to avoid this. 
3. Enter your CEL statements into the "Source code" text box. For your convenience, we provide various examples. Click **Examples** and select an appropriate example from the dropdown list. Click **Append example** to paste the example into the "Source code" text box at the position of the cursor.
4. Click **Save** to save your settings.

The example module creates an alarm if the temperature goes below 0 degree.

<img src="/guides/images/users-guide/Administration/Admin_EventProcessingModuleExample.png" alt="Example module" style="max-width: 100%">

If the status of a module is set to "Deployed", this is indicated by a green checkmark in the module list. Whenever your statements produce some output you will see it below the checkmark icon. Clicking a line of output unfolds the detailed output of the statement. Clicking **Clear all** removes the output from the screen.

### <a name="reprio-alarms"></a>Alarm mapping

Alarm mapping enables you to change the severity and text of alarms to adapt them to your business priorities. For example, a loss of the connection to a device is by default a "MAJOR" alarm but may be critical to you. To change this, add an alarm mapping to change alarms related to connection losses to "CRITICAL".

Click "Alarm mapping" in the "Business Rules" menu to see a list of all alarm mappings.

<img src="/guides/images/users-guide/Administration/Admin_AlarmMapping.png" alt="Alarm mapping" style="max-width: 100%">

For each alarm mapping, the alarm severity and the name of the mapping is shown.

To edit an alarm mapping, simply click it.

To delete an alarm mapping, hover over it and click the **Delete** button.

**Adding an alarm mapping**

To add an alarm mapping, click **Add alarm mapping** in the top menu bar.

<img src="/guides/images/users-guide/Administration/Admin_AlarmMappingAdd.png" alt="Add alarm mapping" style="max-width: 100%">

1. Enter the alarm type to be modified.
2. Optionally, enter a new text for the alarm. If you do not enter any text, the original text in the alarm will be kept.
3. Select the desired new severity, or select "Drop" to not show the alarm at all.
4. Click **Save** to save your settings.