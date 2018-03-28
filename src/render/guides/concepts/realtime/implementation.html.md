---
order: 40
title: How is real-time processing implemented in Cumulocity?
layout: redirect
---

There are two processing modes for API requests in Cumulocity: *persistent* and *temporary*. The "persistent" mode is the default: It will store data in the Cumulocity database as well as send the data to the real-time engine. After both is done, Cumulocity returns the result of the request.

The "temporary" mode will only send the data to the real-time engine and immediately return asynchronously. This mode is for efficiently monitoring particular data in realtime.

### CEL example

Assume that location updates from cars should be monitored every second while the car is driving, but only be stored once in a minute into the database for reporting purposes. This is done using the following statement:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationUpdate") is not null
    output first every 60 seconds

Another option is to output only every 60th update like this:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationUpdate") is not null
    output first every 60 events

### Apama EPL example

Assume that location updates from cars should be monitored every second while the car is driving, but only be stored once in a minute into the database for reporting purposes. This is done using the following statement:

	monitor SendEveryMinute {
		dictionary<string, Event> latestUpdates;
		action onload() {
			on all Event() as e {
				if e.params.hasKey("c8y_LocationUpdate") {
					latestUpdates[e.source] := e;
				}
			}
			on all wait(60.0) {
				Event e;
				for e in latestUpdates.values() {
					send e to Event.CHANNEL;
				}
				latestUpdates.clear();
			}
		}
	}

Another option is to output only every 60th update like this:

	monitor SendEverySixtyEvents {
		event UpdateAndCount {
			Event latest;
			integer count;
		}
		dictionary<string, UpdateAndCount > latestUpdates;
		action onload() {
			on all Event() as e {
				if e.params.hasKey("c8y_LocationUpdate") {
					UpdateAndCount updateCount := latestUpdates.getOrAddDefault(e.source);
					updateCount.latest := e;
					integer count := updateCount.count + 1;
					if count = 60 {
						send e to Event.CHANNEL;
						latestUpdates.remove(e.source);
					} else {
						updateCount.count := count;
					}
				}
			}
		}
	}
