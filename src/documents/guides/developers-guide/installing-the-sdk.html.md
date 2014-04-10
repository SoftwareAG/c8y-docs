# Overview

M2M systems can be developed from any development environment supporting REST interfaces, as illustrated in the figure below. The developer's guide focuses on development using Java, JavaScript and Eclipse. This section shows how to install the Eclipse-based SDK and how to test it against the developer sandbox. Usage of the developer sandbox is subject to our [terms of use](guides/reference-guide/developer-sandbox-usage-terms).

![development](images/c8yimages/development.png)

Here are some references for getting started with the basic technologies underlying the SDK:

-   For communicating with Cumulocity, JSON over REST is used. An introduction to REST can be found in [RESTful Web Services](http://oreilly.com/catalog/9780596529260). JSON is explained on the [http://www.json.org](http://www.json.org).
-   The SDK integrates nicely with [OSGi](http://www.osgi.org/Specifications/HomePage). OSGi provides a small and efficient runtime that is also available in some embedded environments. Additionally, it is very well support by Eclipse and other development tools. A good introduction can be found in the book [OSGi and Equinox: Creating Highly Modular Java Systems](http://www.amazon.com/OSGi-Equinox-Creating-Modular-Systems/dp/0321585712). Alternatively, you can use the SDK with any plain Java environment (see below).

# Install the Java Development Kit

[Download](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and install the Java Development Kit Version 6 (JDK) for your operating system. For MacOS PCs, a JDK is already pre-installed. To check if you have a JDK installed, type

    javac -version

on the command line. The output should show a version number later than "1.6.0\_24".

# Install and configure Eclipse

With the following steps, the Cumulocity SDK is installed on Eclipse as an additional OSGi runtime. [Download](http://eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/indigosr1) "Eclipse IDE for Java EE Developers" for your operating system, install it and run it. If you have Eclipse already installed, make sure that you have at least Version 3.7.1. ("About Eclipse" should read "Indigo Service Release 1" as version.)

A note to experienced Eclipse users: Please do not use "Install New Software" to download the client software. This would install the client as part of your running IDE. Install the SDK target platforms separately using the "Target Platform" preferences as described below.

Here are the steps for configuring Eclipse and downloading the required client software:

-   Go to the "Preferences" menu (Eclipse??? Preferences on Mac, Window??? Preferences on Windows) and select "Plug-in Development"??? "Target Platform". Click "Add...".
-   Ensure that "Nothing: Start with an empty target definition." is selected and click "Next". Type "Cumulocity runtime" into the "Name" field. Click "Add...".
-   Select "Software Site" and click "Next".
-   To make the Cumulocity runtime repository available, click "Add...", use "Cumulocity repository" as "Name" and "[http://download.cumulocity.com/p2/repository](http://download.cumulocity.com/sdk/repository)" as "Location". Click "Ok".
-   Ensure that the "Cumulocity repository" is selected in the "Work with" drop-down list. Check "Cumulocity" and click "Finish". Select "Finish" again to leave the dialog. Now check the "Cumulocity runtime" entry in the "Target definitions" list and click "Ok".
-   This procedure has to be carried out once per Eclipse workspace.

If you would like to install a particular version of the Cumulocity OSGi runtime, please use http://download.cumulocity.com/p2/repository-\<version\>.

# Installing SSL certificates

The development kit can use both HTTP and HTTPS. By default, HTTPS is used. You need to make sure that the Cumulocity server certificate is trusted by your Java runtime environment. [Download](images/cumulocity.com.crt "cumulocity.com certificate") the certificate and import it using the following command on the command line:

    $JAVA_HOME/bin/keytool -import -alias cumulocity -file cumulocity.com.crt -storepass changeit

Answer "yes" to the question "Trust this certificate? [no]:". In Eclipse, open the "Run Configurations..." dialog in the "Run" menu. Double-click "OSGi Framework", the open the "Arguments" tab on the right side. In the "VM arguments" text box, add the following parameter setting after replacing "home directory" with your home directory path:

    -Djavax.net.ssl.trustStore=?home directory?/.keystore

Since Java ships with its own set of trusted root certificates, you might still get the error message:

    java.security.cert.CertificateException: Certificate Not Trusted

In this case, make sure that the Go Daddy Certificate Authority (CACert) is available for your JAVA environment using:

    keytool -import -v -trustcacerts -alias root -file gd_bundle.crt -keystore $JAVA_HOME/lib/security/cacerts

gd\_bundle.crt can be downloaded directly from the [GoDaddy repository](https://certs.godaddy.com/anonymous/repository.pki)

If you just want to use HTTP, you do not need to carry out the above two steps. Instead, you need to tell the development kit to use HTTP.

    -Dcom.cumulocity.url=http://?sandbox URL?

Note that using HTTP is not recommended as passwords are transferred in clear text.

Click "Apply" and "Close". For testing the installation, try the??["Hello, world!"](guides/developers-guide/hello-world). If you encounter any problems during the installation, see the??[trouble shooting section](guides/developers-guide/troubleshooting-the-sdk).

# Using OAuth Single Sign-on?

If you registered to Cumulocity using OAuth single sign-on, you need to create an additional password for your account to run the examples and to, for example, authenticate your devices.

This can be done through the tenant administration console by following these steps:

-   Login to the tenant administration console at [https://?sandbox URL?/ui/tenantadmin](https://??sandbox).
-   Click on the "Welcome, .." link at the top, just to the right of the logo and select "User Settings".??At the top, you will see your username through which you are registered with the system. You will need this username later for the examples and can copy it from here.
-   In the dialog, set a name for yourself and a password to be used and click "Save".

Alternatively, you can also use the Users API from the command line to set the password programmatically.??Use this password and the username displayed in the administration console with the examples.

If you would like to learn more about the authentication concepts in Cumulocity, please visit the Section "Authenticating users and devices" in ["Securing M2M applications"](index.php?option=com_k2&view=item&id=813).

# Updating the client libraries

If you need to update or re-load the client software, follow these steps:

-   Open the "Target Platform" page in preferences, select the "Cumulocity runtime" and click "Edit".
-   Select the link in the location list and click "Edit".
-   Select "Work with the list of software sites", select "Cumulocity repository" and click "Reload". Click "Ok", "Finish" and "Finish" again to leave the dialog.
-   Click "Reload" in the target platform list and "Ok" to leave the preferences dialog.
-   You may need to re-create your run configuration. I.e., go to "Run", "Run Configurations" and double-click "OSGi Framework" to create a new run configuration, if you have problems.

# Using Maven

If you are using another develoment environment or do not want to use OSGi, Maven is another good option. To access the client libraries through Maven, add our Maven repository to the "repositories" element of your pom.xml file:

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
        <version>?</version>
      </dependency>
    </dependencies>

The latest version of the client library can be determined by checking the "Announcements" section of the forum. It corresponds to the latest version of the platform. At the time of writing, the latest version is 3.2.0. Please note that until Version 2.5.0, the group ID was "com.nsn.cumulocity.platform-services.sdk" and the artifact ID was "java-client-lib".
