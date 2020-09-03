  ---

weight: 70
title: OPC UA
layout: redirect

---

The OPC UA device gateway is a stand-alone Java program that communicates with OPC UA server(s) and the Cumulocity IoT platform. It stores data into the Cumulocity IoT database via REST. Additionally, C8Y commands are executed to perform various operations on the OPC UA servers.

The gateway has to be registered as Cumulocity IoT device in a specific tenant and the opcua-device-gateway must run in the users’ environment.

> **Important:** In order to use OPC UA, you must be subscribed to the “opcua-mgmt-service” microservice. If the “opcua-mgmt-service” microservice is not available in your tenant, please [contact support](/about-doc/contacting-support).

To download the gateway navigate to [Cumulocity resources](http://resources.cumulocity.com/examples/opc-ua/).

The gateway requires Java 8 in order to run.

### <a name="gateway-register"></a>Gateway configuration and registration

YAML file and spring profiles are used for the configuration of the gateway. A default configuration file is embedded in the gateway JAR file, so you only need to set the properties which are different from the default.

> **Important**: When editing the YAML file, make sure to provide valid indentations.

To run the gateway locally, the default settings should be overridden in a customized profile. To use the customized profile, create a YAML file which must follow the naming convention:

    application-<<Profile_name>>.yaml

For example, to connect to a tenant, first a profile named *application-myTenant.yaml* will be created. The following properties will be added to the file:

```bash
C8Y:
    baseUrl: https://<<yourTenant>>.cumulocity.com
gateway:
    bootstrap:
        tenantId: <<yourTenantId>>
    identifier: Gateway_Device
    name: My Gateway
    db:
# The gateway uses the local database to store platform credentials and local cache. This parameter shows the location in which the local data should be stored.
        baseDir: C:/Users/<<userName>>/.opcua/data
```

> **Info:** Windows OS is used for the example.

#### Configuration profile location on the filesystem

The configuration profile can be stored either in the *same directory as the JAR file* or in a *default configuration directory*.
Depending on the operating system, the following default configuration directories can be used:

```
Windows OS
    /C:/opcua/
Linux OS
    /etc/opcua/
    /etc/opcua/data
Mac OS
    /opt/opcua/
    /opt/opcua/data
```

The number of profiles you may have is not limited. To use a specific profile on runtime, the "-Dspring.profiles.active" JVM argument has to be passed when running the gateway JAR file. For example, let’s use the previously created profile. Start a terminal and use the following command:

```bash
java -jar opcua-device-gateway-<<version>>.jar --spring.profiles.active=default,myTenant
```

The command above will start a gateway with the default profile and it will override the default properties with the properties defined in the “myTenant” profile. The list of profiles has to be provided as an ordered, comma-separated list. The default profile always needs to be the first profile in the list.

**Optional**: To specify your own configuration, Spring arguments can be used in your terminal to run the gateway JAR file. Multiple locations have to be comma-separated. The configuration locations should be either YAML files or directories. In case of directories, they must end with “/”. For example:

```bash
java -jar opcua-device-gateway-<<version>>.jar --spring.config.location=file:<<location>>/.opcua/conf/application-myTenant.yaml,file:<<location>>/.opcua/conf/
```

If both arguments "--spring.config.location" and "--spring.profiles.active" are provided, the configuration locations should be directories instead of files. Otherwise, the profile-specific variants will not be considered.

#### Additional customizations

> **Info**: If no additional customizations are required, you can skip this section.

The following properties can be manually configured in the YAML file:

```bash
# Name of the application - this should not change
name: opcua-device-gateway
# Platform location and configuration
C8Y:
  baseUrl: http://localhost
  forceInitialHost: true

gateway:
# Gateway version - this is filled automatically during the build process - do not change this property
  version: ${project.version}
# The following two properties will be set to the name of the user that is running the gateway unless it's overridden manually
  identifier: mygateway
  name: mygateway
  db:
# The gateway uses the local database to store platform credentials and local cache. This parameter shows the location in which the local data should be stored.
    baseDir: ${user.home}/.opcua/data

# Credentials for device bootstrap - enter tenant that gateway should register to.
  bootstrap:
# ID of the tenant to which the device will be registered.
    tenantId: management
    username: devicebootstrap
    password: <devicebootstrap user password>
# On start, the gateway will wait <delay> milliseconds before connecting to the platform and searching for a      device.
    delay: 5000
# If true then gateway will drop stored device credentials and fetch them from platform
    force: false

# Scheduled tasks and thread pools configuration. Unless required, modifying these properties is not recommended.
  scheduler:
    threadpool:
      size: 10
  executor:
    threadpool:
      coreSize: 5
      maxSize: 20
# mappings execution thread pool configuration. Unless required, modifying these properties is not recommended.
  mappingExecution:
    http:
      connectionRequestTimeout: 3000
      connectionTimeout: 3000
      socketTimeout: 5000
    refreshInterval: 60000
    threadpool:
      size: 200
  cyclicRead:
    threadpool:
      size: 30
  subscription:
    reportingRate: 100
    maxKeepAliveCount: 200
# Should be at least 3 times greater than maxKeepAliveCount
    lifetimeCount: 600
# Repositories thread pool configuration. Unless required, modifying these properties is not recommended.

  repositories:
    flushInterval: 10000
    eventsThreadpool: 30
    alarmsThreadpool: 30
    measurementsThreadpool: 60
# Platform connection configuration. Unless required, modifying these properties is not recommended.

  platform:
    connectionPool:
      max: 250
      perHost: 150
# Monitoring interval - how often in milliseconds gateway sends monitoring data to Cumulocity IoT.     
  monitoring:
    # This parameter describes how often in milliseconds the gateway sends monitoring data to Cumulocity IoT.
    interval: 10000
# Time after which the gateway will publish a snapshot of values for the UI to the server.
  valueMap:
    lifeTime: 30

# How often (in milliseconds) gateway checks for changes in configured servers.
  childrenAddedOrRemoveCheck:
    interval: 30000

# Interval in milliseconds after which the gateway will read pending operations from the platform.
  shortPolling:
    enabled: true
    fixedDelay: 15000

# Time in days for which the certificate is valid.
  applicationIdentity:
    validityTime: 3650
```

#### Logging

Custom logging configuration can be set during startup by passing the "-Dlogging.config" jvm argument. For more info on how to set up custom logging settings, refer to the “Logback” documentation.

### Running the Gateway

The gateway can run with either default or custom settings. To run the gateway run one of the commands below:

* Default settings and default logging configuration:
  
        java -jar opcua-device-gateway-<<version>>.jar

* Custom settings and default logging configuration:
  
        java -Dspring.profiles.active=default,PROFILE_NAME -jar opcua-device-gateway-<<version>>.jar

* Custom settings and custom logging configuration:
  
        java -Dlogging.config=file:PATH_TO_LOGBACK_XML -Dspring.profiles.active=default,PROFILE_NAME -jar opcua-device-gateway-<<version>>.jar

For example, using the profile from the previous section we are going to register the gateway. First, open the terminal and navigate to the location of the gateway.jar file. Next, enter the following command:

```
java -Dspring.profiles.active=default,myTenant -jar opcua-device-gateway-<<version>>.jar
```

#### Adjusting gateway memory settings

In certain scenarios it is required to adjust the memory settings of the gateway application. Examples for such scenarios are the integration of servers with very large address spaces or obtaining large amounts of data from servers using high sampling rates.

You can adjust the memory settings of the gateway like with any other Java program. Typically, it is sufficient to increase the initial heap size and the maximum heap size of the gateway process.

* Example: Run the gateway with a minimum heap size of 2 GB and a maximum heap size of 8 GB.
  
  ```
  java -Xms2g -Xmx8g -jar opcua-device-gateway-<<version>>.jar
  ```

> **Important** Please adjust the memory settings according to the physical memory available on the gateway host. The maximum heap size must be set in a way that it doesn't consume more RAM than physically available to the gateway. Otherwise, the virtual memory management of the host operating system might start paging, resulting in reduced gateway performance.

### Register the gateway as a Cumulocity IoT device

Navigate to the **Registration** page and click **Register device > General device registration**. Enter the Identifier name (in our example it is “Gateway_Device”) and then click **Next**.

Click **Accept** to complete the registration.

![Device Registration](/images/users-guide/opcua/opcua-device-registration.png)

### Connecting the gateway to the server

Next, establish a connection between the gateway and the OPC UA server.

1. In the **OPC UA server** tab of the respective gateway, click **Add server**. <br>
   ![Add new server](/images/users-guide/opcua/opcua-new-server.png)
2. Use the **Server connection** toggle, to enable or disable the server connection.
3. Enter the **Server URL** which is used to establish a connection between the server and the gateway.
4. Enter the **Timeout value** in seconds. The timeout value is calculated for each request. If the timeout value is exceeded the request will be unsuccessful.
5. Enter the **Status check interval** in seconds. The platform constantly checks whether there is incoming data. If the status check interval value is exceeded an alarm is created. The status check interval value has to be greater than the monitoring value of the gateway.
6. Select the **Security mode** and **Security policy** depending on the server configuration. For more info, see the [section below](#security-modes).
7. Select the desired authentication method. For more info, see the [section below](#authentication).
8. Click **Save**.

> **Info:** Once a connection is established, the servers will be located in the **Child devices** tab. In there, the servers will contain additional data such as access to the address space.

#### <a name="security-modes"></a> Security modes

The security mode settings tell the gateway how it should secure the connection between itself and the OPC UA server. When a mode other than NONE is selected, the gateway will auto-generate a self-signed application instance certificate and will use it to connect to the server. Possible security mode options are:

- NONE
- BASIC128RSA15_SIGN
- BASIC128RSA15_SIGN_ENCRYPT
- BASIC256_SIGN
- BASIC256_SIGN_ENCRYPT
- BASIC256SHA256_SIGN
- BASIC256SHA256_SIGN_ENCRYPT

> **Info:** The security modes have nothing to do with authorization or authentication! The security mode tells the gateway how the connection should be secured and whether the connection should be encrypted or not.

### <a name="authentication"></a> Authentication

The authentication setting is used to authenticate and authorize the server user. It tells the gateway how to create a user identity and how to send it to the OPC UA server when establishing a connection. The following authentication methods can be selected:

- Anonymous - Anonymous connection will only work when the OPC UA server allows such connections.
- Username/Password - With this setting the gateway will connect to the server as a specific user represented by a username and password.
- Key-based authentication - The gateway will use an existing certificate to authenticate as a specific user. JKS keystore must be uploaded to Cumulocity IoT as a binary with type “application/octet-stream”. This keystore must follow the following rules:
  - It has to be a Java keystore (JKS).
  - The keystore itself has to be password-protected.
  - The keystore has to contain user certificate with  “opcuauser” alias.
  - The user certificate has to be password-protected.

The keystore can be create via the following Java keytool command:

```bash
keytool -genkey -keyalg RSA -alias opcuauser -keystore keystore.jks -storepass passw0rd_a -validity 3600 -keysize 2048
```

![terminal](/images/users-guide/opcua/opcua-terminal.png)

The keystore can then be verified by using a tool like KeystoreExplorer.

![Keystore explorer](/images/users-guide/opcua/opcua-keystore-explorer1.png)

![Keystore explorer2](/images/users-guide/opcua/opcua-keystore-explorer2.png)

The keystore can then be uploaded as binary in Cumulocity IoT and it can be used in the server configuration.

![Opcua Keystore](/images/users-guide/opcua/opcua-keystore.png)

### Gateway device details

In this section, only OPC UA specific information related to the tabs in the device details page will be explained. For more info on all tabs, see [Device Management > Device Details](/users-guide/device-management/#device-details) in the User guide.

![Gateway device details](/images/users-guide/opcua/opcua-device-details.png)

#### Child devices

All server connections are listed as child devices even if the servers are disconnected. To stop a server connection, either delete the server child device or disable/remove the connection from the **OPC UA server** tab.

![Gateway child devices](/images/users-guide/opcua/opcua-server-child-device.png)

#### Measurements

The Measurements tab provides visualization of data in the form of charts. In total the gateway contains the following six charts:

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

![Gateway measurements tab](/images/users-guide/opcua/opcua-gateway-memory.png)

#### Alarms

The **Alarms** tab shows all alarms raised either in the gateway or in the servers. In total there are three alarms which can be raised:

- Connection loss - If the gateway fails to connect to the OPC UA server a critical alarm is raised.
- Gateway crash -  If the gateway crashes or is abruptly shut down a major alarm is raised.
- No data arrived within interval - If the status interval check value in the OPC UA server configuration is exceeded a major alarm is raised.

![Gateway alarms tab](/images/users-guide/opcua/opcua-alarms.png)

#### Events

The **Events** tab shows all events related to the gateway-server connection. Additionally, you can see when the gateway has started and when it ends.

![Gateway events tab](/images/users-guide/opcua/opcua-events.png)

#### Address space

The **Address space** tab shows the attributes and references of the address space node of the servers. The filter searches through the whole hierarchy to find “nodeId”, “browserName” or “displayName” of an attribute. In case of multiple “ancestorNodeIds”, you can click on the desired node to be redirected.

The address space is automatically scanned when a connection between the gateway and the server is established. The duration of the scan depends on the size of the address space. The address space information is stored locally once it is scanned and then used by this applying process. If the address space information is not yet available, e.g. the address space has not been scanned, another scan will be triggered without synchronizing data into Cumulocity IoT. Performing another address space operation will update the address space information.

![Gateway events tab](/images/users-guide/opcua/opcua-address.png)

### Device protocols

#### Adding a new device protocol

1. Click **New device protocol** in the top menu bar and select OPC UA as device protocol type.

2. In the resulting dialog box, enter a name and an optional description for the device protocol.

3. Optionally, a reference server can be selected. Selecting a reference server allows you to create device protocols based on the OPC UA model stored on an OPC UA server. This greatly simplifies the mapping process, as device protocols can be created based on OPC UA browse paths being actually present on the server.

4. Click **Create**.<br>
   ![Add new device protocol](/images/users-guide/opcua/opcua-add-protocol.png)
   
   > **Info:** Selecting a reference server will require you to select a reference node.

Once the device protocol is created, various configuration settings such as variables, data reporting and constraints can be applied. Initially, the device protocol will be inactive. When active, the gateway will scan the address space of all servers and will automatically apply the device protocol to all nodes which match the criteria. When the device protocol is configured, click **Save**.

#### Adding a new variable

1. Click **Add variable** under the **Variables** section.
2. Enter the path and the name of the variable.
3. Choose either the default or the custom data reporting. The default option uses the data reporting mechanism used in the device protocol. The custom option will let you configure a data reporting mechanism only for the current variable.
4. Additionally, different functionalities such as sending measurements, creating alarms, sending events and custom actions for each variable can be selected.
5. Click **Save** to save your settings.

The gateway has a scheduling job and after the variables are saved, the gateway will check whether the variables exist under the subtree of the node. Afterwards, for each node a child device of the server is created. The child devices will contain data based on the configuration of the device protocol. The node child devices will also be listed in the **All devices** page.

> **Info:** If no reference server was selected during the device protocol creation, the path should be given with a namespace URI representation. In the OPC UA server the index value can be taken from the namespace array. An example namespace URI representation for browse path “5:Counter1” would be: *http://www.prosysopc.com/OPCUA/SimulationNodes:Counter1*. Node id equal to “ns=5;s=Simulation” will have the following namespace representation *'nsu=http://www.prosysopc.com/OPCUA/SimulationNodes;s=Simulation*. In both examples the server’s namespace array, the 5th element has the value of “http://www.prosysopc.com/OPCUA/SimulationNodes”.

![OPC UA device protocol](/images/users-guide/opcua/opcua-device-protocol.png)

The functionalities that can be enabled are the following:

**Send measurement**

Turn on **Send measurement** to specify a measurement.

Specify the following parameters:

- Enter the type of the measurement, for example, “c8y_AccelerationMeasurement”.
- Series are any fragments in measurements that contain a “value” property. For example, “c8y_AccelerationMeasurement.acceleration”.
- The **Unit** field specifies the unit of the given measurement, for example, “m/s” for velocity.

**Create alarm**

Turn on **Create alarm** if you want to create an alarm out of the resource.

Specify the following parameters (all mandatory):

- Severity - one of CRITICAL, MAJOR, MINOR, WARNING
- Type
- Status - one of ACTIVE, ACKNOWLEDGED, CLEARED
- Text

**Send Event**

Turn on Send event to send an event each time you receive a resource value.

Specify the following parameters:

- Enter the type of the event. For example, “com_cumulocity_model_DoorSensorEvent”.
- Enter the text which will be sent. For example, “Door sensor was triggered”. You can also get the resource value populated to the event text by defining the value placeholder:

```plain
Door sensor was triggered, event value: ${value}
```

The value will also be populated as a fragment of the created event, under a static fragment name as the following:

```json
{
 "type": "com_cumulocity_model_DoorSensorEvent",
 "text": "Door sensor was triggered",
 "c8y_ua_DataValue": {
     "serverTimestamp": 132403410091850000,
     "sourceTimestamp": 132403410091850000,
     "value": {
         "value": 381632714
     },
     "statusCode": 0
 }
}
```

**Custom Actions**

Custom actions are HTTP POST requests which the gateway will send to a defined custom URL. You can define custom headers and body template with the following placeholders available:

- ${value} - value of specific node
- ${serverId} - ID of OPC-UA server
- ${nodeId} - ID of source node
- ${deviceId} - ID of source device

Below there is an example of a full device protocol that configures a custom action:

```json
{
   "name": "My device protocol for HttpPost",
   "referencedServerId": "{serverId}",
   "referencedRootNodeId": "ns=2;s=HelloWorld/Dynamic",
   "enabled": true,
   "subscriptionType" : {
     "type": "Subscription",
     "subscriptionParameters": {
       "samplingRate": 1000
     }
   },
   "applyConstraints": {
     "matchesNodeIds": [
       "ns=2;s=HelloWorld/Dynamic1"
     ]
   },
   "mappings": [
       {
           "browsePath": [
               "2:Double"
           ],
           "customAction": {
               "type": "HttpPost",
               "endpoint": "http://my.endpoint.local",
               "bodyTemplate": "{\"text\": \"I am coming from Http POST, value: ${value} \", \"type\": \"HttpPostMO\"}",
               "headers": {
                   "Authorization": "Basic MYAUTHCREDENTIALS==",
                   "Content-Type": "application/json"
               }
           }
       }
   ]
}
```

### Data reporting

There are three data reporting mechanisms which can be applied to read all mapped browse paths:

- None - The gateway will not read values automatically. The mappings will be applied only when manual read operations are performed on mapped nodes.
- Cyclic Read - The gateway reads values from mapped nodes at specified interval rates in milliseconds. The minimum allowed rate is 50 milliseconds.
  ![OPC UA device protocol](/images/users-guide/opcua/opcua-data-reporting-cyclic-read.png)
- Subscription - The gateway retrieves values by using OPC UA's own subscription mechanism.
  Possible parameters:
  - Sampling interval (required): The sampling interval defines a time interval individually for each mapped node. This is the rate at which the server checks the data source for changes.
  - Queue size: The size of the queue where it holds the samples before reporting. If you wish to record samples at a faster rate than reporting interval, you will also need to reserve a longer queue size, to be able to keep all the samples in the server. The reporting interval is defined for the gateway and the value is configurable with the yaml file.
    - Discard: Select whether to discard the oldest or newest item if the samples are exceeding the queue size.
  - Data change trigger:
    - Status: Triggers notification if node's status has changed.
    - Status/Value: Triggers notification if node's status or value has changed.
    - Status/Value/Timestamp: Triggers notification if node's status, value or timestamp has changed.
  - Deadband filter: Deadband filter makes notified data values to be filtered.
    - None: No filter will be applied. This option is selected by default.
    - Absolute: Contains the absolute change in a data value which causes the generation of a notification. This parameter applies only to variables with any number data type.
    - Percent: The value is defined as the percentage of the EU range. It applies only to analog items with a valid EU range property. This range is multiplied with the deadband value and is then compared to the actual value change in order to determine the need for a data change notification.

![OPC UA device protocol](/images/users-guide/opcua/opcua-data-reporting-subscription.png)

> **Important:** Very low interval rates (e.g. 50 ms) for cyclic read and subscription types will result in huge amounts of data being created.

#### Applying constraints

Specifying auto-apply constraints allows you to limit the scope in which the device protocols are applied, for example by specifying a set of possible servers or node IDs. If no constraints are set, device protocols are applied at any fitting location on the OPC UA server.

The following constraints can be applied:

- **Limit device type to a set of servers** - Limit the device types to a particular set of servers. This is useful if you want to have 1 device type for each OPC UA server. Simply click on the dropdown menu and select the desired servers.
- **Limit device type scope in the address space** - Limit the scope to servers which have the entered path in their address space.
- **Limit device type to servers with a certain fragment** - The device protocol will only be available to the servers which have the entered fragment.
- **Limit device type to specific root nodes ID** - A list of “root” node IDs (from which your browsePath is defined) to which the device type should be applied. For example, if there is only one server and the device type is applied to two node IDs, two child devices of the server will be created. Note that if the device type variables do not exist in the root nodes, the device type will not be applied to the root node server.

![OPC UA device protocol](/images/users-guide/opcua/opcua-auto-constraints.png)

### REST APIs

While Cumulocity IoT user interface for OPC UA provides an easy and visual way to configure and build your OPC UA solution, the OPC UA management *microservice* gives you the possibility to do it via RESTful web service.

The full API definitions can be found at: `/service/opcua-mgmt-service/swagger-ui.html`.

#### OPC UA server resources

##### Connect a new OPC UA server to the gateway

Endpoint: `POST /service/opcua-mgmt-service/gateways/{gatewayId}/servers`

Description: Connect a new OPC UA server to the gateway or update the existing server with a new configuration.

Payload: 

```json
{
    "name": "My Server",
    "config": {
        "securityMode": "NONE",
        "serverUrl": "opc.tcp://127.0.0.1:53530/OPCUA/SimulationServer",
        "autoScanAddressSpace": true
    }
}
```

Payload data structure explained:

| Field                | Type                     | Mandatory | Description                                                                                                                      |
| -------------------- | ------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **id**               | string                   | yes/no    | String. Id of the OPC UA server in case of updating an existing server. When connecting a new server, this must not be provided. |
| **name**             | string                   | yes       | Server managed object name.                                                                                                      |
| **requiredInterval** | integer                  | no        | How frequently the server is expected to send data to the Cumulocity IoT platform.                                               |
| **config**           | *ServerConnectionConfig* | yes       | Connection configuration to the OPC UA server.                                                                                   |

Data structure for *ServerConnectionConfig*

| Field                  | Type    | Mandatory | Description                                                                                                                                                                                                                                            |
| ---------------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **securityMode**       | string  | yes       | String enum, mandatory. Security mode for connection to OPC UA server. Possible values: `NONE, BASIC128RSA15_SIGN, BASIC128RSA15_SIGN_ENCRYPT, BASIC256_SIGN, BASIC256_SIGN, BASIC256_SIGN_ENCRYPT, BASIC256SHA256_SIGN, BASIC256SHA256_SIGN_ENCRYPT`. |
| **serverUrl**          | string  | yes       | String, mandatory. OPC UA server URL.                                                                                                                                                                                                                  |
| autoScanAddressSpace   | boolean | no        | Boolean. Whether the gateway should scan the address space automatically the first time it connects. Default is true.                                                                                                                                  |
| rescanCron             | string  | no        | String. Regular expression that defines how the address space rescanning should be scheduled. If this is not set, no auto-rescan will be triggered.                                                                                                    |
| autoReconnect          | boolean | no        | Boolean. Whether the gateway should try to reconnect to the OPC UA server once the connection drop is detected. Default is true.                                                                                                                       |
| timeout                | integer | no        | Integer. Define the default communication timeout that is used for each synchronous service call. This value is set to each service request and the OPC UA gateway will wait for the response message for that long.                                   |
| statusCheckInterval    | integer | no        | Integer. Define the status check interval, that is, how often the server status is read. Default is 3 (seconds).                                                                                                                                       |
| maxResponseMessageSize | long    | no        | Integer. Define the maximum size, in bytes, for the body of any response message from the server. Default is 50.000.000 (50 MB). To make it unlimited, set this to 0.                                                                                  |
| targetConnectionState  | string  | no        | String enum. Possibe values: `enabled/disabled`. Whether the connection the the target OPC UA server is enabled.                                                                                                                                       |
| userIdentityMode       | string  | no        | User identity. Possible values: `Anonymous, UserName, Certificate, IssuedToken`. Default is `Anonymous`.                                                                                                                                               |
| userName               | string  | yes/no    | Authentication username when user identity mode is `UserName`.                                                                                                                                                                                         |
| userPassword           | string  | yes/no    | Authentication password when user identity mode is `UserName`.                                                                                                                                                                                         |
| keystoreBinaryId       | string  | yes/no    | If the user identity mode is `Certificate`, this is the binary object ID of the uploaded keystore.                                                                                                                                                     |
| keystorePass           | string  | no        | If the user identity mode is `Certificate`, this is the password of the uploaded keystore.                                                                                                                                                             |
| certificatePass        | string  | no        | If the user identity mode is `Certificate`, this is the password of the private key embedded in the keystore.                                                                                                                                          |

##### Get all servers of a gateway device

Method: `GET /service/opcua-mgmt-service/gateways/{gatewayId}/servers`

Parameters:

| Field     | Field type    | Description                                                                |
| --------- | ------------- | -------------------------------------------------------------------------- |
| gatewayId | Path variable | Managed object ID of the gateway that should connect to the OPC UA server. |

Sample response:

```json
[
    {
        "id": "25197",
        "gatewayId": "800",
        "name": "My OPC UA server",
        "requiredInterval": 1,
        "config": {
            "securityMode": "NONE",
            "serverUrl": "opc.tcp://127.0.0.1:12686/CumulocityOPCUAServer",
            "userIdentityMode": "Anonymous",
            "timeout": 30,
            "autoReconnect": true,
            "statusCheckInterval": 40,
            "targetConnectionState": "enabled"
        },
        "namespaceTable": [
            "http://opcfoundation.org/UA/",
            "urn:cumulocity:opcua:test:server:ee8ff646-cc83-4a1f-ad29-97356c496ef0",
            "urn:cumulocity:opcua:test:server"
        ],
        "c8y_Availability": {
            "lastMessage": "2020-08-27T12:43:22.585+0000",
            "status": "UNAVAILABLE"
        },
        "c8y_Connection": {
            "status": "DISCONNECTED"
        },
        "c8y_RequiredAvailability": {
            "responseInterval": 1
        }
    }
]
```

##### Delete and disconnect an OPC UA server

Endpoint: `DELETE /service/opcua-mgmt-service/servers/{serverId}`

Description: Delete the OPC UA server managed object. Once the server deletion is detected by the gateway, the connection to the OPC UA server will be terminated. The gateway will also try to delete all address space nodes created in the Cumulocity platform that connected to the deleted server.

Parameters:

| Field    | Field type    | Description                                           |
| -------- | ------------- | ----------------------------------------------------- |
| serverId | Path variable | Managed object ID of the OPC UA server to be deleted. |

Response: `204 No content`

#### Address space resources

##### Get an address space node by ID

Endpoint: `GET /service/opcua-mgmt-service/servers/{serverId}/address-spaces/get`

Description: Get a node in the server address space specified by the given node ID. The node ID must be URL encoded.

Parameters:

| Param    | Param Type    | Description                                                                                  |
| -------- | ------------- | -------------------------------------------------------------------------------------------- |
| serverId | Path variable | Integer, mandatory. OPC UA server managed object ID.                                         |
| nodeId   | Query param   | Mandatory. Node ID of the node to get.                                                       |
| withUri  | Query param   | Boolean, default is false. Whether the result should use address space URI instead of index. |

**Example:**

Endpoint: `GET /service/opcua-mgmt-service/servers/10/address-spaces/get?nodeId=i%3D84`

```json
{
    "nodeId": "i=84",
    "nodeClass": 1,
    "nodeClassName": "Object",
    "browseName": "0:Root",
    "browsePath": null,
    "displayName": "Root",
    "description": "The root of the server address space.",
    "references": [
        {
            "referenceId": "i=35",
            "targetId": "i=87",
            "referenceLabel": "Organizes",
            "targetLabel": "Views",
            "targetBrowseName": "Views",
            "inverse": false,
            "hierarchical": true
        },
        {
            "referenceId": "i=40",
            "targetId": "i=61",
            "referenceLabel": "HasTypeDefinition",
            "targetLabel": "FolderType",
            "targetBrowseName": "FolderType",
            "inverse": false,
            "hierarchical": false
        }
    ],
    "attributes": {
        "eventNotifier": 0
    },
    "absolutePaths": [
        [
            "0:Root"
        ]
    ],
    "ancestorNodeIds": [
        []
    ]
}
```

##### Get children of a given node

Endpoint: `GET /serice/opcua-mgmt-service/servers/{serverId}/address-spaces/children`

Description: Get all child nodes of the given node specified by the node ID in the server address space. The node ID must be properly URL encoded.

Parameters:

| Param    | Param Type    | Description                                                                                  |
| -------- | ------------- | -------------------------------------------------------------------------------------------- |
| serverId | Path variable | Integer, mandatory. OPC UA server managed object ID.                                         |
| nodeId   | Query param   | Mandatory. Node ID of the node to get.                                                       |
| withUri  | Query param   | Boolean, default is false. Whether the result should use address space URI instead of index. |

**Example:**

Endpoint: `GET /service/opcua-mgmt-service/servers/10/address-spaces/children?nodeId=i%3D84`

```json
[
    {
        "nodeId": "i=86",
        "nodeClass": 1,
        "nodeClassName": "Object",
        "browseName": "0:Types",
        "browsePath": null,
        "displayName": "Types",
        "description": "The browse entry point when looking for types in the server address space.",
        "references": [
            {
                "referenceId": "i=40",
                "targetId": "i=61",
                "referenceLabel": "HasTypeDefinition",
                "targetLabel": "FolderType",
                "targetBrowseName": "FolderType",
                "inverse": false,
                "hierarchical": false
            },
            {
                "referenceId": "i=35",
                "targetId": "i=86",
                "referenceLabel": "OrganizedBy",
                "targetLabel": "Types",
                "targetBrowseName": "Types",
                "inverse": true,
                "hierarchical": true
            }
        ],
        "attributes": {
            "eventNotifier": 0
        },
        "absolutePaths": [
            [
                "0:Root",
                "0:Types"
            ]
        ],
        "ancestorNodeIds": [
            [
                "i=84"
            ]
        ]
    }
]
```

##### Browse a node

Endpoint: `GET /serice/opcua-mgmt-service/servers/{serverId}/address-spaces/browse`

Description: Browse a node from a base node following the given browse path. This basically searches for a node with relative browse path to the other node.

Parameters:

| Param      | Param Type    | Description                                                                                                                                                                                                                                                                           |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serverId   | Path variable | Integer, mandatory. OPC UA server managed object ID.                                                                                                                                                                                                                                  |
| nodeId     | Query param   | Node ID of the node to browse from. Default is root node (i=84).                                                                                                                                                                                                                      |
| browsePath | Query param   | Mandatory. Browse path to browse from the give node. Browse path can be a single param or an array to represent a path from the given node to the target node. To specify the browsePath as an array, repeat the browsePath query. Example: `.../browse?browsePath=L1&browsePath=L2`. |
| withUri    | Query param   | Boolean, default is false. Whether the result should use address space URI instead of index.                                                                                                                                                                                          |

**Example:**

Endpoint: `GET /service/opcua-mgmt-service/servers/10/address-spaces/browse?nodeId=i%3D84&browsePath=Objects`

```json
[
    {
        "nodeId": "i=85",
        "nodeClass": 1,
        "nodeClassName": "Object",
        "browseName": "0:Objects",
        "browsePath": null,
        "displayName": "Objects",
        "description": "The browse entry point when looking for objects in the server address space.",
        "references": [
            {
                "referenceId": "i=35",
                "targetId": "i=2253",
                "referenceLabel": "Organizes",
                "targetLabel": "Server",
                "targetBrowseName": "Server",
                "inverse": false,
                "hierarchical": true
            },
            {
                "referenceId": "i=35",
                "targetId": "ns=2;s=Cumulocity",
                "referenceLabel": "Organizes",
                "targetLabel": "Cumulocity",
                "targetBrowseName": "2:Cumulocity",
                "inverse": false,
                "hierarchical": true
            }
        ],
        "attributes": {
            "eventNotifier": 0
        },
        "absolutePaths": [
            [
                "0:Root",
                "0:Objects"
            ]
        ],
        "ancestorNodeIds": [
            [
                "i=84"
            ]
        ]
    }
]
```

#### Device type resources

These resources provide the APIs for manipulating device types.

##### Creating a new device type

Endpoint: `POST /service/opcua-mgmt-service/device-types`

Sample payloads:

- Measurement mappings using subscription
  
  ```json
  {
      "name": "My device type",
      "enabled": true,
      "mappings": [
          {
              "browsePath": [
                  "2:Dynamic",
                  "2:Double"
              ],
              "measurementCreation": {
                  "unit": "T",
                  "type": "MyMeasurementType",
                  "fragmentName": 'MyMeasurement',
                  "series": "MySeries"
              }
          }
      ],
      "subscriptionType": {
          "type": "Subscription",
          "subscriptionParameters": {
              "samplingRate": 5000
          }
      }
  }
  ```
* Event mappings using cyclic read
  
  ```json
  {
      "name": "My device type",
      "enabled": true,
      "mappings": [
          {
              "browsePath": [
                  "2:Dynamic",
                  "2:Integer"
              ],
              "eventCreation": {
                  "type": "MyEventType",
                  "text": "My event with value ${value}"
              }
          }
      ],
      "subscriptionType": {
          "type": "Cyclicread",
          "rate": 5000
      }
  }
  ```

* Alarm mappings using subscription
  
  ```json
  {
      "name": "My device type",
      "enabled": true,
      "mappings": [
          {
              "browsePath": [
                  "2:Dynamic",
                  "2:Boolean"
              ],
              "alarmCreation": {
                  "type": "MyAlarm",
                  "severity": 'MAJOR',
                  "text": "Heads up, the level is high!"
              }
          }
      ],
      "subscriptionType": {
          "type": "Subscription",
          "subscriptionParameters": {
              "samplingRate": 5000
          }
      }
  }
  ```

* UA events mappings into alarm and event
  
  ```json
  {
      "name": "My device type",
      "enabled": true,
      "uaEventMappings": [
          {
              "browsePath": [
                  "Server"
              ],
              "eventTypeId": "i=2041",
              "attributes": [
                  "Message",
                  "Severity"
              ],
              "alarmCreation": {
                  "text": "ALARM! message: ${0}",
                  "severity": "MAJOR",
                  "status": "ACTIVE",
                  "type": "c8y_myEvent_alarm_${1}"
              }
          }
      ]
  }
  ```

Full payload data structure explained:

| Field                     | Type                      | Madatory | Description                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | ------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                      | string                    | yes      | Device type name.                                                                                                                                                                                                                                                                                                                |
| enabled                   | boolean                   | no       | Whether the device type is enabled and should be applied to the connected servers or not. Default is false.                                                                                                                                                                                                                      |
| description               | string                    | no       |                                                                                                                                                                                                                                                                                                                                  |
| mappings                  | array<*Mapping*>          | no       | Define the mappings from OPC UA data into Cumulocity measurements, events and alarms.                                                                                                                                                                                                                                            |
| uaMappings                | array<*UAMapping*>        | no       | Define the mappings from OPC UA alarms and events into Cumulocity alarms and events.                                                                                                                                                                                                                                             |
| referencedNam-espaceTable | array<string>             | no       | Reference namespace table if known. This is then used to convert the browse paths with namespace index into namespace URL. This is to make sure that the mappings are still the same even when the namespace index gets changed.                                                                                                 |
| subscriptionType          | *SubscriptionType*        | no       | Define the mechanism how to collect data from the OPC UA servers. There are two mechanisms that can be used: Cyclic read and subscription. This is not mandatory however if the device type is enabled and no subscription type is specified, the device will not be applied to any node.                                        |
| processingMode            | string                    | no       | Define the Cumulocity processing mode for incoming data. Please refer to the [reference guide](/reference/rest-implementation/#processing-mode) for more information. Possible values: PERSISTENT, TRANSIENT, QUIESCENT, CEP. Default is PERSISTENT.                                                                             |
| overiddenSub-scriptions   | *Overridden-Subscription* | no       | While the subscriptionType defines how data can be collected from the OPC UA server, this option allows you to override the mechanism for particular browse paths. For example you can have a subscription applied globally with a sampling rate of 1000ms but you can apply sampling rate of 500ms for particular browse paths. |
| applyConstraints          | *ApplyConstraint*         | no       | Limit the places in the address space where the device type should be applied.                                                                                                                                                                                                                                                   |

Data structure for *Mapping*

| Field               | Type                  | Mandatory | Description                                                     |
| ------------------- | --------------------- | --------- | --------------------------------------------------------------- |
| name                | string                | no        |                                                                 |
| browsePath          | array<string>         | yes       | The browse path.                                                |
| measurementCreation | *MeasurementCreation* | no        | Mappings for measurement.                                       |
| eventCreation       | *EventCreation*       | no        | Mappings for event.                                             |
| alarmCreation       | *AlarmCreation*       | no        | Mappings for alarm.                                             |
| customAction        | *HttpPostAction*      | no        | Mappings for custom action. Only HTTP POST is supported so far. |

Data structure for *UAMapping*

| Field         | Type              | Mandatory | Description                  |
| ------------- | ----------------- | --------- | ---------------------------- |
| browsePath    | array<string>     | yes       | The browse path.             |
| eventTypeId   | string            | yes       | The event type ID.           |
| attributes    | array<string>     | yes       | Selectable event attributes. |
| eventCreation | *UAEventCreation* | no        | Mappings for event.          |
| alarmCreation | *UAAlarmCreation* | no        | Mappings for alarm.          |

Data structure for *SubscriptionType*

| Field                   | Type                     | Mandatory | Description                                                                                                                                                 |
| ----------------------- | ------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                    | string                   | yes       | Subscription type. Possible values: Subscription, CyclicRead, None.                                                                                         |
| subscription-Parameters | *Subscription-Parameter* | yes/no    | In case the subscription type is *Subscription*, this is required. This defines the OPC UA subscription configuration, e.g. sampling rate, queue size, etc. |
| cyclicReadP-arameters   | *CyclicReadP-arameter*   | yes/no    | In case the subscription type is *CyclicRead*, this is required. This defines the cyclic read configuation, e.g. rate, etc.                                 |

Data structure for *OverriddenSubscription*

| Field            | Type               | Mandatory | Description                                                 |
| ---------------- | ------------------ | --------- | ----------------------------------------------------------- |
| browsePath       | array<string>      | yes       | The browse path.                                            |
| subscriptionType | *SubscriptionType* | yes       | The custom subscription type that overrides the global one. |

Data structure for *ApplyConstraints*

| Field                    | Type               | Mandatory | Description                                                                            |
| ------------------------ | ------------------ | --------- | -------------------------------------------------------------------------------------- |
| matchesServerIds         | array<string>      | no        | Limit the servers by server managed object ID where the device type should be applied. |
| serverObject-HasFragment | string             | no        | Limit the servers by their custom fragment where the device type should be applied.    |
| matchesNodeIds           | array<string>      | no        | Limit the nodes in the server address space where the device type should be applied.   |
| browsePathM-atchesRegex  | string             | no        | Regular expression of the browse paths where the device type should be applied.        |
| serverHasNod-eWithValues | *ServerNodeValues* | no        | Limit the servers which have particular nodes with given values.                       |

Data structure for *MeasurementCreation*

| Field                     | Type          | Mandatory | Description                                                                                                                                   |
| ------------------------- | ------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| type                      | string        | yes       | Measurement type.                                                                                                                             |
| series                    | string        | no        | Measurement series. If this is omitted, it will be automatically generated by the gateway.                                                    |
| unit                      | string        | yes       | Measurement unit.                                                                                                                             |
| fragmentName              | string        | no        | Measurement fragment name. If this is omitted, it will be automatically generated by the gateway.                                             |
| staticFragments           | array<string> | no        | Static fragments that should be populated to the measurement.                                                                                 |
| overriddenP-rocessingMode | string        | no        | Custom processing mode applied to the measurement to be created. Possible values: PERSISTENT, TRANSIENT, QUIESCENT, CEP. Default: PERSISTENT. |

Data structure for *EventCreation*

| Field                     | Type          | Mandatory | Description                                                                                                                             |
| ------------------------- | ------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| type                      | string        | yes       | Event type.                                                                                                                             |
| text                      | string        | yes       | Event text. This event text can be parameterized by the value of the subscribed node by using the placeholder: `${value}`.              |
| staticFragments           | array<string> | no        | Static fragments that should be populated to the measurement.                                                                           |
| overriddenP-rocessingMode | string        | no        | Custom processing mode applied to the event to be created. Possible values: PERSISTENT, TRANSIENT, QUIESCENT, CEP. Default: PERSISTENT. |

Data structure for *AlarmCreation*

| Field                     | Type          | Mandatory | Description                                                                                                                             |
| ------------------------- | ------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| type                      | string        | yes       | Alarm type.                                                                                                                             |
| text                      | string        | yes       | Alarm text.                                                                                                                             |
| severity                  | string        | yes       | Alarm severity. Possible values: WARNING, MINOR, MAJOR, CRITICAL.                                                                       |
| staticFragments           | array<string> | no        | Static fragments that should be populated to the alarm.                                                                                 |
| overriddenP-rocessingMode | string        | no        | Custom processing mode applied to the alarm to be created. Possible values: PERSISTENT, TRANSIENT, QUIESCENT, CEP. Default: PERSISTENT. |

Data structure for *HttpPostAction*

| Field        | Type                | Mandatory | Description                                                                                                                                                                                                                                                                                                                 |
| ------------ | ------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endpoint     | string              | yes       | Endpoint of the HTTP POST request.                                                                                                                                                                                                                                                                                          |
| headers      | map<string, string> | no        | HTTP headers of the HTTP request.                                                                                                                                                                                                                                                                                           |
| bodyTemplate | string              | yes       | Template of the request body. This can be parameterized by the following placeholders:<br/>`${value}`: Data value of the OPC UA node. <br/>`${serverId}`: OPC UA server managed object ID.<br/>`${nodeId}`: ID of the node where the data is coming from.<br/>`${deviceId}`: Managed object ID of the source manage object. |

Data structure for *UAEventCreation*

This has exactly the same fields as *EventCreation*, however the *text* and *type* field can be parameterized with different parameters.

| Field | Type   | Mandatory | Description                                                                                                                                                                                                                                                                             |
| ----- | ------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text  | string | yes       | Event text. This event text can be parameterized by the data value of selected attributes. Put `${i}` to parameterize it by the data value of attribute at index `i`. The index starts from 0. For example, `${0}` to take the first attribute, `${1}` to select second attribute, etc. |
| type  | string | yes       | Event type. This event type can be parameterized by the data value of selected attributes. Put `${i}` to parameterize it by the data value of attribute at index `i`. The index starts from 0. For example, `${0}` to take the first attribute, `${1}` to select second attribute, etc. |

Data structure for *UAAlarmCreation*

This has all the fields as *AlarmCreation* does, however the *text* and *type* field can be parameterized with different parameters.

| Field            | Type                | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text             | string              | yes       | Alarm text. This alarm text can be parameterized by the data value of selected attributes. Put `${i}` to parameterize it by the data value of attribute at index `i`. The index starts from 0. For example, `${0}` to take the first attribute, `${1}` to select second attribute, etc.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| type             | string              | yes       | Alarm type. This alarm type can be parameterized by the data value of selected attributes. Put `${i}` to parameterize it by the data value of attribute at index `i`. The index starts from 0. For example, `${0}` to take the first attribute, `${1}` to select second attribute, etc.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| severityMappings | map<string, string> | no        | Alarm severity mappings from the OPC UA event severity to the Cumulocity alarm severity. The key of this map is the lower bound value of the OPC UA event severity in the range. The value of this map is the mapped severity of the alarm being created.<br/>If this is given, it will override the alarm severity mappings that are specified in the configuration yaml file for this particular alarm and the field *severity* of this alarm mapping becomes optional.<br/>Please note that, if the *severity* field for this alarm mapping is provided, this *severityMappings* will have no effect.<br/>***Example***: `"201": "WARNING",<br/>"401": "MINOR",<br/>"601": "MAJOR",<br/>"801": "CRITICAL".<br/>`. |

Data structure for *SubscriptionParameter*

| Field             | Type    | Mandatory | Description                                                                                                                                                                                       |
| ----------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| samplingRate      | integer | yes       | Subscription sampling rate in milliseconds. Minimum allowed value is 50.                                                                                                                          |
| deadbandType      | string  | no        | Possible values: Percent, Absolute.                                                                                                                                                               |
| deadbandValue     | double  | no        | If the *deadbandType* is *Percent*, this ranges from 0 to 100. If the *deadbandType* is *Absolute*, this can be any double value.                                                                 |
| queueSize         | integer | no        | Subscription queue size.                                                                                                                                                                          |
| dataChangeTrigger | string  | no        | Default value is StatusValue. Possible values: Status, StatusValue, StatusValueTimestamp.                                                                                                         |
| discardOldest     | boolean | no        | Default is true. When this is true and the reported data is exceeding the queue size, the oldest elements in the queue will be discarded. If this is false, the newer elements will be discarded. |
| ranges            | string  | no        | When the subcribed node is array type, you can provide the data range you want to get. For example: *"0:3"* to get elements from index 0 to 3 from the array.                                     |

Data structure for *CyclicParameter*

| Field | Type    | Mandatory | Description                                                    |
| ----- | ------- | --------- | -------------------------------------------------------------- |
| rate  | integer | yes       | Cyclic read rate in milliseconds. Minimum allowed value is 50. |

Data structure for *ServerNodeValues*

| Field      | Type                | Mandatory | Description                                                          |
| ---------- | ------------------- | --------- | -------------------------------------------------------------------- |
| matchAll   | array<MatchingNode> | no        | A collection of conditions and they must all be matched.             |
| matchOneOf | array<MatchingNode> | no        | A collection of conditions and at least one of them must be matched. |

Data structure for *MatchingNode*

| Field             | Type          | Mandatory | Description                                                                                                                                                        |
| ----------------- | ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nodeId            | string        | yes       | The node ID to match against.                                                                                                                                      |
| valueMatchesOneOf | array<string> | no        | A collection of possible values of the node, in string representation. If this is omitted, the gateway only checks for the existence of the node by given node ID. |

##### 

##### Updating a device type

Endpoint: `PUT /service/opcua-mgmt-service/device-types/{deviceTypeId}`

Payload: The payload of updating a device type is exactly the same as the payload of creating it. Please note that partial update is not supported. All information must be provided in the update request and will completely override the existing device type.

##### Deleting a device type

Endpoint: `DELETE /service/opcua-mgmt-service/device-types/{deviceTypeId}`

Success response: `204 No Content`

### Operations

Cumulocity IoT operations is the interface that is used to tell the gateway what to do and how to do it. This section describes all operations that are currently supported by the gateway.

#### Scanning the address space

This operation triggers importing address space for a specific OPC-UA server. The server’s ID is passed as a device ID. The gateway will scan the entire address space of the server and persist a twinned representation of the address space in the Cumulocity IoT platform.

```
POST /devicecontrol/operations/

{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_ScanAddressSpace": {
            “skipSync”: false
        },
    "description": "Import address space from root node"
}
```

The twinned address space information is persisted in the Cumulocity IoT inventory. It is internally used to support address space browsing and to define device protocols. Hence this operation is always triggered if a new server is added to the platform.

Once the device gateway knows the address space, it uses it to handle different logics, for example applying device protocols to nodes. So if you already have the address space scanned once and stored in Cumulocity IoT, you might want the device gateway to learn one more time about server’s address space without synchronizing data into Cumulocity IoT. To achieve that, provide “skipSync”: true.

> **Info:** We do not recommend to directly work with the persisted address space data structures in the Cumulocity IoT inventory, as these might change in the future. Use the endpoints of the management service to interact with the OPC UA address space.

#### Reading the value of a node/nodes

This operation reads the value attribute of specific node or list of nodes.

```
POST /devicecontrol/operations/

{
    "deviceId" : "<server-device-Id>",
    "c8y_ua_command_ReadValue": {
    "nodes": ["NODE_ID"],
     “timestampsToReturn”: “Neither”   
    },
    "description":"read value"
}
```

Other possible values for `timestampsToReturn`: “Source”, “Server” or “Both”.

The result of this operation will contain output in the following format:

```json
{
    "results": {
        "ns=2;s=MyLevel": {
            "13": {
                "value": {
                    "value": 77.0
                },
                "statusCode": 0,
                "sourcePicoseconds": 0,
                "serverPicoseconds": 0
            }
        }
    }
}
```

#### Reading all attributes of a node

This operation returns all attributes of specific node.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_ReadNodeAttributes": {
        "node": "ns=2;s=MyEnumObject"
    },
    "description": "Read node attributes"
}
```

The result may differ depending on the node type.

```json
{
    "Value": {
        "value": 1
    },
    "DataType": "ns=2;s=MyEnumType",
    "ValueRank": -1,
    "AccessLevel": 3,
    "UserAccessLevel": 3,
    "MinimumSamplingInterval": -1.0,
    "Historizing": false,
    "DisplayName": "MyEnumObject",
    "WriteMask": 0,
    "UserWriteMask": 0
}
```

#### Reading an attribute

This operation supports to read one or more attributes of one or more nodes. This includes support of the range parameter to read a single element or a range of elements when the attribute value is an array.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_ReadAttribute": {
         "nodes": ["ns=3;s=FloatArray"],
         "attribute":"13"
    }
    "description": "Read attribute from ns=3;s=FloatArray",
}
```

The result may differ depending on the node type.

```json
{
    "results": {
        "ns=3;s=FloatArray": {
            "13": {
                "value": {
                    "value": [1.0, 2.0, 3.0, 4.0, 5.0]
                },
                "statusCode": 0,
                "sourceTimestamp": 1566572540173,
                "sourcePicoseconds": 0,
                "serverTimestamp": 1566573849897,
                "serverPicoseconds": 0
            }
        }
    }
}
```

The index ranges given below are according to the OPC UA specifications and will be transformed to NumericRange.

The syntax is as following:

```
    NumericRange: <dimension> [',' <dimension>]
    <dimension>: <index> [':' <index>]
```

```json
{
    "description": "Read attribute from ns=3;s=FloatArray",
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_ReadAttribute": {
         "nodes": ["ns=3;s=FloatArray"],
         "attribute":"13",
         "ranges":"0:1"
    }
}
```

The result may differ depending on the node type.

```json
{
    "results": {
        "ns=3;s=FloatArray": {
            "13": {
                "value": {
                    "value": [1.0, 2.0]
                },
                "statusCode": 0,
                "sourceTimestamp": 1566572540173,
                "sourcePicoseconds": 0,
                "serverTimestamp": 1566574513935,
                "serverPicoseconds": 0
            }
        }
    }
}
```

#### Historic read

This operation reads history values and applies the mappings except of alarm mappings.

```json
{
    "deviceId": "<server-device-Id>",    
    "c8y_ua_command_HistoricReadOperation": {
        "nodeId": "ns=2;s=MyLevel",
       "processMappings": true,
        "dateFrom": "2019-06-13T10:43:00+02:00",
        "dateTo": "2019-06-13T10:52:00+02:00",
        "tagType": "TAG"
    },
    "description": "Historic read"
}
```

- tagType - Possible tagType values are “TAG” and “NO_TAG”. "TAG" appends “_Historic” for both the mapping types and for the measurement mappings.
- processMappings (optional) - by default the value is true. If the value is false then the values will not be processed based on the device protocol mapping.

#### Historic data binary upload

his operation reads historic values and only saves those values to a file which can be retrieved using the binary API.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_HistoricDataUploadOperation": {
        "nodeId": "ns=2;s=MyLevel",
        "dateFrom": "2019-01-03T09:53:00+02:00",
        "dateTo": "2019-06-13T18:53:00+02:00",
        "chunkSize": 1,
        "compress": true
    },
    "description": "Upload history data"
}
```

The binary file representations, which can be queried using binary API, are created with the type “c8y_ua_HistoricData” and an operationId with the value of the operation with which it has been generated.

#### Write value

This operation writes values to the node/nodes.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_WriteValue": {
        "values": {
            "ns=3;s=LocalizedText": {
                "value": "This is a localized text"
            },
            "ns=3;s=Double": {
                "value": "3.14159"
            }
        }
    },
    "description": "Write values to different nodes"
}
```

#### Write attribute

This operation is similar to the previous one, but instead of writing to the value attribute, this operation writes attributes’ values to any writable attributes. The following example writes two different attributes to two different nodes.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_WriteAttribute": {
        "values": {
            "ns=3;s=LocalizedText": {
                "attribute": "13",
                "value": "This is a localized text"
            },
            "ns=3;s=Double": {
                "attribute": "13",
                "value": "3.14159"
            }
        }
    },
    "description": "Write attributes’ values to different attributes of different nodes"
}
```

Optionally, it is possible to write a value range when the attribute value is an array.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_WriteAttribute": {
        "values": {
            "ns=3;s=FloatArray": {
                "attribute": "13",
                "ranges": "0:1",
                "value": "2.0,4.0"
            }
        }
    },
    "description": "Write attribute value to array attribute"
}
```

