---
order: 20
title: Deploying EPL
layout: redirect
---


You can use [Software AG Designer](http://www.apamacommunity.com/downloads/) to develop your applications. Create an Apama project in Software AG Designer and add the following connectivity bundles:

*   Apama Connectivity with Device Integration Platform 
*   Apama Connectivity with Device Integration Platform Event Definitions
*   Automatic onApplicationInitialized 
*   Cumulocity IoT (Cumulocity IoT connectivity plug-in)
*   Cumulocity Utilities
*   HTTP Client - JSON with generic request/response event definitions

Also add the following standard bundle:

*   Time Format
  
The selection of the connectivity bundles in Software AG Designer should look as follows:

<img src="/guides/images/apama/connectivity_bundles.png" alt="Connectivity bundles" style="max-width: 100%">

Similarly check the corresponding item from the standard bundles to add 'Time Format' bundle.


You will need to provide your Cumulocity credentials in the configuration files, thus in your Apama project go to config > connectivity -> CumulocityIoT and configure the the credentials as follows in `CumulocityIoT.properties` file :

```
CUMULOCITY_USERNAME=user@example.com
CUMULOCITY_TENANT=exampleTenant
CUMULOCITY_PASSWORD=examplePassword
CUMULOCITY_APPKEY=apamaAppKey

```


Analogously provide the credentials in the file `DeviceIntegrationPlatform-credentials.properties` (can be found in the `config/connectivity` folder as well) as follows:

```
DIP_USERNAME=user@example.com
DIP_TENANT=exampleTenant
DIP_PASSWORD= examplePassword
DIP_APPKEY= apamaAppKey

```
Note, you need to create an application in Cumulocity to get a value for `CUMULOCITY_APPKEY`or `DIP_APPKEY`: Login to Cumulocity and go to Adminstration. Select Applications > Own Applications. Click Create Application and use `APPLICATION KEY` value in the corresponding files.

Develop and test your EPL in Software AG Designer.

When you are ready to deploy to Cumulocity, upload the .mon file containing your application through the "Own applications" page in the Administration application. For details, refer to [Administration > Managing applications](/guides/users-guide/administration#applications). 

When EPL is deployed to Cumulocity, each .mon file is assigned a unique package name. This prevents conflicts when multiple modules are uploaded. For this reason, you should not specify a 'package' statement in the .mon files. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single .mon file.