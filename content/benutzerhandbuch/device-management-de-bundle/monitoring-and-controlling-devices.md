---
weight: 40
title: Überwachen und Steuern von Geräten
layout: redirect
---


### <a name="map"></a>Lokalisieren von Geräten

Cumulocity bietet die Möglichkeit, den Standort aller Geräte in Ihrem Konto auf eine Karte anzuzeigen. 

Klicken Sie **Karte** im Menü **Geräte** im Navigator, um eine Karte zu öffnen, die alle Geräte in Echtzeit anzeigt. 

Die Geräte sind als "Pins" dargestellt. Klicken Sie auf einen Pin, um den Namen des entsprechenden Geräts anzuzeigen. Klicken Sie auf den Gerätenamen, um zur Ansicht der Gerätedetails zu wechseln.  

![Device map](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-map.png)

### <a name="connection-monitoring"></a>Verbindungsüberwachung

Im Device Management können Sie die Verbindungen zu Ihren Geräten überwachen. 

Dies kann auf der Ebene einzelner Geräte erfolgen (siehe unten) oder für mehrere Geräte in einer Liste.

Um Verbindungen für mehrere Geräte zu überwachen, öffnen Sie eine beliebige Geräteliste. 

Der Verbindungsstatus wird durch Pfeile in der Spalte **Status** in der Geräteliste angezeigt. 

![Connection status](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-connectionstatus.png)

#### Sendeverbindungen

Die oberen Pfeile symbolisieren die Sendeverbindungen (Verkehr vom Gerät zu Cumulocity). Der Status der Sendeverbindungen kann einer der folgenden sein:

* Grüner Pfeil - online (Daten wurden im erwarteten Intervall gesendet)
* Roter Pfeil - offline (Daten wurden nicht im erwarteten Intervall gesendet)
* Grauer Pfeil - unbekannt oder nicht überwacht (kein Intervall konfiguriert)

Wenn Sie den Mauszeiger über einen Pfeil bewegen, wird der Zeitstempel der letzten Anfrage vom Gerät an den Server angezeigt. 

Wenn ein Gerät als offline erkannt wird, (sendet keine Daten im erwarteten Intervall und der obere Pfeil wechselt auf rot), wird ein  "UnavailabilityAlarm" für das Gerät erzeugt mit der Nachricht "Im erwarteten Intervall wurden keine Daten vom Gerät empfangen.".

#### Push-Verbindungen

Der untere Pfeil symbolisiert die Push-Verbindungen (von Cumulocity zum Gerät). Der Status der Push-Verbindungen kann einer der folgenden sein:

* Grüner Pfeil - online (Verbindung hergestellt)
* Roter Pfeil - offline (Verbindung nicht hergestellt)
* Grauer Pfeil - nicht überwacht

>**Info**: Bei den Push-Verbindungen handelt es sich um die Verbindungen von Cumulocity zur "/devicecontrol/notifications" API, **nicht** zur Echtzeit-API.

#### Wartungsmodus

Außerdem kann sich ein Gerät im Wartungsmodus befinden. Dies wird durch ein Werkzeug-Symbol in der Spalte **Status** gekennzeichnet. Dieser spezielle Verbindungsstatus zeigt an, dass das Gerät gerade gewartet wird und nicht überwacht werden kann. Während ein Gerät gewartet wird, werden keine Alarme für dieses Gerät ausgelöst. 

In der Karte **Verbindungsüberwachung** in der Registerkarte **Info** eines Geräts können Sie den Wartungsmodus für dieses Gerät durch einen Schieberegler ein- oder ausschalten.


#### Verbindungsüberwachung in der Registerkarte Info

Navigieren Sie zur Registerkarte **Info**, um die Verbindungen eines bestimmten Geräts zu überwachen. Unter **Gerätestatus** wird der Verbindungsstatus für das Gerät angezeigt. 

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-connectionstatusdevicede.png" alt="Gerätestatus">

Unter dem Status für die Sende- und Push-Verbindungen wird der Zeitpunkt der letzten Kommunikation angezeigt. 

