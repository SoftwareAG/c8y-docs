---
order: 160
title: Event SendEmail
layout: redirect
---

<span style="color: rgb(0,0,0);">Sends email alert. 

### Examples

	SendEmail("Subject","Text", "xyz@gmail.com",["a@gmail.com","b@gmail.com"],["c@gmail.com"],"d@gmail.com",{"assetId":"10XXX"})

### Member Summary

|Date type|Member|
|:---|:---|
|string|**subject** <br> Subject field of the mail.
|string|**text** <br> Message of the mail.
|string|**replyTo** <br> Reply-to field of the mail.
|sequence&#60;string>|**receiver** <br> List of receivers of the mail.
|sequence&#60;string>|**cc** <br> List of cc recipients of the mail.
|string|**bcc** <br> List of bcc recipients of the mail.
|dictionary &#60;string, string>|**extraParams** <br> Additional parameters.

