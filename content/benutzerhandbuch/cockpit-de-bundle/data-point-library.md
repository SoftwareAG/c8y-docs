---
layout: redirect
title: Datenpunktbibliothek
weight: 75
---

Die Datenpunktbibliothek enthält eine Sammlung von Datenpunkten mit Standardwerten für Datenpunktattribute.

Datenpunktattribute ähneln den Absatzformaten in Textverarbeitungsanwendungen. Sie möchten nicht jeden Absatz einzeln formatieren. Stattdessen möchten Sie einen Satz von Standardformaten definieren und diese auf Ihre Absätze in Ihrem Dokument anwenden. Die Datenpunktbibliothek bietet die gleiche Funktionalität für Datenpunkte. Sie bietet eine Reihe von standardisierten Datenpunkt-Templates, die problemlos auf Ihre Datenpunkte von verschiedenen Geräten angewendet werden können.

Wie verwendet die Cockpit-Anwendung die Datenpunktbibliothek? Um die Standardvisualisierung für einen Datenpunkt wie Farbe oder Beschriftung zu finden, durchsucht die {{< product-c8y-iot >}}-Plattform die Datenpunktbibliothek und versucht, einen passenden Eintrag zu finden. Ein Eintrag gilt als "passend", wenn die Werte für Fragment und Serie in der Datenpunktbibliothek mit den Messwerten übereinstimmen. Bei einem passenden Eintrag werden die entsprechenden Datenpunktattribute für eine Standardvisualisierung verwendet.

Darüber hinaus werden die Attribute der Datenpunktbibliothek von Geschäftsregeln verwendet: Die in der Datenpunktbibliothek konfigurierten roten und gelben Werte werden von Schwellenwertregeln verwendet, um Alarme auszulösen.

Klicken Sie auf **Datenpunktbibliothek** im Menü **Konfiguration** im Navigator, um die Datenpunktbibliothek zu öffnen.

![Data point library](/images/benutzerhandbuch/cockpit/cockpit-data-point-library.png)

Es wird eine Liste der verfügbaren Datenpunkte angezeigt. Jeder Datenpunkt enthält die folgenden Informationen:

* Farbe und Beschriftung des Datenpunkts
* Name und Serie des Fragments
* Einheit des Messwerts
* Werte (Minimum, Maximum, roter/gelber Bereich)

### So fügen Sie der Bibliothek einen Datenpunkt hinzu

1. Klicken Sie auf **Datenpunkt hinzufügen** in der oberen Menüleiste.
2. Geben Sie die folgenden Informationen ein:

  |Feld|Beschreibung|
|:---|:---|
|Farbe|Farbe für die Datenpunktvisualisierung
|Beschriftung|Beschriftung für die Datenpunktvisualisierung
|Fragment|Name des Fragments
|Series|Name der Serie
|Einheit|Für den Messwert verwendete Einheit
|Ziel|Zielwert
|Minimum|Minimaler Wert, der auf der Y-Achse angezeigt wird
|Maximum|Minimaler Wert, der auf der Y-Achse angezeigt wird
|Gelber Bereich|Min./Max.-Werte für den gelben Bereich (WENIGER WICHTIGE Alarme)
|Roter Bereich|Min./Max.-Werte für den roten Bereich (KRITISCHE Alarme)

3. Klicken Sie auf **Speichern**, um den Datenpunkt zur Bibliothek hinzuzufügen.

### So bearbeiten Sie einen Datenpunkt

Klicken Sie einfach auf den entsprechenden Eintrag oder klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Bearbeiten**.


### So löschen Sie einen Datenpunkt

Klicken Sie auf das Menüsymbol rechts neben einem Eintrag und anschließend auf **Löschen**.