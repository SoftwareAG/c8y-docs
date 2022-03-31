---
aliases:
- /benutzerhandbuch/cockpit-de/#export
layout: redirect
title: Verwalten von Exporten
weight: 65
---

Mit der Export-Funktionalität können Sie spezifische Daten entweder in CSV- oder in Excel-Dateien exportieren.

Mit dieser Funktion können Sie Daten für den gesamten Mandanten anfragen. Außerdem können Sie Filter für bestimmte Geräte, Zeiträume oder Felder setzen. Die Exportdaten enthalten so lediglich Informationen über die gefilterten Daten und aktivierten Felder.

>**Info:** Es können maximal 1 Millionen Dokumente in eine einzelne Datei exportiert werden. Wenn die Anzahl der Dokumente für die gesetzten Filter diesen Wert überschreitet, werden nur die ersten 1 Million Dokumente exportiert.

Um alle Exporte anzuzeigen, klicken Sie auf **Exportieren** im Menü **Konfiguration** des Navigators.

Die Seite **Exportieren** listet alle Exporte mit Namen, Dateityp und Zeitintervall auf.

![Exports](/images/benutzerhandbuch/cockpit/cockpit-exports.png)

<a name="add-export"></a>
#### So fügen Sie einen Export hinzu

1. Klicken Sie auf **Export hinzufügen** in der oberen Menüleiste.<br>
	![Create export](/images/benutzerhandbuch/cockpit/cockpit-export-create.png)

2. Geben Sie einen Namen für den Bericht ein und wählen Sie das Dateiformat (CSV oder XLSX) für die Berichtausgabe.


**Filter**

Im Bereich **Filter** können Sie Filter setzen, um Daten für bestimmte Objekte oder Zeiträume anzufragen.

Um nach bestimmten Objekten zu filtern, geben Sie einen Objektnamen oder einen Attributwert in das Suchfeld ein und klicken Sie auf das Lupensymbol. Alle passenden Geräte oder Gruppen werden unter dem **Wert**-Feld angezeigt. Wählen Sie ein Objekt durch Klicken aus (grün hervorgehoben).

>**Info:** Wenn Sie eine Gruppe wählen, werden die Daten der direkten Kindgeräte einbezogen. Der Export enthält jedoch nicht die Daten der Geräte, die sich in Untergruppen befinden (indirekte Kinder).

Der Filter **Zeitintervall** filtert Daten nach einem bestimmten Zeitintervall. Wählen Sie ein Zeitintervall aus der Auswahlliste. Mögliche Intervalle sind "Letztes Jahr", "Letzter Monat" und "Letzte Woche", oder wählen Sie "Benutzerdefiniert" und geben Sie Von/Bis-Werte in die entsprechenden Felder ein, um ein individuelles Intervall zu definieren.

Aktivieren Sie die Checkboxen **Zu exportierendes Objekt** und **Zeitintervall**, um die entsprechenden Filter zu aktivieren.

**Felder**

Neben dem Filtern nach bestimmten Objekten oder Zeiträumen können Daten nach bestimmten Feldern gefiltert werden:

- Alarme
- Ereignisse
- Objekte
- Messwerte

Aktivieren bzw. deaktivieren Sie diese Felder mit dem Umschalter.

![Filter fields](/images/benutzerhandbuch/cockpit/cockpit-export-fields.png)

>**Info:** Der Zeitintervall-Filter gilt nur für Alarme, Ereignisse und Messwerte, nicht jedoch für Objekte. Wenn ausgewählt, erscheinen Objekte im Export, unabhängig von einem ggf. festgelegten Zeitintervall.

Wenn ein Feld aktiviert ist, können vordefinierte oder leere Attribute hinzugefügt werden.

##### So fügen Sie ein Attribut hinzu

Klicken Sie auf **Hinzufügen**, um ein leeres Feld hinzuzufügen. Klicken Sie auf **Spalte** oder **Pfad**, um eine Spalte und einen Pfad einzugeben. Wenn Sie beispielsweise das Feld **Alarme** aktivieren, können Sie etwa "Schweregrad" als Spalte und "severity" als Pfad eingeben, um Daten zu Alarm-Schweregraden zu erhalten.

