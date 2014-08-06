---
layout: default
title: Cinterion Java modules
---
# Overview

This section describes how to interface the??[Cinterion EGS5 module](http://www.cinterion.com/EGS5)??with Cumulocity. It shows how to download and run an example J2ME agent on the module. The example agent registers the module in the inventory and sends signal strength readings from the module's built-in modem. Finally, the section shows how to modify the example to develop new agent functionality.

Before running the example, please make yourself familiar with the basic concepts of Cumulocity. The Smart Agent for Cinterion closely follows the design of the Java agent, so please examine and run the ["Hello, world!" for Java](index.php?option=com_k2&view=item&id=818) beforehand.

# What is the Cinterion EGS5 module?

The Cinterion EGS5 module is a full featured, open-platform module powered by Java Micro Edition. It comes with 400 KB resp. 1.7 MB (RGS5X) on-board memory and features:

-   LGA 119 pads mounting technology
-   GPRS Class 12 for both 86 kbps in uplink and downlink
-   Quad-Band (850/9000/1800/1900 MHz)
-   Java IMP-NG Virtual Machine open platform
-   TCP/IP over AT
-   USB, I2C, SPI, two serial interfaces
-   Extended temperature range: -40?C to +85?C
-   Radio Link Stability (RLS) monitoring (e.g. for jamming detection)
-   Remote SIM access

![cinterion](images/c8yimages/cinterion.jpg)

# Why to use the Cumulocity Smart Agent for Cinterion?

The Cumulocity Smart Agent for Cinterion provides you with an out-of-the-box cloud connection to Cumulocity.??The Smart Agent provides you with many features to help you making this connection, especially over a mobile network. These features include:

-   Dial-up to mobile network.
-   Support of dynamic and private (NAT) IP adressing.
-   Auto-registration.
-   Data Encryption using SSL.

The smart agent is provided under a business-friendly MIT open source license.

# Installing the Smart Agent for Cinterion

The following is required for application development and deployment:

-   Cinterion EGS5/5x development kit equipped with an activated SIM card.
-   Microsoft Windows OS (XP, Vista or 7).
-   Cinterion USB modem driver installed.
-   Cinterion SDK with its dependencies installed. These are currently:
    -   [JAVA SDK 1.5+ 32-bit](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
    -   [Eclipse 3.3 32-bit](http://www.eclipse.org/downloads/packages/eclipse-ide-java-developers/europawinter).
    -   [Eclipse ME plug-in 1.7.7](http://sourceforge.net/projects/eclipseme/files/eclipseme/1.7.7/eclipseme.feature_1.7.7_site.zip/download)
    -   Cinterion Mobility Tool Kit (CMTK) installed with "USB COM port using USB modem".
    -   Cinterion EGS5 Wireless Tool Kit (WTK - included in CMTK installation).
    -   Module Exchange Suite (MES - included in CMTK installation).

-   Development kit is connect to your computer through USB.

Open the "Cinterion USB Modem Properties" to verify that the device driver is properly installed. The driver can be either found in the Windows Device Manager, or in newer versions of Windows under "Devices and Printers" in the control panel.

![Device installed properly](images/c8yimages/cinterion/Device%20installed%20properly.PNG)

Connect to the device through the COM3 port using a terminal tool such as [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) and issue i.e an AT+CSQ command to check the signal strength.

![Device AT basic commands](images/c8yimages/cinterion/Device%20AT%20basic%20commands.PNG)

# Using the Smart Agent for Cinterion

[Download](https://bitbucket.org/m2m/cumulocity-examples/downloads/cinterion-smartagent.zip) the Smart Agent archive file and unpack it. The archive file contains an Eclipse project ready to be imported into the Eclipse workspace configured by the Cinterion SDK. The location of this workspace depends on your Windows version and configuration.

Run Eclipse using the workspace and check if the Cinterion SDK is properly installed. Go to "Preferences", "J2ME", "Device Management" and validate that it contains a "Cinterion IMP-NG EGS5 Wireless Toolkit". In order to run cinterion-hello-agent example and do following instructions:

1) Enter your Eclipse Workspace: **cd [your\_eclipse\_workspace\_directory\_path]**
 2) Clone cumulocity-clients-java repository: **hg clone ssh://hg@bitbucket.org/m2m/cumulocity-clients-java??/clients-java**
 3) Clone cumulocity-examples: **hg clone ssh://hg@bitbucket.org/m2m/cumulocity-examples??/examples**
 4) Open Eclipse
 5) Import -\> Existing Project into Workspace
 6) Select examples/cinterion-hello-agent
7) Done

