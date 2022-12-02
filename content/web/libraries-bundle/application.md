---
title: web app library
layout: redirect
weight: 30
---


The web app package (`@c8y/apps`) provides example web apps for the Web SDK.

### Prerequisites

To use the @c8y/apps you must install the [@c8y/cli](/web/development-tools/#c8y-cli). Refer to its documentation for installation instructions.

Once installed you can run:

```
$ c8ycli new [your-app-name] [example-name]
```

For example, to generate the tutorial web app with the name `my-app` you must run:

```
$ c8ycli new my-app tutorial
```

### Included web apps

The following table provides an overview on the currently supported web apps:

<table>
<col style="width:20%">
<col style="width:80%">
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>application</td>
<td>An empty web app to quickly bootstrap new web apps. It is the default web app and used if you don't specify an <code>[example-name]</code>.</td>
</tr>
<tr>
<td>tutorial</td>
<td>An web app that already assembles most of the concepts of the <a href="/web/libraries/#component">@c8y/ngx-components</a>. Use this to get real code examples.</td>
</tr>
<tr>
<td>cockpit</td>
<td>The <a href="/users-guide/cockpit/">Cockpit</a> default web app. Use this to extend the existing Cockpit web app.</td>
</tr>
<tr>
<td>devicemanagement</td>
<td>The <a href="/users-guide/device-management/">Device Management</a> default web app. Use this to extend the existing Device Management web app.</td>
</tr>
<tr>
<td>administration</td>
<td>The <a href="/users-guide/administration/">Administration</a> default web app. Use this to extend the existing Administration web app.</td>
</tr>
</tbody>
</table>
