---
aliases:
- /benutzerhandbuch/enterprise-edition-de/#storage-quota
layout: redirect
title: Speicherbegrenzung
weight: 100
---

Die Speicherbegrenzung gilt für einen Mandanten, wenn der Plattformadministrator ein Speicherkontingent pro Gerät eingerichtet hat. Der insgesamt verfügbare Speicher für einen Benutzer wird mittels der Formel `Speicherkontingent pro Gerät x Anzahl der Geräte` berechnet. Jede Nacht wird überprüft, ob das Kontingent überschritten wurde.

Ist das Kontingent überschritten, wird eine E-Mail an alle Mandantenadministratoren gesendet mit der Information, dass in der folgenden Nacht Daten gelöscht werden. Ist das Kontingent nach 24 Stunden weiterhin überschritten, werden alle Datenhaltungsbegrenzungen um einen festen Prozentwert herabgesetzt. Daraus resultiert, dass das Kontingent pro Gerät entsprechend verringert wird.

>**Info:** Das Speicherkontingent muss im Mandanten definiert werden und kann nicht durch die Konfiguration aktiviert/deaktiviert werden.

#### Beispiel

Nehmen wir an, ein Mandant hat ein Speicherkontingent von 10 GB. Datenhaltungsregeln gelten 80 Tage für Messwerte und 90 Tage für alle anderen Daten.

 - Tag 1: Die nächtliche Überprüfung ergibt eine Gesamtspeichernutzung von 13 GB. Eine E-Mail wird an alle Mandantenadministratoren gesendet.

 - Tag 2: Die Gesamtspeichernutzung beträgt weiterhin 13 GB. Das System ermittelt, dass eine Reduzierung der Datenhaltung um 15% ausreichend ist, um unterhalb des Speicherkontingents zu bleiben. Daher werden alle Messwerte, die älter sind als 68 Tage (80 Tage - 15%) sowie alle anderen Daten, die älter sind als 77 Tage (90 Tage - 15%) gelöscht.

Die Gesamtspeichernutzung beträgt nun 9,8 GB.


<a name="warningEmail"></a>
### Verwalten der Warn-E-Mail bei Überschreiten des Speicherkontingents

Die Funktion ist nur sichtbar, wenn ein Speicherkontingent für den Mandanten gesetzt wurde.

Mandantenadministratoren können eine Benutzergruppe (globale Rolle) festlegen, an die täglich eine E-Mail versendet wird, wenn der genutzte Speicher einen ebenfalls zu konfigurierenden Prozentsatz des Speicherkontingents überschreitet. Standardmäßig wird eine E-Mail an die Rolle "Admin" versendet, wenn die Speichernutzung 80% des Gesamtkontingents erreicht.

Die Warn-E-Mail kann auch deaktiviert werden.