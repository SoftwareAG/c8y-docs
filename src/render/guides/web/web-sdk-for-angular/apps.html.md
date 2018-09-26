---
title: @c8y/apps
layout: redirect
order: 60
---


The `@c8y/apps` package provides example applications for the Web SDK.

### Prerequisites

To use the @c8y/apps you need to install the [@c8y/cli](https://www.npmjs.com/package/@c8y/cli). Refer to its documentation for installation instructions. 
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
|`tutorial`| An application that already assembles most of the concepts of the [@c8y/ngx-components](https://www.npmjs.com/package/@c8y/ngx-components). Use this to get real code examples. |
 