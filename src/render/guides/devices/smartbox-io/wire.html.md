---
title: Wire your Smartbox
layout: redirect
order: 20
---

* The RelayOutput features an potential free output with 230V max. 2A
  * U1  - Common
  * U2  - NC
  * U3  - NO
* Connect your sensors, DIN, Analogue Input between Ux and G
* You can use external 24VDC (200mA) or the with the delivered PowerSupply

![Interface](/guides/images/devices/smartbox-io/io-interface.png)

Note that the SMARTbox IO supports: 

| PIN SMARTbox <td colspan=7> settable Configuration in Cloud (see device Model) 
| --- | --- | --- | --- | --- | --- | --- | --- |
| G-U1 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 4: 0-10V | 5: DI NO | 6: DI NC |
| G-U2 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 4: 0-10V | 5: DI NO | 6: DI NC |
| G-U3 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 4: 0-10V | 5: DI NO | 6: DI NC |
| G-U4 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 4: 0-10V | 5: DI NO | 6: DI NC |
| G-U5 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 4: 0-10V | 5: DI NO | 6: DI NC |
| G-U6 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 4: 0-10V | 5: DI NO | 6: DI NC |
| G-U7 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 5: DI NO | | 6: DI NC |
| G-U8 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 5: DI NO | | 6: DI NC |
| G-U9 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 5: DI NO | | 6: DI NC |
| G-U10 | 0: inaktiv | 1: PT100 | 2: PT1000 | 3: NTC10K | 5: DI NO | | 6: DI NC |
| Relay <td colspan=2> <ul><li>U1 - Common</li><li>U2 - NC</li><li>U3 - NO</li></ul> | Note: These Pins are on the backside | | | | | |

The connection diagram of the sensors is as follows:

![Interface Sensors](/guides/images/devices/smartbox-io/interface-sensors.png)
