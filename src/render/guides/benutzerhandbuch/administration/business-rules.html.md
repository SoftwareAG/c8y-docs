---
order: 50
title: Anwenden von Geschäftsregeln
layout: redirect
---

<a name="event-processing"></a>
### Echtzeitverarbeitung

Mittels Echtzeitverarbeitung können Geschäftsregeln definiert werden, die automatisch in Echtzeit ausgeführt werden, sobald neue Daten eingehen oder bestehende Daten geändert werden. Die Logik wird in sogenannten Modulen implementiert. Module bestehen aus einer Menge von Anweisungen, die Sie in der [Cumulocity Event Language](/guides/concepts/realtime) schreiben.

> **Info:** Eine benutzerfreundliche Methode, Echtzeitregeln zu definieren, wird in der Cockpit-Anwendung mit den sogenannten [Smart Rules](/guides/benutzerhandbuch/cockpit#rules) bereitgestellt. Smart Rules sind ebenfalls Anweisungen, die mit der Cumulocity Event Language erstellt wurden, und in der Liste der Echtzeitregeln angezeigt werden. Sie können jedoch hier nicht bearbeitet werden.

Klicken Sie "Echtzeitverarbeitung" im Menü "Geschäftsregeln", um die vorhandenen Module anzuzeigen oder neue Module zu erstellen.

![Echtzeitverarbeitung](/guides/images/benutzerhandbuch/Admin_EventProcessing.png)

Für jedes Modul wird in der Liste der Status (bereitgestellt = grünes Häkchen / nicht bereitgestellt = Ausrufungszeichen), der Name und das Datum der letzten Aktualisierung angezeigt.

Klicken Sie auf eine Anwendung, um diese zu bearbeiten oder klicken Sie auf das Menüsymbol und wählen Sie **Bearbeiten** im Kontextmenü.

Um ein Modul zu löschen, klicken Sie **Löschen** im Kontextmenü.

Anstatt ein Modul zu löschen, können Sie es auch zeitweise deaktivieren, indem Sie den Status auf "Nicht bereitgestellt" setzen.

**Erstellen neuer Module**

Um ein neues Modul zu erstellen, klicken Sie **Neues Modul** in der oberen Menüleiste.

![Neues Modul](/guides/images/benutzerhandbuch/Admin_EventProcessingNewModule.png)

1.  Geben Sie oben einen Namen für das neue Modul ein. Es sind nur alphanumerische Zeichen ohne Leerzeichen zulässig.
2.  Standardmäßig ist der Status "Bereitgestellt" voreingestellt, so dass die Anweisungen, die Sie erstellen, unmittelbar ausgeführt werden. Um dies zu verhindern, schieben Sie den Regler auf "Nicht bereitgestellt".
3.  Geben Sie Ihre CEL-Anweisungen in das Textfeld "Quellcode" ein. Als Hilfe finden Sie einige Beispiele. Klicken Sie **Beispiele** und wählen Sie ein passendes Beispiel aus der Dropdown-Liste. Klicken Sie **Übernehmen**, um das Beispiel an der Position des Mauszeigers in das Textfeld zu kopieren.
4.  Klicken Sie **Speichern**, um Ihre Eingaben zu speichern.

Das Beispielmodul erzeugt einen Alarm, wenn die Temperatur unter 0 Grad sinkt.

![Beispielmodul](/guides/images/benutzerhandbuch/Admin_EventProcessingModuleExample.png)

Wenn der Status eines Moduls auf "Bereitgestellt" steht, wird dies durch eine grünes Häkchen in der Modulliste angezeigt. Immer wenn eine Anweisung eine Ausgabe generiert, wird diese unter dem Häkchen angezeigt. Klicken Sie auf eine Ausgabezeile, um die detaillierte Ausgabe der Anweisung anzuzeigen. Klicken Sie **Alles löschen**, um die Ausgabe zu entfernen.

### <a name="reprio-alarms"></a>Alarmregeln

Alarmregeln ermöglichen es, den Schweregrad und Text von Alarmen zu ändern, um diese den Prioritäten Ihres Unternehmens anzupassen. Der Abbruch einer Verbindung wird beispielsweise standardmäßig als WICHTIG eingestuft, kann aber in Ihrem Fall KRITISCH sein. Daher können Sie eine Alarmregel definieren, die Alarme im Zusammenhang mit Verbindungsabbrüchen als KRITISCH einstuft.

Klicken Sie "Alarmregeln" im Menü "Geschäftsregeln", um eine Liste aller Alarmregeln anzuzeigen.

![Alarmregeln](/guides/images/users-guide/administration/Admin_AlarmMapping.png)

Für jede Alarmregel wird der Schweregrad und der Name der Regel angezeigt.

Klicken Sie auf einen Eintrag, um diesen zu bearbeiten.

Zum Löschen einer Alarmregel fahren Sie mit dem Mauszeiger darüber und klicken Sie auf die Schaltfläche **Löschen**.

**Hinzufügen einer Alarmregel**

Um eine Alarmregel hinzuzufügen, klicken Sie **Alarmregel hinzufügen** in der oberen Menüleiste.

![Hinzufügen einer Alarmregel](/guides/images/benutzerhandbuch/Admin_AlarmMappingAdd.png)

1.  Geben Sie den Alarmtypen ein, den Sie ändern möchten.
2.  Geben Sie optional einen neuen Text für den Alarm ein. Wenn Sie keinen Text eingeben, wird der Ursprungstext beibehalten.
3.  Wählen Sie den gewünschten neuen Schweregrad aus, oder wählen Sie "Ignorieren", um den Alarm ganz zu unterdrücken.
4.  Klicken Sie **Speichern**, um Ihre Eingaben zu speichern.

