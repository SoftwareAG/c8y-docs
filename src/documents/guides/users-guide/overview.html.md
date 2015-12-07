---
order: 10
title: Introduction
layout: default
---

## Overview

The following sections cover the basic usage of Cumulocity applications. They describe

   * [Accessing Cumulocity applications](#accessing).
   * [Logging in](#login).
   * [Navigating in Cumulocity applications](#navigating).
   * [Using dashboards](#dashboards).

## <a name="accessing"></a>Accessing Cumulocity applications

To use Cumulocity applications, you need a modern web browser. We test with the following desktop web browsers:

  * Internet Explorer (Version 10 and 11)
  * Firefox (latest)
  * Chrome (latest)

You can also use recent smartphone and tables web browsers. We test with the following mobile web browsers:

  * Chrome on Android (latest) on Galaxy smartphones and tablets.
  * Safari on iOS (latest) on Apple iPhone and iPad.

> Note that using the private mode on browsers may not work. Note also that using Cumulocity on mobile devices may be constrained by the memory and the processing power available on the devices. For example, loading graphs with large amounts of data points may make the mobile device unresponsive.

To access the applications for your Cumulocity tenant, use the following URL:

	https://<account>.cumulocity.com/

This will direct you to the login page of your default application, shown in the image below.

<img src="/guides/users-guide/login.png" alt="Login prompt" style="max-width: 50%">

> Make sure that the address bar of your browser shows a lock symbol. The lock symbol indicates that you are using a secure connection and that you are indeed connected to Cumulocity. 

> The above link is only valid for Cumulocity Standard subscribers. For Reserved and Private deployments of Cumulocity, the URL is specific to your organization.

## <a name="login"></a>Logging in

On the login page, enter your username and password to start the application. The "Remember me" checkbox will make the browser remember your credentials, so that you do not have to enter them again when opening the application the next time. This is also convenient if you frequently navigate between Cumulocity applications, as Cumulocity requires you to authenticate each time when starting an application. You can make the browser "forget" your credentials by explciitly logging out using the "Logout" menu item in the application.

<img src="/guides/users-guide/logout.png" alt="Logout menu" style="max-width: 60%">


> For security reasons, Cumulocity does not use Cookie technology.

If you forgot your password, click the "Forgot password?" link on the login screen. You can now type your email address and click "Reset password". Check your email for the password reset link. Click the link to enter a new password. The password reset link is valid for one hour.

<img src="/guides/users-guide/resetpassword.png" alt="Reset password" style="max-width: 50%">

The automated password reset will only work if your email address is stored with your Cumulocity user. If you get a warning that the password cannot be reset, you are either using a different email address than the one stored with your Cumulocity user, or your Cumulocity user has no email address stored. In either case, contact a Cumulocity administrator in your organization. Administrators can reset your password.

> If you are yourself the primary administrator, the email that you used when registering first to Cumulocity is automatically stored with your user. If you have questions, please contact the Cumulocity support from this email address.

To change your password, click on the "User Settings" icon in the application. Please make sure to pick a strong password. To support you in picking good passwords, a password strength indicator is displayed along with a password change.

<img src="/guides/users-guide/passwordstrength.png" alt="Reset password" style="max-width: 50%">

> Your administrator may have configured your account to enforce a password policy. You may be required to pick a strong password or to change your password regularly. 

## <a name="navigating"></a>Navigating in Cumulocity applications

Once you are logged in, your default Cumulocity application will open. The content of Cumulocity applications is entirely dynamic and is generated based on various criteria:

* The applications that your organization has subscribed to.
* The applications that your organization has configured or developed itself for Cumulocity.
* The functionality that your user is permitted to see. 
* The configuration of the user interface, such as groups and reports.
* The functionality of the devices that are used by you.

The general structure of a Cumulocity application is shown in the screenshot below:

* The name of the currently visible application is shown in the top left.
* Using the navigator, you can go to the different pages of an application. Click on an entry in the navigator to open the respective page. You can collapse or expand sections in the navigator by clicking the section headers (i.e., the rows with the little triangle in front of the text).
* On some pages, additional "tabs" are available depending on how much information is required to be shown.
* The top area of the application is used as message bar whenever a status (green) or an error (red) needs to be shown.
* The "search" field provides a full-text search where available.
* Using the application switcher, you can change from one application to another. You might have to re-enter your credentials if you have not selected "Remember me" on your original login to Cumulocity.
* The user menu shows your user name. By clicking on the user name, a popup menu appear. The popup menu allows you to log out of the application (even if you clicked "Remember me") and provides access to user settings and help.
* In some areas, a cog wheel on the top right provides access to further functionality through a drop-down menu.

![Cumulocity application](/guides/users-guide/app.png)

On smaller screens, the layout of an application changes, as shown below. The navigator is hidden and only some of the tabs are in the visible screen area. To access the navigator, click on the three lines on the top left. To access other tabs, scroll the tabs left or right. (The way to scroll the tabs may depend on your device.)

<img src="/guides/users-guide/appsmall.png" alt="Layout on small devices" style="max-width: 50%">

Note that you can navigate straight to any place inside a Cumulocity application. For example, to show the basic information for a device, you can enter the following URL:

	https://<account>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info

Using such a URL, you can

  * Save bookmarks for specific devices or pages.
  * Send Emails (manually or automatically using the real-time event engine) which include a link to devices or sensor data.
  * Use the backward and forward navigation of your browser.
  * Write own web applications that link directly to information contained in a Cumulocity application.

> Usually, Cumulocity applications provide tooltips when you hover over a particular user interface element. When you use Cumulocity applications on touch devices, tooltips are shown when you touch a user interface element for a longer time. 

## <a name="dashboards"></a>Using dashboards

Dashboards provide you with a customized visualization of your data, consisting of a set of freely arrangable so-called "widgets". Widgets can display maps, images, graphs, tables and other graphical representations of data. Cumulocity comes with a number of pre-provided widgets, but you can develop also your own widgets and add them to your Cumulocity account. See the [Web developer's guide](/guides/web/).

To create a dashboard, navigate to a device and click on the cog wheel icon at the top right. Select "Create dashboard". This will open a dialog in which you enter

* The name of the dashboard, which will show in the menu.
* The location of the dashboard in the menu.
* The icon which is rendered next to the name in the menu.

<img src="/guides/users-guide/createdashboard.png" alt="Create dashboard" style="max-width: 60%">

Click "Create" to create and open the dashboard. While there are no widgets on the dashboard, you will see an "Add Widget" button. Use this button to add your first widget to the dashboard, or click the cog wheel again and select "Add widget to dashboard".

The following dialog will allow you to choose a widget to add from the list of widgets available in your account. You will also always have the option to edit two further properties:

* The title of the widget, that will be rendered just above the widget.
* The width of the widget as number between one and twelve columns. 

Selecting twelve columns results in a widget that will occupy the full available width of the dashboard. Selecting one column results in a widget occupying one twelth of the available width. If the screen estate of the dashboard gets smaller, widgets are automatically rearranged to consume less space and may be ultimately all rendered in a single column. Depending on the widget, further properties for configuration will be visible. These are discussed below.

<img src="/guides/users-guide/addwidget.png" alt="Add widget" style="max-width: 60%">

For most widgets, you will also see a "Child devices" option. This will allow you to show data from a child device in the widget. By default, the current device is selected.

Once a widget is placed on a dashboard, it can be moved to a new location on the dashboard by dragging its title bar. You can also edit the widget properties by moving your mouse to the title bar, clicking the cog wheel and selecting "Edit". Similar, you can delete a widget by clicking "Remove".

Finally, entire dashboards can be edited, removed and copied by clicking on the larger cog wheel at the top right.

### Properties

The properties widget shows inventory data of a device, such as hardware or modem information. The data will be shown in tables with one table for each section of information that you select in the "Add widget" or "Edit widget" dialog.

### Location

The location widget will just show the selected device on a map.

### Image

The image widget will show an arbitrary image on the dashboard. You can upload the image to be shown when you add or edit the widget.

### KPI list, KPI radial gauge, KPI linear gauge

The KPI list, KPI radial gauge and KPI linear gauge are three different visual representations of the current value of a KPI. The KPI list widget shows a table of KPIs with the KPI name, it's target value, the current value and the difference between current and target value. The KPI radial gauge and the KPI linear gauge display the current value in a graphical relationship to "yellow" and "red" values. For more information on KPIs, see "[Using KPIs](#kpis)".

### KPI graph

The KPI graph widget display the history of a set of KPIs in a graph. 

Time interval, aggregation, refer to measurements


## <a name="kpis"></a>Using KPIs

> To be done.

