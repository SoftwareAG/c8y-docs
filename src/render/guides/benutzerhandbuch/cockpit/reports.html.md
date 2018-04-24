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

>**Info:** The maximum number of documents that can be exported into a single file is 1 million. If the number of documents for defined filters exceeds this limit, only first 1 million documents will be taken.

To work with Dashboard-Berichte please refer to [Working with dashboard reports](#reports).

To show all reports, click "Reporting" in the "Reports" menu.

In the "Reporting" page you will find a list displaying all reports with their names and time range.

#### Adding reports

To create a report, click **Add Report** in the top menu bar.

Enter a name for the report and select the file type (CSV or xlsx). 

**Filters**

In the "Filter" section, you can select filters to request object- or time-specific reports.

<img src="/guides/images/users-guide/Cockpit/Cockpit_ReportFilters.png" name="Report filters" style="width:100%;"/>

To filter for a particular object, enter a name or property value into the search field and click the search icon. All matching devices or groups will be displayed below the "Value" field. Click a device to select it (highlighted in green). 

The "Time range" filter can filter object reports for a specific time range. Select a time range from the dropdown field. This may be one of "Last year", "Last month", "Last week" or select "Custom" and enter a custom from/to range in the additional fields.

Select the checkbox in front of the filter name to enable the filter.

**Fields**

Apart from object- and time-specific filtering you may filter reports for specific fields:

- Alarms
- Events
- Managed objects
- Measurements

Use the slider to enable/disable a field.

<img src="/guides/images/users-guide/Cockpit/Cockpit_ReportFields.png" name="Report fields" style="width:100%;"/>

When a field is enabled, predefined or empty properties can be added. 

Click **Add** to add empty properties. To enter a label or path, click "Column" or "Path" and edit the field. For example, if you enable the "Alarms" field you could enter "Severity" in column and path to receive reports only for alarm severities.

Click **Add predefined**, to add predefined properties. Simply select the desired properties from the list and click **Select**. Use the search field at the top to search for a specific property.

<img src="/guides/images/users-guide/Cockpit/Cockpit_ReportsSelectProperties.png" name="Select properties" style="width:75%;"/>

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


#### Exporting reports

To export a report to a CSV or xlsx file, select the checkbox in front of the report in the list and at the left of the top menu bar click **Export**.

You will receive an e-mail containing links to each export file.

Standard time properties of documents (like time or creationTime in alarms) are exported to

* xlsx file in the format: 03/13/2016 00:00:24
* CSV file in the format: 2016-03-13T00:01:24.000Z

Only CSV time contains milliseconds and timezone.

#### Editing reports

To edit a report, just click the respective row or click the menu icon at the end of the row and from the context menu select **Edit**.

#### Duplicating reports

To duplicate a report, click the menu icon at the end of the row and from the context menu select **Clone**. Modify at least the name and click **Save & close** to save the report and return to the report list.

#### Removing reports

To remove a report, click the menu icon at the end of the row and from the context menu select **Remove**.
Es gibt zwei Arten von Berichten in der Cockpit-Anwendung. Dashboard-Berichte ermöglichen es Ihnen, Anwendungen, Alarme, Assets, Ereignisse und viele andere Widgets zu verfolgen. Die zweite Art von Bericht ist der [Datenexport](#reporting) in csv- oder xlsx-Dateien.



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

