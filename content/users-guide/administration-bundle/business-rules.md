---
weight: 50
title: Managing business rules
helpcontent:
- label: reprio-alarms
  title: Alarm mapping
  content: "Alarm mapping enables you to change the severity and text of alarms to adapt them to your business priorities. For example, a loss of the connection to a device is by default a MAJOR alarm but may be critical to you. To change this, add an alarm mapping to change alarms related to connection losses to CRITICAL.


  See also *Administration > Managing business rules* in the *User guide*."
---
<a name="event-processing"></a>
### Event processing

>**Important:** The **Event processing** functionality described here is only available if your tenant has Esper subscribed, not Apama. Apama is the standard CEP engine for new tenants. For tenants using Apama, similar functionality is available via the **Streaming Analytics EPL Apps** page, see [Developing apps with the Streaming Analytics application](/apama/analytics-introduction/#apama-epl-apps). If migrating, any CEL ({{< c8y-event-language >}}) code will need to be translated to EPL apps. For details on migration, see [Migrating from CEL (Esper) to Apama](/apama/overview-analytics/#migrate-from-esper) in the *Streaming Analytics guide*.

Using event processing, you can specify real-time business logic that is automatically run by {{< product-c8y-iot >}} as soon as new data arrives or existing data is modified. The logic is deployed in so-called "rules" which consist of a set of CEP statements.

>**Info:** A user-friendly way to specify real-time business logic is provided in the Cockpit application through the so-called "[Smart rules](/users-guide/cockpit#smart-rules)". Smart rules are "under the hood" also implemented as CEP statements, and you can see them in the **Event Processing** page. However, you cannot edit smart rules from here.  

Click **Event processing** in the **Business rules** menu to view all rules.

<img src="/images/users-guide/Administration/admin-event-processing.png" alt="Event processing">

<br>For each rule in the list, the status (deployed = indicated by a green checkmark / not deployed = indicated by an exclamation mark), the name and the date when is was last updated is provided.

If the status of a rule is set to **Deployed**, you will see the output produced by the statement below the checkmark icon. Clicking a line of output unfolds the detailed output of the statement. Clicking **Clear all** removes the output from the screen.

<a name="add-rule"></a>
#### To add a rule

1. Click **New rule** in the top menu bar.
2. Enter a name for the rule at the very top. You may only use alphanumeric characters without blanks.
3. By default, the status is set to **Deployed** which means that the statements you enter will be run immediately. Set the toggle to **Not deployed** if you want to avoid this.
4. Enter your CEP statements into the **Source code** textbox. For your convenience, we provide various examples. Click **Examples** and select an appropriate example from the dropdown list. Click **Append** to paste the example into the **Source code** textbox at the position of the cursor.
5. Click **Save** to save your settings.

The following example rule creates an alarm if the temperature goes below 0 degree.

<img src="/images/users-guide/Administration/admin-event-processing-sample-module.png" alt="Example rule" style="max-width: 100%">

#### To edit a rule

Simply click the row of the rule you want to edit or click the menu icon at the right of the respective row and then click **Edit**.

For details on the fields, see [To add a rule](#add-rule).


#### To delete a rule

Click the menu icon at the right of the respective row and then click **Delete**.

Instead of deleting the rule you can also disable it temporarily by setting its status to "Not deployed".

<a name="reprio-alarms"></a>
### Alarm mapping

Alarm mapping enables you to change the severity and text of alarms to adapt them to your business priorities. For example, a loss of the connection to a device is by default a MAJOR alarm but may be critical to you. To change this, add an alarm mapping to change alarms related to connection losses to CRITICAL.

Click **Alarm mapping** in the **Business Rules** menu to see a list of all alarm mappings.

<img src="/images/users-guide/Administration/admin-alarm-mapping.png" alt="Alarm mapping">

For each alarm mapping, the alarm severity, the alarm type and a description (optional) are shown.

<a name="add-alarm-mapping"></a>
#### To add alarm mapping

1. Click **Add alarm mapping** in the top menu bar.
2. Enter the alarm type to be modified.
3. In the **New description** field, optionally enter a new description for the alarm. If you leave this field empty, the original text from the alarm will be kept.
4. Select the desired new severity, or select "Drop" to not show the alarm at all.
5. Click **Save** to save your settings.

> **Info:** The alarm type set in an alarm mapping is interpreted as &quot;&#60;type&#62;*&quot;. If you create for example an alarm mapping to address alarms of type &quot;crit-alarm&quot;, the mapping is effective for any type of alarm that starts with this value e.g. &quot;crit-alarm-1&quot;, &quot;crit-alarm-2&quot;, or &quot;crit-alarm-xyz&quot;.

#### To edit an alarm mapping

Expand an alarm mapping to edit it. You may modify the description and the alarm severity. The alarm type is not editable.

<img src="/images/users-guide/Administration/admin-alarm-mapping-edit.png" alt="Edit alarm mapping">

#### To delete an alarm mapping

To delete an alarm mapping, hover over it and click the delete icon.
