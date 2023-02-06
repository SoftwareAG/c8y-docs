---
weight: 50
title: Managing business rules
helpcontent:
- label: reprio-alarms
  title: Alarm mapping
  content: "Alarm mapping enables you to change the severity and text of alarms to adapt them to your business priorities. For example, a loss of the connection to a device is by default a MAJOR alarm but may be critical to you. To change this, add an alarm mapping to change alarms related to connection losses to CRITICAL."
---

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

{{< c8y-admon-info >}}
The alarm type provided as an alarm mapping is interpreted as alarm type prefix: &quot;&#60;type-prefix&#62;*&quot;. If you create, for example, an alarm mapping to address alarms of type &quot;crit-alarm&quot;, the mapping is effective for any type of alarm that starts with this value e.g. &quot;crit-alarm-1&quot;, &quot;crit-alarm-2&quot;, or &quot;crit-alarm-xyz&quot;.
{{< /c8y-admon-info >}}

#### To edit an alarm mapping

Expand an alarm mapping to edit it. You may modify the description and the alarm severity. The alarm type is not editable.

{{< c8y-admon-info >}}
Refresh the list to discard any changes without saving.
{{< /c8y-admon-info >}}

#### To delete an alarm mapping

To delete an alarm mapping, hover over it and click the delete icon which appears on hovering over the row.
