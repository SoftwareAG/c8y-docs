---
layout: redirect
title: Daten-Explorer
weight: 30
---

Im Daten-Explorer können Datenpunkte (d. h. Messwerte oder Sensordaten) visualisiert werden.


Der Daten-Explorer ist sowohl für alle Assets als auch für einzelne Assets verfügbar.

* Klicken Sie auf **Daten-Explorer** im Navigator, um auf alle Datenpunkte von allen Assets zuzugreifen.

* Navigieren Sie zu einem bestimmten Asset und wechseln Sie zur Registerkarte **Daten-Explorer**, um auf alle Datenpunkte dieses Assets und seiner Kind-Assets zuzugreifen.

Im Daten-Explorer finden Sie auf der rechten Seite eine Liste aller verfügbaren Datenpunkte. Standardmäßig werden die ersten fünf Datenpunkte des ausgewählten Geräts oder der ausgewählten Gruppe angezeigt. Informationen zum Hinzufügen von Datenpunkten finden Sie unter [Daten-Explorer > Hinzufügen von Datenpunkten](#add-data-points).

Auf der linken Seite, in der Hauptkarte, sehen Sie die entsprechende Visualisierung.

![data explorer](/images/benutzerhandbuch/cockpit/cockpit-dataexplorer.png)

Die Visualisierung wird auf Basis von Datenpunktattributen erstellt.

Die Datenpunktattribute werden folgendermaßen vorausgefüllt:

* Wenn diese Attribute bereits zuvor angepasst wurden, werden die entsprechenden Werte verwendet, siehe [Anpassen von Datenpunktattributen](#customize-data-points).

* Wenn die Datenpunkte eine Übereinstimmung in der Datenpunktbibliothek haben, werden die Werte aus der Datenpunktbibliothek verwendet.

In der Datenpunktbibliothek kann es mehr als einen übereinstimmenden Datenpunkteintrag geben. In diesem Fall wird automatisch der erste übereinstimmende Datenpunkt ausgewählt. Sie können diese Auswahl überschreiben, indem Sie im entsprechenden Datenpunkteintrag über das Menüsymbol das Kontextmenü öffnen und **[NAME] aus Bibliothek laden** wählen.

![edit data points](/images/benutzerhandbuch/cockpit/cockpit-dataexplorer-edit.png)

Allgemeine Informationen zum Ändern der Visualisierung finden Sie unter [Ändern der Daten-Explorer-Visualisierung](#change-visualization). Informationen zum Anpassen der Attribute eines bestimmten Datenpunkts finden Sie unter [Anpassen von Datenpunktattributen](#customize-data-points).

Klicken Sie auf **Als Standard speichern**, um die Datenpunkt-Einstellungen im vom Gerät verwalteten Objekt zu speichern. Diese Einstellungen haben dann Vorrang vor den Einstellungen aus der Datenpunktbibliothek, z. B. wenn dieser Datenpunkt von anderen Benutzern einem Daten-Explorer hinzugefügt wird oder wenn das Gerät und sein Datenpunkt durch eine Schwellenwert-Smart Rule verarbeitet werden. Wenn Sie die Standardeinstellungen der Datenpunktbibliothek wiederherstellen möchten, klicken Sie auf **Aus Bibliothek laden** und anschließend auf **Als Standard speichern**.

**Beispiel:**

Angenommen, Sie haben in der Bibliothek einen Temperaturdatenpunkt definiert und verwenden ein Gerät, das Temperaturmesswerte sendet (Übereinstimmung nach Fragment und Serie mit dem Datenpunkt in der Bibliothek). Wenn Sie eine Smart Rule des Typs "Bei Schwellenwert Alarm erzeugen" erstellen und den Datenpunkt aus der Bibliothek wählen, wird anhand der Einstellungen aus der Bibliothek entschieden, ob ein Alarm erzeugt werden soll. Wenn Sie jedoch die Einstellungen dieses Datenpunkts für Ihr Gerät im Daten-Explorer ändern und auf **Als Standard speichern** klicken, verwendet die Smart Rule diese überschriebenen Einstellungen anstelle derjenigen aus der Bibliothek. Für andere Geräte werden hingegen weiterhin die Einstellungen aus der Bibliothek verwendet.

>**Info:** Datenpunkte sind für alle authentifizierten Benutzer des Mandanten sichtbar, unabhängig von ihrer Stammdatenrollen-Berechtigung.

<a name="change-visualization"></a>
### Ändern der Daten-Explorer-Visualisierung

Zum Ändern der Visualisierung im Daten-Explorer können Sie verschiedene Parameter bearbeiten:

**Zeitintervall**

Sie können das angezeigte Zeitintervall ändern. Standardmäßig sehen Sie die Werte für die letzte Stunde.

Um das Zeitintervall auf der x-Achse zu ändern,

* wählen Sie ein anderes Zeitintervall aus der Auswahlliste in der oberen Menüleiste,
* geben Sie ein eigenes Zeitintervall in die Felder **Von** und **Bis** im Daten-Explorer ein,
* bewegen Sie die x-Achse mit dem Mauszeiger nach links oder rechts, um das Zeitintervall zu verschieben,
* zoomen Sie durch Doppelklicken in den Daten-Explorer.

>**Info:** Echtzeitaktualisierungen werden abgeschaltet, wenn Sie ein Zeitintervall wählen, dass in der Vergangenheit liegt.

**Aggregation**

Um einen effizienten Überblick über größere Zeitspannen zu erhalten, können Sie die angezeigten Daten aggregieren.

Standardmäßig ist die Aggregation auf den Wert "Keine" eingestellt. Dieser Wert kann im Feld **Aggregation** in der oberen Menüleiste geändert werden. Verfügbare Werte sind "Minütlich", "Stündlich" oder "Täglich", abhängig vom ausgewählten Zeitintervall.

Wenn die Aggregation aktiviert ist, ändert sich der in Datenpunktgraphen oder Datenpunkttabellen angezeigte Zeitstempel geringfügig, um die Transparenz zu erhöhen:

* Ist keine Aggregation ausgewählt, werden Datum, Stunde, Minute und Sekunde angezeigt:<br> 27 Jan 2020 17:26:55
* Ist minütliche Aggregation ausgewählt, werden die Sekunden nicht angezeigt:<br> 27 Jan 2020 17:27-17:28
* Ist stündliche Aggregation ausgewählt, werden Minuten und Sekunden nicht angezeigt:<br> 27 Jan 2020 05:00-06:00
* Ist tägliche Aggregation ausgewählt, wird lediglich der Tag angezeigt:<br> 27 Jan 2020-28 Jan 2020.


**Echtzeitaktualisierung**

Standardmäßig ist die Aktualisierung in Echtzeit aktiviert, dass heißt, die angezeigten Daten werden aktualisiert, sobald neue Daten von den verbundenen Geräten empfangen werden.

Klicken Sie auf **Echtzeit** in der oberen Menüleiste, um die Aktualisierung in Echtzeit ein- oder abzuschalten. Ein grünes Licht zeigt an, dass Echtzeitaktualisierung aktiviert ist.


**Datenpunktsichtbarkeit**

Die Sichtbarkeit eines Datenpunkts kann mit dem Umschalter links neben dem Datenpunktnamen aktiviert bzw. deaktiviert werden.

<a name="add-data-points"></a>
### So fügen Sie einen Datenpunkt hinzu

Klicken Sie auf **Datenpunkt hinzufügen** am Ende der Karte **Datenpunkte**, um einen Datenpunkt zum Daten-Explorer hinzuzufügen.

![Add data point](/images/benutzerhandbuch/cockpit/cockpit-dataexplorer-adddatapoint.png)

Wählen Sie im folgenden Fenster oben ein Gerät aus der Asset-Hierarchie. Es wird nur die Asset-Hierarchie unterhalb des im Navigator ausgewählten Objekts angezeigt. Wenn im Navigator **Daten-Explorer** ausgewählt wurde, wird die gesamte Asset-Hierarchie angezeigt.

Unten im Fenster werden alle Datenpunkte des ausgewählten Objekts angezeigt. Wählen Sie die Datenpunkte aus, die Sie im Daten-Explorer anzeigen möchten. Klicken Sie auf **Hinzufügen**, um alle ausgewählten Datenpunkte zur Datenpunktliste hinzuzufügen.

Um einen Datenpunkt in der Datenpunktbibliothek zu speichern, öffnen Sie das Kontextmenü des Datenpunkts über das Menüsymbol und wählen Sie **In Bibliothek speichern**.

![Save data point to library](/images/benutzerhandbuch/cockpit/cockpit-dataexplorer-savedatapoint.png)

Weitere Informationen zur Datenpunktbibliothek finden Sie unter [Datenpunktbibliothek](#data-point-library).

Klicken Sie im Kontextmenü auf **Von der Liste löschen**, um einen Datenpunkt aus der Datenpunktliste zu löschen.

<a name="customize-data-points"></a>
### Anpassen von Datenpunktattributen

Sie können die Visualisierung eines einzelnen Datenpunkts nach Ihren Wünschen anpassen. Erweitern Sie dazu den Datenpunkteintrag in der Datenpunktliste durch Klicken auf das Pfeilsymbol.

Die folgenden Felder können bearbeitet werden:

<table>
<col style="width:15%">
<col style="width:85%">
<thead>
<tr>
<th style="text-align:left">Feld</th>
<th style="text-align:left">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Beschriftung</td>
<td style="text-align:left">Name des Datenpunkts. Wird in der Y-Achse zur Identifizierung des Datenpunkts angezeigt. Unter der Beschriftung wird das Ziel angezeigt, mit dem Namen des Assets und dem internen Namen des Datenpunkts (Messwertfragment und -typ). Diese Information kann nicht editiert werden.</td>
</tr>
<tr>
<td style="text-align:left">Einheit</td>
<td style="text-align:left">Einheit, die auf der Y-Achse verwendet wird. </td>
</tr>
<tr>
<td style="text-align:left">Min/Max</td>
<td style="text-align:left">Bereich, der auf der Y-Achse angezeigt wird. Wird dieser nicht angegeben, so wird die y-Achse anhand der Messwerte skaliert, die im angegebenen Zeitintervall abgerufen werden.</td>
</tr>
<tr>
<td style="text-align:left">Ziel</td>
<td style="text-align:left">Der Zielwert wird aktuell nicht im Diagramm angezeigt. Dieser Wert wird im Widget "Datenpunktliste" verwendet.</td>
</tr>
<tr>
<td style="text-align:left">Gelber Bereich min/max</td>
<td style="text-align:left">Legt den Bereich fest, in welchem WENIGER WICHTIGE Alarme über eine Schwellenwertregel ausgelöst werden.  </td>
</tr>
<tr>
<td style="text-align:left">Roter Bereich min/max</td>
<td style="text-align:left">Legt den Bereich fest, in welchem KRITISCHE Alarme über eine Schwellenwertregel ausgelöst werden.</td>
</tr>
<tr>
<td style="text-align:left">Anzeigen</td>
<td style="text-align:left">Wert, der bei aktivierter Aggregation angezeigt wird. Dies kann "Minimum", Maximum" oder "Minimum und Maximum" sein.</td>
</tr>
<tr>
<td style="text-align:left">Diagrammtyp</td>
<td style="text-align:left">Diagrammtyp, der für die Visualisierung verwendet wird: Dies kann einer der folgenden Typen sein: "Linie", "Punkte", "Linie mit Punkten", "Balken", "Schritt davor" (Abwechseln zwischen vertikalen und horizontalen Segmenten, wie in einer Schrittfunktion) oder "Schritt danach" (Abwechseln zwischen horizontalen und vertikalen Segmenten). Der Standardwert ist "Linie".</td>
</tr>
<tr>
<td style="text-align:left">Y-Achse</td>
<td style="text-align:left">Legt fest, wo die Y-Achse angezeigt wird: "Auto", "Links", "Rechts". Der Standardwert ist "Auto". </td>
</tr>
</tbody>
</table>

Nachdem Sie die Attribute eines Datenpunkts angepasst haben, können Sie die geänderten Einstellungen in der Datenpunktbibliothek speichern. Öffnen Sie das Kontextmenü über das Menüsymbol und wählen Sie **[NAME] in Bibliothek aktualisieren**.

Um zu den Attributen, die in der Datenpunktbibliothek gespeichert sind, zurückzukehren, wählen Sie **[NAME] aus Bibliothek laden**.

### Verhalten der Y-Achse

Standardmäßig wird der erste Datenpunkt auf der linken Y-Achse positioniert und die verbleibenden Datenpunkte rechts davon. Dieses Verhalten kann für einen bestimmten Datenpunkt durch Anpassen des entsprechenden Werts "Y-Achse" (auf "Links" oder "Rechts", siehe oben) geändert werden.

Jeder Datenpunkt wird auf einer eigenen Y-Achse angezeigt, wenn nicht Folgendes zutrifft:

* Zwei Datenpunkte haben identische Minimal- und Maximalwerte.

In diesem Fall teilen sich die Datenpunkte eine Y-Achse. Diese Y-Achse zeigt nur die Einheit (oder mehrere Einheiten, falls diese sich unterscheiden) an. Die Beschriftung wird nicht angezeigt.

### Hinzufügen von Alarmen oder Ereignissen

Neben Datenpunkten können Sie auch Alarme oder Ereignisse zum Daten-Explorer hinzufügen.

Klicken Sie auf **Alarm/Ereignis** hinzufügen in der Karte **Alarm/Ereignis**, um einen Alarm oder ein Ereignis hinzuzufügen.

![Data explorer add events](/images/benutzerhandbuch/cockpit/cockpit-dataexplorer-eventsadd.png)

Im folgenden Fenster können Sie einen Alarm oder ein Ereignis aus der Auswahlliste auswählen. Klicken Sie auf **Hinzufügen**, um Ihre Auswahl hinzuzufügen.

Klicken Sie auf das Pfeilsymbol, um ein Ereignis zu erweitern.

Klicken Sie auf das Menüsymbol und wählen Sie im Kontextmenü die Option **Löschen**, um den Eintrag aus der Liste zu entfernen.

Wie bei den Datenpunkten kann auch die Sichtbarkeit von Alarmen und Ereignissen im Daten-Explorer durch einen Umschalter ein- oder abgeschaltet werden.

<a name="create-widget"></a>
### Erstellen von Widgets im Daten-Explorer

Wenn Sie die aktuelle Konfiguration des Daten-Explorers aufbewahren möchten, können Sie diese als Widget speichern.

**Als Widget einem Dashboard hinzufügen**

Klicken Sie auf **Mehr...** in der oberen Menüleiste und wählen Sie **Als Widget einem Dashboard hinzufügen**, um ein Widget aus dem Daten-Explorer eines bestimmten Assets zu erstellen.

![Data explorer add events](/images/benutzerhandbuch/cockpit/cockpit-dataexplorer-sendwidget.png)

Wählen Sie im folgenden Fenster eines der für das aktuelle Objekt verfügbaren Dashboards und klicken Sie auf **Auswählen**, um den Daten-Explorer als Widget zum ausgewählten Dashboard hinzuzufügen.

> **Info:** Um diese Funktion nutzen zu können, muss ein Dashboard vorhanden sein. Weitere Informationen zu Dashboards finden Sie unter [Verwenden von Dashboards](#dashboards).

**Als Widget einem Bericht hinzufügen**

Klicken Sie auf **Mehr...** in der oberen Menüleiste und wählen Sie **Als Widget einem Bericht hinzufügen**, um ein Widget aus dem Daten-Explorer des Navigators zu erstellen.

![Data explorer add events](/images/benutzerhandbuch/cockpit/cockpit-dataexplorer-sendwidget.png)

Wählen Sie im folgenden Fenster einen der angezeigten Berichte und klicken Sie auf **Auswählen**, um den Daten-Explorer als Widget zum ausgewählten Bericht hinzuzufügen.

> **Info:** Um diese Funktion nutzen zu können, muss ein Bericht vorhanden sein. Weitere Informationen zu Dashboard-Berichten finden Sie unter [Verwenden von Berichten](#reports).

<a name="export-data"></a>
### Exportieren von Messwerten

Messwerte können als CSV- oder Excel-Datei exportiert werden. Die exportierten Daten enthalten die folgenden Informationen, repräsentiert in Spalten:

 - Zeitpunkt, an welchem der Wert gemessen wurde
 - Quelle des Messwerts
 - Name des verwendeten Geräts
 - Fragmenttyp (z. B. `c8y_SpeedMeasurement`)
 - Messwert
 - Einheit, die für einen Messwert verwendet wird (z. B. "C", "km/h", "sec")

Klicken Sie auf **Mehr...** in der oberen Menüleiste und wählen Sie je nach Bedarf entweder **Als CSV herunterladen** oder **Als Excel herunterladen**.

Die Download-Datei wird erstellt, wie im folgenden Fenster angezeigt. Dies kann einige Zeit in Anspruch nehmen, abhängig von der Anzahl der Datenpunkte im Daten-Explorer. Wenn die Download-Datei fertiggestellt ist, klicken Sie auf **Herunterladen**.