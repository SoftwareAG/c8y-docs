---
order: 20
layout: redirect
title: SmartREST Payload
---

The Cumulocity MQTT implementation uses SmartREST as a payload. SmartREST is a CSV-like message protocol that uses templates on the server side to create data in Cumulocity.

### SmartREST Basics

A SmartREST message is a single row where each parameter is separated by comma. The first parameter is an ID that defines the message.
You can send multiple messages in a single publish by using a line break between messages.

### SmartREST Escaping

The appearance of at least one of the following characters within a parameter requires that the parameter is enclosed in double quotes:
* Comma (,)
* Line break (\n)
* Carriage return (\r)
* Double quotes (")
Additionally each double quote within the parameter needs to be escaped with a backslash (\).

The same escaping rules apply to messages that will be send from the server to the client.

Publish example:
```
100,"This value, needs escaping",This value does not need escaping
```

Subscribe example:
```
511,myDeviceSerial,"execute this\nand this\nand \"this\""
```
