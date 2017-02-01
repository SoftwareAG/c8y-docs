---
order: 35
title: Automatische Aktualisierung
layout: default
---

## Übersicht

Cumulocity ermöglicht Entwicklern und Power-Usern, Echtzeit-IoT-Business-Logik in Cumulocity auf einer hochentwickelten Echtzeit-Verarbeitungsprache zu verarbeiten. Dieser Abschnitt stellt die grundlegenden Konzepte der Echtzeitverarbeitung vor und zeigt, wie Sie Ihre eigene Geschäftsfunktionalität bei Cumulocity entwickeln können.

Mehr Information über die Oberflächen für Automatische Aktualisierung findet man im Referenzhandbuch. ["Cumulocity Ereignis Anweisung"](/guides/reference/cumulocity-event-language) and ["Real-time Statements"](/guides/reference/real-time-statements).

## Was ist Automatische Aktualisierung in Cumulocity?
Cumulocity hat eine Echtzeit-Engine die alle Daten aus Geräten oder anderen Datenquellen für die sofortige Verarbeitung von benutzerdefinierten Geschäftsprozessen empfängt. Diese benutzerdefinierten Operationen können Anwendungen auf neue eingehenden Daten aufmerksam machen, neue Operationen starten basierend auf den empfangenen Daten (z. B. das Senden eines Alarms, wenn ein Grenzwert für einen Sensor überschritten wird), Triggeroperationen auf Geräte oder E-Mails senden. Diese Operationslogik ist implementiert in der *Cumulocity Event Language*, einer domänenspezifischen High-Level-Sprache für IoT-Echtzeitdaten.

![CEP architecture](/guides/concepts-guide/realtimede.png)

Cumulocity Event Language umfasst *Anweisungen*, wie in den folgenden Beispielen veranschaulicht. Sie sind in Einheiten des Einsatzes, genannt *Module* gruppiert. Module können als Teil einer Cumulocity-Anwendung bereitgestellt werden. Sie können mit der Cumulocity-Verwaltungsanwendung bearbeitet werden. Über die REST-API können Anwendungsentwickler benutzerfreundliche Domäne-spezifische Business-Assistenten für ihre spezifischen Anwendungsfälle entwickeln. Beispielsweise kann ein Hausautomationsentwickler einen Assistenten erstellen, der Schwellenwerte für Temperatursensoren bereitstellt, um Heizungen zu steuern.
Das Bild oben zeigt auch ein weiteres Merkmal von Cumulocity: Die Möglichkeit, Daten ausschließlich für die Echtzeit-Verarbeitung zu senden. Daten, die als "temporär" markiert sind, werden nicht in der Datenbank von Cumulocity gespeichert, sondern nur von der Echtzeit-Engine verarbeitet. Dies spart Speicher- und Verarbeitungskosten, zum Beispiel bei der Verfolgung von Geräten in Echtzeit, ohne dass Daten gespeichert werden müssen.

## Welche Vorteile bringt die Automatische Aktualisierung?

Die automatische Aktualisierung von Cumulocity hat folgende Vorteile:

- Reagieren Sie sofort auf Ereignisse von Fernsteuersensoren.
- Entwickeln Sie hochgradig interaktive IoT-Anwendungen.
- Führen Sie IoT Anwendungsfälle direkt in Cumulocity ohne Software-Entwicklung aus und überlassen Sie das Hosting und Management Cumulocity.
-   Validieren, verändern Sie oder leiten Sie Daten ab nach ihrem Geschäftsmodell über verschiedene Geräte und Vorrichtungen unterschiedlicher Hersteller.
-   Veranlasst automatisierte ferngesteuerte Vorgänge basierend auf Ereignissen.
-   Verwendet leistungsstarke, Stream-orientierte Business-Logik, wie Zeitfenster und "Joins".
-   Reduziert die Kosten für Online-Tracking-Geräte, indem Sie die für die Langzeitspeicherung erforderlichen Daten auswählen.
 
## Was ist Cumulocity Event Language (CEL)?

Cumulocity Event Language hat eine Syntax ähnlich der SQL-Sprache. In SQL wird eine Anweisung gegen eine logisch feste Datenbank ausgeführt, ein Ergebnis erzeugt und die Aufgabe beendet. In Cumulocity wird eine Anweisung kontinuierlich gegen einen Strom von Eingangsdaten (Eingabeereignisse) abgeglichen und berechnet kontinuierlich ein Ergebnis (Ausgabeereignisse).

Als Beispiel liest die folgende Aussage kontinuierlich neue Temperatursensor-Messwerte, die über einer bestimmten Temperatur liegen:

    select *
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

Hier ist * MeasurementCreated * ein Stream mit einem Ereignis für jede Messung, die im System erzeugt wird. Die Auswahl einer Teilmenge dieser Ereignisse erfolgt mit * where *, ähnlich SQL. * GetNumber () * ist eine Funktion zum Auslesen eines numerischen Wertes aus einem Ereignis. In diesem Beispiel ist "e" das Ereignis "MeasurementCreated" und die Eigenschaft "c8y \ _TemperatureMeasurement". "T.value", ist ein Wert in Grad Celsius eines Temperatursensors (see the [Sensor Bibliothek](/guides/reference/sensor-library)).

## Wie kann ich abgeleitete Daten aus CEL erstellen?

Es gibt spezielle Streams, die vom System bereitgestellt werden, um vordefinierte Operationen (wie Datenspeicherung oder das Senden von Daten per Email) auszuführen. Ein Stream ist * CreateAlarm *, der für die Speicherung eines Alarms in Cumulocity verwendet werden kann. Gehen Sie davon aus, dass ein Alarm sofort erzeugt werden sollte, wenn die Temperatur eines Sensors einen definierten Wert überschreitet. Dies geschieht mit folgender Anweisung:

    insert into CreateAlarm
    select
     e.measurement.time as time,
     e.measurement.source.value as source,
     "c8y_TemperatureAlert" as type,
     "Temperature too high" as text,
     "ACTIVE" as status,
     "CRITICAL" as severity
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

