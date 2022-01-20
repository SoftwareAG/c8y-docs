---
weight: 35
title: Managing microservices
layout: redirect
helpcontent:
  - label: own-applications
    title: Own applications
    content: "Owned applications are custom applications owned by your tenant. You can add custom applications in various ways. They can be  


    * duplicates of subscribed applications (in order to be able to customize them)
    * web-based applications, either deployed as standalone applications or as plugins deployed into a specific application (e.g. a widget to the Cockpit dashboard)
    * server-side business logic deployed through microservices


    To add an application, click **Add application** and follow the instructions in the wizard, see also *Administration > Managing applications > Own applications* in the *User guide*.


    Click on an application card to view the application properties."
  - label: subscribed-applications
    title: Subscribed applications
    content: "Subscribed applications refer to the applications which are subscribed to your tenant, as opposed to owned applications.


    Cumulocity IoT provides a variety of applications for different purposes. Find a list of all applications in *Administration > Managing applications* in the *User guide*.


    Click on an application card to view the application properties."
---

Click **Microservices** in the **Ecosystem** menu in the navigator to display a list or grid of all  microservices subscribed to your account.



<a name="microservice-properties"></a>
#### Application properties

To display further details on the microservice, click it to open its **Properties** tab.

<img src="/images/users-guide/Administration/admin-application-properties.png" alt="Application properties" style="max-width: 100%">

In the **Properties** tab, each microservice will show the following information:

<table>
<col width= 20%>
<col width= 20%>
<col width= 20%>
<col width= 20%>
<col width= 20%>
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Hosted (Web app)</th>
<th style="text-align:left">External</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Unique ID to identify the application</td>
<td style="text-align:left">Automatically provided</td>
<td style="text-align:left">Automatically provided</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Application name. Will be shown as title of the application in the top bar and in the application switcher.</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Specified by the user</td>
</tr>
<tr>
<td style="text-align:left">Application key</td>
<td style="text-align:left">Used to identify the application and to make the application available for subscription, see the <a href="/concepts/applications" class="no-ajaxy">Concepts guide</a>.</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Specified by the user</td>
</tr>
<tr>
<td style="text-align:left">Type</td>
<td style="text-align:left">Application type</td>
<td style="text-align:left">Hosted application</td>
<td style="text-align:left">External</td>
</tr>
<tr>
<td style="text-align:left">Path</td>
<td style="text-align:left">Part of the URL invoking the application</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Specified by the user. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".</td>
</tr>
</tbody>
</table>

### Monitoring microservices

You can monitor microservices hosted by {{< product-c8y-iot >}} in two ways.

#### Status information

The status of the microservice can be checked on the **Status** tab of the respective application.

<img src="/images/users-guide/Administration/admin-microservice-status.png" alt="Microservice status" style="max-width: 100%">

The following information is provided on the **Status** tab:

* Instances: Number of active, unhealthy and desired microservice instances for the current tenant
* Subscribed tenants: Number of active, unhealthy and desired microservice instances for all subtenants subscribed to the microservice
* Alarms: Alarms for given application, provided in realtime
* Events: Events for given application, provided in realtime

The status information is available for subscribed applications as well as for own applications. Information on subscribed subtenants is only visible for the application owner.

To view the status you need the following permissions: ROLE&#95;APPLICATION&#95;MANAGEMENT&#95;READ and ROLE&#95;INVENTORY&#95;READ

##### Alarms and events

Most of the alarms and events visible in the **Status** tab are strictly technical descriptions of what's going on with the microservice.

There are two user-friendly alarm types:

* `c8y_Application_Down` - critical alarm which is created when no microservice instance is available
* `c8y_Application_Unhealthy` - minor alarm which is created when there is at least one microservice instance working properly, but not all of them are fully operating

User-friendly alarms are created for the microservice owner tenant only. They are also automatically cleared when the situation gets back to normal, i.e. all the microservice instances are working properly.

User-friendly alarms can be used to create smart rules. For details on creating smart rules of various types, see [Smart rules](/users-guide/cockpit/#smart-rules).

For example, to send an email, if a microservice is down, create an "On alarm send email" Smart Rule.

In the **On alarm matching** section, use `c8y_Application_Down` as an alarm type. As a target asset select the microservice which you would like to monitor, for example "echo-agent-server".

#### Log files

{{< product-c8y-iot >}} offers viewing logs which provide more details on the status of microservices.

To view logs, open the **Logs** tab of the respective microservice.

<img src="/images/users-guide/Administration/admin-applications-logs.png" alt="Microservice log" style="max-width: 100%">

At the top of the page, you can select the instance of the microservice, for which you want to view the logs.

> **Info:** If your microservice was re-scaled into two instances you should be able to switch between them, but it is not possible to see the logs from both instances at once.

Next to the instance dropdown you can select the time range for the log entries to be shown by selecting a date from the calendar and entering a time.

> **Info:** The time entered here may differ from the server time due to different time zones.

At the top right, additional functionality is provided:

* **Download** - To download the log data for a specified time range.
* **Dark theme** - To turn dark theme on or off.
* **Auto refresh** - To activate the auto refresh functionality. If activated, the displayed log data will automatically be refreshed every 10 seconds.
* **Unsubscribe** - To unsubscribe the microservice.
* **Delete** - To delete the microservice.

Initially, the **Logs** tab shows the latest logs of the microservice instance.

At the bottom right you find navigation buttons:

* **First** - directly navigates to the oldest available log entries for the microservice after its restart (maximum capacity 350MB of logs).
* **Previous** - increases the time range in 10 minutes steps.
* **Next** - reduces the time range in 10 minutes steps.
* **Last** - directly navigates to the latest available log entries.

If no logs are available in the selected time range, a message is shown accordingly:

<img src="/images/users-guide/Administration/admin-microservice-no-logs.png" alt="Microservice log">

> **Info:** There is no possibility to see the logs from the previously running instances. However, inside the instance there is a Docker container running, and if only this one was restarted (not the whole instance) you should see the logs from the currently running and also lately terminated Docker container.

>Logs are always loaded from the Docker container using both `stdout` and `stderr` sources, and there is no possibility to distinguish/filter by the source.
