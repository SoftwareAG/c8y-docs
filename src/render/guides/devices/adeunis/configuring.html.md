---
order: 20
title: Configuring for Cumulocity
layout: redirect
---
Currently Cumulocity only supports connecting Adeunis LoRa Demonstrator devices via Actility AS. After connecting and adding your device in your Actility AS instance (https://partners.thingpark.com/) you have to create a new "AS Routing Profile" for Cumulocity using destination http://actility-server.cumulocity.com as a "Third Party AS (HTTP)" and assign it to your devices.

### Device registration

When your device is configured correctly in Actility AS, you can register the device with Cumulocity via the normal [device registration](/guides/users-guide/device-management/#device-registration) process using the serial number.
