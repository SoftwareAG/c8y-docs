---
order: 50
layout: default
title: Troubleshooting the SDK
---
# Overview

This section describes common problems and their solutions.

# When I install the SDK, Eclipse complains about compatibility problems

Make sure that you use the "Target Platform" preferences page to install the SDK as described in the instructions. "Install New Software" installs software into your running Eclipse IDE, but we need to install the SDK as a separate server software.

# "Expected to find an object at table index" when running an agent or application

This error occurs due to a bug in particular Eclipse versions. As a workaround, select "Run" from the main menu and "Run Configurations ...". On the left, select the launch configuration that you have been using, e.g., "OSGi Framework". On the right, click the "Arguments" tab. Append a " -clean" to the "Program Arguments" and click "Apply".

# The agent or application won't start

Check if all required plug-ins are checked in your launch configuration. Go to "Run", "Run Configurations" and select the "OSGi Framework" launch configuration. Click on "Select All" and try running again.

Check if the required plug-ins are started. While the application or agent is running, type "ss" into the console and hit the return key. All listed plug-ins should be either in the "ACTIVE" or "RESOLVED" state.

Check if you are using the correct target platform. Go to the "Target Platform" page in the preferences and check if "Cumulocity runtime" is checked.

# The agent will not compile, I get "Access Restriction" messages

This error may be caused because of a missing package import. Go to the "Dependencies" tab of the project Manifest file and check the package of the type that contains the method giving the access restriction is present in the Import-Package section.

You can find the package by opening the declaration of the method (right-click-\>Open Declaration).

# When starting an application, I get "address already in use" messages

Check if you are running another instance of the application. Click on the "Display Selected Console" icon in the console toolbar (the terminal icon) to browse through your consoles. Terminate other running instances by pressing the red stop icon in the toolbar.

Under Unix/MacOSX you can also use the *lsof* command to see which process is using a particular port, for example to see which process is using TCP port 8080 enter:

    lsof -i tcp:8080

which will return something like:

    COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME java 12985 pitchfor 45u IPv6 0x077c76d0 0t0 TCP *:8080 (LISTEN)

so process 12985 is using that port which can then be killed if necessary.

# When starting my application, I just see the "loading" icons

The best method to troubleshoot startup issue is to launch the development tool of the browser that you are using. Chrome, Internet Explorer and Opera have a built-in development support and there's [Firebug](http://getfirebug.com/) for Firefox. Right-click the icon and choose "Inspect Element". In Firebug, click on "Console" to check for syntax errors or "Net" to check if attempts to access the sandbox failed. You may have to reload the page for this to work.

# When starting my application, I just see a blank browser screen

A likely reason is that you are using HTTPS to communicate with the Cumulocity server and your Java runtime does not accept the SSL certificate. In this case, you will see an error message in connections to the Cumulocity server if you look at the "Network" tab in Firebug (see above). You can solve this in two ways:

-   Switch to plain HTTP by using -Dcom.cumulocity.url=http://\<\<sandbox URL\>\>, see "Changing the backend server" in ["Hello, world!"](index.php?option=com_k2&view=item&id=818).
-   Import the Cumulocity certificate as described in ["Installing the SDK"](index.php?option=com_k2&view=item&id=814).

