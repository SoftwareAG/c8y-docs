---
weight: 10
title: Overview
layout: redirect
---

This section describes specific aspects of developing microservices using the REST interface.

{{< product-c8y-iot >}} employs REST for all external communication. Regardless whether the communication originates from IoT devices, from web applications or from back-office IT systems, the communication protocol is always REST.

REST is a very simple and secure protocol based on HTTP(S) and TCP. It is today the de-facto Internet standard supported by all networked programming environments ranging from very simple devices up to large-scale IT. One of the many books introducing REST is [RESTful Web Services](http://oreilly.com/catalog/9780596529260).

With this API description you will learn how to use {{< product-c8y-iot >}}'s REST interfaces to develop microservice applications on top of the {{< product-c8y-iot >}} platform.

The description is closely linked to the {{< openapi >}}, which describes each interface in detail. Relevant secions in the {{< openapi >}} are in particular:

- [REST implementation](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#section/REST-implementation) is the reference for all general concepts.
- [Device management library](/reference/device-management-library/) specifies the data model for device management.
- [Sensor library](/reference/sensor-library/) specifies the data model for sensors and controls.

If you develop applications using Java or C#, check these relevant sections for even more convenient access to {{< product-c8y-iot >}}'s functionality.
For further information on REST interfaces in general and on integrating devices with REST, refer to the [REST section](/device-sdk/rest) in the *Device SDK guide*.


### Using the REST interfaces

Nowadays, most programming environments have particular support for REST-based communication. For experimentation and for understanding {{< product-c8y-iot >}}'s REST interfaces, it is helpful to use one of the numerous available command line tools or browser extensions.

For example, many operating systems come with pre-installed tools such as the cURL command. If you want to start browsing the {{< product-c8y-iot >}} APIs, enter on a command line:

```shell
$ curl -u <username>:<password> https://<yourTenant>.{{< domain-c8y >}}/platform
```

Replace `<username>` and `<password>` with the username and password that you used to register to {{< product-c8y-iot >}}. Similarly, replace `<yourTenant>` with your tenant URL.

The command will return links to all basic interfaces of {{< product-c8y-iot >}}:

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
$ curl -u <username>:<password> https://<yourTenant>.{{< domain-c8y >}}/platform | python -mjson.tool
```

From this point, you can navigate further to the different returned objects. For instance, retrieve the items in the inventory by following the <kbd>managedObjects</kbd> endpoint:

```shell
$ curl -u <username>:<password> https://<yourTenant>.{{< domain-c8y >}}/inventory/managedObjects
```

You will notice that just a subset of the items in the inventory is actually returned, a so-called "page". More information on page handling can be found under [Rest usage > Query result paging](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#section/REST-implementation/REST-usage) in the {{< openapi >}}.

### Using Postman

Graphical REST clients such as [Postman](https://www.getpostman.com/) are a convenient way to explore REST interfaces and the {{< product-c8y-iot >}} database content.

![Example REST client](/images/rest/postman.png)

{{< product-c8y-iot >}} provides numerous online API examples. If you want to make use of them, [download and install Postman](https://www.getpostman.com/). After starting Postman, you can choose to either create an account or click **Take me straight to the app**.

Download the [API examples](/files/rest/Cumulocity_API.postman_collection.json) and import them as a collection into Postman.

Now, click the **Collections** tab on the top left of Postman. You should see a folder _{{< product-c8y-iot >}} API_ with the examples. Open that folder and the subfolder _Alarms_, then click **Get collection of alarms**. This shows an example on how to get alarms from {{< product-c8y-iot >}}.

Note that the example contains placeholders, in this case a placeholder _{{url}}_ in <kbd>{{url}}/alarm/alarms</kbd>. You must tell Postman how to fill these placeholders and by this, how to connect to your {{< product-c8y-iot >}} account. To do so, create an [environment](https://www.getpostman.com/docs/environments) and configure the placeholders.

* Click the cogwheel on the top right and select **Manage Environments**, then click **Add**.
* Enter a name for the environment (for example, your tenant ID), then add values for the placeholders.
* Configure a key _url_ with a value of _https://&lt;TENANT_NAME&gt;.{{< domain-c8y >}}_. Click **Submit**.
* Configure a key _auth_ with the value of the Authorization header for the REST requests.
* Click **Add**, then close the dialog. Now select your newly created environment from the drop-down box on the top right, that initially reads "No environment".

<img src="/images/rest/postmanenvironment.png" alt="Postman environment setup" style="max-width: 50%">

For example, assume that your tenant ID is "t07007007", your username is "winter" and your password is "jh0nS0nw". A simple way to determine the correct value for the `auth` key is using the Base64 command as follows:

```shell
$ echo -n t07007007/winter:jh0nS0nw | base64
```

The resulting text is "dDA3MDA3MDA3L3dpbnRlcjpqaDBuUzBudw==" and you must use `Basic dDA3MDA3MDA3L3dpbnRlcjpqaDBuUzBudw==` as value for the `auth` key. You can achieve the same result also by using an online Base64 encode/decode tool.

Now it is time to start exploring the API!
