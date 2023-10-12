---
weight: 30
title: First steps with Cumulocity IoT
layout: bundle
section:
  - getting_started
---

The following section highlights the basic steps to take if you are new to the {{< product-c8y-iot >}} platform.

If you are technically interested in our IoT platform, you might want to learn about the architecture, technical concepts and domain models behind {{< product-c8y-iot >}} described in [Technical concepts](/concepts/introduction/).


### Step 1: Logging into {{< product-c8y-iot >}} for the first time

To log in in to the {{< product-c8y-iot >}} platform and access your tenant, use the following URL:

```http
https://<tenant-domain>.{{< domain-c8y >}}/
```
This will direct you to the login page of your default application.

On the Login page, enter your username and password.


Click **Login** to enter the {{< product-c8y-iot >}} platform. Initially, you will be taken to the [Cockpit](/cockpit/cockpit-introduction/) application, if not configured differently. For further information about the {{< product-c8y-iot >}} standard applications see [Available applications](/get-familiar-with-the-ui/available-applications/).

![image alt text](/images/users-guide/cockpit/cockpit-home-screen.png)

Go to [Get familiar with the UI](/get-familiar-with-the-ui/ui-introduction/) for more details on how to access the platform and get introduced to the general functionalities to all {{< product-c8y-iot >}} applications.

### Step 2: Learn about {{< product-c8y-iot >}}'s basic UI functionalities and features

#### Main screen elements

All {{< product-c8y-iot >}} applications share a common structure and includes the following screen elements:

![{{< product-c8y-iot >}} application](/images/users-guide/getting-started/getting-started-screen-elements.png)

On the left you have the **Navigator**, where you find a list of entries leading to various pages of the application. On the superior part of the main page is the **Page title** at the left. At the right is the **Search** button that opens a search field to enter text for a full-text search. Next to the Search button is the **Application Switcher** button that allows you to quickly switch between applications. Right from the Application Switcher button is the **User** button which opens up a context menu related to your account settings.

{{< c8y-admon-info >}}
See the [UI functionalities and features](/get-familiar-with-the-ui/gui-features/) section of our documentation for more information on {{< product-c8y-iot >}}'s UI features.
{{< /c8y-admon-info >}}

<a name="user-options"></a>
#### User options and settings

Clicking the **User** button at the top right opens a menu which provides access to the following actions or information:

<img src="/images/users-guide/getting-started/getting-started-user-account-menu.png" alt="User account menu"  style="max-width: 60%">

Click on **User settings** to change user settings such as your password. **Access denied requests** shows a list of data requests which could not be accessed due to missing permissions, if any. Change the language of the UI in **UI settings**. **Platform info** shows release information on the {{< product-c8y-iot >}} version you are using.

See [User options and settings](/get-familiar-with-the-ui/user-settings/) for more information.

### Step 3: Registering a device

To integrate a device to {{< product-c8y-iot >}}, you need to register it. This is done in the **Device management application**. Devices can be connected to your {{< product-c8y-iot >}} account in three different ways:

