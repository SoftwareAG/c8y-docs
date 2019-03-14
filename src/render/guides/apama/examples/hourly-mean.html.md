---
order: 10
title: Calculating an hourly average of measurements
layout: redirect
---

We are assuming the input data looks like this:

    {
      "c8y_TemperatureMeasurement": {"T": {"value": ..., "unit": "C"}},
      "time": "...",
      "source": {"id":"..."},
      "type": "c8y_TemperatureMeasurement"
    }

To create the average (mean), we need the following parts in the module:

* A time window over one hour, grouped by device (source)
* A select that returns the average calculation every hour, the source and the unit (as we must use an aggregate over the window contents, we select the last unit - we assume all measurements are of the same unit). Note the AverageByDevice event definition to hold these.
* Everything created as a new measurement

		using com.apama.aggregates.avg;
		using com.apama.aggregates.last;

		monitor HourlyAvgMeasurementDeviceContext {

			event AverageByDevice {
				string source;
				float avgValue;
				string unit;
			}

			action onload() {
				from m in all Measurement(type="c8y_TemperatureMeasurement") within (3600.0) 
					group by m.source select
						AverageByDevice(m.source,
							avg(m.measurements["c8y_TemperatureMeasurement"]["T"].value),
							last(m.measurements["c8y_TemperatureMeasurement"]["T"].unit)) as avgdata {

					send Measurement("", "c8y_AverageTemperatureMeasurement", avgdata.source, currentTime,
						{"c8y_AverageTemperatureMeasurement":
							{
								"T": MeasurementValue(avgdata.avgValue, avgdata.unit, new dictionary<string,any>)
							}
						}, new dictionary<string,any>) to Measurement.CREATE_CHANNEL;
				}
			}
		}
