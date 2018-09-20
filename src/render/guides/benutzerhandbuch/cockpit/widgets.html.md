---
order: 50
title: Widgets-Sammlung
layout: redirect
---

Das Cockpit enthält voreingestellte Widget-Typen. Jeder Widget-Typ ermöglicht es, verschiedene Parameter zu konfigurieren und verschiedene Daten anzuzeigen. Im folgenden Abschnitt werden, in alphabetischer Reihenfolge, alle verfügbaren Widget-Typen und ihre Konfigurationsparameter beschrieben.

### Widget "Aktuelle Alarme"

Das Widget "Aktuelle Alarme" zeigt alle Alarme aller Schweregrade, sortiert nach Zeit. Es können keinen zusätzlichen Parameter konfiguriert werden.

<img src="/guides/images/users-guide/Cockpit/Cockpit_CreateAlarmList.png" name="Alarm list widget" style="width:75%;"/>

Nähere Informationen zu Alarmen finden Sie unter [Verwenden von Alarmen](/guides/benutzerhandbuch/device-management/#alarm-monitoring) im Abschnitt Device Management.

### Widget "Alarmliste"

Das Widget "Alarmliste" zeigt eine Liste von Alarmen, gefiltert nach Objekten, Alarmschweregrad und Alarmstatus. 

Nähere Informationen zu Alarmen finden Sie unter [Verwenden von Alarmen](/guides/benutzerhandbuch/device-management/#alarm-monitoring) im Abschnitt Device Management.

**Konfigurierbare Parameter**

<img src="/guides/images/users-guide/Cockpit/Cockpit_CreateAlarmList.png" name="Create Alarm list widget" style="width:75%;"/>

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets oder -geräte|Gruppen oder Geräte, optional HTML-Ausdrücke, die ausgewertet werden.
|Status|Alarmstatus, der angezeigt wird.
|Typ|Alarmtyp, der angezeigt wird. Klicken Sie auf einen Alarm, um Details anzuzeigen.
|Schweregrad|Alarmschweregrad, die angezeigt werden.
|Reihenfolge|Alarme können nach dem aktiven Status (gefolgt von Schweregrad und Zeit, Standardeinstellung) oder dem Schweregrad (gefolgt von der Zeit) sortiert werden.

### Widget "Alle kritischen Alarme"

Das Widget "Alle kritischen Alarme" zeigt alle Objekte mit einem kritischen Alarm. Es können keinen zusätzlichen Parameter konfiguriert werden.  

Nähere Informationen zu Alarmen finden Sie unter [Verwenden von Alarmen](/guides/benutzerhandbuch/device-management/#alarm-monitoring) im Abschnitt Device Management.


### Widget "Ampel"

Das "Ampel"-Widget visualisiert den Status eines Geräts im Form einer Ampel.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Zeil-Asset oder -gerät|Objekt (Gruppe oder Gerät), das dargestellt wird.
|Statusregeln|Wählen Sie ein Attribut für jede Lampe. Wenn das Attribut einen der folgenden Werte hat, geht die entsprechende Lampe an: wahr, 1, jede nicht-leere  Zeichenkette, jede Zahl außer 0.


### Widget "Anwendungen"

Das Widget "Anwendungen" zeigt alle Liste mit Links zu allen verfügbaren Anwendungen. Es können keinen zusätzlichen Parameter konfiguriert werden. 

Nähere Informationen zu Anwendungen finden Sie unter [Administration > Verwalten von Anwendungen](/guides/benutzerhandbuch/administration#managing-applications).


### Widget "Asset-Attribute"

Das Widget "Asset-Attribute" zeigt eine benutzerdefinierte Liste von Attributen des aktuellen Objekts. Das aktuelle Objekt kann ein Gerät oder eine Gruppe sein.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets oder -geräte|Gruppen oder Geräte, die ausgewertet werden.
|Attribute|Liste von Attributen, siehe [Widget "Asset-Tabelle"](#widget-asset-table).

>**Info:** Im Ansichtsmodus zeigt diese Widget nur Attribute an, die nicht leer sind.


### Widget "Asset-Nachrichten"

Das Widget "Asset-Nachrichten" zeigt Benachrichtigungen, die allen Besitzern des aktuellen Objekts vom Administrator bereitgestellt werden. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_AssetNotes.png" name="Asset notes widget" style="width:75%;"/>

Nur Benutzer, die die Berechtigung haben, das Start-Dashboard zu bearbeiten, können solche Benachrichtigungen bereitstellen.


### <a name="widget-asset-table"></a> Widget "Asset-Tabelle"

Das Widget "Asset-Tabelle" zeigt eine Tabelle mit Details zu den Kindgeräten an. Dies ist ein sehr mächtiges Widget, dass es ermöglicht, ausgewählte Attribute von Objekten in einer Tabelle zu arrangieren. 

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Assets und -geräte|Objekte, für die die Kindgeräte angezeigt werden. Dies ist üblicherweise ein Gruppenobjekt.
|Attribute|Attribute oder Aktionen eines Objekts, die als Spalten in der Tabelle visualisiert werden. 

**Beispiel**

Im folgenden Screenshot sind 5 Spalten konfiguriert. Die Spalten "Meter", “Vendor”, und “Owner” beziehen sich auf die Attribute “name”, type” und “owner”. Außerdem gibt es zwei Aktionen, eine für das Umschalten des Wartungsmodus und eine für das Neustarten des Systems. 

![image alt text](/guides/images/users-guide/image_17.png)

Die daraus resultierende Tabelle wird folgendermaßen visualisiert:
![image alt text](/guides/images/users-guide/image_18.png)

**Hinzufügen von Attributen**

Um ein Attribut hinzuzufügen, klicken Sie **+Attribut hinzufügen** und wählen Sie ein oder mehrere Attribute aus. 

**Info**: Das Attribut "Anzahl aktiver Alarme" zeigt aktive Alarme als Symbole in der Tabelle. Wenn Sie dieses Attribut auswählen, müssen Sie den Renderer "Anzahl aktiver Alarme" in der Spaltenliste konfigurieren.

**Hinzufügen von Aktionen**

Um eine Aktion hinzuzufügen, klicken Sie **+Aktion hinzufügen**. Wählen Sie **Wartungsmodus umschalten** um die entsprechende vordefinierte Aktion hinzuzufügen. Oder wählen Sie **Kommando erstellen**, um eine Schaltfläche zu erstellen, die ein Shell-Kommando ausführt. Im folgenden Dialog können Sie eine Beschriftung für die Schaltfläche und das auszuführende Shell-Kommando eingeben. 

![image alt text](/guides/images/users-guide/image_19.png)

>**Info:** Der Dialog zeigt die vordefinierten Shell-Kommandos des ersten Geräts, das Shell-Kommandos unterstützt. Gibt es kein solches Gerät, ist die Liste leer. Weitere Informationen finden Sie unter [Shell-Kommandos](/guides/benutzerhandbuch/device-management/#shell) im Abschnitt Device Management.<br>
Sie können auch das JSON-Format für das Kommando eingeben, das zum Gerät gesendet wird. Fragen Sie den Gerätehersteller nach unterstützten Kommandos, um weitere Details zu erfahren. 

**Ändern der Tabelle**

Um die Kopfzeile einer Spalte zu bearbeiten, klicken Sie auf den Wert in der Spalte **Beschriftung** und bearbeiten Sie die Beschriftung. 

Sie können die Spalten umsortieren, indem Sie auf das Symbol ganz links in einer Zeile klicken und den Eintrag durch Ziehen und Ablegen verschieben. 

Um ein Attribut oder eine Aktion zu löschen, bewegen Sie den Mauszeiger über die entsprechende Zeile und klicken Sie **Löschen** auf der rechten Seite.

### Widget "Bild"

Das "Bild"-Widget ermöglicht es, ein einzelnes Bild anzuzeigen, das Sie von Ihrem Computer hochladen können. Es können keinen zusätzlichen Parameter konfiguriert werden.


### Widget "Datenpunktgraph"

Das Widget "Datenpunktgraph" zeigt einen Datenpunkt (Messwert) in einem Graphen. Die Visualisierung ist identisch mit der im [Daten-Explorer](#data-explorer).

<img src="/guides/images/users-guide/Cockpit/Cockpit_DataPointsGraphWidget.png" name="Data Point Graph widget" style="width:75%;"/>

Am einfachsten erstellen Sie ein "Datenpunktgraph"-Widget, indem Sie zum Daten-Explorer navigieren, **Mehr...** in der oberen Menüleiste klicken und **Als Widget zum Dashboard senden** wählen.

Weitere Informationen zu den konfigurierbaren Parametern finden Sie unter [Visualisieren von Daten mit dem Daten-Explorer](#data-explorer).


### Widget "Datenpunktliste"

Das Widget "Datenpunktliste" zeigt Datenpunkte (Messwerte) in einer Liste, einen pro Zeile, mit aktuellen Werten und Datenpunktattributen.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Datenpunkte|Zeigt eine Liste verfügbarer Datenpunkte. Sie müssen mindestens einen Datenpunkt aktivieren. Klicken Sie **Datenpunkt hinzufügen**, um einen Datenpunkt zur Liste hinzuzufügen. Weitere Informationen finden Sie unter [Hinzufügen von Datenpunkten](#add-data-points).
|Sichtbare Tabellenspalten|Spalten, die angezeigt werden: <br>**Beschriftung**: Beschriftung des Datenpunkts. Details finden Sie unter [Visualisieren von Daten im Daten-Explorer](#data-explorer). <br>**Ziel**: Zielwert. Kann im [Daten-Explorer](##data-explorer) oder in der [Datenpunktbibliothek](#data-point-library) konfiguriert werden.<br>**Aktuell**: Aktueller Wert. <br>**Differenz**: Absolute Differenz zwischen aktuellem Wert und Zielwert. <br>**Differenz %**: Prozentwert der Differenz zwischen aktuellem Wert und Zielwert. <br>**Asset**: Name des Geräts oder der Gruppe des Datenpunkts. 


### Widget "Datenpunkttabelle"

Die Konfiguration des Widgets "Datenpunkttabelle" ist ähnlich wie die des Widgets "Datenpunktgraph". Die Daten werden jedoch nicht als Linien, sondern als Tabelle dargestellt.

Das Widget "Datenpunkttabelle" zeigt Daten basierend auf ausgewählten Datenpunkten, einem Zeitintervall und Aggregation. 

Werte außerhalb eines bestimmten Bereichs, basierend auf konfigurierten gelben und roten Bereichen, werden in der Tabelle hervorgehoben.

![Data point table](/guides/images/users-guide/datapointtable.png)


### Widget "Ereignisliste"

Das Widget "Ereignisliste" ermöglicht es, Ereignisse für ein ausgewähltes Gerät zu überwachen. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_EventList.png" name="Event list widget" style="width:75%;"/>

Außerdem kann ein Zeitintervall festgelegt und Ereignisse können in Echtzeit überwacht werden. 


### Widget "Fieldbus-Gerät"

Das Widget "Fieldbus-Gerät" ermöglicht es, den Status eines Modbus-Geräts anzuzeigen und dieses zu betreiben. 

Weitere Informationen zum Widget "Fieldbus-Gerät" finden Sie unter [Optionale Services > Cloud Fieldbus > Monitoring device status using the Fieldbus device widget](/guides/users-guide/optional-services/#fieldbus-device-widget).


### Widget "Gerätenachricht"

Das Widget "Gerätenachricht" sendet eine Nachricht an das Gerät. Das Verhalten des Geräts ist dabei geräteabhängig. Nur verfügbar für Geräte, die diese Art von Kommando unterstützen. 


### Widget "Hilfe und Service"

Das Widget "Hilfe und Service" zeigt Links zu Hilfe- und Serviceangeboten. Es können keinen zusätzlichen Parameter konfiguriert werden.

<img src="/guides/images/users-guide/Cockpit/Cockpit_HelpAndServiceWidget.png" name="Help and service widget" style="width:75%;"/>


### Widget "HTML"

Das "HTML"-Widget zeigt benutzerdefinierten Inhalt. Die Inhalt kann mit HTML formatiert werden.

**Konfigurierbare Parameter**

* Ziel-Assets und -geräte: Wählen Sie die Objekte aus, für die optionale HTML-Ausdrücke ausgewertet werden sollen.

* HTML-Code

Die folgenden Variablen können im HTML-Code verwendet werden:

* {{devicesCount}}: Gesamtanzahl der Geräte.

* {{usersCount}}: Gesamtanzahl der Benutzer.

* {{deviceGroupsCount}}: Gesamtanzahl der Gruppen.

* {{device.name}}: Name des Geräts.

* {{device.*property*}}: Allgemeinere Form des oben genannten. Sie können jedes Attribut des Geräts ansprechen. 

* {{device.c8y_Hardware.model}}: Modell des Geräts.

* {{device.*fragment*.*property*}}: Allgemeinere Form des oben genannten. Sie können jedes Attribut oder Fragment des Geräts ansprechen. 

>**Info:** "Gerät" bezieht sich auf das Zielgerät, das in der Widget-Konfiguration ausgewählt wurde. <br>
*fragment.property* bezieht sich auf die Attribute des entsprechenden Geräts. Um die verfügbaren Attributnamen anzuzeigen, können Sie die Widgets "Asset-Attribute" or “Asset-Tabelle” verwenden. Klicken Sie **+Attribut hinzufügen** in der Widget-Konfiguration, um eine Tabelle der unterstützten Attribute anzuzeigen. Sie können die Werte aus der Spalte **Attribute** kopieren und einfügen. Attribute, die von diesen Widgets erstellt wurden, stehen in den HTML-Widgets nicht zur Verfügung.


### Widget "Infoanzeige"

Das Widget "Infoanzeige" visualisiert einen Datenpunkt in Form eines Tachos und mehrere Datenpunkte als Beschriftung.  

<img src="/guides/images/users-guide/Cockpit/Cockpit_InfoGauge.png" name="Info gauge widget" style="width:75%;"/>

Sie können einen Datenpunkt für das Tacho auswählen sowie mehrere Datenpunkte, die als Beschriftung auf der linken Seite angezeigt werden.  

<img src="/guides/images/users-guide/Cockpit/Cockpit_InfoGaugeDataPoints.png" name="Info gauge data points" style="width:75%;"/>

Sie müssen mindestens einen Datenpunkt in jedem Bereich aktivieren, um das Widget "Infoanzeige" zu erstellen.
 

### Widget "Karte"

Das Widget "Karte" zeigt den Standort eines Geräts oder aller Geräte einer Gruppe an. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_MapWidget.png" name="Map widget" style="width:75%;"/>

Sie können den Inhalt der Karte mit dem Mauszeiger verschieben sowie mit den Schaltflächen **Plus** und **Minus** rein- bzw. rauszoomen.

Die Symbole, die die Geräte repräsentieren, sind farbkodiert. Die Farben werden nach folgenden Regeln verwendet:

    * Rot = Mindestens ein "kritischer" Alarm
    * Orange = Mindestens ein "wichtiger" Alarm
    * Gelb = Mindestens ein "weniger wichtiger" Alarm
    * Blau = Mindestens eine "Warnung"
    * Grün = Keine Alarme

Klicken Sie auf ein Gerätesymbol, um folgende Details in einem Fenster anzuzeigen: 

* Name des Geräts. Klicken Sie darauf, um zu diesem Gerät zu navigieren.
* Datum, an welchem das Gerät zuletzt seinen Standort gesendet hat, wenn verfügbar.
* Regler, um die Geräte-Tracks für die vergangenen und zukünftigen Tage anzuzeigen bzw. zu verbergen.

**Konfigurierbare Parameter**

Ziel-Assets oder -geräte: Geräte, die auf der Karte angezeigt werden. Im Falle einer Gruppe werden alle Geräte in diese Gruppe (aber nicht in Untergruppen) angezeigt.

>**Info**: Wenn keines der Zielgeräte einen bekannten Standort hat, zeigt das Widget eine Weltkarte ohne Symbole. 


### Widget "Kuchendiagramm"

Das Widget "Kuchendiagramm" zeigt Datenpunkte (Messwerte) mit aktuellen Werten in einem Kuchendiagramm.

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Kuchendiagramm-Optionen|Auswahloptionen zum Anzeigen von Tooltips, Prozentwerten und Legenden im Kuchendiagramm. 
|Datenpunkte|Zeigt eine Liste verfügbarer Datenpunkte. Sie müssen mindestens einen Datenpunkt aktivieren. Klicken Sie **Datenpunkt hinzufügen**, um einen Datenpunkt zur Liste hinzuzufügen. Weitere Informationen finden Sie unter [Hinzufügen von Datenpunkten](#add-data-points).


### Widget "Linearer Zeiger"

Das Widget "Linearer Zeiger" visualisiert Datenpunkte in Form eines linearen Messgeräts. Minimale und and maximale Zielwerte werden ebenfalls angezeigt.

<img src="/guides/images/users-guide/Cockpit/Cockpit_LinearGauge.png" name="Linear gauge widget" style="width:75%;"/>

>**Info:** Wenn eine Beschriftung nicht vollständig angezeigt werden kann, können Sie sich damit behelfen, den minimalen und maximalen Wert zu erhöhen und so die Beschriftung in den lesbaren Bereich zu verschieben. 

Sie müssen mindestens einen Datenpunkt aktivieren, um das Widget "Linearer Zeiger" zu erstellen.


### Widget "Quick-Links"

Das Widget "Quick links" zeigt verschiedene Links für den schnellen Zugriff auf relevante Kommandos an. Es können keinen zusätzlichen Parameter konfiguriert werden.

<img src="/guides/images/users-guide/Cockpit/Cockpit_QuickLinksWidget.png" name="Quick links widget" style="width:75%;"/>


### Widget "Relaisfeldsteuerung"

Das Widget "Relaisfeldsteuerung" ermöglicht es, Relais in einem Relaisfeld unabhängig voneinander an- oder auszuschalten. Nur verfügbar für Geräte, die diese Art von Kommando unterstützen. 


### Widget "Relaissteuerung"

Das Widget "Relaissteuerung" ermöglicht es, ein Geräterelais an- oder auszuschalten. Nur verfügbar für Geräte, die diese Art von Kommando unterstützen. 


### Widget "Rotationsmodell"

Das Widget "Rotationsmodell" ermöglicht es, ein Objektmodell eines Geräts zu rendern.
 
**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Ziel-Asset oder -geräte|Objekt (Gruppe oder Gerät), das dargestellt wird.
|Modelltyp|Modelltyp für das Rendering, entweder "Box" oder "Telefon".
|Gitternetz|Der "Gitternetz"-Modus stellt das Objekt in einer netzartigen Representation dar. Die Option **Gitternetz** kann an- oder abgeschaltet werden (Standardeinstellung = an). 
|Kameratyp|Kameratyp, der verwendet wird, entweder "Orthographische Kamera" oder "Perspektivische Kamera".

Im Widget "Rotationsmodell" kann das Objekt durch Ziehen und Bewegen gedreht werden. Außerdem kann mit der Maus rein- und rausgezoomt werden.


### Widget "SCADA"

Das "SCADA"-Widget bietet eine graphische Darstellung eines Gerätestatus. 

Nähere Informationen zum "SCADA"-Widget finden Sie unter [Optionale Services > Cloud Fieldbus > Monitoring status using the SCADA widget](/guides/users-guide/optional-services#scada).


### Widget "Silo"

Das "Silo"-Widget zeigt Datenpunkte (Messwerte) mit aktuellen Werten in einer Silo-Darstellung an. 

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Datenpunkte|Zeigt eine Liste verfügbarer Datenpunkte. Sie müssen mindestens einen Datenpunkt aktivieren. Klicken Sie **Datenpunkt hinzufügen**, um einen Datenpunkt zur Liste hinzuzufügen. Weitere Informationen finden Sie unter [Hinzufügen von Datenpunkten](#add-data-points).


### Widget "Tacho"

Das "Tacho"-Widget visualisiert Datenpunkte in Form eines Tachos. 

<img src="/guides/images/users-guide/Cockpit/Cockpit_RadialGauge.png" name="Radial gauge widget" style="width:75%;"/>

Sie müssen mindestens einen Datenpunkt aktivieren, um das "Tacho"-Widget zu erstellen.


### Widget "Twitter-Nachrichten"

Das Widget "Twitter-Nachrichten" zeigt Tweets von dem in Twitter integrierten Timeline-Widget an.

<img src="/guides/images/users-guide/Cockpit/Cockpit_TwitterNewsWidget.png" name="Twitter news widget" style="width:50%;"/>

**Konfigurierbare Parameter**

|Feld|Beschreibung|
|:---|:---|
|Titel|Widget-Titel. Standardmäßig wird der Widget-Typ als Titel verwendet.
|Twitter-Benutzername|Benutzername für das darzustellende Twitter-Konto.
|Twitter-Widget-ID|ID für das Twitter-Widget. Die ID kann in den Widget-Einstellungen nachgesehen werden. 
|Optionen|Wahlweise kann die Darstellung einer Kopfzeile, Fußzeile, eines Rahmens oder eine transparente Darstellung aktiviert bzw. deaktiviert werden.


### Widget "Willkommen zum Cockpit"

Das Widget "Willkommen zum Cockpit" ermöglicht es, eine Begrüßungsnachricht auf dem Willkommensbildschirm anzuzeigen. Es können keinen zusätzlichen Parameter konfiguriert werden.