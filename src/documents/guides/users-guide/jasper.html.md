---
order: 60
title: Jasper Control Center
layout: default
---

## <a name="overview"></a>Overview

The Jasper Control Center Add-On to Cumulocity provides you with a holistic view of mobile device connectivity. This Add-On works from within the Cumulocity Device Management Application. While Cumulocity itself communicates directly with devices and shows connectivity information as reported by the device, the Jasper Control Center Add-On complements this with a view of connectivity.

<img src="/guides/users-guide/jasperarchitecture.png" alt="Jasper architecture"  style="max-width: 100%">

If you have a Jasper Control Center account with your network provider, you can link that account to your Cumulocity tenant. With this combination you can:

* Check the status of the SIM card in the device and activate or deactivate it.
* Check the online status of the device as reported by the network.
* View usage of data traffic, text messages and voice calls.
* View the history of data sessions and any changes to the SIM card or tariffs.
* Invoke the Control Center diagnostics tools.
* Communicate with the device through text messages, for example, to set APN parameters.

The following sections describe:

* How to [link your Jasper Control Center account](#link-account) to your Cumulocity tenant.
* How to [link SIMs](#link-sims) and mobile devices.
* What information is [shown](#jasperinfo).
* How to [manage connectivity](#managing) from Device Management.

## <a name="link-account"></a>Linking your Jasper Control Center account

Cumulocity accesses your Jasper Control Center account using a dedicated user that you need to create in the Control Center and configure it in Cumulocity. This user is used for all access from Cumulocity to Jasper Control Center, so the permissions of the user have influence on functionalities available in Cumulocity.

Besides the user, you also need a so-called API license key and API server URL. To determine your API license key and API server URL:

* Use a Control Center administrator user to log in to your Control Center account and click "API integration" on the Control Center home page. 
* Your API license key and the API server URL are displayed on the top left.

***We recommend creating a dedicated user in Jasper Control Center:***

* As an admin user, navigate to "Admin" and "Users".
* Click the "Create New" button.
* Enter the user name and further details of the user. 
* If you want to be able to activate and deactivate SIM cards from Cumulocity, or to send SMS from Cumulocity, use the role "ACCOUNTUSER". Otherwise, use the role "ACCOUNTREADONLY".
* Click "Ok" to create a user, then enter your password. Then click "Ok" again. (Note: You need to enter your admin password, not the password that the new user will get.)

![Jasper user management](/guides/users-guide/jasperadmin.png)

The user is now created but does not have a password yet. Follow the instructions emailed to you by Control Center to set a password. Now link your Jasper Control Center account to Cumulocity:

* Use a Cumulocity administrator user to log in to the Cumulocity Administration application.
* Click on the "Connectivity" menu. If the menu does not show, please [make sure that your user has the "admin" permission for option management](/guides/users-guide/administration#permissions). If the menu still does not show, contact [support](https://support.cumulocity.com) to make the Jasper Control Center add-on available in your tenant.
* Enter key, URL, username and password, then click "Save".

![Jasper settings](/guides/users-guide/jaspersettings.png)

The Add-On is now set up.

## <a name="link-sims"></a>Linking SIMs and mobile devices

Now change to the Device Management application and navigate to a device that is connected through a SIM card managed by Jasper Control Center. You should see a tab "Connectivity". If this tab is not shown, 

* Your user does not have permissions on "Connectivity".
* The device is not linked to a SIM card. 
* The device is linked to a SIM card, but the card is not managed by the Jasper Control Center account.

To assign permissions, navigate to the administration application and select "Read" or "Admin" permissions on "Connectivity" as shown below.

<img src="/guides/users-guide/connectivityperms.png" alt="Connectivity permission settings"  style="max-width: 80%">

Jasper Control Center identifies SIM cards through their ICCID ("integrated circuit card identifier"). In most cases,  devices will report the ICCID of their SIM card automatically to Cumulocity. If the ICCID is not shown:

* Determine the ICCID of the SIM card. It is printed on the SIM card and is visible in Control Center.
* Enter the ICCID in the "Info" tab, then click "Save".
* Click the "Reload" button of the browser to make the "Connectivity" tab appear.

> Note that it may take a few seconds until the tab appears for the first time on a device, as Cumulocity checks if the particular SIM card is managed by Jasper Control Center.

## <a name="jasperinfo"></a>Browsing the "Connectivity" tab

Now navigate to the "Connectivity" tab. It shows several sections of information:

* Status.
* SMS.
* Sessions.
* Audit log.

> Some sections may not appear or may be empty. For example, if there have been no SMS sent and you do not have permission to send SMS, you will not see the SMS section.

The "Status" section lists summary information for the SIM card, as visible in the screenshot below. The first row shows if the device is currently running a data session. If it is, the start of the session and the current WAN IP address of the device is displayed. 

The left side of the section shows further status information: The ICCID of the SIM card, the activation state of the SIM card and, if set, the fixed IP address assigned to the SIM card. Provided you have "Admin" permission for "Connectivity", you can change the activation state by using the drop-down menu.

The right side of the section shows usage information for the current month, i.e., from the first of the month till today. Hovering over the tooltip shows the covered time period, including the usage during the past month.

![Status section](/guides/users-guide/jasperstatus.png)

The "SMS" section shows the text messages sent to the device and received from the device, including

* When the message was sent or received,
* Where it was sent from and where it was sent to.
* The delivery status of the message. 
 * For messages to the device: "Pending", if it was not yet received by the device, or "Delivered", if it was received by the device.
 * For messages from the device: "Received", if it was received by Control Center, or "Cancelled", if it was not yet received by Control Center.
* What the direction of the message is: MT ("Mobile terminated"), if it went to the device, or MO ("Mobile originated") if it came from the device.

Provided you have "Admin" permission for "Connectivity", you can also send text messages to the device by entering the text and clicking "Send SMS".

![SMS section](/guides/users-guide/jaspersms.png)

The "Sessions" section shows the log of data sessions carried out by the device. It lists when the session started, how long it took and how much data traffic was consumed.

![Sessions section](/guides/users-guide/jaspersessions.png)

Finally, the "Audit logs" section lists all changes to the SIM card and its tariff. It shows the type of change, old and new values when the change was carried out by whom, and if it was successful.

![Audit logs section](/guides/users-guide/jasperaudits.png)

> This tab does not update in real-time. To show current data, click the "Reload" link at the top.


## <a name="managing"></a>Managing connectivity

If you suspect that a device is not correctly reporting to Cumulocity, or it is not receiving commands, you can verify the connectivity status of the device using the "Connectivity" tab. Check if

* The SIM is activated. If the SIM card is not activated, you can activate it selecting "Activated" from the status drop-down menu. It may take a while until the SIM card is activated in the network. There may be a reset of the device needed to make it dial up to the network again.
* The device is connected to the network. If the device is not connected to the network, this may have several reasons:
 * The device is in a location without mobile network coverage. If the device reports network quality parameters, you can navigate to the ["Measurements" tab](/guides/users-guide/device-management#measurements) of the device and verify the last reported signal strength and error rate parameters. 
 * There is a network or hardware problem (antenna, modem). Select the cogwheel icon on the top right and click "SIM details", then open the Jasper Control Center diagnostics tool. If the device is not attempting to connect to the network, it may be broken.
* The device is in a data session. If the device is not in a data session, this may, again, have several reasons:
 * The APN settings are incorrectly configured in the device.
 * The SIM card is over traffic limit.
 * Data roaming is disabled on the device and the device is not in the SIM card's home network.
 * Data roaming for the particular network is not included in the SIM card's plan.
 * The SIM configuration was changed.

Data connectivity can be analyzed in various places:

* If the device reports its network configuration, navigate to the "Network" tab and verify, potentially edit, APN settings.
* If the device supports Shell, navigate to the ["Shell" tab](/guides/users-guide/device-management/#shell) and verify, potentially edit, APN settings and roaming configuration.
* Check the "Sessions" section on the "Connectivity" tab to see if the device has been communicating earlier and how much traffic it used.
* Check the "Audit logs" section on the "Connectivity" tab to see if there were any recent changes to the SIM card.
* Finally, click the cogwheel on the top right and select "SIM details" to navigate to the SIM configuration in Jasper Control Center.

> The "SIM details" menu item requires you to have a login for Jasper Control Center. This login is independently provided by your administrator. 

Finally, if the device is still not reporting to Cumulocity, there may be a configuration or software problem on the device.

* The device may have lost its credentials, for example, due to a factory reset or full loss of power. In this case, you can [re-register the device](/guides/users-guide/device-management#device-registration).
* There may be a configuration or software problem with the device, which has to be analyzed in a device-specific way.
