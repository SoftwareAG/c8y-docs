---
weight: 30
title: First steps with Cumulocity IoT
layout: bundle
section:
  - getting_started
---

This section of the {{< product-c8y-iot >}} documentation highlights the basic steps to take if you are new to the platform.

If you are technically interested in our IoT platform, you might want to learn about the architecture, technical concepts and domain models behind {{< product-c8y-iot >}} found in [Technical concepts](/concepts/introduction/).


### Step 1: Logging into {{< product-c8y-iot >}} for the first time

To log in into the {{< product-c8y-iot >}} platform and have access to your tenant, use the following URL:

```http
https://<tenant-domain>.{{< domain-c8y >}}/
```
This will direct you to the login page of your default application. See [Tenants](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Tenants) in the {{< openapi >}} for further details on tenant ID and tenant domain.

On the Login page, enter your username and password. The maximum number of failed logins (due to invalid credentials), after which a user is locked, can be configured by the {{< management-tenant >}} on platform level. The default value is 100.


Click **Login** to enter the {{< product-c8y-iot >}} platform. Initially, you will be taken to the [Cockpit](/cockpit/cockpit-introduction/) application, if not configured differently. For further information about the {{< product-c8y-iot >}} standard applications see [Available applications](/get-familiar-with-the-ui/available-applications/).

![image alt text](/images/users-guide/cockpit/cockpit-home-screen.png)

You will see a predefined dashboard with a number of [widgets](/cockpit/using-widgets/#using-widgets) such as a welcome message, a [map](/cockpit/widgets-collection/#map) that shows the location of registered devices, and [all critical alarms](/cockpit/widgets-collection/#all-critical-alarms). To see the list of all preset widget types head to [Widgets collection](/cockpit/widgets-collection/).

### Step 2: Learn about {{< product-c8y-iot >}}'s basic UI functionalities and features

#### Main screen elements

All {{< product-c8y-iot >}} applications share a common structure and includes the following screen elements:

![{{< product-c8y-iot >}} application](/images/users-guide/getting-started/getting-started-screen-elements.png)

<table>
<col width="15%">
<col width="85%">
<thead>
<tr>
<th style="text-align:left">Element</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><b>Navigator</b></td>
<td style="text-align:left">On the left you find the navigator. At the top of the navigator the name and logo of the application is displayed, indicating which application you are currently using. Below you find a list of entries leading to the various pages of the application. The entries are grouped into menus and menu items. You can collapse or expand menus in the navigator by clicking the menu name. Clicking the small arrow at the very left of the top bar will hide/or unhide the navigator. Per default, it is visible.</td>
</tr>
<tr>
<td style="text-align:left"><b>Page</b></td>
<td style="text-align:left">"Page" actually refer to the main area in the application. The content provided here depends on the menu item selected in the dashboard. The structuring of the content differs from page to page. Data can for example be displayed in a list with a row for each object or you can find it being presented in a grid in which objects are represented by cards. </td>
</tr>
<tr>
<td style="text-align:left"><b>Tabs</b></td>
<td style="text-align:left">Some pages, for example the page of any particular device, are divided into several tabs, either displayed vertically or horizontally.</td>
</tr>
<tr>
<td style="text-align:left"><b>Top bar</b></td>
<td style="text-align:left"><b>Page title</b><br> At the left of the top bar the title of the active page is displayed, if any. <br> <br><img src="/images/icons/search-icon.png" alt="Search" style="max-width:100%"> <b>Search button</b><br> Clicking the <b>Search</b> button opens a search field to enter text for a full-text search. For details, see <a href="/get-familiar-with-the-ui/gui-features/#search-and-filter-functionality" class="no-ajaxy">Search and filter functionality</a> for more. Not always available. <br><br><img src="/images/icons/switcher-icon.png" alt="User" style="max-width:100%"> <b>Application Switcher button</b><br> Clicking the <b>Application Switcher</b> button opens the <a href="/get-familiar-with-the-ui/gui-features/#application-switcher" class="no-ajaxy">application switcher</a> which allows you to quickly switch between applications. <br><br> <img src="/images/icons/user-icon.png" alt="User" style="max-width:100%"> <b>User button</b><br> Right from the Application Switcher button you will find the <b>User</b> button with your username. Clicking it will open up a context menu with commands related to your account settings. More on <a href="#user-options" class="no-ajaxy">user settings and options</a> below. <br> <br>Other buttons/ information may be available in the top bar depending on the application and the page being displayed. </td>
</tr>
<tr>
<td style="text-align:left"><b>Top menu bar</b></td>
<td style="text-align:left">Depending on the active application and the active page, a secondary bar is displayed below the top bar providing further functionalities like a <b>Reload</b> link for reloading the page or a <b>Realtime</b> link for the display of realtime data. </td>
</tr>
<tr>
<td style="text-align:left"><b>Right drawer</b></td>
<td style="text-align:left">Clicking the user icon at the very right of the top bar will unhide/hide the right drawer, offering access to the user settings, quick links to other applications and to relevant documentation. Per default, the right drawer is hidden.</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info >}}
See the [UI functionalities and features](/get-familiar-with-the-ui/gui-features/) section of our documentation for more information on {{< product-c8y-iot >}}'s UI features.
{{< /c8y-admon-info >}}

