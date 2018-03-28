---
order: 20
title: Querying Cumulocity data
layout: redirect
---

To interact with your historical data, you can use one of the following request-response event pairs to look up alarms.

<table class="confluenceTable"><colgroup><col style="width: 497.0px;"><col style="width: 146.0px;"><col style="width: 435.0px;"><col style="width: 29.0px;"><col style="width: 29.0px;"></colgroup>

<thead>

<tr>

<th style="text-align: left;" class="confluenceTh">To look up...</th>

<th style="text-align: left;" class="confluenceTh">Send event of type</th>

<th style="text-align: left;" class="confluenceTh">To channel</th>

<th colspan="1" class="confluenceTh">With parameters</th>

<th colspan="1" class="confluenceTh">Listen for events</th>

</tr>

</thead>

<tbody>

<tr>

<td class="confluenceTd"><span class="inline-comment-marker" data-ref="ec78c032-c1b9-4fc5-b9bf-443fb0780597">Alarm</span></td>

<td class="confluenceTd">FindAlarm</td>

<td class="confluenceTd">FindAlarm.CHANNEL</td>

<td colspan="1" class="confluenceTd">params dictionary can contain "source", "status" and "type" filters</td>

<td colspan="1" class="confluenceTd"><span style="color: rgb(0,0,0);">FindAlarmResponse and then <span style="color: rgb(0,0,0);">FindAlarmResponseAck</span></span></td>

</tr>

<tr>

<td class="confluenceTd">ManagedObject</td>

<td class="confluenceTd">FindManagedObject</td>

<td class="confluenceTd"><span>FindManagedObject.CHANNEL</span></td>

<td colspan="1" class="confluenceTd">

<span class="inline-comment-marker" data-ref="7aa4ba24-a2a4-4e8f-8c52-6ab6dae4c693">Either set the deviceId set to the identifier of the source, or the params dictionary can contain one or more of the following:</span>

*   fragmentType
*   type
*   owner
*   text
*   childAssetId
*   childDeviceId
*   childAdditionId

</td>

<td colspan="1" class="confluenceTd">FindManagedObjectResponse and then FindManagedObjectResponseAck</td>

</tr>

</tbody>

</table>
