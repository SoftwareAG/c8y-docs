---
order: 40
title: Troubleshooting
layout: redirect
---

If the system performance is slow, the memory should be increased. 

First, increase the memory of the VM. Note, that you have to stop the VM to increase memory.

Next, the JVM memory should be increased. This is done in the file 
`/usr/share/cumulocity-core- karaf/bin/setenv`. The default size is
1024.

> export JAVA&#95;MAX_MEM=1024M  # Maximum memory for the JVM

After increasing the size restart karaf by executing:

> &#35;service cumulocity-core- karaf stop

and

> &#35;service cumulocity-core- karaf start

With the following command you can check the JVM for karaf:

> &#35;ps aux | grep karaf

Sample output:

> [root@server ~]# ps aux | grep karaf
> karaf 1525 44.1 15.2 3890280 618920 ? Sl 09:56 2:21 /usr/java/default/bin/java -
> XX:+UseConcMarkSweepGC -Djava.rmi.server.hostname=127.0.0.1 -
> Djava.rmi.server.useLocalHostname=true -Dcom.sun.management.jmxremote -
> Dcom.sun.management.jmxremote.port=8199 -
> Dcom.sun.management.jmxremote.authenticate=false -
> Dcom.sun.management.jmxremote.ssl=false -server -Xms235M -Xmx1024M -
> XX:PermSize=16M -XX:MaxPermSize=512M -Dcom.sun.management.jmxremote -
> XX:+UseCompressedOops -XX:+UseParNewGC -XX:+UseConcMarkSweepGC
> (rest of output trimmed)

If karaf does not stop by executing `service cumulocity-core- karaf stop` with command `ps aux | grep karaf `you can search for the PID (process ID) and stop it by executing `&#35;kill &lt;PID&gt;`
In the example above, the PID is 1525.

### FAQ

Q: When I have just started VM and tried to login, I get the message ‘404 Application not found’.

A: karaf needs some time to start. As other services depend on it there is a delay mechanism implemented. Once VM is up it takes several minutes until all services are up and running.
