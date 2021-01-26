---
weight: 20
title: Naming statements
layout: redirect
aliases:
  - /event-language/best-practises#naming-statements
---

The @Name annotation gives you the possibility to name your statements in the module. A name needs to be unique within a single module.
This will have a direct effect on the channels in the [realtime notifications](/event-language/real-time-statements/#notifications).
It will also help to debug the module in administration UI because the channel name (and therefore the statement name) is printed in the list.
If you do not name a statement it will automatically be named "statement_{number of statement}".
