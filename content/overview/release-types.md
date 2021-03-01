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
<td style="text-align:left">A GA Release is a release with general availability (GA). GA Releases are typically provided in a 3-month cycle. They are published on all Cumulocity IoT public cloud instances and they are provided to customers with an on-premises instance through the Software Download Center on the Software AG Empower Portal. GA Releases include new features, improvements and fixes.</td>
<td style="text-align:left">10.7, 10.8, 10.9, 10.10</td>
</tr>
<tr>
<td style="text-align:left">Incremental Releases</td>
<td style="text-align:left">Between two GA releases, Cumulocity builds so-called Incremental Releases. Incremental Releases are not installed on the public production instances of Cumulocity but on a preview instance (eu-latest). The focus is to make new and innovative features available to our customers and partners as early as possible. Incremental Releases may therefore contain new features (and the related documentation) in a beta state, in addition to improvements and fixes. Incremental Releases are not meant for production use.  </td>
<td style="text-align:left">10.7.1, 10.7.2, 10.7.3, 10.7.4</td>
</tr>
<tr>
<td style="text-align:left">Maintenance Release</td>
<td style="text-align:left">Additionally, Cumulocity provides Maintenance Releases for supported Cumulocity IoT GA releases. A Maintenance Release contains fixes and improvements for a GA release but no new features.</td>
<td style="text-align:left">10.7.0.1, 10.7.0.2, 10.7.0.3</td>
</tr>
</tbody>
</table>

Each release receives a version label.

 `<major>.<minor>.<increment>.<fix>`, for example 10.7.0.4, 10.7.3.0 
 
*  `<major>` is incremented for marketing purposes. 
*  `<minor>` is incremented with each GA Release. 
*  `<increment>` is incremented with each Incremental Release. 
*  `<fix>` is "0" for the base release and incremented with each Maintenance Release of this release.