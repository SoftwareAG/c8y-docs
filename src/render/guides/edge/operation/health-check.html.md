---
order: 40
title: Health check
layout: redirect
---

### General settings

#### NTP

NTP automatically connects to the pool.ntp.org server to synchronize the time of the Edge server. All servers are configured to be clients only by default. 

Accurate time is important for several reasons. In Cumulocity, it is needed for example for the following items:

* Certificate delivery to the client (when time starts drifting certificates might not be valid anymore)
* MongoDB creates their internal ID based on timestamps


##### How to check time server process

Run the following command as the root user:

	# ps ax | grep ntp
	1946 ?        Ss     0:00 /usr/sbin/ntpd -u ntp:ntp -g
	1949 pts/2    S+     0:00 grep --color=auto ntp

You should see the ntpd process running. If not, start it with the following command:

	# service ntpd start

##### How to check time server synchronization

Run the following command as root user on the Edge server. Time servers will vary. 

	# ntpq -p
	
	    remote           refid      st t when poll reach   delay   offset  jitter
	==============================================================================
	+repos.lax-noc.c 127.67.113.92    2 u  333 1024  377  153.247    0.411   1.902
	*lite.computer   .PPS.            1 u 1028 1024  377   35.249    0.496  62.032
	+dns4.net.rpi.ed 18.26.4.105      2 u  680 1024  377   81.894    0.910   0.725
	-pool.sirsidynix 198.60.22.240    2 u  753 1024  377  144.866    1.618   0.978
	LOCAL(0)        .LOCL.          10 l    -   64    0    0.000    0.000   0.000

You should see at least one machine with `*` in front and a couple of machines with `+` in front. Then time is synced with the servers. Note that during startup it might take some minutes until `+` or `*` can be seen as the initial sync needs to be done.

##### How to configure ntp servers

