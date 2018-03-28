---
title: Create a plugin
layout: redirect
order: 20
---

Inside your application folder, run the command:

```console
$ c8y create:plugin deviceContact
```

Then edit the [plugin manifest](/guides/web/introduction#plugin-manifest) in "plugins/deviceControl" to add the following information:

```json
{
	"name": "Device Details - Contact",
	"description": "Plugin adds a Contact tab to Device Details view"
}
```

Then create a file "deviceContact.module.js" at the plugin's root folder to have the following content:

```js
(function () {
	'use strict';

	angular.module('myapp.deviceContact', []);
}());
```

Update the application manifest to add this new plugin to the import list.

```console
{
	...
	"imports": [
		...
		"myapplication/deviceContact"
	]
}
```
