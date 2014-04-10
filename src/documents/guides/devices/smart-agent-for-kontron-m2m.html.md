# Overview

This section describes how to interface the??[Kontron M2M Smart Services Developer Kit](http://us.kontron.com/products/systems+and+platforms/m2m/m2m+smart+services+developer+kit.html)??with Cumulocity. It shows how to download and install the Cumulocity Smart Agent for Kontron on the kit. To demonstrate the agent, the kit's accelerometer is queried so that shaking the kit will send an alarm to Cumulocity. This alarm is displayed in the sandbox administration console. Finally, the section shows how to modify the demo to develop new agent functionality.

# What is the Kontron M2M Smart Services Developer Kit?

Kontron?s M2M Smart Services Developer Kit is designed for developers who require high performance and rich connectivity options at the edge of their M2M solution.??The kit has been created in cooperation with Intel and is also known as the??[Intel M2M Reference Design](http://www.intel.com/content/www/us/en/communications/m2m-technical-white-paper.html#iid=4741).??Features include:

-   Operating System: Wind River Linux, pre-installed.
-   CPU: Intel? Atom? E640T 1 GHz??
-   802.11a/b/g/n WLAN and 802.15.4 WPAN support
-   Equipped with an accelerometer, 2x microHDMI, Audio, 1x Gigabit Ethernet and USB 2.0.

After unpacking the device is immediately ready to go and can be used for developing numerous applications.??It can be used as for collection and initial processing of data in wide range of M2M areas such as vending, ATM controller, security system, transportation, energy and resources consumption control. One typical use case is the usage a an M2M gateway device.

![Kontron M2M Smart Services Developer Kit](images/c8yimages/kontron-m2m.jpg)

# Why to use the Cumulocity Smart Agent for Kontron M2M?

The Cumulocity Smart Agent for Kontron M2M provides you with an out-of-the-box cloud connection to Cumulocity.??The Smart Agent provides you with many features to help you making this connection, especially over a mobile network. These features include:

-   Support of dynamic and private (NAT) IP adressing
-   Auto-registration
-   Data Encryption using SSL
-   Can optionally run in an OSGi container.

The smart agent is provided under a business-friendly MIT open source license.

# Installing the Smart Agent for Kontron M2M

In the following text, the term "device" refers to a??Kontron M2M Smart Services Developer Kit.

## Prerequisites

-   Power up and connect to the device, either remotely with ssh, or with a locally attached keyboard and monitor.
-   Login as root user.
-   WindRiver Linux 4.3 must be installed. To verify, execute:

        root@localhost:/root> uname -a
        Linux localhost 2.6.34.10-WR4.3.0.0_standard #1 SMP PREEMPT Wed May 23 16:49:01 PDT 2012 i686 i686 i386 GNU/Linux

    Please verify that your output of the above command shows a correct WindRiver version. Older versions will run the smart agent, however, the accelerometer example will not work.

-   The Java Runtime Environment (JRE) must be installed. To verify, execute:

        root@localhost:/root> /opt/jvm/bin/java -version
        java version "1.6.0_25"
        Java(TM) 2 Runtime Environment, Standard Edition for Embedded (build 1.6.0_25-b06, headless)
        Java HotSpot(TM) Client VM (build 20.0-b11, mixed mode)

-   The example uses the built-in accelerometer. To verify that the accelerometer can be accessed, execute:

        root@localhost:/root> cat /sys/class/iio/device0/accel_xyz
        0xff -240 -3568 -256 0x00

-   The device must be connected to the Internet. You can use LAN, WLAN or mobile network connections. The developer sandbox should be reachable. To verify, execute:

        root@localhost:/root> ping developer.cumulocity.com
        PING developer.cumulocity.com (50.112.16.234) 56(84) bytes of data.
        64 bytes from ec2-50-112-16-234.us-west-2.compute.amazonaws.com (50.112.16.234): icmp_req=1 ttl=42 time=256 ms
        64 bytes from ec2-50-112-16-234.us-west-2.compute.amazonaws.com (50.112.16.234): icmp_req=2 ttl=42 time=255 ms
        64 bytes from ec2-50-112-16-234.us-west-2.compute.amazonaws.com (50.112.16.234): icmp_req=3 ttl=42 time=253 ms
        ...

-   The local time of the device should be set correctly.??Otherwise the time of generated alarms will not be correct and they wil not be shown on the top of the web user interface. To verify, execute:

        root@localhost:/root> date
        Tue Sep  4 06:24:03 GMT 2012

    Use the following command to correct the date and time, replacing the example date with the current date and time:

        date -s "10 Nov 2012 14:19"

## Installing

To download and install the Cumulocity Smart Agent on a??Kontron M2M Smart Services Developer Kit, execute the following steps:

-   Download the Smart Agent and example:

        wget --no-check-certificate https://bitbucket.org/m2m/cumulocity-examples/downloads/kontron-smartagent.tar.gz

-   Extract the file:

        tar xvzf kontron-smartagent.tar.gz

-   Change the directory:

        cd smartagent

-   Enter your cumulocity tenant (e.g. demo), username and password into the file kontron.agent.properties:

        vi kontron.agent.properties

The following files and folders are now available on your devices:

-   The file "start.sh" can be used to start the smart agent.
-   The file "configuration/config.ini" includes a list of required libraries.
-   The folder "plugins" contains required Java libraries:
    -   "com.cumulocity.kontron\_?version?.jar": The example code to read and process??accelerometer data.
    -   com.nsn.cumulocity.\*\_?version?.jar: The Cumulocity Smart Agent libraries.
    -   The remaining files are libraries required to run the Smart Agent.

# Using the Smart Agent for Kontron M2M

Once the software is installed, you can execute the example. The example includes the smart agent together with an example that??detects an acceleration threshold and raises an alarm in Cumulocity.??

To use the example, perform the following steps:

-   Start the agent:

        ./start.sh

-   You will see the following output

        Listening for transport dt_socket at address: 8000
        osgi> Cumulocity URL: http://?sandbox URL?
        Tenant: ?tenant?
        User: ?username?
        Accel rate: 100
        eth0 MAC address : 00:b3:38:00:01:ce
        Agent MO ID: 95300
        AccelerometerReader : current scale = 8g
         -> AccelerometerReader started

    The first line indicates that you can remotely debug the smart agent by connecting to port 8000. For further details, see below.

    The second line shows the connection URL to the developer sandbox.

    In 6th line, the MAC adress of the device is shown. The MAC address is used to associate the particular device with a unique object in Cumulocity.

    The 7th line prints out the unique ID of the associated managed object. Use this ID to find the associates managed object in the Cumulocity user interface.

-   Shake the device vigorously. You will see the following output:

        Threshold crossed: Y=-3.39 (-3.39, 3.39)  
        Info: Sending alarm
        Info: Alarm created 

    The agent has now created an alarm in Cumulocity. In the next step we will browse the generated alarms.

# Viewing the data in Cumulocity

At this stage, the managed object for the device has been created in Cumulocity. Additionally at least one alarm has been generated. To see the generated data, perform the following steps:

-   Open the developer sandbox at https://?sandbox URL?/ui/tenantadmin in your web browser and log in.
-   Go to the "My devices" tab and find the object "Kontron Smart Agent" with the MAC address of your device.

![Kontron device in inventory](images/c8yimages/kontron-my-devices.png)

-   Go to the "Events" tab and find the "Threshold crossed" alarm that you created by shaking the devices.

![Accelerometer event](images/c8yimages/kontron-events.png)

# Developing with the Smart Agent for Kontron

To develop new functionality with the Smart Agent, make sure that you have the Cumulocity SDK installed as described in "[Installing the SDK](index.php?option=com_k2&view=item&id=814)". It is also beneficial to walk through the ["Hello, world!" example](index.php?option=com_k2&view=item&id=818) to get familiar with the SDK concepts.??It is assumed that you have run the installation steps above and that you are connected to the device. In the following steps, we will import the accelerometer example into the SDK, modify it, install the modification on the device and debug the changes.

## Import the accelerometer example

To install the accelerometer example into the SDK, carry out the following steps:

-   [Download](https://bitbucket.org/m2m/cumulocity-examples/get/tip.zip) the source code of the example and unpack it to a convenient location. If you have Mercurial installed, you can also clone the source code repository at https://bitbucket.org/m2m/cumulocity-examples.
-   Start Eclipse and click "File", "Import...". In the "General" section, select "Existing Projects into Workspace" and click "Next".
-   Click the "Browse" button next to "Select root directory" and point the file browser to the "com.cumulocity.kontron" folder within the folder that you just downloaded.
-   Examine the files:
    -   The example is an OSGi bundle and hence contains a manifest file in the "META-INF" folder. This manifest file holds dependency information and metadata about the agent, similar to what is demonstrated already in the??["Hello, world!" example](index.php?option=com_k2&view=item&id=818).
    -   The "kontron.agent.properties" file contains default configuration data for the agent.
    -   The Java source code for the accelerometer example is located in "src/main/java/com/cumulocity/kontron". Upon start of the agent, the method "start" of the class "Activator" will be run.

## Modify the example and install the changes

To demonstrate development, we will carry out a very simple change in the code by reducing the alarm severity of a "Threshold crossed" alarm from the default "Major" priority to "Minor":

-   Open the class "AccelerometerThresholdActionImpl".
-   Locate the configuration of the alarm severity and change it:

        alarm.setSeverity("Minor");

-   Save the change.
-   To install the change, right-click the project "com.cumulocity.kontron" and select "Export...".
-   In the section "Plug-in Development", select "Deployable plug-ins and fragments" and click "Next".
-   Make sure that the "Directory" radio button is enabled and click the "Browse" button to its right. Select a location where you would like the generated files to be placed. Click "Finish".
-   You will now find a directory "plugins" in the location that you selected. This directory contains a new jar file with the modified example named "com.cumulocity.kontron\_?version?.jar". This jar file needs to replace the default jar file contained in the above installation of the example.
-   Locate the "smartagent/plugins" directory on the device and remove the default jar file. On the device, execute:

        cd ?smartagent directory?/smartagent/plugins
        rm -f com.cumulocity.kontron_*.jar

-   Copy the new jar file from your development environment to the "plugins" directory on the device. On your development environment, execute:

        scp com.cumulocity.kontron_*.jar root@?Address of device?:?smartagent directory?/smartagent/plugins

-   Terminate and restart the agent.

You should now be able to shake the device and see "Minor" severity threshold alarms in the administration user interface.

## Debug the changes

The default start script provided with the Smart Agent starts Java in debug mode. This enables you to conveniently debug your code remotely from your development environment. To debug your code, follow these steps on your development environment:

-   Set a break point at the location that you want to debug. For example, select the "setSeverity" invocation that you modified above and click "Run", "Toggle Breakpoint".
-   Attach your Eclipse to the running agent on the device. Select "Run", "Debug Configurations..." and double-click "Remote Java Application". Change the "Host" field to contain the address of the device (e.g., 192.168.0.1). Click "Debug".
-   Shake the device. The agent on the device now halts the execution and the Eclipse debugger on the development environment launches. You can now step through your code and, for example, examine variable settings.

More information, consult the [Eclipse documentation](http://help.eclipse.org/juno/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Fconcepts%2Fcremdbug.htm). Before production use, make sure to remove the debug option from the start script.
