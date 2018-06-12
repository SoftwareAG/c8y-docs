---
order: 60
layout: redirect
title: Platform API
---

The package consists of a number of services that are build and injected into spring context. A developer can use them to perform basic operations against the platform. The beans are built based on properties read from a file. For hosted deployment, most of the properties are provided by the platform.

The API provides the following services:

* Alarm - AlarmApi
* AuditRecord - AuditRecordApi
* CepModule - CepApi
* Operation - DeviceControlApi
* Event - EventApi
* ExternalID - IdentityApi
* Binary - BinariesApi
* ManagedObject - InventoryApi
* Measurement - MeasurementApi

The API provides basic CRUD methods, see Alarm interface example below:

    AlarmRepresentation create(final AlarmRepresentation alarm)
    Future createAsync(final AlarmRepresentation alarm)

    AlarmRepresentation getAlarm(final GId gid)
    AlarmCollection getAlarms()
    AlarmCollection getAlarmsByFilter(final AlarmFilter filter)

    AlarmRepresentation update(final AlarmRepresentation alarm)

Sample usage:

    @Autowired
    private AlarmApi alarms;

    public AlarmRepresentation addHelloAlarm(){
          AlarmRepresentation alarm = new AlarmRepresentation();
          alarm.setSeverity("CRITICAL");
          alarm.setStatus("Hello");
          return alarms.create(alarm);
    }