---
weight: 50
title: Anwenden von Geschäftsregeln

---

### <a name="event-processing">Echtzeitverarbeitung

Mittels Echtzeitverarbeitung können Geschäftsregeln definiert werden, die von Cumulocity IoT automatisch in Echtzeit ausgeführt werden, sobald neue Daten eingehen oder bestehende Daten geändert werden. Die Logik wird in sogenannten Modulen implementiert, die aus einer Menge von CEP-Anweisungen bestehen.

>**Info:** Eine benutzerfreundliche Methode, Echtzeitgeschäftsregeln zu definieren, wird in der Cockpit-Anwendung mit den sogenannten [Smart Rules](/benutzerhandbuch/cockpit-de#smart-rules) bereitgestellt. Smart Rules sind ebenfalls CEP-Anweisungen, die in der Liste der **Echtzeitverarbeitung** angezeigt werden. Smart Rules können hier jedoch nicht bearbeitet werden.

Klicken Sie **Echtzeitverarbeitung** im Menü **Geschäftsregeln**, um alle Module anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-event-processing.png" alt="Event processing">

Für jedes Modul wird in der Liste der Status (bereitgestellt = grünes Häkchen / nicht bereitgestellt = Ausrufungszeichen), der Name und das Datum der letzten Aktualisierung angezeigt.

Wenn der Status eines Moduls auf **Gestartet** gesetzt ist, wird die durch die Anweisung erzeugte Ausgabe unterhalb des Häkchen-Symbols angezeigt. Klicken Sie auf eine Ausgabezeile, um die detaillierte Ausgabe der Anweisung anzuzeigen. Klicken Sie **Alle löschen**, um die Ausgabe zu entfernen.

#### <a name="add-modules"></a>So fügen Sie ein Modul hinzu

1. Klicken Sie **Neues Modul** in der oberen Menüleiste.
2. Geben Sie oben einen Namen für das neue Modul ein. Es sind nur alphanumerische Zeichen ohne Leerzeichen zulässig.
3. Standardmäßig ist der Status **Gestartet** voreingestellt, so dass die Anweisungen, die Sie erstellen, unmittelbar ausgeführt werden. Um dies zu verhindern, stellen Sie den Umschalter auf **Nicht gestartet**.
4. Geben Sie Ihre CEP-Anweisungen in das Textfeld **Quellcode** ein. Als Hilfe finden Sie einige Beispiele. Klicken Sie **Beispiele** und wählen Sie ein passendes Beispiel aus der Auswahlliste. Klicken Sie **Übernehmen**, um das Beispiel an der Position des Mauszeigers in das Textfeld **Quellcode** zu kopieren.
5. Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.

Das folgende Beispielmodul erzeugt einen Alarm, wenn die Temperatur unter 0 Grad sinkt.

<img src="/images/benutzerhandbuch/Administration/admin-event-processing-sample-module.png" alt="Example module" style="max-width: 100%">

#### So bearbeiten Sie ein Modul

Klicken Sie einfach auf die Zeile des zu bearbeitenden Moduls oder auf das Menüsymbol rechts neben der jeweiligen Zeile und danach auf **Bearbeiten**.

Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie ein Modul hinzu](#add-modules).


#### So löschen Sie ein Modul

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Löschen**.

Anstatt ein Modul zu löschen, können Sie es auch zeitweise deaktivieren, indem Sie den Status auf "Nicht bereitgestellt" setzen.


### <a name="reprio-alarms"></a>Alarmregeln

Alarmregeln ermöglichen es, den Schweregrad und Text von Alarmen zu ändern, um diese den Prioritäten Ihres Unternehmens anzupassen. Der Abbruch einer Verbindung wird beispielsweise standardmäßig als WICHTIG eingestuft, kann aber in Ihrem Fall KRITISCH sein. Daher können Sie eine Alarmregel definieren, die Alarme im Zusammenhang mit Verbindungsabbrüchen als KRITISCH einstuft.

Klicken Sie **Alarmregeln** im Menü **Geschäftsregeln**, um eine Liste aller Alarmregeln anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-alarm-mapping.png" alt="Alarm mapping">

Für jede Alarmregel wird der Schweregrad und der Name der Regel angezeigt.

#### <a name="add-alarm-mapping"></a> So fügen Sie Alarmregel hinzu

1. Klicken Sie **Alarmregel hinzufügen** in der oberen Menüleiste.
2. Geben Sie den Alarmtypen ein, den Sie ändern möchten.
3. Geben Sie optional einen neuen Text für den Alarm ein. Wenn Sie keinen Text eingeben, wird der Ursprungstext beibehalten.
4. Wählen Sie den gewünschten neuen Schweregrad aus, oder wählen Sie "Ignorieren", um den Alarm ganz zu unterdrücken.
5. Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.

#### So bearbeiten Sie eine Alarmregel

Um Alarmregeln zu bearbeiten, klappen Sie diese einfach aus. Weitere Informationen zu den Feldern finden Sie oben.

<img src="/images/benutzerhandbuch/Administration/admin-alarm-mapping-edit.png" alt="Edit alarm mapping">

#### So löschen Sie eine Alarmregel

Zum Löschen einer Alarmregel bewegen Sie den Mauszeiger darüber und klicken Sie auf das Löschen-Symbol.

<img src="/images/benutzerhandbuch/Administration/admin-alarm-mapping-delete.png" alt="Delete alarm mapping">
