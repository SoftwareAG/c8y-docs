---
order: 80
title: Smart rules
layout: redirect
---

<a name="rules"></a>

Cumulocity includes a rule engine to analyze data in realtime and to perform actions based on data. These rules are specified in a scripting language and are managed in the [Administration application](/guides/images/users-guide/administration).

To easily create rules, the Cockpit application includes a Smart Rules builder which allows you to create rules from templates (so-called smart rule templates).

>**Info:** Smart Rules are only visible, if the tenant is subscribed to the Smart Rule application. To manage Smart Rules, the user has to have INVENTORY CREATE permission and either SMART RULE permission or CEP MANAGEMENT permission.

Smart Rules are parameterized. There are two sources for parameters:

**Rule Parameters** are provided by the user when creating a Smart Rule from a template. Examples are email addresses and alarm texts.

**Object Parameters** are stored in the group or device. These parameters can be edited after the Smart Rule has been created. An example includes min and max values for thresholds.

Smart Rules can be seen 

* in the "Info" tab of a device or group,
* in the "Smart Rules" page accessible from the "Configuration" menu. 

![Smart Rules info tab](/guides/images/users-guide/smartruleinfo.png)

There are two different kinds of Smart Rules:

- **Local**: Smart Rules created in either a group or a device. They are visible to everyone with access to the group/device.
- **Global**: These Smart Rules are created in a global context ("Smart Rules" page, alarms, data explorer, etc...). They are only visible to users with the relevant permissions.

In the "Smart Rules" page, only the global smart rules are shown. 

In a local context (group or device) and without the relevant permissions, only the local Smart Rules are shown. If the user has the relevant permissions, both local and global Smart Rules are shown.		
The permissions required in order to see the global Smart Rules are:

- Smart rule READ
- Smart rule ADMIN
- CEP management ADMIN

### <a name="create-rules"></a>Creating Smart Rules

Smart Rules can be created either in the "Smart Rules" page, accessible from the "Configuration" menu in the navigator, or in the "Info" tab of a group or a device.

To create a Smart Rule, follow these steps:

1. Click **Add Smart Rule** in the top menu bar. 
2. Select a Smart Rule template from the list. 
3. In the upcoming window, use the slider to select if the rule will be enabled or disabled. 
4. Next, configure the rule parameters. The parameters differ from rule to rule, for details see individual rule descriptions below.
5. In the "Target asset or devices" field, you can optionally activate the current Smart Rule for specific devices or assets. 
6. Click **Create** to create the Smart Rule.

A list of Smart Rules is shown below. Note that this list might differ based on your installation.

<img src="/guides/images/users-guide/Cockpit/Cockpit_GlobalSmartRules.png" name="Global Smart Rules" style="width:75%;"/>

If the new rule was set to "enabled" and was not activated for specific objects, the rule will be active for all devices and groups. See next section on how to deactivate a smart rule for specific objects.

To avoid confusion, disabled Smart Rules are not displayed in group menus or device menus.

Smart Rules can be instantiated multiple times.

### Activating or deactivating Smart Rules

A Smart Rule can be activated (switched on) and deactivated (switched off) for a single object (group or device). For example, if a device is generating too many threshold alarms, you can deactivate the rule for this single object. The rule is still active for all other objects.

To deactivate or activate a Smart Rule for a group or device, navigate to the "Info" tab of the group or device and enable/disable the respective rule using the slider. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleInfoTab.png" name="Smart rule in Info tab" style="width:100%;"/>

### Editing Smart Rules

To edit a Smart Rule, just click the respective row or click the menu icon at the end of the row and from the context menu select **Edit**.

### Duplicating Smart Rules

To duplicate a Smart Rule, click the menu icon at the end of the row and from the context menu select **Clone**. Modify at least the name and click **Save & close** to save the Smart Rule and return to the Smart Rule list.

### Removing Smart Rules

To remove a Smart Rule, click the menu icon at the end of the row and from the context menu select **Remove**.

### Debugging Smart Rules

For easier debugging, there is a direct link from a Smart Rule to the corresponding event processing module. Click the menu icon at the end of the row and from the context menu select **Inspect** to use this link.

### Example: Defining explicit thresholds

To define a threshold rule follow these steps:

1. In the navigator, select the desired group or device to apply a threshold to.
2. Switch to the "Data explorer" tab.
3. If the data point that should raise the threshold is not visible by default, select **Add data point** and add a data point. For details on how to add data points see [Adding data points](#add-data-points).
4. Click the menu icon at the end of the row of the respective data point and select **Create Smart Rule**. <br><br> <img src="/guides/images/users-guide/Cockpit/Cockpit_DataPointExample.png" name="Data point example" style="width:75%;"/>
<br>
5. Select the Smart Rule "On measurement explicit threshold create alarm". <br><br> <img src="/guides/images/users-guide/Cockpit/Cockpit_SmartRuleExample.png" name="Smart Rule example" style="width:50%;"/><br>
6. Fill in the red range minimum and red range maximum value. When the values are outside these range, a threshold alarm will be raised.
7. Under "Create Alarm" you can optionally edit the alarm type and the alarm text.
8. Under "Target assets or devices" you can select the object this rule will be applied to.
9. Click **Create** to create the Smart Rule.

The rule will automatically be set to active and alarms appear if they arise.

### Chain rule execution

Smart Rules can create a new data item on the platform. For example, the threshold rule creates new alarms. This new data can be handled further by selected Smart Rules, for example, by an "On alarm send e-mail" rule.

Using this mechanism, it is possible to create a chain of smart rules. 

>**Info:** If you create a rule chain keep in mind how much data will be created to avoid overload or excessive amount of data.
