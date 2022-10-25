---
weight: 20
title: Viewing devices
layout: redirect
helpcontent:
  - label: viewing-devices
    title: Viewing devices
    content: "The device list shows the most relevant information for all devices connected to your account. The columns shown in the device list may be customized to your needs, see the *User guide* for details.


    You can filter the list by clicking the filter icon next to any column and providing filter options. For a full-text search, click the **Search** button at the top right and enter a search term."
---

To view all devices connected to your account, click **All devices** in the **Devices** menu in the navigator.

A detailed device list will be displayed.

![Device list](/images/users-guide/DeviceManagement/devmgmt-devices-alldevices.png)

<a name="device-list"></a>
### Device information

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
<td style="text-align:left">The alarm status of the device, showing number and type of alarms currently unresolved for the device. See <a href="#alarm-monitoring" class="no-ajaxy">Working with alarms</a> for further information on working with alarms.</td>
</tr>
</tbody>
</table>

The devices list displays up to 100 rows. If a list contains more than 100 devices, click **Load more** at the bottom of the list to display the next 100 entries.

<a name="configuring-columns"></a>
### Configuring columns

The columns shown in the device list may be configured to your needs.

#### To show/hide standard columns

1. In the top menu bar, click **Configure columns**.
2. In the resulting dialog box, select/clear the checkboxes for all columns as required. <br>![Configure columns](/images/users-guide/DeviceManagement/devmgmt-device-list-configure-columns.png)
<br>
3. Click **Save**.

The device list will reflect your changes and only show the selected columns.

#### To add custom columns

Moreover, you can add custom columns to show additional device properties.

1. In the **Configure columns** dialog box, click **Add custom column**.<br>
![Configure columns](/images/users-guide/DeviceManagement/devmgmt-device-list-custom-column.png)<br>
2. In the **Header** field, enter a header for the new custom column.  
3. In the **Fragment path** field, enter the property of the device to be shown. Nested properties will be accepted. However, for nested properties its only possible to select {{< product-c8y-iot >}} standard fragments like `c8y_Mobile.mcc`.
4. Select the **Filtering mode** for the new column. <br>
If you select **Fragment equals value**, filtering will be done by applying the criteria a user may specify in the dialog box which shows up when clicking the column filter icon.<br>
![Specify values](/images/users-guide/DeviceManagement/devmgmt-device-list-custom-column.png)
<br>In case of **Fragment exists**, filtering will be done by existence, that means, filtering is done based on whether the property exists or not.    
5. Click **Add**.

The new column will be added and displayed in the device list.

{{< c8y-admon-info >}}
While standard columns can only be shown/hidden as required, custom columns may be deleted permanently.
{{< /c8y-admon-info >}}

#### To delete a device from the list

1. Hover over the row of the device you want to delete.
2. Click the delete icon at the right of the row.

The device will be permanently deleted from the platform.

{{< c8y-admon-important >}}
Deleting a device means to remove the device from the {{< product-c8y-iot >}} database including all its generated data. Alternatively, you can arrange all retired devices in one group, see [Grouping devices](#grouping-devices)). This ensures that all reports remain correct. To prevent alarms from being raised for the retired devices, disable [connection monitoring](#connection-monitoring). Deleting a device does not delete the data of its child devices.
{{< /c8y-admon-important >}}

<a name="searching-devices"></a>
### To search for devices

{{< product-c8y-iot >}} includes a full-text search for devices.

Click the **Search** button at the top right and enter a search term into the textbox.

For details on the search functionality, refer to [Getting Started > UI functionalities and features](/users-guide/getting-started#gui-features).

Our example shows a search for "NTC".

![Search for devices](/images/users-guide/DeviceManagement/devmgmt-search.png)

<a name="filtering-devices"></a>
### To filter devices

The device list offers a filtering functionality to filter devices in the list for specific criteria.

Filtering is available on every column. Just click the filter icon next to the name of the column you want to set a filter for.

![Device filtering](/images/users-guide/DeviceManagement/devmgmt-devices-filter.png)

In the **Filter options** dialog box, specify your filter options.

Most columns represent text fields. You can filter these columns by simply entering an arbitrary text into the textbox as in the search field. Click **+ Or** to add another textbox if you want to filter for more than one term.

Apart from filtering for text there are several other options:

* In case of date fields (for example **Registration date**), you specify a date range to filter for.
* In the **Status** column you can filter for various criteria representing the send, push or maintenance status of the device.
* In the **Alarm** column the filtering options you may select correspond to the alarm types (critical, major, minor, warning, no alarms).
* For custom columns, if the filter criteria was set to **Fragment equals value** during configuration, then a value needs to be provided.
* If the filter criteria was set to **Fragment exists** during configuration then the filtering will be done based on whether the fragment exists or not.

In the **Filter options** dialog box, click **Ascending** or **Descending** if you want the devices to be sorted in a specific order. Finally, click **Apply** to carry out the filtering.

The devices list will now only display devices matching the filtering options.

Click **Clear filters** at the left of the top menu bar if you want to clear all filters and view all devices.

{{< c8y-admon-info >}}
If you select to sort a text field, for example, device name, in ascending or descending order, keep in mind that the resulting alphabetical sorting is based on ASCII/UTF: A < B < ... < Z < ... < a < b ... < z. Names starting with lower case letters will be sorted below all names with uppercase letters or vice versa.
{{< /c8y-admon-info >}}
