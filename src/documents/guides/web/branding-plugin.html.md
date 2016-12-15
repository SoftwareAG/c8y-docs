---
title: Branding Plugin
layout: default
---

## Branding plugin

Our main css is based on 	the popular css framework [Bootstrap 3](http://getbootstrap.com/). It is possible to build a branding plugin based on Cumulocity own base branding simply by overriding less variables.

Inside the repo [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) you can find all the plugins described in this tutorial.

As the myBranding example is much more extensive than the other plugins copy over the myBranding folder into your plugins folder.
Although there a few files there, the strategy is straight forward: defining less variables that are overriding the setting on the base theme c8yBranding.

You can inspect the less files to see what variables are available for configuration.

A branding plugins are simply distinguished by their name: must end in *Branding* (e.g. *piedpiperBranding* ). To use it in an application add it to the imports statement of an application manifest cumulocity.json, as it is in [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) repo.

Make sure there is only single branding plugin declared otherwise both of them will be loaded.


![Branding example](/guides/plugins/branding.png)
