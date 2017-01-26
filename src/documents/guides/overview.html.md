---
order: 10
title: Introduction
layout: default
---

## Overview

The following sections cover the basic usage of Cumulocity applications. They describe

   * [Accessing Cumulocity applications](#accessing).
   * [Logging in](#login).
   * [Navigating in Cumulocity applications](#navigation).
   * [Using dashboards](#dashboards).

## <a name="accessing"></a>Accessing Cumulocity applications

To use Cumulocity applications, you need a modern web browser. We test with the following desktop web browsers:

  * Internet Explorer (Version 10 and 11)
  * Firefox (latest)
  * Chrome (latest)

You can also use recent smartphone and tables web browsers. We test with the following mobile web browsers:

  * Chrome on Android (latest) on Galaxy smartphones and tablets.
  * Safari on iOS (latest) on Apple iPhone and iPad.

> Note that using Cumulocity on mobile devices may be constrained by the memory and the processing power available on the devices. For example, loading graphs with large amounts of data points may make the mobile device unresponsive.

To access the applications for your Cumulocity tenant, use the following URL:

   * https://<account>.cumulocity.com/

This will direct you to the login page of your default application, shown in the image below.

![Login prompt](/guides/users-guide/login.png)

> Make sure that the address bar of your browser shows a lock symbol. The lock symbol indicates that you are using a secure connection and that you are indeed connected to Cumulocity. 

> The above link is only valid for Cumulocity Standard subscribers. For Reserved and Private deployments of Cumulocity, the URL is specific to your organization.

## <a name="login"></a>Logging in

On the login page, enter your username and password to start the application. The "Remember me" checkbox will make the browser remember your credentials, so that you do not have to enter them again when opening the application the next time. This is also convenient if you frequently navigate between Cumulocity applications, as Cumulocity requires you to authenticate each time when starting an application. You can make the browser "forget" your credentials by explciitly logging out using the "Logout" menu item in the application.

![Logout menu](/guides/users-guide/logout.png)

> For security reasons, Cumulocity does not use Cookie technology.

If you forgot your password, click the "Forgot password?" link on the login screen. You can now type your email address and click "Reset password". Check your email for the password reset link. Click the link to enter a new password. The password reset link is valid for one hour.

![Reset password](/guides/users-guide/resetpassword.png)

The automated password reset will only work if your email address is stored with your Cumulocity user. If you get a warning that the password cannot be reset, you are either using a different email address than what is stored with your Cumulocity user, or your Cumulocity user has no email address stored. In either case, contact a Cumulocity administrator in your organization. Administrators can reset your password.

> If you are yourself the primary administrator, the email that you used when registering first to Cumulocity is automatically stored with your user. If you have questions, please contact Cumulocity support from this email address.

To change your password, click on the "User Settings" icon in the application.

## <a name="navigating"></a>Navigating in Cumulocity applications

Cumulocity Applications have the following layout:

TODO: Picture

The web page has the following areas:

  * Navigator: Using the navigator, you can goto the different pages of an application. Click on an entry in the navigator to open the respective page. You can collapse or expand sections in the navigator by clicking on the section headers, i.e. the lines with a triangle in front of the text. 
  * Application Switcher: Using the application switcher, you can change from one application to another. You might have to re-enter your credentials if you have not selected "Remember me" on your original login to Cumulocity.
  * User Id: You can see here, under which username you are logged into the system. To logout, click on the icon and select "Logout".
  * Content: Most of the web page is occupied by the content, which changed from page to page.

  How to link straight into Cumulocity applications? How to use Cumulocity on touch devices?
  
  
### How to link into the application?

Each page has its individual URL. For example, to show the basic information for a device, you can enter the following URL:

  * https://<tenant>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info

Using this URL, you can

  * Save bookmarks for specific devices or pages
  * Send Emails (manually or automatic using the real-time event engine) which include a link to devices or sensor data.
  * Use the backwards and forwards button in your browser.
  * Write own web applications, that link directly to information in Cumulocity

### How to use Cumulocity on touch devices?

The applications can be used with traditional web browsers, using a keyboard and a mouse. And the applications can be used with touch devices, like tablets and smartphones.

Using Cumulocity with touch devices differs slightly compared to using it with traditional browsers:
   * Responsive Web Design: Many touch devices have less screen real estate. To compensate this, Cumulocity implements a responsive web design, which dynamically adjusts the page layout to the smaller screen. This also happens if you reduce the window size of your web browser. 
   * Touch gestures: TBD
   * No hover: "hover" refers to the effect that when your mouse cursor is over an element, additional information appears. For example, in Cumulocity, when you move the cursor over a device in the device list, then a button to delete the device appears. This behaviour can be emulated on a touch device by "touching" the element for a longer time. 

### How to execute actions?

To provide a consistent user interface, Cumulocity follows the following certain user interface conventions. The conventions help you to understand what certain user elements do and provide you with a consistent behaviour over different actions.

The following conventions for actions exists:
   * Solid filled buttons: This issues an action that will change data in the Cumulocity data base, i.e. on the server side. Example: Save changed data, or install software on the device.
   * Link style button: This issues an action that will open new dialogs or options. It will not perform any change of data in Cumulocity.
   * Inside lists or tables: hover actions
   * Behind COGS Symbol: Use drop down menu

## <a name="dashboards"></a>Using dashboards

