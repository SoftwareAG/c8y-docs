---
weight: 50
title: Number formats
layout: redirect
aliases:
  - /event-language/best-practises#number-formats
---

When interacting with measurements the values will be in BigDecimal (if you use getNumber()).
When calculating with BigDecimal there will be an error if the result is a repeating decimal. This will result into a null return from built-in functions like avg().
There are two ways to prevent this issue:

1. If you are using built-in functions the easiest way is to cast the BigDecimal to a double value

    avg(cast(getNumber(e, "c8y_TemperatureMeasurement.T.value"), double))

2. If you are calculating yourself (for example in a expression) make sure to round or cut the number if you want to stay with BigDecimal.

    getNumber(e, "c8y_TemperatureMeasurement.T.value").divide(new BigDecimal(3), 5, RoundingMode.HALF_UP)
