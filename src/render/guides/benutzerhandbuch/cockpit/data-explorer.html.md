---
order: 30
title: Visualisieren von Daten mit dem Daten-Explorer 
layout: redirect
---

Im Daten-Explorer können Datenpunkte (Messwerte oder Sensordaten) visualisiert werden.

Der Daten-Explorer ist sowohl für alle Assets als auch für einzelne Assets verfügbar.

* Klicken Sie "Daten-Explorer" im Navigator, um auf alle Datenpunkte von allen Assets zuzugreifen.

* Navigieren Sie zu einem bestimmten Asset und wechseln Sie zur Registerkarte "Daten-Explorer", um auf alle Datenpunkte dieses Assets und seiner Kind-Assets zuzugreifen.

Im Daten-Explorer finden Sie auf der rechten Seite eine Liste aller verfügbaren Datenpunkte. Standardmäßig werden die ersten fünf Datenpunkte des ausgewählten Geräts oder der ausgewählten Gruppe angezeigt. Weitere Informationen zum Hinzufügen von Datenpunkten finden Sie unter [*Hinzufügen von Datenpunkten*](#add-data-points).

Auf der linken Seite, in der Hauptkarte, sehen Sie die entsprechende Visualisierung.

![Datenpunkt](/guides/images/users-guide/data-explorer-main-view.PNG)

Die Visualisierung wird auf Basis von Datenpunktattributen erstellt.

Die Datenpunktattribute werden folgendermaßen vorausgefüllt:

* Wenn diese Attribute bereits zuvor angepasst wurden, werden die entsprechenden Werte verwendet, siehe [*Anpassen von Datenpunktattributen*](#customize-data-points).

* Wenn die Datenpunkte eine Übereinstimmung in der Datenpunktbibliothek haben, werden die Werte von der Datenpunktbibliothek verwendet. 

In der Datenpunktbibliothek kann es mehr als einen übereinstimmenden Datenpunkteintrag geben. In diesem Fall wird automatisch der erste übereinstimmende Datenpunkt ausgewählt. Sie können diese Auswahl überschreiben, in dem Sie im entsprechenden Datenpunkteintrag über das Menüsymbol das Kontextmenü öffnen und **[NAME] aus Bibliothek laden** wählen. 

![Datenpunkt bearbeiten](/guides/images/users-guide/data-explorer-data-points-edit.PNG)

Allgemeine Informationen zum Ändern der Visualisierung finden Sie unter [*Ändern der Daten-Explorer-Visualisierung*](#change-visualization). Informationen zum Anpassen der Attribute eines bestimmten Datenpunkts finden Sie unter[*Anpassen von Datenpunktattributen*](#customize-data-points).

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

Standardmäßig ist die Aggregation auf den Wert "Keine" eingestellt. Dieser Wert kann im Feld "Aggregation" in der oberen Menüleiste geändert werden. Verfügbare Werte sind "Minütlich", "Stündlich" or "Täglich", abhängig vom ausgewählten Zeitintervall.

**Echtzeitaktualisierung**

Standardmäßig ist die Aktualisierung in Echtzeit aktiviert, dass heißt, die angezeigten Daten werden aktualisiert, sobald neue Daten von den verbundenen Geräten empfangen werden. 

Klicken Sie "**Echtzeit**" in der oberen Menüleiste, um die Aktualisierung in Echtzeit ein- oder abzuschalten. Ein grünes Licht zeigt an, dass Echtzeitaktualisierung aktiviert ist.

**Datenpunktsichtbarkeit**

Die Sichtbarkeit eines Datenpunkts kann mit dem Regler links neben dem Datenpunktnamen aktiviert bzw. deaktiviert werden.

### <a name="add-data-points"></a>Hinzufügen von Datenpunkten

Klicken Sie **Datenpunkt hinzufügen** am Ende der Datenpunktliste, um einen Datenpunkt zum Daten-Explorer hinzuzufügen. 

<img src="/guides/images/benutzerhandbuch/cockpit-data-explorer-add-datapoint.png" name="Datenpunkt hinzufügen" style="width:50%;"/><br>

Wählen Sie im folgenden Fenster oben ein Gerät aus der Asset-Hierarchie. Es wird nur die Asset-Hierarchie unterhalb des im Navigator ausgewählten Objekts angezeigt. Wenn im Navigator "Daten-Explorer" ausgewählt wurde, wird die gesamte Asset-Hierarchie angezeigt.

Unten im Fenster werden alle Datenpunkte des ausgewählten Objekts angezeigt. Wählen Sie die Datenpunkte aus, die Sie im Daten-Explorer anzeigen möchten. Klicken Sie **Hinzufügen**, um alle ausgewählten Datenpunkte zur Datenpunktliste hinzuzufügen.

Um einen Datenpunkt in die Datenpunktbibliothek zu speichern, öffnen Sie das Kontextmenü des Datenpunkts über das Menüsymbol und wählen Sie **In Bibliothek speichern**. 

<img src="/guides/images/benutzerhandbuch/cockpit-data-explorer-contextmenu.png" name="Datenpunkt-Kontextmenü" style="width:75%;"/>

Weitere Informationen zur Datenpunktbibliothek finden Sie unter [Datenpunktbibliothek](#data-point-library).

Klicken Sie im Kontextmenü **Von der Liste löschen**, um einen Datenpunkt aus der Datenpunktliste zu löschen. 

### <a name="customize-data-points"></a>Anpassen von Datenpunktattributen

Sie können die Visualisierung eines einzelnen Datenpunkts nach Ihren Wünschen anpassen. Erweitern Sie dazu den Datenpunkteintrag in der Datenpunktliste durch Klicken auf das Pfeilsymbol.

<img src="/guides/images/benutzerhandbuch/cockpit-data-explorer-datapoint-edit.png" name="Datenpunkt-Kontextmenü" style="width:75%;"/>

Die folgenden Felder können bearbeitet werden:

|Feld|Beschreibung|
|:---|:---|
Beschriftung|Name des Datenpunkts. Wird in der Y-Achse zur Identifizierung des Datenpunkts angezeigt. Unter der Beschriftung wird das Ziel angezeigt, mit dem Namen des Assets und dem internen Namen des Datenpunkts (Messwertfragment und -reihe). Diese Information kann nicht editiert werden.
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

Standardmäßig wird der erste Datenpunkt auf der linken Y-Achse positioniert und die verbleibenden Datenpunkte rechts davon. Dieses Verhalten kann für einen bestimmten Datenpunkt durch Anpassen des entsprechenden Werts "Y-Achse" (auf "Links" oder "Rechts", siehe oben) geändert werden.

Jeder Datenpunkt wird auf einer eigenen Y-Achse angezeigt, wenn nicht Folgendes zutrifft:

* Zwei Datenpunkte haben identische Minimal- und Maximalwerte.

In diesem Fall teilen sich die Datenpunkte eine Y-Achse. Diese Y-Achse zeigt nur die Einheit (oder mehrere Einheiten, falls diese sich unterscheiden) an. Die Beschriftung wird nicht angezeigt.

### Adding alarms or events

In addition to data points you can also add alarms or events to the Daten-Explorer.

<img src="/guides/images/users-guide/Cockpit/Cockpit_DataExplorerAlarms.png" name="Alarms" style="width:75%;"/> 

In the "Alarms/ Events" card, click **Add alarm/ event** to add an alarm or event.

<img src="/guides/images/users-guide/Cockpit/Cockpit_DataExplorerAlarmAdd.png" name="Add widget" style="width:75%;"/> 

In the upcoming dialog, you can select an alarm or event from the list of recent alarms and events. Click **Add**, to add your selection.

Expand an event, to modify its properties.

Click the menu icon and in the context menu select **Remove**, to remove the entry from the list.

As with data points, you can turn the visibility of an alarm/ event in the Daten-Explorer on and off by moving the slider.


### <a name="create-widget"></a>Creating widgets from the Daten-Explorer

If you want to keep your current configuration in the Daten-Explorer for later usage, save it as a widget.

**Send as widget to dashboard**

To create a widget from the Daten-Explorer of a particular asset, click **More...** in the top menu bar and select **Send as a widget to dashboard** from the context menu.

<img src="/guides/images/users-guide/Cockpit/Cockpit_SendWidgetToDashboard.png" name="Send as widget to dashboard" style="width:50%;"/> 

In the upcoming dialog, select one of the dashboards available for the current object and click **Select** to add the Daten-Explorer as widget to the selected dashboard.

**Info**: To use this function, first a dashboard has to be created. For details on dashboards, refer to [Working with Dashboards](#dashboards).

**Send as widget to report**

To create a widget from the Daten-Explorer of in the navigator, click **More...** in the top menu bar and select **Send as a widget to report** from the context menu.

<img src="/guides/images/users-guide/Cockpit/Cockpit_SendWidgetToReport.png" name="Send as widget to report" style="width:50%;"/> 

In the upcoming dialog, select one of the reports available and click **Select** to add the Daten-Explorer as widget to the selected report.

**Info**: To use this function, first a report has to be created. For details on reports, refer to [Working with Dashboard reports](#reports).


### <a name="export-data"></a>Exporting measurement data

You may download measurement data as CSV or Excel files. The exported data shows the following information, divided into columns:

 - Time when the specific measurement was taken
 - Source of the measurement
 - Name of the device being used
 - Fragment series (e.g. c8y_SpeedMeasurement)
 - Value of the measurement
 - Unit used for a particular measurement (e.g. "C", "km/h", "sec")

To export measurement data, click the **More...** button in the top menu bar and select either **Download as CSV** or **Download as Excel**, according to your preferences. 

The download will be generated, as shown in the upcoming dialog. This make take a while, depending on the number of data points added to the Daten-Explorer. Once the loading has been completed, click **Download**.