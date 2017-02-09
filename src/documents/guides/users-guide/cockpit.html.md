---
order: 30
title: Cockpit
layout: default
---

## Overview


The Cockpit application provides you with options to manage the Internet of Things (IoT) assets and business data. In this guide we are going to show you how to:

- Start [using Cumulocity Cockpit](#start) and work with the [home](#home) dashboard
- [Connect](#connect) devices and manage [assets](#asset)
- [Visualize](#visualize) data using the data explorer
- Work with [dashboards](#dashboards)
- Handle [widgets](#widgets) and the [business rule](#business) package
- Manage [alarms](#alarms), [reports](#reports) and [smart rules](#rules)
- Use the [data point library](#library)

For more information about the cockpit application please refer to the introduction below.


## <a name="intro"></a>Introduction

The Cumulocity Cockpit can be used in many industrial areas, including:

* Condition monitoring

* Alarm monitoring and escalation

* Building asset monitoring

* Energy consumption of factories and equipment

* Sensor data monitoring

In the following section, the Cockpit application is described. It offers lots of functionality:

* **Data Explorer**: Interactively explore, compare and visualize IoT data.

* **Dashboards**: Create your own analytics and monitor pages by selecting and arranging widgets. Select from various widgets including maps, tables, graphs, charts, controls and more.

* **Smart Rule Builder**: Create business rules to work on incoming data in real-time.

* **Business Rule Package**: Use pre-defined business rules for geofencing, thresholds or alarm escalation and notifications (SMS/Email/Speech).

* **Reporting**: Create reports based on the dashboards layout and distribute them by Email.

* **Asset Management**: Organize your connected assets in hierarchies.

* **Alarm Management**: Monitor problems of your asset using severities and workflows.

* **Data point library**: Manage default settings ("profiles") of your devices and apply them automatically using the "Data point library".

### Concepts

The main concepts of the Cockpit application are those:

**Asset**: An asset represents a business object like buildings, machines, or cars.

**Asset Hierarchy**: Assets are organized in hierarchies (trees). The nodes of the tree represent groups, and the leaves of the tree represent devices.

**Group**: A group is a way to organize devices and assets in an asset hierarchy. A group can contain one or multiple devices, child devices or other groups.

**Device**: An IoT Device can be either a gateway device, or a device indirectly connected via a gateway (like modbus or KNX device), or a sensor.

**Data Point**: They represent sensor data, like temperature time series. In other parts of Cumulocity they are called measurements. Other terms used are time series or variable. They are always sensor generated data.

**Data Point Properties**: Metadata for a data point, representing additional properties added by the user like a label, min/max values, thresholds, or other.

**Dashboard**: A user defined page with individual content from various widgets.

**Report**: Similar to dashboards, but with analytical content based on a limited time frame or scope of work.

**Smart Rules**: Cumulocity business rules are instances from a smart rule template using the Smart Rule Builder.

### Cumulocity Applications

The Cockpit application is based on the Cumulocity Application framework.
To learn about the following items, please consult "[Introduction](/guides/users-guide/overview)":

*    What web browsers are supported?

*    How to login to Cumulocity?

*    How to navigate around?

*    How to link into the application?

*    How to use Cumulocity on touch devices?

*    User interface conventions

## <a name="start"></a>Start using Cumulocity Cockpit

### Welcome page

The welcome page opens the first time you log into Cumulocity Cockpit.

![image alt text](/guides/users-guide/image_0.png)

The welcome page shows the following sections:

* A welcome notice with the number of devices (or assets) connected.

* A list of quick links.

* A list of available applications

* A list of news based on the Cumulocity twitter channel. Note: This is only available for tenants hosted by www.cumulocity.com.

* A link to different parts of the documentation.

### Hiding the Welcome page

To do so, click "Don't show on startup" on the top right.

### Restore Welcome page as default

To restore the welcome page, select "Welcome" in the navigator on the top left. Then deselect “Don't show on startup”.

## <a name="home"></a>Home Dashboard

The cockpit start page is a dashboard page:

![image alt text](/guides/users-guide/image_1.png)

The dashboard shows data for the general tenant.

The home dashboard is a page shared by all users of the tenant. It consists out of widgets, which visualize IoT data. By default, the home dashboard includes five widgets, which show a welcome text, a summary of available objects, assets with alarms, recent alarms and a map of all objects.

The home dashboard can be edited, similar to other Cockpit dashboards: You can add, remove or change the widgets displayed. Use the settings symbol on the top right or move the cursor inside a widget and use the settings symbol of the individual widget.

For details, see "Editing a Dashboard" below.

To reset the dashboard to the original content, use the menu item "Reset default dashboard" from the cogwheel symbol.

## <a name="connect"></a>Connecting Devices

To use the Cockpit application, you have to connect IoT devices. Devices are connected in the Device Management application. Change to the “Device Management” using the Application Switcher on the top right, and then select “Registration”. For details, please see [Device Management User Guide](/guides/users-guide/device-management).
<img src="/guides/users-guide/app.png" alt="Logout menu" style="max-width: 100%">
## <a name="asset"></a>Asset Management

An asset represents the business object in general like buildings, machines, production units or cars.

Assets are organized in hierarchies. For example, an energy monitoring application might have the following asset hierarchy:

![image alt text](/guides/users-guide/image_2.png)

The asset hierarchy is composed out of two types of objects:

* Group objects: These are groups created in the Cockpit application and they can group single devices or other groups.

* Device objects: These are devices that are linked into the asset hierarchy.

In this example, group objects represent a building asset. Device objects represent the room asset. The group names and hierarchy can be defined individually by the user. The hierarchy can have multiple levels, like region level, city level, street level, building level, floor level and room level. An device can be part of multiple and different hierarchies, like part of regional hierarchy and part of customer hierarchy.

Single devices are not managed in the Cockpit application. They are managed in the Device Management Application.
To position a device in the asset hierarchy, you have to "assign" the device to the respective group. See description below for details.

### Asset Hierarchy versus Device Hierarchy

Cumulocity supports two types of hierarchies: A device hierarchy and an asset hierarchy. The device hierarchy tracks how devices are linked to Cumulocity from a communications point of view. The asset hierarchy structures the assets that are being remotely supervised and controlled through the M2M devices. For details, please refer to "[Cumulocity's Domain Model](/guides/concepts/domain-model)"

In the Cockpit application, you construct your asset hierarchy by creating group objects and by linking devices into the hierarchy. The asset hierarchy depends on the IoT devices used. There are many IoT devices, but these two types are very common:

* **Smart devices** are self-contained devices that include sensors, actuators and a communication module. They are typically connected to a single asset. Smart devices are trackers, weather station or general "smart" sensors with built-in communication module.

* **Gateway devices** establish the communication from other devices to Cumulocity, but do not include sensors or actuators. Typical gateway devices include Zigbee, Modbus, M-Bus or KNX gateways.

The following section explains how to use Cockpit with smart devices and gateway devices.

Below is an example how smart devices are linked into the asset hierarchy:


![image alt text](/guides/users-guide/image_3.png)

Smart devices are represented in the Device Management (right side) as top-level devices. In the Cockpit application, you can organize smart devices into groups, as the arrows indicate in the above diagram.

Gateway devices can use the Cockpit application like this.

![image alt text](/guides/users-guide/image_4.png)

Gateway devices are represented in Device Management as top level devices. Their attached devices (like Zigbee, Modbus or KNX devices) are shown as "Child Devices" (right side). These child devices can be organized in the asset hierarchy as shown above.

The asset hierarchy and the device hierarchy are self sufficient: While inside the Device Management applications all child devices are below the gateway device, the same child devices are organized in two different buildings in the Cockpit application. 
**Summary:** Devices can have totally different hierarchies in the Device Management Application or in the Cockpit Application.

### Cockpit Assets versus Business Assets

The mapping of objects in the Cockpit asset hierarchy is a virtual hierarchy. 
If you manage trucks within the Cumulocity platform, then each truck is represented via its individual tracking device communicating with Cumulocity.

For building management, it is most common that a group of sensors inside a building represents the building as a group communicating with the Cumulocity platform.

### Navigating Assets

The navigator shows a hierarchy of assets under "GROUPS" (See screenshot below):

* At the top, top level groups are shown.

* When expanding a group, all its children are shown.
Children can include other groups or devices assigned to the group.
Children are also shown in the tab "Sub-assets".

![image alt text](/guides/users-guide/image_5.png)

When selecting an object in the asset hierarchy, the right part of the application shows more details about the selected object:

![image alt text](/guides/users-guide/image_6.png)

The visible tabs on the right of the navigator differ based on the selection in the navigator. The following table shows which tabs are visible based on the selection in the navigator:

|Name of tab|_Name of Dashboard_|Info|Alarms|Sub-assets|Location|Data explorer|
|:---|:---|:-----|:-----|:----------|:----------|:----------|
|Group selected:|Yes, if configured|Yes|No|Yes|No|Yes, showing all data points of the children|
|Device selected:|Yes, if configured|Yes|Yes|No|Yes|Yes, showing all data points of the children|

There can be additional tabs visible in case the application has been extended with plugins. See "[Introduction to plugin development](/guides/web/introduction)" for details.

If you add a gateway device, the child devices are not shown. To show child devices, you must add them to the related asset. Details related to the child hierarchy are visible and editable in the Device Management Application.

To navigate further in the asset hierarchy, use the navigator or select an object in the "Sub-Asset" tab. To navigate up in the asset hierarchy, use the breadcrumb entry below the name of the asset.

### Search Assets

To search for groups or devices, enter the name of the group or device into the search entry field and click "Enter". You can click on the results . The selected group or device is then selected in the navigator on the left and details of it are shown on the right.

### Adding Groups

To add a new top-level group, click on the "+" in the top of the application and select “Add Group…”. This will show the following dialog:

![image alt text](/guides/users-guide/image_7.png)

This will create a new group with the selected assigned devices. After clicking "Create group with devices", the group is shown in navigator as top level object.

To add a new group as children of an existing asset, click the "+ Add Group" in the “Sub-assets” tab.

![image alt text](/guides/users-guide/image_8.png)

### Assign Devices to Groups

Before adding a device to the asset hierarchy, it must be connected to Cumulocity. Connect devices to the platform using the Device Management application. Please refer to "[Connecting Devices](/guides/users-guide/device-management#device-registration)" in the Device Management user guide.

To assign newly connected devices into the asset hierarchy, select the group where the device should appear, click on "sub-assets" and click the “+ Assign Device” button.

In the following dialog, search for devices and select the devices (or sub-devices) that should be assigned.

![image alt text](/guides/users-guide/image_9.png)

### Delete Groups

You can delete a group by hover over the group in the "Sub-assets" tab. You will see a red [X], which you can click to delete the group.

### Unassigning Devices

To un-assign a device from a group, select the group in the navigator. Then hover over the device in the "Sub-assets" tab and click the red [X] button.

Un-assigning a device does not remove the device, sub-devices or any associated data. The device is only removed from its location in the asset hierarchy. It can be assigned afterward to other groups again.

### Editing Groups

To edit the name of the group, click on the "Info" tab and edit the name.

## <a name="visualize"></a>Using the Data Explorer to Visualize Data

Data points (measurements or sensor data) can be visualized inside the Cockpit in three places:

* Clicking on the "data explorer" in the navigator. You have access to all data points of all assets from there.

* Navigate to a specific asset and click on the tab "Data Explorer". You have access to all data points of the assets and sub-assets.

* Adding data points related widgets to a dashboard to view pre-defined reports.

To visualize data points, follow these steps:

* Go to the group or device, and click on "Data Explorer".

* The first five data points of the selected device or group are shown.

* Add additional data point by selecting "Add data points..."

* Adjust colors, ranges, and other visualisation properties.

* Browse more data by changing the time period or value ranges.

* If you want to store your current configuration for later, save it as a widget using "Send as widget to dashboard..."

The data explorer and dashboards are closely related:

* When sending a data explorer configuration as a widget to a dashboard, you can select the dashboard where the new widget will be saved.

* When clicking on the configuration icon of a "Data points graph" widget, you are taken to a dialog similar to the data explorer, and here you can configure the widget.

### Opening the data explorer

When clicking on the tab "Data explorer", it will open.

It is pre-filled with available data points of the object (group or device). The first 5 data points are shown by default.

![image alt text](/guides/users-guide/image_10.png)

The visualisation is generated based on data point properties.

The data points properties (min, max, color, ..) are pre-filled as follows:

* If these properties have been edited before, the previous values are used.

* If the data points have a matching definition in the "Data Point Library", the values from the data point library are used.

There can be more than one matching data point entry in the "Data Point Library". In that case, the first one is selected automatically by the system. You can overwrite this selection by using the cogwheel symbol and selecting "Load X from Library". X refers to the entry in the data point library.

![image alt text](/guides/users-guide/image_11.png)

### Adding data points

Additional data points can be added to the data explorer by clicking "+ Add data point". This will bring up the following dialog:

![image alt text](/guides/users-guide/image_12.png)

In the top of the dialog, select a device from the asset hierarchy. Only the asset hierarchy below the objects selected in the navigator is visible. If "Data explorer" in the navigator was selected, the complete asset hierarchy is visible.

The bottom of the dialog shows all data points of the selected object. Select the data points you want to show in the data explorer. Click "Add" to add all selected data points to the list of data points.

### Changing data point visualization

To change the data point visualization, change the properties below the diagram.

The entry fields are designed to specify a precise time period to visualize:

* Left field: Start time of x-axis

* Right field: End time of x-axis

* Time aggregation level: No aggregation, daily, hourly

The following properties are available for data points:

* v: Select whether to visualize the data point or not.

* Color: Color of the graph.

* Label: Text used on the y-axis.

* Unit: Unit used on the y-axis. Unit is the user-defined string shown at the y-axis.

* Min / Max: Range of the y-axis.

* Target value: The target value is currently not shown in the diagram. The value is used in the "Data Point List" widget.

* Yellow Range Min / Max: Defines the range when minor alarms should be raised by threshold rule. These values are currently not visualized. See Smart Rules below for details.

* Red Range Min / Max: Defines the range when CRITICAL alarms should be raised by threshold rules. These values are currently not visualized. See Smart Rules below for details.

* Chart Type: For aggregated data, select what aggregated value should be visualized. Options are: min, max, area

* Y Axis: Select on which y-axis the data point should be shown. Options are: Auto, left, right.

* Asset: The name of the asset of the data point. This field is not editable. The internal name of the data point (measurement fragment and series) is shown.

### Browsing in the data explorer

To navigate the data explorer :

* Moving time period: Move to the x-axis and drag it to the left or right.

* Select a time range in the diagram

* Double click, to finish editing time range

### Working with the Y-Axis

In the data explorer, you can configure a column called "y-axis" with the following values:

* Auto (default)

* Left

* Right

The values define, where the y-axis for the respective data point is shown. Auto positions the first data point to the left y-axis and the remaining to the right y-axises.

Each data point is shown on its own y-axis, unless the following condition is met:

* Two data points having the same minimum and the same maximum value share a common y-axis.

In this case, both data points are shown with a single y-axis. Additionally, the y-axis only shows the unit (or multiple units, in case they are different). The label is not shown.

### Creating widgets from the data explorer

Use the menu and select "Send as a widget to a dashboard".

This will show a modal dialog with all dashboards of the current object. Move to the relevant dashboard and press "Select" to create a new widget in the selected dashboard.

![image alt text](/guides/users-guide/image_13.png)

### Exporting Measurement data to csv or xlsx files

Users have the option to download measurement data as csv or xlsx files. The exported data is divided into six columns:

 - Time - Date and time when the specific measurement was taken
 - Source of the measurement
 - Device name - Name of the device you are using
 - Fragment series - (e.g. c8y_SpeedMeasurement)
 - Value - Simply the value of the measurement
 - Unit - The unit used for a particular measurement (like "C", "km/h", "sec"...)

To download measurement data in either csv or xlsx first navigate to "Data Explorer", select your desired time range and then click on the small cogwheel button located at the top-right.

![Export measurement data](/guides/users-guide/exportmeasuredata.png)

Choose whether to download CSV or Excel(XLSX)

A"Generating Report" window will appear. The files will load depending on how many data points you have added to the "Data Explorer". Once the loading has been completed click on the "Download" button.

## <a name="dashboards"></a>Working with Dashboards

Dashboards provide you with a customized visualisation of your data with a set of widgets. Widgets can display maps, images, graphs, tables and other graphic representations of data. Cumulocity comes with a number of preset widgets, see section "[Widget Package](#widget-package)" for details. You can develop also your own widgets and add them to your Cumulocity account. See the [Web developer's guide](/guides/web/).

### Creating new Dashboards

To create a dashboard, navigate to an object in the asset hierarchy. Afterward, click on the cogwheel icon at the top right. Select "Create dashboard". This will open a dialog:

* The name of the dashboard, which will show in the menu.

* The location of the dashboard in the menu.

* The icon which is rendered next to the name in the menu.

* "Set dashboard as global": Whether the dashboard is visible to everyone (“global”) or just limited numbers of users.

* "Apply dashboard to all devices of type": Whether the dashboard should be visible only for this object or for all devices of the same type.

![image alt text](/guides/users-guide/image_14.png)

Click "Save" to create and open the dashboard. While there are no widgets on the dashboard, you will see an "Add Widget" button. Use this button to add your first widget to the dashboard.

### Creating a dashboard for identical devices 

You can create one dashboard that will appear for all identical devices. To do so, create a new dashboard as described above. Before clicking "Save", select the option "Apply dashboard to all devices of type _type_". The text "_type_" is replaced with the type of the device that is currently selected.

Then this dashboard should appear for all identical devices. Changes made to this dashboard are automatically applied to all dashboards.

> You can only add widgets and data to the dashboard for the device itself. It is not possible to add data from child devices because the structure of these devices might be different from device to device.

### Adding a Widget to a Dashboard

To add a widget to a dashboard, ensure that the dashboard is visible. Afterward, click on the cogwheel icon at the top right. Select "Add a widget to a dashboard". This will open a dialog with a selection of widgets you can add to the dashboard.

![image alt text](/guides/users-guide/image_15.png)

When selecting a widget type, additional input fields for this widget type will pop up. More information about the "[Widget Package](#widget-package)".

### Editing a Dashboard

You can edit dashboard properties by clicking on the cogwheel icon and select "Edit dashboard". This will bring up a similar dialog like creating a dashboard. In this dialog the dashboard name, icon, position and permissions can be edited.

You can rearrange the widgets on the dashboard. By dragging and dropping the header of the widget, you can move the widget to another position on the page. By dragging and dropping the arrows on the bottom right corner of a widget, you can resize a widget. By clicking on the cross icon in the top right corner, you can delete the widget. By clicking on the cogwheel icon on the top right corner of the widget, you can edit the widget properties. The following figure shows a widget with all mentioned icons visible:

![image alt text](/guides/users-guide/image_16.png)

On a laptop, these icons only appear when you hover over the widget header.

Editing on touch devices like smartphones or tablets do not support all functions. To show the widget icons on touch devices, please hover over the widget header.

### Copying a dashboard

To copy a dashboard from one object to another, use the cogwheel on the top right and select "Copy dashboard". Afterward select the object where the dashboard should be applied to and click "Paste Dashboard" to insert the dashboard.

An alternative way to copy a dashboard is to use the "[Dashboard per type](#creating-a-dashboard-for-all-devices-of-the-same-type)" approach.  With the "Dashboard per type" approach you copy the dashboard from one object to **all** identical objects.

### Removing a Dashboard

To add a widget to a dashboard, ensure the dashboard is visible.The same applies when removing it. Click on the cogwheel icon at the top right. Select "Remove dashboard" to remove a dashbord.

## <a name="widget"></a>Widget Package

The Cockpit includes preset widget types. Each widget type provides different parameters to configure and different data displayed. The following section describes each available widget type and the configuration properties.

### Widget "Asset Properties"
A user-defined list of attributes of the current object is displayed. The current object can be a device or the group object.

Parameters to configure:

* Title of widget

* List of properties, see "[Configuring a property list](#widget-asset-table-)" below

### Widget "Data Point Graph"

Show a data point (measurements) in a graph. The visualisation is the same as the data explorer.

The easiest way to create a data point graph widget is to navigate to the data explorer and then select "Send to dashboard".

The parameters to configure are the same as in the data explorer. Please refer to "[Data Explorer](#using-the-data-explorer-to-visualize-data)" for further details.

### Widget "Data Point Table"

This widget configuration is identical to the data points graph, except instead of visualizing the data as a line-chart, data is visualized as a table.

* The data points table widget displays data based on selected data points, time interval and aggregation.

* Out of range values, based on configured yellow and red ranges, are highlighted in the table.

![Data point table](/guides/users-guide/datapointtable.png)

### Widget "Map"

Show location of a device or all devices in the group. The map provides the following features:

* The map has functionality like drag it and zoom in/out.

* The icons representing the devices are color coded. The color used depends on the following rule:

    * At least one critical alarm: red

    * At least one major alarm: orange

    * At least one minor alarm: yellow

    * At least one warning: blue

    * No alarm: green

* When clicking on a device icon, a popup appears with the following information:

    * The device name: When clicked, the application navigates to the device.

    * The date at which the device last reported its location, if available.

    * The option to show/hide the device tracks for the previous and current days.

Parameters to configure:

* Target device or group: Select which devices are shown on the map. If a group is selected, all devices are visible.

Note: If none of the target device(s) has a known location, then the widget show a world map with no icons.

### Widget "HTML"

Show user-defined content. The content can be formatted using HTML.

The parameter to configure:

* Target device or group: Select the object for which optional HTML expressions are evaluated. 

* HTML content:

Variables that can be used inside the HTML content:

* {{devicesCount}}: Total number of devices.

* {{usersCount}}: Total number of users.

* {{deviceGroupsCount}}: Total number of groups.

* {{device.name}}: The name of device.

* {{device.*property*}}: More general form of the above. You can address any property of the device.

* {{device.c8y_Hardware.model}}: The model of the device.

* {{device.*fragment*.*property*}}: More general form of the above. You can address any property of any fragment of the device.

Additional Information:

* "Device" refers to the target device, as selected in the widget configuration parameter.

* *fragment.property* refers to the properties of the respective device. To see the available property names, you can use the "Asset property" or “Asset table” widget and click the “+ Add property” link in the widget configuration. This will show a table of supported properties. You can copy and paste the values from the column “Property”. Generated properties of these widgets are not available in the HTML widgets.

### Widget "Asset alarms"

Show all objects with a critical alarm. There are no additional parameters to configure.

### Widget "Asset count"

Shows the number of devices online and with alarms. There are no additional parameters to configure.

### Widget "Alarm list"

Show a list of alarms, filter for objects, alarm severity and alarm status.

Parameters to configure:

* Target device or group: Select groups or devices, optional HTML expressions which should be evaluated.

* Status: Show only devices with alarms of a specified alarm status.

* Type: Show only alarms of the specified type. Details can be seen when clicking once on an alarm.

* Severity: Show only alarms of the selected alarm severity.

### Widget "Recent alarms"

Show all alarms of all severity sorted by time. There are no additional parameters to configure.

### Widget "Data point list"

Show data points (measurements), one in each row, with current values and data point properties.

Parameters to configure:

* List of data points: Select one or multiple data points.

* Select visible columns:

    * Label: Label of the data point. See Data explorer for details.

    * Target: Target value. Can be configured in the data explorer or data point library.

    * Current: Current value.

    * Diff: Absolute difference between current value and target value.

    * Diff %: Percentage of difference between current value and target value.

    * Asset: Name of the device or group of the data point.

### Widget "Asset table"

Shows details of all child devices in a table. This is a very powerful widget, allowing to arrange selected properties of objects in a table.

Parameters to configure:

* Target device or group: Select for which object all child devices should be shown. This is typically a group object.

* Properties: Select properties or actions of an object to visualize them as columns in the table. In the configuration dialog, you see a list of configured columns, each  of the columns can be either a property or an action.

Example:

* In the following screenshot, five columns are configured. Three property columns "Meter", “Vendor”, and “Owner”, which refer to the properties “name”, type” and “owner”. Additionally, there are two actions, one for toggling the maintenance mode, and one to reboot the device.
![image alt text](/guides/users-guide/image_17.png)

* The resulting table is visualized as follows:
![image alt text](/guides/users-guide/image_18.png)


The list of properties can be edited as follows:

* Add new properties: Click on "+ Add Properties" and select one or more properties. The selected properties will then be added to the end of the columns.<br>
Note: The property "Active Alarm Status" shows active alarms as icons in the table. If you select this property, please also configure the renderer "Active Alarm Status" in the list of columns.

* Add a new action: Click on "+ Add Action". You can add the predefined action to toggle the maintenance mode. Or you select “Create Operation” to create a button that will execute a shell command. In the following dialog you can then enter the label for the button and the shell command to be executed.
![image alt text](/guides/users-guide/image_19.png)
Note: The dialog shows the predefined shell commands of the first device that supports shell commands. The list is empty if there is no such device. For more details please refer to [shell commands](http://www.cumulocity.com/guides/users-guide/device-management/#shell).<br>
You can also enter the JSON format for the operation that will be sent to the device. For details, please contact the device vendor for supported operations.

* Edit column header: To edit the header of the column, click on the column "Label" and edit the label.

* Arrange columns: You can rearrange the columns by dragging and dropping them using the handle before the column "Label".

* Remove properties: Click on the red icon at the end of a row to remove the column.

### Widget "Relay control"

Allows you to switch a device relay on or off. Only available for devices that support this type of operation.

### Widget "Relay array"

Given an array of relays, you can switch relays on or off independently. Only available for devices that support this type of operation.

### Widget "Message sending"

Sends a message to a device. The behavior of the device itself is device dependent. Only available for devices that support this type of operation.

## <a name="alarms"></a>Working with Alarms

Working with alarms is identical to working with alarms in Device Management. See "[Working with alarms](http://cumulocity.com//guides/users-guide/device-management/#alarm-monitoring)" in Device Management User Guide.

## <a name="reports"></a>Working with Dashboard Reports

There are two types of a report in the cockpit application. Dashboard reports enable you to track applications, alarms, assets, events and many other widgets. The second type of report is ["Exporting data with Reports"](#reporting) where you can export specific data to either csv or xlsx files.

### Browsing reports

Dashboard reports are global dashboard pages, regardless of the asset hierarchy. The navigator displays a "Reports" button. To view all existing reports, expand the Reports menu, and then see all the saved reports.

### Creating new reports

To add a new report, select the "+" button in the header and select “Create new Report”.

Fill out the fields "Name" and “Icon” in the dialog and press “Save”.

![image alt text](/guides/users-guide/image_20.png)

Then widgets can be added to the created report.

### Deleting reports

To delete a report, press the cogwheel icon and choose "Remove" report

### Adding widgets to reports

You can add widgets to the report, similar to dashboard widgets.

### View reports

To view a report, open the "Reports" in the navigator and click on the related report. The report will show.

## <a name="reporting"></a>Exporting data with reports

With the "Reporting" feature, you can request csv or xlsx reports for the whole tenant. Additionally, you can choose to *Filter* according to specific devices, time ranges or *Fields*. The reports contain information about all specified "Filters" and enabled "Fields". Maximum number of documents that can be exported into a single xlsx file is 1 million. If the number of documents for defined "Filters" exceeds the limit, the resulted document gets only first 1 million of documents.

To work with dashboard reports please refer to [Working with Dashboard Reports](#reports).

To show all reports, expand "Reports" and click on "Reporting".

If a report has been created, you can duplicate it. To do so, go to the report configuration for the desired report and click "Duplicate" at the end of its row. A new window will open where all the data in the current report will be duplicated. You can apply changes if you want. To exit, press the "Save" button.

### Adding reports

To create additional reports, click on "Add Report"

- Enter "Name" of the report.
- Choose if the file type will be either "csv" or "Excel".
- [Add Filters](#filters) to request object or time specific reports.
- [Select Fields](#fields) of the report.
- Click on the "Save" button to finish.

![Add Reports](/guides/users-guide/addreports.png)

<a name="filters"> **Filters** </a>

Reports can be filtered to particular objects or a time range. To choose the object to be exported, first navigate to the "Object to Export" search bar located under the "Filters" section. Specific devices or groups can be selected by writing their name or property value in the search bar. When you click the "Search" button cockpit will search for a matching entry in your device library. After all matching devices have been found they will be displayed under the search bar. To select a device simply click on its name and it will be highlighted in green.

![Object filter](/guides/users-guide/objectfilter.png)

Additional filters such as "Time Range" can be enabled. You have the option to filter object reports to "Last year", "Last month", "Last week" or simply enter a custom date-hour range. To select time range click on the scroll down menu and choose your desired time period. If you choose to customize the time range two small date fields will appear to select a time range.

![Time range](/guides/users-guide/timerange.png)

To enable filters you will have to click on the checkbox located under "Enabled".

<a name="fields"> **Fields** </a>

In order to process reports, different fields can be selected. For example, if you select "Alarms" and "Events" you will filter the reports only to those two fields. Overall there are four fields that you can choose from.

- Alarms
- Events
- Managed object
- Measurements

To enable a field simply click on the name of the field.

![Fields](/guides/users-guide/enabledordisabledfields.png)

When a certain field is enabled, predefined or empty properties can be added. If you choose to add empty properties click on "Add". To enter label or path click on either "Column" or "Path" located in the red row. For example, if you enable the "Alarms" field you can type "Severity" in column and path to receive report only for alarm severities.

If you have one field in Fields section that is not originated from "Add predefined" list but defined as a custom property, then it is required that at least one property must be set up for exporting for the custom values, so it will appear in the exported excel sheet. As an example, if  a report has 4 Fields defined: time, device name, type and c8y_SpeedMeasurement.speed.value, then the first 3 are predefined properties, and the last one is a custom property. If any measurement for export does not have a custom property c8y_SpeedMeasurement.speed.value, then it will not appear on the excel sheet.

If your field is a valid.key.with.dot then refer to it as ['fragment.key.with.dot'] in the path, e.g. ['fragment.key.with.dot'].serie.value

To add predefined properties click on "Add predefined".

To select predefined properties click on the respective checkbox located under "SHOW". After the desired properties have been selected click on "Select".

![Select](/guides/users-guide/select.png)

To search for a specific property efficiently, you can use the search field.

If the "Measurements" field was enabled one can also "Add from data point".

![Add from datapoint](/guides/users-guide/addfromdatapoint.png)

To choose a data point click on the checkbox. When the selection is completed, click on "Add".

The "Search field" can also be used for easier handling. Type the desired device's name or value of any property in the "Search field" and click "Submit". All matching entries are displayed.

![Add datapoint](/guides/users-guide/adddatapoint.png)

### Exporting Inventory data to csv or xlsx files

To export "Inventory data" to csv or xlsx files navigate to "Reporting" located under the "Reports" tab

- Select the desired files that you wish to export by clicking on the relevant checkbox
- Click on "Export"

![Exporting](/guides/users-guide/exportinventorydata.png)

You will receive an e-mail with the links to each file.

Standard time properties of documents (like time or creationTime in alarms) are exported

* to xlsx file in the format: 03/13/2016 00:00:24
* to csv file in the format: 2016-03-13T00:01:24.000Z

Only csv time contains miliseconds and timezone.

### Editing reports

To **edit** reports, just click on them and save the changes.

### Removing reports

To remove reports hover over the report's name and click on the "X" button.

## <a name="library"></a>Using the Data Point Library

The Data Point Library provides default values for data point properties. Data point properties are similar to "paragraph formats" in word processing applications: You do not want to format each paragraph individually. Instead you want to define a set of default formats and apply them to your paragraphs in your document. The Data Point Library provides the same functionality for data points: It provides a number of default data point formats that can be applied easily to your data points from different devices.

How does the Cockpit application use the data point library? To find the default visualisation for a data point like color or label, Cockpit searches the data point library and tries to find a matching entry. A entries is considered as "matching", if the value for fragment and series in the data point library match those of the measurement. If a matching entry is found, the corresponding data point properties are used for a default visualisation.

Additionally, the properties of data point library are used by threshold business rules: The red and yellow values configured in the data point library are used by the threshold rules to raise alarms.

When selecting "Data Point Library" in the navigator, a list of predefined data points including their properties opens.

![image alt text](/guides/users-guide/image_21.png)

When clicking on an entry, a single entry in the data point library can be edited:

![image alt text](/guides/users-guide/image_22.png)

## <a name="rules"></a>Working with Smart Rules

Cumulocity includes a rule engine to analyze data in real-time and to perform actions based on data. These rules are specified in a scripting language and are managed in the Administration Application.

To create rules, the Cockpit Application includes a Smart Rule Builder. Using the Smart Rules builder, rules can be created from templates. These rules are called smart rules. The templates are called smart rule templates.

Smart Rules are parameterized. There are two sources for parameters:

**Rule Parameter** are provided by the user when creating a smart rule from a template. Examples are email addresses and alarm texts.

**Object Parameter** are stored in the group or device. These parameters can be edited also after the smart rule was created. An example includes min and max values for thresholds.

### Creating a Smart Rule

Smart Rules can be created either under "Configuration -> Smart Rules" or under the "Info tab" of a group or a device.

* Click on "+ Add Smart Rule"

* Click on one of the Smart Rule Templates.

* In the next form, enter the rule parameters. The rule parameters differ from rule to rule, for details see individual rule descriptions below.

* Using the search field you can also activate the current Smart Rule for target devices or assets. Note that this step is optional.

* Select whether the rule will be enabled or disabled. 

* Click "CREATE".

A list of smart rules is shown below. Note that the number of smart rules shown might differ based on your installation.

![image alt text](/guides/users-guide/image_23.png)

Afterward, if the rule was set to enabled and was not activated for specific objects, the rule will be active for all devices and groups. See next section on how to deactivate a smart rule for specific objects.

Disabled Smart Rules are not displayed in group menus or device menus to avoid confusion.
Smart Rules can be instantiated multiple times.

### Activating and deactivating Smart Rules

Smart Rules can be seen under the info tab of a device or group, They must be active within this group and can also be active on child asset level.

A single Smart Rule can be activated (switched on) and deactivated (switched off) for a single object (group or device). For example, if a device is generating too many threshold alarms, you can deactivate the rule for this single object. The rule is still active for all other objects.

To deactivate or activate a Smart Rule for a group or device, simply go to the Info tab and click on the button to enable or disable the rule.  

![Info tab](/guides/users-guide/infotab.png)	

### Editing, cloning or removing Smart Rules

To edit, clone or remove a specific Smart Rule just click on the cogwheel located to the far right of the Smart Rule and click on the desired option.

For easier debugging, there is a direct link from a smart rule to a corresponding event processing module. Click on the cogwheel and then choose "Inspect". 

### Example: Defining explicit thresholds

To define a threshold rule follow these steps:

* In the asset navigator, navigate to the desired group or device to apply a threshold to.

* Click on "Data explorer".

* If your data point is not visible by default, select "Add data point" and add a data point.

* For the data point that should raise the threshold, click on the "cogwheel" icon in the end of the row and select “Create Smart Rule”.

![image alt text](/guides/users-guide/image_26.png)

* Select "On measurement exceeding threshold create alarm"

* Fill in the rule parameter:

![image alt text](/guides/users-guide/image_27.png)

* You can fill in the red range minimum and red range maximum value. When the values are outside these values, a threshold alarm will be raised.

* Under "Create Alarm" you can optionally edit the alarm type and the alarm text.

* Under "Activate for target group or devices" you can select the object this rule will be applied to.

* Click "CREATE"

After the rule has been created, it is automatically set active and alarms should appear if they arise.

### Chain rule execution

Smart Rules can create a new data item on the platform. For example, the threshold rule creates new alarms.
Those new data can be handled further by selected smart rules. For example, by an "On alarm send e-mail" rule.
Using this mechanism, it is possible to create a chain of smart rules. If you create a rule chain you must have an idea how much data will be created to avoid overload or excessive amount of data.

## <a name="business"></a>Business Rule Package

The following smart rule templates are available in our system.

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


### On alarm send E-mail

When an alarm is created, an email is sent.

The rule uses the following parameters:

![image alt text](/guides/users-guide/image_29.png)

* Alarm types: The types of the alarms triggering the rule. For each newly created alarm with one of these types in the list the rule is triggered. 

* Send to: Email addresses for sending the e-mail to. Multiple addresses can be separated by a comma (",", do not use a space!).

* Send CC to: As previously, just for e-mail "CC" field.

* Send BCC to: As previously, just for e-mail "BCC" field.

* Reply to: Address that should be used to reply to the message.

* Subject: Subject of e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.

* Text: Text of the e-mail. You can use a variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.

### Troubleshooting

* Please check the same steps as for the threshold rule above.

* Please check your spam folder.

### On alarm send SMS

When an alarm is created, an SMS is sent.

This rule is only available if your tenant has a configured SMS provider.

The rule uses the following parameters:

![image alt text](/guides/users-guide/image_30.png)

* Alarm types: The types of alarm which trigger the rule. For each newly created alarm one of these types the rule is triggered.

* Phone number: Target phone number. It is recommended to include mobile country code for all numbers, e.g. "+49" or "0049" for Germany. Multiple numbers can be separated by a comma (",", do not use a space!).

* Message: Text of SMS with max. 160 characters. You can use variable of the form #{name}. Supported variables are listed under "Smart Rule Variables" below.

### Troubleshooting 

* Please check the same steps as for the threshold rule above.

* If you use a variable there is a limit of 160 applied as a total count. If after applying the variables the text count more than 160 characters the SMS will not be sent.

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


**Note:In case the variable does not exist or is misspelled, the generated content is displayed. **