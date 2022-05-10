---
weight: 55
title: Widgets-Sammlung
aliases:
  - /benutzerhandbuch/cockpit-de/#widgets
  - /benutzerhandbuch/cockpit-de/#widget
layout: redirect
---

Die Cockpit-Anwendung enthält voreingestellte Widget-Typen. Jeder Widget-Typ ermöglicht es, verschiedene Parameter zu konfigurieren und verschiedene Daten anzuzeigen.

Folgende Typen sind verfügbar:

<table>
<thead>
<colgroup>
       <col style="width: 30%;">
       <col style="width: 70%;">
    </colgroup><thead>
<tr>
<th align="left">Widget</th>
<th align="left">Funktionalität</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><a href="#recent-alarms">Aktuelle Alarme</a></td>
<td align="left">Zeigt alle Alarme aller Schweregrade, sortiert nach Zeit.</td>
</tr>
<tr>
<td align="left"><a href="#alarm-list">Alarmliste</a></td>
<td align="left">Zeigt eine Liste von Alarmen, gefiltert nach Objekten, Alarmschweregrad und Alarmstatus.</td>
</tr>
<tr>
<td align="left"><a href="#all-alarms">Alle kritischen Alarme</a></td>
<td align="left">Zeigt alle Objekte mit einem kritischen Alarm an.</td>
</tr>
<tr>
<td align="left"><a href="#traffic-light">Ampel</a></td>
<td align="left">Zeigt die Zustände eines Geräts im Form einer Ampel.</td>
</tr>
<tr>
<td align="left"><a href="#applications">Anwendungen</a></td>
<td align="left">Zeigt eine Liste mit Links zu verfügbaren Anwendungen.</td>
</tr>
<tr>
<td align="left"><a href="#asset-notes">Asset-Anmerkungen</a></td>
<td align="left">Zeigt Benachrichtigungen, die allen Besitzern des aktuellen Objekts vom Administrator bereitgestellt werden.</td>
</tr>
<tr>
<td align="left"><a href="#asset-properties">Asset-Attribute</a></td>
<td align="left">Zeigt eine benutzerdefinierte Liste von Attributen des aktuellen Objekts.</td>
</tr>
<tr>
<td align="left"><a href="#widget-asset-table">Asset-Tabelle</a></td>
<td align="left">Zeigt eine Tabelle mit Details zu einem ausgewählten Asset und allen seinen Kindgeräten.</td>
</tr>
<tr>
<td align="left"><a href="#widget-image">Bild</a></td>
<td align="left">Zeigt ein einzelnes Bild, das Sie aus Ihrem Dateisystem auswählen können.</td>
</tr>
<tr>
<td align="left"><a href="#data-graph">Datenpunktgraph</a></td>
<td align="left">Zeigt Datenpunkte (Messwerte) in einem Graphen.</td>
</tr>
<tr>
<td align="left"><a href="#data-list">Datenpunktliste</a></td>
<td align="left">Zeigt Datenpunkte (Messwerte) in einer Liste, einen pro Zeile, mit aktuellen Werten und Datenpunktattributen.</td>
</tr>
<tr>
<td align="left"><a href="#data-table">Datenpunkttabelle</a></td>
<td align="left">Listet Datenpunkte (Messwerte) in einer Tabelle auf.</td>
</tr>
<tr>
<td align="left"><a href="#event-list">Ereignisliste</a></td>
<td align="left">Ermöglicht das Überwachen von Ereignissen für ein ausgewähltes Gerät.</td>
</tr>
<tr>
<td align="left"><a href="#fieldbus-device">Fieldbus-Gerät</a></td>
<td align="left">Ermöglicht es, den Status eines Modbus-Geräts anzuzeigen und dieses zu betreiben.</td>
</tr>
<tr>
<td align="left"><a href="#widget-message-sending">Gerätenachricht</a></td>
<td align="left">Sendet eine Nachricht an ein Gerät.</td>
</tr>
<tr>
<td align="left"><a href="#help-service">Hilfe und Service</a></td>
<td align="left">Zeigt Links auf Hilfe- und Service-Dokumente an</td>
</tr>
<tr>
<td align="left"><a href="#widget-html">HTML</a></td>
<td align="left">Zeigt benutzerdefinierten Inhalt im HTML-Format.</td>
</tr>
<tr>
<td align="left"><a href="#info-gauge">Infoanzeige</a></td>
<td align="left">Visualisiert einen Datenpunkt in Form eines Tachos und mehrere Datenpunkte als Beschriftung.</td>
</tr>
<tr>
<td align="left"><a href="#widget-map">Karte</a></td>
<td align="left">Zeigt den Standort eines Geräts oder aller Geräte einer Gruppe.</td>
</tr>
<tr>
<td align="left"><a href="#pie-chart">Kuchendiagramm</a></td>
<td align="left">Zeigt Datenpunkte (Messwerte) mit aktuellen Werten in einem Kuchendiagramm.</td>
</tr>
<tr>
<td align="left"><a href="#linear-gauge">Linearer Zeiger</a></td>
<td align="left">Zeigt Datenpunkte in Form eines linearen Zeigers.</td>
</tr>
<tr>
<td align="left"><a href="#quick-links">Quick Links</a></td>
<td align="left">Stellt mehrere Quick Links zu entsprechenden Operationen bereit.</td>
</tr>
<tr>
<td align="left"><a href="#relay-array-control">Relaisfeldsteuerung</a></td>
<td align="left">Ermöglicht es, Relais in einem Relaisfeld unabhängig voneinander ein- oder auszuschalten.</td>
</tr>
<tr>
<td align="left"><a href="#relay-control">Relaissteuerung</a></td>
<td align="left">Ermöglicht es, ein Geräterelais ein- oder auszuschalten.</td>
</tr>
<tr>
<td align="left"><a href="#widget-rotation">Rotationsmodell</a></td>
<td align="left">Ermöglicht es, ein Objektmodell eines Geräts zu rendern.</td>
</tr>
<tr>
<td align="left"><a href="#widget-scada">SCADA</a></td>
<td align="left">Bietet eine graphische Darstellung eines Gerätestatus.</td>
</tr>
<tr>
<td align="left"><a href="#widget-silo">Silo</a></td>
<td align="left">Zeigt Datenpunkte (Messwerte) mit aktuellen Werten in einer Silo-Darstellung an.</td>
</tr>
<tr>
<td align="left"><a href="#radial-gauge">Tacho</a></td>
<td align="left">Zeigt Datenpunkte in Form eines Tachos.</td>
</tr>
</tbody>
</table>

