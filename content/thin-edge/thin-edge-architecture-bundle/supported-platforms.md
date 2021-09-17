---
weight: 20
title: Supported platforms
layout: redirect
---

### General

Common requirements for all systems are:
* minimum 16MB of RAM
* systemd (for production systems)
* mosquitto minimum version 1.6 (for security reasons we recommend the latest 1.x version)
* dpkg (if you want to use our prebuilt .deb packages)

### Level 1

Level 1 supported platforms are officially supported and are actively tested in the CI/CD.

* ARMv7 Raspberry Pi OS 10
* ARMv8 Raspberry Pi OS 10
* AMD64 Ubuntu 20.04

### Level 2

Level 2 platforms are not officially supported and tested yet, but the following systems have been used by some of our users.

If your OS is not listed here, this does not mean it is not working. We recommend trying your OS with our level 2 platforms.   

* Ubuntu 20.04 in WSL: only for development, not for running thin-edge.io due to missing `systemd`.
* AMD64 Debian 10
* ARMv6 Raspberry Pi OS 10 (needs to be built for this specific target, refer to Issue-161 at [https://github.com/thin-edge/thin-edge.io/issues/161](https://github.com/thin-edge/thin-edge.io/issues/161)
