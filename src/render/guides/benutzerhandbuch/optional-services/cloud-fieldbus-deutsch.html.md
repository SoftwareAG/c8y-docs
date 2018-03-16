---
order: 50
title: Cloud Fieldbus
layout: default
---

## <a name="overview"></a>Überblick

Cloud Fieldbus ist eine Cumulocity-Anwendung mit der Möglichkeit, Daten von Fieldbusgeräten zu erfassen und zu verwalten. 

* Fieldbus Geräte [verbinden](#connect).
* [Verwalten](#manage) der verbundenen Fieldbus Geräte.
* [Konfigurieren](#configure) der Remote-Management-Fähigkeiten von bestimmten Arten von Geräten und der [Import und Export](#import).

"Out of the box" wird es von den folgenden Terminals unterstützt: 

* [Pssystec Smartbox-Modbus](/guides/images/devices/smartbox-modbus) für Modbus/RTU.
* [Netcomm Wireless NTC-6200](/guides/images/devices/netcommwireless) für Modbus/TCP und Modbus/RTU.
* [Cinterion Java modules](/guides/images/devices/cinterion) für Modbus/RTU und CAN bus

> Wenn Sie Cloud Fieldbus mit Ihrem Terminal unterstützen möchten, wenden Sie sich bitte an info@cumulocity.com für weitere Informationen.

## <a name="connect"></a>Anschließen von Modbus-Geräten

Für die folgenden Anleitungen gehen wir davon aus, dass Sie über ein Cloud-Fieldbus-Terminal verfügen, das in Ihrem Cumulocity-Mandanten registriert ist und angezeigt wird. Um ein Terminal mit Cumulocity zu registrieren, folgen Sie den Anweisungen des Terminals.

### Anschließen von Modbus / RTU-Geräten

* Verbinden Sie das Modbus / RTU-Gerät über RS / 485 oder RS / 232 mit dem Terminal.
* Geben Sie dem Gerät eine eindeutige Modbus-Adresse gemäß den Anweisungen des Modbus-Geräts (by setting a jumper on the device).
* Überprüfen Sie die serielle Kommunikation der Geräte gemäss der Geräteanleitung (wie Baud Rate und Komunikations Protokol). Diese müssen mit allen Geräten im Bus übereinstimmen.
* Navigieren Sie zum Terminal in Cumulocity und klicken Sie auf die Registerkarte "Modbus".
* Ändern Sie ggf. die im Abschnitt "Serielle Kommunikation" dargestellten Kommunikationseinstellungen entsprechend den Einstellungen am Bus.
* Ändern Sie die Übertragungsrate und die Polling-Rate entsprechend Ihren Anforderungen. Die Polling-Rate ist die Frequenz, mit der die Modbus-Geräte abgefragt werden. Die Übertragungsrate ist die Frequenz, in der Messungen an Cumulocity gesendet werden.
* Klicken Sie auf "Änderungen speichern", wenn Sie Änderungen vorgenommen haben.

![Add Modbus device](/guides/images/users-guide/newmodbusrtudevicede.png)

* Um die Kommunikation zwischen dem Terminal und dem Modbus-Gerät zu starten, klicken Sie auf "Neues Gerät hinzufügen".
* Geben Sie einen Namen für das Gerät ein, und wählen Sie den Typ des Geräts aus dem Dropdown-Menu aus. Neue Gerätetypen hinzufügen wird hier erklärt. "[Konfigurierung Fieldbus Gerätetypen](#configure)"  Stellen Sie die Modbus-Adresse des angeschlossenen Geräts ein.
* Klicken Sie auf "Hinzufügen". Cumulocity sendet nun eine Benachrichtigung an das Modbus-Endgerät, dass ein neues Gerät betriebsbereit ist. Dies kann einige Sekunden dauern.

Nachdem die Fortschrittsanzeige verschwindet, wurde ein neues Kindgerät zum Terminal hinzugefügt und kann nun verwaltet werden. Sie können auf den Namen des Geräts in der Tabelle klicken, um zum Gerät zu navigieren. Wenn Sie dem Terminal noch keine Modbus-Geräte hinzugefügt haben, müssen Sie möglicherweise Ihr Browser-Fenster neu laden, damit die Registerkarte "Kindgeräte" sichtbar wird.

### Anschließen von Modbus / TCP-Geräten

* Stellen Sie sicher, dass das Modbus / TCP-Gerät mit dem Terminal verbunden ist, z. B. direkt über ein Ethernet-Kabel oder über einen Switch. Wenn Sie ein Modbus-Gateway verwenden, konfigurieren Sie das Gateway so, dass es mit den Modbus-Geräten hinter dem Gateway kommunizieren kann.
* Überprüfen Sie die Netzwerkeinstellungen des Geräts anhand der mit dem Gerät gelieferten Anweisungen.
* Navigieren Sie zum Terminal in Cumulocity und klicken Sie auf die Registerkarte "Netzwerk". Überprüfen Sie, ob die LAN-Einstellungen des Terminals mit den Einstellungen des Geräts übereinstimmen, damit die TCP-Kommunikation hergestellt werden kann.
* Navigieren Sie zum Register "Modbus".
* Ändern Sie die Übertragungsrate und die Polling-Rate entsprechend Ihren Anforderungen. Die Polling-Rate ist die Frequenz, mit der die Modbus-Geräte abgefragt werden. Die Übertragungsrate ist die Frequenz, bei der Messungen an Cumulocity gesendet werden. Klicken Sie auf "Änderungen speichern", wenn Sie Änderungen vorgenommen haben.
* Um die Kommunikation zwischen dem Terminal und dem Modbus-Gerät zu starten, klicken Sie auf "Neues Gerät hinzufügen".
* Geben Sie einen Namen für das Gerät ein, und wählen Sie den Typ des Geräts aus dem Dropdown-Menu aus. Neue Gerätetypen hinzufügen wird hier erklärt. "[Konfigurierung Fieldbus Gerätetypen](#configure)" Die Modbus Adresse und die IP Adresse müssen mit dem verbunden Gerät übereinstimmen.
*  Klicken Sie auf "Hinzufügen". Cumulocity sendet nun eine Benachrichtigung an das Modbus-Endgerät, dass ein neues Gerät betriebsbereit ist. Dies kann einige Sekunden dauern.

![Add Modbus device](/guides/images/users-guide/newmodbustcpdevicede.png)

> Wir gehen davon aus, dass die gesamte Modbus / TCP-Kommunikation den Standard-Modbus / TCP-Port 502 verwendet. Auf dem NTC-6200 kann der zu verwendende Port über die Variable "service.cumulocity.plugin.lua__modbus.port" konfiguriert werden, Device Shell oder die lokale Webbenutzeroberfläche des Geräts.

### CAN Geräte verbinden

* Das CAN Gerät mit Kabel am Terminal anschliessen.
* Überprüfen Sie die Baudrate des Gerätes gemäß der mit dem Gerät gelieferten Anleitung. Diese müssen alle Geräte auf dem Bus entsprechen.
* Navigieren Sie zum Terminal in Cumulocity und klicken Sie auf die Registerkarte "CAN-Bus".
* Ändern Sie die im Abschnitt "CAN-Bus-Kommunikation" gezeigte Baudrateneinstellung, falls erforderlich, auf die Einstellungen am Bus.
* Ändern Sie die Übertragungsrate entsprechend Ihren Anforderungen. Die Übertragungsrate ist die Frequenz, in der Messungen an Cumulocity gesendet werden.
* Klicken Sie auf "Änderungen speichern", wenn Sie Änderungen vorgenommen haben.
* Um die Kommunikation zwischen dem Terminal und dem CAN-Gerät zu starten, klicken Sie auf "CAN-Gerät hinzufügen".
*Geben Sie einen Namen für das Gerät ein, und wählen Sie den Typ des Geräts aus dem Dropdown-Menu aus. Neue Gerätetypen hinzufügen wird hier erklärt. "[Konfigurierung Fieldbus Gerätetypen](#configure)"
* Klicken Sie auf "Hinzufügen". Cumulocity sendet nun eine Meldung an das Feldbus-Terminal, dass ein neues Gerät betriebsbereit ist. Dies kann einige Sekunden dauern.

Nachdem die Fortschrittsanzeige verschwindet, wurde ein neues Kindgerät zum Terminal hinzugefügt und kann nun verwaltet werden. Sie können auf den Namen des Geräts in der Tabelle klicken, um zum Gerät zu navigieren. Wenn Sie dem Terminal noch keine Feldbusgeräte hinzugefügt haben, müssen Sie möglicherweise Ihr Browserfenster neu laden, damit die Registerkarte "Kindgeräte" sichtbar wird.

![Add CAN device](/guides/images/users-guide/newcandevicede.png)

### <a name="connect-opcua"></a>OPC UA Server verbinden

Um einen OPC UA Server mit Cumulocity zu verbinden, benötigen Sie einen Gateway oder Industriecomputer mit dem Cumulocity OPC UA Agenten.

* Vergewissern Sie sich, dass der OPC-UA-Server mit dem Gateway oder PC verbunden ist, z. B. direkt über ein Ethernet-Kabel oder über einen Switch.
* Überprüfen Sie die Netzwerkeinstellungen des Gateways und stellen Sie sicher, dass der OPC UA Server vom Gateway aus erreichbar ist.
* Navigieren Sie zum Gateway in der Plattform und klicken Sie auf die Registerkarte "OPC UA".
* Geben Sie die URL des OPC UA Servers aus dem Gateway in das Feld "URL" ein.
* Setzen Sie den Benutzernamen und das Passwort, um auf den OPC UA Server zuzugreifen.
* Ändern Sie die Übertragungsrate und die Abfragerate nach Ihren Anforderungen. Die Übertragungsrate ist die Frequenz, bei der Messungen an Cumulocity gesendet werden. Die Abfragerate ist die Häufigkeit, mit der der OPC-UA-Server nach Änderungen abfragt. Beachten Sie, dass nicht alle OPC-UA-Server die Einstellung einer Abfragerate unterstützen. In solchen Fällen sendet der OPC-UA-Server Daten, wann immer sie sich ändern.
* Klicken Sie auf "Änderungen speichern", wenn Sie Änderungen vorgenommen haben.
* Um die Kommunikation zwischen dem Gateway und dem OPC UA Server zu starten, klicken Sie auf "OPCUA Gerät hinzufügen". Ein OPC-UA-Server kann viele Geräte als Teil seines Objektmodells hosten.
* Geben Sie einen Namen für das OPC UA-Gerät ein.
* Geben Sie den absoluten "browse Pfad" des OPC UA Gerätes ein. Der Pfad des Gerätes ist auf dem OPC UA Server konfiguriert und stellt den "Root" des OPC UA Gerätes im OPC UA Server Objektmodell dar.
* Wählen Sie im Dropdown-Feld den Typ des untergeordneten Geräts aus. Um neue Gerätetypen hinzuzufügen, siehe"[Fieldbus Geräte konfigurieren](#configure)" unten.
* "Hinzufügen" klicken.

Cumulocity sendet nun eine Benachrichtigung an den OPC UA-Agenten, dass ein neues Gerät bereit ist, verwaltet zu werden. Dies kann einige Sekunden dauern.
Nachdem die Fortschrittsanzeige verschwindet, wurde dem Gateway ein neues Kindgerät hinzugefügt und kann nun verwaltet werden. Sie können auf den Namen des Geräts in der Tabelle klicken, um zum Gerät zu navigieren.

![Add OPCUA device](/guides/images/users-guide/newopcuadevice.png)

## <a name="manage"></a>Fieldbus Geräte verwalten
Sobald die Verbindung hergestellt ist, können Sie Ihr Gerät jetzt verwalten. Klicken Sie auf "Kindgeräte" auf einem Terminal, um die angeschlossenen Feldbusgeräte aufzulisten und zu einem Feldbusgerät zu navigieren. Abhängig von den Fähigkeiten des Geräts und seiner Konfiguration in Cumulocity können Sie:

* [Messdaten sammeln](#collect).
* [Alarme von Coils auslesen oder Auslesen von Halteregistern](#alarms).
* [Protokoll Coils und Registeränderungen als Ereignis definieren](#logging).
* [Überwachung des Status von Coils und Registern](#status).

### <a name="collect"></a>Daten Sammeln

Wenn der Gerätetyp des Fieldbusgerätes für die Erfassung von Messungen konfiguriert ist, werden diese im Register "Messungen" sichtbar. Sie werden dann auch im [Daten Explorer](/guides/images/benutzerhandbuch/cockpit-deutsch#visualise) und in den [Dashboard Widgets](/guides/images/benutzerhandbuch/cockpit-deutsch#dashboards) angezeigt.

Die Daten werden gemäß dem Intervall gesammelt, das in der Übertragungsrate Eigenschaft des Endgeräts spezifiziert ist. Zur Optimierung des Datenverkehrs können Daten, die exakt die gleichen sind wie zuvor, nicht erneut gesendet werden.

![Fieldbus measurements](/guides/images/users-guide/modbusmeasurementsde.png)

### <a name="alarms"></a>Überwachung von Alarmen

Wenn der Gerätetyp des Fieldbusgeräts so konfiguriert ist, dass er Alarme sendet, sind diese im Register "Alarme" sichtbar und können in Widgets verwendet werden. Zur Ermittlung des Alarmstatus werden die Fieldbusgeräte nach der Einstellung "Pollingrate" des Terminals auf Änderungen überwacht. Wenn bestimmte Werte oder ein bestimmtes Register nicht Null sind, wird ein Alarm ausgelöst. Wenn der Wert auf Null zurückgeht, wird der Alarm gelöscht.

![Fieldbus alarms](/guides/images/users-guide/modbusalarmsde.png)

### <a name="logging"></a>Logging events

Ähnlich wie Alarme, können Veränderungen in Fieldbus Geräten überwacht und als Ereignisse aufgezeichnet werden .Jedesmal wenn sich Werte des Coils oder des Registers ändern, wird ein "Ereignis" erstellt. Diese Ereignisse sind einzusehen im "Ereignis" tab des Geräts oder in Widgets. Sie können den neuen Wert der überwachten Daten überprüfen oder registrieren, indem Sie auf das Ereignis klicken und die Ereignisdetails aufrufen.

![Fieldbus events](/guides/images/users-guide/modbuseventsde.png)

### <a name="status"></a>Überwachen des Gerätestatus

Der Status der Geräte kann in Echtzeit mit Hilfe von Dashboard-Widgets in der Cockpit-Anwendung überwacht werden. Navigieren Sie zu der Cockpit-Anwendung, erstellen Sie ein Dashboard oder einen Bericht und fügen Sie Widgets hinzu, wie im Benutzerhandbuch unter [Cockpit](/guides/images/benutzerhandbuch/cockpit-deutsch) beschrieben. Der Cloud Fieldbus hat zwei neue Widgets: Das "Fieldbus Device" -Widget und das "SCADA" -Widget.

### Überwachen des Gerätestatus über das Feldbus-Geräte-Widget

Das Fieldbus-Geräte-Widget bietet Ihnen eine tabellarische Darstellung des Status eines Gerätes. Der Status des Geräts kann auch über das Widget geändert werden. Um das Fieldbus Device-Widget zu verwenden, ..

* Wählen Sie ein Dashboard aus und klicken Sie mit dem Zahnrad oben rechts auf "Widget zum Dashboard hinzufügen".
* Wählen Sie das "Fieldbus Device Widget" und bearbeiten Sie den Titel des Widgets.
* Wählen Sie das Gerät aus, das im Abschnitt "Zielgruppen oder Geräte" im Widget angezeigt werden soll.
* Wählen Sie die Daten aus, die auf dem Widget angezeigt werden sollen.

![Adding the Fieldbus Device Widget](/guides/images/users-guide/modbuseditde.png)

In dem Widget werden die ausgewählten Coils und Register in Anzeigekategorien gruppiert, wie sie in dem Gerätetyp konfiguriert sind. Das Fieldbus-Geräte-Widget wird automatisch aktualisiert, sobald neue Daten verfügbar sind. Sie müssen nicht auf Neu laden klicken.

![Use the Fieldbus Device Widget](/guides/images/users-guide/modbusstatus.png)

Register ubd Coils die veränderlich sind, werden durch aktive Widgets dargestellt. Beispielsweise können in dem obigen Screenshot die Konfiguration "Masterschalter" und der "Modus" Zustand editiert werden. Wenn Sie auf einen Schalter klicken, wird eine Operation zum Ändern der entsprechenden Daten oder der entsprechenden Messwerte an das Terminal gesendet. Ähnlich, wenn Sie einen Wert ändern und klicken Sie auf "Set", wird eine Operation erstellt. Das Terminal führt dann die Konfigurationsänderung auf dem Gerät aus, wie es durch die Operation gefordert wird. Während des Vorgangs wird ein Fortschrittsanzeiger angezeigt.

### <a name="scada"></a>Überwachen des Status mit dem SCADA-Widget

Das SCADA-Widget bietet Ihnen eine grafische Darstellung des Status eines Gerätes. So verwenden Sie das SCADA-Widget:

* Wählen Sie ein Dashboard aus und klicken Sie mit dem Zahnrad oben rechts auf "Widget zum Dashboard hinzufügen".
* Wählen Sie das "SCADA" -Widget aus und bearbeiten Sie den Titel des Widgets.
* Wählen Sie das Gerät aus, das im Abschnitt "Zielgruppen oder Geräte" im Widget angezeigt werden soll.
* Laden Sie eine SVG-Datei mit der grafischen Darstellung des Gerätes hoch. SVG-Dateien sind Vektorgrafiken, die speziell mit Platzhaltern für die Statusinformationen vorbereitet werden müssen. Siehe "[SVG files für the SCADA Widget vorbereiten](#scadasvg)".
* Vergeben Sie Platzhalter für Geräte. Dabei können mehrere Geräte als Quelle dienen.
* Sie müssen nun jedem Platzhalter eine Eigenschaft des Gerätes zuordnen. Bewegen Sie den Mauszeiger über jeden Platzhalter und wählen Sie die Schaltfläche "Geräteeigenschaft zuweisen" oder die Schaltfläche "Fieldbus Eigenschaft zuordnen". Es erscheint ein Dialogfenster, mit dem Sie grundlegende Geräteeigenschaften oder Fieldbus-Eigenschaften (d. H. Statusdaten und Messwertdaten) auswählen können. Wählen Sie die gewünschte Eigenschaft aus und klicken Sie auf "Auswählen".
* Nach der Zuweisung aller Platzhalter wird eine Vorschau des Widgets mit den aktuellen Werten der Eigenschaften angezeigt. Klicken Sie auf "Speichern", um das Widget auf dem Dashboard zu platzieren.

![Adding the SCADA Widget](/guides/images/users-guide/scada.png)

## <a name="configure"></a>Konfigurieren von Fieldbus-Gerätetypen

Neue Fieldbus-Gerätetypen können im Menü "Device Database" eingerichtet werden. Klicken Sie auf "Neu". Definieren Sie das Protokoll Ihres Geräts, geben Sie ihm einen Namen und beginnen Sie das Hinzufügen von Coils- und Registerdefinitionen zum Gerätetyp. Je nach ausgewähltem Protokoll ändern sich die folgenden Optionen.

![Device Database](/guides/images/users-guide/devicedatabasede.png)

### <a name="configureModbus"></a>Konfigurieren von Modbus Data

Klicken Sie auf den Link "Hinzufügen" neben "Coils (Diskrete Eingänge)", um eine Coildefinition hinzuzufügen. Dadurch wird ein Dialog zum Spezifizieren des Coils geöffnet. Geben Sie die folgenden Informationen ein:

* Geben Sie den Namen des Coils ein, wie in der Benutzeroberfläche gezeigt.
* Geben Sie optional den Anzeigetyp ein, um Ihre Daten in Widgets zu strukturieren.
* Geben Sie die Nummer des Coil im Modbus-Gerät ein.
* Überprüfen Sie "Status anzeigen", wenn Sie den aktuellen Wert des Coils im Feldbus-Geräte-Widget anzeigen möchten. In diesem Fall können Sie den Text eingeben, den das Feldbus-Geräte-Widget für ungesetzte und eingestellte Coils anzeigen soll.
* Überprüfen Sie "Update status", wenn Sie den Coil vom Fieldbus Device Widget bearbeiten können.
* Check "Alarm auslösen", wenn ein Alarm starten soll, wenn der Coil im Gerät auf einem Wert steht. In diesem Fall können Sie den Typ des erscheinenden Alarms, seinen Text und seinen Schweregrad angeben. Beachten Sie, dass es nur einen Alarm aktiv für einen bestimmten Typ für ein bestimmtes Gerät geben kann.
* Check "Ereignis senden", wenn ein Ereignis jedes Mal erzeugt werden soll, wenn sich der Wert des Coils sich ändert. Wenn "Ereignis senden" markiert ist, können Sie den Ereignistyp und den Text im Ereignis angeben.
* Klicken Sie auf "OK", um die Bearbeitung des Coil zu beenden.

![Add coil](/guides/images/users-guide/addcoilde.png)

Für Diskrete Eingänge stehen dieselben Funktionen zur Verfügung. Es ist jedoch nicht möglich, den Zustand eines Eingangs zu aktualisieren.

Klicken Sie auf den Link "Hinzufügen" neben "Halteregister", um eine Registerdefinition hinzuzufügen. Es öffnet sich ein Dialog zur Eingabe der Details der Registerdefinition:

* Geben Sie den Namen des Registers ein, wie in der Benutzeroberfläche gezeigt.
* Geben Sie optional den Anzeigetyp ein, um Ihre Daten in Widgets zu strukturieren.
* Geben Sie die Nummer des Registers im Modbus-Gerät ein. Sie können eine Teilmenge von Bits, die von einem Register verwendet werden sollen, durch Bereitstellen eines Startbits und einer Anzahl von Bits angeben. Dadurch können Sie ein physikalisches Modbus-Register in einen Satz von "logischen Registern" aufteilen.
* Um den vom Modbus-Gerät gelesenen Integer-Wert zu skalieren, können Sie einen Multiplikator, einen Divisor und eine Anzahl von Dezimalstellen eingeben. Der Registerwert wird zuerst mit dem "Multiplikator" multipliziert, dann durch den "Divisor" dividiert und dann um die Anzahl der Dezimalstellen verschoben. Beachten Sie, dass das Terminal eine Ganzzahlarithmetik verwenden kann, um Werte zu berechnen, die an Cumulocity gesendet werden. Wenn Sie z. B. einen Divisor von ein und einer Dezimalstelle verwenden, wird ein Wert von 231 aus dem Terminal als 23.1 an Cumulocity gesendet. Wenn Sie einen Divisor von zehn und keine Dezimalstellen verwenden, kann das Terminal "23" an Cumulocity (abhängig von seiner Implementierung) senden.
* Geben Sie die Einheit der Daten an, z. B. "C" für Temperaturwerte.
* Check "Signiert", wenn der Registerwert als Signatur interpretiert werden soll.
* Check"Aufzählungstyp", wenn der Registerwert als Aufzählung von diskreten Werten interpretiert werden soll. Wenn "Aufzählungstyp" markiert ist, können Sie auf "Wert hinzufügen" klicken, um Zuordnungen aus einem diskreten Wert zu einem Text hinzuzufügen, der für diesen Wert im Widget angezeigt werden soll. Klicken Sie auf "Wert entfernen", um die Zuordnung zu entfernen.
* Check "Status anzeigen", wenn Sie den aktuellen Wert des Registers im Fieldbus Device Widget anzeigen möchten.
* Check "Update status", wenn Sie das Register vom Fieldbus Device Widget bearbeiten können. Wenn "Aktualisierungsstatus" markiert ist, werden zwei zusätzliche Felder "Minimum" und "Maximum" angezeigt. Mit diesen Feldern können Sie die im Widget eingegebenen Zahlenwerte einschränken.
* Klicken Sie auf "Messung senden", wenn die Werte des Registers gemäß dem Sendeintervall regelmäßig gesammelt werden sollen (siehe [Verbindung](#connect)). Fügen Sie in diesem Fall eine Messart und eine zu verwendende Serie hinzu. Für jede Messart wird auf der Registerkarte "Messungen" ein Diagramm erstellt. Für jede Serie wird ein Diagramm im Diagramm erstellt. Das Gerät dient zur Kennzeichnung der Messung im Diagramm und im Fieldbus-Geräte-Widget.
* Überprüfen Sie, ob ein Alarm ausgelöst werden soll, wenn das Register bei der Gerätemessung nicht Null ist. In diesem Fall können Sie den Typ des Alarms angeben, den Text und den Schweregrad angeben. Beachten Sie, dass es nur einen Alarm aktiv für einen bestimmten Typ für ein bestimmtes Gerät geben kann.
* Check"Ereignis senden", wenn ein Ereignis generiert werden sollte, jedes Mal, wenn sich der Wert des Registers ändert. Wenn "Ereignis senden" markiert ist, können Sie den Ereignistyp und den Text im Ereignis angeben.
* Klicken Sie auf "OK", um die Bearbeitung des Registers zu beenden.

![Add register](/guides/images/users-guide/addregisterde.png)

"Serverzeit verwenden" ist ein Werkzeug, um auszuwählen, ob die Zeitstempel für Daten auf dem Terminal oder auf dem Server generiert werden. Wenn Sie das Puffern von Daten auf dem Terminal unterstützen müssen, lassen Sie dieses Kontrollkästchen deaktiviert.

Schließlich nicht vergessen, klicken Sie auf "Speichern", um Ihre Änderungen zu speichern. Wenn Sie einen Gerätetyp bearbeiten, der gerade verwendet wird, müssen Sie dies möglicherweise ..

* Starten Sie die Terminals, die den Gerätetyp verwenden, neu.
* Rekonfigurieren Sie Dashboards und Widgets, die den Gerätetyp verwenden.

### <a name="configureCAN"></a>Konfigurierung CAN bus data

CAN-Gerätetypen können in ähnlicher Weise wie Modbus-Gerätetypen konfiguriert werden. Weitere Informationen zum Konfigurieren von Modbus-Gerätetypen finden Sie unter [Konfigurierung Modbus data](#configureModbus). Die Unterschiede sind:

* Halteregister werden verwendet, um die verschiedenen Stücke von Daten in CAN-Nachrichten zu beschreiben.
* Geben Sie die CAN-Nachrichten-ID der spezifischen Nachricht ein, aus der die Daten extrahiert werden sollen. Bitte verwenden Sie für die Nachrichten-ID eine Hexadezimalzahl.
* Die Umwandlung von Werten wird um einen Offset-Parameter erweitert. Dies wird abhängig vom Vorzeichen vom Registerwert addiert oder subtrahiert. Die Offsetberechnung erfolgt nach Anwenden von Multiplikator und Divisor und vor der Dezimalverschiebung.

![Add CAN register](/guides/images/users-guide/addregisterCAN.png)

## <a name="import"></a>Importieren und Exportieren von Gerätetypen

Um Gerätetypen bequemer zu verwalten, können Sie Gerätetypen in eine Datei exportieren, nachdem sie in der Benutzeroberfläche bearbeitet wurden. Die Datei kann erneut importiert werden, um andere Cumulocity-Konten einfach einzurichten oder um die Typen aus einer Sicherung wiederherzustellen. Die Importfunktionalität unterstützt auch den Import von fertigen Gerätetypen, die von Geräteherstellern bereitgestellt werden.

Um einen Gerätetyp zu exportieren, bewegen Sie den Mauszeiger über den Gerätetyp, den Sie exportieren möchten, und klicken Sie auf das Symbol zum Herunterladen. Ihr Browser lädt eine Datei mit dem Namen "&lt; Gerätetyp &gt; .json" mit der Gerätetypdefinition herunter.

![Export device type](/guides/images/users-guide/fieldbusexport.png)

Um einen Gerätetyp zu importieren, klicken Sie auf den Link "Importieren". Dadurch wird ein Dialog geöffnet, in dem Sie zwischen dem Import eines fertigen Gerätetyps und dem Hochladen eines zuvor exportierten Gerätetyps auswählen können. Sie können den Namen des Gerätetyps beim Import mit dem Feld "Neuer Gerätetypname" ändern.

![Import device type](/guides/images/users-guide/fieldbusimport.png)

## <a name="scadasvg"></a>Vorbereitung der SVG-Dateien für das SCADA-Widget

Die SCADA-Widgets überprüfen hochgeladene SVG-Dateien auf Platzhalter. Diese Platzhalter werden durch tatsächliche Werte von Geräten ersetzt. Platzhalter haben eine bestimmte Syntax und können überall in der SVG-Datei verwendet werden. Um einen Platzhalter hinzuzufügen, geben Sie den Namen des Platzhalters in doppelte geschweifte Klammern mit Ihrer Entwurfsanwendung oder einem Texteditor ein. 

	<text class="text" xt-anchor="middle" x="100" y="236.982125" width="200" ...>
		{{batteryValue}}
	</text>
