---
order: 40
layout: redirect
title: Receiving SmartREST 1.0
---

If a template triggers a response template the returning message will be published by the server on the following topic.

Topic:
```
s/dl/<X-ID>;
```

This topic can be subscribed by the client.