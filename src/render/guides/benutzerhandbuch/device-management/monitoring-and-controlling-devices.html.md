---
order: 40
title: Überwachen und Steuern von Geräten
layout: redirect
---


### <a name="map"></a>Lokalisieren von Geräten

Cumulocity bietet die Möglichkeit, den Standort aller Geräte in Ihrem Konto auf eine Karte anzuzeigen. 

Klicken Sie **Karte** im "Geräte"-Menü im Navigator, um eine Karte zu öffnen, die alle Geräte in Echtzeit anzeigt. 

Die Geräte sind als "Pins" dargestellt. Klicken Sie auf einen Pin, um den Namen des entsprechenden Geräts anzuzeigen. Klicken Sie auf den Gerätenamen, um zur Ansicht der Gerätedetails zu wechseln.  

<img src="/guides/images/benutzerhandbuch/devmgmt-map.png" alt="Gerätekarte" style="max-width: 100%">

### <a name="connection-monitoring"></a>Verbindungsüberwachung

In der Device Management-Anwendung können Sie die Verbindungen zu Ihren Geräten überwachen. 

Dies kann auf der Ebene einzelner Geräte erfolgen (siehe unten) oder für mehrere Geräte in einer Liste.

Um Verbindungen für mehrere Geräte zu überwachen, öffnen Sie eine beliebige Geräteliste. 

Der Verbindungsstatus wird durch Pfeile in der Spalte "Status" in der Geräteliste angezeigt. 

<img src="/guides/images/benutzerhandbuch/devmgmt-connection-status.png" alt="Verbindungsstatus" style="max-width: 100%">

#### Sendeverbindungen

Die oberen Pfeile symbolisieren die Sendeverbindungen (Verkehr vom Gerät zu Cumulocity). Der Status der Sendeverbindungen kann einer der folgenden sein:

* Grüner Pfeil - Online (Daten wurden im erwarteten Intervall gesendet)
* Roter Pfeil - Offline (Daten wurden nicht im erwarteten Intervall gesendet)
* Grauer Pfeil - Unbekannt oder nicht überwacht (kein Intervall konfiguriert)

Wenn Sie den Mauszeiger über einen Pfeil bewegen, wird der Zeitstempel der letzten Anfrage vom Gerät an den Server angezeigt. 

Wenn ein Gerät als Offline erkannt wird, (sendet keine Daten im erwarteten Intervall und der obere Pfeil wechselt auf rot), wird ein  "UnavailabilityAlarm" für das Gerät erzeugt mit der Nachricht "Im erwarteten Intervall wurden keine Daten vom Gerät empfangen.".

#### Push-Verbindungen

Der untere Pfeil symbolisiert die Push-Verbindungen (von Cumulocity zum Gerät). Der Status der Push-Verbindungen kann einer der folgenden sein:

* Grüner Pfeil - Online (Verbindung hergestellt)
* Roter Pfeil - Offline (Verbindung nicht hergestellt)
* Grauer Pfeil - Nicht überwacht

>**Info**: Bei den Push-Verbindungen handelt es sich um die Verbindungen von Cumulocity zur "/devicecontrol/notifications" API, **nicht** zur Echtzeit-API.

#### Wartungsmodus

Außerdem kann sich ein Gerät im Wartungsmodus befinden. Dies wird durch ein Werkzeug-Symbol in der Spalte "Status" gekennzeichnet. Dieser spezielle Verbindungsstatus zeigt an, dass das Gerät gerade gewartet wird und nicht überwacht werden kann. Während ein Gerät gewartet wird, werden keine Alarme für dieses Gerät ausgelöst. 

In der Karte "Verbindungsüberwachung" in der Registerkarte "Info" eines Geräts können Sie den Wartungsmodus für dieses Gerät durch einen Schieberegler ein- oder ausschalten.


#### Verbindungsüberwachung in der Registerkarte "Info"

Navigieren Sie zur Registerkarte "Info", um die Verbindungen eines bestimmten Geräts zu überwachen. Unter "Gerätestatus" wird der Verbindungsstatus für das Gerät angezeigt. 

<img src="/guides/images/benutzerhandbuch/devmgmt-connection-status-device.png" alt="Gerätestatus" style="max-width: 50%">

Unter dem Status für die Sende- und Push-Verbindungen wird der Zeitpunkt der letzten Kommunikation angezeigt. 

