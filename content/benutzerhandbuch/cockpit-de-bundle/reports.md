---
weight: 60
title: Verwalten von Berichten und Exporten
layout: redirect
---
 
### <a name="reports"></a>Verwalten von Berichten

Dashboard-Berichte ermöglichen das Nachverfolgen von Anwendungen, Alarmen, Assets, Ereignissen und anderen Widgets. 

Bei Dashboard-Berichten handelt es sich um globale Dashboard-Seiten, unabhängig von der Asset-Hierarchie. 

Erweitern Sie das Menü **Berichte** im Navigator, um alle verfügbaren Berichte anzuzeigen.

![Reports menu](/guides/images/benutzerhandbuch/cockpit/cockpit-reports-navigator.png)

Klicken Sie im Navigator auf einen Bericht, um ihn zu öffnen.

#### So erstellen Sie einen Bericht

1. Klicken Sie auf die **Plus**-Schaltfläche in der oberen Leiste und anschließend auf **Neuer Bericht**.
2. Geben Sie einen Namen für den Bericht ein und wählen Sie optional ein Symbol aus der Auswahlliste. 
3. Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.

Als nächstes können Sie Widgets zu Ihrem Bericht hinzufügen.

#### So fügen Sie Widgets zu Berichten hinzu

Sie können Widgets auf die gleiche Weise zu einem Bericht hinzufügen wie zu einem Dashboard.

1. Öffnen Sie den zu bearbeitenden Bericht im Navigator. 
2. Klicken Sie **Widget hinzufügen** in der oberen Menüleiste und wählen Sie einen Widget-Typen aus der Liste. 

