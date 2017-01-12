---
order: 10
title: Introduction
layout: default
---

## Überblick

Mit der Cumulocity-Echtzeitverarbeitung können Sie Ihrer IoT-Lösung eine eigene Arbeits-Logik hinzufügen. Dies schließt die Datenanalyse-Logik ein, ist aber nicht darauf beschränkt. Um neue Analysen zu definieren, verwenden Sie die Cumulocity-Ereignissprache. Die Sprache erlaubt die Auswertung eingehender Daten. Es verwendet eine leistungsstarke Muster- und Zeitfenster-basierte Abfrage. Sie können Ihre Daten in Echtzeit erstellen, aktualisieren und löschen.

![Datamodel](/guides/event-language/datamodel.png)

Typische Echtzeitanalyse-Anwendungsfälle umfassen:

* Fernbedienung: Schalten Sie das Gerät aus, wenn seine Temperatur über 40 Grad steigt.
* Validierung: Verwerfen Sie negative Zählerstände oder Zählerstände, die niedriger sind als die vorherigen.
* Abgeleitete Daten: Berechnen Sie das Volumen der Verkaufstransaktionen pro Automat pro Tag.
* Aggregation: Summe der Verkäufe von Verkaufsautomaten für einen Kunden pro Tag.
* Benachrichtigungen: Senden Sie mir eine E-Mail, wenn es einen Stromausfall in einer meiner Maschinen auftritt.
* Kompression: Speicherortaktualisierungen aller Autos nur einmal alle fünf Minuten durchführen,(aber noch Echtzeitdaten für das Auto senden, das ich an der Benutzeroberfläche betrachte).

In den folgenden Abschnitten beschreiben wir die Grundlagen für das Verständnis, wie die Cumulocity-Ereignissprache funktioniert und wie Sie Ihre eigene Analyse- oder andere serverseitige Geschäftslogik und Automatisierung erstellen können.

## Ereignis Streams

In der Cumulocity-Ereignissprache fließen Datenströme in "Streams". Sie können Ereignisse in Streams erstellen und Ereignisse verfolgen, die in Streams erstellt wurden.

### Vordefinierte Streams

Es gibt einige vordefinierte Streams, die mit mehreren Cumulocity-APIs interagieren. Für jeden eingehenden Stream erstellt Cumulocity automatisch ein neues Ereignis, wenn der entsprechende API-Aufruf durchgeführt wurde. Wenn eine Messung über REST API erstellt wurde, erfolgt ein neues Ereignis im MeasurementCreated-Stream.
Für die Interaktion mit dem Cumulocity-Backend können Sie ein Ereignis auf dem jeweiligen Ausgabestream erstellen und Cumulocity führt automatisch die Datenbankabfrage aus oder erstellt die für das Versenden von E-Mails, SMS oder ähnliches erforderlichen API-Aufrufe. Um einen neuen Alarm in der Datenbank anzulegen, können Sie im CreateAlarm-Stream ein neues Ereignis anlegen.

|API|Input streams|Output streams|Description|
|:--|:----------|:-------------|:----------|
|Stammdaten|ManagedObjectCreated<br/>ManagedObjectUpdated<br/>ManagedObjectDeleted|CreateManagedObject<br/>UpdateManagedObject<br/>DeleteManagedObject|This group of events represents creation, modification or deletion of a single ManagedObject.|
|Ereignisse|EventCreated<br/>EventDeleted|CreateEvent<br/>DeleteEvent|This group of events represents creation or deletion of a single Event.|
|Messungen|MeasurementCreated<br/>MeasurementDeleted|CreateMeasurement<br/>DeleteMeasurement|This group of events represents creation or deletion of a single Measurement.|
|Geräte Steuerung|OperationCreated<br/>OperationUpdated|CreateOperation<br/>UpdateOperation|This group of events represents creation or modification of a single Operation.|
|Alarme|AlarmCreated<br/>AlarmUpdated|CreateAlarm<br/>UpdateAlarm|This group of events represents creation or modification of a single Alarm.|
|Emails|*(not used)*|SendEmail<br/>SendDashboard|This group of events represents sending of an email.|
|SMS|*(not used)*|SendSms|This group of events represents sending of a SMS.|
|Text-to-speech|*(not used)*|SendSpeech|This group of events represents initializing of a phone call.|

Sehen Sie sich das Datenmodell an, um zu sehen, wie die Ereignisse für jeden Stream strukturiert sind.

### Creating events in a stream

Das Erstellen eines Ereignisses erfolgt über die Schlüsselwörter `insert into` und` select`. Zuerst müssen Sie mit dem "insert into" anfangen, gefolgt von dem Stream-Namen, für den Stream ein Ereignis erstellen soll. Anschließend können Sie die "select" -Klausel verwenden, um die Parameter des Ereignisses anzugeben.
Ein Parameter wird durch die folgende Syntax angegeben: `value as parameter`. Sie können mehrere Parameter angeben, indem Sie sie durch Kommas trennen. Die Reihenfolge der Parameter spielt keine Rolle. Beachten Sie bitte, dass Ströme obligatorische Parameter haben können, die Sie in der "select" -Klausel angeben müssen.

### Ereignissen zuhören in einem Stream

Der häufigste Weg, um die Erzeugung eines Ereignisses in einem Stream auszulösen, ist, wenn etwas in einem anderen Stream passiert. Daher können Sie auch Events aus anderen Streams anhören. Dies geschieht durch das Schlüsselwort `from`, gefolgt vom Namen des Streams und (optional) gefolgt von einem Variablennamen, um das Ereignis in Ihrer Anweisung zu einem späteren Zeitpunkt zu verweisen.

## Bedingungen

Das Hinzufügen von Bedingungen kann mit dem Schlüsselwort `where` durchgeführt werden, um die Ereigniserzeugung nicht für jedes eingehende Ereignis auszulösen, sondern nur, wenn diese Bedingungen erfüllt sind. Auf das Schlüsselwort `where` folgt ein Ausdruck, der entweder true oder false ergibt. Sie können auch mehrere Ausdrücke mit `und` oder `oder` verbunden haben.

## Beispiel

Als Beispiel erstellen wir eine Anweisung. Es sollte einen Stream zuhören und erstellen Sie ein neues Ereignis in einem anderen Stream, wenn die angegebene Bedingung gilt.
Als Beispiel wollen wir für jede erzeugte Temperaturmessung einen Alarm erzeugen.

1. Um einen Alarm zu erstellen schreiben wir `insert into` in den Stream `CreateAlarm`.
2. Wir spezifizieren alle Parameter für das Ereignis in der `select` Klausel.
3. Der Alarm soll erstellt werden wenn ein Event `from` dem Stream `MeasurementCreated` erzeugt wird.
4. Der Alarm soll bestimmte Bedingungen einhalten, die im Ereignis `MeasurementCreated` Stream, der in der `where` Klausel definiert ist.

Das Resultat könnte so aussehen:

    insert into CreateAlarm
    select
      measurementEvent.measurement.time as time,
      measurementEvent.measurement.source.value as source,
      "c8y_TemperatureAlarm" as type,
      "Temperature measurement was created" as text,
      "ACTIVE" as status,
      "CRITICAL" as severity
    from MeasurementCreated measurementEvent
    where measurementEvent.measurement.type = "c8y_TemperatureMeasurement";
