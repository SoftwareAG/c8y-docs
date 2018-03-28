---
title: I cannot get a 3rd party library to run in my plugin
layout: redirect
order: 30
---

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
