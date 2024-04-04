---
weight: 130
title: Measurements
layout: bundle
section: 
  - device_management
---

The **Measurements** tab creates a single graph per measurement fragment sent by the device. This means all included series will be shown together in one graph. Therefore, any device integrations must be made considering this grouping. Its visibility is controlled by the device's supported measurements. {{< product-c8y-iot >}} automatically and dynamically populates the device's supported measurements based on previously sent measurements. This means the measurements tab effectively appears after the device has sent its first measurement.

**SmartREST example**

There are several static templates available to create measurements in the 2xx range of message IDs. We provide the 200 static template to create a measurement with a dynamic fragment and series:

`200,c8y_Temperature,T,25`

While using this template is possible for many use cases, we recommend you to create a custom template for all use cases where dynamically defining fragment and series are not required.

**Get measurements**
The **Get measurements** button in the action bar of a device is shown if the `c8y_MeasurementRequestOperation` fragment is present in the device's `c8y_SupportedOperations`.

This action creates a c8y_MeasurementRequestOperation operation with the same fragment signature as found in the device’s managed object. Its 

```json
{
    "creationTime": "2024-04-03T06:53:23.048Z",
    "deviceId": "57109603201",
    "id": "526001668",
    "status": "PENDING",
    "description": "Get measurements",
    "c8y_MeasurementRequestOperation": {
        "requestName": "LOG"
    }
}
```