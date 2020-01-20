---
title: Applications
layout: redirect
weight: 60
---

The application package (`@c8y/apps`) provides example applications for the Web SDK.

### Prerequisites

To use the @c8y/apps you need to install the [@c8y/cli](/web/angular#cli). Refer to its documentation for installation instructions. 

Once installed you can run:

```
$ c8ycli new [your-app-name] [example-name]
```

For example, to generate the tutorial application with the name `my-app` you need to run:

```
$ c8ycli new my-app tutorial
```

### Included applications

The following table provides an overview on the currently supported applications:

| Name | Description |
| ---- | --- |
|`application`| An empty application to quickly bootstrap new applications. It is the default application and used if you don't specify an `[example-name]`.|
|`tutorial`| An application that already assembles most of the concepts of the [@c8y/ngx-components](/web/angular#ngx-components). Use this to get real code examples. |
|`cockpit`| The [Cockpit](/users-guide/cockpit/) default application. Use this to extend the existing Cockpit application. |
|`devicemanagement`| The [Devicemanagement](/users-guide/devicemanagement/) default application. Use this to extend the existing Device Management application. |
|`administration`| The [Administration](/users-guide/administration/) default application. Use this to extend the existing Administration application. |