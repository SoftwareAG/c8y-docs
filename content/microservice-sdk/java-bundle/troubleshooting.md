---
weight: 60
layout: redirect
title: Troubleshooting
---

Some common problems and their solutions have been identified and documented below.

##### SSL or certificate errors

You can use both HTTP and HTTPS from the Java client libraries. To use HTTPS, you may need to import the Cumulocity production certificate into your Java Runtime Environment. [Download](/guides/cumulocity.com.cert "cumulocity.com certificate") the certificate and import it using the following command:

```shell
$ $JAVA_HOME/bin/keytool -import -alias cumulocity -file cumulocity.com.crt -storepass changeit
```

Answer "yes" to the question "Trust this certificate? [no]:".

Use the following argument to run Java:

```shell
-Djavax.net.ssl.trustStore=<home directory>/.keystore
```

If you use Eclipse/OSGi, open the **Run Configurations...** dialog in the **Run** menu. Double-click **OSGi Framework**, then open the **Arguments** tab on the right side. In the **VM arguments** text box, add the above parameter.

Since Java ships with its own set of trusted root certificates, you might still get the error message "java.security.cert.CertificateException: Certificate Not Trusted". In this case, make sure that the Go Daddy Certificate Authority (CACert) is available for your JAVA environment using the following command:

```shell
$ keytool -import -v -trustcacerts -alias root -file gd_bundle.crt -keystore $JAVA_HOME/lib/security/cacerts
```

*gd\_bundle.crt* can be downloaded directly from the [GoDaddy repository](https://certs.godaddy.com/anonymous/repository.pki).


##### When I install the SDK, Eclipse complains about compatibility problems

Make sure that you use the **Target Platform** preferences page to install the SDK as described in the instructions. **Install New Software** installs software into your running Eclipse IDE, but you need to install the SDK as a separate server software.

##### I get "Expected to find an object at table index" when running a microservice or application

This error occurs due to a bug in particular Eclipse versions. As a workaround, select **Run** from the main menu and then **Run Configurations ...**. On the left, select the launch configuration that you have been using, e.g. **OSGi Framework**. On the right, click the **Arguments** tab. Append a " -clean" to the **Program Arguments** and click **Apply**.

##### The microservice or application won't start

Verify that all required plug-ins are checked in your launch configuration. Go to **Run** > **Run Configurations** and select the **OSGi Framework** launch configuration. Click **Select All** and try running it again.

Check if the required plug-ins are started. While the application or microservice is running, type "ss" into the console and hit the return key. All listed plug-ins should be either in the ACTIVE or RESOLVED state.

Check if you are using the correct target platform. Go to the **Target Platform** page in the preferences and check if "Cumulocity runtime" is checked.

##### The microservice application does not compile. I get "Access Restriction" messages

This error may be caused because of a missing package import. Navigate to the **Dependencies** tab of the project manifest file and check if the package of the type that contains the method giving the access restriction is present in the Import-Package section.

You can find the package by opening the declaration of the method (right-click and select **Open Declaration** from the context menu).

##### When starting an application I get "address already in use" messages

Check if you are running another instance of the application. Click on the **Display Selected Console** icon in the console toolbar (the terminal icon) to browse through your consoles. Terminate other running instances by clicking the red **Stop** icon in the toolbar.

Under Unix/macOS you can also use the `lsof` command to see which process is using a particular port. For example, to see which process is using TCP port 8080 enter:

```shell
$ lsof -i tcp:8080
```

It will return something like:

```shell
COMMAND    PID  USER  FD   TYPE      DEVICE  SIZE/OFF  NODE  NAME
java     12985   neo  45u  IPv6  0x077c76d0       0t0   TCP  *:8080 (LISTEN)
```

This means that the process 12985 is using the 8080 port and it can be killed if necessary.
