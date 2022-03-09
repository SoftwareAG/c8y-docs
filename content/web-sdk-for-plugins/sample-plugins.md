---
weight: 40
title: Sample plugins
layout: bundle
---

After setting up everything and getting an insight into the folder structure and manifests, you can finally start running your first "Hello world!" application and plugin.

* Clone or download and unpack the "Hello World!" plugin from [https://github.com/SoftwareAG/cumulocity-ui-plugin-examples](https://github.com/SoftwareAG/cumulocity-ui-plugin-examples).
* Change into the directory that you just created.
* Run "c8y install latest" to install the {{< product-c8y-iot >}} UI package.
* Run "c8y deploy:app myapplication". "myapplication" is the name of the "Hello World!" application specified in the "cumulocity.json" file.

You will be asked for the name and base URL of your tenant, as well as your username and password. To prevent filling out these prompts over and over again, you can define the following environment variables on your file system: ```C8Y_TENANT```, ```C8Y_USER```, ```C8Y_PASS``` and ```C8Y_BASE_URL```. For example, type "export C8Y_TENANT=demos" on a Unix system to by default create your application in the tenant "demos".

After deploying the application, it appears in the *"Own applications"* menu of the "Administration" application.

![My Application](/images/plugins/applicationeditor.png)

To see the "Hello world!" plugin, navigate to the example you just created an select the menu "New plugin". You should be able to see the text "Hello world!". You can also try out the other example plugins. For further information on the example plugins, visit the respective documents in the documentation.
