---
title: Setup
layout: redirect
weight: 20
---

* Insert the SIM card into the SIM slot on the backside of the u-blox C027.
* Attach the cellular antenna to the board.
* For GPS/GNSS capabilities, attach the GPS antenna to the board.
* Attach the mbed application shield to the C027.
* Connect a USB cable to the C027 and to your computer. The C027 will appear as "MBED" drive on your computer.
* Plug in the power supply and connect it to the application board.

> Note that the device cannot be flashed without the power supply connected.

> Further information is available on http://mbed.org/users/ublox/notebook/u-blox-C027-Getting-Started/ and http://mbed.org/users/ublox/notebook/u-blox-C027-Downloading/.

### Install the Agent

* Download the firmware to your computer, see table below.
* Copy the downloaded file to the "MBED" drive.
* Press the reset button on the C027 to start the agent.

|Version|Release Date|Download|
|---|:-:|:-:|
|1.9      | 18.Feb 2015 | [download](/guides/images/devices/mbed/firmware-1.9.bin)     |
|2.0      | 6.Mar 2015  | [download](/guides/images/devices/mbed/firmware-2.0c8y.bin)  |
|2.2      | 10.Aug 2015 | [download](/guides/images/devices/mbed/firmware-2.2c8y.bin)  |

### Connect the C027

* The C027 will now dial up to the Internet. You will see status updated in the LCD display. If the device cannot connect to the Internet, it will display an error message. In case of an error message "Wrong APN setting" or "Unknown APN setting, follow the instructions below in Section "Troubleshooting".
* On a successful connection for the first time, the device should print "Bootstrapping" and below the IMEI of the cellular modem on the LCD display.
  _Note_: The IMEI can also be found on the white sticker on modem chip of the C027.
* Log on to the Cumulocity web interface, select "Registration" in the Device Management application. Enter the IMEI and press "Register Device".
* The device appears as *CONNECTED*. Click the "Accept" button.
* The device is now registered with Cumulocity and shows up under "All Devices" with the name "Mbed Test Device".
* After the device is successful connected to the Cumulocity platform, it will update the LCD display regarding its current status. The first line always displays the tenant name (until there is a message received from the platform, see Section "Interacting with the Control Operations"). The second line shows the signal quality in units of dBm. The third line displays information about which sensor data the u-blox is sending and their corresponding values. In case similar sensory values are read comparing with the last sending, the third line is empty implying a skip of sending.
