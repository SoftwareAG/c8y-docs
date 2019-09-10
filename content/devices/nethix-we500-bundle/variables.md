---
title: Creating variables
layout: redirect
weight: 25
---
A variable indicates the value of a parameter of the monitoring/control system. For example, the variable called *temperature* indicates the value of the temperature measured by an analogical probe. Variables are fundamental elements of the system, since they indicate the value of the monitored parameters that are sent to the Cumulocity platform.

In order to send values to the Cumulocity platform, you need to create a new variable and to enable the *Portal sending* option on the variable creation page.

Navigate to **Administration > Variables > Variables** and click **New**, in order to create a new variable.

![Variable_Setup](/guides/images/devices/we500/variable_setup_generic_settings1.png)

Various types of variables are available. The parameters for a variable vary from type to type. Only the section **Generic Variable** is valid for all types of variables. This section is structured as follows:

* **Name:** Name for the variable. All alpha-numeric characters, and the character “_” are supported.
* **Type:** Type of the variable. For each variable type the setting parameters are different, see chapter [2.2. Type](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-var-type-en).
* **Variable Status:** To enable/disable the variable.
* **Portal sending:** To enable/disable the sending of the variable value to the Cumulocity platform. For further information regarding the data sending, see the  relevant section in [7. Data sending](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-data-sending-en).
* **Non-volatile value:** Allows to save the variable value every X minute and every time the device is switched off or rebooted.
* **Local log (min):** To set a different sampling time (in minutes) for each variable. The recorded data can then be exported or displayed in charts or tabs. For further information see section [8. Datalogger](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-datalogger-en).
