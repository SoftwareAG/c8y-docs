---
title: Web SDK
layout: change_log
section:
  - change_log
weight: 60
---


### December 2023

#### -Change- Location view migrated to Angular

The location view in the Device management and Cockpit application has been migrated to Angular. The map provider, the location search and the map layers are now configurable via application options or tenant options. The angular.js module <code>@c8y/ng1-modules/devicemanagement-location</code> for location was removed and must be migrated or at least removed on update of a custom build application. [MTM-49947]

#### -Change- Support of HTML in input fields

To be able to provide more information in input fields on the expected input, dynamic form fields now support HTML markup in their description. [DM-2606]

#### -Feature- Change aggregation for entire dashboard

It is now possible to change the aggregation for all widgets in a dashboard that support the dashboard context functionality at once. The following widgets support the dashboard context aggregation: Data points graph, Data points graph 2.0, Data points table. [MTM-55298]

#### -Change- Improved error message on failure of device deletion

If a user with minimal permission tries to delete a device an error message showed up stating "Could not delete device."
Now, together with the failure message, the reason of failure is displayed. [MTM-55536]


#### -Change- Fine-grained positioning of widgets on dashboards

The grid used in dashboards for placing widgets now supports 24 instead of 12 columns. This allows finer-grained positioning of widgets on dashboards. In case you share the same dashboards between different application versions, we strongly recommend you to upgrade to a version that includes the fix <b>MTM-55923</b>. [MTM-52888]

#### -Change- Improved behavior on plugin installation

When installing a plugin and the tenant has no custom applications, it is now possible to duplicate any existing application. [MTM-51757]

#### -Change- Removal of Impact connectivity feature

The Impact connectivity feature has been removed from @c8y/ngx-components and @c8y/ng1-modules packages. [DM-2548]

#### -Change- Context path in the remotes application option

Scaffolding an application that uses the <code>remotes</code> application option via the c8ycli now also updates the context path used in the <code>remotes</code> application option. [MTM-54357]


#### -Change- Removal of references to deprecated classes

References to the deprecated classes <code>ComponentFactory</code> and <code>ComponentFactoryResolver</code> have been removed from the @c8y/ngx-components library. [DM-1829]


#### -Change- Data grid components return to first page after reload

Data grid components no longer persist their current page. After reloading they always return to the first page in the list. [DM-1830]


#### -Change- Improved shell applications behavior

Shell applications now wait with their initial navigation until all plugins have been loaded. This allows,
for example, to directly navigate via a link to a route which is provided by a plugin. [MTM-53695]


#### -Feature- New filter dropdown in data grids

In the data grid component, a new filter overview dropdown has been added. It displays all active filters in one place and allows users to remove filters.
For custom column implementations, the WebSDK allows developers to provide their own logic to display active filters as items in the filter overview. [DM-1616]


#### -Change- New activeClassName input in data-grid and device-grid components

A new <code>activeClassName</code> input has been added to the data-grid and device-grid components. It can be used to define a class name to be appended to the last clicked row in the grid. Its default value is "active". This option can be deactivated by setting the input value to an empty string. [DM-2324]


#### -Announcement- Removal of deprecated implementations

In release 10.16.0.0, core re-usable data-grid-related components and services have been moved to the <code>@c8y/ngx-components</code>. The initial implementations were deprecated and have now been removed. [DM-1294]


#### -Change- Support of versioned documentation links

The context help and other help links point to a documentation website defined by the application option <code>docsBaseUrl</code>. This option now supports the <code>{{ version }}</code> placeholder, which allows the administrator to choose whether to use versioned or unversioned documentation links. By default, versioned links will be used. [MTM-41135]


#### -Feature- Upgrade to Angular 15

The Web SDK has been upgraded to Angular 15. [MTM-52940]


#### -Feature- Bookmarks in right drawer

Users can now add a bookmark in the right drawer for any page in the platform. [MTM-49807]


#### -Feature- New versioning matrix for blueprints/plugins

A versioning matrix can now be added to the <i>cumulocity.json</i> of a blueprint/plugin. When a blueprint/plugin is installed, its version is validated against the platform version. If the versions are incompatible a warning is shown. [MTM-52340]


#### -Announcement- Removal of deprecated device-grid model classes, column implementations and services

As announced earlier, see also [release 10.17](https://cumulocity.com/releasenotes/release-10-17-0/announcements-10-17-0), shared classes, components and services from the @c8y/ngx-components/device-grid are deprecated. Those deprecated items have now been removed.

This change only affects you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you use the device-grid functionalities, check the deprecation documentation and alter your code accordingly. Refer to the deprecations in the [WebSDK resources documentation for the device-grid service](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/DeviceGridService.html). Other deprecations for reference are also marked in this documentation.
