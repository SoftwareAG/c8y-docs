---
weight: 40
title: Common Capabilities
layout: redirect
---

### Relay Control

A relay is a kind of binary state switch which can be in the states "OPEN" or "CLOSED". Relays can be used for many purposes, for example to connect or disconnect the consumer power supply through a smart energy meter.

#### Inventory representation

In a managed object, a relay control model includes the state of the control. When the control state changes, the inventory model should be updated to include the new state:

    "c8y_Relay" :
    {
      "relayState" : "OPEN"
    }

#### Operations

|Operation|States|Description|
|:--------|:-----|:----------|
|state|OPEN, CLOSED|OPEN commands the relay in to the open position, CLOSED commands it to the closed position.|

The operation representation is the same as the inventory representation:

    "c8y_Relay" :
    {
      "relayState" : "OPEN"
    }

### Control an Array of Relays

The c8y_RelayArray operation provides the functionality to control multiple relays.

#### Inventory representation

In a managed object, an array of relays' control model includes the state of each relay. When the state changes, the inventory model should be replaced with the new state:

	"c8y_RelayArray" : [
		"OPEN",
		"CLOSED",
		"CLOSED",
		"OPEN"
	]

#### Operations

The operation representation is the same as the inventory representation:

	"c8y_RelayArray" : [
		"OPEN",
		"CLOSED",
		"CLOSED",
		"OPEN"
	]

### Mobile information

c8y_Mobile holds the information about the mobile connection status (e.g. cell information) and the sim card (e.g. ICCID) of the device. Whenever the status changes the fragment in the device should be updated. The assumption for not moving devices is that these values rarely change.
For more frequently changing mobile information (e.g. signal strength) a measurement can be used.

#### Inventory representation

    "c8y_Mobile" : {
      "imsi": "..."
      "imei": "..."
      "currentOperator": "..."
      "currentBand": "..."
      "connType": "..."
      "rssi": "..."
      "ecn0": "..."
      "rcsp": "..."
      "mnc": "..."
      "lac": "..."
      "cellId": "..."
      "msisdn": "..."
      "iccid": "..."
    }

#### Measurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|rssi|dBm|RSSI measurement|

    "c8y_SignalStrength": {
      "rssi": {
        "unit": "dBm",
        "value": -63
      }
    }
