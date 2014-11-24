---
layout: devices
title: "CloudGate"
---

![CloudGate](/guides/devices/cloudgate/cloudgate-logo.png)

## Overview

[CloudGate](http://www.option.com/product/cloudgate/) is [Option](http://www.option.com/)’s M2M Gateway. It provides competitively priced LAN to WWAN routing and GPS functionality in a single basic unit certified by all major US cellular operators (CDMA/EvDO and WCDMA/HSPA+). CloudGate is simple to configure locally or remotely from your PC, tablet or smartphone.

![CloudGate](/guides/devices/cloudgate/cloudgate-front.jpg)

## Installation

- Get the plugin zip archive from [Option](http://www.option.com/).
- Login to the CloudGate web interface. The default username and password are both admin.

![CloudGate](/guides/devices/cloudgate/installation.jpg)

- Go to the "Provisioning" tab and in the left menu choose "Upload Option provisioning file".
- Click on the "Choose File" button and navigate to the zip archive provided by option.
- Click upload and wait for the file to be sent.
- After the device reboots you should be able to see the "Cumulocity Modbus Demo" plugin in the "Plugins" tab.

## Configuration 

To configure the plugin login to the CloudGate web interface. And find the plugin configuration page in the "Plugins" tab.  

![CloudGate](/guides/devices/cloudgate/configuration.png)

- URL: Your tenant's URL.
- Tenant: Your tenant's name.
- Username: The username used by the device to connect to your tenant.
- Password: The respective password.
- Serial: The serial number of your CloudGate device
- Measurement interval: The interval in seconds between measurements.
- Operation polling time: The interval in seconds between operation polling.
