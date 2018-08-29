---
order: 10
layout: redirect
title: Overview
---

To ease device integration Cumulocity already supports a number of static templates that can be used by any client without the need for creating own templates.
These templates focus on the most commonly used messages for device management purposes.

To use the templates listed below you need to publish the messages to the topic "s/us" ("t/us" for transient processing of published content, "q/us" for quiescent processing of published content or "c/us" for CEP processing of published content, see [Processing Mode](/guides/reference/smartrest#processing-mode) section for further information).

To receive operations with the static templates you need to subscribe to the topic "s/ds".