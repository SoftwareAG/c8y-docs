---
weight: 60
title: Calculation pathways
layout: redirect
---

![Naming convention of the pathways](/images/oee/theory/theory-naming-convention.png)

You will find these namings again, while creating a new profile under the section 'Computation'.

### Calculation pathway #1

<table>
<colgroup>
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
</colgroup>
<tr>
<th>
Ideal Amount
</th>
<th>
Potential Production Time
</th>
<th>
Actual Production Time
</th>
<th>
Availability Losses (Time)
</th>
<th>
Actual Production Amount
</th>
<th>
Actual Quality Amount
</th>
<th>
Quality Losses (Amount)
</th>
<th>
Calculation Pathway #
</th>
</tr>
<tr>
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
x
</td>
<td>
x
</td>
<td>

</td>
<td>
1
</td>

</tr>
</table>

In the table it is shown which variables, starting from the input variables, are needed to calculate all other variables including the OEE. The different colors have no meaning, but simply serve the purpose of clarity. On the next page the corresponding formulas are shown. The formulas in red are those only necessary for the calculation of the OEE.

![Calculation pathway 1](/images/oee/theory/theory-calculation-pathway-1.png)

<table>
<tr>
<td>
1.
</td>
<td>
Ideal Amount = Potential Production Time ⋅ Ideal Cycle Time
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
Ideal Production Amount = Actual Production Time ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
Ideal Quality Time = Actual Quality Amount ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
Ideal Machine Runtime = Actual Production Amount ⋅ Ideal Cycle Amount<sup>-1</sup>
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
Quality Losses (Time) = Quality Losses (Amount) ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
11.
</td>
<td>
Availability Losses (Time) = Availability Losses (Amount) ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
Availability = <box>Actual Production Time&frasl;Potential Production Time</box>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
Performance = Ideal Machine Runtime &frasl; Actual Production Time
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
Quality = Actual Quality Amount &frasl; Actual Production Amount
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
OEE = Availability ⋅ Performance ⋅ Quality
</td>
</tr>
<tr>
</table>

### Calculation pathway #2

<table>
<colgroup>
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
</colgroup>
<tr>
<th>
Ideal Amount
</th>
<th>
Potential Production Time
</th>
<th>
Actual Production Time
</th>
<th>
Availability Losses (Time)
</th>
<th>
Actual Production Amount
</th>
<th>
Actual Quality Amount
</th>
<th>
Quality Losses (Amount)
</th>
<th>
Calculation Pathway #
</th>
</tr>
<tr>
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
x
</td>
<td>
x
</td>
<td>
2
</td>

</tr>
</table>

Again it is shown with which variables, starting from the input variables, all variables including the OEE can be calculated. The different colors have no meaning, but simply serve the purpose of clarity. On the next page the corresponding formulas are shown. The formulas which are only necessary for the calculation of the OEE are colored red.

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
Ideal Amount = Potential Production Time ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
Ideal Production Amount = Actual Production Time ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
Ideal Quality Time = Actual Production Amount ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Quality Losses (Time) = Quality Losses (Amount) ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
7.
</td>
<td>
Actual Production Amount = Actual Quality Amount + Quality Losses (Amount)
</td>
</tr>
<tr>
<td>
8.
</td>
<td>
Performance Losses (Amount) = Performance Losses (Time) ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
9.
</td>
<td>
Ideal Machine Runtime = Actual Production Amount ⋅ Ideal Cycle Amount<sup>-1</sup>
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
Performance Losses (Time) = Availability Losses (Amount) ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
Availability = <box>Actual Production Time&frasl;Potential Production Time</box>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
Performance = Ideal Machine Runtime &frasl; Actual Production Time
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
Quality = Actual Quality Amount &frasl; Actual Production Amount
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
OEE = Availability ⋅ Performance ⋅ Quality
</td>
</tr>
<tr>
</table>

### Calculation pathway #3

<table>
<colgroup>
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
</colgroup>
<tr>
<th>
Ideal Cycle Amount
</th>
<th>
Potential Production Time
</th>
<th>
Actual Production Time
</th>
<th>
Availability Losses (Time)
</th>
<th>
Actual Production Amount
</th>
<th>
Actual Quality Amount
</th>
<th>
Quality Losses (Amount)
</th>
<th>
Calculation Pathway #
</th>
</tr>
<tr>
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
x
</td>
<td>

</td>
<td>
x
</td>
<td>
3
</td>

</tr>
</table>

Again, it is shown with which variables, starting from the input variables, all variables including the OEE can be calculated. The different colors have no meaning, but simply serve the purpose of clarity. On the next page the corresponding formulas are shown. The formulas which are only necessary for the calculation of the OEE are colored red.

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
Ideal Amount = Potential Production Time ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Ideal Production Amount = Actual Production Time ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
Ideal Machine Runtime = Actual Production Time ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
Actual Quality Amount = Actual Production Amount - Quality Losses (Amount)
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Quality Losses (Time) = Quality Losses (Amount) ⋅ Ideal Cycle Amount<sup>-1</sup>
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
Ideal Quality Time = Actual Quality Amount ⋅ Ideal Cycle Amount<sup>-1</sup>
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
Performance Losses (Time) = Performance Losses (Amount) ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
Availability = <box>Actual Production Time&frasl;Potential Production Time</box>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
Performance = Ideal Machine Runtime &frasl; Actual Production Time
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
Quality = Actual Quality Amount &frasl; Actual Production Amount
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
OEE = Availability ⋅ Performance ⋅ Quality
</td>
</tr>
<tr>
</table>

### Calculation pathway #4

