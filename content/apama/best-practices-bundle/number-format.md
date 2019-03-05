---
weight: 20
title: Number formats
layout: redirect
---

Cumulocity measurements use the decimal type. When using numeric literals in your code, you must append a "d" character to use as a decimal. Alternatively, convert to float with .toFloat() (or float to decimal with float.toDecimal()). Note that the timestamps are stored as floats (seconds since 1 Jan 1970, 00:00 UTC).