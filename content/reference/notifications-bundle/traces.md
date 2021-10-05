---
weight: 40
title: Traces
layout: redirect
---


The following is a sample of a trace of messages without showing the first header line which consists of the acknowledgement (encoded string that must be returned to acknowledge the notification).

```
------------------------
header /tenant-a170/managedobjects/111
header CREATE
notification {"additionParents":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/additionParents"},"owner":"admin","childDevices":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/childDevices"},"childAssets":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/childAssets"},"creationTime":"2021-09-03T12:28:58.692Z","lastUpdated":"2021-09-03T12:28:58.692Z","childAdditions":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/childAdditions"},"name":"a switch","assetParents":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/assetParents"},"deviceParents":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/deviceParents"},"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111","id":"111","com_{{< product-c8y >}}_model_BinarySwitch":{"state":"ON"}}
------------------------
header /tenant-a170/measurements/111
header CREATE
notification {"self":"http://{{< product-c8y >}}.default.svc.cluster.local/measurement/measurements/117","time":"2021-09-03T12:29:01.664Z","id":"117","source":{"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111","id":"111"},"type":"c8y_TenantUsageStatisticsMeasurement","resourcesUsage":{"memory":0,"cpu":0,"usedBy":[]}}
------------------------
header /tenant-a170/events/111
header CREATE
notification {"creationTime":"2021-09-03T12:29:01.932Z","source":{"name":"a switch","self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111","id":"111"},"type":"com_{{< product-c8y >}}_model_DoorSensorEvent","self":"http://{{< product-c8y >}}.default.svc.cluster.local/event/events/118","time":"2021-09-03T12:29:01.664Z","id":"118","text":"Door sensor was triggered"}
------------------------
header /tenant-a170/eventsWithChildren/111
header CREATE
notification {"creationTime":"2021-09-03T12:29:01.932Z","source":{"name":"a switch","self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111","id":"111"},"type":"com_{{< product-c8y >}}_model_DoorSensorEvent","self":"http://{{< product-c8y >}}.default.svc.cluster.local/event/events/118","time":"2021-09-03T12:29:01.664Z","id":"118","text":"Door sensor was triggered"}
------------------------
header /tenant-a170/managedobjects/111
header UPDATE
notification {"additionParents":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/additionParents"},"owner":"admin","childDevices":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/childDevices"},"childAssets":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/childAssets"},"creationTime":"2021-09-03T12:28:58.692Z","lastUpdated":"2021-09-03T12:28:58.692Z","childAdditions":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/childAdditions"},"name":"a switch","assetParents":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/assetParents"},"deviceParents":{"references":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111/deviceParents"},"self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111","id":"111","c8y_ActiveAlarmsStatus":{"major":1},"com_{{< product-c8y >}}_model_BinarySwitch":{"state":"ON"}}
------------------------
header /tenant-a170/alarms/111
header CREATE
notification {"severity":"MAJOR","creationTime":"2021-09-03T12:29:02.092Z","count":1,"history":{"auditRecords":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/audit/auditRecords"},"source":{"name":"a switch","self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111","id":"111"},"type":"com_{{< product-c8y >}}_events_TamperEvent","self":"http://{{< product-c8y >}}.default.svc.cluster.local/alarm/alarms/119","time":"2021-09-03T12:29:01.664Z","id":"119","text":"Tamper sensor triggered","status":"ACTIVE","com_mycorp_MyProp":{"key1":"value1"}}
------------------------
header /tenant-a170/alarms/111
header CREATE
notification {"severity":"MAJOR","creationTime":"2021-09-03T12:29:02.092Z","count":1,"history":{"auditRecords":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/audit/auditRecords"},"source":{"name":"a switch","self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111","id":"111"},"type":"com_{{< product-c8y >}}_events_TamperEvent","self":"http://{{< product-c8y >}}.default.svc.cluster.local/alarm/alarms/119","time":"2021-09-03T12:29:01.664Z","id":"119","text":"Tamper sensor triggered","status":"ACTIVE","com_mycorp_MyProp":{"key1":"value1"}}
------------------------
header /tenant-a170/alarmsWithChildren/111
header CREATE
notification {"severity":"MAJOR","creationTime":"2021-09-03T12:29:02.092Z","count":1,"history":{"auditRecords":[],"self":"http://{{< product-c8y >}}.default.svc.cluster.local/audit/auditRecords"},"source":{"name":"a switch","self":"http://{{< product-c8y >}}.default.svc.cluster.local/inventory/managedObjects/111","id":"111"},"type":"com_{{< product-c8y >}}_events_TamperEvent","self":"http://{{< product-c8y >}}.default.svc.cluster.local/alarm/alarms/119","time":"2021-09-03T12:29:01.664Z","id":"119","text":"Tamper sensor triggered","status":"ACTIVE","com_mycorp_MyProp":{"key1":"value1"}}
```
