---
title: Anzeigen von Audit-Logs
weight: 20
---

Audit-Logs zeigen die von Benutzern ausgeführten Operationen.

Um die Audit-Logs-Liste anzuzeigen, klicken Sie auf **Audit-Logs** im Menü **Konten**. Für jeden Logeintrag werden die folgenden Informationen bereitgestellt:

<table>
<colgroup>
<col style="width: 15%;">
<col style="width: 85%;">
</colgroup>
<thead>
<tr>
<th align="left">Spalte</th>
<th align="left">Beschreibung</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">Serverzeit</td>
<td align="left">Serverzeit bei der Verarbeitung der Operation.</td>
</tr>

<tr>
<td align="left">Ereignis</td>
<td align="left">Typ der Operationen, z. B. "Alarm erstellt", "Smart Rule gelöscht". Darunter wird der Benutzer angezeigt, der die Operation verarbeitet hat.</td>
</tr>

<tr>
<td align="left">Beschreibung</td>
<td align="left">Liefert je nach Operation weitere Informationen, z. B. Gerätename, Alarmtext, Operationsstatus.</td>
</tr>

<tr>
<td align="left">Gerätezeit</td>
<td align="left">Gerätezeit bei der Verarbeitung der Operation. Diese kann sich von der Serverzeit unterscheiden.</td>
</tr>
</tbody>
</table>

Es werden nur die letzten 100 Logeinträge angezeigt. Scrollen Sie herunter zu **Mehr laden**, um weitere Logeinträge anzuzeigen.

![Audit logs](/images/benutzerhandbuch/Administration/admin-audit-logs.png)

>**Info:** Die Audit-Logs-Liste wird nicht automatisch aktualisiert, wenn eine Echtzeitaktualisierung von Operationen erfolgt ist. Klicken Sie auf **Neu laden** rechts oben in der Menüleiste, um die Liste der Operationen zu aktualisieren.

### Filtern von Logeinträgen

Um Logeinträge leichter durchsuchen zu können, können diese gefiltert werden nach

 - Typ, d. h. Alarm, Operation, Smart Rule,
 - einem Datumsbereich mit einem "Von"- und/oder einem "Bis"-Datum,
 - dem Benutzer.

Um einen Filter anzuwenden, klicken Sie auf die Schaltfläche **Anwenden** neben dem entsprechenden Filterfeld. Zum Aufheben von Filtern klicken Sie auf das X-Symbol neben der Schaltfläche **Anwenden** (wird nur angezeigt, wenn Filter gesetzt sind).