Nähere Informationen über alle verfügbaren Typen finden Sie unter [Widgets-Sammlung](#widgets).

#### So löschen Sie einen Bericht

1. Öffnen Sie den zu löschenden Bericht.
2. Klicken Sie **Mehr...** rechts in der oberen Leiste und dann **Bericht löschen**.


### <a name="export"></a>Exportieren von Daten

Mit der Export-Funktionalität können Sie spezifische Daten entweder in CSV- oder in Excel-Dateien exportieren.

Mit dieser Funktion können Sie Daten für den gesamten Mandanten anfragen. Außerdem können Sie Filter für bestimmte Geräte, Zeiträume oder Felder setzen. Die Exportdaten enthalten so lediglich Informationen über die gefilterten Daten und aktivierten Felder. 

>**Info:** Es können maximal 1 Millionen Dokumente in eine einzelne Datei exportiert werden. Wenn die Anzahl der Dokumente für die gesetzten Filter diesen Wert überschreitet, werden nur die ersten 1 Millionen Dokumente verwendet.

Um alle Exporte anzuzeigen, klicken Sie **Exportieren** im Menü **Berichte**.

Die Seite **Exportieren** listet alle Exporte mit Namen und Zeitintervall auf.

![Exports](/guides/images/benutzerhandbuch/cockpit/cockpit-exports.png)


#### <a name="add-export"></a>So fügen Sie einen Export hinzu

1. Klicken Sie **Export hinzufügen** in der oberen Menüleiste.

	![Create export](/guides/images/benutzerhandbuch/cockpit/cockpit-export-create.png)
2. Geben Sie einen Namen für den Bericht ein und wählen Sie das Dateiformat (CSV oder XLSX) für die Berichtausgabe. 


**Filter**

Im Bereich **Filter** können Sie Filter setzen, um Daten für bestimmte Objekte oder Zeiträume anzufragen.

Um nach bestimmten Objekten zu filtern, geben Sie einen Objektnamen oder einen Attributwert in das Suchfeld ein und klicken Sie auf das Lupensymbol. Alle passenden Geräte oder Gruppen werden unter dem **Wert**-Feld angezeigt. Wählen Sie ein Gerät durch Klicken aus (grün hervorgehoben). 

Der Filter **Zeitintervall** filtert Daten nach einem bestimmten Zeitintervall. Wählen Sie ein Zeitintervall aus der Auswahlliste. Mögliche Intervalle sind "Letztes Jahr", "Letzter Monat", "Letzte Woche" oder wählen Sie "Benutzerdefiniert" und geben Sie Von/Bis-Werte in die entsprechenden Felder ein, um ein individuelles Intervall zu definieren.

Aktivieren Sie die Checkboxen **Zu exportierendes Objekt** und **Zeitintervall**, um die entsprechenden Filter zu aktivieren.

**Felder**

Neben dem Filtern nach bestimmten Objekten oder Zeiträumen können Daten nach bestimmten Feldern gefiltert werden:

- Alarme
- Ereignisse
- Objekte
- Messwerte

Aktivieren bzw. deaktivieren Sie diese Felder mit dem Umschalter.

![Filter fields](/guides/images/benutzerhandbuch/cockpit/cockpit-export-fields.png)

> **Info**: Der Zeitintervall-Filter gilt nur für Alarme, Ereignisse und Messwerte, nicht jedoch für Objekte. Wenn ausgewählt, erscheinen Objekte im Export, unabhängig von einem ggf. festgelegten Zeitintervall. 

Wenn ein Feld aktiviert ist, können vordefinierte oder leere Attribute hinzugefügt werden.

##### So fügen Sie ein Attribut hinzu 

Klicken Sie **Hinzufügen**, um ein leeres Feld hinzuzufügen. Klicken Sie **Spalte** oder **Pfad**, um eine Spalte und einen Pfad einzugeben. Wenn Sie beispielsweise das Feld **Alarme** aktivieren, können Sie etwa "Schweregrad" als Spalte und "severity" als Pfad eingeben, um Daten zu Alarm-Schweregraden zu erhalten.

Klicken Sie **Vordefiniertes Attribut hinzufügen**, um ein vordefiniertes Attribut hinzuzufügen. Markieren Sie die gewünschten Attribute in der angezeigten Liste und klicken Sie **Auswählen**. Verwenden Sie das Suchfeld, um die Liste nach bestimmten Eigenschaften zu filtern.

![Select properties](/guides/images/benutzerhandbuch/cockpit/cockpit-export-properties.png)

Wenn Sie mindestens ein Feld haben, dass als eigenes Attribut definiert wurde und nicht aus der Liste der vordefinierten Attribute stammt, dann muss für ein Objekt mindestens dieses Attribut gesetzt sein, damit die entsprechenden Werte im Export erscheinen. 

Beispiel:
Ein Export hat 4 definierte Felder: Zeitintervall, Gerätename, Typ und c8y&#95;SpeedMeasurement.speed.value. Die ersten 3 sind vordefinierte Attribute, während es sich bei dem letzten um ein benutzerdefiniertes Attribut handelt. Wenn ein zu exportierender Messwert kein Attribut "c8y_SpeedMeasurement.speed.value" hat, wird er nicht im Bericht erscheinen.

Wenn Ihr Attribut ein "valid.key.with.dot" ist, dann verweisen Sie im Pfad darauf als ['fragment.key.with.dot'], z. B.: ['fragment.key.with.dot'].series.value

Wenn Sie Messwerte aktiviert haben, sehen Sie die zusätzliche Option **Datenpunkt auswählen**. Informationen zum Hinzufügen von Datenpunkten finden Sie unter Daten-Explorer >[Hinzufügen von Datenpunkten](#add-data-points). 
 
#### <a name="schedule-export"></a>So planen Sie einen Export

Um einen Export in eine CSV- oder XLSX-Datei für einen bestimmten Zeitpunkt zu planen, klicken Sie auf das Menüsymbol am Ende der Zeile und anschließend auf **Export planen**. 

![Export context menu](/guides/images/benutzerhandbuch/cockpit/cockpit-export-menu.png)

Im darauf folgenden Dialog können Sie die Smart Rule "Bei Timer-Ablauf Export per E-Mail senden" entsprechend einrichten.

![Schedule export](/guides/images/benutzerhandbuch/cockpit/cockpit-export-on-timer-rule.png)

**1 - Name der Regel**

Der Name der Regel ist mit dem Namen des Exports vorausgefüllt, kann aber geändert werden.

**2 - Daten & Häufigkeit**

Bestimmen Sie die Frequenz für das Senden des Exports, z. B. stündlich, täglich, wöchentlich oder monatlich. Je nach ausgewählter Frequenz können Sie weitere Optionen für den Zeitpunkt angeben. Haben Sie etwa "Monat" gewählt, können Sie den Tag des Monats und die Uhrzeit festlegen.

**3 - E-Mail senden:**

Vervollständigen Sie die E-Mail-Informationen. 

Geben Sie im Feld **Senden an** die E-Mail-Adresse des Empfängers ein. Diese Eingabe ist obligatorisch. Optional können Sie unter "CC" und "BCC" weitere E-Mail-Adressen eingeben oder die E-Mail-Adresse des Senders für eine mögliche Antwort eingeben.

Geben Sie den Betreff der E-Mail ein. Diese Feld ist vorausgefüllt, kann aber bearbeitet werden.

Geben Sie die eigentliche E-Mail-Nachricht ein. Verfügbare Platzhalter sind {host}, {binaryId}. Der Standardeintrag lautet "Die exportierte Datei kann unter {host}/inventory/binaries/{binaryId} heruntergeladen werden". 

Klicken Sie **Erstellen**, um die benutzerdefinierte Smart Rule "Bei Timer-Ablauf Export per E-Mail senden" zu erstellen.

Die Smart Rule wird zu den Exportdetails hinzugefügt.

![Smart Rule](/guides/images/benutzerhandbuch/cockpit/cockpit-export-schedule.png)


#### So exportieren Sie Daten

Um Daten in eine CSV-oder XLSX-Datei zu exportieren, aktivieren Sie die Checkbox vor dem entsprechenden Eintrag in der Liste und klicken Sie links in der oberen Menüleiste **Exportieren**.

Sie erhalten eine E-Mail mit einem Link zu jeder Export-Datei.

Standard-Zeitattribute von Dokumenten (wie "time" oder "creationTime" in Alarmen) werden in folgende Formate exportiert:

* Excel-Datei: 03/13/2016 00:00:24
* CSV-Datei: 2016-03-13T00:01:24.000Z

Nur im CSV-Format sind Millisekunden und Zeitzonen enthalten.

#### So bearbeiten Sie einen Export

Klicken Sie einfach auf die jeweilige Zeile oder auf das Menüsymbol am Ende der Zeile und anschließend auf **Bearbeiten**.

Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie einen Export hinzu](#add-export).


#### So duplizieren Sie einen Export

1. Klicken Sie auf das Menüsymbol am Ende der Zeile und anschließend auf **Duplizieren**. 
2. Ändern Sie zumindest den Namen.
3. Klicken Sie **Speichern & schließen**, um den Export zu speichern und zur Exportliste zurückzukehren.

#### So löschen Sie einen Export

Klicken Sie auf das Menüsymbol am Ende der Zeile und anschließend auf **Löschen**.