#### Get method description

This operation reads the description of a method node.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_GetMethodDescriptionOperation": {
        "nodeId": "ns=2;s=MyMethod"
    },
    "description": "get method description"
}
```

The result describes a method, it’s parent object, input and output arguments.

```json
{
    "nodeId": "ns=2;s=MyMethod",
    "name": "MyMethod",
    "parentNodeId": "ns=2;s=MyDevice",
    "parentName": "MyDevice",
    "inputArguments": [{
            "name": "Operation",
            "description": "The operation to perform on parameter: valid functions are sin, cos, tan, pow",
            "dataType": "String",
            "dataTypeId": "i=12"
        },
        {
            "name": "Parameter",
            "description": "The parameter for operation",
            "dataType": "Double",
            "dataTypeId": "i=11"
        }
    ],
    "outputArguments": [{
        "name": "Result",
        "description": "The result of 'operation(parameter)'",
        "dataType": "Double",
        "dataTypeId": "i=11"
    }]
}
```

#### Get method

This operation calls the method on the OPC UA server. It requires complete input arguments with an additional “value” fragment.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_CallMethodOperation": {
        "request": {
            "nodeId": "ns=2;s=MyMethod",
            "arguments": [{
                    "name": "Operation",
                    "description": "The operation to perform on parameter: valid functions are sin, cos, tan, pow",
                    "dataType": "String",
                    "dataTypeId": "i=12",
                    "value": "pow"
                },
                {
                    "name": "Parameter",
                    "description": "The parameter for operation",
                    "dataType": "Double",
                    "dataTypeId": "i=11",
                    "value": "5"
                }
            ]
        }
    },
    "description": "call method"
}
```

