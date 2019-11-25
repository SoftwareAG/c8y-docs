---
weight: 60
title: Variables 
layout: redirect
aliases:
  - /event-language/advanced#variables
---

You can define variables in your modules.

    create variable String myEmailText = "Hello World";
    create variable List supportedOperationsList = cast({"c8y_Restart", "c8y_Relay"}, java.util.List);

You can also dynamically change variable values during runtime

    create variable String latestEventType;

    on EventCreated e set latestEventType = e.event.type;

