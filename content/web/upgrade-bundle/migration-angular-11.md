---
title: Upgrading to Angular 11
layout: redirect
weight: 6
---

Angular 11 is supported from version 10.10.4.0. AOT and Ivy are not yet supported. The following configuration changes are required before you can run the application:

- Fix @angular/compiler-cli to version 11.2.9 or lower
- Remove the `index` property from the angular.json file, if it exists. Also, the `--index` flag from ng-cli is not supported. A custom index.html file can be passed with `ApplicationOptions` `indexTemplate`.

{{< c8y-admon-info >}}
If you are using Visual Studio Code, make sure in the `Angular Language Service Plugin` the **Use legacy View Engine language service** option is selected.
{{< /c8y-admon-info >}}
