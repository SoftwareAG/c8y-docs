---
weight: 27
title: Example matching
layout: redirect
---

#### Machine status events for the Actual Quality Amount

This is an example of the case "Define quality status event" for the Actual Quality Amount:

If the measurement "torque" is below 100 then quality is "true".<br>
All new produced parts (Actual Production Amount) are from now on good parts, until 'Tatsächliche_Produktionsmenge' is < 100.

![Example matching](/images/oee/administration/admin-example-matching.png)

####  Using IF-THEN in a machine status

Assume for example, that there is an event that is telling what is being produced (=flowing through a pipe) and besides that there is a measurement that represents the pressure on a sensor. The threshold pressure signalling that the machine is producing or that the quality is OK might be dependent on the product that is being produced. This can be captured by this:
```
if event(...) = "productA" then measurement(...) > 300.0; if event(...) = "productB" then measurement(...) > 210.0
```

So if productA is produced and the pressure is above 300 the machine status for Actual Production Time will be true and the future timeframe will be valued as Production Time.
