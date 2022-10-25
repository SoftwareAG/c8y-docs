---
weight: 80
title: Smart rules
layout: redirect
helpcontent:
- label: smart-rules
  title: Smart rules
  content: "Smart rules are a useful means to analyze data in realtime and to perform actions based on data. The global smart rules displayed here apply to a global context (in contrast to local ones for specific groups or devices). Note that you need specific permissions to see and manage smart rules.


  Cumulocity IoT includes preset smart rules templates, for example 'On measurement threshold create alarm'. Since the functionality of the various smart rule types differs, different parameters are required to configure it. See the *User guide* for details on each smart rule template and its configuration."
---


{{< product-c8y-iot >}} includes a rule engine to analyze data in realtime and to perform actions based on data. These rules are specified in a scripting language and are managed in the [Administration application](/users-guide/administration).

To easily create rules, the Cockpit application includes a smart rules builder which allows you to create rules from templates (so-called smart rule templates).

{{< c8y-admon-info >}}
The smart rules functionality is only available if the tenant is subscribed to the Smartrule microservice and the Apama-ctrl microservice. To manage smart rules, the user must have CREATE permission for "Inventory" and ADMIN permission for either "Global smart rules" or "CEP management".
{{< /c8y-admon-info >}}

Smart rules are parameterized. There are two sources for parameters:

* **Rule parameters** are provided by the user when creating a smart rule from a template. Examples are email addresses and alarm texts.
* **Object parameters** are stored in the group or device. These parameters can be edited after the smart rule has been created. An example includes min and max values for thresholds.

There are two different types of smart rules:

* **Global smart rules**

  Global smart rules are created in a global context (**Smart rules** page, alarms, data explorer, and so on).

  They are only visible to users with the relevant permissions. The permissions required in order to see the global smart rules are:

  * Smartrule = READ permission
  * Smartrule = ADMIN permission
  * CEP management = ADMIN permission
<br>
<br>
* **Local smart rules**

  Local smart rules are created in either a group or a device. They are visible to everyone with access to the group/device.


Smart rules can be seen in two places:

* In the **Global smart rules** page accessible from the **Configuration** menu.

  ![Global smart rules](/images/users-guide/cockpit/cockpit-smart-rules-list.png)

  In the **Global smart rules** page, only the global smart rules are shown.

* In the **Smart rules** tab of a device or group.

  ![Smart rules info tab](/images/users-guide/cockpit/cockpit-smartrule-info-tab.png)

  In a local context (group or device) the local smart rules are shown. For users with the relevant permissions, both local and global smart rules are shown.		


<a name="create-rules"></a>
### To create a smart rule

Smart rules can both be created in the **Global smart rules** page (global smart rules), accessible from the **Configuration** menu in the navigator, or in the **Info** tab of any group or a device (local smart rules).

1. Click **Add smart rule** in the top menu bar. <br>
2. Select a smart rule template from the list. Note that this list might differ based on your installation.
3. In the resulting dialog box, use the toggle to select if the rule will be enabled or disabled, see [To enable/disable a smart rule](#toggle-rules) for details.
4. Next, configure the rule parameters. The parameters differ from rule to rule, for details see the individual rule descriptions in [Smart rules collection](#smart-rules-collection).
6. Click **Create** to create the smart rule.

{{< c8y-admon-info >}}
When you create a smart rule in the **Global smart rules** page, it will be active for all assets by default, unless you select target asset(s) in step 4 of the dialog box, see also [To enable/disable a smart rule](#toggle-rules).
{{< /c8y-admon-info >}}

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

{{< c8y-admon-info >}}
This feature is not available with Apama.
{{< /c8y-admon-info >}}

For easier debugging, there is a direct link from a smart rule to the corresponding event processing module.

Click the menu icon at the right of an entry and then click **Inspect** to use this link.

<a name="toggle-rules"></a>
### To enable/disable a smart rule

If a smart rule is set to **Enabled** in the edit dialog (accessible from the **Global smart rules** page and the **Info** tab of a particular device/group), it is globally "turned on" (that means, its underlying module gets deployed) so that the rule is available for devices and groups.

<img src="/images/users-guide/cockpit/cockpit-smartrule-enabled-toggle.png" name="Smart rule edit dialog" />

If it is set to **Disabled** it is "turned off" (that means, its underlying module is not deployed).

In addition to globally enabling/disabling a smart rule, a smart rule can be in **active** or **inactive** state for particular objects (groups or devices). If **active**, the rule will process events for these groups and devices.

{{< c8y-admon-info >}}
On creating a smart rule in the **Global smart rules** page, it will be active by default for all assets, unless you explicitly select target asset(s). If specific target assets are selected, it will be deactivated for all other assets. A local smart rule created in the **Info** page of a particular group or device is automatically activated for the respective target asset (and its direct children).
{{< /c8y-admon-info >}}

To explicitly activate or deactivate a rule, navigate to the **Info** tab of the particular group or device and set the **Active/Inactive** toggle to **Active** or **Inactive** respectively.  

<img src="/images/users-guide/cockpit/cockpit-smartrule-active-toggle.png" name="Smart rule in Info tab" />

An example use case for deactivating a smart rule for a single object could be that a particular device is generating too many threshold alarms. The rule can be deactivated for this device only, but still be active for all other objects.

In case of a group, you activate/deactivate the smart rule with the toggle for the group alone. You can then separately activate/deactivate the rule for the group's children via the dropdown box below the toggle.

<img src="/images/users-guide/cockpit/cockpit-smartrule-children.png" name="Smart rule activate children" />

{{< c8y-admon-important >}}
A rule which is activated for a particular object only works if the rule is also globally enabled.
{{< /c8y-admon-important >}}

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

{{< c8y-admon-info >}}
If you create a rule chain keep in mind how much data will be created and avoid overload or excessive amount of data.
{{< /c8y-admon-info >}}
