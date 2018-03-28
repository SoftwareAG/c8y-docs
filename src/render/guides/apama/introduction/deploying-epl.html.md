---
order: 20
title: Deploying EPL
layout: redirect
---


You can use [Software AG Designer](http://www.apamacommunity.com/downloads/) to develop your applications. Create an Apama project in Software AG Designer and add the following adapters:

*   Apama Connectivity for Cumulocity IoT
*   HTTP Client - JSON with generic request/response event definitions

You will need to configure the Cumulocity properties with your Cumulocity credentials. Also add the bundles:

Time Format
Cumulocity Utilities
Automatic onApplicationInitialized

Develop and test your EPL in Software AG Designer.

When you are ready to deploy to Cumulocity, upload the .mon file containing your application through the "Own applications" page in the Administration application. For details, refer to [Administration > Managing applications](/guides/users-guide/administration#applications). 

When EPL is deployed to Cumulocity, each .mon file is assigned a unique package name. This prevents conflicts when multiple modules are uploaded. For this reason, you should not specify a 'package' statement in the .mon files. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single .mon file.