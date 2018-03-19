---
order: 80
layout: redirect
title: Reliability features
---

In particular on mobile devices, Internet connectivity might be unreliable. To support such environments, the Java client libraries support local buffering. This means that you can pass data to the client libraries regardless if an Internet connection is available or not. If a connection is available, the data will be send immediately. If not, the data will be buffered until the connection is back again. For this, "async" variants of the API calls are offered. For example, to send an alarm, use

	AlarmApi alarmApi = platform.getAlarmApi();
	Future future = alarmApi.createAsync(anAlarm);

The "createAsync" method returns immediately. The "Future" object can be used to determine the result of the request whenever it was actually carried out.