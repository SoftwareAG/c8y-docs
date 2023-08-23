---
title: Application library
layout: redirect
weight: 30
---


The application package (`@c8y/apps`) provides example applications for the Web SDK.

### Prerequisites {#prerequisites}

To use the @c8y/apps you must install the [@c8y/cli](/web/development-tools/#c8y-cli). Refer to its documentation for installation instructions.

Once installed you can run:

```
$ c8ycli new [your-app-name] [example-name]
```

For example, to generate the tutorial application with the name `my-app` you must run:

```
$ c8ycli new my-app tutorial
```

### Included applications {#included-applications}

The following table provides an overview on the currently supported applications:

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
<td>An empty application to quickly bootstrap new applications. It is the default application and used if you don't specify an <code>[example-name]</code>.</td>
</tr>
<tr>
<td>tutorial</td>
<td>An application that already assembles most of the concepts of the <a href="/web/libraries/#component-library-ngx">@c8y/ngx-components</a>. Use this to get real code examples.</td>
</tr>
<tr>
<td>cockpit</td>
<td>The <a href="/cockpit/overview/">Cockpit</a> default application. Use this to extend the existing Cockpit application.</td>
</tr>
<tr>
<td>devicemanagement</td>
<td>The <a href="/device-management-application/home-dashboard/">Device management</a> default application. Use this to extend the existing Device management application.</td>
</tr>
<tr>
<td>administration</td>
<td>The <a href="/standard-tenant/home-screen/">Administration</a> default application. Use this to extend the existing Administration application.</td>
</tr>
</tbody>
</table>
