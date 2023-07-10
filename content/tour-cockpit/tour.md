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

It shows a number of pre-installed widgets that give you an introduction to the different options how to individualize your home dashboard.

At the top you see the **Welcome to Cockpit** widget, which works as an entryway to the most important functions of the {{< product-c8y-iot >}} Cockpit, such as connecting and registering devices, adding groups, reports and exports as well as smart rules.

Below this widget you find a number of other widgets like the **Map** widget or an **Alarms** widget.

All widgets can be changed to fit your needs. For more information on the different widgets available see the [Widgets collection](/guides/cockpit/widgets-collection).


In the top right of the Home dashboard, you see a number of different buttons. Here you can add a widget or edit the existing widgets. Furthermore, you can expand the screen to full view using the **Full screen** icon.
The **Lock/Unlock** toggle allows you to lock the dashboard. Locking the dashboard stops the user from editing the individual widgets displayed in the Cockpit. To lock the dashboard, click the toggle. You see a notification at the top right confirming the action. To unlock the dashboard once more, click the toggle again.

If you want to undo any changes to your Home dashboard, use the **Reset dashboard** icon. This reverts all changes to the dashboard and returns it to the initial state.

At the very top right you can find additional information about working with dashboards. Click the question mark icon to display the **Working with Dashboards** dialog window.


### Navigator

The navigator on the left side is your main access to the different functionalities of the {{< product-c8y-iot >}} Cockpit. From here you can access:

* The **Home** dashboard.
* The **Groups** menu, to sort your assets and devices into different groups.
* The **Alarms** menu, to keep a pulse on your devices and access your alarms in one place.
* The **Data explorer**, to visualize data points and measurements or to get sensor data access across your devices and assets.
* The **Reports** menu, to keep you informed by exporting and sharing reports on your assets and devices.
* The **Configuration** menu, to view and update your data point library and smart alarms.


For details on all screen elements refer to [Quick start for users > UI functionalities and features > Main screen elements](/getting-started/gui-features/#screen).


### Configuring the Cockpit

You can configure the {{< product-c8y-iot >}} Cockpit application according to your individual needs.

This includes (among others):

* The home dashboard
* **Exports**
* **Data point library**
* **Global smart rules**

For more information on configuring these parts, see [Configuring Cockpit application > ](/guides/cockpit/cp-configuration/#config-cockpit)


### Application switcher

To navigate between the different {{< product-c8y-iot >}} applications, use the application switcher at the top right. From here you can go to the Device management application, the Administration application, and all other subscribed applications.

<img src="/images/users-guide/getting-started/getting-started-application-switcher.png" alt="Application switcher" style="max-width: 100%">


### Connecting devices

To get started with the {{< product-c8y-iot >}} Cockpit application you must first register your device. The quickest way to do so is to register a smartphone with the {{< sensor-app >}}. After you registered the smartphone, you can view and analyze your smartphone's data, for example, your sensor data or any other data of a device you connect.

For more information see [Sensor App](guides/sensor-app) in the *Device management* section.


### Creating smart rules

Smart rules enable you to define and automate actions based on real-time data and events. It allows you to create logical conditions and triggers that activate specific actions or workflows when certain events or conditions occur.

They are used to monitor, analyze, and respond to data coming from various devices connected to the platform. They provide a way to implement business logic and automate processes without requiring manual intervention.

To create a smart rule for your device in the **Data explorer** see [Cockpit > Smart rules > To create a smart rule](/guides/cockpit/smart-rules/#create-rules) in the *Application development & solutions enablement* section.


### Adding reports

Reports enable you to track applications, alarms, assets, and other data by using a set of widgets in a dashboard layout. Widgets can display maps, images, graphs, tables and other graphic representations of data. In contrast to dashboards, reports show global data, regardless of the asset hierarchy.

To create a report for your device in the **Reports** menu, see [Cockpit > Working with reports > To create a report](/guides/cockpit/reports/#create-report) in the *Application development & solutions enablement* section.
