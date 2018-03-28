---
title: Troubleshooting
layout: redirect
order: 70
---
The agent writes debug information to the Pi's syslog. To troubleshoot, for example, connectivity problems, use:

	$ tail -f /var/log/syslog

## Developing the agent

If you would like to connect other devices to the Raspberry Pi and manage these from Cumulocity, check the [Java agent documentation](/guides/java/agents).
