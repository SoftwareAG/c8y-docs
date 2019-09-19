---
weight: 10
title: Overview
layout: redirect
---

As described in section [Cumulocity IoT DataHub at a glance](/guides/datahub/datahub-overview/#datahub-at-a-glance), Cumulocity IoT DataHub manages offloading pipelines which periodically extract data from Cumulocity's Operational Store, transform the data into a relational format and finally store it in a data lake. Instead of querying the Operational Store, you run your queries against the data lake. The distributed SQL engine Dremio provides the query interfaces to access the data lake.

Different standard interfaces exist for that purpose, namely JDBC, ODBC, and REST. In order to work with one of those interfaces, select **Home** in the navigation bar. Under **Quick links** you will find starting points for the different interfaces.