---
order: 30
title: Cockpit
layout: default
---

## Überblick


Die Cockpit-Anwendung bietet Ihnen Optionen, um Internet der Dinge (IoT) Assets und Geschäftsdaten zu verwalten. In diesem Handbuch zeigen wir Ihnen, wie Sie:

- das [Cumulocity-Cockpit](#start) benutzen und mit dem [Home Dashboard](#home) arbeiten
- [Geräte verbinden](#connect) und [Assets](#asset) verwalten
- Daten mit Hilfe des Daten-Explorers [visualisieren](#visualise)
- mit [Dashboards](#dashboards) arbeiten
- mit [Widgets](#widget) und dem [Geschäftsregel](#business)-Paket umgehen
- [Alarme](#alarms), [Berichte](#reports) und [Smart Rules](#rules) verwalten
- die [Datenpunktbibliothek](#library) benutzen

Weitere Informationen zur Cockpit-Anwendung finden Sie in der folgenden Einführung.


## <a name="intro"></a>Einführung

Das Cumulocity-Cockpit kann in vielen Industriebereichen eingesetzt werden, einschließlich:

* Zustandsüberwachung

* Alarmüberwachung und Eskalation

* Gebäude-Asset-Monitoring

* Energieverbrauch von Fabriken und Geräten

* Überwachung von Sensordaten

Im folgenden Abschnitt wird die Cockpit-Anwendung beschrieben. Sie bietet viel Funktionalität:

* **Daten-Explorer**: IoT-Daten interaktiv erforschen, vergleichen und visualisieren.

* **Dashboards**: Erstellen Sie eigene Analysen und Monitor-Seiten, indem Sie Widgets auswählen und anordnen. Wählen Sie aus verschiedenen Widgets, einschließlich Karten, Tabellen, Grafiken, Diagramme, Steuerelemente und mehr.

* **Smart-Rule-Baukasten**: Erstellen Sie Verarbeitungs-Regeln für generierte Daten.

* **Geschäftsregel-Paket**: Verwenden Sie vordefinierte Geschäftsregeln für Geofencing, Schwellenwerte oder Alarm-Eskalationen und Benachrichtigungen (SMS/E-Mail/Sprache).

* **Berichte**: Erstellen Sie Berichte auf Basis des Dashboard-Layouts und verschicken Sie sie per E-Mail.

* **Asset Management**: Organisieren Sie Assets in Hierarchien.

* **Alarme verwalten**: Überwachen Sie die Probleme Ihrer Assets anhand von Schweregraden und Arbeitsabläufen.

* **Datenpunktbibliothek**: Verwalten Sie die Standardeinstellungen ("Profile") Ihrer Geräte und übernehmen Sie diese automatisch mit Hilfe der Datenpunktbibliothek.

### Konzepte

Die wichtigsten Konzepte der Cockpit-Anwendung sind:

**Asset**: Ein Asset repräsentiert ein Objekt, wie ein Gebäude, eine Maschine oder ein Auto.

**Asset-Hierarchie**: Die Assets sind hierarchisch (wie Bäume) organisiert. Die Verzweigungen des Baums repräsentieren Gruppen und die Blätter des Baums repräsentieren die einzelnden Geräte.

**Gruppe**: Eine Gruppe ist eine Möglichkeit, Geräte und Assets in einer Asset-Hierarchie zu organisieren. Eine Gruppe kann ein oder mehrere Geräte, Kindgeräte oder andere Gruppen enthalten.

**Gerät**: Ein IoT-Gerät kann entweder ein Gateway-Gerät oder ein über ein Gateway (wie ein Modbus- oder KNX-Gerät) indirekt verbundenes Gerät oder ein Sensor sein.

**Datenpunkt**: Sie repräsentieren Sensordaten, wie Temperatur-Zeitreihen. In anderen Teilen von Cumulocity werden sie Messungen genannt. Andere Begriffe dafür sind Zeitreihe oder Variable. Sie sind immer von Sensoren erzeugte Daten.

**Datenpunkteigenschaften**: Metadaten für einen Datenpunkt, die zusätzliche Eigenschaften darstellen, die vom Benutzer hinzugefügt werden, wie ein Label, Min-/Max-Werte, Schwellenwerte oder andere.

**Dashboard**: Eine benutzerdefinierte Seite mit einzelnen Inhalten aus verschiedenen Widgets.

**Bericht**: Ähnlich wie Dashboards, aber mit analytischem Inhalt, der auf einem begrenzten Zeitrahmen oder Umfang der Arbeit basiert.

**Smart Rules**: Cumulocity-Geschäftsregeln sind Instanzen aus einer intelligenten Regelvorlage, die den Smart Rule Builder verwendet.

### Cumulocity-Anwendungen

Die Cockpit-Anwendung basiert auf dem Cumulocity-Anwendungs-Framework.
Informationen zu den folgenden Punkten finden Sie in der [Einführung](/guides/images/benutzerhandbuch/uebersicht):

* Welche Webbrowser werden unterstützt?
* Wie melde ich mich bei Cumulocity an?
* Wie navigiere ich?
* Wie verlinke ich in die Anwendung?
* Wie benutzt man Cumulocity auf Touchgeräten?
* Wie sind die Benutzeroberflächenkonventionen?

## <a name="start"></a>Der Anfang mit dem Cumulocity-Cockpit
### Willkommensseite

Die Willkommensseite wird geöffnet, sobald Sie sich beim Cumulocity-Cockpit anmelden.


![Willkommensseite](/guides/images/benutzerhandbuch/willkommen.png)

Die Willkommensseite zeigt die folgenden Abschnitte:

* Eine Begrüßung mit der Anzahl der angeschlossenen Geräte (oder Assets).

* Eine Linkliste.

* Eine Liste der verfügbaren Anwendungen

* Eine Liste von Nachrichten basierend auf dem Cumulocity-Twitter. Hinweis: Dies ist nur für Mandanten, die von www.cumulocity.com gehostet werden, verfügbar.

* Ein Link zu verschiedenen Teilen der Dokumentation.

### Ausblenden der Willkommensseite

Klicken Sie hierzu oben rechts auf "Beim Starten nicht anzeigen".

### Willkommensseite als Standard wiederherstellen

Um die Willkommensseite als Startseite wiederherzustellen, wählen Sie im Navigator links oben "Willkommen". Deaktivieren Sie dann "Beim Start nicht anzeigen".

## <a name="home"></a>Home Dashboard

Die Cockpit-Startseite ist eine Dashboard-Seite:

![image alt text](/guides/images/benutzerhandbuch/startseite.png)

Das Dashboard zeigt Daten für den Mandanten an. 
Das Home-Dashboard ist eine Seite, die von allen Benutzern des Mandanten gemeinsam genutzt wird. Sie besteht aus Widgets, die IoT-Daten visualisieren. Standardmäßig enthält das Home-Dashboard fünf Widgets, die einen Begrüßungstext, eine Zusammenfassung der verfügbaren Objekte, Assets mit Alarmen, neue Alarme und eine Karte aller Objekte anzeigen.

Das Home-Dashboard kann ähnlich wie andere Cockpit-Dashboards bearbeitet werden: Sie können die angezeigten Widgets hinzufügen, entfernen oder ändern. Verwenden Sie das Einstellungssymbol (drei Punkte untereinander) oben rechts oder bewegen Sie den Cursor innerhalb eines Widgets und verwenden Sie das Einstellungssymbol des individuellen Widgets.

Weitere Informationen hierzu finden Sie unter [Dashboard bearbeiten](#Dashboard bearbeiten) weiter unten.

Um das Dashboard auf den ursprünglichen Inhalt zurückzusetzen, verwenden Sie den Menüpunkt "Dashboard wiederherstellen" aus dem Zahnrad-Symbol.

## <a name="connect"></a>Geräte verbinden

Um die Cockpit-Anwendung zu verwenden, müssen Sie IoT-Geräte anschließen. Geräte werden im Device Management angeschlossen. Wechseln Sie mit dem Anwendungswechsler rechts oben zum "Device Management" und wählen Sie dann "Registrierung".

Weitere Informationen finden Sie unter [Device Management](/guides/images/benutzerhandbuch/device-management-deutsch).

<img src="/guides/images/users-guide/appdeutsch.png" alt="Logout menu" style="max-width: 100%">

## <a name="asset"></a>Asset Management

Ein Asset repräsentiert ein Business-Objekt im Allgemeinen, wie ein Gebäude, eine Maschine, eine Produktionseinheit oder ein Auto.

Assets sind in Hierarchien organisiert. Beispielsweise könnte eine Energieüberwachungsanwendung die folgende Asset-Hierarchie aufweisen:

![image alt text](/guides/images/users-guide/image_2de.png)

Die Asset-Hierarchie besteht aus zwei Typen von Objekten:

* Gruppenobjekte: Diese Gruppen werden in der Cockpit-Anwendung erstellt und können einzelne Geräte oder andere Gruppen gruppieren.

* Geräteobjekte: Hierbei handelt es sich um Geräte, die mit der Asset-Hierarchie verknüpft sind.

In diesem Beispiel repräsentieren Gruppenobjekte einen Gebäudebestand. Geräteobjekte repräsentieren den Raumbestand. Die Gruppennamen und die Hierarchie können vom Benutzer individuell definiert werden. Die Hierarchie kann mehrere Ebenen haben, eine Regionsebene, Stadtebene, Straßenniveau, Gebäudeebene, Stockwerk und Raumebene. Ein Gerät kann Teil von mehreren und unterschiedlichen Hierarchien sein, zum Beispiel Teil der regionalen Hierarchie und Teil der Kundenhierarchie.

Einzelne Geräte werden nicht in der Cockpit-Anwendung verwaltet. Sie werden in der Device-Management-Anwendung verwaltet. Um ein Gerät in der Asset-Hierarchie zu positionieren, müssen Sie das Gerät der jeweiligen Gruppe zuordnen. Siehe Beschreibung [unten](#Gruppenzuweisung) für Details. 

### Asset-Hierarchie im Vergleich zur Gerätehierarchie

Cumulocity unterstützt zwei Arten von Hierarchien: eine Gerätehierarchie und eine Asset-Hierarchie. Die Gerätehierarchie verfolgt, wie Geräte mit Cumulocity kommunikativ verbunden sind. Die Asset-Hierarchie strukturiert die Assets, die über die M2M-Geräte fernüberwacht und gesteuert werden. Weitere Informationen hierzu finden Sie unter [Cumulocity's Domain Model](/guides/images/concepts/domain-model).

In der Cockpit-Anwendung konstruieren Sie Ihre Asset-Hierarchie, indem Sie Gruppenobjekte erstellen und Geräte in die Hierarchie einbinden. Die Asset-Hierarchie hängt von den verwendeten IoT-Geräten ab. Es gibt viele IoT-Geräte, aber diese beiden Typen sind sehr häufig:

* **Smart-Geräte** sind in sich geschlossene Geräte mit Sensoren, Aktoren und einem Kommunikationsmodul. Sie sind typischerweise mit einem einzigen Asset verbunden. Intelligente Geräte sind Tracker, Wetterstationen oder allgemeine "intelligente" Sensoren mit integriertem Kommunikationsmodul.

* **Gateway-Geräte** stellen die Kommunikation von anderen Geräten zu Cumulocity her, umfassen jedoch keine Sensoren oder Aktoren. Typische Gateway-Geräte sind Zigbee-, Modbus-, M-Bus- oder KNX-Gateways.

Im folgenden Abschnitt wird die Verwendung des Cockpit mit Smart Devices und Gateway-Geräten erläutert und erläutert, wie intelligente Geräte in die Asset-Hierarchie eingebunden sind:


![image alt text](/guides/images/users-guide/image_3de.png)

Smart Devices werden im Device Management (rechte Seite) als Top-Level-Geräte dargestellt. In der Cockpit-Anwendung können Sie intelligente Geräte in Gruppen organisieren, wie die Pfeile im obigen Diagramm angeben. 

Gateway-Geräte können die Cockpit-Anwendung so anwenden:

![image alt text](/guides/images/users-guide/image_4de.png)

Gateway-Geräte werden in der Geräteverwaltung als Geräte der obersten Ebene dargestellt. Die angeschlossenen Geräte (wie Zigbee-, Modbus- oder KNX-Geräte) werden als "Kindgeräte" (rechte Seite) angezeigt. Diese untergeordneten Geräte können in der Asset-Hierarchie wie oben dargestellt organisiert werden.

Die Asset-Hierarchie und die Gerätehierarchie sind autark: Während sich innerhalb der Device-Management-Anwendungen alle Kindgeräte unterhalb des Gateway-Geräts befinden, sind dieselben Kindgeräte in zwei verschiedenen Gebäuden in der Cockpit-Anwendung organisiert.

**Zusammenfassung:** Geräte können in der Device-Management-Anwendung oder in der Cockpit-Anwendung völlig unterschiedliche Hierarchien haben.

### Cockpit-Assets im Vergleich zu Business-Assets

Die Abbildung von Objekten in der Cockpit-Asset-Hierarchie ist eine virtuelle Hierarchie.
Wenn Sie LKWs innerhalb der Cumulocity-Plattform verwalten, wird jeder LKW über sein individuelles Tracking-Gerät dargestellt, das mit Cumulocity kommuniziert.

Beim Gebäudemanagement ist es am häufigsten, dass eine Gruppe von Sensoren innerhalb eines Gebäudes das Gebäude als eine Gruppe darstellt, die mit der Cumulocity-Plattform kommuniziert.

### Navigation durch die Assets

Der Navigator zeigt eine Hierarchie von Assets unter "Gruppen" (siehe Screenshot unten):

* Oben werden die "Top-Level"-Gruppen angezeigt.

* Beim Erweitern einer Gruppe werden alle ihre Kindobjekte angezeigt. Kindobjekte können weitere Gruppen oder Geräte der Gruppe zuordnen. Kindobjekte werden auch auf der Registerkarte "Sub-Assets" angezeigt.

![image alt text](/guides/images/users-guide/image_5de.png)

Wenn Sie ein Objekt in der Asset-Hierarchie auswählen, zeigt der rechte Teil der Anwendung weitere Details zum ausgewählten Objekt an:

![image alt text](/guides/images/users-guide/image_6de.png)

Die sichtbaren Register auf der rechten Seite des Navigators unterscheiden sich je nach Auswahl im Navigator. Die folgende Tabelle zeigt, welche Registerkarten auf der Basis der Auswahl im Navigator sichtbar sind:

|Name des Tab|Name Dashboard|Info|Alarme|Sub-assets|Standort|Daten-Explorer|
|:---|:---|:-----|:-----|:----------|:----------|:----------|
|Gruppe ausgewählt:|Ja, wenn konfiguriert|Ja|Nein|Ja|Nein|Ja, zeigt alle Datenpunkte der Kindgeräte|
|Gerät ausgewählt:|Ja, wenn konfiguriert|Ja|Ja|Nein|Ja|Ja, zeigt alle Datenpunkte der Kindgeräte|

Es können zusätzliche Registerkarten angezeigt werden, falls die Anwendung mit Plugins erweitert wurde. Siehe auch [Web SDK for plugins](/guides/images/web/introduction).

Wenn Sie ein Gateway-Gerät hinzufügen, werden die Kindgeräte nicht angezeigt. Um Kindgeräte anzuzeigen, müssen Sie sie dem zugehörigen Asset hinzufügen. Details, die sich auf die untergeordnete Hierarchie beziehen, sind in der Geräteverwaltungsanwendung sichtbar und bearbeitbar.

Um in der Asset-Hierarchie weiter zu navigieren, verwenden Sie den Navigator oder wählen Sie ein Objekt auf der Registerkarte "Sub-Asset" aus. Um in der Asset-Hierarchie nach oben zu navigieren, verwenden Sie den Eintrag in der Pfadnavigation unter dem Namen des Assets.

### Assets durchsuchen

Um nach Gruppen oder Geräten zu suchen, geben Sie den Namen der Gruppe oder des Geräts in das Suchfeld ein und klicken Sie auf "Enter". Sie können auf die Ergebnisse klicken. Die ausgewählte Gruppe bzw. das ausgewählte Gerät wird dann im Navigator links ausgewählt und auf der rechten Seite angezeigt.

### Gruppen hinzufügen

Um eine neue Top-Level-Gruppe hinzuzufügen, klicken Sie auf "+" im oberen Bereich der Anwendung und wählen Sie "Gruppe hinzufügen ...". Daraufhin erscheint der folgende Dialog:

![image alt text](/guides/images/users-guide/image_7de.png)

Dadurch wird eine neue Gruppe mit den ausgewählten zugewiesenen Geräten erstellt. Nach dem Klicken auf "Gruppe mit Geräten erstellen" wird die Gruppe im Navigator als oberstes Objekt angezeigt.

Um eine neue Gruppe als Kind eines vorhandenen Assets hinzuzufügen, klicken Sie auf die Schaltfläche "+ Gruppe hinzufügen" auf der Registerkarte "Sub-Assets".

![image alt text](/guides/images/users-guide/image_8de.png)

### <a name="Gruppenzuweisung"></a>Geräte Gruppen zuweisen

Vor dem Hinzufügen eines Geräts zur Asset-Hierarchie muss es mit Cumulocity verbunden sein. Verbinden Sie Geräte über das Device Management mit der Plattform. Genaues dazu finden Sie hier: [Manuell Geräte verbinden](/guides/images/benutzerhandbuch/device-management-deutsch#device-registration).

Um neu verbundene Geräte der Asset-Hierarchie zuzuordnen, markieren Sie die Gruppe, in der das Gerät erscheinen soll, klicken Sie auf "Sub-Assets" und klicken Sie auf die Schaltfläche "+ Gerät zuordnen".

Suchen Sie im folgenden Dialog nach Geräten und wählen Sie die zuzuordnenden Geräte (oder Kindgeräte) aus.

![image alt text](/guides/images/users-guide/image_9de.png)

### Gruppen löschen

Sie können eine Gruppe löschen, indem Sie den Mauszeiger über die Gruppe auf der Registerkarte "Sub-Assets" bewegen und dort belassen. Sie sehen ein rotes [X], das Sie klicken können, um die Gruppe zu löschen.

### Geräte trennen

Um ein Gerät von einer Gruppe zu trennen, wählen Sie die Gruppe im Navigator aus. In der Registerkarte "Sub-Assets" werden die untergeordneten Geräte angezeigt. Dort können Sie einzelnde Geräte auswählen und trennen. Klicken Sie auf die rote Schaltfläche [X].

Das Trennen eines Geräts bedeutet nicht, dass die Kindgeräte oder die zugehörigen Daten entfernt werden. Das Gerät wird nur aus seiner Position in der Asset-Hierarchie entfernt. Es kann danach anderen Gruppen zugeordnet werden.

### Gruppen editieren

Um den Namen der Gruppe zu bearbeiten, klicken Sie auf die Registerkarte "Info" und bearbeiten den Namen.

## <a name="visualise"></a>Visualisierung von Daten mit dem Daten-Explorer 

Datenpunkte (Messungen oder Sensordaten) können im Cockpit an drei Stellen visualisiert werden:

* Klicken Sie im Navigator auf den "Daten-Explorer". Von dort haben Sie Zugriff auf alle Datenpunkte aller Assets.

* Navigieren Sie zu einem bestimmten Asset und klicken Sie auf den Tab "Daten-Explorer". Sie haben Zugriff auf alle Datenpunkte der Assets und Sub-Assets.

* Hinzufügen von datenpunktbezogenen Widgets zu einem Dashboard, um vordefinierte Berichte anzuzeigen.

Um Datenpunkte zu visualisieren, folgen Sie diesen Schritten:

* Gehen Sie zu der Gruppe oder dem Gerät, und klicken Sie auf "Daten-Explorer".

* Die ersten fünf Datenpunkte des ausgewählten Geräts oder der ausgewählten Gruppe werden angezeigt.

* Fügen Sie zusätzlichen Datenpunkt hinzu, indem Sie "Datenpunkte hinzufügen ..."

* Passen Sie Farben, Bereiche und andere Visualisierungseigenschaften an.

* Durchsuchen Sie weitere Daten, indem Sie den Zeitraum oder die Wertebereiche ändern.

* Wenn Sie Ihre aktuelle Konfiguration für später speichern möchten, speichern Sie sie als Widget mit "Als Widget zum Dashboard senden ..."

Der Daten-Explorer und das Dashboard sind eng miteinander verbunden:

* Wenn Sie eine Daten-Explorer-Konfiguration als Widget an ein Dashboard senden, können Sie das Dashboard auswählen, in dem das neue Widget gespeichert wird.

* Wenn Sie auf das Konfigurationssymbol eines "Datenpunktgraphen"-Widgets klicken, gelangen Sie zu einem Dialog, der dem Daten-Explorer ähnelt. Hier können Sie das Widget konfigurieren.

### Öffnen des Daten-Explorers

Wenn Sie auf den Tab "Daten-Explorer" klicken, wird er geöffnet.

Er wird mit vorhandenen Datenpunkten des Objekts (Gruppe oder Gerät) voreingestellt. Die ersten fünf Datenpunkte werden standardmäßig angezeigt.

![image alt text](/guides/images/users-guide/image_10de.png)

Die Visualisierung wird basierend auf Datenpunkt-Eigenschaften erzeugt.

Die Datenpunkteigenschaften (min, max, color, ..) werden wie folgt voreingestellt:

* Wenn diese Eigenschaften zuvor bearbeitet wurden, werden die ursprünglichen Werte verwendet.

* Wenn die Datenpunkte eine übereinstimmende Definition in der Datenpunktbibliothek haben, werden die Werte aus der Datenpunktbibliothek verwendet.

In der "Datenpunktbibliothek" können mehrere übereinstimmende Datenpunkteingaben vorhanden sein. In diesem Fall wird die erste automatisch vom System ausgewählt. Sie können diese Auswahl mit dem Zahnradsymbol überschreiben und " X aus Bibliothek laden" auswählen. X bezieht sich auf den Eintrag in der Datenpunktbibliothek.

![image alt text](/guides/images/users-guide/image_11de.png)

### Datenpunkte hinzufügen

Zusätzliche Datenpunkte können dem Daten-Explorer hinzugefügt werden, indem Sie auf "+ Datenpunkt hinzufügen" klicken. Daraufhin erscheint der folgende Dialog:

![image alt text](/guides/images/users-guide/image_12de.png)

Wählen Sie im oberen Bereich des Dialogs ein Gerät aus der Anlagenhierarchie aus. Nur die Asset-Hierarchie unterhalb der im Navigator markierten Objekte ist sichtbar. Wurde im Navigator "Daten-Explorer" markiert, ist die komplette Anlagenhierarchie sichtbar.

Im unteren Teil des Dialogs werden alle Datenpunkte des ausgewählten Objekts angezeigt. Markieren Sie die Datenpunkte, die Sie im Daten-Explorer anzeigen möchten. Klicken Sie auf "Hinzufügen", um alle ausgewählten Datenpunkte zur Liste der Datenpunkte hinzuzufügen.

### Ändern der Datenpunktvisualisierung

Ändern Sie die Eigenschaften unter dem Diagramm, um die Datenpunktvisualisierung zu ändern.

Die Eingabefelder sind so konzipiert, dass eine genaue Zeitdauer für die Visualisierung festgelegt wird:

* Linkes Feld: Startzeit der x-Achse

* Rechts: Endzeit der x-Achse

* Zeitaggregationsebene: Keine Aggregation, täglich, stündlich

Für Datenpunkte stehen folgende Eigenschaften zur Verfügung:

* V: Wählen Sie aus, ob der Datenpunkt visualisiert werden soll oder nicht.

* Farbe: Farbe des Graphen.

* Label: Text, der auf der y-Achse verwendet wird.

* Einheit: Einheit, die auf der y-Achse verwendet wird. Einheit ist der benutzerdefinierte String, der auf der y-Achse gezeigt wird.

* Min/Max: Bereich der y-Achse.

* Zielwert: Der Sollwert wird derzeit nicht im Diagramm angezeigt. Der Wert wird im Widget "Datenpunktliste" verwendet.

* Yellow Range Min/Max: Definiert den Bereich, in dem kleinere Alarme durch die Schwellenregel erhöht werden sollen. Diese Werte werden derzeit nicht visualisiert. Detaillierte Informationen finden Sie unter [Arbeiten mit Smart Rules](#rules).

* Red Range Min/Max: Definiert den Bereich, in dem kritische Alarme durch Schwellenregeln erhöht werden sollen. Diese Werte werden derzeit nicht visualisiert. Detaillierte Informationen finden Sie unter [Arbeiten mit Smart Rules](#rules).

* Diagrammtyp: Wählen Sie für aggregierte Daten aus, welcher aggregierte Wert visualisiert werden soll. Die Optionen sind: min, max, Fläche.

* Y-Achse: Wählen Sie aus, auf welcher y-Achse der Datenpunkt angezeigt werden soll. Optionen sind: Auto, links, rechts.

* Asset: Der Name des Assets des Datenpunkts. Dieses Feld ist nicht editierbar. Der interne Name des Datenpunktes (Messfragment und Serie) wird angezeigt.

### Navigieren im Daten-Explorer

So navigieren Sie im Daten-Explorer:

* Bewegen der Zeitspanne: Gehen Sie auf die X-Achse und ziehen Sie sie nach links oder rechts.

* Wählen Sie einen Zeitbereich im Diagramm aus.

Echzeitaktualisierungen werden abgeschaltet, wenn Sie eine Zeitspanne in der Vergangenheit definieren (entweder durch Bewegen der Zeitachse oder durch Nutzung der Datenselektoren).

### Variieren der Y-Achse

Im Daten-Explorer können Sie eine Spalte mit der Bezeichnung "y-Achse" mit folgenden Werten konfigurieren:

* Auto (Standard)

* Links

* Rechts

Die Werte definieren, wo die y-Achse für den jeweiligen Datenpunkt angezeigt wird. "Auto" positioniert den ersten Datenpunkt auf die linke y-Achse und die restlichen auf die rechten y-Achsen.

Jeder Datenpunkt wird auf seiner eigenen y-Achse angezeigt, sofern die folgende Bedingung nicht erfüllt ist:

* Zwei Datenpunkte mit demselben Minimum und dem gleichen Maximalwert teilen sich eine gemeinsame y-Achse.

In diesem Fall sind beide Datenpunkte mit einer einzigen y-Achse dargestellt. Zusätzlich zeigt die y-Achse nur die Einheit (oder mehrere Einheiten, falls sie unterschiedlich sind). Das Label wird nicht angezeigt.

### Erstellen von Widgets aus dem Daten-Explorer

Verwenden Sie das Menü und wählen Sie "Als Widget zu einem Dashboard senden".

Dadurch wird ein modaler Dialog mit allen Dashboards des aktuellen Objekts angezeigt. Navigieren Sie zum entsprechenden Dashboard und drücken Sie "Auswählen", um ein neues Widget im ausgewählten Dashboard zu erstellen.

![image alt text](/guides/images/users-guide/image_13de.png)

### Exportieren von Messdaten in csv- oder xlsx-Dateien

Benutzer haben die Möglichkeit, Messdaten als csv- oder xlsx-Dateien herunterzuladen. Die exportierten Daten werden in sechs Spalten unterteilt:

  - Uhrzeit - Datum und Uhrzeit der Messung
  - Quelle der Messung
  - Gerätename - Name des verwendeten Geräts
  - Fragment-Serien - (z. B. c8y_SpeedMeasurement)
  - Wert - Wert der Messung
  - Einheit - Die für die jeweilige Messung verwendete Einheit (wie "C", "km/h", "sec" ...)

Um die Messdaten entweder in csv oder xlsx herunterzuladen, navigieren Sie zunächst zum "Daten-Explorer", wählen Sie den gewünschten Zeitbereich aus und klicken Sie dann auf den kleinen Zahnradknopf rechts oben.

![Export measurement data](/guides/images/users-guide/exportmeasuredata.png)

Wählen Sie, ob ein CSV- oder Excel(XLSX)-Download erfolgen soll.

Das Fenster "Bericht erstellen" erscheint. Die Dateien werden abhängig davon geladen, wie viele Datenpunkte Sie dem "Daten-Explorer" hinzugefügt haben. Sobald der Ladevorgang abgeschlossen ist, klicken Sie auf die Schaltfläche "Download".

## <a name="dashboards"></a>Arbeiten mit Dashboards

Dashboards bieten Ihnen eine individuelle Visualisierung Ihrer Daten mit einer Reihe von Widgets. Widgets können Karten, Bilder, Graphen, Tabellen und andere grafische Darstellungen von Daten anzeigen. Cumulocity bietet eine Reihe von voreingestellten Widgets (Details finden Sie im Abschnitt [Widget-Paket](#widget)). Sie können auch eigene Widgets entwickeln und diese zu Ihrem Cumulocity-Konto hinzufügen. Siehe [Web developer's guide](/guides/images/web/).

### Ein neues Dashboard erstellen

Um ein Dashboard zu erstellen, navigieren Sie zu einem Objekt in der Asset-Hierarchie. Anschließend klicken Sie rechts oben auf das Zahnrad-Symbol. Wählen Sie "Dashboard erstellen". Dies öffnet einen Dialog.

![Dashboard cogwheel](/guides/images/users-guide/dashboardcogwheelde.png)

* Benennen Sie das von Ihnen erstellte Dashboard, das auch als Menüreiter angezeigt wird.

* Geben Sie den Standort des Dashboards in der Navigation an.

* Wählen Sie das Symbol, das neben dem Namen im Menü angezeigt wird.

* Wählen Sie die Sichtbarkeit: "Dashboard für alle Benutzer sichtbar", wenn das Dashboard für alle sichtbar ist ("global"), oder nur für eine begrenzte Anzahl von Benutzern.

* "Dashboard-Layout": Konfigurieren Sie das Layout Ihres Dashboards. Wählen Sie ein "Dashboard Theme", "Default Widget Header Style" und "Default Widget Margin". Danach können Sie Ihr aktuell ausgewähltes Layout im Vorschaufenster sehen.

![Create Dashboard](/guides/images/users-guide/dashboard-createde.png)

Klicken Sie auf "Speichern", um das Dashboard zu erstellen und zu öffnen. Solange es keine Widgets auf dem Dashboard gibt, sehen Sie eine "Widget"-Schaltfläche. Verwenden Sie diese Schaltfläche, um Ihr erstes Widget dem Dashboard hinzuzufügen.

### <a name="create-a-dashboard-for-all-devices-of-the-same-type"></a>Erstellen eines Dashboards für identische Geräte

Sie können ein Dashboard erstellen, das für alle identischen Geräte angezeigt wird. Um dies zu tun, erstellen Sie ein neues Dashboard wie oben beschrieben. Bevor Sie auf "Speichern" klicken, wählen Sie die Option "Dashboard anwenden an alle Geräte des Typs _type_". Der Text "_type_" wird durch den Typ des aktuell ausgewählten Gerätes ersetzt.

Dann sollte dieses Dashboard für alle identischen Geräte erscheinen. Änderungen an diesem Dashboard werden automatisch auf alle Dashboards angewendet.

> Sie können nur Widgets und Daten zum Dashboard für das Gerät selbst hinzufügen. Es ist nicht möglich, Daten von untergeordneten Geräten hinzuzufügen, da die Struktur dieser Geräte von Gerät zu Gerät unterschiedlich sein könnte.

### Hinzufügen von Berechtigungen zu einem Dashboard
 
Berechtigungen können nur einer bestimmten Benutzerrolle gewährt werden. Um dies zu tun, erstellen Sie ein neues Dashboard wie oben beschrieben oder editieren Sie ein Dashboard.

> Um ein Dashboard zu editieren, klicken Sie auf das Zahnrad-Symbol und wählen Sie "Dashboard editieren" aus.

Um Berechtigungen für bestimmte Benutzer zu erteilen, deaktivieren Sie "Dashboard für alle Benutzer sichtbar" und deaktivieren Sie "Dashboard an alle Geräte des Typs" _type_ "anwenden".

![Add permissions](/guides/images/users-guide/dashboardaddrightde.png)

Dann klicken Sie auf "Berechtigungen hinzufügen" und wählen Sie eine Gruppe aus dem Dropdown-Menü.

![Select group](/guides/images/users-guide/dashboardforgroupde.png)

Danach wählen Sie die gewünschte Berechtigung für die ausgewählte Gruppe aus.

![Select permission](/guides/images/users-guide/dashboardpermissionde.png)

> Berechtigungen können mehreren Gruppen gewährt werden.

### Hinzufügen eines Widget zu einem Dashboard

Um ein Widget zu einem Dashboard hinzuzufügen, stellen Sie sicher, dass das Dashboard sichtbar ist. Danach klicken Sie rechts oben auf das Zahnrad-Symbol. Wählen Sie "Hinzufügen eines Widgets zu einem Dashboard". Dies öffnet einen Dialog mit einer Auswahl von Widgets, die Sie dem Dashboard hinzufügen können.

![Add Widget](/guides/images/users-guide/widgetcogwheelde.png)

Bei der Auswahl eines Widget-Typs werden zusätzliche Eingabefelder für diesen Widget-Typ angezeigt. Weitere Informationen zu Widget-Paketen finden Sie [hier](#widget). Ähnlich wie bei den Dashboards können Sie den Widget-Stil anpassen. Der aktuell ausgewählte Stil ist in der Vorschau auf der rechten Seite zu sehen.

### <a name="Dashboard bearbeiten"></a>Dashboard bearbeiten

Sie können die Dashboard-Eigenschaften bearbeiten, indem Sie auf das Zahnrad-Symbol klicken und "Dashboard editieren" auswählen. Dies bringt Sie zu einen ähnlichen Dialog wie "Erstellen eines Dashboards". In diesem Dialog können den Namen, das Symbol, die Position, den Stil und die Berechtigungen des Dashboards bearbeitet werden.

![Edit Dashboard](/guides/images/users-guide/dashboardeditde.png)

Sie können die Widgets des Dashboards neu anordnen. Durch Drag & Drop der Kopfzeile des Widgets können Sie das Widget auf eine andere Position auf der Seite verschieben. Durch Drag & Drop der Pfeile in der unteren rechten Ecke eines Widgets können Sie ein Widget ändern. Durch Anklicken des Symbols in der rechten oberen Ecke des Widgets können Sie die Widget-Eigenschaften löschen oder editieren.

> Wenn das Dashboard gesperrt ist, können Widgets nicht neu geordnet werden. Um ein Dashboard zu sperren bzw. zu entsperren, klicken Sie rechts oben auf das Zahnrad und dann auf "Dashboard sperren" bzw. "Dashboard entsperren".

![dashboard lock](/guides/images/users-guide/dashboardlockde.png)

Auf einem Laptop erscheinen diese Symbole nur, wenn Sie mit der Maus über den Widget-Header fahren.

Die Bearbeitung auf Touch-Geräten wie Smartphones oder Tablets unterstützt nicht alle Funktionen. Um die Widget-Icons auf Touch-Geräten anzuzeigen, fahren Sie mit der Maus über den Widget-Header.

### Dashboard kopieren

Um ein Dashboard von einem Objekt in ein anderes zu kopieren, verwenden Sie das Zahnrad oben rechts und wählen Sie "Dashboard kopieren". Danach wählen Sie das Objekt aus, auf das das Dashboard angewendet werden soll, und klicken Sie auf "Dashboard einfügen", um das Dashboard einzufügen.

Eine alternative Möglichkeit, ein Dashboard zu kopieren, besteht darin, den "[Dashboard pro Typ](#create-a-dashboard-for-all-devices-of-the-same-type)"-Ansatz zu verwenden. Mit diesem Ansatz kopieren Sie das Dashboard von einem Objekt auf **alle** identischen Objekte.

### Dashboard löschen

Um ein Widget zu einem Dashboard hinzuzufügen, stellen Sie sicher, dass das Dashboard sichtbar ist. Das gleiche gilt beim Löschvorgang. Klicken Sie oben rechts auf das Zahnrad-Symbol. Wählen Sie "Dashboard löschen", um ein Dashboard zu löschen.

## <a name="widget"></a>Widget-Paket

Das Cockpit enthält voreingestellte Widget-Typen. Jeder Widget-Typ kann verschiedene Parameter konfigurieren und verschiedene Daten anzeigen. Im folgenden Abschnitt werden alle verfügbaren Widget-Typen und die Konfigurationseigenschaften beschrieben.

### Widget "Asset-Eigenschaften"
Eine benutzerdefinierte Liste der Attribute des aktuellen Objekts wird angezeigt. Das aktuelle Objekt kann ein Gerät oder das Gruppenobjekt sein.

Zu konfigurierende Parameter:

* Name des Widget

* Eigenschaftenliste, siehe auch [unten](#widget-asset-table)

### Widget "Datenpunktgraph"

Zeigt einen Datenpunkt (Messungen) in einem Diagramm an. Die Visualisierung ist die gleiche wie im Daten-Explorer.

Der einfachste Weg, um ein Datenpunktgraph-Widget zu erstellen, besteht darin, zum Daten-Explorer zu navigieren und dann "An Dashboard schicken" zu wählen.

Die zu konfigurierenden Parameter sind die gleichen wie im Daten-Explorer. Siehe auch [Daten-Explorer](#visualise).

### Widget "Datenpunkttabelle"

Diese Widget-Konfiguration ist identisch mit dem Datenpunkt-Graphen. Anstatt die Daten als Liniendiagramm zu visualisieren, werden die Daten als Tabelle visualisiert.

* Das Datenpunkttabellen-Widget zeigt Daten basierend auf ausgewählten Datenpunkten, Zeitintervall und Aggregation an.

* Werte außerhalb des Bereichs, die auf den konfigurierten gelben und roten Bereichen basieren, werden in der Tabelle hervorgehoben.

![Data point table](/guides/images/users-guide/datapointtable.png)

### Widget "Karte"

Zeigt den Standort eines Geräts oder aller Geräte in der Gruppe. Die Karte bietet folgende Funktionen:

* Die Karte bietet Funktionen wie Ziehen und Vergrößern/Verkleinern.

* Die Symbole für die Geräte sind farbcodiert. Die verwendete Farbe hängt von der folgenden Regel ab:

     * Mindestens ein kritischer Alarm: rot

     * Mindestens ein wichtiger Alarm: orange

     * Mindestens ein weniger wichtiger Alarm: gelb

     * Mindestens eine Warnung: blau

     * Kein Alarm: grün

* Wenn Sie auf ein Gerätesymbol klicken, wird ein Popup mit den folgenden Informationen angezeigt:

     * Der Gerätename: Wenn er angeklickt wird, navigiert die Anwendung zum Gerät.

     * Datum, an dem das Gerät zuletzt seinen Standort gemeldet hat, falls verfügbar.

     * Die Option zum Anzeigen/Ausblenden der Geräte-Tracks für den vorherigen und den aktuellen Tag.

Zu konfigurierende Parameter:

* Zielgerät oder Gruppe: Wählen Sie aus, welche Geräte auf der Karte angezeigt werden sollen. Wenn eine Gruppe ausgewählt ist, sind alle in der Gruppe enthaltenen Geräte sichtbar.

Hinweis: Wenn keines der Zielgeräte über einen bekannten Standort verfügt, zeigt das Widget eine Weltkarte ohne Symbole an.

### Widget "HTML"

Zeigt benutzerdefinierten Inhalt an. Der Inhalt kann mit HTML formatiert werden.

Der zu konfigurierende Parameter:

* Zielgerät oder Gruppe: Wählen Sie das Objekt aus, für das optionale HTML-Ausdrücke ausgewertet werden sollen.

* HTML-Inhalt:

Variablen, die im HTML-Inhalt verwendet werden können:

* {{DevicesCount}}: Gesamtzahl der Geräte.

* {{UsersCount}}: Gesamtzahl der Benutzer.

* {{DeviceGroupsCount}}: Gesamtzahl der Gruppen.

* {{Device.name}}: Name des Geräts.

* {{Device. * Property *}}: Allgemeinere Form der oben genannten. Sie können jede Eigenschaft des Geräts ansprechen.

* {{Device.c8y_Hardware.model}}: Modell des Geräts.

* {{Device. * Fragment *. * Property *}}: Allgemeinere Form der oben genannten. Sie können jede Eigenschaft eines beliebigen Fragments des Geräts ansprechen.

Zusätzliche Information:

* "Gerät" bezieht sich auf das Zielgerät, wie im Widget-Konfigurationsparameter ausgewählt.
* *fragment.property* bezieht sich auf die Eigenschaften des jeweiligen Gerätes. Um die verfügbaren Eigenschaftsnamen zu sehen, können Sie das Widget "Asset-Eigenschaft" oder "Asset-Tabelle" verwenden und auf den Link "+ Hinzufügen" in der Widget-Konfiguration klicken. Daraufhin wird eine Tabelle mit unterstützten Eigenschaften angezeigt. Sie können die Werte aus der Spalte "Eigenschaft" kopieren und einfügen. Generierte Eigenschaften dieser Widgets sind in den HTML-Widgets nicht verfügbar.

### Widget "Asset-Alarme"

Zeigt alle Objekte mit einem kritischem Alarm. Es gibt keine zusätzlichen Parameter zu konfigurieren.

### Widget "Asset-Anzahl"

Zeigt die Anzahl der Geräte online und mit Alarmen an. Es gibt keine zusätzlichen Parameter zu konfigurieren.

### Widget "Alarm-Liste"

Zeigt eine Liste von Alarmen, Filter für Objekte, Alarmschweregrad und Alarmstatus an.

Zu konfigurierende Parameter:

* Zielgerät oder Gruppe: Wählen Sie Gruppen oder Geräte, optionale HTML-Ausdrücke, die ausgewertet werden sollen.

* Status: Nur Geräte mit Alarmen eines bestimmten Alarmstatus anzeigen.

* Typ: Nur Alarme des angegebenen Typs anzeigen. Details können angezeigt werden, wenn Sie einmal auf einen Alarm klicken.

* Schweregrad: Nur Alarme der ausgewählten Schweregrad anzeigen.

### Widget "Neueste Alarme"

Zeigt alle Alarme jedes Schweregrads nach Zeit sortiert an. Es gibt keine zusätzlichen Parameter zu konfigurieren.

### Widget "Datenpunktliste"

Zeigt Datenpunkte (Messungen) an, eine in jeder Zeile, mit aktuellen Werten und Datenpunkt-Eigenschaften.

Zu konfigurierende Parameter:

* Liste der Datenpunkte: Wählen Sie einen oder mehrere Datenpunkte aus.

* Wählen Sie sichtbare Spalten:

     * Label: Bezeichnung des Datenpunktes. Weitere Informationen finden Sie unter [Daten-Explorer](#visualise).

     * Ziel: Zielwert. Kann im Daten-Explorer oder in der Datenpunktbibliothek konfiguriert werden.

     * Aktuell: Aktueller Wert.

     * Diff: Absolute Differenz zwischen aktuellem Wert und Zielwert.

     * Diff%: Prozentsatz der Differenz zwischen aktuellem Wert und Zielwert.

     * Asset: Name des Geräts oder der Gruppe des Datenpunkts.

### <a name="widget-asset-table"></a>Widget "Asset-Tabelle"

Zeigt die Details aller Kindgeräte in einer Tabelle an. Dies ist ein sehr starkes Widget, das es ermöglicht, ausgewählte Eigenschaften von Objekten in einer Tabelle anzuordnen.

Zu konfigurierende Parameter:

* Zielgerät oder Gruppe: Wählen Sie, für welches Objekt alle Kindgeräte angezeigt werden sollen. Dies ist typischerweise ein Gruppenobjekt.

* Eigenschaften: Wählen Sie Eigenschaften oder Aktionen eines Objekts aus, um sie als Spalten in der Tabelle zu visualisieren. Im Konfigurationsdialog sehen Sie eine Liste der konfigurierten Spalten. Jede der Spalten kann eine Eigenschaft oder eine Aktion sein.

Beispiel:
* Im folgenden Screenshot sind fünf Spalten konfiguriert. Drei Eigenschaftenspalten "Meter", "Vendor" und "Owner", die sich auf die Eigenschaften "name", type "und" owner "beziehen. Zusätzlich gibt es zwei Aktionen, eine zum Umschalten des Wartungsmodus und eine zum Neustarten des Geräts.

![image alt text](/guides/images/users-guide/image_17.png)

* Die resultierende Tabelle wird wie folgt visualisiert:

![image alt text](/guides/images/users-guide/image_18.png)

Die Liste der Eigenschaften kann wie folgt editiert werden:

* Neue Eigenschaften hinzufügen: Klicken Sie auf "+ Eigenschaften hinzufügen" und wählen Sie eine oder mehrere Eigenschaften aus. Die ausgewählten Eigenschaften werden dann am Ende der Spalten hinzugefügt.<br>
Hinweis: Die Eigenschaft "Aktiver Alarmstatus" zeigt aktive Alarme als Symbole in der Tabelle an. Wenn Sie diese Eigenschaft auswählen, konfigurieren Sie auch den Renderer "Active Alarm Status" in der Spaltenliste.

* Fügen Sie eine neue Aktion hinzu: Klicken Sie auf "+ Aktion hinzufügen". Sie können dann die vordefinierte Aktion hinzufügen, um den Wartungsmodus umzuschalten. Oder Sie wählen "Create Operation", um eine Schaltfläche zu erstellen, die einen Shell-Befehl ausführt. Im folgenden Dialog können Sie dann die Bezeichnung für die Schaltfläche und den auszuführenden Shell-Befehl eingeben.
![image alt text](/guides/images/users-guide/image_19.png)
Im Dialog werden die voreingestellten Shell-Kommandos der ersten Shell-Kommandos angezeigt. Die Liste ist leer, wenn es kein solches Gerät gibt. Weitere Informationen finden Sie unter [Shell](/guides/images/benutzerhandbuch/device-management-deutsch#shell).<br>
Sie können auch das JSON-Format für das Kommando eingeben, das an das Gerät gesendet wird. Für Einzelheiten über unterstütze Kommandos wenden Sie sich an den Gerätehersteller.
* Spaltenüberschrift bearbeiten: Um den Kopf der Spalte zu bearbeiten, klicken Sie auf die Spalte "Label" und bearbeiten das Label.

* Anordnen von Spalten: Sie können die Spalten durch Drag & Drop mit dem Handle vor der Spalte "Label" neu anordnen.

* Entfernen von Eigenschaften: Klicken Sie auf das rote Symbol am Ende einer Zeile, um die Spalte zu entfernen.

### Widget "Relais-Steuerung"
Ermöglicht das Ein- und Ausschalten eines Geräterelais. Nur für Geräte verfügbar, die diesen Vorgang unterstützen.

### Widget "Relais-Array"

Bei einem Relais-Array können Sie Relais ein- oder ausschalten. Nur für Geräte verfügbar, die diesen Vorgang unterstützen.

### Widget "Nachricht senden"

Sendet eine Nachricht an ein Gerät. Das Verhalten des Gerätes selbst ist geräteabhängig. Nur für Geräte verfügbar, die diesen Vorgang unterstützen.

## <a name="alarms"></a>Arbeiten mit Alarmen

Das Arbeiten mit Alarmen ist identisch mit der Arbeit mit Alarmen in der Geräteverwaltung. Siehe [Arbeiten mit Alarmen](/guides/images/benutzerhandbuch/device-management-deutsch#alarm-monitoring) im Device-Management-Handbuch.

## <a name="reports"></a>Arbeiten mit Dashboard-Berichten

Es gibt zwei Arten von Berichten in der Cockpit-Anwendung. Dashboard-Berichte ermöglichen es Ihnen, Anwendungen, Alarme, Assets, Ereignisse und viele andere Widgets zu verfolgen. Die zweite Art von Bericht ist der [Datenexport](#reporting) in csv- oder xlsx-Dateien.

### Durchsehen von Berichten

Dashboard-Berichte sind globale Dashboard-Seiten unabhängig von der Asset-Hierarchie. Der Navigator zeigt eine Schaltfläche "Berichte" an. Um alle vorhandenen Berichte anzuzeigen, erweitern Sie das Menü "Berichte" und sehen dann alle abgespeicherten Berichte.

### Erstellen neuer Berichte

Um einen neuen Bericht hinzuzufügen, wählen Sie in der Kopfzeile die Schaltfläche "+" und klicken Sie auf "Neuen Bericht erstellen".

Füllen Sie die Felder "Name" und "Icon" im Dialog aus und klicken Sie "Speichern".

![image alt text](/guides/images/users-guide/image_20.png)

Dann können dem erstellten Bericht Widgets hinzugefügt werden.

### Löschen von Berichten

Um einen Bericht zu löschen, klicken Sie das Zahnrad-Symbol und wählen Sie "Löschen".

### Berichten Widgets hinzufügen

Sie können dem Bericht Widgets hinzufügen, ähnlich den Dashboard-Widgets.

### Berichte anzeigen

Um einen Bericht anzuzeigen, öffnen Sie im Navigator die "Berichte" und klicken Sie auf den entsprechenden Bericht. Der Bericht wird angezeigt.

## <a name="reporting"></a>Daten exportieren mit Berichten

Mit der Funktion "Bericht erstellen" können Sie csv- oder xlsx-Reports für den gesamten Mandanten anfordern. Zusätzlich können Sie * Filter * nach bestimmten Geräten, Zeitbereichen oder * Felder * auswählen. Die Berichte enthalten Informationen zu allen angegebenen "Filtern" und aktivierten "Feldern". Die maximale Anzahl von Dokumenten, die in eine einzelne xlsx-Datei exportiert werden können, beträgt 1 Million. Wenn die Anzahl der Dokumente für definierte "Filter" den Grenzwert überschreitet, enthält das Ergebnis nur 1 Million Dokumente.

Informationen zum Verwenden von Dashboard-Berichten finden Sie unter [Arbeiten mit Dashboard-Berichten](#reports).

Um alle Berichte anzuzeigen, wählen Sie "Berichte" und klicken Sie auf "Bericht erstellen".

Wenn ein Bericht erstellt wurde, können Sie ihn duplizieren. Dazu gehen Sie in der Berichtskonfiguration zum gewünschten Bericht und klicken auf "Duplizieren" am Ende der Reihe. Ein neues Fenster öffnet sich, in dem alle Daten des aktuellen Berichts dupliziert werden. Sie können Änderungen machen, wenn Sie es wünschen. Zum Beenden drücken Sie die Schaltfläche "Speichern".

### Hinzufügen von Berichten

Um weitere Berichte zu erstellen, klicken Sie auf "Bericht hinzufügen".

- Geben Sie den Namen des Berichts ein.
- Wählen Sie aus, ob der Dateityp entweder "csv" oder "Excel" sein soll.
- Fügen Sie [Filter](#filters) hinzu, um Objekt- oder zeitspezifische Berichte anzufordern.
- Wählen Sie [Felder](#fields) des Berichts aus.
- Klicken Sie auf "Speichern", um den Vorgang abzuschließen.

![Add Reports](/guides/images/users-guide/addreports.png)

<a name="filters"> **Filter** </a>

Berichte können auf bestimmte Objekte oder einen Zeitbereich gefiltert werden. Um ein zu exportierendes Objekt auszuwählen, navigieren Sie zuerst zur Suchleiste "Objekt zum Exportieren" im Bereich "Filter". Bestimmte Geräte oder Gruppen können durch Eingabe ihres Namens oder Eigenschaftswerts in die Suchleiste ausgewählt werden. Wenn Sie auf die Schaltfläche "Suchen" klicken, sucht das Cockpit nach einem passenden Eintrag in Ihrer Gerätebibliothek. Nachdem alle passenden Geräte gefunden wurden, werden sie unter der Suchleiste angezeigt. Um ein Gerät auszuwählen, klicken Sie einfach auf seinen Namen, und es wird grün hervorgehoben.

![Object filter](/guides/images/users-guide/objectfilter.png)

Zusätzliche Filter wie "Zeitbereich" können aktiviert werden. Sie haben die Möglichkeit, Objektberichte zu "Letztes Jahr", "Letzter Monat", "Letzte Woche" zu filtern oder einfach einen benutzerdefinierten Zeitraum einzugeben. Um den Zeitbereich zu wählen, klicken Sie auf das Scroll-Menü und wählen Sie den gewünschten Zeitraum. Wenn Sie den Zeitbereich anpassen möchten, erscheinen zwei kleine Datumsfelder, um einen Zeitbereich auszuwählen.

![Time range](/guides/images/users-guide/timerange.png)

Um Filter zu aktivieren, klicken Sie auf das Kontrollkästchen unter "Aktiviert".

<a name="fields"> **Felder** </a>

Um Berichte zu bearbeiten, können verschiedene Felder ausgewählt werden. Wenn Sie z. B. "Alarme" und "Ereignisse" auswählen, filtern Sie die Berichte nur auf diese beiden Felder. Insgesamt gibt es vier Felder, die Sie wählen können.

- Alarme
- Ereignisse
- Verwaltetes Objekt
- Messungen

Um ein Feld zu aktivieren, klicken Sie einfach auf den Namen des Feldes.

![Fields](/guides/images/users-guide/enabledordisabledfields.png)

Wenn ein bestimmtes Feld aktiviert ist, können vordefinierte oder neue Eigenschaften hinzugefügt werden. Wenn Sie leere Eigenschaften hinzufügen möchten, klicken Sie auf "Hinzufügen". Um Label oder Pfad einzugeben, klicken Sie auf "Spalte" oder "Pfad" in der roten Zeile. Wenn Sie beispielsweise das Feld "Alarme" aktivieren, können Sie in Spalte und Pfad den Wert "Schweregrad" eingeben, um einen Bericht nur für Alarmschweregrade zu erhalten.

Wenn Sie ein Feld im Bereich "Felder" haben, das nicht aus der Liste "Vordefinierte Liste hinzufügen", sondern als benutzerdefinierte Eigenschaft definiert ist, muss mindestens eine Eigenschaft für den Export für benutzerdefinierte Werte eingerichtet werden, um auf der exportierten Excel-Liste zu erscheinen. Wenn für einen Bericht beispielsweise diese vire Felder definiert sind: Zeit, Gerätename, Typ und c8y_SpeedMeasurement.speed.value, dann sind die ersten drei vordefinierte Eigenschaften und die letzte eine benutzerdefinierte Eigenschaft. Wenn eine Messung für den Export keine benutzerdefinierte Eigenschaft c8y_SpeedMeasurement.speed.value hat, wird sie nicht in der Excel-Liste angezeigt.

Wenn Ihr Feld ein gültiges.key.with.dot ist, dann verweisen Sie es als ['Fragment.key.with.dot'] in dem Pfad, z.B. ['Fragment.key.with.dot'] serie.value

Um vordefinierte Eigenschaften hinzuzufügen, klicken Sie auf "Vordefinierte hinzufügen".

Um vordefinierte Eigenschaften auszuwählen, klicken Sie auf das entsprechende Kontrollkästchen unter "Anzeigen". Nachdem die gewünschten Eigenschaften ausgewählt wurden, klicken Sie auf "Auswählen".

![Select](/guides/images/users-guide/select.png)

Um eine bestimmte Eigenschaft effizient zu suchen, können Sie das Suchfeld verwenden.

Wenn das Feld "Messungen" aktiviert wurde, können Sie auch "Von Datenpunkt hinzufügen" wählen.

![Add from datapoint](/guides/images/users-guide/addfromdatapoint.png)

Um einen Datenpunkt zu wählen, klicken Sie auf das Kontrollkästchen. Wenn die Auswahl abgeschlossen ist, klicken Sie auf "Hinzufügen".

Das "Suchfeld" kann auch für eine einfachere Handhabung genutzt werden. Geben Sie im Feld "Suchfeld" den Namen oder Wert der gewünschten Geräte ein und klicken Sie auf "Senden". Alle übereinstimmenden Einträge werden angezeigt.

![Add datapoint](/guides/images/users-guide/adddatapoint.png)

### Stammdaten exportieren in csv- oder xlsx-Dateien

Um "Stammdaten" in csv- oder xlsx-Dateien zu exportieren, navigieren Sie zu "Bericht erstellen" auf der Registerkarte "Bericht".

- Wählen Sie die gewünschten Dateien aus, die Sie exportieren möchten, indem Sie auf das entsprechende Kontrollkästchen klicken.
- Klicken Sie auf "Exportieren".

![Exporting](/guides/images/users-guide/exportinventorydata.png)

Sie erhalten eine E-Mail mit den Links zu jeder Datei.

Die Standardzeit-Eigenschaften von Dokumenten (z. B. Zeit oder Erstellungszeit bei Alarmen) werden exportiert:

* als xlsx-Datei im Format: 03/13/2016 00:00:24
* als csv-Datei im Format: 2016-03-13T00:01:24.000Z

Nur csv-Zeit enthält Millisekunden und Zeitzone.

### Berichte editieren

Um Berichte zu editieren genügt es, sie anzuklicken und die Veränderungen zu speichern.

### Berichte löschen

Um Berichte über den Namen des Berichts zu entfernen, klicken Sie auf die Schaltfläche "X".

## <a name="library"></a>Verwenden der Datenpunktbibliothek

Die Datenpunktbibliothek enthält Standardwerte für Datenpunkteigenschaften. Datenpunkteigenschaften ähneln den "Absatzformaten" in Textverarbeitungsanwendungen: Sie möchten nicht jeden Absatz einzeln formatieren. Stattdessen möchten Sie einen Satz von Standardformaten definieren und diese auf Ihre Absätze in Ihrem Dokument anwenden. Die Datenpunktbibliothek bietet die gleiche Funktionalität für Datenpunkte: Sie bietet eine Reihe von Standarddatenpunktformaten, die von verschiedenen Geräten problemlos auf Ihre Datenpunkte angewendet werden können.

> Wie verwendet die Cockpit-Anwendung die Datenpunktbibliothek? Um die Standard-Visualisierung für einen Datenpunkt wie Farbe oder Label zu finden, durchsucht Cockpit die Datenpunktbibliothek und versucht, einen passenden Eintrag zu finden. Ein Eintrag gilt als "Passend", wenn der Wert für Fragment und Serie in der Datenpunktbibliothek mit denen der Messung übereinstimmt. Wenn ein passender Eintrag gefunden wird, werden die entsprechenden Datenpunkteigenschaften für eine Standardvisualisierung verwendet.
> 
> Darüber hinaus werden die Eigenschaften der Datenpunktbibliothek von Schwellenwert-Geschäftsregeln verwendet: Die in der Datenpunktbibliothek konfigurierten roten und gelben Werte werden von den Schwellwertregeln verwendet, um Alarme auszulösen.

Bei Auswahl von "Datenpunktbibliothek" im Navigator öffnet sich eine Liste mit vordefinierten Datenpunkten inklusive deren Eigenschaften.

![image alt text](/guides/images/users-guide/image_21de.png)

Beim Anklicken eines Eintrags kann ein einzelner Eintrag in der Datenpunktbibliothek editiert werden:

![image alt text](/guides/images/users-guide/image_22.png)

## <a name="rules"></a>Arbeiten mit Smart Rules

Cumulocity enthält eine Regel-Engine, um Daten in Echtzeit zu analysieren und Aktionen basierend auf Daten auszuführen. Diese Regeln werden in einer Skriptsprache angegeben und in der Administrations-Anwendung verwaltet.

Zum Erstellen von Regeln enthält die Cockpit-Anwendung einen "Smart Rule Builder". Mit dem Smart Rule Builder können Regeln aus Vorlagen erstellt werden. Diese Regeln werden als intelligente Regeln ("Smart Rules") bezeichnet. Die Vorlagen werden als intelligente Regelvorlagen ("Smart Rules Template") bezeichnet.


Smart Rules werden parametriert. Es gibt zwei Quellen für Parameter:

**Regelparameter** werden vom Benutzer beim Erstellen einer Smart Rule aus einer Vorlage bereitgestellt. Beispiele sind E-Mail-Adressen und Alarmtexte.

**Objektparameter** werden in der Gruppe oder dem Gerät gespeichert. Diese Parameter können auch nach der Erstellung der Smart-Rule editiert werden. Ein Beispiel sind Min- und Max-Werte für Schwellenwerte.

### Eine "Smart Rule" erstellen

Smart Rules können entweder unter "Konfiguration -> Smart Rules" oder unter dem Tab "Info" einer Gruppe oder eines Geräts erstellt werden.

* Klicken auf "+ Smart Rule hinzufügen"

* Auf ein "Smart Rule Template" klicken.

* Geben Sie im nächsten Fenster die Regelparameter ein. Die Regelparameter unterscheiden sich von Regel zu Regel (Details siehe Einzelregelbeschreibungen unten).

* Über das Suchfeld können Sie auch die aktuelle Smart Rule für Zielgeräte oder Assets aktivieren. Dieser Schritt ist optional.

* Wählen Sie aus, ob die Regel aktiviert oder deaktiviert werden soll.

* Auf "Erstellen" klicken.

Eine Liste der intelligenten Regeln wird unten gezeigt. Beachten Sie, dass die Anzahl der angezeigten Smart-Regeln je nach Ihrer Installation unterschiedlich sein kann.

![image alt text](/guides/images/users-guide/image_23de.png)

Danach ist die Regel für alle Geräte und Gruppen aktiv, wenn die Regel auf "freigegeben" steht und nicht nur für bestimmte Objekte aktiviert wurde. Im nächsten Abschnitt erfahren Sie, wie Sie eine intelligente Regel für bestimmte Objekte deaktivieren.

Deaktivierte Smart Rules werden nicht in Gruppenmenüs oder Gerätemenüs angezeigt, um Verwirrung zu vermeiden. Smart Rules können mehrere Male instanziiert werden.

### Aktivieren und Deaktivieren von Smart Rules

Smart Rules können Sie unter dem Info-Tab eines Geräts oder einer Gruppe sehen. Sie müssen innerhalb dieser Gruppe aktiv sein und auch auf untergeordneter Ebene aktiv sein.

Für ein einzelnes Objekt (Gruppe oder Gerät) kann eine einzelne Smart Rule aktiviert (eingeschaltet) und deaktiviert (ausgeschaltet) werden. Wenn zum Beispiel ein Gerät zu viele Grenzwertalarme erzeugt, können Sie die Regel für dieses einzelne Objekt deaktivieren. Die Regel ist für alle anderen Objekte noch aktiv.

Um eine Smart Rule für eine Gruppe oder ein Gerät zu deaktivieren oder zu aktivieren, wechseln Sie einfach auf die Registerkarte "Info", und klicken Sie auf die Schaltfläche, um die Regel zu aktivieren oder zu deaktivieren.

![Info tab](/guides/images/users-guide/infotab.png)	

### Bearbeiten, Klonen oder Entfernen von Smart Rules

Um eine bestimmte Smart Rule zu bearbeiten, zu klonen oder zu entfernen, klicken Sie einfach auf das rechts neben der Smart Rule befindliche Zahnrad und klicken Sie auf die gewünschte Option.

Für eine einfachere Fehlerbehebung gibt es einen direkten Link von einer intelligenten Regel zu einem entsprechenden Ereignisverarbeitungsmodul. Klicken Sie auf das Zahnrad und wählen Sie dann "Bearbeiten".

### Beispiel: Definieren von genauen Schwellenwerten

Gehen Sie folgendermaßen vor, um eine Schwellenregel zu definieren:
* Navigieren Sie im Asset-Navigator zu der gewünschten Gruppe oder dem gewünschten Gerät, um einen Schwellenwert auf anzuwenden.
* Klicken Sie auf "Daten-Explorer".
* Wenn der Datenpunkt standardmäßig nicht sichtbar ist, wählen Sie "Datenpunkt hinzufügen" und fügen Sie einen Datenpunkt hinzu.
* Für den Datenpunkt, der den Schwellenwert erhöhen soll, klicken Sie am Ende der Zeile auf das Zahnrad-Symbol und wählen Sie "Smart Rule erstellen".

![image alt text](/guides/images/users-guide/image_26de.png)

* Wählen Sie "Bei Messungen, die den Schwellenwert überschreiten, Alarm erstellen".

* Füllen Sie die Regelparameter im Formular aus:

![image alt text](/guides/images/users-guide/image_37de.png)

* Sie können den minimalen und den maximalen Wert für den roten Bereich eingeben. Wenn die Werte außerhalb dieser Werte liegen, wird ein Grenzwertalarm ausgelöst.

* Unter "Alarm erstellen" können Sie optional den Alarmtyp und den Alarmtext bearbeiten.

* Unter "Für Zielgruppe oder Geräte aktivieren" können Sie das Objekt auswählen, auf das diese Regel angewendet wird.

* Klicken Sie auf "Erstellen".

Nachdem die Regel erstellt wurde, wird sie automatisch aktiviert und Alarme erscheinen, wenn sie auftreten.

### Ausführen einer Kettenregel

Smart Rules können ein neues Datenelement auf der Plattform erstellen. Beispielsweise erzeugt die Schwellenregel neue Alarme. Diese neuen Daten können durch ausgewählte intelligente Regeln weiterverarbeitet werden, zum Beispiel durch eine "Bei Alarm  E-Mail verschicken"-Regel. Mit diesem Mechanismus ist es möglich, eine Kette von intelligenten Regeln zu erstellen. Wenn Sie eine Regelkette erstellen, müssen Sie eine klare Vorstellung haben, wie viele Daten erstellt werden, um Überlastungen oder übermäßige Datenmengen zu vermeiden.

## <a name="business"></a>Regeln für den Geschäftsablauf
Die folgenden Smart Rules sind in unserem System verfügbar.

### Messschwellenalarme

Beim Überschreiten der definierten gelben und roten Bereiche werden Alarme generiert und gelöscht.

Die Regel verwendet den folgenden Parameter aus dem Geräteobjekt oder der Datenpunktbibliothek:

* Objektwert roter Bereich: Bereich, wenn das System kritische Alarme erstellen soll. Diese Werte können im Daten-Explorer für jeden Datenpunkt editiert werden.

* Objektwert gelber Bereich: Bereich, wenn das System kleinere Alarme erstellen sollte. Diese Werte können im Daten-Explorer für jeden Datenpunkt editiert werden.

* Datenpunktbibliothek roter Bereich: Wenn kein roter Bereich im jeweiligen Objekt gespeichert ist, wird die Datenpunktbibliothek nach dem konfigurierten Datenpunkteintrag durchsucht und der dazugehörige rote Bereich verwendet.

* Datenpunkt Bibliothek gelber Bereich: Ähnlich wie der rote Bereich.

Mit diesem Mechanismus können Sie globale Schwellenbereiche in der Datenpunktbibliothek konfigurieren. Diese globalen Werte können dann von Fall zu Fall für bestimmte Objekte überschrieben werden.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_28de.png)

* Fragment: Name des Messfragments. Die eingehende Messung muss genau den gleichen Fragmentnamen wie konfiguriert haben. Beim Erstellen einer Regel aus dem Daten-Explorer sind die Fragmentdaten bereits ausgefüllt.

* Serie: Ähnlich wie Fragment, nur für die Serie.

* Eintrag der Datenpunktbibliothek: Name des Eintrags in der Datenpunktbibliothek. Hier finden Sie die Standardwerte für rote und gelbe Bereiche, falls sie nicht für ein einzelnes Objekt konfiguriert sind.

* Typ: Typ von Alarm, der ausgelöst wird.

* Text: Text des Alarms, der ausgelöst wird.  

Eine detaillierte Beschreibung der Schritte, die diese Smart Rule für jeden eingehenden Messwert durchführt:

* Prüfen, ob die Messung Daten für das Fragment und die Serie enthält (Regelparameter).

* Prüfen, ob die Regel für das Quellobjekt aktiviert ist.

* Die Daten des roten und gelben Bereiches sammeln von entweder:

   - dem Quellobjekt (der Messung)

   - der Datenpunktbibliothek (Regelparameter).
   
Sind keine roten/gelben Bereiche definiert, werden folgerichtig keine Alarme generiert.

Im Quellobjekt definierte Bereichswerte haben eine höhere Priorität als die in der Datenpunktbibliothek definierten Werte. Sie können auch einfach einen einzelnen Wert (z. B. gelber Bereich max) überschreiben, indem Sie ihn im Quellobjekt setzen. Die anderen Werte werden dann von der Datenpunktbibliothek übernommen.

 - Liegt der eingehende Wert im gelben Bereich...
 
 - Gibt es einen aktiven Alarm für das Objekt...

* ..wird der Schweregrad "weniger wichtig" vergeben.

Sonst

* Einen neuen Alarm erstellen mit den geforderten Parametern.

 - Liegt der eingehende Wert im roten Bereich...

 - Gibt es einen aktiven Alarm für das Objekt...

* ..wird der Schweregrad "kritisch" vergeben.

Sonst

* Einen neuen Alarm erstellen mit den geforderten Parametern.

* Wenn die Messung außerhalb des gelben und roten Bereichs liegt.

* Wenn ein aktiver Alarm des gegebenen Typs für das Objekt vorhanden ist.

* ..wird der Alarm gestoppt.


**Troubleshooting**

* Stellen Sie sicher, dass der Alarm erstellt wurde und nicht irgendwo dupliziert wurde.

* Das Gerät befindet sich nicht im Wartungsmodus: In diesem Fall gibt es keinen neuen Alarm, weil diese unterdrückt werden.

* Wenn Sie keine Alarmzuordnungsregel haben (siehe: [Repriorisieren von Alarmen](/guides/images/benutzerhandbuch/administration-deutsch#reprio-alarms)), die die Alarmschwelle ändert: In diesem Fall kann der Alarm anders ausfallen als erwartet.

* Prüfen Sie, ob ein Alarm bereits durch die nächsten geplanten Messungen mit dem resultierenden Wert in einem grünen Bereich gelöscht wurde.

* Bitte beachten Sie, dass der Alarm behoben ist, wenn Sie ihn löschen. Ein neuer Alarm wird nur dann ausgelöst, wenn das Gerät seinen Zustand ändert und die Schwellen wieder überschreitet.

## Bei Schwellwertüberschreitung Alarm erzeugen 

Wenn der Messwert den roten Bereich erreicht oder verlässt, wird ein kritischer Alarm erzeugt oder gelöscht. Die Schwere des Alarms wird bestimmt durch:
* Wenn der Messwert in den roten Bereich wechselt, ist der Schweregrad kritisch.
* Wenn der Messwert im grünen Bereich war, wird der Alarm gelöscht.

Diese Regel ist ähnlich der obigen Schwellenregel. In dieser Regel wird jedoch der rote Schwellenwert explizit angegeben. Die andere Schwellenregel oben extrahiert die Schwellenwerte aus der Geräte- oder Datenpunktbibliothek.

Die Parameter dieser Regel:![image alt text](/guides/images/users-guide/image_37de.png)

* Fragment: Name des Messfragments. Die eingehende Messung muss genau den gleichen Fragmentnamen wie konfiguriert haben. Beim Erstellen einer Regel aus dem Daten-Explorer ist der Fragmentname bereits ausgefüllt.

* Serie: Ähnlich wie Fragment, nur für Serie.
* Minimum, Maximum: Wenn ein Wert im Bereich [minimum; Maximum] wird der konfigurierte Alarm ausgelöst.
* Typ: Typ des Alarms, der ausgelöst wird.
* Text: Text des Alarms, der ausgelöst wird.

**Troubleshooting**

* Bitte überprüfen Sie die gleichen Schritte wie für die Schwellenregel oben.


## Bei Alarm E-mail senden

Wenn ein Alarm erzeugt wird, wird eine E-Mail gesendet.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_29de.png)

* Alarmarten: Die Arten der Alarme, die die Regel auslösen. Für jeden neu erzeugten Alarm mit einem dieser Typen in der Liste wird die Regel ausgelöst.

* Senden an: E-Mail-Adressen für das Versenden der E-Mail. Mehrere Adressen können durch ein Komma getrennt werden (",", kein Leerzeichen!).

* CC senden an: Wie bei "Senden an", nur für das E-Mail-"CC"-Feld.

* BCC senden an: Wie bei "Senden an", nur für das E-Mail-"BCC"-Feld.

* Antwort an: Adresse, die verwendet werden soll, um auf die Nachricht zu antworten.

* Betreff: Betreff der E-Mail. Sie können eine Variable des Formulars # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.

* Text: Text der E-Mail. Sie können eine Variable des Formulars # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.


**Troubleshooting**

* Bitte überprüfen Sie die gleichen Schritte wie für die Schwellenregel oben.

* Bitte überprüfen Sie Ihren Spam-Ordner.

## Bei Alarm SMS senden

Wenn ein Alarm erzeugt wird, wird eine SMS gesendet.

Diese Regel ist nur verfügbar, wenn Ihr Mandant über einen konfigurierten SMS-Anbieter verfügt.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_30de.png)

* Alarmtypen: Die Alarmtypen, die die Regel auslösen. Für jeden neu erzeugten Alarm wird eine Regel ausgelöst.

* Telefonnummer: Zielrufnummer. Mobiler Ländercode wird für alle Nummern empfohlen, z. B. "+49" oder "0049" für Deutschland. Mehrere Nummern können durch ein Komma getrennt werden (",", kein Leerzeichen!).

* Nachricht: SMS-Text mit max. 160 Zeichen. Sie können die Variable # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.

**Troubleshooting** 

* Bitte überprüfen Sie die gleichen Schritte wie für die Schwellenregel oben.

* Wenn Sie eine Variable verwenden, wird ein Limit von 160 als Gesamtzahl angewendet. Wenn nach dem Anwenden der Variablen der Text mehr als 160 Zeichen enthält, wird die SMS nicht gesendet.

##Bei Alarmdauer Schweregrad erhöhen

Wenn ein Alarm für eine bestimmte Zeit aktiv ist, wird der Schweregrad erhöht.

Die Parameter der Regel:![image alt text](/guides/images/users-guide/image_31de.png)

* Alarmtypen: Die Alarmtypen, die die Regel auslösen.

* Dauer: Wie lange muss es einen aktiven Alarm geben, um die Regel auszulösen?

Beschreibung:

* Wenn ein konfigurierter Alarm ausgelöst wird, beginnt die Überwachung, wie lange der Alarm aktiv bleibt.
* Wenn der Alarm nach einer bestimmten Zeit noch aktiv ist, wird sein Schweregrad um eine Stufe erhöht, zum Beispiel von "WENIGER WICHTIG" auf "WICHTIG".
* Wenn der Alarm "KRITISCH" ist, wird die Überwachung gestoppt, da keine weiteren Maßnahmen zur Verfügung stehen.

Die Regel überprüft, ob die konfigurierte Dauer einmal pro Minute überschritten wurde. Daher kann es vorkommen, dass sich der Alarmschweregrad nicht in der Sekunde ändert, wenn sie die Dauer überschreitet, sondern nur während der folgenden Überprüfung.

## Bei Geofence-Überschreitung Alarm erzeugen

Die Geofence-Smart-Regel kann so konfiguriert werden, dass ein Alarm beim Überschreiten des Geofence (oder beides) erzeugt wird. Bestehende Alarme werden gelöscht, wenn die entgegengesetzte Bedingung wahr ist, zum Beispiel wenn ein verfolgtes Fahrzeug, das den Geofence-Bereich verlassen hat, wieder in den Geofence-Bereich eintritt.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_32de.png)

* Geofence: Definieren Sie ein Polygon, das den Rand eines Bereichs definiert. Klicken Sie auf "Geofence bearbeiten", navigieren Sie zu Ihrem Bereich (z. B. mit dem Feld "Suchadresse") und definieren Sie ein Polygon, indem Sie einmal an jedem Punkt des Rahmens klicken. ![image alt text](/guides/images/users-guide/image_33.png)

* Typ: Typ des Alarms, der ausgelöst wird.

* Text: Text des Alarms, der ausgelöst wird.

* Schweregrad: Schweregrad des Alarms, der ausgelöst wird.

* TriggerAlarmOn: Definition, welche Geofence-Interaktion den Alarm erzeugt. Werte: "verlassen", "hineinfahren" oder "beide". "Verlassen" wird automatisch als Voreinstellung gesetzt.

Es wird kein Alarm ausgelöst, bis das Gerät zum ersten Mal die Geofence-Grenze überquert.

**Troubleshooting** 

* Bitte stellen Sie sicher, dass das Gerät mindestens einmal nach dem Erstellen bzw. Aktivieren der Regel innerhalb der Geofence war.

* Wenn sich das Gerät nicht im Wartungsmodus befindet: Es wird kein neuer Alarm aufgrund der Unterdrückungsrichtlinie erzeugt.

* Wenn Sie keine Alarmzuordnungsregel haben (siehe: [Repriorisieren von Alarmen](/guides/images/benutzerhandbuch/administration-deutsch#reprio-alarms)), die den Alarmschweregrad ändern: In diesem Fall kann der Alarm eine andere Schwere haben, als erwartet.
 
## Berechne Energieverbrauch

Erstellen Sie den Verbrauchsdatenpunkt anhand von Daten aus einem Elektro-, Gas- und Wasserzähler.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_34de.png)

* Fragment: Name des Messfragments. Die eingehende Messung muss genau den gleichen Fragmentnamen wie konfiguriert haben. Beim Erstellen einer Regel aus dem Daten-Explorer ist das Fragment bereits ausgefüllt.

* Serie: Ähnlich wie Fragment, nur für die Serie.

* Dauer: Zeitraum, in dem Verbrauchswerte berechnet werden sollen. Hier wird nur definiert, wie oft der Verbrauch berechnet wird, nicht aber die Einheit der Verbrauchsmessung.

* Verbrauchsmessfragment: Name des Messfragments, das generiert werden soll.

* Verbrauchsmessreihe: Name der Messreihe, die generiert werden soll.

Die Einheit der Verbrauchsmessung ist immer pro Stunde (z. B. wenn die Messungen in "kg" sind, liegt der Verbrauch in "kg/h").
Die Regel nimmt die letzten zwei Messungen für eine definierte Zeit.
Sie berechnet dann die Differenz von Wert und Zeit und berechnet den Verbrauch pro Stunde.

Beispiel:

Die Regel sei so konfiguriert, dass sie alle 20 Minuten berechnet wird. Es folgen folgende Messungen: 100 kg bei 11:59 und 200 kg bei 12:14.Um 12:20 wird die Regel das nächste Mal ausgelöst und es dauert die letzten beiden Messungen. Wert und Zeitdifferenz werden berechnet. Die um 12:20 erstellte Verbrauchsmessung beträgt somit 400 kg/h.
Falls im letzten Zeitraum keine neue Messung angelegt wurde, wird eine Messung mit Verbrauch 0 angelegt.

## Bei fehlenden Messdaten Alarm erzeugen

Erstellen Sie einen Alarm, wenn keine neuen Messdaten für eine bestimmte Zeit empfangen wurden.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_35de.png)
  
* Typ: Art der Messung. Die eingehende Messung muss den gleichen Typ haben wie konfiguriert. Beim Erstellen einer Regel aus dem Daten-Explorer ist der Typ bereits ausgefüllt.
* Zeitintervall: Zeitintervall für die Berechnung von Verbrauchswerten.
* Typ: Typ des ausgelösten Alarms.
* Schweregrad: Schweregrad des Alarms.
* Text: Text des ausgelösten Alarms.

Die Regel prüft, ob das konfigurierte Zeitintervall einmal pro Minute überschritten wurde. Daher kann es bis zu einer Minute dauern, bis der Alarm nach Überschreiten des Zeitintervalls erzeugt wurde. Um zu prüfen, ob das Zeitintervall überschritten wurde, muss nach der Aktivierung der Regel mindestens eine eingehende Messung erfolgen.

## Bei Alarm Kommando ausführen

Wenn ein bestimmter Alarm aufgetreten ist, wird das angegebene Kommando an das Gerät gesandt.

Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/image_36de.png)

* Alarmarten: Die Alarmtypen lösen die Regel aus. Für jeden neu festgelegten Alarm wird diese Regel ausgelöst.

* Kommando: Das Kommando, das gesendet wird. Das Kommando wird als JSON-Beschreibung bereitgestellt. Einige Standardkommandos können unter dem "Kommando"-Feld ausgewählt werden. Um ein Standardkommando zu verwenden, wählen Sie eins aus und drücken Sie die Pfeiltaste rechts. Dadurch wird die JSON des ausgewählten Kommandos eingefügt.


## Bei Geofence-Überschreitung E-Mail senden

Eine E-Mail wird verschickt, wenn ein Gerät das definierte Geofence-Gebiet verlässt oder es betritt.

Die Regel verwendet die folgenden Parameter:
![image alt text](/guides/images/users-guide/ongeofenceemailde.png)

* Geofence: Definieren Sie ein Polygon in der Weise ähnlich der Regel "Bei Geofence-Überschreitung einen Alarm auslösen".

* Senden an: E-Mail-Adressen für das Versenden der E-Mail. Mehrere Adressen können durch ein Komma getrennt werden (",", kein Leerzeichen!).

* CC senden an: Wie bei "Senden an", nur für das E-Mail-"CC"-Feld.

* BCC senden an: Wie bei "Senden an", nur für das E-Mail-"BCC"-Feld.

* Antwort an: Adresse, die verwendet wird, um auf die Nachricht zu antworten.

* Betreff: Betreff der E-Mail. Sie können eine Variable des Formulars # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.

* Text: E-Mail-Text. Sie können eine Variable des Formulars # {name} verwenden. Unterstützte Variablen werden unter "Smart-Rule-Variablen" weiter unten aufgelistet.

**Troubleshooting**

* Es wird kein Alarm ausgelöst, bis das Gerät zum ersten Mal die Geofence-Grenze überquert.
* Den Spam-Ordner überprüfen.


## Bei Alarm Anruf starten

Wenn ein Alarm erzeugt wird, leitet er einen Text-zu-Sprache-Anruf ein.
Die Regel verwendet die folgenden Parameter:

![image alt text](/guides/images/users-guide/onalarmsendtexttospeachde.png)

* Alarmtypen: Diese Alarmtypen lösen die Regel aus. Sie wird auf alle neuen Alarme angewendet.

* Telefonnummer: Zielrufnummer. Es wird empfohlen, den mobilen Ländercode für alle Nummern, wie "+49" oder "0049" für Deutschland, zu verwenden.

* Nachricht: Der von der Regel ausgelesene Text.

* Wiederholungen: Die Anzahl der Wiederholungen, die Zieltelefonnummer zu erreichen, wenn der Anruf nicht erfolgreich ist (Telefon besetzt oder Anruf abgelehnt).

* Intervall: Zeitintervall zwischen den Wiederholungen (in Minuten).

* Acknowledgement: Flag, der angibt, dass der Empfänger des Anrufs den Anruf quittieren muss (wenn ein nicht quittierter Anruf nicht als erfolgreicher Anruf gezählt wird).

* Quittierungstext: Die Quittierungsmeldung (wird nach der Hauptmeldung gelesen), z. B.: "Bitte bestätigen Sie diesen Anruf mit einem Klick auf 5.".

* Bestätigungsnummer: Die Nummer der Taste, die der Empfänger zur Bestätigung drücken muss. Wenn die Taste gedrückt wird, ist der Anruf erfolgreich und der Alarmstatus wird quittiert.

**Troubleshooting**

* Überprüfen Sie, dass der Alarm erstellt und nicht dupliziert wurde.

* Wenn sich das Gerät nicht im Wartungsmodus befindet: Es wird kein neuer Alarm aufgrund der Unterdrückungsrichtlinie erzeugt.

* Wenn Sie keine Alarmzuordnungsregel haben (siehe: [Repriorisieren von Alarmen](/guides/images/benutzerhandbuch/administration-deutsch#reprio-alarms)), die den Alarmschweregrad ändern: In diesem Fall kann der Alarm einen anderen Schweregrad haben, als erwartet.

## Bei Alarm eskalieren

Wenn ein Alarm erzeugt wird, wird eine E-Mail, SMS oder/und ein Text-to-Speech Anruf initiiert.

Die Regel verwendet die folgenden Parameter:
![image alt text](/guides/images/users-guide/escalatealarmde.png)

* Alarmtypen: Die Alarmtypen lösen diese Regel aus. Sie wird auf alle neuen Alarme angewendet.

Die Regel definiert eine Kette von Aktionen in Schritten. Um Schritte hinzuzufügen, klicken Sie auf die Schaltfläche "Schritt hinzufügen". Es erscheint ein Formular mit folgenden Parametern:

![image alt text](/guides/images/users-guide/escalatealarm2.png)

* Aktionstyp: Art der Aktion, die im Schritt ausgeführt wird. Mögliche Werte sind:

* E-Mail senden (siehe unter Alarm E-Mail-Regel für Parameterbeschreibungen senden)

* Sms senden (siehe Alarm-SMS-Regel für Parameterbeschreibungen senden)

* Telefon anrufen (siehe Auf Alarm initiieren Text-to-Speech-Aufrufregel für Parameterbeschreibungen)

* Bedingung: Die Bedingung, die angewendet wird, wenn die Regel ausgeführt wird. Mögliche Werte sind:

* Immer: Aktion wird immer ausgeführt.

* Immer: Wenn Schritt N fehlgeschlagen ist: Nur Telefonschritte können fehlschlagen. Der Schritt wird als fehlgeschlagen markiert, sobald alle Wiederholungen ohne erfolgreichen Aufruf durchgeführt wurden. Diese Option wird angezeigt, wenn bereits ein Telefonschritt konfiguriert ist, auf den verwiesen werden kann.

**Troubleshooting**

* Überprüfen Sie, dass der Alarm erstellt und nicht dupliziert wurde.

* Wenn sich das Gerät nicht im Wartungsmodus befindet: Es wird kein neuer Alarm aufgrund der Unterdrückungsrichtlinie erzeugt.

* Wenn Sie keine Alarmzuordnungsregel haben (siehe: [Repriorisieren von Alarmen](/guides/images/benutzerhandbuch/administration-deutsch#reprio-alarms)), die den Alarmschweregrad ändern: In diesem Fall kann der Alarm einen anderen Schweregrad haben, als erwartet.


### Smart-Rule-Variablen

Sie können Variablen in bestimmten Regelparametern verwenden. Wenn eine Regel ausgelöst wird, werden die Variablen durch ihre Istwerte ersetzt. Mit diesem Mechanismus können Sie Gerätenamen oder Alarmtexte in verschiedene Ausgaben (E-Mail, SMS, Text-to-Voice) einfügen.
Sie können alle Informationen über das auslösende Ereignis (wie den Alarm) und das Quellgerät davon enthalten.

Beispiel Variablen:

<table>
  <tr>
    <td>Variable</td>
    <td>Content</td>
  </tr>
  <tr>
    <td>#{creationTime}</td>
    <td>Zeitpunkt wann der Alarm erstellt wurde</td>
  </tr>
  <tr>
    <td>#{type}</td>
    <td>Typ des Alarms.</td>
  </tr>
  <tr>
    <td>#{time}</td>
    <td>Zeitpunkt des Auslösens.  </td>
  </tr>
  <tr>
    <td>#{text}</td>
    <td>Beschreibung des Alarms.</td>
  </tr>
  <tr>
    <td>#{source.name}</td>
    <td>Gerätename.</td>
  </tr>
  <tr>
    <td nowrap>#{source.c8y_Hardware.serialNumber}</td>
    <td>Seriennummer des Geräts.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Notes}</td>
    <td>Zusatzinformation.</td>
  </tr>
  <tr>
    <td>#{status}</td>
    <td>Status des Alarms: AKTIV, zur Kenntnis genommen oder GELÖSCHT.</td>
  </tr>
  <tr>
    <td>#{severity}</td>
    <td>Schweregrad des Alarms: KRITISCH, WICHTIG, WENIGER WICHTIG oder WARNUNG. </td>
  </tr>
  <tr>
    <td>#{count}</td>
    <td>Anzahl der Alarm Nachrichten für ein Gerät: Nachrichtenwiederholungen für ein Gerät werden nur fuer das Gerät gewertet.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.street}</td>
    <td>Strasse, wo sich das Gerät befindet.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.cityCode}</td>
    <td>Postleitzahl, wo sich das Gerät befindet.</td>
  </tr>
  <tr>
    <td>#{source.c8y_Address.city}</td>
    <td>Ortsname, wo sich das Gerät befindet.</td>
  </tr>
</table>


**Falls die Variable nicht existiert oder falsch geschrieben ist, wird der generierte Inhalt angezeigt.** 
