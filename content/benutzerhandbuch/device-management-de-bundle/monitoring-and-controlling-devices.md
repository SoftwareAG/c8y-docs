---
layout: redirect
title: Überwachen und Steuern von Geräten
weight: 40
---

<a name="map"></a>
### Lokalisieren von Geräten

{{< product-c8y-iot >}} bietet die Möglichkeit, den Standort aller Geräte in Ihrem Konto auf einer Karte anzuzeigen.

Klicken Sie auf **Karte** im Menü **Geräte** im Navigator, um eine Karte zu öffnen, die alle Geräte in Echtzeit anzeigt.

Die Geräte sind als "Pins" dargestellt. Klicken Sie auf einen Pin, um den Namen des entsprechenden Geräts anzuzeigen. Klicken Sie auf den Gerätenamen, um zur Ansicht der Gerätedetails zu wechseln.

![Device map](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-map.png)

<a name="connection-monitoring"></a>
### Verbindungsüberwachung

Im Device Management können Sie die Verbindungen zu Ihren Geräten überwachen.

Dies kann auf der Ebene einzelner Geräte erfolgen (siehe unten) oder für mehrere Geräte in einer Liste.

#### So überwachen Sie die Verbindung für mehrere Geräte

Öffnen Sie eine Geräteliste, um die Verbindungen für mehrere Geräte zu überwachen.

Der Verbindungsstatus wird durch Pfeile in der Spalte **Status** in der Geräteliste angezeigt.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-connectionstatus.png" alt="Connection Status">

**Sendeverbindungen**

Der obere Pfeil symbolisiert die Sendeverbindungen (Verkehr vom Gerät zu {{< product-c8y-iot >}}). Der Status der Sendeverbindungen kann einer der folgenden sein:

* Grüner Pfeil - online (Daten wurden im erwarteten Intervall gesendet)
* Roter Pfeil - offline (Daten wurden nicht im erwarteten Intervall gesendet)
* Grauer Pfeil - unbekannt oder nicht überwacht (kein Intervall konfiguriert)

Wenn Sie den Mauszeiger über einen Pfeil bewegen, wird der Zeitstempel der letzten Anfrage vom Gerät an den Server angezeigt.

Wenn ein Gerät als offline erkannt wird (sendet keine Daten im erwarteten Intervall und der obere Pfeil wechselt auf rot), wird ein "UnavailabilityAlarm" für das Gerät mit der folgenden Nachricht erzeugt: "Im erforderlichen Zeitraum wurden keine Daten vom Gerät empfangen."

Sendeverbindungen werden aktualisiert, wenn etwas an das Gerät gesendet wird, z. B. Alarme, Ereignisse, Messwerte oder aktualisierte Stammdaten.

>**Info:** Durch PUT-Anfragen an das Objekt des Geräts werden Verbindungen ebenfalls aktualisiert. Solche Anfragen sind die empfohlene Methode zur Implementierung eines Heartbeat-Service, der den Serverstatus überwacht.

**Push-Verbindungen**

Der untere Pfeil symbolisiert die Push-Verbindungen (von {{< product-c8y-iot >}} zum Gerät). Der Status der Push-Verbindungen kann einer der folgenden sein:

* Grüner Pfeil - online (Verbindung hergestellt)
* Roter Pfeil - offline (Verbindung nicht hergestellt)
* Grauer Pfeil - nicht überwacht

Eine Push-Verbindung ist ein aktiver HTTPS-Long-Poll oder eine MQTT-Verbindung von {{< product-c8y-iot >}} zum API-Endpunkt <kbd>/notification/operations</kbd> (nicht zum Echtzeit-API-Endpunkt).
Sie ist immer grün dargestellt, wenn das Gerät verbunden ist, auch wenn kein Datenverkehr stattfindet.


>**Info:** Die Verbindungsüberwachung erfolgt nicht in Echtzeit. Dies bedeutet, dass sich der angezeigte Verbindungsstatus nach dem Ausschalten eines Geräts nicht sofort ändert. Je nach verwendetem Protokoll für die Push-Verbindungsüberwachung kann dies einige Minuten dauern.

<a name="maintenance-mode"></a> **Wartungsmodus**

Außerdem kann sich ein Gerät im Wartungsmodus befinden. Dies wird durch ein Werkzeug-Symbol in der Spalte **Status** gekennzeichnet. Dieser spezielle Verbindungsstatus zeigt an, dass das Gerät gerade gewartet wird und nicht überwacht werden kann. Während ein Gerät gewartet wird, werden keine Alarme für dieses Gerät ausgelöst.

In der Karte **Verbindungsüberwachung** in der Registerkarte **Info** eines Geräts können Sie den Wartungsmodus für dieses Gerät durch einen Umschalter ein- oder ausschalten, siehe unten.


#### So überwachen Sie die Verbindung eines bestimmten Geräts

