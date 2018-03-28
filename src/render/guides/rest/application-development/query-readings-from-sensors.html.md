---
order: 50
title: Query readings from sensors
layout: redirect
---

Similar to the inventory, you can also query for particular sensor readings. For example, let's query the light measurements of the past month (from the time of writing this text):

    GET /measurement/measurements?dateFrom=2013-08-05&dateTo=2013-09-05&fragmentType=c8y_LightMeasurement HTTP/1.1

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.measurementCollection+json; charset=UTF-8; ver=0.9
    ... 
    {
        "measurements": [
            {
                "id": "2480900",
                "self": "https://.../measurement/measurements/2480900",
                "source": {
                    "id": "2480500",
                    "self": "https://.../inventory/managedObjects/2480500"
                },
                "time": "2013-08-29T21:19:52.321+02:00",
                "type": "c8y_LightMeasurement",
                "c8y_LightMeasurement": {
                    "e": { "unit": "lux", "value": 169.2 }
                }
            },
            ...
        ]
        ...
    }