<table>
<colgroup>
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
</colgroup>
<tr>
<th>
Ideal Cycle Amount
</th>
<th>
Potential Production Time
</th>
<th>
Actual Production Time
</th>
<th>
Availability Losses (Time)
</th>
<th>
Actual Production Amount
</th>
<th>
Actual Quality Amount
</th>
<th>
Quality Losses (Amount)
</th>
<th>
Calculation Pathway #
</th>
</tr>
<tr>
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
x
</td>
<td>

</td>
<td>
4
</td>

</tr>
</table>

Again, it is shown with which variables, starting from the input variables, all variables including the OEE can be calculated. The different colors have no meaning, but simply serve the purpose of clarity. On the next page the corresponding formulas are shown. The formulas which are only necessary for the calculation of the OEE are colored red.

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
Ideal Amount = Potential Production Time ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Availability Losses (Amount) = Availability Losses (Time) ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
Actual Production Time = Potential Production Time - Availability Losses (Time)
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
Ideal Machine Runtime = Actual Production Amount - Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Ideal Quality Time = Actual Quality Amount ⋅ Ideal Cycle Amount<sup>-1</sup>
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
Ideal Production Amount = Actual Production Amount ⋅ Ideal Cycle Amount
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
Performance Losses (Time) = Ideal Production Amount ⋅ Actual Production Amount
</td>
</tr>
<tr>
<td>
12.
</td>
<td>
Availability = <box>Actual Production Time &frasl; Potential Production Time</box>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
Performance = Ideal Machine Runtime &frasl; Actual Production Time
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
Quality = Actual Quality Amount &frasl; Actual Production Amount
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
OEE = Availability ⋅ Performance ⋅ Quality
</td>
</tr>
<tr>
</table>

### Calculation pathway #5

<table>
<colgroup>
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
</colgroup>
<tr>
<th>
Ideal Cycle Amount
</th>
<th>
Potential Production Time
</th>
<th>
Actual Production Time
</th>
<th>
Availability Losses (Time)
</th>
<th>
Actual Production Amount
</th>
<th>
Actual Quality Amount
</th>
<th>
Quality Losses (Amount)
</th>
<th>
Calculation Pathway #
</th>
</tr>
<tr>
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

</td>
<td>
x
</td>
<td>
x
</td>
<td>
5
</td>

</tr>
</table>

Again, it is shown with which variables, starting from the input variables, all variables including the OEE can be calculated. The different colors have no meaning, but simply serve the purpose of clarity. On the next page the corresponding formulas are shown. The formulas which are only necessary for the calculation of the OEE are colored red.

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
Ideal Amount = Potential Production Time ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Availability Losses (Amount) = Availability Losses (Time) ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
Actual Production Time = Potential Production Time - Availability Losses (Time)
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
Ideal Quality Time = Actual Quality Amount ⋅ Ideal Cycle Amount<sup>-1</sup>
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
Quality Losses (Amount) = Quality Losses (Amount) ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
8.
</td>
<td>
Ideal Machine Runtime = Actual Production Amount ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
9.
</td>
<td>
Ideal Production Amount = Actual Production Time  ⋅  Ideal Cycle Amount
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
Availability = <box>Actual Production Time &frasl; Potential Production Time</box>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
Performance = Ideal Machine Runtime &frasl; Actual Production Time
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
Quality = Actual Quality Amount &frasl; Actual Production Amount
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
OEE = Availability ⋅ Performance ⋅ Quality
</td>
</tr>
<tr>
</table>

### Calculation pathway #6

<table>
<colgroup>
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
<col width="12.5%">
</colgroup>
<tr>
<th>
Ideal Cycle Amount
</th>
<th>
Potential Production Time
</th>
<th>
Actual Production Time
</th>
<th>
Availability Losses (Time)
</th>
<th>
Actual Production Amount
</th>
<th>
Actual Quality Amount
</th>
<th>
Quality Losses (Amount)
</th>
<th>
Calculation Pathway #
</th>
</tr>
<tr>
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
<td>
x
</td>
<td>
6
</td>

</tr>
</table>

Again, it is shown with which variables, starting from the input variables, all variables including the OEE can be calculated. The different colors have no meaning, but simply serve the purpose of clarity. On the next page the corresponding formulas are shown. The formulas which are only necessary for the calculation of the OEE are colored red.

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
Ideal Amount = Potential Production Time ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
3.
</td>
<td>
Availability Losses (Amount) = Availability Losses (Time) ⋅ Ideal Cycle Amount
</td>
</tr>
<tr>
<td>
4.
</td>
<td>
Actual Production Time = Potential Production Time - Availability Losses (Time)
</td>
</tr>
<tr>
<td>
5.
</td>
<td>
Ideal Machine Runtime = Actual Production Amount ⋅ Ideal Cycle Amount<sup>-1</sup>
</td>
</tr>
<tr>
<td>
6.
</td>
<td>
Quality Losses (Time) = Quality Losses (Time) ⋅ Ideal Cycle Time<sup>-1</sup>
</td>
</tr>
<tr>
<td>
7.
</td>
<td>
Actual Quality Amount (Amount) = Actual Production Amount - Quality Losses (Amount)
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
Availability = <box>Actual Production Time &frasl; Potential Production Time</box>
</td>
</tr>
<tr>
<td>
13.
</td>
<td>
Performance = Ideal Machine Runtime &frasl; Actual Production Time
</td>
</tr>
<tr>
<td>
14.
</td>
<td>
Quality = Actual Quality Amount &frasl; Actual Production Amount
</td>
</tr>
<tr>
<td>
15.
</td>
<td>
OEE = Availability ⋅ Performance ⋅ Quality
</td>
</tr>
<tr>
</table>
