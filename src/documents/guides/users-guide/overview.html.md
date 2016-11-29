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
   * [Changing your user settings](#settings).
   * [Searching in Cumulocity](#searching).

## <a name="accessing"></a>Accessing Cumulocity applications

To use Cumulocity applications, you need a modern web browser. We test with the following desktop web browsers:

  * Internet Explorer (Version 10 and 11)
  * Firefox (latest)
  * Chrome (latest)

You can also use recent smartphone and tablet web browsers. We test with the following mobile web browsers:

  * Chrome on Android (latest) on Galaxy smartphones and tablets.
  * Safari on iOS (latest) on Apple iPhone and iPad.

> Note that using the private mode on browsers may not work. Note also that using Cumulocity on mobile devices may be constrained by the memory and the processing power available on the devices. For example, loading graphs with large amounts of data points may make the mobile device unresponsive.

To access the applications for your Cumulocity tenant, use the following URL:

	https://<account>.cumulocity.com/

This will direct you to the login page of your default application, shown in the image below.

<img src="/guides/users-guide/login.png" alt="Login prompt" style="max-width: 50%">

> Make sure that the address bar of your browser shows a lock symbol. The lock symbol indicates that you are using a secure connection and that you are indeed connected to Cumulocity.

> The above URL is only valid for Cumulocity Standard Edition subscribers. For Dedicated and Private Edition deployments of Cumulocity, the URL is specific to your organization.

## <a name="login"></a>Logging in

On the login page, enter your username and password to start the application. The "Remember me" checkbox will make the browser remember your credentials, so that you do not have to enter them again when opening the application the next time. This is also convenient if you frequently navigate between Cumulocity applications, as Cumulocity requires you to authenticate each time when starting an application. You can make the browser "forget" your credentials by explciitly logging out using the "Logout" menu item in the application.

<img src="/guides/users-guide/logout.png" alt="Logout menu" style="max-width: 60%">

> For security reasons, Cumulocity does not use Cookie technology.

If you forgot your password, click the "Forgot password?" link on the login screen. You can now type your email address and click "Reset password". Check your email for the password reset link. Click the link to enter a new password.

> The password reset link is valid for one day.

<img src="/guides/users-guide/resetpassword.png" alt="Reset password" style="max-width: 50%">

The automated password reset will only work if your email address is stored with your Cumulocity user. If you get a warning that the password cannot be reset, you are either using a different email address than the one stored with your Cumulocity user, or your Cumulocity user has no email address stored. In either case, contact a Cumulocity administrator in your organization. Administrators can reset your password.

> If you are yourself the primary administrator, the email that you used when registering first to Cumulocity is automatically stored with your user. If you have questions, please contact the Cumulocity support from this email address.

To change your password, click on the "User Settings" icon in the application. Please make sure to pick a strong password. To support you in picking good passwords, a password strength indicator is displayed along with a password change. By default, the password needs to consist of at least eight characters. It should use a mixture of character classes (uppercase and lowercase letters, numbers and symbols). A strong password uses at least three of the above four character classes.

> Note that, the above password rules can be configured by the administrator.

<img src="/guides/users-guide/passwordstrength.png" alt="Reset password" style="max-width: 50%">

> Your administrator may have configured your account to enforce a password policy. You may be required to pick a strong password or to change your password regularly.

## <a name="tfalogin"></a>Logging in with Two-Factor Authentication

Two-factor authentication, or TFA as it's commonly abbreviated, adds an extra step to your basic log-in procedure. Without TFA, you enter in your username and password, and then you're done. The password is your single factor of authentication. The second factor is a code send via SMS and it makes your account more secure. If TFA is disabled and you want to enable it, click [here](/guides/users-guide/administration/#tfa) for more info.

To login when TFA is enabled, first enter your username and password on the login page and click "Login". 

<img src="/guides/users-guide/login.png" alt="Login prompt" style="max-width: 50%">

Afterwards, if your credentials are correct, verification code will be sent to your phone number via SMS.

> Note that, to use TFA, a valid phone number is required!

![smscode](/guides/users-guide/smscode.png)

Enter the code that you received and click "Verify". If the code is valid, you will be logged in. To request a new verification code, if the old one has already expired, simply click on "Send new code". To return to the login page, press "Login".

<img src="/guides/users-guide/tfacode.png" alt="TFAcode" style="max-width: 50%">

There are two time outs that you should be aware of:

 - Verification code time out. The verification code times out when it's lifetime expires.
 - TFA session time out. When the lifetime of your current session expires, you will have to login again and enter a new verification code.

> Note that, the values of both time outs can be edited in the Administration application. For more info see [here](/guides/users-guide/administration/#tfaflags).

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
* The "search" field provides a [full-text search](#searching) where available.
* Using the application switcher, you can change from one application to another. You might have to re-enter your credentials if you have not selected "Remember me" on your original login to Cumulocity.
* The user menu shows your user name. By clicking on the user name, a popup menu appears. The popup menu allows you to log out of the application (even if you clicked "Remember me") and provides access to user settings and help.
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

## <a name="settings"></a>User settings

To change the settings for your user, click on the user symbol at the top right and select "User settings". Set the user interface language using the "Language" drop-down menu. Change your password by clicking "Change password". Finally, click "Save" to store your changes or "Cancel" to discard them.

<img src="/guides/users-guide/usersettings.png" alt="User settings"  style="max-width: 60%">

The user interface language is selected using the following criteria, in the order listed below:

1. The language selected in the Cumulocity user settings.
2. The language selected in the browser preferences.
3. The operating system language.

The default language is English.

## <a name="searching"></a>Full-text search

The Cumulocity search field provides a full-text search of the whole inventory. Entering multiple words separated by a blank returns all objects that match any of the words. For example, entering

	My Demo Device

will return objects containing "My", "Demo" or "Device". If you want to match the exact phrase, enter

	"My Demo Device"

You can also exclude words by putting a hypen before the word. For example, enter

	My Demo -Device

to search the inventory for objects containing "My" or "Demo" but not "Device".

Case is ignored. The following search texts return the same result:

	My Demo Device
	My demo device
