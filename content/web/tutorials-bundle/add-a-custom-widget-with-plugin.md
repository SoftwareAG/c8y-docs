---
title: Custom widget plugin with Module Federation
layout: redirect
weight: 30
---

**Version:** 1011.153.0 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

In the tutorial titled [Create the widget components](https://cumulocity.com/guides/web/tutorials/#2-create-the-widget-components) you can learn the details of how to create a simple widget, what its structure looks like and how to add it to your application. However, in this tutorial we will focus on how we can add this widget to the application using the **Module Federation**, and how this process differs from the previous one.

This solution is fully based on the Module Federation functionality introduced in Webpack 5. In this tutorial we will use the concepts introduced with it. To understand exactly what this functionality is about we recommend you to visit the website [Webpack: Module Federation](https://webpack.js.org/concepts/module-federation/).

## 1. Initialize the widget plugin example

The first step will be to use the below command, which will start a multi-step process of creating a sample plugin.

```js
c8ycli new
```

In the second step, select the plugin name (I chose the name **widget-plugin**).

```js
? Enter the name of the project:  (my-application) widget-plugin
```

In the third step you will select the version on the basis of which you want to create a sample application (I chose the version **1013.72.0 (next)**).

```js
? Which base version do you want to scaffold from? (Use arrow keys)
  1011.0.18 (latest)
❯ 1013.72.0 (next)
  1013.0.63
  1010.0.29
  1009.0.33
  1007.0.47
  other
```

The fourth step - which is the most important one for us - presents application templates from which we can create our own custom application (or in our case, plugin). In this case, select the entry called **widget-plugin**.

```js
? Which base project do you want to scaffold from?
  administration
  application
  cockpit
  devicemanagement
  hybrid
  tutorial
❯ widget-plugin
```

After a few seconds, you should see the below message informing you that the application has been successfully created and that you should go to the application folder and execute the `npm install` command.

```js
Application created. Go into the folder "widget-plugin" and run npm install
```

The application folder should look more or less like the one below. From the point of view of this tutorial, the most important files are **package.json** and **README.md**.

```js
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

**Congratulations! At this point you have just created your first plugin that uses Module Federation.**

## 2. Differences in approach to creating custom widgets

Before taking the next steps, such as firing up your local development server or uploading the application to your own tenant, we'll pause for a moment to discuss the differences between a simple widget and one that is built according to the Module Federation guidelines.

The main change was in the package.json file, where fields such as **isPackage**, **package** and **exports** were added. The fields in question are responsible for:

- **isPackage**: Indicates whether the application is a package, in the case of a widget that is added using Module Federation, we need to set this value to **true**,
- **package**: Tells us what type of package it is, in our case we need to set the value of this field as **plugin**,
- **exports**: This field is very important, it's where we define all the Angular modules that will be made available by the widget-plugin for the shell application (more about this in the README.md):
  - **name**: The name of the exported module i.e. **"Example widget plugin"**,
  - **module**: The name of the Angular module class, in our case it will be **"WidgetPluginModule"**,
  - **path**: Path to the typescript file with the module. Since the file is nested, the following path should be given: **"./widget/widget-plugin.module.ts"**,
  - **description**: A brief description of what the module does.

> **Info**: When creating plugins, keep in mind that custom modules are the backbone of this approach. The exported module is treated as the entry point that will link the plugin together with the application referred to as the shell. Nothing stands in the way of creating several modules and then exporting them. Keep in mind that such modules should contain ready-made functionality.

> **Info**: Such modules behave as lazy loaded modules. They are not loaded upfront as one big package, but like a collection of smaller packages loaded on demand.

> **Info**: Each module can use the HOOK concept to extend it with additional features (see [Hook's](https://cumulocity.com/guides/web/tutorials/#extend-an-existing-application)). For example, a plugin can add another entry to the navigation menu by using [HOOK_NAVIGATOR_NODES](https://cumulocity.com/guides/web/tutorials/#3-hooking-a-navigator-node).

Another change you may notice is how to start the local development server. We will discuss this in the next subsection.

## 3. Local server, debugging and deployment

### Local server

To make the process of creating a new plugin smooth, we had to extend the local server command. We added a new flag to proxy all requests to the **shell** application. In our case, this will be **cockpit**.

```js
npm start -- --shell cockpit
```

> **Info**: Don't forget to run **npm install** before trying to fire up your local server.

After executing the command, you should see the following entry with a link in the console:

```sh
Shell application: cockpit
http://localhost:9000/apps/cockpit/index.html?remotes=%7B%22widget-plugin%22%3A%5B%22WidgetPluginModule%22%5D%7D
```

After clicking on this link, you will be redirected to the "Cockpit" login screen. Once logged in, you will be able to add the **widget-plugin** to your dashboard via the **"Add widget"** modal.

![Add widget](/images/web-sdk/module-federation-widget-plugin.png)

The rest of the widget editing process is the same. After making changes, you will need to refresh your browser (**F5**) to see them.

### Debugging

There is one more change to the package.json file that I didn't mention earlier. If you compare the package.json of a widget created by the traditional method with its counterpart in a widget modified for Module Federation. You may notice that the plugin imports itself via a field called **"remotes"**. This procedure is intended to facilitate the application debugging process and is recommended as the first step in verifying the correctness of the exported module. After importing your own modules, you can use the `npm start` command to see if the local server will start.

**package.json**:

```json
...
"remotes": {
  "widget-plugin": [     // contextPath
    "WidgetPluginModule" // module class name
  ]
}
...
```

> **Info**: The remotes field is used to import modules. To properly import a module, specify the context path of the plugin (the contextPath field in package.json) followed by the name of the module class.

In the later stage of checking the plugin, we recommend checking it localy with various shell applications, using the already mentioned command `npm start -- --shell cockpit`.

### Deployment

Uploading the widget has not changed either. You only need to execute the following commands sequentially.

```js
npm run build
```

and

```js
npm run deploy
```

Follow the prompts in the console to deploy the application to your tenant.

## 4. Adding a deployed widget to the shell application

In the current version the views and logic related to Module Federation are hidden behind the beta flag, to add the uploaded widget-plugin to the dashboard in the **"Cockpit"** application we need to perform a couple of steps:

- You need to enable the **beta flag** in the **administration application**, do so as follows: `https://<yourTenantUrl>/apps/administration?beta=true`. You should now be able to access the **"Packages"** tab (`Administration application > Ecosystem > applications > Packages`), where you can see the details of your plugin.

- If you already have a **custom cockpit**, just go to its details and there to the **"Plugins"** tab. Where you should install the **widget-plugin**.
- In case you don't have your own version of the cockpit. Go to `Administration application > Ecosystem > applications` and then use the "Add application" button. A window will appear with an option which is called **"Duplicate existing application"**, select it, then from the available list of applications select **"Cockpit (Subscribed)"**. You will be able to edit fields such as **"name"**, **"application key"**, and **"path"**. We chose the default value in this case. Continue to follow the same process. You just need to install **widget-plugin** in the cloned application.

Congratulations! At this point, your custom widget is now available in your version of your cockpit. Head over to your dashboard and enjoy the newly added widget. It will now be available in the list of widgets to add.

As you may have already noticed the **widget-plugin** was installed from within the administration application. This is the main difference between the old and new approach when it comes to widgets (and more). Module Federation allows us to add new functionality while the application is **running** (runtime approach), unlike the old approach where the functionality had to be added before the application was **built** (compile time).
