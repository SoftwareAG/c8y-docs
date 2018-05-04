---
order: 60
title: Verwalten von Berichten
layout: redirect
---

---
order: 60
title: Managing reports
layout: redirect
---

In der Cockpit-Anwendung gibt es zwei Arten von Berichten. 

* [Dashboard-Berichte](#reports) ermöglichen das Nachverfolgen von Anwendungen, Alarmen, Assets, Ereignissen und anderen Widgets. 
* Der zweite Typ ermöglicht es, bestimmte Daten in eine Datei zu exportieren, siehe [Exportieren von Daten mit Berichten](#reporting).


### <a name="reports"></a>Arbeiten mit Dashboard-Berichten

Bei Dashboard-Berichten handelt es sich um globale Dashboard-Seiten, unabhängig von der Asset-Hierarchie. 

Erweitern Sie das Menü "Berichte" im Navigator, um alle verfügbaren Berichte anzuzeigen. 

Wählen Sie einen Bericht im Navigator aus, um diesen Bericht anzuzeigen.

#### Erstellen von Berichten

Klicken Sie die **Plus**-Schaltfläche in der oberen Leiste und wählen Sie  **Neuer Bericht** im Menü.

![Neuer Bericht](/guides/images/benutzerhandbuch/cockpit-report-create.png)

Geben Sie einen Namen für den Bericht ein und wählen Sie optional ein Symbol aus der Auswahlliste. Klicken Sie **Speichern**, um Ihre Eingaben zu speichern.

Als nächstes können Sie Widgets zu Ihrem Bericht hinzufügen.

#### Hinzufügen von Widgets

Sie können Widgets auf die gleiche Weise zu einem Bericht hinzufügen wie zu einem Dashboard. 

Klicken Sie **Widget hinzufügen** in der oberen Menüleiste und wählen Sie einen Widget-Typen aus der Liste. Nähere Informationen über alle verfügbaren Typen finden Sie unter [Widgets-Sammlung](#widgets).

#### Löschen von Berichten

Um einen Bericht zu löschen, öffnen Sie den entsprechenden Bericht, klicken Sie **Mehr...** rechts oben in der Menüleiste und klicken Sie **Bericht löschen** im Kontextmenü.


### <a name="reporting"></a>Exportieren von Daten mit Berichten

Mit dieser Berichtsfunktion können Sie Berichte für den gesamten Mandanten im CSV- oder Excel-Format anfragen. Außerdem können Sie Filter für bestimmte Geräte, Zeiträume oder Felder setzen. Die Berichte enthalten so lediglich Informationen über die gefilterten Daten und aktivierte Felder. 

>**Info:** Es können maximal 1 Millionen Dokumente in eine einzelne Datei exportiert werden. Wenn die Anzahl der Dokumente für die gesetzten Filter diesen Wert überschreitet, werden nur die ersten 1 Millionen Dokumente verwendet. 

Informationen zu Dashboard-Berichten finden Sie unter [Arbeiten mit Dashboard-Berichten](#reports).

Klicken Sie "Berichtskonfigurationen" im Menü "Berichte", um alle Berichte anzuzeigen.

Die Seite "Berichtskonfigurationen" listet alle Berichte mit Namen und Zeitintervall auf.


#### Hinzufügen von Berichten

Klicken Sie **Bericht hinzufügen** in der oberen Menüleiste, um einen neuen Bericht hinzuzufügen.

Geben Sie einen Namen für den Bericht an und wählen Sie das Dateiformat (CSV oder xlsx). 

**Filter**

Im Bereich "Filter" können Sie Filter setzen, um Berichte für bestimmte Objekte oder Zeiträume anzufragen.

<img src="/guides/images/benutzerhandbuch/cockpit-reporting-create.png" name="Filter für Berichte" style="width:100%;"/>

Um nach bestimmten Objekten zu filtern, geben Sie einen Objektnamen oder einen Attributwert in das Suchfeld ein und klicken Sie auf das Lupensymbol. Es werden alle passenden Geräte oder Gruppen unter dem "Wert"-Feld angezeigt. Wählen Sie ein Gerät durch Klicken aus (grün hervorgehoben). 

Der Filter "Zeitintervall" filtert Objekte nach einem bestimmten Zeitintervall.  Wählen Sie ein Zeitintervall aus der Auswahlliste. Mögliche Intervalle sind "Letztes Jahr", "Letzter Monat", "Letzte Woche" oder wählen Sie "Benutzerdefiniert" und geben Sie Von/Bis-Werte in die entsprechenden Felder ein, um ein individuelles Intervall zu definieren.

Aktivieren Sie das Kontrollkästchen vor dem Filter, um diesen zu aktivieren.

**Felder**

Neben dem Filtern nach bestimmten Objekten oder Zeiträumen können Berichte nach bestimmten Feldern gefiltert werden:

- Alarme
- Ereignisse
- Objekte
- Messwerte

Aktivieren bzw. deaktivieren Sie diese Felder mit dem Regler.

Wenn ein Feld aktiviert ist, können vordefinierte oder leere Attribute hinzugefügt werden.

<img src="/guides/images/benutzerhandbuch/cockpit-report-fields.png" name="Report fields" style="width:100%;"/>

Klicken Sie **Hinzufügen**, um ein leeres Feld hinzuzufügen. Klicken Sie "Spalte" oder "Pfad", um eine Spalte und einen Pfad einzugeben. Wenn Sie beispielsweise das "Alarm"-Feld aktivieren, können Sie etwa "Schweregrad" als Spalte und "severity" als Pfad eingeben, um nur Berichte zu Alarm-Schweregraden zu erhalten.

Klicken Sie **Vordefiniertes Attribut hinzufügen**, um ein vordefiniertes Attribut hinzuzufügen. Markieren Sie die gewünschten Attribute in der angezeigten Liste und klicken Sie **Auswählen**. Verwenden Sie das Suchfeld, um die Liste nach bestimmten Eigenschaften zu filtern.

<img src="/guides/images/benutzerhandbuch/cockpit-reports-properties.png" name="Select properties" style="width:75%;"/>

Wenn Sie mindestens ein Feld haben, dass als eigenes Attribut definiert wurde und nicht aus der Liste der vordefinierten Attribute stammt, dann muss für ein Objekt mindestens dieses Attribut gesetzt sein, damit die entsprechenden Werte im Export erscheinen. 

Beispiel:
Ein Bericht hat 4 definierte Felder: Zeitintervall, Gerätename, Typ und "c8y_SpeedMeasurement.speed.value". Die ersten 3 sind vordefinierte Attribute, während es sich bei dem letzten um ein benutzerdefiniertes Attribut handelt. Wenn ein zu exportierender Messwert kein Attribut "c8y_SpeedMeasurement.speed.value" hat, wird er nicht im Bericht erscheinen.

Wenn Ihr Attribut ein "valid.key.with.dot" ist, dann verweisen Sie im Pfad darauf als ['fragment.key.with.dot'], z. B.: ['fragment.key.with.dot'].series.value

Wenn Sie "Messwerte" aktiviert haben, sehen Sie die zusätzliche Option **Datenpunkt auswählen**. Nähere Informationen zum Hinzufügen von Datenpunkten finden Sie in [Hinzufügen von Datenpunkten](#add-data-points).

#### <a name="schedule-export"></a>Terminieren von Exports

Um einen Export in eine Datei für einen bestimmten Zeitpunkt zu planen, öffnen Sie das Kontextmenü für den entsprechenden Bericht und klicken Sie **Export planen**. Im folgenden Fenster können Sie die Smart Rule "On timer send export via email" entsprechend einrichten.

<img src="/guides/images/benutzerhandbuch/cockpit-report-schedule-export.png" name="Exporting" style="width:75%;"/>

**1 - Name der Regel**

Der Name der Regel ist mit dem Namen des Berichts vorausgefüllt, kann aber geändert werden.

**2 - Bericht & Häufigkeit**

Bestimmen Sie die Frequenz für das Senden des Berichts, z. B. stündlich, täglich, wöchentlich der monatlich. Je nach ausgewählter Frequenz können Sie weitere Optionen für den Zeitpunkt angeben. Haben Sie etwa "Monat" gewählt, können Sie den Tag des Monats und die Uhrzeit festlegen.

**3 - E-Mail senden:**

Vervollständigen Sie die E-Mail-Informationen. 

Geben Sie im Feld "Senden an" die E-Mail-Adresse des Empfängers ein. Diese Angabe ist obligatorisch. Optional können Sie unter "CC" und "BCC" weitere E-Mail-Adressen eingeben oder die E-Mail-Adresse des Senders für eine mögliche Antwort eingeben.

Geben Sie den Betreff der E-Mail ein. Diese Feld ist vorausgefüllt, kann aber bearbeitet werden.

Geben Sie die eigentliche E-Mail-Nachricht ein. Verfügbare Platzhalter sind {host}, {binaryId}. Der Standardeintrag lautet "Die exportierte Datei kann unter {host}/inventory/binaries/{binaryId} heruntergeladen werden". 

Klicken Sie **Erstellen**, um die benutzerdefinierte Smart Rule "Bei Timer-Ablauf Export per E-Mail senden".

Die Smart Rule wird zu den Berichtsdetails hinzugefügt.

<img src="/guides/images/benutzerhandbuch/cockpit-report-smartrule.png" name="Smart rule" style="width:75;"/>


#### Exportieren von Berichten

Um einen Bericht in eine CSV-oder Excel-Datei zu exportieren, aktivieren Sie das Kontrollkästchen vor dem Bericht in der Liste und klicken Sie links in der oberen Menüleiste **Exportieren**.  

Sie erhalten eine E-Mail mit einem Link zu jeder Export-Datei. 

Standard-Zeitattribute von Dokumenten (wie "time" oder "creationTime" in Alarmen) werden in folgende Formate exportiert:

* Excel-Datei: 03/13/2016 00:00:24
* CSV-Datei: 2016-03-13T00:01:24.000Z

Nur im CSV-Format sind Millisekunden und Zeitzonen enthalten.

#### Bearbeiten von Berichten

Um einen Bericht zu bearbeiten, klicken Sie auf die entsprechende Zeile in der Liste oder öffnen Sie das Kontextmenü für den Bericht über das Menüsymbol und klicken Sie **Bearbeiten**.

#### Duplizieren von Berichten

Um einen Bericht zu duplizieren, öffnen Sie das Kontextmenü für den Bericht über das Menüsymbol und klicken Sie **Duplizieren**. Ändern Sie zumindest den Namen und klicken Sie **Speichern & schließen**, um den neuen Bericht zu speichern und zur Berichtliste zurückzukehren.

#### Löschen von Berichten

Um einen Bericht zu löschen, öffnen Sie das Kontextmenü für den Bericht über das Menüsymbol und klicken Sie **Löschen**.