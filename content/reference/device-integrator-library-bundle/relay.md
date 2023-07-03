---
weight: 85
title: Relay
layout: redirect
---

### Relay

A relay is a kind of binary state switch which can be in the states OPEN or CLOSED. Relays can be used for many purposes, for example to connect or disconnect the consumer power supply through a smart energy meter.
In a managed object, a relay control model includes the state of the control. When the control state changes, the inventory model should be updated to include the new state:

```json
"c8y_Relay": {
  "relayState" : "OPEN"
}
```

For devices with the `c8y_Relay` fragment the [Relay control widget](/users-guide/cockpit#relay-control) can be used.

#### Operations

|Operation|States|Description|
|:--------|:-----|:----------|
|state|OPEN, CLOSED|OPEN commands the relay into the open position, CLOSED commands it to the closed position|

The operation representation is the same as the inventory representation:

```json
"c8y_Relay": {
  "relayState" : "OPEN"
}
```

**SmartREST example**

{{< product-c8y-iot >}} provides the 518 static response template:

1. The device receives the command via the 518 static response template<br>
   `518,OPEN`
2. Device sets operation status to EXECUTING <br>
   `501,c8y_Relay`
3. Device confirms successful execution by setting operation status to SUCCESSFUL <br>
   `503,c8y_Relay`

### Relay array

The `c8y_RelayArray` operation provides the functionality to control multiple relays.
In a managed object, the control model of an array of relays includes the state of each relay. When the state changes, the inventory model should be replaced with the new state:

```json
"c8y_RelayArray" : [
  "OPEN",
  "CLOSED",
  "CLOSED",
  "OPEN"
]
```

For devices with `c8y_Relay` fragment [relay array control widget](/users-guide/cockpit#relay-array-control) can be used.

#### Operations

The operation representation is the same as the inventory representation:

```json
"c8y_RelayArray" : [
  "OPEN",
  "CLOSED",
  "CLOSED",
  "OPEN"
]
```

**SmartREST example**

{{< product-c8y-iot >}} provides the 519 static response template:

1. Device receives command via 518 static response template <br>
   `519,OPEN,CLOSED,CLOSED,OPEN`
2. Device sets operation status to EXECUTING <br>
   `501,c8y_RelayArray`
3. Device confirms successful execution by setting operation status to SUCCESSFUL <br>
   `503,c8y_RelayArray`
