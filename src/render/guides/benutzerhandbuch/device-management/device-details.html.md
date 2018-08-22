---
order: 31
title: Gerätedetails
layout: redirect
---

<a name="device-details"></a>

Zu jedem Gerät werden im Device Management detaillierte Informationen angezeigt. Welche Informationen jeweils angezeigt werden, ist abhängig vom Gerätetypen, der Gerätenutzung und der Konfiguration der Plattform. 

Klicken Sie auf ein Gerät in der Geräteliste, um die Gerätedetails anzuzeigen.

<img src="/guides/images/benutzerhandbuch/devmgmt-device-details.png" alt="Device details" style="max-width: 100%">

Die Gerätedetails sind in verschiedene Registerkarten aufgeteilt. Die Anzahl der Registerkarten ist dynamisch und abhängig von den jeweils verfügbaren Informationen, d.h. Registerkarten werden nur angezeigt, wenn entsprechende Informationen für das jeweilige Gerät vorhanden sind.

Eingangs wird die Registerkarte **Info** angezeigt, die allgemeine Informationen zu einem Gerät enthält und bei allen Geräte vorhanden ist. 

Jedes Gerät enthält mindestens die folgenden Registerkarten: Info, Alarme, Steuerung, Ereignisse, Serviceüberwachung, Identifikator (siehe auch die folgende Liste der Registerkarten).

Die folgenden Registerkarten sind die am häufigsten vorhandenen und werden in den folgenden Abschnitten detailliert beschrieben: 

