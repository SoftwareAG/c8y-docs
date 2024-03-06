---
weight: 80
title: X509 Rest client java
layout: redirect
---

In this tutorial, you will learn how to use the Java rest client with {{< product-c8y-iot >}} using X.509 certificates.

### Prerequisites {#prerequisites}

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, a user and a password in order to access {{< product-c8y-iot >}}.
* Verify that you have Maven 3 and at least Java 7 installed.

```shell
$ mvn -v
Maven home: /Library/Maven/apache-maven-3.6.0
Java version: 1.8.0_201, vendor: Oracle Corporation, runtime: /Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home/jre
Default locale: en_GB, platform encoding: UTF-8
OS name: "mac os x", version: "10.14.2", arch: "x86_64", family: "mac"
```

Maven can be downloaded from the [Maven website](http://maven.apache.org).

### Developing the "Java REST" client {#developing-the-java-rest-rest-client}

To develop a very simple "Hello, world!" REST client for {{< product-c8y-iot >}}, you must

* create a Maven project,
* create a Java application,
* build and run the Java application.

#### Create a Maven project {#create-a-maven-project}

To create a plain Java project with Maven, execute the following command:

```shell
$ mvn archetype:generate -DgroupId=c8y.example.x509 -DartifactId=x509-rest-client -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

This will create a folder device-jwt-rest-client in the current directory with a skeleton structure for your project.
If you are using Java 9 or later, you must set the source and target as described at the [Apache Maven Compiler Plugin](https://maven.apache.org/plugins/maven-compiler-plugin/) page, adding the following code:

```xml
<properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
</properties>
```

#### Create a Java application {#create-a-java-application}

Edit the X509RestClient.java file located in the folder x509-rest-client -java/src/main/java/c8y/example/x509 with the following content:

```java
package c8y.example.x509;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.security.KeyManagementException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;

import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManagerFactory;

public class X509RestClient {

	private static final String KEYSTORE_NAME = "";
	private static final String KEYSTORE_PASSWORD = "";
	private static final String KEYSTORE_FORMAT = "";
	private static final String TRUSTSTORE_NAME = "";
	private static final String TRUSTSTORE_PASSWORD = "";
	private static final String TRUSTSTORE_FORMAT = "";
	private static final String PLATFORM_URL = "";
	private static final String X_SSL_CERT_CHAIN = "x-ssl-cert-chain";
	private static final String DEVICE_ACCESS_TOKEN_PATH = "/devicecontrol/deviceAccessToken";
	private static final String LOCAL_DEVICE_CHAIN = "";

	public static void main(String[] args) throws Exception {

		TrustManagerFactory trustManagerFactory = getTrustManagerFactory();
		KeyManagerFactory keyManagerFactory = getKeyManagerFactory();
		SSLContext sslContext = getSSLContext(trustManagerFactory, keyManagerFactory);
		HttpClient httpClient = HttpClient.newBuilder().sslContext(sslContext).build();

		HttpResponse<String> response = httpClient.send(buildRequest(), HttpResponse.BodyHandlers.ofString());
		System.out.println(response.body());
	}
    
	private static SSLContext getSSLContext(TrustManagerFactory trustManagerFactory, KeyManagerFactory keyManagerFactory) {
		try {
			SSLContext sslContext = SSLContext.getInstance("TLS");
			sslContext.init(keyManagerFactory.getKeyManagers(), trustManagerFactory.getTrustManagers(), null);
			return sslContext;
		} catch (NoSuchAlgorithmException | KeyManagementException exception) {
			throw new RuntimeException("Error in creating SSLContext", exception);
		}
	}


	private static HttpRequest buildRequest() {
		try {
			return HttpRequest.newBuilder().uri(new URI(PLATFORM_URL + DEVICE_ACCESS_TOKEN_PATH))
					.POST(HttpRequest.BodyPublishers.noBody()).header("Accept", "application/json")
					.header(X_SSL_CERT_CHAIN, LOCAL_DEVICE_CHAIN).build();
		} catch (URISyntaxException uRISyntaxException) {
			throw new RuntimeException("Error in creating SSLContext", uRISyntaxException);
		}
	}
    
	private static TrustManagerFactory getTrustManagerFactory() {
		try {
			KeyStore trustStore = KeyStore.getInstance(TRUSTSTORE_FORMAT);
			InputStream trustStoreFile = new FileInputStream(TRUSTSTORE_NAME);
			trustStore.load(trustStoreFile, TRUSTSTORE_PASSWORD.toCharArray());
			TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
			trustManagerFactory.init(trustStore);
			return trustManagerFactory;
		} catch (KeyStoreException | NoSuchAlgorithmException | CertificateException | IOException exception) {
			throw new RuntimeException("Error in generating TrustManagerFactory value", exception);
		}
	}

	private static KeyManagerFactory getKeyManagerFactory() {
		try {
			KeyStore trustStore = KeyStore.getInstance(KEYSTORE_FORMAT);
			InputStream trustStoreFile = new FileInputStream(KEYSTORE_NAME);
			trustStore.load(trustStoreFile, KEYSTORE_PASSWORD.toCharArray());
			KeyManagerFactory keyManagerFactory = KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());
			keyManagerFactory.init(trustStore, KEYSTORE_PASSWORD.toCharArray());
			return keyManagerFactory;
		} catch (KeyStoreException | NoSuchAlgorithmException | CertificateException | IOException
				| UnrecoverableKeyException exception) {
			throw new RuntimeException("Error creating KeyManagerFactory", exception);
		}
	}
}
```
#### To generate a valid certificate {#to-generate-a-valid-certificate}

If you don't have a valid certificate, you can generate one for testing purposes, following the instructions below.

1.  Download the scripts from the [cumulocity-examples](https://github.com/SoftwareAG/cumulocity-examples/tree/develop/mqtt-client/scripts) repository.
2.  Create a root self-signed certificate (execute the script *00createRootSelfSignedCertificate.sh*) and upload it to your tenant. You can do it via [the Device management application in the UI](/device-management-application/managing-device-data/#managing-trusted-certificates) or via [REST](https://{{< domain-c8y >}}/api/core/#tag/Tenant-API).
3.  Create and sign the certificate (execute the script *01createSignedCertificate.sh*).
4.  Move the certificates to keystore (execute the script *02moveCertificatesToKeystore.sh*).
5.  Download Public Server key from respective environment and import it into JKS using this command:

```shell
$ keytool -import -file platform.dev.c8y.io.crt -alias servercertificate -keystore truststore.jks 
```

The code of the {{< product-c8y-iot >}} client implemented in Java, which connects to the platform using x.509 certificates, is available here: https://github.com/SoftwareAG/cumulocity-examples/tree/develop/device-jwt-rest-client.
The following configuration is required before calling the device access token API:

* KEYSTORE_NAME - The path to your keystore which contains the private key and the chain of certificates, which the device uses to authenticate itself.
* KEYSTORE_PASSWORD is the password created for keystore to use its private key.
* KEYSTORE_FORMAT - Either "JKS" or "PKCS12" depending on the file format. The path is provided by KEYSTORE_NAME.
* TRUSTSTORE_NAME - The path to your truststore which contains the certificate of the server.
* TRUSTSTORE_PASSWORD - The password to access the truststore.
* TRUSTSTORE_FORMAT - Either "JKS" or "PKCS12" depending on the file format. The path is provided by TRUSTSTORE.
* PLATFORM_URL - The URL of the platform.
* DEVICE_ACCESS_TOKEN_PATH API - The endpoint responsible for the mTLS protocol.
* LOCAL_DEVICE_CHAIN - The whole chain in PEM format.

### To change the configuration {#to-change-the-configuration}

To change the configuration in the REST java client, copy the file *chain-with-private-key-iot-device-0001.jks* into the resource folder and set the configuration. Note that the script employed (Step 4.) uses the password `changeit`. If you changed the value in the script, also do it for `KEYSTORE_PASSWORD` and `TRUSTSTORE_PASSWORD` in the following example.

```java
private static final String KEYSTORE_NAME = "chain-with-private-key-iot-device-0001.jks";
private static final String KEYSTORE_PASSWORD = "changeit";
private static final String KEYSTORE_FORMAT = "jks";

