---
weight: 80
title: Device certificates (beta)
layout: redirect
---

### Overview

Devices can authenticate against the Cumulocity IoT platform using X.509 client certificates.  

Devices can communicate using the MQTT interface of the platform, but MQTT over WebSocket is not supported. The Cumulocity IoT platform expects devices to connect using SSL on port 8883.

Each tenant individually defines whom it trusts by uploading the base CA certificate.

Devices connecting to the platform with certificates do not need to provide the tenant ID, username and password. Authentication information will be obtained from the certificates.

#### General requirements for connecting devices with certificates

* The CA certificate may also be a self-signed certificate.
* Certificates used by devices must be a full chain, including the uploaded CA certificate.
* The device needs to trust the Cumulocity IoT certificate.
* Uploaded certificates have to be version 3.
* Uploaded certificates have to have set `BasicConstraints:[CA:true]`.
* Devices have to be registered or the uploaded certificates need to have the flag _autoRegistrationEnabled_ (see below for details).
* Certificates used by devices must be signed either by uploaded CA certificates or by a chain of certificates signed by uploaded CA certificates.

### Registering devices using certificates

Cumulocity IoT supports two ways to register devices which will be able to connect using certificates:

**Auto registration**

The user for the device will be created during the first MQTT call, if at least one uploaded certificate has _autoRegistrationEnabled_ set to true.

**Bulk registration**

The user for the device can also be created via the standard bulk registration in Device Management.

