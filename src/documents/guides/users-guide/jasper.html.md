---
order: 60
title: Jasper Control Center
layout: default
---

## <a name="overview"></a>Overview

The Jasper Control Center add-on to Cumulocity provides you with a holistic view of mobile device connectivity from within the Cumulocity Device Management application. While Cumulocity itself communicates directly with devices and shows connectivity information as reported by the device, the Jasper Control Center add-on complements this with a view of connectivity as reported by the mobile network.

![Jasper architecture](/guides/users-guide/jasperarchitecture.png)

If you have a Jasper Control Center account with your network provider, you can link that account to your Cumulocity account. This lets you

* Check the status of the SIM card in the device and activate respectively deactivate it.
* Check the online status of the device as reported by the network.
* View usage of data traffic, text messages and voice calls.
* View the history of data sessions and any changes to the SIM card or tariffs.
* Invoke the Control Center diagnostics tools.
* Communicate with the device through text messages, for example, to set APN parameters.

The following sections describe

* How to [link your Jasper Control Center account](#link-account) to your Cumulocity account.
* How to [link SIMs](#link-sims) and mobile devices.
* How to [manage connectivity](#managing) from Device Management.
* How to [use SMS](#sms) to communicate with devices.

## <a name="link-account"></a>Linking your Jasper Control Center account

To link your Jasper Control Center account with your Cumulocity account, you need four pieces of information: An API license key, an API server URL, a username and a password. To determine your API license key and API server URL:

* Use a Control Center administrator user to log in to your Control Center account and click "API integration" on the Control Center home page. 
* Your API license key and the API server URL are displayed on the top left.

We recommend to create a dedicated user in Jasper Control Center:

* Still as administrator user, navigate to "Admin" and "Users".
* Click the "Create New" button.
* Enter the user name and further details of the user. 
* If you want to be able to activate and deactivate SIM cards from Cumulocity, or to send SMS from Cumulocity, use the role "ACCOUNTUSER". Otherwise, use the role "ACCOUNTREADONLY".
* Click "Ok" to create a user, then enter your Control Center password (not the user's password!). Then click "Ok" again.

![Jasper user management](/guides/users-guide/jasperadmin.png)

The user is now created, but does not have a password yet. Follow the instructions emailed to you by Control Center to set a password. Now link your Jasper Control Center account to Cumulocity:

* Use a Cumulocity administrator user to log in to the Cumulocity Administration application.
* Click on the "Connectivity" menu.
* Enter key, URL, username and password, then click "Save".

![Jasper settings](/guides/users-guide/jaspersettings.png)

The add-on is now set up.

> If you do not see the "Connectivity" menu, please contact support@cumulocity.com for making the Jasper Control Center add-on available in your account.

## <a name="link-sims"></a>Linking SIMs  and mobile devices

Now change to the Device Management application and navigate to a device that is connected through a SIM card managed by Jasper Control Center. You should see a tab "Connectivity". If this tab is not shown, 

* The device is not linked to a SIM card. 
* The device is linked to a SIM card, but the card is not managed by the Jasper Control Center account.

Jasper Control Center identifies SIM cards through their ICCID ("integrated circuit card identifier"). In most cases,  devices will report the ICCID of their SIM card automatically to Cumulocity. If the ICCID is not shown:

* Determine the ICCID of the SIM card. It is printed on the SIM card and is visible in Control Center.
* Enter the ICCID in the "Info" tab, then click "Save".
* Click the "Reload" button of the browser to make the "Connectivity" tab appear.

## <a name="managing"></a>Managing connectivity

If you suspect that a device is not correctly reporting to Cumulocity, or it is not receiving commands, you can verify the connectivity status of the device using the "Connectivity" tab. Check if

* The SIM is activated. If the SIM card is not activated, you can activate it selecting "Activated" from the status drop-down menu. It may take a while until the SIM card is activated in the network. There may be a reset of the device needed to make it dial up to the network again.
* The device is connected to the network. If the device is not connected to the network, this may have several reasons:
 * The device is in a location without mobile network coverage. If the device reports network quality parameters, you can navigate to the ["Measurements" tab](/guides/users-guide/device-management#measurements) of the device and verify the last reported signal strength and error rate parameters. 
 * There is a network or hardware problem (antenna, modem). Select the cog wheel icon on the top right and click "Run diagnostics" to open the Jasper Control Center diagnostics tool. If the device is not attempting to connect to the network, it may be broken.
* The device is in a data session. If the device is not in a data session, this may, again, have several reasons:
 * The APN settings are incorrectly configured in the device.
 * The SIM card is over traffic limit.
 * Data roaming is diabled on the device and the device is not in the SIM card's home network.
 * Data roaming for the particular network is not included in the SIM card's plan.
 * The SIM configuration was changed.

Data connectivity can be analyzed in various places:

* If the device reports its network configuration, navigate to the "Network" tab and verify, potentially edit, APN settingss.
* If the device supports Shell, navigate to the ["Shell" tab](/guides/users-guide/device-management/#shell) and verify, potentially edit, APN settings and roaming configuration.
* Check the "Sessions" section on the "Connectivity" tab to see if the device has been communicating earlier and how much traffic it used.
* Check the "Audit logs" section on the "Connectivity" tab to see if there were any recent changes to the SIM card.
* Finally, click the cog wheel on the top right and select "Get SIM details" to navigate to the SIM configuratin in Jasper Control Center.

> The "Get SIM details" and "Run diagnostics" menu items require you to have a login for Jasper Control Center. This login is independently provided by your administrator. 

Finally, if the device is still not reporting to Cumulocity, there may be a configuration or software problem on the device.

* The device may have lost its credentials, for example, due to a factory reset or full loss of power. In this case, you can [re-register the device](/guides/users-guide/device-management#device-registration).
* There may be a configuration or software problem with the device, which has to be analyzed in a device-specifc way.

![Jasper details shown in Cumulocity](/guides/users-guide/jasperdetails.png)

## <a name="sms"></a>Using SMS to communicate with devices

If the device supports communication through text messages, you can use the "Connectivity" tab to send text commands to the device and read reports from the device. The "SMS" section shows a list of text messages exchanged with the device. It also provides a text field for you to send commands to the device.

[Shell](/guides/users-guide/device-management/#shell) also supports communcation through text messages.

> TBD: Improve with real screenshot and some more text

![Jasper SMS communication](/guides/users-guide/jaspersms.png)