private static final String TRUSTSTORE_NAME = "truststore.jks";
private static final String TRUSTSTORE_PASSWORD = "changeit";
private static final String TRUSTSTORE_FORMAT = "jks";

private static final String LOCAL_DEVICE_CHAIN = "-----BEGIN CERTIFICATE----- MIIcQhNJJ0F/lfjm -----END CERTIFICATE-----";
private static final String PLATFORM_URL = "<URL of the platform>";
```  

The device can now generate JWT token. Note that before the first connect no other actions are required, for example, creating a user. The user is created during the [auto registration](/device-integration/certificate/#device-certificates) process.

{{< c8y-admon-info >}}
You do not need to set a password, user or tenant for the REST java client using certificates. {{< product-c8y-iot >}} will recognize the tenant and the user by the provided certificate.
{{< /c8y-admon-info >}}

After filling in this data, the example client will use the provided data to retrieve the device access token to the specified platform using certificates.

In general, the mTLS protocol client uses the Java Secure Socket Extension, which is part of the Java Development Kit, to provide secure connections via SSL.
JSSE provides the Java implementation of the SSL and TLS protocol which can be configured by developers using its classes.
The documentation of the Java Secure Socket Extension shows how the SSL connection is established and provides some examples of customizing the implementation.
The full document is available on the [official Oracle website](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html).
{{< product-c8y-iot >}} mTLS protocol supports secured SSL connections.

What does the code in `main` do?

-   Configure the mTLS connection.
-   Connect with {{< product-c8y-iot >}} via a mTLS protocol.
-   Generate JWT token after successful authentication using X.509 certificates.
-   Using this JWT token further rest operation can be done without any certificates.

#### Build and run the application {#build-and-run-the-application}

Use the following commands to build the application:

```shell
$ cd x509-rest-client
$ mvn clean install
...
[INFO]
[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ x509-rest-client ---
[INFO] Building jar: /home/schm/Pulpit/device-jwt-rest-client/target/x509-rest-client-1.0-SNAPSHOT.jar
[INFO]
[INFO] --- maven-install-plugin:2.4:install (default-install) @ x509-rest-client ---
[INFO] Installing /home/schm/Pulpit/x509-rest-client/target/x509-rest-client-1.0-SNAPSHOT.jar to /home/schm/.m2/repository/c8y/example/x509/x509-rest-client/1.0-SNAPSHOT/x509-rest-client-1.0-SNAPSHOT.jar
[INFO] Installing /home/schm/Pulpit/x509-rest-client/pom.xml to /home/schm/.m2/repository/c8y/example/x509/x509-rest-client/1.0-SNAPSHOT/x509-rest-client-1.0-SNAPSHOT.pom
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 2.642 s
[INFO] Finished at: 2017-03-14T09:16:25+01:00
[INFO] Final Memory: 14M/301M
[INFO] ------------------------------------------------------------------------
```

and this command to run it:

```shell
$ mvn exec:java -Dexec.mainClass="c8y.example.x509.X509RestClient"
...
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building x509-rest-client 1.0-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO]
[INFO] --- exec-maven-plugin:1.6.0:java (default-cli) @ x509-rest-client ---
access_token ="eyJhbGciOiJSUI6IkpXVCJ9.eyJktYTJmYy0x...S 04HPk3GQUd-fHyJ2oKSuetWFWpUSBPzJzl_73_3yauIlplHorlSoQ"
```