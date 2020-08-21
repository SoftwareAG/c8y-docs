---
title: Overview
layout: redirect
weight: 10
---
Cumulocity Linux agent is a generic device agent for connecting Linux-powered devices to Cumulocity IoT. It runs on all major Linux distributions (Ubuntu, Debian, Raspbian, CentOS, etc.).

### Contents
SECTION  | CONTENT
--|--
[Overview](#overview)  | Overview  |  
[Prerequisites](#prerequisites)  | Prerequisites
[Building and installing the agent](#building-installing-agent)  |  How to build and how to install the agent (incl. Modbus, CANopen)
[Starting the agent](#starting-agent)  | How to start the agent process
[Configuring the agent](#configuring-agent)  | How to configure the agent parameters
[Building packages](#packages)  | How to build the agent packages in RPM, Debian, and Snappy format |  

### Supported functionality
#### Remote monitoring and control of industrial assets
- Modbus-TCP and Modbus-RTU.
- CANopen (using SocketCAN interface / requiring commercial library).
- Cloud Remote Access for remotely accessing assets via VNC/Telnet/SSH protocols.

#### Managing devices
- Periodically reporting memory usage and system load to Cumulocity IoT.
- Sending log files (dmesg, syslog, journald, agent log) to Cumulocity IoT on demand.
- Remotely executing commands via the device shell interface.

By customizing Lua plugins scripts, the agent can support more features, such as configuration management, network parameters management.
