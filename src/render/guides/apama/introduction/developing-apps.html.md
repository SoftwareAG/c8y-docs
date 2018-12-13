---
order: 10
title: Developing applications
layout: redirect
---

You can use [Software AG Designer](http://www.apamacommunity.com/downloads/) to develop your applications. 

Create an Apama project in Software AG Designer and enable it for Cumulocity connectivity. For further information on that refer to [The Cumulocity IoT Transport Connectivity Plug-in](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3/apama10-3/apama-webhelp/#page/apama-webhelp%2Fco-ConApaAppToExtCom_the_cumulocity_connectivity_plug_in.html%23) in the Apama documentation.

You will need to provide your Cumulocity credentials in the project configuration. Configure the credentials in the `CumulocityIoT.properties` file under the Cumulocity client as follows:

```
CUMULOCITY_USERNAME=user@example.com
CUMULOCITY_TENANT=exampleTenant
CUMULOCITY_PASSWORD=examplePassword
CUMULOCITY_APPKEY=apamaAppKey

```

>**Info:** You need to [create an application](/guides/users-guide/administration#managing-applications) in Cumulocity to get a value for CUMULOCITY_APPKEY.

Develop and test your EPL in Software AG Designer.
