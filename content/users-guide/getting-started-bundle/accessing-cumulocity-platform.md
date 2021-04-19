---
weight: 20
title: Accessing and logging into the Cumulocity IoT platform
layout: redirect
aliases:
  - /users-guide/overview/#accessing-cumulocity-platform
---

You access the Cumulocity IoT platform via a web browser.

### Supported browsers

Our products have been tested with the following desktop web browsers:

* Edge Browser
* Internet Explorer (latest version)
* Firefox (latest version)    
* Chrome (latest version)

>**Info:** Cumulocity IoT is fully functional on Internet Explorer 11. However, layouts may not be perfect in all cases.

You may also use recent smartphone and tablet web browsers. We have tested our products with the following mobile web browsers:

* Chrome on Android (latest version) on Galaxy smartphones and tablets
* Safari on iOS (latest version) on Apple iPhone and iPad

>**Info:** Cumulocity IoT on mobile devices shows some limitations:
>
* The usage may be constrained by the memory and the processing power available on the devices. For example, loading graphs with large amounts of data points may make the mobile device unresponsive.
* Using the private mode on browsers may not work.
* [Apama Analytics Builder](/apama/overview-analytics/#analytics-builder) (an optional component) does not support mobile/ touch devices.

### URL

To access the applications for your Cumulocity IoT tenant, use the following URL:

```http
https://<tenant-domain>.cumulocity.com/
```

This will direct you to the login page of your default application. See [Tenants > Tenant ID and tenant domain](/reference/tenants/#a-name-tenant-id-and-domain-a-tenant-id-and-tenant-domain) in the **Reference** guide for further details on tenant ID and tenant domain.

>**Info:** The above URL is only valid for Cumulocity IoT Standard Tenant subscribers. For Enterprise Tenant deployments of Cumulocity IoT, the URL is specific to your organization.

> **Important:** Make sure that the address bar of your browser shows a lock icon. The lock icon indicates that you are using a secure connection and that you are indeed connected to the Cumulocity IoT platform.

### <a name="login"></a>To log into the Cumulocity IoT platform

On the Login screen, enter your username (case-sensitive) and password and click **Login** to enter the application.

<img src="/images/users-guide/getting-started/getting-started-login.png" alt="Login prompt">

Select the **Remember me** checkbox if you want the browser to remember your credentials, so that you do not have to enter them again when opening the application the next time. This is also convenient if you frequently switch between Cumulocity IoT applications, as the Cumulocity IoT platform will request you to authenticate each time when starting an application. You can make the browser "forget" your credentials by explicitly logging out.

When you log into the Cumulocity IoT platform for the first time, you will be taken to the default application (usually the [Cockpit](/users-guide/cockpit) application if not configured differently).

![image alt text](/images/users-guide/cockpit/cockpit-home-screen.png)

To explicitly logout, click the **User** button at the right of the the top bar and from the context menu select **Logout**.

<img src="/images/users-guide/getting-started/getting-started-logout.png" alt="Logout menu" style="max-width: 100%">

### <a name="reset-password"></a>To reset your password

1. Click the **Forgot password?** link on the Login screen.
2. In the resulting dialog box, enter your email address and click **Reset password**.
3. Check your email account for an email from the Cumulocity IoT platform support providing a password reset link.
4. Click the link in the email and provide your new password.

> **Info:** The password reset link is only valid for one day.

>**Info:** The automated password reset will only work if your email address is stored with your Cumulocity IoT user. If you get a warning that the password cannot be reset, you are either using a different email address than the one stored with your Cumulocity IoT user, or your Cumulocity IoT user has no email address stored. In either case, contact a Cumulocity IoT administrator in your organization. Administrators can reset your password.
>
If you yourself are the primary administrator, your email address used on first registering is automatically stored with your user. If you have questions, please contact [product support](/about-doc/contacting-support).

### <a name="URLs"></a>Accessing pages using URLs

You can navigate straight to any place inside a Cumulocity IoT application using the respective URL. For example, to show the basic information for a device, you can enter the following URL:

```http
https://<tenant-domain>.cumulocity.com/apps/devicemanagement/index.html#/device/<id>/info
```

Using such an URL, you can:

*   Save bookmarks for specific devices or pages.
*   Send emails (manually or automatically, using the real-time event engine) which include a link to devices or sensor data.
*   Use the backward and forward navigation of your browser.
*   Write own web applications which link directly to information contained in a Cumulocity IoT application.
