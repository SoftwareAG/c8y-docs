---
title: Troubleshooting
layout: redirect
order: 40
---


* **I can not log-in to the platform** (applies to Deutsche Telekom Industrie 4.0 kit only): Upper case 'i' and lower case 'l' are hard to distinguish. You may need to try different combinations to make sure the password you entered is the right one.

* **The device freezes or resets when booting up**: This is commonly an issue originated from a bad power connection. Unplug and plug in your power connector again and make sure the connection is firm and stable. This will normally resolve the issue.

* **"Modem Init Failure", "No SIM card found", or "SIM has PIN code"**: Make sure you inserted the SIM card in the right direction and side. Verify that the SIM card holder is locked so that the SIM card has good contact to the device. If the SIM card has a PIN code, please remove the PIN code (for example, using a mobile phone).

* **GPS Init Failure**: Sometimes the agent is unable to initialize the GPS unit. Simply restart the device to resolve the issue. Note that the GPS initialization process works without an actual GPS receiver. It is therefore usually not necessary to actually attach the GPS receiver to resolve this problem.

* **My GPS does not work**: This problem originates from a different data format returned by a new GPS model. Support for this new data format has been added in version 2.2. If your GPS function do not work, please download firmware version 2.2 from the link above and follow the instructions to flash the firmware.

* **No Network Coverage**: Make sure you have the modem antenna correctly mounted to the "WL_INT" connector, otherwise the device will not be able to connect to a network.

* **Agent Init Failure**: To troubleshoot this issue,we recommend to connect the device to your computer and enable debug mode to collect more information via a serial port. See "Enable Debug Mode" on this page for further details.

* **Integration/Config Failure**: This error occurs when you are connecting to a wrong server (probably flashed the wrong firmware). Try performing a _factory reset_ and register the device again. If this doesn't solve the problem, most likely it's a server side issue. Try contacting your network administrator if you are connecting to your own Cloud instance or contact [support](https://support.cumulocity.com) if you are connecting directly to Cumulocity.

* **Integrate Failure**: Same as the above error message.

* **The device failed to join a network and displays "Wrong APN setting" or "Unknown APN setting"**: Review the source code file `C027_Support/MDMAPN.h` and add an entry with the Mobile Country Code (MCC), Mobile Network Code (MNC) and your APN setting. Your MMC and MNC code should be shown on the LCD display below the error message "Wrong APN setting" or "Unknown APN setting".

* **The device does not appear as *Connected* in the device registration process**: Review application output using a serial console. See http://mbed.org/handbook/SerialPC for details. Also make sure you flashed the device with correct firmware version, i.e. the one that performs the bootstrap against the right server.

* **The device does not appear in the devices section on the web interface**: Review application output using a serial console. See http://mbed.org/handbook/SerialPC for details.

* **Upon boot-up, the device displays "Connect to Cloud" right after "Agent Run", instead of showing "Bootstrapping" and IMEI**: The device is already registered with Cumulocity under another user account, a _factory reset_ has to be performed to unregister the device.

* **The device does not send GPS data**: The GPS receiver needs to have direct sight to the sky to receive satellite signals. Bad weather can also influence GPS reception.

* **I have accidentally deleted my device in device management**: Restart your device and wait a while. Your device will automatically re-register with Cumulocity and appear again.