<a name="user-options"></a>
#### User options and settings

Clicking the **User button** at the top right will open a menu which provides access to the following actions or information:

<img src="/images/users-guide/getting-started/getting-started-user-account-menu.png" alt="User account menu"  style="max-width: 60%">

The **User** menu contains the following items:

<table>
<colgroup>
<col width = "20%">
<col width = "80%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Menu item</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">User settings</td>
<td style="text-align:left">Provides access to the user settings, here you can <a href="/get-familiar-with-the-ui/user-settings/#to-change-user-settings" class="no-ajaxy">change user settings</a> such as the <a href="/get-familiar-with-the-ui/user-settings/#to-change-the-language-of-the-ui" class="no-ajaxy">language of the UI</a> and <a href="/get-familiar-with-the-ui/user-settings/#to-change-your-password" class="no-ajaxy">changing your password</a>. </td>
</tr>
<tr>
<td style="text-align:left">Access denied requests</td>
<td style="text-align:left">Shows a list of data requests which could not be accessed due to missing permissions, if any. </td>
</tr>
<tr>
<td style="text-align:left">Logout</td>
<td style="text-align:left">Logs you out from your {{< product-c8y-iot >}} account. </td>
</tr>
<tr>
<td style="text-align:left">Request support</td>
<td style="text-align:left">Redirects you to the <a href="{{< link-sag-portal >}}" class="no-ajaxy">{{< company-sag >}} {{< sag-portal >}}</a>. </td>
</tr>
<tr>
<td style="text-align:left">Activate support</td>
<td style="text-align:left">Allows support users to access your account.<br>
<br>
Note that this option is only available if support user access is not set globally for subtenant users in the {{< management-tenant >}}, for details see <a href="/enterprise-tenant/support-user-access/" class="no-ajaxy">Support user access</a>. After the support user access has been activated, the menu item switches to <strong>Deactivate support</strong>. If your support request has been resolved but the duration for the support user access is not expired (24 hours per default) you can actively disable an active support user request here.</td>
</tr>
<tr>
<td style="text-align:left">Revoke tokens</td>
<td style="text-align:left">Revoking tokens logs out all users currently logged in via "OAI-Secure" or "Single sign-on redirect". Note that JWT tokens retrieved by your devices will also be revoked.<br>
<br>
To revoke tokens, you must have ADMIN permission for the permission type "User management".  
</td>
</tr>
<tr>
<td style="text-align:left">Version information</td>
<td style="text-align:left">Shows release information on the {{< product-c8y-iot >}} version you are using (for example, 10.13.0.034) for both Backend and UI. Moreover shows the ID of your tenant, which might be required if you request support. Click the copy icon next to the tenant ID to copy it to the clipboard.</td>
</tr>
</tbody>
</table>

### Step 3: Registering a device

To integrate a device to {{< product-c8y-iot >}}, you need to register in the **Device management application**. Devices can be connected to your {{< product-c8y-iot >}} account in different ways. In this tutorial, follow the instructions to register a single device manually.

#### To connect a device manually

{{< c8y-admon-info >}}
Depending on the type of device you want to connect, not all steps of the following process may be relevant.
{{< /c8y-admon-info >}}

1. Click **Registration** in the **Devices** menu of the navigator.
2. In the **Device registration** page, click **Register device** at the right of the top bar and select **Single registration** > **General** from the dropdown menu. The **Register devices** dialog box will be displayed.
3. In the **Device ID** field, enter a unique ID for the device. To determine the ID, consult the device documentation. In case of mobile devices the ID usually is the IMEI (International Mobile Equipment Identity) often found on the back of the device.
4. Optionally, select a group to assign your device to after registration. See also [Grouping devices](/device-management-application/grouping-devices/) for further information.
5. Click **Add device** to register one more device. Enter the device ID and optionally select a group. This allows you to add multiple devices in one step.
6. Click **Next** to register your device(s).

