---
title: Verwalten von Daten
weight: 60
---

<a name="retention-rules"></a>
### Datenhaltungsregeln

Mit Datenhaltungsregeln können Sie steuern, wie lange Daten in Ihrem Konto gespeichert bleiben. Standardmäßig werden alle historischen Daten nach 60 Tagen gelöscht (konfigurierbar in den Systemeinstellungen).

Vielleicht möchten Sie jedoch Messwerte 90 Tage speichern, Alarme aber bereits nach 10 Tagen löschen.

Datenhaltungsregeln werden üblicherweise während der Nacht ausgeführt. Wenn Sie eine Datenhaltungsregel bearbeiten, sehen Sie daher keine unmittelbare Auswirkung in der **Nutzung**, die auf der **Startseite** der Anwendung angezeigt wird.

Klicken Sie auf **Datenhaltungsregeln** im Menü **Verwaltung**, um eine Liste aller Datenhaltungsregeln in Ihrem Konto anzuzeigen.

<img src="/images/benutzerhandbuch/Administration/admin-retention-rules.png" alt="Retention rules">

Für jede Regel wird der Name, Details zu den Daten, die gelöscht werden sollen (Fragmenttyp, Typ und Quelle, siehe unten) und die maximale Anzahl an Tagen angezeigt.

Das Sternsymbol ("*") zeigt an, dass alle Daten, unabhängig vom jeweiligen Wert, entfernt werden.


<a name="add-retention-rule"></a>
#### So fügen Sie eine Datenhaltungsregel hinzu

1. Klicken Sie auf **Regel hinzufügen** in der oberen Menüleiste.
2. Wählen Sie im darauf folgenden Dialog den Datentyp aus, den Sie löschen möchten (Alarm, Messung, Ereignis, Operation, Audit oder Alle).
3. Geben Sie einen Fragmenttypen ein, wenn Sie die zu löschenden Daten genauer spezifizieren möchten. Geben Sie im Feld **Typ** ein "type"-Attribut als Filter ein. Um beispielsweise alle Alarme im Zusammenhang mit Verbindungsabbrüchen zu löschen, wählen Sie als Datentyp "Alarm" und geben Sie "c8y_UnavailabilityAlarm" als Attribut ein.
4. Wenn Sie nur die Daten für ein bestimmtes Gerät löschen möchten, geben Sie die entsprechende Geräte-ID in das Feld **Quelle** ein.
5. Geben Sie das **maximale Alter** in Tagen an (maximal zulässiger Wert ist 10 Jahre in Tagen).
6. Klicken Sie auf **Speichern**, um Ihre Einstellungen zu speichern.

Die Datenhaltungsregel wird zu den Berichtsdetails hinzugefügt.

>**Info:** Standardmäßig ist in allen Feldern außer im Feld **Maximales Alter** ein Sternsymbol ("*") gesetzt, um alle Werte einzuschließen.

>**Info:** Alarme werden nur entfernt, wenn sie den Status AUFGEHOBEN aufweisen.

#### So bearbeiten Sie eine Datenhaltungsregel

Klicken Sie einfach auf die Zeile der zu löschenden Regel.

Weitere Informationen zu den Feldern finden Sie unter [So fügen Sie eine Datenhaltungsregel hinzu](#add-retention-rule).


#### So löschen Sie eine Datenhaltungsregel

Bewegen Sie die Maus über die Regel, die Sie löschen möchten, und klicken Sie rechts auf das Löschen-Symbol.

<img src="/images/benutzerhandbuch/Administration/admin-retention-rules-delete.png" alt="Delete retention rule">

>**Info:** Alle Datenhaltungsregeln werden sequenziell und unabhängig voneinander ausgeführt. Wenn es zwei Datenhaltungsregeln gibt, von denen eine spezifischere mit einem höheren maximalen Alter eine Untermenge von den Dokumenten definiert, die durch eine allgemeinere Regel mit einem niedrigeren maximalen Alter definiert werden, wird alles so abgearbeitet, als gäbe es nur eine einzige, allgemeinere Regel.
>
>Betrachtet man beispielsweise die beiden folgenden Regeln:
>   
><img src="/images/benutzerhandbuch/Administration/admin-retention-rules-commspec1.png" alt="Retention rules"/>
>
>Alle Messwerte vom Typ `c8y_Temperature`, die älter als 30 Tage sind, werden entfernt, einschließlich der Messwerte, bei denen die Quelle `12345` entspricht.
>             
>Wenn jedoch die folgenden Datenhaltungsregeln definiert wurden:
>
><img src="/images/benutzerhandbuch/Administration/admin-retention-rules-commspec2.png" alt="Retention rules"/>
>
>Der Datenhaltungsprozess entfernt alle Messwerte vom Typ `c8y_Temperature`, die älter als 30 Tage sind. Alle anderen Messwerte werden erst entfernt, wenn sie älter als 60 Tage sind.

>**Info:** Der Quellparameter ist die ID des Geräts. Wenn dieser definiert ist, entfernt der Datenhaltungsprozess nur die Dokumente, die direkt mit dem durch die Quelle dargestellten Gerät verbunden sind, nicht jedoch die der Kinder oder zugehörigen Gruppen.

<a name="files"></a>
### Verwalten von Daten in der Dateiablage

Die Dateiablage bietet einen Überblick über die Dateien, die in Ihrem Konto gespeichert sind.

Klicken Sie auf **Dateiablage** im Menü **Verwaltung**, um eine Liste aller Dateien anzuzeigen.

Die angezeigten Dateien können aus verschiedenen Quellen stammen. Es kann sich um Software Images, Konfigurationssnapshots von Geräten, Logdateien von Geräten oder um Webanwendungen, die auf der Seite **Alle Anwendungen** hochgeladen wurden, handeln.

Für jede Datei werden der Name, der Eigentümer, der Dateityp (z. B. image/bmp, text/csv), die Dateigröße und das Datum der letzten Aktualisierung angezeigt.

<img src="/images/benutzerhandbuch/Administration/admin-files-repository.png" alt="Files Repository" style="max-width: 100%">

#### So laden Sie eine Datei von Ihrem Computer hoch

Klicken Sie auf **Datei hochladen** in der oberen Menüleiste.

<img src="/images/benutzerhandbuch/Administration/admin-files-repository-upload.png" alt="Files Repository download modal" style="max-width: 100%">

Wählen Sie im darauf folgenden Dialog eine Datei zum Hochladen aus. Wenn Sie mehrere Dateien hochladen möchten, klicken Sie auf **Datei hinzufügen**, um eine weitere Datei auszuwählen. Sie können eine Datei vor dem Hochladen auch löschen, indem Sie rechts neben dem Dateifeld auf das Löschen-Symbol klicken.


#### So laden Sie eine Datei von Ihrem Konto herunter

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Herunterladen**.


#### So löschen Sie eine Datei aus Ihrem Konto

Klicken Sie auf das Menüsymbol rechts neben der jeweiligen Zeile und anschließend auf **Löschen**.

>**Info:** Wenn die Datei einer aktiven Anwendung entspricht, kann sie nicht gelöscht werden. Sie müssen die Anwendung erst entfernen oder ein Update ausführen, um die Datei löschen zu können.