Navigieren Sie zur Registerkarte **Info** eines bestimmten Geräts, um dessen Verbindungen zu überwachen. Unter **Gerätestatus** wird der Verbindungsstatus für das Gerät angezeigt.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-deviceinfostatus.png" alt="Device Status">

Unter dem Status für die Sende- und Push-Verbindungen wird der Zeitpunkt der letzten Kommunikation angezeigt.

> **Info:** "Letzte Kommunikation" und "Letzte Aktualisierung" sind zwei vollkommen verschiedene Zeitstempel. "Letzte Kommunikation" zeigt an, wann ein Gerät das letzte mal Daten gesendet hat. "Letzte Aktualisierung" zeigt an, wann der Stammdateneintrag des Geräts das letzte mal aktualisiert wurde. Diese Aktualisierung kann durch das Gerät selbst, über die Web-Benutzerschnittstelle oder durch eine andere Anwendung erfolgt sein.

Im Feld **Erwartetes Sendeintervall** können Sie ein Intervall angeben. Dieser Parameter legt fest, wie häufig Sie erwarten, von dem Gerät zu hören. Wenn Sie dieses Intervall etwa auf 60 setzen, erwarten Sie, dass das Gerät mindestens einmal pro Stunde mit {{< product-c8y-iot >}} kommuniziert. Das Intervall wird entweder vom Gerät selbst festgelegt, basierend auf den Kenntnissen des Geräts darüber, wie oft es versuchen wird, Daten zu senden, oder es wird manuell von Ihnen festgelegt.

Wenn ein Intervall angegeben ist, befindet sich darunter der Umschalter **Wartung**.

Mit dem Umschalter **Wartung** können Sie den Wartungsmodus für das Gerät ein- oder ausschalten. Dies wird unmittelbar im Verbindungsstatus angezeigt.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-deviceinfomaintenance.png" alt="Device status maintenance">

<a name="monitoring-availability"></a>
### Verfügbarkeit

{{< product-c8y-iot >}} unterscheidet zwischen Verbindungsüberwachung und Verfügbarkeit. Verbindungsüberwachung, wie im vergangenen Abschnitt beschrieben, zeigt nur an, ob ein Gerät mit {{< product-c8y-iot >}} kommuniziert, was nicht automatisch auch bedeutet, dass das Gerät betriebsbereit ist.

Verfügbarkeit zeigt hingegen an, ob ein Gerät in Betrieb ist. Ein Verkaufsautomat ist beispielsweise in Betrieb, wenn er bereit ist, Waren zu verkaufen. Ein Verkaufsautomat kann ohne eine Verbindung zu {{< product-c8y-iot >}} gegen Bargeld Waren verkaufen. Aus kaufmännischer Sicht ist der Automat also betriebsbereit. Ähnlich können Geräte hinter einem Gateway weiterarbeiten, auch wenn das Gateway ausgeschaltet wurde.

{{< product-c8y-iot >}} betrachtet ein Gerät als betriebsbereit, wenn es für das Gerät keine kritischen aktiven Alarme gibt. Dies wird entsprechend des Zeitanteils, den Alarme aktiv waren, dargestellt. Hat ein Gerät innerhalb eines bestimmten Zeitraums keinerlei kritische Alarme, war es zu 100% in Betrieb. Gab es während der Hälfte der Zeit kritische aktive Alarme, war es zu 50% in Betrieb.

Ist ein Gerät offline, nimmt {{< product-c8y-iot >}} standardmäßig an,

* dass das Gerät während des Verbindungsabbruchs weiterhin in Betrieb bleibt, wenn dies zuvor der Fall war.
* dass das Gerät während des Verbindungsabbruchs weiterhin nicht in Betrieb ist, wenn dies zuvor der Fall war.