> **Info**: "Letzte Kommunikation" und "Letzte Aktualisierung" sind zwei vollkommen verschiedene Zeitstempel. "Letzte Kommunikation" zeigt an, wann ein Gerät das letzte mal Daten gesendet hat. "Letzte Aktualisierung" zeigt an, wann der Stammdateneintrag des Geräts das letzte mal aktualisiert wurde. Diese Aktualisierung kann durch das Gerät selbst, über die Web-Benutzerschnittstelle oder durch eine andere Anwendung erfolgt sein. 
> 
Im Feld **Erwartetes Intervall** können Sie ein Intervall angeben. Dieser Parameter legt fest, wie häufig Sie erwarten, von dem Gerät zu hören. Wenn Sie dieses Intervall etwa auf 60 setzen, erwarten Sie, dass das Gerät mindestens einmal pro Stunden mit Cumulocity kommuniziert. Das Intervall wird entweder vom Gerät selbst festgelegt, basierend auf den Kenntnissen des Geräts darüber, wie oft es versuchen wird, Daten zu senden, oder es wird manuell von Ihnen festgelegt. 

Wenn ein Intervall angegeben ist, befindet sich darunter der Schieberegler **Wartung**.

Mit dem Schieberegler **Wartung** können Sie den Wartungsmodus für das Gerät ein- oder ausschalten. Dies wird unmittelbar im Verbindungsstatus angezeigt.   

<img src="/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-devicemaintenancemodede.png" alt="Wartungsmodus">

>**Info**: Die Verbindungsüberwachung findet nicht in Echtzeit statt. Dies führt dazu, dass der Verbindungsstatus sich nicht direkt ändert, sobald ein Gerät ausgeschaltet wird. Abhängig vom Netzwerk kann es bis zu 20 Minuten dauern, bis eine unterbrochene Verbindung erkannt wird, da das Netzwerk eine bestimmte Zeit lang versuchen wird, Daten zu senden.

### <a name="monitoring-services"></a>Serviceüberwachung

Cumulocity unterscheidet zwischen Verbindungsüberwachung und Serviceüberwachung. Verbindungsüberwachung, wie im vergangenen Abschnitt beschrieben, zeigt nur an, ob ein Gerät mit Cumulocity kommuniziert, was nicht automatisch auch bedeutet, dass das Gerät betriebsbereit ist.

Serviceüberwachung dagegen zeigt an, ob ein Gerät in Betrieb ist. Ein Verkaufsautomat ist beispielsweise in Betrieb, wenn er bereit ist, Waren zu verkaufen. Ein Verkaufsautomat kann ohne eine Verbindung zu Cumulocity gegen Bargeld Waren verkaufen. Aus kaufmännischer Sicht ist der Automat also betriebsbereit. Ähnlich können Geräte hinter einem Gateway weiterarbeiten, auch wenn das Gateway ausgeschaltet wurde. 

Cumulocity betrachtet ein Gerät als betriebsbereit, wenn es für das Gerät keine kritischen aktiven Alarme gibt. Dies wird entsprechend des Zeitanteils, den Alarme aktiv waren, dargestellt. Hat ein Gerät innerhalb eines bestimmten Zeitraums keinerlei kritische Alarme, war es 100% betriebsbereit. Gab es während der Hälfte der Zeit kritische aktive Alarme, war es 50% betriebsbereit. 

Ist ein Gerät offline, nimmt Cumulocity standardmäßig an, 

* dass das Gerät während des Verbindungsabbruchs weiterhin in Betrieb bleibt, wenn dies zuvor der Fall war.
* dass das Gerät während des Verbindungsabbruchs weiterhin nicht in Betrieb ist, wenn dies zuvor der Fall war.

