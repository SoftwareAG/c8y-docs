---
title: Configuring Telic devices for Cumulocity
layout: redirect
order: 20
---
To connect a Telic device to Cumulocity, you need to

* configure it to send data to the Cumulocity servers,
* disable its "Acknowledge" setting.

To make the tracker send data to Cumulocity, perform the following steps in the Telic Configuration Tool.

1. Open the **Communication configuration** tab.

2. In the **Server** section, click **New**.

3. Specify a **Profile name** (for example, "Cumulocity").

4. Set the **IP address** to "tracker.cumulocity.com".

5. Set the **Port** to "9090".

6. Verify that **IP Mode** is set to "TCP".

7. Verify that the settings in the **Network** section (APN, user, password) are applicable to the SIM card that you inserted into the device.

8. The **Control Center** field specifies the number to which SMS messages from the tracker are sent.

9. Click **Save** to save your settings.

![Telic Communication Configuration](/guides/images/devices/telic/telic-communication-configuration.png)


To disable "Acknowledge", follow these steps:

1. Open the **Device configuration** tab.

2. If you have not yet created an own device configuration profile, click **New**.

3. Make sure that the checkbox **Enable Acknowledge** on the top right is clear.

4. Click **Save** to save your settings.

![Telic Device Configuration](/guides/images/devices/telic/telicdevconf.png)

GPS accuracy reporting is not available on all Telic devices. To enable accuracy reporting, follow these steps:

1. On the **Device configuration** tab, select the checkbox **Use extended config** and click  **Setup extended config**.

3. Open the **Logging Type** tab.

4. Select the checkbox **Extended Data (incl. DOPs and Accuracy)**.

![Telic Device Configuration](/guides/images/devices/telic/telicdevlogtype.png)


Finally, perform the following steps to send the data to the device.

1. Open the **General** tab.

2. Verify that the device profile and the server profile that you edited previously are selected on the top left.

3. Click **Send**.

Once you have set up the profiles, you can send the profiles to other trackers as well. You just have to repeat the "Send" steps.
