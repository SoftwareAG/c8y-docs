---
order: 70
title: Datenpunktbibliothek
layout: redirect
---

Die Datenpunktbibliothek enthält Standardwerte für Datenpunkteigenschaften. Datenpunkteigenschaften ähneln den "Absatzformaten" in Textverarbeitungsanwendungen: Sie möchten nicht jeden Absatz einzeln formatieren. Stattdessen möchten Sie einen Satz von Standardformaten definieren und diese auf Ihre Absätze in Ihrem Dokument anwenden. Die Datenpunktbibliothek bietet die gleiche Funktionalität für Datenpunkte: Sie bietet eine Reihe von Standarddatenpunktformaten, die von verschiedenen Geräten problemlos auf Ihre Datenpunkte angewendet werden können.

> Wie verwendet die Cockpit-Anwendung die Datenpunktbibliothek? Um die Standard-Visualisierung für einen Datenpunkt wie Farbe oder Label zu finden, durchsucht Cockpit die Datenpunktbibliothek und versucht, einen passenden Eintrag zu finden. Ein Eintrag gilt als "Passend", wenn der Wert für Fragment und Serie in der Datenpunktbibliothek mit denen der Messung übereinstimmt. Wenn ein passender Eintrag gefunden wird, werden die entsprechenden Datenpunkteigenschaften für eine Standardvisualisierung verwendet.
> 
> Darüber hinaus werden die Eigenschaften der Datenpunktbibliothek von Schwellenwert-Geschäftsregeln verwendet: Die in der Datenpunktbibliothek konfigurierten roten und gelben Werte werden von den Schwellwertregeln verwendet, um Alarme auszulösen.

Bei Auswahl von "Datenpunktbibliothek" im Navigator öffnet sich eine Liste mit vordefinierten Datenpunkten inklusive deren Eigenschaften.

![image alt text](/guides/images/users-guide/image_21de.png)

Beim Anklicken eines Eintrags kann ein einzelner Eintrag in der Datenpunktbibliothek editiert werden:

![image alt text](/guides/images/users-guide/image_22.png)