The result contains all output arguments with values set by the OPC UA server.
Power of 5 is 25:

```json
{
    "statusCode": 0,
    "result": [{
        "name": "Result",
        "description": "The result of 'operation(parameter)'",
        "dataType": "Double",
        "dataTypeId": "i=11",
        "value": "25.0"
    }]
}
```

#### Testing a device type against a node on an OPC UA server

This operation allows for testing a device type against a specific node on an OPC UA server. The operation result provides diagnostic information if the device type could be applied:

```json
{
   "deviceId":"<server-device-Id>",
   "c8y_ua_command_TestDeviceTypeMatching":{
      "deviceTypeId":"<device-type-id>",
      "rootNodeId":"<node-id>"
   },
   "description":"Test Device Type"
}
```

If the device type can be applied to the given node, the operation result confirms this:

```json
{
   "creationTime":"2020-08-20T12:28:57.973Z",
   "deviceId":"12789",
   "deviceName":"Test Server",
   "id":"15478",
   "status":"SUCCESSFUL",
   "c8y_ua_command_TestDeviceTypeMatching":{
      "deviceTypeId":"14989",
      "rootNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic2"
   },
   "c8y_Command":{
      "result":"{\n  \"matches\": true\n}"
   },
   "description":"Test Device Type"
}
```

