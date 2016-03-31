---
order: 40
title: Best practices
layout: default
toc: true
---

## Naming statements

The @Name annotation gives you the possibility to name your statements in the module. A name needs to be unique within a single module.
This will have a direct effect on the channels in the [realtime notifications](/guides/reference/real-time-statements/#notifications).
It will also help to debug the module in administration UI because the channel name (and therefore the statement name) is printed in the list.
If you do not name a statement it will automatically be named "statement_{number of statement}".

## Using device contexts

If you need a device contexts it is usually not necessary to put every statement into the context.
If you do e.g. aggregation of measurements most of the time you only need the context on the statement that does the actual aggregation.
Try to develop the module completely without the context at first and add it at the end to those statements where it is necessary.

## Splitting modules

If your module gets really big it might be helpful to split it into multiple modules.
If you declare e.g. schemas or functions they will be available in all modules of your tenant.
A good approach can be:

* Module 1: filtering incoming data and load additional data from database
* Module 2: Calculation
* Module 3: Creating data in database

Keep in mind that this will create dependencies within the modules (e.g. module 2 needs a schema defined in module 1). You must avoid circular dependencies.

## Number formats

By default if interacting with measurements the values will be in BigDecimal (e.g. if you use getNumber()).
When calculating with BigDecimal there will be an error if the result is a repeating decimal. This will result into a null return from built-in functions like avg().
There are two ways to prevent this issue:

1. If you are using built-in functions the easiest way is to cast the BigDecimal to a double value

    avg(cast(getNumber(e, "c8y_TemperatureMeasurement.T.value"), double))

2. If you are calculating yourself (e.g. in a expression) make sure to round or cut the number if you want to stay with BigDecimal

    getNumber(e, "c8y_TemperatureMeasurement.T.value").divide(new BigDecimal(3), 5, RoundingMode.HALF_UP)
