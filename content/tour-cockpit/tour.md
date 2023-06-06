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

* The Home dashboard.
* The **Groups** menu, to sort your assets and devices into different groups.
* The **Alarms** menu, to keep a pulse on your devices and access your alarms in one place.
* The **Data explorer**, to visualize the data points, and measurements or to get the sensor data access across your devices and assets.
* The **Reports** menu, to keep you informed by exporting and sharing reports on your assets and devices.
* The **Configuration** menu, to view and update your data point library and smart alarms.


Each menu contains the main screen elements described in [Quick start for users > UI functionalities and features > Main screen elements](/getting-started/gui-features/#screen) in the *Getting started* section.


### Application switcher

To navigate between the different {{< product-c8y-iot >}} applications, use the application switcher. From here you can go to device management, analytics, the cloud,  your admin center and many more applications. When you click the application switcher icon, it shows all your subscribed applications.

<img src="/images/users-guide/getting-started/getting-started-application-switcher.png" alt="Application switcher" style="max-width: 100%">


### Connecting devices

The quickest way to get started with the {{< product-c8y-iot >}} Cockpit application is with the  {{< sensor-app >}}. The {{< sensor-app >}} allows you to view and analyze, for example, your smartphone's sensor data or any other data of a device you connect.

For more information see [Sensor App](guides/sensor-app) in the *Device management* section.

### Creating a personalized device dashboard

{{< product-c8y-iot >}} allows you to create individualized dashboards for all your devices.

These dashboards give you the opportunity to:

- Visualize live data, alarms, events and trigger remote actions from your devices.
- Provide visibility of important data.
- Allow for insight in key performance indicators for your company.
- Shut of your devices remotely in case of anomalies or unwanted behavior.

{{< c8y-admon-info >}}
{{< product-c8y-iot >}} automatically creates a dashboard for each device.
{{< /c8y-admon-info >}}

To create an individualized dashboard for a device, select the desired device in the **Groups** menu. Click the plus icon on the top to open the **Add dashboard** window. here customize the information according to your needs.

{{< c8y-admon-info >}}
You can apply a dashboard to all devices of a device type, if you need more dashboards with the same information.
{{< /c8y-admon-info >}}

Once you created your dashboard you can add widgets to it in order to display more detailed data. Click **Add widget** to select the different widgets you need for your dashboard. You can customize the information shown in the widget as needed.
For more information on the different widgets see [Cockpit > Widgets collection](/guides/cockpit/widgets-collection) in the *Application development & solutions enablement* section.
Once you selected and customized the widget, click **Save** to add the widget to your dashboard. Repeat this process with any widget you need for your device.

You can reorganize and resize the different widgets in your dashboard. To resize a widget, click the bottom right corner and drag it to the desired size. To reorganize the widgets on the dashboard, click the desired widget and drag it to the desired location on the dashboard.


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

Smart rules are a useful means to analyze data in realtime and to perform actions based on data. Global smart rules apply to a global context (in contrast to local ones for specific groups or devices).

For more information on how to add, edit and work with global smart rules see [Cockpit > Smart rules](/guides/cockpit/smart-rules) in the *Application development & solutions enablement* section.
