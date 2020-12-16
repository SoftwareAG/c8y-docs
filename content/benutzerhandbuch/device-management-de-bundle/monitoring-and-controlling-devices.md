---
weight: 40
title: Überwachen und Steuern von Geräten
layout: redirect
---


### <a name="map"></a>Lokalisieren von Geräten

Cumulocity IoT bietet die Möglichkeit, den Standort aller Geräte in Ihrem Konto auf einer Karte anzuzeigen.

Klicken Sie **Karte** im Menü **Geräte** im Navigator, um eine Karte zu öffnen, die alle Geräte in Echtzeit anzeigt.

Die Geräte sind als "Pins" dargestellt. Klicken Sie auf einen Pin, um den Namen des entsprechenden Geräts anzuzeigen. Klicken Sie auf den Gerätenamen, um zur Ansicht der Gerätedetails zu wechseln.

![Device map](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-map.png)

### <a name="connection-monitoring"></a>Verbindungsüberwachung

Im Device Management können Sie die Verbindungen zu Ihren Geräten überwachen.

Dies kann auf der Ebene einzelner Geräte erfolgen (siehe unten) oder für mehrere Geräte in einer Liste.

#### So überwachen Sie die Verbindung für mehrere Geräte

Öffnen Sie eine Geräteliste, um die Verbindungen für mehrere Geräte zu überwachen.

Der Verbindungsstatus wird durch Pfeile in der Spalte **Status** in der Geräteliste angezeigt.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-connectionstatus.png" alt="Connection Status">

**Sendeverbindungen**

Der obere Pfeil symbolisiert die Sendeverbindungen (Verkehr vom Gerät zu Cumulocity IoT). Der Status der Sendeverbindungen kann einer der folgenden sein:

* Grüner Pfeil - online (Daten wurden im erwarteten Intervall gesendet)
* Roter Pfeil - offline (Daten wurden nicht im erwarteten Intervall gesendet)
* Grauer Pfeil - unbekannt oder nicht überwacht (kein Intervall konfiguriert)

Wenn Sie den Mauszeiger über einen Pfeil bewegen, wird der Zeitstempel der letzten Anfrage vom Gerät an den Server angezeigt.

Wenn ein Gerät als offline erkannt wird (sendet keine Daten im erwarteten Intervall und der obere Pfeil wechselt auf rot), wird ein "UnavailabilityAlarm" für das Gerät mit der folgenden Nachricht erzeugt: "Im erforderlichen Zeitraum wurden keine Daten vom Gerät empfangen."

**Push-Verbindungen**

Der untere Pfeil symbolisiert die Push-Verbindungen (von Cumulocity IoT zum Gerät). Der Status der Push-Verbindungen kann einer der folgenden sein:

* Grüner Pfeil - online (Verbindung hergestellt)
* Roter Pfeil - offline (Verbindung nicht hergestellt)
* Grauer Pfeil - nicht überwacht

Push-Verbindung bedeutet Verbindung von Cumulocity IoT zu /device/control/notifications API, **nicht** zu /device/control/realtime API.

>**Info:** Die Verbindungsüberwachung erfolgt nicht in Echtzeit. Dies bedeutet, dass sich der angezeigte Verbindungsstatus nach dem Ausschalten eines Geräts nicht sofort ändert. Je nach verwendetem Protokoll für die Push-Verbindungsüberwachung kann dies einige Minuten dauern.

<a name="maintenance-mode"></a> **Maintenance mode**

Außerdem kann sich ein Gerät im Wartungsmodus befinden. Dies wird durch ein Werkzeug-Symbol in der Spalte **Status** gekennzeichnet. Dieser spezielle Verbindungsstatus zeigt an, dass das Gerät gerade gewartet wird und nicht überwacht werden kann. Während ein Gerät gewartet wird, werden keine Alarme für dieses Gerät ausgelöst.

In der Karte **Verbindungsüberwachung** in der Registerkarte **Info** eines Geräts können Sie den Wartungsmodus für dieses Gerät durch einen Umschalter ein- oder ausschalten, siehe unten.


#### So überwachen Sie die Verbindung eines bestimmten Geräts

Navigieren Sie zur Registerkarte **Info** eines bestimmten Geräts, um dessen Verbindungen zu überwachen. Unter **Gerätestatus** wird der Verbindungsstatus für das Gerät angezeigt.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-deviceinfostatus.png" alt="Device Status">

