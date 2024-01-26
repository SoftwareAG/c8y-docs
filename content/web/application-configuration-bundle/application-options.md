---
title: Application options
layout: redirect
weight: 10
---

The easiest option for customization are application options. They apply to any Web SDK application and
use inheritance to allow applying same configurations to all your applications. One example
configuration is `hideNavigator`, which is a simple flag that configures if the navigator should be
shown on application start or not. You can configure this in 4 ways:

1. as a URL parameter
2. as a dynamic public option
3. as a static private option

The URL parameter (1) is the highest privileged option and wins over the public (2) and private (3)
option. It is also very simple to use: Simply add a URL parameter to your application. So to hide
the navigator you would simply use the URL
`apps/<<your-app-name>>/index.html?hideNavigator=true#/route` (note that the URL parameter needs to
be set before the #-hash navigation).

The dynamic public options (2) are options requested by each Web SDK based application on startup.
The default fetch URL for this options are stored in the `dynamicOptionsUrl` which is by default set
to `"/apps/public/public-options/options.json"`. As you can see by the context-path, the default
setting points to an application deployed to your tenant. You can create this application on your
own: Simply create a zip file called `public-options.zip` and add a `options.json` to it:

```json
{
  hideNavigator: true
}
```

If you upload this application to your tenant and subscribe it to at least one of your subtenants,
all Web SDK based applications will hide the navigator by default.

{{< c8y-admon-info >}}
If you are an enterprise customer, the easiest way to manipulate this options is to use the
branding manager in administration. It provides an form to set most of the settings without any
manual generating of a JSON file and uploading applications.
{{</ c8y-admon-info >}}

The static private options (3) are options that can only be defined by a custom application. They
are the lowest level of option and can be overwritten by any of the upper options (1 and 2). They
are also private, meaning they only apply to the current application they are applied to. You can
define those options in the `cumulocity.config.ts` file by adding them to the `runTime` fragment:

```ts
[...]
export default {
  runTime: {
    [...]
    hideNavigator: true
  },
}
[...]
```

It is good practice to use URL options (1) to verify an option behavior, to use dynamic options (2)
to set the option platform wide (branding) and use the private static option (3) to set the default for your
custom application.
