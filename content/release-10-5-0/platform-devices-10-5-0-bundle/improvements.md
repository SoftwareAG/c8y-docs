---
weight: 10
title: What´s New
---


### Cumulocity IoT Core

#### Installation

Cumulocity now provides an **offline installation** process for the Cumulocity IoT platform. An on-prem Cumulocity IoT cluster can now be installed and operated without requiring internet connectivity. Details can be found in the *Cumulocity IoT Multi-node installation guide* provided through the [Software AG Empower Portal](https://empower.softwareag.com) (credentials required).

#### Administration

A new login mode **OAuth Internal** has been added. This login mode provides much higher security as it stores authentication information in a cookie not reachable by JavaScript. For details, see [Administration > Changing settings](https://cumulocity.com/guides/10.5.0/users-guide/administration/#changing-settings) in the <em>User guide</em>. [26097]

It is now possible to see the inbound API requests in the Home page. [MTM-25148]

![Inbound API requests](/images/release-notes/inbound-api-requests.png)

Login alias validation in the users details page is now available. [MTM-26694]

Improved error messages when uploading microservices. [MTM-25850]

![Microservice Error Messages](/images/release-notes/microservice-error-messages.png)


#### Device Management

The filters in the **Devices** > **All Devices** page can now be configured. Subsequently, created smart groups will contain these filters. [MTM-25909]

![Configurable Columns](/images/release-notes/configurable-columns.png)

Devices shell now supports commands for Machinelink devices. [MTM-26944]


#### Web SDK

You can now add context-based routes, for example an additional tab for a certain device. Context routes help you to extend existing routes with further information. [MTM-26856]  

The Angular Web SDK now also allows for adding custom widgets developed in Angular to a Web SDK for Angular based application. With this addition, the Angular Web SDK supports all functionality of the deprecated Web SDK for AngularJS.[MTM-25425]

For details, see the [How-to recipes](https://cumulocity.com/guides/10.5.0/web/how-to/) in the <em>Web SDK guide</em>.

#### Various

[UI] A new **Legal notices** item has been added to the right drawer menu. [MTM-24734]

![Legal notices](/images/release-notes/legal-notices.png)

[CEP] Improved rendering of error messages in the CEL editor in the **Event processing** page on mouse hover. [MTM-25289]

[LWM2M] The LWM2M bootstrap server now ignores empty fields. [MTM-26657]

[Performance] Performance when ingesting complex measurement data structures has been significantly improved through a new algorithm. Switching to the new algorithm at runtime is now possible via a tenant option. [MTM-27216]

[UI] The application switcher now shows more than one subscribed external applications  [MTM-28921]


### Apama EPL Apps (formerly Apama-epl)

The application in the app switcher which was previously called “Apama-epl” is now called “Apama EPL Apps”.

The sample applications that were previously accessible from [Miscellaneous sample applications](https://cumulocity.com/guides/10.5.0/apama/examples/#misc-applications) in the *Streaming Analytics guide* are now available directly from the Apama EPL Apps application.


### Apama Analytics Builder

Apama Analytics Builder is now available in the Cumulocity IoT Cloud platform. It is integrated as a web application which is available from the application switcher.

Apama Analytics Builder allows you to build analytic models that transform or analyze streaming data in order to generate new data or output events. The models are capable of processing data in real time.

You build the models in a graphical environment by combining pre-built *blocks* into *models*. The blocks in a model package up small bits of logic, and have a number of inputs, outputs and parameters. Each block implements a specific piece of functionality, such as receiving data from a sensor, performing a calculation, detecting a condition, or generating an output signal. You define the configuration of the blocks and connect the blocks using wires. You can edit the models, simulate deployment with historic data, or run them against live systems.

See the documentation for [Apama Analytics Builder for Cumulocity IoT](https://documentation.softwareag.com/onlinehelp/Rohan/Analytics_Builder/pab10-5/apama-pab-webhelp/index.html#page/apamaanalyticsbuilder-webhelp%2Fto-AnaBui_help_index.html) for detailed information.

### Cumulocity IoT DataHub

Cumulocity IoT DataHub is now available in the Cumulocity IoT Cloud platform as an integrated web application, available from the application switcher.

In addition to running simple ad-hoc queries using REST API, Cumulocity IoT DataHub now enables you to perform more sophisticated analytical querying over the device data, potentially covering long periods of time.

With Cumulocity IoT DataHub, you can connect existing tools and applications to Cumulocity, such as

* Business Intelligence/reporting tools (using ODBC, JDBC).
* machine learning applications (mainly written in Python using ODBC).
* arbitrary custom applications (using JDBC for Java Applications, ODBC for .NET, Python, node.js, and others, or REST for Cumulocity web applications).

Main features of the Cumulocity IoT DataHub application include:

* Allows to use scalable and inexpensive storage via providing an easy-to-use data pipeline that extracts data from Cumulocity IoT’s Operational Store to a data lake for long-term archival and efficient analytical querying.
* Offers a SQL-based Query Interface for querying the data lake and enabling customers to connect arbitrary applications that either support ODBC, JDBC, or REST protocols.

See the [Datahub guide](https://cumulocity.com/guides/10.5.0/datahub/datahub-overview) for detailed information.
