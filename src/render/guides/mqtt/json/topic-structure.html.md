---
order: 20
layout: redirect
title: Topic structure
---

Topic structure in JSON MQTT is quite similar to the REST endpoints, the main difference is in the additional action part which is included in the topic. 

To publish messages:
```
<api>/<resource>/<action>/<id>
```

To publish messages in *TRANSIENT* mode:
```
t/<api>/<resource>/<action>/<id>
```

Please, refer to [Processing Mode](/guides/reference/rest-implementation#processingmode) for more information about transient data processing.

### Topic actions

Action in the topic corresponds to HTTP methods combined with Content-Type header.

Following actions are available:
- *create* - corresponds to HTTP *POST*
- *createBulk* - corresponds to HTTP *POST* with Content-Type header value set to collection media type, for example `application/vnd.com.nsn.cumulocity.measurementCollection+json;charset=UTF-8;ver=0.9`
- *update* - corresponds to HTTP *PUT*
- *delete* - corresponds to HTTP *DELETE*