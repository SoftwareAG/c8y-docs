## [V2.2] - 2015-08-10
* device push: added support for heartbeat message, less traffic.
* GPS: added support for new GPS data format.

## [V2.1] - 2015-05-20

* measurement: code revamp, faster sensor reading, networking-agnostic
* measurement/poti: drastically improved data smoothing, no spikes
* measurement/acceleration: finer tuning of value similarity checking
* agent: aggregated measurements sending, use less bytes
* agent: performance boost, loop takes 1-10 secs for execution
* control: major overhaul for long polling and state report
* control/PollThread: performance boost, <2 secs for receiving operations
* control/ControlParser: <1 second for executing operations
* control/ControlParser: resilient to parse error, recoverable from next smartREST response
* control/PollThread: added bayeux advice support
* control/PollThread: added support for non-ASCII messages
* control/ReportThread: improved report and state aggregation
* factory_reset: improved execution speed
* debug_mode: immediately enabling/disabling, no wait needed
* LCD_Display: eliminated screen flickering when not sending
* LCD_Display: truncated messages longer than 28 characters
* LCD_Display: display server domain name at boot
* LCD_Display: display more concrete info when encounter errors
* OperationSupport: ignored more than 10 pending operations at boot
* SmartRestSSLSocket: added ssl enabled socket
* _fix_: *freeze* at boot-up after executed operations
* _fix_: randomly *crash* when executing non-ASCII messages
* _fix_: *crash* when executing very long messages
* _fix_: *crash* when many operations pending
* _fix_: *crash* when reporting many operation states
* _fix_: mysterious *connection loss* after 6 minutes

### technical (under the hood)

* _stability_: removed all _malloc_ and _new_
* _stability_: removed executing Thread 1
* _stability_: removed hackish RtosSmartRest
* _performance_: improved threads communication, no busy waiting
* _performance_: ReportThread wait 200 ms for aggregating requests
* _performance_: agent waits 400 ms for LCD displaying a measurement sending message and 100 ms for no sending
* _stability_: networking code is confined to MbedAgent, PollThread and ReportThread, all other code are networking independent
