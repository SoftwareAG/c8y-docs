---
title: Cloud Fieldbus
layout: redirect
weight: 100
---

You can connect Modbus-TCP and Modbus-RTU slaves to the router via LAN and serial port, respectively, and manage them remotely in Cumulocity. To do so, you need to

For Modbus-TCP setup:

* Establish LAN connectivity. Use the "[Network](#network)" tab as described above and the corresponding configuration mechanism on the Modbus device to enable IP communication between the router and the your Modbus-TCP slaves.
* Configure the Modbus-TCP port in the Cumulocity menu on NetComm device's web UI if you are using a different port than the default 502, see "[Configuring the router](#configure)".

For Modbus-RTU setup:

* Connect the router and your Modbus-RTU slaves via a serial cable.
* Configure serial port mode via device shell:

        set serial.iomode.default=<mode>

where `<mode>` can be rs232, rs422 or rs485. You may need to reboot the device after changing the mode.

> The default serial port `/dev/ttyAPP4` should work with no further configuration. In case it's empty or you need to configure a different port, it can be configured in the Cumulocity menu in devices' web UI, see "[Configuring the router](#configure)".

> Some USB to serial adapters have echo mode enabled by default, this can render the Modbus communication stop working completely. If you have one of these adapters, consult the adapter's manufacturer about how to disable it.

> Model NTC-140W doesn't support modbus RTU, so you will not see the corresponding functionality in the UI.

> Model NTC-140W doesn't support modbus RTU, so you will not see the corresponding functionality in the UI.

Then:

* Subscribe your account to the Cloud Fieldbus app by contacting [support](https://support.cumulocity.com).
* Configure Modbus communication as described in the [Cloud Fieldbus user's guide](/guides/users-guide/cloud-fieldbus).
* Enable or disable write permission by setting the "Modbus read only" property in the Cumulocity menu on the device's web UI, see "[Configuring the router](#configure)". Set it to 0 means allow write permission, while 1 means disallow Modbus write permission.

## <a name="logs"></a>Log viewer

You can download and view logs from the device. Log files can be quite big, you can set filtering criteria to get only what is interesting for you.

From right you can set date range (date from and date to), you can select log file. Next you can search the text, and only matching lines are retrieved from the device. You can also limit matched lines.

Received logs are visible in a list below. You can click on it to show log file content at the bottom of the page. Last requested log is opened automatically.

![Log viewer](/images/devices/netcomm/logs.png)
