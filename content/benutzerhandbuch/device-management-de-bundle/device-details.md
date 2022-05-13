---
weight: 31
title: Gerätedetails
layout: redirect
---
Zu jedem Gerät werden im Device Management detaillierte Informationen angezeigt. Welche Informationen jeweils angezeigt werden, ist abhängig vom Gerätetypen, der Gerätenutzung und der Konfiguration der Plattform.

Klicken Sie auf ein Gerät in der Geräteliste, um die Gerätedetails anzuzeigen.

![Device info](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-info.png)

Die Gerätedetails sind in verschiedene Registerkarten aufgeteilt. Die Anzahl der Registerkarten ist dynamisch und abhängig von den jeweils verfügbaren Informationen, d. h. Registerkarten werden nur angezeigt, wenn entsprechende Informationen für das jeweilige Gerät vorhanden sind. Eine detaillierte Beschreibung der Operationen und Fragmente für die jeweilige Gerätedetail-Registerkarte finden Sie in der [Device Management Library](/reference/device-management-library) im *Reference Guide*.

Eingangs wird die Registerkarte **Info** angezeigt, die allgemeine Informationen zu einem Gerät enthält und bei allen Geräte vorhanden ist.

Jedes Gerät enthält mindestens die folgenden Registerkarten: **Info**, **Alarme**, **Steuerung**, **Ereignisse**, **Verfügbarkeit**, **Identifikator** (siehe auch die folgende Liste der Registerkarten).

