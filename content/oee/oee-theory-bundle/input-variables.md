---
weight: 50
title: Input variables for the OEE calculation
layout: redirect
---

In the OEE application you can select different calculation methods that require different input variables.

A total of 5 out of 7 input variables are required to calculate the OEE.

The following table shows the input variables and the relationship to the different calculation models, explained below:

<table class="ce-table">
<thead>
<colgroup>
<col width="15%">
<col width="35%">
<col width="20%">
<col width="5%">
<col width="5%">
<col width="5%">
<col width="5%">
<col width="5%">
<col width="5%">
</colgroup>
<tr>
<th>
Input variables
</th>
<th>
Description
</th>
<th>
Reference Point
</th>
<th>
Model PPQ/1
</th>
<th>
Model PQL/2
</th>
<th>
Model PPL/3
</th>
<th>
Model LPQ/4
</th>
<th>
Model LQL/5
</th>
<th>
Model LPL/6
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
Ideal Cycle Amount
</td>
<td>
Ideal production speed
</td>
<td>
Link to the production plan or manual entry in the application
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
</tr>
<tr>
<td>
Potential Production Time
</td>
<td>
The period in which the machine is scheduled for production.
</td>
<td>
Link to shift plan or manual entry in the application
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
</tr>
<tr>
<td>
Actual Production Time
</td>
<td>
Describes the time period during which the machine is actually running and producing products, regardless of speed or quality. Since Availability Losses prevent production, the Actual Production Time, unless it is an ideal machine, is always shorter than the Possible Production Time.
</td>
<td>
Automatic reference
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
<td>
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
Availability Losses
</td>
<td>
For Availability Losses, it is recommended to record unplanned downtimes such as malfunctions, maintenance, line restrictions and, if necessary, planned downtimes such as maintenance, inspection, cleaning, repair and equipping, modification or format change.
</td>
<td>
Automatic reference
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
x
</td>
<td>
x
</td>
<td>
x
</td>
</tr>
<tr>
<td>
Actual Production Amount
</td>
<td>
Reflects the products manufactured in reality within the Actual Production Time and Possible Production Time.
</td>
<td>
Automatic reference
</td>
<td>
x
</td>
<td>
</td>
<td>
x
</td>
<td>
x
</td>
<td>
</td>
<td>
x
</td>
</tr>
<tr>
<td>
Quality Losses
</td>
<td>
It is recommended to define Quality Losses in such a way that they include all products that do not immediately meet the required quality requirements, including rework, B-goods and start-up losses. The Quality Losses are concentrated on the parts produced by the plant and their quality and can be recorded quantitatively.
</td>
<td>
Automatic reference
</td>
<td>
</td>
<td>
x
</td>
<td>
x
</td>
<td>
</td>
<td>
x
</td>
<td>
x
</td>
</tr>
<tr>
<td>
Actual Quality Amount
</td>
<td>
The quality quantity is therefore calculated as follows: Actual Quality Amount = Actual Production Amount - Quality Losses (amount).
</td>
<td>
Automatic reference
</td>
<td>
x
</td>
<td>
x
</td>
<td>
</td>
<td>
x
</td>
<td>
x
</td>
<td>
</td>
</tr>
</tbody>
</table>
