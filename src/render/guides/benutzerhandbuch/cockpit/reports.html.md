---
order: 60
title: Verwalten von Berichten
layout: redirect
---

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

