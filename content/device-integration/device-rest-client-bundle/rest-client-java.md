---
weight: 80
title: Rest client java
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
$ mvn archetype:generate -DgroupId=c8y.example -DartifactId=device-jwt-rest-client -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
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

Edit the _App.java_ file located in the folder device-jwt-rest-client -java/src/main/java/c8y/example_ with the following content:

```java
package c8y.example;

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

public class MtlsClient {

	// Configuration
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

	//PEM format
	// example. LOCAL_DEVICE_CHAIN = "-----BEGIN CERTIFICATE----- MIIcQhNJJ0F/lfjm -----END CERTIFICATE-----";

	/**
	 * The main method.
	 *
	 * @param args the arguments
	 * @throws Exception the exception
	 */
	public static void main(String[] args) throws Exception {

		TrustManagerFactory trustManagerFactory = getTrustManagerFactory();
		KeyManagerFactory keyManagerFactory = getKeyManagerFactory();
		SSLContext sslContext = getSSLContext(trustManagerFactory, keyManagerFactory);
		HttpClient httpClient = HttpClient.newBuilder().sslContext(sslContext).build();

		HttpResponse<String> response = httpClient.send(buildRequest(), HttpResponse.BodyHandlers.ofString());
		System.out.println(response.body());
	}

	/**
	 * Gets the SSL context.
	 *
	 * @param trustManagerFactory the trust manager factory
	 * @param keyManagerFactory the key manager factory
	 * @return the SSL context
	 */
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

	/**
	 * Gets the trust manager factory.
	 *
	 * @return the trust manager factory
	 */
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

	/**
	 * Gets the key manager factory.
	 *
	 * @return the key manager factory
	 */
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

Replace `KEYSTORE_NAME`, `KEYSTORE_PASSWORD`, `KEYSTORE_FORMAT`, `TRUSTSTORE_NAME`, `TRUSTSTORE_PASSWORD`, `TRUSTSTORE_FORMAT`, `PLATFORM_URL` and `LOCAL_DEVICE_CHAIN` as needed.

{{< product-c8y-iot >}} mTLS protocol supports secured SSL connections.

What does the code in `main` do?

-   Configure the mTLS connection.
-   Connect with {{< product-c8y-iot >}} via a mTLS protocol.
-   Generate JWT token after successful authentication using X.509 certificates.
-   Using this JWT token further rest operation can be done without any certificates.

#### Build and run the application {#build-and-run-the-application}

Use the following commands to build the application:

```shell
$ cd mtls-rest-client
$ mvn clean install
...
[INFO]
[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ device-jwt-rest-client ---
[INFO] Building jar: /home/schm/Pulpit/device-jwt-rest-client/target/device-jwt-rest-client-1.0-SNAPSHOT.jar
[INFO]
[INFO] --- maven-install-plugin:2.4:install (default-install) @ device-jwt-rest-client ---
[INFO] Installing /home/schm/Pulpit/device-jwt-rest-client/target/device-jwt-rest-client-1.0-SNAPSHOT.jar to /home/schm/.m2/repository/c8y/example/device-jwt-rest-client/1.0-SNAPSHOT/device-jwt-rest-client-1.0-SNAPSHOT.jar
[INFO] Installing /home/schm/Pulpit/mtls-rest-client/pom.xml to /home/schm/.m2/repository/c8y/example/device-jwt-rest-client/1.0-SNAPSHOT/device-jwt-rest-client-1.0-SNAPSHOT.pom
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
$ mvn exec:java -Dexec.mainClass="c8y.example.App"
...
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building device-jwt-rest-client 1.0-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO]
[INFO] --- exec-maven-plugin:1.6.0:java (default-cli) @ device-jwt-rest-client ---
access_token ="eyJhbGciOiJSUI6IkpXVCJ9.eyJktYTJmYy0x...S 04HPk3GQUd-fHyJ2oKSuetWFWpUSBPzJzl_73_3yauIlplHorlSoQ"
```