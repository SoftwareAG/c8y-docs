---
order: 50
layout: redirect
title: Subscribe templates
---

Client can receive the following templates when subscribing to "s/ds".

### Inventory templates (1xx)

#### Get children of device (106)

Lists all children of the device

|Position|Parameter|
|:-------|:-------|
|1...|child|

Example:
```
106,child1,child2,child3
```

### Operation templates (5xx)

All operation responses have the same base structure leading with the message ID followed by the ID of either the root device or a child which should handle the operation.

#### Restart (510)

Tells the device to restart.

Example:
```
510,DeviceSerial
```

#### Command (511)

Tells the device to run the command send in the operation.

|Position|Parameter|
|:-------|:-------|
|1|Command text|

Example:
```
511,DeviceSerial,execute this
```

#### Configuration (513)

Tells the device to set the configuration send in the operation.

|Position|Parameter|
|:-------|:-------|
|1|configuration|

Example:
```
513,DeviceSerial,"val1=1\nval2=2"
```

#### Firmware (515)

Tells the device to install the firmware from the url.

|Position|Parameter|
|:-------|:-------|
|1|firmware name|
|2|firmware version|
|3|url|

Example:
```
515,DeviceSerial,myFimrware,1.0,http://www.my.url
```

#### Software list (516)

Tells the device to install the software send in the operation.

|Position|Parameter|
|:-------|:-------|
|1...|List of 3 values per software|
|1.1|name|
|1.2|version|
|1.3|url|

Example:
```
516,DeviceSerial,softwareA,1.0,url1,softwareB,2.0,url2
```

#### Measurement request operation (517)

Tells the device to send the measurements specified by the request name.

|Position|Parameter|
|:-------|:-------|
|1|request name|

Example:
```
517,DeviceSerial,LOGA
```

#### Relay (518)

Tells the device to either open or close the relay

|Position|Parameter|
|:-------|:-------|
|1|Relay state|

Example:
```
518,DeviceSerial,OPEN
```

#### RelayArray (519)

Tells the device either open or close the relays in the array.

|Position|Parameter|
|:-------|:-------|
|1...|List of relay state|

Example:
```
519,DeviceSerial,OPEN,CLOSE,CLOSE,OPEN
```

#### Upload configuration file (520)

Tells the device to upload its current configuration

Example:
```
520,DeviceSerial
```

#### Download configuration file (521)

Tells the device to download a configuration file from the url.

|Position|Parameter|
|:-------|:-------|
|1|url|

Example:
```
521,DeviceSerial,http://www.my.url
```

#### Logfile request (522)

Tells the device to upload a log file for the given parameters.

|Position|Parameter|
|:-------|:-------|
|1|Log file name|
|2|Start date|
|3|End date|
|4|Search text|
|5|Maximum lines|

Example:
```
522,DeviceSerial,logfileA,2013-06-22T17:03:14.000+02:00,2013-06-22T18:03:14.000+02:00,ERROR,1000
```

#### Communication mode (523)

Tells the device to change the communication mode.

|Position|Parameter|
|:-------|:-------|
|1|mode|

Example:
```
523,DeviceSerial,SMS
```