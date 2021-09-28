---
weight: 61
title: Two-factor authentication
---
The Two-factor authentication (TFA) is an extra layer of security that only completes authentication with a combination of two different factors: something the users know (username and password) and something they have (for example, smartphone) or something they are (for example, fingerprint). You can read more on how to configure TFA in the [authentication settings](/users-guide/administration/#authentication) section.

There are two possible TFA strategies: SMS and TOTP. Only one of them can be active at a time.

To check whether TFA is enabled for a certain user, go to the **Users** page and see the TFA status column right from the password strength column. A key icon indicates that TFA is enabled and by hovering over it you can see the strategy that is being used.

![TFA status](/images/users-guide/Administration/admin-user-tfa-enabled.png)

### SMS

When adding a user and TFA is enabled, a mobile phone number must be specified. Without a valid phone number a login is impossible.


#### How to enable a specific user

1. Click on the desired user in the **Users** page.
2. Select the checkbox next to **Enable two-factor authentication**.
3. Click **Save**.

![Enable TFA](/images/users-guide/Administration/admin-user-enable-tfa.png)

>**Info:** This process can only be executed in the Administration application and is not available under **User settings**.


### TOTP (Google Authenticator)

Users have to install a TOTP application on their smartphone (Google Authenticator recommended), freely available both on App Store and Play Store.

#### Setup

Opposed to the SMS strategy TOTP has to be set up by each user. By opening **User settings** in the top right corner and then clicking **Set up two-factor authentication** they can start the setup process.
![Trigger TOTP setup](/images/users-guide/Administration/admin-user-tfa-setup-button.png)

IF TFA is enabled, the user will be presented a QR code at login, that needs to be scanned with the previously installed TOTP mobile application.

Alternatively, the secret can also be inserted manually in case scanning the QR code is not an option.

![TOTP setup process](/images/users-guide/Administration/admin-user-tfa-setup.png)

After this process the mobile application will generate a new code every 30 seconds that can be used to complete the authentication process.

#### Revoking the secret

>**Info:** Although the setup must be done by each individual user, revoking the secret can only be done by a user with "user management ADMIN" permission via the Administration application. As so, if the user loses the phone or uninstalls the application they must contact a user with this particular permission.

To revoke the key follow these steps:

1. Navigate to the Administration application.
2. Click on the desired user in the **Users** page.
3. Scroll down to **Login Options**.
4. Click **Revoke TOTP secret**.
5. Confirm by clicking **Revoke**.

![TOTP secret revoke](/images/users-guide/Administration/admin-user-totp-revoke.png)
