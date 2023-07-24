---
weight: 10
title: Default columns
layout: redirect
---

For each device, the device list shows the following information provided in columns:

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
   </colgroup><thead>
<tr>
<th style="text-align:left">Column</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Status</td>
<td style="text-align:left">An icon representing the connection status. For details, see <a href="#connection-monitoring" class="no-ajaxy">Connection monitoring</a>.</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Unique name of the device.</td>
</tr>
<tr>
<td style="text-align:left">Model</td>
<td style="text-align:left">Model type of the device. Not always displayed, depends on browser width.</td>
</tr>
<tr>
<td style="text-align:left">Serial Number</td>
<td style="text-align:left">Serial number of the device. Not always displayed, depends on browser width.</td>
</tr>
<tr>
<td style="text-align:left">Group</td>
<td style="text-align:left">Group the device is assigned to, if any.</td>
</tr>
<tr>
<td style="text-align:left">Registration Date</td>
<td style="text-align:left">Date when the device was registered to your account.</td>
</tr>
<tr>
<td style="text-align:left">System ID</td>
<td style="text-align:left">System ID of the device.</td>
</tr>
<tr>
<td style="text-align:left">IMEI</td>
<td style="text-align:left">IMEI of the device.</td>
</tr>
<tr>
<td style="text-align:left">Alarms</td>
<td style="text-align:left">The alarm status of the device, showing number and type of alarms currently unresolved for the device. Only includes alarms for the parent device. See <a href="#alarm-monitoring" class="no-ajaxy">Working with alarms</a> for further information on working with alarms.</td>
</tr>
</tbody>
</table>

For users with global roles the devices list displays the items in a paginated manner. You can select the number of items per page and directly jump to any page. Users with inventory roles see up to 50 items initially. If there are more than 50 devices available more devices are loaded as you scroll down the list.

### To filter devices

The device list offers a filtering functionality to filter devices in the list for specific criteria.

Filtering is available on every column. Click the filter icon next to the name of the column you want to set a filter for.

Specify your filter options in the dropdown list.

Most columns represent text fields. You can filter these columns by simply entering an arbitrary text into the textbox as in the search field. Click **+ Add next** to add another textbox if you want to filter for more than one term.

Apart from filtering for text there are several other options:

- In case of date fields (for example **Registration date**), you specify a date range to filter for.
- In the **Status** column you can filter for various criteria representing the send, push or maintenance status of the device.
- In the **Alarm** column the filtering options you may select correspond to the alarm types (critical, major, minor, warning, no alarms).
- For custom columns, select **Only rows where value is defined** to filter based on whether the fragment exists, or specify one or more filter terms the entry must match.

Finally, click **Apply** to carry out the filtering.

The devices list will now only display devices matching the filtering options.

Sorting is available on every column. Click the sort icon in the respective column header once to sort the entries in ascending order and twice to sort the entries in descending order. Click the sort icon once more to remove sorting for this column.

Click **Clear filters** in the table header if you want to clear all filters and view all devices.

{{< c8y-admon-info >}}
If you select to sort a text field, for example, device name, in ascending or descending order, keep in mind that the resulting alphabetical sorting is based on ASCII/UTF: A < B < ... < Z < ... < a < b ... < z. Names starting with lower case letters will be sorted below all names with uppercase letters or vice versa.
{{< /c8y-admon-info >}}

### To delete a device from the list

1. Hover over the row of the device you want to delete.
2. Click the delete icon at the right of the row.
3. Confirm the device removal. Optionally, select whether to delete child devices of the device or to delete the associated device owner. Note that it is not possible to select both options.

The device will be permanently deleted from the platform.

{{< c8y-admon-important >}}
Deleting a device means to remove the device from the {{< product-c8y-iot >}} database including all its generated data. Alternatively, you can arrange all retired devices in one group, see [Grouping devices](#grouping-devices)). This ensures that all reports remain correct. To prevent alarms from being raised for the retired devices, disable [connection monitoring](#connection-monitoring). Deleting a device does not delete the data of its child devices.
{{< /c8y-admon-important >}}

<a name="filtering-devices"></a>
