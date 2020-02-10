---
weight: 40
title: Überwachen und Steuern von Geräten
layout: redirect
---


### <a name="map"></a>Lokalisieren von Geräten

Cumulocity bietet die Möglichkeit, den Standort aller Geräte in Ihrem Konto auf einer Karte anzuzeigen.

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

Die oberen Pfeile symbolisieren die Sendeverbindungen (Verkehr vom Gerät zu Cumulocity). Der Status der Sendeverbindungen kann einer der folgenden sein:

* Grüner Pfeil - online (Daten wurden im erwarteten Intervall gesendet)
* Roter Pfeil - offline (Daten wurden nicht im erwarteten Intervall gesendet)
* Grauer Pfeil - unbekannt oder nicht überwacht (kein Intervall konfiguriert)

Wenn Sie den Mauszeiger über einen Pfeil bewegen, wird der Zeitstempel der letzten Anfrage vom Gerät an den Server angezeigt. 

Wenn ein Gerät als offline erkannt wird (sendet keine Daten im erwarteten Intervall und der obere Pfeil wechselt auf rot), wird ein "UnavailabilityAlarm" für das Gerät mit der folgenden Nachricht erzeugt: "Im erforderlichen Zeitraum wurden keine Daten vom Gerät empfangen."

**Push-Verbindungen**

Der untere Pfeil symbolisiert die Push-Verbindungen (von Cumulocity zum Gerät). Der Status der Push-Verbindungen kann einer der folgenden sein:

* Grüner Pfeil - online (Verbindung hergestellt)
* Roter Pfeil - offline (Verbindung nicht hergestellt)
* Grauer Pfeil - nicht überwacht

Push-Verbindung bedeutet Verbindung von Cumulocity zu /device/control/notifications API, **nicht** zu /device/control/realtime API.

>**Info**: Die Verbindungsüberwachung erfolgt nicht in Echtzeit. Dies bedeutet, dass sich der angezeigte Verbindungsstatus nach dem Ausschalten eines Geräts nicht sofort ändert. Je nach verwendetem Protokoll für die Push-Verbindungsüberwachung kann dies einige Minuten dauern.

**Wartungsmodus**

Außerdem kann sich ein Gerät im Wartungsmodus befinden. Dies wird durch ein Werkzeug-Symbol in der Spalte **Status** gekennzeichnet. Dieser spezielle Verbindungsstatus zeigt an, dass das Gerät gerade gewartet wird und nicht überwacht werden kann. Während ein Gerät gewartet wird, werden keine Alarme für dieses Gerät ausgelöst. 

In der Karte **Verbindungsüberwachung** in der Registerkarte **Info** eines Geräts können Sie den Wartungsmodus für dieses Gerät durch einen Umschalter ein- oder ausschalten, siehe unten. 


#### So überwachen Sie die Verbindung eines bestimmten Geräts

Navigieren Sie zur Registerkarte **Info** eines bestimmten Geräts, um dessen Verbindungen zu überwachen. Unter **Gerätestatus** wird der Verbindungsstatus für das Gerät angezeigt. 

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-deviceinfostatus.png" alt="Device Status">

Unter dem Status für die Sende- und Push-Verbindungen wird der Zeitpunkt der letzten Kommunikation angezeigt. 

> **Info**: "Letzte Kommunikation" und "Letzte Aktualisierung" sind zwei vollkommen verschiedene Zeitstempel. "Letzte Kommunikation" zeigt an, wann ein Gerät das letzte mal Daten gesendet hat. "Letzte Aktualisierung" zeigt an, wann der Stammdateneintrag des Geräts das letzte mal aktualisiert wurde. Diese Aktualisierung kann durch das Gerät selbst, über die Web-Benutzerschnittstelle oder durch eine andere Anwendung erfolgt sein.

Im Feld **Erwartetes Sendeintervall** können Sie ein Intervall angeben. Dieser Parameter legt fest, wie häufig Sie erwarten, von dem Gerät zu hören. Wenn Sie dieses Intervall etwa auf 60 setzen, erwarten Sie, dass das Gerät mindestens einmal pro Stunde mit Cumulocity kommuniziert. Das Intervall wird entweder vom Gerät selbst festgelegt, basierend auf den Kenntnissen des Geräts darüber, wie oft es versuchen wird, Daten zu senden, oder es wird manuell von Ihnen festgelegt.

