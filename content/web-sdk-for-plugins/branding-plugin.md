---
weight: 60
title: Branding plugin
layout: bundle
---

<a name="branding"></a>

In this document you will get an overview on how to develop a plugin that changes the branding of an application.

Before you start working on the branding plugin, we recommend you to take a look at the [introduction](/web-sdk-for-plugins/overview) which deals with the basic concepts of applications and plugins as well as the ["Hello world!"](/web-sdk-for-plugins/hello-world/) style demo plugin.

You can find this and all the other plugins described in the documentation inside the repository [cumulocity-ui-plugin-examples](https://github.com/SoftwareAG/cumulocity-ui-plugin-examples).

![Branding example](/images/plugins/branding.png)

Our main CSS is based on the popular CSS framework [Bootstrap 3](http://getbootstrap.com/). It is possible to build a branding plugin based on {{< product-c8y-iot >}}'s own base branding simply by overriding less variables.

As the myBranding example is much more extensive than the other plugins, copy over the myBranding folder into your plugins folder.

Although there a few files there, the strategy is straight forward: defining less variables that are overriding the setting on the base theme `c8yBranding`.

You can inspect the less files to see what variables are available for configuration.

Because branding plugins are simply distinguished by their name, the name has to be unique. Besides that, it has to end in *Branding* (e.g. *piedpiperBranding* ). To use it in an application, add it to the imports statement of the [application manifest](/web-sdk-for-plugins/concepts/#application-manifest), as is done in the [cumulocity-ui-plugin-examples](https://github.com/SoftwareAG/cumulocity-ui-plugin-examples) repository.

Make sure there is only a single branding plugin declared, otherwise both of them will be loaded. To replace the `c8yBranding` plugin in the core applications, you have to create a target .json file with at least the following content:

```json
{
	"name": "Examples",
	"comment": "Release with new branding plugin",
  "replaceImports": {
    "core/c8yBranding": "myapplication/myBranding"
  }
}
```
