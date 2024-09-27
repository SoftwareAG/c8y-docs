---
date: 2024-10-01
title: Advanced notice of changes to Notifications 2.0 tenant context subscriptions with no API filter
change_type:
  - value: change-3BQrQ6adS
    label: API change
product_area: Platform services
component:
  - value: component-JlFdtOPva
    label: REST API
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
---

Subscriptions to realtime updates from Notifications 2.0 may specify the Cumulocity IoT APIs to subscribe to, for example `alarms` or `measurements`.
Subscriptions in the tenant context may use a wildcard value - that is, `*` - for the API selector, meaning that the subscription should include all available APIs.
A missing API selector in a tenant context subscription request is equivalent to using the wildcard value.

Currently, a tenant context subscription using the wildcard API selector will deliver updates from the `alarms`, `events`, and `managedobjects` APIs.
In future, such subscriptions will also deliver updates from the `operations` API.

For example, after this change is enabled, an application that `POST`s this request to the `/notification2/subscriptions` endpoint:

```
{
  "context": "tenant",
  "subscription": "testSubscription",
  "subscriptionFilter": {
    "apis": [
      "*"
    ]
  }
}
```

should expect to receive `operations` updates in addition to any updates it was previously receiving.

Applications that create tenant context subscriptions using the wildcard API selector should ensure that they are able to process `operations` updates before this change is enabled.

The change will be enabled in the Cumulocity IoT CD release line no earlier than 15 January, 2025.
It will also be included in the 2025 yearly release. A further announcement will be published when the change is enabled.
