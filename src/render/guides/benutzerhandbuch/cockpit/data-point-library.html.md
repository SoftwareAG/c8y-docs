---
order: 70
title: Datenpunktbibliothek
layout: redirect
---

Die Datenpunktbibliothek enthält eine Sammlung von Datenpunkten, die Standardwerte für Datenpunktattribute bereitstellen. 

Datenpunktattribute ähneln den "Absatzformaten" in Textverarbeitungsanwendungen: Sie möchten nicht jeden Absatz einzeln formatieren. Stattdessen möchten Sie einen Satz von Standardformaten definieren und diese auf Ihre Absätze in Ihrem Dokument anwenden. 

Die Datenpunktbibliothek bietet die gleiche Funktionalität für Datenpunkte: Sie bietet eine Reihe von standardisierten Datenpunkt-"Vorlagen", die von verschiedenen Geräten problemlos auf Ihre Datenpunkte angewendet werden können. 

Um die Standard-Visualisierung für einen Datenpunkt, wie Farbe oder Beschriftung, zu finden, durchsucht die Cockpit-Anwendung die Datenpunktbibliothek und versucht, einen passenden Eintrag zu finden. Ein Eintrag gilt als "passend", wenn die Werte für Fragment und Series in der Datenpunktbibliothek mit denen der Messung übereinstimmen. Wenn ein passender Eintrag gefunden wird, werden die entsprechenden Datenpunktattribute für eine Standardvisualisierung verwendet.

Darüber hinaus werden die Attribute der Datenpunktbibliothek von Schwellwert-Geschäftsregeln verwendet: Die in der Datenpunktbibliothek konfigurierten roten und gelben Werte werden von den Schwellwertregeln verwendet, um Alarme auszulösen.

Klicken Sie "Datenpunktbibliothek" im Menü "Konfiguration" im Navigator, um die Datenpunktbibliothek zu öffnen. Eine Liste mit vordefinierten Datenpunkten wird angezeigt. Dabei weist jeder Datenpunkt die folgenden Informationen auf:

* Farbe und Beschriftung des Datenpunkts
* Fragmentname und -typ
* Messwerteinheit

![image alt text](/guides/images/users-guide/image_21de.png)

Beim Anklicken eines Eintrags kann ein einzelner Eintrag in der Datenpunktbibliothek editiert werden:

![image alt text](/guides/images/users-guide/image_22.png)


To open the Datenpunktbibliothek, click "Datenpunktbibliothek" in the "Configuration" menu of the navigator.

A list of available data points will be opened. For each data point, the following information is provided in the list:



### Adding a data point to the library

To add a new data point to the library, click **Add data point** in the top menu bar.

Provide the following information:

|Field|Description|
|:---|:---|
|Color|Color for the data point visualization.
|Label|Label to identify the data point.
|Fragment|Name of the fragment. 
|Series|Name of the series.
|Unit|Unit used for the measurement.
|Target|Target value.
|Minimum|Minimum value shown on the y-axis.
|Maximum|Minimum value shown on the y-axis.
|Yellow range|Min/max values for the yellow range (MINOR alarms).
|Red range|Min/max values for the red range (CRITICAL alarms).

Click **Save** to add the data point to the library.

### Editing or removing data points

To edit a data point, simply click the respective entry in the list or click the menu icon at the right of an entry and in the context menu click **Edit**.

To remove a data point, click **Remove** in the context menu.




Bei Auswahl von "Datenpunktbibliothek" im Navigator öffnet sich eine Liste mit vordefinierten Datenpunkten inklusive deren Eigenschaften.

![image alt text](/guides/images/users-guide/image_21de.png)

Beim Anklicken eines Eintrags kann ein einzelner Eintrag in der Datenpunktbibliothek editiert werden:

![image alt text](/guides/images/users-guide/image_22.png)

