---
order: 10
layout: redirect
title: SSL or certificate errors
---

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