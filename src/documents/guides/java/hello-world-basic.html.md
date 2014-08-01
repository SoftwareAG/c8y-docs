---
order: 10
layout: default
title: Installing the JavaSE SDK
---
## Overview

Cumulocity comes with elaborate support for developing clients in Java. You can use Java, for example, to 

* Interface Cumulocity with devices supporting Java. Today, many Embedded Linux devices support Java out of the box, such as the [Raspberry Pi](/guides/devices/raspberry-pi).
* Interface Cumulocity with your enterprise IT systems or develop server-side business logic on top of Cumulocity.

There are ready-made client libraries both for JavaSE and JavaME. This section discusses the installation of the JavaSE libraries. The section "[Installing the JavaME SDK](/guides/java/installing-me)" discusses the installation of the JavaME libraries. There is also [experimental support for Android](https://bitbucket.org/eickler/cumulocity-clients-android/).

The JavaSE client libraries can be installed through Maven or as OSGi runtime through Eclipse P2. We first discuss the general prerequisites for installing the client libraries and then show each of the two installation variants. The client libraries are available in [source form as well](https://bitbucket.org/m2m/cumulocity-clients-java).

Here are some references for getting started with the basic technologies underlying the SDK:

-   The client libraries use the Cumulocity REST interfaces as underlying communication protocol as described in the [REST developer's guide](/guides/rest).
-   The SDK integrates nicely with [OSGi](http://www.osgi.org/Specifications/HomePage). OSGi provides a small and efficient runtime that is also available in some embedded environments. Additionally, it is very well support by Eclipse and other development tools. A good introduction can be found in the book [OSGi and Equinox: Creating Highly Modular Java Systems](http://www.amazon.com/OSGi-Equinox-Creating-Modular-Systems/dp/0321585712). 

## Prerequisites

### Java

To use the Java client libraries, you need to have at least Version 6 of the [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/index.html) for your operating system. Some of the examples require Java 7. To verify the version of your Java Development Kit, type

	javac -version

The output needs to show a version number later than "1.6.0\_24". 

### Eclipse

To develop for OSGi runtimes, you need at least Version 3.7.1 of Eclipse. If you have Eclipse already installed, check the "About Eclipse" box.

### Installing SSL certificates

You can use both HTTP and HTTPS from the development kit. To use HTTPS, you may need to import the Cumulocity production certificate into your Java runtime environemnt. [Download](/cumulocity.com.cert "cumulocity.com certificate") the certificate and import it using the following command on the command line:

    $JAVA_HOME/bin/keytool -import -alias cumulocity -file cumulocity.com.crt -storepass changeit

Answer "yes" to the question "Trust this certificate? [no]:". Use the following argument to run Java:

    -Djavax.net.ssl.trustStore=<<home directory>>/.keystore

If you use Eclipse/OSGi, open the "Run Configurations..." dialog in the "Run" menu. Double-click "OSGi Framework", the open the "Arguments" tab on the right side. In the "VM arguments" text box, add the above parameter.

Since Java ships with its own set of trusted root certificates, you might still get the error message:

    java.security.cert.CertificateException: Certificate Not Trusted

In this case, make sure that the Go Daddy Certificate Authority (CACert) is available for your JAVA environment using:

    keytool -import -v -trustcacerts -alias root -file gd_bundle.crt -keystore $JAVA_HOME/lib/security/cacerts

gd\_bundle.crt can be downloaded directly from the [GoDaddy repository](https://certs.godaddy.com/anonymous/repository.pki)

## Using Maven

To access the client libraries through Maven, add our Maven repository to the "repositories" element of your pom.xml file:

    <repositories>
      <repository>
        <id>cumulocity</id>
        <layout>default</layout>
        <url>http://download.cumulocity.com/maven/repository</url>
      </repository>
    </repositories>

Then add a dependency on the Java client library to the "dependencies" element:

    <dependencies>
      <dependency>
        <groupId>com.nsn.cumulocity.clients-java</groupId>
        <artifactId>java-client</artifactId>
        <version>...</version>
      </dependency>
    </dependencies>

The latest version of the client library can be determined by checking the ["Announcements" section](https://cumulocity.zendesk.com/hc/en-us/sections/200381323-Announcements) of the Cumulocity Help Center.

## Using OSGi

### Installation

Here are the steps for configuring Eclipse and downloading the required client software:

-   Go to the "Preferences" menu and select "Plug-in Development", "Target Platform". Click "Add...".
-   Ensure that "Nothing: Start with an empty target definition." is selected and click "Next". Type "Cumulocity runtime" into the "Name" field. Click "Add...".
-   Select "Software Site" and click "Next".
-   To make the Cumulocity runtime repository available, click "Add...", use "Cumulocity repository" as "Name" and "[http://download.cumulocity.com/p2/repository](http://download.cumulocity.com/p2/repository)" as "Location". Click "Ok".
-   Ensure that the "Cumulocity repository" is selected in the "Work with" drop-down list. Check "Cumulocity" and click "Finish". Select "Finish" again to leave the dialog. Now check the "Cumulocity runtime" entry in the "Target definitions" list and click "Ok".
-   This procedure has to be carried out once per Eclipse workspace.

> Please do not use "Install New Software" to download the client software. This would install the client as part of your running IDE. Install the SDK target platforms separately using the "Target Platform" preferences as described above.

> If you would like to install a particular version of the Cumulocity OSGi runtime, please use http://download.cumulocity.com/p2/repository-&lt;&lt;version&gt;&gt;.

### Update

If you need to update or re-load the client software, follow these steps:

-   Open the "Target Platform" page in preferences, select the "Cumulocity runtime" and click "Edit".
-   Select the link in the location list and click "Edit".
-   Select "Work with the list of software sites", select "Cumulocity repository" and click "Reload". Click "Ok", "Finish" and "Finish" again to leave the dialog.
-   Click "Reload" in the target platform list and "Ok" to leave the preferences dialog.
-   You may need to re-create your run configuration. I.e., go to "Run", "Run Configurations" and double-click "OSGi Framework" to create a new run configuration, if you have problems.
