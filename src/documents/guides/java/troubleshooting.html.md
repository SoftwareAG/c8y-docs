---
order: 50
layout: default
title: Troubleshooting
---
## Overview

This section describes common problems and their solutions.

## SSL or certificate errors

You can use both HTTP and HTTPS from the Java client libraries. To use HTTPS, you may need to import the Cumulocity production certificate into your Java runtime environemnt. [Download](/guides/cumulocity.com.cert "cumulocity.com certificate") the certificate and import it using the following command on the command line:

    $JAVA_HOME/bin/keytool -import -alias cumulocity -file cumulocity.com.crt -storepass changeit

Answer "yes" to the question "Trust this certificate? [no]:". Use the following argument to run Java:

    -Djavax.net.ssl.trustStore=<<home directory>>/.keystore

If you use Eclipse/OSGi, open the "Run Configurations..." dialog in the "Run" menu. Double-click "OSGi Framework", the open the "Arguments" tab on the right side. In the "VM arguments" text box, add the above parameter.

Since Java ships with its own set of trusted root certificates, you might still get the error message:

    java.security.cert.CertificateException: Certificate Not Trusted

In this case, make sure that the Go Daddy Certificate Authority (CACert) is available for your JAVA environment using:

    keytool -import -v -trustcacerts -alias root -file gd_bundle.crt -keystore $JAVA_HOME/lib/security/cacerts

gd\_bundle.crt can be downloaded directly from the [GoDaddy repository](https://certs.godaddy.com/anonymous/repository.pki)

## When I install the SDK, Eclipse complains about compatibility problems

Make sure that you use the "Target Platform" preferences page to install the SDK as described in the instructions. "Install New Software" installs software into your running Eclipse IDE, but we need to install the SDK as a separate server software.

## "Expected to find an object at table index" when running an agent or application

This error occurs due to a bug in particular Eclipse versions. As a workaround, select "Run" from the main menu and "Run Configurations ...". On the left, select the launch configuration that you have been using, e.g., "OSGi Framework". On the right, click the "Arguments" tab. Append a " -clean" to the "Program Arguments" and click "Apply".

## The agent or application won't start

Check if all required plug-ins are checked in your launch configuration. Go to "Run", "Run Configurations" and select the "OSGi Framework" launch configuration. Click on "Select All" and try running again.

Check if the required plug-ins are started. While the application or agent is running, type "ss" into the console and hit the return key. All listed plug-ins should be either in the "ACTIVE" or "RESOLVED" state.

Check if you are using the correct target platform. Go to the "Target Platform" page in the preferences and check if "Cumulocity runtime" is checked.

## The agent will not compile, I get "Access Restriction" messages

This error may be caused because of a missing package import. Go to the "Dependencies" tab of the project Manifest file and check the package of the type that contains the method giving the access restriction is present in the Import-Package section.

You can find the package by opening the declaration of the method (right-click-\>Open Declaration).

## When starting an application, I get "address already in use" messages

Check if you are running another instance of the application. Click on the "Display Selected Console" icon in the console toolbar (the terminal icon) to browse through your consoles. Terminate other running instances by pressing the red stop icon in the toolbar.

Under Unix/MacOSX you can also use the *lsof* command to see which process is using a particular port, for example to see which process is using TCP port 8080 enter:

    lsof -i tcp:8080

which will return something like:

    COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME java 12985 pitchfor 45u IPv6 0x077c76d0 0t0 TCP *:8080 (LISTEN)

so process 12985 is using that port which can then be killed if necessary.
