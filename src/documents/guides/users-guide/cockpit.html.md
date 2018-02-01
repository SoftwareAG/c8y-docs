---
order: 30
title: Cockpit
layout: default
---

## Overview

The Cockpit application provides you with options to manage and monitor  Internet of Things (IoT) assets and data from a business perspective.

The following sections will walk you through all functionalities of the Cockpit application in detail. For your convenience find an overview on the content of this document below.

|Section|Content|
|:---|:---|
|[Entering the Cockpit Application](#start)|Enter the Cumulocity platform through the [Welcome screen](#welcome) and explore the initial [Home dashboard](#home) of the Cockpit application. 
|[Managing Assets](#asset)|Organize assets in [hierarchies](#hierarchies) by [creating groups ](#creating-groups)and [assigning devices](#assigning-devices).
|[Visualizing Data Using the Data Explorer](#visualize)|Interactively explore, compare and visualize IoT data. <br> Describes how to access and use the [data explorer](#visualize), [add data points](#add-data-points) to the data explorer, [customize data point properties](#customize-data-points), [modify the visualization](#change-visualization), store the [data explorer as widget](#create-widget), and [export](#export-data) the data. 
|[Working with Dashboards](#dashboards)|[Create your own analytics and monitor pages](#creating-dashboards) by adding and arranging [widgets](#adding-widgets). [Share dashboards](#sharing-dashboards) among all devices of the same type. 
|[Widgets Collection](#widget)|Use various types of [widgets](#widget) from the Widgets collection that comes with Cumulocity and configure them according your needs.
|[Working with Alarms](#alarms)|Monitor problems of your assets using severities and workflows. Since working with alarms in the Cockpit application is actually the same as working with alarms in Device Management, refer to [Working with alarms](http://cumulocity.com//guides/users-guide/device-management/#alarm-monitoring) in *Device Management*. 
|[Managing Reports](#reports)|Handle [reports](#reports) based on dashboard layouts, create [reports for exporting data](#reporting) in CSV or excel format and [schedule the export](#schedule-export). 
|[Using the Data Point Library](#library)|Manage default settings ("profiles") of your devices and apply them automatically using the [Data Point Library](#library).
|[Working with Smart Rules](#rules)|[Create and manage business rules](#create-rules) to work on incoming data in realtime and to perform actions based on this data.
|[Smart Rules Collection](#business)|Use pre-defined [global Smart Rules](#business) to configure rules for geofencing, thresholds or alarm escalation and notifications (SMS/email/voice). Describes each SmartRule and its configurable parameters in detail.

If you want to learn more about general aspects of the Cumulocity platform and its applications, refer to [*Introduction*](/guides/users-guide/overview).


### Concepts

The main concepts of the Cockpit application are the following:

|CONCEPT|DESCRIPTION|
|:---|:---|
|**Asset**|Assets represent business objects like buildings, machines, or cars.
|**Asset Hierarchy**|Assets are organized in hierarchies (trees). The nodes of the trees represent groups, and the leaves of the tree represent devices.
|**Group**|A group is a way to organize devices and assets in an asset hierarchy. A group can contain one or multiple devices, child devices or other groups.
|**Device**|An IoT device can be a gateway device, a device indirectly connected via a gateway (like modbus or KNX device), or a sensor.
|**Data Point**|Data points, also called measurements, represent sensor data, like temperature time series. They are always sensor-generated data.
|**Data Point Properties**|Metadata for a data point, representing additional properties added by the user like a label, min/max values, thresholds, or other.
|**Dashboard**|A user-defined page with individual content from various widgets.
|**Report**|Similar to dashboards, but with analytical content based on a limited time frame or scope of work.
|**Smart Rules**|Cumulocity business rules are instances from a Smart Rule template using the Smart Rule Builder.


## <a name="start"></a>Entering the Cockpit Application

### <a name="welcome"></a>Welcome screen

When you log into Cumulocity, you will be taken to the Cockpit application where the **Welcome** page initially opens up.

<img src="/guides/users-guide/Cockpit/Cockpit_WelcomeScreen.png" name="Welcome screen" style="width:100%;"/>

The **Welcome** page contains the following items:

* Quick links to the most relevant functions.
* Links to the available applications.
* Links to relevant documentation areas and to the Support Forum.
* The latest news from the Cumulocity twitter channel. Note that this section is only available for tenants hosted by www.cumulocity.com.

**Hiding/restoring the Welcome screen**

If you do not want the **Welcome** page to be your start page, activate the slider **Don't use as start page** on the top right.

To restore the **Welcome** page as start page, select "Welcome" in the navigator on the top left and deactivate the slider **Don't use as start page** again.

### <a name="home"></a>Home dashboard

The Home screen of the Cockpit application is a dashboard which shows data for the general tenant.

![image alt text](/guides/users-guide/image_1.png)

The data shown on the Home dashboard is shared by all users of the tenant. By default, the Home dashboard includes a welcome message, the active critical alarms, recent alarms and a map of all objects.

The Home dashboard can be edited and designed individually according to your needs. You can add, remove or change widgets being displayed here. 

For details on editing a dashboard, refer to [Working with Dashboards](#dashboards).

To reset the Home dashboard to its original content, click **More...** at the right of the top menu bar and from the context menu select **Restore dashboard**.

## <a name="asset"></a>Managing Assets

### Introduction

Assets represent business objects in general like buildings, machines, production units or cars.

Assets are organized in hierarchies. For example, an energy monitoring application might have the following asset hierarchy:

![image alt text](/guides/users-guide/image_2.png)

The asset hierarchy is composed of two types of objects:

* **Groups**: Objects which group single devices or other groups. Groups can either be created in the Cockpit application or in the Device Management application.

* **Devices**: Devices which are linked into the asset hierarchy. Before you can use devices in the Cockpit application, they need to be connected to Cumulocity. This is done in the Device Management application. For details on connecting devices refer to [*Device Management*](/guides/users-guide/device-management).

In this example, the group objects represent a building asset. The device objects represent the room asset. The group names and hierarchy can be defined individually by the user. The hierarchy can have multiple levels, like region level, city level, street level, building level, floor level and room level. Any device can be part of multiple and different hierarchies, like part of regional hierarchy and part of customer hierarchy.

To position a device in the asset hierarchy, you have to "assign" the device to the respective group. See description below for details.

> **Info:** Single devices are not managed in the Cockpit application. They are managed in the Device Management application.

### <a name="hierarchies"></a>Asset hierarchy versus device hierarchy

Cumulocity supports two types of hierarchies: a device hierarchy and an
asset hierarchy.

The device hierarchy tracks how devices are linked to Cumulocity from a communications point of view. The asset hierarchy structures the assets that are being remotely supervised and controlled through the M2M devices. For details, refer to [Cumulocity's Domain Model](/guides/concepts/domain-model) in the *Concepts Guide*.

In the Cockpit application, you construct your asset hierarchy by creating group objects and by linking devices into the hierarchy. The asset hierarchy depends on the IoT devices used. There are many types of IoT devices, but these two types are very common:

* **Smart devices** are self-contained devices that include sensors, actuators and a communication module. They are typically connected to a single asset. Smart devices are trackers, weather stations or general "smart" sensors with a built-in communication module.

* **Gateway devices** establish the communication from other devices to Cumulocity but do not include sensors or actuators. Typical gateway devices include Zigbee, Modbus, M-Bus or KNX gateways.

The following section explains how to work with smart devices and gateway devices in the Cockpit application.

The first example shows how smart devices are linked into the asset hierarchy:

![image alt text](/guides/users-guide/image_3.png)

Smart devices are represented in the Device Management application as top-level devices. In the Cockpit application, you can organize smart devices into groups, as the arrows indicate in the above diagram.

The second example shows how gateway devices can be used in the Cockpit application.

![image alt text](/guides/users-guide/image_4.png)

In the Device Management application, gateway devices are represented as top level devices. Their attached devices (like Zigbee, Modbus or KNX devices) are shown as child devices. These child devices can be organized in the asset hierarchy in the Cockpit application as shown above.

As you can see from the example, devices can have completely different hierarchies in the Device Management application and in the Cockpit application:
While inside Device Management all child devices are below the gateway device, the same child devices are organized in two different buildings in the Cockpit.

### Cockpit assets versus business assets

The mapping of objects in the Cockpit asset hierarchy is a virtual hierarchy.

If you manage trucks within the Cumulocity platform, then each truck is represented via its individual tracking device communicating with Cumulocity.

For building management, it is most common that a group of sensors inside a building represents the building as a group communicating with the Cumulocity platform.

### Navigating assets

In the asset hierarchy, Cumulocity distinguishes between top-level groups and subgroups, so called sub-assets.

In the navigator, top-level groups are shown in the "Group" menu at top-level. Sub-assets are shown in the navigator under the top-level groups or in the "Sub-asset" tab of a particular group.

<img src="/guides/users-guide/Cockpit/Cockpit_SubAssets.png" name="Sub-assets" style="width:100%;"/>

When selecting an object in the asset hierarchy, details on the selected object are displayed at the right.

<img src="/guides/users-guide/Cockpit/Cockpit_InfoTab.png" name="Info tab" style="width:100%;"/>

If you add a gateway device, the child devices are not shown. To show child devices, you must add them to the related asset. Details related to the child hierarchy are visible and editable in the Device Management application.

To navigate further in the asset hierarchy, use the navigator or select an object in the "Sub-Asset" tab. To navigate up in the asset hierarchy, use the breadcrumb entry below the name of the asset.


### Asset details

Several tabs are available for each object, dependent of the object type:

|Tab|Description|Availability
|:---|:---|:---
|Info|Shows a list of [Smart Rules](#rules) created for the object.|Group, Device
|Alarms|Displays alarms for the device. For details on alarms, refer to [Working with alarms](http://cumulocity.com//guides/users-guide/device-management/#alarm-monitoring) in *Device Management*.|Device
|Sub-assets|Shows the sub-assets of a group.|Group
|Data explorer|Shows all data points of the children. For details refer to [Visualizing Data Using the Data Explorer](#visualize).|Group, Device
|Location|Shows the current location of a device.|Device

If dashboards have been created for an object, they will also be added as a tab. See [Working with Dashboards](#dashboards) for details.

Moreover, additional tabs may be displayed here in case the application has been extended with plugins. See [Introduction to plugin development](/guides/web/introduction) for details.

### <a name="creating-groups"></a>Adding groups

To create a new group, follow these steps:

1. Click the **Plus** button at the right of the top bar, then select **New group** from the menu. <br><br>
<img src="/guides/users-guide/Cockpit/Cockpit_CreateGroup.png" name="Create group" style="width:50%;"/><br>
2. In the window that comes up enter a unique group name to identify your group.
3. In the "Device Search" field, enter the search criteria for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
4. Checkmark the devices you want to add from the list.
5. Click **Create group with X device(s)** to finally create your new group. 

>**Info:** A group can be created with "0" devices in it.

To add a new group as a child of an existing asset, navigate to its "Sub-asset" tab and click **Add Group** in the top menu bar.

### <a name="assigning-devices"></a>Assigning devices to groups

Before adding a device to the asset hierarchy, it must be connected to Cumulocity. Connecting devices to the platform is done in the Device Management application. For details on connecting devices refer to [*Device Management*](/guides/users-guide/device-management).

To assign a device to a group, follow these steps:

1. In the navigator, select a group from the "Group" menu and then open the "Sub-assets" tab. In the "Sub-assets" tab, all devices that are assigned to the respective group are displayed. 
2. Click **Assign devices** at the right of the top menu bar. In the upcoming window search for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
3. Checkmark the devices you want to add from the list.
4. Click **Assign X device(s)** to assign the selected devices. 

The devices will be shown as sub-assets in the "Sub-assets" tab.

### Editing groups

To edit the name of a group, navigate to its "Info" tab and click **Edit** next to its name. Edit the name and optionally leave some notes to be displayed in the "Info" tab. Click **Save changes** to apply your settings.

### Deleting groups

To delete a top-level group from the navigator, follow these steps:

1. Click "Groups" in the navigator. 
2. Click the menu icon for the group you want to delete.
3. From the context menu, select **Delete**.

To delete a group from the "Sub-assets" tab of another group, follow these steps:

1. Navigate to the "Sub-assets" tab.
2. Click the menu icon for the group you want to delete.
3. From the context menu, select **Delete**.

### Unassigning devices

To unassign a device from a group, follow these steps:

1. Navigate to the "Sub-assets" tab of the group.
2. Click the menu icon for the device you want to unassign.
3. From the context menu, select **Unassign**.

Unassigning a device does not remove the device, sub-devices or any associated data. The device is only removed from its location in the asset hierarchy. It can be assigned to this group or other groups later.


## <a name="visualize"></a>Visualizing Data Using the Data Explorer

In the data explorer, data points, i.e. measurements or sensor data, can be visualized.

The data explorer is available for all assets or just for a particular asset.

* Click "Data explorer" in the navigator to visualize all data points of all assets.

* Navigate to a particular asset and switch to the "Data explorer" tab to visualize all data points of this particular asset and its sub-assets.

In the data explorer, you see a list of available data points on the right. The first five data points of the selected device or group are shown by default. For details on how to add data points see [Adding data points](#add-data-points).

On the left, in the main card, you see its visualization. 

![data explorer](/guides/users-guide/data-explorer-main-view.PNG)

The visualization is generated based on data point properties.

The data points properties are pre-filled as follows:

* If these properties have been customized previously, these values are used, see [Customizing data point properties](#customize-data-points).

* If the data points have a matching definition in the Data Point Library, the values from the Data Point Library are used.

There can be more than one matching data point entry in the Data Point Library. In this case, the first one is selected automatically by the system. You can overwrite this selection by clicking the menu icon of the respective data point and selecting **Load [NAME] from Library**. 

![edit data points](/guides/users-guide/data-explorer-data-points-edit.PNG)

For details on modifying the visualization in general, see [Changing data point visualization](#change-visualization). For details on customizing the properties of a particular data point, see [Customizing data point properties](#customize-data-points).

### <a name="change-visualization"></a>Changing data explorer visualization

To change the visualization in the data explorer, you can modify several properties.

**Time range**

You can change the time range being shown. By default, you see the values for the last hour. 

To change the time range on the X-axis,

* select a different time range from the dropdown list in the top menu bar, enter a custom time range into the "From" and "To" fields in the data explorer,
* drag the X-axis and move of left or right to move the time period,
* double-click into the data explorer to zoom out. 

>**Info**: > Real-time updates will be switched off if you set a time range in the past.

**Aggregation**

You may aggregate the data being displayed to get an efficient overview over larger time periods. 

By default, aggregation is set to "None". This value may be changed in the "Aggregation" field in the top menu bar. Available values are "Minutely", "Hourly" or "Daily", depending on the selected time range.


**Realtime updating**

By default, realtime updating is enabled which means that the data being shown is updated as new data flows into the system from the connected devices. 

To turn realtime updating on or off, click **Realtime** in the top menu bar. A green light indicates, that realtime updating is enabled.


**Data point visibility**

For each datapoint, its visibility can be switched on or off by using the slider left from the data point name.

### <a name="add-data-points"></a>Adding data points

To add a data point to the data explorer, click  **Add data point** at the bottom of the "Data points" card. 

<img src="/guides/users-guide/Cockpit/Cockpit_AddDatapoint.png" name="Add data points" style="width:50%;"/><br>

In the top of the dialog, select a device from the asset hierarchy. Only the asset hierarchy below the objects selected in the navigator is visible. If "Data explorer" in the navigator was selected, the complete asset hierarchy is visible.

The bottom of the dialog shows all data points of the selected object. Select the data points you want to show in the data explorer. Click **Add** to add all selected data points to the list of data points.

To save the data point to the Data Point Library, click the menu icon of the data point and from the context menu select **Save to library**. 

<img src="/guides/users-guide/Cockpit/Cockpit_DataPointContextMenu.png" name="data point context menu" style="width:75%;"/>

For details on the Data Point Library refer [Using the Datapoint Library](#library).

To remove a data point from the data point list, click the menu icon and select **Remove from list**.


### <a name="customize-data-points"></a>Customizing data point properties

You can customize the visualization of a particular data point to your preferences. To do so, expand the data point entry in the data point list.

The following fields my be modified:

|Field|Description|
|:---|:---|
|Label|Name of the data point, displayed on the y-axis to identify the data point. Below the label, the target is displayed, showing the name of the asset and the internal name of the data point (measurement fragment and series). This information is not editable.
|Unit|Unit used on the y-axis. 
|Min/Max|Range shown on the y-axis. 
|Target|The target value is currently not shown in the diagram. The value is used in the "Data Point List" widget.
|Yellow range min/max|Defines the range when MINOR alarms should be raised by threshold rule.  
|Red range min/max|Defines the range when CRITICAL alarms should be raised by threshold rule.
|Display|Value displayed when data is aggregated. May be "Minimum", Maximum", Minimum and maximum".
|Chart type|The type of chart used for the visulization. May be one of "Line", "Points", "Line and points", "Bars". Default value is "line".
|Y axis|Defines where the y-axis is shown. May be one of "Auto", "Left", "Right". Default value is "Auto". 

After customizing the properties of a data point, you can save the modified settings to the Data Point Library. Click the menu icon and from the context menu select **Update [NAME] to library**.

To return to the properties stored in the Data Point Library to a data point, select **Load [NAME] from library**.

### Y-axis behaviour

Per default, the first data point is positioned to the left y-axis and the remaining data points to the right. This behavior can be changed by modifying the respective value "Y-axis" for a particular data point (to "Left" or "Right", see above).

Each data point is shown on its own y-axis, unless the following condition is met:

* Two data points having the same minimum and the same maximum value.

In this case, both data points share the same y-axis. This y-axis only shows the unit (or multiple units, in case they are different). The label is not shown.

### Adding alarms or events

In addition to data points you can also add alarms or events to the data explorer.

<img src="/guides/users-guide/Cockpit/Cockpit_DataExplorerAlarms.png" name="Alarms" style="width:75%;"/> 

In the "Alarms/ Events" card, click **Add alarm/ event** to add an alarm or event.

<img src="/guides/users-guide/Cockpit/Cockpit_DataExplorerAlarmAdd.png" name="Add widget" style="width:75%;"/> 

In the upcoming dialog, you can select an alarm or event from the list of recent alarms and events. Click **Add**, to add your selection.

Expand an event, to modify its properties.

Click the menu icon and in the context menu select **Remove**, to remove the entry from the list.

As with data points, you can turn the visibility of an alarm/ event in the data explorer on and off by moving the slider.


### <a name="create-widget"></a>Creating widgets from the data explorer

If you want to keep your current configuration in the data explorer for later usage, save it as a widget.

**Send as widget to dashboard**

To create a widget from the data explorer of a particular asset, click **More...** in the top menu bar and select **Send as a widget to dashboard** from the context menu.

<img src="/guides/users-guide/Cockpit/Cockpit_SendWidgetToDashboard.png" name="Send as widget to dashboard" style="width:50%;"/> 

In the upcoming dialog, select one of the dashboards available for the current object and click **Select** to add the data explorer as widget to the selected dashboard.

**Info**: To use this function, first a dashboard has to be created. For details on dashboards, refer to [Working with Dashboards](#dashboards).

**Send as widget to report**

To create a widget from the data explorer of in the navigator, click **More...** in the top menu bar and select **Send as a widget to report** from the context menu.

<img src="/guides/users-guide/Cockpit/Cockpit_SendWidgetToReport.png" name="Send as widget to report" style="width:50%;"/> 

In the upcoming dialog, select one of the reports available and click **Select** to add the data explorer as widget to the selected report.

**Info**: To use this function, first a report has to be created. For details on reports, refer to [Working with Dashboard reports](#reports).


### <a name="export-data"></a>Exporting measurement data

You may download measurement data as CSV or Excel files. The exported data shows the following information, divided into columns:

 - Time when the specific measurement was taken
 - Source of the measurement
 - Name of the device being used
 - Fragment series (e.g. c8y_SpeedMeasurement)
 - Value of the measurement
 - Unit used for a particular measurement (e.g. "C", "km/h", "sec")

To export measurement data, click the **More...** button in the top menu bar and select either **Download as CSV** or **Download as Excel**, according to your preferences. 

The download will be generated, as shown in the upcoming dialog. This make take a while, depending on the number of data points added to the data explorer. Once the loading has been completed, click **Download**.

## <a name="dashboards"></a>Working with Dashboards

Dashboards provide you with a customized visualization of your data by using a set of widgets. Widgets can display maps, images, graphs, tables and other graphic representations of data. 

Cumulocity comes with a number of preset widgets, see [Widgets Collection](#widget) for details. You can also develop your own widgets and add them to your Cumulocity account. Refer to the [Web Developer's Guide](/guides/web/) for details.

### <a name="creating-dashboards"></a>Creating a dashboard

Select the group or the device in the navigator for which to create a dashboard. 

Click the **Plus** button in the top bar and from the context menu select **New dashboard**. 

<img src="/guides/users-guide/Cockpit/Cockpit_DashboardCreate.png" name="Create dashboard" style="width:75%;"/>

In the "Dashboard info" section of the dashboard editor, provide the following information:

* A menu label to be used as the name of the dashboard
* The location of the dashboard in the menu, with "10000" being ordered first and "-10000" last
* An icon which is shown next to the dashboard name in the menu

In the "Dashboard layout" section you can select a theme for the dashboard (one of "Light", "Dark", "Transparent" or "Branded") and a default header style for the widgets (one of "Regular", "Border", "Overlay", or "Hidden"). Moreover, you can change the default widget margin (default value is 15 px). 

A preview of the selected layout settings is immediately displayed in the "Preview" section at the right to visualize your selections.

Click **Save** to create and open the dashboard. 

Since there will be no widgets on the dashboard yet, you will see an **Add Widget** button instead.


### <a name="adding-widgets"></a>Adding a widget to a dashboard

To add a widget to a dashboard, click **Add widget** in the top menu bar.

<img src="/guides/users-guide/Cockpit/Cockpit_AddWidget.png" name="Add widget" style="width:75%;"/> 

In the upcoming dialog, select a widget type from the dropdown list. Depending on the widget type selected, additional fields and checkboxes will be displayed to be filled in or selected. For details on all widgets refer to [Widgets Collection](#widget). 

Click **Customize widget style** to customize the content and header style for the widget individually, similar to specifying the general layout in the [dashboard editor](#creating-dashboards).

Click **Save** to add the widget to the dashboard.

### Modifying widgets on a dashboard

Widgets may be rearranged on the dashboard. By dragging and dropping you can move the widget to another position. 

By dragging the arrows on the bottom right corner of a widget, you can resize it. 

To edit the properties of a widget on a dashboard, click the cogwheel icon at the top right corner of the widget and from the context menu select **Edit**.

To delete a widget from a dashboard, click the cogwheel icon at the top right corner of the widget and from the context menu select **Remove**.

Widgets can only be modified, if the dashboard is unlocked. To lock/unlock a dashboard, use the slider with the lock icon on the top menu bar.

<img src="/guides/users-guide/Cockpit/Cockpit_LockDashboard.png" name="Lock dashboard" style="width:50%;"/> 

>**Info:** On touch devices like smartphones or tablets some functions may not be supported.


### <a name="sharing-dashboards"></a>Sharing dashboards

You can create one dashboard and share it with all devices of a specific type. To do so, select the option "Apply dashboard to all devices of type [TYPE]" ([TYPE] is replaced with the type of the device that is currently selected).

In the dashboard editor, the following message will be displayed:

<img src="/guides/users-guide/Cockpit/Cockpit_ShareDashboard.png" name="Shared dashboard" style="width:50%;"/> 

Changes made to this dashboard are automatically applied to all dashboard instances.

> **Info:** You can only add widgets and data to the dashboard for the device itself. It is not possible to add data from child devices because the structure of these devices might be different from device to device.


### Editing dashboard properties

To edit a dashboard, click **Edit** in the top menu bar. The dashboard editor will open up. For details on the fields, refer to [Creating dashboards](#creating-dashboards).


### Copying dashboards

To copy a dashboard from one object to another, click **More...** in the top menu bar and from the context menu select **Copy dashboard**. 

Next, navigate to the object you want to copy the dashboard to and from the context menu select **Paste dashboard <NAME>** to insert the dashboard.

An alternative way to copy a dashboard is to use the 
"dashboard per type" approach.  With the "dashboard per type" approach you share the dashboard from one object with **all** objects of the same type.


### Removing dashboards

To delete a dashboard from an object, click **More...** in the top menu bar and from the context menu select **Remove dashboard**. 


## <a name="widget"></a>Widgets Collection

The Cockpit includes preset widget types. Each widget type provides different parameters to configure and different data to be displayed. 

The following section describes, in alphabetical order, each available widget type and its configuration properties.

### Widget "Alarm list"

The "Alarm list" widget shows a list of alarms, filtered by objects, alarm severity and alarm status. For details on the information provided for each alarm, refer to [Working with alarms](http://cumulocity.com//guides/users-guide/device-management/#alarm-monitoring) in *Device Management*.

**Parameters to configure**

<img src="/guides/users-guide/Cockpit/Cockpit_CreateAlarmList.png" name="Create Alarm list widget" style="width:75%;"/>

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select groups or devices, optional HTML expressions which should be evaluated.
|Status|Only show devices with alarms of of the selected alarm status.
|Type|Only show alarms of the specified type(s). Details can be seen when clicking once on an alarm.
|Severities|Only show alarms of the selected alarm severity.
|Order|Alarms may be ordered by the active status (followed by severity and time, the default) or the severity (followed by time).

### Widget "All critical alarms"

The "All critical alarms" widget shows all objects with a critical alarm. There are no additional parameters to be configured.

For details on alarms, refer to [Working with alarms](http://cumulocity.com//guides/users-guide/device-management/#alarm-monitoring) in *Device Management*.

### Widget "Applications"

The "Applications" widget shows a list of links to all available applications. There are no additional parameters to be configured.

For details on applications, refer to [Managing Applications](http://cumulocity.com//guides/users-guide/Administration#applications) in *Administration*.


### Widget "Asset notes"

The "Asset notes" widget displays messages provided by the administrative user to all owners of the current widget. 

<img src="/guides/users-guide/Cockpit/Cockpit_AssetNotes.png" name="Asset notes widget" style="width:75%;"/>

Only users with the permission to edit the home dashboard will be able to provide this message.


### Widget "Asset properties"

The "Asset properties" widget displays a user-defined list of attributes of the current object. The current object can be a device or a group.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select groups or devices.
|Properties|List of properties, see [Configuring a property list](#widget-asset-table-).

>**Info:** In the view mode, this widget only displays the properties which are not empty.

### Widget "Asset table"

The "Asset table" widget shows details of all child devices in a table. This is a very powerful widget, allowing to arrange selected properties of objects in a table.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select for which object all child devices should be shown. This is typically a group object.
|Properties|Select properties or actions of an object to visualize them as columns in the table. 

**Example**

In the following screenshot, five columns are configured. Three property columns "Meter", “Vendor”, and “Owner”, which refer to the properties “name”, type” and “owner” respectively. Additionally, there are two actions, one for toggling the maintenance mode, and one for rebooting the device.

![image alt text](/guides/users-guide/image_17.png)

The resulting table is visualized as follows:
![image alt text](/guides/users-guide/image_18.png)

**Adding properties**

To add a property, click **+Add Properties** and select one or more properties to be added. 

**Info**: The property "Active alarm status" shows active alarms as icons in the table. If you select this property, you also need to configure the renderer "Active Alarm Status" in the list of columns.

**Adding actions**

To add an action, click **+Add Action**. Select **Toggle maintenance mode** to add the predefined action to toggle the maintenance mode. Or select **Create operation** to create a button that will execute a shell command. In the following dialog you can then enter the label for the button and the shell command to be executed.

![image alt text](/guides/users-guide/image_19.png)

>**Info:** The dialog shows the predefined shell commands of the first device that supports shell commands. The list is empty if there is no such device. For more details, refer to [shell commands](http://www.cumulocity.com/guides/users-guide/device-management/#shell).<br>
You can also enter the JSON format for the operation that will be sent to the device. For details, contact the device vendor for supported operations.

**Modifying the table**

To edit the header of a column, click on its value in the "Label" column and edit the label.

You can rearrange the columns by clicking the icon at the very left of a row and dragging and dropping the entry.

To remove a property or an action, hover over the respective row and click **Delete** at the right.

### Widget "Cockpit welcome"

The "Cockpit welcome" lets you display a welcome message to the Welcome screen. There are no additional parameters to be configured.

### Widget "Data point graph"

The "Data point graph" widget shows a data point (measurement) in a graph. The visualization is the same as in the [data explorer](#visualize).

<img src="/guides/users-guide/Cockpit/Cockpit_DataPointsGraphWidget.png" name="Data Point Graph widget" style="width:75%;"/>

The easiest way to create a "Data point graph" widget is to navigate to the data explorer, click the **More...** button in the top menu bar and select **Send as widget to dashboard**.

Refer to [Visualizing Data Using the Data Explorer](#visualize) for further details on the parameters to be configured.

### Widget "Data point list"

The "Data point list" widget shows data points (measurements), one in each row, with current values and data point properties.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Data point|Shows a list of available data points. You must enable at least one data point. Click **Add data point** to add a data point to the list. For details on how to add data points see [Adding data points](#add-data-points).
|Column visibility|Select which columns should be visible: <br>Label: Label of the data point. See [Visualizing Data Using the Data Explorer](#visualize) for details. <br>Target: Target value. Can be configured in the [data explorer](#visualize) or [Data Point Library](#library).<br>Current: Current value. <br>Diff: Absolute difference between current value and target value. <br>Diff %: Percentage of difference between current value and target value. <br>Asset: Name of the device or group of the data point. 

### Widget "Data point table"

The "Data point table" widget configuration is similar to the "Data point graph" widget, but instead of visualizing the data as a line-chart, data is visualized as a table.

The "Data point table" widget displays data based on selected data points, time interval and aggregation.

Out of range values, based on configured yellow and red ranges, are highlighted in the table.

![Data point table](/guides/users-guide/datapointtable.png)

### Widget "Event list"

The "Event list" widget lets you monitor events for a selected device. 

<img src="/guides/users-guide/Cockpit/Cockpit_EventList.png" name="Event list widget" style="width:75%;"/>

Additionally, a specific date range can be set and the events can be monitored in realtime. 

### Widget "Fieldbus device"

The "Fieldbus device" widget lets you see the status of a modbus device and operate it.

For details on the "Fieldbus device" widget, refer to [Monitoring device status using the Fieldbus device widget](http://www.cumulocity.com//guides/users-guide/device-management/cloud-fieldbus#fieldbus-device-widget) in *Cloud Fieldbus*.

### Widget "Help and service"

The "Help and service" widget displays links to help and service resources. There are no additional parameters to be configured.

<img src="/guides/users-guide/Cockpit/Cockpit_HelpAndServiceWidget.png" name="Help and service widget" style="width:75%;"/>

### Widget "Image"

The "Image" widget lets you display a single image to be selected from your computer by browsing. There are no additional parameters to be configured.

### Widget "Info Gauge"

The "Info gauge" widget visualizes one data point in form of a radial gauge and multiple data points as labels. 

<img src="/guides/users-guide/Cockpit/Cockpit_InfoGauge.png" name="Info gauge widget" style="width:75%;"/>

You can select one data point for the gauge, and multiple data points shown with labels on the left side.

<img src="/guides/users-guide/Cockpit/Cockpit_InfoGaugeDataPoints.png" name="Info gauge data points" style="width:75%;"/>

You must enable at least one data point in each section to create the "Info gauge" widget.


### Widget "HTML"

The "HTML" widget shows user-defined content. The content can be formatted using HTML.

**Parameters to configure**

* Target assets or devices: Select the objects for which optional HTML expressions are evaluated.

* HTML code

The following variables can be used inside the HTML content:

* {{devicesCount}}: Total number of devices.

* {{usersCount}}: Total number of users.

* {{deviceGroupsCount}}: Total number of groups.

* {{device.name}}: The name of the device.

* {{device.*property*}}: More general form of the above. You can address any property of the device.

* {{device.c8y_Hardware.model}}: The model of the device.

* {{device.*fragment*.*property*}}: More general form of the above. You can address any property of any fragment of the device.

>**Info:** "Device" refers to the target device, as selected in the widget configuration parameter.<br>
*fragment.property* refers to the properties of the respective device. To see the available property names, you can use the "Asset property" or “Asset table” widget and click **+Add property** in the widget configuration. This will show a table of supported properties. You can copy and paste the values from the column “Property”. Generated properties of these widgets are not available in the HTML widgets.

### Widget "Linear Gauge"

The "Linear gauge" widget visualizes data points in form of a linear gauge. Min and max target values are shown on the gauge as well.

<img src="/guides/users-guide/Cockpit/Cockpit_LinearGauge.png" name="Linear gauge widget" style="width:75%;"/>

>**Info:** If a label is not properly readable, you can help yourself by increasing the min and max value of the data point to move the label into the readable range.

You must enable at least one data point to create the "Linear gauge" widget.
 

### Widget "Map"

The "Map" widget shows the location of a device or all devices of a group. 

<img src="/guides/users-guide/Cockpit/Cockpit_MapWidget.png" name="Map widget" style="width:75%;"/>

You can drag the map and move its content, and you can zoom in and out by using the **Plus** and **Minus** buttons. 

The icons representing the devices are color-coded. The color used follows these rules:

    * Red = At least one critical alarm
    * Orange = At least one major alarm
    * Yellow = At least one minor alarm
    * Blue = At least one warning
    * Green = No alarm

Click a device icon, to open popup with the following information:

* The device name. When clicked, the application navigates to the device.
* The date at which the device last reported its location, if available.
* A slider to show/hide the device tracks for the previous and current days.

**Parameters to configure**

Target assets or devices: Select which devices are shown on the map. If a group is selected, all devices in that group (but not in any subgroups) are visible.

>**Info**: If none of the target device(s) has a known location, then the widget shows a world map without icons.

### Widget "Message sending"

The "Message sending" widget sends a message to a device. The behavior of the device itself is device-dependent. Only available for devices that support this type of operation.

### Widget "Pie chart"

The "Pie chart" widget displays data points (measurements) with current values in a pie chart presentation.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Pie chart options|Select from the options to show tooltips, percentages, legends in the pie chart. 
|Data point|Shows a list of available data points. You must enable at least one data point. Click **Add data point** to add a data point to the list. For details on how to add data points see [Adding data points](#add-data-points).


### Widget "Quick links"

The "Quick links" widget displays several quick links to relevant operations. There are no additional parameters to be configured.

<img src="/guides/users-guide/Cockpit/Cockpit_QuickLinksWidget.png" name="Quick links widget" style="width:75%;"/>

### Widget "Radial Gauge"

The "Radial gauge" widget visualizes data points in form of a radial gauge. 

<img src="/guides/users-guide/Cockpit/Cockpit_RadialGauge.png" name="Radial gauge widget" style="width:75%;"/>

You must enable at least one data point to create the "Radial gauge" widget.


### Widget "Recent alarms"

The "Recent alarms" widget shows all alarms of all severity sorted by time. There are no additional parameters to be configured.

<img src="/guides/users-guide/Cockpit/Cockpit_CreateAlarmList.png" name="Alarm list widget" style="width:75%;"/>

For details on alarms, refer to [Working with alarms](http://cumulocity.com//guides/users-guide/device-management/#alarm-monitoring) in *Device Management*.

### Widget "Relay array control"

The "Relay array control" widget lets you switch relays on or off independently in an array of relays. Only available for devices that support this type of operation.

### Widget "Relay control"

The "Relay control" widget allows you to switch a device relay on or off. Only available for devices that support this type of operation.

### Widget "Rotation"

The "Rotation" widget lets you render an object model of a device.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select group or device to be displayed.
|Object model for rendering|Select an object model type for rendering. May be one of "Box model" or "Phone model".
|Wireframe|Turn "Wireframe" on or off (default = on). The "wireframe" mode displays the object in a skeletal representation.
|Camera type|Select the type of camera to be used. May be one of "Orthographic camera" or "Perspective camera".

In the "Rotation" widget you can rotate the object by dragging and moving it around. Zoom in and out by using the mouse.

### Widget "SCADA"

The "SCADA" widget provides a graphic representation of the status of a device.

For details on the "SCADA" widget, refer to [Monitoring status using the SCADA widget](http://www.cumulocity.com//guides/users-guide/device-management/cloud-fieldbus#scada-widget) in *Cloud Fieldbus*.

### Widget "Silo"

The "Silo" widget displays data points (measurements) with current values in a silo presentation.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Data point|Shows a list of available data points. You must enable at least one data point. Click **Add data point** to add a data point to the list. For details on how to add data points see [Adding data points](#add-data-points).

### Widget "Traffic light"

The "Traffic light" widget visualizes the states of a device as traffic light.

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select group or device to be displayed.
|States mapping|Select a property for each light. The value of the property has to be one of the following to have the respective light on: true, 1, any non-empty string, any non-null number.

### Widget "Twitter News"

The "Twitter news" widget displays tweets from Twitter's embedded timeline widget.

<img src="/guides/users-guide/Cockpit/Cockpit_TwitterNewsWidget.png" name="Twitter news widget" style="width:50%;"/>

**Parameters to configure**

|Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Twitter's username|User name for the Twitter account being displayed.
|Twitter's widget ID|ID for the Twitter widget. You can obtain the ID from widgets settings.
|Options|Select if you want to display a header, footer, borders or transparency.

## <a name="alarms"></a>Working with Alarms

Working with alarms in the Cockpit application is identical to working with alarms in Device Management. See [Working with alarms](http://cumulocity.com//guides/users-guide/device-management/#alarm-monitoring) in *Device Management*.

## <a name="reports"></a>Working with Dashboard Reports

There are two types of reports in the Cockpit application. 

* Dashboard reports enable you to track applications, alarms, assets, events and many other widgets. 
* The second type of report lets you export specific data to either CSV or Excel files, described in [Exporting data with reports](#reporting).

Dashboard reports are global dashboard pages, regardless of the asset hierarchy. 

To see all existing reports, expand the "Reports" menu in the navigator.

To view a specific report, click the report in the navigator to open it.

### Creating new reports

To add a new report, click the **Plus** button in the top bar and from the context menu select **Create new report**.

![image alt text](/guides/users-guide/image_20.png)

Enter a name for the report and optionally select an icon from the dropdown list. Click **Save** to save your settings.

Next, widgets can be added to the report.

### Adding widgets to reports

You can add widgets to reports in the same way as adding widgets to dashboards. 

Click **Add widget** in the top menu bar and select a widget type from the list. For details on all widgets types available, refer to [Widgets Collection](#widget).

### Deleting reports

To delete a report, open the report and click **More...** at the right of the top menu bar. From the context menu, select **Remove report**.


## <a name="reporting"></a>Exporting Data with Reports

With this reporting feature, you can request reports for the whole tenant in CSV or Excel format. Additionally, you can choose to filter for specific devices, time ranges or fields. The reports contain information about all specified filters and enabled fields. 

>**Info:** The maximum number of documents that can be exported into a single file is 1 million. If the number of documents for defined filters exceeds this limit, only first 1 million documents will be taken.

To work with dashboard reports please refer to [Working with Dashboard Reports](#reports).

To show all reports, click "Reporting" in the "Reports" menu.

In the "Reporting" page you will find a list displaying all reports with their names and time range.

### Adding reports

To create a report, click **Add Report** in the top menu bar.

Enter a name for the report and select the file type (CSV or xlsx). 

**Filters**

In the "Filter" section, you can select filters to request object- or time-specific reports.

<img src="/guides/users-guide/Cockpit/Cockpit_ReportFilters.png" name="Report filters" style="width:100%;"/>

To filter for a particular object, enter a name or property value into the search field and click the search icon. All matching devices or groups will be displayed below the "Value" field. Click a device to select it (highlighted in green). 

The "Time range" filter can filter object reports for a specific time range. Select a time range from the dropdown field. This may be one of "Last year", "Last month", "Last week" or select "Custom" and enter a custom from/to range in the additional fields.

Select the checkbox in front of the filter name to enable the filter.

**Fields**

Apart from object- and time-specific filtering you may filter reports for specific fields:

- Alarms
- Events
- Managed objects
- Measurements

Use the slider to enable/disable a field.

<img src="/guides/users-guide/Cockpit/Cockpit_ReportFields.png" name="Report fields" style="width:100%;"/>

When a field is enabled, predefined or empty properties can be added. 

Click **Add** to add empty properties. To enter a label or path, click "Column" or "Path" and edit the field. For example, if you enable the "Alarms" field you could enter "Severity" in column and path to receive reports only for alarm severities.

Click **Add predefined**, to add predefined properties. Simply select the desired properties from the list and click **Select**. Use the search field at the top to search for a specific property.

<img src="/guides/users-guide/Cockpit/Cockpit_ReportsSelectProperties.png" name="Select properties" style="width:75%;"/>

If you have at least one field that is not originating from the "Add predefined" list but defined as a custom property, then you need to set up at least one property for the custom values to appear in the export. 

Example:
A report has 4 fields defined: time range, device name, type and c8y_SpeedMeasurement.speed.value. The first 3 are predefined properties, while the last one is a custom property. If any measurement for export does not have a custom property c8y_SpeedMeasurement.speed.value, then it will not appear in the export file.

If your field is a valid.key.with.dot then refer to it as ['fragment.key.with.dot'] in the path, e.g.: ['fragment.key.with.dot'].series.value

In case of "Measurements" enabled, you can also choose **Add from data point**. For details on how to add data points see [Adding data points](#add-data-points).

### <a name="schedule-export"></a>Scheduling exports

To schedule the export to a CSV or Excel file to any point in time, click the menu icon at the end of the row and from the context menu select **Schedule export**. In the upcoming window you can customize the Smart Rule "On timer send export via email" according to your needs.

<img src="/guides/users-guide/export_schedule_frequency.png" name="Exporting" style="width:75%;"/>

**1 - Rule name**

The rule name is pre-filled, providing the name of the report, but may be modified.

**2 - Report & frequency**

 Define the frequency for sending the report, i.e. every hour, day, week, month or year. Depending on the frequency selected, provide additional timing information. For example, if you have selected "every month", provide the day of month, hour and minute.

**3 - Send email:**

Complete the email information. 

In the "Send to" field, provide the email address of the receiver. This field is mandatory. Optionally, you can provide email addresses for sending CC or BCC and add the email address of the sender for reply.

Specify the subject of the email. This field is pre-filled, but may be modified.

Enter the actual email message. Available placeholders are {host}, {binaryId}. The default value is "File with exported data can be downloaded from {host}/inventory/binaries/{binaryId}". 

Click **Create** to create the customized Smart Rule "On timer send export via email".

The Smart Rule will be added to the report details.

<img src="/guides/users-guide/Cockpit/Cockpit_ReportSmartRule.png" name="Smart rule" style="width:100%;"/>


### Exporting reports

To export a report to a CSV or xlsx file, select the checkbox in front of the report in the list and at the left of the top menu bar click **Export**.

You will receive an e-mail containing links to each export file.

Standard time properties of documents (like time or creationTime in alarms) are exported to

* xlsx file in the format: 03/13/2016 00:00:24
* CSV file in the format: 2016-03-13T00:01:24.000Z

Only CSV time contains milliseconds and timezone.

### Editing reports

To edit a report, just click the respective row or click the menu icon at the end of the row and from the context menu select **Edit**.

### Duplicating reports

To duplicate a report, click the menu icon at the end of the row and from the context menu select **Clone**. Modify at least the name and click **Save & close** to save the report and return to the report list.

### Removing reports

To remove a report, click the menu icon at the end of the row and from the context menu select **Remove**.

## <a name="library"></a>Using the Data Point Library

The Data Point Library provides a collection of data points with default values for data point properties. 

Data point properties are similar to "paragraph formats" in word processing applications: You do not want to format each paragraph individually. Instead you want to define a set of default formats and apply them to your paragraphs in your document. 

The Data Point Library provides the same functionality for data points: It provides a number of default data point "templates" that can be applied easily to your data points from different devices.

How does the Cockpit application use the data point library? To find the default visualization for a data point like color or label, Cockpit searches the data point library and tries to find a matching entry. An entry is considered as "matching", if the values for fragment and series in the data point library match those of the measurement. If a matching entry is found, the corresponding data point properties are used for a default visualization.

Additionally, the properties of the Data Point Library are used by threshold business rules: The red and yellow values configured in the Data Point Library are used by the threshold rules to raise alarms.

To open the Data Point Library, click "Data Point Library" in the "Configuration" menu of the navigator.

A list of available data points will be opened. For each data point, the following information is provided in the list:

* Color and label for the data point
* Fragment name and series
* Measurement unit

### Adding a data point to the library

To add a new data point to the library, click **Add data point** in the top menu bar.

Provide the following information:

|Field|Description|
|:---|:---|
|Color|Color for the data point visualization.
|Label|Label to identify the data point.
|Fragment|Name of the fragment. 
|Series|Name of the series.
|Unit|Unit used for the measurement.
|Target|Target value.
|Minimum|Minimum value shown on the y-axis.
|Maximum|Minimum value shown on the y-axis.
|Yellow range|Min/max values for the yellow range (MINOR alarms).
|Red range|Min/max values for the red range (CRITICAL alarms).

Click **Save** to add the data point to the library.

### Editing or removing data points

To edit a data point, simply click the respective entry in the list or click the menu icon at the right of an entry and in the context menu click **Edit**.

To remove a data point, click **Remove** in the context menu.

## <a name="rules"></a>Working with Smart Rules

Cumulocity includes a rule engine to analyze data in realtime and to perform actions based on data. These rules are specified in a scripting language and are managed in the [Administration Application](/guides/users-guide/administration).

To easily create rules, the Cockpit application includes a Smart Rules builder which allows you to create rules from templates (so-called smart rule templates).

>**Info:** Smart Rules are only visible, if the tenant is subscribed to the Smart Rule application. To manage Smart Rules, the user has to have INVENTORY CREATE permission and either SMART RULE permission or CEP MANAGEMENT permission.

Smart Rules are parameterized. There are two sources for parameters:

**Rule Parameters** are provided by the user when creating a Smart Rule from a template. Examples are email addresses and alarm texts.

**Object Parameters** are stored in the group or device. These parameters can be edited after the Smart Rule has been created. An example includes min and max values for thresholds.

Smart Rules can be seen 

* in the "Info" tab of a device or group,
* in the "Smart Rules" page accessible from the "Configuration" menu. 

![Smart Rules info tab](/guides/users-guide/smartruleinfo.png)

There are two different kinds of Smart Rules:

- **Local**: Smart Rules created in either a group or a device. They are visible to everyone with access to the group/device.
- **Global**: These Smart Rules are created in a global context ("Smart Rules" page, alarms, data explorer, etc...). They are only visible to users with the relevant permissions.

In the "Smart Rules" page, only the global smart rules are shown. 

In a local context (group or device) and without the relevant permissions, only the local Smart Rules are shown. If the user has the relevant permissions, both local and global Smart Rules are shown.		
The permissions required in order to see the global Smart Rules are:

- Smart rule READ
- Smart rule ADMIN
- CEP management ADMIN

### <a name="create-rules"></a>Creating Smart Rules

Smart Rules can be created either in the "Smart Rules" page, accessible from the "Configuration" menu in the navigator, or in the "Info" tab of a group or a device.

To create a Smart Rule, follow these steps:

1. Click **Add Smart Rule** in the top menu bar. 
2. Select a Smart Rule template from the list. 
3. In the upcoming window, use the slider to select if the rule will be enabled or disabled. 
4. Next, configure the rule parameters. The parameters differ from rule to rule, for details see individual rule descriptions below.
5. In the "Target asset or devices" field, you can optionally activate the current Smart Rule for specific devices or assets. 
6. Click **Create** to create the Smart Rule.

A list of Smart Rules is shown below. Note that this list might differ based on your installation.

<img src="/guides/users-guide/Cockpit/Cockpit_GlobalSmartRules.png" name="Global Smart Rules" style="width:75%;"/>

If the new rule was set to "enabled" and was not activated for specific objects, the rule will be active for all devices and groups. See next section on how to deactivate a smart rule for specific objects.

To avoid confusion, disabled Smart Rules are not displayed in group menus or device menus.

Smart Rules can be instantiated multiple times.

### Activating or deactivating Smart Rules

A Smart Rule can be activated (switched on) and deactivated (switched off) for a single object (group or device). For example, if a device is generating too many threshold alarms, you can deactivate the rule for this single object. The rule is still active for all other objects.

To deactivate or activate a Smart Rule for a group or device, navigate to the "Info" tab of the group or device and enable/disable the respective rule using the slider. 

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleInfoTab.png" name="Smart rule in Info tab" style="width:100%;"/>

### Editing Smart Rules

To edit a Smart Rule, just click the respective row or click the menu icon at the end of the row and from the context menu select **Edit**.

### Duplicating Smart Rules

To duplicate a Smart Rule, click the menu icon at the end of the row and from the context menu select **Clone**. Modify at least the name and click **Save & close** to save the Smart Rule and return to the Smart Rule list.

### Removing Smart Rules

To remove a Smart Rule, click the menu icon at the end of the row and from the context menu select **Remove**.

### Debugging Smart Rules

For easier debugging, there is a direct link from a Smart Rule to the corresponding event processing module. Click the menu icon at the end of the row and from the context menu select **Inspect** to use this link.

### Example: Defining explicit thresholds

To define a threshold rule follow these steps:

1. In the navigator, select the desired group or device to apply a threshold to.
2. Switch to the "Data explorer" tab.
3. If the data point that should raise the threshold is not visible by default, select **Add data point** and add a data point. For details on how to add data points see [Adding data points](#add-data-points).
4. Click the menu icon at the end of the row of the respective data point and select **Create Smart Rule**. <br><br> <img src="/guides/users-guide/Cockpit/Cockpit_DataPointExample.png" name="Data point example" style="width:75%;"/>
<br>
5. Select the Smart Rule "On measurement explicit threshold create alarm". <br><br> <img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleExample.png" name="Smart Rule example" style="width:50%;"/><br>
6. Fill in the red range minimum and red range maximum value. When the values are outside these range, a threshold alarm will be raised.
7. Under "Create Alarm" you can optionally edit the alarm type and the alarm text.
8. Under "Target assets or devices" you can select the object this rule will be applied to.
9. Click **Create** to create the Smart Rule.

The rule will automatically be set to active and alarms appear if they arise.

### Chain rule execution

Smart Rules can create a new data item on the platform. For example, the threshold rule creates new alarms. This new data can be handled further by selected Smart Rules, for example, by an "On alarm send e-mail" rule.

Using this mechanism, it is possible to create a chain of smart rules. 

>**Info:** If you create a rule chain keep in mind how much data will be created to avoid overload or excessive amount of data.

## <a name="business"></a>Smart Rules Collection

Cumulocity includes preset global Smart Rule types. 

<img src="/guides/users-guide/Cockpit/Cockpit_GlobalSmartRules.png" name="Global Smart Rules" style="width:75%;"/>

Each global Smart Rule type provides different parameters to configure. 

The following section describes each available type and its configuration properties.

### On alarm send SMS

**Functionality** 

When an alarm is created, a SMS is sent.

>**Info:** This rule is only available if your tenant has a configured SMS provider.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleSendSMS.png" name="Smart Rule send SMS" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Send SMS:|"Phone number": Target phone number. It is recommended to include mobile country code for all numbers, e.g. "+49" or "0049" for Germany. Multiple numbers can be separated by a comma (",", do not use a space!).<br> "Message": Text of SMS with max. 160 characters. You can use variables of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

>**Important:** There is a limit of 160 characters as a total count. If you use variables and after applying the variables the text counts more than 160 characters the SMS will not be sent.

### On alarm send e-mail

**Functionality** 

When an alarm is created, an email is sent.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleSendEmail.png" name="Smart Rule send email" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Send e-mail:|"Send to:/Send CC to:/Send BCC to": Email addresses for sending the e-mail to. Multiple addresses can be separated by a comma (",", do not use a space!).<br>"Reply to": Address to be used to reply to the message.<br> "Subject": Subject of e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.<br> "Message": Text of the e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

* Check your spam folder.

### On alarm escalate it

**Functionality** 

When an alarm is created, sends e-mail, sms, and/or initiates text-to-speech.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleOnAlarmEscalate.png" name="Smart Rule on alarm escalate" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Escalate as follows:|Escalation steps processed in a chain. <br> Click **Add step** to define at least one step: <br> "Type": Type of action executed in the step. Possible values are: <br> * Email (see "On alarm send e-mail" rule for parameter descriptions). <br> * SMS (see "On alarm send SMS" rule for parameter descriptions). <br> * Phone (see "On alarm initiate text-to-speech call" rule for parameter descriptions). <br> "Condition": The condition applied when the rule will be executed. Possible values are: <br> * Always: Action will always be executed. <br> * Always: If step N failed. Only phone steps may fail. The step is marked as failed once all retries have been made without a successful call. This option only appears if there already is a phone step configured that can be referred to.
|4|Target asset or devices|Groups or devices the rule shall be applied to.


**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.


### On alarm duration increase severity

**Functionality** 

If an alarm is active for a certain time, the severity is increased.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleIncreaseSeverity.png" name="Smart Rule increase severity" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Increase alarm severity|Duration, an alarm must be active, before increasing the severity.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Description**

When a configured type of alarm is raised, it starts monitoring how long the alarm stays active.

If the alarm is still active after the specified duration, the severity will be increased one level, e.g. from MINOR to MAJOR.

If the alarm has reached 'CRITICAL', it will stop monitoring because there is no further action possible.

>**Info:** The rule checks once a minute if the configured duration has been exceeded. Therefore it might happen that the alarm severity won't change in the second it exceeds the duration but only after the following check.

### On geofence create alarm

**Functionality** 

If a geofence border is crossed, an alarm is created. 

The rule can be configured for entering or leaving the geofence, or both. Existing alarms are cleared when the opposite condition is true again, e.g. if a tracked car which has left the geofence area is re-entering the geofence area.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleAlarmOnGeofence.png" name="Smart Rule alarm on geofence" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On geofence violation:|Polygon that defines the borders of an area. Click **Edit geofence** and set the area. Double-click to add points and click and drag them to adjust.
|3|Create alarm:|Reason for triggering the alarm: "On entering", "On leaving" (the default), "On entering and leaving".<br>Type of alarm being raised. <br> Severity of alarm being raised. <br>Alarm text.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

No alarm will be generated until the device crosses the geofence border for the first time.

**Troubleshooting**

* Make sure the device was inside the geofence at least once after creating/activating the rule.
 
* Check if the device is in [maintenance](/guides/reference/device-management) mode. No new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

### On geofence send e-mail

**Functionality** 

If a geofence border is crossed, an email is sent. 

The rule can be configured for entering or leaving the geofence, or both.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleEmailOnGeofence.png" name="Smart Rule email on geofence" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On geofence violation:|Polygon that defines the borders of an area. Click **Edit geofence** and set the area. Double-click to add points and click and drag them to adjust.
|3|Send e-mail:|"Send to:/Send CC to:/Send BCC to": Email addresses for sending the e-mail to. Multiple addresses can be separated by a comma (",", do not use a space!).<br>"Reply to": Address to be used to reply to the message.<br> "Subject": Subject of e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.<br> "Message": Text of the e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Info**: In order to send out the e-mail the device had to be inside the geofence at least once after creating the rule.

**Troubleshooting**

* Make sure the device was inside the geofence at least once after creating/activating the rule.

* Check your spam folder.


### Calculate energy consumption

**Functionality** 

Creates consumption data point based on data from an electric-, gas-, water- meter.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleCalculateEnergyConsumption.png" name="Smart Rule calculate energy consumption" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|Monitored measurement:|"Fragment/Series": Name of the measurement fragment and series. The incoming measurement must have exactly the same fragment/series name as configured. When creating a rule from the data explorer, these fields are already filled in. <br> "Time interval": Interval in which consumption values shall be calculated. Only specifies how often the consumption is calculated not the unit of the consumption measurement.
|3|Energy consumption measurement:|Name of the measurement fragment and series that shall be generated.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

The unit of the consumption measurement is always per hour (i.e. if the measurements are in "kg" the consumption will be in "kg/h").

The rule takes the last two measurements for a specified time, calculates the difference in value and time and then calculates the consumption per hour.

**Example**

The rule is configured to calculate every 20 minutes. The following measurements are coming in:
100 kg at 11:59 and 200 kg at 12:14.
At 12:20 the rule is triggered, taking the last two measurements. It calculates value and time difference. The consumption measurement created at 12:20 will therefore be 400 kg/h.
If no new measurement was created in the last period a measurement with consumption 0 will be created.

### On missing measurements create alarm

**Functionality** 

If no new measurement data has been received for a specified time, an alarm is created. 

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleMissingMeasurements.png" name="Smart Rule alarm on missing measurements" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|Monitored measurement:|"Type": Type of measurement. The incoming measurement must have the same type as configured. When creating a rule from the data explorer, the type is already filled in.<br> "Time interval": Interval for calculating consumption values.
|3|Create alarm:|Type of alarm being raised. <br> Severity of alarm being raised. <br>Alarm text.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

>**Info:** The rule checks once a minute if the configured time interval was exceeded. Therefore it can take up to one minute to create the alarm after the time interval was exceeded. To check if the time interval was exceeded there must be at least one incoming measurement after the activation of the rule.

### On alarm execute operation

**Functionality** 

If a certain alarm occurs, the specified operation will be send to the device.


**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleExecuteOperation.png" name="Smart Rule execute operation" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Execute operation:|The operation that will be sent. The operation is provided as JSON description. Some standard operations can be selected below the "Operation" field. To use a standard operation, select one, and press the arrow button on the right. This will insert the JSON of the selected operation.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

### On measurement threshold create alarm

**Functionality** 

When exceeding defined yellow and red ranges, alarms are generated and cleared.

The rule uses the following parameter from the device object or data point library:

* Object red range: Range when the system should create CRITICAL alarms. These values can be edited in the data explorer for each data point.

* Object yellow range: Range when the system should create MINOR alarms. These values can be edited in the data explorer for each data point.

* Data Point Library red/yellow range: When there is no red/yellow range stored in the respective object, then the Data Point Library is searched for the configured data point entry and the related red/yellow range is used.

Using this mechanism, you can configure global threshold ranges in the Data Point Library. These global values can then be overridden for specific objects on a case-by-case basis.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleExplicitThreshold.png" name="Smart Rule explicit threshold" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On threshold:|"Fragment/Series": Name of the measurement fragment and series. The incoming measurement must have exactly the same fragment name as configured. When creating a rule from the data explorer, these fields are already filled in. <br> "Data Point Library entry": Name of the entry in the Data Point Library. This is used to find the default values for red and yellow ranges in case they are not configured for an individual object.
|3|Create alarm:|"Type": Type of alarm being raised. <br>"Text": Alarm message.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Description**

For each incoming measurement value, the rule performs the following steps:

* Check, if the measurement includes data for the fragment and series (rule parameter).

* Check, if the rule is activated for the source object.

* The data of the red and yellow range is collected from either:

- the source object (the measurement),

- the Data Point Library (control parameter).

If no red/yellow ranges are defined, no alarms are generated.

>**Info:** Range values defined in the source object have a higher priority than those defined in the Data Point Library. You can also just overwrite a single value (e.g. yellow range max) by setting it in the source object. The other values will then be taken from the Data Point Library.

* Incoming value inside the yellow range: <br>If there is an active alarm of given type for the object, set severity to MINOR. Otherwise create new MINOR alarm with given parameters.

* Incoming value inside the red range: <br> If there is an active alarm of given type for the object, set severity to "CRITICAL". Otherwise, create new CRITICAL alarm with given parameters.

* Measurement outside of yellow and red range: <br>If there is an active alarm of given type for the object, clear the alarm.

**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

* Check if an alarm was already cleared by the next scheduled measurements with resulting value in a green range.

>**Info:**  If you clear an alarm, you state that the alarm is resolved. A new alarm is not raised unless the device changes its state and exceeds the thresholds again.

### On measurement explicit threshold create alarm

**Functionality** 

When the measurement value enters or leaves the RED range, a CRITICAL alarm is generated or cleared.

The severity of alarm is determined as follows:

* If the measurement value moves into RED range, then the severity is CRITICAL.

* If the measurement value moves into GREEN range, the alarm is cleared.

>**Info:** This rule is similar to the rule "On measurement threshold create alarm". However, in this rule here the RED threshold value is provided explicitly. The threshold rule "On measurement threshold create alarm" extracts the thresholds values from the device or Data Point Library.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleExplicitThreshold.png" name="Smart Rule explicit threshold" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On threshold:|"Fragment/Series": Name of the measurement fragment and series. The incoming measurement must have exactly the same fragment name as configured. When creating a rule from the data explorer, these fields are already filled in. <br> Minimum, Maximum: When a value is in the specified range [minimum; maximum], the configured alarm is raised.
|3|Create alarm:|"Type": Type of alarm being raised. <br>"Text": Alarm message.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Verify that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. In this case no new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.

* Check if an alarm was already cleared by the next scheduled measurements with resulting value in a green range.

>**Info:**  If you clear an alarm, you state that the alarm is resolved. A new alarm is not raised unless the device changes its state and exceeds the thresholds again.

### On alarm initiate text-to-speech call

**Functionality** 

When an alarm is created, it initiates a text-to-speech call.

**Parameters**

The rule uses the following parameters:

<img src="/guides/users-guide/Cockpit/Cockpit_SmartRuleInitiateCall.png" name="Smart Rule initiate call" style="width:50%;"/>

|Step|Field|Description|
|:---|:---|:---|
|1|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|2|On alarm matching:|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|3|Text-to-speech:|"Phone number": Valid international phone number. Use country codes in the format "+49" (as an example for Germany).<br> "Message": The text read out by the rule. <br> Retries: The number of retries to reach the target phone number if not successful (default is "0", max is "20").<br> "Interval": The time interval between the retries in minutes (default is "5").<br>"Acknowledgment": If selected the receiver of the call has to acknowledge the call (a call not acknowledged will not count as successful)<br> "Acknowledgment text": The acknowledgment message which will be read after the main message, for example: "Please acknowledge this call by pressing the button 5". <br> "Acknowledgment number": The number of the button the receiver has to push to acknowledge. If the button has been pushed, the call will be successful and the alarm status will be changed to acknowledged.
|4|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Make sure that the alarm was created and not duplicated from somewhere.

* Check if the device is in [maintenance](/guides/reference/device-management) mode. No new alarm will be created because of suppression policy.

* If you have configured an alarm mapping rule (see [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which changes the alarm severity, the alarm may have different severity than expected.


### Smart Rule Variables

In certain rule parameters, variables can be used. When a rule is triggered, the variables are replaced by their actual values. You can use this mechanism to insert device names or alarm text into various outputs (email, SMS, text-to-speech). You can include any information of the triggering event (like the alarm) and its source device.

The following table lists example variables:

<table>
  <tr>
    <td>Variable</td>
    <td>Content</td>
  </tr>
  <tr>
    <td>#{creationTime}</td>
    <td>Time when the alarm was created in the database.</td>
  </tr>
  <tr>
    <td>#{type}</td>
    <td>Type of the alarm.</td>
  </tr>
  <tr>
    <td>#{time}</td>
    <td>Time of alarm, as provided by the alarm.  </td>
  </tr>
  <tr>
    <td>#{text}</td>
    <td>Textual description of the alarm.</td>
  </tr>
  <tr>
    <td>#{source.name}</td>
    <td>Name of the device.</td>
  </tr>
  <tr>
    <td nowrap>#{source.c8y_Hardware.serialNumber}</td>
    <td>Serial number of the device.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Notes}</td>
    <td>Note field of the device.</td>
  </tr>
  <tr>
    <td>#{status}</td>
    <td>Status of the alarm: ACTIVE, ACKNOWLEDGED or CLEARED.</td>
  </tr>
  <tr>
    <td>#{severity}</td>
    <td>Severity of the alarm: CRITICAL, MAJOR, MINOR or WARNING. </td>
  </tr>
  <tr>
    <td>#{count}</td>
    <td>Number of alarm messages for this device: Repeating messages for the same device and same alarm type are de-duplicated into one alarm.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.street}</td>
    <td>Street of the device.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.cityCode}</td>
    <td>ZIP code of the device.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.city}</td>
    <td>City of the device.</td>
  </tr>
</table>


>**Info:** In case the variable does not exist or is misspelled, the generated content is displayed.