---
weight: 20
title: Creating alarm if the operation was not executed
layout: redirect
---

Operations usually run to a fixed sequence when handled by the device.

 - PENDING (after creation)
 - EXECUTING (once device received the operation and starts the handling)
 - SUCCESSFUL or FAILED (depending on the execution result)

An operation that does not reach SUCCESSFUL or FAILED within a certain time usually indicates an issue (like device lost connection or device got stuck while handling).
Even if the operation was not handled successfully the device should update the operation as FAILED.
For this example we will use 10 minutes as a acceptable duration for operation handling.
We will check for the following sequence:

 - OperationCreated
 - OperationUpdated for the same operation within 10 minutes that sets the status to either SUCCESSFUL or FAILED

If the second part does *not* appear we will create a new alarm:

    @Name("handle_not_finished_operation")
    insert into CreateAlarm  
    select
        o.operation.deviceId as source,
        CumulocitySeverities.MAJOR as severity,
        CumulocityAlarmStatuses.ACTIVE as status,
        "c8y_OperationNotFinishedAlarm" as type,
        current_timestamp().toDate() as time,
        replaceAllPlaceholders("The device has not finished the operation #{id} within 10 minutes", o.operation) as text
    from pattern [
        every o = OperationCreated
        	-> (timer:interval(10 minutes)
        	and not OperationUpdated(
        		operation.id.value = o.operation.id.value
        		and (operation.status in (OperationStatus.SUCCESSFUL, OperationStatus.FAILED))
        	))
    ];

