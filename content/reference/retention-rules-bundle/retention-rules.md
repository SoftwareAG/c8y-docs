---
weight: 10
title: Retention rules
layout: redirect
---

Rules are used to removing retention data from data base once a day. Which data will be deleted shows directly retention rules. For example retention rule with dataType=EVENT and maximumAge=30 removes from system all events older than 30 days.  
The Retention rules interface consists of parts:
-   The retention rule collection resource retrieves retention rules, accesible by url */retention/retentions*
-   The retention rule resource represents individual retention rule that can be view, accesible by url */retention/retentions/{retentionRuleId}*
