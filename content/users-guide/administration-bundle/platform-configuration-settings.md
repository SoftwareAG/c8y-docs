---
weight: 80
title: Platform configuration settings
layout: redirect
---

<a name="config-platform"></a>

From the Management tenant, you can configure properties which apply globally to the whole Cumulocity IoT deployment. 

Click **Configuration** in the **Settings** menu, to access the **Configuration** page.

![Configuration settings](/images/users-guide/Administration/admin-settings-configuration.png)

>**Info:** In some of the properties you can configure email templates for various purposes. Be aware that the corresponding emails are send with "text/html" as content type.

The following placeholders can be found in the **Configuration** page:

|Placeholder|Description|
|:---|:---|
|{host}|The value of this placeholder is "https://" + "&lt;&lt;tenantId&gt;&gt;" + "&lt;&lt;base-domain&gt;&gt;". For example, if "tenantId" is auto-generated, the host will be `https://t12345678.cumulocity.com`.
|{tenant-domain}|This is the location in which a tenant can be accessed. It is equal to "https://" + "&lt;&lt;tenantDomainName&gt;&gt;". For example, {tenant-domain} can be `https://myTenant.cumulocity.com`.
|{token}|An automatically generated system token for password reset purposes. When a user requests a password reset, a new random token will be generated. This token will be associated only with the particular user and will allow for a single password reset action. The standard way of using this placeholder is along with the {tenant-domain} property as "{tenant-domain}?token={token}".

>**Info:** In case of the Enterprise Tenant, the {tenantDomain} placeholders can have different values. An example tenant domain is `https://myTenant.myhost.com`.

### Two-factor authentication

In the **Two-factor authentication** section, you can change the SMS template which is sent to the users.

### Support link

In the **Support link** section, you can enter a URL to be used to link to a Support page. If you do not provide a link here, the default link to the Software AG TechCommunity page will be used.

Enter "false" to hide the link.

### Password reset

In the **Password reset** section you can change all settings related to password reset email templates.

![Configuration menu1](/images/users-guide/Administration/admin-settings-configuration-password-reset.png)

At the top you can select if you want to allow sending emails to unknown email addresses.

In the **Password reset email template** fields, provide an email template to be used when the address is known and one to be used when the address is unknown. The link to reset the password might for example be: {host}/apps/devicemanagement/index.html?token={token}.

In the **Email subject** field, provide a subject for all password reset related emails.

In the following two fields provide an email template to be used on password change confirmation and a template for the invitation email.

### <a name="config-support-users"></a> Support user

In the **Support user** section you can configure the parameters for the support user access for subtenant users.

This feature enables Cumulocity IoT platform providers (Software AG in case of the public cloud instances or service providers with on-premise installations) to support their customers by accessing their users using a support user. A support user is a user in the Management tenant that has specific permissions, i.e. to access subtenant users in case of any issues. Refer to [Support user access](/users-guide/enterprise-edition#users-in-other-tenants) for more information.

<img src="/images/users-guide/enterprise-tenant/et-settings-configuration-support-user.png" alt="Support user configuration">

In the field **Activate support user**, specify if support user access is activated for subtenant users. Possible values you can enter here are:

* *true*: Support user access is activated for all subtenants by default. A support user can log into any subtenant as any user. Note that subtenant users cannot disable access themselves.
* *false*: Support user access is deactivated for all subtenants, but can be explicitly enabled for a subtenant. A support user can log in only to subtenants for which at least one user has explicitly enabled such access.
* An explicit date in date-time format, until when support user access should remain activated. If no date is specified the value is set to "No limit".

In the **Validity limit** field, you can optionally specify the support duration, i.e. for how many hours support user access will be prolonged after each support user request from a subtenant user. Enter a number specifying the number of hours. The default value is 24 hours.

The expiry date-time will be updated based on the duration specified in the **Validity limit** field, e.g. if the current expiry date-time is 01/09/2018 15:00 and duration has been kept at 24 hours, the enabling support user will update the expiry date to 01/10/2018 15:00.

Details on the status of support requests and support user access for a tenant can be found in the **Properties** tab of the tenant, see [Enterprise Tenant > Managing tenants](/users-guide/enterprise-edition#managing-tenants).

#### <a name="configuring-support-users"></a>Configuring a support user

A support user is a user in the Management tenant with specific permissions. This user can log in to the target tenant and impersonate the target user.

To configure a user in the Management tenant as support user, you need to assign the relevant roles to the user. This can either be dine by using a global role or by inventory roles.  

**Using a global role**

1. Create a role “Support” with “Support READ” and “Support ADMIN” permission.
2. Assign the role “Support” to the respective user and remove all other roles for the user.

**Using inventory roles**

Using inventory roles, you can selectively assign a support user for specific subtenants. 

1. Create an inventory role called “Support” with type = "*" and permission = "All".
2. Create a group of all subtenants which you want to be supported by the user.
3. Assign the “Support” inventory role to above group as described in [Administration > Managing permissions > Assigning inventory roles to users](/users-guide/administration#attach-inventory).

> **Info:** The support user feature does not work when the support user has two-factor authentication enabled, but no phone number is provided. The phone number has to be provided first, in order to login as a support user.

### Email server

In the **Email server** section, you can configure custom email server settings.

<img src="/images/users-guide/Administration/admin-settings-configuration-email-server.png" alt="Configure email server">

In the **Protocol and encryption** field, select a protocol/encryption type from the dropdown list. May be one of:

* SMTP (no encryption): email.protocol=smtp and email.connection.encrypted=false
* SMTP (STARTTLS): email.protocol=smtp and email.connection.encrypted=true
* SMTPS (SSL/TLS): email.protocol=smtps and email.connection.encrypted=true

Provide the host, port, username, password and sender address for the email server.

### Data export

In the **Data export** section, you can set the email subject and email template for data export and specify the **User unauthorized error message**.

![Data export settings](/images/users-guide/Administration/admin-settings-configuration-data-export.png)

### Storage limit

In the **Storage limit** section, you can specify the email subject and email template for emails being send *before* data is removed on exceeding the storage limit and *after* data removal is performed.

![Storage limit settings](/images/users-guide/Administration/admin-settings-configuration-storage-limit.png)

### Suspending tenants

In the **Suspending tenants** section, you can provide settings for emails being send on tenant suspension.

<img src="/images/users-guide/Administration/admin-settings-configuration-suspending-tenants.png" alt="Suspended tenants">

At the top you can select if you want to send the email to the suspended tenant's administrator and specify an additional email receiver. Below you set the subject and template for the tenant suspended email.

Click **Save configuration** to save your settings.

Additional features are available for Enterprise Tenants, see [Enterprise Tenant > Customizing your platform](/users-guide/enterprise-edition#customization).