> **Info**: "Letzte Kommunikation" und "Letzte Aktualisierung" sind zwei vollkommen verschiedene Zeitstempel. "Letzte Kommunikation" zeigt an, wann ein Gerät das letzte mal Daten gesendet hat. "Letzte Aktualisierung" zeigt an, wann der Stammdateneintrag des Geräts das letzte mal aktualisiert wurde. Diese Aktualisierung kann durch das Gerät selbst, über die Web-Benutzerschnittstelle oder durch eine andere Anwendung erfolgt sein. 
> 
Im Feld  "Erwartetes Intervall" können Sie ein Intervall angeben. Dieser Parameter legt fest, wie häufig Sie erwarten, von dem Gerät zu hören. Wenn Sie dieses Intervall etwa auf 60 setzen, erwarten Sie, dass das Gerät mindestens einmal pro Stunden mit Cumulocity kommuniziert. Das Intervall wird entweder vom Gerät selbst festgelegt, basierend auf den Kenntnissen des Geräts darüber, wie oft es versuchen wird, Daten zu senden, oder es wird manuell von Ihnen festgelegt. 

Wenn ein Intervall angegeben ist, befindet sich darunter der Schieberegler **Wartung**.

Mit dem Schieberegler **Wartung** können Sie den Wartungsmodus für das Gerät ein- oder ausschalten. Dies wird unmittelbar im Verbindungsstatus angezeigt.   

<img src="/guides/images/benutzerhandbuch/devmgmt-maintenancemode.png" alt="Wartungsmodus" style="max-width: 50%">

>**Info**: Die Verbindungsüberwachung findet nicht in Echtzeit statt. Dies führt dazu, dass der Verbindungsstatus sich nicht direkt ändert, sobald ein Gerät ausgeschaltet wird. Abhängig vom Netzwerk kann es bis zu 20 Minuten dauern, bis eine unterbrochene Verbindung erkannt wird, da das Netzwerk eine bestimmte Zeit lang versuchen wird, Daten zu senden.

### <a name="monitoring-services"></a>Serviceüberwachung

Cumulocity unterscheidet zwischen Verbindungsüberwachung und Serviceüberwachung. Verbindungsüberwachung, wie im vergangenen Abschnitt beschrieben, zeigt nur an, ob ein Gerät mit Cumulocity kommuniziert, was nicht automatisch auch bedeutet, dass das Gerät betriebsbereit ist.

Serviceüberwachung dagegen zeigt an, ob ein Gerät in Betrieb ist. Ein Verkaufsautomat ist beispielsweise in Betrieb, wenn er bereit ist, Waren zu verkaufen. Ein Verkaufsautomat kann ohne eine Verbindung zu Cumulocity gegen Bargeld Waren verkaufen. Aus kaufmännischer Sicht ist der Automat also betriebsbereit. Ähnlich können Geräte hinter einem Gateway weiterarbeiten, auch wenn das Gateway ausgeschaltet wurde. 

Cumulocity betrachtet ein Gerät als betriebsbereit, wenn es für das Gerät keine kritischen, ungelösten Alarme gibt. Dies wird entsprechend des Zeitanteils, den Alarme aktiv waren, dargestellt. Hat ein Gerät innerhalb eines bestimmten Zeitraums keinerlei kritische Alarme, war es 100% betriebsbereit. Gab es während der Hälfte der Zeit kritische, ungelöste Alarme, war es 50% betriebsbereit. 

Ist ein Gerät offline, nimmt Cumulocity standardmäßig an, 

* dass das Gerät während des Verbindungsabbruchs weiterhin in Betrieb bleibt, wenn dies zuvor der Fall war.
* dass das Gerät während des Verbindungsabbruchs weiterhin nicht in Betrieb ist, wenn dies zuvor der Fall war.