Die folgenden Registerkarten sind die am häufigsten vorhandenen und werden in den folgenden Abschnitten detailliert beschrieben:

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup><thead>
<tr>
<th align="left">Tab</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/lora-actility">Actility LoRa</a></td>
<td style="text-align:left">Enthält nähere Informationen zu über Actility LoRa verbundenen Geräten. Weitere Informationen finden Sie unter <a href="../../protocol-integration/lora-actility">Actility LoRa</a>.</td>
</tr>
<tr>
<td align="left"><a href="#alarms">Alarme</a></td>
<td align="left">Enthält Informationen zu den Alarmen des Geräts. Siehe <a href="#alarm-monitoring">Verwenden von Alarmen</a>. Für jedes Gerät vorhanden.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../benutzerhandbuch/device-management-de/#connectivity">Connectivity</a></td>
<td style="text-align:left">Stellt die SIM-Management-Funktionalität bereit. Näheres dazu finden Sie unter <a href="../../benutzerhandbuch/device-management-de/#connectivity">Connectivity</a>.</td>
</tr>
<tr>
<td align="left"><a href="#events">Ereignisse</a></td>
<td align="left">Zeigt die mit dem Gerät verbundenen Ereignisse, hilfreich für die Fehlersuche. Siehe auch <a href="#events-all">Fehlerbehebung von Geräten</a>. Für jedes Gerät vorhanden.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/cloud-fieldbus">Fieldbus</a></td>
<td style="text-align:left">Enthält nähere Informationen zu Fieldbus-Geräten. Weitere Informationen finden Sie unter <a href="../../protocol-integration/cloud-fieldbus">Cloud Fieldbus</a>.</td>
</tr>
<tr>
<td align="left"><a href="#firmware">Firmware</a></td>
<td align="left">Verwaltet die Firmware eines Geräts. Siehe <a href="#managing-firmware">Verwalten von Firmware auf einem Gerät</a>.</td>
</tr>
<tr>
<td align="left"><a href="#dev-profile">Geräteprofil</a></td>
<td align="left">Zeigt die Details des aktuell auf dem Gerät installierten Profils an.</td>
</tr>
<tr>
<td align="left"><a href="#identity">Identifikator</a></td>
<td align="left">Zeigt die für das Gerät gespeicherten Identifikatoren. Für jedes Gerät vorhanden.</td>
</tr>
<tr>
<td align="left"><a href="#info">Info</a></td>
<td align="left">Enthält allgemeine Informationen zum Gerät. Für jedes Gerät vorhanden.</td>
</tr>
<tr>
<td align="left"><a href="#child-devices">Kindgeräte</a></td>
<td align="left">Listet die Geräte auf, die mit dem aktuellen Gerät verbunden sind.</td>
</tr>
<tr>
<td align="left"><a href="#config">Konfiguration</a></td>
<td align="left">Ermöglicht die manuelle Konfiguration von Geräteparametern und Einstellungen als Eingaben in einem Textformat. Nähere Informationen zu binärer Konfiguration finden Sie unter <a href="#configuration-repository">Verwalten von Konfigurationen</a>.</td>
</tr>
<tr>
<td align="left"><a href="#logs">Logdateien</a></td>
<td align="left">Ermöglicht das Abfragen von Loginformationen für das Gerät.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/lora-loriot">LORIOT LoRa</a></td>
<td style="text-align:left">Enthält nähere Informationen zu über LORIOT LoRa verbundenen Geräten. Näheres dazu finden Sie unter <a href="../../protocol-integration/lora-loriot">LORIOT LoRa</a>.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/lwm2m">LWM2M</a></td>
<td style="text-align:left">Enthält nähere Informationen zu über LightweightM2M verbundenen Geräten. Näheres dazu finden Sie unter <a href="../../protocol-integration/lwm2m">LWM2M</a>.</td>
</tr>
<tr>
<td align="left"><a href="#measurements">Messwerte</a></td>
<td align="left">Zeigt eine Standardvisualisierung der vom Gerät bereitgestellten numerischen Daten in Form von Diagrammen.</td>
</tr>
<tr>
<td align="left"><a href="#network">Netzwerk</a></td>
<td align="left">Zeigt Netzwerkinformationen für das Gerät an.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/opcua">OPCUA-Server</a></td>
<td style="text-align:left">Enthält nähere Informationen zu über einen OPCUA-Server verbundenen Geräten. Näheres dazu finden Sie unter <a href="../../protocol-integration/opcua">OPCUA</a>.</td>
</tr>
<tr>
<td align="left"><a href="#shell">Shell</a></td>
<td align="left">Ermöglicht es, über eine Kommandozeile mit entfernten Geräten zu interagieren.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/sigfox">Sigfox</a></td>
<td style="text-align:left">Enthält nähere Informationen zu über Sigfox verbundenen Geräten. Näheres dazu finden Sie unter <a href="../../protocol-integration/sigfox">Sigfox</a>.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/snmp">SNMP</a></td>
<td style="text-align:left">Enthält nähere Informationen zu über SNMP verbundenen Geräten. Näheres dazu finden Sie unter <a href="../../protocol-integration/snmp">SNMP</a>.</td>
</tr>
<tr>
<td align="left"><a href="#software">Software</a></td>
<td align="left">Verwaltet die auf einem Gerät installierte Software. Näheres dazu finden Sie unter <a href="#managing-software">Verwalten von Software auf einem Gerät</a>.</td>
</tr>
<tr>
<td align="left"><a href="#location">Standort</a></td>
<td align="left">Zeigt den Standort eines Geräts an, falls verfügbar.</td>
</tr>
<tr>
<td align="left"><a href="#control">Steuerung</a></td>
<td align="left">Zeigt Operationen an, die zum Gerät gesendet werden. Siehe auch <a href="#operation-monitoring">Verwenden von Operationen</a>. Für jedes Gerät vorhanden.</td>
</tr>
<tr>
<td align="left"><a href="#tracking">Tracking</a></td>
<td align="left">Zeigt die Bewegungen des Geräts, falls verfügbar.</td>
</tr>
<tr>
<td align="left"><a href="#availability">Verfügbarkeit</a></td>
<td align="left">Ermöglicht die Verfügbarkeitsüberwachung von Maschinen. Näheres dazu finden Sie unter <a href="#monitoring-availability">Verfügbarkeit</a>. Für jedes Gerät vorhanden.</td>
</tr>
</tbody>
</table>

>**Info:** Mögliche weitere spezielle Registerkarten, die nicht hier aufgeführt sind, werden in dem entsprechenden Kontext an anderer Stelle in der {{< product-c8y-iot >}}-Dokumentation beschrieben. Nutzen Sie die Suchfunktion, um zu den betreffenden Abschnitten zu gelangen. Eine detaillierte Beschreibung der Registerkarte **Modbus** ist beispielsweise unter [Cloud Fieldbus](/protocol-integration/cloud-fieldbus) im *Protocol Integration Guide* zu finden.