Wenn ein Intervall angegeben ist, befindet sich darunter der Umschalter **Wartung**.

Mit dem Umschalter **Wartung** können Sie den Wartungsmodus für das Gerät ein- oder ausschalten. Dies wird unmittelbar im Verbindungsstatus angezeigt. 

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-deviceinfomaintenance.png" alt="Device status maintenance">

### <a name="monitoring-services"></a>Serviceüberwachung

Cumulocity unterscheidet zwischen Verbindungsüberwachung und Serviceüberwachung. Verbindungsüberwachung, wie im vergangenen Abschnitt beschrieben, zeigt nur an, ob ein Gerät mit Cumulocity kommuniziert, was nicht automatisch auch bedeutet, dass das Gerät betriebsbereit ist.

Serviceüberwachung dagegen zeigt an, ob ein Gerät in Betrieb ist. Ein Verkaufsautomat ist beispielsweise in Betrieb, wenn er bereit ist, Waren zu verkaufen. Ein Verkaufsautomat kann ohne eine Verbindung zu Cumulocity gegen Bargeld Waren verkaufen. Aus kaufmännischer Sicht ist der Automat also betriebsbereit. Ähnlich können Geräte hinter einem Gateway weiterarbeiten, auch wenn das Gateway ausgeschaltet wurde.

Cumulocity betrachtet ein Gerät als betriebsbereit, wenn es für das Gerät keine kritischen aktiven Alarme gibt. Dies wird entsprechend des Zeitanteils, den Alarme aktiv waren, dargestellt. Hat ein Gerät innerhalb eines bestimmten Zeitraums keinerlei kritische Alarme, war es 100% betriebsbereit. Gab es während der Hälfte der Zeit kritische aktive Alarme, war es 50% betriebsbereit.

Ist ein Gerät offline, nimmt Cumulocity standardmäßig an, 

* dass das Gerät während des Verbindungsabbruchs weiterhin in Betrieb bleibt, wenn dies zuvor der Fall war.
* dass das Gerät während des Verbindungsabbruchs weiterhin nicht in Betrieb ist, wenn dies zuvor der Fall war.

