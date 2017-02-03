---
order: 40
layout: default
title: Developing Java clients for services
---
## Overview
This section describes how to use a simple Java client sending Email messages from Cumulocity platform. It also reveals an endpoint for Email management and the expected format of the request to that resource.

In addition, it demonstrates a way for accessing SMS API from Java code.

## Using Services Platform

The services platform interface is aimed at connecting to Cumulocity from Java is called "Platform" (see "Connecting to Cumulocity" in the [Developing Java clients](/guides/java/developing) of the Java developer’s guide). To instantiate a platform it is sufficient to pass credentials used with Cumulocity:

    ServicesPlatform platform = new ServicesPlatformImpl("<<URL>>", new CumulocityCredentials("<<tenant>>", "<<user>>", "<<password>>", "<application key>"));

For example, a URL pointing to the platform can be https://demos.cumulocity.com which will process all the API requests.

## Accessing the Service APIs

### Sending an Email via Java Client API

The interface for handling email service can be obtained from Java by using the platform method as follows:

    EmailSendingApi emailSendingApi = platform.getEmailSendingApi();

Using this interface you can send Email messages on behalf of the platform. For example, if you would like to send an Email from Java via POST endpoint email/emails, please, build an Email object and call a respective method of an email sending api:

    Email email = EmailBuilder.aEmail().
                               withTo("primarydestination@somemail.com").
                               withCc("copydestination@somemail.com").
                               withReplyTo("wheretoreply@somemail.com").
                               withSubject("New incoming message").
                               withText("Hello World!").
                               build();
    HttpStatus httpStatus = emailSendingApi.sendEmail(email);

The destination, copy and blind copy fields can contain several values, e. g., withTo("to1@email.com", "to2@email.com"). An email can also contain attachments being the object of com.cumulocity.model.email.Attachment class.

A call to an Email sending API returns an HTTP status of a request, 200 OK in case if an email was sent successfully.

#### Prerequisites

For using an Email messaging API a role 'EMAIL_ADMIN' is required. By default, every newly created user of the admin group obtains an 'EMAIL_ADMIN' permission.

#### Email management endpoint

The new endpoint is a POST to /email/emails expecting an email as json. For example:

    {
      "to": ["first@somemail.com", "second@somemail.com"],
      "cc": ["copydestination@somemail.com"],
      "replyTo": "wheretoreply@somemail.com",
      "subject": "New incoming message",
      "text": "Hello world!"
    }


### Accessing SMS Messaging API

The following code snippet shows how to obtain a handle to the sms api from Java:

    SmsMessagingApi smsMessagingApi = platform.getSmsMessagingApi();

Using this handle, you can send and retrieve the sms messages from Java by calling its functions. 

#### Prerequisites

To use the sms messaging Api group of the user should have required roles such as 'SMS_ADMIN' for sending and 'SMS_READ' for receiving messages.
Note that not every sms provider supports receiving messages.
The sms provider and their required credentials should be given in the tenant options before using the Api.

#### Sending a message:

To send a sms message using the Api, prepare the message with send message request builder and call send messaging api's send message function with sender address and the message.

    SendMessageRequest smsMessage = SendMessageRequest.builder()
            .withReceiver(Address.phoneNumber("<phone number>"))
            .withMessage("<message text>")
            .build();
    Address senderAddress = Address.phoneNumber("<phone number>");

    smsMessagingApi.sendMessage(senderAddress, smsMessage);

#### Receiving all messages:

Note that not every sms provider supports receiving messages. 

To receive all sms messages you can use Api as follows.

    smsMessagingApi.getAllMessages(Address.phoneNumber("<phone number>"));



#### Receiving the last message:

Note that not every sms provider supports receiving messages. 

To receive last sms message you can use Api as follows.

    smsMessagingApi.getLastMessage(Address.phoneNumber("<phone number>"));



#### Receiving a specific message:

Note that not every sms provider supports receiving messages. 

To receive a specific sms message you can use Api as follows.

    smsMessagingApi.getMessage(Address.phoneNumber("<phone number>"), "<message id>");



