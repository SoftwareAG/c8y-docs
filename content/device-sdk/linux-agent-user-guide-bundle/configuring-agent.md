---
title: "Configuring the agent"
layout: redirect
weight: 40
---

The {{< product-c8y-iot >}} Linux agent repository includes the _cumulocity-agent.conf_ file. When you install the agent, the configuration file is deployed to _/usr/share/cumulocity-agent/cumulocity-agent.conf_ by default. The agent reads this configuration file at startup. You can manually edit this file to adjust different parameters to suit your needs.  

### Device ID

A unique device ID is required to register your device. You can specify it using an "id" key. If not specified, the agent will use the device's serial number recorded in the following paths to determine the device ID.

- /sys/devices/virtual/dmi/id/product_serial
- /proc/cpuinfo
- /sys/devices/virtual/dmi/id/product_uuid
- /sys/hypervisor/uuid
- /var/lib/dbus/machine-id
- /etc/machine-id

|Parameter|Example value|
|---|---|
|id|id=myagent|

### Server URL

The agent by default connects to the {{< domain-c8y >}} instance. In case you're using a different instance, you can change the server URL.
The URL supports two protocol schemas. To use the HTTP version, set the URL to the format *https&#58;//example.com*. To use the MQTT version, set the URL to the format *mqtts://example.com*.

|Parameter|Example value|
|---|---|
|server|server=https://mqtt.{{< domain-c8y >}}<br>or<br>server=mqtts://mqtt.{{< domain-c8y >}}|

### Log settings

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 40%;">
<col style="width: 40%;">
</colgroup>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Example value</th>
</tr>
</thead>
<tbody>
<tr>
<td>log.path</td>
<td>The file location for storing the agent's logs</td>
<td>log.path=/var/log/cumulocity-agent.log</td>
</tr>
<tr>
<td>log.level</td>
<td>Filter for lowest severity level to be enabled for logging. Available log severities are debug, info, notice, warning, error, and critical</td>
<td>log.level=debug</td>
</tr>
<tr>
<td>log.quota</td>
<td>The maximum log file size before the log rotates, in KB</td>
<td>log.quota=8192</td>
</tr>
</tbody>
</table>

### Plugins

Each feature is implemented as a Lua plugin.

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 80%;">
</colgroup>
<thead>
<tr>
<th>Plugin</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>system</td>
<td>Enables the agent to periodically report CPU and memory usage</td>
</tr>
<tr>
<td>logview</td>
<td>Allows you to remotely view the device and the agent logs from {{< product-c8y-iot >}}</td>
</tr>
<tr>
<td>shell</td>
<td>Allows you to change all these parameters in the configuration file remotely from the device shell functionality from {{< product-c8y-iot >}}</td>
</tr>
<tr>
<td>version</td>
<td>Reports the agent version to {{< product-c8y-iot >}}</td>
</tr>
<tr>
<td>modbus</td>
<td>Implements the Cloud Fieldbus Modbus protocol</td>
</tr>
<tr>
<td>canopen</td>
<td>Implements the Cloud Fieldbus CANopen protocol</td>
</tr>
</tbody>
</table>

You can enable it by appending it to the *lua.plugins* parameter.

|Parameter|Example value|
|---|---|
|lua.plugins|lua.plugins=system,logview,shell,canopen|


### Agent measurements

These parameters define the interval for sending memory and CPU usage measurements, in seconds. The system plugin is required to activate the system configuration.

|Parameter|Example value|
|---|---|
|system.mem.interval|system.mem.interval=300|
|system.cpu.interval|system.cpu.interval=300|

### Modbus configuration

You can change various Modbus parameters in the configuration file. The **modbus** plugin is required to activate the Modbus configuration.