Unter dem Status für die Sende- und Push-Verbindungen wird der Zeitpunkt der letzten Kommunikation angezeigt.

> **Info:** "Letzte Kommunikation" und "Letzte Aktualisierung" sind zwei vollkommen verschiedene Zeitstempel. "Letzte Kommunikation" zeigt an, wann ein Gerät das letzte mal Daten gesendet hat. "Letzte Aktualisierung" zeigt an, wann der Stammdateneintrag des Geräts das letzte mal aktualisiert wurde. Diese Aktualisierung kann durch das Gerät selbst, über die Web-Benutzerschnittstelle oder durch eine andere Anwendung erfolgt sein.

Im Feld **Erwartetes Sendeintervall** können Sie ein Intervall angeben. Dieser Parameter legt fest, wie häufig Sie erwarten, von dem Gerät zu hören. Wenn Sie dieses Intervall etwa auf 60 setzen, erwarten Sie, dass das Gerät mindestens einmal pro Stunde mit Cumulocity IoT kommuniziert. Das Intervall wird entweder vom Gerät selbst festgelegt, basierend auf den Kenntnissen des Geräts darüber, wie oft es versuchen wird, Daten zu senden, oder es wird manuell von Ihnen festgelegt.

Wenn ein Intervall angegeben ist, befindet sich darunter der Umschalter **Wartung**.

Mit dem Umschalter **Wartung** können Sie den Wartungsmodus für das Gerät ein- oder ausschalten. Dies wird unmittelbar im Verbindungsstatus angezeigt.

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-deviceinfomaintenance.png" alt="Device status maintenance">

### <a name="monitoring-services"></a>Serviceüberwachung

Cumulocity IoT unterscheidet zwischen Verbindungsüberwachung und Serviceüberwachung. Verbindungsüberwachung, wie im vergangenen Abschnitt beschrieben, zeigt nur an, ob ein Gerät mit Cumulocity IoT kommuniziert, was nicht automatisch auch bedeutet, dass das Gerät betriebsbereit ist.

Serviceüberwachung dagegen zeigt an, ob ein Gerät in Betrieb ist. Ein Verkaufsautomat ist beispielsweise in Betrieb, wenn er bereit ist, Waren zu verkaufen. Ein Verkaufsautomat kann ohne eine Verbindung zu Cumulocity IoT gegen Bargeld Waren verkaufen. Aus kaufmännischer Sicht ist der Automat also betriebsbereit. Ähnlich können Geräte hinter einem Gateway weiterarbeiten, auch wenn das Gateway ausgeschaltet wurde.

Cumulocity IoT betrachtet ein Gerät als betriebsbereit, wenn es für das Gerät keine kritischen aktiven Alarme gibt. Dies wird entsprechend des Zeitanteils, den Alarme aktiv waren, dargestellt. Hat ein Gerät innerhalb eines bestimmten Zeitraums keinerlei kritische Alarme, war es zu 100% in Betrieb. Gab es während der Hälfte der Zeit kritische aktive Alarme, war es zu 50% in Betrieb.

Ist ein Gerät offline, nimmt Cumulocity IoT standardmäßig an,

* dass das Gerät während des Verbindungsabbruchs weiterhin in Betrieb bleibt, wenn dies zuvor der Fall war.
* dass das Gerät während des Verbindungsabbruchs weiterhin nicht in Betrieb ist, wenn dies zuvor der Fall war.

