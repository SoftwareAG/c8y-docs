---
weight: 40
title: Common capabilities
layout: redirect
---

### c8y\_Relay

A relay is a kind of binary state switch which can be in the states OPEN or CLOSED. Relays can be used for many purposes, for example to connect or disconnect the consumer power supply through a smart energy meter.
In a managed object, a relay control model includes the state of the control. When the control state changes, the inventory model should be updated to include the new state:

```json
"c8y_Relay": {
  "relayState" : "OPEN"
}
```

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

### c8y\_RelayArray

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
