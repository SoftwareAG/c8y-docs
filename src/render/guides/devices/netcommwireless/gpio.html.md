---
title: Using GPIO
layout: redirect
order: 60
---

The following GPIO functionalities are supported:

* Send the voltage of an analog input as measurements to Cumulocity.
* Raise or clear alarms when a digital input turn 1 or 0, respectively.
* Write to a digital output remotely from Cumulocity.

Consult the documentation of your router for more information about its specific IO settings. The available functionalities may vary between different device models. For example, the NTC 6200 model supports GPIO pins 1-3, while the NTC 140W model supports only GPIO pin 1.

### Analog input

To regularly poll the input voltage of a GPIO pin and send it to Cumulocity, set "[GPIO analog measurements](#configure)" to a non-zero value. Alternatively, use Device Shell:

	set service.cumulocity.gpio.interval=<interval>
	set service.cumulocity.gpio.<port>.notify=measurement

&lt;port&gt; is the numbering of the GPIO pin. For the NTC-6200, &lt;port&gt; can be 1, 2 or 3, while for NTC-140W, &lt;port&gt; can only be 1. The Visualized result is then visible in "Measurements".

### Digital input

You can raise alarms from digital inputs. These can be configured using the router user interface or through Device Shell. The format is

	set service.cumulocity.gpio.<port>.notify=alarm
	set service.cumulocity.gpio.<port>.debounce.interval=<SECONDS>
	set service.cumulocity.gpio.<port>.alarm.text=<ALARM_TEXT>
	set service.cumulocity.gpio.<port>.alarm.severity=<severity>

Possible values for the notify parameter are:

* off: The pin is disabled for any notification.
* alarm: An alarm is raised when the pin reading is "high".
* measurement: Analog reading of voltage will be send as measurement.

The debounce interval reduces electrical noise from the GPIO inputs: The shorter the interval, the noisier the value but the faster the reaction to signal changes. The default debounce interval is 10 mins.

You can override the default alarm text by setting the "text" property. By default, this value is empty and "gpio&lt;N&gt; is active" is used as text, where &lt;N&gt; is the numbering of a GPIO pin.

Valid alarm severities are:

 * WARNING
 * MINOR
 * MAJOR [default]
 * CRITICAL

The inputs are checked every second for changes.

### Digital output

Digital outputs can be controlled using the "Relay array" plugin, see below in the screenshot. The numbering of the GPIO pins are the same as listed on the router. For the NTC-6200 model, three GPIO pins can be set, while for the NTC-140W model, only the first pin has effect.

![Relay Array](/guides/images/devices/netcomm/relayarray.png)
