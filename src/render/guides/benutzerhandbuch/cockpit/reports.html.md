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

If you have at least one field that is not originating from the "Add predefined" list but defined as a custom property, then you need to set up at least one property for the custom values to appear in the export. 

Example:
A report has 4 fields defined: time range, device name, type and c8y_SpeedMeasurement.speed.value. The first 3 are predefined properties, while the last one is a custom property. If any measurement for export does not have a custom property c8y_SpeedMeasurement.speed.value, then it will not appear in the export file.

If your field is a valid.key.with.dot then refer to it as ['fragment.key.with.dot'] in the path, e.g.: ['fragment.key.with.dot'].series.value

In case of "Measurements" enabled, you can also choose **Add from data point**. For details on how to add data points see [Adding data points](#add-data-points).

#### <a name="schedule-export"></a>Scheduling exports

To schedule the export to a CSV or Excel file to any point in time, click the menu icon at the end of the row and from the context menu select **Schedule export**. In the upcoming window you can customize the Smart Rule "On timer send export via email" according to your needs.

<img src="/guides/images/users-guide/export_schedule_frequency.png" name="Exporting" style="width:75%;"/>

**1 - Rule name**

The rule name is pre-filled, providing the name of the report, but may be modified.

**2 - Report & frequency**

 Define the frequency for sending the report, i.e. every hour, day, week, month or year. Depending on the frequency selected, provide additional timing information. For example, if you have selected "every month", provide the day of month, hour and minute.

**3 - Send email:**

Complete the email information. 

In the "Send to" field, provide the email address of the receiver. This field is mandatory. Optionally, you can provide email addresses for sending CC or BCC and add the email address of the sender for reply.

Specify the subject of the email. This field is pre-filled, but may be modified.

Enter the actual email message. Available placeholders are {host}, {binaryId}. The default value is "File with exported data can be downloaded from {host}/inventory/binaries/{binaryId}". 

Click **Create** to create the customized Smart Rule "On timer send export via email".

The Smart Rule will be added to the report details.

<img src="/guides/images/users-guide/Cockpit/Cockpit_ReportSmartRule.png" name="Smart rule" style="width:100%;"/>


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