Es gibt möglicherweise Ausnahmen zu dieser Regel. Wenn Ihr Verkaufsautomat beispielsweise nur mit bargeldloser Bezahlung funktioniert, bedeutet ein Verbindungsabbruch, dass der Automat nichts mehr verkaufen kann und damit nicht mehr betriebsbereit ist. In diesem Fall müssen Nichtverfügbarkeits-Alarme in der ["Administration"-Anwendung](/guides/users-guide/administration#reprio-alarms) eingestellt werden, die einen "kritischen" anstatt eines "wichtigen" Schweregrads haben.

Cumulocity zeigt die Serviceverfügbarkeit für einzelne Geräte sowie für alle Geräte an. 

* Um die Serviceüberwachung für ein bestimmtes Gerät anzuzeigen, wechseln Sie zur Registerkarte "Serviceüberwachung" in den Gerätedetails dieses Geräts.
* Um den gesamten Service aller Geräte anzuzeigen, klicken Sie "Serviceüberwachung" im Navigator.

<img src="/guides/images/benutzerhandbuch/devmgmt-service-monitoring.png" alt="Wartungsmodus" style="max-width: 75%">

Die Seite "Serviceüberwachung" zeigt die prozentuale Verfügbarkeit aller Geräte währende des letzten Tags, der letzten Woche und des letzten Monats an. 

### <a name="alarm-monitoring"></a>Arbeiten mit Alarmen

Geräte können Alarme auslösen, um anzuzeigen, dass ein Problem besteht, das einer Handlung bedarf. 

Cumulocity zeigt Alarme für einzelne Geräte sowie für alle Geräte an. 

* Um die Alarme für alle Geräte anzuzeigen, klicken Sie "Alarme" im Menü "Übersichten" im Navigator.  
* Um die Alarme für ein bestimmtes Gerät anzuzeigen, wechseln Sie zur Registerkarte "Alarme" in den Gerätedetails dieses Geräts.

<img src="/guides/images/benutzerhandbuch/devmgmt-alarm-device.png" alt="Gerätealarme" style="max-width: 100%">

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

Die Registerkarte "Alarme" ist entsprechend dieser Alarmtypen in vier Bereiche unterteilt.

Klicken Sie in der oberen Leiste auf eine der Schaltflächen für die Alarmtypen, um den entsprechenden Bereich auszublenden. Nochmaliges Klicken zeigt den Bereich wieder an. 
 
In jedem Bereich sind die Alarme nach ihrem Auftreten sortiert, wobei der aktuellste zuerst angezeigt wird. 

In jeder Zeile werden die folgenden Informationen für einen Alarm angezeigt:

|Info|Beschreibung|
|:---|:---|
|Schweregrad|Entweder kritisch, wichtig, weniger wichtig oder Warnung (siehe oben).
|Anzahl|Wie oft der Alarm von dem Gerät gesendet wurde. Es kann jeweils nur ein Alarm pro Typ für ein Gerät aktiv sein. Wenn ein weiterer Alarm des gleichen Typs auftritt, wird die Zahl um 1 erhöht.
|Beschreibung|Optionaler Text zur Beschreibung des Alarms.
|Status|Status des Alarms: <br/> **Aktiv**: Wenn der Alarm ausgelöst wurde und keiner bisher den Alarm bearbeitet. <br/>**Bestätigt**: Wenn jemand den Status auf **Bestätigt** gesetzt hat, um anzuzeigen, dass dieser Alarm bereits bearbeitet wird.<br/>**Gelöscht**: Wenn entweder jemand den Status manuell auf **Gelöscht** gesetzt hat oder wenn das Gerät selbst festgestellt hat, dass das Problem behoben ist. 
|Letztes Auftreten|Zeitstempel für das letzte Auftreten des Alarms (Gerätezeit).
|Gerät|Name des Geräts. Durch Klicken des Namen gelangen Sie zur Detailansicht des Geräts.

Klicken Sie auf den Pfeil rechts in einem Eintrag, um die Zeile auszuklappen und weitere Details zum Alarm anzuzeigen.

* **Status**: Enthält weitere Informationen zum Alarmstatus und zeigt den Alarmtypen an. Die Typ-Information wird verwendet, um die Priorität von Alarmen zu konfigurieren, siehe [Priorisieren von Alarmen](/guides/users-guide/administration#reprio-alarms) in der "Administration"-Anwendung.
* **Änderungsprotokoll**: Gibt die Serverzeit an, zu der der Alarm erstellt wurde. Diese kann von der Gerätezeit abweichen. 

Um den Status eines Alarms zu ändern, bewegen Sie den Mauszeiger rechts über die Zeile und klicken Sie die entsprechende Schaltfläche oder öffnen Sie das Kontextmenü über das Menüsymbol und wählen Sie den gewünschten Status.  

![Alarm dropdown](/guides/images/users-guide/DeviceManagement/DevMgmt_AlarmDropdown.png)

<!-- Seems to be no longer relevant
* **Additional information**: An alarm can contain arbitrary additional information provided by the device.
* **Audit log**: Along with the alarm, a log of changes to the alarm is stored. This creates an alarm history with various data. -->

### <a name="operation-monitoring"></a>Arbeiten mit Kommandos

Kommandos werden verwendet, um Geräte aus der Ferne zu steuern. 

Cumulocity zeigt Kommandos für einzelne Geräte sowie für alle Geräte an:

* Um die Kommandos für alle Geräte anzuzeigen, klicken Sie "Gerätesteuerung" im Menü "Overviews" im Navigator.  
* Um die Alarme für ein bestimmtes Gerät anzuzeigen, wechseln Sie zur Registerkarte "Steuerung" in den Gerätedetails dieses Geräts.

![Device Control](/guides/images/users-guide/DeviceManagement/DevMgmt_DeviceControl.png)

Kommandos können in einem der folgenden Zustände sein, angezeigt durch entsprechende Symbole:

|Zustand|Beschreibung|
|:---|:--|
|Pending|The operation has just been created and is waiting for the device to pick it up.
|Executing|The operation has been picked up by the device and is being executed.
|Successful|The operation has been successfully executed by the device.
|Failed|The operation could not be executed by the device.

By clicking one of the state buttons at the top, the corresponding operations will be hidden. Click it again to show the operations again.

Click **Realtime** at the right of the top menu bar to see operations coming in from the devices in realtime.

Operations are listed in descending time order. Operations are executed strictly according to this order.

For each operation, the following information is provided:

|Info|Description|
|:---|:---|
|Status|One of pending, executing, successful, failed (see above).
|Name|Name of the operation.
|Device|The name of the device. Clicking the name leads you to the detailed view of the device.

Clicking a row expands it and displays further details on the operation.

* **Details**: Providing information on the operation name and status. In case of status = FAILED the reason for the failure is provided. 
* **History of Changes**: Providing information on the past changes of the operation.

![Operation Details](/guides/images/users-guide/DeviceManagement/DevMgmt_OperationDetails.png)

<a name="bulk-operations"></a>**Bulk Operations**

For easier handling of devices, Cumulocity offers bulk operations. With bulk operations you can at once execute operations for each device within one group.

To execute bulk operations for a group, follow these steps:

1. Select a device and open the "Control" tab.
2. Create an operation.
3. Hover over the operation you want to execute.
4. Click the menu icon.
5. In the context menu click **Execute for whole group**.

![Execute bulk operations](/guides/images/users-guide/executebulkoperations.png)

In order to view the status and progress of your operations, simply select the desired group and click the "Bulk Operations" tab.

![Bulk operations tab](/guides/images/users-guide/DeviceManagement/DevMgmt_BulkOperations.png)

To edit a bulk operation, follow these steps:

1. Hover over the bulk operation you want to edit and click the menu icon. 
2. In the context menu click **Edit operation schedule**.
3. In the upcoming window you may change the "Start Date" and "Delay" values.
4. To change operation details, click **Show operation details**. 
5. Click **Reschedule** to apply your changes. 

![Edit bulk operations](/guides/images/users-guide/DeviceManagement/DevMgmt_BulkOperationsEdit.png)

To delete a bulk operation, hover over the bulk operation you want to delete and click the menu icon. In the context menu, click **Cancel operation**.

### <a name="events-all"></a>Fehlerbehebung von Geräten

Eine Fehlerbehebung auf einer etwas detaillierteren Ebene kann bei Geräten mit Hilfe von Ereignissen durchgeführt werden. Ereignisse sind von Geräten gesendete Low-Level-Nachrichten, die üblicherweise für die anwendungsspezifischen Verarbeitung verwendet werden. So sendet zum Beispiel ein Verkaufsautomat seine Echtzeitverkäufe in Form von Ereignissen. 

Cumulocity zeigt Ereignisse für einzelne Geräte sowie für alle Geräte an: 

* Um die Ereignisse für ein bestimmtes Gerät anzuzeigen, wechseln Sie zur Registerkarte "Ereignisse" in den Gerätedetails dieses Geräts.
*  Um die Ereignisse für alle Geräte anzuzeigen, klicken Sie "Ereignisse" im Menü "Übersichten" im Navigator. 

<img src="/guides/images/benutzerhandbuch/devmgmt-events.png" alt="Ereignisse" style="max-width: 100%">

Per default, events are shown as coming in from the devices in realtime. To disable realtime updates, click **Realtime** at the right of the top menu bar.

For each event, the following information is provided:

|Info|Description|
|:---|:---|
|Timestamp|Timestamp when the event has been executed.
|Name|Name of the event.
|Device|The name of the device sending the event. Clicking the name leads you to the detailed view of the device.

In the event list the latest entry is displayed on top.

Clicking a row expands it and displays further details on the event (as type and position of the device).

Since devices may send large amounts of event data, you can filter the data to be displayed by date. 

Select a start date and an end date from the fields in the top menu bar and click the **Filter** button to apply the filter. Click the **Clear** button to clear the filter again.








