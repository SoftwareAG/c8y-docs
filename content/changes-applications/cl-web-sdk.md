---
title: Web SDK
layout: change_log
section:
  - change_log
weight: 30
---


### October 2023

#### -Change-  Improved behavior on plugin installation

When installing a plugin and the tenant has no custom applications, it is now possible to duplicate any existing application. [MTM-51757]


#### -Change-  Removal of Impact connectivity feature

The Impact connectivity feature has been removed from @c8y/ngx-components and @c8y/ng1-modules packages.[DM-2548]


#### -Change-  Removal of references to deprecated classes

References to the deprecated classes <code>ComponentFactory</code> and <code>ComponentFactoryResolver</code> have been removed from the @c8y/ngx-components library.[DM-1829]


#### -Change-  Data grid components return to first page after reload

Data grid components no longer persist their current page. After reloading they always return to the first page in the list.[DM-1830]


#### -Change-  Improved shell applications behavior

Shell applications now wait with their initial navigation until all plugins have been loaded. This allows,
for example, to directly navigate via a link to a route which is provided by a plugin.[MTM-53695]


#### -Feature-  New filter dropdown in data grids

In the data grid component, a new filter overview dropdown has been added. It displays all active filters in one place and allows users to remove filters.
For custom column implementations, the WebSDK allows developers to provide their own logic to display active filters as items in the filter overview.[DM-1616]


#### -Change-  New activeClassName input in data-grid and device-grid components

A new <code>activeClassName</code> input has been added to the data-grid and device-grid components. It can be used to define a class name to be appended to the last clicked row in the grid. Its default value is "active". This option can be deactivated by setting the input value to an empty string.[DM-2324]


#### -Announcement- Removal of deprecated implementations

In release 10.16.0.0, core re-usable data-grid-related components and services have been moved to the <code>@c8y/ngx-components</code>. The initial implementations were deprecated and have now been removed.[DM-1294]


#### -Change-  Support of versioned documentation links

The context help and other help links point to a documentation website defined by the application option <code>docsBaseUrl</code>. This option now supports the <code>{{ version }}</code> placeholder, which allows the administrator to choose whether to use versioned or unversioned documentation links. By default, versioned links will be used.[MTM-41135]


#### -Change-  Upgrade to Angular 15

The Web SDK has been upgraded to Angular 15.[MTM-52940]


#### -Change-  Bookmarks in right drawer

Users can now add a bookmark in the right drawer for any page in the platform.[MTM-49807]


#### -Feature-  New versioning matrix for blueprints/plugins

A versioning matrix can now be added to the <i>cumulocity.json</i> of a blueprint/plugin. When a blueprint/plugin is installed, its version is validated against the platform version. If the versions are incompatible a warning is shown.[MTM-52340]


#### -Announcement- Removal of deprecated device-grid model classes, column implementations and services

As announced earlier, see also [release 10.17](/release-10-17-0/announcements-10-17-0), shared classes, components and services from the @c8y/ngx-components/device-grid are deprecated. Those deprecated items have now been removed.

This change only affects you, if you or your development team use the Web SDK to extend Cumulocity IoT UI applications or to build your own web applications. If you use the device-grid functionalities, check the deprecation documentation and alter your code accordingly. Refer to the deprecations in the [WebSDK resources documentation for the device-grid service](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/DeviceGridService.html). Other deprecations for reference are also marked in this documentation.
