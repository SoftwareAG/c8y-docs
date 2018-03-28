---
order: 50
title: Variables
layout: redirect
---


You can define variables in your modules.

    string myEmailText := "Hello World";
    sequence&#60;string> supportedOperationsList := ["c8y_Restart", "c8y_Relay"];

If you define a monitor-scope variable (that is, inside a monitor but not within any actions on that monitor), then that can be used in a listener if you use a colon (:) instead of "as" for the event coassignment in the listener. Thus the below sends the latest event every 10 seconds:

	monitor MyMonitor {
		// monitor scope:
		Event e;
		action onload() {
			on all Event():e {}
			on all wait(10.0) {
				emit e to Event.CHANNEL;
			}
		}
	}

When a listener starts, it takes a copy of all of the local variables. The below example thus sends each event after a 10 second delay, even if other events come in between.

	monitor MyMonitor {
		// monitor scope:
		Event e;
		action onload() {
			on all Event():e {
				on all wait(10.0) {
					emit e to Event.CHANNEL;
				}
			}
		}
	}

