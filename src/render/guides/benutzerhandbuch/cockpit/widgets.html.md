---
order: 50
title: Widgets-Sammlung
layout: redirect
---

Das Cockpit enthält voreingestellte Widget-Typen. Jeder Widget-Typ ermöglicht es, verschiedene Parameter zu konfigurieren und verschiedene Daten anzuzeigen. Im folgenden Abschnitt werden, in alphabetischer Reihenfolge, alle verfügbaren Widget-Typen und ihre Konfigurationsparameter beschrieben.


### Widget "Alarmliste"

Das Widget "Alarmliste" zeigt eine Liste von Alarmen, gefiltert nach Objekten, Alarmschweregrad und Alarmstatus. 

Nähere Informationen zu Alarmen finden Sie unter [Verwenden von Alarmen](/guides/benutzerhandbuch/device-management/#alarm-monitoring) im Abschnitt Device Management.

**Konfigurierbare Parameter**

<img src="/guides/images/benutzerhandbuch/cockpit/Cockpit_CreateAlarmList.png" name="Create Alarm list widget" style="width:75%;"/>

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets oder -geräte|Gruppen oder Geräte, optional HTML-Ausdrücke, die ausgewertet werden.
|Status|Alarmstatus, der angezeigt wird.
|Typ|Alarmtyp, der angezeigt wird. Klicken Sie auf einen Alarm, um Details anzuzeigen.
|Schweregrad|Alarmschweregrad, die angezeigt werden.
|Reihenfolge|Alarme können nach dem aktiven Status (gefolgt von Schweregrad und Zeit, Standardeinstellung) oder dem Schweregrad (gefolgt von der Zeit) sortiert werden.

### Widget "Alle kritischen Alarme"

Das Widget "Alle kritischen Alarme" zeigt alle Objekte mit einem kritischen Alarm. Es können keinen zusätzlichen Parameter konfiguriert werden.  

Nähere Informationen zu Alarmen finden Sie unter [Verwenden von Alarmen](/guides/benutzerhandbuch/device-management/#alarm-monitoring) im Abschnitt Device Management.


### Widget "Anwendungen"

Das Widget "Anwendungen" zeigt alle Liste mit Links zu allen verfügbaren Anwendungen. Es können keinen zusätzlichen Parameter konfiguriert werden. 

Nähere Informationen zu Anwendungen finden Sie unter [Administration > Verwalten von Anwendungen](/guides/benutzerhandbuch/administration#managing-applications).


### Widget "Asset-Nachrichten"

Das Widget "Asset-Nachrichten" zeigt Benachrichtigungen, die allen Besitzern des aktuellen Objekts vom Administrator bereitgestellt werden. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_AssetNotes.png" name="Asset notes widget" style="width:75%;"/>

Nur Benutzer, die die Berechtigung haben, das Start-Dashboard zu bearbeiten, können solche Benachrichtigungen bereitstellen.


### Widget "Asset-Attribute"

Das Widget "Asset-Attribute" zeigt eine benutzerdefinierte Liste von Attributen des aktuellen Objekts. Das aktuelle Objekt kann ein Gerät oder eine Gruppe sein.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets oder -geräte|Gruppen oder Geräte, die ausgewertet werden.
|Attribute|Liste von Attributen, siehe [Widget "Asset-Tabelle"](#widget-asset-table).

>**Info:** Im Ansichtsmodus zeigt diese Widget nur Attribute an, die nicht leer sind.

### <a name="widget-asset-table"></a> Widget "Asset-Tabelle"

Das Widget "Asset-Tabelle" zeigt eine Tabelle mit Details zu den Kindgeräten an. Dies ist ein sehr mächtiges Widget, dass es ermöglicht, ausgewählte Attribute von Objekten in einer Tabelle zu arrangieren. 

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets und -geräte|Objekte, für die die Kindgeräte angezeigt werden. Dies ist üblicherweise ein Gruppenobjekt.
|Attribute|Attribute oder Aktionen eines Objekts, die als Spalten in der Tabelle visualisiert werden. 

**Beispiel**

In the following screenshot, five columns are configured. Three property columns "Meter", “Vendor”, and “Owner”, which refer to the properties “name”, type” and “owner” respectively. Additionally, there are two actions, one for toggling the maintenance mode, and one for rebooting the device.

![image alt text](/guides/images/users-guide/image_17.png)

The resulting table is visualized as follows:
![image alt text](/guides/images/users-guide/image_18.png)

**Adding properties**

To add a property, click **+Add Properties** and select one or more properties to be added. 

**Info**: The property "Active alarm status" shows active alarms as icons in the table. If you select this property, you also need to configure the renderer "Active Alarm Status" in the list of columns.

**Adding actions**

To add an action, click **+Add Action**. Select **Toggle maintenance mode** to add the predefined action to toggle the maintenance mode. Or select **Create operation** to create a button that will execute a shell command. In the following dialog you can then enter the label for the button and the shell command to be executed.

![image alt text](/guides/images/users-guide/image_19.png)

>**Info:** The dialog shows the predefined shell commands of the first device that supports shell commands. The list is empty if there is no such device. For more details, refer to [shell commands](/guides/users-guide/device-management/#shell).<br>
You can also enter the JSON format for the operation that will be sent to the device. For details, contact the device vendor for supported operations.

**Modifying the table**

To edit the header of a column, click on its value in the "Label" column and edit the label.

You can rearrange the columns by clicking the icon at the very left of a row and dragging and dropping the entry.

To remove a property or an action, hover over the respective row and click **Delete** at the right.

### Widget "Cockpit welcome"

The "Cockpit welcome" lets you display a welcome message to the Welcome screen. There are no additional parameters to be configured.

### Widget "Data point graph"

The "Data point graph" widget shows a data point (measurement) in a graph. The visualization is the same as in the [data explorer](#visualize).

<img src="/guides/images/users-guide/Cockpit/Cockpit_DataPointsGraphWidget.png" name="Data Point Graph widget" style="width:75%;"/>

The easiest way to create a "Data point graph" widget is to navigate to the data explorer, click the **More...** button in the top menu bar and select **Send as widget to dashboard**.

Refer to [Visualizing data using the data explorer](#visualize) for further details on the parameters to be configured.

### Widget "Data point list"

The "Data point list" widget shows data points (measurements), one in each row, with current values and data point properties.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Data point|Shows a list of available data points. You must enable at least one data point. Click **Add data point** to add a data point to the list. For details on how to add data points see [Adding data points](#add-data-points).
|Column visibility|Select which columns should be visible: <br>Label: Label of the data point. See [Visualizing data using the data explorer](#visualize) for details. <br>Target: Target value. Can be configured in the [data explorer](#visualize) or [Data Point Library](#library).<br>Current: Current value. <br>Diff: Absolute difference between current value and target value. <br>Diff %: Percentage of difference between current value and target value. <br>Asset: Name of the device or group of the data point. 

### Widget "Data point table"

The "Data point table" widget configuration is similar to the "Data point graph" widget, but instead of visualizing the data as a line-chart, data is visualized as a table.

The "Data point table" widget displays data based on selected data points, time interval and aggregation.

Out of range values, based on configured yellow and red ranges, are highlighted in the table.

![Data point table](/guides/images/users-guide/datapointtable.png)

### Widget "Event list"

The "Event list" widget lets you monitor events for a selected device. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_EventList.png" name="Event list widget" style="width:75%;"/>

Additionally, a specific date range can be set and the events can be monitored in realtime. 

### Widget "Fieldbus device"

The "Fieldbus device" widget lets you see the status of a modbus device and operate it.

For details on the "Fieldbus device" widget, refer to [Optional Services > Cloud Fieldbus > Monitoring device status using the Fieldbus device widget](/guides/users-guide/optional-services/cloud-fieldbus#fieldbus-device-widget).

### Widget "Help and service"

The "Help and service" widget displays links to help and service resources. There are no additional parameters to be configured.

<img src="/guides/images/users-guide/Cockpit/Cockpit_HelpAndServiceWidget.png" name="Help and service widget" style="width:75%;"/>

### Widget "Image"

The "Image" widget lets you display a single image to be selected from your computer by browsing. There are no additional parameters to be configured.

### Widget "Info Gauge"

The "Info gauge" widget visualizes one data point in form of a radial gauge and multiple data points as labels. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_InfoGauge.png" name="Info gauge widget" style="width:75%;"/>

You can select one data point for the gauge, and multiple data points shown with labels on the left side.

<img src="/guides/images/users-guide/Cockpit/Cockpit_InfoGaugeDataPoints.png" name="Info gauge data points" style="width:75%;"/>

You must enable at least one data point in each section to create the "Info gauge" widget.


### Widget "HTML"

The "HTML" widget shows user-defined content. The content can be formatted using HTML.

**Konfigurierbare Parameter**

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

<img src="/guides/images/users-guide/Cockpit/Cockpit_LinearGauge.png" name="Linear gauge widget" style="width:75%;"/>

>**Info:** If a label is not properly readable, you can help yourself by increasing the min and max value of the data point to move the label into the readable range.

You must enable at least one data point to create the "Linear gauge" widget.
 

### Widget "Map"

The "Map" widget shows the location of a device or all devices of a group. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_MapWidget.png" name="Map widget" style="width:75%;"/>

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

**Konfigurierbare Parameter**

Target assets or devices: Select which devices are shown on the map. If a group is selected, all devices in that group (but not in any subgroups) are visible.

>**Info**: If none of the target device(s) has a known location, then the widget shows a world map without icons.

### Widget "Message sending"

The "Message sending" widget sends a message to a device. The behavior of the device itself is device-dependent. Only available for devices that support this type of operation.

### Widget "Pie chart"

The "Pie chart" widget displays data points (measurements) with current values in a pie chart presentation.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Pie chart options|Select from the options to show tooltips, percentages, legends in the pie chart. 
|Data point|Shows a list of available data points. You must enable at least one data point. Click **Add data point** to add a data point to the list. For details on how to add data points see [Adding data points](#add-data-points).


### Widget "Quick links"

The "Quick links" widget displays several quick links to relevant operations. There are no additional parameters to be configured.

<img src="/guides/images/users-guide/Cockpit/Cockpit_QuickLinksWidget.png" name="Quick links widget" style="width:75%;"/>

### Widget "Radial Gauge"

The "Radial gauge" widget visualizes data points in form of a radial gauge. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_RadialGauge.png" name="Radial gauge widget" style="width:75%;"/>

You must enable at least one data point to create the "Radial gauge" widget.


### Widget "Recent alarms"

The "Recent alarms" widget shows all alarms of all severity sorted by time. There are no additional parameters to be configured.

<img src="/guides/images/users-guide/Cockpit/Cockpit_CreateAlarmList.png" name="Alarm list widget" style="width:75%;"/>

For details on alarms, refer to [Device Management > Working with alarms](/guides/users-guide/device-management/#alarm-monitoring).

### Widget "Relay array control"

The "Relay array control" widget lets you switch relays on or off independently in an array of relays. Only available for devices that support this type of operation.

### Widget "Relay control"

The "Relay control" widget allows you to switch a device relay on or off. Only available for devices that support this type of operation.

### Widget "Rotation"

The "Rotation" widget lets you render an object model of a device.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Target assets or devices|Select group or device to be displayed.
|Object model for rendering|Select an object model type for rendering. May be one of "Box model" or "Phone model".
|Wireframe|Turn "Wireframe" on or off (default = on). The "wireframe" mode displays the object in a skeletal representation.
|Camera type|Select the type of camera to be used. May be one of "Orthographic camera" or "Perspective camera".

In the "Rotation" widget you can rotate the object by dragging and moving it around. Zoom in and out by using the mouse.

### Widget "SCADA"

The "SCADA" widget provides a graphic representation of the status of a device.

For details on the "SCADA" widget, refer to [Optional Services > Cloud Fieldbus > Monitoring status using the SCADA widget](/guides/users-guide/cloud-fieldbus#scada-widget).

### Widget "Silo"

The "Silo" widget displays data points (measurements) with current values in a silo presentation.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Data point|Shows a list of available data points. You must enable at least one data point. Click **Add data point** to add a data point to the list. For details on how to add data points see [Adding data points](#add-data-points).

### Widget "Traffic light"

The "Traffic light" widget visualizes the states of a device as traffic light.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Target assets or devices|Select group or device to be displayed.
|States mapping|Select a property for each light. The value of the property has to be one of the following to have the respective light on: true, 1, any non-empty string, any non-null number.

### Widget "Twitter News"

The "Twitter news" widget displays tweets from Twitter's embedded timeline widget.

<img src="/guides/images/users-guide/Cockpit/Cockpit_TwitterNewsWidget.png" name="Twitter news widget" style="width:50%;"/>

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Twitter's username|User name for the Twitter account being displayed.
|Twitter's widget ID|ID for the Twitter widget. You can obtain the ID from widgets settings.
|Options|Select if you want to display a header, footer, borders or transparency.

