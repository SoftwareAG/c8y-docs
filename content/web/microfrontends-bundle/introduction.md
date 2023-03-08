---
title: Introduction
layout: redirect
weight: 10
---
There are several options for building a micro frontend architecture:

1. **Server-side** - This is the classic approach of a page loaded on a different URL. You can serve unique frontends from different teams (even on separate web servers) on each URL. This already fulfills all the requirements of a micro frontend, as it is loosely coupled, can be developed independently, and deployed separately. However, there are challenges when using this approach, for example, with the communication between the different micro frontends and ensuring a similar look and feel across the other frontends.

  {{< product-c8y-iot >}} already allows using micro frontends via application hosting. You can deploy different frontends via the [Application API](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Application-API)) and switch between them via the app switcher. If you use the Web SDK, it ensures the same look and feel across all applications.

2. **Compile-time** - Another option to allow a micro frontend architecture is to bundle and build your micro frontend as a library and provide it (for example, via npm). The packages can then be used to compose or build a new application. This has many benefits, as the developer has full control. The communication can be clearly defined and the look and feel can be aligned. However, it requires a new build each time one of the components changes. The coupling is much closer.

  {{< product-c8y-iot >}} provides different npm modules which let you use this approach. You can, for example, only use the API client, a default application with the styling, or import different features as Angular modules from the {{< product-c8y-iot >}} components library. Take a look at the [{{< product-c8y-iot >}} npm options](https://www.npmjs.com/~c8y) to see all provided libraries. 

3. **Runtime** - Providing different frontends dynamically while the application is running. You can load different parts of an application in an iframe or only load a script bundle from a different server. However, the communication and coupling with, for example, an iframe is nearly as hard as when using the server side integration. Therefore, the runtime integration is more complex. It allows you to plug deep into the application and shares, for example, the communication or the state layer. New technologies like Module Federation allow for sharing certain dependencies and defining their scope.

  We introduced a new plugin concept into {{< product-c8y-iot >}} which gives you the ability to extend any Web SDK based application at runtime.

{{< product-c8y-iot >}} is already based on a micro frontend architecture. In fact, the server-side option is a concept of the platform since the beginning. The compile-time option was introduced in 2018. However, there is also a need for the runtime extension of applications, which is why it is introduced to {{< product-c8y-iot >}}. See the sections below for more information.

### Introducing plugins: Dynamically extending platform web applications
Plugins are a new concept to dynamically load features at runtime and allow an extension of any Web SDK based web application. To extend an application:
 
1. In the Administration application, clone the application you want to extend, for example clone the Cockpit application.
2. Open the Cockpit application details and click the **Plugins** tab.
3. Click **Install plugins** and select a plugin.
4. The application is now extended by the plugin you selected.

This is basically a script injection. The Cockpit application will now request a script called `remoteEntry.js` from the plugin. In terms of the micro frontend, the application that executes the call is called the "shell" which injects the "remote" into its scope. 


{{< c8y-admon-tip >}}
If you have any issue with an application which includes a plugin, you can exclude all plugins via the `?noPlugin=true` query parameter.
{{< /c8y-admon-tip >}}


Those plugins can use any of the concepts that are integrated into the Web SDK. From just adding a certain button on a device to a full feature set with its own navigator node, route, and component. There are many options, but they are all within the borders of the Web SDK. {{< product-c8y-iot >}} does not support, for example, React or Vue. If you want to use other frameworks, refer to {{< product-c8y-iot >}}'s compile time integration.
We decided to limit the options to give the same developer experience as we use to build current Angular applications. As a developer, you can start your first plugin by using the [c8ycli](https://www.npmjs.com/package/@c8y/cli) almost the same way you build a new application.