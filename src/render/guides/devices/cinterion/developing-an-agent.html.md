---
title: Developing an agent
layout: redirect
order: 20
---

Start by setting up the [JavaME "Hello, world!"](/guides/device-sdk/java#hello-world-me) in the Eclipse instance that has the CMTK support installed. To run the "Hello, world!", you need to dial up the module to the Internet. Use the following steps:

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

### Reading device data

TBD: Signal strength reading from the device.
