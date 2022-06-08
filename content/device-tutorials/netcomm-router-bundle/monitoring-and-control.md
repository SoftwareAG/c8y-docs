---
title: Remote monitoring and control of industrial assets
weight: 40
---

<a name="gpio"></a>
### Using GPIO

The following GPIO functionalities are supported:

* Send the voltage of an analog input as measurements to the {{< product-c8y-iot >}} platform.
* Raise or clear alarms when a digital input turns 1 or 0, respectively.
* Write to a digital output remotely from the {{< product-c8y-iot >}} platform.

Consult the documentation of your router for more information about its specific IO settings. The available functionalities may vary between different router models. For example, the NTC-220 supports GPIO pins 1-3.

#### Analog input

To regularly poll the input voltage of a GPIO pin and send it to the {{< product-c8y-iot >}} platform, set [**GPIO analog measurements**](#configure) to a non-zero value. Alternatively, use the [device shell](#device-shell).

```shell
set service.cumulocity.gpio.interval=<seconds>
```

Then, you must specify the port and turn on the notification by using the [device shell](#device-shell).

```shell
set service.cumulocity.gpio.<port>.notify=measurement
```

&#60;port&#62; is the numbering of the GPIO pin. For NTC-220, <port> can be 1, 2 or 3. The visualized result is then visible in the **Measurements** tab.

#### Digital input
You can raise alarms from digital inputs. These can be configured using the router user interface or through the [device shell](#device-shell).

```shell
set service.cumulocity.gpio.<port>.notify=alarm
set service.cumulocity.gpio.<port>.debounce.interval=<seconds>
set service.cumulocity.gpio.<port>.alarm.text=<ALARM_TEXT>
set service.cumulocity.gpio.<port>.alarm.severity=<severity>
```

Possible values for the notify parameter are:

* off: The pin is disabled for any notification.
* alarm: An alarm is raised when the pin reading is **high**.
* measurement: Analog reading of voltage will be sent as measurement.

The debounce interval reduces electrical noise from the GPIO inputs: The shorter the interval, the noisier the value but the faster the reaction to signal changes. The default debounce interval is 10 mins.

You can override the default alarm text by setting the **text** property. By default, this value is empty and *gpio&#60;N&#62; is active* is used as text, where &#60;N&#62; is the numbering of a GPIO pin.

Valid alarm severities are:

* WARNING
* MINOR
* MAJOR [default]
* CRITICAL

The inputs are checked every second for changes.

#### Digital output

Digital outputs can be controlled using the "Relay array control" widget, see the screenshot below. The green icon means "closed (low value)" and the red icon means "opened (high value)". The numbering of the GPIO pins are the same as listed on the router. For the NTC-220 model, three GPIO pins can be set.

![Relay Array Widget](/images/device-demos/casa-system-router/router-relay-array.png)

<a name="modbus"></a>
### Cloud Fieldbus

You can connect Modbus-TCP and Modbus-RTU clients to the router via LAN and serial port, respectively, and manage them remotely in {{< product-c8y-iot >}}. To do so, you must follow these steps.

For Modbus-TCP setup:

* Establish LAN connectivity. Use the [**Network**](#network) tab as described above and the corresponding configuration mechanism on the Modbus device to enable IP communication between the router and the Modbus-TCP clients.
* Configure the Modbus-TCP port in the {{< product-c8y-iot >}} menu in the web UI of the router if you are using a different port than the default 502, see [Configuring the router](#configure).

For Modbus-RTU setup:

* Connect the router and your Modbus-RTU clients via a serial cable.
* Configure the serial port mode via the device shell:

```shell
set serial.iomode.default=<mode>
```

where `<mode>` can be rs232, rs422 or rs485. You may need to reboot the router after changing the mode.

* Make sure to turn off all serial port related functionalities on the router, such as PADD and Data Stream Manager. Otherwise, the agent will conflict for accessing the serial port.

{{< c8y-admon-info >}}
The default serial port `/dev/ttyO1` refers to the Model NTC-220 series. Other models might use different ports. For example, the Model NTC-6200 uses `/dev/ttyAPP4` instead. It should work with no further configuration. In case it's empty or you need to configure a different port, it can be configured in the {{< product-c8y-iot >}} menu in the web UI of the router, see [Configuring the router](#configure).

Some USB to serial adapters have echo mode enabled by default.This may result in stopping the Modbus communication completely. If you have one of these adapters, consult the adapter's manufacturer about how to disable it.
{{< /c8y-admon-info >}}

Then:

* Subscribe your account to the Cloud Fieldbus feature by contacting [product support](/welcome/contacting-support/).
* Configure the Modbus communication as described in [Cloud Fieldbus](/protocol-integration/cloud-fieldbus/#configuring-fieldbus) in the *Protocol integration guide*.
* Enable or disable write permission by setting the "Modbus read only" property in the {{< product-c8y-iot >}} menu in the web UI of the router, see [Configuring the router](#configure). Set it to 0 to allow write permission and 1 to disallow Modbus write permission.

<a name="remote-access"></a>
### Cloud Remote Access

If your device supports VNC, Telnet or SSH remote access, you can remotely manage it via {{< product-c8y-iot >}}.

As shown in the screenshot, you can add your VNC, Telnet or SSH servers as an endpoint with appropriate IP and port in the **Remote Access** tab of a particular device in the Device Management application. If you click **Connect**, the display content of your remote server will be shown in a new browser window.

![Remote Access](/images/device-demos/casa-system-router/router-remote-access.png)

For details on the remote access functionality, refer to [Cloud Remote Access](/cloud-remote-access/cra-general-aspects).
