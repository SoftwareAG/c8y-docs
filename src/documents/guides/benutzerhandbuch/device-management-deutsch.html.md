---
order: 20
title: Device management
layout: default
---

## <a name="overview"></a>Übersicht

Die Device Management Anwendung zeigt Ihnen Ihre angeschlossenen Geräte an und ermöglicht Ihnen, ihren Status zu verwalten. Im Device Management haben Sie diese Optionen:

* [Verbinden](#device-registration) Sie neue Geräte mit Ihrem Konto und trennen Sie sie wieder.
* [Auflisten](#viewing-devices), [Suchen](#searching-devices) und [Gruppieren](#grouping-devices) von verbundenen Geräten.
* [Ansehen](#device-details) der Gerätedetails und Überprüfung des Status .
* Überwachen der [Verbindungsqualität](#connection-monitoring) und [Serviceüberwachung](#monitoring-services) der Geräte.
* Das [Lokalisieren](#map) von Geräten.
* Arbeiten mit [Warnungen](#alarm-monitoring) von Geräten.
* [Fernsteuerung](#operation-monitoring) von Geräten.
* [Troubleshoot](#events-all) von Geräten.
* [Verwalten](#software-repo) von Software und Firmware.
* [Verwalten](#credentials) der Zugangsdaten von Geräten.
* [Simulatoren](#simulators) von Geräten hinzufügen.

Diese Anwendung sieht so aus:

<center><img src="/guides/users-guide/appdeutsch.png" alt="Device Management" style="max-width: 100%">
</center>

**Die folgenden Abschnitte führen Sie durch die verschiedenen Menüs der Device Management-Anwendung.**

## <a name="device-registration"></a>Manuell Geräte verbinden

Dieser Abschnitt beschreibt die allgemeine Vorgehensweise beim manuellen Anschließen von Geräten an Ihr Cumulocity-Konto. Nur einige Schritte in der Prozedur können spezifisch für den Typ des Geräts sein, das Sie verwenden. Sie finden Ihren Gerätetyp im "Gerätehandbuch", der Startseite des Entwicklerbereichs unserer Website. Dort finden Sie genaue Informationen oder Sie konsultieren das Handbuch Ihres Geräts.

Um Geräte mit Ihrem Cumulocity-Konto zu verbinden, klicken Sie im Navigator auf "Geräteregistrierung" und folgen diesen Schritten:

1.  Geben Sie die ID des Gerätes im Textfeld "Gerätekennung" ein und klicken Sie auf "Gerät registrieren". Um die ID zu ermitteln, konsultieren Sie die Geräte-Dokumentation. Bei mobilen Geräten ist die ID in der Regel die IMEI (International Mobile Equipment Identity), die häufig auf der Rückseite des Geräts gefunden wird.
2.  Nun wird das aufgelistete Gerät durch seine IMEI-Nummer mit dem Status "Warten auf Verbindung" sichtbar. Schalten Sie das Gerät ein und warten Sie, bis eine Verbindung hergestellt ist.
3.  Nachdem das  Gerät  angeschlossen ist, sollte sich der Status in "Warten auf Bestätigung" ändern. Sie müssen bestätigen, dass dies tatsächlich das Gerät ist, das Sie hinzufügen möchten, indem Sie auf die grüne Schaltfläche "Akzeptieren" rechts neben dem Eintrag Ihres Geräts klicken.
4.  Der Status Ihres Geräts sollte nun "Verbunden" lauten. Sobald dies geschieht, wird Ihr Gerät mit Ihrem Konto verbunden.

Jetzt können Sie das Gerät verwalten.

<img src="/guides/users-guide/registrierung.png" alt="Device registration" style="max-width: 100%">

## <a name="creds-upload"></a>Gruppen Registrierung

Für den Anschluss vieler Geräte können Sie eine CSV-Datei mit den IDs und den Anmeldedaten hochladen. Beim Hochladen der CSV-Datei erstellt Cumulocity Benutzerkonten für jedes in der Datei aufgelistete Gerät. Geräte können dann sicher an Cumulocity angeschlossen werden, ohne einen manuelle "Geräteregistrierung",wie im vorherigen Abschnitt beschrieben, durchführen zu müssen.

Die CSV-Datei muss eine Kopfzeile haben, gefolgt von den tatsächlichen Daten. Die Kopfzeile muss mindestens eine Spalte mit der Bezeichnung "ID" und eine Spalte mit der Bezeichnung "Zugangsdaten" enthalten. Hier ein Beispiel für ein gültiges CSV-Format:

	ID;Credentials;Tenant;Group;ICCID;NAME
	006064ce800a;LF2PWJoLG1Fz;management;Sample_Düsseldorf;+491555555;Sample_Device1
	006064ce8077;OowoGKAbiNJs;management;Sample_Düsseldorf;+491555555;Sample_Device2

Verwenden Sie die Schaltfläche "Hochladen", um die CSV-Datei hochzuladen, wie im Screenshot unten gezeigt. Nachdem die Daten importiert wurden, erhalten Sie eine Rückmeldung über die Anzahl der vorregistrierten Geräte sowie über mögliche Fehler.

<img src="/guides/users-guide/autoregister.png" alt="Bulk registration" style="max-width: 100%">


Um die Geräte anzuschließen, müssen die Geräte mit entsprechenden Informationen vorbereitet werden. Insbesondere muss jedes Gerät wie folgt konfiguriert werden:

* Benutzername: Der Benutzername, der auf Cumulocity zugreift, muss die Form <mandant> / device_ <id> haben.
* Mandant bezieht sich auf den Mandanten in den die CSV-Datei importiert wird, und id bezieht sich auf den entsprechenden Wert in der CSV-Datei.
* Passwort: Das Passwort für den Zugriff auf Cumulocity, muss den "Zugangsdaten" in der CSV-Datei entsprechen.
* Gerät in der Objektdarstellung. Felder: "Typ", "Name", "Iccid", "Idtype", "Pfad", "Shell" in der CSV-Datei.

Wenn Sie eine Spezialisierte oder Private Cumulocity Edition besitzen, können Sie auch Geräte über mehrere Mandanten registrieren, indem Sie der Tabelle eine Spalte  mit "Mandanten" hinzufügen und die CSV-Datei aus der Mandantenverwaltung importieren.

Weitere Informationen zum Dateiformat und akzeptierten CSV-Varianten finden Sie unter
[Bulk device credentials](/guides/reference/device-credentials/#creds-upload).

## <a name="viewing-devices"></a>Anzeige der angeschlossenen Geräte

Um die angeschlossenen Geräte anzuzeigen, können Sie verschiedenen Werkzeuge nutzen.

* Wählen Sie "Alle Geräte", um alle angeschlossenen Geräte aufzulisten ( 1.000 Geräte / Seite).
* [Suchen](#searching-devices) nach Geräten mit dem Textfeld "Suchen".
* [Arrangieren](#grouping-devices) der Geräte in Gruppen und die Ansicht dieser Gruppen.

In jedem Fall sehen Sie eine Liste der Geräte, wie im folgenden Beispiel gezeigt. Die Liste besteht aus folgenden Spalten:

* Ein Symbol für den Verbindungsstatus wie in der "[Verbindungsüberwachung](#connection-monitoring)" beschrieben.
* Der Name des Geräts.
* Je nach Browserbreite, Modell und Seriennummer des Gerätes.
* Der Alarmstatus des Gerätes, wie viele kritische, Major-, Minor- oder Warnstufenalarme für das Gerät derzeit nicht gelöst sind. Siehe "[Alarme](#alarm-monitoring)" für weitere Informationen über das Arbeiten mit Alarmen.
* Eine Schaltfläche zum Löschen des Gerätes.

Das Löschen eines Geräts bedeutet, das Gerät aus der Cumulocity-Datenbank zu entfernen, einschließlich aller damit generierten Daten. Alternativ zum Löschen eines Gerätes können Sie auch alle ausgeschalteten Geräte in eine Gruppe organisieren. Dadurch wird sichergestellt, dass alle alten Berichte korrekt bleiben. Um zu verhindern, dass Alarme für die ausgeschalteten Geräte angeschaltet werden, deaktivieren Sie die [Verbindungsüberwachung] (#connection-monitoring). Beim Löschen eines Geräts werden die Daten seiner Kindgeräte nicht gelöscht.

<img src="/guides/users-guide/devicelist.png" alt="Device List" style="max-width: 100%">

Falls eine Liste mehr als 1.000 Einträge enthält, werden nur die ersten 1.000 Einträge angezeigt. Klicken Sie unten auf den Link "Laden", um die nächsten 1.000 Einträge zu laden.

## <a name="searching-devices"></a>Geräte suchen

Cumulocity enthält eine Volltextsuche nach Geräten. Durch Eingabe eines Suchbegriffs in das Textfeld "Suche ..." finden Sie alle Geräte, die diesen Begriff enthalten. Das folgende Bild zeigt ein Beispiel für die Suche nach Geräten, die den Begriff "Ublox C027" enthalten. Sie können nach beliebigen Texteigenschaften eines Geräts suchen. Präfixe werden ebenfalls unterstützt. Zum Beispiel würde eine Suche nach "Ublox" auch die Geräte mit "Ublox C027" zurückgeben. Suffixe werden derzeit nicht unterstützt. Zum Beispiel würde die Suche nach "C027" nicht die "Ublox C027" zurückgeben.

<img src="/guides/users-guide/suche.png" alt="Full Text Search" style="max-width: 100%">

Geräte können beliebig nach Ihrem Anwendungsfall gruppiert werden. Ein Gerät kann sich in mehreren Gruppen befinden und Gruppen selbst können wieder Teil von mehreren Gruppen sein.

Cumulocity unterscheidet zwischen Top-Level-Gruppen und Untergruppen. Top-Level-Gruppen werden im Navigator auf oberster Ebene im Abschnitt "Gruppen" angezeigt. Sie sind Ihr Haupteingangspunkt. Untergruppen werden verwendet, um Gruppen weiter zu unterteilen.

Um eine Top-Level-Gruppe zu erstellen, klicken Sie oben rechts neben dem Suchfeld auf die Kreuztaste und wählen dann "Neue Gruppe hinzufügen". Ein kleines Fenster erscheint. Geben Sie einen Gruppennamen ein und suchen Sie nach den gewünschten Geräten, die der Gruppe hinzugefügt werden sollen. Markieren Sie die Geräte und drücken Sie die Schaltfläche "Gruppe mit X Geräten erstellen", um den Vorgang abzuschließen. ( "X" ist die Anzahl der Geräte, die Sie markiert haben).
> Eine Gruppe kann auch "0" Geräte enthalten.

<img src="/guides/users-guide/gruppe2ger.png" alt="Adding top-level groups" style="max-width: 100%">

Sie können auch Geräte auf zwei andere Weisen hinzufügen: 

* Wählen Sie ein Gerät aus und scrollen Sie nach unten zum Abschnitt "Gruppen" auf der Registerkarte "Info". Verwenden Sie das Dropdown-Menü mit dem Namen "Gruppen auswählen und Suchen", um eine Gruppe auszuwählen, in die das Gerät eingefügt werden soll.
* Wählen Sie eine Gruppe aus und gehen Sie auf die Registerkarte "Kindgeräte" auf der linken Seite und wählen Sie sie aus. Klicken Sie dann rechts oben in der Gruppenliste auf "Zur Gruppe hinzufügen". Suchen Sie nach den Geräten, die im Suchfeld hinzugefügt werden sollen. Markieren Sie dann die entsprechenden Geräte im Ergebnis und klicken Sie auf die Schaltfläche "Zur Gruppe hinzufügen" am unteren Rand der Ergebnisliste.


<img src="/guides/users-guide/subassetadd.png" alt="Adding top-level groups" style="max-width: 100%">


Um eine Untergruppe zu erstellen, klicken Sie einfach auf "Gruppe hinzufügen", wenn Sie eine Gruppe ansehen.

Um eine Gruppe zu bearbeiten, klicken Sie auf den Namen der Gruppe. Auf diese Weise können Sie den Namen der Gruppe bearbeiten und Benutzerberechtigungen für die Gruppe zuweisen. Weitere Informationen zu Berechtigungen finden Sie unter[Administration](/guides/users-guide/administration) Handbuch.

## <a name="Using Smart Groups"></a>Dynamische Gruppen nutzen


Dynamische Gruppen sind Gruppen basierend auf Filterkriterien. Sie haben einen vorübergehenden Charakter, da sich die Anzahl der Mitglieder ständig verändern können. Diese Gruppen haben keine festen Mitgliederlisten, sondern bestimmte Auswahlkriterien stattdessen. Diese Art von Gruppe kann verwendet werden, für Bulk-Upgrades eines Gerätyps auf eine neue Software oder Firmware-Version.

<img src="/guides/users-guide/smartfilters.png" alt="Adding top-level groups" style="max-width: 100%">

Durch Auswahl von "Alle Geräte" können dynamische Gruppen angelegt werden. Um eine neue Gruppe zu erstellen, verwenden Sie einfach Filter, um Geräte auszuwählen. Klicken Sie nun auf "Dynamische Gruppe erstellen" und geben Sie der Gruppe einen Namen.

<img src="/guides/users-guide/smartgroup1.png" alt="Adding top-level groups" style="max-width: 100%">

Wenn die Gruppe erstellt wird, wird sie als Gruppe der obersten Ebene im Abschnitt "Gruppen" angezeigt. Sie können Filterkriterien anpassen, indem Sie einfach die Registerkarte "Kindassets" auswählen und die Filtereinstellungen ändern.

<img src="/guides/users-guide/smartgroup2.png" alt="Adding top-level groups" style="max-width: 100%">

Benutzer können auch dynamische Gruppen aus den Gruppen der obersten Ebene löschen. Dieser Vorgang ist irreversibel.


> Dynamische Gruppen können nicht in der Cockpit Anwendung genutzt werden.

<img src="/guides/users-guide/smartgroupdelete.png" alt="Adding top-level groups" style="max-width: 100%">

## <a name="device-details"></a>Anzeigen der Gerätedetails

Durch Anklicken eines Geräts in einer Geräteliste werden detaillierte Informationen zum Gerät angezeigt. Was tatsächlich angezeigt wird, hängt vom Gerätetyp und von der Konfiguration der Benutzeroberfläche ab. Wenn ein Gerät noch keine Messwerte gesendet hat, gibt es keine Registerkarte "Messung".

Am oberen Rand der Gerätedetails wird der Name des Gerätes angezeigt. Unterhalb des Namens wird eine Pfadnavigation angezeigt. Wenn das Gerät Teil einer Asset-Hierarchie (z. B. einer Gruppe) ist, können Sie mit der Pfadnavigation problemlos nach oben navigieren. Da Geräte Teil von mehreren Hierarchien sein können, können mehrere Reihen von Pfadnavigationen gezeigt werden.

Rechts neben dem Namen wird ein Zahnrad angezeigt. Wenn Sie auf das Zahnrad klicken, wird ein Dropdown-Menü mit weiteren Aktionen angezeigt, wie das Erstellen eines Dashboards für das Gerät.

Ist das Gerät kompatibel, steht über das Zahnrad ein Menüpunkt "Messwertabfrage starten" zur Verfügung. Mit dieser Option können Sie ein Gerät anfordern, um Messungen mit einer bestimmten Frequenz für eine bestimmte Dauer zu senden. Diese Art von Debugging vermeidet zu viel Datenverkehr, der durch das Senden von Messungen erzeugt wird.

<img src="/guides/users-guide/devicedetails.png" alt="Device details" style="max-width: 100%">

Die Gerätedetails sind in eine Anzahl von Registerkarten unterteilt. Die gängigsten Standard-Tabs sind:

* [Info](#info)
* [Kindgeräte](#child-devices)
* [Messungen](#measurements)
* [Alarme](#alarms)
* [Steuerung](#control)
* [Text Konfiguration](#config)
* [Binäre Konfiguration](#configsnap)
* [Software](#software)
* [Ereignisse](#events)
* [Ort](#location)
* [Shell](#shell)
* [Berechtigungen](#permissions)
* [Tracking](#tracking)
* [Serviceüberwachung](#service-monitoring)
* [Protokolle](#logs)
* [Identität](#identity)

### <a name="info"></a>Info

Auf der Registerkarte "Info" werden allgemeine Informationen für ein Gerät angezeigt (von oben links nach unten):

* **Verbindungsüberwachung**: Die Konfigurierung der Verbindungsüberwachung, wie beschrieben [hier](#connection-monitoring).
* **Name** und **Typ**: Der Anzeigename des zu editierenden Gerätes sowie eine Kennung für den jeweiligen Gerätetyp.
* **Hardware**: Hardwareinformationen vom Gerät gelesen.
* **Mobil**: Wenn das Gerät ein Modem enthält, werden hier die mobilen Netzwerkinformationen angezeigt. Sie sehen auch einen "Ortungs" -Link. Wenn genügend Informationen verfügbar sind, bestimmt "Ortung" die grobe Position des Geräts mithilfe der opencellid.org-Datenbank. Dies ist nicht immer erfolgreich und hängt von dem Format ab, das das angeschlossene Mobilfunknetz verwendet, um seine Daten an das Modem zu melden.
* **Gruppen**: Die Gruppen, zu denen dieses Gerät gehört. Hier können Sie Gruppen hinzufügen und entfernen. Weitere Informationen finden Sie unter "[Gruppieren der Geräte](#grouping-devices)".
* **System**: Dieser Abschnitt zeigt die interne ID des Geräts (für den Zugriff aus den Cumulocity-APIs).
 * Der "Besitzer" des Geräts (der Cumulocity-Benutzer, der dieses Gerät erstellt hat).
 * Der Zeitstempel, als die Gerätedaten zuletzt aktualisiert wurden.
 * Eine Schaltfläche zum Trennen des Geräts, vorausgesetzt, Sie verfügen über Administratorzugriff auf Benutzer und das Gerät wurde über die Funktion "[Geräteregistrierung] (#device-registration)" verbunden.
* **Notizen**: Textnotizen für ein Gerät, die Sie mit Ihren Kollegen teilen können.

Viele andere Felder auf dieser Registerkarte sind editierbar. Es ist nur sinnvoll, sie zu bearbeiten, wenn das Gerät diese Informationen nicht selbst bereitstellt. Wenn das Gerät diese Informationen bereitstellt, werden Ihre Änderungen durch eingehende Informationen vom Gerät überschrieben. Um Ihre Änderungen zu speichern, klicken Sie auf die Schaltfläche "Änderungen speichern" am unteren Rand des Bildschirms.

> "Letzte Kommunikation" und "Letzte Aktualisierung" sind zwei völlig unterschiedliche Zeitstempel. "Letzte Kommunikation" zeigt an, wann ein Gerät zuletzt gesendet hat. "Letzte Aktualisierung" zeigt an, wann der Inventareintrag des Geräts zuletzt aktualisiert wurde. Dieses Update kann vom Gerät, von der Webbenutzeroberfläche oder von einer anderen Anwendung stammen.

### <a name="child-devices"></a>Kindgeräte
Auf dieser Registerkarte werden weitere Geräte angezeigt, die mit dem aktuell angezeigten Gerät verbunden sind. Wenn Sie zum Beispiel ein Gateway betrachten, werden auf der Registerkarte alle mit dem Gateway verbundenen Geräte aufgelistet.

### <a name="measurements"></a>Messungen

Diese Registerkarte bietet eine Standard-Visualisierung von numerischen Daten, die vom Gerät in Form von Diagrammen zur Verfügung gestellt werden. Diagramme werden in Arten von Messungen zusammengestellt, die mehrere Graphen oder eine "Serie" enthalten können. Zum Beispiel zeigt der Screenshot unten ein Diagramm für die Bewegungsmessung einschließlich Graphen für die Beschleunigung in den drei Dimensionen und ein Diagramm mit Modemstatistiken in Form von Signalstärke und Bitfehlerrate.

![Measurements](/guides/users-guide/measurements.png)

Wenn ein Diagramm Graphen mit verschiedenen Einheiten enthält, wird eine Y-Achse pro Einheit wiedergegeben. Beispielsweise bestehen Bewegungsmessungen aus drei Parametern mit Einheit "Meter pro Quadrat-Sekunde"; So dass nur eine Achse gerendert wird. Die Modemstatistik besteht aus der Signalstärke in Dezibel Milliwatt und der Bitfehlerrate in Prozent, so dass für jedes Diagramm eine Achse dargestellt wird.

Um detaillierte Informationen zu den gemessenen Werten zu erhalten, bewegen Sie den Mauszeiger über das Diagramm. Eine Tooltip wird mit detaillierten Informationen über die Messung nahe am Cursor angezeigt. (Die Tooltip wird auf die nächste Messung "springen".)

**Zeitbereiche und Messungen**

Standardmäßig zeigen Diagramme die Rohdaten der letzten Stunde an. Sie können den Zeitbereich auf der X-Achse ändern, indem Sie auf das Drop-down-Menü "Letzte Stunde" klicken.

Wenn Sie den Zeitbereich erhöhen, wird das Dropdown-Menü "Keine Aggregation" auf "Stündlich" oder "Täglich" umschalten. Das Diagramm zeigt nun Bereiche statt einzelnen Rohdatenpunkten an. Für "Stündlich" zeigt das Diagramm einen Bereich des minimalen und maximalen Wertes, der in einer Stunde gemessen wird. Für "Täglich" zeigt das Diagramm den über einen Tag gemessenen Mindest- und Höchstwert an. Ebenso zeigen die Tooltips nun Wertebereiche statt einzelner Werte an.

So erhalten Sie einen effizienten Überblick über größere Zeiträume. Ein Graph zeigt nur maximal 5.000 Datenpunkte pro Grafikmaximum an, um Ihren Desktop-Browser nicht zu überladen. Wenn Sie einen feinen Fokus auswählen, der zu mehr als 5.000 Datenpunkten führt, wird eine Warnmeldung angezeigt: "Die Daten wurden abgeschnitten. Verwenden Sie die Aggregation."

Wenn Sie auf die Schaltfläche "Echtzeit" klicken, werden Echtzeit-Benutzeroberflächen-Updates der Graphen ermöglicht, sobald neue Daten in das System von den angeschlossenen Geräten fließen. Sie können die grafischen Anzeige- und Achsengrenzen beeinflussen, indem Sie so genannte "KPIs" einrichten . Mehr hierzu im [Administration](/guides/users-guide/administration#kpis) Handbuch.

Wichtig: Um Messkurven zu sehen, muss das Gerät Messungen in einem vorgegebenen Fragmentformat senden.

"fragment_name" : {
	"serie_name" : {
		"value" : ...
		"unit" : ...
	}
}

Real example: 

"c8y_SpeedMeasurement": {
      "Speed": { "value": 1234, "unit": "km/h" }
}

Fragment_name and serie_name can be replaced by different valid json property name, but that name cannot contain whitespaces and special characters like [],*. The structure has to be exactly as above, two-level deep json object.

### <a name="alarms"></a>Alarme

Die Registerkarte "Alarme" zeigt die Alarme eines Gerätes an. Weitere Informationen finden Sie im Abschnitt "[Arbeiten mit Alarmen] (#alarm-monitoring)".

### <a name="control"></a>Steuerung

Auf dieser Registerkarte werden die Vorgänge aufgeführt, die an ein Gerät gesendet werden oder an ein Gerät gesendet wurden. Weitere Informationen finden Sie im Abschnitt  "[Arbeiten mit Operationen](#operation-monitoring)" 
![Operations](/guides/users-guide/operations.png)

### <a name="config"></a> Text Konfiguration

In der Textkonfiguration können Sie die Parameter und Anfangseinstellungen Ihres Geräts konfigurieren. Sie können eine Gerätekonfiguration manuell hinzufügen oder bearbeiten.

<img src="/guides/users-guide/textconfig.png" alt="Device details" style="max-width: 100%">

### Hinzufügen oder Bearbeiten einer Gerätekonfiguration

So können Sie eine Gerätekonfiguration manuell hinzufügen oder bearbeiten:

- Navigieren Sie zu Ihrem gewünschten Gerät.
- Klicken Sie auf die Registerkarte "Konfiguration".
- Unter "Konfiguration" können Sie die Gerätekonfiguration beliebig hinzufügen oder bearbeiten.
- Wenn Sie fertig sind, klicken Sie auf "Speichern".

### <a name="configsnap"></a>Binäre Konfiguration  


Die binäre Konfiguration erlaubt Ihnen, Konfigurationsdaten abzurufen, zu ändern oder zu speichern. Die Konfigurationsdaten enthalten die Parameter und die Grundeinstellungen Ihres Gerätes.
Diese Option finden Sie hier:

<center><img src="/guides/users-guide/configrepscreenshot.png" alt="Device details" style="max-width: 100%"></center>

Ein gutes Anwendungsbeispiel für den Konfigurations-Snapshot ist, wenn die gleiche Konfiguration auf mehrere Geräte angewendet wird. Mit dem Konfigurations-Snapshot können Sie ein Gerät konfigurieren, den Snapshot herunterladen und auf andere Geräte übertragen.

![Configuration Snapshot](/guides/users-guide/configsnap.png)

### Abrufen einer aktuellen Snapshot-Konfiguration von einem Gerät

Um einen aktuellen Snapshot von einem Gerät abzurufen, navigieren Sie zum Gerät und klicken dann auf die Registerkarte "Konfiguration". Klicken Sie dann in der rechten oberen Ecke auf "Neuen Schnappschuss vom Gerät holen". Der abgerufene Snapshot befindet sich im "Konfigurations- repository".

Das "Konfigurations Repository" befindet sich unter dem  "Management" Menü. 

![Retrieve Configuration Snapshot](/guides/users-guide/retrievesnap.png)

### Die Snapshot-Konfiguration auf ein Gerät anwenden

Um einen neuen Schnappschuss anzuwenden, navigieren Sie zu einem Gerät und klicken Sie dann auf "Konfiguration". Unter "Konfigurations-Snapshot" können Sie einen Konfigurations-Repository-Eintrag aus dem Dropdown-Menü auswählen. Wenn die Eingabedatei ausgewählt ist, klicken Sie auf "Neue Snapshot auf das Gerät legen".

![Apply new snapshot to a device](/guides/users-guide/addsnap.png)

### Anwenden einer Snapshot-Konfiguration von einem Gerät auf ein anderes Gerät
 

- Navigieren Sie zur Konfiguration des Geräts, das die gewünschte Konfiguration hat.
- Holen Sie den aktuellen Snapshot vom Gerät ab, indem Sie auf "Neuen Snapshot vom Gerät holen" klicken.
- Navigieren Sie zum Konfigurationsregister des anderen Geräts, wählen Sie im Dropdown-Menü den neuen Snapshot aus und klicken Sie auf "Neuen Snapshot auf das Gerät legen".
 
> Wenn Sie die Snapshot-Konfiguration von einem Gerät auf ein anderes anwenden, kann die Konfiguration Daten enthalten, die gerätespezifisch sind.
 
### Erstellen einer Snapshot-Konfiguration aus einer Datei

Neue Konfigurationen können der Liste "Konfigurationsschnappschüsse" hinzugefügt werden, indem Sie auf "Konfigurationsschnappschuss hinzufügen" klicken. Anschließend werden Sie zum "Configuration repository" umgeleitet. Alle Gerätekonfigurationen befinden sich im "Configuration Repository", das sich unter dem Menüpunkt "Management" befindet. So fügen Sie einen neuen Snapshot hinzu:

- Name eingeben".
- Geben Sie "Beschreibung" ein.
- Schreiben Sie den "Gerätetyp", der sich auf der Registerkarte "Info" des Zielgerätes befindet.
- Fügen Sie die "Konfigurations-Snapshot-Datei", indem Sie entweder "Upload" oder "Datei wählen".
- Wenn Sie fertig sind, klicken Sie auf "Speichern".

![Configuration Snapshot Repository](/guides/users-guide/configsnaprepo.png)

### <a name="software"></a>Software

Auf dieser Registerkarte können Sie die Firmware eines Geräts und die auf einem Gerät installierte Software verwalten und aktualisieren. Um eine neue Firmware zu installieren, klicken Sie auf "Firmware installieren", wählen Sie im Firmware-Repository [software repository](#software-repo) ein Firmware-Image und klicken Sie auf die Schaltfläche "Installieren".

Um eine Software auf dem Gerät zu installieren, klicken Sie auf "Software installieren", wählen Sie ein Softwarepaket aus dem Software-Repository aus und klicken Sie auf die Schaltfläche "Installieren". Hover über ein bestimmtes Softwarepaket und klicken Sie auf die Schaltfläche "x", um das Paket aus dem Gerät zu entfernen.

![Software](/guides/users-guide/software.png)

Die Installation von Software und Firmware beinhaltet in der Regel einen Neustart des Geräts. Um den Fortschritt einer Installation zu überwachen, besuchen Sie die Registerkarte "Control".

### <a name="events"></a>Ereignisse

Diese Registerkarte ermöglicht die Fehlersuche auf niedriger Ebene eines Geräts "[Troubleshooting Geräte](#events-all)".

### <a name="location"></a>Standort

Die Registerkarte "Standort" zeigt standardmäßig den Standort an, den das Gerät auf einer Karte gemeldet hat. Bei Geräten, die keinen Standort melden, können Sie den Standort auch manuell einstellen. Einfach den "Stift" an der richtigen Stelle auf der angezeigten Karte platzieren.

Die Registerkarte zeigt an, wenn ein Gerät die Eigenschaft c8y_Position enthält. Wenn Sie ein neues c8y-Positionsereignis senden, können Sie auch das gleiche Fragment c8y_Position auf dem Gerät setzen und es wird automatisch die Position auf der Karte markieren.

### <a name="shell"></a>Shell

Die Geräte-Shell ermöglicht interaktives Arbeiten mit entfernten Geräten. Viele industrielle Geräte unterstützen eine Form der Befehlssprache, seien es AT-Befehle für Modems, CSV-Befehle für viele Tracking-Geräte oder aufwändige Scripting-Mechanismen wie Tixi TiXML. In der Shell können Sie Befehle in der jeweiligen Sprache des Gerätes senden und interaktiv die Ergebnisse der Befehle anzeigen.

Die Shell-Benutzeroberfläche ist in zwei Teile aufgeteilt:

* Eine Liste der bereits ausgeführten Kommandos. Standardmäßig sind die letzten drei Befehle sichtbar.
* Eine Eingabeaufforderung zur Eingabe neuer Befehle, die zur Liste hinzugefügt werden.
Die Liste zeigt Status, Datum und Text eines Befehls an. Wenn Sie auf einen Listeneintrag klicken, wird das Ergebnis des Befehls angezeigt (sofern er ausgeführt wurde).

![Device shell](/guides/users-guide/shell.png)

In der Eingabeaufforderung können Sie beliebigen Befehlstext eingeben. Um den Befehlstext an das Gerät zu senden, klicken Sie auf die Schaltfläche "Ausführen". Die Schaltfläche "Ausführen" kann nur gewählt werden, wenn das Gerät verbunden ist.

Um Ihnen mit der Befehlssyntax zu helfen, sind häufig verwendete Befehle für einige Geräte verfügbar, indem Sie auf die Schaltfläche "Vordefiniert erhalten" klicken. Wählen Sie einen Befehl aus und klicken Sie auf "Use", um den Befehl an die Eingabeaufforderung zu kopieren, oder wählen Sie "Execute", um den Befehl sofort auszuführen.

![Shell commands](/guides/users-guide/shelltemplates.png)

### <a name="permissions"></a>Berechtigungen

Die Fähigkeit, bestimmte Geräte anzuzeigen, zu bearbeiten oder zu steuern, kann auf Benutzer und Benutzergruppen beschränkt werden. Weitere Informationen zum Verwalten von Berechtigungen finden Sie im Handbuch [Administration] (/ guides / users-guide / administration). Verwenden Sie den Anwendungs-Switcher, um zur Administrationsanwendung zu wechseln.

### <a name="tracking"></a>Tracking

Geräte können die Geschichte ihrer Bewegungen in Cumulocity aufzeichnen. Über die Registerkarte "Tracking" können Sie einen Zeitraum auswählen und die Bewegungen des Geräts während dieses Zeitraums visualisieren. Bewegungen werden als rote Linien auf der Karte angezeigt.

Neben der Karte werden die einzelnen Aufzeichnungen mit ihrer Zeit aufgelistet ( "Standort Update Ereignis"). Wenn Sie auf eine Aufnahme klicken, zeigt ein "Pin" auf der Karte den Speicherort zum Zeitpunkt der Aufnahme an.

Die Registerkarte Tracking wird angezeigt, wenn das Gerät eine  "c8y_Position property" enthält.

![Tracking](/guides/users-guide/tracking.png)

Geräte können die Geschichte ihrer Bewegungen in Cumulocity aufzeichnen. Über die Registerkarte "Tracking" können Sie einen Zeitraum auswählen und die Bewegungen des Geräts während dieses Zeitraums visualisieren. Bewegungen werden als rote Linien auf der Karte angezeigt.

Neben der Karte werden die einzelnen Aufzeichnungen mit ihrer Zeit aufgelistet ( "Standort Update Ereignis"). Wenn Sie auf eine Aufnahme klicken, zeigt ein "Pin" auf der Karte den Speicherort zum Zeitpunkt der Aufnahme an.

Die Registerkarte Tracking wird angezeigt, wenn das Gerät eine  "c8y_Position property" enthält.

### <a name="service-monitoring"></a>Serviceüberwachung
Neben der Verbindungsüberwachung verfügt Cumulocity über eine separate Serviceüberwachung für Maschinen. Weitere Informationen finden Sie unter "[Service-Überwachung](#monitoring-services)".

### <a name="logs"></a>Protokolle

Über das Register "Protokolle" können Sie Protokollinformationen von Geräten anfordern. Protokollinformationen können nach Datumsbereichen, Art des Protokolls, Schlüsselwörtern und der maximalen Anzahl der zu übertragenden Zeilen gefiltert werden.

Um ein Protokoll von einem Gerät anzufordern,
hat man folgende Optionen:

- Wählen Sie den Datums- und Zeitbereich aus.
- Wählen Sie die Art des Protokolls. Die unterstützten Protokolle sind meist gerätespezifisch.
- Geben Sie einen optionalen Text ein, um das Protokoll zu filtern. Wenn Sie beispielsweise "Benutzer" eingeben, werden nur Zeilen mit dem Wort "Benutzer" in den zurückgegebenen Protokollinformationen angezeigt.
- Wählen Sie die maximale Anzahl der anzuzeigenden Zeilen (absteigend) aus.
- Klicken Sie auf "Protokoll anfordern".
- 
![Request log](/guides/users-guide/requestlog.png)

Das Anfordern eines Protokolls von einem Gerät kann einige Zeit in Anspruch nehmen. Nachdem das Protokoll vom Cumulocity-Gerät übertragen wurde, erscheint es in der Liste unterhalb der Auswahl-Widgets. Der Eintrag in der Liste enthält den Protokollzeitbereich, der abgefragt wurde. Klicken Sie auf den Eintrag in der Liste, um das Protokoll auf der Seite anzuzeigen. Bewegen Sie den Mauszeiger über den Eintrag, um auf die Download- und Löschsymbole zuzugreifen. Mit dem Download-Symbol können Sie den Log-Auszug auf Ihren lokalen PC herunterladen. Mit dem Löschsymbol können Sie die Protokolldatei löschen.

### <a name="identity"></a>Identität

Schließlich kann Cumulocity Geräte und Assets mit mehreren externen Identitäten assoziieren. Beispielsweise können Geräte häufig durch die IMEI ihres Modems, durch eine Mikrocontroller-Seriennummer sowie durch einen Asset-Tag identifiziert werden. Diese Registerkarte listet alle Identitäten auf, die für ein bestimmtes Gerät aufgezeichnet wurden.

Dies ist nützlich, wenn Sie nicht funktionsfähige Hardware haben und die Hardware ersetzen müssen, ohne die aufgezeichneten Daten zu verlieren. Schließen Sie einfach die neue Hardware an Ihr Konto an und ändern Sie den Identitätseintrag der alten Hardware, um die Identität der neuen Hardware zu erhalten.


## <a name="connection-monitoring"></a>Verbindungsüberwachung

Cumulocity kann die Verbindung zu Ihren Geräten automatisch überwachen. Wenn die Verbindung zu einem Gerät überwacht werden soll, besuchen Sie die Registerkarte "Info" des Geräts. Aktivieren Sie auf dieser Registerkarte das Feld "Erforderliches Intervall" oben. In diesem Feld wird festgelegt, wie oft Sie vom Gerät hören möchten. Wenn Sie beispielsweise "Erforderliches Intervall" auf 60 setzen, erwarten Sie, dass das Gerät mindestens einmal in einer Stunde mit Cumulocity kommuniziert. Das Intervall wird entweder vom Gerät selbst eingestellt, basierend auf dem Wissen des Geräts, wie oft es versucht, Daten zu senden, oder es wird von Ihnen manuell gesetzt.

Die verschiedenen Anschlusszustände sind auf dem Bild unten dargestellt. Der obere Pfeil repräsentiert Verkehr vom Gerät zu Cumulocity. Es kann grün, rot oder grau sein. Grün bedeutet, dass Daten innerhalb des erforderlichen Intervalls gesendet wurden. Rot bedeutet, dass es nicht innerhalb des erforderlichen Intervalls gesendet wurde. Grau bedeutet, dass kein erforderliches Intervall konfiguriert ist.

Der untere Pfeil zeigt den Status der Push-Verbindung an, über die Befehle von Cumulocity an das Gerät gesendet werden (eine Verbindung zu / devicecon- trol / notifications API, nicht zur Echtzeit-API). Es kann entweder grün oder grau sein. Grün bedeutet, dass die Verbindung hergestellt ist. Grau bedeutet, dass die Verbindung nicht hergestellt ist. Im Falle eines grauen Pfeils unterstützt das Gerät keine Pushverbindungen, oder es liegt ein Fehler vor.

"Wartungsmodus" ist ein spezieller Verbindungsstatus, der anzeigt, dass das Gerät aktuell gewartet wird und nicht überwacht werden soll. Während ein Gerät gepflegt wird, werden keine Alarme für dieses Gerät ausgelöst. Sie können den Wartungsmodus aktivieren, indem Sie das erforderliche Intervall auf einen negativen Wert setzen.

<center><img src="/guides/users-guide/verbcontr1.png" alt="Device details" style="max-width: 100%"></center>


> Die Verbindungsüberwachung ist nicht in Echtzeit. Beispielsweise ändert sich der Zustand der Verbindung nicht sofort, wenn Sie ein Gerät ausschalten. Abhängig von Ihrem Netzwerk kann es ungefähr 20 Minuten dauern, bis eine defekte Verbindung entdeckt wird, da das Netzwerk das Senden von Daten für eine signifikante Zeitspanne wiederholt.

Wenn ein Gerät als offline erkannt wird (stoppt das Senden von Daten innerhalb des erforderlichen Intervalls und der obere Pfeil wechselt zu der roten Farbe), wird ein Nichtverfügbarkeitsalarm für das Gerät erzeugt. "Keine Kommunikation mit dem Gerät seit <Zeit>."

## <a name="monitoring-services"></a>Serviceüberwachung

Cumulocity unterscheidet zwischen der Verbindungsüberwachung und der Serviceüberwachung. Die Verbindungsüberwachung zeigt nur an, dass das Gerät mit Cumulocity kommuniziert, es bedeutet nicht automatisch, dass es richtig funktioniert.

Die Serviceüberwachung zeigt an, ob das Gerät in Betrieb ist. Zum Beispiel ist ein Verkaufsautomat in Betrieb, wenn er bereit ist, Waren zu verkaufen. Ein Verkaufsautomat kann Waren mit Bargeld zu verkaufen, ohne eine Verbindung zu Cumulocity. Aus der Perspektive eines Kaufmanns, ist es im Dienst. Ähnlich, wenn Sie die Stromversorgung eines Gateways ausschalten, können die Geräte hinter dem Gateway weiterhin funktionieren.

Cumulocity ist der Auffassung, dass ein Gerät in Betrieb ist, solange kein kritischer, nicht aufgelöster Alarm für die Maschine vorhanden ist. Dies wird als Zeitanteil angezeigt, wenn ein solcher Alarm vorliegt. Wenn eine Maschine keine kritischen Alarme irgendwann während eines Zeitraums hatte, war sie 100% im Service. Wenn die Hälfte der Zeit gab es einige kritische, ungelöste Alarm war die Maschine 50% im Service.

![Service monitoring](/guides/users-guide/servicemonitoring.png)

Während ein Gerät offline ist, nimmt Cumulocity standardmäßig an, dass das Gerät weiterhin im Dienst bleibt, wie es war, bevor es die Verbindung verloren hatte. Wenn es zuvor nicht in Betrieb war, geht Cumulocity davon aus, dass das Gerät während eines Verbindungsausfalls außer Betrieb ist.

Es kann Ausnahmen von dieser Regel geben. Wenn Ihre Verkaufsautomaten ausschließlich auf bargeldloser Zahlung angewiesen sind und die Verbindung zum Netzwerk verlieren, bedeutet das das die Automaten außer Betrieb sind und aufhören zu verkaufen. In diesem Fall müssen Nichtverfügbarkeitsalarme auf "kritische" Priorität statt "Major" Priorität gesetzt werden.[Administration application](/guides/users-guide/administration#alarm-mapping).

Cumulocity kann die Verfügbarkeit der Dienste auf der Ebene einzelner Geräte oder über alle Geräte anzeigen. Wenn Sie im Navigator "Service Monitoring" wählen, wird der gesamte Service über alle Geräte angezeigt. Auf dieser Seite sehen Sie auch ein Histogramm, wie viele Geräte im vergangenen Monat wann verfügbar waren (siehe obigen Screenshot).

## <a name="map"></a>Der Standort von Geräten

Wenn Sie im Navigator auf "Karte" klicken, wird eine Karte aller Geräte in Ihrem Konto angezeigt. Geräte werden als "Pins" angezeigt, mit denen Sie auf den Namen des Geräts klicken können. Wenn Sie auf den Namen des Geräts klicken, gelangen Sie in die Detailansicht des Geräts. Durch Anklicken des Kontrollkästchens "Realtime" wird die Karte automatisch aktualisiert, sobald sich Geräte bewegen.

## <a name="alarm-monitoring"></a>Arbeiten mit Alarmen

Geräte können Alarme auslösen, um anzuzeigen, dass ein Problem vorliegt und eine Intervention erforderlich ist.Alarme können an verschiedenen Orten betrachtet werden:

* Durch Klicken auf "Nur ungelöst" im Register "Alarme" sehen Sie Alarme aller Geräte, die noch nicht gelöscht wurden.
* Durch Klicken auf "Alarme" im Navigator wird der gesamte Alarmverlauf angezeigt.
* Durch Klicken auf ein Gerät und Auswählen der Registerkarte "Alarme", um die Alarme des Geräts zu sehen. Standardmäßig werden nur ungelöste Alarme angezeigt, aber Sie können das "Nur ungelöste" Kontrollkästchen deaktivieren, um alle Alarme anzuzeigen.

Die Alarmanzeige ist in vier Abschnitte unterteilt, die Alarme unterschiedlicher Prioritäten separat auflisten. In jedem Abschnitt wird zuerst der letzte Alarm angezeigt. Das folgende Bild zeigt die Detailanzeige eines Alarms nach dem Anklicken. Die Detailansicht enthält folgende Elemente:

* **Alarm Schweregrad**: Die Schweregrade hierbei sind:
 * **Kritisch**: Sofortiges Eingreifen erforderlich.
 * **Major**: Es gibt ein Problem, welches Aufmerksamkeit erfordert.
 * **Minor**: Ein kleineres Problem ist aufgetreten
 * **Warnung**: Das ist eine Warnung.
* **Status**: Der Status der Alarme. Das kann sein:
*  * **Aktiv**: Wenn der Alarm beginnt und noch niemand daran arbeitet.
 * **Zur Kenntnis genommen**: Wenn jemand die "Zur Kenntnis genommen" Schaltfläche aktiviert hat.
 * **Aufgelöst**: Wenn entweder jemand auf die Schaltfläche "Löschen" geklickt hat, um einen Alarm manuell zu löschen, oder wenn das Gerät selbst feststellt, dass das Problem entfernt wurde.
* **Anzahl**: Die Häufigkeit, mit der dieser Alarm vom Gerät gesendet wurde. Cumulocity dupliziert Alarme, so dass nur ein Alarm eines bestimmten Typs für ein bestimmtes Gerät aktiv sein kann. Wenn ein anderer Alarm des gleichen Typs durch das Gerät gesendet wird, wird die Anzahl erhöht.
* **Beschreibung**: Eine Textbeschreibung des Alarms.
* **Gerät**: Der Name des Geräts. Durch Klicken auf den Namen gelangen Sie in die Detailansicht des Geräts.
* **Datum erstellt**: Der Zeitstempel, als der Alarm zuerst erstellt wurde.
* **Typ**: Die Art des Alarms. Dieser Text dient zum Duplizieren von Alarmen und zum Konfigurieren der Priorität von Alarmen in der [Administration application](/guides/users-guide/administration#alarm-mapping).
* **Zusätzliche Information**: Ein Alarm kann beliebige zusätzliche Informationen enthalten, die vom Gerät bereitgestellt werden.
* **Audit Protokolle**: Zusammen mit dem Alarm wird ein Protokoll der Änderungen des Alarms gespeichert. Dadurch wird ein Alarmverlauf mit verschiedenen Daten erzeugt.

![Alarm display](/guides/users-guide/alarme.png)

## <a name="operation-monitoring"></a>Arbeiten mit Fernsteuerung

Vorgänge werden für ferngesteuerte Geräte verwendet. Sie können im Navigator auf das Menü "Gerätesteuerung" klicken, um alle Vorgänge anzuzeigen, die an ein Gerät gesendet wurden und noch in der Warteschlange stehen, um an ein Gerät gesendet zu werden. Ähnlich können Sie die Registerkarte "Steuerung" eines bestimmten Geräts auswählen, um die Vorgänge dieses Geräts anzuzeigen.

Vorgänge können sich in diesen Ausführungszuständen befinden:

* **Ausstehend**: Der Vorgang wurde gerade erstellt und wartet darauf, dass das Gerät den Vorgang übernimmt.* 
**In Ausführung**: Die Operation wurde vom Gerät aufgenommen und wird ausgeführt.
* **Erfolgreich ausgeführt**: Der Vorgang wurde vom Gerät erfolgreich ausgeführt.
* **Fehlgeschlagen**: Der Vorgang konnte nicht vom Gerät ausgeführt werden.

Wenn Sie auf einen Vorgang klicken, werden die Parameter des Vorgangs angezeigt. Wenn Sie beispielsweise auf einen Konfigurationsvorgang klicken, wird die Konfiguration angezeigt, die an das Gerät gesendet wird. Das Klicken auf eine fehlgeschlagenen Vorgang zeigt den Grund des Fehlers an.

Die Schaltfläche "Alle" zeigt alle Vorgänge für ein Gerät an, unabhängig davon, ob sie bereits verarbeitet wurden. Das Gerät führt diese Operationen in aufsteigender Zeitreihenfolge auf. Operationen werden streng nach dieser Reihenfolge ausgeführt.

![Operations](/guides/users-guide/operations.png)

## <a name="bulk-operations"></a>Bulk Vorgänge

Zur einfacheren Handhabung von vielen Geräten bietet Cumulocity "Bulk-Vorgänge". Mit "Bulk-Vorgängen" können Sie nun einfach Vorgänge für jedes Gerät in einer Gruppe ausführen.

Dazu haben Sie folgende Möglichkeiten:

- Wählen Sie ein Gerät aus und navigieren Sie zum Register "Steuerung".
- Erstellen Sie einen Vorgang.
- Bewegen Sie den Mauszeiger über den Vorgang, den Sie ausführen möchten.
- Klicken Sie auf das Zahnrad- Klicken Sie auf "Ausführen für die ganze Gruppe".

![Execute bulk operations](/guides/users-guide/executebulkoperations.png)

> Weitere Informationen über Vorgänge finden Sie unter [Working with operations](#operation-monitoring).

Um den Status und den Fortschritt Ihrer Vorgänge anzuzeigen, klicken Sie einfach auf die gewünschte Gruppe und dann auf "Bulk-Vorgänge".

![Bulk operations tab](/guides/users-guide/bulkoperations.png)

Auch Bulk-Vorgänge können bearbeitet werden. Um einen Vorgang zu bearbeiten, den Mauszeiger über den Vorgang bewegen und dann auf die blaue Markierungsschaltfläche zu klicken. Ein neues Fenster wird eingeblendet. Die Werte "Startdatum" und "Verzögerung" können geändert werden. Um die Betriebsdaten zu ändern, klicken Sie auf "Details anzeigen". Wenn Sie fertig sind, klicken Sie auf "Reschedule", um Änderungen zu übernehmen oder klicken Sie auf "Abbrechen", um Änderungen zu verwerfen.

Um Operationen zu löschen, klicken Sie auf die Kreuztaste.

## <a name="events-all"></a>Fehlerbehebung bei Geräten

Ereignisse sind Low-Level-Nachrichten, die von Geräten gesendet werden, die normalerweise für die anwendungsspezifische Verarbeitung verwendet werden. Beispielsweise sendet ein Verkaufsgerät seine Echtzeitverkäufe in Form von Ereignissen. Wenn Sie ein Gerät auf einer genaueren Ebene untersuchen müssen, besuchen Sie die Registerkarte "Ereignisse". Wenn Sie auf einzelne Ereignisse klicken, erhalten Sie weitere Informationen zu den im Ereignis enthaltenen Daten. Ähnlich können Sie alle Ereignisse über alle Geräte sehen, indem Sie im Navigator "Events" auswählen.

Da Geräte größere Mengen an Ereignisdaten senden können, können Sie die hier gezeigten Daten nach Datum filtern. Sie können auch auf das Kontrollkästchen "Echtzeit" klicken, um Ereignisse zu sehen, die von den Geräten in Echtzeit kommen.

## <a name="software-repo"></a> Verwaltung von Firmware und Software

Cumulocity bietet einen zentralen Platz für die Erfassung von Referenz-Firmware und Software für Geräte im "Firmware-Repository" und dem "Software-Repository".

Um Firmware zu aktualisieren oder Softwarepakete auf einem bestimmten Gerät hinzuzufügen, müssen Sie drei Schritte durchführen:

1. Firmware und Software Files hochladen: [Administration application](/guides/users-guide/administration#files). (Dieser Schritt ist optional und nicht zwingend erforderlich, da der Hersteller die Firmware auch online anbieten kann.)

2. Wählen und speichern Sie die Dateien im "Firmware-Repository". Um ein neues Firmware-Image zum Repository hinzuzufügen, besuchen Sie das "Firmware-Repository" und klicken Sie auf die Schaltfläche "Firmware hinzufügen". Geben Sie dann den Namen der Firmware, die Version und die URL ein, von der das Gerät die Firmware herunterladen kann. Ähnliches verwenden Sie das "Software-Repository", um Referenz-Softwarepakete hinzuzufügen.

3. Installieren Sie die Firmware auf einem bestimmten Gerät. Zuerst navigieren Sie zu "Alle Geräte", wählen Sie das gewünschte Gerät, gehen Sie dann auf "Software" auf Gerätedetails und klicken Sie auf "Firmware installieren". Die Installation von Softwarepaketen ist sehr ähnlich. Sie folgen den gleichen Schritten wie zuvor erwähnt, aber Sie wählen stattdessen "Software installieren".(Mehr hierzu ["Software"](/guides/users-guide/device-management#software).)

> Sie müssen die Administrationsanwendung aufrufen, um Binärdateien in Cumulocity zu speichern. [Administration application](/guides/users-guide/administration#files).

Cumulocity bietet Benutzern die Möglichkeit, Firmware oder Softwareupdates für mehrere Geräte gleichzeitig auszuführen. Um dies zu tun:

- Führen Sie das Softwareupdate in einem einzigen Gerät aus, um zu testen, dass die neue Version wirklich funktioniert.
- Navigieren Sie zum entsprechenden Vorgang und wählen Sie "Ausführen für die gesamte Gruppe".
- Füllen Sie das Formular aus, um den Gesamtvorgang zu planen und klicken Sie auf die Schaltfläche "Erstellen".
- Der Vorgangsstatus kann unter der entsprechenden Gruppe im Bulk Vorgangs-Tab eingesehen werden.
> Weitere Informationen zu Bulk-Vorgänge finden Sie unter[Bulk-Vorgänge](#bulk-operations) 

## <a name="credentials"></a>Verwaltung von Geräte Zugangsdaten 

Im Menü "Geräte-Zugangsdaten" sind alle Anmeldeinformationen aufgelistet, die für die angeschlossenen Geräte generiert wurden. Jedes Gerät, das registriert wurde, erscheint hier mit der Namenskonvention "device_ <id>".

In den meisten Fällen sollten Sie nichts bearbeiten müssen. Ausnahmen sind:

* Sie haben ein Werksreset auf einem Gerät durchgeführt. Dabei verliert das Gerät häufig seine Zugangsdaten. Wenn das passiert, löschen Sie die Zugangsdaten für das Gerät auch in Cumulocity und fahren Sie dann mit dem normalen [Registrierungsprozess] (# Geräte-Registrierung) fort, um das Gerät neu zu registrieren.
* Wenn Sie ein Gerät vorübergehend ausschalten möchten, verwenden Sie die Schaltfläche "Deaktivieren" neben den Geräteanmeldeinformationen.
* Wenn Sie einem einzelnen Gerät mehrere Berechtigungen zuweisen möchten, klicken Sie auf die Gerätezugangsdaten und wählen Sie zusätzliche oder unterschiedliche Benutzergruppen für das Gerät aus.

![Bulk provisioning](/guides/users-guide/regdeutsch.png)

Die Geräte-Anmeldeinformationen können auch aus der CSV-Datei bereitgestellt werden. Dateien können über die mit einem Pfeil markierte Schaltfläche hochgeladen werden. Weitere Details zur Dateistruktur finden Sie unter [Bulk-registering devices] (# creds-upload) oben.

## <a name="simulator"></a>Simulatoren


Mit dem Cumulocity Simulator, können alle Aspekte von IoT Geräten simuliert werden:

* Einrichten eines simulierten Geräts oder eines Netzwerks von simulierten Geräten
* Legen Sie fest, welche Vorgänge das Gerät verarbeiten kann
* Erstellen Sie Arbeitsanweisungen basierend auf vordefinierten Arbeitsvorlagen oder benutzerdefinierten Schablonen und planen Sie Arbeitsschritte
* Erstellen Sie bis zu zehn Geräte eines definierten Typs
* Generieren Sie Meldungen für Messungen, Alarme, Ereignisse und Stammmdaten
* Simulationsprobleme als Alarme anzeigen

###Was ist ein Simulator?

Mit dem Simulator können Sie künstliche Geräte mit gleicher Funktionalität wie angeschlossene Hardware-Geräte erstellen.

Ein Simulator verwendet eine Wiedergabeliste, um Nachrichten zu simulieren, die das Gerät an die Cumulocity-Plattform sendet. Eine Wiedergabeliste ist eine Folge von Befehlen, die der Simulator nacheinander ausführt. Wenn der letzte Befehl erreicht ist, startet der Simulator erneut mit dem ersten.

Eine Anweisung kann entweder eine Nachricht senden (Messungen, Alarme, Ereignisse und Inventar) oder für eine bestimmte Zeit warten(Schlaf).

Eine Nachricht wird durch Auswählen einer Vorlage (zB Senden einer Temperatur) und Bereitstellen der Werte für diese Vorlage (23,0 Grad) definiert. Es stehen viele vordefinierte Meldevorlagen stehen zur Verfügung, zB "Messwert erstellen", "Ereignis senden", "Erstellen" und "Abbrechen" eines Alarms oder "Update Betriebszustand". Diese basieren auf statischen MQTT-Vorlagen. Darüber hinaus können benutzerdefinierte Nachrichtenvorlagen mit dem SmartREST-Template-Editor definiert werden.

###Einrichten eines Simulators

Um einen Simulator einzurichten geht man zur Navigation im Device Management und wählt Simulatoren und dem Abschnitt Geräte aus.

![New Simulator](/guides/users-guide/newsim.png)

Simulatoren können hinzugefügt werden, indem Sie auf "Neu" klicken, um eine Karte zu öffnen. Sie können nun wählen, ob Sie einen neuen Simulator definieren oder ein Preset auswählen möchten. Aus diesem Simulator wird der Name des Simulators und bis zu 10 Instanzen ermittelt.

<img src="/guides/users-guide/addsim.png" alt="Add Simulator" style="max-width: 60%">

###Presets

Die andere Möglichkeit ist, einen Simulator aus einem Preset zu erstellen. Derzeit stehen zwei verschiedene Presets zur Verfügung: Ein Preset "Temperaturmessung" und ein Preset "Positionsaktualisierung".

<img src="/guides/users-guide/addtempsim.png" alt="Add Add Temperature Preset" style="max-width: 60%">

<img src="/guides/users-guide/addpossim.png" alt="Add Position Preset" style="max-width: 60%">

![Edit Simulator](/guides/users-guide/editcloneremsim.png)

Die Anzahl der Instanzen eines Simulators ist auf 10 begrenzt. Vorhandene Simulatoren finden Sie auf dieser Seite. Simulatoren können durch Klicken auf das Zahnrad in der rechten oberen Ecke der Karte bearbeitet, geklont oder entfernt werden. Das öffnet ein Dropdown-Menü mit diesen Optionen.

###Hinzufügen von Anweisungen für den Simulator

Nach dem Einrichten eines Simulators können Sie Anweisungen hinzufügen, was Ihr Simulator tun soll. Anweisungen sind einzelne Arbeitsschritte, die zu einer Wiedergabeliste hinzugefügt werden. Der Simulator wird diese Liste durcharbeiten. Um ein Beispiel zu sehen, klicken Sie auf den Temperatursimulator.

![Add Instructions](/guides/users-guide/addinstructions.png)

Die folgende Übersicht erscheint:

![Add Instructions Step 2](/guides/users-guide/addinstructions2.png)

Innerhalb dieses Presets sind bereits Musteranleitungen enthalten. Sie können 2 Schritte identifizieren. "Messung erstellen" und "Sleep".

###Details der Anweisungen

**Fragmente:**

Die Messanweisung bezieht sich auf ein Fragment. Dieses ist das unten gezeigte Beispiel. Fragmente werden verwendet, um die Fähigkeiten eines verwalteten Objekts zu identifizieren. Mehr Informationen über Fragmente finden Sie hier:
[Sensor Library ](https://www.cumulocity.com/guides/reference/sensor-library/) 

![Add Instructions Step 3](/guides/users-guide/addinstructions3.png)

**Smart Rest Vorlagen**

Andere Optionen zeigen eine Auswahl von Smart Rest-Vorlagen. Die Smart Rest Vorlagen werden im Navigator unter dem Eintrag "Gerätetypen"> "SmartREST temSmart Rest Vorlagenplatten" erstellt. Diese Vorlagen sind eine Antwortvorlage, die eine Liste von Werten erzeugt, die eine Operation als Endergebnis beschreiben. Die unten aufgeführte Smart Rest-Vorlage erstellt einen Warnalarm mit Text zu einem bestimmten Zeitpunkt.
Spezifische Informationen und Muster einer Vielzahl von Vorlagen sind erhältlich bei der [MQTT Developer's Guide](https://www.cumulocity.com/guides/mqtt/introduction/). 

![Rest Template](/guides/users-guide/resttemplate.png)

![Add Instructions Step 4](/guides/users-guide/addinstructions4.png)

Die Anweisung "Sleep" erfordert einen Wert für die Dauer in Sekunden. Das Bedienfeld auf der rechten Bildschirmhälfte ändert sich entsprechend der Art der Anweisungen, die Sie wählen.

###Hinzufügen von Operationen zu einem Simulator

Direkt unter der Registerkarte "Anweisungen" finden Sie die unterstützten Operationen. In diesem Menü können Sie bestimmte Funktionen wie Konfiguration oder Software / Firmware-Update aktivieren oder deaktivieren.

![Operations Off](/guides/users-guide/supop1.png)

![Operations On](/guides/users-guide/supop2.png)

Einige Operationen sind aktiviert. Sie können auch benutzerdefinierte Vorgänge mithilfe der Schaltfläche zum Hinzufügen einer benutzerdefinierten Operation festlegen.

###Alarme (innerhalb der Simulator Funktion)

Der letzte Tab im Simulator menu sind Alarme.

![Simulator Alarm](/guides/users-guide/simalarm.png)

Dieses sind nicht etwa die Alarme, die durch die simulierten Geräte erzeugt werden, sondern diese Alarme beziehen sich auf den Simulator selber. Wenn der Simulator nicht richtig arbeitet, dann wird das hier sichtbar.
