---
order: 20
title: Create alarm if the operation was not executed
layout: redirect
---

Operations usually run to a fixed sequence when handled by the device.

*   PENDING (after creation)
*   EXECUTING (once the device received the operation and starts the handling)
*   SUCCESSFUL or FAILED (depending on the execution result)

An operation that does not reach SUCCESSFUL or FAILED within a certain time usually indicates an issue (like device lost connection or device got stuck while handling). Even if the operation was not handled successfully, the device should update the operation as FAILED. For this example, we will use 10 minutes as an acceptable duration for operation handling. We will check for the following sequence:

*   OperationCreated
*   OperationUpdated for the same operation within 10 minutes that sets the status to either SUCCESSFUL or FAILED

If the second part does _not_ appear we will create a new alarm:

![(warning)](https://iwiki.eur.ad.sag/s/en_GB/7110/0027c2fcaf4e08638b7c982f7d0fde1dc3cf2411/_/images/icons/emoticons/warning.png "(warning)") The Cumulocity connectivity transport does not currently subscribe to operations - Operations are currently output only from Apama, not input as well.

	monitor HandleNotFinishedOperation {
		event OperationById {
			string id;
			string status;
			Operation op;
		}
		action onload() {
			on all Operation() as o {
				route OperationById(o.id, o.status, o);
			}
			on all OperationById () as op {
				on wait(600.0) and
					not (OperationById (id = op.id, status="SUCCESSFUL")
						or OperationById (id = op.id, status="FAILED")) {
					send Alarm("", op.op.source, "c8y_OperationNotFinishedAlarm", currentTime,
						"The device has not finished the operation "+op.id+" within 10 minutes",
						"ACTIVE", "MAJOR", 1, new dictionary&#60;string,any>) to Event.CHANNEL;
				}
			}
		}
	}