Es gibt möglicherweise Ausnahmen zu dieser Regel. Wenn Ihr Verkaufsautomat beispielsweise nur mit bargeldloser Bezahlung funktioniert, bedeutet ein Verbindungsabbruch, dass der Automat nichts mehr verkaufen kann und damit nicht mehr betriebsbereit ist. In diesem Fall müssen Nichtverfügbarkeits-Alarme in der ["Administration"-Anwendung](/benutzerhandbuch/administration-de#reprio-alarms) eingestellt werden, die den Schweregrad KRITISCH statt des Schweregrads WICHTIG haben.

Cumulocity IoT zeigt die Serviceverfügbarkeit für einzelne Geräte sowie für alle Geräte an.

#### So zeigen Sie die Serviceüberwachung eines bestimmten Geräts an

Klicken Sie auf die Registerkarte **Serviceüberwachung** in den Details eines bestimmten Geräts, um die Serviceüberwachung dieses Geräts zu überprüfen.

#### So zeigen Sie die Serviceüberwachung für alle Geräte an

Klicken Sie **Serviceüberwachung** im Menü **Geräte** des Navigators, um den Gesamtservice aller Geräte anzuzeigen.

![Service monitoring](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-servicemonitoring.png)

Die Seite **Serviceüberwachung** zeigt die prozentuale Verfügbarkeit aller Geräte während der letzten 24 Stunden, der letzten 7 Tage und der letzten 30 Tage an.


### <a name="alarm-monitoring"></a>Verwenden von Alarmen

Geräte können Alarme auslösen, um anzuzeigen, dass ein Problem besteht, das einer Handlung bedarf.

#### So zeigen Sie Alarme an

Cumulocity IoT zeigt Alarme für einzelne Geräte sowie für alle Geräte an:

* Um die Alarme für alle Geräte zu überprüfen, klicken Sie **Alarme** im Menü **Übersichten** des Navigators.
* Um die Alarme eines bestimmten Geräts zu überprüfen, wechseln Sie zur Registerkarte **Alarm** in den Details dieses Geräts.

![Alarms page](/images/benutzerhandbuch/DeviceManagement/devmgmt-alarms.png)

Standardmäßig

* werden nur ungelöste Alarme gezeigt. Wenn Sie rechts in der oberen Menüleiste  **Aufgehobene Alarme anzeigen** aktivieren, sehen Sie die gesamte Alarmhistorie.
* werden Alarme in Echtzeit angezeigt, sobald sie vom Gerät gemeldet werden. Klicken Sie **Echtzeit** in der oberen Menüleiste, um Echtzeitaktualisierungen zu deaktivieren.

Alarme werden nach Schweregraden klassifiziert. Cumulocity IoT enthält vier verschiedene Alarmtypen:

|Schweregrad|Beschreibung|
|:---|:--|
|KRITISCH|Das Gerät ist nicht betriebsbereit. Dieser Zustand sollte umgehend behoben werden.
|WICHTIG|Das Gerät hat ein Problem, das behoben werden sollte.
|WENIGER WICHTIG|Das Gerät hat ein Problem, das behoben werden könnte.
|WARNUNG|Es gibt eine Warnung.

Die Registerkarte **Alarm** ist entsprechend dieser Alarmtypen in vier Bereiche unterteilt.

Klicken Sie in der oberen Leiste auf eine der Schaltflächen für die Alarmtypen, um den entsprechenden Bereich auszublenden. Nochmaliges Klicken zeigt den Bereich wieder an.

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
<td align="left">Status des Alarms: Ein Alarm kann Folgendes sein: <br> <strong>Aktiv</strong>: Wenn der Alarm ausgelöst wurde und keiner bisher den Alarm bearbeitet. <br><strong>Bestätigt</strong>: Wenn jemand den Status auf "Bestätigt" gesetzt hat, um anzuzeigen, dass dieser Alarm bereits bearbeitet wird.<br><strong>Aufgehoben</strong>: Wenn entweder jemand den Status manuell auf "aufgehoben" gesetzt hat oder wenn das Gerät selbst festgestellt hat, dass das Problem behoben ist.</td>
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

* **Status**: Enthält weitere Informationen zum Alarmstatus und zeigt den Alarmtypen an. Die Typ-Information wird verwendet, um die Priorität von Alarmen zu konfigurieren, siehe [Administration“ > Priorisieren von Alarmen](/benutzerhandbuch/administration-de#reprio-alarms).
* **Änderungsprotokoll**: Gibt die Serverzeit an, zu der der Alarm erstellt wurde. Diese kann von der Gerätezeit abweichen.

#### So ändern Sie den Status eines Alarms

Um den Status eines Alarms zu ändern, bewegen Sie den Mauszeiger über die Zeile und klicken Sie auf die entsprechende Schaltfläche oder klicken Sie auf das Menüsymbol und wählen Sie den gewünschten Status.

![Alarm change status](/images/benutzerhandbuch/DeviceManagement/devmgmt-alarms-status.png)

Außerdem ist es möglich, den Status aller Alarme auf einmal auf "aufgehoben" zu setzen. Klicken Sie **Alle aufheben** in der oberen Menüleiste, um alle Alarme der gewählten Schweregrade zu löschen.

<!-- Seems to be no longer relevant
* **Additional information**: Ein Alarm kann beliebige vom Gerät bereitgestellte zusätzliche Informationen enthalten.
* **Audit-Log**: Zusammen mit dem Alarm wird eine Logdatei mit am Alarm vorgenommenen Änderungen gespeichert. So entsteht eine Alarmhistorie mit verschiedenen Daten. -->

### <a name="operation-monitoring"></a>Verwenden von Kommandos (enthält Beta-Änderungen)

Kommandos werden verwendet, um Geräte aus der Ferne zu steuern.

Sie können Kommandos für einzelne Geräte oder für alle Geräte anzeigen:

* Um die Kommandos für alle Geräte anzuzeigen, klicken Sie **Gerätesteuerung** im Menü **Übersichten** im Navigator.
* Um die Kommandos eines bestimmten Geräts anzuzeigen, wechseln Sie zur Registerkarte **Steuerung** in den Details dieses Geräts.

In der **Gerätesteuerung** gibt es zwei Arten von Kommandos, die jeweils auf einer eigenen Registerkarte angezeigt werden:

* **Einzelne Kommandos** werden auf einzelnen Geräten ausgeführt, siehe [So zeigen Sie einzelne Kommandos an](#to-view-single-operations).
* **Stapelkommandos** bestehen aus einem einzelnen Kommando, das auf einer Reihe von Geräten ausgeführt wird, siehe [So zeigen Sie Stapelkommandos an](#to-view-bulk-operations).

#### So zeigen Sie einzelne Kommandos an

Zeigen Sie die Liste der einzelnen Kommandos auf der Registerkarte **Einzelne Kommandos** an.

![Single operations list](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-single-operations-list.png)

Einzelne Kommandos können sich in einem der folgenden vier Status befinden:

| Zustand      | Beschreibung |
| :-----     | :---------- |
| AUSSTEHEND    | Das Kommando wurde gerade erstellt und wartet darauf, vom Gerät empfangen zu werden. |
| WIRD AUSGEFÜHRT  | Das Kommando wurde vom Gerät empfangen und wird ausgeführt. |
| ERFOLGREICH | Das Kommando wurde erfolgreich vom Gerät ausgeführt. |
| FEHLGESCHLAGEN     | Das Kommando konnte vom Gerät nicht ausgeführt werden. |

In jeder Zeile werden die folgenden Informationen für ein Kommando angezeigt:

| Info   | Beschreibung |
| :----- | :---------- |
| Zustand  | AUSSTEHEND, WIRD AUSGEFÜHRT, ERFOLGREICH oder FEHLGESCHLAGEN (siehe oben). |
| Name   | Name des Kommandos. |
| Gerät | Name des Geräts. Durch Klicken auf den Namen gelangen Sie zur Detailansicht des Geräts. |

Durch Klicken einer Zeile wird diese aufgeklappt und weitere Details zum Kommando angezeigt.

* **Details**: Informationen zu Namen und Status des Kommandos. Lautet der Status = FEHLGESCHLAGEN, wird die Ursache für das Fehlschlagen angegeben. Ist das einzelne Kommando Teil eines [Stapelkommandos](#to-view-bulk-operations), können Sie die Details des Stapelkommandos anzeigen.
* **Änderungshistorie**: Informationen zu den letzten Änderungen des Kommandos.

![Single operation details](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-single-operation-details.png)


Um die Liste der einzelnen Kommandos nach dem Status zu filtern, klicken Sie auf eine der Status-Schaltflächen in der oberen Menüleiste.
Klicken Sie **Alle**, um den Filter wieder zurückzusetzen.

Klicken Sie **Echtzeit** rechts in der oberen Menüleiste, um die vom Gerät empfangenen Kommandos in Echtzeit anzuzeigen.
Klicken Sie **Neu laden**, um die Liste einmal manuell zu aktualisieren.

>**Info:** Einzelne Kommandos werden in absteigender Zeitfolge aufgelistet. Kommandos werden streng nach dieser Reihenfolge ausgeführt.

#### So können Sie ein einzelnes Kommando hinzufügen und ausführen.

Einzelne Kommandos können entweder aus Stapelkommandos erstellt werden oder aus den verschiedenen Kommandotypen, die das Gerät unterstützt: [Verwalten von Firmware](/benutzerhandbuch/device-management-de/#managing-firmware-on-a-device), [Software](/benutzerhandbuch/device-management-de/#managing-software-on-a-device), [Konfigurationen](/benutzerhandbuch/device-management-de/#to-retrieve-and-apply-a-configuration-snapshot-to-a-device-which-supports-multiple-configuration-types) etc. 

Wenn Sie ein [Stapelkommando](#to-add-a-bulk-operation) erstellen, werden die einzelnen Kommandos, die im Stapelkommando abgearbeitet werden, ebenfalls zur Liste der einzelnen Kommandos hinzugefügt.

Kommandos für ein bestimmtes Gerät können auch in der Registerkarte **Shell** des Geräts erstellt und ausgeführt werden, siehe [Gerätedetails > Shell](/benutzerhandbuch/device-management-de#shell).

>**Wichtig:** Wenn Sie Cumulocity IoT zum Fernsteuern von Maschinen verwenden, vergewissern Sie sich, dass alle Fernkommandos den Sicherheitsstandards entsprechen und keine Gefahr darstellen.

#### So brechen Sie ausstehende Kommandos ab

Sie können bestimmte ausstehende Kommandos oder alle ausstehenden einzelnen Kommandos gleichzeitig abbrechen.

Um ein bestimmtes ausstehendes Kommando abzubrechen, klicken Sie auf das Menüsymbol rechts neben dem Eintrag des betreffenden einzelnen Kommandos und wählen Sie **Vorgang abbrechen**.

Um alle ausstehenden Kommandos gleichzeitig abzubrechen, klicken Sie auf **Mehr...** rechts in der oberen Menüleiste und wählen Sie **Alle ausstehenden Vorgänge abbrechen**.
Alternativ können Sie die Liste der einzelnen Kommandos nach dem Status AUSSTEHEND filtern, und anschließend auf **Alle abbrechen** klicken.

#### So erstellen Sie eine Regel für ein einzelnes Kommando

Klicken Sie auf das Menüsymbol rechts neben dem einzelnen Kommando, für das Sie eine Smart Rule erstellen möchten, und wählen Sie **Smart Rule erstellen**.

Weitere Schritte werden unter [Cockpit > Smart Rules > So erstellen Sie eine Smart Rule](/benutzerhandbuch/cockpit-de/#create-rules) beschrieben.

#### So zeigen Sie Stapelkommandos an

Zeigen Sie die Liste der Stapelkommandos in der Registerkarte **Stapelkommandos** an.

![Bulk operations list](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operations-list.png)

Stapelkommandos besitzen einen Kommandotyp und einen Status.

Mit Hilfe des [Stapelkommando-Assistenten](#to-add-a-bulk-operation-using-the-wizard) können Sie Stapelkommandos der folgenden Kommandotypen hinzufügen:

| Kommandotyp          | Beschreibung |
| :---------------------- | :---------- |
| Konfigurationsaktualisierung    | Das Stapelkommando aktualisiert die Konfiguration der ausgewählten Geräte. |
| Firmware-Aktualisierung         | Das Stapelkommando aktualisiert die Firmware der ausgewählten Geräte. |
| Software Update         | Das Stapelkommando aktualisiert die Software der ausgewählten Geräte. |
| Geräteprofil anwenden    | Das Stapelkommando wendet auf den ausgewählten Geräten ein Geräteprofil an. |

Stapelkommandos können auch andere Kommandotypen besitzen, beispielsweise wenn Sie [ein einzelnes Kommando als Stapelkommando planen](#to-schedule-a-single-operation-as-bulk-operation) und der Typ des einzelnen Kommandos sich von dem des Stapelkommandos unterscheidet.

Stapelkommandos können sich in einem der folgenden Status befinden:

| Zustand                   | Beschreibung |
| :---------------------- | :---------- |
| GEPLANT               | Das Stapelkommando wurde angelegt und wird bis zum geplanten Zeitpunkt zurückgestellt. |
| WIRD AUSGEFÜHRT               | Das Stapelkommando wird ausgeführt. |
| ABGEBROCHEN               | Das Stapelkommando wurde angelegt, aber vor dem geplanten Zeitpunkt abgebrochen. |
| MIT FEHLERN ABGESCHLOSSEN | Das Stapelkommando wurde bei einigen Geräten mit Fehlern abgeschlossen. |
| ERFOLGREICH ABGESCHLOSSEN  | Das Kommando wurde auf allen Geräten erfolgreich ausgeführt. |

In jeder Zeile werden die folgenden Informationen für ein Stapelkommando angezeigt:

| Info   | Beschreibung |
| :----- | :---------- |
| Zustand  | GEPLANT, WIRD AUSGEFÜHRT, ABGEBROCHEN, MIT FEHLERN ABGESCHLOSSEN, ERFOLGREICH ABGESCHLOSSEN (siehe oben). |
| Name   | Name des Kommandos. |
| Fortschrittsanzeige | Nur für Stapelkommandos, die ausgeführt werden oder abgeschlossen sind. Zeigt den Fortschritt des Kommandos in Prozent an. |
| Start- und Enddatum | Nur für Stapelkommandos, die ausgeführt werden oder abgeschlossen sind. Bei Stapelkommandos, die ausgeführt werden, ist das Enddatum ein geschätzter Wert auf Basis der Stapelkommando-Einstellungen. |
| Schaltfläche Aktualisieren | Nur für Stapelkommandos, die ausgeführt werden. Aktualisiert die Fortschrittsanzeige |

Durch Klicken auf die Pfeil-Schaltfläche auf der rechten Seite können Sie die Zeile aufklappen und weitere Details zum Stapelkommando anzeigen.

* **Details**: Informationen zu Startdatum, Verzögerung, Status und Ergebnis des Stapelkommandos. Das Ergebnis listet die Anzahl der erfolgreich abgeschlossenen, fehlgeschlagenen und ausstehenden Kommandos auf.
* **Kommando**: Informationen zum Kommando in Form eines JSON-Objekts.
* **Kommandos**: Nur verfügbar für Stapelkommandos, die ausgeführt werden oder abgeschlossen sind. Informationen zu Status und Geräten von einzelnen Kommandos, die im Stapelkommando abgearbeitet werden. Kann nach Status gefiltert werden.

![Bulk operation details](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operation-details.png)

Um die Liste der Stapelkommandos nach Kommandotyp zu filtern, klicken Sie auf die Auswahlliste in der Menüleiste, wählen Sie eine Reihe von Kommandotypen und klicken Sie auf **Anwenden**.
Um den Filter wieder zurückzusetzen, wählen Sie **Alle** in der Auswahlliste und klicken Sie erneut auf **Anwenden**.

Um die Liste der Stapelkommandos nach dem Status zu filtern, klicken Sie auf eine der Status-Schaltflächen in der oberen Menüleiste.
Klicken Sie **Alle**, um den Filter wieder zurückzusetzen.

Um beide Filter zurücksetzen, klicken Sie **Filter zurücksetzen** am Ende der Liste (nur sichtbar, wenn Filter angewendet wurden).

>**Info:** Stapelkommandos, die vor der Version 10.7.0 erstellt wurden, sind von einer Gruppe abhängig und können immer noch angezeigt werden. Wählen Sie dazu die gewünschte Gruppe und klicken Sie auf die Registerkarte **Stapelkommandos**.

>![Old bulk operations](/images/benutzerhandbuch/DeviceManagement/devmgmt-bulkoperations.png)

#### <a name="bulk-operations"></a>So fügen Sie ein Stapelkommando hinzu

Es gibt zwei Möglichkeiten, ein Stapelkommando anzulegen:

* Verwenden Sie den [Stapelkommando-Assistenten](#to-add-a-bulk-operation-using-the-wizard)
* [Planen Sie ein einzelnes Kommando als Stapelkommando](#to-schedule-a-single-operation-as-bulk-operation)

##### So fügen Sie ein Stapelkommando mit Hilfe des Assistenten hinzu

Führen Sie folgende Schritte aus:

1. Klicken Sie in der Registerkarte **Stapelkommandos** rechts in der oberen Menüleiste auf **Neues Bulk-Kommando**.
2. Wählen Sie im nächsten Dialog einen Kommandotyp.
    ![Select a bulk operation type](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operation-type.png)
3. Im darauf folgenden Assistenten gibt es vier Schritte. Ja nach Gerätetyp unterscheiden sich die ersten beiden Schritte:
  * **Konfigurationsaktualisierung**
      * Wählen Sie eine Konfiguration aus der Liste aus. Die Liste kann nach Konfigurationstyp oder Konfigurationsnamen gefiltert werden. Klicken Sie auf **Weiter**.
      * Überprüfen Sie die Vorschau der gewählten Konfiguration. Klicken Sie auf **Weiter**.
  * **Firmware-Aktualisierung**
      * Wählen Sie eine Firmware aus der Liste aus. Die Liste kann nach Firmware-Namen gefiltert werden. Klicken Sie auf **Weiter**.
      * Erweitern Sie einen Versionseintrag und wählen Sie einen Patch. Klicken Sie auf **Weiter**.
  * **Software Update**
      * Erweitern Sie einen Softwareeintrag aus der Liste und wählen Sie eine Version, anschließend wählen Sie aus der Auswahlliste aus, ob Sie die Software installieren, aktualisieren oder entfernen möchten. Die Liste der verfügbaren Software kann nach Gerätetyp oder Softwarenamen gefiltert werden. Klicken Sie auf **Weiter**.
      * Bestätigen Sie die Auswahl und klicken Sie auf **Weiter**.
  * **Geräteprofil anwenden**
      * Wählen Sie ein Geräteprofil aus der Liste aus. Die Liste kann nach Gerätetyp oder Profilnamen gefiltert werden. Klicken Sie auf **Weiter**.
      * Bestätigen Sie die Auswahl und klicken Sie auf **Weiter**.
4. Wählen Sie Zielgeräte, indem Sie Filter auf die in Seiten aufgeteilte Liste aller Geräte anwenden. Sie können nach Status, Namen, Typ, Modell, Gruppe, Registrierungsdatum und Alarmen filtern. Sie können mehrere Filter anwenden. Um einen Filter anzuwenden, klicken Sie auf die Spaltenüberschrift, wählen Sie Ihre Filteroptionen im Kontextmenü und klicken Sie auf **Anwenden**. Sie können alle Filter zurücksetzen, indem Sie oberhalb der Liste auf **Filter zurücksetzen** klicken. Für die Kommandotypen "Konfigurationsaktualisierung", "Software Update" und "Geräteprofil anwenden" ist die Liste bereits nach dem entsprechenden Gerätetyp gefiltert. Klicken Sie auf **Weiter**.
    ![Bulk operation wizard, step 3](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operation-wizard-step3.png)
5. Wählen Sie eine Startzeit und eine Verzögerung. Die Verzögerung ist die Zeitspanne zwischen den einzelnen Kommandos des Stapelkommandos und kann in Sekunden oder Millisekunden angegeben werden. Klicken Sie auf **Bulk-Kommando planen**, um das Stapelkommando anzulegen.
    ![Bulk operation wizard, step 4](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operation-wizard-step4.png)

##### So planen Sie ein einzelnes Kommando als Stapelkommando

Es gibt zwei Möglichkeiten, ein einzelnes Kommando als Stapelkommando zu planen: entweder auf der Registerkarte **Einzelne Kommandos** oder auf der Registerkarte **Steuerung** eines bestimmten Geräts.
Führen Sie folgende Schritte aus:

1. Klicken Sie auf das Menüsymbol rechts neben dem einzelnen Kommando, das sie als Stapelkommando planen möchten, und klicken Sie anschließend auf **Als Bulk-Kommando planen**.
2. Der darauf folgende Assistent ähnelt dem neuen Stapelkommando-Assistenten, der unter [So fügen Sie ein Stapelkommando mit Hilfe des Assistenten hinzu](#to-add-a-bulk-operation-using-the-wizard) beschrieben wird. Allerdings gibt es nur zwei Schritte, da der Kommandotyp von dem als Stapelkommando geplanten Kommando abgeleitet wird. Lesen Sie die Beschreibung des [vollständigen Assistenten](#to-add-a-bulk-operation-using-the-wizard) und folgen Sie den Anweisungen.

#### <a name="bulk-operations"></a>So bearbeiten Sie den Zeitplan von Stapelkommandos

Sie können nur den Zeitplan von Stapelkommandos mit dem Status GEPLANT bearbeiten. 

1. Klicken Sie auf das Menüsymbol rechts neben dem Stapelkommando, das Sie bearbeiten möchten, und anschließend auf **Zeitplan bearbeiten**.
3. Im darauf folgenden Dialog können Sie die Werte für **Startzeit** und **Verzögerung** ändern.
5. Klicken Sie **Neu planen**, um Ihre Einstellungen zu speichern.

Die Änderungen werden entsprechend auf das Stapelkommando angewendet.

![Reschedule bulk operations](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk-operations-reschedule.png)

#### <a name="bulk-operations"></a>So brechen Sie Stapelkommandos ab

Sie können nur Stapelkommandos mit dem Status GEPLANT oder WIRD AUSGEFÜHRT abbrechen.
Wenn ein Stapelkommando gerade ausgeführt wird, können Sie es nur solange abbrechen, bis alle einzelnen Kommandos angelegt wurden.
Auf diese Weise können Sie die Erstellung der verbleibenden einzelnen Kommandos abbrechen.

Klicken Sie auf das Menüsymbol rechts neben dem Stapelkommando, das Sie abbrechen möchten, und anschließend auf **Bulk-Kommando abbrechen**.

#### So führen Sie fehlgeschlagene Kommandos erneut aus

Sie können die fehlgeschlagenen Kommandos eines Stapelkommandos, das ausgeführt wird oder mit Fehlern abgeschlossen wurde, erneut ausführen.

Erweitern Sie dazu das gewünschte Stapelkommando und klicken Sie unter **Kommandos** auf **Fehlgeschlagene Kommandos erneut ausführen**, um mit allen fehlgeschlagenen Kommandos ein neues Stapelkommmando zu erstellen.
Um ein einzelnes Kommando erneut auszuführen, bewegen sie den Mauszeiger über das Kommando und klicken Sie auf **Kommando erneut ausführen**.
Dadurch wird ein neues einzelnes Kommando angelegt.

Bei einem Stapelkommando, das mit Fehlern abgeschlossen wurde, können Sie auch auf das Menüsymbol rechts neben dem Kommando und anschließend auf **Fehlgeschlagene Kommandos erneut ausführen** klicken.

### <a name="events-all"></a>Fehlerbehebung von Geräten

Eine Fehlerbehebung auf detaillierterer Ebene kann bei Geräten mit Hilfe von Ereignissen durchgeführt werden. Ereignisse sind von Geräten gesendete Low-Level-Nachrichten, die üblicherweise für die anwendungsspezifische Verarbeitung verwendet werden. So sendet zum Beispiel ein Verkaufsautomat seine Echtzeitverkäufe in Form von Ereignissen.

#### So zeigen Sie Ereignisse an

Cumulocity IoT zeigt Ereignisse für einzelne Geräte sowie für alle Geräte an:

* Um die Ereignisse für alle Geräte anzuzeigen, klicken Sie **Ereignisse** im Menü **Übersichten** des Navigators.
* Um die Ereignisse eines bestimmten Geräts anzuzeigen, wechseln Sie zur Registerkarte **Ereignisse** in den Details dieses Geräts.

![Events](/images/benutzerhandbuch/DeviceManagement/devmgmt-events.png)

Standardmäßig werden die Ereignisse in Echtzeit angezeigt, sobald sie vom Gerät empfangen werden. Um die Echtzeitaktualisierung zu deaktivieren, klicken Sie **Echtzeit** rechts in der oberen Menüleiste.

Für jedes Ereignis werden die folgenden Informationen bereitgestellt:

|Info|Beschreibung|
|:---|:---|
|Zeitstempel|Zeitstempel, wann das Ereignis ausgeführt wurde.
|Name|Name des Ereignisses.
|Gerät|Name des Geräts, das das Ereignis sendet. Durch Klicken auf den Namen gelangen Sie zur Detailansicht des Geräts.

In der Ereignisliste wird der letzte Eintrag ganz oben angezeigt.

Durch Klicken einer Zeile wird diese aufgeklappt und weitere Details zum Ereignis angezeigt (wie der Typ und die Position des Geräts).

Da Geräte möglicherweise große Datenmengen senden, können Sie die angezeigten Daten nach Datum filtern.

Wählen Sie in den Feldern in der oberen Menüleiste ein Startdatum und ein Enddatum und klicken Sie **Anwenden**, um den Filter anzuwenden. Klicken Sie **Aufheben**, um den Filter wieder zurückzusetzen.
