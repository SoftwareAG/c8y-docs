---
weight: 40
title: Additional data models
layout: redirect
---

### ID

class: com.cumulocity.model.ID

|Parameter|Data type|Description|
|:--|:----------|:-------------|
|value|String|The actual ID value|
|type|String|The type of the ID|
|name|String|The name of the device (only if the ID refers to a device like in measurement.source)|

Example:

    select
      event.measurement.source.value,
      event.measurement.source.type,
      event.measurement.source.name
    from MeasurementCreated event;


### OperationStatus

class: com.cumulocity.model.operation.OperationStatus

OperationStatus is an enum offering the following values:
`PENDING`, `SUCCESSFUL`, `FAILED`, `EXECUTING`

Example:

    insert into UpdateOperation
    select
      event.operation.id.value as id,
      OperationStatus.FAILED as status
    from OperationCreated event;

### Severity

class: com.cumulocity.model.event.Severity

Severity is the interface for the enum implementation CumulocitySeverities.
CumulocitySeverities offers the following values:
`CRITICAL`, `MAJOR`, `MINOR`, `WARNING`


Example:

    insert into UpdateAlarm
    select
      event.alarm.id.value as id,
      CumulocitySeverities.MAJOR as severity
    from AlarmCreated event;

### AlarmStatus

class: com.cumulocity.model.event.AlarmStatus

AlarmStatus is the interface for the enum implementation CumulocityAlarmStatuses.
CumulocityAlarmStatuses offers the following values:
`ACTIVE`, `ACKNOWLEDGED`, `CLEARED`


Example:

    insert into UpdateAlarm
    select
      event.alarm.id.value as id,
      CumulocityAlarmStatuses.ACKNOWLEDGED as status
    from AlarmCreated event;