On the Cumulocity platform, ntp needs to be configured via Chef and the environment file. Add the following entry to the environment:

	default_attributes(
		...  
	       "ntp" => {
	   		"servers" => ["time0.int.example.org", "time1.int.example.org"]
	 	}
	...

Now import the environment file via knife command to the Chef server. Then run the chef-client on the nodes to recreate the new config file or wait until the chef-client runs automatically and recreates the ntp configuration. 

### Network

Without working network connection the system is not able to work. The following instructions show how to check the network connectivity of the platform. 

#### Check network interface of the node

The following commands will show the interface and network settings of the machine:

	# ip a

This will list all interfaces and their current configuration. 

Example:

	$ ip a

	1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
       
	2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 08:00:27:88:e7:de brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 brd 10.0.2.255 scope global noprefixroute dynamic enp0s3
       valid_lft 85338sec preferred_lft 85338sec
    inet6 fe80::a00:27ff:fe88:e7de/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
       
	3: enp0s8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 08:00:27:81:fe:9d brd ff:ff:ff:ff:ff:ff
    inet 192.168.56.120/24 brd 192.168.56.255 scope global noprefixroute enp0s8
       valid_lft forever preferred_lft forever
    inet6 fe80::5b3a:bc65:40b5:f9ea/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever

You need to make sure that the node has an external interface (ethX) and the loopback interface configured (lo). The loopback interface needs to have the fixed IP 127.0.0.1 with subnet mask 255.0.0.0 and the IP address of the external interface must reside in the correct subnet with the correct subnet mask (in this examples 255.255.252.0).

The following command lists the local routing information.

	# netstat -rn

Example:

	$ netstat -rn
	Kernel IP routing table
	Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
	0.0.0.0         10.0.2.2        0.0.0.0         UG        0 0          0 enp0s3
	10.0.2.0        0.0.0.0         255.255.255.0   U         0 0          0 enp0s3
	192.168.56.0    0.0.0.0         255.255.255.0   U         0 0          0 enp0s8

Make sure you have the destination 0.0.0.0 in the list which then also has the gateway flag (G) set.

#### Check access to the internet

Try to reach a well-known address in the internet with the following command:

	$ ping -s 1500 8.8.8.8
	PING 8.8.8.8 (8.8.8.8) 1500(1528) bytes of data.
	64 bytes from 8.8.8.8: icmp_seq=1 ttl=56 time=2.61 ms
	64 bytes from 8.8.8.8: icmp_seq=2 ttl=56 time=2.80 ms
	64 bytes from 8.8.8.8: icmp_seq=3 ttl=56 time=2.82 ms
	64 bytes from 8.8.8.8: icmp_seq=4 ttl=56 time=2.75 ms
	64 bytes from 8.8.8.8: icmp_seq=5 ttl=56 time=2.79 ms

As when checking the internal reachability you need to make sure that you can see replies from the address you tried to reach. Use Ctrl-C to end the ping command. 

### Processing

This section lists the required services and processes on the Edge server.

#### MongoDB 

##### Check on Edge server

As the root user execute the following command for checking the availability of the mongod processes:

	# systemctl status mongo*

This should return output like the following:

	# 	systemctl status mongo*
	● mongodmongod7.service - SYSV: Mongo is a scalable, document-oriented database.
	 Loaded: loaded (/etc/systemd/system/mongodmongod7.service; enabled; vendor preset: disabled)
	 Active: active (running) since Mon 2018-05-14 12:53:38 CEST; 22min ago
	   Docs: man:mongod(1)
	Process: 960 ExecStart=/etc/init.d/mongodmongod7 start (code=exited, status=0/SUCCESS)
	 CGroup: /system.slice/mongodmongod7.service
	         └─1227 /usr/bin/mongod -f /etc/mongo/mongomongod7.conf

The pids will be different on each machine and the amount of pids depends on the amount of mongod processes on the Edge server. 

In a standalone environment you will only see one (1) pid (example above).

##### MongoDB tools for performance debugging

MongoDB by default has the following tools available for monitoring the performance

mongostat: Similar to jstat, mongostat displays the internal memory status and other information for a mongod process.

	$ mongostat --host localhost:<Mongo port> --username "<user>" \
	                     --password "<password>" --authenticationDatabase "admin"
	
	insert query update delete getmore command % dirty % used flushes vsize   res qr|qw ar|aw netIn netOut conn  set repl                      time
	    25   272      8     *0      35    60|0     1.9   80.0       0 16.0G 13.8G   0|0   0|0  124k   277k  104 rs01  PRI 2017-05-24T13:11:16+02:00
	     7    61     *0     *0      10    18|0     1.9   80.0       0 16.0G 13.8G   0|0   1|0 28.4k   105k  104 rs01  PRI 2017-05-24T13:11:17+02:00
	     3    71      3     *0      10    15|0     1.9   80.0       0 16.0G 13.8G   0|0   0|0 36.8k   231k  104 rs01  PRI 2017-05-24T13:11:18+02:00
	     8    87      3     *0      14    24|0     1.9   80.0       0 16.0G 13.8G   0|0   0|0 44.4k   581k  104 rs01  PRI 2017-05-24T13:11:19+02:00
	     4    86      3     *0       6    16|0     1.9   80.0       0 16.0G 13.8G   0|0   0|0 34.2k  1.68m  104 rs01  PRI 2017-05-24T13:11:20+02:00

mongotop: Shows the access for the different database fragments for each replicatset.

	$ mongotop --host localhost:<Mongo port> --username "<user>" \
	                     --password "<password>" --authenticationDatabase "admin"
	2017-05-24T13:14:58.001+0200    connected to: localhost:27011
	
	                           ns    total    read    write    2017-05-24T13:14:59+02:00
	               local.oplog.rs      2ms     2ms      0ms                             
	         nordex.configuration      1ms     1ms      0ms                             
	           a0919729321.alarms      0ms     0ms      0ms                             
	           a0919729321.audits      0ms     0ms      0ms                             
	           a0919729321.cmdata      0ms     0ms      0ms                             
	    a0919729321.cmdata.chunks      0ms     0ms      0ms                             
	     a0919729321.cmdata.files      0ms     0ms      0ms                             
	    a0919729321.configuration      0ms     0ms      0ms                             
	           a0919729321.events      0ms     0ms      0ms                             
	a0919729321.events_attachment      0ms     0ms      0ms                         

Both tools allow the identification of bottlenecks within the database engine. 

##### Check on Mongo process

On the Edge server execute the following command:

	# ps ax | grep -v grep | grep mongo

It should deliver output similar to this:

	1227 ?        Sl     0:01 /usr/bin/mongod -f /etc/mongo/mongomongod7.conf

If it does not show a similar output the mongos server is not running. 

#### Karaf

##### Check thread status

As the root user, execute the following command to check if the Karaf process is still running:

	# ps ax | grep java | grep karaf

This should show an output like this:

[root@cumulocity01 cumulocity]# ps ax | grep java | grep karaf
1205 ?        Sl     1:45 /usr/java/default/bin/java -XX:+UseConcMarkSweepGC -Djava.rmi.server.hostname=127.0.0.1 -Djava.rmi.server.useLocalHostname=true -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=8199 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -server -Xms1127M -Xmx4096M -XX:NewRatio=3 -Dcom.sun.management.jmxremote -XX:+UseCompressedOops -XX:+UseParNewGC -XX:+UseConcMarkSweepGC -XX:+ScavengeBeforeFullGC -XX:+CMSParallelRemarkEnabled -XX:+CMSScavengeBeforeRemark -XX:+DisableExplicitGC -Djava.awt.headless=true -Djava.endorsed.dirs=/usr/java/default/jre/lib/endorsed:/usr/java/default/lib/endorsed:/usr/share/cumulocity-core-karaf/lib/endorsed -Djava.ext.dirs=/usr/java/default/jre/lib/ext:/usr/java/default/lib/ext:/usr/share/cumulocity-core-karaf/lib/ext -Dkaraf.instances=/usr/share/cumulocity-core-karaf/instances -Dkaraf.home=/usr/share/cumulocity-core-karaf -Dkaraf.base=/usr/share/cumulocity-core-karaf -Dkaraf.data=/usr/share/cumulocity-core-karaf/data -Dkaraf.etc=/usr/share/cumulocity-core-karaf/etc -Djava.io.tmpdir=/usr/share/cumulocity-core-karaf/data/tmp -Djava.util.logging.config.file=/usr/share/cumulocity-core-karaf/etc/java.util.logging.properties -Dkaraf.startLocalConsole=false -Dkaraf.startRemoteShell=true -classpath /usr/share/cumulocity-core-karaf/lib/karaf-jaas-boot.jar:/usr/share/cumulocity-core-karaf/lib/karaf.jar:/usr/share/cumulocity-core karaf/lib/karaf-org.osgi.core.jar org.apache.karaf.main.Main

The output should give back a single process. You will need the process ID for later steps so please note it down.

To get a health check of the JVM and related parameters you can run the following command:

# kill -3 <karaf_pid>

This will dump the thread and memory status into the following file

/usr/share/cumulocity-core-karaf/data/karaf.out

This will contain data like this:

2016-03-16 12:13:44 Full thread dump OpenJDK 64-Bit Server VM (24.95-b01 mixed mode):

"Timer-1" daemon prio=10 tid=0x00007fe9e037f000 nid=0x7602 in Object.wait() [0x00007fea08beb000]
  java.lang.Thread.State: WAITING (on object monitor)
       at java.lang.Object.wait(Native Method)
       - waiting on <0x0000000770f20070> (a java.util.TaskQueue)
       at java.lang.Object.wait(Object.java:503)
       at java.util.TimerThread.mainLoop(Timer.java:526)
       - locked <0x0000000770f20070> (a java.util.TaskQueue)
       at java.util.TimerThread.run(Timer.java:505)

"WebListenerExecutor: 3" daemon prio=10 tid=0x00007fea0016a800 nid=0x75fe waiting on condition [0x00007fe9db2f1000]
  java.lang.Thread.State: WAITING (parking)
       at sun.misc.Unsafe.park(Native Method)
       
…
Many more lines
…

"VM Thread" prio=10 tid=0x00007fea1c0fd800 nid=0x75b3 runnable 

"Gang worker#0 (Parallel GC Threads)" prio=10 tid=0x00007fea1c01c800 nid=0x75b0 runnable 

"Gang worker#1 (Parallel GC Threads)" prio=10 tid=0x00007fea1c01e800 nid=0x75b1 runnable 

"Concurrent Mark-Sweep GC Thread" prio=10 tid=0x00007fea1c074000 nid=0x75b2 runnable 
"VM Periodic Task Thread" prio=10 tid=0x00007fea1c23e000 nid=0x75be waiting on condition 

JNI global references: 365

Heap
par new generation   total 153344K, used 12705K [0x0000000768a00000, 0x0000000773060000, 0x0000000773060000)
 eden space 136320K,   3% used [0x0000000768a00000, 0x0000000768eb4b80, 0x0000000770f20000)
 from space 17024K,  46% used [0x0000000770f20000, 0x00000007716d3b20, 0x0000000771fc0000)
 to   space 17024K,   0% used [0x0000000771fc0000, 0x0000000771fc0000, 0x0000000773060000)
concurrent mark-sweep generation total 878208K, used 36561K [0x0000000773060000, 0x00000007a8a00000, 0x00000007e0000000)
concurrent-mark-sweep perm gen total 29780K, used 29599K [0x00000007e0000000, 0x00000007e1d15000, 0x0000000800000000)

It logs the actual status of each thread and the memory consumption of the Karaf node in this file at the time of the sending of the signal -3.




8.3.2.2. Check platform status	

You can check the status of the platform by running the following command:

curl -v http://localhost:8181/tenant/health

* About to connect() to localhost port 8181 (#0)
*   Trying ::1...
* Connected to localhost (::1) port 8181 (#0)
> GET /tenant/health HTTP/1.1
> User-Agent: curl/7.29.0
> Host: localhost:8181
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: application/json
< Date: Sat, 05 May 2018 18:13:28 GMT
< Transfer-Encoding: chunked
< Server: Jetty(8.1.19.v20160209)
<
* Connection #0 to host localhost left intact 
{
	"status": "UP",
	"services": {
		"details": {},
		"status": "UP"
	},
	"mongodb": {
		"details": {},
		"status": "UP"
	},
	"tenant": {
		"details": {},
		"status": "UP"
	}
}


The ‘status:”UP”’ shows that all services. If something wrong endpoint should respond different error code then 200 OK, and response should contains something else like:


{
   "status":"DOWN",
   "services":{
      "details":{

      },
      "status":"UP"
   },
   "mongodb":{
      "details":{

      },
      "status":"UP"
   },
   "tenant":{
      "details":{
         "notFullyInitializedTenants":{
            "savenindia":"PAYPAL_REFUND",
            "nowa":"PAYPAL_REFUND",
            "ttc":"PAYPAL_REFUND",
            "controllogichh":"PAYPAL_REFUND",
            "jonathan":"PAYPAL_REFUND",
            "barcotrail":"PAYPAL_REFUND",
            "ngservices":"PAYPAL_REFUND",
            "sixsenses":"PAYPAL_REFUND",
            "trav2":"PAYPAL_REFUND",
            "lucaslocatrix":"PAYPAL_REFUND"
         }
      },
      "status":"DOWN"
   }
}

Response contains checks for most important components:
services - Status of OSGI services running within karaf  container.
mongo - Status of connection to mongo database
tenant - Tenant initialization status.

The list describes the tenants which on the core node have not been fully initialized and the initialization status they are in. 

Tenant statuses:



Status
Description
UNINITIALIZED
Tenant has not been initialized
DB_INITIALIZED
Database initialisation is performed
LOCAL_APPLICATION_INITIALIZED
Local applications are deployed
CEP_INITIALIZED
CEP rules are been deployed
HEART_BEAT_MONITORING_INITIALIZED
Heartbeat monitoring for devices is been started
PAYPAL_REFUND
Failed PayPal operations are refunded (when tenant is using PayPal)
BULK_OPERATION_INITIALIZED
Support for bulk operations is initialized
FULLY_INITIALIZED
Tenant is in working state (should not be displayed)

8.4. Checking the system services?
8.4.1. Checking REST API availability
Run the following command to check the REST API availability:
$ curl -u 'edge/<username>:<password>' -v -X GET http://<base_url>/platform
 
* About to connect() to <base_url> port 80 (#0)
*   Trying 52.29.189.245... connected
* Connected to <base_url> (52.29.189.245) port 80 (#0)
* Server auth using Basic with user 'management/<username>'
> GET /platform HTTP/1.1
> Authorization: Basic bWFuYWdlbWVudC90c3NjaHVlbDohITQ3TmV1bjI3MQ==
> User-Agent: curl/7.19.7 (x86_64-redhat-linux-gnu) libcurl/7.19.7 NSS/3.21 Basic ECC zlib/1.2.3 libidn/1.18 libssh2/1.4.2
> Host: <base_url>
> Accept: */*
> 
< HTTP/1.1 200 OK
< Server: nginx
< Date: Tue, 23 Aug 2016 15:39:29 GMT
< Content-Type: application/vnd.com.nsn.cumulocity.platformApi+json; charset=UTF-8; ver=0.9
< Transfer-Encoding: chunked
< Connection: keep-alive
< 
{"alarm":{"alarms":{"alarms":null,"self":"http://management.<base_url>/alarm/alarms"},"alarmsForSource":"http://management.<base_url>/alarm/alarms?source={source}","alarmsForSourceAndStatus":"http://management.<base_url>/alarm/alarms?source={source}&status={status}","alarmsForSourceAndStatusAndTime":"http://management.<base_url>/alarm/alarms?source={source}&status={status}&dateFrom={dateFrom}&dateTo={dateTo}","alarmsForSourceAndTime":"http://management.<base_url>/alarm/alarms?source={source}&dateFrom={dateFrom}&dateTo={dateTo}","alarmsForStatus":"http://management.<base_url>/alarm/alarms?status={status}","alarmsForStatusAndTime":"http://management.<base_url>/alarm/alarms?status={status}&dateFrom={dateFrom}&dateTo={dateTo}","alarmsForTime":"http://management.<base_url>/alarm/alarms?dateFrom={dateFrom}&dateTo={dateTo}","self":"http://management.<base_url>/alarm"},…}
This example shows that the correct answer of the platform. The username and password need to have full read access to the management tenant. The <base_url> needs to be given to connect to the correct platform and the management tenant must not be blocked from outside.  