Otherwise, the operation result provides an explanation why the device type could not be matched to the given root node:

```json
{
   "creationTime":"2020-08-20T12:34:01.524Z",
   "deviceId":"12789",
   "deviceName":"Milo Reloaded",
   "id":"15688",
   "status":"SUCCESSFUL",
   "c8y_ua_command_TestDeviceTypeMatching":{
      "deviceTypeId":"14989",
      "rootNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic9"
   },
   "c8y_Command":{
      "result":"{\n  \"matches\": false,\n  \"reason\": \"Does not match browse path regex constraint, constraints: (.*Dynamic[1-3]), actual: [[http://opcfoundation.org/UA/:Root, http://opcfoundation.org/UA/:Objects, urn:cumulocity:opcua:test:server:Dynamic Playground, urn:cumulocity:opcua:test:server:Dynamic9]]\"\n}",
      "syntax":null,
      "text":null
   },
   "description":"Test Device Type"
}
```

#### Analyzing the set of nodes to which a device type can be applied (dry run)

As explained earlier, the Cumulocity IoT OPC UA gateway performs an auto-discovery to determine the set of nodes that match a certain device protocol ("device type"). The following operation performs an auto-discovery for the given device protocol on the server, without actually applying it to any node ("dry run"):

```json
{
   "deviceId":"<server-device-Id>",
   "c8y_ua_command_DryRunDeviceTypeMatching":{
      "deviceTypeId":"<device-type-id>"
   },
   "description":"Dry Run Device Type"
}

```

