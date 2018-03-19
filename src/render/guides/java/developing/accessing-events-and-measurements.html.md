---
order: 50
layout: redirect
title: Accessing events and measurements
---

Events and measurements can be accessed in a very similar manner as described above for the inventory. The following examples queries the signal strength of the mobile connection of devices in the past two weeks and prints the device ID, the time of the measurement, the received signal strength and the bit error rate.

	MeasurementApi measurementApi = platform.getMeasurementApi();
	MeasurementFilter measurementFilter = new MeasurementFilter();
	    
	Calendar cal = Calendar.getInstance();
	Date toDate = cal.getTime();
	cal.add(Calendar.DATE, -14);
	Date fromDate = cal.getTime();
	measurementFilter.byDate(fromDate, toDate);
	measurementFilter.byFragmentType(SignalStrength.class);
	MeasurementCollection mc = measurementApi.getMeasurementsByFilter(measurementFilter);
	
	MeasurementCollectionRepresentation measurements = mc.get();
	for (; measurements != null; measurements = mc.getNextPage(measurements)) {
		for (MeasurementRepresentation measurement : measurements.getMeasurements()) {
			SignalStrength signal = measurement.get(SignalStrength.class);
			System.out.println(measurement.getSource().getId() + " " + measurement.getTime() + " " + signal.getRssiValue() + " " + signal.getBerValue());
		}
	}