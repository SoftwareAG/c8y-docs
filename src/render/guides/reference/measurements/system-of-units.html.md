---
order: 10
title: System of units
layout: redirect
---

Note that all GET requests support "X-Cumulocity-System-Of-Units" header which allows to set system of units used in response.
Possible values are "imperial" or "metric".
Every measurement fragment which contains "unit" property will be transformed to use required system of units.

#### Most common conversions:

|Metric|Imperial|
|:-------|:-----|
|m (meter)|ft (foot)|
|km (kilometers)|mi (miles)|
|cm (centimeter)|in (inch)|
|°C (degree Celsius)|°F (degree Fahrenheit)|
|"K (Kelvin)|°R (degree Rankine)|
|g (gram)|oz (ounce)|
|kg (kilogram)|lb (pound)|


#### Examples

Example measurement:

    ...
    {
        ....
         "c8y_Temperature": {
             "T": {
                 "unit": "ºC",
                 "value": 2.0791169082
             }
         }
    }
    ...

Example request:

    GET /measurement/measurements?fragmentType=c8y_Temperature&source=663951
    Host: ...
    Authorization: Basic ...
    X-Cumulocity-System-Of-Units: imperial
    
Example response:

    ...
    {
        ....
         "c8y_Temperature": {
            "T": {
                "unit": "°F",
                "value": 35.742410434759904
            }
        }
    }
    ...
