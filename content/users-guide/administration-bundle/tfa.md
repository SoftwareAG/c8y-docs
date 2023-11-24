---
weight: 71
title: Two-factor authentication
---
The two-factor authentication (TFA) is an extra layer of security that only completes authentication with a combination of two different factors: something the users know (username and password) and something they have (for example, smartphone) or something they are (for example, fingerprint). You can read more on how to configure TFA in the [authentication settings](/users-guide/administration/#authentication) section.

There are two possible TFA strategies: Short Message Service (SMS) and Time-based One-Time Password (TOTP). Only one of them can be active at a time.

To check whether TFA is enabled for a certain user, go to the **Users** page and see the TFA status column right from the password strength column. A key icon indicates that TFA is enabled and by hovering over it you can see the strategy that is being used.

![TFA status](/images/users-guide/Administration/admin-tfa-sms.png)

{{< c8y-admon-related >}}
- [Changing settings > Changing authentication settings](/users-guide/administration/#authentication) for information on how to configure TFA and other authentication settings.
- [Authentication](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#section/Authentication) in the {{< openapi >}} for details on managing authentication via REST.
{{< /c8y-admon-related >}}


### SMS

{{< c8y-admon-req >}}
When adding a user and TFA is enabled, a mobile phone number must be specified. Without a valid phone number a login is impossible.
{{< /c8y-admon-req >}}


#### How to enable a specific user

1. In the Administration application, navigate to **Accounts** > **Users** and select a user in the **Users** page.
2. Select the checkbox next to **Enable two-factor authentication**.
3. Click **Save**.

![Enable TFA](/images/users-guide/Administration/admin-user-enable-tfa-1.png)

{{< c8y-admon-info >}}
This process can only be executed in the Administration application and is not available under **User settings**.
{{< /c8y-admon-info >}}

### TOTP

{{< c8y-admon-req >}}
Users must install a TOTP application on their smartphone (Google Authenticator is recommended), freely available both on App Store and Play Store.
{{< /c8y-admon-req >}}


#### Setup

Opposed to the SMS strategy TOTP must be set up by each user. By opening **User settings** in the top right corner and then clicking **Set up two-factor authentication** they can start the setup process.
![Trigger TOTP setup](/images/users-guide/Administration/admin-user-enable-tfa-2.png)

IF TFA is enabled, the user will be presented a QR code at login, that needs to be scanned with the previously installed TOTP mobile application.

Alternatively, the secret can also be inserted manually in case scanning the QR code is not an option.

![TOTP setup process](/images/users-guide/Administration/admin-user-tfa-setup.png)

After this process the mobile application will generate a new code every 30 seconds that can be used to complete the authentication process.

#### Revoking the secret
If a user loses access to the TFA code, for example, if a user loses the phone or uninstalls the application, and needs to set it up again, the secret must be revoked.
TOTP must be set up by each user individually.

{{< c8y-admon-req >}}

Users can not revoke their own TOTP secret. The secret of a user is only revoked by their respective parent user.
See [{{< enterprise-tenant >}} > Managing user hierarchies](/users-guide/enterprise-tenant/#user-hierarchies) in the *User guide* for detailed information on user hierarchies.

ROLES & PERMISSIONS:

- To revoke a secret: ADMIN or CREATE permission for permission type "User management"

{{< /c8y-admon-req >}}

1. In the Administration application, navigate to **Accounts** > **Users** and select a user in the **Users** page.
2. Scroll down to **Login options**.
3. Click **Revoke TOTP secret**.
4. Confirm by clicking **Revoke**.

![TOTP secret revoke](/images/users-guide/Administration/admin-user-totp-revoke.png)

#### Disabling TOTP for a user

If a user wants to turn off the use of TOTP (and thus TFA) completely, the secret must be revoked and TOTP enforcement must be disabled.
TOTP must be set up by each user individually.

{{< c8y-admon-req >}}
ROLES & PERMISSIONS:

- To revoke a secret: ADMIN or CREATE permission for permission type "User management"
- To disable TOTP enforcement: ADMIN permission for permission type "User management"

{{< /c8y-admon-req >}}

To disable TOTP for a user follow these steps:

1. In the Administration application, navigate to **Accounts** > **Users** and select the user in the **Users** page.
2. Scroll down to **Login options**.
3. Clear the **Enforce TOTP for the user** checkbox.
4. Click **Revoke TOTP secret**.
5. Confirm by clicking **Revoke**.
6. Click **Save** to save your changes.

![TOTP disable user](/images/users-guide/Administration/admin-user-totp-disable.png)
