------
order: 30
title: Setup
layout: redirect
------

### <a name="prerequisites"></a>Prerequisites

Plugins are based on HTML5. You should be familiar with the following technologies:

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [AngularJS 1.x](https://angularjs.org/).


You will need the following prerequisites for being able to develop plugins and to execute the examples:

* You will need [Node.js](http://nodejs.org/) *(6.7 or newer)*
* You will need [npm](https://www.npmjs.com/) *(installed with Node.js)*
* You will need access to your Cumulocity account, i.e. you need your tenant name, username and password.

### <a name="cli-tool"></a>Cumulocity CLI tool

Once all prerequisites are fulfilled, you are almost ready to go to build your own application and plugin. For the process of developing a plugin (building, theming, translating and deploying your apps and plugins), you will need the npm package "cumulocity-tools" installed globally on your machine. To install the npm package, execute the following command on your terminal.

```bash
$ npm i cumulocity-tools -g
```

Now you are ready to use the command line interface (CLI) tool. Try it out by executing the following command:

```bash
$ c8y --help
```

The "--help" option displays all available commands for the CLI tool.

### <a name="ui-package"></a>Cumulocity UI package

As already described above, applications are always a collection of plugins. We provide a set of plugins you can build on in addition to your own. But before that, you must add a "package.json" file to the folder you will use for your application. To generate the "package.json" file automatically, simply run:

```bash
$ npm init
```

> Note that this command prompts you to enter values for several properties which will be included in the "package.json" file. The "package.json" file should include at least a name and version. To skip a property, press enter.

Then proceed to install the Cumulocity UI package containing the set of plugins by typing in the following command:

```bash
$ c8y install latest
```

This command will:
- Check for the latest version of the Cumulocity UI package.
- Download the package.
- Add it as a dependency inside the "package.json" file.

Instead of "latest", you can also specify a certain version number, but this version has to be the same or less than the backend version number.

> Note that when sharing your project, other developers only need to run  ```npm install``` inside the root folder of the application project, as the version of the Cumulocity UI package is already defined as a dependency in the "package.json" file. You can always install other versions by running the ```c8y install``` command again.

> You can see the list of plugins an application uses by utilizing the command "c8y util:showimports \[appContextPath\]".