|Parameter|Description|Example value|  
|---|---|---|
|modbus.transmitrate|The transmit rate for reporting measurements to {{< product-c8y-iot >}} [in seconds]||
|modbus.pollingrate|The polling rate for querying the Modbus client for data [in seconds]|modbus.pollingrate=30|
|modbus.readonly|Controls the ability to write data to clients. 1 is read-only, 0 is writable|modbus.readonly=0|
|modbus.timeout.usec|The timeout interval used to wait for a response from a Modbus client [in microseconds](from version 4.2.9 and onwards)|modbus.timeout.usec=5000000|

{{< c8y-admon-info >}}
We recommend you to change the Modbus parameters via the Modbus Cloud Fieldbus UI.
{{< /c8y-admon-info >}}

#### Modbus-TCP configuration

|Parameter|Description|Example value|
|---|---|---|
|modbus.tcp.port|The TCP port is used for Modbus-TCP. The default setting is 502|modbus.tcp.port=502|

#### Modbus-RTU configuration

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 50%;">
<col style="width: 30%;">
</colgroup>
<thead>
<tr>
<th>Parameters</th>
<th>Description</th>
<th>Example values</th>
</tr>
</thead>
<tbody>
<tr>
<td>modbus.serial.port</td>
<td>This is the type when your Modbus device is recognized as a serial interface by the Linux kernel, for example, /dev/ttyACM0. In this case, you must also inform the agent about the serial port your device is mounted as: modbus.serial.port=/dev/ttyACM0 or modbus.serial.port=/dev/ttyUSB0</td>
<td>modbus.serial.port=/dev/ttyACM0</td>
</tr>
<tr>
<td>modbus.serial.baud</td>
<td>The baud rate of the Modbus line, in kbit/s</td>
<td>modbus.serial.baud=19200</td>
</tr>
<tr>
<td>modbus.serial.databits</td>
<td>The data bits for Modbus-RTU</td>
<td>modbus.serial.databits=8</td>
</tr>
<tr>
<td>modbus.serial.parity</td>
<td>The parity. N, E or O</td>
<td>modbus.serial.parity=E</td>
</tr>
<tr>
<td>modbus.serial.stopbits</td>
<td>The stopbits. 1 or 2</td>
<td>modbus.serial.stopbits=1</td>
</tr>
</tbody>
</table>


### CANopen configuration

You can change various CANopen parameters in the configuration file.

|Parameters|Description|Example values|  
|---|---|---|
|canopen.transmitRate|The transmit rate for measurement reporting [in seconds]|canopen.transmitRate=5|
|canopen.pollingRate|The polling rate for querying CANopen node for data [in seconds]|canopen.pollingRate=5|
|canopen.baud|The baud rate of the CAN line [in kbit/s]|canopen.baud=125|

{{< c8y-admon-info >}}
We recommend you to change these CANopen parameters via the CANopen Cloud Fieldbus UI.
{{< /c8y-admon-info >}}

#### CANopen port

The default setting is the can0 interface. If you need to configure a different CAN interface, for example, can1, edit this parameter.

|Parameters|Example values|
|---|---|
|canopen.port|canopen.port=can1|

#### CANopen interface type

The agent supports three different CAN interface types:

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th>Parameter</th>
<th>Example value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>canopen.type</td>
<td>canopen.type=can</td>
<td>This is the type when your CAN device is supported by the socketCAN driver and automatically appears as a network CAN interface.</td>
</tr>
<tr>
<td>canopen.type</td>
<td>canopen.type=vcan</td>
<td>This is the default type. It uses the virtual CAN interface from the Linux kernel, which is mainly for testing and demo purposes.</td>
</tr>
<tr>
<td>canopen.type</td>
<td>canopen.type=slcan</td>
<td>This is the type when your CAN device is recognized as a serial interface by the Linux kernel, for example, /dev/ttyACM0. In this case, you must also inform the agent about the serial port your device is mounted as: canopen.serial=/dev/ttyACM0 or canopen.serial=/dev/ttyUSB0</td>
</tr>
</tbody>
</table>
