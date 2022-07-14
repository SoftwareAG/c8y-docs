---
title: Anwenden von Geschäftsregeln
weight: 50
---

<a name="reprio-alarms"></a>
### Alarmregeln

Alarmregeln ermöglichen es, den Schweregrad und Text von Alarmen zu ändern, um diese den Prioritäten Ihres Unternehmens anzupassen. Der Abbruch einer Verbindung wird beispielsweise standardmäßig als WICHTIG eingestuft, kann aber in Ihrem Fall KRITISCH sein. Daher können Sie eine Alarmregel definieren, die Alarme im Zusammenhang mit Verbindungsabbrüchen als KRITISCH einstuft.

Klicken Sie auf **Alarmregeln** im Menü **Geschäftsregeln**, um eine Liste aller Alarmregeln anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-alarm-mapping.png" alt="Alarm mapping">

Zu jeder Alarmregel werden der Alarmschweregrad, der Alarmtyp und eine Beschreibung (optional) angezeigt.

<a name="add-alarm-mapping"></a>
#### So fügen Sie eine Alarmregel hinzu

1. Klicken Sie auf **Alarmregel hinzufügen** in der oberen Menüleiste.
2. Geben Sie den Alarmtypen ein, den Sie ändern möchten.
3. Geben Sie im Feld **Neue Beschreibung** optional eine neue Beschreibung für den Alarm ein. Wenn Sie dieses Feld frei lassen, wird der ursprüngliche Text des Alarms beibehalten.
4. Wählen Sie den gewünschten neuen Schweregrad aus, oder wählen Sie "Ignorieren", um den Alarm ganz zu unterdrücken.
5. Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

> **Info:** Der als Alarmregel bereitgestellte Alarmtyp wird als Alarmtyp-Präfix interpretiert: &quot;&#60;type-prefix&#62;*&quot;. Wenn Sie z. B. eine Alarmregel erstellen, die Alarme des Typs &quot;crit-alarm&quot; adressieren soll, gilt die Regel für jeden Alarmtyp, der mit diesem Wert beginnt, z. B. &quot;crit-alarm-1&quot;, &quot;crit-alarm-2&quot; oder &quot;crit-alarm-xyz&quot;.

#### So bearbeiten Sie eine Alarmregel

Um Alarmregeln zu bearbeiten, klappen Sie diese aus. Sie können die Beschreibung und den Alarmschweregrad ändern. Der Alarmtyp ist nicht editierbar.

> **Info:** Aktualisieren die Liste, um Änderungen zu verwerfen, ohne sie zu speichern.

<img src="/images/benutzerhandbuch/Administration/admin-alarm-mapping-edit.png" alt="Edit alarm mapping">

#### So löschen Sie eine Alarmregel

Zum Löschen einer Alarmregel bewegen Sie den Mauszeiger darüber und klicken Sie auf das Löschen-Symbol, das beim Bewegen des Mauszeigers über die Zeile sichtbar wird.