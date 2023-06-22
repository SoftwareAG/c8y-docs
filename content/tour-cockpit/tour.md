---
weight: 10
title: Touring the Cockpit
layout: bundle
section:
  - getting_started
---


Welcome to the {{< product-c8y-iot >}} Cockpit tour. This quick tour helps you to get started with taking your first steps into the {{< product-c8y-iot >}} world.

<a name="home"></a>
### Home dashboard

When you log into your {{< product-c8y-iot >}} tenant you are greeted with the {{< product-c8y-iot >}} Cockpit Home dashboard. The Home dashboard of the Cockpit application is a dashboard which shows data for the general tenant.

![Home dashboard](/images/users-guide/cockpit/cockpit-home-screen.png)

The data shown on the Home dashboard is shared by all users of the tenant. By default, the Home dashboard includes a welcome message, the active critical alarms, recent alarms and a map of all objects.

{{< c8y-admon-info >}}
For performance reasons, the map on the Home dashboard displays icons for maximum 100 devices. If there are more devices they will not be shown in the map. To see them, you must go to the dashboard on group level, and add the "Map" widget there to only see devices from this particular group, see [Widgets collection](#widgets-collection).
{{< /c8y-admon-info >}}

You can edit and individually design the Home dashboard according to your needs, for example, by adding, removing or changing the widgets being displayed here.

For details on editing a dashboard, refer to [Working with dashboards](#dashboards).

To reset the Home dashboard to its original content, click **More...** at the right of the top menu bar and then click **Restore dashboard**.


### Navigator

The navigator on the left side is your main access to the different functionalities of the {{< product-c8y-iot >}} Cockpit. From here you can access:

* The **Home** dashboard.
* The **Groups** menu, to sort your assets and devices into different groups.
* The **Alarms** menu, to keep a pulse on your devices and access your alarms in one place.
* The **Data explorer**, to visualize data points and measurements or to get sensor data access across your devices and assets.
* The **Reports** menu, to keep you informed by exporting and sharing reports on your assets and devices.
* The **Configuration** menu, to view and update your data point library and smart alarms.


For details on all screen elements refer to [Quick start for users > UI functionalities and features > Main screen elements](/getting-started/gui-features/#screen).


### Application switcher

To navigate between the different {{< product-c8y-iot >}} applications, use the application switcher at the top right. From here you can go to the Device management application, the Administration application, and all other subscribed applications.

<img src="/images/users-guide/getting-started/getting-started-application-switcher.png" alt="Application switcher" style="max-width: 100%">


### Connecting devices

To get started with the {{< product-c8y-iot >}} Cockpit application you must first register your device. The quickest way to do so is to register a smartphone with the {{< sensor-app >}}. After you registered the smartphone, you can view and analyze your smartphone's data, for example, your sensor data or any other data of a device you connect.

For more information see [Sensor App](guides/sensor-app) in the *Device management* section.


### Creating smart rules

To create a smart rule for your device in the **Data explorer** see [Cockpit > Smart rules > To create a smart rule](/guides/cockpit/smart-rules/#create-rules) in the *Application development & solutions enablement* section.


### Adding reports

Reports enable you to track applications, alarms, assets, and other data by using a set of widgets in a dashboard layout. Widgets can display maps, images, graphs, tables and other graphic representations of data. In contrast to dashboards, reports show global data, regardless of the asset hierarchy.

To create a report for your device in the **Reports** menu, see [Cockpit > Working with reports > To create a report](/guides/cockpit/reports/#create-report) in the *Application development & solutions enablement* section.

### Configuring the Cockpit application

The **Configuration** menu contains the following menus:

* **Exports**
* **Data point library**
* **Global smart rules**

#### Exports

The export functionality lets you export specific data to files. In each export, you can specify the output file type (Excel or CSV), schedule the export and specify the target email address(es), and optionally select filters for specific devices, time ranges or fields.

To add an export to your dashboard follow the steps described in [Cockpit > Managing exports > To add an export](/guides/cockpit/exports/#add-export) in the *Application development & solutions enablement* section.

#### Data point library

The data point library provides a collection of data points with default values for data point properties, which serve as templates that can be easily applied to your data points from different devices.

In order to add a new data point template, see [Cockpit > Data point library > To add a data point to the library](/guides/cockpit/data-point-library/) in the *Application development & solutions enablement* section for more information.

#### Global smart rules

Smart rules are a useful means to analyze data in realtime and to perform actions based on said data. Global smart rules apply to a global context (in contrast to local ones for specific groups or devices).

For more information on how to add, edit and work with global smart rules see [Cockpit > Smart rules](/guides/cockpit/smart-rules) in the *Application development & solutions enablement* section.
