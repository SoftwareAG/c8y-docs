---
weight: 45
title: Überwachen von Geräteservices
layout: redirect
---
Mit der Anwendung Device Management können Sie die Daten überwachen, die Ihre Geräte über die auf ihnen ausgeführten Services senden.

Die Registerkarte [Services](/benutzerhandbuch/device-management-de/#services) in der Geräte-Detailansicht bietet eine Übersicht über die Services, die auf dem jeweiligen Gerät ausgeführt werden, und dient als Einstiegspunkt zur Service-Detailansicht.
Dort finden Sie ausführliche Informationen über Messungen, Ereignisse und Alarme, die für den betreffenden Service gesendet wurden.

![Service details](/images/benutzerhandbuch/DeviceManagement/devmgmt-service-details.png)

Die Service-Detailansicht umfasst die folgenden Registerkarten, die in den nachstehenden Abschnitten detailliert beschrieben werden:
<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup><thead>
<tr>
<th align="left">Tab</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><a href="#service-alarms">Alarme</a></td>
<td align="left">Enthält Informationen zu den Alarmen für einen Service. Siehe <a href="#alarm-monitoring">Verwenden von Alarmen</a>. Für jeden Service vorhanden.</td>
</tr>
<td align="left"><a href="#service-events">Ereignisse</a></td>
<td align="left">Zeigt Ereignisse im Zusammenhang mit einem Service an. Für jeden Service vorhanden.</td>
</tr>
<tr>
<td align="left"><a href="#service-measurements">Messwerte</a></td>
<td align="left">Zeigt eine Standardvisualisierung der numerischen Daten des Service in Form von Diagrammen an.</td>
</tr>
</tbody>
</table>

<a name="service-alarms"></a>
### Alarme

Die Registerkarte **Alarme** enthält Informationen zu den Alarmen für einen Service.
Weitere Informationen finden Sie unter [Verwenden von Alarmen](#alarm-monitoring).

{{< c8y-admon-info >}}
Die Servicedetail-Registerkarte **Alarme** zeigt nur Alarme an, bei denen der jeweilige Service die Quelle darstellt. Sie zeigt keine Alarme an, die vom Gerät selbst stammen.
{{< /c8y-admon-info >}}

<a name="service-events"></a>
### Ereignisse

Die Registerkarte **Ereignisse** zeigt die mit einem Service verbundenen Ereignisse an.
Weitere Informationen finden Sie unter [Fehlerbehebung von Geräten](#events-all).

{{< c8y-admon-info >}}
Die Servicedetail-Registerkarte **Ereignisse** zeigt nur Ereignisse an, bei denen der jeweilige Service die Quelle darstellt. Sie zeigt keine Ereignisse an, die vom Gerät selbst stammen.
{{< /c8y-admon-info >}}

<a name="service-measurements"></a>
### Messwerte

Die Registerkarte **Messwerte** zeigt eine Standardvisualisierung der numerischen Daten für den Service in Form von Diagrammen an.

{{< c8y-admon-info >}}
Die Servicedetail-Registerkarte **Messwerte** zeigt nur Messwerte an, bei denen der jeweilige Service die Quelle darstellt. Sie zeigt keine Messwerte an, die vom Gerät selbst stammen.
{{< /c8y-admon-info >}}

Weitere Informationen zur Verwendung der Registerkarte **Messungen** finden Sie unter [Messwerte](#measurements).
