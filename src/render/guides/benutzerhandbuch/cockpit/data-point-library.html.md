---
order: 70
title: Datenpunktbibliothek
layout: redirect
---

Die Datenpunktbibliothek enthält eine Sammlung von Datenpunkten mit Standardwerten für Datenpunktattribute. Datenpunktattribute ähneln den "Absatzformaten" in Textverarbeitungsanwendungen: Sie möchten nicht jeden Absatz einzeln formatieren. Stattdessen möchten Sie einen Satz von Standardformaten definieren und diese auf Ihre Absätze in Ihrem Dokument anwenden. 

Die Datenpunktbibliothek bietet die gleiche Funktionalität für Datenpunkte: Sie bietet eine Reihe von standardisierten Datenpunkt-"Vorlagen", die problemlos auf Ihre Datenpunkte von verschiedenen Geräten angewendet werden können.

Wie verwendet die Cockpit-Anwendung die Datenpunktbibliothek? Um die Standard-Visualisierung für einen Datenpunkt wie Farbe oder Beschriftung zu finden, durchsucht die Cockpit-Anwendung die Datenpunktbibliothek und versucht, einen passenden Eintrag zu finden. Ein Eintrag gilt als "passend", wenn die Werte für Fragment und Serie in der Datenpunktbibliothek mit denen der Messung übereinstimmen. Wenn ein passender Eintrag gefunden wird, werden die entsprechenden Datenpunktattribute für eine Standardvisualisierung verwendet.

Darüber hinaus werden die Attribute der Datenpunktbibliothek von Geschäftsregeln verwendet: Die in der Datenpunktbibliothek konfigurierten roten und gelben Werte werden von Schwellwertregeln verwendet, um Alarme auszulösen.

Klicken Sie "Datenpunktbibliothek" im Menü "Konfiguration" im Navigator, um die Datenpunktbibliothek zu öffnen. 

Es wird eine Liste der verfügbaren Datenpunkte angezeigt. Jeder Datenpunkt enthält die folgenden Informationen:

* Farbe und Beschriftung des Datenpunkts
* Name und Serie des Fragments
* Einheit des Messwerts

![image alt text](/guides/images/benutzerhandbuch/cockpit-datapointlibrary.png)


### Hinzufügen eines Datenpunkts

Klicken Sie "**Datenpunkt hinzufügen**" in der oberen Menüleiste, um einen Datenpunkt zur Bibliothek hinzuzufügen. 

<img src="/guides/images/benutzerhandbuch/cockpit-add-datapoint.png" name="Datenpunkt hinzufügen" style="width:50%;"/>

Geben Sie die folgenden Informationen ein:

|Feld|Beschreibung|
|:---|:---|
|Farbe|Farbe für die Datenpunktvisualisierung
|Beschriftung|Beschriftung für die Datenpunktvisualisierung
|Fragment|Name des Fragments
|Series|Name der Series
|Einheit|Einheit des Messwerts
|Ziel|Zielwert
|Minimum|Minimaler Wert, der auf der Y-Achse angezeigt wird
|Maximum|Maximaler Wert, der auf der Y-Achse angezeigt wird
|Gelber Bereich|Min/max-Werte für den gelben Bereich (WENIGER WICHTIGE Alarme)
|Roter Bereich|Min/max-Werte für den roten Bereich (KRITISCHE Alarme)

Beispiel:

<img src="/guides/images/benutzerhandbuch/cockpit-datapoint-example.png" name="Datenpunkt Beispiel" style="width:50%;"/>

Klicken Sie **Speichern**, um den Datenpunkt zur Bibliothek hinzuzufügen.

### Bearbeiten oder Löschen von Datenpunkten

Klicken Sie auf den entsprechenden Datenpunkteintrag in der Liste oder öffnen Sie das Kontextmenü über das Menüsymbol und klicken Sie "**Bearbeiten**".

Klicken Sie **Entfernen** im Kontextmenü, um einen Datenpunkt zu löschen.