The CSV file used in bulk registration should meet the requirements described in [Bulk device credentials](/reference/device-credentials/#bulk-device-credentials) in the *Reference guide*. Moreover, it is required that the CSV file has an additional column "AUTH_TYPE" with value "CERTIFICATES", and that the column "CREDENTIALS" is either not present or has an empty value.

### JWT Token retrieval

A device which is connected by certificates can receive a token which can later be used to authenticate HTTP requests. Note that [JWT token authentication](/reference/rest-implementation/#http-usage) must be enabled to receive a token.

* First the device subscribes to the topic <kbd>s/dat</kbd>.
* Then the device publishes an empty message on the topic <kbd>s/uat</kbd>.
* After a while a token will be published on the subscribed <kbd>s/dat</kbd> topic in the format:

```plain
71,<<Base64 encoded JWT token>>
```

### Introduction to X.509 certificates

X.509 is a standard defining public key certificates, which are commonly used in the SSL protocol to provide secure connection and data transfer. After the initial release of the X.509, it was modified two times which resulted in version 3 being up-to-date since 1995.

The general purpose of the certificate is to bind an identity to the pair of keys, for which the public key is commonly known as a part of the certificate and the private key should be known only to the certificate owner. Such pair of keys should be created with asymmetric-key algorithm, which is considered safe nowdays. The example of such algorithm is RSA with at least 2048 bits key size, because the size of 1024 bits or lower is no longer considered safe. Then private key can be used in the two ways:
* To prove that the message was sent by the certificate owner - The owner encrypts some message and send it. Then the receiver can decrypt it with the sender public key which is commonly known. If the decrypted message is the one he was awaiting, then he can be sure that it was sent by the certificate owner.
* To read a message intended only for the certificate owner - If someone encrypts the message with receiver public key, then only the owner of the private key would be able to decrypt it. No third party who somehow intercepted the message will be able to read it.

Every certificate can be self-signed or can be signed by another certificate. To tell if the certificate is self-signed you can look at the "Issuer Name" and "Subject Name" fields of the certificate. If they are the same then it means that it is self-signed certificate, otherwise the certificate claims to be signed by the issuer. To verify if the issuer really signed the certificate, you have to check the "Signature" field of the certificate. That signature after decryption with issuer public key, should match the data of the signed certificate. Signing one certificate by another provides the information, that if the issuer's certificate is trusted then the signed certificate also should be. For example if the platform trusts the customer certificate and that customer has 20 devices with individual certificates, then he does not have to upload each one of them. If these devices certificates are signed by the customer certificate, then the platform should trust them too. The chain of the certificates can differ in length, so if the platform trusts certificate A and certificate B is signed by A, and certificate C is signed by B, then certificate C will also be trusted. However, there are a few things to keep in mind:
* The device always has to send the whole chain of the certificates, starting with the one belonging to the device, until it reaches the CA certificate directly trusted by the platform. Without it the platform would not be able to verify signatures of every certificate.
* Every certificate which is used to sign another certificate has to contain the extension "CA:TRUE".
* Chain of the certificates length can be restricted by the certificate extension "Path Length". That extension says how many other CA certificates can be maximally placed in the chain, between the device certificate and the one with that extension. For example the valid chain of the certificates with minimal values of path length would look like: A (CA:TRUE, Path Length: 2) -> B (CA:TRUE, Path Length: 1) -> C (CA:TRUE, Path Length: 0) -> D (device with CA:FALSE).

The structure of the X.509 Certificate in version 3 looks like:
* Version (The version number of the x.509 certificate),
* Serial Number (Unique serial number that is created for each certificate that is created by an issuer),
* Issuer (The distinguished name of the issuer),
* Not Before (Date since the certificate is valid),
* Not After (Date since the certificate is expired),
* Subject (Distinguished name of the validated entity to which the certificate is issued),
* Public Key Algorithm (Algorithm used to generate the public key),
* Subject Public Key (Public key value),
* Certificate Signature Algorithm (Algorithm used to generate the certificate signature),
* Certificate Signature (Certificate signature generated by encrypting certificate data with the issuer private key),
* Extensions (optional - are responsible for providing many different information, for example if the certificate is CA, what means that it can be used to sign another certificate. Added in version 3 of the X.509),
* Issuer Unique Identifier (optional - can be present in the certificate to handle the possibility of reuse of issuer names),
* Subject Unique Identifier (optional - can be present in the certificate to handle the possibility of reuse of subject names).

To show how the authentication with X.509 certificates work, there is an example of the simplified mutual SSL handshake: 

![Simplified mutual SSL handshake](/images/mqtt/sslMutualSimplified.png)

Server knows that the client is the owner of the certificate it sent, after server decrypts the encrypted copy of the message with the client's public key. Client knows that the server is the owner of the certificate it sent, if server uses correct session key, because that means that server decrypted it with its private key. In basic authentication with username and password, the password has to be sent to authenticate the user. When certificates are used, the private key is never sent, what makes the use of the certificates much more secure than the basic authentication with username and password.

There are 2 important terms connected to x.509 certificates, which should be known to everyone who wants to start working with them: keystore and truststore. 
* Keystore is a file, which devices uses to authenticate himself in mutual ssl. That means that keystore contains chain of the certificates used by the device and the private key of the device. 
* Truststore is also a file, but it contains all trusted certificates. That means that the server or the device would only establish the connection with something, what is using the certificate from their truststore. When the chain of the certificates is used, then it is enough if one of the certificates from the chain is trusted to establish the connection. 

Both, keystore and truststore can be stored in the same file, but for security reason it is recommended to keep them separately since truststore contains public data and keystore contains the private key, which should not be known by anyone else. The most popular format for these files is PKCS12, which is the universal format for every programming language. However, for the platforms or devices which are using Java, it is common to use JKS format, which is the Java-specific one.

### Generating and signing certificates

To generate we will use OpenSSL toolkit. If you do not have it already installed, then you can download if from the website: https://www.openssl.org/source/

#### Create self-signed CA certificate:
1. Create a directory for the root certificate and signing configuration, for example: `mkdir /home/kczu/Desktop/caCertificate`
2. Go into created directory and create configuration file for your CA certificate: `touch caConfig.cnf`
3. Create in that directory database file for keeping history of certificates signed by CA: `touch database.txt`
4. Create a serial file with initial serial number, which will be used to identify signed certificates. After assigning this serial to the signed certificate, the value in this file will be automatically incremented: `echo 1000 > serial`
5. Create subdirectories for signed certificates and certificate revocation list: `mkdir deviceCertificates crl`
6. Fulfill configuration file. This is the example configuration, which can be used after changing directories to these, used on your platform:
    
    
    [ ca ]
    default_ca = CA_default

    [ CA_default ]
    # Directory and file locations.
    dir               = /home/kczu/Desktop/caCertificate
    certs             = $dir # directory where ca certificate will be stored.
    crl_dir           = $dir/crl # directory to certificate revocation list.
    new_certs_dir     = $dir/deviceCertificates # directory where certificates signed by ca certificate will be stored.
    database          = $dir/database.txt # database file, where certificates operation history will be stored.
    serial            = $dir/serial # directory to the file, which stores next value that will be assigned to signed certificate.

    # The root key and root certificate for signing other certificates.
    private_key       = $dir/caKey.pem # ca private key which will be used for signing certificates.
    certificate       = $dir/caCert.pem # ca certificate, which will be the issuer of signed certificate.

    default_md        = sha256 # hash function
    default_days      = 375 # default number of days since the date of generation, till the certiface is valid.
    preserve          = no # if set to 'no' then it will determine the same order of the distinguished name in every signed certificate.
    policy            = signing_policy # the name of the tag in this file, which specifies fields of the certificate, which has to be fulfilled or even match the CA certificate value to be signed.
    
    # For certificate revocation lists.
    crl               = $crl_dir/caCrl.pem # ca certificate revocation list
    crlnumber         = $crl_dir/crlnumber # serial, but for the certificate revocations
    crl_extensions    = crl_ext # default extensions to crl, which can be stored under this specified tag in this config in the same way as x509_extensions.
    default_crl_days  = 30 # default number of days since the date of generation, till the revocation list is up-to date. After that date it should be updated to see, if there are new entries on the list. 
    
    [ req ]
    default_bits        = 4096 # default key size in bits.
    distinguished_name  = req_distinguished_name # the name of the tag in this file, which specifies certificates fields description, during certificate creation and eventually set some default values.
    string_mask         = utf8only # permitted string type mask.
    default_md          = sha256 # hash function.
    x509_extensions     = v3_ca # the name of the tag in this file, which specifies certificates extensions, which will be add to the created certificate by default.
    
    # descriptions and default values of the created certificate fields.
    [ req_distinguished_name ]
    countryName                     = Country Name (2 letter code)
    stateOrProvinceName             = State or Province Name
    localityName                    = Locality Name
    organizationName                = Organization Name
    organizationalUnitName          = Organizational Unit Name
    commonName                      = Common Name
    emailAddress                    = Email Address
    
    # default value for each field can be set by adding extra line with field name and postfix "_default". For example: countryName_default = PL. If you add this line here, then leaving country name empty during certificate creation will result in value 'PL' automatically fulfilled. If the default value was specified there, but during certificate creation you do not want to fulfill value of this field, even with default value then you should put "." as the value. It will leave the field value empty even with the specified default.
    
    # default extensions for ca certificate.
    [ v3_ca ]
    subjectKeyIdentifier = hash # subject key value will be calculated using hash funtion. It's the recommended setting by PKIX.
    authorityKeyIdentifier = keyid:always,issuer # subject key identifier will be copied from parent certificate. It's the recommended setting by PKIX.
    basicConstraints = critical, CA:true, pathlen:50 # says if it it the ca certificate so it can be used to sign different certificates. Also specified maximum path length between this certificate and the device certificate in the chain of certificates during authentication. Path length is set to just show how to do it. If you do not want to specify max path length, you can keep only the "basicConstraints = critical, CA:true" part.
    keyUsage = digitalSignature, cRLSign, keyCertSign # specifies permitted key usages.

    # default extensions for signed certificate. This tag is not used directly anywhere in this file, but will be used from the command line to create signed certificate with "-extensions v3_signed".
    [ v3_signed ]
    subjectKeyIdentifier = hash
    authorityKeyIdentifier = keyid,issuer
    basicConstraints = critical, CA:false
    keyUsage = nonRepudiation, digitalSignature, keyEncipherment
    
    # default extensions for certificate revocation list
    [ crl_ext ]
    authorityKeyIdentifier=keyid:always
    
    # policy of certificates signing. It specifies, which certificate fields has to be fulfilled during certificate creation. There are three possible values here:
    # "optional" - field value can be empty
    # "supplied" - field value must be fulfilled
    # "match" - signed certificate field value must match the ca certificate value to be created
    [ signing_policy ]
    countryName             = optional
    stateOrProvinceName     = optional
    organizationName        = optional
    organizationalUnitName  = optional
    commonName              = supplied # every certificate should have fulfilled, unique common name, so that value should not be changed.
    emailAddress            = optional
7. Create private key with aes256 encryption and the length of at least 2048 bits. You will be also asked to set the password for the key during its creation: `openssl genrsa -aes256 -out caKey.pem 4096`
8. Create self-signed certificate using specifications from configuration file. The days parameter says how long this certificate will be valid since the generation, so set it as you prefer: `openssl req -config caConfig.cnf -key caKey.pem -new -x509 -days 7300 -sha256 -extensions v3_ca -out caCert.pem`
9. You can print created certificate with command: `openssl x509 -noout -text -in caCert.pem`

#### Creating intermediate certificate
The intermediate certenertificateificate is signed by the CA certificate, but will be also used to sign device certificates. This step is optional. If you are fine with signing all the devices certificates with one common ca certificate, then you can skip this step. However, if you need some certificates between CA certificate and the device certificate then it is the way to go:
1. Create new directory for intermediate certificate inside caCertificate path: `mkdir intermediateCertificate`
2. Go into created directory and create configuration file for your intermediate certificate: `touch intermediateConfig.cnf`
3. Create in that directory database file for keeping history of certificates signed by intermediate: `touch database.txt`
4. Create serial file with initial serial number, which will be used to identify signed certificates: `echo 1000 > serial`
5. Create subdirectories for signed certificates and certificate revocation list: `mkdir deviceCertificates crl`
6. Fulfill configuration file as in the CA configuration, but remember to change the general directory ("dir") to your intermediateCertificate folder. Also don't forget to change private_key, certificate and crl names from current with "ca" prefix to "intermediate" prefix (for example: caKey.pem -> intermediateKey.pem), because files with this prefix will be generated in the next steps.
7. Generate private key for intermediate certificate: `openssl genrsa -aes256 -out intermediateKey.pem 4096`
8. Generate certificate signing request: `openssl req -config intermediateConfig.cnf -new -sha256 -key intermediateKey.pem -out intermediateCsr.pem`
9. Go into caCertificate directory, which has to sign this intermediate and generate certificate: `openssl ca -config caConfig.cnf -extensions v3_ca -days 3650 -notext -md sha256 -in intermediateCertificate/intermediateCsr.pem -out intermediateCertificate/intermediateCert.pem`
10. Verify if generated certificate is correctly signed by ca: `openssl verify -CAfile caCert.pem intermediateCertificate/intermediateCert.pem`   

#### Creating device certificate signed by CA or intermediate:
1. Go into directory of your caCertificate or intermediateCertificate depending on which one is to sign the device certificate.
2. Generate private key for new certificate: `openssl genrsa -aes256 -out deviceCertificates/deviceKey.pem 4096`
3. Generate certificate signing request (change "caConfig.cnf" to "intermediateConfig.cnf" if you are in the intermediateCertificate directory): `openssl req -config caConfig.cnf -new -sha256 -key deviceCertificates/deviceKey.pem -out deviceCertificates/deviceCsr.pem`
4. Generate certificate signed by the ca or intermediate (change "caConfig.cnf" to "intermediateConfig.cnf" if you are in the intermediateCertificate directory): `openssl ca -config caConfig.cnf -extensions v3_signed -days 365 -notext -md sha256 -in deviceCertificates/deviceCsr.pem -out deviceCertificates/deviceCert.pem`
5. verify if generated certificate is correctly signed by CA or intermediate (change "caCert.pem" to "intermediateCert.pem" if you are in the intermediateCertificate directory): `openssl verify -partial_chain -CAfile caCert.pem deviceCertificates/deviceCert.pem`    
      
#### Creating chain of the certificates:
Go into your caCertificate directory. If you created the CA certificate, which was used to sign the intermediate certificate and then the intermediate certificate was used to sign the device certificate, then you create your chain with command: `cat intermediateCertificate/deviceCertificates/deviceCert.pem intermediateCertificate/intermediateCert.pem caCert.pem > intermediateCertificate/deviceCertificates/deviceCertChain.pem`
If you are not using the intermediate certificate then the command is: `cat deviceCertificates/deviceCert.pem caCert.pem > deviceCertificates/deviceCertChain.pem`
If you are using multiple intermediate certificates between CA certificate and the device certificate, then remember that you have to keep the correct order during chain creation (Every certificate has to be followed by the certificate, which it is signed by).

#### Creating keystore and truststore:
1. Go into your deviceCertificates directory with the device private key and the generated chain of the certificates. If you are using intermediate certificate between CA certificate and the device certificate then it will be caCertificate/intermediateCertificate/deviceCertificates path, otherwise it will be caCertificate/deviceCertificates. Create keystore using generated chain of the certificates and the private key of the device: `openssl pkcs12 -export -name devicekeyentry -inkey deviceKey.pem -in deviceCertChain.pem -out deviceKeystore.pkcs12`
2. If you want to convert your keystore to JKS format then you would need the Keytool which is downloaded together with every Java Development Kit: `keytool -importkeystore -srckeystore deviceKeystore.pkcs12 -srcstoretype PKCS12 -destkeystore deviceKeystore.jks -deststoretype JKS`

3a. Now you can create a truststore, which will contain the server certificate. It has to be created with Java Keytool (openssl does not support creating truststore, so if you don't want to use Java keytool then you will have to keep every trusted certificate in separated pem file):
* In PKCS12 format: `keytool -importcert -noprompt -keystore deviceTruststore.pkcs12 -alias servercertificate -file serverCertificate.pem`
* In JKS format: `keytool -import -file caCert.pem -alias servercertificate -keystore deviceTruststore.jks`

3b. Or add trusted certificates to your created keystore and store everything in the one file, which is not the recommended solution:
* If your keystore is in the PKCS12 format: `keytool -importcert -noprompt -keystore deviceKeystore.pkcs12 -alias servercertificate -file serverCertificate.pem`
* If your keystore is in the JKS format: `keytool -import -file trustedCertificate.pem -alias servercertificate -keystore deviceKeystore.jks`
4. You can check the content of your keystore (or truststore) with command: `keytool -list -v -keystore deviceKeystore.jks`

### How to test created certificates with MQTT.fx client
1. Generate keystore as described in the "Generating and signing certificates" chapter if you didn't do it yet.
2. Get server certificate in pem format: `openssl s_client -showcerts -connect <cumulocity url>:<mqtt mutual ssl port (currently 1884, but that can be changed in the future)> | openssl x509 -outform PEM > serverCertificate.pem`
for example the full line to execute with filled url and port in my local environment looks like: `openssl s_client -showcerts -connect cumulocity.default.svc.cluster.local:1884 | openssl x509 -outform PEM > serverCertificate.pem`
3. Create new truststore with the server certificate: `keytool -import -file serverCertificate.pem -alias servercertificate -keystore deviceTruststore.jks`
4. Upload your CA (or intermediate) certificate to the platform, which can be done in two ways:
* Via UI:
1) You have to open devicemanagement application, then navigate to management/trusted certificates tab.
2) Drop your caCert.pem (or intermediateCert.pem).
3) Check the auto-registration field.
4) Click on the certificate status to make it "Enabled".
5) Insert some custom name.
6) Click on the "Add certificate" button.
After completing all the steps excluding adding the certificate, the form should look like this:

