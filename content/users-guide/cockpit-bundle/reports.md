---
weight: 60
title: Managing reports and exports
layout: redirect
---

### <a name="reports"></a>Managing reports

Dashboard reports enable you to track applications, alarms, assets, events and many other widgets. 

Dashboard reports are global dashboard pages, regardless of the asset hierarchy. 

To see all existing reports, expand the **Reports** menu in the navigator.

![Reports menu](/guides/images/users-guide/cockpit/cockpit-reports-navigator.png)

Click a report in the navigator to open it.

#### To create a report

1. Click the **Plus** button in the top bar and then click **New report**.
2. Enter a name for the report and optionally select an icon from the dropdown list. 
3. Click **Save** to save your settings.

Next, widgets can be added to the report.

#### To add widgets to reports

You can add widgets to reports in the same way as adding widgets to dashboards.

1. Open the report you want to edit from the navigator. 
2. Click **Add widget** in the top menu bar and select a widget type from the list. 

For details on all widgets types available, refer to [Widgets collection](#widgets).

#### To delete a report

1. Open the report you want to delete.
2. Click **More...** at the right of the top menu bar and then click **Remove report**.


### <a name="export"></a>Exporting data

The export functionality lets you export specific data to either CSV or Excel files.

With this feature, you can request data for the whole tenant. Additionally, you can choose to filter for specific devices, time ranges or fields. The export data contains information about all specified filters and enabled fields. 

>**Info:** The maximum number of documents that can be exported into a single file is 1 million. If the number of documents for defined filters exceeds this limit, only the first 1 million documents will be taken.

To show all exports, click **Export** in the **Reports** menu.

In the **Export** page you will find a list displaying all exports with their names and time range.

![Exports](/guides/images/users-guide/cockpit/cockpit-exports.png)


#### <a name="add-export"></a>To add an export

1. Click **Add export** in the top menu bar.
2. Enter a name for the export and select the file type (CSV or XLSX) for the report output. 

![Create export](/guides/images/users-guide/cockpit/cockpit-export-create.png)

**Filters**

In the **Filter** section, you can select filters to request object- or time-specific data.

![Export filters](/guides/images/users-guide/cockpit/cockpit-export-filter.png)

To filter for a particular object, enter a name or property value into the search field and click the search icon. All matching devices or groups will be displayed below the **Value** field. Click a device to select it (highlighted in green). 

The **Time range** filter can filter data for a specific time range. Select a time range from the dropdown field. This may be one of "Last year", "Last month", "Last week" or select "Custom" and enter a custom from/to range in the additional fields.

Select the **Object to export** and **Time range** checkboxes to enable the respective filters.

**Fields**

Apart from object- and time-specific filtering you may filter data for specific fields:

- Alarms
- Events
- Managed objects
- Measurements

Use the toggle to enable/disable a field.

![Filter fields](/guides/images/users-guide/cockpit/cockpit-export-fields.png)

>**Info**: The time range filter only applies to alarms, events and measurements but not to managed objects. If selected, managed objects will appear in the export, regardless of any specified time range. 

When a field is enabled, predefined or empty properties can be added.

##### To add a property 

Click **Add** to add empty properties. To enter a label or path, click **Column** or **Path** and edit the field. For example, if you enable the **Alarms** field you could enter "Severity" in column and path to receive data for alarm severities.

Click **Add predefined**, to add predefined properties. Simply select the desired properties from the list and click **Select**. Use the search field at the top to search for a specific property.

![Select properties](/guides/images/users-guide/cockpit/cockpit-export-properties.png)

If you have at least one field that is not originating from the "Add predefined" list but defined as a custom property, then you need to set up at least one property for the custom values to appear in the export. 

Example:
An export has 4 fields defined: time range, device name, type and c8y&#95;SpeedMeasurement.speed.value. The first 3 are predefined properties, while the last one is a custom property. If any measurement for export does not have a custom property c8y_SpeedMeasurement.speed.value, then it will not appear in the export file.

If your field is a valid.key.with.dot then refer to it as ['fragment.key.with.dot'] in the path, e.g.: ['fragment.key.with.dot'].series.value

In case of measurements enabled, you can also choose **Add from data point**. For details on how to add data points see [Adding data points](#add-data-points). 
 
#### <a name="schedule-export"></a>To schedule an export

To schedule the export to a CSV or XLSX file to any point in time, click the menu icon at the end of the row and then click **Schedule export**. 

![Export context menu](/guides/images/users-guide/cockpit/cockpit-export-menu.png)

In the resulting dialog box you can customize the Smart Rule "On timer send export via email" according to your needs.

![Schedule export](/guides/images/users-guide/cockpit/cockpit-export-on-timer-rule.png)

**1 - Rule name**

The rule name is pre-filled, providing the name of the export, but may be modified.

**2 - Data & frequency**

Define the frequency for sending the export, i.e. every hour, day, week, month or year. Depending on the frequency selected, provide additional timing information. For example, if you have selected "every month", provide the day of month, hour and minute.

**3 - Send email:**

Complete the email information. 

In the **Send to** field, provide the email address of the receiver. This field is mandatory. Optionally, you can provide email addresses for sending CC or BCC and add the email address of the sender for reply.

Specify the subject of the email. This field is pre-filled, but may be modified.

Enter the actual email message. Available placeholders are {host}, {binaryId}. The default value is "File with exported data can be downloaded from {host}/inventory/binaries/{binaryId}". 

Click **Create** to create the customized Smart Rule "On timer send export via email".

The Smart Rule will be added to the export details.

![Smart Rule](/guides/images/users-guide/cockpit/cockpit-export-schedule.png)


#### To export data

To export data to a CSV or XLSX file, select the checkbox in front of the export in the list and at the left of the top menu bar click **Export**.

You will receive an e-mail containing links to each export file.

Standard time properties of documents (like time or creationTime in alarms) are exported to

* xlsx file in the format: 03/13/2016 00:00:24
* CSV file in the format: 2016-03-13T00:01:24.000Z

Only CSV time contains milliseconds and timezone.

#### To edit an export

Just click the respective row or click the menu icon at the end of the row and then click **Edit**.

For details on the fields see [To add an export](#add-export).


#### To duplicate an export

1. Click the menu icon at the end of the row and then click **Duplicate**. 
2. Modify at least the name.
3. Click **Save & close** to save the export and return to the export list.

#### To remove an export

Click the menu icon at the end of the row and then click **Remove**.
