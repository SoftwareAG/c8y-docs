---
weight: 61
title: Two-factor authentication
---
The Two-factor authentication (TFA) is an extra layer of security that only completes authentication with a combination of two different factors: something the user knows (username and password) and something they have (ex. smartphone) or something they are (ex. fingerprint). You can read more on how to configure configure tfa in the  [authentication settings section](/guides/users-guide/administration/#authentication).

There are two possible TFA strategies: SMS and TOTP. Only one of them can be active at each moment.

To check whether TFA is enabled for a certain user, go to the **Users** page and see the TFA status column right from the password strength column. A key icon indicates that TFA is enabled and by moving the cursor over it is still possible to read the strategy that is being used.

![TFA status](/guides/images/users-guide/Administration/admin-user-tfa-enabled.png)

### SMS

When adding a user and TFA is enabled, a phone number needs to be provided. When users without a phone number try to login using TFA, they will be prompted for their mobile number. Without a valid monbile number a login is impossible.

#### Enabling a specific user

1. Click on the desired user in the **Users** page.
2. Select the checkbox next to **Enable two-factor authentication**.
3. Click **Save**.

![Enable TFA](/guides/images/users-guide/Administration/admin-user-enable-tfa.png)

  >**Info**: This process can only be executed in the administration UI and is not available i *User settings*

### TOTP (Google Authenticator)

Users have to install a TOTP application on their smartphone (Google Authenticator recommended), freely available both on App Store and Play Store.

#### Setup

Opposed to the the SMS strategy this setup process must be performed by each user. By clicking on *User settings* on top right corner each trigger the setup process.
![Trigger TOTP setup](/guides/images/users-guide/Administration/admin-user-tfa-setup-button.png)

If TFA is enforced, the process will be triggered on login.

The user will be presented with a QR code that should be scanned with the previously installed TOTP mobile application.
In alternative the secret can also be inserted manually in case scanning the QR code is not an option.

![TOTP setup process](/guides/images/users-guide/Administration/admin-user-tfa-setup.png)


After this process the mobile application will generate a new code every 30 seconds that can be used to complete the authentication process.

#### Revoking

Although the setup must be done by the user, revoking the secret is only possible via the administration UI. As so, if the user loses the phone or uninstall the application the tenant administrator.

From the tenant administrator prespective the process to revoke the key is:

1. Open Administration
2. Click on the desired user in the **Users** page.
3. Scroll down to *Login Options*
4. Click *Revoke TOTP secret*
5. Confirm by clicking *Revoke*

![TOTP secret revoke](/guides/images/users-guide/Administration/admin-user-totp-revoke.png)
