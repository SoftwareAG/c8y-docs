---
order: 20
title: Accessing and logging into the Cumulocity platform
layout: redirect
---

<a name="accessing"></a>

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
Using the private mode on browsers may not work.

To access the applications for your Cumulocity tenant, use the following URL:

```http
https://<account>.cumulocity.com/
```

This will direct you to the login page of your default application.

> **Important:** Make sure that the address bar of your browser shows a lock icon. The lock icon indicates that you are using a secure connection and that you are indeed connected to Cumulocity.

>**Info:** The above URL is only valid for Cumulocity Standard Edition subscribers. For Enterprise Edition deployments of Cumulocity, the URL is specific to your organization.

### <a name="login"></a>Logging into the Cumulocity platform

On the Login screen, enter your username and password and click **Login** to enter the application. 

<img src="/guides/images/users-guide/overview-login.png" alt="Login prompt">

Select the **Remember me** checkbox if you want the browser to remember your credentials, so that you do not have to enter them again when opening the application the next time. This is also convenient if you frequently switch between Cumulocity applications, as Cumulocity will request you to authenticate each time when starting an application. You can make the browser "forget" your credentials by explicitly logging out. 

To explicitly logout, click the **User** button at the right of the the top bar and from the context menu select **Logout**.

<img src="/guides/images/users-guide/overview-logout.png" alt="Logout menu" style="max-width: 100%">

### <a name="welcome"></a>Welcome screen

When you log into Cumulocity for the first time, you will be taken to the default application (usually the Cockpit application if not configured differently) where the **Welcome** screen initially opens up.

<img src="/guides/images/users-guide/overview-welcome-screen.png" name="Welcome screen"/>

The **Welcome** screen contains the following items:

* Quick links to the most relevant functions
* Links to the available applications
* Links to relevant documentation areas and to the Support Forum
* The latest news from the Cumulocity twitter channel. Note that this section is only available for tenants hosted by www.cumulocity.com

**Hiding/restoring the Welcome screen**

If you do not want the **Welcome** screen to be your start page, activate the slider **Don't use as start page** on the top right.

To restore the **Welcome** screen as start page, select **Welcome** in the navigator on the top left and deactivate the slider **Don't use as start page** again.

### <a name="reset-password"></a>Resetting your password

If you forgot your password follow these steps:

1. Click the **Forgot password?** link on the Login screen. 
2. In the upcoming dialog, enter your email address and click **Reset password**. 
3. Check your email account for an email from the Cumulocity support providing a password reset link. 
4. Click the link in the email and provide your new password.

> **Info:** The password reset link is only valid for one day.

>**Info:** The automated password reset will only work if your email address is stored with your Cumulocity user. If you get a warning that the password cannot be reset, you are either using a different email address than the one stored with your Cumulocity user, or your Cumulocity user has no email address stored. In either case, contact a Cumulocity administrator in your organization. Administrators can reset your password.
If you yourself are the primary administrator, your email address used on first registering is automatically stored with your user. If you have questions, please contact the Cumulocity support.

### <a name="URLs"></a>Accessing pages using URLs

You can navigate straight to any place inside a Cumulocity application using the respective URL. For example, to show the basic information for a device, you can enter the following URL:

```http
https://<account>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info
```

Using such an URL, you can

  * save bookmarks for specific devices or pages,
  * send emails (manually or automatically, using the real-time event engine) which include a link to devices or sensor data,
  * use the backward and forward navigation of your browser,
  * write own web applications which link directly to information contained in a Cumulocity application.