Technisch erzeugt diese Aussage ein neues Ereignis "AlarmCreated" jedes Mal, wenn ein Temperatursensor mehr als 100 Grad Celsius liest und in den Ausgangsstrom "CreateAlarm" einspeist. Die Eigenschaftsnamen in der ausgewählten Klausel müssen den Eigenschaften von "AlarmCreated" entsprechen(siehe auch [Cumulocity Event Language Referenz](/guides/reference/cumulocity-event-language)).

## Wie kann ich Geräte mit CEL steuern?

Die Fernsteuerung in Cumulocity ist nur ein anderer Typ abgeleiteter Daten. Remote-Operationen sind auf ein bestimmtes Gerät ausgerichtet. Das folgende Beispiel veranschaulicht das Schalten eines Relais auf der Grundlage von Temperaturmessungen:

    insert into CreateOperation
    select
    "PENDING" as status,
    <<heating ID>> as deviceId,
    {
    "c8y_Relay.relayState", "CLOSED"
    } as fragments
    from MeasurementCreated e
    where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100

-   *Heizung ID* ist ein Platzhalter für die ID der Heizung, die ausgelöst werden soll.
-   *fragments* definiert den verschachtelten Inhalt der Operation "c8y \ Relay", der "GESCHLOSSEN" ist.
   
Die Syntax des Teils *fragments* ist eine Liste von Paaren von Eigenschaftennamen und Werten, die von geschweiften Klammern umgeben sind: {? Key1 ?,? Value1 ?,? Key2 ?,? Value2 ?, ...}.

## Wie kann ich Daten von CEL abfragen?

Es kann erforderlich sein, Informationen aus der Cumulocity Datenbank als Teil der laufenden Ereignisverarbeitung  abzufragen. Dies wird durch eine Reihe von Abfrage-Methoden unterstützt. Hier ist ein Beispiel, das zeigt, wie die Gesamtverkäufe eines Verkaufsautomaten jede Stunde zusammenfasst werden. Die nach einem Kauf erstellten Reportdaten werden aus der Cumulocity-Datenbank abgerufen.

    create window SalesReport.win:time_batch(1 hour)  
    (
        event com.cumulocity.model.event.Event,
        customer com.cumulocity.model.ManagedObject
    )

    insert into SalesReport
    select
        e.event as event,
        findOneManagedObjectParent(e.event.source.value) as customer
    from EventCreated as e

    insert into CreateMeasurement
    select
        "total_cust_trx",
        "customer_trx_counter",
        {
            "total", count(*),
            "customer_id", sales_report.customer.id.value
        }
    from SalesReport as sales_report
    group by sales_report.customer.id.value

Oben erstellen wir zunächst ein Batch-Fenster, das die Daten für eine Stunde hält, um in diesem Zeitrahmen eine Summe zu berechnen. Wir speichern die vorbereiteten Daten in diesem Fenster: Eingehende Ereignisse zusammen mit dem übergeordneten verwalteten Objekt der Ereignisquelle. Dies entspricht dem Datenmodell unserer Vending-Applikation: Verkaufsberichte werden als Ereignisse in Cumulocity mit einem Automaten als Quelle dargestellt. Kunden werden als übergeordnete Objekte von Verkaufsautomaten dargestellt.

Die Erfassung der Verkaufsberichte erfolgt über "insert into CreateMeasurement ..." mittels einer SQL-ähnlichen Syntax und wird als Messung gespeichert. Der Unterschied zu SQL ist: In SQL berechnen Sie ein Ergebnis über einen festen, aktuellen Inhalt einer Datenbank. In Cumulocity Event Language laufen Anweisungen endlos und die Prozesszeit muss durch das Zeitfenster begrenzt werden.

## Wie wird die Automatsiche Aktualisierung in Cumulocity umgesetzt?

Es gibt zwei Verarbeitungsmodi für API-Anfragen in Cumulocity: *dauerhaft* und *temporär*. Der persistente Modus ist der Standard: Er speichert Daten in der Cumulocity-Datenbank und sendet die Daten an die Echtzeit-Engine. Nachdem beide abgeschlossen sind, gibt Cumulocity das Ergebnis der Anfrage zurück.

Der "temporäre" Modus sendet nur die Daten an die Echtzeit-Engine und kehrt sofort asynchron zurück. Dieser Modus dient zur effizienten Überwachung einzelner Daten in Echtzeit.

Als Beispiel sei angenommen, dass Standortaktualisierungen von Autos jede Sekunde während des Fahrens überwacht werden sollten, aber nur einmal in einer Minute in die Datenbank für Berichtszwecke gespeichert werden sollten. Dies geschieht mit folgender Anweisung:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationUpdate") is not null
    output first every 60 seconds

Eine andere Möglichkeit ist, nur jedes 60. Update wie folgt auszugeben:

    insert into CreatedEvent
    select * from EventCreated e
    where getObject(e, "c8y_LocationUpdate") is not null
    output first every 60 events
    
## Zusammenfassung

Cumulocity ermöglicht es Entwicklern und Nutzern, Echtzeit-IoT-Geschäftsprozesse auszuführen. Der Benutzer kann wählen, ob die Daten dauerhaft gespeichert werden oder vorübergehend zur Erstellung von Berichten oder Analysen verwendet und dann automatisch gelöscht werden. Die Prozesse und Ergebnisse werden kontinuierlich aktualisiert.