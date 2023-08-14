---
weight: 40
title: Monitoring and controlling devices
layout: bundle
section:
  - device_management
helpcontent:
- label: map
  title: Locating devices
  content: "In the map, you can view all devices in your account in real time. Devices are represented as 'pins'. Click a pin to see the name of the respective device. Click the device name to switch to its device details."
- label: availability
  title: Availability monitoring
  content: "Availability shows the availability across all devices for the last 24 hours, last 7 days and last 30 days. The availability is based on raised and cleared alarms and shown in percentage."
- label: alarm-monitoring
  title: Alarms
  content: "Devices can raise alarms to indicate that there is a problem. You can find an overview of the alarms across all devices here. To check the alarms of a particular device, switch to the **Alarm** tab in the details of the device.


  By default, only unresolved alarms are shown. If you turn on **Show cleared alarms** at the top right, you will see the entire alarm history.


  Alarms are classified according to their severity: CRITICAL, MAJOR, MINOR, WARNING.


  By clicking one of the buttons at the top, the corresponding section will be hidden. Click it once more to make the section visible again. Within each section, the alarms are sorted by their occurrence, displaying the most recent alarm first."
- label: single-operations
  title: Single operations
  content: "Using operations, you can control devices remotely. **Single operations** show all operations executed on a single device.


  Single operations can have one of the following four statuses: PENDING, EXECUTED, SUCCESSFUL, FAILED. For each operation, the name, status, and device is provided. Clicking the device leads you to the detailed view of the particular device."
- label: bulk-operations
  title: Bulk operations
  content: "**Bulk operations** are single operations executed on a set of devices.


  Bulk operations have an operation type, for example 'Software update' or 'Firmware update', and one of the following statuses: SCHEDULED, EXECUTING, CANCELED, COMPLETED WITH FAILURES, COMPLETED SUCCESSFULLY.


  You can filter the list of bulk operations for type, status or date. Click the arrow button at the right of a bulk operation to see its details."
- label: events-all
  title: Events
  content: "Troubleshooting devices at a more detailed level can be done with the help of events. Events are low-level messages sent by devices that are usually used for application-specific processing. For example, a vending device sends its real-time sales in the form of events.


   You can find an overview of the events across all devices here. To view the operations of a particular device, switch to the **Events** tab in the details of the device.


  Since devices may send large amounts of event data, you can filter the data to be displayed by date or type, using the fields at the top left."
---

{{< c8y-admon-related >}}
* [Device integration > Fragment library > Device availability](/device-integration/fragment-library/#device-availability) in the *Reference guide* for details on the `c8y_RequiredAvailability`, `c8y_UnavailabilityAlarm`, `c8y_Availability` and `c8y_Connection` fragments used in managed objects.
* The [alarms API](https://cumulocity.com/api/core/{{< c8y-current-version >}}/#tag/Alarms) for REST API methods concerning alarms.
* [Device integration > Fragment library > Alarms](/device-integration/fragment-library/#alarms) in the *Reference guide* for details on how to raise and clear alarms.
* The [operations API](https://cumulocity.com/api/core/{{< c8y-current-version >}}/#tag/Operations) for REST API methods concerning operations.
* The [bulk operations API](https://cumulocity.com/api/core/{{< c8y-current-version >}}/#tag/Bulk-operations) for REST API methods concerning bulk operations.
{{< /c8y-admon-related >}}
