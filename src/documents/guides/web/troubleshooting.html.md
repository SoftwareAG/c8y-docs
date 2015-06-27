---
order: 30
title: Troubleshooting
layout: default
---
## Overview

This section lists common isses and workarounds.

## My code is not run or error messages are printed on the console

If you find that your code is not run, carry out the following checks:

* Run "grunt pluginRegisterAll" and "grunt appRegister" again to make sure that the registration is up to date.
* If you are using Chrome, open the Chrome Developer Tools.
* Click on the "Sources" tab and open the "apps" folder.
 * Check if all plugins are loaded that are listed in the "import" section of your manifest.
 * Check also that all required files in your plugin are loaded.
* If files are missing, check if they are listed in the corresponding manifest. For example, JavaScript files need to be listed in the "js" section to be loaded.

## My code runs locally but not when I run it through my tenant

If you get error messages only when running your application through your tenant:

* Verify that all required files are contained in the "build" folder. If files are missing, check the corresponding "copy", "css" and "less" sections of your manifests.
* Verify that all the files are added to revision control. For example, for Mercurial, run "hg status" to check for missing files and add them.
* Push your latest version to your source code repositroy. For example, use "hg push" for Mercurial.

## I cannot get a 3rd party library to run in my plugin

An easy way to include 3rd party libraries into your plugin is to use [Bower](http://bower.io). List the 3rd party libraries in your bower.json file and install them using "bower install". Then list the needed artifacts from the 3rd party library in your plugin. 

For example, to include the latest version of Chart.js in your plugin, create a bower.json file in the root folder of your application with the following content:

	{
		"name": "<your app>",
		"version": "<your version>",
		"dependencies": {
    		"Chart.js": "latest"
		}
	}

Then run "bower install". In the "cumulocity.json" manifest of your plugin, reference Chart.js as follows:

	"js": [
		...
		"bower_components/Chart.js/Chart.js"
	]

