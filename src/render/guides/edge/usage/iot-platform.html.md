---
order: 10
title: IoT platform
layout: redirect
---

Cumulocity Edge comes with three built-in applications - Device Management, Cockpit and Application. 

Since Cumulocity Edge is based on the same software as the cloud-based Cumulocity IoT Core version, the above applications are the same in both versions, with minor restrictions. 

Below find an overview on the functionalities of these applications in Cumulocity Edge. 

Foe general information on functionalities and features of the GUI refer to [GUI functionalities and features](/guides/users-guide/overview/gui-features).

For information on how to change the user settings of your account refer to [User settings](/guides/users-guide/overview/user-settings).

### Device Management

The [Device Management application](/guides/users-guide/device-management) provides functionalities for managing and monitoring devices and enables you to control and troubleshoot devices remotely.

The following functionalities are available in Cumulocity Edge and described in detail in these sections:

|SECTION|CONTENT|
|:---|:---|
|[Connecting devices](/guides/users-guide/device-management#device-registration)|How to [register one or more devices manually](/guides/users-guide/device-management#device-registration-manually) and how to [bulk-register devices](/guides/users-guide/device-management#creds-upload) in order to connect devices to your account.
|[Viewing devices](/guides/users-guide/device-management#viewing-devices)|What is displayed in the [device list](/guides/users-guide/device-management#device-list) and how to sort devices by [searching for devices](/guides/users-guide/device-management#searching-devices) and [filtering devices](/guides/users-guide/device-management#filtering-devices).
|[Grouping devices](/guides/users-guide/device-management#grouping-devices)|Why and how to group devices into top-level groups, subgroups and [smart groups](/guides/users-guide/device-management#smart-groups).
|[Device details](/guides/users-guide/device-management#device-details)|Detailed description of the various kind of  information available for various types of  devices.
|[Monitoring and controlling devices](/guides/users-guide/device-management#monitoring-and-controlling-devices)|How to monitor the [connection quality](/guides/users-guide/device-management#connection-monitoring) and [service status](/guides/users-guide/device-management#monitoring-services) of devices, how to handle [alarms](/guides/users-guide/device-management#alarm-monitoring) from devices, how to [remote control](/guides/users-guide/device-management#operation-monitoring) and how to [troubleshoot](/guides/users-guide/device-management#events-all) devices.
|[Managing device types](/guides/users-guide/device-management#managing-device-types)|How to process data from various device types by using [device protocols](/guides/users-guide/device-management#managing-device-types). 
|[Managing device data](/guides/users-guide/device-management#managing-device-data)|How to retrieve and manage [firmware and software](/guides/users-guide/device-management#software-repo) for devices and how to handle [configuration snapshots](/guides/users-guide/device-management#configuration-repository). 
|[Using SmartREST templates](/guides/users-guide/device-management#smartrest-templates)|How to work with [SmartREST  templates](/guides/users-guide/device-management#smartrest-templates), a collection of request and response templates used to convert CSV data and Cumulocity Rest API calls.

### Cockpit

The [Cockpit application](/guides/users-guide/cockpit) provides you with options to manage and monitor  Internet of Things (IoT) assets and data from a business perspective.

The following functionalities are available in Cumulocity Edge and described in detail in these sections:

|Section|Content|
|:---|:---|
|[Managing assets](/guides/users-guide/cockpit#managing-assets)|Organize assets in [hierarchies](/guides/users-guide/cockpit#hierarchies) by [creating groups](/guides/users-guide/cockpit#creating-groups) and [assigning devices](/guides/users-guide/cockpit#assigning-devices).
|[Visualizing data using the Data Explorer](/guides/users-guide/cockpit#data-explorer)|Interactively explore, compare and visualize IoT data. <br> Describes how to access and use the [data explorer](/guides/users-guide/cockpit#data-explorer), [add data points](/guides/users-guide/cockpit#add-data-points) to the data explorer, [customize data point properties](/guides/users-guide/cockpit#customize-data-points), [modify the visualization](/guides/users-guide/cockpit#change-visualization), store the [data explorer as widget](/guides/users-guide/cockpit#create-widget), and [export](/guides/users-guide/cockpit#export-data) the data. 
|[Working with dashboards](/guides/users-guide/cockpit#dashboards)|[Create your own analytics and monitor pages](/guides/users-guide/cockpit#creating-dashboards) by adding and arranging [widgets](/guides/users-guide/cockpit#adding-widgets). [Share dashboards](/guides/users-guide/cockpit#sharing-dashboards) among all devices of the same type. 
|[Widgets collection](/guides/users-guide/cockpit#widgets)|Use various types of [widgets](/guides/users-guide/cockpit#widgets) from the Widgets collection that comes with Cumulocity and configure them according your needs.
|[Working with alarms](/guides/users-guide/device-management/#alarm-monitoring)|Monitor problems of your assets using severities and workflows. Since working with alarms in the Cockpit application is actually the same as working with alarms in Device Management, refer to [Working with alarms](/guides/users-guide/device-management/#alarm-monitoring) in Device Management. 
|[Managing reports](/guides/users-guide/cockpit#reports)|Handle [reports](/guides/users-guide/cockpit#reports) based on dashboard layouts, create [reports for exporting data](/guides/users-guide/cockpit#reporting) in CSV or excel format and [schedule the export](/guides/users-guide/cockpit#schedule-export). 
|[Using the Data Point Library](/guides/users-guide/cockpit#data-point-library)|Manage default settings ("profiles") of your devices and apply them automatically using the [Data Point Library](/guides/users-guide/cockpit#data-point-library).
|[Working with Smart Rules](/guides/users-guide/cockpit#smart-rules)|[Create and manage business rules](/guides/users-guide/cockpit#create-rules) to work on incoming data in realtime and to perform actions based on this data.
|[Smart Rules collection](/guides/users-guide/cockpit#smart-rules-collection)|Use pre-defined [global Smart Rules](/guides/users-guide/cockpit#smart-rules-collection) to configure rules for geofencing, thresholds or alarm escalation and notifications (SMS/email/voice). Describes each SmartRule and its configurable parameters in detail.

### Administration

The [Administration application](/guides/users-guide/administration) enables account administrators to manage their users, roles, tenants and applications and lets them configure a number of settings for their account. 

The following functionalities are available in Cumulocity Edge and described in detail in these sections:

|SECTION|CONTENT|
|:---|:---|
|[Home Screen](/guides/users-guide/administration#home-screen)|Providing information on your [capacity usage and subscribed applications](/guides/users-guide/administration#home-screen).
|[Managing Users](/guides/users-guide/administration#managing-users)|How to [create users](/guides/users-guide/administration#creating-users), edit, disable or delete them.
|[Managing Permissions](/guides/users-guide/administration#managing-permissions)|How to create and edit [global roles](/guides/users-guide/administration#global) and [inventory roles](/guides/users-guide/administration#inventory), how to assign them to users, and how to [grant application access](/guides/users-guide/administration#app-access).
|[Managing own applications](/guides/users-guide/administration#managing-applications)|How to manage and [configure own applications](/guides/users-guide/administration#managing-applications) in your Cumulocity account.
|[Changing settings](/guides/users-guide/administration#changing-settings)|How to change account settings like [application settings](/guides/users-guide/administration#default-app) or [password policy settings](/guides/users-guide/administration#changing-password-settings) and how to manage the [properties library](/guides/users-guide/administration#properties).
|[Managing data retention](/guides/users-guide/administration#retention-rules)|How to manage and configure [retention rules](/guides/users-guide/administration#retention-rules) for your data and how to [manage stored files](/guides/users-guide/administration#files) in the file repository.

