---
weight: 20
title: Anzeigen von Audit-Logs

---


Audit-Logs zeigen die von Benutzern ausgeführten Kommandos. 

Um die Audit-Logs-Liste anzuzeigen, klicken Sie **Audit Logs** im Menü **Konto**. Für jeden Logeintrag werden die folgenden Informationen bereitgestellt:

|Spalte|Beschreibung|
|:---|:---|
|Serverzeit|Serverzeit bei der Verarbeitung des Kommandos.
|Ändern|Typ des Kommandos, z. B. "Alarm erstellt", "Smart Rule gelöscht". Darunter wird der Benutzer angezeigt, der das Kommando verarbeitet hat.
|Beschreibung|Liefert je nach Kommando weitere Informationen, z. B. Gerätename, Alarmtext, Kommandostatus.
|Gerätezeit|Gerätezeit bei der Verarbeitung des Kommandos. Diese kann sich von der Serverzeit unterscheiden.

Es werden nur die letzten 100 Logeinträge angezeigt. Klicken Sie **Mehr laden** am Listenende, um weitere Logeinträge anzuzeigen.

![Audit logs](/images/benutzerhandbuch/Administration/admin-audit-logs.png)

>**Info**: Die Audit-Logs-Liste wird nicht automatisch aktualisiert, wenn eine Echtzeitaktualisierung von Kommandos erfolgt ist. Klicken Sie **Neu laden** rechts oben in der Menüleiste, um die Liste der Kommandos zu aktualisieren.

### Filtern von Logeinträgen

Um Logeinträge leichter durchsuchen zu können, können diese gefiltert werden nach

 - Typ , z. B. Alarm, Kommando, Smart Rule,
 - einem Datumsbereich mit einem "Von"- und/oder einem "Bis"-Datum,
 - dem Benutzer.

Klicken Sie das Filter-Symbol neben den Filter-Eingabefeldern, um den Filter anzuwenden. Zum Aufheben von Filtern klicken Sie das Löschen-Symbol (wird nur angezeigt, wenn Filter gesetzt sind).