---
weight: 37
title: Network management
layout: redirect
---

#### c8y_Networks

The **Network** tab in the Device Management application receives its data from the `c8y_Network` fragment. Furthermore, the `c8y_Network` fragment contains additional nested fragments such as `c8y_LAN`, `c8y_WAN` and `c8y_DHCP` . There is no limit to the fragments that you may use.

Below is an example code with the `c8y_Network` fragment:

```json
{
  "c8y_Network":{
    "c8y_LAN":{
    	"netmask":"255.255.255.0",
  	  "ip":"192.168.128.1",
  	  "name":"br0",
  	  "enabled":1,
  	  "mac":"00:60:64:dd:a5:c3"
    },
    "c8y_WAN":{
   	  "password":"user-password",
  	  "simStatus":"SIM OK",
  	  "authType":"chap",
  	  "apn":"example.apn.com",
  	  "username":"test"
    },
    "c8y_DHCP":{  
  	  "dns2":"null",
  	  "dns1":"null",
  	  "domainName":"null",
  	  "addressRange":{
  	    "start":"192.168.128.100",
        "end":"192.168.128.199"
      },
      "enabled":1
  	}
  }
}
```
>**Info:** If the code example above does not meet your requirements, you can add custom fragments.
