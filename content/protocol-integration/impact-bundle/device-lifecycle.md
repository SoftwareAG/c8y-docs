---
weight: 30
title: Device lifecycle integration
layout: redirect
---


IMPACT devices do not need to be registered again in Cumulocity IoT. Cumulocity IoT’s device lifecycle integration automatically handles the following events:

<table>
<col style="width: 20%;">
<col style="width: 40%;">
<col style="width: 40%;">
<thead>
<tr>
<th align="left">Event type</th>
<th align="left">Description</th>
<th align="left">Actions triggered in IMPACT agent</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">Registration</td>
<td align="left">A new device has been registered at IMPACT.</td>
<td align="left">Create device in Cumulocity IoT.<br>Obtain list of resources provided by device (either from request or by querying device).<br>Subscribe to all resources that are mapped as “Auto-Observe” in the corresponding object mapping.</td>
</tr>

<tr>
<td align="left">Deregistration</td>
<td align="left">A device has been deleted in IMPACT.</td>
<td align="left">At IMPACT, unsubscribe from all resources for this device.</td>
</tr>

<tr>
<td align="left">Expiration</td>
<td align="left">A device registration in IMPACT has expired.</td>
<td align="left">Mark device in Cumulocity IoT as disabled.</td>
</tr>
</tbody>
</table>
