---
weight: 35
title: Managing and monitoring microservices
layout: redirect
helpcontent:
  - label: microservices
    title: Microservices
    content: "A microservice is a specific type of application, that is a server-side application used to develop further functionality on top of Cumulocity IoT.


    As web applications, microservices can either be subscribed to your tenant by the platform or by a service provider, or they can be owned by you as custom applications.


    Click on a microservice to view the application properties. To add a microservice, click **Add microservice** and follow the instructions in the wizard or in the *User guide*."
---

Click **Microservices** in the **Ecosystem** menu in the navigator to display a list or grid of all  microservices subscribed to your account.

<img src="/images/users-guide/Administration/admin-microservices.png" alt="Microservices list">

A microservice is a specific type of application, that is a server-side application used to develop further functionality on top of {{< product-c8y-iot >}}. As web applications, microservices can either be subscribed to your tenant by the platform or by a service provider, or they can be owned by you as custom applications, see [Custom microservices](#custom-microservices).

### Subscribed microservices

{{< product-c8y-iot >}} provides a variety of microservice applications for different purposes. Depending on your installation and/or optional services your tenant will show a selection of the potentially available applications.

Below you find a list of all microservices which are by default subscribed in a {{< standard-tenant >}} and/or {{< enterprise-tenant >}}. In addition, numerous optional microservices might be subscribed to your tenant.

#### Microservices subscribed by default

<table>
<col width="200">
<col width="400">
<col width="200">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Name in the UI</th>
<th style="text-align:left">Functionality</th>
<th style="text-align:left">Identification in the API</th>
<th style="text-align:left">Availability</th>
</tr>
</thead>
<tbody>

<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/#microservice-and-applications" class="no-ajaxy">Apama-ctrl-1c-4g</a></td>
<td style="text-align:left">Full Apama microservice. Runtime for Analytics Builder, EPL Apps, and smart rules</td>
<td style="text-align:left">apama-ctrl-1c-4g</td>
<td style="text-align:left">{{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/#microservice-and-applications" class="no-ajaxy">Apama-ctrl-starter</a></td>
<td style="text-align:left">Restricted version of the Apama microservice. Runtime for an unlimited number of smart rules and a limited number of Analytics Builder models</td>
<td style="text-align:left">apama-ctrl-starter</td>
<td style="text-align:left">{{< standard-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/#microservice-and-applications" class="no-ajaxy">Apama-ctrl-smartrules</a></td>
<td style="text-align:left">Restricted version of the Apama microservice. Runtime for smart rules only, no Analytics Builder models or EPL apps available</td>
<td style="text-align:left">apama-ctrl-smartrules</td>
<td style="text-align:left">Only available for self-hosted installations</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/device-management#simulator" class="no-ajaxy">Device-simulator</a></td>
<td style="text-align:left">Simulate all aspects of IoT devices</td>
<td style="text-align:left">device-simulator</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/cockpit#reports" class="no-ajaxy">Report agent</a></td>
<td style="text-align:left">Schedule data exports from within the Cockpit application</td>
<td style="text-align:left">report agent</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/cockpit#smart-rules" class="no-ajaxy">Smartrule</a></td>
<td style="text-align:left">Use the smart rules engine and create smart rules to perform actions based on realtime data. Requires one of the following microservices: apama-ctrl-1c-4g, apama-ctrl-starter, or apama-ctrl-smartrules</td>
<td style="text-align:left">smartrule</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/enterprise-tenant#customization" class="no-ajaxy">Sslmanagement</a></td>
<td style="text-align:left">Activate your own custom domain name by using an SSL certificate</td>
<td style="text-align:left">sslmanagement</td>
<td style="text-align:left">{{< enterprise-tenant >}}</td>
</tr>

</tbody>
</table>

{{< c8y-admon-info >}}
All applications listed here are of the type "Microservice".
{{< /c8y-admon-info >}}

<a name="custom-microservices"></a>
### Custom microservices

<a name="adding-microservices"></a>
#### To add a microservice as custom application

1. Click **Add microservice** at the top right.
2. In the resulting dialog box, drop a ZIP file or browse for it in your file system. Note that the size limit of the file to be uploaded is 500 MB.
3. The microservice application is created once the ZIP file has been successfully uploaded.

{{< c8y-admon-important >}}
The ZIP file must contain the application manifest and the Docker image of the microservice. Refer to [General aspects](/microservice-sdk/concept) in the *Microservice SDK guide* for information on preparing and deploying the microservice package.
{{< /c8y-admon-important >}}

<a name="microservice-properties"></a>
### Microservice properties

To display further details on a microservice, click it to open its **Properties** tab.

<img src="/images/users-guide/Administration/admin-microservice-properties.png" alt="Microservice properties" style="max-width: 100%">

In the **Properties** tab, each microservice will show the following information:

<table>
<col width="250">
<col width="450">
<col width="300">
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Unique ID to identify the microservice</td>
<td style="text-align:left">Automatically provided</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Application name; will be shown as title of the microservice application in the top bar</td>
<td style="text-align:left">Automatically created, based on the ZIP file name</td>
</tr>
<tr>
<td style="text-align:left">Application key</td>
<td style="text-align:left">Used to identify the microservice application and to make it available for subscription, see the <a href="/concepts/applications" class="no-ajaxy">Concepts guide</a></td>
<td style="text-align:left">Automatically created, based on the ZIP file name</td>
</tr>
<tr>
<td style="text-align:left">Type</td>
<td style="text-align:left">Application type</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left">Path</td>
<td style="text-align:left">Part of the URL invoking the application</td>
<td style="text-align:left">Automatically created as .../service/<microservice-name></td>
</tr>
</tbody>
</table>

Below, you will additionally find information on the microservice version, as well as on its isolation level and billing mode, see [Enterprise tenant > Usage statistics and billing > Microservice usage](/users-guide/enterprise-tenant/#microservice-usage ) for details on these parameters.

#### Microservice subscription

At the top right of the **Properties** tab, you find a toggle to subscribe to or unsubcribe from a microservice.

<img src="/images/users-guide/Administration/admin-microservice-subscribe.png" alt="Microservice subscription" style="max-width: 100%">

Changing the subscription is only possible for custom microservices, that is microservices being owned by you.

### Microservice permissions

In the **Permissions** tab you can view the permissions required for the respective microservice, and the roles provided for it.

<img src="/images/users-guide/Administration/admin-microservice-permissions.png" alt="Microservice permissions" style="max-width: 100%">

### Monitoring microservices

You can monitor microservices hosted by {{< product-c8y-iot >}} in two ways.

#### Status information

The status of the microservice can be checked in the **Status** tab of the respective microservice application.

<img src="/images/users-guide/Administration/admin-microservice-status.png" alt="Microservice status" style="max-width: 100%">

To view the status you need the following permissions: role Application management READ and role Inventory READ.

The following information is provided on the **Status** tab:

* Instances - number of active, unhealthy and desired microservice instances for the current tenant.
* Subscriptions - number of active, unhealthy and desired microservice instances for all subtenants subscribed to the microservice.
* Alarms - alarms for given application, provided in realtime.
* Events - events for given application, provided in realtime.
* Smart rules - alarms for given application.

The status information is available for subscribed applications as well as for own applications. Information on subscribed subtenants is only visible for the application owner.

##### Alarms and events

Most of the alarms and events visible in the **Status** tab are strictly technical descriptions of what's going on with the microservice.

There are two user-friendly alarm types:

* `c8y_Application_Down` - critical alarm which is created when no microservice instance is available.
* `c8y_Application_Unhealthy` - minor alarm which is created when there is at least one microservice instance working properly, but not all of them are fully operating.

User-friendly alarms are created for the microservice owner tenant only. They are also automatically cleared when the situation gets back to normal, that is all the microservice instances are working properly.

User-friendly alarms can be used to create smart rules. For details on creating smart rules of various types, see [Smart rules](/users-guide/cockpit/#smart-rules).

For example, to send an email, if a microservice is down, create an "On alarm send email" smart rule.

In the **On alarm matching** section, use `c8y_Application_Down` as an alarm type. As a target asset select the microservice which you would like to monitor, for example "echo-agent-server".

#### Log files

{{< product-c8y-iot >}} offers viewing logs which provide more details on the status of microservices.

To view logs, open the **Logs** tab of the respective microservice.

<img src="/images/users-guide/Administration/admin-microservice-logs.png" alt="Microservice log" style="max-width: 100%">

At the top of the page, you can select the instance of the microservice, for which you want to view the logs.

{{< c8y-admon-info >}}
If your microservice was re-scaled into two instances you should be able to switch between them, but it is not possible to see the logs from both instances at once.
{{< /c8y-admon-info >}}

Next to the instance dropdown you can select the time range for the log entries to be shown by selecting a date from the calendar and entering a time.

{{< c8y-admon-info >}}
The time entered here may differ from the server time due to different time zones.
{{< /c8y-admon-info >}}

At the top right, additional functionality is provided:

* **Download** - To download the log data for a specified time range.
* **Dark theme** - To turn dark theme on or off.
* **Auto refresh** - To activate the auto refresh functionality. If activated, the displayed log data will automatically be refreshed every 10 seconds.

Initially, the **Logs** tab shows the latest logs of the microservice instance.

At the bottom right you find navigation buttons:

* **First** - directly navigates to the oldest available log entries for the microservice after its restart (maximum capacity 35 MB of logs).
* **Previous** - increases the time range in 10 minutes steps.
* **Next** - reduces the time range in 10 minutes steps.
* **Last** - directly navigates to the latest available log entries.

If no logs are available in the selected time range, a message is shown accordingly:

<img src="/images/users-guide/Administration/admin-microservice-no-logs.png" alt="Microservice log">

{{< c8y-admon-info >}}
There is no possibility to see the logs from the previously running instances or from previously rotated logs exceeding 35 MB. However, inside the instance there is a Docker container running, and if only this one was restarted (not the whole instance) you should see the logs from the currently running and also lately terminated Docker container.

Logs are always loaded from the Docker container using both `stdout` and `stderr` sources, and there is no possibility to distinguish/filter by the source.
{{< /c8y-admon-info >}}
