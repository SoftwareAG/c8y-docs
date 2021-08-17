---
weight: 50
title: Anwenden von Geschäftsregeln

---
<a name="event-processing"></a>
### Echtzeitverarbeitung

>**Wichtig:** Die hier beschriebene Funktionalität **Echtzeitverarbeitung** ist nur verfügbar, wenn Ihr Mandant Esper und nicht Apama abonniert hat. Apama ist die Standard-CEP-Engine für neue Mandanten. Für Mandanten, die Apama verwenden, ist eine ähnliche Funktionalität über die Seite **Streaming Analytics EPL Apps** verfügbar, siehe [Developing apps with the Streaming Analytics application](/apama/analytics-introduction/#apama-epl-apps). Im Falle einer Migration muss jeglicher CEL-Code (Cumulocity Event Language) in EPL-Apps übersetzt werden. Näheres zur Migration finden Sie unter [Migrating from CEL (Esper) to Apama](/apama/overview-analytics/#migrate-from-esper) im *Streaming Analytics Guide*.

Mittels Echtzeitverarbeitung können Geschäftsregeln definiert werden, die von {{< product-c8y-iot >}} automatisch in Echtzeit ausgeführt werden, sobald neue Daten eingehen oder bestehende Daten geändert werden. Die Logik wird in sogenannten Regeln implementiert, die aus einer Menge von CEP-Anweisungen bestehen.

>**Info:** Eine benutzerfreundliche Methode, Echtzeitgeschäftsregeln zu definieren, wird in der Cockpit-Anwendung mit den sogenannten [Smart Rules](/benutzerhandbuch/cockpit-de#smart-rules) bereitgestellt. Smart Rules sind ebenfalls CEP-Anweisungen, die in der Liste der **Echtzeitverarbeitung** angezeigt werden. Smart Rules können hier jedoch nicht bearbeitet werden.  

Klicken Sie auf **Echtzeitverarbeitung** im Menü **Geschäftsregeln**, um alle Regeln anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-event-processing.png" alt="Event processing">

<br>Für jede Regel wird in der Liste der Status (bereitgestellt = grünes Häkchen / nicht bereitgestellt = Ausrufungszeichen), der Name und das Datum der letzten Aktualisierung angezeigt.

Wenn der Status einer Regel auf **Gestartet** gesetzt ist, wird die durch die Anweisung erzeugte Ausgabe unterhalb des Häkchen-Symbols angezeigt. Klicken Sie auf eine Ausgabezeile, um die detaillierte Ausgabe der Anweisung anzuzeigen. Klicken Sie auf **Alle löschen**, um die Ausgabe zu entfernen.

<a name="add-rule"></a>
#### So fügen Sie eine Regel hinzu

1. Klicken Sie auf **Neue Regel** in der oberen Menüleiste.
2. Geben Sie oben einen Namen für die neue Regel ein. Es sind nur alphanumerische Zeichen ohne Leerzeichen zulässig.
3. Standardmäßig ist der Status **Gestartet** voreingestellt, so dass die Anweisungen, die Sie erstellen, unmittelbar ausgeführt werden. Um dies zu verhindern, stellen Sie den Umschalter auf **Nicht gestartet**.
4. Geben Sie Ihre CEP-Anweisungen in das Textfeld **Quellcode** ein. Als Hilfe finden Sie einige Beispiele. Klicken Sie auf **Beispiele** und wählen Sie ein passendes Beispiel aus der Auswahlliste. Klicken Sie auf **Übernehmen**, um das Beispiel an der Position des Mauszeigers in das Textfeld **Quellcode** zu kopieren.
5. Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

Die folgende Beispielregel erzeugt einen Alarm, wenn die Temperatur unter 0 Grad sinkt.

<img src="/images/benutzerhandbuch/Administration/admin-event-processing-sample-module.png" alt="Example rule" style="max-width: 100%">

#### So bearbeiten Sie eine Regel

Klicken Sie einfach auf die Zeile der zu bearbeitenden Regel oder auf das Menüsymbol rechts neben der jeweiligen Zeile und danach auf **Bearbeiten**.

Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie eine Regel hinzu](#add-rule).


#### So löschen Sie eine Regel

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Löschen**.

Anstatt eine Regel zu löschen, können Sie sie auch zeitweise deaktivieren, indem Sie den Status auf "Nicht gestartet" setzen.


<a name="reprio-alarms"></a>
### Alarmregeln

Alarmregeln ermöglichen es, den Schweregrad und Text von Alarmen zu ändern, um diese den Prioritäten Ihres Unternehmens anzupassen. Der Abbruch einer Verbindung wird beispielsweise standardmäßig als WICHTIG eingestuft, kann aber in Ihrem Fall KRITISCH sein. Daher können Sie eine Alarmregel definieren, die Alarme im Zusammenhang mit Verbindungsabbrüchen als KRITISCH einstuft.

Klicken Sie auf **Alarmregeln** im Menü **Geschäftsregeln**, um eine Liste aller Alarmregeln anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-alarm-mapping.png" alt="Alarm mapping">

Zu jeder Alarmregel werden der Alarmschweregrad, der Alarmtyp und eine neue Beschreibung (optional) angezeigt.

<a name="add-alarm-mapping"></a>
#### So fügen Sie eine Alarmregel hinzu

1. Klicken Sie auf **Alarmregel hinzufügen** in der oberen Menüleiste.
2. Geben Sie den Alarmtypen ein, den Sie ändern möchten.
3. Geben Sie im Feld **Neue Beschreibung** optional eine neue Beschreibung für den Alarm ein. Wenn Sie dieses Feld frei lassen, wird der ursprüngliche Text des Alarms beibehalten.
4. Wählen Sie den gewünschten neuen Schweregrad aus, oder wählen Sie "Ignorieren", um den Alarm ganz zu unterdrücken.
5. Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

#### So bearbeiten Sie eine Alarmregel

Um Alarmregeln zu bearbeiten, klappen Sie diese aus. Sie können die Beschreibung und den Alarmschweregrad ändern. Der Alarmtyp ist nicht editierbar.

<img src="/images/benutzerhandbuch/Administration/admin-alarm-mapping-edit.png" alt="Edit alarm mapping">

#### So löschen Sie eine Alarmregel

Zum Löschen einer Alarmregel bewegen Sie den Mauszeiger darüber und klicken Sie auf das Löschen-Symbol.