* [Via the {{< sensor-app >}}](/welcome-users/first-steps/#connecting-a-smartphone-with-the-hahahugoshortcode-s19-hbhb-sensor-app) - Register and connect your smartphone to {{< product-c8y-iot >}} using the {{< sensor-app >}}. The {{< sensor-app >}} is a free smartphone application available for iOS and Android smartphones.
* [Via thin.edge.io on a Raspberry Pi](/welcome-users/first-steps/#device-integration-via-thinedgeio-on-a-raspberry-pi) - The Raspberry Pi is a relatively simple and cheap yet powerful device. This makes it ideal for testing and trying out as well as some production use cases.
* [Connecting a device manually](/welcome-users/first-steps/#to-connect-a-device-manually) - Single device registration to connect devices manually one by one.

#### Connecting a smartphone with the {{< sensor-app >}}

The app is designed to collect measurements from your smartphone, nearby Bluetooth device sensors, and vehicle On-board Debug (OBD) sensors, and send them to the {{< product-c8y-iot >}} platform. The {{< sensor-app >}} can also send commands to the smartphone directly from the phone dashboard.

Go to [Sensor App](/sensor-app/overview/) to see which smartphone sensors and Bluetooth devices are currently supported as well as more information on [how to install the app](/sensor-app/installing-the-sensor-app/) available for iOS and Android.

Open the Apple App Store or Google Play Store from your smartphone and search for **{{< sensor-app >}}** to install it.

To connect your smartphone via QR code follow the instructions below:

1.  On a desktop or laptop computer, open a web browser and log in to your {{< product-c8y-iot >}} tenant. From the Cockpit application, click **Connect Smartphone** in the right drawer or in the Welcome widget.

    ![Cockpit application](/images/users-guide/csa/csa-connect-smartphone-right-drawer.png)

2.  Follow the instructions in the wizard to step 3, ensuring that the app is installed on the smartphone.

    ![QR code](/images/users-guide/csa/csa-connect-smartphone-wizard-step3.png)

3.  From your smartphone, launch the app and tap **Register** in the top right corner of the screen. 
4.  Grant access to your camera if the app asks you for permission.
5.  Scan the QR code shown on your PC's web browser. If you can't scan the QR code, tap **Manual registration** on your smartphone and fill in the details at the right side of the wizard screen.
6.  Back on your smartphone, tap **Done**. Sensor measurements are sent to the server. They can be viewed in the device's dashboard.

When using the **Connect Smartphone** wizard for device registration, your smartphone is automatically registered by {{< product-c8y-iot >}} and assigned to the "Phones" group. Tap **Done** on your smartphone to return to the main screen.

{{< c8y-admon-info >}}
For versions earlier than 10.6.6 or if you are unable to scan the QR code, see [Manual registration](/sensor-app/registering-the-sensor-app/#manual-registration).
{{< /c8y-admon-info >}}


You have connected your smartphone with the {{< sensor-app >}}. For information on how the app sends information to {{< product-c8y-iot >}} go to [Sending sensor data to the platform](/sensor-app/sending-sensor-data/) and on how to view sensor data go to [Viewing sensor data](/sensor-app/viewing-sensor-data/).

#### Device integration via thin.edge.io on a Raspberry Pi

thin-edge.io is an open-source project to provide a cloud-agnostic edge framework. It is much more generic than the device management agent, so it can connect to multiple IoT cloud platforms, and it allows flexible logic being executed on the device. It is optimized for a very small footprint and high performance.

The Raspberry Pi is a relatively simple and cheap, yet powerful device. This makes it ideal for testing and trying out as well as some production use cases.

For an overview of the installation and configuration of thin-edge.io with Raspberry Pi go to [thing-edge.io on a Raspberry Pi](/device-integration/integration-tutorials/#prerequisites).

#### To connect a device manually

{{< c8y-admon-info >}}
Depending on the type of device you want to connect, not all steps of the following process may be relevant.
{{< /c8y-admon-info >}}

1. Click **Registration** in the **Devices** menu of the navigator.
2. In the **Device registration** page, click **Register device** at the right of the top bar and select **Single registration** > **General** from the dropdown menu. The **Register devices** dialog box will be displayed.
3. In the **Device ID** field, enter a unique ID for the device. To determine the ID, consult the device documentation. In case of mobile devices the ID usually is the IMEI (International Mobile Equipment Identity) often found on the back of the device.

![Register device](/images/users-guide/getting-started/getting-started-register-device-manually.png)

4. Optionally, select a group to assign your device to after registration. See [Grouping devices](/welcome-users/first-steps/#grouping-devices) below for further information.
5. Click **Next** to register your device(s).


After successful registration, the device(s) are listed in the [Registering devices](/device-management-application/registering-devices/) page with the status "Waiting for connection".

![Waiting for connection](/images/users-guide/getting-started/getting-started-register-device-waiting-for-connection.png)

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



#### Grouping devices
Devices can be grouped according to a particular use case. A device can be located in multiple groups and groups themselves can again be part of multiple groups.

{{< product-c8y-iot >}} distinguishes between top-level groups and subgroups:

* **Top-level groups** are shown in the **Group** menu in the navigator at top-level.
* **Subgroups** can be used to further subdivide top-level groups.

For more information on this feature, go to [Grouping devices](/device-management-application/grouping-devices/).

### Step 4: Customize the dashboard

The predefined dashboard can be edited and designed individually according to your needs. You can add, remove or change widgets being displayed here allowing you to visualize data emanating from your device or devices. The Cockpit application in {{< product-c8y-iot >}} provides you with an unrestrained overview and the essential dashboards to monitor your IoT data according to your needs.

Follow the instructions below to create a new dashboard with the device you registered in the last step. It can be necessary to check if you meet the [requirements](/cockpit/working-with-dashboards/) first.

#### Creating a dashboard

1. In the Cockpit application, select the group or the device in the navigator for which to create a dashboard.
2. Click the plus icon right from the tabs to open the dashboard editor.

![Add dashboard](/images/users-guide/getting-started/getting-started-add-dashboard.png)

3. In the **Tab** section of the dashboard editor, provide the following information:

    * An icon which is shown next to the dashboard name in the navigator.
    * A menu label to be used as the name of the dashboard.
    * The location of the dashboard in the navigator, with "10000" being ordered first and "-10000" last.
<br><br>

![Dashboard editor](/images/users-guide/getting-started/getting-started-add-dashboard-editor.png)

4. In the **Layout** section you can select a theme for the dashboard (for example, "Light", "Dark", "Transparent" or "Branded") and a default header style for the widgets (for example, "Regular", "Border", "Overlay", or "Hidden"). Moreover, you can change the default widget margin (the default value is set to 15 px).
5. Enable the option **Translate widget titles if possible**, to have the widget title translated every time the language is changed.

6. In the **Preview** section at the right, a preview of the selected layout settings is immediately displayed to visualize your selections.

7. Click **Save** to create and open the dashboard.

You have successfully created a customized dashboard.

Go to the [Working with dashboards](/cockpit/working-with-dashboards/) for more on how to share, edit, copy, and delete dashboards.

### Step 5: Create a report

Reports enable you to track applications, alarms, assets, and other data in a dashboard layout. Reports are global dashboard pages, regardless of the [asset hierarchy](/cockpit/managing-assets/#asset-hierarchy). To work with reports, check if you meet the [requirements](/cockpit/reports/) first.

To create a report click **Reports** in the **Navigator** on the left side and following the steps below.

![Reports](/images/users-guide/cockpit/cockpit-reports-list.png)

#### Creating a report

1. Click **Add report** in the top menu bar to open the **Add report** dialog window.
  <br>![Add report](/images/users-guide/getting-started/getting-started-add-report.png)<br>
2. In the **Menu label** field, enter a name for the report and optionally provide a description below.
3. Select **Show in navigator** if you want the report to be displayed in the navigator. Select the position of the report in the navigator. Depending on the value it will be positioned relative to the existing items. If, for example, "Home" has the value "10000" it will be positioned above "Home", if the value is "10001" or higher.
4. In the **Layout** section you can select a theme for the report (for example, "Light", "Dark", "Transparent" or "Branded") and a default header style for the widgets (for example, "Regular", "Border", "Overlay", or "Hidden"). Moreover, you can change the default widget margin (the default value is set to 15 px).
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

1. Click **Add widget** in the top menu bar or click the **Add widget** button on the main page (only available in case of an empty dashboard or report).

![Add widget](/images/users-guide/getting-started/getting-started-add-widget.png)

2. In the **Add widget** dialog, select a widget type.

3. Next, configure the widget. According to the selected widget type, different parameters may be specified under **Configuration**. For details on each widget type refer to [Widgets collection](/cockpit/widgets-collection/).

![Widget configuration](/images/users-guide/getting-started/getting-started-add-widget-configuration.png)

4. In the **Appearence** tab, you can customize the content and header style for the widget individually, in the same way as specifying the layout of a [dashboard](/cockpit/working-with-dashboards/).

{{< c8y-admon-info >}}

The header styles "Regular" and "Border" can be used for all widgets. However, the header styles "Overlay" and "Hidden" remove the header and should only be used for widgets which benefit from a full-screen experience, for example, "Image" or "Map". For other widgets, like "Alarms list" or "Data point table", we do not recommend you to use these header styles.
{{< /c8y-admon-info >}}

5.  Click **Save** to add the widget to the dashboard or report.