<a name="recent-alarms"></a>
### Aktuelle Alarme

Das Widget "Aktuelle Alarme" zeigt alle Alarme aller Schweregrade, sortiert nach Zeit. Es können keinen zusätzlichen Parameter konfiguriert werden.

![Recent alarms widget](/images/benutzerhandbuch/cockpit/cockpit-widget-recent-alarms.png)

Nähere Informationen zu Alarmen finden Sie unter [Device Management > Verwenden von Alarmen](/benutzerhandbuch/device-management-de/#alarm-monitoring) im Abschnitt Device Management.

<a name="alarm-list"></a>
### Alarmliste

Das Widget "Alarmliste" zeigt eine Liste von Alarmen, gefiltert nach Objekten, Alarmschweregrad und Alarmstatus. Nähere Informationen zu Alarmen finden Sie unter [Device Management > Verwenden von Alarmen](/benutzerhandbuch/device-management-de/#alarm-monitoring).

![Alarm list widget](/images/benutzerhandbuch/cockpit/cockpit-widget-alarm-list.png)

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets oder -geräte|Gruppen oder Geräte, optional HTML-Ausdrücke, die ausgewertet werden.
|Status|Alarmstatus, der angezeigt wird.
|Typ|Alarmtyp, der angezeigt wird. Klicken Sie auf einen Alarm, um Details anzuzeigen.
|Schweregrad|Alarmschweregrade, die angezeigt werden.
|Reihenfolge|Alarme können nach dem aktiven Status (gefolgt von Schweregrad und Zeit, Standardeinstellung) oder dem Schweregrad (gefolgt von der Zeit) sortiert werden.

<a name="all-alarms"></a>
### Alle kritischen Alarme

Das Widget "Alle kritischen Alarme" zeigt alle Objekte mit einem kritischen Alarm. Neben dem Titel können keine zusätzlichen Parameter konfiguriert werden.

![Critical alarms](/images/benutzerhandbuch/cockpit/cockpit-widget-critical-alarms.png)

Nähere Informationen zu Alarmen finden Sie unter [Device Management > Verwenden von Alarmen](/benutzerhandbuch/device-management-de/#alarm-monitoring) im Abschnitt Device Management.

<a name="traffic-light"></a>
### Ampel

Das "Ampel"-Widget visualisiert den Status eines Geräts im Form einer Ampel.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets oder -geräte|Objekt (Gruppe oder Gerät), das dargestellt wird.
|Statusregeln|Wählen Sie ein Attribut für jede Lampe. Wenn das Attribut einen der folgenden Werte hat, geht die entsprechende Lampe an: true, 1, jede nicht-leere Zeichenkette, jede Zahl außer 0.

<a name="applications"></a>
### Anwendungen

Das Widget "Anwendungen" zeigt eine Liste mit Links zu allen verfügbaren Anwendungen. Neben dem Titel können keine zusätzlichen Parameter konfiguriert werden.

![Applications widget](/images/benutzerhandbuch/cockpit/cockpit-widget-applications.png)

Nähere Informationen zu Anwendungen finden Sie unter [Administration > Verwalten von Anwendungen](/benutzerhandbuch/administration-de#managing-applications).


<a name="asset-notes"></a>
### Asset-Anmerkungen

Das Widget "Asset-Nachrichten" zeigt Benachrichtigungen, die allen Besitzern des aktuellen Objekts vom Administrator bereitgestellt werden.

![Asset notes widget](/images/benutzerhandbuch/cockpit/cockpit-widget-asset-notes.png)

Nur Benutzer, die die Berechtigung haben, das Start-Dashboard zu bearbeiten, können solche Benachrichtigungen bereitstellen.


<a name="asset-properties"></a>
### Asset-Attribute

Das Widget "Asset-Attribute" zeigt eine benutzerdefinierte Liste von Attributen des aktuellen Objekts. Das aktuelle Objekt kann ein Gerät oder eine Gruppe sein.

![Asset properties widget](/images/benutzerhandbuch/cockpit/cockpit-widget-asset-properties.png)


**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets oder -geräte|Gruppen oder Geräte, die ausgewertet werden.
|Attribute|Liste von Attributen, siehe [Widget "Asset-Tabelle"](#widget-asset-table).

>**Info:** Im Ansichtsmodus zeigt diese Widget nur Attribute an, die nicht leer sind.

<a name="widget-asset-table"></a>
### Asset-Tabelle

Das Widget "Asset-Tabelle" zeigt eine Tabelle mit Details zu einem ausgewählten Asset und allen seinen Kindgeräten. Dies ist ein sehr mächtiges Widget, dass es ermöglicht, ausgewählte Attribute von Objekten in einer Tabelle zu arrangieren.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets oder -geräte|Objekte, für die die Kindgeräte angezeigt werden. Dies ist üblicherweise ein Gruppenobjekt.
|Attribute|Attribute oder Aktionen eines Objekts, die als Spalten in der Tabelle visualisiert werden.

**Beispiel**

Im folgenden Screenshot sind 5 Spalten konfiguriert. Die drei Spalten "Meter", "Vendor" und "Owner" beziehen sich auf die Attribute "name", "type" und "owner". Außerdem gibt es zwei Aktionen, eine für das Umschalten des Wartungsmodus und eine für das Neustarten des Systems.

![Asset table widget](/images/benutzerhandbuch/cockpit/cockpit-widget-asset-table.png)

Die daraus resultierende Tabelle wird folgendermaßen visualisiert:
![Asset table widget example](/images/benutzerhandbuch/cockpit/cockpit-widget-asset-table-example.png)

#### So fügen Sie Attribute hinzu

Klicken Sie auf **+Attribut hinzufügen** und wählen Sie ein oder mehrere Attribute aus.

> **Info:** Das Attribut "Anzahl aktiver Alarme" zeigt aktive Alarme als Symbole in der Tabelle. Wenn Sie dieses Attribut auswählen, müssen Sie den Renderer "Anzahl aktiver Alarme" in der Spaltenliste konfigurieren.

#### So fügen Sie Aktionen hinzu

1. Klicken Sie auf **+Kommando hinzufügen**.
1. Wählen Sie **Wartungsmodus umschalten** um die entsprechende vordefinierte Aktion hinzuzufügen.
1. Wählen Sie **Operation erstellen**, um eine Schaltfläche zu erstellen, die ein Shell-Kommando ausführt. Im darauf folgenden Dialog können Sie eine Beschriftung für die Schaltfläche und das auszuführende Shell-Kommando eingeben.

![Reboot device button configuration](/images/benutzerhandbuch/cockpit/cockpit-widget-asset-table-buttonconfig.png)

>**Info:** Der Dialog zeigt die vordefinierten Shell-Kommandos des ersten Geräts, das Shell-Kommandos unterstützt. Gibt es kein solches Gerät, ist die Liste leer. Weitere Informationen finden Sie unter [Device Management > Gerätedetails > Shell](/benutzerhandbuch/device-management-de/#shell).<br>
Sie können auch das JSON-Format für die Operation eingeben, das zum Gerät gesendet wird. Fragen Sie den Gerätehersteller nach unterstützten Operationen, um weitere Details zu erfahren.

#### So ändern Sie die Tabelle

Um die Kopfzeile einer Spalte zu bearbeiten, klicken Sie auf den Wert in der Spalte **Beschriftung** und bearbeiten Sie die Beschriftung.

Sie können die Spalten umsortieren, in dem Sie auf das Symbol ganz links in einer Zeile klicken und den Eintrag durch Ziehen und Ablegen verschieben.

Um ein Attribut oder eine Aktion zu löschen, fahren Sie mit dem Mauszeiger über die entsprechende Zeile und klicken Sie auf **Löschen** auf der rechten Seite.

<a name="widget-image"></a>
### Bild

Das Widget "Bild" ermöglicht es, ein einzelnes Bild anzuzeigen, das Sie aus Ihrem Dateisystem hochladen können. Es können keinen zusätzlichen Parameter konfiguriert werden.

<a name="data-graph"></a>
### Datenpunktgraph

Das Widget "Datenpunktgraph" zeigt einen Datenpunkt (Messwert) in einem Graphen. Die Visualisierung ist identisch mit der im [Daten-Explorer](/benutzerhandbuch/cockpit-de/#data-explorer).

![Data Point Graph widget](/images/benutzerhandbuch/cockpit/cockpit-datapointsgraph-widget.png)

Am einfachsten erstellen Sie ein "Datenpunktgraph"-Widget, indem Sie zum Daten-Explorer navigieren, auf <b>Mehr...</b> in der oberen Menüleiste klicken und <b>Als Widget zum Dashboard senden</b> wählen.

Weitere Informationen zu den konfigurierbaren Parametern finden Sie unter [Visualisieren von Daten mit dem Daten-Explorer](/benutzerhandbuch/cockpit-de/#data-explorer).

Durch den Umschalter **Auto-Scroll** rechts oben am Datenpunktgraph wird das Anzeigeverhalten bestimmt:

* Auto-Scroll aktiviert - Wenn ein neuer Messwert eintrifft, scrollt das Widget automatisch nach oben, so dass Sie den aktuellsten Wert sehen können.
* Auto-Scroll deaktiviert - Wenn ein neuer Messwert eintrifft, ändert sich die Anzeige nicht und die Tabelle zeigt weiterhin denselben Datenabschnitt.

![Auto-scroll toogle](/images/benutzerhandbuch/cockpit/cockpit-data-point-table-widget-with-auto-scroll.png)

<a name="data-list"></a>
### Datenpunktliste

Das Widget "Datenpunktliste" zeigt Datenpunkte (Messwerte) in einer Liste, einen pro Zeile, mit aktuellen Werten und Datenpunktattributen.

**Konfigurierbare Parameter**

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Titel</td>
<td align="left">Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.</td>
</tr>
<tr>
<td align="left">Datenpunkte</td>
<td align="left">Zeigt eine Liste verfügbarer Datenpunkte. Sie müssen mindestens einen Datenpunkt aktivieren. Klicken Sie auf <strong>Datenpunkt hinzufügen</strong>, um einen Datenpunkt zur Liste hinzuzufügen. Informationen zum Hinzufügen von Datenpunkten finden Sie unter <a href="#add-data-points">Daten-Explorer &gt; Hinzufügen von Datenpunkten</a>.</td>
</tr>
<tr>
<td align="left">Sichtbare Tabellenspalten</td>
<td align="left">Spalten, die angezeigt werden: <br><strong>Beschriftung</strong>: Beschriftung des Datenpunkts. Details finden Sie unter <a href="../../benutzerhandbuch/cockpit-de/#data-explorer">Visualisieren von Daten im Daten-Explorer</a>.<br><strong>Ziel</strong>: Zielwert. Kann im <a href="../../benutzerhandbuch/cockpit-de/#data-explorer">Daten-Explorer</a> oder in der <a href="../../benutzerhandbuch/cockpit-de/#data-point-library">Datenpunktbibliothek</a> konfiguriert werden.<br>Aktuell: Aktueller Wert. <br><strong>Differenz</strong>: Absolute Differenz zwischen aktuellem Wert und Zielwert. <br><strong>Differenz %</strong>: Prozentwert der Differenz zwischen aktuellem Wert und Zielwert. <br><strong>Asset</strong>: Name des Geräts oder der Gruppe des Datenpunkts.</td>
</tr>
</tbody>
</table>

<a name="data-table"></a>
### Datenpunkttabelle

Die Konfiguration des Widgets "Datenpunkttabelle" ist ähnlich wie die des Widgets "Datenpunktgraph". Die Daten werden jedoch nicht als Linien, sondern als Tabelle dargestellt.

Das Widget "Datenpunkttabelle" zeigt Daten basierend auf ausgewählten Datenpunkten, einem Zeitintervall und Aggregation.

Werte außerhalb eines bestimmten Bereichs, basierend auf konfigurierten gelben und roten Bereichen, werden in der Tabelle hervorgehoben.

![Data point table](/images/benutzerhandbuch/cockpit/cockpit-datapointtable.png)

<a name="event-list"></a>
### Ereignisliste

Das Widget "Ereignisliste" ermöglicht es, Ereignisse für ein ausgewähltes Gerät zu überwachen.

![Event list widget](/images/benutzerhandbuch/cockpit/cockpit-widget-event-list.png)

Außerdem kann ein Zeitintervall festgelegt und Ereignisse können in Echtzeit überwacht werden.

<a name="fieldbus-device"></a>
### Fieldbus-Gerät

Das Widget "Fieldbus-Gerät" ermöglicht es, den Status eines Modbus-Geräts anzuzeigen und dieses zu betreiben.

Weitere Informationen zum Widget "Fieldbus-Gerät" finden Sie unter [Cloud Fieldbus > Monitoring device status using the Fieldbus device widget](/protocol-integration/cloud-fieldbus/#fieldbus-device-widget) im *Protocol Integration Guide*.

<a name="widget-message-sending"></a>
### Gerätenachricht

Das Widget "Gerätenachricht" sendet eine Nachricht an ein Gerät. Das Verhalten des Geräts selbst ist geräteunabhängig. Nur verfügbar für Geräte, die die Operation `c8y_Message` unterstützen.

<a name="help-service"></a>
### Hilfe und Service

Das Widget "Hilfe und Service" zeigt Links zu Hilfe- und Serviceangeboten. Es können keinen zusätzlichen Parameter konfiguriert werden.

![Help and service widget](/images/benutzerhandbuch/cockpit/cockpit-widget-help-service.png)


<a name="widget-html"></a>
### HTML

Das Widget "HTML" zeigt benutzerdefinierten Inhalt. Die Inhalt kann mit HTML formatiert werden.

**Konfigurierbare Parameter**

* Ziel-Assets oder -geräte: Wählen Sie die Objekte aus, für die optionale HTML-Ausdrücke ausgewertet werden sollen.

* HTML-Code

	Die folgenden Variablen können im HTML-Code verwendet werden:

	* {{devicesCount}}: Gesamtanzahl der Geräte.

	* {{usersCount}}: Gesamtanzahl der Benutzer.

	* {{deviceGroupsCount}}: Gesamtanzahl der Gruppen.

	* {{device.name}}: Name des Geräts.

	* {{device.*property*}}: Allgemeinere Form des oben genannten. Sie können jedes Attribut des Geräts ansprechen.

	* {{device.c8y_Hardware.model}}: Modell des Geräts.

	* {{device.*fragment*.*property*}}: Allgemeinere Form des oben genannten. Sie können jedes Attribut oder Fragment des Geräts ansprechen.

"Device" bezieht sich auf das im Widget-Konfigurationsparameter ausgewählte Zielgerät.<br>
"fragment.property" bezieht sich auf die Attribute des betreffenden Geräts. Um die verfügbaren Attributnamen anzuzeigen, können Sie in der Konfiguration des Widgets "Asset-Attribut" oder "Asset-Tabelle" auf **+Attribut hinzufügen** klicken. Daraufhin wird eine Tabelle der unterstützten Attribute angezeigt. Sie können die Werte aus der Spalte **Attribut** kopieren und einfügen. Generierte Attribute dieser Widgets sind nicht in den HTML-Widgets verfügbar.

![HTML widget](/images/benutzerhandbuch/cockpit/cockpit-widget-html.png)

Wenn Sie im Feld **HTML-Code** einen Link verwenden möchten, etwa zu einem Dashboard, müssen Sie folgendes Format verwenden:

```html
  <a style="cursor:pointer;" onclick="location.hash = '#/group/<<group-id>>/dashboard/<<dashboard-id>>'">Link zu einem anderen Dashboard</a><br />
```

<a name="info-gauge"></a>
### Infoanzeige

Das Widget "Infoanzeige" visualisiert einen Datenpunkt in Form eines Tachos und mehrere Datenpunkte als Beschriftung.

![Info gauge widget](/images/benutzerhandbuch/cockpit/cockpit-widget-info-gauge.png)

Sie können einen Datenpunkt für das Tacho auswählen sowie mehrere Datenpunkte, die als Beschriftung auf der linken Seite angezeigt werden.

![Info gauge widget data point gauge](/images/benutzerhandbuch/cockpit/cockpit-widget-data-gauge.png)

![Info gauge widget data point label](/images/benutzerhandbuch/cockpit/cockpit-widget-data-labels.png)

Sie müssen mindestens einen Datenpunkt in jedem Bereich aktivieren, um das Widget "Infoanzeige" zu erstellen.

<a name="widget-map"></a>
### Karte

Das Widget "Karte" zeigt den Standort eines Geräts oder aller Geräte einer Gruppe an.

![Info gauge widget](/images/benutzerhandbuch/cockpit/cockpit-widget-map.png)

Sie können den Inhalt der Karte mit dem Mauszeiger verschieben sowie mit den Schaltflächen **Plus** und **Minus** rein- bzw. rauszoomen.

Die Symbole, die die Geräte repräsentieren, sind farbkodiert. Die Farben werden nach folgenden Regeln verwendet:

* Rot = Mindestens ein KRITISCHER Alarm
* Orange = Mindestens ein WICHTIGER Alarm
* Gelb = Mindestens ein WENIGER WICHTIGER Alarm
* Blau = Mindestens eine WARNUNG
* Grün = Keine Alarme

Klicken Sie auf ein Gerätesymbol, um folgende Details in einem Popup-Fenster anzuzeigen:

* Name des Geräts. Klicken Sie darauf, um zu diesem Gerät zu navigieren.
* Datum, an welchem das Gerät zuletzt seinen Standort gesendet hat, wenn verfügbar.
* Umschalter, um die Geräte-Tracks für die vergangenen und zukünftigen Tage anzuzeigen bzw. zu verbergen.

**Konfigurierbare Parameter**

Ziel-Assets oder -geräte: Geräte, die auf der Karte angezeigt werden. Im Falle einer Gruppe werden alle Geräte in dieser Gruppe (aber nicht in Untergruppen) angezeigt.

>**Info:** Wenn keines der Zielgeräte einen bekannten Standort hat, zeigt das Widget eine Weltkarte ohne Symbol.

<a name="pie-chart"></a>
### Kuchendiagramm

Das Widget "Kuchendiagramm" zeigt Datenpunkte (Messwerte) mit aktuellen Werten in einem Kuchendiagramm.

**Konfigurierbare Parameter**

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Titel</td>
<td align="left">Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.</td>
</tr>
<tr>
<td align="left">Kuchendiagramm-Optionen</td>
<td align="left">Auswahloptionen zum Anzeigen von Tooltips, Prozentwerten und Legenden im Kuchendiagramm.</td>
</tr>
<tr>
<td align="left">Datenpunkte</td>
<td align="left">Zeigt eine Liste verfügbarer Datenpunkte. Sie müssen mindestens einen Datenpunkt aktivieren. Klicken Sie auf <strong>Datenpunkt hinzufügen</strong>, um einen Datenpunkt zur Liste hinzuzufügen. Informationen zum Hinzufügen von Datenpunkten finden Sie unter <a href="#add-data-points">Daten-Explorer &gt; Hinzufügen von Datenpunkten</a>.</td>
</tr>
</tbody>
</table>

<a name="linear-gauge"></a>
### Linearer Zeiger

Das Widget "Linearer Zeiger" visualisiert Datenpunkte in Form eines linearen Messgeräts. Minimale und maximale Zielwerte werden ebenfalls angezeigt.

![Info gauge widget](/images/benutzerhandbuch/cockpit/cockpit-widget-linear-gauge.png)

>**Info:** Wenn eine Beschriftung nicht vollständig angezeigt werden kann, können Sie sich damit behelfen, den minimalen und maximalen Wert zu erhöhen und so die Beschriftung in den lesbaren Bereich zu verschieben.

Sie müssen mindestens einen Datenpunkt aktivieren, um das Widget "Linearer Zeiger" zu erstellen.


<a name="quick-links"></a>
### Quick Links

Das Widget "Quick links" zeigt verschiedene Links für den schnellen Zugriff auf relevante Operationen an. Es können keinen zusätzlichen Parameter konfiguriert werden.

![Quick links widget](/images/benutzerhandbuch/cockpit/cockpit-widget-quick-links.png)



<a name="relay-array-control"></a>
### Relaisfeldsteuerung

Das Widget "Relaisfeldsteuerung" ermöglicht es, Relais in einem Relaisfeld unabhängig voneinander an- oder auszuschalten. Nur verfügbar für Geräte, die diese Art von Operation unterstützen.

<a name="relay-control"></a>
### Relaissteuerung

Das Widget "Relaissteuerung" ermöglicht es, ein Geräterelais an- oder auszuschalten. Nur verfügbar für Geräte, die diese Art von Operation unterstützen.

<a name="widget-rotation"></a>
### Rotationsmodell

Das Widget "Rotationsmodell" ermöglicht es, ein Objektmodell eines Geräts zu rendern.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets oder -geräte|Objekt (Gruppe oder Gerät), das dargestellt wird.
|Objektmodell für das Rendering|Wählen Sie einen Objektmodelltyp für das Rendering. Modelltyp für das Rendering, entweder "Box" oder "Telefon".
|Gitternetz|Die Option "Gitternetz" kann an- oder abgeschaltet werden (Standardeinstellung = an). Der "Gitternetz"-Modus stellt das Objekt in einer netzartigen Repräsentation dar.
|Kameratyp|Wählen Sie den zu verwendenden Kameratyp. Zur Auswahl stehen die Optionen "Orthografische Kamera" und "Perspektivische Kamera".

Im Rotation-Widget kann das Objekt durch Ziehen und Bewegen gedreht werden. Außerdem kann mit der Maus rein- und rausgezoomt werden.

<a name="widget-scada"></a>
### SCADA

Das Widget "SCADA" bietet eine graphische Darstellung eines Gerätestatus.

Weitere Informationen zum Widget "SCADA" finden Sie unter [Cloud Fieldbus > Monitoring status using the SCADA widget](/protocol-integration/cloud-fieldbus/#scada) im *Protocol Integration Guide*.

> **Info:** Alle SVG-Dateien werden bereinigt, um schädlichen Code zu entfernen.

![SCADA widget](/images/benutzerhandbuch/cockpit/cockpit-widget-scada.png)

<a name="widget-silo"></a>
### Silo

Das "Silo"-Widget zeigt Datenpunkte (Messwerte) mit aktuellen Werten in einer Silo-Darstellung an.

**Konfigurierbare Parameter**

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Feld</th>
<th align="left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Titel</td>
<td align="left">Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.</td>
</tr>
<tr>
<td align="left">Datenpunkte</td>
<td align="left">Zeigt eine Liste verfügbarer Datenpunkte. Sie müssen mindestens einen Datenpunkt aktivieren. Klicken Sie auf <strong>Datenpunkt hinzufügen</strong>, um einen Datenpunkt zur Liste hinzuzufügen. Informationen zum Hinzufügen von Datenpunkten finden Sie unter <a href="#add-data-points">Daten-Explorer &gt; Hinzufügen von Datenpunkten</a>.</td>
</tr>
</tbody>
</table>

<a name="radial-gauge"></a>
### Tacho

Das Widget "Tacho" visualisiert Datenpunkte in Form eines Tachos.

![Radial gauge widget](/images/benutzerhandbuch/cockpit/cockpit-widget-radial-gauge.png)

Sie müssen mindestens einen Datenpunkt aktivieren, um das Widget "Tacho" zu erstellen.