Unter dem Namen wird eine Liste von Breadcrumbs angezeigt. Ist das Gerät Teil einer Asset-Hierarchie (z. B. einer Gruppe), können Sie mit Hilfe der Breadcrumbs einfach in der Hierarchie nach oben navigieren. Da Geräte zu mehreren Hierarchien gehören können, werden möglicherweise mehrere Breadcrumb-Zeilen angezeigt.

Abhängig vom Gerätetypen und seiner Nutzung sind weitere Aktionen möglich, die in einem Aktionsmenü angezeigt werden, wenn Sie **Mehr...** rechts in der oberen Menüleiste klicken.

![More menu](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-more.png)

Details zu den einzelnen Menüpunkten sind dort beschrieben, wo diese relevant sind.

<a name="alarms"></a>
### Alarme

Die Registerkarte **Alarme** enthält Informationen zu den Alarmen für ein Gerät. Weitere Informationen finden Sie unter [Verwenden von Alarmen](#alarm-monitoring).

<a name="events"></a>
### Ereignisse

Die Registerkarte **Ereignisse** zeigt die mit dem Gerät verbundenen Ereignisse an. Dies ermöglicht unter anderem eine Fehlersuche. Weitere Informationen finden Sie unter [Fehlerbehebung von Geräten](#events-all).

<a name="firmware"></a>
### Firmware

Weitere Informationen zum Verwalten und Aktualisieren von Firmware auf einem Gerät finden Sie unter [Verwalten von Firmware auf einem Gerät](#managing-firmware).

<a name="dev-profile"></a>
### Geräteprofil

Weitere Informationen zum Anwenden von Geräteprofilen auf ein Gerät finden Sie unter [Geräteprofile auf Geräte anwenden](#applying-device-profiles).

<a name="identity"></a>
### Identifikator

{{< product-c8y-iot >}} kann Geräte und Assets mit mehreren externen Identifikatoren verknüpfen. Geräte werden beispielsweise oft durch die IMEI ihres Modems, eine Microcontroller-Seriennummer oder ein Asset-Tag identifiziert. Die Registerkarte **Identifikator** listet alle gespeicherten Identifikatoren für ein Gerät auf.

Dies ist etwa hilfreich, wenn Hardware nicht mehr funktioniert und ausgetauscht werden muss, ohne bereits aufgezeichnete Daten zu verlieren. Verbinden Sie die neue Hardware mit Ihrem Konto und modifizieren Sie den Identifikatoren-Eintrag der alten Hardware, so dass er die Identität der neuen Hardware enthält.

<a name="info"></a>
### Info

Die Registerkarte **Info** fasst die Geräteinformationen, die aus Managementsicht relevant sind, in einem Dashboard zusammen.

![Device Info](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-infotab.png)

Die Information wird auf den folgenden Karten bereitgestellt:

<table>
<col width = 20%>
<col width = 80%>
<thead>
<tr>
<th style="text-align:left">Karte</th>
<th style="text-align:left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Anmerkungen</td>
<td style="text-align:left">Enthält optionale Anmerkungen, die über aktuelle Aktivitäten informieren. Anmerkungen können normalerweise nur vom Administrator bearbeitet werden. Um eine Anmerkung hinzuzufügen oder zu bearbeiten, klicken Sie auf <strong>Bearbeiten</strong>, geben Sie eine neue Anmerkung oder Änderungen im Textfeld ein und bestätigen Sie Ihre Eingaben, indem Sie auf das grüne Häkchen rechts vom Textfeld klicken. </td>
</tr>
<tr>
<td style="text-align:left">Gerätestatus</td>
<td style="text-align:left">Enthält verbindungsrelevante Informationen, die im Detail unter <a href="#connection-monitoring" class="no-ajaxy">Verbindungsüberwachung</a> beschrieben sind. </td>
</tr>
<tr>
<td style="text-align:left">Gerät und Kommunikation</td>
<td style="text-align:left">Enthält einen Datenpunktgraphen, der Echtzeitdaten von bestimmten Messwerten anzeigt. Bewegen Sie die x-Achse mit dem Mauszeiger, um den Datenpunkt-Zeitmesswert zu verschieben. Zum Hereinzoomen wählen Sie einen Zeitraum aus, zum Herauszoomen des Graphen führen Sie einen Doppelklick aus. Detaillierte Informationen zu Datenpunktgraphen finden Sie unter <a href="/benutzerhandbuch/cockpit-de#data-explorer" class="no-ajaxy">Verwenden des Datenexplorers</a> in der Cockpit-Dokumentation.<br> Folgende Messwerte können hier angezeigt werden: <br>
<strong>Datenpunkte</strong>: c8y_Battery.level, c8y_SignalStrength.rssi, c8y_MemoryMeasurement.Used, c8y_CPUMeasurement.Workload, c8y_NetworkStatistics.Upload, c8y_SignalStrength.RCSP, c8y_SignalStrength.ber, c8y_SignalStrength.ECN0, c8y_NetworkStatistics.Download, c8y_MemoryMeasurement.Total <br>
<strong>Alarme</strong>: c8y_UnavailabilityAlarm<br>
<strong>Ereignisse</strong>: c8y_LocationUpdate</td>
</tr>
<tr>
<td style="text-align:left">Gerätedaten</td>
<td style="text-align:left">Enthält Informationen zum Gerät (ID, Name, Typ, Besitzer, zuletzt aktualisiert). Die Felder <strong>Name</strong> und <strong>Typ</strong> können bearbeitet werden. Unterhalb der allgemeinen Geräteinformationen werden auf der Karte Statusinformationen (nicht editierbar) zu aktiven Alarmen, Verfügbarkeit und Verbindung angezeigt. Außerdem werden hier Informationen zur Hardware (editierbar) und Firmware (nicht editierbar) angezeigt, falls verfügbar.</td>
</tr>
<tr>
<td style="text-align:left">Aktive kritische Alarme</td>
<td style="text-align:left">Zeigt die aktiven kritischen Alarme für das Gerät an.</td>
</tr>
<tr>
<td style="text-align:left">Gruppenzuordnung</td>
<td style="text-align:left">Zeigt die Gruppen an, zu denen das Gerät gehört. Außerdem kann das Gerät hier weiteren Gruppen zugeordnet werden oder eine Zuordnung aufgehoben werden, siehe <a href="#grouping-devices" class="no-ajaxy">Gruppieren von Geräten</a>.</td>
</tr>
<tr>
<td style="text-align:left">Standort</td>
<td style="text-align:left">Zeigt den Standort eines Geräts auf einer Karte an, wie vom Gerät gesendet oder manuell eingetragen, siehe <a href="#location" class="no-ajaxy">Standort</a>.</td>
</tr>
</tbody>
</table>

<a name="child-devices"></a>
### Kindgeräte

Die Registerkarte **Kindgeräte** zeigt eine Liste von Geräten, die mit dem aktuellen Gerät verbunden sind. Wenn es sich bei dem aktuellen Gerät beispielsweise um ein Gateway handelt, werden alle Maschinen, die mit dem Gateway verbunden sind, aufgelistet.

Weitere Informationen zur Kindgeräte-Liste finden Sie unter [Anzeigen von Geräten](#viewing-devices).

<a name="config"></a>
### Konfiguration

Die Registerkarte **Konfiguration** ermöglicht das Konfigurieren der Parameter und Grundeinstellungen Ihres Geräts. Abhängig vom Gerät sind folgende Konfigurationen möglich:
 - Textbasierte Konfigurationen
 - Binärbasierte Konfigurationssnapshots

Weitere Informationen zum Verwalten von binärbasierten Konfigurationssnapshots finden Sie unter [Verwalten von Gerätedaten > Verwalten von Konfigurationen](#configuration-repository).

#### So fordern Sie den aktuellen textbasierten Konfigurationssnapshot an.

1. Navigieren Sie zur Registerkarte **Konfiguration**.
2. Klicken Sie auf **Snapshot vom Gerät abrufen**.

#### So können Sie einen textbasierten Konfigurationssnapshot hinzufügen oder bearbeiten

1. In der Registerkarte **Konfiguration** können Sie manuell die Gerätekonfiguration im Textfeld hinzufügen oder bearbeiten.
2. Klicken Sie auf **Konfiguration an Gerät senden**, um Ihre Eingaben zu speichern.

![Text-based configuration](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-textconfig.png)

> **Info:** Wenn ein Gerät sowohl die textbasierte als auch die binärbasierte Konfiguration unterstützt, zeigt die Registerkarte **Konfiguration** für jeden Konfigurationstyp eine untergeordnete Registerkarte an.

<a name="logs"></a>
### Logdaten

Die Registerkarte **Logdateien** ermöglicht es, Loginformationen von Geräten zu verwalten.

#### So fragen Sie Loginformationen ab

1. Klicken Sie auf **Logdatei anfordern** rechts in der oberen Menüleiste der Registerkarte **Logdateien**.
2. Geben Sie im darauf folgenden Dialog einen Datum- und Uhrzeitbereich für die Loginformationen ein.
3. Wählen Sie den Logdateityp aus der Auswahlliste. Die unterstützten Logs sind üblicherweise geräteabhängig.
4. Legen Sie optional einen Textfilter fest. Wenn Sie etwa "Users" eingeben, werden nur Zeilen ausgegeben, die den Begriff "Users" enthalten.
5. Legen Sie die maximale Anzahl der auszugebenden Zeilen fest (von hinten gezählt). Der Standardwert ist 1000.
1. Klicken Sie auf **Logdatei anfordern**.

Die Loginformationen des Geräts werden abgefragt.

![Logs tab](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-logs.png)

>Das Abfragen der Logdaten von einem Gerät kann einige Zeit in Anspruch nehmen.

Sobald die Logdaten vom Gerät auf die {{< product-c8y-iot >}}-Plattform übertragen wurden, werden Sie in der Registerkarte **Logdateien** gelistet. Die Zeile in der Liste zeigt das jeweils angeforderte Zeitintervall.

Klicken Sie auf den Eintrag in der Liste, um die gesamten Loginformationen anzuzeigen.

#### So laden Sie Logdaten herunter

Bewegen Sie den Mauszeiger über eine Zeile und klicken Sie auf das Herunterladen-Symbol, um den Logauszug in Ihr Dateisystem herunterzuladen.

#### So löschen Sie Logdaten

Bewegen Sie den Mauszeiger über eine Zeile und klicken Sie auf das Löschen-Symbol, um die Loginformationen zu löschen.

<a name="measurements"></a>
### Messwerte

Die Registerkarte **Messwerte** zeigt eine Standardvisualisierung der vom Gerät bereitgestellten numerischen Daten in Form von Diagrammen. Die Diagramme sind in Messwert-Typen aufgeteilt, die jeweils mehrere Graphen und "Series" enthalten können.

Die Abbildung unten zeigt beispielsweise ein Diagramm mit Bewegungsmesswerten, einschließlich Graphen für Beschleunigung in drei Dimensionen sowie ein Diagramm mit Modemstatistiken im Form von Signalstärken und Bit-Fehlerraten.

![Measurements](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-measurements.png)

Wenn ein Diagramm Graphen mit verschiedenen Einheiten enthält, wird pro Einheit eine Y-Achse dargestellt. In der Beispielabbildung bestehen die Bewegungsmesswerte aus drei Parametern mit der Einheit "Meter je Sekundequadrat", daher wird nur eine Achse dargestellt. Die Modemstatistiken bestehen aus einer Signalstärke in Dezibel Milliwatt und der Bit-Fehlerrate in Prozent, daher wird eine Achse pro Graph dargestellt.

Bewegen Sie den Mauszeiger über den Graphen, um detaillierte Informationen zu den Messwerten anzuzeigen. Neben dem Mauszeiger wird ein Tooltip mit Details zum jeweiligen Messwert angezeigt (der Tooltip rastet bei dem am nächsten liegenden Messwert ein).

**Zeitintervall und Aggregation**

Standardmäßig zeigen Diagramme die Ausgangsdaten der letzten Stunde. Um das Zeitintervall der X-Achse zu ändern, öffnen Sie das entsprechende Auswahlmenü rechts oben und wählen Sie ein anderes Zeitintervall.

Wenn Sie das Zeitintervall vergrößern, wechselt der Wert im Feld **Aggregation** automatisch auf "stündlich" oder "täglich". Das Diagramm zeigt nun Bereiche anstelle von einzelnen Datenpunkten. Für "stündlich" zeigt das Diagramm den Bereich des minimalen und maximalen Werts gemessen in der letzten Stunde. Für "täglich" zeigt das Diagramm den Bereich des minimalen und maximalen Werts gemessen über einen Tag. Entsprechend zeigen die Tooltips nun Wertebereiche anstelle von Einzelwerten.

Dies ermöglicht einen effizienten Überblick über größere Zeitintervalle. Es werden maximal 5.000 Datenpunkte pro Graph angezeigt, um eine Überlastung Ihres Desktop-Browsers zu vermeiden. Wenn Sie einen genaueren Fokus wählen, der mehr als 5.000 Datenpunkte ergibt, wird eine entsprechende Warnung angezeigt: "Abgeschnittene Daten. Ändern Sie die Aggregation oder wählen sie einen kürzeren Zeitraum."

Klicken Sie auf **Echtzeit**, um Echtzeitaktualisierungen der Graphen zu erhalten, sobald neue Daten von den Geräten empfangen werden.

Sie können die graphische Darstellung und Achsenbegrenzung durch sogenannte "KPIs" modifizieren, siehe [Administration](/benutzerhandbuch/administration-de).

**Messwerteformate**

Um Messwertgraphen anzuzeigen, muss das Gerät Messwerte in einem bestimmten Fragmentformat senden.

	"fragment_name" : {
		"serie_name" : {
			"value" : ...
			"unit" : ...
		}
	}

Beispiel:

	"c8y_SpeedMeasurement": {
	      "Speed": { "value": 1234, "unit": "km/h" }
	}

`"Fragment_name"` und `"serie_name"` können durch verschiedene gültige JSON-Attributnamen ersetzt werden, aber es sind keine Leerzeichen oder Sonderzeichen wie [ ],* zulässig. Die Struktur muss genau wie oben ein JSON-Objekt mit zwei Ebenen sein.

<a name="network"></a>
### Netzwerk

In der Registerkarte **Netzwerk** können Parameter für das mobile Netzwerk (WAN) und das lokale Netzwerk (LAN) angezeigt und konfiguriert werden.

![Network tab](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-network.png)

Die WAN-Parameter auf der Benutzeroberfläche entsprechen dem ersten im Router gespeicherten Profil. Diese Parameter können remote oder per SMS konfiguriert werden.

> **Info:** Für die SMS-Konfiguration muss der Router so konfiguriert werden, dass er SMS-Kommandos akzeptiert.

#### So konfigurieren Sie WAN-Parameter

1. Geben Sie den Access Point Name (APN) ein.
2. Geben Sie den Benutzernamen und das Passwort Ihres Kontos in der Plattform ein, mit der Sie eine Verbindung herstellen möchten.
3. Wählen Sie den Authentifizierungstyp aus.
4. Klicken Sie auf **Änderungen speichern**, um Ihre Eingaben zu speichern.

#### So konfigurieren Sie LAN-Parameter

Zum Konfigurieren von LAN-Parametern geben Sie einfach **IP-Adresse** und **Subnetzmaske** ein.

> **Info:** Die Felder **Name** und **MAC-Adresse** sind nicht konfigurierbar.

#### So konfigurieren Sie DHCP-Parameter

1. Geben Sie den Adressbereich ein, in dem die Verbindung hergestellt werden kann.
2. Geben Sie den DNS ein.
3. Geben Sie den DNS 2 ein.
4. Geben Sie den Domain-Namen ein.
5. Klicken Sie auf **Änderungen speichern**, um Ihre Eingaben zu speichern.

> **Info:** Wenn die LAN-Konfiguration deaktiviert ist, ist automatisch auch die DHCP-Konfiguration deaktiviert.

<a name="shell"></a>
### Shell

Die Registerkarte Shell ermöglicht es, interaktiv mit entfernten Geräten zu arbeiten. Viele industrielle Geräte unterstützen Kommandosprachen wie etwa AT-Kommandos für Modems, CSV-artige Kommandos für viele Tracking-Systeme oder aufwendigere Scripting-Mechanismen wie Tixi TiXML. In der Shell können Kommandos in der entsprechenden Sprache an das Gerät gesendet und die Ergebnisse angezeigt werden.

Die Registerkarte **Shell** enthält eine Kommandozeile zur Eingabe der Kommandos.

In der Kommandozeile kann beliebiger Kommandotext eingegeben werden. Klicken Sie auf **Ausführen**, um das Kommando an das Gerät zu senden. Diese Schaltfläche ist nur aktiviert, wenn das Gerät online ist.

![Device shell](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-shell.png)

>**Wichtig:** Wenn Sie {{< product-c8y-iot >}} zum Fernsteuern von Maschinen verwenden, vergewissern Sie sich, dass alle Remoteoperationen den Sicherheitsstandards entsprechen und keine Gefahr darstellen.

Klicken Sie auf **Historie ansehen** rechts in der oberen Menüleiste, um zur Registerkarte **Steuerung** zu wechseln, in der eine Liste der zuvor ausgeführten Kommandos angezeigt wird. Weitere Informationen finden Sie unter [Überwachen und Steuern von Geräten > Verwenden von Operationen](#operation-monitoring).

{{< product-c8y-iot >}} stellt für manche Gerätetypen einige häufig verwendete Kommandos bereit. Klicken Sie auf **<_Beispielkommando auswählen** rechts in der oberen Menüleiste, um eine Liste der verfügbaren vordefinierten Kommandos anzuzeigen. Wählen Sie das gewünschte Kommando aus und klicken Sie auf **Verwenden**, um das ausgewählte Kommando in der Kommandozeile einzufügen oder klicken Sie auf **Ausführen**, um das Kommando unmittelbar auszuführen. Sie können auch selbst neue Kommandos zur Wiederverwendung hinzufügen.

![Device shell predefined](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-shell-precommands.png)

<a name="software"></a>
### Software

Weitere Informationen zum Verwalten und Aktualisieren der auf einem Gerät installierten Software finden Sie unter [Verwalten von Software auf einem Gerät](#managing-software).

<a name="location"></a>
### Standort

Die Registerkarte **Standort** zeigt standardmäßig den Standort eines Geräts auf einer Karte und als Koordinaten, wie vom Gerät gesendet, an. Für Geräte, die keinen Standort senden, können Sie manuell einen Standort eingeben. Platzieren Sie einfach den "Pin" an die entsprechende Stelle in der Karte.

![Location tab](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-location.png)

Die Registerkarte **Standort** zeigt außerdem, wenn ein Gerät das Attribut `c8y_Position` enthält. Wenn Sie ein neues `c8y_Position`-Ereignis senden, können Sie das gleiche `c8y_Position`-Fragment auf dem Gerät setzen, so dass das Gerät automatisch seine Position in der Karte markiert.

<a name="control"></a>
### Steuerung

Die Registerkarte **Steuerung** enthält eine Liste der an das Gerät gesendeten Operationen. Weitere Informationen zu Operationen finden Sie unter [Verwenden von Operationen](#operation-monitoring).

![Operations](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-control.png)

<a name="tracking"></a>
### Tracking

In {{< product-c8y-iot >}} können Geräte die Historie ihrer Bewegungen festhalten. Diese Bewegungen können in der Registerkarte **Tracking** angezeigt werden.

>**Info:** Die Registerkarte **Tracking** wird nur angezeigt, wenn ein Gerät das Attribut `c8y_Position` enthält.

In der Auswahlliste oben rechts können Sie ein Zeitintervall auswählen (oder eines eingeben, indem Sie "Benutzerdefiniert" auswählen). Die Bewegungen des Geräts während des ausgewählten Zeitintervalls werden als rote Linien in der Karte visualisiert.

![Tracking tab](/images/benutzerhandbuch/DeviceManagement/devmgmt-devices-tracking.png)

Neben der Karte werden die einzelnen Einträge mit Zeitangabe aufgelistet ("Standortaktualisierungsereignisse"). Wenn Sie auf einen Eintrag klicken, zeigt ein "Pin" auf der Karte den Standort zu diesem Zeitpunkt an.

Abhängig vom Gerätetypen und der Integration in {{< product-c8y-iot >}} können Sie geräteseitiges Geofencing und Bewegungserfassung konfigurieren.

<a name="availability"></a>
### Verfügbarkeit

Die Registerkarte "Verfügbarkeit" ermöglicht die Verfügbarkeitsüberwachung von Maschinen. Näheres dazu finden Sie unter [Überwachen und Steuern von Geräten > Verfügbarkeit](#monitoring-availability).
