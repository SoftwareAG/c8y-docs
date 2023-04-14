---
weight: 20
title: Configuration
layout: redirect
section:
  - platform_administration
aliases:
  - /users-guide/enterprise-edition
---

On the **Configuration** tab, you can configure various properties for your tenant.

{{< c8y-admon-info >}}
In some of the properties you can configure email templates for various purposes. Be aware that the corresponding emails are send with "text/html" as content type.
{{< /c8y-admon-info >}}

### Placeholders

The following placeholders can be found in the **Configuration** tab:

|Placeholder|Description|
|:---|:---|
|{host}|The value of this placeholder is "https://" + "&lt;&lt;tenantId&gt;&gt;" + "&lt;&lt;base-domain&gt;&gt;". For example, if "tenantId" is auto-generated, the host will be `https://t12345678.{{< domain-c8y >}}`.
|{tenant-domain}|This is the location in which a tenant can be accessed. It is equal to "https://" + "&lt;&lt;tenantDomainName&gt;&gt;". For example, {tenant-domain} can be `https://myTenant.{{< domain-c8y >}}`. In case of an {{< enterprise-tenant >}}, the {tenantDomain} placeholders can have different values. An example tenant domain is `https://myTenant.myhost.com`.
|{token}|An automatically generated system token for password reset purposes. When a user requests a password reset, a new random token will be generated. This token will be associated only with the particular user and will allow for a single password reset action. The standard way of using this placeholder is along with the {tenant-domain} property as "{tenant-domain}?token={token}".
|{email}|This placeholder will be replaced with the email address of the recipient user as stored in the user settings. Some views in the UI recognize this parameter and prefill the respective field with this value, for example, during the process of password reset.

### Two-factor authentication

Under **Two-factor authentication**, you can change the SMS template which is sent to the users.

### Support link

In the **Support link** section, you can enter a URL to be used to link to a support page. If you do not provide a link here, the default link to the {{< sag-dev-community >}} page will be used.

Enter "false" to hide the link.

### Password reset

In the **Password reset** section you can change all settings related to password reset email templates.

At the top you can select if you want to allow sending emails to unknown email addresses.

In the **Password reset email template** fields, provide an email template to be used when the address is known and one to be used when the address is unknown. The link to reset the password might for example be: {tenant-domain}/apps/devicemanagement/index.html?token={token}&email={email}.

In the **Email subject** field, provide a subject for all password reset related emails.

In the following two fields provide an email template to be used on password change confirmation and a template for the invitation email.

### Email server

In the **Email server** section, you can configure custom email server settings.

In the **Protocol and encryption** field, select a protocol/encryption type from the dropdown list. May be one of:

* SMTP (no encryption): email.protocol=smtp and email.connection.encrypted=false
* SMTP (STARTTLS): email.protocol=smtp and email.connection.encrypted=true
* SMTPS (SSL/TLS): email.protocol=smtps and email.connection.encrypted=true

Provide the host, port, username, password, and sender address for the email server. The empty password configuration is supported for the {{< enterprise-tenant >}}.

### Data export

In the **Data export** section, you can set the email subject and email template for data export and specify the **User unauthorized error message**.

### Storage limit

In the **Storage limit** section, you can specify the email subject and email template for emails being send *before* data is removed on exceeding the storage limit (warning) and *after* data removal is performed (limit exceeded).

### Suspending tenants

In the **Suspending tenants** section, you can provide settings for emails being send on tenant suspension.

At the top you can select if you want to send the email to the suspended tenant's administrator and specify an additional email receiver. Below you set the subject and template for the tenant suspended email.

Click **Save configuration** at the bottom to save your settings.

{{< c8y-admon-info >}}
Some additional configuration settings can be specified globally in the {{< management-tenant >}}, see [Administration > Platform configuration settings](/users-guide/administration/#platform-configuration-settings).
{{< /c8y-admon-info >}}
