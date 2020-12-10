---
weight: 80
title: Smart rules
layout: redirect
---

Cumulocity IoT includes a rule engine to analyze data in realtime and to perform actions based on data. These rules are specified in a scripting language and are managed in the [Administration application](/users-guide/administration).

To easily create rules, the Cockpit application includes a smart rules builder which allows you to create rules from templates (so-called smart rule templates).

>**Info:** Smart rules are only visible, if the tenant is subscribed to the Smartrule application. To manage smart rules, the user has to have CREATE permission for Inventory and either "Smartrule" permission or "CEP management" permission.

Smart rules are parameterized. There are two sources for parameters:

**Rule Parameters** are provided by the user when creating a smart rule from a template. Examples are email addresses and alarm texts.

**Object Parameters** are stored in the group or device. These parameters can be edited after the smart rule has been created. An example includes min and max values for thresholds.

Smart rules can be seen

* in the **Smart rules** page accessible from the **Configuration** menu. <br><br>
![Global smart rules](/images/users-guide/cockpit/cockpit-smart-rules-list.png)

* in the **Info** tab of a device or group. <br><br>
![Smart rules info tab](/images/users-guide/cockpit/cockpit-smartrule-info-tab.png)

There are two different kinds of smart rules:

- **Local**: Smart rules created in either a group or a device. They are visible to everyone with access to the group/device.
- **Global**: These smart rules are created in a global context (**Smart rules** page, alarms, data explorer, etc...). They are only visible to users with the relevant permissions.

In the **Smart rules** page, only the global smart rules are shown.

In a local context (group or device) and without the relevant permissions, only the local smart rules are shown. If the user has the relevant permissions, both local and global smart rules are shown.		
The permissions required in order to see the global smart rules are:

- Smartrule = READ permission
- Smartrule = ADMIN permission
- CEP management = ADMIN permission


### <a name="create-rules"></a>To create a smart rule

Smart rules can both be created in the **Global smart rules** page, accessible from the **Configuration** menu in the navigator, or from the **Info** tab of any group or a device.

1. Click **Add smart rule** in the top menu bar. <br>
2. Select a smart rule template from the list. Note that this list might differ based on your installation.
3. In the resulting dialog box, use the toggle to select if the rule will be enabled or disabled, see [To enable/disable a smart rule](#toggle-rules) for details.
4. Next, configure the rule parameters. The parameters differ from rule to rule, for details see individual rule descriptions in [Smart rules collection](#smart-rules-collection).
6. Click **Create** to create the smart rule.

Smart rules can be instantiated multiple times.


### To edit a smart rule

Click the menu icon at the right of an entry and then click **Edit**.

For details on the fields see [To create a smart rule](#create-rules).


### To duplicate a smart rule

1. Click the menu icon at the right of an entry and then click **Duplicate**.
2. Modify at least the name.
3. Click **Save & close** to save the smart rule and return to the smart rule list.

### To delete a smart rule

Click the menu icon at the right of an entry and then click **Delete**.

### To debug a smart rule

For easier debugging, there is a direct link from a smart rule to the corresponding event processing module.

Click the menu icon at the right of an entry and then click **Inspect** to use this link.

### <a name="toggle-rules"></a> To enable/disable a smart rule

If a smart rule is set to **Enabled** in the edit dialog (accessible from the **Global smart rules** page and the **Info** tab of a particular device/group), it is globally "turned on" (i.e. its underlying module gets deployed) so that the rule is available for devices and groups. 

<img src="/images/users-guide/cockpit/cockpit-smartrule-enabled-toggle.png" name="Smart rule edit dialog" /> 

If it is set to **Disabled** it is "turned off" (i.e. its underlying module is not deployed).

In addition to globally enabling/disabling a smart rule, a smart rule can be in **active** or **inactive** state for particular objects (groups or devices). If **active**, which is the default setting, the rule will process events for these groups and devices. 

To explicitly deactivate a rule, navigate to the **Info** tab of the particular group or device and set the **Active/Inactive** toggle to **Inactive** (and vice versa).  

<img src="/images/users-guide/cockpit/cockpit-smartrule-active-toggle.png" name="Smart rule in Info tab" /> 

An example use case for deactivating a smart rule for a single object could be that a particular device is generating too many threshold alarms. The rule can be deactivated for this device only, but still be active for all other objects.

>**Important:** A rule which is activated for a particular object only works if the rule is also globally enabled.  

For group objects, you can separately select the children to which the rule should apply via the dropdown box. 

<img src="/images/users-guide/cockpit/cockpit-smartrule-children.png" name="Smart rule select children" /> 

### Example: Defining explicit thresholds

To define a threshold rule follow these steps:

1. In the navigator, select the desired group or device to apply a threshold to.
2. Switch to the **Data explorer** tab.
3. If the data point that should raise the threshold is not visible by default, select **Add data point** and [add a data point](#add-data-points).
4. Click the menu icon at the end of the row of the respective data point and select **Create smart rule**. <br><br> <img src="/images/users-guide/cockpit/cockpit-smart-rules-data-point.png" name="Data point example"/>
<br>
5. Select the smart rule "On measurement explicit threshold create alarm".
6. Fill in the red range minimum and red range maximum value. When the measurement value enters or leaves the RED range, an alarm is created or respectively cleared. For details, see the description of the rule "On measurement explicit threshold create alarm" in the [Smart rules collection](/users-guide/cockpit#smart-rules-collection).
7. Under **Create Alarm** you can optionally edit the alarm type and the alarm text.
8. Under **Target assets or devices** you can select the object this rule will be applied to.
9. Click **Create** to create the smart rule.

The rule will automatically be set to active and alarms appear if they arise.

### Chain rule execution

Smart rules can create a new data item on the platform. For example, the threshold rule creates new alarms. This new data can be handled further by selected smart rules, for example, by an "On alarm send e-mail" rule.

Using this mechanism, it is possible to create a chain of smart rules.

>**Info:** If you create a rule chain keep in mind how much data will be created and avoid overload or excessive amount of data.