Klicken Sie auf **Vordefiniertes Attribut hinzufügen**, um ein vordefiniertes Attribut hinzuzufügen. Markieren Sie die gewünschten Attribute in der angezeigten Liste und klicken Sie auf **Auswählen**. Verwenden Sie das Suchfeld, um die Liste nach bestimmten Eigenschaften zu filtern.

![Select properties](/images/benutzerhandbuch/cockpit/cockpit-export-properties.png)

Wenn Sie mindestens ein Feld haben, dass als eigenes Attribut definiert wurde und nicht aus der Liste der vordefinierten Attribute stammt, dann muss für ein Objekt mindestens dieses Attribut gesetzt sein, damit die entsprechenden Werte im Export erscheinen.

Beispiel:
Ein Export hat 4 definierte Felder: Zeitintervall, Gerätename, Typ und c8y&#95;SpeedMeasurement.speed.value. Die ersten 3 sind vordefinierte Attribute, während es sich bei dem letzten um ein benutzerdefiniertes Attribut handelt. Wenn ein zu exportierender Messwert kein Attribut `c8y_SpeedMeasurement.speed.value` hat, wird er nicht in der Exportdatei erscheinen.

Wenn Ihr Attribut ein "valid.key.with.dot" ist, dann verweisen Sie im Pfad darauf als ['fragment.key.with.dot'], z. B.: ['fragment.key.with.dot'].series.value

