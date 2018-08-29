---
order: 10
layout: redirect
title: Overview
---

This section describes the SmartREST 2.0 payload format that can be used with the Cumulocity MQTT implementation.

SmartREST 2.0 was designed to make use of the MQTT protocol and therefore can reduce the payload even more than the SmartREST 1.0 via HTTP.
SmartREST 2.0 is only available via MQTT.

SmartREST 2.0 offers the following MQTT topics for the main communication:

To publish messages:
```
s/uc/<X-ID>
```

To publish messages in *TRANSIENT* mode:
```
t/uc/<X-ID>
```

To publish messages in *QUIESCENT* mode:
```
q/uc/<X-ID>
```

To publish messages in *CEP* mode:
```
c/uc/<X-ID>
```

Please, refer to [Processing Mode](/guides/reference/smartrest#processing-mode) section in SmartREST for more information about transient, quiescent & CEP data processing.

To subscribe for responses:
```
s/dc/<X-ID>
```

The topics for creating templates are described in [this section](#creating-templates-via-mqtt)