---
order: 20
title: Brief background
layout: standalone
---

As the web ecossystem evolves, as a platform we have to evolve with it, while still trying very hard to avoid disrupting our developer community making sure the upgrade paths are smooth as possible and that their extensions keep working properly with very little changes.
This process involves tradeoffs, so we believe that providing some background information on how the stack and the build process has evolved over time to better you'll help you better understand why some parts work way they work today.

From day one, the UI always had a modular architecture. However, the exact modules and how they work together has changed over time, as a result of our experience on what worked well and what created problems.

### Plugins

The term "plugin" has been used in the UI since the beginning, and in the first generation it made more sense than it does now. We tried to remove the term and replace it with the term "module", but the name keeps being used. We have realized that we might as well just embrace it, especially to ease the communication with developers when it comes to migration. But plugins are nothing else than modules.

Very simply said:

    Plugins are modules

### 1st Generation

In the first generation, each application had exported plugins and imported plugins. The exported plugins were the ones available for being used throughout the platform and the imported plugins were the functionality visible in the application.

This way each application had two functions:

* the UI interface that you usually expect
* a package that exposed functionality

The information on applications and plugins was stored in the database through an API. Each plugin had to be created in the context of each application. Although we already had the manifest files we used that information and called the APIs storing the data.

The rest API could be reached at ```applications/<id>/plugins``` but it has now been deprecated.

At this time we had:

|App context|Repo
|-------|------
|core | m2m/cumulocity-ui
|administration | m2m/cumulocity-ui-administration
|devicemanagement | m2m/cumulocity-ui-devicemananagement
|cockpit | m2m/cumulocity-ui-cockpit

Core was an application that did not import any plugin, it just exported plugins.

The loading of the modules was entirely dynamic. We served a very basic index.html that was the same for all applications, logged in the user with just a small javascript layer and only after authentication we fetched the application information and loaded the appropriate plugins from the respective applications and finally bootstrap the angularJS app. So after login we had something like this:

```html
  <!-- Added with js -->
  <script src="/apps/core/main.js"></script>
  <script src="/apps/core/plugin1/main.js"></script>
  <script src="/apps/administration/pluginA/main.js"></script>
  <script src="/apps/devicemanagement/pluginZ/main.js"></script>
```

As the information of what plugins where imported in each app was completely controlled by a REST api, every app could be easily edited from the UI: it was possible to move functionality around, adding or removing plugins from each app. This just meant updating the list of imports of each application.

With this structure we could easiliy find the url from the definitions ```<app>/<plugin>``` this influence is still visible today in many of the plugin names.

With a 3rd party client application we might endup with something like this
```html
  <script src="/apps/core/main.js"></script>
  <script src="/apps/cockpit/dashboards/main.js"></script>
  <script src="/apps/myapplication/pluginA/main.js"></script>
```

With this model, everytime there was an update in production the 3rd party apps would get the latest version of corse and plugins, and sometimes there were issues with breaking changes that would affect 3rd parties.

Deploying multiple versions of the some app was very difficult because as they were all interconnected there was the need to deploy them all at the same time, and change all the imports, ex: core-beta, devicemanagement-beta.

#### Build and deployment

The build was done using grunt. Eventually we even created an npm module to contain all the grunt plugins and configuration required.

Building meant to build each exported plugin for the application and commit it into a build folder in the application repository.

There was no hosting of files. We committed the build to a folder and proxied the requests to our version control system.

The build folder looked like this:

```
build
  index.html
  pluginA
    main.js
    main.css
  pluginB
    main.js
    main.css
```

Deploying envoked running the script that read the cumulocity.json files, and update the data through the API as well as merging the branch to default so that it served from bitbucket.

In the beginning we also loaded the 3rd party dependencies through a CDN.

At this point we definitely missed to use a module loader like requireJS. It would have created much more complexity and the known awkwardness with Angular's own modules, but it would also have made the current transition to modern JS much simpler.

### 2nd Generation

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

Although plugins are not just data any longer, we still allow to change the applications with the UI, but it's actually an API that changes the file system. We delete directories, and upload zip to create new directories, and mutate the index.html.

#### Build and deployment

We start supporting .zip uploads for the app, so we no longer commit builds to repo.

By this time, we also realise that time working with tooling was mostly fighting with grunt to make it do what we wanted. Gulp was already popular as simply using npm scripts for the build. At this time we build cumulocity-tools that has been serving us ever since.

Build would now mean compiling a single zip package containing all the plugins, all the applications definitions, and all the targets.

Deploying would require a build, were the app and target definitions where read, the build plugins where copied and the index.html generated. We would call this assembling the apps, it would just use the same assets from the global build.

3rd party developers would now need to get hold of our plugins to develop and build their apps. So we start deploying a node package to a public url and it would be installed via npm. These packages would contain the same built versions that is used in the builtin apps with minified code and bundled dependencies.

### Next Generation

The trigger to this is the migration from AngularJS to Angular. We needed a module bundler and webpack was the natural choice.

The whole process was focused on enabling the complete stack of modern web dev and try to remove as much specificity from the process as possible.

One big change is that so far, modules (or plugins) where always represented during development and after build, so they could easily be composed by adding or removing a script. As we are now bundling everything, the modules can only be put together during development so the possibility to edit an app from the UI disappears for now.

At this point, plugins are trully just modules. We will keep the name around to refer to subpackages that contain some kind of isolated functionality.

#### Publishing to npm

Where before we would publish a tgz to our server, we will now deploy to npm:
@c8y/cli
@c8y/client
@c8y/style
@c8y/ng1-modules
@c8y/ngx-components

#### Branding no longer part of the app

So far branding was always considered part of the app, a module like any other. When there was the need to change we have to change the app definition. For this we used the targets definitions, now it's a build time options that reflects into it's own entry point in the app. When build an app you'll have one entry point for the app and another for the branding.

#### Migrating

We still support manifest files as entry points, so it's possible to use these or normal package.json files.
As mentioned above we tried to make the transition as smooth as possible.

Looking into the repo [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples/branch/next?dest=develop#diff) the diff with the changes is very clearly very concise:

- Add dependencies
- Add (css) to every http @import declaration inside a less file.

#### Deprecating custom manifests

Now developers have at their disposal all modern js, so just need to use normal ESM to import and export dependencies. So although the manifest files will still work they are no longer necessary.