The `deviceTypeId` is the ID of the managed object containing the device protocol.

The result of the operation contains the set of nodes that match the device protocol. In addition to that, the fragment `matchednodes` is added to the operation. It contains a JSON representation of the matched nodes.

```json
{
   "creationTime":"2020-08-20T12:22:07.947Z",
   "deviceId":"12789",
   "deviceName":"Test Server",
   "id":"15187",
   "status":"SUCCESSFUL",
   "c8y_Command":{
      "result":"Device protocol is currently disabled. Device protocol would be applied to the following nodes: [\n  {\n    \"nodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic2\",\n    \"deviceTypeId\": \"14989\",\n    \"mappedTargetNodes\": [\n      {\n        \"browsePath\": [\n          \"urn:cumulocity:opcua:test:server:Double\"\n        ],\n        \"targetNodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double2\"\n      }\n    ],\n    \"attrs\": {}\n  },\n  {\n    \"nodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic1\",\n    \"deviceTypeId\": \"14989\",\n    \"mappedTargetNodes\": [\n      {\n        \"browsePath\": [\n          \"urn:cumulocity:opcua:test:server:Double\"\n        ],\n        \"targetNodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double1\"\n      }\n    ],\n    \"attrs\": {}\n  },\n  {\n    \"nodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic3\",\n    \"deviceTypeId\": \"14989\",\n    \"mappedTargetNodes\": [\n      {\n        \"browsePath\": [\n          \"urn:cumulocity:opcua:test:server:Double\"\n        ],\n        \"targetNodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double3\"\n      }\n    ],\n    \"attrs\": {}\n  }\n]",
      "matchedNodes":[
         {
            "mappedTargetNodes":[
               {
                  "targetNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double2",
                  "browsePath":[
                     "urn:cumulocity:opcua:test:server:Double"
                  ]
               }
            ],
            "deviceTypeId":"14989",
            "nodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic2"
         },
         {
            "mappedTargetNodes":[
               {
                  "targetNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double1",
                  "browsePath":[
                     "urn:cumulocity:opcua:test:server:Double"
                  ]
               }
            ],
            "deviceTypeId":"14989",
            "nodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic1"
         },
         {
            "mappedTargetNodes":[
               {
                  "targetNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double3",
                  "browsePath":[
                     "urn:cumulocity:opcua:test:server:Double"
                  ]
               }
            ],
            "deviceTypeId":"14989",
            "nodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic3"
         }
      ],
      "syntax":null,
      "text":null
   },
   "description":"Dry Run Device Type",
   "c8y_ua_command_DryRunDeviceTypeMatching":{
      "deviceTypeId":"14989"
   }
}
```

### Troubleshooting

#### Permission denied error when running the gateway JAR file on a Linux OS

![Permission denied](/images/users-guide/opcua/opcua-permission-denied-error.png)

If the following error appears,  add a baseDir property to the YAML file. For example:

```
db:
  baseDir: ${user.home}/.opcua/profile/data
```

#### Unknown host exception when running the gateway JAR

This error appears if the provided baseUrl property in the YAML file is incorrect.

#### Failed to load property source from location when running the gateway JAR

The following error appears if the indentation of the properties in the YAML file is incorrect.

![Failed to load](/images/users-guide/opcua/opcua-failed-to-load.png)

#### java.net.BindException: Address already in use

![Address in use](/images/users-guide/opcua/opcua-address-in-use.png)

If this error appears, a Java process is running in the background. To fix this issue, the process must be stopped/killed.