Wenn Sie Messwerte aktiviert haben, sehen Sie die zusätzliche Option **Datenpunkt auswählen**. Informationen zum Hinzufügen von Datenpunkten finden Sie unter [Daten-Explorer > Hinzufügen von Datenpunkten](#add-data-points).

Aus Datenpunkten hinzugefügte JsonPath-Ausdrücke werden in Klammerschreibweise gespeichert, um die Flexibilität in Fragment- und Serienbenennungen zu erhöhen (z. B. werden Leerzeichen unterstützt):

![Measurement added from data point](/images/benutzerhandbuch/cockpit/cockpit-export-adddatapoint-measurement.png)

<a name="schedule-export"></a>
#### So planen Sie einen Export

Um einen Export in eine CSV- oder XLSX-Datei für einen bestimmten Zeitpunkt zu planen, öffnen Sie den entsprechenden Export und klicken Sie auf **Zeitplan hinzufügen**.

![Export details](/images/benutzerhandbuch/cockpit/cockpit-export-add-schedule.png)

Geben Sie im nächsten Dialog die folgenden Informationen ein, um den geplanten Export per E-Mail zu erhalten.

![Schedule export](/images/benutzerhandbuch/cockpit/cockpit-export-new-schedule.png)

**1 - Häufigkeit**

Wählen Sie die Frequenz für das Senden des Exports aus der Auswahlliste, d. h. stündlich, täglich, wöchentlich, monatlich oder jährlich. Je nach ausgewählter Frequenz können Sie weitere Optionen für den Zeitpunkt angeben. Haben Sie etwa "Monat" gewählt, können Sie den Tag des Monats und die Uhrzeit festlegen.

>**Info:** Intervalle müssen in koordinierter Weltzeit (UTC) angegeben werden.

**2 - E-Mail senden:**

Vervollständigen Sie die E-Mail-Informationen.

Geben Sie im Feld **Senden an** die E-Mail-Adresse des Empfängers ein. Diese Eingabe ist obligatorisch. Optional können Sie E-Mail-Adressen für Kopieempfänger (CC) oder Blindkopieempfänger (BCC) angeben. Zur Eingabe mehrerer Empfänger verwenden Sie ein Komma als Trennzeichen.

Optional können Sie die E-Mail-Adresse des Absenders für Antworten hinzufügen.

Geben Sie den Betreff der E-Mail ein. Diese Feld ist vorausgefüllt, kann aber bearbeitet werden.

Geben Sie die eigentliche E-Mail-Nachricht ein. Verfügbare Platzhalter sind {host}, {binaryId}. Der Standardeintrag lautet "Die exportierte Datei kann unter {host}/inventory/binaries/{binaryId} heruntergeladen werden".
Beachten Sie, dass Sie zum Erstellen eines anklickbaren Links in der E-Mail "https://" zum Link hinzufügen müssen. Beispiel: "Eine Datei mit exportierten Daten kann unter https://{tenant-domain}/inventory/binaries/{binaryId} heruntergeladen werden."

>**Info:** Beachten Sie, dass die entsprechenden E-Mails mit dem Content-Typ "text/html" gesendet werden.


Klicken Sie auf **Erstellen**, um den neuen Exportplan zu erstellen.

Der Exportplan wird zu den Exportdetails hinzugefügt.

![Scheduled exports list](/images/benutzerhandbuch/cockpit/cockpit-export-schedule-list.png)

##### Migration geplanter Exports

In der Version 10.6.2 wurde ein neuer Report Agent implementiert, um geplante Berichte in [Apama Streaming Analytics](/apama/overview-analytics/) zuzulassen. Die Exportplan-Funktionalität auf Grundlage von Smart Rules wurde eingestellt.

Beim Öffnen eines Berichts werden alle auf Smart Rules basierenden geplanten Exports automatisch zu dem neuen Report Agent migriert und der Benutzer wird per Nachricht über den Vorgang informiert.

![Export schedule migration message2](/images/benutzerhandbuch/cockpit/cockpit-export-migrate2.png)

>**Wichtig**: Sie müssen jeden einzelnen Bericht manuell öffnen, um die im Bericht enthaltenen Exportpläne zu migrieren.

> **Info:** Damit die neue Exportplan-Funktion genutzt und die Migration durchgeführt werden kann, muss der Microservice "report-agent" abonniert sein. Neue Mandanten haben diesen automatisch abonniert. Bei vorhandenen Mandanten muss sichergestellt sein, dass sie den Microservice abonniert haben.

#### So exportieren Sie Daten

Um Daten in eine CSV- oder XLSX-Datei zu exportieren, aktivieren Sie die Checkbox vor dem entsprechenden Eintrag in der Liste und klicken Sie links in der oberen Menüleiste **Exportieren**.

Sie erhalten eine E-Mail mit einem Link zu jeder Export-Datei.

Standard-Zeitattribute (wie time oder creationTime in Alarmen) werden nach der Datums- und Uhrzeitformat-Darstellung gemäß [ISO-8601]( https://www.w3.org/TR/NOTE-datetime) in die XLSX- und CSV-Dateien exportiert.

Wenn das Limit für Exportdokumente erreicht ist und das Ergebnis durch seine Begrenzungen beschnitten wird, wird eine weitere Zeile mit einem Indikator am Ende des Dokuments hinzugefügt.

Beispiel für einen CSV-Export mit Indikator:

Time,Device name,Creation time,Device name,ID,Source,Text,Time,Type
2021-11-25T10:37:06.485Z,Position #1,2021-11-25T10:37:06.485Z,Position #1,1266,1195,Location updated,2021-11-25T10:37:06.485Z,c8y_LocationUpdate
2021-11-25T10:37:01.484Z,Position #1,2021-11-25T10:37:01.484Z,Position #1,1265,1195,Location updated,2021-11-25T10:37:01.484Z,c8y_LocationUpdate
[...]
limit exceeded!,result truncated!,limit exceeded!,result truncated!,limit exceeded!,result truncated!,limit exceeded!,result truncated!,limit exceeded!

#### So bearbeiten Sie einen Export

Klicken Sie einfach auf die jeweilige Zeile oder auf das Menüsymbol am Ende der Zeile und anschließend auf **Bearbeiten**.

Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie einen Export hinzu](#add-export).


#### So duplizieren Sie einen Export

1. Klicken Sie auf das Menüsymbol am Ende der Zeile und anschließend auf **Duplizieren**.
2. Ändern Sie zumindest den Namen.
3. Klicken Sie auf **Speichern & schließen**, um den Export zu speichern und zur Exportliste zurückzukehren.

#### So löschen Sie einen Export

Klicken Sie auf das Menüsymbol am Ende der Zeile und anschließend auf **Löschen**.