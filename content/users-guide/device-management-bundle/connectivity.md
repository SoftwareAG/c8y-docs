---
weight: 100
title: Connectivity
layout: redirect
aliases:
  -/users-guide/optional-services/#connectivity
---

The Connectivity agent, which works from within the {{< product-c8y-iot >}} Device Management application, provides basic information on mobile devices and additional connectivity details.

The {{< product-c8y-iot >}} platform integrates with the SIM connectivity platforms Comarch, Ericsson, Jasper and Kite.

The following features are supported by these providers:

|Feature|Comarch|Ericsson|Jasper|Kite|
|:------|:-----|:-------|:------|:------|
|Check the status of the SIM card in the device|x|x|x|x|
|Check the online status of the device as reported by the network|x|x|x|x|
|Change SIM card status, for example activate or deactivate it|x|x|x|x|
|Disconnect SIM card from current session|x| | | |
|Communicate with the device through text messages, for example, to set APN parameters|x| |x|x|
|View summary usage of data traffic, text messages and voice calls|x|x|x|x|
|View usage details of data traffic, text messages and voice calls| |x|x| |
|View the history of data sessions and any changes to the SIM card or traffic|&nbsp;| |x| |

As you can see, Jasper currently is the most feature-rich provider.

Each provider requires either ICCID or MSISDN to be set in the [c8y_Mobile](/reference/device-management-library/#connectivity) fragment of the managed object. This is used to properly map the managed object in {{< product-c8y-iot >}} to the associated SIM on the respective provider's platform.

|Requires|Comarch|Ericsson|Jasper|Kite|
|:------|:-----|:-------|:------|:------|
|ICCID|x| |x|x|
|MSISDN| |x| | |

The following description is primarily based on Jasper, but the same configuration and usage also applies to the other providers. If there are any differences, they will be stated explicitly.

<img src="/images/users-guide/connectivity/connectivity-jasperarchitecture.png" alt="Jasper architecture">

The following sections describe:

* How to [set up your Jasper Control Center account](#link-account) (examplarily)
* How to configure the [connectivity](#connectivity-configuration) to the SIM provider in your {{< product-c8y-iot >}} tenant
* How to [link SIMs](#link-sims) and mobile devices
* Which information is shown in the [Connectivity tab](#jasperinfo)
* How to [manage connectivity](#managing) from Device Management

<a name="link-account"></a>
### Setting up your Jasper Control Center account

The following steps describe how to create a dedicated user in the Jasper Control Center. This user is used for all access from {{< product-c8y-iot >}} to Jasper Control Center, so the permissions of the user have influence on functionalities available in {{< product-c8y-iot >}}.

{{< c8y-admon-info >}}
In a similar way, we recommend you to set up a dedicated user for Comarch, Ericsson or Kite to get the credentials required to connect to {{< product-c8y-iot >}}. Ask your administrator or our [product support](/welcome/contacting-support) for further information.
{{< /c8y-admon-info >}}

Besides the user, you also need a so-called API license key (only required for Jasper) and API server URL. To determine your API license key and API server URL, use a Control Center administrator user to log in to your Control Center account and click **API integration** on the Control Center home page.
Your API license key and the API server URL are displayed on the top left.

To create a user in Jasper Control Center perform the following steps:

1. As an admin user, navigate to **Admin** and **Users**.
1. Click **Create New**.
1. Enter the username and further details of the user.
1. If you want to be able to activate and deactivate SIM cards from {{< product-c8y-iot >}}, or to send SMS from {{< product-c8y-iot >}}, use the role ACCOUNTUSER. Otherwise, use the role ACCOUNTREADONLY.
1. Click **OK** to create the user, then enter your admin password and click **OK** again.

![Jasper user management](/images/users-guide/connectivity/connectivity-jasperadmin.png)

The user is now created but does not have a password yet. Follow the instructions emailed to you by Control Center to set a password.

<a name="connectivity-configuration"></a>
### Configuring the connectivity for the SIM provider

Process the following step to configure the connectivity in {{< product-c8y-iot >}}:

1. Use a {{< product-c8y-iot >}} administrator user to log into the {{< product-c8y-iot >}} platform.
1. Switch to the Administration application.
1. Click **Connectivity** in the **Settings** menu of the navigator. If the menu item is not displayed, make sure that your user has [READ and ADMIN permissions for Connectivity](/users-guide/administration#managing-permissions). If the menu item is still not available, please contact [product support](/welcome/contacting-support/) to make the Connectivity agent available in your tenant.
2. Switch to the **SIM provider settings** tab.
3. Select a provider from the drop-down list.
1. Enter the credentials (URL, key (in case of Jasper), username and password) for the respective SIM provider account. If you do not have any credentials, ask your administrator.
2. Click **Save** to save your settings.

The configuration of the Kite provider differs from other providers as it requires the upload of a valid certificate(trustStoreFileName),trustStorePassword, trustStoreType and kiteBaseUrl.

![Jasper settings](/images/users-guide/connectivity/connectivity-item.png)

The Connectivity agent is now set up.

<a name="link-sims"></a>
### Linking SIMs and mobile devices

Switch to the Device Management application and navigate to a device that is connected through a SIM card managed by the SIM provider of your choice. The device should have a **Connectivity** tab. If this tab is not shown,

* your user does not have permissions for Connectivity,
* the device is not linked to a SIM card,
* the device is linked to a SIM card, but the card is not managed by the respective SIM provider account.

To assign permissions, navigate to the Administration application and make sure that your user has a role assigned with READ or ADMIN permission for Connectivity.

<img src="/images/users-guide/connectivity/connectivity-permissions.png" alt="Connectivity permission settings"  style="max-width: 80%">

Jasper and Comarch identify SIM cards through their ICCID (Integrated Circuit Card Identifier). Ericsson is using MSISDN (Mobile Station International Subscriber Directory Number) instead. In most cases, devices will report the ICCID and MSISDN of their SIM card automatically to {{< product-c8y-iot >}}.

If the ICCID is not shown automatically check the following:

* Determine the ICCID of the SIM card. It is printed on the SIM card and is visible in Control Center.
* Enter the ICCID in the **Info** tab, then click **Save**.
* Click **Reload** in the top menu bar to make the **Connectivity** tab appear.

>**Info:** Note that it may take a few seconds until the tab appears for the first time on a device, as {{< product-c8y-iot >}} checks if the particular SIM card is managed by the SIM provider.

The Kite provider requires the following device configuration: ICCID (Integrated Circuit Card Identifier) and MSISDN (Mobile Station International Subscriber Directory Number).


<a name="jasperinfo"></a>
### Connectivity tab

In the **Connectivity** tab you will find the following sections:

* Status
* SMS
* Sessions
* Audit logs

![Connectivity tab](/images/users-guide/connectivity/connectivity-tab.png)

{{< c8y-admon-info >}}
Some sections may not appear or may be empty. For example, if there have been no SMS sent and you do not have permission to send SMS, you will not see the SMS section.
{{< /c8y-admon-info >}}

The **Status** section lists summary information for the SIM card.

![Status section](/images/users-guide/connectivity/connectivity-status.png)

The first row shows if the device is currently running a data session. If it is, the start of the session and the current WAN IP address of the device is displayed.

The second row shows further status information: The ICCID of the SIM card, the activation state of the SIM card and, if set, the fixed IP address assigned to the SIM card. Provided you have ADMIN permission for Connectivity, you can change the activation state by using the drop-down menu.

At the bottom you will find usage information for the current month, that is, from the first of the month till today. Hovering over the tooltip shows the covered time period, including the usage during the past month.

The **SMS** section shows the text messages sent to the device and received from the device, including information on

* when the message was sent or received
* where it was sent from and where it was sent to
* the delivery status of the message:
 * For messages to the device: "Pending", if it was not yet received by the device, or "Delivered", if it was received by the device.
 * For messages from the device: "Received", if it was received by the SIM provider, or "Cancelled", if it was not yet received by the SIM provider.
* What the direction of the message is: MT ("Mobile terminated"), if it went to the device, or MO ("Mobile originated") if it came from the device.

Provided you have ADMIN permission for Connectivity, you can also send text messages to the device by entering the text and clicking **Send SMS**.

![SMS section](/images/users-guide/connectivity/connectivity-jaspersms.png)

The **Sessions** section shows the log of data sessions carried out by the device. It lists when the session started, how long it took and how much data traffic was consumed.

![Sessions section](/images/users-guide/connectivity/connectivity-sessions.png)

The **Audit logs** section lists all changes to the SIM card and its tariff. It shows the type of change, old and new values when the change was carried out by whom, and if it was successful.

![Audit logs section](/images/users-guide/connectivity/connectivity-jasperaudits.png)

The **Connectivity** tab does not update in real-time. To show current data, click the **Reload** in the top menu bar.


<a name="managing"></a>
### Checking connectivity

If you suspect that a device is not correctly reporting to {{< product-c8y-iot >}}, or it is not receiving commands, you can verify the connectivity status of the device.

In the **Connectivity** tab, check if

* the SIM is activated. If the SIM card is not activated, you can activate it selecting "Activated" from the status drop-down menu. <br> ![Activate SIM card](/images/users-guide/connectivity/connectivity-status-activate.png) <br> It may take a while until the SIM card is activated in the network. There may be a reset of the device needed to make it dial up to the network again.
* The device is connected to the network. If the device is not connected to the network, this may have several reasons:

  * The device is in a location without mobile network coverage. If the device reports network quality parameters, you can navigate to the [**Measurements** tab](/users-guide/device-management#measurements) of the device and verify the last reported signal strength and error rate parameters.
  * There is a network or hardware problem (antenna, modem). For the Jasper Control Center, for example, click the cogwheel icon on the top right and select **SIM details**, then open the Jasper Control Center diagnostics tool. If the device is not attempting to connect to the network, it may be broken.
  * The device is in a data session. If the device is not in a data session, this may, again, have several reasons:
  * The APN settings are incorrectly configured in the device.
  * The SIM card is over traffic limit.
  * Data roaming is disabled on the device and the device is not in the SIM card's home network.
  * Data roaming for the particular network is not included in the SIM card's plan.
  * The SIM configuration was changed.

Data connectivity can be analyzed in various places:

* If the device reports its network configuration, navigate to the **Network** tab and verify, potentially edit, APN settings.
* If the device supports shell, navigate to the [**Shell** tab](/users-guide/device-management/#shell) and verify, potentially edit, APN settings and roaming configuration.
* Check the **Sessions** section on the **Connectivity** tab to see if the device has been communicating earlier and how much traffic it used.
* Check the **Audit logs** section on the **Connectivity** tab to see if there were any recent changes to the SIM card.
* Finally, click the cogwheel on the top right and select **SIM details** to navigate to the SIM configuration in Jasper Control Center.

>**Info:** The **SIM details** menu item requires you to have a login for Jasper Control Center. This login is independently provided by your administrator.

If the device is still not reporting to {{< product-c8y-iot >}}, there may be a configuration or software problem on the device.

* The device may have lost its credentials, for example, due to a factory reset or full loss of power. In this case, you can [re-register the device](/users-guide/device-management/#connecting-devices).
* There may be a configuration or software problem with the device, which must be analyzed in a device-specific way.
