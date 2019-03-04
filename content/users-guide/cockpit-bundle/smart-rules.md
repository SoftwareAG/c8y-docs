---
weight: 80
title: Smart Rules
layout: redirect
---

Cumulocity includes a rule engine to analyze data in realtime and to perform actions based on data. These rules are specified in a scripting language and are managed in the [Administration application](/guides/users-guide/administration).

To easily create rules, the Cockpit application includes a Smart Rules builder which allows you to create rules from templates (so-called smart rule templates).

>**Info:** Smart Rules are only visible, if the tenant is subscribed to the Smartrule application. To manage Smart Rules, the user has to have CREATE permission for Inventory and either SMART RULE permission or CEP MANAGEMENT permission.

Smart Rules are parameterized. There are two sources for parameters:

**Rule Parameters** are provided by the user when creating a Smart Rule from a template. Examples are email addresses and alarm texts.

**Object Parameters** are stored in the group or device. These parameters can be edited after the Smart Rule has been created. An example includes min and max values for thresholds.

Smart Rules can be seen 

* in the **Info** tab of a device or group, <br>![Smart Rules info tab](/guides/images/users-guide/cockpit/cockpit-smart-rules-info-tab.png)

* in the **Smart Rules** page accessible from the **Configuration** menu. <br>
![Smart Rules info tab](/guides/images/users-guide/cockpit/cockpit-smart-rules-list.png)

There are two different kinds of Smart Rules:

- **Local**: Smart Rules created in either a group or a device. They are visible to everyone with access to the group/device.
- **Global**: These Smart Rules are created in a global context (**Smart Rules** page, alarms, data explorer, etc...). They are only visible to users with the relevant permissions.

In the **Smart Rules** page, only the global Smart Rules are shown. 

In a local context (group or device) and without the relevant permissions, only the local Smart Rules are shown. If the user has the relevant permissions, both local and global Smart Rules are shown.		
The permissions required in order to see the global Smart Rules are:

- Smartrule = READ permission
- Smartrule = ADMIN permission
- CEP management = ADMIN permission

### <a name="create-rules"></a>Creating Smart Rules

Smart Rules can both be created in the **Global Smart Rules** page, accessible from the **Configuration** menu in the navigator, or from the **Info** tab of any group or a device.

To create a Smart Rule, follow these steps:

1. Click **Add Smart Rule** in the top menu bar. <br>
![Add Smart Rule](/guides/images/users-guide/cockpit/cockpit-smart-rules-add.png)<br>
2. Select a Smart Rule template from the list. Note that this list might differ based on your installation.
3. In the upcoming window, use the slider to select if the rule will be enabled or disabled. 
4. Next, configure the rule parameters. The parameters differ from rule to rule, for details see individual rule descriptions in [Smart Rules collection](#smart-rules-collection).
6. Click **Create** to create the Smart Rule.

If the new rule has been set to "Enabled" and has not been activated for specific objects only, the rule will be active for all devices and groups. See next section on how to deactivate a smart rule for specific objects.

To avoid confusion, disabled Smart Rules are not displayed in group menus or device menus.

Smart Rules can be instantiated multiple times.

### Activating or deactivating Smart Rules

A Smart Rule can be activated (switched on) and deactivated (switched off) for a single object (group or device). For example, if a device is generating too many threshold alarms, you can deactivate the rule for this single object. The rule is still active for all other objects.

To deactivate or activate a Smart Rule for a group or device, navigate to the **Info** tab of the group or device and enable/disable the respective rule using the slider. 

<img src="/guides/images/users-guide/cockpit/cockpit-smart-rules-enable.png" name="Smart rule in Info tab" />

### Editing Smart Rules

To edit a Smart Rule click the menu icon at the end of the row or in the top right of a card and from the context menu select **Edit**.

<img src="/guides/images/users-guide/cockpit/cockpit-smart-rules-menu.png" name="Smart rules context menu" />


### Duplicating Smart Rules

To duplicate a Smart Rule, click the menu icon at the end of the row and from the context menu select **Duplicate**. Modify at least the name and click **Save & close** to save the Smart Rule and return to the Smart Rule list.

### Removing Smart Rules

To remove a Smart Rule, click the menu icon at the end of the row and from the context menu select **Remove**.

### Debugging Smart Rules

For easier debugging, there is a direct link from a Smart Rule to the corresponding event processing module. Click the menu icon at the end of the row and from the context menu select **Inspect** to use this link.

### Example: Defining explicit thresholds

To define a threshold rule follow these steps:

1. In the navigator, select the desired group or device to apply a threshold to.
2. Switch to the **Data explorer** tab.
3. If the data point that should raise the threshold is not visible by default, select **Add data point** and [add a data point](#add-data-points). 
4. Click the menu icon at the end of the row of the respective data point and select **Create Smart Rule**. <br><br> <img src="/guides/images/users-guide/cockpit/cockpit-smart-rules-data-point.png" name="Data point example"/>
<br>
5. Select the Smart Rule "On measurement explicit threshold create alarm". 
6. Fill in the red range minimum and red range maximum value. When the measurement value enters or leaves the RED range, an alarm is created or respectively cleared. For details, see the description of the rule "On measurement explicit threshold create alarm" in the [Smart Rules collection](/guides/users-guide/cockpit#smart-rules-collection).
7. Under **Create Alarm** you can optionally edit the alarm type and the alarm text.
8. Under **Target assets or devices** you can select the object this rule will be applied to.
9. Click **Create** to create the Smart Rule.

The rule will automatically be set to active and alarms appear if they arise.

### Chain rule execution

Smart Rules can create a new data item on the platform. For example, the threshold rule creates new alarms. This new data can be handled further by selected Smart Rules, for example, by an "On alarm send e-mail" rule.

Using this mechanism, it is possible to create a chain of Smart Rules. 

>**Info:** If you create a rule chain keep in mind how much data will be created to avoid overload or excessive amount of data.
