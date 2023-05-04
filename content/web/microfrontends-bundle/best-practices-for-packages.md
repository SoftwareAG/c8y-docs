---
title: Best practices for developers
layout: redirect
weight: 40
---

Often it is quite overwhelming, which approach to use and how to start the development journey. For partners and customers we would *strongly* recommend to join the micro frontend journey. It allows to extend and use the ecosystem instead of building silo solutions. In this chapter we will explain our vision of this journey and describe, what we see as best practices to get the most out of your development.

#### The user journey: Should I use a blueprint or a plugin?
To develop the right thing, it is very important to understand, which user do I want to target with my application? For the micro frontend story we identified solution architects with little developer experience as the target audience. The idea is simple: Any IoT solution can be clicked together by a user in a few steps. The building blocks of this are developed by the ecosystem. So the steps are identified as the following:

1. A solution architects selects the **blueprint** to use. This is the foundation application of his solution.
2. The blueprint should guide him through the configure his application. One step could be for example the installation of needed **microservices or plugins**.
3. After setup the solution is ready to use. He should be able to test it with other users. The solution architect might see more needs and need the possibility to **add or remove additional plugins**.

As you can see, the user journey for the micro frontend story is a a self service approach. You provide an application that a none developer person can align to it needs. It assumes, that the usage of the application is unknown and up to the solution architect. Therefore those applications needs to be designed generic and allow to be reused as much as possible. You can use the following decision tree, to decide if you want to develop a classic application or a micro frontend:

```
Your use-case needs a distinct design and components?   --YES--> Consider a custom implementation
                |
                NO
                |
Your use-case is very specific?                         --YES--> Consider a custom implementation based on the Web SDK
                |
                NO
                |
Your use-case should be an app that others can reuse?   --YES--> Consider a micro frontend blueprint.
                |
                NO
                |
Consider a micro frontend plugin.
```

The decision tree can be read from top (most effort, highest customization) to bottom (lowest effort, limited customization). When you for example choose to do everything on your own, you need to write own login-logic and cannot reuse our pre-build components like data-grid, dashboard or asset-selector. The development effort is incredible high. When going with our Web SDK you get a lot of functionality out of the box and by branding the application, you are able to make it look&feel like it belongs to your company. Furthermore the road is open to provide it as an application to your customers as a blueprint (and they are able to brand it to their needs). 

However, if one of the available blueprints (Administration -> Ecosystem -> Extensions) or the default applications (Cockpit, Device management or Administration) already fitting mostly your case, but might only miss a little extension, implement a plugin. Those plugins are easy to implement and can extend mostly every part of the existing applications. Furthermore, if you intend to provide those extensions to your customers you can do so and share any plugin. 

This section is about explaining the developer story of blueprints and plugins and will explain those details as well as the best practices to apply.

#### Where do I start the developer journey for plugins or blueprints?
Basically all developer stories start with our CLI tool. You can scaffold a new application and decide, which demo you want to use. E.g. for a plugin you can try the `widget-plugin` demo. This chapter will not go into details on how to do this (it was already explained in earlier chapters). Instead it will explain, what makes an application a plugin or a blueprint and what exactly is the difference.

First of all, there is no big different in between usual applications, blueprints and plugins. They are all build, tested and deployed to the application API. However plugins and blueprints have some detail information in their *manifest file*.

 > The *manifest file* contains all the options that are stored in the `package.json` `c8y.application` property. On build it will be compiled to a cumulocity.json file. When you upload an archive containing a cumulocity.json file, it's information is additionally added to the application API and therefore the information can be requested by any application.

There are basically 2 important properties to tell, that the application is a plugin and which type it is. Additional there are some more properties, that are either used for plugins or blueprints. The following list are the properties that are relevant in a manifest file for a micro frontend:

```json
{
  "c8y": {
    "application": {
      "isPackage": true,
      "package": "plugin",
      "exports": [
        {
          "name": "Example widget plugin",
          "module": "WidgetPluginModule",
          "path": "./widget/widget-plugin.module.ts",
          "description": "Adds a custom widget to the shell application"
        }
      ],
      "remotes": {
        "widget-plugin": [
          "WidgetPluginModule"
        ]
      }
    }
  }
}
```

