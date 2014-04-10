The power of the Cumulocity platform is best shown by describing how easy it is to develop an end-to-end solution. The following sections will walk through the steps needed to implement an Agent that can connect to a real smart energy meter concentrator device (developed by Multiprocessor Systems Ltd., of Bulgaria) and a web application that can be used to view the data uploaded from the agent and interact with the device.

The guide is divided into four sections:

1.  Installing the example
2.  Understanding the agent
3.  Understanding the application
4.  Running the end-to-end example

The example uses an emulator in place of the real device.

To run this end-to-end example, you will need access to the Cumulocity platform. The example also relies on the Cumulocity SDK. To install the SDK, see [Installing the SDK](guides/developers-guide/installing-the-sdk).

For more information about writing Agents see the section called [Developing Java clients](guides/developers-guide/developing-java-clients). If you are unclear about the role of the Agent in Cumulocity please familiarise yourself with the section titled "[Interfacing with M2M data sources](guides/concepts-guide/interfacing-with-m2m-data-sources)".

For more information about writing web applications see the section titled [Developing web clients](guides/developers-guide/developing-web-clients).??

# Installing the example

To install the agent example code in the SDK:

1.  [Download the zip file](https://bitbucket.org/m2m/cumulocity-examples/get/tip.zip) with the example code.
2.  Unpack it in an Eclipse Workspace and start Eclipse.
3.  In Eclipse, click "File" ?? "New" ?? "Project..."??and select "Java Project" in the New Project Wizard.
4.  Deselect "Use default location" and select??"Browse...". Choose the "mps-energy-agent" folder from the unpacked zip file.
5.  Click "Finish".
6.  Right-click on the project in the "Package Explorer"???? "Configure"???? "Convert to Plug-in Projects...".
7.  Make sure the project is selected and click "Finish".

To install the application example code, repeat the above steps, but choose the "mps-energy-app" folder in step 4.

The projects should compile without errors. If error messages appear, check you are using the "Cumulocity runtime" as "Target Platform" ("Preferences" ?? "Plug-in Development" ?? "Target Platform"), as decribed in the section??[Installing the SDK](guides/developers-guide/installing-the-sdk).

If you encounter other errors see the section on??[Troubleshooting the SDK](guides/developers-guide/troubleshooting-the-sdk).

# Understanding the agent

Since the Cumulocity APIs are ReST interfaces using JSON then agents can be written using any language or framework that supports those technologies. However, the Cumulocity Agent Java SDK is designed to make writing Agents very simple, and is the recommended approach - particularly if you are new to Cumulocity development.

This guide will explain the most important concepts to understand when writing an Agent and will use code snippets from the example Agent for illustration.

## Architecture of a typical Agent

The example Agent is typical of many Agents in the M2M domain. It performs the following steps, each of which will be explained in detail in the following sections:

-   Read Configuration - the Agent requires configuration parameters in order to function. Some of these parameters are predefined in a configuration file, others are downloaded from the Cumulocity platform
-   Startup Actions - after launching, the Agent will perform a number of Startup Actions. These include connecting to the physical device, initiating communication with the Cumulocity Platform and handling inventory updates
-   Periodic Actions - the Agent periodically performs a number of Periodic Actions. These include listing devices to which the Agent should connect, uploading measurements, executing operations requested by platform etc.
-   Device Lookup - query the platform for the list of devices to which the Agent should connect
-   Uploading Measurements - the Agent is connected to an electricity sensor that regularly produces reading. These are translated into the Cumulocity Measurement format and uploaded to the platform
-   Device Control Operations - devices may be controlled remotely via commands sent from the platform to the Agent. The Agent needs to translate these commands into the format required by the device.

More complex Agents may handle events, such as when a door is opened or closed, or may deal with fault conditions, such as loss of communication with a device. The example Agent does not include these functions, but the SDK provides classes to help with many other functions required by Agents. Check the SDK JavaDocs for more information.

## Core Classes

There are three core classes that each Agent needs and which will be referred throughout this guide:

-   "Platform" - this class is responsible for connecting to the Cumulocity platform and handling authentication. It provides handles for accessing the different Cumulocity APIs. This class is provided by the SDK.
-   "Agent" - this abstract class represents the Agent itself. It can store the global ID of the Agent and hold a representation of it after connecting to the platform. The concrete class used in the example Agent is an instance of the SDK class??"AbstractDevicesManagingAgent" which adds the ability to poll for device control operations (see [Device Control Operations](#deviceControl)).
-   "AgentActionsController" - an SDK class that controls execution of the [startup actions](#startupActions) and the periodic actions ([uploading measurements](#uploadingMeasurements) and [device control](#deviceControl)).

## Configuring the Agent

The example Agent is configured in two ways:

1.  Local configuration file: there is a local configuration file that defines the platform connection parameters (platform host, tenant name, username, password and application key), the ID of the Agent and some properties for the measurement poller
2.  Remote configuration: the URL defining the location of the device to be managed by the Agent is downloaded from the platform

In addition, the level of logging information can be configured using a "logback.xml" file as defined in the??[Developing Java clients](index.php?option=com_k2&view=item&id=819)??guide.

### Local Configuration File

There are two local configuration files:

1.  "Context" file: An XML file that defines the launch configuration of the Agent - which classes are to be used, which tasks to perform, etc.??
2.  "Properties" file: a plain text file that contains runtime configuration parameters.

The Context file is located in the META-INF/spring folder and is automatically picked up by the SDK runtime.??The contents of this file are described in the following sections of this guide.

The Context file contains the location of the Properties file:

    <context:property-placeholder location="classpath:META-INF/mps.agent.properties" system-properties-mode="OVERRIDE" />

The Properties file is a simple text file that contains parameters needed during runtime:

    cumulocity.host=?sandbox URL?
    cumulocity.tenant=?tenant id?
    cumulocity.user=?user?
    cumulocity.password=?password?
    cumulocity.applicationKey=?application_key?
    agent.external.id=agent1
    agent.scheduler.pool.size=1
    agent.sheduler.fixed.delay=30000

These properties are assigned to the [core Agent classes](#coreClasses) in the Context configuration file, as follows:

"Platform" is configured with the credentials of the platform:

    <bean id="platform"
      class="com.cumulocity.sdk.client.platform.PlatformImpl"
      p:host="${cumulocity.host}"
      p:tenantid="${cumulocity.tenant}"
      p:user="${cumulocity.user}"
      p:password="${cumulocity.password}"
      p:applicationKey="${cumulocity.applicationKey"} />

"Agent" is configured with the external ID of the Agent (must match the external ID configured in the platform for this Agent):

    <bean id="agent"
      class="com.cumulocity.agents.mps.model.MpsAgent"
      p:externalid="${agent.external.id}" />

"AgentActionsController" is configured with the period between periodic updates and chains of startup and periodic actions:

    <bean id="agentController"
      class="com.cumulocity.sdk.agent.action.AgentActionsController"
      p:startupChain-ref="startupChain"
      p:cyclicChain-ref="cyclicChain"
      p:cyclicChainDelay="${agent.sheduler.fixed.delay}" />

## Logging Configuration File

Logging can be configured as described in [Logging Configuration section](index.php?option=com_k2&view=item&id=819#LoggingConfiguration). The following file configures logging so that only warnings and errors are reported from third-party libraries, additional information messages are reported from the Cumulocity libraries and additional debug messages are reported from the example agent:

    <configuration>
      <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
          <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
      </appender>
      <logger name="com.cumulocity.agents.mps" level="debug"/>
      <logger name="com.cumulocity" level="info"/>
      <root level="warn">
        <appender-ref ref="STDOUT" />
      </root>
    </configuration>

## Startup Actions

After launch, the example Agent connects to the Cumulocity platform and obtains its globally unique identifier (GId) based on its external identifier ("agent.external.id"). Once the Agent has its GId it is able to make requests on the platform.??

Note that if the connection credentials specified in the Properties file are incorrect the Agent will not be able to connect.

This task is performed by the SDK class??"AgentGidLookupAction" and is defined using the Context file:

    <bean id="agentController"
      class="com.cumulocity.sdk.agent.action.AgentActionsController"/>
    <bean id="startupChain"
      class="com.cumulocity.sdk.agent.action.AgentActionsChain"
      p:actions-ref="startupActionsList" />
    <util:list id="startupActionsList">
      <bean class="com.cumulocity.sdk.agent.action.AgentGidLookupAction" />
    </util:list>

The GId is stored in the "Agent" instance and can be accessed via the "getGlobalId()" method.

The second task performed at startup is to connect to the platform and, using the GId obtained above, download the Agent representation from the platform. This task is performed by the SDK class??"RepresentationLookupAction" and is also configured in the Context file:

    <util:list id="startupActionsList">
      <bean class="com.cumulocity.sdk.agent.action.RepresentationLookupAction" />
    </util:list>

The Agent representation will be stored in the "Agent" instance and can be accessed via the "getAgentRepresentation()" method.

The example Agent will use the agent representation later to determine the device to which it should connect by reading the "childDevices" property of the representation.

Note that neither of these actions require any code to be written, it is enough to add the configuration to the Context file.

## Device Lookup

The example Agent downloads the device list and device properties from the platform (other agents may auto-discover devices and upload this inventory to the platform, or there may be a mixture of the two).

This task is performed periodically along with the [upload measurements](#uploadingMeasurements) task and the [device control task](#deviceControl). Periodic tasks are defined in the Context file:

    <bean id="cyclicChain"
      class="com.cumulocity.sdk.agent.action.AgentActionsChain"
      p:actions-ref="cyclicActionsList" />
    <util:list id="cyclicActionsList">
      <bean class="com.cumulocity.agents.mps.action.ChildDevicesLookupAction" />
    </util:list>

As defined in the Context file, the class that performs the device lookup is the "ChildDevicesLookupAction" class. This class is specific to this Agent, because the knowledge about the devices and which properties they support is domain knowledge.

Every time the task runs the list of devices held by the "Agent" class is updated. Note that the GId of the Agent is used to find the devices associated with that Agent.

     @Override
        public void run() {
            ...
           agent.setDevices(findChildDevicesForParent(agent.getAgentRepresentation()));
        }

"findChildDevicesForParent()" downloads the representation of each device from the platform as follows:

1.  Loop through each child configured on the Agent
2.  For each child device, get its ID from the platform:
3.  then, using that ID, get its full representation:
4.  from the representation, get the Fragment, "MpsDevice", containing the meter number. MpsDevice is a class that has logic specific to the "MpsDevices". In particular, it can construct the URLs of the measurement and control APIs of the MPS ReST interface:
5.  Once we have the device, we then get its parent bridge to discover the root URL for accessing that device. "MpsBridge" is a class that has logic specific to the MPS bridge device. In particular it stores the root URL for the MPS concentrator:
6.  Next, the device is added to the list of known devices:
7.  And finally, recursion is used to descend the tree of devices in case there are more devices to connect:

## Uploading Measurements

The second periodic task to be performed is to query the electricity meters for readings and upload them to the platform. This task requires a list of devices so the [device lookup](#deviceLookup) task must be performed first.

There are three classes involved in this task:

-   "MpsDeviceDriver" - this class needs to understand the API of the MPS meter and the format of the readings and so is very specific to this Agent. It is responsible for??translating the readings into ThreePhaseElectricityMeasurements (see the??[Sensor Library](/guides/reference-guide/sensor-library)). This class is also responsible for other tasks related to controlling devices, which are described in next section.
-   "ObtainDeviceMeasurementsAction"??- this is an SDK class, which is using specific for device driver to read the measurements from the devices.
-   "UploadDeviceMeasurementsAction"??- this SDK class takes a list of measurements in the Cumulocity format (see the Measurements API) and uploads them to the platform.

These tasks are added to the list of periodic actions, after the "ChildDeviceLookupAction":

    <bean id="deviceDriver"
      class="com.cumulocity.agents.mps.driver.MpsDeviceDriver" />
    <util:list id="cyclicActionsList">
      <bean class="com.cumulocity.agents.mps.action.ChildDevicesLookupAction" />
      <bean class="com.cumulocity.sdk.agent.action.ObtainDeviceMeasurementsAction"
        p:deviceDriver-ref="deviceDriver" />
      <bean class="com.cumulocity.sdk.agent.action.UploadDeviceMeasurementsAction" />   
      ...
    </util:list>

The "MpsDeviceDriver"??class is the most complex class in the example Agent, but most of that complexity is in dealing with the specifics of converting an MPS-style measurement into a Cumulocity measurement.??"MpsDeviceDriver" implements the SDK interface "DeviceDriver", whose responsibility is to iterate through each device and load its measurements. The measurements are then added to a list for further processing by??"UploadDeviceMeasurementsAction".

"DeviceDriver" interface has a method??"loadMeasurementsFromDevice()". This method must be implemented in the concrete??"MpsDeviceDriver" class. In this case it creates a "WebResource" and connects to the MPS meter over ReST to get the latest measurements. The details of converting between measurements will not be discussed here.

      @Override
      protected List<measurementrepresentation> loadMeasuremntsFromDevice(MpsDevice device) 
      { 
        ClientResponse response = getWebResource(device.getMeasurementsUrl()).get(ClientResponse.class); 
        ... 
        return parseMeasurementClientResponse(device.getGlobalId(), response); 
        ... 
      }??

## Device Control Operations

The final periodic task is to connect to the Cumulocity platform and check for any pending remote control operations. Connecting and downloading of operations is handled by the SDK class "ObtainDeviceOperationsAction". The execution of the operation is specific to the Agent, and so is handled by the specific class "MpsDeviceDriver"??(see above) together with SDK class??"ExecuteDeviceOperationsAction".

These tasks complete the list of periodic operations:

    <util:list id="cyclicActionsList">
      <bean class="com.cumulocity.agents.mps.action.ChildDevicesLookupAction" />
      <bean class="com.cumulocity.sdk.agent.action.ObtainDeviceMeasurementsAction"
        p:deviceDriver-ref="deviceDriver" />
      <bean class="com.cumulocity.sdk.agent.action.UploadDeviceMeasurementsAction" />
      <bean class="com.cumulocity.sdk.agent.action.ObtainDeviceOperationsAction" />
      <bean class="com.cumulocity.sdk.agent.action.ExecuteDeviceOperationsAction"
        p:deviceDriver-ref="deviceDriver" />
    <util:list>

There are two interface methods related to executing operations: "isOperationSupported()" and "handleSupportedOperation()". "isOperationSupported()" returns true if the class knows how to handle the given operation. This Agent knows how to handle just the "Relay" operation:????

        @Override
        protected boolean isOperationSupported(OperationRepresentation operation) {
            if (operation.get(Relay.class) == null) {
                ...
                return false;
            }
            return true;
        }

The responsibility of the method "handleSupportedOperation()" is to execute the actual operation, which in this case means connecting to the real device and triggering the relay to open or close:

        @Override
        public void handleSupportedOperation(OperationRepresentation operation) throws DeviceException {
            Relay relay = operation.get(Relay.class);
            RelayState relayState = relay.getRelayState();
            ...
            
                    MpsDevice device = agent.getDevice(operation.getDeviceId());
                    ...
                    executeRelayOperationOnDevice(device, relayState));
            
                    addEventToPlatform(operation.getDeviceId(), relayState);
             }

This method first gets the "Relay" fragment and, from there, the requested state of the relay. The device to be operated upon is also obtained from the operation then the "executeRelayOperationOnDevice()" method is called to do the actual API call on the MPS device. If the operation succeeded then this Agent updates the platform with the new state using an event, via the "addEventToPlatform??"method:

        private void addEventToPlatform(GId deviceId, RelayState relayState) throws DeviceException {
                MpsRelayEvent event = new MpsRelayEvent(deviceId, relayState);
                ...
                  platform.getEventApi().create(event);
          }

## Summary of the Agent

Many agents perform the same generic tasks. This common behaviour is captured in the SDK Agent framework library.??

A "Context" XML file is used to specify the classes to be used and the order in which to use them (if you have used the [Spring](http://www.springsource.org/) framework before you may recognise this file as a Spring configuration file). In this way it is possible to define the behaviour of an Agent without writing any code.

Overall the example Agent requires just:

-   A class to lookup MPS devices
-   A class to read measurements from the MPS devices??and to control the relay on the MPS device, and
-   four bean classes to hold properties specific to the MPS concentrator and its devices.

# Understanding the application

## Explore the example application

Open the "com.cumulocity.energyapp" project in Eclipse. The example application is implemented according to the popular "Model-View-Controller" design pattern. Besides the main "index.html" file, the project contains three additional JavaScript files:

-   "app.js" provides the main application.
-   "app/view/Energy.js" creates the widgets in the user interface and determines their layout.
-   "app/controller/Energy.js" contains the interaction logic of the user interface. For example, when the user selects a new meter, the graph with the readings from the meter is updated.

The following sections will explain the example application code in detail. For more information, please refer to [Developing web clients](index.php?option=com_k2&view=item&id=817)??guide.

## The main HTML file

The main "index.html" file is structured in the same way as in the [Hello world!](index.php?option=com_k2&view=item&id=818)??application. It mainly includes the user interface libraries and style sheets of Cumulocity as well as APP-KEY value (the X-Cumulocity-Application-Key is the unique key to identify an application sending request and its privileges). The application code is contained within the "app.js" file.

## The main application

The "app.js" application assembles the user interface from the ready-made user management and inventory components and the new energy application (see the "tabs" in the screenshot above). Hence, it depends on the inventory application ("C8Y.ux.InventoryManagementPanel"), the user management application ("C8Y.ux.AdministrationPanel") and the new energy user interface ("APP.view.Energy"). It also requires Header and Footer for the page. This dependency is described by the first lines:

    Ext.require([    'C8Y.ux.InventoryManagementPanel',    'C8Y.ux.AdministrationPanel',    'APP.view.Energy',    'C8Y.app.neutral.Header',    'C8Y.app.neutral.Footer']);

The functionality for login, header and footer of the web application is provided by "C8Y.application". The application also provides interaction with the user, so a controller is defined, which referes to the file "app/controllers/Energy.js":

    controllers : ['Energy'],

The actual user interface components are specified. These will be visible as "tabs" in the application header:

    items : [
      {
        xtype       : 'energypanel',
        menuOption  : 'Energy',
        iconCls     : 'iconGraph'
      }, {
        xtype       : 'c8yinventorymanagement',
        iconCls     : 'iconInventory',
        menuOption  : 'Inventory'   
      }, {
        xtype       : 'c8yadministrationpanel',
        menuOption  : 'Administration',
        iconCls     : 'iconManagement'
      }
    ]

## The widgets and their layout

The "app/view/Energy.js" file defines the top-level widget of the energy application and its contents. The top-level widget ("APP.view.Energy") is a sub-class of an ExtJS panel ("Ext.panel.Panel", a general-purpose container for other widgets):

    Ext.define('APP.view.Energy', {
      extend : 'Ext.panel.Panel',
      alias    : 'widget.energypanel',
      requires : [
        'C8Y.ux.InventoryTree',
        'C8Y.ux.MeasurementGraph',
        'C8Y.ux.plugin.Panel',
        'C8Y.ux.DeviceControlPanel'
      ]

The panel uses an inventory tree, a measurement graph and a device control panel (see the screenshot). The component is initialized with these three widgets and the parent constructor is invoked:

    initComponent : function() {
      this.layout = 'border';
      this.bodyStyle="background:transparent;";
      this.items = this.buildItems();
      this.callParent();
    },

The actual "buildItems()" function starts with the inventory tree ('c8yinventorytree'), that is positioned on the left ("west") side of the user interface. The measurement graph ('c8ymeasurementgraph') fills the main part of the screen, where it shows the active positive and active negative energy on the three phases of a meter. A device control panel ('c8ydevicecontrolpanel') is docked to the bottom of the graph.

    buildItems : function() {
      return [
        {
          xtype : 'c8yinventorytree',
          itemId : 'mpsTree',
          region : 'west',
          width : 280,
          childType : 'childDevices',
          editable : false,
          plugins : [ 'c8ypanel' ]
        }, {
          xtype : 'c8ymeasurementgraph',
          itemId : 'mpsGraph',
          region : 'center',
          measurementProperty : 'com_cumulocity_model_energy_measurement_ThreePhaseElectricityMeasurement',
          ytitle : 'Energy (kWh)',
          bodyStyle : 'border-top-width: 0 !important;',
          dockedItems : {
            xtype : 'c8ydevicecontrolpanel',
            dock : 'bottom',
            height : 120,
            title : 'Device Control'
          },
          series : [
            { type : 'line', yField : 'A+:1' },
            { type : 'line', yField : 'A+:2' },
            { type : 'line', yField : 'A+' },
            { type : 'line', yField : 'A-' }
          ],
          plugins : [ 'c8ypanel' ]
        }
      ]
    }

## The interaction logic

All interaction is defined in the "app/controller/Energy.js" file. It defines a sub-class of "Ext.app.Controller". Whenever an event in the user interface occurs, such as a button click, the controller can react to this event. First, the controller defines references to user interface elements. For example, the following snippet defines "deviceControl" to be a reference to any device control panel inside the energy panel:

    refs : [
      {
        ref: 'deviceControl',
        selector :'energypanel c8ydevicecontrolpanel'
      }
    ]

This decouples the user interface logic from the actual layout of the user interface. No matter where this device control panel is placed (in this case docked to the graph), it can be found through the above reference.

Whenever a user selects a meter in the inventory tree, the graph should be updated with the readings of that meter, and a click on the device control widget should manipulate that meter. This is implemented by the following code:

    init     : function() {  this.control({    'energypanel #mpsTree' : {      selectmo  : this.onSelectMps    }  });},    onSelectMps : function(recordMo) {  var graph = this.getMpsGraph(),      deviceControl = this.getDeviceControl();          graph.loadData({    source : recordMo.get('id')  });  deviceControl.setManagedObject(recordMo);}

The "init" function attaches a listener "onSelectMps" to object selection events of the inventory tree. This listener will get the clicked object as argument and will update the chart and inform the device control widget of the new selection.

Now you are ready to run the full example.

# Running the End-to-End Example

## Configuring the devices on the Platform

The example agent connects to the platform and downloads device details and configuration parameters. The following hierarchy is needed to configure the example (json snippets shown for example only).

![Hierarchy of end-to-end example configuration MOs](images/c8yimages/e2e_example_MOs.png)

If the platform does not contain the device hierarchy then it can be created using the following steps.

1.  Create the Agent Managed Object - look through the ManagedObject that is returned and note down the id

        curl -v -L \
        -d '{"name": "?name of agent?", "type": "?type of agent?", "com_cumulocity_model_Agent": {}}' \
        -H "Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;charset=UTF-8;ver=0.9" \
        -H "X-Cumulocity-Application-Key: ?application key?" \
        -u "?tenant name?/?user name?:?password?" \
        -X POST https://?cumulocity host?/inventory/managedObjects

2.  Add an external ID for the Agent Managed Object (you can define any alphanumeric name for agent external id, but you will need the same id to run agent)

        curl -v -L \
        -d '{"externalId": "?agent external id?", "type": "com_cumulocity_agents_mps_model_MpsAgent"}' \
        -H "Content-Type: application/vnd.com.nsn.cumulocity.externalId+json;charset=UTF-8;ver=0.9" \
        -H "X-Cumulocity-Application-Key: ?application key?" \
        -u "?tenant name?/?user name?:?password?" \
        -X POST https://?cumulocity host?/identity/globalIds/?id of agent?/externalIds

3.  Create Bridge Managed Object, including the URL (deviceUrl) of the real, or emulated bridge (see the [example below](#DeviceURLOfEmulator)??for how to connect to the emulator). Please note that the URL must be entered without the last forward slash ('/')

        curl -v -L \
        -d '{"name": "?name of bridge?", "com_cumulocity_agents_mps_model_MpsBridge": { "deviceUrl": "?URL of bridge?"}}' \
        -H "Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;charset=UTF-8;ver=0.9" \
        -H "X-Cumulocity-Application-Key: ?application key?" \
        -u "?tenant name?/?user name?:?password?" \
        -X POST https://?cumulocity host?/inventory/managedObjects

4.  Add Bridge Managed Object as a child of Agent Managed Object

        curl -v -L \
        -d '{"managedObject":{"self":"https://?cumulocity host?/inventory/managedObjects/?id of bridge?"}}' \
        -H "Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json;charset=UTF-8;ver=0.9" \
        -H "X-Cumulocity-Application-Key: ?application key?" \
        -u "?tenant name?/?user name?:?password?" \
        -X POST https://?cumulocity host?/inventory/managedObjects/?id of agent?/childDevices

5.  Create a device - you may add as many devices as necessary. For real devices, the deviceId should match that of the real meter. The type must be "mpsdevice" in order for it to be shown in the example application. The device id is a real serial number??(as a example you can put any alphanumeric string).

        curl -v -L \
        -d '{"name": "?name of device?", "com_cumulocity_agents_mps_model_MpsDevice": {"deviceId": "?device id?"}, "type": "mpsdevice" }' \
        -H "Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;charset=UTF-8;ver=0.9" \
        -H "X-Cumulocity-Application-Key: ?application key?" \
        -u "?tenant name?/?user name?:?password?" \
        -X POST https://?cumulocity host?/inventory/managedObjects

6.  Add Device Managed Object as a child of the Bridge Managed Object

        curl -v -L \
        -d '{"managedObject":{"self":"https://?cumulocity host?/inventory/managedObjects/?id of device?"}}' \
        -H "Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json;charset=UTF-8;ver=0.9" \
        -H "X-Cumulocity-Application-Key: ?application key?" \
        -u "?tenant name?/?user name?:?password?" \
        -X POST https://?cumulocity host?/inventory/managedObjects/?id of bridge?/childDevices

## Installing and Running the Device Emulator

The emulator is a small Java program that launches a ReST server to emulate the API provided by the MPS concentrator. The easiest way to build and run the emulator is to use [Maven](http://maven.apache.org/)??and the Eclipse [Maven plugin](http://eclipse.org/m2e/). With the Eclipse Maven plugin installed, choose File??Import??Maven??Existing Maven Projects and select the??folder that was created when you downloaded the example source code. There should be one project shown which is "/java/mps-device-emulator/pom.xml". Choose this project and press Finish, and a new project called "mps-device-emulator" should be present in your workspace.

To run the emulator, go to the Eclipse Package Explorer and open the "src/main/java" folder within the emulator project. Open the "com.cumulocity.agents.mps.emulator" package and right-click on "MpsDeviceEmulatorMain.java". Choose Run As??Java Application and the emulator will run. You should see output from the emulator in the Eclipse console window.

By default the emulator listens for requests on port 50000. To change this, right-click on the project name and choose Run As??Run Configurations... . The configuration used in the previous run should already be selected. Choose the "Arguments"??tab and to change the port to, say 8091, add the following argument to the VM arguments panel:

    -Dserver.port=8091

The com\_cumulocity\_agents\_mps\_model\_MpsBridge fragment of the Bridge Managed Object defines the location of the MPS concentrator that the Agent will connect to. To configure the example Agent to use the emulator, change this value on the Cumulocity platform. See step 3 in the section [above](#ConfiguringDevicesOnPlatform) for details on how to add the Bridge fragment. For example, if the emulator is running on your local machine at port 8091 then set the fragment to:

    "com_cumulocity_agents_mps_model_MpsBridge": {
           "deviceUrl": "http://127.0.0.1:8091"
       }

## Running the Agent Project

The Agent must be configured with the credentials of the Cumulocity server it will be connecting to.

Select the Agent project in the Package Explorer and open up the "META-INF" folder. Inside "META-INF", there is a file called "mps.agent.properties". In this file you should set the host, tenant, username, password and application ke" which needs to match the Cumulocity credentials. You should also set "agent.external.id", which matches your platform configuration.

To run the Agent, right-click on the "com.cumulocity.agent.mps" project name and choose: Run As????OSGi framework.

You should see output in the Eclipse console as the agent runs.

Both the agent and the application binds port 8080 by default. If you want to run both of them at the same time, you can add
 "-Djetty.port=?different\_port?"
 to "VM Arguments" in running configuration of one of them.

## Running the Application Project

You have to edit??"index.html" file to define your own application key:
 "var APP\_KEY = "?YOUR\_KEY?""

If you do not have your own tenant, you can use "demo" as the tenant and the application key "uL27no8nhvLlYmW1JIK1CA==".

To run the Application, just open ??index.html?? file in your web browser.

In your web browser you should see a Cumulocity login page. After logging in you should see the energy demo with devices listed on the left-hand panel. Choose a device and you should see a graph of the energy usage uploaded from that device.

As new measurements are uploaded from the Agent you should be able to see them on the graph after clicking the "refresh" button.

You can also change the state of the relay associated with the device by clicking the "Relay" button, choosing a new state, and pressing "Submit Operation". If using the MPS simulator you should see a log message stating: "changing meter relay state to???state?" in the Eclipse console log.

## See it all in action

If you want to see how the example works without installing it yourself, you can point your browser to [https://developer.cumulocity.com/apps/energydemo](https://developer.cumulocity.com/apps/energydemo) and login with tenant "acme", username "john" and password "M8eUjaR7".

After logging in, you will see the available devices on the left. Clicking on one of the meters will update the graph on the right with the measurements from that meter. You can change the date range and click on the "Refresh" button at the top right to get measurements from different time periods.

At the bottom of the screen, you can issue device control actions (i.e., you can turn the relay in the meter on or off, if the meter has a relay). Click on the "Relay" button, select the desired state from the combo box and click on "Submit Operation" button. The device control operation will be submitted to Cumulocity, where the agent will pick it up and execute it on the meter. This can take up to two minutes, because the agent is polling periodically for new device control operations.

Clicking on the "Events" tab (on top left, below the "My Energy" logo) will show the ongoing activities. You may need to refresh the events and/or go to the last page. (Please note that currently, the Energy Application on the Cumulocity examples has "Inventory" and "Administration" tabs instead of "Events" tab.)
