
---
weight: 30
title: Events
layout: redirect
---

Events are used to pass real-time information through {{< product-name-1 >}}.

Events come in three types:

-   A **base event** signals when something happens. An event can be triggered when a switch is switched on or off.

-   An **alarm** signals an event that requires manual action, for example, when a meter has been tampered with or the temperature of a fridge increases above a particular threshold.

-   An **audit log** stores events that are security-relevant and should be stored for auditing. For example, an audit log should be generated when a user logs into a gateway.

An event has one specific type (as specified in its naming convention), a time when the event occurred and a text to describe the event. An event refers to a source managed object in the inventory. This is an example of an event:

<pre><code class="json">{
	"type": "c8y_LocationUpdate",
	"time": "2010-11-13T18:28:36.000Z",
	"text": "Location updated",
	"source": { "id": "47634", ... },
	"c8y_Position": {
		"alt": 67,
		"lng": 6.15173,
		"lat": 51.211977
	}
}</code></pre>

Any event can be extended in the same way as described for managed objects above. In this example, we not only signal that an object moved, we also include the new position of the object in the form of a "c8y_Position" fragment.

An audit log extends an event through

-   A user name of the user that carried out the activity.
-   An application that was used to carry out the activity.
-   The actual activity.
-   A severity.

This is an example of an audit record structure:

<pre><code class="json">{
	"type": "c8y_SecurityEvent",
	"time": "2010-11-13T18:28:36.000Z",
	"text": "Gateway login failed",
	"user": "vvirtanen",
	"application": "Resort energy management",
	"activity": "login",
	"severity": "MINOR",
	"source": { "id": "47633", ... },
	...
}</code></pre>

An alarm extends events through

-   A status showing whether the alarm is active or cleared.
-   A time stamp when the alarm was last updated.
-   A classification such as critical, major, minor, warning.
-   A history of changes to the event in form of audit logs.

This is an example of an alarm that has been cleared:

<pre><code class="json">{
	"type": "c8y_UnavailabilityAlarm",
	"time": "2010-11-13T19:28:36.000Z",
	"text": "No communication with device since 2013-11-05T15:23:55.284+01:00",
	"status": "CLEARED",
	"severity": "MINOR",
	"source": { "id": "47633", ... },
	"history": {
		"auditRecords": [ {
			"activity": "Alarm updated",
			"application": "devicemanagement",
			"user": "vvirtanen",
			"time": "2013-11-05T16:37:48.494+01:00",
			"changes": [ {
				"attribute": "status",
				"newValue": "CLEARED",
				"previousValue": "ACTIVE",
				"type": "com.cumulocity.model.event.CumulocityAlarmStatuses"
			} ],
			...
		} ]
		...
	}
	...
}</code></pre>

More detailed information can be found in [Events](https://{{< URL >}}/api/#tag/Events), [Alarms](https://{{< URL >}}/api/#tag/Alarms) and [Audits](https://{{< URL >}}/api/#tag/Audits) in the {{< OpenAPI >}}.
