---
order: 20
title: Datenmodell
layout: default
toc: true
---

## Input streams

### Generelle Struktur

Alle Eingangsstreams haben die gleiche Grundstruktur.

|Parameter|Data type|Beschreibung|
|:--|:----------|:-------------|
|_type|String|Typ des Ereignisses. Die Tabelle unterhalb zeigt, welcher Typ Wert in verschiedenen Streams genutzt werden kann.|
|_mode|String|Der Verarbeitungsmodus, in dem die Daten an Cumulocity gesendet wurden. Siehe [Processing mode](/guides/reference/rest-implementation#processing-mode)|
|_origin|String|Der Ursprung des Ereignisses. Wenn die Daten von einer CEP Regel erstellt wurden, dann ist ihr Ursprung  "cep".|
|payload|Object|Die tatsächlichen Daten in einem Ereigniss.|
Typen:

|Stream|Type|
|:--|:----------|
|ManagedObjectCreated|MANAGED_OBJECT_CREATE|
|ManagedObjectUpdated|MANAGED_OBJECT_UPDATE|
|ManagedObjectDeleted|MANAGED_OBJECT_DELETE|
|EventCreated|EVENT_CREATE|
|EventDeleted|EVENT_DELETE|
|MeasurementCreated|MEASUREMENT_CREATE|
|MeasurementDeleted|MEASUREMENT_DELETE|
|OperationCreated|OPERATION_CREATE|
|OperationUpdated|OPERATION_UPDATE|
|AlarmCreated|ALARM_CREATE|
|AlarmUpdated|ALARM_UPDATE|

Für einen einfacheren Zugriff können Sie die Nutzdaten direkt im Datentyp des jeweiligen Streams empfangen, indem Sie über einen API-spezifischen Parameter auf sie zugreifen:

|API|Parameter|Daten Typ|
|:--|:----------|:-------------|
|Inventory|managedObject|[ManagedObject](/guides/event-language/data-model#managedobject)|
|Events|event|[Event](/guides/event-language/data-model#event)|
|Measurements|measurement|[Measurement](/guides/event-language/data-model#measurement)|
|Device control|operation|[Operation](/guides/event-language/data-model#operation)|
|Alarms|alarm|[Alarm](/guides/event-language/data-model#alarm)|

### ManagedObject

class: com.cumulocity.model.ManagedObject

|Parameter|Data type|Beschreibung|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id)|ID des Objektes|
|type|String|Typ des ManagedObject|
|name|String|Name des ManagedObject|
|lastUpdated|Datum|Zeitpunkt zu welchem das ManagedObject aktualisiert wurde.|
|Besitzer|String|Besitzer des ManagedObject|
|KindAssets|Object[]|Aufreihung der [IDs](/guides/event-language/data-model#id) von allen Kind Assets|
|assetParents|Object[]|Aufreihung der [IDs](/guides/event-language/data-model#id) von allen Parent Assets|
|deviceParents|Object[]|Eine Aufreihung von [IDs](/guides/event-language/data-model#id) aller Kindassets|

Das Objekt [] für die Verweise auf die Eltern und Kinder enthält nur [IDs](/guides/event-language/data-model#id). Sie können die "cast" Funktion nutzen,z.B.
`cast(event.managedObject.childAssets[0], com.cumulocity.model.ID)`.

Beispiel:

    select
      event.managedObject.id,
      event.managedObject.type,
      event.managedObject.name,
      event.managedObject.lastUpdated,
      event.managedObject.owner,
      event.managedObject.childAssets,
      event.managedObject.childDevices,
      event.managedObject.assetParents,
      event.managedObject.deviceParents
    from ManagedObjectCreated event;

### Ereignis

class: com.cumulocity.model.event.Event

|Parameter|Daten Typ|Beschreibung|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id)|Die ID des Ereignisses|
|creationTime|Datum|Der Zeitpunkt, wann das Ereignis erstellt wurde.|
|type|String|Der Ereignis Typ|
|text|String|Der Ereignis Text|
|time|Date|Der Zeitpunkt, wann das Ereignis erstellt wurde. (vom Gerät vermeldet)|
|source|[ID](/guides/event-language/data-model#id)|Die ID des Gerätes, das das Ereignis erstellt hat|

Beispiel:

    select
      event.event.id,
      event.event.creationTime,
      event.event.type,
      event.event.text,
      event.event.time,
      event.event.source
    from EventCreated event;


### Messungen

class: com.cumulocity.model.measurement.Measurement

|Parameter|Daten Typ|Beschreibung|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id)|Die ID der Messung|
|type|String|Der Typ der Messung|
|time|Date|Der Zeitpunkt wann die Messung erstellt wurde (vom Gerät vermeldet)|
|source|[ID](/guides/event-language/data-model#id)|Die ID des Gerätes welches die Messung erstellt hat.|

Beispiel:

    select
      event.measurement.id,
      event.measurement.type,
      event.measurement.time,
      event.measurement.source
    from MeasurementCreated event;


### Vorgänge

class: com.cumulocity.model.operation.Operation

|Parameter|Daten Typ|Beschreibung|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id)|Die ID des Vorgangs.|
|creationTime|Date|Die Zeit, in der der Vorgang in der Datenbank erstellt wurde.|
|status|[OperationStatus](/guides/event-language/data-model#operationstatus)|Der Status des Vorgangs|
|deviceId|[ID](/guides/event-language/data-model#id)|Die ID des Gerätes, das den Vorgang ausführen soll|

Beispiel:

    select
      event.operation.id,
      event.operation.creationTime,
      event.operation.status,
      event.operation.deviceId
    from OperationCreated event;

### Alarme

class: com.cumulocity.model.event.Alarm

|Parameter|Daten Typ|Beschreibung|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id)|Die ID des Alarms|
|creationTime|Date|Der Zeitpunkt, der Erstellung in der Datenbank|
|type|String|Der Typ des Alarms|
|count|long|Die Anzahl der Alarme, die gemeldet wurden als der Alarm aktiv war.|
|severity|[Severity](/guides/event-language/data-model#severity)|Der Schweregrad des Alarms|
|status|[AlarmStatus](/guides/event-language/data-model#alarmstatus)|Der Status des Alarms|
|text|String|Der Text des Ereignisses|
|time|Date|Der Zeitpunkt, in der der Vorgang in der Datenbank erstellt wurde.|
|source|[ID](/guides/event-language/data-model#id)|Die ID des Gerätes, welches den Alarm erstellt hat.|

Beispiel:

    select
      event.alarm.id,
      event.alarm.creationTime,
      event.alarm.type,
      event.alarm.count,
      event.alarm.severity,
      event.alarm.status,
      event.alarm.text,
      event.alarm.time,
      event.alarm.source
    from AlarmCreated event;

## Ausgabe streams

### Generelle Struktur

Ausgabestreams enthalten die Möglichkeit, Daten in Cumulocity zu erstellen, zu aktualisieren und zu löschen.
Beim Aktualisieren oder Löschen von Daten ist es notwendig, die ID des Objekts anzugeben, das aktualisiert oder gelöscht wird.
Beim Erstellen von Daten erzeugt Cumulocity eine ID, wenn sie nicht in der Ereignisverarbeitung gesetzt ist. Die Erstellung von Daten erfordert auch bestimmte Parameter (wie bei unseren REST-APIs).
Zusätzlich zu den vordefinierten Parametern, die aufgeführt sind, ist es möglich, jedem benutzerdefinierten Fragment die Daten hinzuzufügen. Bitte werfen Sie einen Blick auf ----> dies <---- für das Hinzufügen von benutzerdefinierten Fragmenten.
Beachte:
Das Erstellen Ihrer eigenen ID funktioniert nur auf ManagedObjects.

### ManagedObjects

|Available outputs|
|:-|
|CreateManagedObject|
|UpdateManagedObject|
|DeleteManagedObject|

|Parameter|Daten Typ|Beschreibung|Zwingend notwendig|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id) or String|ID of the ManagedObject|UPDATE und LOESCHEN|
|type|String|Der Typ des ManagedObject|Nein|
|name|String|Der Name des ManagedObject|Nein|
|owner|String|Der Besitzer des ManagedObject. Wenn nicht von der Ereignisverarbeitung erstellt, haben Daten den Besitzer "cep".|Nein|
|KindAssets|Set&lt;String&gt; or Set&lt;[ID](/guides/event-language/data-model#id)&gt;|Verschiedene [IDs](/guides/event-language/data-model#id) von allen Kindassets|Nein|
|childDevices|Set&lt;String&gt; or Set&lt;[ID](/guides/event-language/data-model#id)&gt;|Verschiedene IDs[IDs](/guides/event-language/data-model#id) von allen KindGeräten|Nein|

Beispiel:

    insert into CreateManagedObject
    select
      "myManagedObject" as name,
      "myType" as type
    from EventCreated event;

    insert into UpdateManagedObject
    select
      "12345" as id,
      "myNewManagedObject" as name
    from EventCreated event;

    insert into DeleteManagedObject
    select
      "12345" as id
    from EventCreated event;


### Ereignisse

|Verfügbare Outputs|
|:----------------|
|CreateEvent|
|DeleteEvent|

|Parameter|Daten Typ|Beschreibung|zwingend notwendig|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id) or String|Die ID des Events|LOESCHEN|
|type|String|Der Typ des Events|ERSTELLEN|
|text|String|Der Text des Events|ERSTELLEN|
|time|Date|Der Zeitpunkt, wann der Event erstellt wurde. (vom Gerät erstellt)|ERSTELLEN|
|source|[ID](/guides/event-language/data-model#id) or String|Die ID des Gerätes, das den Zeitpunkt erstellt hat|ERSTELLEN|

Beispiel:

    insert into CreateEvent
    select
      "copiedEventType" as type,
      "This event was copied" as text,
      event.event.time as time,
      event.event.source as source
    from EventCreated event;

    insert into DeleteEvent
    select
      "12345" as id
    from EventCreated event;

### Measurements

|Verfügbare Outputs|
|:----------------|
|CreateMeasurement|
|DeleteMeasurement|

|Parameter|Daten Typ|Beschreibung|zwingend erforderlich|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id) or String|Die ID der Messung|LOESCHEN|
|Typ|String|Typ der Messung|ERSTELLEN|
|Zeit|Date|Zeitpunkt der Erstellung(vom Gerät erstellt)|ERSTELLEN|
|source|[ID](/guides/event-language/data-model#id) or String|Die ID des Gerätes welches die Messung vorgenommen hat.|ERSTELLEN|

Beispiel:

    insert into CreateMeasurement
    select
      "c8y_TemperatureMeasurement" as type,
      event.event.time as time,
      event.event.source as source,
      {
        "c8y_TemperatureMeasurement.T.value", 5
      } as fragments
    from EventCreated event;

    insert into DeleteMeasurement
    select
      "12345" as id
    from EventCreated event;

### Vorgänge

|Verfügbare Outputs|
|:----------------|
|CreateOperation|
|UpdateOperation|

|Parameter|Daten Typ|Beschreibung|zwingend erforderlich|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id) or String|Die ID des Vorgangs|UPDATE|
|status|[OperationStatus](/guides/event-language/data-model#operationstatus) oder String|Status des Vorgangs|ERSTELLEN|
|deviceId|[ID](/guides/event-language/data-model#id) or String|Die ID des Gerates, welches den Vorgang ausführen soll.|ERSTELLEN|

Beispiel:

    insert into CreateOperation
    select
      OperationStatus.PENDING as status,
      event.event.source as deviceId,
      {
        "c8y_Restart", {}
      } as fragments
    from EventCreated event;

    insert into UpdateOperation
    select
      "12345" as id,
      OperationStatus.EXECUTING as status
    from EventCreated event;

### Alarme

|Verfügbare outputs|
|:----------------|
|CreateAlarm|
|UpdateAlarm|

|Parameter|Daten Typ|Beschreibung|zwingend erforderlich|
|:--|:----------|:-------------|:----------|
|id|[ID](/guides/event-language/data-model#id) or String|Die ID des Alarms|UPDATE|
|type|String|Der Typ des Alarms|ERSTELLEN|
|severity|[Severity](/guides/event-language/data-model#severity) oder String|Der Schweregrad des Alarms|ERSTELLEN|
|status|[AlarmStatus](/guides/event-language/data-model#alarmstatus) oder String|Der Status des Alarms|ERSTELLEN|
|text|String|Der Text des Events|ERSTELLEN|
|time|Date|Zeitpunkt der Erstellung (vom Gerät geschickt)|ERSTELLEN|
|source|[ID](/guides/event-language/data-model#id) or String|Die ID des Gerätes, welches den Alarm erstellt hat.|ERSTELLEN|

Beispiel:

    insert into CreateAlarm
    select
      "c8y_HighTemperatureAlarm" as type,
      event.event.time as time,
      event.event.source as source,
      CumulocitySeverities.WARNING as severity,
      CumulocityAlarmStatuses.ACTIVE as status,
      "The device has high temperature" as text
    from EventCreated event;

    insert into UpdateAlarmn
    select
      "12345" as id,
      CumulocityAlarmStatuses.ACKNOWLEDGED as status
    from EventCreated event;

## Spezielle Streams

Die in diesem Abschnitt erwähnten Streams interagieren nicht mit der Cumulocity-Datenbank, sondern werden Anrufe zu externen Diensten erstellen.

### SendMail

|Parameter|Daten Typ|Beschreibung|zwingend erforderlich|
|:--|:----------|:-------------|:----------|
|receiver|String|Mail-Empfängeradresse|JA|
|cc|String|Mail-Empfängeradresse cc|NEIN|
|bcc|String|Mail-Empfängeradresse bcc|NEIN|
|replyTo|String|Mail-Rückantwortadresse|NEIN|
|subject|String|Titelzeile|JA|
|text|String|Body Text|JA|

Es ist möglich, mehr als eine Mail-Adresse in den Parametern Empfänger, cc und bcc zu haben. Erstellen Sie daher einen String, der alle durch Kommas getrennten Mail-Adressen enthält. "receiver1@mail.com,receiver2@mail.com".

Beispiel:

    insert into SendEmail
    select
      "receiver1@cumulocity.com,receiver2@cumulocity.com" as receiver,
      "cc@cumulocity.com" as cc,
      "bcc@cumulocity.com" as bcc,
      "reply@cumulocity.com" as replyTo,
      "Example mail" as subject,
      "This mail was sent to test the SendEmail stream in Cumulocity" as text
    from AlarmCreated;

### Dashboard versenden

|Parameter|Daten Typ|Beschreibung|zwingend erforderlich|
|:--|:----------|:-------------|:----------|
|receiver|String|Emailadresse des Empfängers|JA|
|cc|String|Die Emailadresse vom cc|NEIN|
|bcc|String|Die Emailadresse vom bcc|NEIN|
|replyTo|String|Mail-Rückantwortadresse|NEIN|
|subject|String|Titelzeile|JA|
|text|String|Body Text|NEIN|
|dashboardUrl|String|Die URL des Attachments|JA

Es ist möglich, mehr als eine Mail-Adresse in den Parametern Empfänger, cc und bcc zu haben. Erstellen Sie daher einen String, der alle durch Kommas getrennten Mail-Adressen enthält. "receiver1@mail.com,receiver2@mail.com".

_Note:_

Diese Funktion funktioniert nur, wenn der jeweilige serverseitige Agent zum Senden von Dashboards für Ihren Mandanten aktiviert ist. [How to activate this feature](http://www.cumulocity.com/guides/users-guide/administration/#settings)


Beispiel:

    insert into SendDashboard
    select
      "receiver1@cumulocity.com,receiver2@cumulocity.com" as receiver,
      "cc@cumulocity.com" as cc,
      "bcc@cumulocity.com" as bcc,
      "reply@cumulocity.com" as replyTo,
      "Example dashboard" as subject,
      "https://mytenant.cumulocity.com/apps/cockpit/index.html" as dashboardUrl,
      "This mail contains an attached screenshot of the home dashboard" as text
    from AlarmCreated;


### Sms versenden

|Parameter|Daten Typ|Beschreibung|zwingend erforderlich|
|:--|:----------|:-------------|:----------|
|receiver|String|Nummer des Empfängers|JA|
|text|String|Body Text sms. Max. 160 characters|JA|
|deviceId|String|Die Geräte ID des Erstellers der sms. Es wird ein Protokoll für das Gerät erstellt.|NEIN|

Es ist möglich, mehr als eine Telefonnummer im Parameter-Empfänger zu haben. Erstellen Sie daher einen String, der alle Telefonnummern enthält, die durch Kommas getrennt sind. "+49123456789,+49987654321".
Obwohl es technisch nicht von Cumulocity benötigt wird, empfehlen wir den Ländercode zu benutzen, weil das sms-Gateway es erfordern könnte. Sie können die Notation verwenden: "0049" or "+49" (for Germany).

_Note:_

Diese Funktion funktioniert nur, wenn Ihr Mandant mit einem SMS-Provider verknüpft ist. Für mehr Informationen, kontaktieren sie bitte [support](https://support.cumulocity.com).

Beispiel:

    insert into SendSms
    select
      "+49123456789" as receiver,
      "This sms was sent to test the SendSms stream in Cumulocity" as text,
      "12345" as deviceId
    from AlarmCreated;

### SendPush

Dieser Stream ermöglicht die Möglichkeit, Push-Meldungen von Cumulocity über den Telekom-Push-Service an mobile Anwendungen zu senden.

|Parameter|Daten Typ|Beschreibung|zwingend erforderlich|
|:--|:----------|:-------------|:----------|
|type|String|Push Provider Typ. Momentan nur TELEKOM |JA|
|message|String|Body Text push Nachricht.|JA|
|deviceId|String|Die Geräte ID des Erstellers der push Nachricht.|JA|

_Note:_

Diese Funktion funktioniert nur, wenn Ihr Mandant mit einem Push-Provider verbunden ist. Für mehr Informationen, kontaktieren sie bitte[support](https://support.cumulocity.com).

Beispiel:

    insert into SendPush
    select
    "TELEKOM" as type,
    "sample push message" as message,
    a.alarm.source.value as deviceId
    from AlarmCreated a;

### SendSpeech

|Parameter|Daten Typ|Beschreibung|zwingend erforderlich|
|:--|:----------|:-------------|:----------|
|phoneNumber|String|Fon Nummer des Empfängers|JA|
|textToSpeech|String|Inhalt der Nachricht als Text|JA|
|deviceId|String|Die ID des Gerätes, welches die Nachricht erstellt. Ein Protokoll wird für das Gerät erstellt.|JA|
|attempts|Long|Wie oft soll versucht werden den Empfänger zu erreichen (0 = kein extra Versuch)|JA|
|timeout|Long|Minuten zwischen Anwahlversuchen|JA|
|alarmId|String|Die ID des Gerätes , dass den Anruf veranlasst(zur Bestaetigung)|JA|
|questionText|String|Sicherheitsfrage fuer den Empfänger der Nachricht|NEIN|
|acknowledgeButton|Long|Tastenummer zur Bestätigung der Sicherheitsabfrage|NEIN|

_Note:_

Diese Funktion funktioniert nur, wenn Ihr Mieter mit einem Sprachanbieter verbunden ist. Für mehr Informationen, kontaktieren sie bitte [support](https://support.cumulocity.com).

Beispiel:

    insert into SendSpeech
    select
      "+4923456789" as phoneNumber,
      "Your device lost power connection." as textToSpeech,
      2 as attempts,
      5 as timeout,
      "12345" as deviceId,
      "67890" as alarmId,
      "To acknowledge this call please press button 5" as questionText,
      5 as acknowledgeButton
    from EventCreated e

## Additional data models

### ID

class: com.cumulocity.model.ID

|Parameter|Daten Typ|Beschreibung
|:--|:----------|:-------------|:----------|
|value|String|The actual ID value|
|type|String|The type of the ID|
|name|String|The name of the device (only if the ID refers to a device like in measurement.source)|

Beispiel:

    select
      event.measurement.source.value,
      event.measurement.source.type,
      event.measurement.source.name
    from MeasurementCreated event;


### OperationStatus

class: com.cumulocity.model.operation.OperationStatus

OperationStatus is an enum offering the following values:
`PENDING`, `SUCCESSFUL`, `FAILED`, `EXECUTING`

Beispiel:

    insert into UpdateOperation
    select
      event.operation.id.value as id,
      OperationStatus.FAILED as status
    from OperationCreated event;

### Schweregrad

class: com.cumulocity.model.event.Severity

Severity is the interface for the enum implementation CumulocitySeverities.
CumulocitySeverities offers the following values:
`CRITICAL`, `MAJOR`, `MINOR`, `WARNING`


Beispiel:

    insert into UpdateAlarm
    select
      event.alarm.id.value as id,
      CumulocitySeverities.MAJOR as severity
    from AlarmCreated event;

### AlarmStatus

class: com.cumulocity.model.event.AlarmStatus

AlarmStatus is the interface for the enum implementation CumulocityAlarmStatuses.
CumulocityAlarmStatuses offers the following values:
`ACTIVE`, `ACKNOWLEDGED`, `CLEARED`


Beispiel:

    insert into UpdateAlarm
    select
      event.alarm.id.value as id,
      CumulocityAlarmStatuses.ACKNOWLEDGED as status
    from AlarmCreated event;