Es gibt möglicherweise Ausnahmen zu dieser Regel. Wenn Ihr Verkaufsautomat beispielsweise nur mit bargeldloser Bezahlung funktioniert, bedeutet ein Verbindungsabbruch, dass der Automat nichts mehr verkaufen kann und damit nicht mehr betriebsbereit ist. In diesem Fall müssen Nichtverfügbarkeits-Alarme in der ["Administration"-Anwendung](/guides/benutzerhandbuch/administration#reprio-alarms) eingestellt werden, die einen "kritischen" anstatt eines "wichtigen" Schweregrads haben.

Cumulocity zeigt die Serviceverfügbarkeit für einzelne Geräte sowie für alle Geräte an. 

* Um die Serviceüberwachung für ein bestimmtes Gerät anzuzeigen, wechseln Sie zur Registerkarte **Serviceüberwachung** in den Gerätedetails dieses Geräts.
* Um den gesamten Service aller Geräte anzuzeigen, klicken Sie **Serviceüberwachung** im Navigator.

![Service Monitoring](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-servicemonitoring.png)

Die Seite **Serviceüberwachung** zeigt die prozentuale Verfügbarkeit aller Geräte währende des letzten Tags, der letzten Woche und des letzten Monats an. 

### <a name="alarm-monitoring"></a>Arbeiten mit Alarmen

Geräte können Alarme auslösen, um anzuzeigen, dass ein Problem besteht, das einer Handlung bedarf. 

Cumulocity zeigt Alarme für einzelne Geräte sowie für alle Geräte an. 

* Um die Alarme für alle Geräte anzuzeigen, klicken Sie **Alarme** im Menü **Übersichten** im Navigator.  
* Um die Alarme für ein bestimmtes Gerät anzuzeigen, wechseln Sie zur Registerkarte **Alarme** in den Gerätedetails dieses Geräts.

![Alarms page](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-alarms.png)

Standardmäßig
* werden nur ungelöste Alarme gezeigt. Wenn Sie rechts in der oberen Menüleiste  **Aufgehobene Alarme anzeigen** aktivieren, sehen Sie die gesamte Alarmhistorie.
* werden Alarme in Echtzeit angezeigt, sobald sie vom Gerät gemeldet werden. Klicken Sie  **Echtzeit** in der oberen Menüleiste, um Echtzeitaktualisierungen zu deaktivieren. 

Alarme werden nach Schweregraden klassifiziert. Cumulocity enthält vier verschiedene Alarmtypen:

|Schweregrad|Beschreibung|
|:---|:--|
|Kritisch|Das Gerät ist nicht betriebsbereit. Dieser Zustand sollte umgehend behoben werden.
|Wichtig|Das Gerät hat ein Problem, das behoben werden sollte.
|Weniger wichtig|Das Gerät hat ein Problem, das behoben werden könnte.
|Warnung|Es gibt eine Warnung.

Die Registerkarte **Alarme** ist entsprechend dieser Alarmtypen in vier Bereiche unterteilt.

Klicken Sie in der oberen Leiste auf eine der Schaltflächen für die Alarmtypen, um den entsprechenden Bereich auszublenden. Nochmaliges Klicken zeigt den Bereich wieder an. 
 
In jedem Bereich sind die Alarme nach ihrem Auftreten sortiert, wobei der aktuellste zuerst angezeigt wird. 

In jeder Zeile werden die folgenden Informationen für einen Alarm angezeigt:

|Info|Beschreibung|
|:---|:---|
|Schweregrad|Entweder kritisch, wichtig, weniger wichtig oder Warnung (siehe oben).
|Anzahl|Wie oft der Alarm von dem Gerät gesendet wurde. Es kann jeweils nur ein Alarm pro Typ für ein Gerät aktiv sein. Wenn ein weiterer Alarm des gleichen Typs auftritt, wird die Zahl um 1 erhöht.
|Beschreibung|Optionaler Text zur Beschreibung des Alarms.
|Status|Status des Alarms: <br/> **Aktiv**: Wenn der Alarm ausgelöst wurde und keiner bisher den Alarm bearbeitet. <br/>**Bestätigt**: Wenn jemand den Status auf "Bestätigt" gesetzt hat, um anzuzeigen, dass dieser Alarm bereits bearbeitet wird.<br/>**Aufgehoben**: Wenn entweder jemand den Status manuell auf "Aufgehoben" gesetzt hat oder wenn das Gerät selbst festgestellt hat, dass das Problem behoben ist. 
|Letztes Auftreten|Zeitstempel für das letzte Auftreten des Alarms (Gerätezeit).
|Gerät|Name des Geräts. Durch Klicken des Namen gelangen Sie zur Detailansicht des Geräts.

Klicken Sie auf den Pfeil rechts in einem Eintrag, um die Zeile auszuklappen und weitere Details zum Alarm anzuzeigen.

* **Status**: Enthält weitere Informationen zum Alarmstatus und zeigt den Alarmtypen an. Die Typ-Information wird verwendet, um die Priorität von Alarmen zu konfigurieren, siehe [Priorisieren von Alarmen](/guides/benutzerhandbuch/administration#reprio-alarms) in der "Administration"-Anwendung.
* **Änderungsprotokoll**: Gibt die Serverzeit an, zu der der Alarm erstellt wurde. Diese kann von der Gerätezeit abweichen. 

Um den Status eines Alarms zu ändern, bewegen Sie den Mauszeiger rechts über die Zeile und klicken Sie die entsprechende Schaltfläche oder öffnen Sie das Kontextmenü über das Menüsymbol und wählen Sie den gewünschten Status.  

![Alarm dropdown](/images/benutzerhandbuch/DeviceManagement/devmgmt-alarms-status.png)

Es besteht außerdem die Möglichkeit, den Status aller Alarme auf einmal auf "Aufgehoben" zu setzen. Klicken Sie **Alle aufheben** in der oberen Menüzeile, um alle Alarme des ausgewählten Schweregrads auf einmal aufzuheben. 

<!-- Seems to be no longer relevant
* **Additional information**: An alarm can contain arbitrary additional information provided by the device.
* **Audit log**: Along with the alarm, a log of changes to the alarm is stored. This creates an alarm history with various data. -->

### <a name="operation-monitoring"></a>Verwenden von Kommandos

Kommandos werden verwendet, um Geräte aus der Ferne zu steuern. 

Cumulocity zeigt Kommandos für einzelne Geräte sowie für alle Geräte an:

* Um die Kommandos für alle Geräte anzuzeigen, klicken Sie **Gerätesteuerung** im Menü **Übersichten** im Navigator.  
* Um die Alarme für ein bestimmtes Gerät anzuzeigen, wechseln Sie zur Registerkarte **Steuerung** in den Gerätedetails dieses Geräts.

![Device Control](/images/benutzerhandbuch/DeviceManagement/devicecontrol.png)

Kommandos können sich in einem der folgenden Zustände befinden, angezeigt durch entsprechende Symbole:

|Zustand|Beschreibung|
|:---|:--|
|Ausstehend|Das Kommando wurde gerade erstellt und wartet darauf, vom Gerät empfangen zu werden.
|Wird ausgeführt|Das Kommando wurde vom Gerät empfangen und wird ausgeführt.
|Erfolgreich|Das Kommando wurde erfolgreich vom Gerät ausgeführt.
|Abgebrochen|Das Kommando konnte nicht vom Gerät ausgeführt werden.

Durch Klicken der Status-Schaltflächen oben auf der Seite werden die entsprechenden Kommandos ausgeblendet. Erneutes Klicken der entsprechenden Schaltfläche zeigt die Kommandos wieder an. 

Klicken Sie **Echtzeit** rechts in der oberen Menüleiste, um die vom Gerät empfangenen Kommandos in Echtzeit anzuzeigen. 

Kommandos werden in absteigender Zeitfolge aufgelistet und streng nach dieser Reihenfolge ausgeführt.

Für jedes Kommando werden die folgenden Informationen bereitgestellt:

|Info|Beschreibung|
|:---|:---|
|Status|Ausstehend, wird ausgeführt, erfolgreich, abgebrochen (siehe oben). 
|Name|Name des Kommandos.
|Gerät|Name des Geräts. Klicken Sie auf den Namen, um zur Ansicht der Gerätedetails zu gelangen. 

Durch Klicken einer Zeile wird diese aufgeklappt und weitere Details zum Kommando angezeigt. 

* **Details**: Nähere Beschreibung und Status des Kommandos. Lautet der Status = ABGEBROCHEN, wird die Ursache für das Fehlschlagen angegeben.  
* **Änderungshistorie**: Informationen zu den letzten Änderungen des Kommandos.

![Kommandodetails](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-history.png)

<a name="bulk-operations"></a>**Stapelkommandos**

Für die leichtere Bearbeitung von Geräten bietet Cumulocity Stapelkommandos. Mit Stapelkommandos können Sie ein Kommando in einem Schritt für jedes Gerät in einer Gruppe ausführen.

Um ein Stapelkommando für eine Gruppe auszuführen, führen Sie folgende Schritte aus:

1. Wählen Sie ein Gerät und öffnen Sie die Registerkarte **Steuerung**.
3. Wählen Sie ein Kommando aus der Liste und klicken Sie das Menüsymbol rechts in der Zeile.
5. Klicken Sie im Kontextmenü **Für gesamte Gruppe ausführen**.

![Execute bulk operations](/images/benutzerhandbuch/DeviceManagement/devmgmt-devicecontrol-bulk.png)

Um den Status und Fortschritt der Kommandos zu verfolgen, wählen Sie die entsprechende Gruppe im Navigator und wechseln Sie zur Registerkarte **Stapelkommandos**.  

![Registerkarte Stapelkommandos](/images/benutzerhandbuch/DeviceManagement/devmgmt-bulkoperations.png)

Um ein Stapelkommando zu bearbeiten, führen Sie folgende Schritte aus:

1. Wählen Sie ein Kommando aus der Liste und klicken Sie das Menüsymbol rechts in der Zeile.
2. Klicken Sie im Kontextmenü **Zeitplan bearbeiten**.
3. Im folgenden Fenster können Sie die Werte für **Startzeit** und **Verzögerung** ändern.
4. Um Kommandodetails zu ändern, klicken Sie **Anzeigen Kommandodetails**. 
5. Klicken Sie **Neu planen**, um Ihre Einstellungen zu speichern. 

![Stapelkommando bearbeiten](/images/benutzerhandbuch/DeviceManagement/devmgmt-bulkoperations-reschedule.png)

Um ein Stapelkommando abzubrechen, klicken Sie das Menüsymbol rechts in der entsprechenden Zeile und klicken Sie **Vorgang abbrechen**.

### <a name="events-all"></a>Fehlerbehebung von Geräten

Eine Fehlerbehebung auf detaillierterer Ebene kann bei Geräten mit Hilfe von Ereignissen durchgeführt werden. Ereignisse sind von Geräten gesendete Low-Level-Nachrichten, die üblicherweise für die anwendungsspezifische Verarbeitung verwendet werden. So sendet zum Beispiel ein Verkaufsautomat seine Echtzeitverkäufe in Form von Ereignissen. 

Cumulocity zeigt Ereignisse für einzelne Geräte sowie für alle Geräte an: 

* Um die Ereignisse für ein bestimmtes Gerät anzuzeigen, wechseln Sie zur Registerkarte **Ereignisse** in den Gerätedetails dieses Geräts.
*  Um die Ereignisse für alle Geräte anzuzeigen, klicken Sie **Ereignisse** im Menü **Übersichten** im Navigator. 

![Events](/images/benutzerhandbuch/DeviceManagement/devmgmt-events.png)

Standardmäßig werden die Ereignisse in Echtzeit angezeigt, sobald sie vom Gerät empfangen werden. Um die Echtzeitaktualisierung zu deaktivieren, klicken Sie **Echtzeit** rechts in der oberen Menüleiste.

Für jedes Ereignis werden die folgenden Informationen bereitgestellt:

|Info|Beschreibung|
|:---|:---|
|Zeitstempel|Zeitstempel, wann das Ereignis ausgeführt wurde.
|Name|Name des Ereignisses.
|Gerät|Name des Geräts, das das Ereignis sendet. Durch Klicken des Gerätenamens gelangen Sie zur Detailansicht des Geräts. 

In der Ereignisliste wird der letzte Eintrag ganz oben angezeigt.

Durch Klicken einer Zeile wird diese aufgeklappt und weitere Details zum Ereignis angezeigt (wie der Typ und die Position des Geräts). 

Da Geräte möglicherweise große Datenmengen senden, können Sie die angezeigten Daten nach Datum filtern.

Wählen Sie in den Feldern in der oberen Menüleiste ein Startdatum und ein Enddatum und klicken Sie **Filtern**, um den Filter anzuwenden. Klicken Sie **Löschen**, um den Filter wieder zurückzusetzen.








