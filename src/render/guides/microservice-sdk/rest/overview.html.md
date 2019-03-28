---
order: 10
title: Overview
layout: redirect
---

This section describes specific aspects of developing microservices using the REST interface.

Cumulocity employs REST for all external communication. Regardless whether the communication originates from IoT devices, from web applications or from backoffice IT systems, the communication protocol is always REST.

REST is a very simple and secure protocol based on HTTP(S) and TCP. It is today the de-facto Internet standard supported by all networked programming environments ranging from very simple devices up to large-scale IT. One of the many books introducing REST is [RESTful Web Services](http://oreilly.com/catalog/9780596529260).

With this API guide you will learn how to use Cumulocity's REST interfaces to develop microservice applications on top of the Cumulocity platform.

The description is closely linked to the Reference guide, which describes each interface in detail. Relevant chapters in the reference guide are in particular:

- [REST implementation](/guides/reference/rest-implementation) is the reference for all general concepts.
- [Device management library](/guides/reference/device-management) specifies the data model for device management.
- [Sensor library](/guides/reference/sensor-library) specifies the data model for sensors and controls.

If you develop applications using Java or C#, check these relevant sections for even more convenient access to Cumulocity's functionality.
For further information on REST interfaces in general and on integrating devices with REST, refer to the [REST section](https://cumulocity.com/guides/device-sdk/rest) in the Device SDK guide.


### Using the REST interfaces

Nowadays, most programming environments have particular support for REST-based communication. For experimentation and for understanding Cumulocity's REST interfaces, it is helpful to use one of the numerous available command line tools or browser extensions.

For example, many operating systems come with pre-installed tools such asthe cURL command. If you want to start browsing the Cumulocity APIs, enter on a command line:

```shell
$ curl -u <username>:<password> https://<yourTenant>.cumulocity.com/platform
```

Replace `<username>` and `<password>` with the username and password that you used to register to Cumulocity. Similarly, replace `<yourTenant>` with your tenant URL.

The command will return links to all basic interfaces of Cumulocity:

```json
...
"inventory": {
    "managedObjects": {
        "references": [],
        "self": "https://<yourURL>/inventory/managedObjects"
    },
    "managedObjectsForFragmentType": "https://<yourURL>/inventory/managedObjects?fragmentType={fragmentType}",
    "managedObjectsForListOfIds": "https://<yourURL>/inventory/managedObjects?ids={ids}",
    "managedObjectsForType": "https://<yourURL>/inventory/managedObjects?type={type}",
    "self": "https://<yourURL>/inventory"
},
...
```

To format the output to a more readable way, pass it to the `python -mjson.tool` command:

```shell
$ curl -u <username>:<password> https://<yourTenant>.cumulocity.com/platform | python -mjson.tool
```

From this point, you can navigate further to the different returned objects. For instance, display the items in the inventory by following the <kbd>managedObjects</kbd> endpoint:

```shell
$ curl -u <username>:<password> https://<yourTenant>.cumulocity.com/inventory/managedObjects
```

You will notice that just a subset of the items in the inventory is actually returned, a so-called "page". More information on page handling can be found under [Query result paging](/guides/reference/rest-implementation#paging).

### Using Postman

Graphical REST clients such as [Postman](https://www.getpostman.com/) are a convenient way to explore REST interfaces and the Cumulocity database content.

![Example REST client](/guides/images/rest/postman.png)

Cumulocity provides numerous online API examples. If you want to make use of them, [download and install Postman](https://www.getpostman.com/). After starting Postman, you can choose to either create an account or click on **Take me straight to the app**. Then click the button below and choose the variant of Postman that you have just installed. You may see a browser security prompt asking you if you actually want to run Postman (on Windows "Electron").

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7c7d00719ab238097686)

Now, click the **Collections** tab on the top left of Postman. You should see a folder _Cumulocity API_ with the examples. Open that folder and the sub-folder _Alarms_, then click on **Get collection of alarms**. This shows an example on how to get alarms from Cumulocity.

Note that the example contains placeholders, in this case a placeholder _{{url}}_ in <kbd>{{url}}/alarm/alarms</kbd>. You need to tell Postman how to fill these placeholders and by this, how to connect to your Cumulocity account. To do so, create an [environment](https://www.getpostman.com/docs/environments) and configure the placeholders.

* Click on the cogwheel on the top right and choose **Manage Environments**, then click on **Add**.
* Enter a name for the environment (e.g., your tenant name), then add values for the placeholders.
* Configure a key _url_ with a value of _https://&lt;yourTenant&gt;.cumulocity.com_. Click on **Submit**.
* Configure a key _auth_ with the value of the Authorization header for the REST requests.
* Click **Add**, then close the dialog. Now select your newly created environment from the drop-down box on the top right, that initially reads "No environment".

<img src="/guides/images/rest/postmanenvironment.png" alt="Postman environment setup" style="max-width: 50%">

A simple way to determine the correct value for the "auth" key is to use a web tool. For example, assume that your tenant name is "tenant", your username is "me" and your password is "secret". Go to http://ostermiller.org/calc/encode.html, type `tenant/me:secret` into the text area, then click the **Encode** button in the row "Base 64". The resulting text is "dGVuYW50L21lOnNlY3JldA==". Use "Basic dGVuYW50L21lOnNlY3JldA==" as value for "auth".

You can achieve the same result also by using the Base64 command as follows:

```shell
$ echo tenant/me:secret | base64
```

Now it is time to start exploring the API!
