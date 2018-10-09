---
order: 15
title: Monitoring
layout: redirect
---

Monit is a small open-source utility for managing and monitoring Unix systems. It conducts automatic maintenance and repair and can execute meaningful causal actions in error situations. 

In Edge, Monit is used to monitor processes and take a restart action if any of them is down/inactive. The usual Monit interval (cycle) is 30 seconds. 

### Usage

Monit can provide a quick status report of all configured services and processes by running the following command as admin user:

	$ sudo monit summary

The command will provide an output similar to this:

<img src="/guides/images/edge/edge-monitoring-01.png" name="Status report" style="width:100%;"/> 

There might be cases where Monit has stopped monitoring some resources because of timeout on constant failures or dependency issues. 

<img src="/guides/images/edge/edge-monitoring-02.png" name="Status report" style="width:100%;"/> 

A specific component, e.g. apama-correlator_proc, can be restarted using the following command: 

	$ sudo monit restart apama-correlator_proc

The Monit status can be checked by running: 

	$ sudo systemctl status monit

Monit can be restarted by running: 
	
	$ sudo systemctl restart monit

The log file for monit is located in /var/log/monit.log.

