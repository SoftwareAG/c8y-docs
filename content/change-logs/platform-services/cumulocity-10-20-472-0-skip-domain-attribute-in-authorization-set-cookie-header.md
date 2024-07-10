---
date: ""
title: Skip domain attribute in authorization Set-Cookie header
product_area: Platform services
change_type:
  - value: change-inv-3bw8e
    label: Announcement
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-59297
version: 10.20.472.0
---
While setting a new authorization cookie, the 'domain' attribute by default will be omitted. Skipped this attribute allows the browser to apply cookies only for current document URLs, not including subdomains. Behavior can be changed via a core property: 'auth.cookies.skip.domain: false'