---
title: Setting up and registering the device
weight: 30
---


### <a name="install-agent"> To install the agent

1. Download the agent software, including the CA root certificate, Cloud Remote Access software, and our package public key: http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.0_arm-signed.ipk.
2. Log in to the web user interface of the NTC-200 series.
3. Navigate to the **System** menu. Click **System configuration** > **Firmware signature**
4. Turn **Enable firmware signature check** to OFF.

    > **Info:** If you forget this step, no software can be installed later. After installing the agent package, this function will be enabled again automatically.
  Firmware version 2.0.84.0 does not support the firmware signature. You can ignore this step.

5. Navigate to the **System** menu. Click **System configuration** > **Choose a file** and select the downloaded software. Click **Upload** to upload the software to the router.
6. Click the **Install** button for the uploaded software which you want to install.
7. Reboot the NetComm router. If you install via Netcomm UI, the device will reboot automatically after the installation.

The agent will automatically start after installation and the router can then be [registered with Cumulocity IoT](#connect). Subsequent upgrades or downgrades can be performed remotely via the agent’s software management feature, or locally via the router’s web portal.

|Version|Router series|Download|
|:---|:---|:---|
|1.0.0|NTC-200|[Download]([http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.0_arm-signed.ipk)|
|2.1.4|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_2.1.4_arm.ipk)|
|2.1.6|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_2.1.6_arm.ipk)|
|2.1.8|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_2.1.8_arm.ipk)|
|2.1.10|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_2.1.10_arm.ipk)|
|2.2.6|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_2.2.6_arm.ipk)|
|2.3.5|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_2.3.5_arm.ipk)|
|2.3.6|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_2.3.6_arm.ipk)|
|3.0.0|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_3.0.0_arm.ipk)|
|3.1.2|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_3.1.2_arm.ipk)|
|3.1.6|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_3.1.6_arm.ipk)|
|3.2.0|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_3.2.0_arm.ipk)|
|3.2.2|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_3.2.2_arm.ipk)|
|4.0.0|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_4.0.0_arm.ipk)|
|4.0.1|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_4.0.1_arm.ipk)|
|4.0.2|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_4.0.2_arm.ipk)|
|4.2.3|NTC-6200, NTC-140W|[Download]([http://resources.cumulocity.com/ntc/smartrest-agent_4.2.3_arm.ipk)|


### <a name="register-device"> To register the device to Cumuloctiy IoT

#### <a name="configure"></a> Configuring the router

The support for Cumulocity IoT can be configured through the router’s web user interface. To do so, log in to the user interface as described in the router’s manual. Navigate to the **System** tab and click on the **Internet of Things** menu item.

![Web Interface](/images/device-demos/casa-system-router/router-web-interface.png)

Verify that the **Agent** toggle is set to **ON** and the URL in the **Server** field points to the Cumulocity IoT instance that you want to connect. For example, use `https://mqtt.cumulocity.com/` for connecting to the Cumulocity IoT platform.

Optionally, you can activate data collecting for the following functionalities:

* GPIO analog measurements: Send the voltages of the analog inputs [seconds].
* GPS position interval: Update the current GPS position [seconds].
* GPS position event: Send a location trace of the GPS position [seconds].
* System resources measurements: Get information about CPU usage, memory usage and network traffic [seconds].
* Connection signal measurements: Get information about cellular signal strength [seconds].

All these options are disabled by default (the interval is set to 0).

The web interface also shows the status of the connection to Cumulocity IoT:

* Checking network connection: Waiting for mobile network connection at boot.
* Bootstrapping: Load credentials or request credentials from Cumulocity IoT.
* Integrating: Connecting to Cumulocity IoT.
* Loading plugins: Loading Lua plugins.
* Connected: The agent is successfully connected to Cumulocity IoT.
* No server URL: No or invalid server URL.
* Bootstrap failed: Cannot get credentials from Cumulocity IoT.
* Integration failed: Cannot connect to Cumulocity IoT.
* Create threads failed: Not able to start reporter or device push.

#### <a name="connect"></a> Connecting the router

To register your NetComm router to Cumulocity IoT, you need the router’s serial number as device ID. For more information on the registration process, see [Device management > Connecting devices](/users-guide/device-management/#connecting-devices) in the User guide. The serial number is printed on the back side of the router as shown below. Alternatively, it is also available in the router’s web user interface. Navigate to **System** > **Internet of Things** and view the **Device ID** field.

![Serial Number](/images/device-demos/casa-system-router/router-serial-number.png)

After clicking the **Accept** button on the Cumulocity IoT platform, navigate to **All devices**. The router should appear here after registration. The default name of a router is "&#60;model&#62; (S/N &#60;serial number&#62;)", where &#60;model&#62; is the device model name. For example, the above router would appear as “NTC-221 (S/N 191611192800580)”.

Click on the router to view the detailed information and to access the functionality described in the remaining sections of this document. In order to distinguish a registered router from other devices in the listing, you can change the router’s name on the **Info** tab, which also displays basic information such as serial number of the router and SIM card data on the "Device data" widget. After clicking the edit icon at the bottom of the widget and changing the name, remember to click the **Save** button at the bottom of the "Device data" widget on the **Info** page.

![Device Info](/images/device-demos/casa-system-router/router-device-info.png)
