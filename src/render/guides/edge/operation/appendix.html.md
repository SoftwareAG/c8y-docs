---
order: 80
title: Tips and tricks
layout: redirect
---

### Increasing the system performance

If the system performance is slow, the memory should be increased. First, increase the memory of the VM. This is done by stopping the VM and increasing its memory.

<img src="/guides/images/edge/edge-vm-increasing-memory.png" name="Increasing memory" style="width:75%;"/>

Increasing the VM memory should be followed by a JVM memory increase. 

This is done by starting the VM (follow the steps described in the installation section). Log into VM, open the file `/usr/share/cumulocity-core-karaf/bin/setenv` file and edit it as described below. The parameter is the following, default size is 1024.

	export JAVA_MAX_MEM=1024M # Maximum memory for the JVM

After increasing the size, restart Karaf by executing:

	# service cumulocity-core-karaf stop

and

	# service cumulocity-core-karaf start

Use the following command to check the JVM process of Karaf:

	# ps aux | grep karaf

Sample output:

	[root@server ~]# ps aux | grep karaf
	karaf     1525 44.1 15.2 3890280 618920 ?      Sl   09:56   2:21 /usr/java/default/bin/java -XX:+UseConcMarkSweepGC -Djava.rmi.server.hostname=127.0.0.1 -Djava.rmi.server.useLocalHostname=true -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=8199 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -server -Xms235M -Xmx1024M -XX:PermSize=16M -XX:MaxPermSize=512M -Dcom.sun.management.jmxremote -XX:+UseCompressedOops -XX:+UseParNewGC -XX:+UseConcMarkSweepGC 
	(rest of output trimmed)

If Karaf is not stopped by executing `service cumulocity-core-karaf stop` you can search for the PID (process ID) with `command ps aux | grep karaf` and stop it by executing:

	# kill -9 <PID>

In the example above, the PID is 1525.

### Increasing the MQTT message size

By default, the max size for one MQTT message is 8192 bytes(8KB).

To increase the MQTT message size, add the property “mqtt.max.message.size” 
in `/etc/cumulocity/cumulocity-core.properties`.

Example:

To set the message size to 16KB, set “mqtt.max.message.size=16384”.


After increasing the size, restart Karaf by executing:

	# service cumulocity-core-karaf restart



