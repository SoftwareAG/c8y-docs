---
weight: 30
title: Special streams
layout: redirect
---

The streams mentioned in this section do not interact with the Cumulocity database but will create calls to external services.

### SendMail

|Parameter|Data type|Description|Mandatory|
|:--|:----------|:-------------|:----------|
|receiver|String|The mail address of the receiver|yes|
|cc|String|The mail address of the cc|no|
|bcc|String|The mail address of the bcc|no|
|replyTo|String|The mail address which should receive replies to the sent mail|yes|
|subject|String|The subject line of the mail|yes|
|text|String|The body of the mail|yes|

It is possible to have more than one mail address in the parameters receiver,cc and bcc. Therefore create a string that contains all mail addresses separated by commas. "receiver1@mail.com,receiver2@mail.com".

Example:

    insert into SendEmail
    select
      "receiver1@cumulocity.com,receiver2@cumulocity.com" as receiver,
      "cc@cumulocity.com" as cc,
      "bcc@cumulocity.com" as bcc,
      "reply@cumulocity.com" as replyTo,
      "Example mail" as subject,
      "This mail was sent to test the SendEmail stream in Cumulocity" as text
    from AlarmCreated;


### SendSms

|Parameter|Data type|Description|Mandatory|
|:--|:----------|:-------------|:----------|
|receiver|String|The phone number of the receiver|yes|
|text|String|The body of the sms. Max. 160 characters|yes|
|deviceId|String|The ID of the device generating the sms. A log event will be created for the device|no|

It is possible to have more than one phone number in the parameter receiver. Therefore create a string that contains all phone numbers separated by commas e.g. "+49123456789,+49987654321".
Although it is technically not required by Cumulocity to have the country code we recommend you to use it because the sms gateway might require it. You can use the notation like e.g. "0049" or "+49" (for Germany).

_Note:_

This feature will only work if your tenant is linked to a sms provider. For more information please contact [product support](/about-doc/contacting-support).

Example:

    insert into SendSms
    select
      "+49123456789" as receiver,
      "This sms was sent to test the SendSms stream in Cumulocity" as text,
      "12345" as deviceId
    from AlarmCreated;

### SendPush

This stream enables the possibility to send push notifications from Cumulocity via the Telekom push service to mobile applications.

|Parameter|Data type|Description|Mandatory|
|:--|:----------|:-------------|:----------|
|type|String|Push Provider Type. Currently only TELEKOM is possible.|yes|
|message|String|The body of the push message.|yes|
|deviceId|String|The ID of the device generating the push message.|yes|

_Note:_

This feature will only work if your tenant is linked to a push provider. For more information please contact [product support](/about-doc/contacting-support).

Example:

    insert into SendPush
    select
    "TELEKOM" as type,
    "sample push message" as message,
    a.alarm.source.value as deviceId
    from AlarmCreated a;

### SendRequest

This stream enables the possibility to send HTTP requests from Cumulocity to external systems.

|Parameter|Data type|Description|Mandatory|
|:--|:----------|:-------------|:----------|
|url|String|Url of external system|yes|
|method|String|Method of HTTP request|yes|
|body|String|Body of HTTP reqeust|no|
|authorization|String|HTTP Authorization header|no|
|contentType|String|HTTP Content-Type header|no|
|headers|Map<String,String>|HTTP headers|no|
|source|Object|Represents object which will be passed to ResponseReceived input stream|no|

Example:

    insert into SendRequest
    select
      'post' as method,
      'http://some.external.service.com' as url,
      'application/json' as contentType,
      toJSON(m.payload) as body,
      m.payload as source
    from MeasurementCreated m

### SendExport

This stream enables the possibility to generate export.

<table>
<colgroup>
<col width="20%">
<col width="10%">
<col width="60%">
<col width="10%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Parameter</th>
<th style="text-align:left">Data type</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Mandatory</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">enabledSources</td>
<td style="text-align:left">List</td>
<td style="text-align:left">Export configuration ids</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">subject</td>
<td style="text-align:left">String</td>
<td style="text-align:left">Subject of email</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">text</td>
<td style="text-align:left">String</td>
<td style="text-align:left">Text of email. Available placeholders: {host}, {binaryId}. Default message is: “File with exported data can be downloaded from {host}/inventory/binaries/{binaryId}”</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">receiver</td>
<td style="text-align:left">String</td>
<td style="text-align:left">Receiver of email</td>
<td style="text-align:left">false</td>
</tr>
</tbody>
</table>

Example:

    insert into SendExport
    select
        'configurationExportId' as enabledSources,
        'subject' as subject,
        'text' as text,
        'receiver@example.com' as receiver
    from
        pattern [every timer:at(5, *, *, *, *)]
