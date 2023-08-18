---
weight: 10
title: Configuration
layout: redirect
---

The Edge Custom Resource (CR) YAML file has Edge deployment settings. You can edit this file to make changes to your Edge deployment.

The [Custom Resource Definition (CRD)](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/crd/v1/edge.cumulocity.com_edges.yaml) specifies the CR the Operator uses to manage Edge.

## Configuration

The initial part of the CR defines the CRD details, and the Edge deployment's name, referred to in this document as **`EDGE-CR-NAME`**.

```
apiVersion: edge.cumulocity.com/v1
kind: Edge
metadata:
  name: <EDGE-CR-NAME>
```