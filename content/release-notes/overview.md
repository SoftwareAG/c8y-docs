---
weight: 10
title: Overview
layout: bundle
---

<div class="lead">
These release notes document all relevant changes that have been implemented in a Cumulocity release since the previous release.
</div>

<br>
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
<td style="text-align:left">GA</td>
<td style="text-align:left">A GA release is a release with general availability (GA), which is published on the Cumulocity IoT public cloud instances. Cumulocity provides GA releases in a 3-month cycle. GA releases include new features, improvements and fixes.</td>
<td style="text-align:left">10.5.0.x, 10.5.7.x</td>
</tr>
<tr>
<td style="text-align:left">Preview</td>
<td style="text-align:left">Between two GA releases, Cumulocity releases so-called preview releases in a by-weekly cycle. Preview releases are not installed on the public production instances of Cumulocity but on a preview instance (eu-latest). The focus is to make new and innovative features available to our customers and partners as early as possible. Preview releases may therefore contain new features (and the related documentation) in a beta state, in addition to improvements and fixes. </td>
<td style="text-align:left">10.5.1, 10.5.2, 10.5.3</td>
</tr>
<tr>
<td style="text-align:left">Maintenance</td>
<td style="text-align:left">Every two weeks, Cumulocity provides maintenance releases for supported Cumulocity IoT GA releases. A maintenance release contains fixes and improvements for a GA release but no new features.</td>
<td style="text-align:left">10.5.0.1, 10.5.0.2, 10.5.0.3</td>
</tr>
</tbody>
</table>

>**Info**: Each release receives a version label `<SAG>.<major>.<minor>.<maintenance>`. `<SAG>` and `<major>` are incremented for marketing purposes. `<minor>` is incremented with each by-weekly release (preview or GA). `<maintenance>` is "0" for the base release and incremented with each maintenance release of this release.