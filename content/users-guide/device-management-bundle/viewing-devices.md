---
weight: 20
title: Viewing devices
layout: redirect
---

To view all devices connected to your account, click **All devices** in the **Devices** menu in the navigator. 

A detailed device list will be displayed.

![Device list](/guides/images/users-guide/DeviceManagement/devmgmt-devices-alldevices.png)

For each device, the device list shows the following information provided in columns:

<table>
<thead>
<Column width = 150>
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
<td style="text-align:left">The alarm status of the device, showing number and type of alarms currently unresolved for the device. See <a href="#alarm-monitoring" class="no-ajaxy">Working with alarms</a> for further information on working with alarms.</td>
</tr>
</tbody>
</table>

The devices list displays up to 100 rows. If a list contains more than 100 devices, click **Load more** at the bottom of the list to display the next 100 entries.

#### How to delete a device from the list

1. Hover over the row of the device you want to delete. 
2. Click the delete icon at the right of the row. 

The device will be permanently deleted from the platform.

**Important:** Deleting a device means to remove the device from Cumulocity database including all its generated data. Alternatively, you can arrange all retired devices in one group, see [Grouping Devices](#grouping-devices)). This ensures that all reports remain correct. To prevent alarms from being raised for the retired devices, disable [connection monitoring](#connection-monitoring). Deleting a device does not delete the data of its child devices.


### <a name="searching-devices"></a>How to search for devices

Cumulocity includes a full-text search for devices. 

Click the **Search** button at the top right and enter a search term into the textbox. Cumulocity returns all devices containing this term in any property (name, model, any fragment...)

Our example shows a search for "Ublox C027". 

**Info**: Unlike filtering, the use of wildcards in a search is not supported.

For details on the search functionality, refer to Getting Started > [GUI functionalities and features](/guides/users-guide/overview#gui-features). 

![Search for devices](/guides/images/users-guide/DeviceManagement/devmgmt-search.png)

### <a name="filtering-devices"></a>How to filter devices

The device list offers a filtering functionality to filter devices in the list for specific criteria. 

Filtering is available on every column. Just click the filter icon next to the name of the column you want to set a filter for. 

![Device filtering](/guides/images/users-guide/DeviceManagement/devmgmt-devices-filter.png)

In the **Filter options** dialog box, specify your filter options.

Most columns represent text fields. You can filter these columns by simply entering an arbitrary text into the textbox as in the search field. Click **+ Or** to add another textbox if you want to filter for more than one term. 

Apart from filtering for text there are several other options:
* In case of date fields (e.g. **Registration date**), you specify a date range to filter for. 
* In the **Status** column you can filter for various criteria representing the send, push or maintenance status of the device.
* In the **Alarm** column the filtering options you may select correspond to the alarm types (critical, major, minor, warning, no alarms).

In the **Filter options** dialog box, click **Ascending** or **Descending** if you want the devices to be sorted in a specific order. Finally, click **Apply** to carry out the filtering. 

The devices list will now only display devices matching the filtering options.

Click **Clear filters** at the left of the top menu bar if you want to clear all filters and view all devices.

>**Info**: If you select to sort a text field, e.g. device name, in ascending or descending order, keep in mind that the resulting alphabetical sorting is based on ASCII/UTF: A < B < ... < Z < ... < a < b ... < z. Names starting with lower case letters will be sorted below all names with uppercase letters or vice versa.