Es gibt möglicherweise Ausnahmen zu dieser Regel. Wenn Ihr Verkaufsautomat beispielsweise nur mit bargeldloser Bezahlung funktioniert, bedeutet ein Verbindungsabbruch, dass der Automat nichts mehr verkaufen kann und damit nicht mehr betriebsbereit ist. In diesem Fall müssen Nichtverfügbarkeits-Alarme in der ["Administration"-Anwendung](/benutzerhandbuch/administration-de#reprio-alarms) eingestellt werden, die den Schweregrad KRITISCH statt des Schweregrads WICHTIG haben.

Cumulocity zeigt die Serviceverfügbarkeit für einzelne Geräte sowie für alle Geräte an. 

#### So zeigen Sie die Serviceüberwachung eines bestimmten Geräts an

Klicken Sie auf die Registerkarte **Serviceüberwachung** in den Details eines bestimmten Geräts, um die Serviceüberwachung dieses Geräts zu überprüfen.

#### So zeigen Sie die Serviceüberwachung für alle Geräte an

Klicken Sie **Serviceüberwachung** im Menü **Geräte** des Navigators, um den Gesamtservice aller Geräte anzuzeigen.
 
![Service monitoring](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-servicemonitoring.png)

Die Seite **Serviceüberwachung** zeigt die prozentuale Verfügbarkeit aller Geräte während des letzten Tags, der letzten Woche und des letzten Monats an. 


### <a name="alarm-monitoring"></a>Verwenden von Alarmen

Geräte können Alarme auslösen, um anzuzeigen, dass ein Problem besteht, das einer Handlung bedarf. 

#### So zeigen Sie Alarme an

Cumulocity zeigt Alarme für einzelne Geräte sowie für alle Geräte an.

* Um die Alarme für alle Geräte zu überprüfen, klicken Sie **Alarme** im Menü **Übersichten** des Navigators. 
* Um die Alarme eines bestimmten Geräts zu überprüfen, wechseln Sie zur Registerkarte **Alarm** in den Details dieses Geräts.

![Alarms page](/images/benutzerhandbuch/DeviceManagement/devmgmt-alarms.png)

Standardmäßig 

* werden nur ungelöste Alarme gezeigt. Wenn Sie rechts in der oberen Menüleiste  **Aufgehobene Alarme anzeigen** aktivieren, sehen Sie die gesamte Alarmhistorie.
* werden Alarme in Echtzeit angezeigt, sobald sie vom Gerät gemeldet werden. Klicken Sie **Echtzeit** in der oberen Menüleiste, um Echtzeitaktualisierungen zu deaktivieren.

Alarme werden nach Schweregraden klassifiziert. Cumulocity enthält vier verschiedene Alarmtypen:

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

|Info|Beschreibung|
|:---|:---|
|Schweregrad|KRITISCH, WICHTIG, WENIGER WICHTIG oder WARNUNG (siehe oben).
|Anzahl|Wie oft der Alarm von dem Gerät gesendet wurde. Es kann jeweils nur ein Alarm pro Typ für ein Gerät aktiv sein. Wenn ein weiterer Alarm des gleichen Typs auftritt, wird die Zahl um 1 erhöht.
|Beschreibung|Optionaler Text zur Beschreibung des Alarms.
|Status|Status des Alarms: Ein Alarm kann Folgendes sein: <br/> **Aktiv**: Wenn der Alarm ausgelöst wurde und keiner bisher den Alarm bearbeitet. <br/>**Bestätigt**: Wenn jemand den Status auf "Bestätigt" gesetzt hat, um anzuzeigen, dass dieser Alarm bereits bearbeitet wird.<br/>**Aufgehoben**: Wenn entweder jemand den Status manuell auf "aufgehoben" gesetzt hat oder wenn das Gerät selbst festgestellt hat, dass das Problem behoben ist.
|Letztes Auftreten|Zeitstempel für das letzte Auftreten des Alarms (Gerätezeit).
|Gerät|Name des Geräts. Durch Klicken auf den Namen gelangen Sie zur Detailansicht des Geräts.

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

### <a name="operation-monitoring"></a>Verwenden von Kommandos

Kommandos werden verwendet, um Geräte aus der Ferne zu steuern. 

#### So zeigen Sie Kommandos an

Sie können Kommandos für einzelne Geräte oder für alle Geräte anzeigen:

* Um die Kommandos für alle Geräte anzuzeigen, klicken Sie **Gerätesteuerung** im Menü **Übersichten** im Navigator.
* Um die Kommandos eines bestimmten Geräts anzuzeigen, wechseln Sie zur Registerkarte **Steuerung** in den Details dieses Geräts.

![Device Control](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol.png)

Kommandos können sich in einem der folgenden vier Status befinden:

|Zustand|Beschreibung|
|:---|:--|
|AUSSTEHEND|Das Kommando wurde gerade erstellt und wartet darauf, vom Gerät empfangen zu werden.
|WIRD AUSGEFÜHRT|Das Kommando wurde vom Gerät empfangen und wird ausgeführt.
|ERFOLGREICH|Das Kommando wurde erfolgreich vom Gerät ausgeführt.
|FEHLGESCHLAGEN|Das Kommando konnte vom Gerät nicht ausgeführt werden. Für jedes Kommando werden die folgenden Informationen bereitgestellt:

In jeder Zeile werden die folgenden Informationen für ein Kommando angezeigt:

|Info|Beschreibung|
|:---|:---|
|Status|AUSSTEHEND, WIRD AUSGEFÜHRT, ERFOLGREICH oder FEHLGESCHLAGEN (siehe oben).
|Name|Name des Kommandos.
|Gerät|Name des Geräts. Durch Klicken auf den Namen gelangen Sie zur Detailansicht des Geräts.

Durch Klicken einer Zeile wird diese aufgeklappt und weitere Details zum Kommando angezeigt.

* **Details**: Nähere Beschreibung und Status des Kommandos. Lautet der Status = ABGEBROCHEN, wird die Ursache für das Fehlschlagen angegeben. 
* **Änderungshistorie**: Informationen zu den letzten Änderungen des Kommandos.

![Operation Details](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-history.png)


Durch Klicken der Status-Schaltflächen oben auf der Seite werden die entsprechenden Kommandos ausgeblendet. Erneutes Klicken der entsprechenden Schaltfläche zeigt die Kommandos wieder an.

Klicken Sie **Echtzeit** rechts in der oberen Menüleiste, um die vom Gerät empfangenen Kommandos in Echtzeit anzuzeigen.

>**Info**: Kommandos werden in absteigender Zeitfolge aufgelistet. Kommandos werden streng nach dieser Reihenfolge ausgeführt.

#### So erstellen Sie Kommandos und führen Sie aus

Kommandos für ein bestimmtes Gerät werden in der Registerkarte **Shell** des Geräts ausgeführt, siehe [Gerätedetails > Shell](/benutzerhandbuch/device-management-de#shell).

>**Wichtig**: Wenn Sie Cumulocity IoT zum Fernsteuern von Maschinen verwenden, vergewissern Sie sich, dass alle Fernkommandos den Sicherheitsstandards entsprechen und keine Gefahr darstellen.

##### <a name="bulk-operations"></a>So führen Sie Stapelkommandos aus

Für die leichtere Bearbeitung von Geräten bietet Cumulocity Stapelkommandos. Mit Stapelkommandos können Sie ein Kommando in einem Schritt für jedes Gerät in einer Gruppe ausführen.

Um ein Stapelkommando für eine Gruppe auszuführen, führen Sie folgende Schritte aus:

1. Wählen Sie ein Gerät und öffnen Sie die Registerkarte **Steuerung**.
2. Erstellen Sie ein Kommando.
3. Bewegen Sie den Mauszeiger über das Kommando, das Sie ausführen möchten.
4. Klicken Sie auf das Menüsymbol und anschließend auf **Für gesamte Gruppe ausführen**.

Das Kommando wird für alle Geräte in der Gruppe ausgeführt.

![Execute bulk operations](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk.png)

Um den Status und Fortschritt der Kommandos zu verfolgen, wählen Sie die entsprechende Gruppe im Navigator und wechseln Sie zur Registerkarte **Stapelkommandos**.

![Bulk operations tab](/images/benutzerhandbuch/DeviceManagement/devmgmt-bulkoperations.png)

##### <a name="bulk-operations"></a>So bearbeiten Sie Stapelkommandos

1. Bewegen Sie den Mauszeiger über das Stapelkommando, das Sie bearbeiten möchten, klicken Sie auf das Menüsymbol und anschließend auf **Zeitplan bearbeiten**.
3. Im darauf folgenden Dialog können Sie die Werte für **Startzeit** und **Verzögerung** ändern.
4. Um Kommandodetails zu ändern, klicken Sie **Anzeigen Kommandodetails**. 
5. Klicken Sie **Neu planen**, um Ihre Einstellungen zu speichern. 

Die Änderungen werden entsprechend auf das Stapelkommando angewendet.

![Edit bulk operations](/images/benutzerhandbuch/DeviceManagement/devmgmt-bulkoperations-reschedule.png)

##### <a name="bulk-operations"></a>So löschen Sie Stapelkommandos

Bewegen Sie den Mauszeiger über das Stapelkommando, das Sie löschen möchten, klicken Sie auf das Menüsymbol und anschließend auf **Vorgang abbrechen**.

### <a name="events-all"></a>Fehlerbehebung von Geräten

Eine Fehlerbehebung auf detaillierterer Ebene kann bei Geräten mit Hilfe von Ereignissen durchgeführt werden. Ereignisse sind von Geräten gesendete Low-Level-Nachrichten, die üblicherweise für die anwendungsspezifische Verarbeitung verwendet werden. So sendet zum Beispiel ein Verkaufsautomat seine Echtzeitverkäufe in Form von Ereignissen. 

#### So zeigen Sie Ereignisse an

Cumulocity zeigt Ereignisse für einzelne Geräte sowie für alle Geräte an: 

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

Wählen Sie in den Feldern in der oberen Menüleiste ein Startdatum und ein Enddatum und klicken Sie **Filtern**, um den Filter anzuwenden. Klicken Sie **Aufheben**, um den Filter wieder zurückzusetzen.