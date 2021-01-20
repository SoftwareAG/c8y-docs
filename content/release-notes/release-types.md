---
weight: 20
title: Release types
layout: bundle
---

Cumulocity distinguishes between the following release types:

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
<td style="text-align:left">GA Release</td>
<td style="text-align:left">A GA Release is a release with general availability (GA). GA Releases are provided in a 3-month cycle. They are published on all Cumulocity IoT public cloud instances and they are provided to customers with an on-premises instance through the Software Download Center on the Software AG Empower Portal. GA Releases include new features, improvements and fixes.</td>
<td style="text-align:left">10.7.0, 10.8.0</td>
</tr>
<tr>
<td style="text-align:left">Incremental Releases</td>
<td style="text-align:left">Between two GA releases, Cumulocity builds so-called Incremental Releases every two weeks. Incremental Releases are not installed on the public production instances of Cumulocity but on a preview instance (eu-latest). The focus is to make new and innovative features available to our customers and partners as early as possible. Incremental Releases may therefore contain new features (and the related documentation) in a beta state, in addition to improvements and fixes. Incremental Releases are not for production use.  </td>
<td style="text-align:left">10.5.1, 10.5.2, 10.5.3</td>
</tr>
<tr>
<td style="text-align:left">Maintenance Release</td>
<td style="text-align:left">Every two weeks, Cumulocity provides Maintenance Releases for supported Cumulocity IoT GA releases. A Maintenance Release contains fixes and improvements for a GA release but no new features.</td>
<td style="text-align:left">10.5.0.1, 10.5.0.2, 10.5.0.3</td>
</tr>
</tbody>
</table>

>**Info:** Each release receives a version label `<SAG>.<major>.<minor>.<maintenance>`. `<SAG>` and `<major>` are incremented for marketing purposes. `<minor>` is incremented with each bi-weekly release (Continuous or GA). `<maintenance>` is "0" for the base release and incremented with each Maintenance release of this release.