---
weight: 80
title: Verwenden von SmartREST-Templates
layout: redirect
---

### Einführung

Bei den SmartREST-Templates handelt es sich um eine Sammlung von Anfrage- und Antwort-Templates, die verwendet werden, um CSV-Daten und Cumulocity Rest API-Aufrufe zu konvertieren.  Sie können SmartREST-Templates etwa verwenden, um einfach Geräte zur Plattform hinzuzufügen anstatt jedesmal manuell eine Anfrage zu schreiben. 

Um die Geräteintegration zu vereinfachen, stellt Cumulocity auch statische Templates bereit, so dass Sie keine eigenen Templates erstellen müssen. Diese Templates konzentrieren sich jedoch nur auf häufig verwendete Nachrichten für die Geräteverwaltung. Weitere Informationen zu statischen Templates finden Sie im [Device SDK guide](/guides/device-sdk/mqtt#static-templates).

Klicken Sie **SmartREST-Template** im Navigator, um die Liste der SmartREST-Templates zu öffnen. 

![SmartREST-Templates](/guides/images/benutzerhandbuch/devmgmt-smartrest-templates.png)

Für jedes Template werden folgende Informationen bereitgestellt:

* Template-Name, z. B. Camel
* Template-ID, z.B. 99
* Anzahl gesendeter Nachrichten
* Anzahl der Antworten

SmartREST-Templates können auf zweierlei Weise hinzugefügt werden: 

- Importieren eines bereits vorhandenen Templates
- Erstellen eines neues Templates
- 
### Importieren eines vorhandenen Templates

1. Klicken Sie **Import** rechts in der oberen Menüleiste.
2. Wählen Sie im folgenden Fenster eine Datei zum Hochladen von Ihrem Computer. 
3. Geben Sie einen Namen und eine eindeutige ID für das Template ein (beide Eingaben sind erforderlich). 
4. Klicken Sie **Importieren**, um das Template zu importieren.

<img src="/guides/images/benutzerhandbuch/devmgmt-template-import.png" alt="Template importieren" style="max-width: 50%">

### Erstellen eines neuen SmartREST-Templates

1. Klicken Sie **Neues Template** rechts in der oberen Menüleiste.
2. Geben Sie einen Namen und eine eindeutige ID für das Template ein (beide Eingaben sind erforderlich). 
4. Klicken Sie **Weiter**, um Nachrichten oder Antworten hinzuzufügen.

<img src="/guides/images/benutzerhandbuch/devmgmt-template-create.png" alt="Create template" style="max-width: 50%">

### Hinzufügen einer Nachricht

Das Nachrichten-Template enthält alle erforderlichen Informationen, um eine  SmartREST-Anfrage in einen entsprechendenRest API-Aufruf zu konvertieren, der dann zur Plattform gesendet wird. 

Um eine neue Nachricht zu einem Template hinzuzufügen, navigieren Sie zur Registerkarte **Nachrichten** im entsprechenden Template und klicken Sie **Nachricht hinzufügen**. 

<img src="/guides/images/benutzerhandbuch/devmgmt-template-message.png" alt="Nachricht" style="max-width: 75%">

Füllen Sie die folgenden Felder aus:

|Feld|Beschreibung|
|:---|:---|
|Message-ID|Integer-Wert, der zur Identifizierung der Nachricht verwendet wird. Dieser Wert muss eindeutig für alle Nachricht- und Antwort-Templates sein. Erforderlich.
|Ziel-REST API|REST API für das Ziel. Auswahlliste. Verfügbare Werte: ALARM, EREIGNIS, KOMMANDO, MESSWERT, STAMMDATEN.
|Methode|Anfragemethode. Verfügbare Werte POST, PUT, GET, abhängig von der ausgewählten Ziel-REST API.
|Erwartet Antwortnachricht|Aktivieren Sie dieses Kontrollkästchen, wenn Sie die Ergebnisse der Anfrage mit Antwort-Templates verarbeiten möchten. 
|Integrierte REST API-Felder|Diese Felder sind optional und variieren je nach ausgewählter Ziel-REST API. Wenn kein Wert bereitgestellt wird, kann das Gerät diesen setzen, sobald die eigentliche Nachricht gesendet wird.  
|Benutzerdefinierte REST API-Felder|Durch Klicken von **Feld hinzufügen**, können zusätzliche eigene Felder hinzugefügt werden. Geben Sie den API-Schlüssel ein und wählen Sie den gewünschten Datentypen. 

Unter **Vorschau** können Sie eine Vorschau Ihrer Anfragenachricht sehen. 

Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.

Um eine Nachricht zu löschen, öffnen Sie diese und klicken Sie **Löschen**.

### Hinzufügen einer Antwort

Ein Antwort-Template enthält alle erforderlichen Informationen, um Datenwerte aus einer Antwort der Plattform auf eine REST API-Anfrage zu extrahieren, die dann an den Client im CSV-Datenformat gesendet werden.

Um eine neue Antwort hinzuzufügen, navigieren Sie zur Registerkarte **Antworten** im entsprechenden Template und klicken Sie **Antwort hinzufügen**. 

<img src="/guides/images/benutzerhandbuch/devmgmt-template-response.png" alt="Response" style="max-width: 75%">

Füllen Sie die folgenden Felder aus:

|Feld|Beschreibung|
|:---|:---|
|Antwort-ID|Eindeutiger Integer-Wert zur Identifizierung der Antwort. 
|Name|Name für die Antwort. Erforderlich.
|Basis-Pattern|Basis-Pattern für die Antwort.
|Bedingung|Bedingungswert der Antwort.
|Pattern|Mindestens ein Pattern ist erforderlich. Klicken Sie **Pattern hinzufügen** und geben Sie einen Pattern-Wert an.

Klicken Sie **Speichern**, um Ihre Einstellungen zu speichern.

Um eine Antwort zu löschen, öffnen Sie diese und klicken Sie **Löschen**.


### Bearbeiten oder Löschen eines SmartREST-Templates

Um ein SmartREST-Template zu bearbeiten, klicken Sie auf die entsprechende Template-Karte oder klicken Sie das Menüsymbol und wählen Sie **Bearbeiten** im Kontextmenü.

Um ein SmartREST-Template zu löschen, klicken Sie **Löschen** im Kontextmenü.

### Exportieren eines SmartREST-Templates

Um ein SmartREST-Template zu exportieren, klicken Sie das Menüsymbol und wählen Sie **Exportieren** im Kontextmenü. Das Template wird automatisch heruntergeladen.

Um ein SmartREST-Template als CSV-Datei herunterzuladen, führen Sie folgende Schritte aus:

1. Öffnen Sie das gewünschte Template und wechseln Sie zur Registerkarte **CSV-Vorschau**.
2. Klicken Sie in der Registerkarte **CSV-Vorschau**, die zusätzliche Informationen zu Nachrichten und Antworten enthält, **In die Zwischenablage kopieren**. 
1. Wählen Sie im folgenden Fenster die bevorzugten Optionen für Feldtrennzeichen, Dezimaltrennzeichen und Zeichensatz. 
2. Klicken Sie **Herunterladen**, um das Template als CSV-Datei herunterzuladen.
