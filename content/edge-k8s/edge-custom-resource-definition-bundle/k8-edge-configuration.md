---
weight: 10
title: Configuration
layout: redirect
---

The initial part of the CR defines the CRD details, and the CR name and namespace, referred to in this document as **`EDGE-CR-NAME`** and **EDGE-CR-NAMESPACE**.

```
apiVersion: edge.cumulocity.com/v1  
kind: Edge 
metadata: 
name: <EDGE-CR-NAME> 
namespace: <EDGE-CR-NAMESPACE> 
```