Es gibt möglicherweise Ausnahmen zu dieser Regel. Wenn Ihr Verkaufsautomat beispielsweise nur mit bargeldloser Bezahlung funktioniert, bedeutet ein Verbindungsabbruch, dass der Automat nichts mehr verkaufen kann und damit nicht mehr betriebsbereit ist. In diesem Fall müssen Nichtverfügbarkeits-Alarme in der ["Administration"-Anwendung](/benutzerhandbuch/administration-de#reprio-alarms) eingestellt werden, die den Schweregrad KRITISCH statt des Schweregrads WICHTIG haben.

{{< product-c8y-iot >}} zeigt die Serviceverfügbarkeit für einzelne Geräte sowie für alle Geräte an.

#### So zeigen Sie die Verfügbarkeit eines bestimmten Geräts an

Klicken Sie auf die Registerkarte **Verfügbarkeit** in den Details eines bestimmten Geräts, um die Verfügbarkeit dieses Geräts zu überprüfen.

#### So zeigen Sie die Verfügbarkeit für alle Geräte an

Klicken Sie auf **Verfügbarkeit** im Menü **Geräte** des Navigators, um den Gesamtservice aller Geräte anzuzeigen.

![Availability](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-availability.png)

Die Seite **Verfügbarkeit** zeigt die Verfügbarkeit aller Geräte während der letzten 24 Stunden, der letzten 7 Tage und der letzten 30 Tage in Prozent an.

<a name="alarm-monitoring"></a>
### Verwenden von Alarmen

Geräte können Alarme auslösen, um anzuzeigen, dass ein Problem besteht, das einer Handlung bedarf.

#### So zeigen Sie Alarme an

{{< product-c8y-iot >}} zeigt Alarme für einzelne Geräte sowie für alle Geräte an:

* Um die Alarme für alle Geräte zu überprüfen, klicken Sie auf **Alarme** im Menü **Übersichten** des Navigators.
* Um die Alarme eines bestimmten Geräts zu überprüfen, wechseln Sie zur Registerkarte **Alarm** in den Details dieses Geräts.

![Alarms page](/images/benutzerhandbuch/DeviceManagement/devmgmt-alarms.png)

Standardmäßig

* werden nur ungelöste Alarme gezeigt. Wenn Sie rechts in der oberen Menüleiste **Aufgehobene Alarme anzeigen** aktivieren, sehen Sie die gesamte Alarmhistorie.
* werden Alarme in Echtzeit angezeigt, sobald sie vom Gerät gemeldet werden. Klicken Sie auf **Echtzeit** in der oberen Menüleiste, um Echtzeitaktualisierungen zu deaktivieren.

Alarme werden nach Schweregraden klassifiziert. {{< product-c8y-iot >}} enthält vier verschiedene Alarmtypen:

|Schweregrad|Beschreibung|
|:---|:--|
|KRITISCH|Das Gerät ist nicht betriebsbereit. Dieser Zustand sollte umgehend behoben werden.
|WICHTIG|Das Gerät hat ein Problem, das behoben werden sollte.
|WENIGER WICHTIG|Das Gerät hat ein Problem, das behoben werden könnte.
|WARNUNG|Es gibt eine Warnung.

Die Registerkarte **Alarm** ist entsprechend dieser Alarmtypen in vier Bereiche unterteilt.

Klicken Sie in der oberen Leiste auf eine der Schaltflächen für die Alarmtypen, um den entsprechenden Bereich auszublenden. Klicken Sie erneut darauf, um ihn wieder sichtbar zu machen.

In jedem Bereich sind die Alarme nach ihrem Auftreten sortiert, wobei der aktuellste zuerst angezeigt wird.

In jeder Zeile werden die folgenden Informationen für einen Alarm angezeigt:

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Info</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Schweregrad</td>
<td align="left">KRITISCH, WICHTIG, WENIGER WICHTIG oder WARNUNG (siehe oben).</td>
</tr>
<tr>
<td align="left">Anzahl</td>
<td align="left">Wie oft der Alarm von dem Gerät gesendet wurde. Es kann jeweils nur ein Alarm pro Typ für ein Gerät aktiv sein. Wenn ein weiterer Alarm des gleichen Typs auftritt, wird die Zahl um 1 erhöht.</td>
</tr>
<tr>
<td align="left">Beschreibung</td>
<td align="left">Optionaler Text zur Beschreibung des Alarms.</td>
</tr>
<tr>
<td align="left">Status</td>
<td align="left">Status des Alarms: Ein Alarm kann Folgendes sein: <br> <strong>Aktiv</strong>: Wenn der Alarm ausgelöst wurde und keiner bisher den Alarm bearbeitet. <br> <strong>Bestätigt</strong>: Wenn jemand den Status auf "Bestätigt" gesetzt hat, um anzuzeigen, dass dieser Alarm bereits bearbeitet wird.<br><strong>Aufgehoben</strong>: Wenn entweder jemand den Status manuell auf "aufgehoben" gesetzt hat oder wenn das Gerät selbst festgestellt hat, dass das Problem behoben ist.</td>
</tr>
<tr>
<td align="left">Letztes Auftreten</td>
<td align="left">Zeitstempel für das letzte Auftreten des Alarms (Gerätezeit).</td>
</tr>
<tr>
<td align="left">Gerät</td>
<td align="left">Name des Geräts. Durch Klicken auf den Namen gelangen Sie zur Detailansicht des Geräts.</td>
</tr>
</tbody>
</table>

Klicken Sie auf den Pfeil rechts in einem Eintrag, um die Zeile auszuklappen und weitere Details zum Alarm anzuzeigen.

* **Status**: Enthält weitere Informationen zum Alarmstatus und zeigt den Alarmtypen an. Die Typ-Information wird verwendet, um die Priorität von Alarmen zu konfigurieren, siehe [Administration > Anwenden von Geschäftsregeln > Alarmregeln](/benutzerhandbuch/administration-de/#reprio-alarms).
* **Änderungsprotokoll**: Gibt die Serverzeit an, zu der der Alarm erstellt wurde. Diese kann von der Gerätezeit abweichen.

#### So ändern Sie den Status eines Alarms

Um den Status eines Alarms zu ändern, bewegen Sie den Mauszeiger über die Zeile und klicken Sie auf die entsprechende Schaltfläche oder klicken Sie auf das Menüsymbol und wählen Sie den gewünschten Status.

![Alarm change status](/images/benutzerhandbuch/DeviceManagement/devmgmt-alarms-status.png)

Außerdem ist es möglich, den Status aller Alarme auf einmal auf "aufgehoben" zu setzen. Klicken Sie auf **Alle aufheben** in der oberen Menüleiste, um alle Alarme der gewählten Schweregrade zu löschen.

<!-- Seems to be no longer relevant
* **Additional information**: Ein Alarm kann beliebige vom Gerät bereitgestellte zusätzliche Informationen enthalten.
* **Audit-Log**: Zusammen mit dem Alarm wird eine Logdatei mit am Alarm vorgenommenen Änderungen gespeichert. So entsteht eine Alarmhistorie mit verschiedenen Daten. -->

<a name="operation-monitoring"></a>
### Verwenden von Operationen

Operationen werden verwendet, um Geräte aus der Ferne zu steuern.

Sie können Operationen für einzelne Geräte oder für alle Geräte anzeigen:

* Um die Operationen für alle Geräte anzuzeigen, klicken Sie auf **Gerätesteuerung** im Menü **Übersichten** im Navigator.
* Um die Operationen eines bestimmten Geräts anzuzeigen, wechseln Sie zur Registerkarte **Steuerung** in den Details dieses Geräts.

In der **Gerätesteuerung** gibt es zwei Arten von Operationen, die jeweils auf einer eigenen Registerkarte angezeigt werden:

* **Einzel-Operationen** werden auf einzelnen Geräten ausgeführt, siehe [So zeigen Sie Einzel-Operationen an](#to-view-single-operations).
* **Bulk-Operationen** bestehen aus einer Einzel-Operation, die auf einer Reihe von Geräten ausgeführt wird, siehe [So zeigen Sie Bulk-Operationen an](#to-view-bulk-operations).

<a name="to-view-single-operations"></a>
#### So zeigen Sie Einzel-Operationen an

Sie finden die Liste der Einzel-Operationen auf der Registerkarte **Einzel-Operationen**.

![Single operations list](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-single-operations-list.png)

Einzel-Operationen können sich in einem der folgenden vier Status befinden:

| Status      | Beschreibung |
| :-----     | :---------- |
| AUSSTEHEND    | Die Operation wurde gerade erstellt und wartet darauf, vom Gerät empfangen zu werden. |
| WIRD AUSGEFÜHRT  | Die Operation wurde vom Gerät empfangen und wird ausgeführt. |
| ERFOLGREICH | Die Operation wurde erfolgreich vom Gerät ausgeführt. |
| FEHLGESCHLAGEN     | Die Operation konnte vom Gerät nicht ausgeführt werden. |

In jeder Zeile werden die folgenden Informationen für eine Operation angezeigt:

| Info   | Beschreibung |
| :----- | :---------- |
| Status  | AUSSTEHEND, WIRD AUSGEFÜHRT, ERFOLGREICH oder FEHLGESCHLAGEN (siehe oben). |
| Name   | Name der Operation. |
| Gerät | Name des Geräts. Durch Klicken auf den Namen gelangen Sie zur Detailansicht des Geräts. |

Durch Klicken auf eine Zeile wird diese aufgeklappt und es werden weitere Details zur Operation angezeigt.

* **Details**: Nähere Beschreibung und Status der Operationen. Lautet der Status = FEHLGESCHLAGEN, wird die Ursache für das Fehlschlagen angegeben. Ist die Einzel-Operation Teil einer [Bulk-Operation](#to-view-bulk-operations), können Sie die Details der Bulk-Operation anzeigen.
* **Änderungshistorie**: Informationen zu den letzten Änderungen der Operation.

![Single operation details](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-single-operation-details.png)


Um die Liste der Einzel-Operationen nach dem Status zu filtern, klicken Sie auf eine der Status-Schaltflächen in der oberen Menüleiste.
Klicken Sie auf **Alle**, um den Filter wieder zurückzusetzen.

Klicken Sie auf **Echtzeit** rechts in der oberen Menüleiste, um die vom Gerät empfangenen Operationen in Echtzeit anzuzeigen.
Klicken Sie auf **Neu laden**, um die Liste einmal manuell zu aktualisieren.

>**Info:** Einzel-Operationen werden in absteigender Zeitfolge aufgelistet. Operationen werden streng nach dieser Reihenfolge ausgeführt.

#### So können Sie eine Einzel-Operation hinzufügen und ausführen

Einzel-Operationen können entweder aus Bulk-Operationen erstellt werden oder aus den verschiedenen Operationstypen, die das Gerät unterstützt: [Verwalten von Firmware](/benutzerhandbuch/device-management-de/#firmware-repo), [Software](/benutzerhandbuch/device-management-de/#software-repo), [Konfigurationen](/benutzerhandbuch/device-management-de/#configuration-repository) und mehr.

Wenn Sie eine [Bulk-Operation](#bulk-operations) erstellen, werden die Einzel-Operationen, die in der Bulk-Operation abgearbeitet werden, ebenfalls zur Liste der Einzel-Operationen hinzugefügt.

Operationen für ein bestimmtes Gerät können auch in der Registerkarte **Shell** des Geräts erstellt und ausgeführt werden, siehe [Gerätedetails > Shell](/benutzerhandbuch/device-management-de#shell).

>**Wichtig:** Wenn Sie {{< product-c8y-iot >}} zum Fernsteuern von Maschinen verwenden, vergewissern Sie sich, dass alle Remoteoperationen den Sicherheitsstandards entsprechen und keine Gefahr darstellen.

#### So brechen Sie ausstehende Einzel-Operationen ab

Sie können bestimmte ausstehende Einzel-Operationen oder alle ausstehenden Einzel-Operationen gleichzeitig abbrechen.

Um eine bestimmte ausstehende Einzel-Operation abzubrechen, klicken Sie auf das Menüsymbol rechts neben dem Eintrag der betreffenden Einzel-Operation und wählen Sie **Operation abbrechen**.

Um alle ausstehenden Operationen gleichzeitig abzubrechen, klicken Sie auf **Mehr...** rechts in der oberen Menüleiste und wählen Sie **Alle ausstehenden Operationen abbrechen**.
Alternativ können Sie die Liste der Einzel-Operationen nach dem Status AUSSTEHEND filtern und anschließend auf **Alle abbrechen** klicken.

#### So erstellen Sie eine Regel für eine Einzel-Operation

Klicken Sie auf das Menüsymbol rechts neben der Einzel-Operation, für die Sie eine Smart Rule erstellen möchten, und wählen Sie **Smart Rule erstellen**.

Weitere Schritte werden unter [Cockpit > Smart Rules > So erstellen Sie eine Smart Rule](/benutzerhandbuch/cockpit-de/#create-rules) beschrieben.

<a name="to-view-bulk-operations"></a>
#### So zeigen Sie Bulk-Operationen an

Sie finden die Liste der Bulk-Operationen in der Registerkarte **Bulk-Operationen**.

![Bulk operations list](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operations-list.png)

Bulk-Operationen besitzen einen Operationstyp und einen Status.

Mit Hilfe des [Bulk-Operations-Assistenten](#bulk-operation-wizard) können Sie Bulk-Operationen der folgenden Operationstypen hinzufügen:

| Operationstyp          | Beschreibung |
| :---------------------- | :---------- |
| Konfigurationsaktualisierung    | Die Bulk-Operation aktualisiert die Konfiguration der ausgewählten Geräte. |
| Firmware-Aktualisierung         | Die Bulk-Operation aktualisiert die Firmware der ausgewählten Geräte. |
| Software Update         | Die Bulk-Operation aktualisiert die Software der ausgewählten Geräte. |
| Geräteprofil anwenden    | Die Bulk-Operation wendet auf den ausgewählten Geräten ein Geräteprofil an. |

Bulk-Operationen können auch andere Operationstypen besitzen, beispielsweise wenn Sie [eine Einzel-Operation als Bulk-Operation planen](#to-schedule-a-single-operation-as-bulk-operation) und der Typ der Einzel-Operation sich von dem der Bulk-Operation unterscheidet.

Bulk-Operationen können sich in einem der folgenden Status befinden:

| Status                   | Beschreibung |
| :---------------------- | :---------- |
| GEPLANT               | Die Bulk-Operation wurde angelegt und wird bis zum geplanten Zeitpunkt zurückgestellt. |
| WIRD AUSGEFÜHRT               | Die Bulk-Operation wird ausgeführt. |
| ABGEBROCHEN               | Die Bulk-Operation wurde angelegt, aber vor dem geplanten Zeitpunkt abgebrochen. |
| MIT FEHLERN ABGESCHLOSSEN | Die Bulk-Operation wurde bei einigen Geräten mit Fehlern abgeschlossen. |
| ERFOLGREICH ABGESCHLOSSEN  | Die Bulk-Operation wurde auf allen Geräten erfolgreich ausgeführt. |

In jeder Zeile werden die folgenden Informationen für eine Bulk-Operation angezeigt:

| Info   | Beschreibung |
| :----- | :---------- |
| Status  | GEPLANT, WIRD AUSGEFÜHRT, ABGEBROCHEN, MIT FEHLERN ABGESCHLOSSEN, ERFOLGREICH ABGESCHLOSSEN (siehe oben). |
| Name   | Name der Operation. |
| Fortschrittsanzeige | Nur für Bulk-Operationen, die ausgeführt werden oder abgeschlossen sind. Zeigt den Fortschritt der Operation in Prozent an. |
| Start- und Enddatum | Nur für Bulk-Operationen, die ausgeführt werden oder abgeschlossen sind. Bei Bulk-Operationen, die ausgeführt werden, ist das Enddatum ein geschätzter Wert auf Basis der Bulk-Operations-Einstellungen. |
| Schaltfläche Aktualisieren | Nur für Bulk-Operationen, die ausgeführt werden. Aktualisiert die Fortschrittsanzeige |

Durch Klicken auf die Pfeil-Schaltfläche auf der rechten Seite können Sie die Zeile aufklappen und weitere Details zur Bulk-Operation anzeigen.

* **Details**: Informationen zu Startdatum, Verzögerung, Status und Ergebnis der Bulk-Operation. Das Ergebnis listet die Anzahl der erfolgreich abgeschlossenen, fehlgeschlagenen und ausstehenden Operationen auf. Handelt es sich bei der Bulk-Operation um einen [Wiederholungsversuch für fehlgeschlagene Operationen](#to-retry-failed-operations), wird eine zusätzliche Zeile mit dem Index der Bulk-Operation angezeigt, die erneut ausgeführt werden soll. Klicken Sie auf den Index, um zu dieser Bulk-Operation zu scrollen. Wenn beim [Erstellen der Bulk-Operation](#to-add-a-bulk-operation) eine Beschreibung hinzugefügt wurde, wird eine zusätzliche Zeile mit dieser Beschreibung angezeigt.
* **Operation**: Informationen zur Operation in Form eines JSON-Objekts.
* **Operationen**: Nur verfügbar für Bulk-Operationen, die ausgeführt werden oder abgeschlossen sind. Informationen zu Status und Geräten von Einzel-Operationen, die in der Bulk-Operation abgearbeitet werden. Kann nach Status gefiltert werden. Darüber hinaus können Sie entweder alle fehlgeschlagenen Operationen erneut ausführen, indem Sie rechts oben im Abschnitt **Operationen** auf **Fehlgeschlagene Operationen erneut ausführen** klicken, oder einzelne Operationen erneut ausführen, indem Sie den Mauszeiger darüber bewegen und dann auf die Schaltfläche **Operation erneut ausführen** klicken, die direkt daneben erscheint. Siehe auch [So führen Sie fehlgeschlagene Operationen erneut aus](#to-retry-failed-operations).
* **Änderungshistorie**: In einer zweiten Registerkarte werden Informationen zu den letzten Änderungen der Operation angezeigt.

![Bulk operation details](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operation-details.png)

![Bulk operation details, second tab](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operation-details2.png)

Um die Liste der Bulk-Operationen nach Operationstyp zu filtern, klicken Sie auf die Auswahlliste in der Menüleiste, wählen Sie eine Reihe von Operationstypen und klicken Sie auf **Anwenden**.
Um den Filter wieder zurückzusetzen, wählen Sie **Alle** in der Auswahlliste und klicken Sie erneut auf **Anwenden**.

Um die Liste der Bulk-Operationen nach dem Status zu filtern, klicken Sie auf eine der Status-Schaltflächen in der oberen Menüleiste.
Klicken Sie auf **Alle**, um den Filter wieder zurückzusetzen.

Um die Liste der Bulk-Operationen nach Datum zu filtern, wählen Sie ein Datum in den beiden Datumsauswahlfeldern **Von Datum** und **Bis Datum** aus und klicken Sie direkt daneben auf **Anwenden**.
Um den Filter zurückzusetzen, klicken Sie direkt daneben auf **Löschen**.

Um beide Filter zurücksetzen, klicken Sie auf **Filter zurücksetzen** am Ende der Liste (nur sichtbar, wenn Filter angewendet wurden).

>**Info:** Bulk-Operationen, die vor der Version 10.7.0 erstellt wurden, sind von einer Gruppe abhängig und können immer noch angezeigt werden. Wählen Sie dazu die gewünschte Gruppe und klicken Sie auf die Registerkarte **Bulk-Operationen**.

>![Old bulk operations](/images/benutzerhandbuch/DeviceManagement/devmgmt-bulkoperations.png)

<a name="bulk-operations"></a>
<a name="to-add-a-bulk-operation"></a>
#### So fügen Sie eine Bulk-Operation hinzu

Es gibt zwei Möglichkeiten, eine Bulk-Operation anzulegen:

* Verwenden Sie den [Bulk-Operations-Assistenten](#bulk-operation-wizard)
* [Planen Sie eine Einzel-Operation als Bulk-Operation](#to-schedule-a-single-operation-as-bulk-operation)

<a name="bulk-operation-wizard"></a>
##### So fügen Sie eine Bulk-Operation mit Hilfe des Assistenten hinzu

Führen Sie folgende Schritte aus:

1. Klicken Sie in der Registerkarte **Bulk-Operationen** rechts in der oberen Menüleiste auf **Neue Bulk-Operation**.
2. Wählen Sie im nächsten Dialog einen Operationstyp.
    ![Select a bulk operation type](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operation-type.png)
3. Im darauf folgenden Assistenten gibt es vier Schritte. Je nach Operationstyp unterscheiden sich die ersten beiden Schritte:
  * **Konfigurationsaktualisierung**
      * Wählen Sie eine Konfiguration aus der Liste aus. Die Liste kann nach Konfigurationstyp oder Konfigurationsnamen gefiltert werden. Klicken Sie auf **Weiter**.
      * Überprüfen Sie die Vorschau der gewählten Konfiguration. Klicken Sie auf **Weiter**.
  * **Firmware-Aktualisierung**
      * Wählen Sie eine Firmware aus der Liste aus. Die Liste kann nach Firmware-Namen gefiltert werden. Klicken Sie auf **Weiter**.
      * Erweitern Sie einen Versionseintrag und wählen Sie einen Patch. Klicken Sie auf **Weiter**.
  * **Software Update**
      * Erweitern Sie einen Softwareeintrag aus der Liste und wählen Sie eine Version, anschließend wählen Sie aus der Auswahlliste aus, ob Sie die Software installieren, aktualisieren oder entfernen möchten. Die Liste der verfügbaren Software kann nach Gerätetyp oder Softwarenamen gefiltert werden. Klicken Sie auf **Weiter**. Wenn Sie Software für mehrere Gerätetypen gewählt haben, informiert Sie ein Warndialog darüber, dass einige Operationen wegen nicht unterstützter Software fehlschlagen könnten, und fordert Sie zur Bestätigung auf.
      * Bestätigen Sie die Auswahl und klicken Sie auf **Weiter**.
  * **Geräteprofil anwenden**
      * Wählen Sie ein Geräteprofil aus der Liste aus. Die Liste kann nach Gerätetyp oder Profilnamen gefiltert werden. Klicken Sie auf **Weiter**.
      * Bestätigen Sie die Auswahl und klicken Sie auf **Weiter**.
4. Wählen Sie Zielgeräte, indem Sie Filter auf die in Seiten aufgeteilte Liste aller Geräte anwenden. Sie können nach Status, Name, Typ, Modell, Gruppe, Registrierungsdatum und Alarmen filtern. Sie können mehrere Filter anwenden. Um einen Filter anzuwenden, klicken Sie auf die Spaltenüberschrift, wählen Sie Ihre Filteroptionen im Kontextmenü und klicken Sie auf **Anwenden**. Der Gruppenfilter ermöglicht auch das Filtern nach Untergruppen. Zum Auswählen einer ggf. vorhandenen Untergruppe klicken Sie auf die Pfeilschaltfläche rechts neben einer Gruppe und wählen Sie die gewünschten Untergruppen aus der Auswahlliste. Sie können alle Filter zurücksetzen, indem Sie oberhalb der Liste auf **Filter zurücksetzen** klicken. Für die Operationstypen "Konfigurationsaktualisierung", "Software Update" und "Geräteprofil anwenden" ist die Liste bereits nach dem entsprechenden Gerätetyp gefiltert. Klicken Sie auf **Weiter**.
    ![Bulk operation wizard, step 3](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operation-wizard-step3.png)
5. Geben Sie einen neuen Titel ein oder verwenden Sie den vorgegebenen Titel. Geben Sie bei Bedarf eine Beschreibung ein. Wählen Sie eine Startzeit und eine Verzögerung. Die Verzögerung ist die Zeitspanne zwischen den Einzel-Operationen der Bulk-Operation und kann in Sekunden oder Millisekunden angegeben werden. Klicken Sie auf **Bulk-Operation planen**, um die Bulk-Operation anzulegen.
    ![Bulk operation wizard, step 4](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operation-wizard-step4.png)

<a name="to-schedule-a-single-operation-as-bulk-operation"></a>
##### So planen Sie eine Einzel-Operation als Bulk-Operation

Es gibt zwei Möglichkeiten, eine Einzel-Operation als Bulk-Operation zu planen: entweder auf der Registerkarte **Einzel-Operationen** oder auf der Registerkarte **Steuerung** eines bestimmten Geräts.
Führen Sie folgende Schritte aus:

1. Klicken Sie auf das Menüsymbol rechts neben der Einzel-Operation, die Sie als Bulk-Operation planen möchten, und klicken Sie anschließend auf **Als Bulk-Operation planen**.
2. Der darauf folgende Assistent ähnelt dem neuen Bulk-Operations-Assistenten, der unter [So fügen Sie eine Bulk-Operation mit Hilfe des Assistenten hinzu](#bulk-operation-wizard) beschrieben wird. Allerdings gibt es nur zwei Schritte, da der Operationstyp von der als Bulk-Operation geplanten Operation abgeleitet wird. Lesen Sie die Beschreibung des [vollständigen Assistenten](#bulk-operation-wizard) und folgen Sie den Anweisungen.

<a name="bulk-operations"></a>
#### So bearbeiten Sie den Zeitplan von Bulk-Operationen

Sie können nur den Zeitplan von Bulk-Operationen mit dem Status GEPLANT bearbeiten.

1. Klicken Sie auf das Menüsymbol rechts neben der Bulk-Operation, die Sie bearbeiten möchten, und anschließend auf **Zeitplan bearbeiten**.
3. Im darauf folgenden Dialog können Sie die Werte für **Startzeit** und **Verzögerung** ändern.
5. Klicken Sie auf **Neu planen**, um Ihre Einstellungen zu speichern.

Die Änderungen werden entsprechend auf die Bulk-Operation angewendet.

![Reschedule bulk operations](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operations-reschedule.png)

<a name="bulk-operations"></a>
#### So brechen Sie Bulk-Operationen ab

Sie können nur Bulk-Operationen mit dem Status GEPLANT oder WIRD AUSGEFÜHRT abbrechen.
Wenn eine Bulk-Operation gerade ausgeführt wird, können Sie sie nur solange abbrechen, bis alle Einzel-Operationen angelegt wurden.
Auf diese Weise können Sie die Erstellung der verbleibenden Einzel-Operationen abbrechen.

Klicken Sie auf das Menüsymbol rechts neben der Bulk-Operation, die Sie abbrechen möchten, und anschließend auf **Bulk-Operation abbrechen**.

<a name="to-retry-failed-operations"></a>
#### So führen Sie fehlgeschlagene Operationen erneut aus

Sie können die fehlgeschlagenen Operationen einer Bulk-Operation, die ausgeführt wird oder mit Fehlern abgeschlossen wurde, erneut ausführen.

Erweitern Sie dazu die gewünschte Bulk-Operation und klicken Sie unter **Operationen** auf **Fehlgeschlagene Operationen erneut ausführen**, um mit allen fehlgeschlagenen Operationen eine neue Bulk-Operation zu erstellen.
Um eine Einzel-Operation erneut auszuführen, bewegen Sie den Mauszeiger über die Operation und klicken Sie auf **Operation erneut ausführen**.
Dadurch wird eine neue Einzel-Operation angelegt.

Bei einer Bulk-Operation, die mit Fehlern abgeschlossen wurde, können Sie auch auf das Menüsymbol rechts neben der Operation und anschließend auf **Fehlgeschlagene Operationen erneut ausführen** klicken.

#### So setzen Sie fehlgeschlagene Bulk-Operation manuell auf "erfolgreich"

Sie können eine fehlgeschlagene Bulk-Operation manuell auf den Status ERFOLGREICH setzen.

Klicken Sie dazu auf das Menüsymbol rechts neben der Bulk-Operation und anschließend auf **Operation auf ERFOLGREICH setzen**.

Dies kann hilfreich sein, wenn die Operation allgemein erfolgreich war, aber Operationsfehler bei Geräten aufweist, die nicht allzu wichtig sind. Diese Fehler würden andernfalls dazu führen, dass die Bulk-Operation im Status FEHLGESCHLAGEN verbleibt.

<a name="events-all"></a>
### Fehlerbehebung von Geräten

Eine Fehlerbehebung auf detaillierterer Ebene kann bei Geräten mit Hilfe von Ereignissen durchgeführt werden. Ereignisse sind von Geräten gesendete Low-Level-Nachrichten, die üblicherweise für die anwendungsspezifische Verarbeitung verwendet werden. So sendet zum Beispiel ein Verkaufsautomat seine Echtzeitverkäufe in Form von Ereignissen.

#### So zeigen Sie Ereignisse an

{{< product-c8y-iot >}} zeigt Ereignisse für einzelne Geräte sowie für alle Geräte an:

* Um die Ereignisse für alle Geräte anzuzeigen, klicken Sie auf **Ereignisse** im Menü **Übersichten** des Navigators.
* Um die Ereignisse eines bestimmten Geräts anzuzeigen, wechseln Sie zur Registerkarte **Ereignisse** in den Details dieses Geräts.

![Events](/images/benutzerhandbuch/DeviceManagement/devmgmt-events.png)

Standardmäßig werden die Ereignisse in Echtzeit angezeigt, sobald sie vom Gerät empfangen werden. Um die Echtzeitaktualisierung zu deaktivieren, klicken Sie auf **Echtzeit** rechts in der oberen Menüleiste.

Für jedes Ereignis werden die folgenden Informationen bereitgestellt:

|Info|Beschreibung|
|:---|:---|
|Zeitstempel|Zeitstempel, wann das Ereignis ausgeführt wurde.
|Name|Name des Ereignisses.
|Gerät|Name des Geräts, das das Ereignis sendet. Durch Klicken auf den Namen gelangen Sie zur Detailansicht des Geräts.

In der Ereignisliste wird der letzte Eintrag ganz oben angezeigt.

Durch Klicken einer Zeile wird diese aufgeklappt und weitere Details zum Ereignis angezeigt (wie der Typ und die Position des Geräts).

Da Geräte möglicherweise große Datenmengen senden, können Sie die angezeigten Daten nach Datum filtern.

Wählen Sie in den Feldern in der oberen Menüleiste ein Startdatum und ein Enddatum und klicken Sie auf **Anwenden**, um den Filter anzuwenden. Klicken Sie auf **Aufheben**, um den Filter wieder zurückzusetzen.
