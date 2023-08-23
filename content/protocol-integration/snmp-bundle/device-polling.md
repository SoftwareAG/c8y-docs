---
weight: 80
title: Device polling
layout: redirect
---


The SNMP agent provides the capability to poll for SNMP device data by the OID. In the device protocol that is configured for the SNMP device, if any of the OIDs have measurement mapping enabled, these OIDs will be polled for the data. If an OID does not contain measurement mapping it will be skipped from polling.

### To enable polling from the UI {#to-enable-polling-from-the-ui}

1. In the Device management application, click **All devices** in the **Devices** menu in the navigator.
2. In the devices list, click on the SNMP agent device and open the **SNMP** tab of the device.
3. In the **SNMP communication** section, provide the polling interval in the field **Polling rate**. For example: If the value is set to "5", the agent polls the SNMP devices OID(s) data every 5 seconds. To stop the polling, set the polling interval to 0 or an empty value.
4. Click **Save**.
<br>
![SNMP Device polling](/images/device-protocols/snmp/snmp-polling.png)

The data received via polling is mapped to the {{< product-c8y-iot >}} model based on the mapping defined. As the OIDs contain measurement mapping, the measurements can be viewed in the **Measurements** tab of the SNMP device.

![SNMP device measurement graph](/images/device-protocols/snmp/snmp-measurement-graph.png)

### To enable polling via REST API {#to-enable-polling-via-rest-api}

The following REST call schedules the polling with a given time period:

	PUT /inventory/managedObjects/{{agent.device.id}}
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json
    {
        "id": "{{agent.device.id}}",
        "c8y_SNMPGateway": {
            "maxFieldbusVersion": 4,
            "ipRange": "",
            "autoDiscoveryInterval": null,
			"pollingRate": 5,    // Polling rate in seconds
            "transmitRate": 10,
        }
    }

**Transmit rate** is the interval at which the data from the agent is sent to the platform. For example: If the transmit rate is 5 seconds, the data will be queued up at the agent side and sent to the platform after every 5 seconds. In case of measurements, if the number of measurements is more than 1, the measurements will be grouped and sent to the platform in batches. In case of a large number of measurements in the queue, the maximum batch size will limit to 200 measurements in a single request (default is 200, but configurable in *snmp-agent-gateway.properties*). If the transmit rate is set to zero, the data will be sent to the platform as and when they are created.

### Uninstallation {#uninstallation}

To uninstall the agent completely, follow these steps:

1. Make sure that the load to the SNMP agent is zero. This can be done by gracefully disconnecting all SNMP devices from the SNMP agent or redirect the traffic to a different endpoint.
2. If there are any messages to be processed, wait for it to complete. If you do not care about the pending messages to be processed, continue.
3. Stop the agent process:

		systemctl stop snmp-agent-gateway

4. Take a backup of the following folders (if required):

		$HOME/.snmp
		/etc/snmp-agent-gateway

5. Uninstall the SNMP agent RPM package:

		rpm -e snmp-agent-gateway

6. Delete the following folders:

		$HOME/.snmp
		/etc/snmp-agent-gateway
		/usr/lib/snmp-agent-gateway
		/var/log/snmp-agent-gateway


### Troubleshooting {#troubleshooting}

#### If there are any issues while starting the service {#if-there-are-any-issues-while-starting-the-service}

Check the status of the service:

```
systemctl status snmp-agent.service
```

#### If there are any issues during the execution {#if-there-are-any-issues-during-the-execution}

The agent has extensive logging to inform the user about the situation and in many cases it will also provide the action that the user can take in case of an error situation. All information is logged into a file and the log file is located at: `$HOME/.snmp/log/snmp-agent-gateway-server.log`.

#### How can I find the old logs? {#how-can-i-find-the-old-logs}

The latest log can be found in `$HOME/.snmp/log/snmp-agent-gateway-server.log`. However, the agent uses logback and log files are rotated based on a rolling policy. The default rolling policy is FileAndTime based and the max file size is set to 50MB. The old log files are also present in the same directory as the current running log: `$HOME/.snmp/log/snmp-agent-gateway-server-%d.%i.log`.

#### How can I change the log configuration of the agent process? {#how-can-i-change-the-log-configuration-of-the-agent-process}

Edit the following startup file and change the "arguments" attribute and add the new log configuration file path. Restart the service for the changes to take effect.

```
vi /usr/lib/snmp-agent-gateway/start
--logging.config=/etc/snmp-agent-gateway/snmp-agent-gateway-logging.xml
```

#### How can I change the memory configuration of the agent Java process? {#how-can-i-change-the-memory-configuration-of-the-agent-java-process}

Edit the following startup file and change the heap memory settings (-Xms128m -Xmx384m) to the desired value. Restart the service for the changes to take effect.

```
/usr/lib/snmp-agent-gateway/start
```

#### How can I change the default agent configurations? {#how-can-i-change-the-default-agent-configurations}

In the installation procedure, many of the agent configurations are defaulted to some value. These default values are set based on testing, common usage assumptions and ease of installation. However, you can change the default value to a value suitable for your environment and usage. To do so, uncomment the property and change the value of the property in `$HOME/.snmp/snmp-agent-gateway.properties`.
On saving the changes, restart the agent service for the changes to take effect.

#### Which {{< product-c8y-iot >}} services does the agent use? {#which--productc8yiot--services-does-the-agent-use}

The agent makes use of c8y core APIs (most notably inventory, identity, device control, alarm/measurement/event) of the platform.

#### What are the ports used by the agent? {#what-are-the-ports-used-by-the-agent}

Exposed Network Interfaces  (listening ports)
The table below lists the default values for all inbound listening ports. All ports are configurable in the agent settings configuration file.

| Default Port  | Protocol     | Remarks                 | Note         |
| ------------- |:-------------| ----------------------- |:-------------|
| 6671          | UDP/TCP      | SNMP TRAP listener port | This is the default port number on which <br>SNMP devices connect and sends TRAP. <br>The value can be changed in the property file.|