![MQTT.fx configuration](/images/mqtt/mqttTrustedCertificateAddition.png)

* Via REST:
1) Display your CA (or intermediate) certificate, which you want to upload into cumulocity platform and copy its PEM value, which starts with -----BEGIN CERTIFICATE----- and ends with -----END CERTIFICATE----- (including these lines). Remove new line symbols '\n' if they were added automatically at the end of each line: `openssl x509 -in caCert.pem -text`
2) Send it in the POST request to the platform.
    
    
    Required role: ROLE\_TENANT\_ADMIN

    POST /tenant/tenants/<<tenantId>>/trusted-certificates
    Host: <cumulocity url>
    Authorization: Basic <your basic authentication value>
    Content-Type: application/json
    {
    	"status" :  "ENABLED",
    	"name" : "certificateName",
    	"autoRegistrationEnabled" : "true",
    	"certInPemFormat" : "<<your copied certificate PEM value>>"
    }

5. Download and install the newest MQTT.fx client from: http://www.jensd.de/apps/mqttfx/
6. In MQTT.fx click one of the top buttons named "Extras" and then "Edit Connection Profiles"
7. Insert cumulocity url in the "Broker address" line.
8. Insert SSL port in the "Broker port" line.
9. In the "Client ID" field, you have to insert the common name of your device certificate.
10. As a type of the authentication choose SSL/TLS.
11. Click on the "Enable SSL/TLS" button to be checked.
12. Choose SSLv3 protocol.
13. Choose "Self signed certificates in keystores"
14. In "Keystore File" insert the path to your deviceTruststore.jks file.
15. In "Trusted Keystore Alias" insert "servercertificate" or a different value if you provided a different alias in step 3 of this chapter.
16. In "Trusted Keystore Password" insert the password, which you created during the deviceTruststore.jks creation.
17. In "Client Keystore" insert the path to your deviceKeystore file with either JKS or PKCS12 format.
18. In "Client Keystore Password" insert the password, which you created during the deviceKeystore creation.
19. In "Client KeyPair Alias" insert "devicekeyentry" or a different value if you provided a different alias in the "-name" parameter during step about keystore creation in "Generating and signing certificates" chapter.
20. In "Client KeyPair Password" insert the password, which you created during the deviceKey.pem creation.
21. The "PEM formatted" field should be checked.
22. Save and close the settings.
23. Choose the edited profile and click connect. 
24. You should be succesfully connected and buttons "Disconnect", "Publish", "Subscribe" should be now active. That means that your connection with the certificates work correctly.

