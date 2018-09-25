---
order: 30
layout: redirect
title: Handling none mandatory parameters
---

If a parameter is not declared as mandatory the client can send an empty string in that place.

Example:
```
100,,myType
```

Tailing commas are not required. The two lines below result in the same message.

```
100,,
100
```