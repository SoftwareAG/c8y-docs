---
layout: devices
title: SIGFOX
---

## Overview

The following data are currently recorded:

* Raw SIGFOX data as event
* Signal strength measurement including RSSI (Received signal strength indication), SNR (Signal noise ratio) and average SNR
* Battery voltage measurement
* Device temperature measurement
* Downlink overusage warning (alarm)
* SIGFOX forwarded errors as alarms
* Shell operation to send raw SIGFOX commands to the device

## Configuring SIGFOX devices for Cumulocity

To forward SIGFOX data to Cumulocity, you need to add several callbacks to your device type in the [SIGFOX backend](https://backend.sigfox.com). Please note that in SIGFOX a callback is linked to a device type and not a single device.
All devices with that type connected to your SIGFOX account will trigger the callback.

### Device registration

The SIGFOX integration does not use the normal device registration process. You will need to add valid Cumulocity credentials to all configured callbacks. We recommend creating a dedicated user in Cumulocity for that and add it to the devices group. The SIGFOX agent will automatically create one device per received deviceId by the SIGFOX backend.

### Data callback

The data callback will create an event in Cumulocity with the full content received from the SIGFOX backend. Additionally the values for signal strength will be created as a measurement.

You need to add a new custom callback and change the following parameters:
* type: DATA BIDIR
* Url pattern: https://sigfox-agent.cumulocity.com/sigfoxDataCallback
* Use HTTP Method: POST
* Headers: Authorization _&lt;your Base64 encoded password&gt;_ (the password needs to be encoded in the format: tenant/username:password)
* Content-Type: application/json
* Body:

      {
      	"device": "{device}",
      	"time": "{time}",
      	"snr": "{snr}",
      	"station": "{station}",
      	"data":	"{data}",
      	"avgSignal": "{avgSnr}",
      	"lat": "{lat}",
      	"lng": "{lng}",
      	"rssi": "{rssi}",
      	"seqNumber": "{seqNumber}"
      }

Setting the type to bi-directional (BIDIR) enables Cumulocity to send commands in return.

![Data callback configuration](/guides/devices/sigfox/sigfox_backend_data.png)

### Service acknowledge callback

The service acknowledge callback will tell Cumulocity the status of the last sent operation. Depending on the content, Cumulocity will set the operation to SUCCESSFUL or FAILED including the failure reason provided by SIGFOX.
Additionally there will be a warning created whenever SIGFOX sends true for the downlinkOverusage.

You need to add a new custom callback and change the following parameters:
* type: SERVICE ACKNOWLEDGE
* Url pattern: https://sigfox-agent.cumulocity.com/sigfoxServiceAcknowledgeCallback
* Use HTTP Method: POST
* Headers: Authorization _&lt;your Base64 encoded password&gt;_ (the password needs to be encoded in the format: tenant/username:password)
* Content-Type: application/json
* Body:

      {
        "device": "{device}",
        "time": "{time}",
        "infoCode": "{infoCode}",
        "infoMessage": "{infoMessage}",
        "downlinkAck": "{downlinkAck}",
        "downlinkOverusage": "{downlinkOverusage}"
      }

![Service acknowledge callback configuration](/guides/devices/sigfox/sigfox_backend_serviceack.png)

### Service status callback

The service status callback is an optional addition to the previous callbacks. It will create a temperature and battery measurement from the provided data.

You need to add a new custom callback and change the following parameters:
* type: SERVICE STATUS
* Url pattern: https://sigfox-agent.cumulocity.com/sigfoxServiceStatusCallback
* Use HTTP Method: POST
* Headers: Authorization _&lt;your Base64 encoded password&gt;_ (the password needs to be encoded in the format: tenant/username:password)
* Content-Type: application/json
* Body:

      {
        "device": "{device}",
        "time": "{time}",
        "batt": "{batt}",
        "temp": "{temp}",
        "seqNumber": "{seqNumber}"
      }

![Service status callback configuration](/guides/devices/sigfox/sigfox_backend_servicestatus.png)

### Error callback

The error callback is an optional addition to the previous callbacks. It will create alarms from the forwarded errors.

You need to add a new custom callback and change the following parameters:
* type: ERROR
* Url pattern: https://sigfox-agent.cumulocity.com/sigfoxErrorCallback
* Use HTTP Method: POST
* Headers: Authorization _&lt;your Base64 encoded password&gt;_ (the password needs to be encoded in the format: tenant/username:password)
* Content-Type: application/json
* Body:

      {
        "device": "{device}",
        "time": "{time}",
        "info": "{info}",
        "severity": "{severity}"
      }

![Error callback configuration](/guides/devices/sigfox/sigfox_backend_error.png)

## Data created by SIGFOX devices

The full payload contained in the data callback will be created as an event.

![SIGFOX event](/guides/devices/sigfox/sigfox_event.png)

The signal strength values from in the data callback and the battery and temperature values contained in the service status callback will be created as measurements.

![SIGFOX signal strength](/guides/devices/sigfox/sigfox_signalstrength.png)

![SIGFOX battery](/guides/devices/sigfox/sigfox_battery.png)

![SIGFOX temperature](/guides/devices/sigfox/sigfox_temperature.png)

Data from the error callback and the downlinkOverusage flag will be created as alarms.

![SIGFOX temperature](/guides/devices/sigfox/sigfox_alarms.png)

Using the device shell you can send direct commands to a SIGFOX device. SIGFOX commands are 8 bytes in hexadecimal format. You need to put a 16 character (2 characters per byte) hexadecimal string to the shell.

![SIGFOX temperature](/guides/devices/sigfox/sigfox_shell.png)
