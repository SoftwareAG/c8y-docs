---
title: My code is not run or error messages are printed on the console
layout: redirect
order: 10
---

If you find that your code is not run, carry out the following checks:

* Run "grunt pluginRegisterAll" and "grunt appRegister" again to make sure that the registration is up to date.
* If you are using Chrome, open the Chrome Developer Tools.
* Click on the "Sources" tab and open the "apps" folder.
 * Check if all plugins are loaded that are listed in the "import" section of your manifest.
 * Check also that all required files in your plugin are loaded.
* If files are missing, check if they are listed in the corresponding manifest. For example, JavaScript files need to be listed in the "js" section to be loaded.
