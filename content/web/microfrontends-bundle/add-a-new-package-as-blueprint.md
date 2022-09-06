---
title: Custom package blueprint with Module Federation
layout: redirect
weight: 40
---

**Version:** 1011.153.0 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

Blueprints are combination of multiple UI functionalities that can be hosted by the platform (static files) and can be used to scaffold a new solution from scratch. On the other hand, a package is the composition of plugins and blueprints. As a blueprint can export plugins as well, they can be packed together into one package and deployed to the platform.

### Initialize the blueprint example

1. Use the command shown below to start a multi-step process of creating a sample blueprint:

```js
c8ycli new
```

2. Select the plugin name, for example, "package-blueprint":

```js
? Enter the name of the project:  (my-application) package-blueprint
```

3. Select the version for which you want to create a sample application, for example, "1015.33.0 (next)":

```console
? Which base version do you want to scaffold from? (Use arrow keys)
  1011.0.30 (latest)
> 1015.33.0 (next)
  1015.0.39
  1014.0.104
  1013.0.193
  1010.0.38
  other
```

4. Select an application template as the basis for your plugin, for example, "package-blueprint":

```console
? Which base project do you want to scaffold from?
  cockpit
  devicemanagement
  hybrid
> package-blueprint
  tutorial
  widget-plugin
  administration
```

After a few seconds, you should see the following message:

```console
Application created. Go into the folder "app-blueprint" and run npm install
```

5. Navigate to your application folder and execute `npm install`.

The application folder should look like the example shown below.
For this tutorial, the most important files are _package.json_ and `README.md`.

```console
app.module.spec.ts;
jest.config.js;
README.md;
tsconfig.spec.json;
app.module.ts;
package.json;
setup-jest.js;
index.ts;
polyfills.ts;
tsconfig.json;
```

You have now created your first package blueprint that uses Module Federation.

### Differences in approach to creating custom applications

There are a couple of differences between a simple widget and one that is built according to the Module Federation guidelines.

The biggest difference is the _package.json_ file, where fields such as `isPackage` and `package` and `exports` (not in the current blueprint app) are located.
The following list shows the fields and what they are responsible for:

- `isPackage`: Indicates if the application is a package. In case of a widget that is added using Module Federation, set the value to `true`.
- `package`: The type of package (for example, `blueprint`, but the type of the package can also be a plugin.).
- `exports`: Important field. Defines the Angular modules that will be made available by the widget-plugin for the shell application (see also the _README.md_ file).
  - `name`: The name of the exported module.
  - `module`: The name of the Angular module class.
  - `path`: The path to the TypeScript file with the module.
  - `description`: A brief description of what the module does.

{{< c8y-admon-info >}}
A blueprint can also include plugins, which can later be used to extend other applications.
{{< /c8y-admon-info >}}

### 3. Deployment

Uploading the package is the same as for regular widgets.
Execute the following commands sequentially:

```js
npm run build
```

and

```js
npm run deploy
```

Follow the console prompt to deploy the application to your tenant.
