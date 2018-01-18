---
order: 30
title: Cockpit
layout: default
---

## Overview

The Cockpit application provides you with options to manage and monitor  Internet of Things (IoT) assets and data from a business perspective.

The following sections will walk you through all functionalities of the Cockpit application in detail. For your convenience find an overview on the content of this document below.

Section|Content|
|:---|:---|
|[Entering the Cockpit Application](#start)|Explaining the content of the [Welcome screen](#welcome) and the initial [Home dashboard](#home). 
|[Connect](#connect) devices and manage [assets](#asset)|How to...
|[Visualize Data Using the Data Explorer](#visualize)|How to access and use the [data explorer](#visualize), [add data points](#add-data-points) to the data explorer, [customize data point properties](#customize-data-points), [modify the visualization](#change-visualization), store the [data explorer as widget](#create-widget), and [export](#export-data) the data. 
|[Working with Dashboards](#dashboards)|How to create your own analytics and monitor pages by selecting and arranging widgets. Select from various widgets including maps, tables, graphs, charts, controls and more.
|[Using the Data Point Library](#library)|How to add, edit or remove data points in the [Data Point Library](#library).
|[Handling Widgets](#widget)|How to create [widgets](#widget) of each type provided in the Widget collection that comes with Cumulocity.
|[Working with Alarms](#alarms)|How to work with alarms. Since working with alarms in the Cockpit application is actually the same as working with alarms in Device Management, refer to [Working with alarms](http://cumulocity.com//guides/users-guide/device-management/#alarm-monitoring) in *Device Management*. 
|[Managing Smart Rules](#rules)|How to [create Smart Rules](#create-rules) to analyze data in realtime and to perform actions based on data and how to and [manage Smart Rules](#rules).
|[Managing Reports](#reports)|How to handle [Dashboard reports](#reports), how to work with [reports for exporting data](#reporting) in CSV or excel format and how to [schedule the export](#schedule-export).
|[Handling Business Rules](#device-registration)|How to [widgets](#widget) . How to create [business rules](#business) to work on incoming data in real-time.

If you want to learn more about general aspects of the Cumulocity platform and its applications, refer to [*Introduction*](/guides/users-guide/overview).

## <a name="intro"></a>Introduction

The Cumulocity Cockpit can be used in many industrial areas, including:

* Condition monitoring

* Alarm monitoring and escalation

* Building asset monitoring

* Energy consumption of factories and equipment

* Sensor data monitoring

In the following section the Cockpit application is described. It offers lots of functionalities:

* **Data Explorer**: Interactively explore, compare and visualize IoT data.

* **Dashboards**: Create your own analytics and monitor pages by selecting and arranging widgets. Select from various widgets including maps, tables, graphs, charts, controls and more.

* **Smart Rule Builder**: Create business rules to work on incoming data in real-time.

* **Business Rule Package**: Use pre-defined business rules for geofencing, thresholds or alarm escalation and notifications (SMS/email/voice).

* **Reporting**: Create reports based on the dashboards layout and distribute them by email.

* **Asset Management**: Organize your connected assets in hierarchies.

* **Alarm Management**: Monitor problems of your asset using severities and workflows.

* **Data point library**: Manage default settings ("profiles") of your devices and apply them automatically using the "Data point library".

### Concepts

The main concepts of the Cockpit application are the following:

|CONCEPT|DESCRIPTION|
|:---|:---|
|**Asset**|An asset represents a business object like buildings, machines, or cars.
|**Asset Hierarchy**|Assets are organized in hierarchies (trees). The nodes of the tree represent groups, and the leaves of the tree represent devices.
|**Group**|A group is a way to organize devices and assets in an asset hierarchy. A group can contain one or multiple devices, child devices or other groups.
|**Device**|An IoT device can be a gateway device, a device indirectly connected via a gateway (like modbus or KNX device), or a sensor.
|**Data Point**|Data points represent sensor data, like temperature time series. In other areas of Cumulocity they are called measurements. Other terms used are time series or variable. They are always sensor generated data.
|**Data Point Properties**|Metadata for a data point, representing additional properties added by the user like a label, min/max values, thresholds, or other.
|**Dashboard**|A user-defined page with individual content from various widgets.
|**Report**|Similar to dashboards, but with analytical content based on a limited time frame or scope of work.
**Smart Rules**|Cumulocity business rules are instances from a smart rule template using the Smart Rule Builder.


## <a name="start"></a>Entering the Cockpit Application

### <a name="welcome"></a>Welcome screen

When you log into Cumulocity, you will be taken to the Cockpit application where the **Welcome** page initially opens up.

<img src="/guides/users-guide/Cockpit/Cockpit_WelcomeScreen" name="Welcome screen" style="width:100%;"/>

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

* **Devices**: Devices which are linked into the asset hierarchy. Before you can use devices in the Cockpit application, they need to be connected to Cumulocity. This is done in the Device Management application. For details on connecting devices refer to [*Device Management*](/guides/users-guide/device-management) in the *User Guide*.

In this example, the group objects represent a building asset. The device objects represent the room asset. The group names and hierarchy can be defined individually by the user. The hierarchy can have multiple levels, like region level, city level, street level, building level, floor level and room level. Any device can be part of multiple and different hierarchies, like part of regional hierarchy and part of customer hierarchy.

To position a device in the asset hierarchy, you have to "assign" the device to the respective group. See description below for details.

> **Info:** Single devices are not managed in the Cockpit application. They are managed in the Device Management application.

### Asset hierarchy versus device hierarchy

Cumulocity supports two types of hierarchies: a device hierarchy and an
asset hierarchy.

The device hierarchy tracks how devices are linked to Cumulocity from a communications point of view. The asset hierarchy structures the assets that are being remotely supervised and controlled through the M2M devices. For details, refer to "[Cumulocity's Domain Model](/guides/concepts/domain-model)".

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

## Managing Assets

In the asset hierarchy, Cumulocity distinguishes between top-level groups and subgroups, so called sub-assets.

In the navigator, top-level groups are shown in the "Group" menu at top-level. Sub-assets are shown in the navigator under the top-level groups or in the "Sub-asset" tab of a particular group.


### Navigating assets



![image alt text](/guides/users-guide/image_5.png)

When selecting an object in the asset hierarchy, the right part of the application shows more details about the selected object:

![image alt text](/guides/users-guide/image_6.png)

The visible tabs on the right of the navigator differ based on the selection in the navigator. The following table shows which tabs are visible based on the selection in the navigator:

|Info|Alarms|Sub-assets|Location|Data explorer|
|:---|:---|:-----|:-----|:----------|:----------|:----------|
|Group selected:|Yes|No|Yes|No|Yes, showing all data points of the children|
|Device selected:|Yes|Yes|No|Yes|Yes, showing all data points of the children|

There can be additional tabs visible in case the application has been extended with plugins. See "[Introduction to plugin development](/guides/web/introduction)" for details.

If you add a gateway device, the child devices are not shown. To show child devices, you must add them to the related asset. Details related to the child hierarchy are visible and editable in the Device Management Application.

To navigate further in the asset hierarchy, use the navigator or select an object in the "Sub-Asset" tab. To navigate up in the asset hierarchy, use the breadcrumb entry below the name of the asset.

### Searching assets

To search for groups or devices, use the **Search** button in the top bar. For details on the searching functionality, refer to [Searching](#searching) in *Overview > Search and Filter Functionality*.

### Adding Groups

To add a new top-level group, click on the "+" in the top of the application and select “Add Group…”. This will show the following dialog:

![image alt text](/guides/users-guide/image_7.png)

This will create a new group with the selected assigned devices. After clicking "Create group with devices", the group is shown in navigator as top level object.

To add a new group as children of an existing asset, click the "+ Add Group" in the “Sub-assets” tab.

![image alt text](/guides/users-guide/image_8.png)

### Assign devices to groups

Before adding a device to the asset hierarchy, it must be connected to Cumulocity. Connecting devices to the platform is done in the Device Management application. For details on connecting devices refer to [*Device Management*](/guides/users-guide/device-management) in the *User Guide*.

To assign a device to a group, follow these steps:

1. In the navigator, select a group from the "Group" menu and then open the "Sub-assets" tab. In the "Sub-assets" tab, all devices that are assigned to the respective group are displayed. 
2. Click **Assign devices** at the right of the top menu bar. In the upcoming window search for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
3. Checkmark the devices you want to add from the list.
4. Click **Assign X device(s)** to assign the selected devices. 


To assign connected devices into the asset hierarchy, select the group where the device should appear, click on "sub-assets" and click the “+ Assign Device” button.

In the following dialog, search for devices and select the devices (or sub-devices) that should be assigned.

![image alt text](/guides/users-guide/image_9.png)

### Delete Groups

You can delete a group by hover over the group in the "Sub-assets" tab. You will see a red [X], which you can click to delete the group.

### Unassigning Devices

To un-assign a device from a group, select the group in the navigator. Then hover over the device in the "Sub-assets" tab and click the red [X] button.

Un-assigning a device does not remove the device, sub-devices or any associated data. The device is only removed from its location in the asset hierarchy. It can be assigned afterward to other groups again.

### Editing Groups

To edit the name of the group, click on the "Info" tab and edit the name.

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

* If these properties have been customized previously, these values are used, see [Customizing data point properties](#Customize-data-points).

* If the data points have a matching definition in the Data Point Library, the values from the Data Point Library are used.

There can be more than one matching data point entry in the Data Point Library. In this case, the first one is selected automatically by the system. You can overwrite this selection by clicking the menu icon of the respective data point and selecting **Load [NAME] from Library**. 

![edit data points](/guides/users-guide/data-explorer-data-points-edit.PNG)

For details on modifying the visualization in general, see [Changing data point visualization](#change-visualization). For details on customizing the properties of a particular data point, see [Customizing data point properties](#Customize-data-points).

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

![add data point](/guides/users-guide/Cockpit/Cockpit_AddDatapoint.PNG)

In the top of the dialog, select a device from the asset hierarchy. Only the asset hierarchy below the objects selected in the navigator is visible. If "Data explorer" in the navigator was selected, the complete asset hierarchy is visible.

The bottom of the dialog shows all data points of the selected object. Select the data points you want to show in the data explorer. Click **Add** to add all selected data points to the list of data points.

To save the data point to the Data Point Library, click the menu icon of the data point and from the context menu select **Save to library**. 

<img src="/guides/users-guide/Cockpit/Cockpit_DataPointContextMenu.PNG" name="data point context menu" style="width:75%;"/>

For details on the Data Point Library refer [Using the Datapoint Library](#library).

To remove a data point from the data point list, click the menu icon and select **Remove from list**.


### <a name="customize-data-points"></a>Customizing data point properties

You can customize the visualization of a particular data point to your preferences. To do so, expand the data point entry in the data point list.

The following fields my be modified:

Field|Description|
|:---|:---|
|Label|Name of the data point, displayed on the y-axis to identify the data point. Below the label, the target is displayed, showing the name of the asset and the internal name of the data point (measurement fragment and series). This information is not editable.
|Unit|Unit used on the y-axis. 
|Min/Max|Range shown on the y-axis. 
|Target|The target value is currently not shown in the diagram. The value is used in the "Data Point List" widget.|Yellow range min/max|Defines the range when MINOR alarms should be raised by threshold rule.  
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

In the "Alarms / Events" card, click **Add alarm/ event** to add an alarm or event.

<img src="/guides/users-guide/Cockpit/Cockpit_DataExplorerAlarmAdd.png" name="Add widget" style="width:75%;"/> 

In the upcoming dialog, you can select an alarm or event from the list of recent alarms and events. Click **Add**, to add your selection.

Expand an event, to modify its properties.

Click the menu icon and in the context menu select **Remove**, to remove the entry from the list.

As with data points, you can turn the visibility of an alarm/ event in the data explorer on and off by moving the slider.


### <a name="create-widget"></a>Creating widgets from the data explorer

If you want to keep your current configuration for later usage, save it as widget using **Send as widget to dashboard**.

To create a widget from the data explorer, click the **More...** button in the top menu bar and select **Send as a widget to a dashboard**.

![send to dashboard](/guides/users-guide/data-explorer-send-to-dashboard.PNG)

In the upcoming dialog, select one of the dashboards available for the current object and click **Select** to add the data explorer as widget to the selected dashboard.

**Info**: To use this function, first a dashboard has to be created. For details on dashboards, refer to [Working with Dashboards](#dashboards).


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

## <a name="library"></a>Using the Data Point Library

The Data Point Library provides a collection of data points with default values for data point properties. 

Data point properties are similar to "paragraph formats" in word processing applications: You do not want to format each paragraph individually. Instead you want to define a set of default formats and apply them to your paragraphs in your document. 

The Data Point Library provides the same functionality for data points: It provides a number of default data point "templates" that can be applied easily to your data points from different devices.

How does the Cockpit application use the data point library? To find the default visualization for a data point like color or label, Cockpit searches the data point library and tries to find a matching entry. An entry is considered as "matching", if the values for fragment and series in the data point library match those of the measurement. If a matching entry is found, the corresponding data point properties are used for a default visualization.

Additionally, the properties of the Data Point Library are used by threshold business rules: The red and yellow values configured in the Data Point Library are used by the threshold rules to raise alarms.

To open the Data Point Library, click **Data Point Library** in the "Configuration" menu of the navigator.

A list of available data points will be opened. For each data point, the following information is provided in the list:

Color and label for the data point
Fragment name and series
Measurement unit

### Adding a data point to the library

To add a new data point to the library, click **Add data point** in the top menu bar.

Provide the following information:

Field|Description|
|:---|:---|
|Color|Select a color for the data point visualization.
|Label|Label to identify the data point.
|Fragment|Fragment 
|Series|Series
|Unit|Unit used for the measurement.
|Target|Unit used for the measurement.
|Yellow range|Unit used for the measurement.
|Red range|Unit used for the measurement.

Click **Save** to add the data point to the library.

### Editing or removing data points

To edit a data point, simply click the respective entry in the list or click the menu icon at the right of an entry and in the context menu click **Edit**.

To remove a data point, click **Remove** in the context menu.

## <a name="dashboards"></a>Working with Dashboards

Dashboards provide you with a customized visualization of your data with a set of widgets. Widgets can display maps, images, graphs, tables and other graphic representations of data. 

Cumulocity comes with a number of preset widgets, see section [Widget Collection](#widget) for details. You can also develop your own widgets according to your needs and add them to your Cumulocity account. Refer to the [Web Developer's Guide](/guides/web/) for details.

### <a name="creating-dashboards"></aCreating a dashboard

Select the group or the device in the navigator for which to create a dashboard. 

Click the **Plus** button in the top bar and from the context menu select **New dashboard**. 

![Create Dashboard](/guides/users-guide/dashboard-create.png)

In the "Dashboard info" section of the "Create dashboard" window, provide the following information:

* A menu label to be used as the name of the dashboard
* The location of the dashboard in the navigator, with "10000" being ordered first and "-10000" last
* An icon which is shown next to the dashboard name in the navigator

In the "Dashboard layout" section you can select a theme for the dashboard (one of Light, Dark, Transparent or Branded) and a default header style for the widgets (one of Regular, Border, Overlay, or Hidden). Moreover, you can change the default widget margin (default value is 15 px). 

A preview of the selected layout settings is displayed in the "Preview" section to check your selections.

Click "Save" to create and open the dashboard. 

Since there will be no widgets on the dashboard yet, you will see an **Add Widget** button instead.

### Editing dashboard properties

To edit a dashboard, click **Edit** in the top menu bar. The dashboard editor will open up. For details on the fields, refer to [Creating dashboards](#creating-dashboards).

### Adding a widget to a dashboard

To add a widget to a dashboard, click **Add widget** in the top menu bar.

<img src="/guides/users-guide/Cockpit/Cockpit_AddWidget" name="Add widget" style="width:100%;"/> 

In the upcoming dialog select a widget type from the dropdown list. Depending on the widget type selected, additional fields and checkboxes will be displayed to be filled in or selected. For details on the widgets refer to [Widget Collection](#widget). 

Click **Customize widget style** to customize the content and header style for the widget individually, similar to specifying the general layout in the dashboard editor.

Click **Save** to add the widget to the dashboard.

### Modifying widgets on a dashboard

Widgets may be rearranged on the dashboard. By dragging and dropping you can move the widget to another position. 

By dragging the arrows on the bottom right corner of a widget, you can resize it. 

To edit the properties of a widget on a dashboard, click the cogwheel icon at the top right corner of the widget and from the context menu select **Edit**.

To delete a widget from a dashboard, click the cogwheel icon at the top right corner of the widget and from the context menu select **Remove**.

> **Info:** Widgets can only be modified, if the dashboard is unlocked. To lock/unlock a dashboard, use the slider with the lock icon on the top menu bar.

![dashboard lock](/guides/users-guide/dashboardlock.png)

On a laptop, these icons only appear when you hover over the widget header.

Editing on touch devices like smartphones or tablets do not support all functions. To show the widget icons on touch devices, please hover over the widget header.


### Creating a dashboard for identical devices

You can create one dashboard that will appear for all identical devices. To do so, create a new dashboard as described above. Before clicking "Save", select the option "Apply dashboard to all devices of type _type_". The text "_type_" is replaced with the type of the device that is currently selected.

Then this dashboard should appear for all identical devices. Changes made to this dashboard are automatically applied to all dashboards.

> You can only add widgets and data to the dashboard for the device itself. It is not possible to add data from child devices because the structure of these devices might be different from device to device.

### Adding permissions to a Dashboard

Permissions can be granted to a specific user role only. To do so, create a new dashboard as described above or edit a dashboard.

> To edit a dashboard, click on the cogwheel on the top-right and select "Edit Dashboard".

In order to grant permissions to specific users,  deselect both "Dashboard visible to all users" and deselect "Apply dashboard to all devices of type "_type_".

![Add permissions](/guides/users-guide/dashboardaddright.png)

Then, click on "Add permissions" and select a group from the dropdown menu.

![Select group](/guides/users-guide/dashboardforgroup.png)

Afterward, select the desired permission for the selected group.

![Select permission](/guides/users-guide/dashboardpermission.png)

> Permissions can be granted to several groups.



### Copying a dashboard

To copy a dashboard from one object to another, click **More...** in the top menu bar and from the context menu select **Copy dashboard**. 

Next, navigate to the object you want to copy the dashboard to and from the context menu select **Paste dashboard <NAME>** to insert the dashboard.

An alternative way to copy a dashboard is to use the 
"Dashboard per type" approach.  With the "Dashboard per type" approach you copy the dashboard from one object to **all** identical objects.

### Removing a dashboard

To delete a dashboard from an object, click **More...** in the top menu bar and from the context menu select **Remove dashboard**. 

### Sending dashboard via email

... add description here


## <a name="widget"></a>Widget Collection

The Cockpit includes preset widget types. Each widget type provides different parameters to configure and different data to be displayed. 

The following section describes, in alphabetical order, each available widget type and its configuration properties.

### Widget "Alarm list"

The "Alarm list" widget shows a list of alarms, filtered by objects, alarm severity and alarm status. For details on the information provided for each alarm, refer to [Working with alarms](#alarm-monitoring) in *Device Management*.

**Parameters to configure**

<img src="/guides/users-guide/Cockpit/Cockpit_CreateAlarmList" name="Create Alarm list widget" style="width:75%;"/>

Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select groups or devices, optional HTML expressions which should be evaluated.
|Status|Only show devices with alarms of of the selected alarm status.
|Type|Only show alarms of the specified type(s). Details can be seen when clicking once on an alarm.
|Severities|Only show alarms of the selected alarm severity.
|Order|Alarms may be ordered by the active status (followed by severity and time, the default) or the severity (followed by time).

### Widget "All critical alarms"

The "All critical alarms" widget shows all objects with a critical alarm. There are no additional parameters to be configured.

For details on alarms, refer to [Working with alarms](/guides/users-guide/DeviceManagement#alarm-monitoring) in *Device Management*.

### Widget "Applications"

The "Applications" widget shows a list of links to all available applications. There are no additional parameters to be configured.

For details on applications, refer to [Managing Applications](/guides/users-guide/Administration#applications) in *Administration*.


### Widget "Asset notes"

The "Asset notes" widget displays messages provided by the administrative user to all owners of the current widget. 

<img src="/guides/users-guide/Cockpit/Cockpit_AssetNotesWidget" name="Asset notes widget" style="width:75%;"/>

Only users with the permission to edit the home dashboard will be able to provide this message.


### Widget "Asset properties"

The "Asset properties" widget displays a user-defined list of attributes of the current object. The current object can be a device or a group.

**Parameters to configure**

Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select groups or devices.
|Properties|List of properties, see [Configuring a property list](#widget-asset-table-).

>**Info:** In the view mode, this widget only displays the properties which are not empty.

### Widget "Asset table"

The "Asset table" widget shows details of all child devices in a table. This is a very powerful widget, allowing to arrange selected properties of objects in a table.

**Parameters to configure**

Field|Description|
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

<img src="/guides/users-guide/Cockpit/Cockpit_DataPointGraphWidget" name="Data Point Graph widget" style="width:75%;"/>

The easiest way to create a "Data point graph" widget is to navigate to the data explorer, click the **More...** button in the top menu bar and select **Send as a widget to a dashboard**.

Refer to [Visualizing Data Using the Data Explorer](#visualize) for further details on the parameters to be configured.

### Widget "Data point list"

The "Data point list" widget shows data points (measurements), one in each row, with current values and data point properties.

**Parameters to configure**

Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Data point|Shows a list of available data points. You must enable at least one data point. Click **Add data point** to add a data point to the list. For details on how to add data points see [Adding data points](#add-data-points).
|Column visibility|Select which columns should be visible: <br>Label: Label of the data point. See [Visualizing Data Using the Data Explorer](#visualize)for details. <br>Target: Target value. Can be configured in the [data explorer](#visualize) or [Data Point Library](#data-point-library).<br>Current: Current value. <br>Diff: Absolute difference between current value and target value. <br>Diff %: Percentage of difference between current value and target value. <br>Asset: Name of the device or group of the data point. 

### Widget "Data point table"

The "Data point table" widget configuration is similar to the "Data point graph" widget, but instead of visualizing the data as a line-chart, data is visualized as a table.

The "Data point table" widget displays data based on selected data points, time interval and aggregation.

Out of range values, based on configured yellow and red ranges, are highlighted in the table.

![Data point table](/guides/users-guide/datapointtable.png)

### Widget "Event list"

The "Event list" widget lets you monitor events for a selected device. 

<img src="/guides/users-guide/Cockpit/Cockpit_EventListWidget" name="Event list widget" style="width:75%;"/>

Additionally, a specific date range can be set and the events can be monitored in realtime. 

### Widget "Fieldbus device"

The "Fieldbus device" widget lets you see the status of a modbus device and operate it.

For details on the "Fieldbus device" widget, refer to [Monitoring device status using the Fieldbus device widget](#fieldbus-device-widget) in *Cloud Fieldbus*.

### Widget "Help and service"

The "Help and service" widget displays links to help and service resources. There are no additional parameters to be configured.

<img src="/guides/users-guide/Cockpit/Cockpit_HelpAndServiceWidget" name="Help and service widget" style="width:75%;"/>

### Widget "Image"

The "Image" widget lets you display a single image to be selected from your computer by browsing. There are no additional parameters to be configured.

### Widget "Info Gauge"

The "Info gauge" widget visualizes one data point in form of a radial gauge and multiple data points as labels. 

<img src="/guides/users-guide/Cockpit/Cockpit_InfoGaugeWidget" name="Info gauge widget" style="width:75%;"/>

You can select one data point for the gauge, and multiple data points shown with labels on the left side.

<img src="/guides/users-guide/Cockpit/Cockpit_InfoGaugeDataPoint" name="Info gauge data points" style="width:75%;"/>

You must enable at least one data point in each section to create the "Info gauge" widget.


### Widget "HTML"

The "HTML" widget shows user-defined content. The content can be formatted using HTML.

**Parameters to configure:**

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

<img src="/guides/users-guide/Cockpit/Cockpit_LinearGaugeWidget" name="Linear gauge widget" style="width:75%;"/>

You must enable at least one data point to create the "Linear gauge" widget.
 

### Widget "Map"

The "Map" widget shows the location of a device or all devices of a group. 

<img src="/guides/users-guide/Cockpit/Cockpit_MapWidget" name="Map widget" style="width:75%;"/>

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

* Target assets or devices: Select which devices are shown on the map. If a group is selected, all devices in that group (but not in any subgroups) are visible.

>**Info**: If none of the target device(s) has a known location, then the widget shows a world map without icons.

### Widget "Message sending"

The "Message sending" widget sends a message to a device. The behavior of the device itself is device-dependent. Only available for devices that support this type of operation.

### Widget "Pie chart"

The "Pie chart" widget displays data points (measurements) with current values in a pie chart presentation.

**Parameters to configure**

Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Pie chart options|Select from the options to show tooltips, percentages, legends in the pie chart. |Data point|Shows a list of available data points. You must enable at least one data point. Click **Add data point** to add a data point to the list. For details on how to add data points see [Adding data points](#add-data-points).


### Widget "Quick links"

The "Quick links" widget displays several quick links to relevant operations. There are no additional parameters to be configured.

<img src="/guides/users-guide/Cockpit/Cockpit_QuickLinksWidget" name="Quick links widget" style="width:75%;"/>

### Widget "Radial Gauge"

The "Radial gauge" widget visualizes data points in form of a radial gauge. 

<img src="/guides/users-guide/Cockpit/Cockpit_RadialGaugeWidget" name="Radial gauge widget" style="width:75%;"/>

You must enable at least one data point to create the "Radial gauge" widget.


### Widget "Recent alarms"

The "Recent alarms" widget shows all alarms of all severity sorted by time. There are no additional parameters to be configured.

<img src="/guides/users-guide/Cockpit/Cockpit_AlarmListWidget" name="Alarm list widget" style="width:75%;"/>

For details on alarms, refer to [Working with alarms](/guides/users-guide/DeviceManagement#alarm-monitoring) in *Device Management*.

### Widget "Relay array control"

The "Relay array control" widget lets you switch relays on or off independently in an array of relays. Only available for devices that support this type of operation.

### Widget "Relay control"

The "Relay control" widget allows you to switch a device relay on or off. Only available for devices that support this type of operation.

### Widget "Rotation"

The "Rotation" widget lets you render an object model of a device.

**Parameters to configure**

Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select group or device to be displayed.
|Object model for rendering|Select an object model type for rendering. May be one of "Box model" or "Phone model".
|Wireframe|Turn "Wireframe" on or off (default = on). The "wireframe" mode displays the object in a skeletal representation.
|Camera type|Select the type of camera to be used. May be one of "Orthographic camera" or "Perspective camera".

In the "Rotation" widget you can rotate the object by dragging and moving it around. Zoom in and out by using the mouse.

### Widget "SCADA"

The "SCADA" widget provides a graphic representation of the status of a device.

For details on the "SCADA" widget, refer to [Monitoring status using the SCADA widget](#scada-widget) in *Cloud Fieldbus*.

### Widget "Silo"

The "Silo" widget displays data points (measurements) with current values in a silo presentation.

**Parameters to configure**

Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Data point|Shows a list of available data points. You must enable at least one data point. Click **Add data point** to add a data point to the list. For details on how to add data points see [Adding data points](#add-data-points).

### Widget "Traffic light"

The "Traffic light" widget visualizes the states of a device as traffic light.

**Parameters to configure**

Field|Description|
|:---|:---|
|Title|Widget title. By default, the widget type is simply used as title.
|Target assets or devices|Select group or device to be displayed.
|States mapping|

### Widget "Twitter News"

The "Twitter news" widget displays tweets from Twitter's embedded timeline widget.

<img src="/guides/users-guide/Cockpit/Cockpit_TwitterNewsWidget" name="Twitter news widget" style="width:75%;"/>

**Parameters to configure**

Field|Description|
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
* The second type of report lets you export specific data to either CSV or Excel files, described in ["Exporting data with reports"](#reporting).

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

Click **Add widget** in the top menu bar and select a widget type from the list. For details on all widgets types available, refer to [Widget Collection](#widget).

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

<a name="filters"> **Filters** </a>

In the "Filter" section, you can select filters to request object- or time-specific reports.

<img src="/guides/users-guide/Cockpit/Cockpit_ReportFilters" name="Report filters" style="width:100%;"/>

To filter for a particular object, enter a name or property value into the search field and click the search icon. All matching devices or groups will be displayed below the "Value" field. Click a device to select it (highlighted in green). 

The "Time range" filter can filter object reports for a specific time range. Select a time range from the dropdown field. This may be one of "Last year", "Last month", "Last week" or select "Custom" and enter a custom from/to range in the additional fields.

Select the checkbox in front of the filter name to enable the filter.

<a name="fields"> **Fields** </a>

Apart from object- and time-specific filtering you may filter reports for specific fields:

- Alarms
- Events
- Managed objects
- Measurements

Use the slider to enable/disable a field.

<img src="/guides/users-guide/Cockpit/Cockpit_ReportFields" name="Report fields" style="width:100%;"/>

When a field is enabled, predefined or empty properties can be added. 

Click **Add** to add empty properties. To enter a label or path, click "Column" or "Path" and edit the field. For example, if you enable the "Alarms" field you could enter "Severity" in column and path to receive reports only for alarm severities.

Click **Add predefined**, to add predefined properties. Simply select the desired properties from the list and click **Select**. Use the search field at the top to search for a specific property.

<img src="/guides/users-guide/Select" name="Select" style="width:75%;"/>

...
If you have at least one field that is not originating from the "Add predefined" list but defined as a custom property, then you need to set up at least one property for the custom values to appear in the export. As an example, if  a report has 4 fields defined: time range, device name, type and c8y_SpeedMeasurement.speed.value, then the first 3 are predefined properties, while the last one is a custom property. If any measurement for export does not have a custom property c8y_SpeedMeasurement.speed.value, then it will not appear in the export file.

If your field is a valid.key.with.dot then refer to it as ['fragment.key.with.dot'] in the path, e.g.: ['fragment.key.with.dot'].serie.value

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

<img src="/guides/users-guide/Cockpit/ReportSmartRule.png" name="Smart rule" style="width:100%;"/>


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

![image alt text](/guides/users-guide/image_23.png)

If the new rule was set to "enabled" and was not activated for specific objects, the rule will be active for all devices and groups. See next section on how to deactivate a smart rule for specific objects.

To avoid confusion, disabled Smart Rules are not displayed in group menus or device menus.

Smart Rules can be instantiated multiple times.

### Activating or deactivating Smart Rules

A Smart Rule can be activated (switched on) and deactivated (switched off) for a single object (group or device). For example, if a device is generating too many threshold alarms, you can deactivate the rule for this single object. The rule is still active for all other objects.

To deactivate or activate a Smart Rule for a group or device, navigate to the "Info" tab of the group or device and enable/disable the respective rule using the slider. 

<img src="/guides/users-guide/Cockpit/SmartRuleInfoTab.png" name="Smart rule in Info tab" style="width:100%;"/>

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
4. Click the menu icon at the end of the row of the respective data point and select **Create Smart Rule**. <br> <img src="/guides/users-guide/Cockpit/DataPointExample.png" name="Data point example" style="width:75%;"/>

5. Select the Smart Rule "On measurement explicit threshold create alarm".<br> <img src="/guides/users-guide/Cockpit/SmartRuleExample.png" name="Smart Rule example" style="width:75%;"/>
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

The following global Smart Rule templates are available in Cumulocity.

### Measurement threshold alarms

When crossing defined yellow and red ranges, alarms are generated and cleared.

The rule uses the following parameter from the device object or data point library:

* Object red range: Range when the system should create CRITICAL alarms. These values can be edited in the Data Explorer for each data point.

* Object yellow range: Range when the system should create MINOR alarms. These values can be edited in the Data Explorer for each data point.

* Data point library red range: When there is no red range stored in the respective object, then data point library is searched for the configured data point entry and uses the related red range.

* Data point library yellow range: Similar to red range.

Using this mechanism, you can configure global threshold ranges in the data point library. These global values can then be overridden for specific objects on a case-by-case basis.

The rule uses the following parameters:

![image alt text](/guides/users-guide/image_28.png)

* Fragment: Name of the measurement fragment. The incoming measurement must have exactly the same fragment name as configured. When creating a rule from the data explorer, the fragment data is already filled in.

* Series: Similar to fragment, just for the series.

* Data point library entry: Name of the entry in the data point library. This is used to find the default values for red and yellow ranges in case they are not configured for an individual object.

* Type: Type of the alarm that will be raised.

* Text: Text of the alarm that will be raised.  

A detailed description of steps that this smart rule performs for each incoming measurement value:

* Check, if the measurement includes data for the fragment and series (rule parameter).

* Check, if the rule is activated for the source object.

* The data of the red and yellow range is collected from either:

- the source object (the measurement)

- the data point library (control parameter).

If no red / yellow ranges are defined, no alarms are generated.


_Note_: Range values defined in the source object have a higher priority than the ones defined in the data point library. You can also just overwrite a single value (e.g. yellow range max) by setting it in the source object. The other values will then be taken by from the data point library.

 - If the incoming value is inside the yellow range.

 - If there is an active alarm of given type for the object:

* Set severity to "MINOR"

* Otherwise

* Create new "MINOR" alarm with given parameters.

 - If the incoming value is inside the red range:

 - If there is an active alarm of given type for the object:

* Set severity to "CRITICAL"

* Otherwise

* Create new "CRITICAL" alarm with given parameters.

- If the measurement is outside of yellow and red range.

- If there is an active alarm of given type for the object.

* Clear the alarm.

### Troubleshooting

* Please verify that the alarm was created and not duplicated from somewhere.

* If device is not in [maintenance](/guides/reference/device-management) mode: in this case no new alarm will be created because of suppression policy.

* If you don't have an alarm mapping rule (see: [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which change the alarm severity: in this case the alarm may have different severity than expected.

* Check if an alarm was already cleared by the next scheduled measurements with resulting value in a green range.

* Please note that if you clear an alarm, you state that the alarm is resolved. A new alarm is not raised unless the device changes its state and crosses the thresholds again.

### On measurement create a threshold alarm

When the measurement value enters or leaves the RED range, a CRITICAL alarm is generated or cleared.

The severity of alarm is determined by:

* If the measurement value moves into RED range then severity is CRITICAL

* If the measurement value moves into GREEN range the alarm is cleared


This rule is similar to the above threshold rule. However, in this rule the RED threshold value is provided explicitly. The other threshold rule above extracts the thresholds values from the device or data point library.

The rule uses the following parameters:![image alt text](/guides/users-guide/image_37.png)

* Fragment: Name of the measurement fragment. The incoming measurement must have exactly the same fragment name as configured. Note: When creating a rule from the data explorer, the fragment name is already filled in.

* Series: Similar to fragment, just for series.

* Minimum, Maximum: When a value is in the range [minimum; maximum], the configured alarm is raised.

* Type: Type of the alarm that will be raised.

* Text: Text of the alarm that will be raised.

### Troubleshooting

* Please check the same steps as for the threshold rule above.


### On alarm send e-mail

**Functionality** 

When an alarm is created, an email is sent.

**Parameters**

The rule uses the following parameters:

![image alt text](/guides/users-guide/image_29.png)

|Field|Description|
|:---|:---|
|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|On alarm matching|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|Send e-mail|"Send to:/Send CC to:/Send BCC to": Email addresses for sending the e-mail to. Multiple addresses can be separated by a comma (",", do not use a space!).<br>"Reply to": Address to be used to reply to the message.<br> "Subject": Subject of e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.<br> "Message": Text of the e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.
|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Please check the same steps as for the threshold rule above.

* Please check your spam folder.

### On alarm send SMS

**Functionality** 

When an alarm is created, a SMS is sent.

>**Info:** This rule is only available if your tenant has a configured SMS provider.

**Parameters**

The rule uses the following parameters:

![image alt text](/guides/users-guide/image_30.png)

|Section|Description|
|:---|:---|
|Rule name|Pre-filled with the name of the rule template. Can be modified according to your needs.
|On alarm matching|The types of alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered.
|Send SMS|"Phone number": Target phone number. It is recommended to include mobile country code for all numbers, e.g. "+49" or "0049" for Germany. Multiple numbers can be separated by a comma (",", do not use a space!).<br> "Message": Text of SMS with max. 160 characters. You can use variables of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.
|Target asset or devices|Groups or devices the rule shall be applied to.

**Troubleshooting**

* Please check the same steps as for the threshold rule above.

* If you use a variable there is a limit of 160 applied as a total count. If after applying the variables the text counts more than 160 characters the SMS will not be sent.

### On alarm duration increase severity

If an alarm is active for a certain time, increase the severity.

The rule uses the following parameters:![image alt text](/guides/users-guide/image_31.png)

* Alarm types: The types of alarm which will trigger the rule.

* Duration: How long must there be an active alarm to trigger the rule?

Description of the rule:

* When a configured type of alarm is raised it starts monitoring how long the alarm stays active.

* If the alarm is still active after specified duration,it will increase the severity one level, like from MINOR to MAJOR.

* If the alarm is 'CRITICAL' it will stop monitoring because there is no further action available.

_Note:_ The rule checks if the configured duration was exceeded once a minute. Therefore it can occur that the alarm severity won't change in the second it exceeds the duration but only during the following check.

### On geofence crossing create alarm

The Geofence-Smart Rule can be configured to create an alarm upon crossing the geofence (or both). Existing alarms are cleared when the opposite condition is true gain like if a tracked car which has left the geofence area is re-entering the geofence area.

The rule uses the following parameters:

![image alt text](/guides/users-guide/image_32.png)

* Geofence: Define a polygon that defines the border of an area. Click on "Edit geofence", navigate to your area (like using the “Search address” field), and define a polygon by clicking once on each point of the border. ![image alt text](/guides/users-guide/image_33.png)

* Type: Type of the alarm that will be raised.

* Text: Text of the alarm that will be raised.  

* Severity: Severity of the alarm that will be raised.

* TriggerAlarmOn: Definition which geofence interaction creates the alarm. Values: "leaving", "entering" or "both". "leaving" is set as default value.

No alarm will be generated until the device crosses the geofence border for the first time.

### Troubleshooting

* Please make sure the device was inside the geofence at least once after creating/activating the rule

* If the device is not in [maintenance](/guides/reference/device-management) mode: No new alarm will be created because of suppression policy.

* If you don't have an alarm mapping rule (see: [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which change the alarm severity: in this case the alarm may have different severity than expected.

### Calculate energy consumption

Create consumption data point based on data from an electric-, gas-, water- meter.

The rule uses the following parameters:

![image alt text](/guides/users-guide/image_34.png)

* Fragment: Name of the measurement fragment. The incoming measurement must have exactly the same fragment name as configured. When creating a rule from the data explorer, the fragment is already filled in.

* Series: Similar to fragment, just for the series.

* Duration: Time period at which consumption values should be calculated.This will only define how often the consumption is calculated not the unit of the consumption measurement.

* Consumption Fragment: Name of the measurement fragment that should be generated.

* Consumption Series: Name of the measurement series that should be generated.

The unit of the consumption measurement is always per hour (like if the measurements are in "kg" the consumption will be in "kg/h").
The rule will take the last two measurements for a specified time.
It will then calculate the difference in value and time and calculate the consumption per hour.

Example:

The rule is configured to calculate every 20 minutes. There are the following measurements incoming:
100 kg at 11:59 and 200 kg at 12:14.
At 12:20 the rule will trigger the next time and it will take the last two measurements. It will calculate value and time difference. The consumption measurement created at 12:20 will therefore be 400 kg/h.
If there hasn't been any new measurement created in the last period a measurement with consumption 0 will be created.

### On missing measurements create alarm

Create an alarm if there was no new measurement data received for a specified time.

The rule uses the following parameters:

![image alt text](/guides/users-guide/image_35.png)

* Type: Type of measurement. The incoming measurement must have the same type as configured. _Note:_ When creating a rule from the data explorer, the type is already filled in.

* Time interval: Time interval, for calculating consumption values.

* Type: Type of the raised alarm.

* Severity: Severity of the raised alarm.

* Text: Text of the raised alarm.

The rule checks if the configured time interval was exceeded once a minute. Therefore it can take up to one minute to create the alarm after the time interval was exceeded. To check if the time interval was exceeded there must be at least one incoming measurement after the activation of the rule.

### On alarm create operation

If a certain alarm occurred, send the specified operation to the device.

The rule uses the following parameters:

![image alt text](/guides/users-guide/image_36.png)

* Alarm types: The types of the alarm trigger the rule. For each new specified alarm, this rule is triggered.

* Operation: The operation that will be sent. The operation is provided as JSON description. Some standard operations can be selected below the operations field. To use a standard operation, select one, and press the arrow button on the right. This will insert the JSON of the selected operation.


## On geofence crossing send e-mail

Send the email if a device leaves or enters the defined geofence.

The rule uses the following parameters:

![image alt text](/guides/users-guide/ongeofencesendemail.png)

* Geofence: Define a polygon in the way similar to the rule "On geofence crossing create alarm".

* Send to: Email addresses for sending the e-mail to. Multiple addresses can be separated by a comma (",", do not use a space!).

* Send CC to: As previously, just for e-mail "CC" field.

* Send BCC to: As previously, just for e-mail "BCC" field.

* Reply to: Address that must be used to reply to the message.

* Subject: Subject of e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.

* Text: Text of e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.

_Note:_ Like the "On geofence crossing create alarm" this rule triggers on crossing the border of the geofence. In order to send out the e-mail the device had to be inside the geofence at least once after creating the rule.

** Troubleshooting **

* Please make sure the device was inside the geofence at least once after creating/activating the rule

* Please check your spam folder.


## On alarm initiate text-to-speech call

When an alarm is created it initiates a text-to-speach call.

The rule uses the following parameters:

![image alt text](/guides/users-guide/onalarmsendtexttospeach.png)

* Alarm types: The types of the alarm trigger this rule. It will be applied to all new specified alarms.

* Phone number: Target phone number. It is recommended to include mobile country code for all numbers, like "+49" or "0049" for Germany.

* Message: The text read out by the rule.

* Retries: The number of retries to reach the target phone number if not successful (like the phone is busy or call gets rejected).

* Interval: The time interval between the retries (in minutes).

* Acknowledgment: Flag indicating that the receiver of the call has to acknowledge the call (if checked a not acknowledge call will not count as a successful call)

* Acknowledgment text: The acknowledgment message (will be read after the main message), for example: "Please acknowledge this call by clicking on 5"

* Acknowledgment number: The number of the button the receiver has to push to acknowledge. If the button will be pushed, the call will be successful and the alarm status will be changed to acknowledged.

### Troubleshooting

* Check that the alarm was created and not duplicated.

* If the device is not in [maintenance](/guides/reference/device-management) mode: No new alarm will be created because of suppression policy.

* If you don't have an alarm mapping rule (see: [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which change the alarm severity: in this case the alarm may have different severity than expected.

## On alarm escalate actions

When alarm is created send e-mail, sms, or/and initiates text-to-speech.

The rule uses the following parameters:

![image alt text](/guides/users-guide/escalatealarm1.png)

* Alarm types: The types of the alarm trigger this rule. It will be applied to all new specified alarms.

The rule defines a chain of action in steps. In order to add steps click the button "Add step". A form with following parameters will appear:

![image alt text](/guides/users-guide/escalatealarm2.png)

* Type of action: Type of action executed in the step. Possible values are:

	* Send e-mail (see On alarm send e-mail rule for parameter descriptions)

	* Send sms (see On alarm send SMS rule for parameter descriptions)

	* Call phone (see On alarm initiate text-to-speech call rule for parameter descriptions)

* Condition: The condition applied when the rule will be executed. Possible values are:

	* Always: Action will be executed always.

	* Always: If step N failed: Only phone steps may fail. The step is marked as failed once all retries have been made without a successful call. This option appears if there is already a phone step configured that can be referred to.

** Troubleshooting **

* Please check that the alarm was created and not duplicated.

* If device is not in [maintenance](/guides/reference/device-management) mode: in this case no new alarm will be created because of suppression policy.

* If you don't have an alarm mapping rule (see: [Reprioritizing alarms](/guides/users-guide/administration#reprio-alarms)) which change the alarm severity: In this case the alarm may have different severity than expected.


### Smart Rule Variables

You can use variables in certain rule parameters. When a rule is triggered, the variables are replaced by their actual values. You can use this mechanism to insert device names or alarm text into various outputs (E-mail, SMS, Text-to-Voice).
You can include any information of the triggering event (like the alarm) and the source device of it.

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


**Note: In case the variable does not exist or is misspelled, the generated content is displayed. **
