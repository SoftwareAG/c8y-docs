---
weight: 30
title: Audit logs for Streaming Analytics
layout: redirect
---

Activation and deactivation of analytic models and EPL apps is shown in the audit logs. The audit logs are accessible via the Administration application and the audit API.
See [Audit logs](/standard-tenant/audit-logs/) and [Audit API](https://{{< domain-c8y >}}/api/core/#tag/Audit-API)
in the {{< openapi >}} for details of accessing the audit logs.

Audit log entries include the current action and the the name of the user performing that action.
The following is an example of an audit log entry for an analytic model that runs in simulation mode (with additional line breaks in the `text` field for better readability):

```
{
    "activity": "Activated model",
    "application": "apama_ctrl",
    "severity": "information",
    "text": "TestingModel1:Activated,
             Mode:SIMULATION,
             OutputDevices:[21628],
             startTime:2023-11-23T15:35:10.000Z,
             endTime:2023-11-23T15:35:43.000Z,
             maxDelaySecsSimulation:2",
    "type": "Inventory",
    "user": "apama_test_cep_admin"
}
```