![MQTT.fx configuration](/images/mqtt/mqttFxConfig.png)

### Cumulocity MQTT Example Client 
The code of example MQTT client implemented in Java, which connects to the platform using x.509 certficiates, is available there: https://bitbucket.org/m2m/cumulocity-examples/src/develop/mqtt-client/
This example client uses the implementation of Eclipse Paho, which is described in detail on their website: https://www.eclipse.org/paho/index.php?page=documentation.php. The provided example shows how to easily add the needed dependency in maven to use Eclipse Paho client:
    
    <dependency>
        <groupId>org.eclipse.paho</groupId>
        <artifactId>org.eclipse.paho.client.mqttv3</artifactId>
        <version>${paho.version}</version>
    </dependency>
Then the instance of the MQTT client can be created with a single line:
MqttClient mqttClient = new MqttClient(BROKER_URL, "d:" + CLIENT_ID, new MemoryPersistence());
The BROKER_URL should contain protocol, url and port, which client will connect to. For example to connect the client to my local instance, I would fill it with the value: "ssl://cumulocity.default.svc.cluster.local:1884". The CLIENT_ID value has to match the value of the Common Name of the device certificate that will be used. The "d:" prefix is used in cumulocity for device connections and it should not be removed or changed.
Now the only thing that needs to be configured to establish the SSL connection is to fill the paths in the code fragment:
    
    sslProperties.put(SSLSocketFactoryFactory.KEYSTORE, getClass().getClassLoader().getResource(KEYSTORE_NAME).getPath());
    sslProperties.put(SSLSocketFactoryFactory.KEYSTOREPWD, KEYSTORE_PASSWORD);
    sslProperties.put(SSLSocketFactoryFactory.KEYSTORETYPE, KEYSTORE_FORMAT);
    sslProperties.put(SSLSocketFactoryFactory.TRUSTSTORE, getClass().getClassLoader().getResource(TRUSTSTORE_NAME).getPath());
    sslProperties.put(SSLSocketFactoryFactory.TRUSTSTOREPWD, TRUSTSTORE_PASSWORD);
    sslProperties.put(SSLSocketFactoryFactory.TRUSTSTORETYPE, TRUSTSTORE_FORMAT);
