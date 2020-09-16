---
title: "Configuring the agent"
layout: redirect
weight: 50
---

The Linux Agent repository includes the _cumulocity-agent.conf_ file. When you install the agent, the configuration file is deployed to _/usr/share/cumulocity-agent/cumulocity-agent.conf_ by default. The agent reads this configuration file at the startup. You can manually edit this file to adjust different parameters to suit your needs.  

### Server URL

The agent by default connects to the cumulocity.com instance. In case you’re using a different instance, you can change the server URL.
The URL supports two protocol schemas. To use the HTTP version, set the URL to format `https://example.com`. To use the MQTT version, set the URL to format `mqtts://example.com`.

|Parameters|Example values|
|---|---|
|server|`server=https://mqtt.cumulocity.com`<br>or<br>`server=mqtts://mqtt.cumulocity.com`|

### Log settings

<table>
<colgroup>
<col style="width: 25%;">
<col style="width: 75%;">
</colgroup>
<thead>
<tr>
<th>Parameters</th>
<th>Explanations</th>
</tr>
</thead>
<tbody>
<tr>
<td>log.path</td>
<td>The file location for storing the agent’s logs</td>
</tr>
<tr>
<td>log.level</td>
<td>Filter for lowest severity level to be enabled for logging. Available log severities are <code>debug</code>, <code>info</code>, <code>notice</code>, <code>warning</code>, <code>error</code>, and <code>critical</code></td>
</tr>
<tr>
<td>log.quota</td>
<td>The maximum log file size before the log rotates, in KB</td>
</tr>
</tbody>
</table>



|Parameters|Example values|  
|---|---|
|log.path|`log.path=/var/log/cumulocity-agent.log`|
|log.level|`log.level=debug`|  
|log.quota|`log.quota=8192`|

### Plugins

Each feature is implemented as a Lua plugin. You can enable it by appending it to the `lua.plugins` parameter.

- **system**
The system plugin enables the agent to periodically report CPU and memory usage
- **logview**
The logview plugin allows you to remotely view the device and agent logs from Cumulocity IoT
- **shell**
The shell plugin allows you to change all these parameters in the configuration file remotely from the device shell functionality from Cumulocity IoT
- **version**
The version plugin reports the agent version to Cumulocity IoT
- **modbus**
The Modbus plugin implements the Cloud Fieldbus Modbus protocol
- **canopen**
The CANopen plugin implements the Cloud Fieldbus CANopen protocol</td>

|Parameters|Example values|
|---|---|
|lua.plugins|`lua.plugins=system,logview,shell,canopen`|

### Agent measurements

It defines the interval for sending memory and CPU usage measurements, in seconds. The **system** plugin is required to activate the system configuration

|Parameters|Example values|
|---|---|
|system.mem.interval|`system.mem.interval=300`|
|system.cpu.interval|`system.cpu.interval=300`|

### Modbus configuration

There are several Modbus parameters you can change via the configuration file. The **modbus** plugin is required to activate the Modbus configuration
- **modbus.transmitrate**
The transmit rate for reporting measurements to Cumulocity IoT [in seconds]
- **modbus.pollingrate**
The polling rate for querying Modbus slave for data [in seconds]
- **modbus.readonly**
It controls the ability to write data to slaves. `1` is read-only, `0` is writable.

|Parameters|Example values|  
|---|---|
|modbus.pollingrate|`modbus.pollingrate=30`|
|modbus.readonly|`modbus.readonly=0`|  

> **Info:** We recommend you to change the Modbus parameters via the Modbus Cloud Fieldbus UI.


#### Modbus-TCP configuration

- **modbus.tcp.port**
  The TCP port is used for Modbus-TCP. The default setting is 502.

|Parameters|Example values|
|---|---|
|modbus.tcp.port|`modbus.tcp.port=502`|

#### Modbus-RTU configuration

<table>
<colgroup>
<col style="width: 40%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th>Parameters</th>
<th>Explanations</th>
</tr>
</thead>
<tbody>
<tr>
<td>modbus.serial.port</td>
<td>This is the type when your Modbus device is recognized as a serial interface by the Linux kernel, for example, <code>/dev/ttyACM0</code>. In this case, you also need to inform the agent the serial port your device is mounted as <code>modbus.serial.port=/dev/ttyACM0</code> or <code>modbus.serial.port=/dev/ttyUSB0</code></td>
</tr>
<tr>
<td>modbus.serial.baud</td>
<td>The baud rate of the Modbus line, in kbit/s</td>
</tr>
<tr>
<td>modbus.serial.databits</td>
<td>The data bits for Modbus-RTU</td>
</tr>
<tr>
<td>modbus.serial.parity</td>
<td>The parity. <code>N</code>, <code>E</code> or <code>O</code></td>
</tr>
<tr>
<td>modbus.serial.stopbits</td>
<td>The stopbits. <code>1</code> or <code>2</code></td>
</tr>
</tbody>
</table>


|Parameters|Example values|  
|---|---|
|modbus.serial.port|`modbus.serial.port=/dev/ttyACM0`|
|modbus.serial.baud|`modbus.serial.baud=19200`|
|modbus.serial.databits|`modbus.serial.databits=8`|  
|modbus.serial.parity|`modbus.serial.parity=E`|
|modbus.serial.stopbits|`modbus.serial.stopbits=1`|

### CANopen configuration

There are several CANopen parameters you can change via the configuration file.
- **canopen.transmitRate**
The transmit Rate for measurement reporting [in seconds]
- **canopen.pollingRate**
The polling Rate for querying CANopen node for data [in seconds]
- **canopen.baud**
The baud rate of the CAN line [in kbit/s]

|Parameters|Example values|  
|---|---|
|canopen.transmitRate|`canopen.transmitRate=5`|
|canopen.pollingRate|`canopen.pollingRate=5`|
|canopen.baud|`canopen.baud=125`|

>**Info:** We recommend that you change these CANopen parameters via the CANopen Cloud Fieldbus UI.

#### CANopen port

The default settings are to use `can0` interface, in case you need to configure a different CAN interface, for example, `can1`, edit this parameter.

|Parameters|Example values|
|---|---|
|canopen.port|`canopen.port=can1`|

#### CANopen interface type

The agent supports three different CAN interface types:
- **canopen.type=vcan**
This is the default type. This type uses the virtual CAN interface from the Linux kernel, which is mostly for testing and demo purposes.
- **canopen.type=can**
This is the type when your CAN device is supported by the socketCAN driver and automatically appears as a network CAN interface.
- **canopen.type=slcan**
This is the type when your CAN device is recognized as a serial interface by the Linux kernel, for example, `/dev/ttyACM0`. In this case, you also need to inform the agent the serial port your device is mounted as `canopen.serial=/dev/ttyACM0` or `canopen.serial=/dev/ttyUSB0`

|Parameters|Example values|
|---|---|
|canopen.type|`canopen.type=can`|
|canopen.serial|`canopen.serial=/dev/ttyUSB0`|
