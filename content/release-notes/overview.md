---
weight: 10
title: Overview
layout: bundle
---

<div class="lead">
These release notes document all relevant changes that have been implemented in a Cumulocity release since the previous release.
</div>

<br>
Cumulocity distinguishes between GA (General Availability) releases, intermediate releases and maintenance releases:

<table>
<colgroup>
       <col style="width: 15%;">
       <col style="width: 70%;">
       <col style="width: 15%;">
    </colgroup>
    <thead>
<tr>
<th style="text-align:left">Release type</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">GA</td>
<td style="text-align:left">A GA release is a release with general availability (GA) which is installed on the public production instances of Cumulocity. Cumulocity provides GA releases in a 3-month cycle.</td>
<td style="text-align:left">10.5.0.0, 10.5.7.0</td>
</tr>
<tr>
<td style="text-align:left">Intermediate</td>
<td style="text-align:left">Every by-weekly release between 2 GA releases is called an intermediate release. Intermediate releases are not installed on the public production instances of Cumulocity but on a preview instance. The focus is to make new and innovative features available to particular customers, so a intermediate release and the related documentation may contain "beta" features.</td>
<td style="text-align:left">10.5.1.0, 10.5.2.0, 10.5.3.0</td>
</tr>
<tr>
<td style="text-align:left">Maintenance</td>
<td style="text-align:left">A maintenance release provides improvements and fixes to a GA release.</td>
<td style="text-align:left">10.5.0.1, 10.5.0.2, 10.5.0.3</td>
</tr>
</tbody>
</table>

>**Info**: Each release receives a version label `<SAG>.<major>.<minor>.<maintenance>`. `<SAG>` and `<major>` are incremented for marketing purposes. `<minor>` is incremented with each by-weekly release (intermediate or GA). `<maintenance>` is "0" for the base release and incremented with each maintenance release of this release.