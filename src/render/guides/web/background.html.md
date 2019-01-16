---
order: 20
title: Brief background
layout: standalone
---

As the web ecosystem evolves, as a platform we evolve with it - while assuring to keep upgrade paths as smooth as possible and keep extensions working properly with very little changes.

This process involves migration effort, so we believe that providing some background information on how the stack and the build process has evolved over time will help developers to better understand why some parts work the way you see today and why migration effort is needed.

### Terminology: Plugins vs. modules

From day one the UI has always had a modular architecture. The units of functionality are grouped in “plugins” that can be composed to build applications. In practice plugins are simply modules.

Modules are a very important key feature in the latest generation of the Web SDK. It allows to import any file or library with native JavaScript `import` statements and be bundled to one file at build time. To better understand this concept and the enhancements it provides to the developers, it is important to understand how the module architecture worked in the previous generations of the Cumulocity Web SDK.

### 1st Generation: Runtime loading of plugins

In the first generation, each application had exported plugins and imported plugins. The exported plugins were the ones available for being used throughout the platform and the imported plugins were the functionality visible in the application. This way each application had two functions:

* the UI interface that you usually expect
* a package that exposed functionality

The information on applications and plugins was stored in the database through an API. Each plugin had to be created in the context of each application. Although we already had the manifest files we used that information and called the APIs storing the data.

The REST API could be reached at ```applications/<id>/plugins``` but it has now been deprecated.

At this time we had:

|Application context|Repository
|-------|------
|core | m2m/cumulocity-ui
|administration | m2m/cumulocity-ui-administration
|devicemanagement | m2m/cumulocity-ui-devicemananagement
|cockpit | m2m/cumulocity-ui-cockpit

Core was an application that did not import any plugin, it just exported plugins.

The loading of the modules was entirely dynamic. We served a very basic index.html that was the same for all applications, logged in the user with just a small javascript layer and only after authentication we fetched the application information and loaded the appropriate plugins from the respective applications and finally bootstrapped the angular.js app. So after login we had something like this:

```html
  <!-- Added with js -->
  <script src="/apps/core/main.js"></script>
  <script src="/apps/core/plugin1/main.js"></script>
  <script src="/apps/administration/pluginA/main.js"></script>
  <script src="/apps/devicemanagement/pluginZ/main.js"></script>
```

As the information about which plugins where imported in each application was completely controlled by a REST API, every application could be easily edited from the UI: it was possible to move functionality around, adding or removing plugins from each application. This just meant updating the list of imports of each application.

With this structure we could easily find the URL from the definitions ```<app>/<plugin>```. This influence is still visible today in many of the plugin names.

With a 3rd party client application we might have ended up with something similar to this:

```html
  <script src="/apps/core/main.js"></script>
  <script src="/apps/cockpit/dashboards/main.js"></script>
  <script src="/apps/myapplication/pluginA/main.js"></script>
```

With this approach, each time the platform was updated the 3rd party applications would get the latest version of all plugins and sometimes it was difficult to update 3rd parties due to breaking changes.

### 2nd Generation: Changing to build time bundling

The main conceptual change of the second generation was that applications were self-contained. By this, we no longer used plugins as data that was loaded at runtime, and the list of script tags was rendered into the index.html during build time.

This way, each time the platform was updated, 3rd party applications were only affected when they were explicitly upgraded.

We became aware that plugins are just modules, and their names need to be unique. The pattern ```<app>/<plugin>``` which was intentional earlier, became irrelevant with module names being unique, but we maintained compatibility with this naming as we do until today.

Although the strategy changed drastically, the manifest files stayed fully compatible.

We ended up with an index.html, generated when the application was assembled, looking like this:

```html
  <script src="./core/main.js"></script>
  <script src="./cockpit_dashboards/main.js"></script>
  <script src="./myapplication/main.js"></script>
```

Although plugins are not just data any longer, we still allow to change the applications with the UI, but it's actually an API that changes the file system. We delete directories and upload zips to create new directories, and mutate the index.html.

### Today's Generation: Native modules

The new approach focuses on enabling the complete stack of modern web development and removing as much specificity from the process as possible. To allow that, we decided to update the existing angular.js framework to the next generation simply called Angular. To still enable the use of legacy browsers and allow the import from third party library's via npm we need to bundle the modules. As bundler we choose to use webpack, as it play's nicely with Angular.

One major change is that so far modules (or plugins) where always represented during development and after build, so they could easily be composed by adding or removing a script. As we are now bundling everything, the modules can only be put together during development so applications can no longer be edited from the UI for now, but at the same time developers win the possibility to use the standardized ES2016 module architecture. That simplifies the development process because it follows standard approaches and doesn't need any kind of complex module architecture. At this point, plugins are truely just modules. We will keep the name around to refer to sub-packages that contain some kind of isolated functionality. 

This was the clear opportunity to modularize the stack. While the focus is still on Angular we provide tools to avoid framework lock-in. This results in multiple packages published to npm which can be used standalone. For example, a developer could use the API abstraction layer implemented in the @c8y/client to develop a React application. The stack is no longer exclusively bound to Angular.

#### Publishing to npm

While previously publishing a tgz to our server, we will now deploy to npm:

 - @c8y/cli
 - @c8y/client
 - @c8y/style
 - @c8y/ng1-modules
 - @c8y/ngx-components

#### Branding no longer part of the application

So far, branding was always considered part of the application, as a module like any other. When there was the need to change it we had to change the application definition. For this we used the targets definitions. Now it is a build time option that reflects into its own entry point in the application. When building an application you will have one entry point for the application and another for the branding. That allows to update the application without redeploying the branding.

#### Migrating

We still support manifest files as entry points, so it is possible to use these as well as normal package.json files.

As mentioned above we aimed at making the transition as smooth as possible.

Looking into the repository [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples/branch/next?dest=develop#diff) the diff with the changes is quite concise:

- Add dependencies
- Add (css) to every http @import declaration inside a less file.

#### Deprecating custom manifests

Now developers have at their disposal all modern js, so they just need to use normal ESM to import and export dependencies. Although the manifest files will still work they are no longer required.
