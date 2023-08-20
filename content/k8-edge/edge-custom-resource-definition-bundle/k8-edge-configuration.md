---
weight: 10
title: Configuration
layout: redirect
---

The initial part of the CR defines the CRD details, and the Edge deployment's name, referred to in this document as **`EDGE-CR-NAME`**.

```
apiVersion: edge.cumulocity.com/v1
kind: Edge
metadata:
  name: <EDGE-CR-NAME>
```