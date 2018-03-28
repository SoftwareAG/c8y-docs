---
order: 170
title: Event SendSMS
layout: redirect
---


<span style="color: rgb(0,0,0);">Sends SMS alert. 

### Examples

	SendSMS("Message",["+918XXXXXXXX1"],"10XXX",{"sender":"+918XXXXXXXX1"})


### Member Summary

|Date type|Member|
|:---|:---|
|string|**message** <br> Content of the SMS.
|string|**address** <br> List of receivers of the SMS.
|sequence&#60;string>|**sourceAssetsId** <br> Identifier of the source that triggered this SMS.
|dictionary &#60;string, string>|**extraParams** <br> Additional parameters.