---
weight: 80
title: Verwenden von SmartREST-Templates
layout: redirect
---

### Einführung

Bei den SmartREST-Templates handelt es sich um eine Sammlung von Anfrage- und Antwort-Templates, die verwendet werden, um CSV-Daten und Cumulocity IoT Rest API-Aufrufe zu konvertieren. Sie können SmartREST-Templates etwa verwenden, um einfach Geräte zur Plattform hinzuzufügen anstatt jedesmal manuell eine Anfrage zu schreiben.

Um die Geräteintegration zu vereinfachen, stellt Cumulocity IoT auch statische Templates bereit, so dass Sie keine eigenen Templates erstellen müssen. Diese Templates konzentrieren sich jedoch nur auf häufig verwendete Nachrichten für die Geräteverwaltung. Weitere Informationen zu statischen Templates finden Sie im [Device SDK Guide](/device-sdk/mqtt#static-templates).

Öffnen Sie die Seite **SmartREST-Template** im Menü **Gerätetypen** des Navigators.

![template view](/images/users-guide/DeviceManagement/devmgmt-devicetypes-smartrest.png)

Für jedes Template werden folgende Informationen bereitgestellt:

* Template-Name
* Template-ID
* Anzahl gesendeter Nachrichten
* Anzahl der Antworten

SmartREST-Templates können auf zweierlei Weise hinzugefügt werden:

- Importieren eines bereits vorhandenen Templates
- Erstellen eines neuen Templates

### So importieren Sie ein vorhandenes SmartREST-Template

1. Klicken Sie auf **Import** rechts in der oberen Menüleiste.
2. Wählen Sie im darauf folgenden Dialog eine Datei zum Hochladen von Ihrem Computer.
3. Geben Sie einen Namen und eine eindeutige ID für das Template ein (beide Eingaben sind erforderlich).
4. Klicken Sie auf **Importieren**, um das Template zu importieren.

### So erstellen Sie ein neues SmartREST-Template

1. Klicken Sie auf **Neues Template** rechts in der oberen Menüleiste.
2. Geben Sie im darauf folgenden Dialog einen Namen und eine eindeutige ID für das Template ein (beide Eingaben sind erforderlich).
3. Klicken Sie auf **Weiter**, um Nachrichten oder Antworten hinzuzufügen.


#### So fügen Sie eine Nachricht hinzu

Das Nachrichten-Template enthält alle erforderlichen Informationen, um eine SmartREST-Anfrage in einen entsprechenden Rest API-Aufruf zu konvertieren, der dann zur Plattform gesendet wird.

1. Um eine neue Nachricht zu einem Template hinzuzufügen, navigieren Sie zur Registerkarte **Nachrichten** im entsprechenden Template und klicken Sie auf **Nachricht hinzufügen**.

1. Füllen Sie die folgenden Felder aus:

	|Feld|Beschreibung|
|:---|:---|
|Message-ID|Integer-Wert, der zur Identifizierung der Nachricht verwendet wird. Dieser Wert muss eindeutig für alle Nachricht- und Antwort-Templates sein.
|Name|Name für die Nachricht. Erforderlich.
|Ziel-REST API|REST API für das Ziel. Auswahlliste. Verfügbare Werte: ALARM, EREIGNIS, OPERATION, MESSWERT, STAMMDATEN.
|Methode|Anfragemethode. Verfügbare Werte POST, PUT, GET, abhängig von der ausgewählten Ziel-REST API.
|Erwartet Antwortnachricht|Aktivieren Sie diese Checkbox, wenn Sie die Ergebnisse der Anfrage mit Antwort-Templates verarbeiten möchten.
|Integrierte REST API-Felder|Diese Felder sind optional und variieren je nach ausgewählter Ziel-REST API. Wenn kein Wert bereitgestellt wird, kann das Gerät diesen setzen, sobald die eigentliche Nachricht gesendet wird.
|Benutzerdefinierte REST API-Felder|Durch Klicken von **Feld hinzufügen**, können zusätzliche eigene Felder hinzugefügt werden. Geben Sie den API-Schlüssel ein und wählen Sie den gewünschten Datentypen.

	![Add message](/images/users-guide/DeviceManagement/devmgmt-devicetypes-smartrest-addmessage.png)

	Unter **Vorschau** können Sie eine Vorschau Ihrer Anfragenachricht sehen.

3. Klicken Sie auf **Speichern**.

Die Nachricht wird dem SmartREST-Template hinzugefügt.

#### So löschen Sie eine Nachricht

Um eine Nachricht zu löschen, öffnen Sie diese und klicken Sie unten auf **Löschen**.

Die Nachricht wird aus dem SmartREST-Template gelöscht.

#### So fügen Sie eine Antwort hinzu

Ein Antwort-Template enthält alle erforderlichen Informationen, um Datenwerte aus einer Antwort der Plattform auf eine REST API-Anfrage zu extrahieren, die dann an den Client im CSV-Datenformat gesendet werden.

1. Um eine neue Antwort hinzuzufügen, navigieren Sie zur Registerkarte **Antworten** im entsprechenden Template und klicken Sie auf **Antwort hinzufügen**.

2. Füllen Sie die folgenden Felder aus:

	|Feld|Beschreibung|
|:---|:---|
|Antwort-ID|Eindeutiger Integer-Wert zur Identifizierung der Antwort.
|Name|Name für die Antwort. Erforderlich.
|Basis-Pattern|Basis-Pattern für die Antwort.
|Bedingung|Bedingungswert der Antwort.
|Pattern|Mindestens ein Pattern ist erforderlich. Klicken Sie auf **Pattern hinzufügen** und geben Sie einen Pattern-Wert an.

	![Add template response](/images/users-guide/DeviceManagement/devmgmt-devicetypes-smartrest-addresponse.png)

3. Klicken Sie auf **Speichern**.

Die Antwort wird dem SmartREST-Template hinzugefügt.

#### So löschen Sie eine Antwort

Um eine Antwort zu löschen, öffnen Sie diese und klicken Sie unten auf **Löschen**.

### So bearbeiten Sie ein SmartREST-Template

Klicken Sie entweder auf das gewünschte Template oder klicken Sie auf das Menüsymbol rechts oben neben der entsprechenden Template-Karte und anschließend auf **Bearbeiten**.

Klicken Sie nach der Bearbeitung des Templates auf **Speichern**, um Ihre Einstellungen zu speichern.

### So löschen Sie ein SmartREST-Template

Klicken Sie auf das Menüsymbol rechts oben in der entsprechenden Template-Karte und anschließend auf **Löschen**.


### So exportieren Sie ein SmartREST-Template

Klicken Sie auf das Menüsymbol rechts oben in der entsprechenden Template-Karte und anschließend auf **Exportieren**.

Das Template wird automatisch in Ihr Dateisystem heruntergeladen.

Um ein SmartREST-Template als CSV-Datei herunterzuladen, führen Sie folgende Schritte aus:

1. Öffnen Sie das Template, das Sie exportieren möchten, und wählen Sie die Registerkarte **CSV-Vorschau**.
2. Wählen Sie im darauf folgenden Dialog die bevorzugten Optionen für Feldtrennzeichen, Dezimaltrennzeichen und Zeichensatz.
3. Klicken Sie in der Registerkarte auf **CSV-Vorschau**, die zusätzliche Informationen zu Nachrichten und Antworten enthält, **In die Zwischenablage kopieren**.

![CSV preview tab](/images/users-guide/DeviceManagement/devmgmt-devicetypes-smartrest-csv.png)

Das SmartREST-Template wird in die CSV-Datei exportiert.
