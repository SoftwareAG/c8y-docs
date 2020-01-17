---
weight: 30
title: Visualisieren von Daten mit dem Daten-Explorer 
layout: redirect
---

Im Daten-Explorer können Datenpunkte (Messwerte oder Sensordaten) visualisiert werden.

Der Daten-Explorer ist sowohl für alle Assets als auch für einzelne Assets verfügbar.

* Klicken Sie **Daten-Explorer** im Navigator, um auf alle Datenpunkte von allen Assets zuzugreifen.

* Navigieren Sie zu einem bestimmten Asset und wechseln Sie zur Registerkarte **Daten-Explorer**, um auf alle Datenpunkte dieses Assets und seiner Kind-Assets zuzugreifen.

Im Daten-Explorer finden Sie auf der rechten Seite eine Liste aller verfügbaren Datenpunkte. Standardmäßig werden die ersten fünf Datenpunkte des ausgewählten Geräts oder der ausgewählten Gruppe angezeigt. Weitere Informationen zum Hinzufügen von Datenpunkten finden Sie unter [Hinzufügen von Datenpunkten](#add-data-points).

Auf der linken Seite, in der Hauptkarte, sehen Sie die entsprechende Visualisierung.

<img src="/images/benutzerhandbuch/cockpit-data-explorer.png" name="Daten-Explorer" style="width:100%;"/><br>

Die Visualisierung wird auf Basis von Datenpunktattributen erstellt.

Die Datenpunktattribute werden folgendermaßen vorausgefüllt:

* Wenn diese Attribute bereits zuvor angepasst wurden, werden die entsprechenden Werte verwendet, siehe [Anpassen von Datenpunktattributen](#customize-data-points).

* Wenn die Datenpunkte eine Übereinstimmung in der Datenpunktbibliothek haben, werden die Werte von der Datenpunktbibliothek verwendet. 

In der Datenpunktbibliothek kann es mehr als einen übereinstimmenden Datenpunkteintrag geben. In diesem Fall wird automatisch der erste übereinstimmende Datenpunkt ausgewählt. Sie können diese Auswahl überschreiben, indem Sie im entsprechenden Datenpunkteintrag über das Menüsymbol das Kontextmenü öffnen und **[NAME] aus Bibliothek laden** wählen. 

Allgemeine Informationen zum Ändern der Visualisierung finden Sie unter [Ändern der Daten-Explorer-Visualisierung](#change-visualization). Informationen zum Anpassen der Attribute eines bestimmten Datenpunkts finden Sie unter[Anpassen von Datenpunktattributen](#customize-data-points).

### <a name="change-visualization"></a>Ändern der Daten-Explorer-Visualisierung

Zum Ändern der Visualisierung im Daten-Explorer können Sie verschiedene Parameter bearbeiten:

**Zeitintervall**

Sie können das angezeigte Zeitintervall ändern. Standardmäßig sehen Sie die Werte für die letzte Stunde.

Um das Zeitintervall auf der X-Achse zu ändern,

* wählen Sie ein anderes Zeitintervall aus der Auswahlliste in der oberen Menüleiste, 
* geben Sie ein eigenes Zeitintervall in die Felder "Von" und "Bis" im Daten-Explorer ein,
* bewegen Sie die X-Achse mit dem Mauszeiger nach links oder rechts um das Zeitintervall zu verschieben,
* Zoomen Sie durch Doppelklicken in den Daten-Explorer.

>**Info**: Echtzeitaktualisierungen werden abgeschaltet, wenn Sie ein Zeitintervall wählen, dass in der Vergangenheit liegt.

**Aggregation**

Um einen effizienten Überblick über größere Zeitspannen zu erhalten, können Sie die angezeigten Daten aggregieren.

Standardmäßig ist die Aggregation auf den Wert "Keine" eingestellt. Dieser Wert kann im Feld **Aggregation** in der oberen Menüleiste geändert werden. Verfügbare Werte sind "Minütlich", "Stündlich" or "Täglich", abhängig vom ausgewählten Zeitintervall.

**Echtzeitaktualisierung**

Standardmäßig ist die Aktualisierung in Echtzeit aktiviert, dass heißt, die angezeigten Daten werden aktualisiert, sobald neue Daten von den verbundenen Geräten empfangen werden. 

Klicken Sie "**Echtzeit**" in der oberen Menüleiste, um die Aktualisierung in Echtzeit ein- oder abzuschalten. Ein grünes Licht zeigt an, dass Echtzeitaktualisierung aktiviert ist.

**Datenpunktsichtbarkeit**

Die Sichtbarkeit eines Datenpunkts kann mit dem Regler links neben dem Datenpunktnamen aktiviert bzw. deaktiviert werden.

### <a name="add-data-points"></a>Hinzufügen von Datenpunkten

Klicken Sie **Datenpunkt hinzufügen** am Ende der Datenpunktliste, um einen Datenpunkt zum Daten-Explorer hinzuzufügen. 

<img src="/images/benutzerhandbuch/cockpit-data-explorer-add-datapoint.png" name="Datenpunkt hinzufügen" style="width:50%;"/><br>

Wählen Sie im folgenden Fenster oben ein Gerät aus der Asset-Hierarchie. Es wird nur die Asset-Hierarchie unterhalb des im Navigator ausgewählten Objekts angezeigt. Wenn im Navigator "Daten-Explorer" ausgewählt wurde, wird die gesamte Asset-Hierarchie angezeigt.

Unten im Fenster werden alle Datenpunkte des ausgewählten Objekts angezeigt. Wählen Sie die Datenpunkte aus, die Sie im Daten-Explorer anzeigen möchten. Klicken Sie **Hinzufügen**, um alle ausgewählten Datenpunkte zur Datenpunktliste hinzuzufügen.

Um einen Datenpunkt in die Datenpunktbibliothek zu speichern, öffnen Sie das Kontextmenü des Datenpunkts über das Menüsymbol und wählen Sie **In Bibliothek speichern**. 

<img src="/images/benutzerhandbuch/cockpit-data-explorer-contextmenu.png" name="Datenpunkt-Kontextmenü" style="width:75%;"/>

Weitere Informationen zur Datenpunktbibliothek finden Sie unter [Datenpunktbibliothek](#data-point-library).

Klicken Sie im Kontextmenü **Von der Liste löschen**, um einen Datenpunkt aus der Datenpunktliste zu löschen. 

### <a name="customize-data-points"></a>Anpassen von Datenpunktattributen

Sie können die Visualisierung eines einzelnen Datenpunkts nach Ihren Wünschen anpassen. Erweitern Sie dazu den Datenpunkteintrag in der Datenpunktliste durch Klicken auf das Pfeilsymbol.

<img src="/images/benutzerhandbuch/cockpit-data-explorer-datapoint-edit.png" name="Datenpunkt-Kontextmenü" style="width:75%;"/>

Die folgenden Felder können bearbeitet werden:

|Feld|Beschreibung|
|:---|:---|
|Beschriftung|Name des Datenpunkts. Wird in der Y-Achse zur Identifizierung des Datenpunkts angezeigt. Unter der Beschriftung wird das Ziel angezeigt, mit dem Namen des Assets und dem internen Namen des Datenpunkts (Messwertfragment und -typ). Diese Information kann nicht editiert werden.
|Standardeinheit|Einheit, die auf der Y-Achse verwendet wird.
|Min/Max|Bereich, der auf der Y-Achse angezeigt wird.
|Ziel|Der Zielwert wird aktuell nicht im Diagramm angezeigt. Dieser Wert wird im Widget "Datenpunktliste" verwendet.
|Gelber Bereich min/max|Legt den Bereich fest, in welchem WENIGER WICHTIGE Alarme über eine Schwellwertregel ausgelöst werden.
|Roter Bereich min/max|Legt den Bereich fest, in welchem KRITISCHE Alarme über eine Schwellwertregel ausgelöst werden.
|Anzeige|Wert, der angezeigt wird, wenn Daten aggregiert werden ("Minimum", Maximum", Minimum und maximum").
|Diagrammtyp|Diagrammtyp, der für die Visualisierung verwendet wird: "Linien", "Punkte", "Linien und Punkte", "Balken". Der Standardwert ist "Linie".
|Y-Achse|Legt fest, wo die Y-Achse angezeigt wird: "Auto", "Links", "Rechts". Der Standardwert ist "Auto". 

Nachdem Sie die Attribute eines Datenpunkts angepasst haben, können Sie die geänderten Einstellungen in der Datenpunktbibliothek speichern. Öffnen Sie das Kontextmenü über das Menüsymbol und wählen Sie **[NAME] in Bibliothek aktualisieren**.

Um zu den Attributen, die in der Datenpunktbibliothek gespeichert sind, zurückzukehren, wählen Sie **[NAME] aus Bibliothek laden**.

### Verhalten der Y-Achse

Standardmäßig wird der erste Datenpunkt auf der linken Y-Achse positioniert und die verbleibenden Datenpunkte rechts davon. Dieses Verhalten kann für einen bestimmten Datenpunkt durch Anpassen des entsprechenden Werts **Y-Achse** (auf "Links" oder "Rechts", siehe oben) geändert werden.

Jeder Datenpunkt wird auf einer eigenen Y-Achse angezeigt, wenn nicht Folgendes zutrifft:

* Zwei Datenpunkte haben identische Minimal- und Maximalwerte.

In diesem Fall teilen sich die Datenpunkte eine Y-Achse. Diese Y-Achse zeigt nur die Einheit (oder mehrere Einheiten, falls diese sich unterscheiden) an. Die Beschriftung wird nicht angezeigt.

### Hinzufügen von Alarmen oder Ereignissen

Neben Datenpunkten können Sie auch Alarme oder Ereignisse zum Daten-Explorer hinzufügen.

Klicken Sie **Alarm/Ereignis hinzufügen** in der Karte **Alarme/ Ereignisse**, um einen Alarm oder ein Ereignis hinzuzufügen.

<img src="/images/benutzerhandbuch/cockpit-data-explorer-add-alarm.png" name="Add widget" style="width:75%;"/> 

Im folgenden Fenster können Sie einen Alarm oder ein Ereignis aus der Auswahlliste auswählen. Klicken Sie **Hinzufügen**, um Ihre Auswahl hinzuzufügen.

Klicken Sie auf das Pfeilsymbol, um ein Ereignis zu erweitern.

Öffnen Sie das Kontextmenü über das Menüsymbol und wählen Sie **Löschen**, um einen Eintrag aus der Liste zu löschen.

Wie bei den Datenpunkten kann auch die Sichtbarkeit von Alarmen und Ereignissen im Daten-Exlorer durch einen Regler ein- oder abgeschaltet werden.


### <a name="create-widget"></a>Erstellen von Widgets aus dem Daten-Explorer

Wenn Sie die aktuelle Konfiguration des Daten-Explorers aufbewahren möchten, können Sie diese als Widget speichern.

#### Als Widget einem Dashboard hinzufügen

Klicken Sie **Mehr...** in der oberen Menüleiste und wählen Sie **Als Widget einem Dashboard hinzufügen**, um ein Widget aus dem Daten-Explorer eines bestimmten Assets zu erstellen. 

<img src="/images/benutzerhandbuch/cockpit-data-explorer-add-widget.png" name="Als Widget einem Dashboard hinzufügen" style="width:50%;"/> 

Wählen Sie im folgenden Fenster eines der für das aktuelle Objekt verfügbaren Dashboards und klicken Sie **Auswählen**, um den Daten-Explorer als Widget zum ausgewählten Dashboard hinzuzufügen. 

**Info**: Um diese Funktion nutzen zu können, muss ein Dashboard vorhanden sein. Weitere Informationen zu Dashboards finden Sie unter [Verwenden von Dashboards](#dashboards).

#### Als Widget einem Bericht hinzufügen

Klicken Sie **Mehr...** in der oberen Menüleiste und wählen Sie **Als Widget einem Bericht hinzufügen**, um ein Widget aus dem Daten-Explorer des Navigators zu erstellen.

<img src="/images/benutzerhandbuch/cockpit-data-explorer-add-to-report.png" name="Send as widget to report" style="width:50%;"/> 

Wählen Sie im folgenden Fenster einen der angezeigten Berichte und klicken Sie **Auswählen**, um den Daten-Explorer als Widget zum ausgewählten Bericht hinzuzufügen. 

**Info**: Um diese Funktion nutzen zu können, muss ein Bericht vorhanden sein. Weitere Informationen zu Dashboard-Berichten finden Sie unter [Verwenden von Dashboard-Berichten](#dashboards).


### <a name="export-data"></a>Exportieren von Messwerten

Messwerte können als CSV- oder Excel-Datei exportiert werden. Die exportierten Daten enthalten die folgenden Informationen, repräsentiert in Spalten:

 - Zeitpunkt, an welchem der Wert gemessen wurde
 - Quelle des Messwerts
 - Name des verwendeten Geräts
 - Fragmenttyp (z. B. c8y_SpeedMeasurement)
 - Messwert
 - Einheit, die für einen Messwert verwendet wird (z.B. "C", "km/h", "sec")

Klicken Sie **Mehr...** in der oberen Menüleiste und wählen Sie je nach Bedarf entweder **Als CSV herunterladen** oder **Als Excel herunterladen**.

Die Download-Datei wird erstellt, wir im folgenden Fenster angezeigt. Dies kann eine Weile dauern, abhängig von der Anzahl der Datenpunkte im Daten-Explorer. Wenn die Download-Datei fertiggestellt ist, klicken Sie **Herunterladen**.