|Registerkarte|Beschreibung|
|:---|:---|
|[Info](#info)|Enthält allgemeine Informationen zum Gerät. Für jedes Gerät vorhanden.
|[Kindgeräte](#child-devices)|Listet die Geräte auf, die mit dem aktuellen Gerät verbunden sind. 
|[Messwerte](#measurements)|Zeigt eine Standardvisualisierung der vom Gerät bereitgestellten numerischen Daten in Form von Diagrammen.
|[Alarme](#alarms)|Enthält Informationen zu den Alarmen des Geräts. Siehe auch [Arbeiten mit Alarmen](#alarm-monitoring). Für jedes Gerät vorhanden.
|[Konfiguration](#config)|Ermöglicht die manuelle Konfiguration von Geräteparametern und Einstellungen als Eingaben in einem Textformat. Siehe auch [Konfigurations-Repository](#configuration-repository) für Informationen zu binärer Konfiguration.
|[Steuerung](#control)|Zeigt Kommandos an, die zum Gerät gesendet werden. Siehe auch [Verwenden von Kommandos](#operation-monitoring). Für jedes Gerät vorhanden.
|[Netzwerk](#network)|Zeigt Netzwerkinformationen für das Gerät an.
|[Software](#software)|Verwaltet die Firmware des Geräts und die Software, die auf dem Gerät installiert ist.
|[Ereignisse](#events)|Zeigt die mit dem Gerät verbundenen Ereignisse, hilfreich für die Fehlersuche. Siehe auch [Fehlerbehebung von Geräten](#events-all). Für jedes Gerät vorhanden.
|[Standort](#location)|Zeigt den Standort eines Geräts an, falls verfügbar.
|[Logdateien](#logs)|Ermöglicht das Abfragen von Loginformationen für das Gerät.
|[Serviceüberwachung](#service-monitoring)|Ermöglicht die Serviceüberwachung von Maschinen. Siehe auch [Serviceüberwachung](#monitoring-services). Für jedes Gerät vorhanden.
|[Shell](#shell)|Ermöglicht es, über eine Kommandozeile mit entfernten Geräten zu interagieren. 
|[Tracking](#tracking)|Zeigt die Bewegungen des Geräts, falls verfügbar.
|[Identifikator](#identity)|Zeigt die für das Gerät gespeicherten Identifikatoren. Für jedes Gerät vorhanden.

>**Info**: Mögliche weitere spezielle Registerkarten, die nicht hier aufgeführt sind, werden in dem entsprechenden Kontext an anderer Stelle in der Cumulocity-Dokumentation beschrieben. Die Registerkarte **Modbus** beispielsweise ist in der Modbus-Beschreibung unter [Optionale Services > Cloud Fieldbus](/guides/users-guide/optional-services/#cloud-fieldbus) zu finden. 

Ist das Gerät Teil einer Asset-Hierarchie (wie einer Gruppe), wird unter dem Gerätenamen eine Liste von Breadcrumbs angezeigt, um einfach in der Hierarchie navigieren zu können. Da Geräte zu mehreren Hierarchien gehören können, werden möglicherweise mehrere Breadcrumb-Zeilen angezeigt. 

Abhängig vom Gerätetypen und seiner Nutzung sind weitere Aktionen möglich, die in einem Kontextmenü angezeigt werden, wenn Sie **Mehr...** rechts in der oberen Menüleiste klicken. 

<img src="/guides/images/benutzerhandbuch/devmgmt-devices-more-menu.png" alt="More menu" style="max-width: 50%">

Details zu den einzelnen Menüpunkten sind dort beschrieben, wo diese relevant sind.

### <a name="info"></a>Info

Die Registerkarte **Info** fasst die Geräteinformationen in einem Dashboard zusammen, die aus Managementsicht relevant sind.

<img src="/guides/images/benutzerhandbuch/devmgmt-device-info.png" alt="Info dashboard" style="max-width: 100%">

Die Information wird auf den folgenden Karten bereitgstellt:

|Karte|Beschreibung|
|:---|:---|
|Anmerkungen|Enthält optionale Anmerkungen, die über aktuelle Aktivitäten informieren. Anmerkungen können normalerweise nur vom Administrator bearbeitet werden. Um eine Anmerkungen hinzuzufügen oder zu bearbeiten, klicken Sie **Bearbeiten**, geben Sie eine neue Anmerkung oder Änderungen im Textfeld ein und bestätigen Sie Ihre Eingaben, indem Sie das grüne Häkchen rechts vom Textfeld klicken. 
|Gerätestatus|Enthält verbindungsrelevante Informationen, die im Detail unter [Verbindungsüberwachung](#connection-monitoring) beschrieben sind. 
|Gerät und Kommunikation|Enthält einen Datenpunktgraphen, der Echtzeitdaten von bestimmten Messwerten anzeigt. Detaillierte Informationen finden Sie unter [Verwenden des Datenexplorers](/guides/users-guide/cockpit#data-explorer) in der Cockpit-Dokumentation.
|Gerätedaten|Enthält editierbare Informationen zum Gerät ( Name, Typ, ID, Besitzer, zuletzt aktualisiert). Die Felder **ID** und **Zuletzt aktualisiert** können nicht bearbeitet werden. Außerdem werden hier Informationen zur Hardware (editierbar) und Firmware (nicht editierbar) angezeigt, falls verfügbar.
|Aktive kritische Alarme|Zeigt die aktiven kritischen Alarme für das Gerät an. 
|Gruppenzuordnung|Zeigt die Gruppen an, zu denen das Gerät gehört. Außerdem kann das Gerät hier weiteren Gruppen zugeordnet werden oder eine Zuordnung aufgehoben werden. Detaillierte Informationen zum Gruppieren von Geräten finden Sie unter [Gruppieren von Geräten](#grouping-devices).
|Standort|Zeigt den Standort eines Geräts auf einer Karte an, wie vom Gerät gesendet oder manuell eingetragen. Sie auch [Standort](#location).

### <a name="child-devices"></a>Kindgeräte

Die Registerkarte **Kindgeräte** zeigt eine Liste von Geräten, die mit dem aktuellen Gerät verbunden sind. Wenn es sich bei dem aktuellen Gerät beispielsweise um ein Gateway handelt, werden alle Maschinen, die mit dem Gateway verbunden sind, aufgelistet. 

Weitere Informationen zu den angezeigten Details finden Sie unter [Anzeigen von Geräten](#viewing-devices).

### <a name="measurements"></a>Messwerte

Die Registerkarte **Messwerte** zeigt eine Standardvisualisierung der vom Gerät bereitgestellten numerischen Daten in Form von Diagrammen. 

Die Diagramme sind in Messwert-Typen aufgeteilt, die jeweils mehrere Graphen und "Series" enthalten können. Die Abbildung unten zeigt beispielsweise ein Diagramm mit Bewegungsmesswerten, einschließlich Graphen für Beschleunigung in drei Dimensionen sowie ein Diagramm mit Modemstatistiken im Form von Signalstärken und Bit-Fehlerraten.  

![Measurements](/guides/images/users-guide/measurements.png)

Wenn ein Diagramm Graphen mit verschiedenen Einheiten enthält, wir pro Einheit eine Y-Achse dargestellt. In der Beispielabbildung bestehen die Bewegungsmesswerte aus drei Parametern mit der Einheit "Meter je Sekundequadrat", daher wird nur eine Achse dargestellt. Die Modemstatistiken bestehen aus einer Signalstärke in Dezibel Milliwatt und der Bit-Fehlerrate in Prozent, daher wird eine Achse pro Graph dargestellt.

Bewegen Sie den Mauszeiger über den Graphen, um detaillierte Informationen zu den Messwerten anzuzeigen. Neben dem Mauszeiger wird ein Tooltip mit Details zum jeweiligen Messwert angezeigt (der Tooltip rastet bei dem am nächste liegenden Messwert ein).

**Zeitintervall und Aggregation**

Standardmäßig zeigen Diagramme die Ausgangsdaten der letzte Stunde. Um das Zeitintervall der X-Achse zu ändern, öffnen Sie das entsprechende Auswahlmenü rechts oben und wählen Sie ein anderes Zeitintervall.

Wenn Sie das Zeitintervall vergrößern, wechselt der Wert im Feld **Aggregation** automatisch auf "stündlich" oder "täglich". Das Diagramm zeigt nun Bereiche anstelle von einzelnen Datenpunkten. Für "stündlich" zeigt das Diagramm den Bereich des minimalen und maximalen Werts gemessen in der letzten Stunde. Für "täglich" zeigt das Diagramm den Bereich des minimalen und maximalen Werts gemessen über einen Tag. Entsprechend zeigen die Tooltips nun Wertebereiche anstelle von Einzelwerten.

Dies ermöglicht einen effizienten Überblick über größere Zeitintervalle. Es werden maximal 5.000 Datenpunkte pro Graph angezeigt, um eine Überlastung Ihres Desktop-Browsers zu vermeiden. Wenn Sie einen genaueren Fokus wählen, der mehr als 5.000 Datenpunkte ergibt, wird eine entsprechende Warnung angezeigt: "Abgeschnittene Daten. Ändern Sie die Aggregation oder wählen sie einen kürzeren Zeitraum."

Klicken Sie **Echtzeit**, um Echtzeitaktualisierungen der Graphen zu erhalten, sobald neue Daten von den Geräten empfangen werden. 

Sie können die graphische Darstellung und Achsenbegrenzung durch sogenannte "KPIs" modifizieren, siehe [Administration](/guides/users-guide/administration).

**Messwerteformate**

Um Messwertgraphen anzuzeigen, muss das Gerät Messwerte in einem bestimmten Fragmentformat senden.

"fragment<span>&#95;</span>name" : {
	"serie<span>&#95;</span>name" : {
		"value" : ...
		"unit" : ...
	}
}

Beispiel: 

"c8y_SpeedMeasurement": {
      "Speed": { "value": 1234, "unit": "km/h" }
}

"fragment<span>&#95;</span>name" and "serie<span>&#95;</span>name" können durch verschiedene gültige JSON-Property-Namen ersetzt werden, aber es sind keine Leerzeichen oder Sonderzeichen wie [ ],* zulässig. Die Struktur muss genau wie oben ein JSON-Objekt mit zwei Ebenen sein.

### <a name="alarms"></a>Alarme

Die Registerkarte **Alarme** enthält Informationen zu den Alarmen für ein Gerät. Weitere Informationen finden Sie unter [Arbeiten mit Alarmen](#alarm-monitoring).

### <a name="config"></a> Konfiguration

Die Registerkarte **Konfiguratio**n ermöglicht das manuelle Konfigurieren der Parameter und Grundeinstellungen Ihres Geräts in einem Textformat.

im Textfeld können Sie die gewünschten Einstellungen im Textformat eingeben. Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern. 

<img src="/guides/images/users-guide/textconfig.png" alt="Device details" style="max-width: 100%">

Alternativ können Sie sogenannte Konfigurationssnapshots verwenden, siehe [Konfigurationssnapshots](#configuration-repository).

### <a name="control"></a>Steuerung

Die Registerkarte **Steuerung** enthält eine Liste der and das Gerät gesendeten Kommandos. Weitere Informationen zu Kommandos finden Sie unter [Verwenden von Kommandos](#operation-monitoring).

<img src="/guides/images/benutzerhandbuch/devmgmt-device-operations.png" alt="Kommandos" style="max-width: 100%">

### <a name="network"></a>Netzwerk

In der Registerkarte **Netzwerk** können Netzwerkeinstellungen für das Gerät konfiguriert werden. 

<!-- Needs to be documented-->


### <a name="software"></a>Software

Die Registerkarte **Software** ermöglicht es, die Firmware eines Geräts sowie die auf dem Gerät installierte Software zu verwalten und zu aktualisieren. 

Um eine neue Firmware zu installieren, klicken Sie **Firmware installieren**, wählen Sie ein Firmware-Image aus dem [Firmware-Repository](#software-repo) und klicken Sie **Installieren**.

Um eine Software auf einem Gerät zu installieren, klicken Sie entsprechend **Software installieren**, wählen Sie ein Software-Paket aus dem [Software-Repository](#software-repo) und klicken Sie **Installieren**. 

<img src="/guides/images/benutzerhandbuch/devmgmt-device-software.png" alt="Software" style="max-width: 100%">

Das Installieren von Software oder Firmware beinhaltet normalerweise einen Geräteneustart. Um den Fortschritt einer Installation zu überwachen, wechseln Sie zur Registerkarte **Steuerung**.

Um eine Software von einem Gerät zu löschen, fahren Sie mit dem Mauszeiger über den entsprechenden Eintrag und klicken Sie **Löschen**.

### <a name="events"></a>Ereignisse

Die Registerkarte **Ereignisse** zeigt die mit dem Gerät verbundenen Ereignisse an. Dies ermöglicht unter anderem eine Fehlersuche. Weitere Informationen finden Sie unter [Fehlerbehebung von Geräten](#events-all).

### <a name="location"></a>Standort

Die Registerkarte **Standort** zeigt standardmäßig den Standort eines Geräts auf einer Karte und als Koordinaten, wie vom Gerät gesendet, an. Für Geräte, die keinen Standort senden, können Sie manuell einen Standort eingeben. Platzieren Sie einfach den "Pin" an die entsprechende Stelle in der Karte.

Die Registerkarte **Standort** zeigt außerdem, wenn eine Gerät das Attribut "c8y_Position" enthält. Wenn Sie ein neues c8y_Position-Ereignis senden, können Sie das gleiche c8y	_Position-Fragment auf dem Gerät setzen, so dass das Gerät automatisch seine Position in der Karte markiert.

### <a name="logs"></a>Logdateien

Die Registerkarte **Logdateien** ermöglicht es, Loginformationen von Geräten abzufragen. Loginformationen können nach Zeitintervallen, Logtypen, Schlüsselwörtern und der maximalen Anzahl zu transferierender Zeilen gefiltert werden. 

Klicken Sie **Logdatei anfordern** rechts in der oberen Menüleiste der Registerkarte **Logdateien**.

Im folgenden Fenster können Sie die folgende Einstellungen für die Loginformationen spezifizieren: 

- Ein Datums- und Zeitintervall.
- Den Logtypen. Die unterstützten Logs sind üblicherweise geräteabhängig. 
- Einen optionalen Text als Filter. Wenn Sie etwa "Users" eingeben, werden nur Zeilen ausgegeben, die den Begriff  "Users" enthalten.
- Die maximale Anzahl der ausgegebenen Zeilen (von hinten gezählt). Der Standardwert ist 1000.

Klicken Sie **Logdatei anfordern**, um die spezifizierten Daten für das Gerät zu anzufordern.

<img src="/guides/images/benutzerhandbuch/devmgmt-request-logs.png" alt="Logdatei anfordern" style="max-width: 100%">

Das Anfordern einer Logdatei kann je nach Datenvolumen einige Zeit dauern. 

Sobald die Loginformationen vom Gerät auf die Cumulocity-Plattform übertragen wurden, werden Sie auf dem Bildschirm gelistet. Der Eintrag in der Liste enthält das jeweils angeforderte Zeitintervall.  

Klicken Sie auf den Eintrag in der Liste, um die Loginformationen anzuzeigen. 

Wenn Sie mit dem Mauszeiger über einen Eintrag fahren, erscheinen die Schaltflächen **Herunterladen** and **Löschen** zum Herunterladen und Löschen der Logdatei.

<!--### <a name="objects"></a> Objects

In the “Objects” tab of a LWM2M device, you can view all objects, resources and instances of the device. Additionally, you can create new operations, see all currently pending operations and view the history of all previous operations.

![Objects view](/guides/images/users-guide/DeviceManagement/DevMgmt_objects-view.png)

**Info**: In order to see resources in the “Objects” tab, the resources first have to be added in the “Device Protocols” page.

The following operations can be observed in each instance:

- Read Object: Reads all instances for the selected object and lists all available resources for each instance.
![Read Objects](/guides/images/users-guide/DeviceManagement/DevMgmt_read-object.png)
- Read Instance: Reads the current instance of the given object and lists all available resources.
![Read Instance](/guides/images/users-guide/DeviceManagement/DevMgmt_read-instance.png)
- Create Instance: Creates a new instance for the selected object.
- Delete Instance: Deletes the selected instance.

**Info:**  Some instances do not have all of the listed operations.

Some object cards show additional operations which can be performed. These operations become available after reading the object/instance. For example, device “Reboot” or “Reset error code”. In order to perform these operations, click **Execute**.

![Execute operation](/guides/images/users-guide/DeviceManagement/DevMgmt_execute-operation.png)

More information can be acquired for each resource by hovering over the tooltip icon.

![Tooltip](/guides/images/users-guide/DeviceManagement/DevMgmt_tooltip-hover.png)

Additional information on recent operations can be viewed by clicking the operations button located on the right side of an instance card. The button is only visible if any operation has been performed. The number of unread operations can be seen on the top right of the button. In the example below there is only one.

![Recent operations](/guides/images/users-guide/DeviceManagement/DevMgmt_recent-operations.png)
![Recent operations 2](/guides/images/users-guide/DeviceManagement/DevMgmt_recent-operations2.png)

To view the history of all operations, simply click **View history**. Note that, you will be redirected to the “Control” tab.

![Control tab](/guides/images/users-guide/DeviceManagement/DevMgmt_operations.png)-->

### <a name="service-monitoring"></a>Serviceüberwachung

Zusätzlich zur Verbindungsüberwachung bietet Cumulocity eine Serviceüberwachung von Maschinen, siehe [Serviceüberwachung](#monitoring-services).

### <a name="shell"></a>Shell

Die Registerkarte **Shell** ermöglicht es, interaktiv mit entfernten Geräten zu arbeiten. Viele industrielle Geräte unterstützen Kommandosprachen wie etwa AT-Kommandos für Modems, CSV-artige Kommandos für viele Tracking-Systeme oder aufwendigere Scripting-Mechanismen wie Tixi TiXML. In der Shell können Kommandos in der entsprechenden Sprache an das Gerät gesendet und die Ergebnisse angezeigt werden.

Die Registerkarte **Shell** enthält eine Kommandozeile zur Eingabe der Kommandos.

In der Kommandozeile kann beliebiger Kommandotext eingegeben werden. Klicken Sie **Ausführen**, um das Kommando an das Gerät zu senden. Diese Schaltfläche ist nur aktiviert, wenn das Gerät online ist. 

Klicken Sie **Historie ansehen** rechts in der oberen Menüleiste, um eine Liste der zuvor ausgeführten Kommandos anzuzeigen. Standardmäßig werden die letzten drei Kommandos angezeigt. 

Die Liste zeigt den Status, das Datum und den Text eines Kommandos an. Durch Klicken einer Zeile wird das Ergebnis angezeigt, vorausgesetzt, das Kommando wurde ausgeführt. 

![Device shell](/guides/images/benutzerhandbuch/devmgmt-device-shell.png)

Cumulocity stellt für manche Gerätetypen einige häufig verwendete Kommandos bereit. Klicken Sie **<_Beispielkommando auswählen** rechts in der oberen Menüleiste, um eine Liste der verfügbaren vordefinierten Kommandos anzuzeigen. Wählen Sie das gewünschte Kommando aus und klicken Sie **Verwenden**, um das ausgewählte Kommando in der Kommandozeile einzufügen oder klicken Sie **Ausführen**, um das Kommando unmittelbar auszuführen. Sie können auch selbst neue Kommandos zur Wiederverwendung hinzufügen. 

![Shell-Kommandos](/guides/images/benutzerhandbuch/devmgmt-shell-sample-commands.png)

### <a name="tracking"></a>Tracking

In Cumulocity können Geräte die Historie ihrer Bewegungen festhalten. Diese Bewegungen können in der Registerkarte **Tracking** angezeigt werden. 

**Info**: Die Registerkarte **Tracking** wird nur angezeigt, wenn ein Gerät das Attribut "c8y_Position" enthält.

In der Auswahlliste oben rechts können Sie ein Zeitintervall auswählen (oder eines eingeben, indem Sie "Benutzerdefiniert" auswählen). Die Bewegungen des Geräts während des ausgewählten Zeitintervalls werden als rote Linien in der Karte visualisiert. 

![Tracking](/guides/images/users-guide/tracking.png)

Neben der Karte werden die einzelnen Einträge mit Zeitangabe aufgelistet ("Standortaktualisierungsereignisse"). Wenn Sie auf einen Eintrag klicken, zeigt ein "Pin" auf der Karte den Standort zu diesem Zeitpunkt an. 

Abhängig vom Gerätetypen und der Integration in Cumulocity, können Sie geräteseitiges Geofencing und Bewegungserfassung konfigurieren.

>**Info**: Wenn diese Funktion aktiviert und das Gerät kompatibel ist, kann die Zellen-ID-Information genutzt werden, um die Position des Geräts zu bestimmen. Aktuell werden die Services von [Combain](https://combain.com/) und [Google](https://developers.google.com/maps/documentation/geolocation/intro) unterstützt. Der Benutzer kann die Ortungen basierend auf beiden Datentypen ansehen oder nach GPS-basierten Daten oder Zellen-ID-basierte Daten filtern. 


### <a name="identity"></a>Identifikator

Cumulocity kann Geräte und Assets mit mehreren externen Identifikatoren verknüpfen. Geräte werden beispielsweise oft durch die IMEI ihres Modems, eine Microcontroller-Seriennummer oder ein Asset-Tag identifiziert. Die Registerkarte **Identifikator** listet alle gespeicherten Identifikatoren für ein Gerät auf.

Dies ist etwa hilfreich, wenn Hardware nicht mehr funktioniert und ausgetauscht werden muss, ohne bereits aufgezeichnete Daten zu verlieren. Verbinden Sie die neue Hardware mit Ihrem Konto und modifizieren Sie den Identifikatoren-Eintrag der alten Hardware, so dass er die Identität der neuen Hardware enthält. 


