---
order: 30
title: Visualisieren von Daten mit dem Daten-Explorer 
layout: redirect
---

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

