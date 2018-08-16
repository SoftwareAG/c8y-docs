---
order: 50
layout: redirect
title: Developing Java clients for services
---

This section describes the Cumulocity Email and SMS API and shows how to access them using the Cumulocity Java Client.

### Using the services platform

The "services platform interface" is responsible for connecting to the Services (SMS) API from Java.

    ServicesPlatform platform = new ServicesPlatformImpl("<<URL>>", new CumulocityCredentials("<<tenant>>", "<<user>>", "<<password>>", "<application key>"));

The URL pointing to the platform must be of the form `{tenant}.cumulocity.com`, for example `https://demos.cumulocity.com`, which will process all the API requests.

**Info**: You need to have appropriate credentials to be able to access the Services API from outside, see example above.


### Accessing the SMS Messaging API

In the following section you will learn how to send and receive SMS messages via the Java Client API.

The following code snippet shows how to obtain a handle to the SMS API from Java:

    SmsMessagingApi smsMessagingApi = platform.getSmsMessagingApi();

Using this handle, you can send and retrieve the SMS messages from Java by calling its functions. 

#### Prerequisites

##### Assigning required roles 

To use the SMS messaging API the user should have the required roles such as 'SMS_ADMIN' for sending and 'SMS_READ' for receiving messages.

Refer to [Administration > Managing permissions](/guides/users-guide/administration/#managing-permissions) in the User guide.

##### Choosing a SMS provider
  
**OpenIT**

OpenIT credentials can be assigned using the Administration application. Click **OpenIT credentials** in the navigator and save these credentials for your tenant.

![OpenIT Credentials](/guides/images/java/java-client-services/openit_credentials.png)

Note that receiving messages and receiving specific messages are not supported for this provider.


**Jasper Control Center**

Refer to [Jasper Control Center](/guides/users-guide/optional-services/jasper) for information about how to set the credentials.

**Ericsson**

For Ericsson, use our Rest API to store tenant options separately for each key:

    POST /tenant/options
    Host: ...
    Authorization: Basic ...

Provider:

      {
        "category": "messaging",
        "key": "provider",
        "value": "ericsson-dcp"
      }

Base URL:

      {
        "category": "messaging",
        "key": "ericsson-dcp.baseUrl",
        "value": "<url>"
      }

Username:

      {
        "category": "messaging",
        "key": "ericsson-dcp.username",
        "value": "<username>"
      }

Password:

      {
        "category": "messaging",
        "key": "ericsson-dcp.password",
        "value": "<password>"
      }

Sender address:

      {
        "category": "messaging",
        "key": "sms.senderAddress",
        "value": "<The phone number all SMS will be sent from (provided by Ericsson DCP)>"
      }

Sender name: 

      {
        "category": "messaging",
        "key": "sms.senderName",
        "value": "<The name associated with the phone number>"
      }

Note that receiving specific messages is not supported for this provider.

**Telia Sonera**

For Telia Sonera, use our Rest API to store tenant options separately for each key:

    POST /tenant/options
    Host: ...
    Authorization: Basic ...

Provider:

      {
        "category": "messaging",
        "key": "provider",
        "value": "soneraoma"
      }

Username of Telia Sonera Client Application:

      {
        "category": "messaging",
        "key": "soneraoma.username",
        "value": "<username>"
      }

Password assigned for Telia Sonera Client Application:

      {
        "category": "messaging",
        "key": "soneraoma.password",
        "value": "<password>"
      }

Telia Sonera OAUTH Service Endpoint:

      {
        "category": "messaging",
        "key": "soneraoma.authUrl",
        "value": "<OAUTH Service endpoint url as appears in TS Application Profile, e. g., https://api.sonera.fi/autho4api/v1>"
      }

Telia Sonera Messaging OMA v1 Endpoint:

      {
        "category": "messaging",
        "key": "soneraoma.messagingUrl",
        "value": "<Messaging endpoint url as appears in TS Application Profile, e. g., https://api.sonera.fi/sandbox/messaging/v1>"
      }

Note that receiving messages and receiving specific messages is not supported for this provider.

**Tropo**

For Tropo, use our Rest API to store tenant options separately for each key

    POST /tenant/options
    Host: ...
    Authorization: Basic ...

Provider:

      {
        "category": "messaging",
        "key": "provider",
        "value": "tropo"
      }
 
Base URL:

      {
        "category": "messaging",
        "key": "tropo.baseUrl",
        "value": "<url>"
      }

Credentials: 

      {
        "category": "messaging",
        "key": "tropo.credentials",
        "value": "<credentials>"
      }

Sender address:

      {
        "category": "messaging",
        "key": "sms.senderAddress",
        "value": "cumulocity"
      }

Sender name: 

      {
        "category": "messaging",
        "key": "sms.senderName",
        "value": "cumulocity"
      }

Note that receiving messages and receiving specific message is not supported for this provider.

#### Sending a message

To send a SMS message using the API, prepare the message with the "send message request builder" and call the "send message" function of the API with the message.

    SendMessageRequest smsMessage = SendMessageRequest.builder()
            .withSender(Address.phoneNumber("<phone number>"))
            .withReceiver(Address.phoneNumber("<phone number>"))
            .withMessage("<message text>")
            .build();

    smsMessagingApi.sendMessage(smsMessage);

#### Receiving all messages

Not every SMS provider supports receiving messages. 

To receive all SMS messages you can use the API as follows:

    smsMessagingApi.getAllMessages(Address.phoneNumber("<phone number>"));

#### Receiving a specific message

Not every SMS provider supports receiving messages. 

To receive a specific SMS message you can use the API as follows:

    smsMessagingApi.getMessage(Address.phoneNumber("<phone number>"), "<message id>");

#### SMS management endpoints

To accomplish the same behaviour, Rest API can be used.

Sending message:

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
			"notifyUrl": <notify url>,
			"callbackData": <callback data>
		},
		"senderName": <sender name>
        }
    }

Receiving all messages:

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
    
Receiving a specific message:

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