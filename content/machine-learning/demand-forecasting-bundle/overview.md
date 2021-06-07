---
title: Overview
layout: redirect
weight: 10

aliases:
  - /predictive-analytics/demand-forecasting/#overview
---

Most of the sensor data produced by connected devices in IoT incorporates a temporal aspect and can therefore be considered as time-series data. Time Series Analysis involves analyzing this data to extract meaningful insights and characteristics. Time Series Forecasting involves leveraging these insights on observed data to predict future values. In the context of planning, time-series forecasting has several use cases.

Recently, Water Demand Forecasting has become an essential strategy in effective water resource planning and management. Water demand forecasts are required for the cost-effective and sustainable management and expansion of urban water supply infrastructure. Water demand forecasts can provide valuable information to distribution-system operators for controlling the production, storage and delivery of drinking water.

Consider a water distribution company that supplies water to a community. The distribution company would maintain a reservoir tank for supplying water to the entire community. The tank must be refilled at times and should always maintain sufficient water level to meet the consumption demand of the community. It is observed that consumption of water is not uniform throughout the day. There is a peak consumption during the morning/evening hours whereas during the day, the consumption is lesser. Also, consumption during the weekends is higher than in the weekdays; same goes for the consumption during summer seasons than the winters.

Technically speaking, the distribution-system operators should adjust the pressure for water flow regularly in order to maintain sufficient water level to meet the demand. This process is continuous and needs to be performed at regular intervals throughout the day based on the water consumption. Here, the forecasting of water consumption would help the distribution-system operators to act appropriately. For example, when the demand is less, they can reduce the pressure for water flow which in turn would ascertain longevity of the water pipes. Also, when the demand is low, less water needs to be pumped which in turn would save a lot in terms of electricity consumed in pumping of water.

In this Demand Forecasting use case, we would like to forecast the peak/non-peak hours of water consumption using a Time Series model. For showcasing this, we would follow these steps.


* Create a demo device in Cumulocity IoT that mimics an actual device connected to the reservoir tank.
* Simulate measurements for the demo device.
* Generate forecasts based on the simulated data.
