---
weight: 10
title: What´s new
layout: redirect
---

### Cockpit


#### New dashboard and widget editors

The view of the dashboard and widgets editors has been improved:

![Welcome widget](/images/release-notes/widget-editor.png)

The new look & feel offers a clearer overview and clarity of the functionality. See also [Cockpit > Dashboards](/users-guide/cockpit#dashboards) in the User guide.

This change is related to the dashboard migration, see below.

#### New welcome widget

[MTM-30226] The welcome widget has been modified. The new welcome widget comes in two versions, which show different messages and quick links, based on the tenant type of the user (regular or trial tenant).

![Welcome widget](/images/release-notes/welcome-widget.png)

See also [Cockpit > Overview](/users-guide/cockpit#overview) in the User guide.

#### New smartphone wizard

[MTM-30234] A new wizard is available to connect a smartphone to the platform. You can access it through a new quick link in the welcome widget of the Cockpit application.

![Smartphone wizard](/images/release-notes/smartphone-wizard.png)


### Device integration: Cumulocity IoT NetComm Agent

[31982] A new open-source reference agent for the Casa Systems (NetComm) routers of the NTC-220 series has been released. The Cumulocity IoT NetComm Agent supports a wide range of the Cumulocity IoT platform capabilities, for example:

* Configuring WAN, LAN and DHCP networks.
* Updating software and firmware remotely.
* Collecting metrics like system resources and cellular signal strength as measurements.
* Updating and tracking GPS locations.

For details, refer to the [Casa Systems (NetComm) router](/device-tutorials/netcomm-router/) in the Device integration tutorials.

### Data broker

The following improvements have been implemented in the data broker since 10.6.0.

[MTM-30779] The internal processing has been improved. The data broker can now send measurements in bulk, separately for each connector. This allows non-matching events to be discarded quickly, relieving pressure on the in-memory queues which in turn means they will overflow less frequently.

[MTM-30913] The exception handling has been improved. When a connector is suspended data broker will immediately stop forwarding.

[MTM-30910] To improve performance, events are now also forwarded during device synchronization (ACTIVATING state).

[MTM-32280] The following changes have been implemented for alarms on queue overflow:

* An alarm is now also sent when the output queue is full (similar to the alarm for the input queue).
* For output queues, the alarm text will include the affected connector.
* The alarm severity has been changed from CRITICAL to MAJOR.


### UI

[MTM-31746] Russian is now available as a standard language.

### Web SDK - Migration of dashboards

[MTM-28531] The dashboards for groups and devices are now fully migrated to Angular.

There is no further migration of AngularJS widgets required. Backward compatibility is maintained by still allowing to show AngularJS widgets and using the same data structure for storing.

For details on creating new widgets based on Angular, see [Add a custom widget to a dashboard](/web/tutorials/#add-a-custom-widget) in the Web SDK guide.

The new components can be used to display dashboards on any page with or without the context and widget concept of the group and device dashboards. A demo has been added to the tutorial application. See [Tutorials](/web/tutorials/) in the *Web SDK guide* for information on the tutorial application.  

In this context, the view of the dashboard the widget editors has been updated to improve the user experience, see above. Moreover, a new preview is provided which can also be added to an AngularJS widget by using the `previewImage` property in the widget definition.
