---
weight: 40
title: Creating own actions
layout: redirect
---

Typically, you will structure a monitor using actions (much like functions in Java), as shown in the following examples.

Increasing the given severity:

```java
action upgradeSeverity(string old) returns string {
	if old = "WARNING" { return "MINOR"; }
	if old = "MINOR"   { return "MAJOR"; }
	if old = "MAJOR"   { return "CRITICAL"; }
	return old;
}
```

Calculating the distance between two geo-coordinates:

```java
action distance(float lat1, float lon1, float lat2, float lon2) returns float {
	float R := 6371000.0;
	float toRad := float.PI / 180.0;
	float lat1Rad := lat1 * toRad;
	float lat2Rad := lat2 * toRad;
	float deltaLatRad := (lat2-lat1) * toRad;
	float deltaLonRad := (lat2-lat1) * toRad;
	float a := (deltaLatRad/2.0).sin().pow(2.0) * lat1Rad.cos() * lat2Rad.cos() * (deltaLonRad/2.0).sin().pow(2.0);
	float c := 2.0 * a.sqrt().atan2((1.0-a).sqrt());
	return R * c;
}
```

