---
weight: 80
title: State resilience
layout: redirect
---

By default, Cumulocity Event Language is processed purely in memory. This is often sufficient, as many statements do not require state to be preserved over longer time periods. If you rely on such state (for example, as part of an event window), you need to annotate your statement as follows:

	@Resilient
	insert into ...

By adding "@Resilient" just before your statement, its state is regularly stored. In case of server maintenance or outages, the state can be recovered and the statement can continue as if nothing has happened.
