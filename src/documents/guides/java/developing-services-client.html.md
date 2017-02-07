---
order: 40
layout: default
title: Developing Java clients for services
---
## Overview
This section describes the Cumulocity Email and SMS API and how to access them using Cumulocity Java Client.

## Using Services Platform

The ServicesPlatform interface is responsible for connecting to Services (Email, SMS) API from Java.

    ServicesPlatform platform = new ServicesPlatformImpl("<<URL>>", new CumulocityCredentials("<<tenant>>", "<<user>>", "<<password>>", "<application key>"));

For example, a URL pointing to the platform can be https://demos.cumulocity.com which will process all the API requests.

## Accessing the Service APIs

### Sending an Email via Java Client API

The interface for handling email service can be obtained from Java by using the platform method as follows:

    EmailApi emailApi = platform.getEmailApi();

For example, if you would like to send an email from Java, build an Email object and call a respective method of an Email API:

    Email email = EmailBuilder.aEmail().
                               withTo("primarydestination@somemail.com").
                               withCc("copydestination@somemail.com").
                               withReplyTo("wheretoreply@somemail.com").
                               withSubject("New incoming message").
                               withText("Hello World!").
                               build();
    HttpStatus httpStatus = emailApi.sendEmail(email);

The destination, copy and blind copy fields can contain several values, e. g., withTo("to1@email.com", "to2@email.com"). An email can also contain attachments being the object of com.cumulocity.model.email.Attachment class.

A call to an Email API returns an HTTP status of a request, 200 OK in case if an email was sent successfully.

#### Prerequisites

For using an Email messaging API a role 'EMAIL_ADMIN' is required. By default, every newly created user of the admin group obtains an 'EMAIL_ADMIN' permission.

#### Email management endpoint

The new endpoint is a POST to /email/emails expecting an email as json. For example:
    
    POST /email/emails
    Host: ...
    Authorization: Basic ...
    Content-Type: application/json
    {
      "to": ["first@somemail.com", "second@somemail.com"],
      "cc": ["copydestination@somemail.com"],
      "replyTo": "wheretoreply@somemail.com",
      "subject": "New incoming message",
      "text": "Hello world!"
    }


### Accessing SMS Messaging API

The following code snippet shows how to obtain a handle to the Sms API from Java:

    SmsMessagingApi smsMessagingApi = platform.getSmsMessagingApi();

Using this handle, you can send and retrieve the sms messages from Java by calling its functions. 

#### Prerequisites

1.Sms Gateway Microservice and setting tenant options

The information about sms-gateway microservice's url should be given in the tenant options.
Please use our Rest API to store this information as following:

    POST /tenant/options
    Host: ...
    Authorization: Basic ...

    {
      "category": "sms",
      "key": "microservice.url",
      "value": "<IP/Domain>:8688/sms-gateway"
    }

2.Giving required roles

To use the Sms messaging API group of the user should have required roles such as 'SMS_ADMIN' for sending and 'SMS_READ' for receiving messages.
Please see '[Assigning account-wide permissions](/guides/users-guide/administration/)'

3.Choosing a sms provider
  
* OpenIT

OpenIT credentials can be given using the Administration application. Click on OpenIT credentials from the menu and save credentials for your tenant.
![OpenIT Credentials](/guides/java/java-client-services/openit_credentials.png)
Note that receiving messages and receiving specific message are not supported for this provider.
* Jasper Control Center

Please see [Jasper Control Center](/guides/users-guide/jasper/) to have detailed information about how to set the credentials.

* Ericsson

For this provider, please use our Rest API to store tenant options seperately for each key:

    POST /tenant/options
    Host: ...
    Authorization: Basic ...

Provider:

      {
        "category": "messaging",
        "key": "provider",
        "value": "ericsson-dcp"
      }

Base url:

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

Note that receiving specific message is not supported for this provider.

* Tropo

For this provider, please use our Rest API to store tenant options seperately for each key

    POST /tenant/options
    Host: ...
    Authorization: Basic ...

Provider:

      {
        "category": "messaging",
        "key": "provider",
        "value": "tropo"
      }
 
Base url:

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

Note that receiving messages and receiving specific message are not supported for this provider.

#### Sending a message:

To send a sms message using the API, prepare the message with send message request builder and call send message function of the API with the message.

    SendMessageRequest smsMessage = SendMessageRequest.builder()
            .withSender(Address.phoneNumber("<phone number>"))
            .withReceiver(Address.phoneNumber("<phone number>"))
            .withMessage("<message text>")
            .build();

    smsMessagingApi.sendMessage(smsMessage);

#### Receiving all messages:

Note that not every sms provider supports receiving messages. 

To receive all sms messages you can use API as follows.

    smsMessagingApi.getAllMessages(Address.phoneNumber("<phone number>"));

#### Receiving a specific message:

Note that not every sms provider supports receiving messages. 

To receive a specific sms message you can use API as follows.

    smsMessagingApi.getMessage(Address.phoneNumber("<phone number>"), "<message id>");

#### Sms management endpoints

To accomplish the same behaviour, Rest API can be used.

Sending message:

    POST /service/sms/smsmessaging/outbound/tel:<sender phone number>/requests
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

    GET /service/sms/smsmessaging/inbound/registrations/tel:<receiver phone number>/messages
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

    GET /service/sms/smsmessaging/inbound/registrations/tel:<receiver phone number>/messages/<message id>
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


