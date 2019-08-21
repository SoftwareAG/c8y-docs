---
weight: 61
title: Two-factor authentication
---
The Two-factor authentication (TFA) is an extra layer of security that requires not only a username and password, but SMS verification as well. TFA can only be set up by administrators. When TFA is [enabled](/guides/users-guide/administration/#authentication), it is impossible to configure it from the **User settings**, it is configurable only from the administration UI.

There are two possible TFA strategies: SMS and TOTP. Only one of them can be active at each moment.

To check whether TFA is enabled for a certain user, go to the **Users** page and see the TFA status column right from the password strength column. A key icon indicates that TFA is enabled and by moving the cursor over it is still possible to read the strategy that is being used.

![TFA status](/guides/images/users-guide/Administration/admin-user-tfa-enabled.png)

### SMS

When adding a user and TFA is enabled, you need to provide a phone number for the user. When users without a phone number try to login using TFA, the users will be redirected to a window, to enter their mobile phone number. Without a phone number a login is impossible.

#### Enabling a specific user

1. Click on the desired user in the **Users** page.
2. Select the checkbox next to **Enable two-factor authentication**.
3. Click **Save**.

![Enable TFA](/guides/images/users-guide/Administration/admin-user-enable-tfa.png)


  >**Info**: This process can only be executed by an administrator.

### TOTP (Google Authenticator)

Users have to install a TOTP application on their smartphone (Google Authenticator recommended), freely available both on App Store and Play Store.

#### Setup

Opposed to the the SMS strategy this setup process must be performed by each user. By clicking on *User settings* on top right corner each trigger the setup process.
![Trigger TOTP setup](/guides/images/users-guide/Administration/admin-user-tfa-setup-button.png)

If TFA is enforced, the process will be triggered on login.

The user will be presented with a QR code and a code that should be scanned with the previously installed TOTP mobile application.

![TOTP setup process](/guides/images/users-guide/Administration/admin-user-tfa-setup.png)


After this process the mobile application will generate a new code every 30 seconds that can be used to complete the authentication process.

#### Revoking

Although the setup must be done by the user must be done by the user, revoking the secret must be done by an administrator. As so, if the user loses the phone or uninstall the application they must contact support.

From the administrator prespective the process to revoke the key is:

1. Click on the desired user in the **Users** page.
2. Scroll down to *Login Options*
3. Click *Revoke TOTP secret*
4. Confirm by clicking *Revoke*

![TOTP secret revoke](/guides/images/users-guide/Administration/admin-user-totp-revoke.png)
