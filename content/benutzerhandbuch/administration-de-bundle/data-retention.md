---
weight: 60
title: Verwalten der Datenhaltung
layout: redirect
---

### <a name="retention-rules"></a>Datenhaltungsregeln

Mit Datenhaltungsregeln können Sie steuern, wie lange Daten in Ihrem Konto gespeichert bleiben. Vielleicht möchten Sie Messwerte 90 Tage speichern, Alarme aber bereits nach 10 Tagen löschen. Standardmäßig werden alle historischen Daten nach 60 Tage gelöscht (konfigurierbar in den Systemeinstellungen).

Datenhaltungsregeln werden üblicherweise während der Nacht ausgeführt. Wenn Sie eine Datenhaltungsregel bearbeiten, sehen Sie daher keine unmittelbare Auswirkung in der Kapazitätsnutzung, die auf der Startseite der Anwendung angezeigt wird.

Klicken Sie **Datenhaltungsregeln** im Menü **Verwaltung**, um eine Liste aller Datenhaltungsregeln in Ihrem Konto anzuzeigen.

<img src="/images/benutzerhandbuch/admin-retention-rules.png" alt="Datenhaltungsregeln" style="max-width: 100%">

Für jede Regel wird der Name, Details zu den Daten, die gelöscht werden sollen (Fragmenttyp, Typ und Quelle, siehe unten) und die maximale Anzahl an Tagen angezeigt.

Das Sternsymbol ("*") zeigt an, dass alle Daten, unabhängig vom jeweiligen Wert, entfernt werden.

**Hinzufügen von Datenhaltungsregeln**

Um eine Datenhaltungsregel hinzuzufügen, klicken Sie **Regel hinzufügen** in der oberen Menüleiste.

<img src="/images/benutzerhandbuch/admin-retention-rule-add.png" alt="Datenhaltungsregel hinzufügen" style="max-width: 50%">

> **Info:** Standardmäßig ist in allen Feldern außer im Feld **Maximales Alter** ein Sternsymbol ("*") gesetzt, um alle Werte einzuschließen.

1.  Wählen Sie den Datentypen aus, den Sie löschen möchten (Alarm, Messung, Ereignis, Kommando, Audit oder Alle).
2.  Geben Sie einen Fragmenttypen ein, wenn Sie die zu löschenden Daten genauer spezifizieren möchten. Geben Sie im Feld **Typ** ein "type"-Attribut als Filter ein. Um beispielsweise alle Alarme im Zusammenhang mit Verbindungsabbrüchen zu löschen, wählen Sie als Datentyp "Alarm" und geben Sie "c8y_UnavailabilityAlarm" als Attribut ein.
3.  Wenn Sie nur die Daten für ein bestimmtes Gerät löschen möchten, geben Sie die entsprechende Geräte-ID in das Feld **Quelle** ein.
4.  Geben Sie das maximale Alter in Tagen an (maximal zulässiger Wert ist 10 Jahre in Tagen).
5.  Klicken Sie **Speichern**, um die Regel zu erstellen.

> **Info**: Beachten Sie, dass Alarme nur entfernt werden, wenn Sie den Status "GELÖSCHT" haben.

Um eine Regel zu entfernen, bewegen Sie den Mauszeiger darüber und klicken Sie **Entfernen**.

### <a name="files"></a>Verwalten von Daten in der Dateiablage

Die Dateiablage bietet einen Überblick über die Dateien, die in Ihrem Konto gespeichert sind.

Klicken Sie **Dateiablage** im Menü **Verwaltung**, um eine Liste aller Dateien anzuzeigen.

Die angezeigten Dateien können aus verschiedenen Quellen stammen. Es kann sich um Software Images, Konfigurationssnapshots von Geräten, Logdateien von Geräten oder um Webanwendungen, die auf der Seite **Eigene Anwendungen** hochgeladen wurden, handeln.

Für jede Datei wird der Name, sein Eigentümer, der Dateityp (z. B. image/bmp, text/csv), die Dateigröße und das Datum der letzten Aktualisierung angezeigt.

![Dateiablage](/images/benutzerhandbuch/admin-file-repository.png)

Um eine Datei von Ihrem Computer hochzuladen, klicken Sie in der oberen Menüleiste auf **Datei hochladen**.

Um eine Datei von Ihrem Konto herunterzuladen, öffnen Sie das Kontextmenü über das Menüsymbol und wählen Sie **Herunterladen**.

Um eine Datei von Ihrem Konto zu löschen, klicken Sie **Löschen** im Kontextmenü.

> **Info**: Wenn die Datei einer aktiven Anwendung entspricht, kann sie nicht gelöscht werden. Sie müssen die Anwendung erst entfernen oder aktualisieren, um sie löschen zu können.

