---
weight: 20
title: "Step 1: Filtering the input"
layout: redirect
---

The main input for this module will be events. To discard non- matching events as early as possible we will create a filter in one statement that only matching events will pass.
These will be put to a new stream.

    create schema LocationEvent(
      event Event
    );

    @Name('Location_event_filter')
    insert into LocationEvent
    select
      e.event as event
    from EventCreated e
    where getObject(e, "c8y_Position") is not null;

We do not need the additional information of EventCreated and just take the payload (the event) to the next stream.