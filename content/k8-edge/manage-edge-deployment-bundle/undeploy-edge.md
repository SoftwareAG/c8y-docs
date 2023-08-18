---
weight: 20
title: Undeploy Edge
layout: redirect
---

You can undeploy Edge either by,
* Deleting the Edge Custom Resource with the command `kubectl delete <type> <name> [-n <namespace>] | --all | -l <label>]`
  * For example, you can delete the `cumulocity-iot-edge` CR with `kubectl delete Edge cumulocity-iot-edge -n cumulocity-iot-edge`
* Through the manifest file you used to deploy Edge.
  * For example, you can undeploy by executing `kubectl delete -f cumulocity-iot-edge-manifest.yaml`.
