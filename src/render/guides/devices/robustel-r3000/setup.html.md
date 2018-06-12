---
title: Setup
layout: redirect
order: 20
---

### Preparation

-	Insert the SIM card into the SIM slot.
-	Assembled wireless cellular antenna.
-	Connect an Ethernet cable to the R3000 Lite and to your computer.
-	Plug in the power supply and connect it to the application board.

Note that the device cannot be flashed without the power supply connected.

Further information is available on: [http://www.robustel.com](http://www.robustel.com/uploadfile/2015/1028/RT_QG_R3000_Lite.pdf)

### Install the agent

-	Login to http://192.168.0.1/index.asp and login. 
-	Click Link-management →Portal→enable Portal.
-	Select the ‘Cumulocity’ in the ‘Server Type’. 
-	Enter your Cumulocity platform account and password.
-	Enter the http://{tenant}.cumulocity.com, which {tenant} is your tenant name, in the ‘URL’.
-	Enter the device name. 
-	But one device name corresponding to an ID.
-	Click  ‘apply’ → ‘save’ → ‘reboot’.

Note: 
- The default configuration router address is [http://192.168.0.1/index.asp](http://192.168.0.1/index.asp) . Please refer to your R3000_lite configuration router page
- You can customize the device name and ID.
- The Cumulocity platform will be automatically assigned device ID.

### Connect to R3000 Lite

- You will see LED indicators of “RUN” blinking. 
- The R3000 Lite will now dial up to the Internet. You will see the R3000_lite the ‘RSSI’ LED indicators turn on. If the device cannot connect to the Internet, the LED indicators will turn off.
- Log on to the Cumulocity web interface
http://{tenant}.cumulocity.com/apps/devicemanagement/index.html, which {tenant} is your tenant name.
The device now registers with Cumulocity and shows up under "All Devices" with the name”R3000 Lite”.
- You could search "R3000_Lite" in the search bar directly; it will show you about the R3000_Lite.
