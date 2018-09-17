---
order: 20
title: Viewing devices
layout: redirect
---

To view all devices connected to your account, click **All devices** in the **Devices** menu in the navigator. 

A detailed device list will be displayed.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_DevicesList.png" alt="Device List" style="max-width: 100%">


### <a name="device-list"></a>Device list

For each device, the device list shows the following information provided in columns:

|Column|Description|
|:---|:---|
|Status|An icon representing the connection status. For details, see [Connection monitoring](#connection-monitoring).
|Name|Unique name of the device.
|Model|Model type of the device. Not always displayed, depends on browser width.
|Serial Number|Serial number of the device. Not always displayed, depends on browser width.
|Group|Group the device is assigned to, if any.
|Registration Date|Date when the device was registered to your account.
|System ID|System ID of the device.
|IMEI|IMEI of the device.
|Alarms|The alarm status of the device, showing number and type of alarms currently unresolved for the device. See [Working with alarms](#alarm-monitoring) for further information on working with alarms.

The devices list displays up to 100 rows. If a list contains more than 100 devices, click **Load more** at the bottom of the list to display the next 100 entries.

When hovering over a row in the list, a **Delete** button appears at the right. Click it to delete the device permanently.

**Important:** Deleting a device means to remove the device from Cumulocity database including all its generated data. Alternatively, you can arrange all retired devices in one group (see [Grouping Devices](#grouping-devices)). This ensures that all reports remain correct. To prevent alarms from being raised for the retired devices, disable [connection monitoring](#connection-monitoring). Deleting a device does not delete the data of its child devices.


### <a name="searching-devices"></a>Searching for devices

Cumulocity includes a full-text search for devices. 

Click the **Search** button at the top right and enter a search term into the textbox. Cumulocity returns all devices containing this term in any property (name, model, any fragment...)

Our example shows a search for "Ublox C027". 

**Info**: Unlike filtering, the use of wildcards in a search is not supported.

For details on the search functionality, refer to Getting Started > [GUI functionalities and features](/guides/users-guide/overview#gui-features). 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_Search.png" alt="Device Management Search" style="max-width: 100%">

### <a name="filtering-devices"></a>Filtering devices

The device list offers a filtering functionality to filter devices in the list for specific criteria. 

Filtering is available on every column. Just click the filter icon next to the name of the column you want to set a filter for. 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_Filtering.png" alt="Filtering" style="max-width: 100%">

A window will come up in which you can specify your filter options.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_FilteringOptions.png" alt="Filter Options" style="max-width: 50%">

Most columns represent text fields. You can filter these columns by simply entering an arbitrary text into the textbox as in the search field. Click **+ Or** to add another textbox if you want to filter for more than one term. 

Apart from filtering for text there are several other options:
* In case of date fields (e.g. **Registration date**), you specify a date range to filter for. 
* In the **Status** column you can filter for various criteria representing the send, push or maintenance status of the device.
* In the **Alarm** column the filtering options you may select correspond to the alarm types (critical, major, minor, warning, no alarms).

In the **Filter options** window, click **Ascending** or **Descending** if you want the devices to be sorted in a specific order. Finally, click **Apply** to carry out the filtering. 

The devices list will now only display devices matching the filtering options.

Click **Clear filters** at the right of the top menu bar if you want to clear all filters and view all devices.

>**Info**: If you select to sort a text field, e.g. device name, in ascending or descending order, keep in mind that the resulting alphabetical sorting is based on ASCII/UTF: A < B < ... < Z < ... < a < b ... < z. Names starting with lower case letters will be sorted below all names with uppercase letters or vice versa.

