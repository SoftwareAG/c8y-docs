---
weight: 40
title: Creating own streams 
layout: redirect
aliases:
  - /event-language/advanced#own-streams
---

Creating complex modules is not doable in a single statement. While Cumulocity already provides certain streams it is possible to create additional ones to control your event flow.
It is not required to define a stream. If you use a unknown stream name it will automatically be created and defined with the input you set.

    insert into MyEvent
    select
      e.event as e
    from EventCreated e;

    select e.type from MyEvent e;

If you now try to add:

    insert into MyEvent
    select
      e as e
    from AlarmCreated e;

You will not be able to deploy the statement because the stream MyEvent has already been declared with one variable e of type Event.
This statement tries to set a value of type AlarmCreated to e.

You can also explicitly create a new stream.

    create schema MyEvent(
      e Event
    );

The general syntax is:

    create schema StreamName(
      var1Name var1Type,
      var2Name var2Type,
      var3Name var3Type
    );

You can use every basic Java data type, data types from the imported [Java libraries](/event-language/functions#java-functions), Cumulocity data types (like Event, Measurement, ManagedObject, ...) and other streams.

    create schema TwoMyEvents(
      firstEvent MyEvent,
      secondEvent MyEvent
    );

_Note: Stream names are unique and once declared (regardless if implicit or explicit) the stream is available in all your modules_


