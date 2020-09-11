---
weight: 60
title: Authentication
layout: redirect
---

The authentication setting is used to authenticate and authorize the server user. It tells the gateway how to create a user identity and how to send it to the OPC UA server when establishing a connection. The following authentication methods can be selected:

- Anonymous - Anonymous connection will only work when the OPC UA server allows such connections.
- Username/Password - With this setting the gateway will connect to the server as a specific user represented by a username and password.
- Key-based authentication - The gateway will use an existing certificate to authenticate as a specific user. JKS keystore must be uploaded to Cumulocity IoT as a binary with type “application/octet-stream”. This keystore must follow the following rules:
    - It has to be a Java keystore (JKS).
    - The keystore itself has to be password-protected.
    - The keystore has to contain user certificate with  “opcuauser” alias.
    - The user certificate has to be password-protected.

The keystore can be create via the following Java keytool command:

```bash
keytool -genkey -keyalg RSA -alias opcuauser -keystore keystore.jks -storepass passw0rd_a -validity 3600 -keysize 2048
```
![terminal](/images/device-protocols-guide/opcua/opcua-terminal.png)

The keystore can then be verified by using a tool like KeystoreExplorer.

![Keystore explorer](/images/device-protocols-guide/opcua/opcua-keystore-explorer1.png)


![Keystore explorer2](/images/device-protocols-guide/opcua/opcua-keystore-explorer2.png)

The keystore can then be uploaded as binary in Cumulocity IoT and it can be used in the server configuration.

![Opcua Keystore](/images/device-protocols-guide/opcua/opcua-keystore.png)