Import the project into Eclipse. Eclipse should add java-client-me-sdk sources to the project path automatically. In case Eclipse reports errors make sure that the device profile is selected in project J2ME properties:

![HelloWorld project J2ME properties](images/c8yimages/cinterion/HelloWorld%20project%20J2ME%20properties.PNG)

You can specify your own path to java-client-me-sdk sources by changing default path (locationURI variable in 'linkedResources -\> link' where [\$%7BPARENT-1-PROJECT\_LOC%7D] is parent folder) in .project file:

     <linkedResources>     <link>         <name>java-client-me-sdk</name>         <type>2</type>         <locationURI>$%7BPARENT-2-PROJECT_LOC%7D/clients-java/java-me-client/src/main/java</locationURI>     </link> </linkedResources>

If you need to jump more than one folder up, just replace number 2 with other. For example:
PROJECT\_LOC =\> C:\\projects\\workspace\\project
PARENT-1-PROJECT\_LOC =\> C:\\projects\\workspace
PARENT-2-PROJECT\_LOC =\> C:\\projects\\
PARENT-3-PROJECT\_LOC =\> C:\\

Before running the example code, configure the connectivity parameters and credentials for the Cumulocity platform. All of them are located in the class "com.cumulocity.me.example.cinterion.HelloWorld", method "initialize()":

    // establish GPRS connection
    sendCommand("AT+CMEE=2");
    sendCommand("AT^SJNET=\"gprs\",\"?APN for GPRS connection?\",\"\",\"\"");
            
    // create Cumulocity Platform
    platform = new PlatformImpl("?sandbox URL?", "?tenant ID", "?user?", "?password?", "?application key?");

Depending on your provider and SIM card, you may have to run additional AT commands to establish a connection. Next, create a run configuration by selecting the "CinterionHelloWorld" project and the "HelloWorld" midlet class in the "Run"dialog:

![HelloWorld project run configuration](images/c8yimages/cinterion/HelloWorld%20project%20run%20configuration.PNG)

Click Run and wait for Eclipse to deploy the application code into the device and run it. As a result a new managed object is created within given tenant and a measurement containing received signal strength measurement. The new managed object is visible in the "My devices" tab in the administration console. The measurements can be queried through the REST API (query by fragment type, passing "com\_cumulocity\_me\_example\_cinterion\_SignalStrengthSensor").

### Troubleshooting

In case of an "Unable to use USB port" error message, check if you have another application using the port (for example, your terminal software).

In case of an error similar to the following:

![HelloWorld No Ras device error](images/c8yimages/cinterion/HelloWorld%20No%20Ras%20device%20error.PNG)

-   Make sure the device is connected.
-   If the device was connected, disconnect and connect it again.
-   Follow the instructions in the message and "repair" the CMTK.
    -   Run the CMTK installer again.
    -   Select "Repair" on the first screen.
    -   Follow the installation wizard accordingly.

-   Try running the code again.

# Developing with the Smart Agent for Cinterion

The CinterionHelloWorld code includes:

-   com.cumulocity.me.example.cinterion - the Smart Agent code
-   com.cumulocity.me.http - HTTP client
-   com.cumulocity.me.model - base Cumulocity model
-   com.cumulocity.me.rest - JSON based Cumulocity REST representaion, parser, mapper and validator
-   com.cumulocity.me.sdk - the??Cumulocity SDK for Java ME
-   and some other utilities and enabling classes

In the Smart Agent code you can find an example for:

-   creating a managed object
-   registering a measurement of??mobile network signal strenght
-   retrieving and updating a device operation (only communication with the platform is presented and nothing is actually executed as the device itself does not provide any physically observable action to execute)

### Extending functionality

Every extensible representation like??alarm, audit, event, measurement, operation can contain fragments??to carry use case specific data. To add support for your own custom fragment you will need to:

-   create fragment model class (example:??com.cumulocity.me.example.cinterion.SignalStrengthSensor)
-   create fragment JSON converter implementing??com.cumulocity.me.rest.convert.JsonConverter
-   create fragment validator implementing com.cumulocity.me.rest.validate.RepresentationValidator
-   you can combine the converter and validator roles by taking adventage of a base class??com.cumulocity.me.rest.convert.base.BaseRepresentationConverter that??also contains many helpful JSON conversion methods??(example:??com.cumulocity.me.example.cinterion.SignalStrengthSensorConverter)

Next register created fragment converter and validator to the platform before you use it, i.e.:

    SignalStrengthSensorConverter converter = new SignalStrengthSensorConverter();
    platform.getConversionService().register(converter);
    platform.getValidationService().register(converter);

To install changes on the device you just need to??click Run and wait for Eclipse to deploy the application code into the device and run it.
