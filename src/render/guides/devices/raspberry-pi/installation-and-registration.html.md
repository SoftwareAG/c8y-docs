---
title: Installation and registration
layout: redirect
order: 20
---
Log in to the Raspberry Pi and install the agent.

	$ wget http://resources.cumulocity.com/examples/cumulocity-rpi-agent-latest.deb
	$ sudo dpkg -i cumulocity-rpi-agent-latest.deb

Open Cumulocity in a web browser and go to the "Registration" page. Enter the serial number that you wrote down in the previous step and click "Register Device".

![Register device](/guides/images/devices/deviceregistration.png)

> Note: If you are running a dedicated edition of the Cumulocity platform you will need to configure the host in /usr/share/cumulocity-rpi-agent/cfg/cumulocity.properties and restart the agent using: 
>
>	$ sudo service cumulocity-agent restart

After that accept the registration.

![Accept device](/guides/images/devices/deviceacceptance.png)

Click on "All devices" to manage the Raspberry Pi. It is by default visible as "RaspPi <<hardware model>> <<serial number>>". You can edit the name in the "Info" tab.