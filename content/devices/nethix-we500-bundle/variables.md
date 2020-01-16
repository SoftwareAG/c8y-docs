---
title: Creating variables
layout: redirect
weight: 40
---
A variable indicates the value of one parameter of the monitoring/control system. For example, the variable called temperature indicates the value of the *temperature* measured by an analogical probe. Variables are fundamental elements of the system, since they indicate the value of the monitored parameters that are sent to the Cumulocity platform.

In order to do that, it’s necessary to create a new variable and to enable the *Portal sending* option on the variable creation page.

Navigate to **Administration > Variables > Variables** tab and click *New*, in order to create a new variable.

![Variable_Setup](/guides/images/devices/we500/variable_setup_generic_settings1.png)

Many different types of variables are available, and for each of them parameters may differ. Only the section **Generic Variable** is valid for all types of variables. This section is structured as follows:

* **Name:** The name to be assigned to the variable. All alpha-numeric characters, and the character “_” are supported.
* **Type:** This allows to select the type of the variable. For each variable type the setting-parameters are different, see chapter [2.2. Type](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-var-type-en).
* **Variable Status:** enable/disable the variable.
* **Portal sending:** It allows to enable/disable the sending of the variable value to **Cumulocity** portal. For further information regarding the data-sending, see relevant section [7. Data sending](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-data-sending-en).
* **Non-volatile value:** It allows to save the variable value every X minute and everytime the device is switched off or rebooted.
* **Local log (min):** It allows to set a different sampling time (in minutes) for each variable. The recorded data can be then exported or displayed in charts or tabs. For further information see section [8. Datalogger](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-datalogger-en).
