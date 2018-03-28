---
order: 50
title: Widgets-Sammlung
layout: redirect
---

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

