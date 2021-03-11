---
weight: 20
title: Output streams
layout: redirect
---


### General structure

Output streams contain the possibility to CREATE, UPDATE and DELETE data in Cumulocity.
When updating or deleting data it is necessary to provide the ID of the object that will be updated or deleted.
When creating data, Cumulocity will generate an ID if not set in the event processing. The creation of data also requires certain parameters to be set (the same as at our REST APIs).
In addition to the predefined parameters listed, it is possible to add any custom fragment to the data. Please take a look at the [custom fragments](/event-language/advanced-cel/#custom-fragments) section for adding custom fragments.

Note:
Creating your own ID will only work on ManagedObjects.

### ManagedObjects

| Available outputs   |
|:--------------------|
| CreateManagedObject |
| UpdateManagedObject |
| DeleteManagedObject |

| Parameter    | Data type                                                           | Description                                                                                             | Mandatory         |
|:-------------|:--------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------|:------------------|
| id           | [ID](/event-language/data-model#id) or String                       | ID of the ManagedObject                                                                                 | UPDATE and DELETE |
| type         | String                                                              | The type of the ManagedObject                                                                           | No                |
| name         | String                                                              | The name of the ManagedObject                                                                           | No                |
| owner        | String                                                              | The owner of the ManagedObject. If not set data created from event processing will have the owner "cep" | No                |
| childAssets  | Set&lt;String&gt; or Set&lt;[ID](/event-language/data-model#id)&gt; | A set of [IDs](/event-language/data-model#id) of all child assets                                       | No                |
| childDevices | Set&lt;String&gt; or Set&lt;[ID](/event-language/data-model#id)&gt; | A set of [IDs](/event-language/data-model#id) of all child devices                                      | No                |

Example:

    insert into CreateManagedObject
    select
      "myManagedObject" as name,
      "myType" as type
    from EventCreated event;

    insert into UpdateManagedObject
    select
      "12345" as id,
      "myNewManagedObject" as name
    from EventCreated event;

    insert into DeleteManagedObject
    select
      "12345" as id
    from EventCreated event;


### Events

| Available outputs |
|:------------------|
| CreateEvent       |
| UpdateEvent       |
| DeleteEvent       |

| Parameter | Data type                                     | Description                                             | Mandatory |
|:----------|:----------------------------------------------|:--------------------------------------------------------|:----------|
| id        | [ID](/event-language/data-model#id) or String | The ID of the Event                                     | DELETE    |
| type      | String                                        | The type of the Event                                   | CREATE    |
| text      | String                                        | The text of the Event                                   | CREATE    |
| time      | Date                                          | The time when the Event was created (as sent by device) | CREATE    |
| source    | [ID](/event-language/data-model#id) or String | The ID of the device which created the Event            | CREATE    |

Example:

    insert into CreateEvent
    select
      "copiedEventType" as type,
      "This event was copied" as text,
      event.event.time as time,
      event.event.source as source
    from EventCreated event;

    insert into DeleteEvent
    select
      "12345" as id
    from EventCreated event;

### Measurements

| Available outputs |
|:------------------|
| CreateMeasurement |
| DeleteMeasurement |

| Parameter | Data type                                     | Description                                                   | Mandatory |
|:----------|:----------------------------------------------|:--------------------------------------------------------------|:----------|
| id        | [ID](/event-language/data-model#id) or String | The ID of the Measurement                                     | DELETE    |
| type      | String                                        | The type of the Measurement                                   | CREATE    |
| time      | Date                                          | The time when the Measurement was created (as sent by device) | CREATE    |
| source    | [ID](/event-language/data-model#id) or String | The ID of the device which created the Measurement            | CREATE    |

Example:

    insert into CreateMeasurement
    select
      "c8y_TemperatureMeasurement" as type,
      event.event.time as time,
      event.event.source as source,
      {
        "c8y_TemperatureMeasurement.T.value", 5
      } as fragments
    from EventCreated event;

    insert into DeleteMeasurement
    select
      "12345" as id
    from EventCreated event;

### Operations

| Available outputs |
|:------------------|
| CreateOperation   |
| UpdateOperation   |

| Parameter | Data type                                                               | Description                                             | Mandatory |
|:----------|:------------------------------------------------------------------------|:--------------------------------------------------------|:----------|
| id        | [ID](/event-language/data-model#id) or String                           | The ID of the Operation                                 | UPDATE    |
| status    | [OperationStatus](/event-language/data-model#operationstatus) or String | The current status of the Operation                     | CREATE    |
| deviceId  | [ID](/event-language/data-model#id) or String                           | The ID of the device which should execute the Operation | CREATE    |

Example:

    insert into CreateOperation
    select
      OperationStatus.PENDING as status,
      event.event.source as deviceId,
      {
        "c8y_Restart", {}
      } as fragments
    from EventCreated event;

    insert into UpdateOperation
    select
      "12345" as id,
      OperationStatus.EXECUTING as status
    from EventCreated event;

### Alarms

| Available outputs |
|:------------------|
| CreateAlarm       |
| UpdateAlarm       |

| Parameter | Data type                                                       | Description                                             | Mandatory |
|:----------|:----------------------------------------------------------------|:--------------------------------------------------------|:----------|
| id        | [ID](/event-language/data-model#id) or String                   | The ID of the Alarm                                     | UPDATE    |
| type      | String                                                          | The type of the Alarm                                   | CREATE    |
| severity  | [Severity](/event-language/data-model#severity) or String       | The severity of the Alarm                               | CREATE    |
| status    | [AlarmStatus](/event-language/data-model#alarmstatus) or String | The status of the Alarm                                 | CREATE    |
| text      | String                                                          | The text of the Event                                   | CREATE    |
| time      | Date                                                            | The time when the Event was created (as sent by device) | CREATE    |
| source    | [ID](/event-language/data-model#id) or String                   | The ID of the device which created the Alarm            | CREATE    |

Example:

    insert into CreateAlarm
    select
      "c8y_HighTemperatureAlarm" as type,
      event.event.time as time,
      event.event.source as source,
      CumulocitySeverities.WARNING as severity,
      CumulocityAlarmStatuses.ACTIVE as status,
      "The device has high temperature" as text
    from EventCreated event;

    insert into UpdateAlarmn
    select
      "12345" as id,
      CumulocityAlarmStatuses.ACKNOWLEDGED as status
    from EventCreated event;
