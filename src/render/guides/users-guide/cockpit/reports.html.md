---
order: 60
title: Managing reports and exports
layout: redirect
---

### <a name="reports"></a>Managing reports and exports

Dashboard reports enable you to track applications, alarms, assets, events and many other widgets. 

Dashboard reports are global dashboard pages, regardless of the asset hierarchy. 

To see all existing reports, expand the "Reports" menu in the navigator.

To view a specific report, click the report in the navigator to open it.

#### Creating new reports

To add a new report, click the **Plus** button in the top bar and from the context menu select **Create new report**.

![image alt text](/guides/images/users-guide/image_20.png)

Enter a name for the report and optionally select an icon from the dropdown list. Click **Save** to save your settings.

Next, widgets can be added to the report.

#### Adding widgets to reports

You can add widgets to reports in the same way as adding widgets to dashboards. 

Click **Add widget** in the top menu bar and select a widget type from the list. For details on all widgets types available, refer to [Widgets collection](#widgets).

#### Deleting reports

To delete a report, open the report and click **More...** at the right of the top menu bar. From the context menu, select **Remove report**.


### <a name="export"></a>Exporting data

The export functionality lets you export specific data to either CSV or Excel files.

With this feature, you can request data for the whole tenant. Additionally, you can choose to filter for specific devices, time ranges or fields. The export data contain information about all specified filters and enabled fields. 

>**Info:** The maximum number of documents that can be exported into a single file is 1 million. If the number of documents for defined filters exceeds this limit, only first 1 million documents will be taken.

To show all exports, click "Export" in the "Reports" menu.

In the "Export" page you will find a list displaying all exports with their names and time range.

#### Adding exports

To create an export, click **Add export** in the top menu bar.

Enter a name for the export and select the file type (CSV or xlsx). 

**Filters**

In the "Filter" section, you can select filters to request object- or time-specific data.

<img src="/guides/images/users-guide/Cockpit/Cockpit_ReportFilters.png" name="Export filters" style="width:100%;"/>

To filter for a particular object, enter a name or property value into the search field and click the search icon. All matching devices or groups will be displayed below the "Value" field. Click a device to select it (highlighted in green). 

The "Time range" filter can filter data for a specific time range. Select a time range from the dropdown field. This may be one of "Last year", "Last month", "Last week" or select "Custom" and enter a custom from/to range in the additional fields.

Select the checkbox in front of the filter name to enable the filter.

**Fields**

Apart from object- and time-specific filtering you may filter data for specific fields:

- Alarms
- Events
- Managed objects
- Measurements

Use the slider to enable/disable a field.

<img src="/guides/images/users-guide/Cockpit/Cockpit_ReportFields.png" name="Filter fields" style="width:100%;"/>

>**Info**: The time range filter only applies to alarms, events and measurements but not to managed objects. If selected, managed objects will appear in the export, regardless of any specified time range. 

When a field is enabled, predefined or empty properties can be added. 

Click **Add** to add empty properties. To enter a label or path, click "Column" or "Path" and edit the field. For example, if you enable the "Alarms" field you could enter "Severity" in column and path to receive data for alarm severities.

Click **Add predefined**, to add predefined properties. Simply select the desired properties from the list and click **Select**. Use the search field at the top to search for a specific property.

<img src="/guides/images/users-guide/Cockpit/Cockpit_ReportsSelectProperties.png" name="Select properties" style="width:75%;"/>

If you have at least one field that is not originating from the "Add predefined" list but defined as a custom property, then you need to set up at least one property for the custom values to appear in the export. 

Example:
An export has 4 fields defined: time range, device name, type and c8y_SpeedMeasurement.speed.value. The first 3 are predefined properties, while the last one is a custom property. If any measurement for export does not have a custom property c8y_SpeedMeasurement.speed.value, then it will not appear in the export file.

If your field is a valid.key.with.dot then refer to it as ['fragment.key.with.dot'] in the path, e.g.: ['fragment.key.with.dot'].series.value

In case of "Measurements" enabled, you can also choose **Add from data point**. For details on how to add data points see [Adding data points](#add-data-points). 
 
#### <a name="schedule-export"></a>Scheduling exports

To schedule the export to a CSV or Excel file to any point in time, click the menu icon at the end of the row and from the context menu select **Schedule export**. In the upcoming window you can customize the Smart Rule "On timer send export via email" according to your needs.

<img src="/guides/images/users-guide/export_schedule_frequency.png" name="Schedule export" style="width:75%;"/>

**1 - Rule name**

The rule name is pre-filled, providing the name of the export, but may be modified.

**2 - Data & frequency**

Define the frequency for sending the export, i.e. every hour, day, week, month or year. Depending on the frequency selected, provide additional timing information. For example, if you have selected "every month", provide the day of month, hour and minute.

**3 - Send email:**

Complete the email information. 

In the "Send to" field, provide the email address of the receiver. This field is mandatory. Optionally, you can provide email addresses for sending CC or BCC and add the email address of the sender for reply.

Specify the subject of the email. This field is pre-filled, but may be modified.

Enter the actual email message. Available placeholders are {host}, {binaryId}. The default value is "File with exported data can be downloaded from {host}/inventory/binaries/{binaryId}". 

Click **Create** to create the customized Smart Rule "On timer send export via email".

The Smart Rule will be added to the export details.

<img src="/guides/images/users-guide/Cockpit/Cockpit_ReportSmartRule.png" name="Smart rule" style="width:100%;"/>


#### Exporting data

To export data to a CSV or xlsx file, select the checkbox in front of the export in the list and at the left of the top menu bar click **Export**.

You will receive an e-mail containing links to each export file.

Standard time properties of documents (like time or creationTime in alarms) are exported to

* xlsx file in the format: 03/13/2016 00:00:24
* CSV file in the format: 2016-03-13T00:01:24.000Z

Only CSV time contains milliseconds and timezone.

#### Editing exports

To edit an export, just click the respective row or click the menu icon at the end of the row and from the context menu select **Edit**.

#### Duplicating exports

To duplicate an export, click the menu icon at the end of the row and from the context menu select **Duplicate**. Modify at least the name and click **Save & close** to save the export and return to the export list.

#### Removing exports

To remove an export, click the menu icon at the end of the row and from the context menu select **Remove**.
