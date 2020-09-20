---
weight: 50
title: Connectivity tab
layout: redirect
---


In the **Connectivity** tab you will find the following sections:

* Status
* SMS
* Sessions
* Audit logs

![Connectivity tab](/images/device-protocols-guide/SIM-connectivity/SIM-connectivity-tab.png)

>**Info:** Some sections may not appear or may be empty. For example, if there have been no SMS sent and you do not have permission to send SMS, you will not see the SMS section.

The **Status** section lists summary information for the SIM card.

![Status section](/images/device-protocols-guide/SIM-connectivity/SIM-connectivity-status.png)

The first row shows if the device is currently running a data session. If it is, the start of the session and the current WAN IP address of the device is displayed.

The second row shows further status information: The ICCID of the SIM card, the activation state of the SIM card and, if set, the fixed IP address assigned to the SIM card. Provided you have ADMIN permission for Connectivity, you can change the activation state by using the drop-down menu.

At the bottom you will find usage information for the current month, i.e. from the first of the month till today. Hovering over the tooltip shows the covered time period, including the usage during the past month.

The **SMS** section shows the text messages sent to the device and received from the device, including information on

* When the message was sent or received.
* The delivery status of the message:
  * For messages to the device: "Pending", if it was not yet received by the device, or "Delivered", if it was received by the device.
  * For messages from the device: "Received", if it was received by the SIM provider, or "Cancelled", if it was not yet received by the SIM provider.
* What the direction of the message is: MT ("Mobile terminated"), if it went to the device, or MO ("Mobile originated") if it came from the device.

Provided you have ADMIN permission for Connectivity, you can also send text messages to the device by entering the text and clicking **Send SMS**.

![SMS section](/images/device-protocols-guide/SIM-connectivity/SIM-connectivity-jaspersms.png)

The **Sessions** section shows the log of data sessions carried out by the device. It lists when the session started, how long it took and how much data traffic was consumed.

![Sessions section](/images/device-protocols-guide/SIM-connectivity/SIM-connectivity-sessions.png)

The **Audit logs** section lists all changes to the SIM card and its tariff. It shows the type of change, old and new values when the change was carried out by whom, and if it was successful.

![Audit logs section](/images/device-protocols-guide/SIM-connectivity/SIM-connectivity-jasperaudits.png)

The **Connectivity** tab does not update in real-time. To show current data, click the **Reload** in the top menu bar.
