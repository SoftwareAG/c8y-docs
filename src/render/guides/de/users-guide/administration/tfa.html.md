---
order: 40
title: Using two-factor authentication
layout: redirect
---
The Two-factor authentication(TFA) is an extra layer of security that requires not only a username and password, but SMS verification as well. TFA can only be set up by administrators. When TFA is enabled, it is impossible to configure it from the "User settings", it is configurable from the administration UI only.

>**Info**: When adding a user and TFA is enabled, you need to provide a phone number for the user. When users without a phone number try to login using TFA, the users will be redirected to a window, to enter their mobile phone number. Without a phone number a login is impossible.

To see whether TFA is enabled for a certain user, go to the "Users" page and check the TFA status column.

![TFA status](/guides/images/users-guide/tfastatus.png)

To enable two-factor authentication for a user, follow these steps:

- Click on the desired user in the "Users" page.
- Select the checkbox next to "Enable two-factor authentication".
- Click **Save**.

![Enable TFA](/guides/images/users-guide/enabletfa.png)