* KEYSTORE_NAME is the path to your keystore, which contains the private key and the chain of the certificates, which device will use to authenticate itself.
* KEYSTORE_PASSWORD is the password created for keystore to use its private key.
* KEYSTORE_FORMAT should be "JKS" or "PKCS12" depending on the file format, which path is provided in the KEYSTORE_NAME.
* TRUSTSTORE_NAME is the path to your truststore, which contains the certificate of the server.
* TRUSTSTORE_PASSWORD is the password to access the truststore.
* TRUSTSTORE_FORMAT should be "JKS" or "PKCS12" depending on the file format, which path is provided in the TRUSTSTORE.
After fulfilling this data, the example client will use provided data to connect to the specified platform using certificates. The example also presents how to create the callback for the connection. First thing is to create the class which implements the interface MqttCallbackExtended. Then such class can be created and the instance of it can be simply provided to the MQTT client: mqttClient.setCallback(this);

In general MQTT Eclipse Paho Client uses Java Secure Socket Extension, which is the part of the Java Development Kit, to provide secure connections via SSL. JSSE provides the Java implementation of the SSL and TLS protocol, which can be configured by developers using its classes. The documentation of the Java Secure Socket Extension shows how the SSL connection is established and provides some examples of customizing the implementation. Full document is available on the official Oracle website: https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html