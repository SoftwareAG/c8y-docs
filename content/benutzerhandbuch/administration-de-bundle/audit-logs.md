---
weight: 20
title: Anzeigen von Audit-Logs
helpcontent: 
  - label: audit-logs
    title: Anzeigen von Audit-Logs
    content: "Audit-Logs zeigen die von Benutzern ausgeführten Operationen.
      
      Zum einfachen Durchsuchen von Logdaten können Sie in der oberen Leiste Filterkriterien für Typ, Datumsbereich oder Benutzer festlegen und anwenden."
---

Audit-Logs zeigen die von Benutzern ausgeführten Operationen.

Um die Audit-Logs-Liste anzuzeigen, klicken Sie auf **Audit Logs** im Menü **Konto**. Für jeden Logeintrag werden die folgenden Informationen bereitgestellt:

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
<td align="left">Ändern</td>
<td align="left">Typ der Operationen, z. B. "Alarm erstellt", "Smart Rule gelöscht". Darunter wird der Benutzer angezeigt, der die Operation verarbeitet hat.</td>
</tr>

<tr>
<td align="left">Beschreibung</td>
<td align="left">Liefert je nach Operation weitere Informationen, z. B. Gerätename, Alarmtext, Operationsstatus.</td>
</tr>

<tr>
<td align="left">Gerätezeit</td>
<td align="left">Gerätezeit bei der Verarbeitung der Operation. Diese kann sich von der Serverzeit unterscheiden.</td>
</tr>
</tbody>
</table>

Es werden nur die letzten 100 Logeinträge angezeigt. Klicken Sie auf **Mehr laden** am Listenende, um weitere Logeinträge anzuzeigen.

![Audit logs](/images/users-guide/Administration/admin-audit-logs.png)

>**Info:** Die Audit-Logs-Liste wird nicht automatisch aktualisiert, wenn eine Echtzeitaktualisierung von Operationen erfolgt ist. Klicken Sie auf **Neu laden** rechts oben in der Menüleiste, um die Liste der Operationen zu aktualisieren.

### Filtern von Logeinträgen

Um Logeinträge leichter durchsuchen zu können, können diese gefiltert werden nach

 - Typ , z. B. Alarm, Operation, Smart Rule,
 - einem Datumsbereich mit einem "Von"- und/oder einem "Bis"-Datum,
 - dem Benutzer.

Klicken Sie auf das Filter-Symbol neben den Filter-Eingabefeldern, um den Filter anzuwenden. Zum Aufheben von Filtern klicken Sie auf das Löschen-Symbol (wird nur angezeigt, wenn Filter gesetzt sind).
