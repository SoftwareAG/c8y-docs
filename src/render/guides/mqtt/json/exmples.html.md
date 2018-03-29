---
order: 40
layout: redirect
title: Examples
---

- Create new event
  
  Publish message on topic `/event/events/create` with payload:
  ```
  {
    "type": "TestEvent",
    "text": "sensor was triggered",
    "time": "2014-03-03T12:03:27.845Z"
  }
  ```
- Create many events
  
  Publish message on topic `/event/events/createBulk` with payload:
  ```
  {
    "events": [
      {
        "type": "TestEvent1",
        "text": "sensor was triggered",
        "time": "2014-03-03T12:03:27.845Z"
      },
      {
        "type": "TestEvent2",
        "text": "sensor was triggered",
        "time": "2014-03-04T12:03:27.845Z"
      }
    ]
  }
  ```
  
- Update event

  Publish message on topic `/event/events/update/<event_id>` with payload:
  ```
  {
    "text": "new text"
  }
  ```
  
- Delete event

  Publish message on topic `/event/events/delete/<event_id>` with empty payload
