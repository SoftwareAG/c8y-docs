---
title: Overview
layout: redirect
weight: 10
---
The Cumulocity IoT Linux agent is a generic device agent for connecting Linux-powered devices to Cumulocity IoT. It runs on all major Linux distributions like Ubuntu, Debian, Raspbian, and CentOS.

### Supported functionality

#### Remote monitoring and control of industrial assets

- Modbus-TCP and Modbus-RTU
- CANopen (using a SocketCAN interface; requiring commercial library)
- [Cloud Remote Access](/cloud-remote-access/cra-general-aspects) for remotely accessing assets via VNC, Telnet, or SSH protocols

#### Managing devices

- Periodically reporting memory usage and system load to Cumulocity IoT
- Sending log files (dmesg, syslog, journald, agent log) to Cumulocity IoT on demand
- Remotely executing commands via the device shell interface

By customizing Lua plugins scripts, the agent can support more features, such as configuration management and network parameters management.
