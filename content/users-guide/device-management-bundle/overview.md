---
weight: 10
title: Overview
layout: redirect
---

The following sections will walk you through all functionalities of the Device management application in detail. For your convenience find an overview on the content of this document below.

|SECTION|CONTENT|
|:---|:---|
|[Connecting devices](#connecting-devices)|How to [register one or more devices manually](#device-registration-manually) and how to [bulk-register devices](#bulk-registration) in order to connect devices to your account.
|[Viewing devices](#viewing-devices)|What is displayed in the [device list](#device-list) and how to sort devices by [filtering devices](#filtering-devices).
|[Grouping devices](#grouping-devices)|Why and how to group devices into top-level groups, subgroups and [smart groups](#smart-groups).
|[Device details](#device-details)|Detailed description of the various kind of  information available for various types of  devices.
|[Monitoring and controlling devices](#monitoring-and-controlling-devices)|How to monitor the [connection quality](#connection-monitoring) and [availability status](#monitoring-availability) of devices, how to handle [alarms](#alarm-monitoring) from devices, how to [remote control](#operation-monitoring) and how to [troubleshoot](#events-all) devices.
|[Monitoring device services](#monitoring-device-services)|Description of the different kinds of data available for the purpose of device service monitoring.
|[Managing device types](#managing-device-types)|How to process data from various device types by using [device protocols](#managing-device-types).
|[Managing device data](#managing-device-data)|How to manage [firmware](#firmware-repo) and [software](#software-repo) for devices, [configuration snapshots](#configuration-repository), [device credentials](#credentials), [trusted certificates](#trusted-certificates) and [device profiles](#device-profiles).
|[SmartREST templates](#smartrest-templates)|How to work with [SmartREST  templates](#smartrest-templates), a collection of request and response templates used to convert CSV data and {{< product-c8y-iot >}} Rest API calls.
|[Working with simulators](#simulator)|How to model devices with the [simulator](#simulator) in order to have the same level of functionality as connected hardware devices.

### Home dashboard

The Home screen of the Device management application is a dashboard which shows data for the tenant.

![Home dashboard](/images/users-guide/DeviceManagement/device-management-home-screen.png)

The data shown on the Home dashboard is shared by all users of the tenant. By default, the Home dashboard includes recent alarms and quick links.
The Home dashboard can be edited and designed individually according to your needs. You can add, remove or change widgets which are displayed here.

For details on editing a dashboard, refer to [Cockpit > Working with dashboards](/users-guide/cockpit/#dashboards).
The Device management application dashboard works just like the Cockpit dashboard.

To reset the Home dashboard to its default, click **Restore dashboard** at the right of the top menu bar.
