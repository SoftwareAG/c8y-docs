---
order: 10
title: Getting Started
layout: default
---

## Overview

The Getting Started section describes how to access and login to the Cumulocity platform and will walk you through basic functionalities applying to all Cumulocity applications. 

For your convenience find an overview on the content of this document below.

|Section|Content|
|:---|:---|
|[Accessing and logging into the Cumulocity platform](#accessing)|How to [access Cumulocity](#accessing) from a web browser, how to [login to the Cumulocity platform](#login), how to [reset](#reset-password) and [change](#change-password) your password and how to access particular pages in Cumulocity applications directly by [using URLs](#URLs).
|[Cumulocity applications](#settings)|Overview on the applications available in your platform i.e. [standard applications](#standard), additional [built-in applications](#built-in) and [own applications](#own).
|[GUI of Cumulocity applications](#navigating)|Overview on the main [screen elements](#screen) and common functionalities like [searching and filtering](#searching-and-filtering) available in all Cumulocity applications.
|[User Settings](#settings)|How to change settings for your account like email address, language and password.

## <a name="accessing"></a>Accessing and login into the Cumulocity platform

### Accessing Cumulocity

To access the Cumulocity platform, you need a modern web browser. Our products have been tested with the following desktop web browsers:

* Edge Browser 
* Internet Explorer (latest version) 
* Firefox (latest version)    
* Chrome (latest version)

>**Info:** Cumulocity is fully functional on Internet Explorer 11. However, layouts may not be perfect in all cases.

You may also use recent smartphone and tablet web browsers. We have tested our products with the following mobile web browsers:

* Chrome on Android (latest version) on Galaxy smartphones and tablets
* Safari on iOS (latest version) on Apple iPhone and iPad
  
>**Info:** Cumulocity on mobile devices may be constrained by the memory and the processing power available on the devices. For example, loading graphs with large amounts of data points may make the mobile device unresponsive.

>Using the private mode on browsers may not work.  

To access the applications for your Cumulocity tenant, use the following URL:

	https://<account>.cumulocity.com/

This will direct you to the login page of your default application.

> **Important:** Make sure that the address bar of your browser shows a lock icon. The lock icon indicates that you are using a secure connection and that you are indeed connected to Cumulocity.

>**Info:** The above URL is only valid for Cumulocity Standard Edition subscribers. For Enterprise Edition deployments of Cumulocity, the URL is specific to your organization.

### <a name="login"></a>Logging into the Cumulocity platform

On the Login screen, enter your username and password and click **Login** to enter the application. 

<img src="/guides/users-guide/login.png" alt="Login prompt" style="max-width: 50%">

Select the "Remember me" checkbox if you want the browser to remember your credentials, so that you do not have to enter them again when opening the application the next time. This is also convenient if you frequently switch between Cumulocity applications, as Cumulocity will request you to authenticate each time when starting an application. You can make the browser "forget" your credentials by explicitly logging out. 

To logout, click the **User** button at the right of the the top bar and from the context menu select **Logout**.

<img src="/guides/users-guide/logout.png" alt="Logout menu" style="max-width: 60%">

> **Info:** For security reasons, Cumulocity does not use Cookie technology.

### <a name="welcome"></a>Welcome screen

When you log into Cumulocity for the first time, you will be taken to the default application (usually the Cockpit application if not configured differently) where the **Welcome** page initially opens up.

<img src="/guides/users-guide/Cockpit/Cockpit_WelcomeScreen.png" name="Welcome screen" style="width:100%;"/>

The **Welcome** screen contains the following items:

* Quick links to the most relevant functions.
* Links to the available applications.
* Links to relevant documentation areas and to the Support Forum.
* The latest news from the Cumulocity twitter channel. Note that this section is only available for tenants hosted by www.cumulocity.com.

**Hiding/restoring the Welcome screen**

If you do not want the **Welcome** page to be your start page, activate the slider **Don't use as start page** on the top right.

To restore the **Welcome** page as start page, select "Welcome" in the navigator on the top left and deactivate the slider **Don't use as start page** again.

### <a name="reset-password"></a>Resetting your password

If you forgot your password follow these steps:

1. Click the **Forgot password?** link on the login screen. 
2. In the upcoming dialog, enter your email address and click **Reset password**. 
3. Check your email account for an email from the Cumulocity support providing a password reset link. 
4. Click the link in the email and provide your new password.

> **Info:** The password reset link is only valid for one day.

<img src="/guides/users-guide/resetpassword.png" alt="Reset password" style="max-width: 50%">

>**Info:** The automated password reset will only work if your email address is stored with your Cumulocity user. If you get a warning that the password cannot be reset, you are either using a different email address than the one stored with your Cumulocity user, or your Cumulocity user has no email address stored. In either case, contact a Cumulocity administrator in your organization. Administrators can reset your password.
If you yourself are the primary administrator, your email address used on first registering is automatically stored with your user. If you have questions, please contact the Cumulocity support.

### <a name="change-password"></a>Changing your password

To change your password follow these steps:

1. Click the **User** button at the right of the top bar and from the context menu select **User settings**. 
2. In the "Edit user" window, click **Change Password**.
3. Enter a password and confirm it.
4. Click **Save** to apply your settings.

Make sure to select a strong password. To support you in doing so a password strength indicator is displayed along with a password change. 

<img src="/guides/users-guide/passwordstrength.png" alt="Reset password" style="max-width: 50%">

By default, the password must consist of at least eight characters. For a strong password you must include at least three of the following character types: uppercase letters, lowercase letters, numbers and symbols. 

> **Info:** The password rules can be configured by the administrator, i.e. your administrator can configure your account to enforce a password policy. You may be required to pick a strong password for example or to change your password regularly.

### <a name="URLs"></a>Accessing Pages Using URLs

You can navigate straight to any place inside a Cumulocity application using the respective URL. For example, to show the basic information for a device, you can enter the following URL:

	https://<account>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info

Using such an URL, you can

  * save bookmarks for specific devices or pages,
  * send emails (manually or automatically, using the real-time event engine) which include a link to devices or sensor data,
  * use the backward and forward navigation of your browser,
  * write own web applications which link directly to information contained in a Cumulocity application.

## <a name="applications"></a>Cumulocity applications

### <a name="standard"></a>Standard applications

Per default, Cumulocity comes with the following three standard applications:

|Application|Description|
|:---|:---|
|[Device Management](/guides/users-guide/device-management)|The Device Management application provides functionalities for managing and monitoring devices and enables you to control and troubleshoot devices remotely.  
|[Cockpit](/guides/users-guide/cockpit)|The Cockpit application provides you with options to manage and monitor  Internet of Things (IoT) assets and data from a business perspective.
|[Administration](/guides/users-guide/administration)|The Administration application enables account administrators to manage their users, roles, tenants, applications and business rules and lets them configure a number of settings for their account. 

### <a name="built-in"></a>Additional built-in applications

Apart from these standard applications, various additional built-in applications are provided which you may subscribe to, i.e. a Device Simulator or integrated agents for several device types.

### <a name="own"></a>Own applications

In addition to the applications available in the Cumulocity platform, you can also manage own applications in your account. For details, refer to [Managing applications](/guides/users-guide/administration#applications) in the Administration section.

The content of the Cumulocity platform is entirely dynamic and is generated based on various criteria:

* The applications that your organization has subscribed to.
* The applications that your organization has configured or developed itself for Cumulocity.
* The functionality that your user is permitted to see.
* The configuration of the user interface, such as groups and reports.

## <a name="navigating"></a>GUI functionalities and features

### <a name="screen"></a>Main screen elements

The general structure common to all Cumulocity applications includes the following screen elements:

|Element|Description|
|:---|:---|
|**Navigator**|On the left you find the navigator. At the top of the navigator the name and logo of the application is displayed, indicating which application you are currently using. Below you find a list of entries leading to the various pages of the application. The entries are grouped into menus and menu items. You can collapse or expand menus in the navigator by clicking the menu name. Clicking the small arrow at the very left of the top bar will hide/or unhide the navigator. Per default, it is visible.
|**Tabs**|Some pages, e.g. the page of any particular device, are divided into several tabs, either displayed vertically or horizontally.
|**Top bar**|**Page title**<br> At the left of the top bar the title of the active page is displayed, if any. <br> <br><img src="/guides/Icons/Icon-Search.svg" alt="Search" style= 'vertical-align:middle;'>**Search button**<br> Clicking the **Search** button opens a search field to enter text for a full-text search. For details refer to [Searching](#searching) below. Not always available.<br><br> <img src="/guides/Icons/Icon-Plus.svg" alt="Plus" style="max-width:100%"> **Plus button**<br> Most application pages show an **Plus** button at the top bar. Clicking it opens a context menu providing further functionalities. The context menu is created dynamically, i.e. it depends on the active page which commands are provided. <br><br>**Application Switcher**<br> The **Application Switcher** on the right allows you to quickly switch between Cumulocity applications. <br><br> <img src="/guides/Icons/Icon-User.svg" alt="User" style="max-width:100%">**User button**<br> Right from the application switcher yo will find the **User** button with your user name. Clicking it will open up a context menu with commands related to your account settings. <br> <br>Other buttons/ information may be available in the top bar depending on the application and the page being displayed. 
|**Top menu bar**|Depending on the active application and the active page, a secondary bar is displayed below the top bar providing further functionalities like a **Reload** link for reloading the page or a **Realtime** link for the display of realtime data. 
|**Right drawer**|Clicking the small arrow at the very right of the top bar will unhide/hide the right drawer, offering quick links to other applications and to relevant documentation. Per default, the right drawer is hidden.
|**Page**|"Page" actually refer to the main area in the application. The content provided here depends on the menu item selected in the dashboard. The structuring of the content differs from page to page. Data may for example be displayed in a list with a row for each object or you may find it being presented in a grid in which objects are represented by cards. 

![Cumulocity application](/guides/users-guide/Overview/ScreenElements.png)

On smaller screens, the layout of an application changes, as shown below. The navigator is hidden and only some of the tabs are visible. To access the navigator, click the menu icon on the top left. To access other tabs, scroll the tabs left or right (the way to scroll the tabs may depend on your device).

<img src="/guides/users-guide/appsmall.png" alt="Layout on small devices" style="max-width: 50%">

> **Info:** Cumulocity applications provide tooltips when you hover over a particular screen element. When you use Cumulocity applications on touch devices, tooltips are shown when you touch a screen element for a longer time.

### <a name="searching-and-filtering"></a>Search and Filter Functionality

#### <a name="searching"></a>Searching

The Cumulocity search field provides a full-text search of the whole inventory. 

Entering multiple words separated by a blank returns all objects that match any of the words. For example, entering

	My Demo Device

will return objects containing "My", "Demo" or "Device". 

If you want to search for objects matching an exact phrase enclose it in quotation marks:

	"My Demo Device"

You can also exclude words by putting a hyphen before the word to search the inventory for objects containing e.g. "My" or "Demo" but not "Device":

	My Demo -Device


Case is ignored. The following search texts return the same result:

	My Demo Device
	My demo device


>**Info:** Other than with filtering, using wildcards in a search is not supported.

#### <a name="filtering"></a>Filtering

Some pages offer a filtering functionality to filter objects in a list.

As opposed to the search functionality, on entering filtering criteria you must not necessarily enter complete words. 

In many cases you can just enter any arbitrary text into a text field, even just single characters. Entering

	cl

will reduce the list to all objects containing the string "cl".

In other cases you may enter * as wildcard character to return all objects starting with "cl":

	cl*


The list will be reduced to the selected objects accordingly.


## <a name="settings"></a>Changing user settings

Several account settings can be changed by the user. 

Click the **User** button at the top right and from the context menu, select **User Settings**. 

<img src="/guides/users-guide/Overview/Overview_UserSettings.png" alt="User settings"  style="max-width: 60%">

In addition to changing the email address, name and phone number stored for your account you can modify the language of the user interface from here. 

In the "Language" field, select a language from the dropdown list.

>**Info:** The user interface language will be selected along the following criteria, in the order listed below:

>1. The language selected in the Cumulocity user settings.
2. The language selected in the browser preferences.
3. The operating system language.

>The default language is English.

Click **Change password** to change your current password. For details refer to [Changing your password](#change-password).

Click **Save** at the bottom of the window to apply your settings.