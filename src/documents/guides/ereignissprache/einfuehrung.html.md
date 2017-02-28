---
order: 10
title: Einführung
layout: default
---

## Übersicht

Mit der Cumulocity Echtzeit-Event-Verarbeitung können Sie Ihre eigene Logik zu Ihrer IoT-Lösung hinzufügen. Dies beinhaltet die Datenanalyse-Logik, ist aber nicht darauf beschränkt. Um neue Analysen zu definieren, verwenden Sie die Cumulocity Event Language. Die Sprache erlaubt es, eingehende Daten zu analysieren. Es ist eine leistungsstarke Muster- und Zeitfenster-basierte Abfragesprache. Sie können Ihre Daten in Echtzeit erstellen, aktualisieren und löschen.


Typische Nutzer-Anwendungen von Echtzeit-Analysen sind:

* Fernsteuerung: Sie schaltet ein Gerät aus, wenn die Temperatur über 40 Grad ansteigt.
* Validierung: Sie verwirft negative Zählerstände oder Zählerstände, die niedriger als die vorherigen sind.
* Abgeleitete Daten: Sie berechnet das Volumen der Verkaufstransaktionen pro Verkaufsautomat pro Tag.
* Aggregation: Summieren Sie den Verkauf von Automaten für einen Kunden pro Tag.
* Benachrichtigung: Schicken Sie mir eine E-Mail, wenn es einen Stromausfall in einer meiner Maschinen gibt.
* Kompression: Store-Standorte Updates aller Autos (Geofence)nur einmal alle fünf Minuten (aber immer noch Echtzeit-Daten für das Auto, dass ich auf der Benutzeroberfläche verfolge).

In den folgenden Abschnitten beschreiben wir die Grundlagen für das Verständnis, wie die Cumulocity Event Language funktioniert und wie Sie eigene Analytik oder andere serverseitige Geschäftslogik und Automatisierung erstellen können.

## Event streams

In der Cumulocity Event Sprache fließen Daten in Datenstreams. Sie können Ereignisse in Streams erstellen und Ereignisse, die in Streams erstellt wurden, abhören.

### Vordefinierte Streams

Es gibt einige vordefinierte Streams, um mit mehreren Cumulocity APIs zu interagieren. Für jeden Eingangsstream erstellt Cumulocity automatisch ein neues Ereignis, wenn der jeweilige API-Aufruf gemacht wurde. Wenn eine Messung über REST API erstellt wurde, wird es einen neuen Event im MeasurementCreated Stream geben.
Für die Interaktion mit dem Cumulocity-Backend können Sie ein Ereignis auf dem jeweiligen Ausgabestream erstellen und Cumulocity führt automatisch die Datenbankabfrage aus oder erstellt die für das Versenden von Mails, Sms oder ähnlichen API-Anrufe. Um einen neuen Alarm in der Datenbank zu erstellen, kannst du im CreateAlarm-Stream ein neues Event erstellen.

|API|Input streams|Output streams|Description|
|:--|:----------|:-------------|:----------|
|Inventory|ManagedObjectCreated<br/>ManagedObjectUpdated<br/>ManagedObjectDeleted|CreateManagedObject<br/>UpdateManagedObject<br/>DeleteManagedObject|This group of events represents creation, modification or deletion of a single ManagedObject.|
|Events|EventCreated<br/>EventUpdated<br/>EventDeleted|CreateEvent<br/>UpdateEvent<br/>DeleteEvent|This group of events represents creation or deletion of a single Event.|
|Measurements|MeasurementCreated<br/>MeasurementDeleted|CreateMeasurement<br/>DeleteMeasurement|This group of events represents creation or deletion of a single Measurement.|
|Device control|OperationCreated<br/>OperationUpdated|CreateOperation<br/>UpdateOperation|This group of events represents creation or modification of a single Operation.|
|Alarms|AlarmCreated<br/>AlarmUpdated|CreateAlarm<br/>UpdateAlarm|This group of events represents creation or modification of a single Alarm.|
|Emails|*(not used)*|SendEmail<br/>SendDashboard|This group of events represents sending of an email.|
|SMS|*(not used)*|SendSms|This group of events represents sending of a SMS.|
|Text-to-speech|*(not used)*|SendSpeech|This group of events represents initializing of a phone call.|

Schauen Sie sich das Datenmodell an, um zu sehen, wie die Ereignisse für jeden Stream strukturiert sind.

### Erstellen von Ereignissen in einem Stream

Das Erstellen eines Ereignisses erfolgt durch die Schlüsselwörter "Einfügen" und "Auswählen". Zuerst müssen Sie das "Einfügen in" angeben, gefolgt von dem Stream-Namen, für welchen Stream Sie ein Ereignis erstellen möchten. Danach können Sie die "select" -Klausel verwenden, um die Parameter des Ereignisses anzugeben.
Ein Parameter wird durch die folgende Syntax angegeben: `value as parameter`. Sie können mehrere Parameter angeben, indem Sie sie durch Kommas trennen. Die Reihenfolge der Parameter spielt keine Rolle. Bitte beachten Sie, dass Streams obligatorische Parameter haben können, die Sie in der "select" -Klausel angeben müssen.

### Hören von Ereignissen in einem Stream

Der häufigste Weg, um die Erstellung eines Ereignisses in einem Stream auszulösen, ist, wenn etwas auf einem anderen Stream passiert. Sie können also Ereignisse aus anderen Streams hören. Dies geschieht durch das Schlüsselwort `from` gefolgt von dem Namen des Streams und (optional) gefolgt von einem Variablennamen, um das Ereignis in Ihrer Anweisung zu einem späteren Zeitpunkt zu verweisen.

## Bedingungen

Das Hinzufügen von Bedingungen kann mit dem Schlüsselwort "where" durchgeführt werden, um Ihre Ereigniserstellung für jedes eingehende Ereignis nicht auszulösen, sondern nur, wenn diese Bedingungen erfüllt sind. Auf das Wort "where" folgt ein Ausdruck, der entweder in true oder false resultiert. Sie können auch mehrere Ausdrücke mit `and` oder `or` verbunden haben.

## Beispiel

Als Beispiel erstellen wir eine Aussage. Es sollte auf einen Stream hören und ein neues Ereignis in einem anderen Stream erstellen, wenn die angegebene Bedingung gilt.
Als Beispiel wollen wir für jede angezeigte Temperaturmessung einen Alarm erzeugen.

1. Um einen Alarm zu erstellen, müssen wir `insert into` in den Stream `CreateAlarm` einfügen.
2. Wir müssen alle Parameter für das Ereignis in der `select`-Klausel angeben.
3. Wir wollen, dass der Alarm erzeugt wird, wenn ein Ereignis aus dem Stream "MeasurementCreated" empfangen wird.
4. Wir wollen, dass der Alarm nur unter bestimmten Bedingungen des Ereignisses aus dem `MeasurementCreated` Stream erzeugt wird, den wir in der` where`-Klausel angeben.

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