The properties are already in detail explained in the step-by-step scaffolding of a [micro frontend](#2-differences-in-approach-to-creating-custom-widgets). However, there are some more properties that might be from interest for creating a meaningful plugin or blueprint:

 - `c8y.application.noAppSwitcher`: This should always be set to `true`, as you don't want to show a blueprint or a plugin in the app-switcher (UI component in the upper right corner, to switch between your installed applications)
 - `version`: This is the version that is used and displayed to the end-user. This version will be pinned if a plugin is installed and you cannot upload the same version twice. You should use semver to allow the platform to verify the version correctly.
 - `description`: This is the first sentence the user will read about you application: Describe your application in one sentence to encourage the user to open the detail view.
 - `keywords`: Can be used to furthermore classify your application.
 - `author`: Informs the user who created the plugin/blueprint.
 - `license`: Informs the user about the license used. You should always fill this out. From 10.18.0.0 upwards all community packages ask to confirm the license.
 - `repository`: Use this to point to an external repository where the source code is hosted.
 - `homepage` use this to point to an external application where more information can be found.
 - `requiredPlatformVersion`: Use this, to point out, which backend version you support.

Additional you can add more information inside a detailed readme.md file which is then displayed in the package detail view. Those packages, are the released artefact. As soon as you are ready, you deploy a package to the platform which anyone can use to extend (plugin) existing or install (blueprint) a new application. The next chapter explains what a package is and what is contained.

#### Why is it called packages and what should it contain?
As pointed out in the user-stories, you can develop two different kind of micro frontends: Blueprint and/or plugins. Both are in the end only applications uploaded to the application API and hosted. As any of those hosted applications could contain more than one plugin or even a combination of blueprints and plugins, a new conceptual unit was introduced called **packages**. Packages allow you to bundle multiple plugins and/or a blueprint into one package and additional versioning those. An optimal package should contain:
 - one or more plugins or/and a blueprint
 - a readme.md file explaining the content
 - a LICENSE file which contains details about the license used

The idea of a package is to bundle multiple belonging plugins together that can be managed by a blueprint application. So a good use case could be a smart-city management app that exposes multiple widgets to display the information (for example a "free parking spots"-widget) to the cockpit application.

#### Where can I extend existing applications with an plugin?
The extension ways did not change. You can use any of our HOOK_ interfaces as defined in our [ngx-components](https://cumulocity.com/guides/web/libraries/#extension-points) library. Usual things to hook are a NavigatorNode, a ActionBarItem or a Route.

> Tip: From 10.17 up you have now typed helper function called `hook<<Name>>`. For example you can use `hookNavigator()` in a provider to hook a node into the navigator.


#### What is the best way to debug my application?
A plugin is in the end just a lazy loaded Angular module. Therefore you can use the default Angular modules and verify them with the default developer story. Additional we added two more verification options, so that there are basically three easy ways to verify and debug your application:
 1. Classic: Run your application and simply import your module into the AppModule. You can then simply start your application by running `c8ycli serve`
 2. Lazy-Loaded: Run your application but don't import the module. Instead point the remote to your module (this is basically a self imported plugin). Here you only need to point the `c8y.application.remotes` option to your module:
 ```
 "remotes": {
    "<<contex-path>>": [
      "<<module-name>>"
     ]
  }
 ```
 This has a big benefit, as your application then "acts" as a shell and you already can see, where you might have issues with lazy loading.

 3. Shell: Run the application and point it to any shell by running `c8ycli serve --shell cockpit`. This has the benefit of testing it in a real application. But as the shell application is already deployed, you might getting not helpful error-stacks.

 We definitely recommend using option 2. and if needed verify your application with option 3. Option 1. should be avoided, as you could run into common pitfalls explained in the next chapter.


#### What are common developer pitfalls when developing a plugin?
 
There are several issues you might want to avoid:
1. Routing: You should try to avoid commonly named routes. Don't use routes like `/home` instead, use `/<<my-unique-prefix>>/home`. Commonly named routes could be overwritten by other plugins. Do the same for any identifier you use in your development process.

2. Lazy loading: Remember that every plugin is imported lazily. Meaning, that the rules of lazy loaded modules apply to those modules. Meaning: Don't use `forRoot` on the ngx-components `CoreModule` or the `RoutingModule`. Use forRoot for any new introduced dependency. 

3. Injectors: As of the lazy loaded approach, injectors are sometimes an issue. Usually you have a new injector per plugin. This is done automatically as long as you use the hooks without a factory function. If you use a factory function, the injector needs to be provided by you:
``` 
import { Injectable, Injector } from '@angular/core';
import { ActionBarItem, EmptyComponent } from '@c8y/ngx-components';

@Injectable()
export class MyActionBarFactory {
  constructor(private injector: Injector) {}

  get() {
    const actionBarItem: ActionBarItem = {
      component: EmptyComponent,
      injector: this.injector, // (1)
      placement: 'left'
    };
    return actionBarItem;
  }
}
``` 

(1): This is important if your component provided wants to use a service that is only available in your plugin. If you don't define the injector, it will use the root injector and therefore will lead to injector issues.


#### How can I bundle assets correctly into my package?
Bundling assets is not as easy as only copying them over. The path must be correctly reflected. E.g. if you import an image, the path to the image is something like:
`http://<<instance>>/apps/<<context-path>>@<<version>>/my-image.png`. As you see, you might not want to change the version on each deployment. Therefore we recommend to let the bundler handle images. This is done by simply importing an image into an typescript file. The bundler will always return the correct path to the image. E.g. create an `assets/assets.ts` and write the following:
```
import previewImage from './widget-plugin-pr.png';

export const assetPaths = { previewImage };
```

Typescript will throw an error, as the it does not know how to handle `.png` files. You can tell typescript to accept such files by declaring them as module in a `assets/index.d.ts`file:
```
declare module '*.png';
``` 

Now somewhere in your plugin/blueprint you can simply import the asset and use the path to display the image:

```
import { assetPaths } from '../assets/assets';

console.log(assetPaths.previewImage);
```

The `assetPaths.previewImage` can now simply be used in any component or in a hook. You can see a full example when you scaffold the *widget-plugin* with `c8ycli new` (Note the feature and example was added in version 10.17 and higher).

#### What about translations?
Translations should work out of the box as for standard custom application. Add a .po file to your repository and import it into your `index.ts` file. Translation of a plugin might overwrite existing translations, as they are merged at run-time. An example exist when you scaffold the *widget-plugin* with `c8ycli new`. One limitation exist: A plugin cannot add a new language. It can only extend the translated strings in the existing application.

#### What about styling? Is branding supported?
Yes, branding is fully supported. It is recommended to use component-based styling for your applications. However you can also add customs global css styling by importing it.
```
import './example.css';
``` 
Again an example exist if you scaffold the *widget-plugin* with `c8ycli new`.

#### How to ensure that my application is always compatible?
There is basically no way that you can ensure this. Every Major Web SDK version might contain a new Angular-Version. Angular is one of our shared libs between all micro frontends and therefore calling a deprecated method on them, might break the compatibility between a micro frontend and the application that imports it. However we have 2 version protections that should avoid such incompatibility:
1. You can only add plugins to so called "custom" applications. Custom applications basically means that you need to own the application. One side-effect is, that you don't get any automatic update any more. This ensures that any platform update does not break your application.
2. Plugins are always versioned. So a update to a plugin will result in a new version, and if it is incompatible, this update will not break.

You can anyhow update applications and plugins. For plugin updates we simply recommend, to clone the actually application and try out, if the plugin in a newer version still works. The cloned application then is kind of a test application and can afterwards be deleted.

For blueprints you will get an option showing you to update the application. Those updates again can be tried and rolled back if some plugins are failing.

From 10.19 we will also provide additional a version matrix, which tells exactly which version of a plugin is compatible with which version of the Web SDK.

For plugin developers that want to provide always the most compatible version of their plugin, we recommend to look at our [community plugin Github project](https://github.com/SoftwareAG/cumulocity-community-plugins), which will include some CI/CD workflows to test and verify that the newest version of a plugin still works. 

#### What is repository connect and how can I use it?
Repository connect is a microservice which synchronies plugins or blueprints with an instance of our platform. It needs to be installed on the management tenant and you can connect multiple repositories. At the time of writing this article, only our Software AG public Github is connected. You can participate and share blueprints or plugins in multiple ways:
 1. Contribute to our open source plugins. A list can be found [here](https://github.com/topics/cumulocity-package). There is a official repository which is managed by the internal R&D team of Cumulocity: [https://github.com/SoftwareAG/cumulocity-community-plugins](https://github.com/SoftwareAG/cumulocity-community-plugins)
 2. Configure repository connect on your on-prem instance and point it to your organization.
 3. Ask our product manager to add your repository as a partner repository.
 
 > Note: This is only needed if you want to share an application with every Cumulocity customer. If you want to share a package with your customers (for example on an enterprise tenant) you can simply upload them in the Packages view and set the availability to *shared*.

For synchronization the micro services searches for all repositories with a certain topic (for Software AG it's `cumulocity-package`) and a release. The release should only be one ZIP file containing the plugin or blueprint. There is a security mechanism in place which is called "scoping" which does not allow to upload a application without a certain prefix. This is to avoid that any synced package can overwrite an default application like cockpit or administration. Therefore you need to prefix the `key` and `contextPath` with the configured prefix (for Software AG it's `sag-pkg`).

All applications that are uploaded via repository connect are labeled as `community` plugins and the user is informed of the license and maintenance agreements up on installation (from version 10.18 on).

