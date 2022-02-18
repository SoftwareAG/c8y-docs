---
weight: 20
title: Tracking usage statistics
layout: redirect
---

If enabled, {{< product-c8y-iot >}} DataHub tracks usage statistics on the amount of data being processed. These statistics are collected for the offloading queries and track the amount of data these queries read from the Operational Store of {{< product-c8y-iot >}}. The statistics are also collected for the ad-hoc queries and track the amount of data these queries read from the data lake. The usage statistics can be utilized for a volume-based charging. They can also be utilized to pinpoint resource-intensive queries in terms of network load.

>**Info:** The tracking of usage statistics is supported for the {{< product-c8y-iot >}} DataHub Cloud edition. It is not supported for the {{< product-c8y-iot >}} DataHub Edge edition.

In the navigator, select **Administration** and then **Usage statistics** to view the usage statistics.

In the action bar, a date control allows you to select the month for which you want to see the usage statistics.

The three top panels show overall summary statistics as well as statistics separated for offloading and ad-hoc queries. If data from the month before the selected month is available, a tendency arrow illustrates whether the data volume of the selected month has decreased, increased, or stayed flat. The panels with the offloading and the ad-hoc query statistics additionally list the days with minimum/maximum volume as well as the daily average volume.

The table below the summary statistics shows the details on a per-day basis for the selected month. For each day, the volume offloaded and the volume queried are shown as well as their sum, which constitutes the daily volume. In addition the percentage of the monthly volume is shown, i.e., how much did the daily volume contribute to the overall monthly volume. The date of each entry links to the [Query log](/datahub/operating-datahub/#viewing-audit-logs), which lists all queries for the respective day.

>**Info:** The statistics are refreshed once per hour. Therefore, the statistics for the current month may not include the latest data. The statistics are deleted after a retention period, so for older months statistics may no longer be available.
