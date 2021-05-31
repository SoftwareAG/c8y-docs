---
weight: 120
title: Tenant SLA Monitoring
layout: redirect
aliases:
  -/users-guide/optional-services/#tenant-sla-monitoring
---

## Übersicht

Der Service "Tenant SLA Monitoring" gibt Service Providern die Möglichkeit, die Verfügbarkeit und Reaktionszeit von Mandanten und Untermandanten zu überwachen.

>**Info:** Der Service "Tenant SLA Monitoring" ist nur für den Haupt-Management-Mandanten verfügbar.

Im Detail bietet er die folgenden Funktionen:

* Überwachung der Verfügbarkeit für jeden Mandanten
* Information über den aktuellen Verfügbarkeitsstatus von Mandanten (ja/nein)
* Information über die Verfügbarkeit von Mandanten in Prozent
	* während der letzten 24 Stunden
	* in der letzten Woche
	* im letzten Monat

Mit dem Tenant SLA Monitoring können Service Provider direkt

* überprüfen, ob ein Mandant aktuell nicht verfügbar ist,
* überprüfen, ob alle Mandanten voll funktionsfähig sind,
* die aktuelle Reaktionszeit für jeden Mandanten überprüfen,
* den aktuellen Status für einen bestimmten Mandanten überprüfen,
* die KPI (Leistungsindikatoren) der Verfügbarkeit aller Mandanten in den letzten 24 Stunden, der letzten Woche oder im letzten Monat überprüfen.

Verwenden Sie die Device Management-Anwendung, um die Daten des Tenant SLA Monitoring zu visualisieren.

## Tenant SLA Monitoring

### Voraussetzungen  

Der Management-Mandant muss die Anwendung “Tenant-sla-monitoring” abonnieren, um die Ergebnisse der Überwachung anzeigen zu können.

![Sla-monitoring subscribe](/images/users-guide/sla-monitoring/sla-subscribe.png)

Weitere Informationen zum Abonnieren von Anwendungen finden Sie unter [Enterprise Tenant > Verwalten von Mandanten > Anwendungen](/users-guide/enterprise-edition#subscribe) im Benutzerhandbuch.

### Funktionsweise des Service

Alle 5 Minuten testet das Tenant SLA Monitoring die Reaktionszeit aller Mandanten sowie ihrer Untermandanten (falls nicht deaktiviert) und speichert die Ergebnisse.

Dazu wird der Service automatisch für alle Untermandanten des abonnierten Mandanten abonniert, damit er auf die Zugangsdaten und die API zugreifen kann.

Darüber hinaus wird für jeden abonnierten Mandanten (d.h. Management-Mandanten) eine Quelle in der Device Management-Anwendung angelegt, in der die Überwachungsergebnisse, darunter die der Untermandanten, als Messwerte gespeichert werden.

### Anzeigen von Messwerten

Um die Messwerte mit den Überwachungsergebnissen anzuzeigen, öffnen Sie die Quelle (das Gerät) des Management-Mandanten unter **Alle Geräte** in der Device Management-Anwendung und wechseln Sie zur Registerkarte **Messwerte**.

<img src="/images/users-guide/sla-monitoring/sla-Tenant-Monitoring-Measurements.png" alt="Tenant Monitoring measurements" style="max-width: 100%">

Im API-Reaktionszeit-Diagramm wird die Reaktionszeit der Mandanten in Millisekunden angezeigt.

Zusätzlich gibt es Diagramme, die die durchschnittlichen Verfügbarkeitswerte der Mandanten für die folgenden Zeitspannen anzeigen:

* API-Verfügbarkeit Mittelwert Tag - 24 Stunden
* API-Verfügbarkeit Mittelwert Woche - 7 Tage
* API-Verfügbarkeit Mittelwert Monat - 30 Tage

Diese Mittelwerte werden errechnet, indem die Zeitspannen aller Timeout- und Reaktionszeit-Alarme (die z. B. erstellt werden, wenn Daten fehlen, siehe unten) eines bestimmten Zeitraums addiert und anschließend durch die gesamte Zeitspanne dividiert werden.

<img src="/images/users-guide/sla-monitoring/sla-Tenant-Monitoring-Day-Average.png" alt="Tenant Monitoring Day Average" style="max-width: 100%">

Weitere Informationen zu Messwerten finden Sie unter [Device Management > Gerätedetails > Messwerte](/users-guide/device-management#measurements) im Benutzerhandbuch.

### Erzeugen von Alarmen

Der Service "Tenant SLA Monitoring" erzeugt in folgenden Fällen Alarme:

* Nichtverfügbarkeit eines Mandanten - Immer wenn ein Mandant nicht erreichbar ist, speichert der Service keine Messwerte, sondern lässt Lücken in der Messwertreihe. Wenn der Mandant wieder verfügbar ist, sucht der Service nach dem letzten Messwert, der für den Mandanten gespeichert wurde, und erzeugt einen Alarm für die berechnete Zeit der Nichtverfügbarkeit.
* Lange Reaktionszeit - Wenn die erforderliche Reaktionszeit überschritten wird (standardmäßig 300 ms). Dieser Alarm ist solange aktiv, bis die Reaktionszeit wieder unter die festgelegte Grenze fällt.
* Zeitspannen, die nicht überwacht wurden

Anhand dieser Alarme wird die Verfügbarkeit des Systems in Prozent ermittelt und in Form von Messwerten angezeigt (siehe oben).

Um aktuelle Alarme anzuzeigen, wechseln Sie zur Registerkarte **Alarme** der Quelle des Management-Mandanten.
