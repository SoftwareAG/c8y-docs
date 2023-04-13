---
weight: 12
title: Overview of all blocks
layout: redirect
---

The following table gives a brief description of all blocks that can be selected from the palette of the model editor, sorted alphabetically (excluding custom blocks that you have created yourself).

|Block Name|Description|
|:---|:---|
|[Alarm Input](#alarm-input)|Receives <tt>Alarm</tt> objects from a device or devices in a group and reorders them based on the timestamp.|
|[Alarm Output](#alarm-output)|Creates a new <tt>Alarm</tt> object for a specified device, asset or for the trigger device with a pre-configured alarm name and parameters.|
|[AND](#and)|Performs a logical 'and' on the inputs.|
|[Average (Mean)](#average-mean)|Calculates the mean of the values over time.|
|[Combiner](#combiner)|Calculates the output based on the selected mode and the connected inputs.|
|[Constant Value](#constant-value)|Outputs a value, either when the Trigger input port receives a signal or at startup.|
|[Counter](#counter)|Gives a count of the total inputs and repeated inputs.|
|[Cron Timer](#cron-timer)|Sends a signal output based on cron-like periodic timer syntax.|
|[Crossing Counter](#crossing-counter)|Detects and counts the number of threshold crossings in the specified direction.|
|[Delta](#delta)|Calculates the difference between successive input values.|
|[Difference](#difference)|Calculates the absolute and signed differences between the connected inputs.|
|[Direction Detection](#direction-detection)|Detects whether the input value changes direction.|
|[Discrete Statistics](#discrete-statistics)|Generates statistics of sum, count, average (mean), standard deviation, minimum and maximum for discrete input values.|
|[Duration](#duration)|Measures the time elapsed from a set start time.|
|[Event Input](#event-input)|Receives <tt>Event</tt> objects from a device or devices in a group and reorders them based on the timestamp.|
|[Event Output](#event-output)|Creates a new <tt>Event</tt> object for a specified device, asset or for the trigger device.|
|[Expression](#expression)|Evaluates an expression to perform arithmetic or logical calculations or string operations.|
|[Extract Property](#extract-property)|Extracts the specified property from the input value and converts it to the specified type.|
|[From Base N](#from-base-n)|Converts a base N string to a float.|
|[Gate](#gate)|Blocks the input from going to output unless the gate is open and enabled.|
|[Geofence](#geofence)|Compares the input value against the defined geofence value to detect whether the device is within the geofence, and whether the device entered or exited the geofence.|
|[Gradient](#gradient)|Calculates the weighted linear regression gradient for the values.|
|[Group Statistics](#group-statistics)|Generates periodic aggregate values across all the devices in a group for which the block has received input values.|
|[Integral](#integral)|Calculates the integral of the input value over time.|
|[KPI](#kpi)|Compares a value against either a KPI (Key Performance Indicator) or the data point of a device.|
|[Latch Values](#latch-values)|Latches the latest input value received while the block is enabled.|
|[Limit](#limit)|Outputs a value that is kept within the defined upper and lower limits.|
|[Machine Learning](#machine-learning)|Invokes the specified Machine Learning model that scores the input data.|
|[Managed Object Input](#managed-object-input)|Receives <tt>ManagedObject</tt> objects from a device or devices in a group.|
|[Managed Object Output](#managed-object-output)|Updates a <tt>ManagedObject</tt> object for a specified device, asset or for the trigger device.|
|[Measurement Input](#measurement-input)|Receives <tt>Measurement</tt> objects from a device or devices in a group and reorders them based on the timestamp.|
|[Measurement Output](#measurement-output)|Creates a new <tt>Measurement</tt> object for a specified device, asset or for the trigger device.|
|[Minimum / Maximum](#minimum-/-maximum)|Calculates the minimum and maximum of a value over time.|
|[Missing Data](#missing-data)|Generates an output if the input has not occurred for a set amount of time.|
|[NOT](#not)|Performs a logical 'not' on the input.|
|[Operation Input](#operation-input)|Receives <tt>Operation</tt> objects from a device or devices in a group.|
|[Operation Output](#operation-output)|Creates a new <tt>Operation</tt> object for a specified device, asset or for the trigger device.|
|[OR](#or)|Performs a logical 'or' on the inputs.|
|[Position Input](#position-input)|Receives <tt>Event</tt> objects from a device or devices in a group and extracts the <tt>c8y_Position</tt> fragment into a <tt>Value</tt> object.|
|[Pulse](#pulse)|Converts a non-pulse input into a pulse output.|
|[Range](#range)|Compares the input value against the defined lower and upper range values to detect whether the input is within or out of the range, or whether it crosses the range.|
|[Range Lookup](#range-lookup)|Finds the range in which the input value lies.|
|[Rounding](#rounding)|Rounds the input to a specified number of decimal points or to an integer, using a selectable rule.|
|[Selector](#selector)|Outputs a parameter value depending on which input port has a <tt>true</tt> value, lowest number taking precedence.|
|[Send Email](#send-email)|Sends an email to the specified email addresses.|
|[Send SMS](#send-sms)|Sends an SMS (Short Message Service) to the specified phone number.|
|[Set Properties](#set-properties)|Outputs a pulse with properties set from values on the input ports.|
|[Standard Deviation](#standard-deviation)|Calculates the standard deviation and variance of the values over time.|
|[Switch](#switch)|Outputs the values from a given input, or acts as a circuit breaker.|
|[Text Substitution](#text-substitution)|Substitutes identifiers marked with a hash and braces (for example, <tt>#{name}</tt>) in the text template with corresponding entries from the input values.|
|[Threshold](#threshold)|Compares the input value against the defined threshold value to detect whether the input breaches the threshold or whether it crosses the threshold.|
|[Time Delay](#time-delay)|Delays the input by the specified amount of time.|
|[To Base N](#to-base-n)|Converts a float to a base N string.|
|[Toggle](#toggle)|Converts two pulse inputs to a boolean output based on the set and reset signals, with optional delays.|