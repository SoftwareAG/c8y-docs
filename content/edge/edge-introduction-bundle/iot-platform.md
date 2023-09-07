---
weight: 40
title: Edge functionalities
layout: bundle
section:
  - edge_server
---

Since {{< product-c8y-iot >}} Edge is based on the same software as the cloud-based {{< product-c8y-iot >}} platform version, the included applications are the same in both versions, with minor restrictions.

For general information about functionalities and features of {{< product-c8y-iot >}} platform, see [{{< product-c8y-iot >}} platform](/welcome/intro-documentation/).

Below you can find the links to the most common functionalities of {{< product-c8y-iot >}}.

### Device Management {#device-management}

The [Device Management application](/users-guide/device-management) provides functionalities for managing and monitoring devices and enables you to control and troubleshoot devices remotely.

The following functionalities are available in {{< product-c8y-iot >}} Edge and described in detail in these sections:

|SECTION|CONTENT|
|:---|:---|
|[Connecting devices](/users-guide/device-management/#connecting-devices)|How to [register one or more devices manually](/users-guide/device-management#device-registration-manually) and how to [bulk-register devices](/users-guide/device-management#creds-upload) in order to connect devices to your account.
|[Viewing devices](/users-guide/device-management#viewing-devices)|What is displayed in the [device list](/users-guide/device-management#device-list) and how to sort devices by [filtering devices](/users-guide/device-management#filtering-devices).
|[Grouping devices](/users-guide/device-management#grouping-devices)|Why and how to group devices into top-level groups, subgroups and [smart groups](/users-guide/device-management#smart-groups).
|[Device details](/users-guide/device-management#device-details)|Detailed description of the various kind of  information available for various types of  devices.
|[Monitoring and controlling devices](/users-guide/device-management#monitoring-and-controlling-devices)|How to monitor the [connection quality](/users-guide/device-management#connection-monitoring) and [availability status](/users-guide/device-management#monitoring-availability) of devices, how to handle [alarms](/users-guide/device-management#alarm-monitoring) from devices, how to [remote control](/users-guide/device-management#operation-monitoring) and how to [troubleshoot](/users-guide/device-management#events-all) devices.
|[Managing device types](/users-guide/device-management#managing-device-types)|How to process data from various device types by using [device protocols](/users-guide/device-management#managing-device-types).
|[Managing device data](/users-guide/device-management/#managing-device-data)|How to retrieve and manage [firmware](/users-guide/device-management/#firmware-repo) and [software](/users-guide/device-management/#software-repo) for devices; how to retrieve configuration data and store and manage it in a [configuration repository](#configuration-repository) as configuration snapshots.
|[Using SmartREST templates](/users-guide/device-management#smartrest-templates)|How to work with [SmartREST  templates](/users-guide/device-management#smartrest-templates), a collection of request and response templates used to convert CSV data and {{< product-c8y-iot >}} Rest API calls.

### Cockpit {#cockpit}

The [Cockpit application](/users-guide/cockpit) provides you with options to manage and monitor  Internet of Things (IoT) assets and data from a business perspective.

The following functionalities are available in {{< product-c8y-iot >}} Edge and described in detail in these sections:

|Section|Content|
|:---|:---|
|[Managing assets](/users-guide/cockpit#managing-assets)|Organize assets in [hierarchies](/users-guide/cockpit#hierarchies) by [creating groups](/users-guide/cockpit#creating-groups) and [assigning devices](/users-guide/cockpit#assigning-devices).
|[Visualizing data using the Data Explorer](/users-guide/cockpit#data-explorer)|Interactively explore, compare and visualize IoT data. <br> Describes how to access and use the [data explorer](/users-guide/cockpit#data-explorer), [add data points](/users-guide/cockpit#add-data-points) to the data explorer, [customize data point properties](/users-guide/cockpit#customize-data-points), [modify the visualization](/users-guide/cockpit#change-visualization), store the [data explorer as widget](/users-guide/cockpit#create-widget), and [export](/users-guide/cockpit#export-data) the data.
|[Working with dashboards](/users-guide/cockpit#dashboards)|[Create your own analytics and monitor pages](/users-guide/cockpit#creating-dashboards) by adding and arranging [widgets](/users-guide/cockpit#adding-widgets). [Share dashboards](/users-guide/cockpit#sharing-dashboards) among all devices of the same type.
|[Widgets collection](/users-guide/cockpit#widgets)|Use various types of [widgets](/users-guide/cockpit#widgets) from the Widgets collection that comes with {{< product-c8y-iot >}} Edge and configure them according your needs.
|[Working with alarms](/users-guide/device-management/#alarm-monitoring)|Monitor problems of your assets using severities and workflows. Since working with alarms in the Cockpit application is actually the same as working with alarms in Device Management, refer to [Working with alarms](/users-guide/device-management/#alarm-monitoring) in Device Management.
|[Managing reports](/users-guide/cockpit#reports)|Handle [reports](/users-guide/cockpit#reports) based on dashboard layouts, create [reports for exporting data](/users-guide/cockpit#reporting) in CSV or excel format and [schedule the export](/users-guide/cockpit#schedule-export).
|[Using the Data Point Library](/users-guide/cockpit#data-point-library)|Manage default settings ("profiles") of your devices and apply them automatically using the [Data Point Library](/users-guide/cockpit#data-point-library).
|[Working with Smart Rules](/users-guide/cockpit#smart-rules)|[Create and manage business rules](/users-guide/cockpit#create-rules) to work on incoming data in realtime and to perform actions based on this data.
|[Smart Rules collection](/users-guide/cockpit#smart-rules-collection)|Use pre-defined [global Smart Rules](/users-guide/cockpit#smart-rules-collection) to configure rules for geofencing, thresholds or alarm escalation and notifications (SMS/email). Describes each smart rule and its configurable parameters in detail.

### Administration {#administration}

The [Administration application](/users-guide/administration) enables account administrators to manage their users, roles, tenants and applications and lets them configure a number of settings for their account.

The following functionalities are available in {{< product-c8y-iot >}} Edge and described in detail in these sections:

|SECTION|CONTENT|
|:---|:---|
|[Configuring {{< product-c8y-iot >}} Edge](/edge/configuration/)|Providing information on Edge specific configuration options.
|[Home Screen](/users-guide/administration#home-screen)|Providing information on your [capacity usage and subscribed applications](/users-guide/administration#home-screen).
|[Managing Users](/users-guide/administration#managing-users)|How to [create users](/users-guide/administration#creating-users), edit, disable or delete them.
|[Managing Permissions](/users-guide/administration#managing-permissions)|How to create and edit [global roles](/users-guide/administration#global) and [inventory roles](/users-guide/administration#inventory), how to assign them to users, and how to [grant application access](/users-guide/administration#app-access).
|[Managing own applications](/users-guide/administration#managing-applications)|How to manage and [configure own applications](/users-guide/administration#managing-applications) in your {{< product-c8y-iot >}}  Edge account.
|[Changing settings](/users-guide/administration#changing-settings)|How to change account settings like [application settings](/users-guide/administration#default-app) or [password policy settings](/users-guide/administration#changing-password-settings) and how to manage the [properties library](/users-guide/administration#properties).
|[Managing data retention](/users-guide/administration#retention-rules)|How to manage and configure [retention rules](/users-guide/administration#retention-rules) for your data and how to [manage stored files](/users-guide/administration#files) in the file repository.
