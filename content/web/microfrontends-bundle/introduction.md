---
title: "Introduction"
layout: redirect
weight: 10
---
To understand how, we first need to explain, what are the possibilities of building a micro frontend architecture:

Option  1. **Server-side**: This is basically the classic approach of a page loaded on a different URL. You could serve unique frontends from different teams (even on separate web servers) on each URL. This already fulfills all the requirements of a micro frontend, as it is loosely coupled, independently developable, and separately deployable. However, there are challenges when using this approach e.g. how to communicate between the different micro frontends and how to ensure a similar look and feel across the other frontends.

--> Cumulocity allows using micro frontends already by the application hosting. You can deploy different frontends via the application API and switch between them via the app switcher. When using the Web SDK, you even ensure the same look and feel across all applications.

Option 2. **Compile-time**: Another solution to allow a micro frontend architecture is to bundle and build your micro frontend as a library and provide it (for example with npm). Those packages can then be used to compose or build a new application. This has many benefits, as the developer has full control. The communication can be clearly defined and the look and feel could be aligned. However, it requires a new build each time one of the components changes. The coupling, therefore, is much closer.

--> Cumulocity provides different NPM modules which let you use this approach. You can e.g. only use the API client, a default application with the styling, or import different features as Angular modules from our components library. Take a look at [NPM](https://www.npmjs.com/~c8y) to see all provided libraries. 

Option 3. **Run-time**: Providing different frontends dynamically while the app is running. You could load different parts of an application in an iframe or only load a script bundle from a different server. However, the communication and coupling with e.g. an iframe is nearly as hard as when using the server side integration. Therefore the runtime integration is more. It allows deep plugging into the application and shares e.g. communication or state layer. New technologies like Module Federation allow to share certain dependencies and define their scope, to allow exactly that.

--> We just **introduced a new plugin concept into Cumulocity** which gives you the ability to extend any Web SDK based application at run-time.

As shown, Cumulocity is already based on a micro frontend architecture. In fact, option 1. is a concept of the Platform since the beginning and option 2. was introduced in 2018. However, we understand the need for the run-time extension of applications and therefore are proud to present the new concept for option 3. in the next chapter.

## Introducing plugins: Dynamically extending Cumulocity web apps
Plugins are a new concept to dynamically load features at run time and allow an extension of any Web SDK-based web application. The user story is simple: 
1. Open Administration
2. Clone the application you want to extend, let's say you clone "Cockpit"
3. Open the Cockpit application details in Administration and select the tab "Plugins"
4. Hit install plugins and select a plugin
--> When you now check the application, it is extended by the plugin you choose.

What happens here is a simple script injection. The Cockpit application will now request a script called `remoteEntry.js` from the plugin. In terms of micro frontend the application that does the call is called the **shell** which injects the **remote** into its scope. 


> *Tip*: If you ever have any issue with a application including a plugin, you can exclude all plugins by use `?noPlugin=true` query parameter.


Those plugins can use any of the concepts that are integrated into the Web SDK. From just adding a certain button on a device to a full feature set with its own navigator node, route, and component. The possibilities are endless but opinionated. Meaning you can only use the borders of the Web SDK. We will not support e.g. React or Vue. When you want to use other frameworks, consider our compile time integration.
We decided to be opinionated here to give the same developer experience as we use to build current Angular applications. As a developer, you can start your first plugin simply by using the [c8ycli](https://www.npmjs.com/package/@c8y/cli) nearly the same way as you can build a new application. In the next chapter, we will build our first plugin.