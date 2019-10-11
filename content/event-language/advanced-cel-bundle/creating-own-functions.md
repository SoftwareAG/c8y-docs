---
weight: 50
title: Creating own functions 
layout: redirect
aliases:
  - /event-language/advanced#creating-own-functions
---

If you want to make more complex calculation than e.g. sum or average you can create your own helper functions and expressions.
For writing the function you can use JavaScript as the scripting language. You can also import Java classes into your expressions using importClass.

Examples:

Increasing the given severity (using JavaScript):

    create expression CumulocitySeverities js:increaseSeverity(severity) [
    	importClass (com.cumulocity.model.event.CumulocitySeverities);
    	if(severity == CumulocitySeverities.WARNING) {
    		CumulocitySeverities.MINOR;
    	} else if(severity == CumulocitySeverities.MINOR) {
    		CumulocitySeverities.MAJOR;
    	} else if(severity == CumulocitySeverities.MAJOR) {
    		CumulocitySeverities.CRITICAL;
    	} else {
    		severity
    	}
    ];

Calculating the distance between two geo-coordinates:

    create expression distance(lat1, lon1, lat2, lon2) [
      var R = 6371000;
      var toRad = function(arg) {
        return arg * Math.PI / 180;
      };
      var lat1Rad = toRad(lat1);
      var lat2Rad = toRad(lat2);
      var deltaLatRad = toRad(lat2-lat1);
      var deltaLonRad = toRad(lon2-lon1);

      var a = Math.sin(deltaLatRad/2) * Math.sin(deltaLatRad/2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLonRad/2) * Math.sin(deltaLonRad/2);

      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      var d = R * c;
      d;
    ];

