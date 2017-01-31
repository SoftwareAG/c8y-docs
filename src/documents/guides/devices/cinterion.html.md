---
layout: devices
title: Cinterion Java modules
---

## Overview

Gemalto offers a number of Java-enabled M2M modules as part of their [Cinterion product line](http://m2m.gemalto.com/products.html). These modules combine modem functionality, hardware interfaces (such as serial, GPIO, ...) and a programmable platform based on JavaME. In this section, we describe how to use a Cinterion Java module with the Cumulocity JavaME client libraries.

## Prerequisites

To run the example in this section, you need to:

* A Cinterion Java module with an activated SIM card.
* A Microsoft Windows environment with the Cinterion Mobility Toolkit (CMTK) installed. The CMTK software and documentation is available from your local Cinterion distributor.
* Eclipse integrated with the CMTK as described in Cinterion's Java User's Guide.
* A working connection between your Windows environment and your Cinterion Java module through USB or serial interfaces.

## Developing an agent

Start by setting up the [JavaME "Hello, world!"](/guides/java/hello-world-me) in the Eclipse instance that has the CMTK support installed. To run the "Hello, world!", you need to dial up the module to the Internet. Use the following steps:

* Add the Cinterion utility library to the project as described in Section 10.2.4 of the Java User's Guide. 
 * Select "Build Path", "Add External Archives". Locate the "cwmlib_1.0.jar" in your CMTK and click "OK".
 * Select "Properties", "Java Build Path", "Order and Export". Check "cwmlib_1.0.jar" and click "OK".
* Add the convenience method below your MIDlet. The method sends an AT command to the Cinterion modem using the Cinterion utility library.


	private ATCommand ATC;
	
	private String sendCommand(String command) {
		try {
			if (ATC == null) {
				ATC = new ATCommand(false);
			}
			String result = ATC.send(command + "\r\n");
			Thread.sleep(1000);
			return result;
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage());
		}
	}

* Add the code below at the start of the "startApp" method. Replace "&lt;&lt;APN&gt;&gt;" with the APN of your network provider. These AT commands dial the modem up to the Internet.


	sendCommand("AT+CMEE=2");
	sendCommand("AT^SJNET=\"gprs\",\"<<APN>>\",\"\",\"\"");

* Run the project as "Emulated Java MIDlet".

## Reading device data

TBD: Signal strength reading from the device.
