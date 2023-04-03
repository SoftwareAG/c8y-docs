---
weight: 25
title: Monitoring
layout: redirect
---

Monit is a small open-source utility for managing and monitoring the Unix systems. The Monit utility conducts automatic maintenance and repair, and can execute meaningful causal actions in error situations.

In {{< product-c8y-iot >}} Edge, Monit is used to monitor the processes and perform a restart if any of the processes is down or inactive. The usual Monit interval (cycle) is 30 seconds.

### Using Monit

Monit can provide a quick status report of all the configured services and processes by running the following command:

	[admin@iot-edge-server ~]$ sudo monit summary

There might be cases where Monit has stopped monitoring some resources because of timeout on constant failures or dependency issues.

<img src="/images/edge/edge-monitoring-02.png" name="Status report" style="width:75%;"/>

A specific component, for example, `apama-ctrl_proc`, can be restarted using the following command:

	[admin@iot-edge-server ~]$ sudo monit restart apama-ctrl_proc

The Monit status can be checked by running:

	[admin@iot-edge-server ~]$ sudo systemctl status monit

Monit can be restarted by running:

	[admin@iot-edge-server ~]$ sudo systemctl restart monit

The log file for monit is located in /var/log/monit.log.

#### Monitor

The monitor can be started by running the *run_monitor.py* script located under */opt/c8y/utilities/diagnostic-utility/src/*.

The monitor script supports only one optional startup parameter:

`-s` or `--skipDataCollector` allows you to skip the data collection even if one or more monitored components are not working.