---
weight: 50
layout: redirect
title: Services platform and SMS API
---

This section describes the Cumulocity SMS API and shows how to access it using the Cumulocity Java Client. You will also learn how to send and receive SMS messages via the Java Client API.

### Using the services platform

The services platform interface is responsible for connecting to the Java services (SMS) API.

```java
ServicesPlatform platform = new ServicesPlatformImpl("<URL>", new CumulocityCredentials("<tenant>", "<user>", "<password>", "<application key>"));
```

The URL pointing to the platform must be of the form *&lt;tenant>.cumulocity.com*, for example *https://demos.cumulocity.com*, which will process all the API requests.

**Info**: You need to have appropriate credentials to be able to access the Services API from outside. See the example above.

### Accessing the SMS Messaging API

The following code snippet shows how to obtain a handle to the SMS API from Java.

```java
SmsMessagingApi smsMessagingApi = platform.getSmsMessagingApi();
```

Using this handle, you can send and retrieve the SMS messages from Java by calling its functions.

### Assigning required roles

To use the SMS messaging API, the user must have the required roles SMS_ADMIN and SMS_READ for sending and receiving messages respectively.
Refer to [Administration > Managing permissions](/guides/users-guide/administration#managing-permissions) in the User guide.

### Choosing a SMS provider

#### OpenIT

OpenIT credentials can be assigned using the Administration application. Click **OpenIT credentials** in the navigator and save these credentials for your tenant.

![OpenIT Credentials](/images/java/java-client-services/openit_credentials.png)

Note that receiving messages and receiving specific messages are not supported for this provider.

#### Jasper Control Center

Refer to [Optional services > Connectivity](/guides/users-guide/optional-services#connectivity) in the User guide for information about how to set these credentials.

#### Ericsson

Use our Rest API to store tenant options separately for each key:

```http
POST /tenant/options
Host: ...
Authorization: Basic ...
```

Provider:

```json
{
    "category": "messaging",
    "key": "provider",
    "value": "ericsson-dcp"
}
```

Base URL:

```json
{
    "category": "messaging",
    "key": "ericsson-dcp.baseUrl",
    "value": "<URL>"
}
```

Username:

```json
{
    "category": "messaging",
    "key": "ericsson-dcp.username",
    "value": "<username>"
}
```

Password:

```json
{
    "category": "messaging",
    "key": "ericsson-dcp.password",
    "value": "<password>"
}
```

Sender address:

```json
{
    "category": "messaging",
    "key": "sms.senderAddress",
    "value": "<The phone number all SMS will be sent from (provided by Ericsson DCP)>"
}
```

Sender name:

```json
{
    "category": "messaging",
    "key": "sms.senderName",
    "value": "<The name associated with the phone number>"
}
```

Note that receiving specific messages is not supported for this provider.

#### Telia Sonera

Use our Rest API to store tenant options separately for each key:

```http
POST /tenant/options
Host: ...
Authorization: Basic ...
```

Provider:

```json
{
    "category": "messaging",
    "key": "provider",
    "value": "soneraoma"
}
```

Username of Telia Sonera Client Application:

```json
{
    "category": "messaging",
    "key": "soneraoma.username",
    "value": "<username>"
}
```

Password assigned for Telia Sonera Client Application:

```json
{
    "category": "messaging",
    "key": "soneraoma.password",
    "value": "<password>"
}
```

Telia Sonera OAuth Service Endpoint:

```json
{
    "category": "messaging",
    "key": "soneraoma.authUrl",
    "value": "<OAuth Service endpoint URL as appears in TS Application Profile, e.g., https://api.sonera.fi/autho4api/v1>"
}
```

Telia Sonera Messaging OMA v1 Endpoint:

```json
{
  "category": "messaging",
  "key": "soneraoma.messagingUrl",
  "value": "<Messaging endpoint URL as appears in TS Application Profile, e. g., https://api.sonera.fi/sandbox/messaging/v1>"
}
```

Note that receiving messages and receiving specific messages is not supported for this provider.

#### Tropo

Use our Rest API to store tenant options separately for each key:

```http
POST /tenant/options
Host: ...
Authorization: Basic ...
```

Provider:

```json
{
    "category": "messaging",
    "key": "provider",
    "value": "tropo"
}
```

Base URL:

```json
{
    "category": "messaging",
    "key": "tropo.baseUrl",
    "value": "<URL>"
}
```

Credentials:

```json
{
    "category": "messaging",
    "key": "tropo.credentials",
    "value": "<credentials>"
}
```

Sender address:

```json
{
    "category": "messaging",
    "key": "sms.senderAddress",
    "value": "cumulocity"
}
```

Sender name:

```json
{
    "category": "messaging",
    "key": "sms.senderName",
    "value": "cumulocity"
}
```

Note that receiving messages and receiving specific message is not supported for this provider.

### Sending a message

To send a SMS message using the API, prepare the message with the SendMessageRequest builder and call the sendMessage function of the API with the prepared message.

```java
SendMessageRequest smsMessage = SendMessageRequest.builder()
        .withSender(Address.phoneNumber("<phone number>"))
        .withReceiver(Address.phoneNumber("<phone number>"))
        .withMessage("<message text>")
        .build();

smsMessagingApi.sendMessage(smsMessage);
```

### Receiving messages

You can use the API as follows to receive all SMS messages. Note that not every SMS provider supports receiving messages.

```java
smsMessagingApi.getAllMessages(Address.phoneNumber("<phone number>"));
```

You can use the API as follows to receive a specific SMS message identified by message ID. Note that not every SMS provider supports receiving messages.

```java
smsMessagingApi.getMessage(Address.phoneNumber("<phone number>"), "<message id>");
```

### SMS management endpoints

The Rest API can be used to send and receive SMS messages.

Sending a message:

```http
POST /service/messaging/smsmessaging/outbound/tel:<sender phone number>/requests
Host: ...
Authorization: Basic ...
Content-Type: application/json
{
    "outboundSMSMessageRequest": {
        "address": ["tel:<phone number>"],
        "senderAddress": "tel:<phone number>",
        "outboundSMSTextMessage": {
  	       "message": "<message text>"
        },
        "receiptRequest": {
  	       "notifyUrl": "<notify url>,
  	        "callbackData": "<callback data>"
        },
        "senderName": "<sender name>"
    }
}
```

Receiving all messages:

```http
GET /service/messaging/smsmessaging/inbound/registrations/tel:<receiver phone number>/messages
Host: ...
Authorization: Basic ...

HTTP/1.1 200 OK
{
     "inboundSMSMessageList": [
        {
            "inboundSMSMessage": {
            "dateTime": "<date>",
            "destinationAddress": "<destination address>",
            "messageId": "<message id>",
            "message": "<message>",
            "resourceURL": "<resource url>",
            "senderAddress": "<sender address>"
        }
     ]
}
```

Receiving a specific message:

```http
GET /service/messaging/smsmessaging/inbound/registrations/tel:<receiver phone number>/messages/<message id>
Host: ...
Authorization: Basic ...

HTTP/1.1 200 OK
{
    "inboundSMSMessage": {
        "dateTime": "<date>",
        "destinationAddress": "<destination address>",
        "messageId": "<message id>",
        "message": "<message>",
        "resourceURL": "<resource url>",
        "senderAddress": "<sender address>"
    }
}
```
