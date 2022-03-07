---
title: Custom widget plugin with Module Federation
layout: redirect
weight: 30
---

**Version:** 1011.153.0 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

See [Add a custom widget to a dashboard > Create the widget components](#2-create-the-widget-components) for how to create a simple widget, what its structure looks like and how to add it to your application.
This tutorial focuses on how you can add this widget to an application using the **Module Federation** and how this process differs from the previous one.

The solution below is fully based on the Module Federation functionality introduced in Webpack 5.
For more information on the functionality refer to [Webpack: Module Federation](https://webpack.js.org/concepts/module-federation/).

## 1. Initialize the widget plugin example

Use the below command which starts a multi-step process of creating a sample plugin:

```js
c8ycli new
```

Select the plugin name, for example "widget-plugin":

```js
? Enter the name of the project:  (my-application) widget-plugin
```

Select the version for which you want to create a sample application, for example "1013.72.0 (next)":

```console
? Which base version do you want to scaffold from? (Use arrow keys)
  1011.0.18 (latest)
❯ 1013.72.0 (next)
  1013.0.63
  1010.0.29
  1009.0.33
  1007.0.47
  other
```

Select an application template as the basis for your plugin, for example "widget-plugin":

```console
? Which base project do you want to scaffold from?
  administration
  application
  cockpit
  devicemanagement
  hybrid
  tutorial
❯ widget-plugin
```

After a few seconds, you should see the below message:

```console
Application created. Go into the folder "widget-plugin" and run npm install
```

Navigate to your application folder and execute `npm install`.

The application folder should look like the one below.
For this tutorial, the most important files are `package.json` and `README.md`.

```console
app.module.spec.ts;
jest.config.js;
README.md;
tsconfig.spec.json;
app.module.ts;
package.json;
setup-jest.js;
widget/;
index.ts;
polyfills.ts;
tsconfig.json;
```

You have created your first plugin that uses Module Federation.

## 2. Differences in approach to creating custom widgets

Before taking the next steps, such as firing up your local development server or uploading the application to your own tenant, we'll pause for a moment to discuss

There are a couple of differences between a simple widget and one that is built according to the Module Federation guidelines.

The biggest difference is the package.json file, where fields such as `isPackage`, `package` and `exports` are located.
See below for a list of the fields and what they are responsible for:

- `isPackage`: Indicates whether the application is a package. In case of a widget that is added using Module Federation, set the value to `true`.
- `package`: The type of package, for example `plugin`.
- `exports`: This field is important because it defines the Angular modules that will be made available by the widget-plugin for the shell application (also see the README.md file):
  - `name`: The name of the exported module, that is "Example widget plugin".
  - `module`: The name of the Angular module class, that is "WidgetPluginModule".
  - `path`: The path to the TypeScript file with the module. Since the file is nested, use the following path: <kbd>./widget/widget-plugin.module.ts</kbd>.
  - `description`: A brief description of what the module does.

>**Info**: When creating plugins, keep in mind that custom modules are the backbone of this approach. The exported module is treated as the entry point that will link the plugin together with the application referred to as the shell. You can create several modules and then export them. Such modules should contain ready-made functionality.

>**Info**: Such modules behave like lazy loading modules. They are not loaded upfront as one big package, but instead like a collection of smaller packages loaded on demand.

>**Info**: Each module can use the HOOK concept to extend it with additional features, see [Extend an existing application and use hooks](#extend-an-existing-application). For example, a plugin can add another entry to the navigation menu by using `HOOK_NAVIGATOR_NODES` as described in [Hooking a navigator node](#3-hooking-a-navigator-node).

There is also a difference in how to start the local development server.
See below.

## 3. Local server, debugging and deployment

### Local server

To make the process of creating a new plugin smooth, the local server command was extended with a new flag to proxy all requests to the shell application, which is "cockpit".

Run `npm install`, then start your local server:

```js
npm start -- --shell cockpit
```

You should see the following output:

```shell
Shell application: cockpit
http://localhost:9000/apps/cockpit/index.html?remotes=%7B%22widget-plugin%22%3A%5B%22WidgetPluginModule%22%5D%7D
```

The link redirects you to the cockpit login screen.
Once logged in, add the **widget-plugin** to your dashboard in the **Add widget** dialog:

![Add widget](/images/web-sdk/module-federation-widget-plugin.png)

The rest of the widget editing process is the same.
After making changes, refresh your browser with F5 to see them.

### Debugging

There is another difference in the *package.json* file between a regular widget and a widget modified for Module Federation:

```json
...
"remotes": {
  "widget-plugin": [     // contextPath
    "WidgetPluginModule" // module class name
  ]
}
...
```

>**Info**: The `remotes` field is used to import modules. To properly import a module, specify the context path of the plugin (the contextPath field in *package.json*) followed by the name of the module class.

The plugin imports itself via a field called `remotes`.
This facilitates application debugging and is the recommended first step in verifying the correctness of the exported module.
After importing your own modules, execute `npm start` to see if the local server starts.

For later stages of checking the plugin, we recommend you to check it locally with various shell applications, using `npm start -- --shell cockpit`.

### Deployment

Uploading the widget is not changed.
Execute the following commands sequentially:

```js
npm run build
```

and

```js
npm run deploy
```

Follow the console prompt to deploy the application to your tenant.

## 4. Adding a deployed widget to the shell application

In the current version the views and logic related to Module Federation are hidden behind the beta flag.
To add the uploaded widget-plugin to the dashboard in the Cockpit application, follow these steps:

- Enable the **beta flag** in the Administration application: `https://<yourTenantUrl>/apps/administration?beta=true`. You should now be able to access the **Packages** tab in *Administration application > Ecosystem > applications > Packages*), where you can see the details of your plugin.

- If you already have a **custom cockpit**, navigate to its details page and then to the **Plugins** tab. Install the **widget-plugin**.

- If you don't have your own version of the cockpit, navigate to *Administration application > Ecosystem > applications* and then click the **Add application** button. In the resulting dialog, select the option **Duplicate existing application**. Then select **Cockpit (Subscribed)** from the available list of applications. You will be able to edit fields such as **name**, **application key**, and **path**. Use the default values and proceed. Install **widget-plugin** in the cloned application.

Your custom widget is now available in your version of the cockpit.
Navigate to your dashboard where the newly added widget will be available in the list of widgets to add.

The **widget-plugin** was installed from within the administration application. This is the main difference between the regular and the new approach when it comes to widgets.
Module Federation allows us to add new functionality while the application is **running** (runtime), whereas the old approach only allowed new functionality to be added before the application was **built** (compile time).
