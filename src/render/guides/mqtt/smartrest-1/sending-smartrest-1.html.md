---
order: 30
layout: redirect
title: Sending SmartREST 1.0
---

For sending data to the server you can publish the same content as you would POST to the SmartREST endpoint /s.
The X-Id header is part of the topic the client needs to publish on.

Topic:
```
s/ul/<X-ID>;
```

### Processing mode

Since [Cumulocity SmartREST protocol](/guides/reference/smartrest) supports *TRANSIENT* processing mode for avoiding storage of sent data in the database, publishing on MQTT t/ topic instead of s/ topic will only pass the data to real-time processing.

Topic:
```
t/ul/<X-ID>;
``` 

[Cumulocity SmartREST protocol](/guides/reference/smartrest) also supports *QUIESCENT* processing mode for avoiding real-time notifications by publishing on MQTT q/ topic instead of s/ topic. Currently, the QUIESCENT processing mode is applicable for measurements and events only.

Topic:
```
q/ul/<X-ID>;
```

[Cumulocity SmartREST protocol](/guides/reference/smartrest) also supports *CEP* processing mode for ensuring data is only sent to real-time event processing engine with real-time notifications disabled by publishing on MQTT c/ topic instead of s/ topic. Currently, the CEP processing mode is applicable for measurements and events only.

Topic:
```
c/ul/<X-ID>;
```