---
weight: 10
title: Overview
layout: redirect
---

The following sections will walk you through all functionalities of the Cockpit application in detail.

For your convenience find an overview on the content of this document below.

|Section|Content|
|:---|:---|
|[Managing assets](#managing-assets)|Organize assets in [hierarchies](#hierarchies) by [creating groups](#creating-groups) and [assigning devices](#assigning-devices).
|[Visualizing data using the Data Explorer](#data-explorer)|Interactively explore, compare and visualize IoT data. <br> Describes how to access and use the [data explorer](#data-explorer), [add data points](#add-data-points) to the data explorer, [customize data point properties](#customize-data-points), [modify the visualization](#change-visualization), store the [data explorer as widget](#create-widget), and [export](#export-data) the data.
|[Working with dashboards](#dashboards)|[Create your own analytics and monitor pages](#creating-dashboards) by adding and arranging [widgets](#adding-widgets). [Share dashboards](#sharing-dashboards) among all devices of the same type.
|[Widgets collection](#widgets)|Use various types of [widgets](#widgets) from the Widgets collection that comes with Cumulocity and configure them according your needs.
|[Working with alarms](/users-guide/device-management/#alarm-monitoring)|Monitor problems of your assets using severities and workflows. Since working with alarms in the Cockpit application is actually the same as working with alarms in Device Management, refer to [Working with alarms](/users-guide/device-management/#alarm-monitoring) in Device Management.
|[Managing reports](#reports)|Handle [reports](#reports) based on dashboard layouts, create [reports for exporting data](#reports) in CSV or excel format and [schedule the export](#schedule-export). 
|[Using the Data Point Library](#data-point-library)|Manage default settings ("profiles") of your devices and apply them automatically using the [Data Point Library](#data-point-library).
|[Working with Smart Rules](#smart-rules)|[Create and manage business rules](#create-rules) to work on incoming data in realtime and to perform actions based on this data.
|[Smart Rules collection](#smart-rules-collection)|Use pre-defined [global Smart Rules](#smart-rules-collection) to configure rules for geofencing, thresholds or alarm escalation and notifications (SMS/email/voice). Describes each SmartRule and its configurable parameters in detail.


If you want to learn more about general aspects of the Cumulocity platform and its applications, refer to [Getting Started](/users-guide/overview).

### <a name="home"></a>Home dashboard

The Home screen of the Cockpit application is a dashboard which shows data for the general tenant.

![image alt text](/images/users-guide/cockpit/cockpit-home-screen.png)

The data shown on the Home dashboard is shared by all users of the tenant. By default, the Home dashboard includes a welcome message, the active critical alarms, recent alarms and a map of all objects.

The Home dashboard can be edited and designed individually according to your needs. You can add, remove or change widgets being displayed here.

For details on editing a dashboard, refer to [Working with dashboards](#dashboards).

To reset the Home dashboard to its original content, click **More...** at the right of the top menu bar and then click **Restore dashboard**.
