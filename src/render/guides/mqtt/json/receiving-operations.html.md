---
order: 50
layout: redirect
title: Receiving operations
---

A notification client can subscribe to the `devicecontrol/notifications` topic to receive notifications of newly created operations. Initially upon subscription all operations which are not yet forwarded will be published.

Additionally, it contains an [External ID](/guides/reference/identity/#external-id) so the client can identify for which child the operation is executed.

Example notification:
```
{
  "agentId": "1",
  "creationTime": "2018-05-17T07:33:15.555Z",
  "delivery": {
    "log": [
      
    ],
    "status": "PENDING",
    "time": "2018-05-17T07:33:15.575Z"
  },
  "deviceId": "2",
  "id": "123",
  "status": "PENDING",
  "c8y_Command": {
    "text": "Do something"
  },
  "description": "Execute shell command",
  "externalSource": {
    "externalId": "3",
    "type": "com_cumulocity_model_idtype_SerialNumber"
  }
}
```
