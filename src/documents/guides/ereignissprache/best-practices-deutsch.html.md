---
order: 40
title: Best Practices und Fehlersuche
layout: default
toc: true
---

## CEL Statements und Esper Scripts

**Symptom: Ihre Event-Verarbeitungsregeln werden automatisch deaktiviert.**

Cumulocity überwacht den Speicherverbrauch und die Arbeitsbelastung, die durch Ereignisverarbeitungsregeln erzeugt werden, sowie alle Fehler, die beim Ausführen dieser Regeln auftreten. Wenn eine Ereignisverarbeitungsregel zu viel Speicher verbraucht oder zu viele Fehler erzeugt, deaktiviert Cumulocity diese Regel automatisch.

**Fehlerbehebung, wenn die Regeln aufgrund des Speicherverbrauchs deaktiviert sind:**

Stellen Sie sicher, dass Ihre Event-Verarbeitungsregeln nicht zu viele Ereignisse in Windows behalten. Zum Beispiel, wenn Sie "win: keepall ()" verwenden und viele Ereignisse die Regel eingeben, wird es in kurzer Zeit deaktiviert. Anstatt "win: keepall ()" zu verwenden, versuchen Sie mit Aussagen wie "std: lastevent ()", die weniger Speicher verbrauchen.

**Verhindern wie man durch zu viele Fehlerstatements deaktiviert wird:**

Überwachen Sie die Anzahl der Anweisungen auf Fehler. Um Fehler zu sehen, müssen Sie die Details lesen. Im Falle eines Fehlers korrigieren Sie die Anweisung.
Ein Beispiel für eine falsche Aussage: "Einfügen in UpdateAlarm select" CLEARED "als Status von ..." gilt als Fehlerstatement.
Ein Beispiel für eine korrigierte Anweisung lautet: "Einfügen in UpdateAlarm select" 10201 "als ID," CLEARED "als Status von ..."


## Benennung von Statements

Die @Name-Annotation gibt Ihnen die Möglichkeit, Ihre Staements im Modul zu benennen. Ein Name muss innerhalb eines einzigen Moduls eindeutig sein. Dies wirkt sich direkt auf die Kanäle in den [Echtzeitbenachrichtigungen] (/ guides / reference / real-time-statements / # notifications) aus.Es wird auch dazu beitragen, das Modul in der Administrationsoberfläche zu debuggen, da der Kanalname (und damit der Anweisungsname) in der Liste gedruckt wird.Wenn Sie keine Aussage nennen, wird sie automatisch "statement_ {number of statement}" benannt.

## Verwendung von Kontext bei Geräten

Wenn Sie einen Kontext benötigen, ist es in der Regel nicht notwendig, jede Anweisung in den Kontext zu stellen.Wenn Sie Aggregation von Messungen meistens verwenden, benötigen Sie nur den Kontext in der Anweisung, die die tatsächliche Aggregation ausführt. Es ist ein nützliches Konzept, das Modul komplett ohne den Kontext zu entwickeln und es am Ende zu den Aussagen hinzuzufügen, wo der Kontext zutrifft.

## Module aufteilen

Wenn das Modul wirklich groß wird, könnte es hilfreich sein, es in mehrere Module aufzuteilen.Wenn Sie Schemata oder Funktionen deklarieren, sind sie in allen Modulen Ihres Mandanten verfügbar.

Ein guter Ansatz kann sein:

* Modul 1: Filterung eingehender Daten und laden zusätzliche Daten aus der Datenbank
* Modul 2: Berechnung
* Modul 3: Daten in der Datenbank anlegen

*Denken Sie daran, dass dadurch Abhängigkeiten innerhalb der Module entstehen (z. B. Modul 2 benötigt ein in Modul 1 definiertes Schema). Sie müssen "kreisförmige" Abhängigkeiten vermeiden, da Sie in einer Endlosschlaufe enden.*

## Zahlenformate

Bei der Interaktion mit Messungen werden die Werte in BigDecimal (wenn Sie getNumber () verwenden).
Bei der Berechnung mit BigDecimal wird ein Fehler auftreten, wenn das Ergebnis eine Wiederholungsdezimalzahl ist. Dies führt zu einer Null-Return von eingebauten Funktionen wie avg ().
Es gibt zwei Möglichkeiten, dieses Problem zu vermeiden:

1. Wenn Sie eingebaute Funktionen verwenden, ist der einfachste Weg, den Wert der BigDecimal zu verdoppeln.

    avg(cast(getNumber(e, "c8y_TemperatureMeasurement.T.value"), double))

2. Falls ein Rechenvorgang eingebaut wird (e.g. in einer expression) dann verwenden Sie eine Rundungsfunktion oder eine Funktion Dezimalstellen zu begrenzen, wenn BigDecimal verwendet werden soll.

    getNumber(e, "c8y_TemperatureMeasurement.T.value").divide(new BigDecimal(3), 5, RoundingMode.HALF_UP)