{{< c8y-admon-info >}}
In an {{< enterprise-tenant >}}, the {{< management-tenant >}} may also directly select a tenant to which the device will be added from here. Note that since the {{< management-tenant >}} does not have access to the subtenant's inventory you can either register devices to a tenant OR to a group, but not both.

<img src="/images/users-guide/DeviceManagement/devmgmt-device-registration-tenant.png" alt="General device registration">
{{< /c8y-admon-info >}}

After successful registration, the device(s) are listed in the [Registering devices](/device-management-application/registering-devices/) page with the status "Waiting for connection".

Turn on the device(s) and wait for the connection to be established.

Once a device is connected, its status will change to "Pending acceptance".

{{< c8y-admon-info >}}
The **Pending acceptance** screen might differ depending on the [security token policy](/device-management-application/registering-devices/#security-token-policy).
{{< /c8y-admon-info >}}

Click **Accept** to confirm the connection. The status of the device will change to "Accepted".

{{< c8y-admon-info >}}
In case of any issues, consult the documentation applicable for your device type in the [{{< product-c8y-iot >}} {{< device-portal >}}]({{< link-device-portal >}}) or look up the manual of your device.
{{< /c8y-admon-info >}}


For more information on registering devices such as [single device registration](/device-management-application/registering-devices/#single-device-registration) and [bulk device registration](/device-management-application/registering-devices/#bulk-device-registration) go to [Registering devices](/device-management-application/registering-devices/). To learn how to view all devices connected to your account head to [Viewing all devices](/device-management-application/viewing-all-devices/).

#### Connecting a smartphone with the {{< product-c8y-iot >}} Sensor App

Register and connect your smartphone to {{< product-c8y-iot >}} using the {{< product-c8y-iot >}} Sensor App. The {{< product-c8y-iot >}} Sensor App is a free smartphone application available for iOS and Android smartphones.

The app is designed to collect measurements from your smartphone, nearby Bluetooth device sensors, and vehicle On-board Debug (OBD) sensors, and send them to the {{< product-c8y-iot >}} platform. The {{< product-c8y-iot >}} Sensor App can also send commands to the smartphone directly from the phone dashboard.

Go to [Sensor App](/sensor-app/overview/) to see which smartphone sensors and Bluetooth devices are currently supported as well as [how to install](/sensor-app/installing-the-sensor-app/) and [how to register the Sensor App in the platform](/sensor-app/registering-the-sensor-app/).

#### Device integration via thin.edge.io on a Raspberry Pi

thin-edge.io is an open-source project to provide a cloud-agnostic edge framework. It is much more generic than the device management agent, so it can connect to multiple IoT cloud platforms, and it allows flexible logic being executed on the device. It is optimized for a very small footprint and high performance.

The Raspberry Pi is a relatively simple and cheap yet powerful device. This makes it ideal for testing and trying out as well as some production use cases.

For an overview of the installation and configuration of thin-edge.io with Raspberry Pi go to [thing-edge.io on a Raspberry Pi](/device-integration/integration-tutorials/#prerequisites).

#### Grouping devices
Devices can be grouped according to a particular use case. A device can be located in multiple groups and groups themselves can again be part of multiple groups.

{{< product-c8y-iot >}} distinguishes between top-level groups and subgroups:

* **Top-level groups** are shown in the **Group** menu in the navigator at top-level.
* **Subgroups** can be used to further subdivide top-level groups.

For more information on this feature, go to our section about [Grouping devices](/device-management-application/grouping-devices/).

### Step 4: Customize the dashboard

The predefined dashboard can be edited and designed individually according to your needs. You can add, remove or change widgets being displayed here allowing you to visualize data emanating from your device or devices. The Cockpit application in {{< product-c8y-iot >}} provides you with an unrestrained overview and the essential dashboards to monitor your IoT data according to your needs.

Follow the instructions below to create a new dashboard with the device you registered in the last step. It can be necessary to check if you meet the [requirements](/cockpit/working-with-dashboards/) first.

#### Creating a dashboard

1. Select the group or the device in the navigator for which to create a dashboard.
2. Click the plus icon right from the tabs to open the dashboard editor.

3. In the **Tab** section of the dashboard editor, provide the following information:

    * An icon which is shown next to the dashboard name in the navigator.
    * A menu label to be used as the name of the dashboard.
    * The location of the dashboard in the navigator, with "10000" being ordered first and "-10000" last.
<br><br>

4. Enable the option **Apply dashboard to all devices of type <device type>** to share the dashboard with all devices of this type.

5. In the **Availability** section, specify which users have access to the dashboard based on global roles. By default, all available global roles are selected, which means that a user with at least one such role has access to the dashboard.

   {{< c8y-admon-info >}}
- Dashboard are always visible to its owner and to users with ADMIN permission for the permission type "Inventory".
- This functionality is entirely based on client-side solutions. If users have an accurate link to the dashboard, they will still be able to access it.
    {{< /c8y-admon-info >}}

6. In the **Layout** section you can select a theme for the dashboard (for example, "Light", "Dark", "Transparent" or "Branded") and a default header style for the widgets (for example, "Regular", "Border", "Overlay", or "Hidden"). Moreover, you can change the default widget margin (default value is 15 px).
7. Enable the option **Translate widget titles if possible**, to have the widget title translated every time the language is changed.

    {{< c8y-admon-info >}}
The widget titles will be translated only if a valid translation is available.
    {{< /c8y-admon-info >}}
8. In the **Preview** section at the right, a preview of the selected layout settings is immediately displayed to visualize your selections.

9. Click **Save** to create and open the dashboard.

You have successfully created a customized dashboard.

Go to the [Working with dashboards](/cockpit/working-with-dashboards/) for more on how to share, edit, copy, and delete dashboards.

### Step 5: Create a report

Reports enable you to track applications, alarms, assets, and other data in a dashboard layout. Reports are global dashboard pages, regardless of the [asset hierarchy](/cockpit/managing-assets/#asset-hierarchy). To work with reports, check if you meet the [requirements](/cockpit/reports/) first.

![Reports](/images/users-guide/cockpit/cockpit-reports-list.png)

#### Creating a report

1. Click **Add report** in the top menu bar to open the **Add report** dialog window.
  <br>![Add report](/images/users-guide/cockpit/cockpit-report-add.png)<br>
2. In the **Menu label** field, enter a name for the report and optionally provide a description below.
3. Select **Show in navigator** if you want the report to be displayed in the navigator. Select the position of the report in the navigator. Depending on the value it will be positioned relative to the existing items. If for example "Home" has the value "10000" it will be positioned above "Home", if the value is "10001" or higher.
4. In the **Layout** section you can select a theme for the report (for example, "Light", "Dark", "Transparent" or "Branded") and a default header style for the widgets (for example, "Regular", "Border", "Overlay", or "Hidden"). Moreover, you can change the default widget margin (default value is 15 px).
If you enable the option **Translate widget titles if possible**, the widget title will be translated every time the language is changed. Note that the widget titles will be translated only if a valid translation is available.
Click **Save** to create the report and add it to the report list.

{{< c8y-admon-info >}}
In the **Preview** section at the right, a preview of the selected layout settings is immediately displayed to visualize your selections.
{{< /c8y-admon-info >}}

You have successfully created a report.

Follow the instructions below to create a new report. It may be necessary to check if you meet the [requirements](/cockpit/working-with-reports/) first.

Go to the [Working with reports](/cockpit/working-with-reports/) for more on how to edit and delete reports.

### Step 6: Adding a widget to a dashboard or a report

Widgets can display maps, images, graphs, tables and other graphic representations of data. Widgets are useful to track information, for example on alarms, assets or applications, or provide maps, quick links and more in dashboards or reports.  Go to [Widgets collection](/cockpit/widgets-collection/) to see a list of all preset widgets that {{< product-c8y-iot >}} provides.

{{< c8y-admon-info >}}
You can also develop your own widgets and add them to your {{< product-c8y-iot >}} account. For more information go to [Add a custom widget to a dashboard](/web/tutorials/#add-a-custom-widget-to-dashboard).
{{< /c8y-admon-info >}}

#### To add a widget to a dashboard or a report

1. Click **Add widget** in the top menu bar or click the **Add widget** button on the main page (only available in case of an empty dashboard/report).

2. In the **Add widget** dialog, select a widget type.

3. Next, configure the widget. According to the selected widget type, different parameters may be specified under **Configuration**. For details on each widget type refer to [Widgets collection](/cockpit/widgets-collection/).

4. In the **Appearence** tab, you can customize the content and header style for the widget individually, in the same way as specifying the layout of a [dashboard](/cockpit/working-with-dashboards/).

{{< c8y-admon-info >}}

The header styles "Regular" and "Border" can be used for all widgets. However, the header styles "Overlay" and "Hidden" remove the header and should only be used for widgets which benefit from a full-screen experience, for example, "Image" or "Map". For other widgets, like "Alarms list" or "Data point table", we do not recommend you to use these header styles.
{{< /c8y-admon-info >}}

5.  Click **Save** to add the widget to the dashboard or report.
