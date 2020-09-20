---
weight: 70
title: Authentication
layout: redirect
---

The authentication setting is used to authenticate and authorize the server user. It tells the gateway how to create a user identity and how to send it to the OPC UA server when establishing a connection. The following authentication methods can be selected:

- Anonymous - Anonymous connection will only work when the OPC UA server allows such connections.
- Username/Password - With this setting the gateway will connect to the server as a specific user represented by a username and password.
- Key-based authentication - The gateway will use an existing certificate to authenticate as a specific user. JKS keystore must be uploaded to Cumulocity IoT as a binary with type “application/octet-stream”. This keystore must follow the following rules:
  - It has to be a Java keystore (JKS).
  - The keystore itself has to be password-protected.
  - The keystore has to contain user certificate with  “opcuauser” alias.
  - The user certificate has to be password-protected.

The keystore can be create via the following Java keytool command:

```shell
keytool -genkey -keyalg RSA -alias opcuauser -keystore keystore.jks -storepass passw0rd_a -validity 3600 -keysize 2048
```

![terminal](/images/device-protocols-guide/opcua/opcua-terminal.png)

The keystore can then be verified by using a tool like KeystoreExplorer.

![Keystore explorer](/images/device-protocols-guide/opcua/opcua-keystore-explorer1.png)

![Keystore explorer2](/images/device-protocols-guide/opcua/opcua-keystore-explorer2.png)

The keystore can then be uploaded as binary in Cumulocity IoT and it can be used in the server configuration.

![Opcua Keystore](/images/device-protocols-guide/opcua/opcua-keystore.png)

### Child devices

All server connections are listed as child devices even if the servers are disconnected. To stop a server connection, either delete the server child device or disable/remove the connection from the **OPC UA server** tab.

![Gateway child devices](/images/device-protocols-guide/opcua/opcua-server-child-device.png)

### Address space

When you navigate to the child device of the gateway, the **Address space** tab shows the attributes and references of the address space node of the servers. The filter searches through the whole hierarchy to find “nodeId”, “browserName” or “displayName” of an attribute. In case of multiple “ancestorNodeIds”, you can click on the desired node to be redirected.

The address space is automatically scanned when a connection between the gateway and the server is established. The duration of the scan depends on the size of the address space. The address space information is stored locally once it is scanned and then used by this applying process. If the address space information is not yet available, e.g. the address space has not been scanned, another scan will be triggered without synchronizing data into Cumulocity IoT. Performing another address space operation will update the address space information.

![Gateway events tab](/images/device-protocols-guide/opcua/opcua-address.png)

### Monitoring measurements

On the gateway device, the **Measurements** tab provides visualization of data in the form of charts. In total the gateway contains the following six charts:

<table>
<colgroup>
<col span="1" style="width: 20%;">
<col span="1" style="width: 80%;">
</colgroup>
<thead>
<tr>
<th align="left">Charts</th>
<th align="left">Description</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">Connected servers</td>
<td align="left">Provides the number of connected and disconnected servers.</td>
</tr>

<tr>
<td align="left">Gateway active threads</td>
<td align="left">Shows the number of active threads for the alarm/measurements/event flushes and for the executor. You can also see whether the threadpool size limit is not sufficient, based on the threadpool configurations in the gateway. If the maximum threadpool size is reached then any new activities which require a new thread will be blocked until a thread is available. </td>
</tr>

<tr>
<td align="left">Gateway cyclic reads</td>
<td align="left">Number of active cyclic reads done by the gateway. Cyclic reads are actively reading from the OPC UA server within an interval based on the configuration of the device protocol.</td>
</tr>

<tr>
<td align="left">Gateway memory</td>
<td align="left">Represents the “free”,”max” and “allocated” memory values of the gateway.</td>
</tr>

<tr>
<td align="left">Gateway repository queues</td>
<td align="left">Before a thread is flushed it is first added to the queue. This chart shows how many threads are currently in the queue. </td>
</tr>

<tr>
<td align="left">Server response time</td>
<td align="left">Shows the response time of each currently connected server. </td>
</tr>
</tbody>
</table>

![Gateway measurements tab](/images/device-protocols-guide/opcua/opcua-gateway-memory.png)

### Monitoring alarms

On the gateway device, the **Alarms** tab shows all alarms raised either in the gateway or in the servers. In total there are three alarms which can be raised:

- Connection loss - If the gateway fails to connect to the OPC UA server a critical alarm is raised.
- Gateway crash -  If the gateway crashes or is abruptly shut down a major alarm is raised.
- No data arrived within interval - If the status interval check value in the OPC UA server configuration is exceeded a major alarm is raised.

![Gateway alarms tab](/images/device-protocols-guide/opcua/opcua-alarms.png)

### Monitoring events

On the gateway device, the **Events** tab shows all events related to the gateway-server connection. Additionally, you can see when the gateway has started and when it ends.

![Gateway events tab](/images/device-protocols-guide/opcua/opcua-events.png)
