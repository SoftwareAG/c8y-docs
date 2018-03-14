---
order: 15
title: Hello REST!
layout: default
---
## Overview

This section gives a very basic example how to create a device representation in Cumulocity and subsequently how to send related measurement data. 
All steps are performed by calling REST interfaces. 
Those REST calls are demonstrated by CURL statements that can be executed on command line. 
Please have a look on the [previous section](/guides/rest/introduction) for a short introduction to CURL.

## Prerequisites

In order to follow this tutorial, check if the following prerequisites are fulfilled:

-   You have a valid tenant, user and password in order to access Cumulocity.
-   The command line tool CURL is installed on your system.

## Do the REST calls

We will now perform a sequence of just two REST calls, which are described in detail next:

-   Step 1: Create a new device in the inventory of Cumulocity
-   Step 2: Transmit measurement data related to that device

In real world those steps are performed by the 'device agent'. 
Step one is performed just once, when the device is connected to Cumulocity for the first time.
After that, actions related to that device can be performed by referencing the device by an internal ID which is returned when executing this step.

### Create a new Device

To create a new device in the inventory of Cumulocity the following REST request is needed:

    POST /inventory/managedObjects HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9
    Accept: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9
    Authorization: Basic <<Base64 encoded credentials <tenant ID>/<username>:<password> >>
    ...
    {
        "c8y_IsDevice" : {},
        "name" : "HelloWorldDevice"
    }

This call can be done by executing the following curl statement:

    curl -v -u <username>:<password> \
       -H 'Accept: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9' \
       -H 'Content-type: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9' \
       -X POST \
       -d '{"c8y_IsDevice":{},"name":"HelloWorldDevice"}' \
       http://<tenant-ID>.cumulocity.com/inventory/managedObjects

> Please replace &lt;username&gt;, &lt;password&gt; and &lt;tenant-ID&gt; with the appropriate credentials given to you when registering with Cumulocity.
> The same credentials used to access the Cumulocity Web GUI can be used to execute the REST calls.

You will receive a response like that:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9
    Authorization: Basic <<Base64 encoded credentials <tenant ID>/<username>:<password> >>
    ...
    {
        "id": "1231234"
        "lastUpdated": "2014-12-15T14:58:26.279+01:00",
        "name": "HelloWorldDevice",
        "owner": "<username>",
        "self": "https://<tenant-ID>.cumulocity.com/inventory/managedObjects/1231234",
        "c8y_IsDevice": {},
        ...
    }

When creating a device, Cumulocity generates an ID, which is needed in further calls in order to reference the device. 
We can find this ID as the "id" attribute-value pair in the response.

### Transmit measurement data

Now the device is created, we can send measurement data. 
In our case, we will send a temperature measurement in the unit of Celsius which was collected on a certain time:

    POST /measurement/measurements
    Content-Type: application/vnd.com.nsn.cumulocity.measurement+json; charset=UTF-8; ver=0.9
    Accept: application/vnd.com.nsn.cumulocity.measurement+json; charset=UTF-8; ver=0.9
    ...
    {
        "c8y_TemperatureMeasurement": {
            "T": {
                "value": 21.23,
                "unit":"C"
            }
        },
        "time": "2014-12-15T13:00:00.123+02:00",
        "source": {
            "id": "1231234"
        },
        "type":"c8y_PTCMeasurement"
    }

>Please replace the id value with the appropriate value you received in the fist step.

>Furthermore, you should update the time value to a recent timestamp in order to make it easy to find back the measurement on Cumulocity UI later. 
>Please note the data format for timestamp values which is explained in the [reference guide](http://www.cumulocity.com/guides/reference/rest-implementation/).

    curl -v -u <username>:<password> \
       -H 'Accept: application/vnd.com.nsn.cumulocity.measurement+json; charset=UTF-8; ver=0.9' \
       -H 'Content-type: application/vnd.com.nsn.cumulocity.measurement+json; charset=UTF-8; ver=0.9' \
       -X POST \
       -d '{"c8y_TemperatureMeasurement":{"T":{"value":21.23,"unit":"C"}},"time":"2014-12-15T13:00:00.123+02:00","source":{"id":"1231234"},"type":"c8y_PTCMeasurement"}' \
       http://<tenant-ID>.cumulocity.com/measurement/measurements/

The response to that request will look like this:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.measurement+json; charset=UTF-8; ver=0.9
    ...
    {
        "id": "4711",
        "self": "https://<tenant-ID>.cumulocity.com/measurement/measurements/4711",
        "source": {
            "id": "1231234",
            "self": "https://<tenant-ID>.cumulocity.com/inventory/managedObjects/1231234"
        },
        "time": "2014-12-15T12:00:00.123+01:00",
        "type": "c8y_PTCMeasurement",
        "c8y_TemperatureMeasurement": {
            "T" : {
                "unit" : "C",
                "value" : 21.23
            }
        }
    }

If you like to, you can repeat sending measurements. Before sending the request again, you should update the timestamp (value of attribute 'time') in order to create a time series.

Now you are done. Enter Cumulocity Web GUI, select your device on the "All devices" tab and move further to the "Measurements" tab. Here you can see your measurement data. 
If not, change the filter setting to e.g. "last week" to include the timestamp you used in your submitted measurement.

## Go further

The sequence of REST calls demonstrated here is just a shortened procedure of [Device Integration](/guides/rest/device-integration).
The first step ('create a new device' and 'register device') is part of the 'startup phase', whereas step two ('sending measurements')
references to the 'cycle phase'.

Please go further to the [Device Integration](/guides/rest/device-integration) section to get the necessary information required for implementing
real-world agents.

