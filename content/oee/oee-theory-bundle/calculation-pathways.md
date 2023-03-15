---
weight: 60
title: Calculation pathways
layout: redirect
---

The following image explains the naming conventions of the pathways. The same terminology is used in the Computation section when creating a new profile, see [Administration > Creating machine profiles > Computation](/oee/oee-administration/#computation).

![Naming convention of the pathways](/images/oee/theory/theory-naming-convention.png)

In the following, details on each calculation pathway are provided.

{{< c8y-admon-info >}}
The tables at the top show which variables, starting from the input variables, are needed to calculate all other variables including the OEE. The different colors used in the images are used only for better understanding and clarity. Below the image you find the corresponding formulas. The formulas which are necessary to calculate the OEE are marked in italics in the table.
{{< /c8y-admon-info >}}

### Calculation pathway #1

<table>
<colgroup>
<col width="50%">
<col width="50%">
</colgroup>
<thead>
<tr>
<th>Input Variables</th>
<th>Variables needed for calculation pathway</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ideal Cycle Amount</td>
<td>x</td>
</tr>
<tr>
<td>Potential Production Time</td>
<td>x</td>
</tr>
<tr>
<td>Actual Production Time</td>
<td>x</td>
</tr>
<tr>
<td>Availability Losses (Time)</td>
<td></td>
</tr>
<tr>
<td>Actual Production Amount</td>
<td>x</td>
</tr>
<tr>
<td>Actual Quality Amount</td>
<td>x</td>
</tr>
<tr>
<td>Quality Losses (Amount)</td>
<td></td>
</tr>
</tbody>
</table>


This overview shows which variables are needed to calculate each variable, including the OEE. The formulas marked in italics in the table below are necessary to calculate the OEE.

![Calculation pathway 1](/images/oee/theory/theory-calculation-pathway-1.png)

<table>
<tr>
<td>
1.
</td>
<td>
Ideal Amount = Potential Production Time x Ideal Cycle Time
</td>
</tr>
<tr>
<td>
2.
</td>
<td>
Ideal Cycle Time = Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Ideal Production Amount = Actual Production Time x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
Ideal Quality Time = Actual Quality Amount x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
<i>Ideal Machine Runtime = Actual Production Amount x Ideal Cycle Amount<sup>-1</sup></i>
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Quality Losses (Amount) = Actual Production Amount - Actual Quality Amount
</td>
</tr>
<tr>
<td>
7.
</td>
<td>
Availability Loses (Amount) = Ideal Amount - Ideal Production Amount
</td>
</tr>
<tr>
<td>
8.
</td>
<td>
Performance Losses (Amount) = Ideal Production Amount - Actual Production Amount
</td>
</tr>
<tr>
<td>
9.
</td>
<td>
Performance Losses (Time) = Actual Production Time - Ideal Machine Runtime
</td>
</tr>
<tr>
<td>
10.
</td>
<td>
Quality Losses (Time) = Quality Losses (Amount) x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
11.
</td>
<td>
Availability Losses (Time) = Availability Losses (Amount) x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
<i>Availability = <box>Actual Production Time&frasl;Potential Production Time</i></box>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
<i>Performance = Ideal Machine Runtime &frasl; Actual Production Time</i>
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
<i>Quality = Actual Quality Amount &frasl; Actual Production Amount</i>
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
<i>OEE = Availability x Performance x Quality</i>
</td>
</tr>
<tr>
</table>

### Calculation pathway #2

<table>
<colgroup>
<col width="50%">
<col width="50%">
</colgroup>
<thead>
<tr>
<th>Input Variables</th>
<th>Variables needed for calculation pathway</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ideal Cycle Amount</td>
<td>x</td>
</tr>
<tr>
<td>Potential Production Time</td>
<td>x</td>
</tr>
<tr>
<td>Actual Production Time</td>
<td>x</td>
</tr>
<tr>
<td>Availability Losses (Time)</td>
<td></td>
</tr>
<tr>
<td>Actual Production Amount</td>
<td></td>
</tr>
<tr>
<td>Actual Quality Amount</td>
<td>x</td>
</tr>
<tr>
<td>Quality Losses (Amount)</td>
<td>x</td>
</tr>
</tbody>
</table>


This overview shows which variables are needed to calculate each variable, including the OEE. The formulas marked in italics in the table below are necessary to calculate the OEE.

![Calculation pathway 2](/images/oee/theory/theory-calculation-pathway-2.png)

<table>
<tr>
<td>
1.
</td>
<td>
Ideal Cycle Time = Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
2.
</td>
<td>
Availability Losses (Amount) = Potential Production Time - Actual Production Time
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Ideal Amount = Potential Production Time x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
Ideal Production Amount = Actual Production Time x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
Ideal Quality Time = Actual Production Amount x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Quality Losses (Time) = Quality Losses (Amount) x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
7.
</td>
<td>
<i>Actual Production Amount = Actual Quality Amount + Quality Losses (Amount)</i>
</td>
</tr>
<tr>
<td>
8.
</td>
<td>
Performance Losses (Amount) = Performance Losses (Time) x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
9.
</td>
<td>
<i>Ideal Machine Runtime = Actual Production Amount x Ideal Cycle Amount<sup>-1</sup></i>
</td>
</tr>
<tr>
<td>
10.
</td>
<td>
Performance Losses (Amount) = Ideal Production Amount - Actual Production Amount
</td>
</tr>
<tr>
<td>
11.
</td>
<td>
Performance Losses (Time) = Availability Losses (Amount) x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
<i>Availability = <box>Actual Production Time&frasl;Potential Production Time</box></i>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
<i>Performance = Ideal Machine Runtime &frasl; Actual Production Time</i>
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
<i>Quality = Actual Quality Amount &frasl; Actual Production Amount</i>
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
<i>OEE = Availability x Performance x Quality</i>
</td>
</tr>
<tr>
</table>

### Calculation pathway #3

<table>
<colgroup>
<col width="50%">
<col width="50%">
</colgroup>
<thead>
<tr>
<th>Input Variables</th>
<th>Variables needed for calculation pathway</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ideal Cycle Amount</td>
<td>x</td>
</tr>
<tr>
<td>Potential Production Time</td>
<td>x</td>
</tr>
<tr>
<td>Actual Production Time</td>
<td>x</td>
</tr>
<tr>
<td>Availability Losses (Time)</td>
<td></td>
</tr>
<tr>
<td>Actual Production Amount</td>
<td>x</td>
</tr>
<tr>
<td>Actual Quality Amount</td>
<td></td>
</tr>
<tr>
<td>Quality Losses (Amount)</td>
<td>x</td>
</tr>
</tbody>
</table>


This overview shows which variables are needed to calculate each variable, including the OEE. The formulas marked in italics in the table below are necessary to calculate the OEE.

![Calculation pathway 3](/images/oee/theory/theory-calculation-pathway-3.png)

<table>
<tr>
<td>
1.
</td>
<td>
Ideal Cycle Time = Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
2.
</td>
<td>
Ideal Amount = Potential Production Time x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Ideal Production Amount = Actual Production Time x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
<i>Ideal Machine Runtime = Actual Production Time x Ideal Cycle Amount<sup>-1</sup></i>
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
<i>Actual Quality Amount = Actual Production Amount - Quality Losses (Amount)</i>
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Quality Losses (Time) = Quality Losses (Amount) x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
7.
</td>
<td>
Performance Losses (Amount) = Ideal Amount + Ideal Production Amount
</td>
</tr>
<tr>
<td>
8.
</td>
<td>
Performance Losses (Amount) = Ideal Production Amount - Actual Production Amount
</td>
</tr>
<tr>
<td>
9.
</td>
<td>
Ideal Quality Time = Actual Quality Amount x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
10.
</td>
<td>
Availability Losses (Time) = Availability Losses (Amount) - Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
11.
</td>
<td>
Performance Losses (Time) = Performance Losses (Amount) x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
<i>Availability = <box>Actual Production Time&frasl;Potential Production Time</box></i>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
<i>Performance = Ideal Machine Runtime &frasl; Actual Production Time</i>
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
<i>Quality = Actual Quality Amount &frasl; Actual Production Amount</i>
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
<i>OEE = Availability x Performance x Quality</i>
</td>
</tr>
<tr>
</table>

### Calculation pathway #4

<table>
<colgroup>
<col width="50%">
<col width="50%">
</colgroup>
<thead>
<tr>
<th>Input Variables</th>
<th>Variables needed for calculation pathway</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ideal Cycle Amount</td>
<td>x</td>
</tr>
<tr>
<td>Potential Production Time</td>
<td>x</td>
</tr>
<tr>
<td>Actual Production Time</td>
<td></td>
</tr>
<tr>
<td>Availability Losses (Time)</td>
<td>x</td>
</tr>
<tr>
<td>Actual Production Amount</td>
<td>x</td>
</tr>
<tr>
<td>Actual Quality Amount</td>
<td>x</td>
</tr>
<tr>
<td>Quality Losses (Amount)</td>
<td></td>
</tr>
</tbody>
</table>

This overview shows which variables are needed to calculate each variable, including the OEE. The formulas marked in italics in the table below are necessary to calculate the OEE.

![Calculation pathway 4](/images/oee/theory/theory-calculation-pathway-4.png)

<table>
<tr>
<td>
1.
</td>
<td>
Ideal Cycle Time = Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
2.
</td>
<td>
Ideal Amount = Potential Production Time x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Availability Losses (Amount) = Availability Losses (Time) x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
<i>Actual Production Time = Potential Production Time - Availability Losses (Time)</i>
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
<i>Ideal Machine Runtime = Actual Production Amount - Ideal Cycle Amount<sup>-1</sup></i>
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Ideal Quality Time = Actual Quality Amount x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
7.
</td>
<td>
Quality Losses (Amount) = Actual Production Amount - Actual Quality Amount
</td>
</tr>
<tr>
<td>
8.
</td>
<td>
Ideal Production Amount = Actual Production Amount x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
9.
</td>
<td>
Performance Losses (Time) = Actual Production Time - Ideal Machine Runtime
</td>
</tr>
<tr>
<td>
10.
</td>
<td>
Quality Losses (Time) = Ideal Machine Runtime - Ideal Quality Time
</td>
</tr>
<tr>
<td>
11.
</td>
<td>
Performance Losses (Time) = Ideal Production Amount x Actual Production Amount
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
<i>Availability = <box>Actual Production Time &frasl; Potential Production Time</box></i>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
<i>Performance = Ideal Machine Runtime &frasl; Actual Production Time</i>
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
<i>Quality = Actual Quality Amount &frasl; Actual Production Amount</i>
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
<i>OEE = Availability x Performance x Quality</i>
</td>
</tr>
<tr>
</table>

### Calculation pathway #5

<table>
<colgroup>
<col width="50%">
<col width="50%">
</colgroup>
<thead>
<tr>
<th>Input Variables</th>
<th>Variables needed for calculation pathway</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ideal Cycle Amount</td>
<td>x</td>
</tr>
<tr>
<td>Potential Production Time</td>
<td>x</td>
</tr>
<tr>
<td>Actual Production Time</td>
<td></td>
</tr>
<tr>
<td>Availability Losses (Time)</td>
<td>x</td>
</tr>
<tr>
<td>Actual Production Amount</td>
<td></td>
</tr>
<tr>
<td>Actual Quality Amount</td>
<td>x</td>
</tr>
<tr>
<td>Quality Losses (Amount)</td>
<td>x</td>
</tr>
</tbody>
</table>

This overview shows which variables are needed to calculate each variable, including the OEE. The formulas marked in italics in the table below are necessary to calculate the OEE.

![Calculation pathway 5](/images/oee/theory/theory-calculation-pathway-5.png)

<table>
<tr>
<td>
1.
</td>
<td>
Ideal Cycle Time = Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
2.
</td>
<td>
Ideal Amount = Potential Production Time x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Availability Losses (Amount) = Availability Losses (Time) x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
<i>Actual Production Time = Potential Production Time - Availability Losses (Time)</i>
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
Ideal Quality Time = Actual Quality Amount x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Actual Production Amount = Actual Quality Amount + Quality Losses (Amount)
</td>
</tr>
<tr>
<td>
7.
</td>
<td>
Quality Losses (Amount) = Quality Losses (Amount) x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
8.
</td>
<td>
<i>Ideal Machine Runtime = Actual Production Amount x Ideal Cycle Amount<sup>-1</sup></i>
</td>
</tr>
<tr>
<td>
9.
</td>
<td>
Ideal Production Amount = Actual Production Time  x  Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
10.
</td>
<td>
Performance Losses (Time) = Actual Production Time - Ideal Machine Runtime
</td>
</tr>
<tr>
<td>
11.
</td>
<td>
Performance Losses (Amount) = Ideal Production Amount - Actual Production Amount
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
<i>Availability = <box>Actual Production Time &frasl; Potential Production Time</box></i>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
<i>Performance = Ideal Machine Runtime &frasl; Actual Production Time</i>
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
<i>Quality = Actual Quality Amount &frasl; Actual Production Amount</i>
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
<i>OEE = Availability x Performance x Quality</i>
</td>
</tr>
<tr>
</table>

### Calculation pathway #6

<table>
<colgroup>
<col width="50%">
<col width="50%">
</colgroup>
<thead>
<tr>
<th>Input Variables</th>
<th>Variables needed for calculation pathway</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ideal Cycle Amount</td>
<td>x</td>
</tr>
<tr>
<td>Potential Production Time</td>
<td>x</td>
</tr>
<tr>
<td>Actual Production Time</td>
<td></td>
</tr>
<tr>
<td>Availability Losses (Time)</td>
<td>x</td>
</tr>
<tr>
<td>Actual Production Amount</td>
<td>x</td>
</tr>
<tr>
<td>Actual Quality Amount</td>
<td></td>
</tr>
<tr>
<td>Quality Losses (Amount)</td>
<td>x</td>
</tr>
</tbody>
</table>


This overview shows which variables are needed to calculate each variable, including the OEE. The formulas marked in italics in the table below are necessary to calculate the OEE.

![Calculation pathway 6](/images/oee/theory/theory-calculation-pathway-6.png)

<table>
<tr>
<td>
1.
</td>
<td>
Ideal Cycle Time = Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
2.
</td>
<td>
Ideal Amount = Potential Production Time x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Availability Losses (Amount) = Availability Losses (Time) x Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
<i>Actual Production Time = Potential Production Time - Availability Losses (Time)</i>
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
Ideal Machine Runtime = Actual Production Amount x Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Quality Losses (Time) = Quality Losses (Time) x Ideal Cycle Time<sup>-1</sup>
</td>
</tr>
<tr>
<td>
7.
</td>
<td>
<i>Actual Quality Amount (Amount) = Actual Production Amount - Quality Losses (Amount)</i>
</td>
</tr>
<tr>
<td>
8.
</td>
<td>
Ideal Production Amount = Ideal Amount - Availability Losses (Amount)
</td>
</tr>
<tr>
<td>
9.
</td>
<td>
Performance Losses (Time) = Actual Production Time - Ideal Machine Runtime
</td>
</tr>
<tr>
<td>
10.
</td>
<td>
Ideal Quality Time = Ideal Machine Runtime - Quality Losses (Time)
</td>
</tr>
<tr>
<td>
11.
</td>
<td>
Performance Losses (Amount) = Ideal Production Amount - Actual Production Amount
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
<i>Availability = <box>Actual Production Time &frasl; Potential Production Time</box></i>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
<i>Performance = Ideal Machine Runtime &frasl; Actual Production Time</i>
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
<i>Quality = Actual Quality Amount &frasl; Actual Production Amount</i>
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
<i>OEE = Availability x Performance x Quality</i>
</td>
</tr>
<tr>
</table>
