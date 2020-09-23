---
weight: 20
title: Setting up your Jasper Control Center account
layout: redirect
---

The following steps describe how to create a dedicated user in the Jasper Control Center. This user is used for all access from Cumulocity IoT to Jasper Control Center, so the permissions of the user have influence on functionalities available in Cumulocity IoT.

>**Info:** In a similar way, we recommend you to set up a dedicated user for Ericsson or Comarch to get the credentials required to connect to Cumulocity IoT. Ask your administrator or our support team for further information.

Besides the user, you also need a so-called API license key (only required for Jasper) and API server URL. To determine your API license key and API server URL, use a Control Center administrator user to log in to your Control Center account and click **API integration** on the Control Center home page.
Your API license key and the API server URL are displayed on the top left.

To create a user in Jasper Control Center perform the following steps:

1. As an admin user, navigate to **Admin** and **Users**.
1. Click **Create New**.
1. Enter the user name and further details of the user.
1. If you want to be able to activate and deactivate SIM cards from Cumulocity IoT, or to send SMS from Cumulocity IoT, use the role ACCOUNTUSER. Otherwise, use the role ACCOUNTREADONLY.
1. Click **OK** to create the user, then enter your admin password and click **OK** again.

![Jasper user management](/images/device-protocols/connectivity/connectivity-jasperadmin.png)

The user is now created but does not have a password yet. Follow the instructions emailed to you by Control Center to set a password.
